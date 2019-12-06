function signBunny_ (strArr) {
  let cell = 11
  let lines = strArr.map(str => {
    let rem = cell - str.length
    let lspace = ~~(rem / 2)
    let rspace = 11 - (lspace + str.length)
    return "| " + " ".repeat(lspace) + str + " ".repeat(rspace) + " |\n"
  })
return "\
|‾‾‾‾‾‾‾‾‾‾‾‾‾|\n\
|             |\n\
" + lines.join("") + "\
|             |\n\
|_____________|\n\
(\\__/)||\n\
(•ㅅ•)||\n\
/ 　 づ\
"
}

function signBunny (str) {
  return signBunny_(wordWrap(str.trim(), 11))
}

function ready(f) {
  document.addEventListener("DOMContentLoaded", f)
}

function autoPlay() {
  let startPlayPromise = document.querySelector('audio').play();
  if (startPlayPromise !== undefined) {
    startPlayPromise.catch(error => {
      // playback has not begun
    }).then(() => {
      playing = true;
      // playback has begun
      console.log(signBunny("hey bro"));
    });
  }
}

function wordWrap (s, w) { 
  return s.split(
    new RegExp(`(?![^\\n]{1,${w}}$)([^\\n]{1,${w}})\\s`, 'g')
  ).filter(x => x !== "")
}
