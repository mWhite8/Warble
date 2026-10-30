//const someInput = document.querySelector('goo');
const someInput = document.getElementById("1");

someInput.addEventListener('click', myFunc, false);
someInput.myParam = 'This is my parameter';


function myFunc(evt)
{
  window.alert(evt.currentTarget.myParam);
}
