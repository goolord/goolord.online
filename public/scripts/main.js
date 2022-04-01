function signBunny_ (strArr, cellLen) {
  let lines = strArr.map(str => {
    let rem = cellLen - str.length
    let lspace = ~~(rem / 2)
    let rspace = cellLen - (lspace + str.length)
    return "│" + " ".repeat(lspace) + str + " ".repeat(rspace) + "│\n"
  })
  let bunLen = 8
  let bunleft = " ".repeat(Math.max(~~((cellLen - bunLen) / 2) -2, 0))
  let rem = cellLen - 2
  let lspace = ~~(rem / 2)
  let rspace = cellLen - (lspace + 2)
  if (cellLen < 11) {
    return "minimum bunny width is 11"
  } else { return `
┌${"─".repeat(cellLen)}┐
│${" ".repeat(cellLen)}│
${lines.join("")}│${" ".repeat(cellLen)}│
└${"─".repeat(lspace)}┬┬${"─".repeat(rspace-1)}─┘
${bunleft}(\\__/)││
${bunleft}(•ㅅ•)││
${bunleft}/ 　  づ
`}
}

function signBunny (str, cellLen) {
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

