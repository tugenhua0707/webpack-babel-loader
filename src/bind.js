export default {
  bindEls(el1, el2){
    el1.addEventListener('keyup', () =>  el2.value = el1.value)
    el2.addEventListener('keyup', () =>  el1.value = el2.value)
  }
}  

var s = "22";

