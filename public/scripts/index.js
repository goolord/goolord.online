var playing = false;

document.addEventListener('click', function () {
  if (!playing) {
    autoPlay();
  }
});

ready (() => { 
  let enterCard = document.getElementById('enter-card')
  if (playing) {
    enterCard.style.display = 'none'
  } else {
    enterCard.addEventListener('click', () => {
      enterCard.style.display = 'none'
    })
  }
});

