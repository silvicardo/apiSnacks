console.log('welcome 2019');

// RIMUOVERE I COMMENTI DALLO SNACK CHE SI VUOLE TESTARE
$(document).ready(function () {

  /*
  API SNACK 1
  Creare un blocco html che conterrà numeri dispari e un altro contenente che
  conterrà i numeri pari. Ad ogni click su un bottone chiedere all’API un numero,
  se è dispari metterlo nel blocco dispari, e se è pari in quello pari.
  */

  $('#btnSnack1').click(function () {

    var numero = parseInt($('#inputNumerico').val());

    $('#inputNumerico').val('');

    var isEven = (numero % 2 === 0);

    (isEven === true) ? $('.numeriPari').append(numero + ', ') : $('.numeriDispari').append(numero + ', ');

  });

  /*
  API SNACK 2
  Creare un array contenente la lista di 10 invitati ad una festa, chiedendo
  all’API 10 nomi random per popolare l’array.
  Una volta generata questa lista chiedere all’utente di dire il proprio nome. Se è
  uno degli invitati ritornare un messaggio di benvenuto, altrimenti di accesso
  negato.
  */

  /*
  var invitati = [];
  console.log('Hey, accepted guests to the party are: ');
  for (var i = 0; i < 10; i++) {
    $.ajax({
      url: 'https://www.boolean.careers/api/random/mail',
      method: 'GET',
      success: function (apiData) {

        var mail = apiData.response;
        //replace(/[0-9]/g, '') -> Rimuove tutti i numeri da una stringa
        var name = mail.split('@')[0].replace('.', ' ').replace(/[0-9]/g, '');
        console.log(name);
        invitati.push(name);

        if (invitati.length === 10) {

          var tuoNome = prompt('Il tuo nome per entrare.');

          console.log(invitati.includes(tuoNome) ? 'Puoi entrare' : 'Spiacente, sarà per la prossima');
        }
      },
      fail: function (error) {
        console.log('darrn');
      }
    })
  }
  */

  /*
  API SNACK 3
  Dare la possibilità all’utente di inserire un messaggio attraverso un input,
  aggiungendo quel messaggio ad un thread (tipo whatsapp).
  Dopo che il messaggio è stato aggiunto chiedere all’API una frase random
  (attraverso random/sentence) aggiungendo anch’essa al thread,
  differenziando i messaggi utente da quelli del computer.
  */
  /*
  var messaggioUtente = prompt('Scrivi un messaggio');

  $.ajax({
    url: 'https://www.boolean.careers/api/random/sentence',
    method: 'GET',
    success: function (apiData) {
      console.log('You said: ' + messaggioUtente);
      console.log('API said: ' + apiData.response);
    },
    fail: function (error) {
      console.log(error);
    }
  });
  */
  /*
  API Snack 4
  Chiedere all’utente quanti elementi vuole includere nell’array.
  Generare attraverso l’API un array contenente N numeri compresi tra 1 e 100.
  Stampare a schermo la somma dei numeri generati.
  (www.boolean.careers/api/array/integers, attenzione, serve query string)
  */

  //var numeri = [];
  //DA RIVEDERE ENDPOINT
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

  function generaNumeroCasualeTra(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  /*
  API Snack 5
  Creare una griglia 8X8 con jquery.
  Ogni volta che clicco su un quadrato chiedo all’API un valore boolean random.
  Se è vero colorerò il quadrato di verde altrimenti di rosso.
  */

  /*
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
  */

  /*
  API Snack 6
  Creare e stampare a schermo una frase contenente N parole (N in base a
  quante ne vuole generare l’utente attraverso un input), grazie all’utilizzo
  dell’API e dell’URL random/word
  */

  /*
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
          var frase = parole.join(' ');
          //ALTERNATIVA CON REDUCE
          // var frase = parole.reduce(function (acc, word, index) {
          //   return acc += (word + ' ');
          // }, '');
          console.log(frase);
        }
      },

      fail: function (error) {
        console.log(error);
      },
    });
  }
  */
});
