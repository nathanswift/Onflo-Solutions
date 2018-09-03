// create scope
$(function() {
  // build vars
  const validHashes = ['#/restaurant'];
  let hash = window.location.hash;

  function buildPromoPage() {
    // needed $ elem
    const $breadcrum = $('span#promo-breadcrum'),
      $headerImage = $('div#promo-header-image'),
      $headerTitle = $('h2#promo-header-title'),
      $featuresContainer = $('ul#features-container'),
      $contentTitle = $('h3#promo-content-title'),
      $contentLargeBody = $('p#promo-content-body-large'),
      $contentBody = $('p#promo-content-body');
    // json url for get request
    let jsonURL = '../../content/' + hash.substr(2) + '.json';
    // get json
    $.getJSON(jsonURL, function(data) {
      // display info
      $breadcrum.text(data.breadcrum);
      $headerImage.css('background-image', 'url(' + data.headerImage + ')');
      $headerTitle.text(data.headerTitle);
      $contentTitle.text(data.contentTitle);
      $contentLargeBody.text(data.contentBodyLarge);
      $contentBody.text(data.contentBody);
      let featureHTML = '';
      $.each(data.features, function(x, feature) {
        featureHTML += '<li><div class="history-icon"><i class="ion ion-' + feature.icon + '"></i></div>' +
          '<div class="history-image">';
        if (feature.photo) featureHTML += '<img src="' + feature.photo + '" alt="">';
        if (feature.video) featureHTML += '<div class="video-container embed-responsive embed-responsive-16by9"><iframe width="560" height="315" src="https://www.youtube.com/embed/' + feature.video + '?rel=0&controls=0&showinfo=0" frameborder="0" allowfullscreen></iframe></div>';
        featureHTML += '</div><div class="history-box"><h6>' + feature.title + '</h6><p>' + feature.body + '</p></div></li>';
      });
      $featuresContainer.empty().append(featureHTML);
    }).fail(function() {
      // go to portfolio page is json fails
      window.location.replace("../portfolio");
    });
  }
  // check to see if hash is valid
  if (window.location.hash && $.inArray(hash, validHashes) !== -1) buildPromoPage();
  else window.location.replace("../portfolio");
});
// listen to page changes
$(window).on('hashchange', function() {
  window.location.replace("../promo" + window.location.hash);
});
