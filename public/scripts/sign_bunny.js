ready(() => {
  let signBunnyDiv = document.getElementById('signBunny')
  let signText = document.getElementById('signText')
  let signWidth = document.getElementById('signWidth')
  let signWidthVal = document.getElementById('signWidthVal')
  function changeSign() {
    signWidthVal.innerHTML = signWidth.value.toString()
    signBunnyDiv.innerHTML = signBunny(signText.value,signWidth.value).replace(/(\r\n|\n|\r)/gm, "<br>")
  }
  changeSign()
  signText.oninput = changeSign
  signWidth.oninput = changeSign
})
