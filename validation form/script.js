function alphaOnly(event) {

  var key;

  if (window.event) {
    key = window.event.key;
  } else if (e) {
    key = e.which;
  }
  //var key = window.event.key || event.key;
  alert(key.value);
  return ((key >= 65 && key <= 90) || (key >= 95 && key <= 122));

}

const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', () => {
  
});

const registrationForm = document.querySelector('#registration-form');

registrationForm.onsubmit = (e) => {
  e.preventDefault();
    alert('You submitted a registration form');
}
