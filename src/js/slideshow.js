let counter = 1;

setInterval(() => {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 9) {
    counter = 1;
    }
  }, 4000); // cambia cada 4 segundos