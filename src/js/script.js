function featureCheck(feature, where, type) {
   return feature in where
       && type ?
           typeof where[feature] === type
           : true
}


function enableScript() {
   return featureCheck('classList', document.body)
       && featureCheck('Array', Array.prototype, 'function')
       && featureCheck('querySelectorAll', document.body, 'function')
       && featureCheck('getElementById', document.body)
}

if (enableScript()) {

var fieldset = Array.from(document.querySelectorAll("fieldset"));
var listo = document.querySelector(".results");
var formt = document.querySelector("form");
var cop = document.querySelector(".copi");
var rem = document.querySelector(".remover");
var subby = document.querySelector(".subm");
var mail = document.querySelector('.linkTo');

for (var i = 0; i < fieldset.length; i++) {
        var fieldinputs = fieldset[i].querySelectorAll("input[type='checkbox']");
        for (var b = 0; b < fieldinputs.length; b++) {
            fieldinputs[b].addEventListener("click", clickedItem)
        }
    }

rem.addEventListener('click', emptied);
cop.addEventListener('click', copyer);

subby.classList.add('none');
listo.classList.remove('none');


function copyer() {
  var copyText = document.getElementById("listInput");
  copyText.select();
  document.execCommand("copy");
}

function emptied(){
var texter = document.getElementById("listInput");
texter.innerHTML = '';
formt.reset();
mail.href = "mailto:tostilovver_420@gmail.com?&amp;subject=Mijn%20tosti%20boodschappenlijst%20&amp;body=You'll%20need%20these%20items%20to%20make%20your'e%20tostie:"
}

function clickedItem(){
var items = this.value
var holder = document.querySelector('.boodscappenlist');
if(this.checked){
  var newLink = '∙'+items+'%20%0D%0A'
  mail.href += newLink
var elemet =
`
${items}
`
holder.insertAdjacentHTML('beforeend', elemet)
// Feature detection written in corporation with Stijn AA and Maikel van Veen
}
}
}
