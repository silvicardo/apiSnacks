console.log('welcome 2019');

/*
API Snack 4
Chiedere all’utente quanti elementi vuole includere nell’array.
Generare attraverso l’API un array contenente N numeri compresi tra 1 e 100.
Stampare a schermo la somma dei numeri generati.
(www.boolean.careers/api/array/integers, attenzione, serve query string)
*/

$(document).ready(function () {

  var numeri = [];
  //DA RIVEDER ENDPOINT
  /*  $.ajax({
      url: 'https://www.boolean.careers/api/array/integers',
      data: {
        min: 1,
        max: 100,
        nItems: 100,
      },
      method: 'GET',
      success: function (apiData) {
        console.log(apiData);
      },

      fail: function (error) {
        console.log(error);
      },
    });*/

});

function generaNumeroCasualeTra(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


/*
API Snack 5
Creare una griglia 8X8 con jquery.
Ogni volta che clicco su un quadrato chiedo all’API un valore boolean random.
Se è vero colorerò il quadrato di verde altrimenti di rosso.
*/

$(document).ready(function () {

  for (var i = 0; i < 64; i++) {
    var cloneQuadratino = $('.quadratino.template').clone();
    cloneQuadratino.removeClass('template');
    $('.griglia').append(cloneQuadratino);
  }

  $('.quadratino.daCliccare').click( function () {

    var quadratinoCliccato = $(this);

    if (quadratinoCliccato.hasClass('daCliccare')) {
      quadratinoCliccato.removeClass('daCliccare');
      $.ajax({
        url: 'https://www.boolean.careers/api/random/boolean',
        method: 'GET',
        success: function (apiData) {
          console.log(apiData);

          if (apiData.response === true) {
            quadratinoCliccato.addClass('true');
          }

        },

        fail: function (error) {
          console.log(error);
        },
      });
    }

  });

});

/*
API Snack 6
Creare e stampare a schermo una frase contenente N parole (N in base a
quante ne vuole generare l’utente attraverso un input), grazie all’utilizzo
dell’API e dell’URL random/word
*/

$(document).ready(function () {

  var numeroParole = parseInt(prompt('inserisci numero parole'));
  var parole = [];

  for (var i = 0; i < numeroParole; i++) {
    $.ajax({
      url: 'https://www.boolean.careers/api/random/word',
      method: 'GET',
      success: function (apiData) {
        console.log(apiData);
        parole.push(apiData.response);

        if (parole.length === numeroParole) {
          var frase = parole.reduce(function (acc, word, index) {
            return acc += (word + ' ');
          }, '');
          console.log(frase);
        }
      },

      fail: function (error) {
        console.log(error);
      },
    });
  }

});
