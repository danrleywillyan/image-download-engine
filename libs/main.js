$(document).ready(function(){

  var feed = new Instafeed({
      get: 'tagged',
      tagName: 'berlinstreetart',
      resolution: 'standard_resolution',
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d'
  });

  feed.run();

});
