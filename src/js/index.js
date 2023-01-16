let titolo = 'Digita la tua data di nascita e ti dirò di che segno zodiacale sei';
let risultato = document.querySelector('#risultato');
let img = ['/src/img/ariete.png','/src/img/toro.png','/src/img/gemelli.png','/src/img/cancro.png','/src/img/leone.png','/src/img/vergine.png','/src/img/bilancia.png','/src/img/scorpione.png',
            '/src/img/sagittario.png','/src/img/capricorno.png','/src/img/acquario.png','/src/img/pesci.png'];
let submit = document.querySelector('#btn');
let giorno = document.querySelector('form').giorno;
let mese = document.querySelector('form').mese;
let anno = document.querySelector('form').anno;
let result = document.querySelector('#result');

console.log(img[11]);

submit.addEventListener('click', function(){

    let mm = mese.value;
    let gg = giorno.value;


    if (mm == 3 && gg >= 21 || mm == 4 && gg <= 19) {
        risultato.innerHTML = "Ariete";
        result.innerHTML = '<img id="img" src="' + img[0] + '"/>';
      } else if (mm == 4 && gg >= 20 || mm == 5 && gg <= 20) {
        risultato.innerHTML = "Toro";
        result.innerHTML = '<img id="img" src="' + img[1] + '"/>';
      } else if (mm == 5 && gg >= 21 || mm == 6 && gg <= 20) {
        risultato.innerHTML = "Gemelli";
        result.innerHTML = '<img id="img" src="' + img[2] + '"/>';
      } else if (mm == 6 && gg >= 21 || mm == 7 && gg <= 22) {
        risultato.innerHTML = "Cancro";
        result.innerHTML = '<img id="img" src="' + img[3] + '"/>';
      } else if (mm == 7 && gg >= 23 || mm == 8 && gg <= 22) {
        risultato.innerHTML = "Leone";
        result.innerHTML = '<img id="img" src="' + img[4] + '"/>';
      } else if (mm == 8 && gg >= 23 || mm == 9 && gg <= 22) {
        risultato.innerHTML = "Vergine";
        result.innerHTML = '<img id="img" src="' + img[5] + '"/>';
      } else if (mm == 9 && gg >= 23 || mm == 10 && gg <= 22) {
        risultato.innerHTML = "Bilancia";
        result.innerHTML = '<img id="img" src="' + img[6] + '"/>';
      } else if (mm == 10 && gg >= 23 || mm == 11 && gg <= 21) {
        risultato.innerHTML = "Scorpione";
        result.innerHTML = '<img id="img" src="' + img[7] + '"/>';
      } else if (mm == 11 && gg >= 22 || mm == 12 && gg <= 21) {
        risultato.innerHTML = "Sagittario";
        result.innerHTML = '<img id="img" src="' + img[8] + '"/>';
      } else if (mm == 12 && gg >= 22 || mm == 1 && gg <= 19) {
        risultato.innerHTML = "Capricorno";
        result.innerHTML = '<img id="img" src="' + img[9] + '"/>';
      } else if (mm == 1 && gg >= 20 || mm == 2 && gg <= 18) {
        risultato.innerHTML = "Acquario";
        result.innerHTML = '<img id="img" src="' + img[10] + '"/>';
      } else if (mm == 2 && gg >= 19 || mm == 3 && gg <= 20) {
        risultato.innerHTML = "Pesci";
        result.innerHTML = '<img id="img" src="' + img[11] + '"/>';
      }

});
