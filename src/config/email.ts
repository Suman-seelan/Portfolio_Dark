// EmailJS Configuration
// To set up email functionality:
// 1. Go to https://www.emailjs.com/ and create an account
// 2. Create a new service (Gmail, Outlook, etc.)
// 3. Create an email template with these variables:
//    - {{from_name}} - sender's name
//    - {{from_email}} - sender's email
//    - {{from_mobile}} - sender's mobile
//    - {{message}} - the message content
//    - {{to_email}} - your email (where you want to receive messages)
// 4. Get your Service ID, Template ID, and Public Key
// 5. Replace the values below with your actual EmailJS credentials

export const emailConfig = {
  serviceId: 'service_pkgugph', // Replace with your EmailJS service ID
  templateId: 'template_4mcpdvk', // Replace with your EmailJS template ID
  publicKey: 'LAb6pUB2txJZwP31v', // Replace with your EmailJS public key
  toEmail: 'suman.sathiaseelan@gmail.com' // Replace with your email address
};

// Example EmailJS template:
/*
Subject: New Contact Form Submission from {{from_name}}

Hello,

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Mobile: {{from_mobile}}

Message:
{{message}}

---
This message was sent from your portfolio website.
*/
