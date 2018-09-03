$(document).ready(() => {

    const $container = $('#msg-container');
    const $msg = $('#msg');
    $container.hide();
    let paid = false;
    const $loadingMsg = $('h1#loading-msg');

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCI4gfl_qtz2wML8MUSQdg0ATPQPXxXB5I",
        authDomain: "onflo-c28e2.firebaseapp.com",
        databaseURL: "https://onflo-c28e2.firebaseio.com",
        projectId: "onflo-c28e2",
        storageBucket: "onflo-c28e2.appspot.com",
        messagingSenderId: "952694402859"
    };

    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((user) => {
        if (user && !paid) {
            let dealUID = window.location.hash.slice(2);
            firebase.database().ref('deals/' + dealUID).on('value', (snapshot) => {
                if (snapshot.val() && !paid) {
                    let deal = snapshot.val();
                    var handler = StripeCheckout.configure({
                        key: 'pk_live_LCkKum9lsW57QiO8sHq2a2am',
                        image: 'http://www.onflo.io/images/onflo-avatar.jpg',
                        locale: 'auto',
                        token: (token) => {
                            $.ajax({
                                method: 'post',
                                url: "../api/stripe.php",
                                data: { 
                                    token: token.id, 
                                    amount: (deal.amount * 100),
                                    desc: deal.title
                                }
                            }).done((data) => {
                                $container.css('display', 'block');
                                if (data) {
                                    paid = true;
                                    $msg.text('Success, we\'re getting started on your project!');
                                    deal.status = 'production';
                                    deal.started = new Date();
                                    stripeToken = token.id;
                                    firebase.database().ref('deals/' + dealUID).set(deal).then(() => {
                                        var timer = setTimeout(() => {
                                            window.location = 'http://onflo.io/dashboard'
                                        }, 3000);
                                    });
                                } else {
                                    var timer = setTimeout(() => {
                                        window.location = 'http://onflo.io/dashboard'
                                    }, 3000);
                                    $loadingMsg.text('We could not process your card...');
                                }
                            });
                        }
                    });
                    handler.open({
                        name: 'Onflo',
                        description: deal.title,
                        amount: (deal.amount * 100),
                        email: user.email
                    });
                } else {
                    console.log('ERROR: Deal was not found!');
                    $container.css('display', 'block');
                    var timer = setTimeout(() => {
                        window.location = 'http://onflo.io/dashboard'
                    }, 3000);
                    $loadingMsg.text('Could not open that issue, please check back later!');
                }
            });
        } else {
            console.log('ERROR: User was not found!');
            $container.css('display', 'block');
            $loadingMsg.text('This feature is for our dashboard users!');
            var timer = setTimeout(() => {
                window.location = 'http://onflo.io/dashboard'
            }, 3000);
        }
    });
});