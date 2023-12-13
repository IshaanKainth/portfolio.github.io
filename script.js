var typed = new Typed('#specials', {
  strings: ['<i>Data</i> Analyst.', 'Data Scientist.'],
  typeSpeed: 50,
});
function sendEmail(){
  var name=document.getElementById('name').value;
  var email=document.getElementById('email').value;
  var subject=document.getElementById('subject').value;
  var message=document.getElementById('message').value;

  var messagebody = "Name: " + name +
  "<br/> Email: "+ email +
  "<br/> Subject: " + subject +
  "<br/> Message: " + message; 
  
  Email.send({
        Host : "smtp.elasticemail.com",
        Username : "ishaankaith12@gmail.com",
        Password : "C13C86C3090C649179E0C126B41CF5FC3AA4",
        To : 'ec21184@glbitm.ac.in',
        From : "ishaankaith12@gmail.com",
        Subject : "New Contact Form Enquiry",
        Body : messagebody
    }).then(
      message => alert(message)
    );
}