const h1 = document.querySelector(".cool-header");

const h1Phreases = ["name is nico.", "Full Stack Developer"];

let i = 0;

let j = 0;

let curremtPhrase = [];

let isDeleting = false;

function loop() {
  h1.innerHTML = curremtPhrase.join("");
  if (i < h1Phreases.length) {
    if (!isDeleting && j <= h1Phreases[i].length) {
      curremtPhrase.push(h1Phreases[i][j]);
      j++;
    }

    if (isDeleting && j <= h1Phreases[i].length) {
      curremtPhrase.pop(h1Phreases[i][j]);
      j--;
    }

    if (j == h1Phreases[i].length) {
      isDeleting = true;
    }
  }
  setTimeout(loop, 500);
}

loop();
