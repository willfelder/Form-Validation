const formBox = document.getElementById('formbox');
const usernameBox = document.getElementById('username');
const emailBox = document.getElementById('email');
const passwordBox = document.getElementById('password');
const passordCheckBox = document.getElementById('passwordTwo');

formBox.addEventListener('submit', (e) => {
    e.preventDefault();
        checkInputs();
});

   function checkInputs(){
       const usernameBoxValue = usernameBox.value.trim();
       const emailBoxValue = emailBox.value.trim();
       const passwordBoxValue = passwordBox.value.trim();
       const passordCheckBoxValue = passordCheckBox.value.trim();

          if(usernameBoxValue === ''){
              setErrorFor(usernameBox, 'Username can not be blank');
          } else {
              setSucessFor(usernameBox);
          }

          if(emailBoxValue === ''){
              setErrorFor(email, 'Email can not be blank');
          } else if(!isEmail(emailBoxValue)) {
              setErrorFor(email, 'Email is not valid')
          } else {
              setSucessFor(email);
          }
   }

    function setErrorFor(input, message){
        const formControlBox = input.parentElement;
        const smallBox = formControlBox.querySelector('small');

        smallBox.innerText = message;
        formControlBox.className = 'form-control-area error';
    }

    function setSucessFor(input){
        const formControlBox = input.parentElement;
        formControlBox.className = 'form-control-area sucess';
    }

    function isEmail(email){
        return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/test(email);
    }