ready(() => {
  let signBunnyDiv = document.getElementById('signBunny')
  let signText = document.getElementById('signText')
  function changeSign() {
    signBunnyDiv.innerHTML = signBunny(signText.value).replace(/(\r\n|\n|\r)/gm, "<br>")
  }
  changeSign()
  signText.oninput = changeSign
})
