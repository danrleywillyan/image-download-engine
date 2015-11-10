$(document).ready(function(){

  // BERLIN
  var feed_berlinstreetart = new Instafeed({
      get: 'tagged',
      tagName: 'berlinstreetart',
      resolution: 'standard_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d'
  });

  var feed_streetartberlin = new Instafeed({
      get: 'tagged',
      tagName: 'streetartberlin',
      resolution: 'standard_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d'
  });

  var feed_graffitiberlin = new Instafeed({
      get: 'tagged',
      tagName: 'graffitiberlin',
      resolution: 'standard_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d'
  });

  var feed_berlingraffiti = new Instafeed({
      get: 'tagged',
      tagName: 'berlingraffiti',
      resolution: 'standard_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d'
  });

  var feed_berlinwriters = new Instafeed({
      get: 'tagged',
      tagName: 'berlinwriters',
      resolution: 'standard_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d'
  });


  // if you exchange the following lines, you can seen the result acessing the
  // index.html in your browser.

  feed_berlinstreetart.run();
  // feed_streetartberlin.run();
  // feed_graffitiberlin.run();
  // feed_berlingraffiti.run();
  // feed_berlinwriters.run();

  // MUNICH
  var feed_munichstreetart = new Instafeed({
      get: 'tagged',
      tagName: 'munichstreetart',
      resolution: 'standard_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d'
  });

  var feed_streetartmunich = new Instafeed({
      get: 'tagged',
      tagName: 'streetartmunich',
      resolution: 'standard_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d'
  });

  var feed_graffitimunich = new Instafeed({
      get: 'tagged',
      tagName: 'graffitimunich',
      resolution: 'standard_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d'
  });

  // feed_munichstreetart.run();
  // feed_streetartmunich.run();
  // feed_graffitimunich.run();

  // BARCELONA
  var feed_barcelonastreetart = new Instafeed({
      get: 'tagged',
      tagName: 'barcelonastreetart',
      resolution: 'standard_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d'
  });

  var feed_streetartbarcelona = new Instafeed({
      get: 'tagged',
      tagName: 'streetartbarcelona',
      resolution: 'standard_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d'
  });

  var feed_graffitibarcelona = new Instafeed({
      get: 'tagged',
      tagName: 'graffitibarcelona',
      resolution: 'standard_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d'
  });

  var feed_barcelonagraffiti = new Instafeed({
      get: 'tagged',
      tagName: 'barcelonagraffiti',
      resolution: 'standard_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d'
  });

  // feed_barcelonastreetart.run();
  // feed_streetartbarcelona.run();
  // feed_graffitibarcelona.run();
  // feed_barcelonagraffiti.run();

  // PARIS
  var feed_parisstreetart = new Instafeed({
      get: 'tagged',
      tagName: 'parisstreetart',
      resolution: 'standard_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d'
  });

  var feed_streetartparis = new Instafeed({
      get: 'tagged',
      tagName: 'streetartparis',
      resolution: 'standard_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d'
  });

  var feed_graffitiparis = new Instafeed({
      get: 'tagged',
      tagName: 'graffitiparis',
      resolution: 'standard_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d'
  });

  var feed_parisgraffiti = new Instafeed({
      get: 'tagged',
      tagName: 'parisgraffiti',
      resolution: 'standard_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d'
  });

  // feed_parisstreetart.run();
  // feed_streetartparis.run();
  // feed_graffitiparis.run();
  // feed_parisgraffiti.run();

  // SAO PAULO
  var feed_saopaulostreetart = new Instafeed({
      get: 'tagged',
      tagName: 'saopaulostreetart',
      resolution: 'standard_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d'
  });

  var feed_graffitisaopaulo = new Instafeed({
      get: 'tagged',
      tagName: 'graffitisaopaulo',
      resolution: 'standard_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d'
  });

  var feed_saopaulograffiti = new Instafeed({
      get: 'tagged',
      tagName: 'saopaulograffiti',
      resolution: 'standard_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d'
  });

  // feed_saopaulostreetart.run();
  // feed_graffitisaopaulo.run();
  // feed_saopaulograffiti.run();

  // BRASILIA
  var feed_brasiliastreetart = new Instafeed({
      get: 'tagged',
      tagName: 'brasiliastreetart',
      resolution: 'standard_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d'
  });

  var feed_graffitibrasilia = new Instafeed({
      get: 'tagged',
      tagName: 'graffitibrasilia',
      resolution: 'standard_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d'
  });

  var feed_mapagentil = new Instafeed({
      get: 'tagged',
      tagName: 'mapagentil',
      resolution: 'standard_resolution', //low_resolution or thumbnail
      sortBy: 'most-recent',
      limit: 60,
      clientId: 'e76947f6b07a4452a9f2f9fe6f5f8d6d'
  });

  // feed_brasiliastreetart.run();
  // feed_graffitibrasilia.run();
  // feed_mapagentil.run();

});
