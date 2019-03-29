var cop = document.querySelector(".copi")
cop.addEventListener('click', copyer);
cop.classList.remove('none');
function copyer() {
  var copyText = document.getElementById("listInput");
  copyText.select();
  document.execCommand("copy");
  console.log('we copied the list')
}
