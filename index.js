const apiKey = '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'; // Replace 'YOUR_API_KEY' with your actual API key

const data = {
  sender: {
    name: 'WoodxPortfolio.com',
    email: 'botcom172@gmail.com'
  },
  to: [
    {
      email: 'aakash.gudivada@gmail.com'
    }
  ],
  subject: 'noreply',
  htmlContent: `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>WoodxPortfolio.com</title>
  </head>
  <body style="font-family: Arial, sans-serif;">
    <div style="text-align: left; padding: 20px;">
      <h1 style="margin: 0; font-size: 24px;">WoodxPortfolio.com</h1>
    </div>
    <div style="padding: 20px;">
      <p>Your enquiry has been successfully sent to Deadwoodx. Thank you for reaching out!</p>
      <p>Most of the are answered within 48 hours. Our team is dedicated to providing a thorough and thoughtful response tailored to your needs.</p>
      <p>If you have any urgent concerns or additional information to share, feel free to raise another ticket at our website!.</p>
      <p>Best Regards,<br>WoodxPortfolio.com Team</p>
    </div>
  </body>
  </html>
`
};

let cansendmail = true;

function sendmail(){
  if (cansendmail === true){
    fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    ' api-key': apiKey
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
  }
}

function getElementsByClass(classnamegiven) {
  var elements = document.querySelectorAll(classnamegiven);
  var elementslist = {};

  for (var i = 0; i < elements.length; i++) {
    elementsArray.push(elements[i]);
  }

  elementsArray.forEach(function(element) {
    element.classList.toggle('offscreen');
  });
}

const contactbutton = document.getElementById("ContactMeButton");
const aboutmebutton = document.getElementById("AboutMeButton");
const freeservicesbutton = document.getElementById("ServicesButton");
const previousworkbutton = document.getElementById("PreviousWorkButton")

aboutmebutton.addEventListener('click',function(event){
  getElementsByClass("ContactMePage")
})