export const emailConfig = {
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '',
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || '',
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '',
};

// Validate config
if (!emailConfig.publicKey || !emailConfig.serviceId || !emailConfig.templateId) {
  console.error('Missing EmailJS configuration. Please check your .env file.');
} 