$(document).ready(function(){

  // BERLIN
  var feed_berlinstreetart = new Instafeed({
      get: 'tagged',
      tagName: 'berlinstreetart',
      resolution: 'low_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d',
      target: 'feed_berlinstreetart'
  });

  var feed_streetartberlin = new Instafeed({
      get: 'tagged',
      tagName: 'streetartberlin',
      resolution: 'low_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d',
      target: 'feed_streetartberlin'
  });

  var feed_graffitiberlin = new Instafeed({
      get: 'tagged',
      tagName: 'graffitiberlin',
      resolution: 'low_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d',
      target: 'feed_graffitiberlin'
  });

  var feed_berlingraffiti = new Instafeed({
      get: 'tagged',
      tagName: 'berlingraffiti',
      resolution: 'low_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d',
      target: 'feed_berlingraffiti'
  });

  var feed_berlinwriters = new Instafeed({
      get: 'tagged',
      tagName: 'berlinwriters',
      resolution: 'low_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d',
      target: 'feed_berlinwriters'
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
      target: 'feed_munichstreetart'
  });

  var feed_streetartmunich = new Instafeed({
      get: 'tagged',
      tagName: 'streetartmunich',
      resolution: 'low_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d',
      target: 'feed_streetartmunich'
  });

  var feed_graffitimunich = new Instafeed({
      get: 'tagged',
      tagName: 'graffitimunich',
      resolution: 'low_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d',
      target: 'feed_graffitimunich'
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
      target: 'feed_barcelonastreetart'
  });

  var feed_streetartbarcelona = new Instafeed({
      get: 'tagged',
      tagName: 'streetartbarcelona',
      resolution: 'low_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d',
      target: 'feed_streetartbarcelona'
  });

  var feed_graffitibarcelona = new Instafeed({
      get: 'tagged',
      tagName: 'graffitibarcelona',
      resolution: 'low_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d',
      target: 'feed_graffitibarcelona'
  });

  var feed_barcelonagraffiti = new Instafeed({
      get: 'tagged',
      tagName: 'barcelonagraffiti',
      resolution: 'low_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d',
      target: 'feed_barcelonagraffiti'
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
      target: 'feed_parisstreetart'
  });

  var feed_streetartparis = new Instafeed({
      get: 'tagged',
      tagName: 'streetartparis',
      resolution: 'low_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d',
      target: 'feed_streetartparis'
  });

  var feed_graffitiparis = new Instafeed({
      get: 'tagged',
      tagName: 'graffitiparis',
      resolution: 'low_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d',
      target: 'feed_graffitiparis'
  });

  var feed_parisgraffiti = new Instafeed({
      get: 'tagged',
      tagName: 'parisgraffiti',
      resolution: 'low_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d',
      target: 'feed_parisgraffiti'
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
      target: 'feed_saopaulostreetart'
  });

  var feed_graffitisaopaulo = new Instafeed({
      get: 'tagged',
      tagName: 'graffitisaopaulo',
      resolution: 'low_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d',
      target: 'feed_graffitisaopaulo'
  });

  var feed_saopaulograffiti = new Instafeed({
      get: 'tagged',
      tagName: 'saopaulograffiti',
      resolution: 'low_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d',
      target: 'feed_saopaulograffiti'
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
      target: 'feed_brasiliastreetart'
  });

  var feed_graffitibrasilia = new Instafeed({
      get: 'tagged',
      tagName: 'graffitibrasilia',
      resolution: 'low_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d',
      target: 'feed_graffitibrasilia'
  });

  var feed_mapagentil = new Instafeed({
      get: 'tagged',
      tagName: 'mapagentil',
      resolution: 'low_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d',
      target: 'feed_mapagentil'
  });

  feed_brasiliastreetart.run();
  feed_graffitibrasilia.run();
  feed_mapagentil.run();

});
