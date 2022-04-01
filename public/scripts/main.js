function signBunny_ (strArr, cellLen) {
  let lines = strArr.map(str => {
    let rem = cellLen - str.length
    let lspace = ~~(rem / 2)
    let rspace = cellLen - (lspace + str.length)
    return "│" + " ".repeat(lspace+1) + str + " ".repeat(rspace+1) + "│\n"
  })
  let bunLen = 8
  let bunleft = " ".repeat(~~((cellLen - bunLen) / 2) -1)
  if (cellLen < 11) {
    return "minimum bunny width is 11"
  } else { return `
┌${"─".repeat(cellLen+2)}┐
│${" ".repeat(cellLen+2)}│
${lines.join("")}│${" ".repeat(cellLen+2)}│
└${"─".repeat(cellLen/2)}┬┬${"─".repeat(cellLen/2)}─┘
${bunleft}(\\__/)││
${bunleft}(•ㅅ•)││
${bunleft}/ 　  づ
`}
}

function signBunny (str) {
  let cellLen = 15
  return signBunny_(wordWrap(str.trim(), cellLen), cellLen)
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

function wordWrap (text, maxLen) { 
  let wrapRegex = new RegExp(`(?![^\\n]{1,${maxLen}}$)([^\\n]{1,${maxLen}})\\s`, 'g')
  let lenRegex = new RegExp(`.{0,${maxLen}}`, 'g')
  return text.split(wrapRegex).flatMap(x => x.match(lenRegex)).filter(x => x !== "")
}

