# Email Setup Instructions

Follow these steps to set up email functionality for your contact form:

## 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Add Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## 3. Create Email Template
1. Go to "Email Templates" in EmailJS dashboard
2. Click "Create New Template"
3. Use this template content:

### Subject:
```
New Contact Form Submission from {{from_name}}
```

### Content:
```
Hello,

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Mobile: {{from_mobile}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

4. Save the template and note down your **Template ID**

## 4. Get Public Key
1. Go to "Account" in EmailJS dashboard
2. Find your **Public Key** (also called User ID)

## 5. Update Configuration
1. Open `/src/config/email.ts`
2. Replace the placeholder values with your actual:
   - `serviceId`: Your EmailJS Service ID
   - `templateId`: Your EmailJS Template ID  
   - `publicKey`: Your EmailJS Public Key
   - `toEmail`: Your email address where you want to receive messages

## 6. Test the Contact Form
1. Run your development server: `npm run dev`
2. Open the contact form on your website
3. Fill out and submit a test message
4. Check your email for the message

## Example Configuration
```typescript
export const emailConfig = {
  serviceId: 'service_abc123',
  templateId: 'template_def456', 
  publicKey: 'ghi789jkl012',
  toEmail: 'your-email@gmail.com'
};
```

## Features Implemented
✅ Email sending via EmailJS
✅ Loading state with "Sending..." button
✅ Success message display
✅ Auto-close form after successful send
✅ No more alert popups
✅ Disabled form during sending
✅ Clear button hidden during send/success states

## Troubleshooting
- Make sure all EmailJS IDs are correct
- Check EmailJS dashboard for any service issues
- Verify your email template has the correct variable names
- Check browser console for any error messages
