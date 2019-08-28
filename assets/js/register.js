let formMessage = firebase.database().ref('users');

document.getElementById('registrationform').addEventListener('submit', formSubmit);

function formSubmit(e) {
    console.log("Register Submit");
  e.preventDefault();
    var email = document.getElementsByName('email')[0].value; 
    var name = document.getElementsByName('name')[0].value;
    var surname = document.getElementsByName('surname')[0].value;
    console.log('registerAuth');
    var pass = document.getElementsByName('password')[0].value; 
    if(email != null && pass != null && name != null && surname != null){
            console.log("register")
            firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
            // ...
        });
        sendMessage(name, surname, email);
        alert("Registered");
        document.getElementById('registrationform').reset();
    }
  
//      Needs css
//   document.querySelector('.alert').style.display = 'block';

//   setTimeout(function() {
//     document.querySelector('.alert').style.display = 'none';
//   }, 7000);

  
}
//upload extra info to realtimeDB
function sendMessage(name, surname, email) {
  let newFormMessage = formMessage.push();
  newFormMessage.set({
    name: name,
    email: email,
    surname: surname
  });
}
