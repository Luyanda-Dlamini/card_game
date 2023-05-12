Package.describe({
  name: 'luyanda:deck-of-cards',
  version: '0.1.4',
  // Brief, one-line summary of the package.
  summary: 'HTML5 Deck of Cards',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: null
});

//Apis for card game
Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('stylus');

  api.addFiles('dist/deck.js', 'client', { bare: true });
  api.addFiles('css/card.styl', 'client');

  // Add card faces and backs
  api.addAssets('css/faces/back.png', 'client');

  // 52 deck cards
  for( var i = 0; i < 4; i++ ) {
    for( var j = 1; j <= 13; j++ ) {
      api.addAssets('css/faces/' + i + '_' + j + '.svg', 'client');
    }
  }

  // 3 jokers
  for( var k = 1; k <= 3; k++ ) {
    api.addAssets('css/faces/4_' + k + '.svg', 'client');
  }

  api.export(['Deck'], ['client']);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');

  api.use('luyanda:deck-of-cards');
});
