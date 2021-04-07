<!-- <?php 
  /**
  * Requires the "PHP Email Form" library
  * The "PHP Email Form" library is available only in the pro version of the template
  * The library should be uploaded to: vendor/php-email-form/php-email-form.php
  * For more info and help: https://bootstrapmade.com/php-email-form/
  */

  // Replace contact@example.com with your real receiving email address
  // $receiving_email_address = 'contact@example.com';

  // if( file_exists($php_email_form = '../assets/vendor/php-email-form/php-email-form.php' )) {
  //   include( $php_email_form );
  // } else {
  //   die( 'Unable to load the "PHP Email Form" Library!');
  // }

  // $contact = new PHP_Email_Form;
  // $contact->ajax = true;
  
  // $contact->to = $receiving_email_address;
  // $contact->from_name = $_POST['name'];
  // $contact->from_email = $_POST['email'];
  // $contact->subject = $_POST['subject'];

  // Uncomment below code if you want to use SMTP to send emails. You need to enter your correct SMTP credentials
  /*
  $contact->smtp = array(
    'host' => 'example.com',
    'username' => 'example',
    'password' => 'pass',
    'port' => '587'
  );
  */

  // $contact->add_message( $_POST['name'], 'From');
  // $contact->add_message( $_POST['email'], 'Email');
  // $contact->add_message( $_POST['message'], 'Message', 10);

  // echo $contact->send();






// if (isset($_POST['submit'])) {
//   $name = $_POST['name'];
//   $subject = $_POST['subject'];
//   $mailFrom = $_POST['mail'];
//   $message = $_POST['message'];

//   $mailTo = "shreyanshpareek3025@gmail.com";
//   $headers = "From: ".$mailFrom;
//   $txt = "YOu have received an e-mail from ".$name.".\n\n".$message;

//   mail($mailTo, subject,$txt, $headers);
//   header("Location: index.php?mailsend");
// }

// /

var config = {
  apiKey: "AIzaSyD1T5jmKdgi0OICy7tgi0mYuR7BXg6XqDI",
  authDomain: "portfolio-db004.firebaseapp.com",
  projectId: "portfolio-db004",
  storageBucket: "portfolio-db004.appspot.com",
  messagingSenderId: "237095252546",
  appId: "1:237095252546:web:a1a54e97619e8a04ce73db",
  measurementId: "G-HVY02ELVKS"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var subject = getInputVal('subject');
  var email = getInputVal('email');
  // var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, subject, email,  message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, subject, email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    subject:subject,
    email:email,
    message:message
  });
}