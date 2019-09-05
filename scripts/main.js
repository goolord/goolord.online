document.addEventListener('DOMContentLoaded', function () {
  let startPlayPromise = document.querySelector('audio').play();
  if (startPlayPromise !== undefined) {
    startPlayPromise.catch(error => {
      // playback has not begun
    }).then(() => {
      // playback has begun
    });
  }
});
