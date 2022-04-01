ready(() => {
  let signBunnyDiv = document.getElementById('signBunny')
  let signText = document.getElementById('signText')
  let signWidth = document.getElementById('signWidth')
  function changeSign() {
    signBunnyDiv.innerHTML = signBunny(signText.value,signWidth.value).replace(/(\r\n|\n|\r)/gm, "<br>")
  }
  changeSign()
  signText.oninput = changeSign
  signWidth.oninput = changeSign
})
