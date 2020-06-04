function InputHandler(index) {
  var options = document.getElementsByClassName("option")
  for (var i = 0; i < options.length; i++) {
    options[i].style.visibility = "hidden"
  }
  options[index].style.visibility = "visible"
}

export default InputHandler
