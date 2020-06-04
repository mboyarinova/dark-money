function InputHandler(firstId, secondId, thirdId) {
  document.getElementById(secondId).style.visibility = "hidden"
  document.getElementById(thirdId).style.visibility = "hidden"
  document.getElementById(firstId).style.visibility = "visible"
}

export default InputHandler
