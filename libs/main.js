$(document).ready(function(){

  // BERLIN
  var feed_berlinstreetart = new Instafeed({
      get: 'tagged',
      tagName: 'berlinstreetart',
      resolution: 'low_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d',
      target: 'feed_berlinstreetart',
      template: '<img src="{{image}}" />',
      success: function (data_retrieved) {
        for(var n = 0; n < data_retrieved.data.length; n++){
          saveFile(data_retrieved.data[n].images.standard_resolution.url)
        }
      }
  });

  var feed_streetartberlin = new Instafeed({
      get: 'tagged',
      tagName: 'streetartberlin',
      resolution: 'low_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d',
      target: 'feed_streetartberlin',
      template: '<img src="{{image}}" />',
      success: function (data_retrieved) {
        for(var n = 0; n < data_retrieved.data.length; n++){
          saveFile(data_retrieved.data[n].images.standard_resolution.url)
        }
      }
  });

  var feed_graffitiberlin = new Instafeed({
      get: 'tagged',
      tagName: 'graffitiberlin',
      resolution: 'low_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d',
      target: 'feed_graffitiberlin',
      template: '<img src="{{image}}" />',
      success: function (data_retrieved) {
        for(var n = 0; n < data_retrieved.data.length; n++){
          saveFile(data_retrieved.data[n].images.standard_resolution.url)
        }
      }
  });

  var feed_berlingraffiti = new Instafeed({
      get: 'tagged',
      tagName: 'berlingraffiti',
      resolution: 'low_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d',
      target: 'feed_berlingraffiti',
      template: '<img src="{{image}}" />',
      success: function (data_retrieved) {
        for(var n = 0; n < data_retrieved.data.length; n++){
          saveFile(data_retrieved.data[n].images.standard_resolution.url)
        }
      }
  });

  var feed_berlinwriters = new Instafeed({
      get: 'tagged',
      tagName: 'berlinwriters',
      resolution: 'low_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d',
      target: 'feed_berlinwriters',
      template: '<img src="{{image}}" />',
      success: function (data_retrieved) {
        for(var n = 0; n < data_retrieved.data.length; n++){
          saveFile(data_retrieved.data[n].images.standard_resolution.url)
        }
      }
  });

  feed_berlinstreetart.run();
  feed_streetartberlin.run();
  feed_graffitiberlin.run();
  feed_berlingraffiti.run();
  feed_berlinwriters.run();

  // MUNICH
  var feed_munichstreetart = new Instafeed({
      get: 'tagged',
      tagName: 'munichstreetart',
      resolution: 'low_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d',
      target: 'feed_munichstreetart',
      template: '<img src="{{image}}" />',
      success: function (data_retrieved) {
        for(var n = 0; n < data_retrieved.data.length; n++){
          saveFile(data_retrieved.data[n].images.standard_resolution.url)
        }
      }
  });

  var feed_streetartmunich = new Instafeed({
      get: 'tagged',
      tagName: 'streetartmunich',
      resolution: 'low_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d',
      target: 'feed_streetartmunich',
      template: '<img src="{{image}}" />',
      success: function (data_retrieved) {
        for(var n = 0; n < data_retrieved.data.length; n++){
          saveFile(data_retrieved.data[n].images.standard_resolution.url)
        }
      }
  });

  var feed_graffitimunich = new Instafeed({
      get: 'tagged',
      tagName: 'graffitimunich',
      resolution: 'low_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d',
      target: 'feed_graffitimunich',
      template: '<img src="{{image}}" />',
      success: function (data_retrieved) {
        for(var n = 0; n < data_retrieved.data.length; n++){
          saveFile(data_retrieved.data[n].images.standard_resolution.url)
        }
      }
  });

  feed_munichstreetart.run();
  feed_streetartmunich.run();
  feed_graffitimunich.run();

  // BARCELONA
  var feed_barcelonastreetart = new Instafeed({
      get: 'tagged',
      tagName: 'barcelonastreetart',
      resolution: 'low_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d',
      target: 'feed_barcelonastreetart',
      template: '<img src="{{image}}" />',
      success: function (data_retrieved) {
        for(var n = 0; n < data_retrieved.data.length; n++){
          saveFile(data_retrieved.data[n].images.standard_resolution.url)
        }
      }
  });

  var feed_streetartbarcelona = new Instafeed({
      get: 'tagged',
      tagName: 'streetartbarcelona',
      resolution: 'low_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d',
      target: 'feed_streetartbarcelona',
      template: '<img src="{{image}}" />',
      success: function (data_retrieved) {
        for(var n = 0; n < data_retrieved.data.length; n++){
          saveFile(data_retrieved.data[n].images.standard_resolution.url)
        }
      }
  });

  var feed_graffitibarcelona = new Instafeed({
      get: 'tagged',
      tagName: 'graffitibarcelona',
      resolution: 'low_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d',
      target: 'feed_graffitibarcelona',
      template: '<img src="{{image}}" />',
      success: function (data_retrieved) {
        for(var n = 0; n < data_retrieved.data.length; n++){
          saveFile(data_retrieved.data[n].images.standard_resolution.url)
        }
      }
  });

  var feed_barcelonagraffiti = new Instafeed({
      get: 'tagged',
      tagName: 'barcelonagraffiti',
      resolution: 'low_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d',
      target: 'feed_barcelonagraffiti',
      template: '<img src="{{image}}" />',
      success: function (data_retrieved) {
        for(var n = 0; n < data_retrieved.data.length; n++){
          saveFile(data_retrieved.data[n].images.standard_resolution.url)
        }
      }
  });

  feed_barcelonastreetart.run();
  feed_streetartbarcelona.run();
  feed_graffitibarcelona.run();
  feed_barcelonagraffiti.run();

  // PARIS
  var feed_parisstreetart = new Instafeed({
      get: 'tagged',
      tagName: 'parisstreetart',
      resolution: 'low_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d',
      target: 'feed_parisstreetart',
      template: '<img src="{{image}}" />',
      success: function (data_retrieved) {
        for(var n = 0; n < data_retrieved.data.length; n++){
          saveFile(data_retrieved.data[n].images.standard_resolution.url)
        }
      }
  });

  var feed_streetartparis = new Instafeed({
      get: 'tagged',
      tagName: 'streetartparis',
      resolution: 'low_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d',
      target: 'feed_streetartparis',
      template: '<img src="{{image}}" />',
      success: function (data_retrieved) {
        for(var n = 0; n < data_retrieved.data.length; n++){
          saveFile(data_retrieved.data[n].images.standard_resolution.url)
        }
      }
  });

  var feed_graffitiparis = new Instafeed({
      get: 'tagged',
      tagName: 'graffitiparis',
      resolution: 'low_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d',
      target: 'feed_graffitiparis',
      template: '<img src="{{image}}" />',
      success: function (data_retrieved) {
        for(var n = 0; n < data_retrieved.data.length; n++){
          saveFile(data_retrieved.data[n].images.standard_resolution.url)
        }
      }
  });

  var feed_parisgraffiti = new Instafeed({
      get: 'tagged',
      tagName: 'parisgraffiti',
      resolution: 'low_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d',
      target: 'feed_parisgraffiti',
      template: '<img src="{{image}}" />',
      success: function (data_retrieved) {
        for(var n = 0; n < data_retrieved.data.length; n++){
          saveFile(data_retrieved.data[n].images.standard_resolution.url)
        }
      }
  });

  feed_parisstreetart.run();
  feed_streetartparis.run();
  feed_graffitiparis.run();
  feed_parisgraffiti.run();

  // SAO PAULO
  var feed_saopaulostreetart = new Instafeed({
      get: 'tagged',
      tagName: 'saopaulostreetart',
      resolution: 'low_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d',
      target: 'feed_saopaulostreetart',
      template: '<img src="{{image}}" />',
      success: function (data_retrieved) {
        for(var n = 0; n < data_retrieved.data.length; n++){
          saveFile(data_retrieved.data[n].images.standard_resolution.url)
        }
      }
  });

  var feed_graffitisaopaulo = new Instafeed({
      get: 'tagged',
      tagName: 'graffitisaopaulo',
      resolution: 'low_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d',
      target: 'feed_graffitisaopaulo',
      template: '<img src="{{image}}" />',
      success: function (data_retrieved) {
        for(var n = 0; n < data_retrieved.data.length; n++){
          saveFile(data_retrieved.data[n].images.standard_resolution.url)
        }
      }
  });

  var feed_saopaulograffiti = new Instafeed({
      get: 'tagged',
      tagName: 'saopaulograffiti',
      resolution: 'low_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d',
      target: 'feed_saopaulograffiti',
      template: '<img src="{{image}}" />',
      success: function (data_retrieved) {
        for(var n = 0; n < data_retrieved.data.length; n++){
          saveFile(data_retrieved.data[n].images.standard_resolution.url)
        }
      }
  });

  feed_saopaulostreetart.run();
  feed_graffitisaopaulo.run();
  feed_saopaulograffiti.run();

  // BRASILIA
  var feed_brasiliastreetart = new Instafeed({
      get: 'tagged',
      tagName: 'brasiliastreetart',
      resolution: 'low_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d',
      target: 'feed_brasiliastreetart',
      template: '<img src="{{image}}" />',
      success: function (data_retrieved) {
        for(var n = 0; n < data_retrieved.data.length; n++){
          saveFile(data_retrieved.data[n].images.standard_resolution.url)
        }
      }
  });

  var feed_graffitibrasilia = new Instafeed({
      get: 'tagged',
      tagName: 'graffitibrasilia',
      resolution: 'low_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d',
      target: 'feed_graffitibrasilia',
      template: '<img src="{{image}}" />',
      success: function (data_retrieved) {
        for(var n = 0; n < data_retrieved.data.length; n++){
          saveFile(data_retrieved.data[n].images.standard_resolution.url)
        }
      }
  });

  var feed_mapagentil = new Instafeed({
      get: 'tagged',
      tagName: 'mapagentil',
      resolution: 'low_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d',
      target: 'feed_mapagentil',
      template: '<img src="{{image}}" />',
      success: function (data_retrieved) {
        for(var n = 0; n < data_retrieved.data.length; n++){
          saveFile(data_retrieved.data[n].images.standard_resolution.url)
        }
      }
  });

  feed_brasiliastreetart.run();
  feed_graffitibrasilia.run();
  feed_mapagentil.run();

});

// Download a file form a url.
function saveFile(url) {
  // Get file name from url.
  var filename = url.substring(url.lastIndexOf("/") + 1).split("?")[0];
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'blob';
  xhr.onload = function() {
    var a = document.createElement('a');
    a.href = window.URL.createObjectURL(xhr.response); // xhr.response is a blob
    a.download = filename; // Set the file name.
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    delete a;
  };
  xhr.open('GET', url);
  xhr.send();
}
