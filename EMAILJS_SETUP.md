# EmailJS Setup Guide

## Overview
This contact form is now configured with EmailJS for sending emails. The form includes validation, loading states, and toast notifications that match your theme.

## Current Configuration
The EmailJS configuration is located in `src/config/emailjs.ts`:

```typescript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'FeAjuEW69gcfnj1RY',
  PRIVATE_KEY: 'VHa0iflNru-nh09U2iaia',
  SERVICE_ID: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
};
```

## Setup Steps

### 1. Create EmailJS Account
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Sign up or log in to your account
3. Navigate to the "Email Services" section

### 2. Add Email Service
1. Click "Add New Service"
2. Choose your email provider (Gmail, Outlook, etc.)
3. Follow the authentication steps
4. Note down the **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template
1. Go to "Email Templates" section
2. Click "Create New Template"
3. Design your email template with these variables:
   - `{{name}}` - Sender's name
   - `{{email}}` - Sender's email
   - `{{number}}` - Sender's phone number
   - `{{subject}}` - Email subject
   - `{{message}}` - Email message
4. Save the template and note down the **Template ID** (e.g., `template_xyz789`)

### 4. Update Configuration
Update the `src/config/emailjs.ts` file with your actual Service ID and Template ID:

```typescript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'FeAjuEW69gcfnj1RY',
  PRIVATE_KEY: 'VHa0iflNru-nh09U2iaia',
  SERVICE_ID: 'service_abc123', // Your actual service ID
  TEMPLATE_ID: 'template_xyz789', // Your actual template ID
};
```

## Features

### Form Validation
- All fields are required
- Email format validation
- Real-time validation with toast notifications

### Toast Notifications
- **Success**: Green toast with checkmark icon
- **Error**: Red toast with X icon  
- **Loading**: Spinner with loading message
- Positioned at top-right corner
- Matches your theme colors (#c9f31d primary)

### Loading States
- Button shows spinner during submission
- Form fields are disabled during submission
- Loading toast appears during email sending

### Error Handling
- Network errors are caught and displayed
- EmailJS errors are logged to console
- User-friendly error messages

## Testing
1. Fill out the contact form
2. Submit the form
3. Check for toast notifications
4. Verify email is received
5. Check browser console for any errors

## Troubleshooting

### Common Issues
1. **"Failed to send message"** - Check Service ID and Template ID
2. **"Network error"** - Check internet connection
3. **"Template variables not found"** - Ensure template variables match the form field names

### Debug Steps
1. Open browser console (F12)
2. Look for EmailJS error messages
3. Verify API keys are correct
4. Check EmailJS dashboard for service status

## Security Notes
- Public key is safe to expose in frontend code
- Private key should be kept secure (not used in frontend)
- Consider rate limiting on your email service
- Monitor EmailJS usage in dashboard

## Customization
- Toast styles can be modified in `src/components/toast/CustomToast.tsx`
- Form validation rules can be updated in `ContactFormBox.tsx`
- Email template can be customized in EmailJS dashboard
