import React, { useRef, useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../../config/email';
import { StatusMessage } from '../StatusMessage/StatusMessage';
import { SubmitButton } from '../SubmitButton/SubmitButton';
import './ContactForm.css';
import FormField from '../FormField/FormField';

interface FormStatus {
  type: 'success' | 'error' | null;
  message: string;
}

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus>({ type: null, message: '' });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!form.current) throw new Error('Form not found');

      await emailjs.sendForm(
        emailConfig.serviceId,
        emailConfig.templateId,
        form.current,
        emailConfig.publicKey
      );

      setStatus({
        type: 'success',
        message: 'Thank you for your message! We will get back to you soon.'
      });
      form.current.reset();
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
      console.error('EmailJS Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={form} onSubmit={handleSubmit} className="contact-form">
      <FormField
        label="Name"
        name="name"
        type="text"
        required
        placeholder="Your name"
      />
      <FormField
        label="Email"
        name="email"
        type="email"
        required
        placeholder="your@email.com"
      />
      <FormField
        label="Subject"
        name="title"
        type="text"
        required
        placeholder="Message subject"
      />
      <FormField
        label="Message"
        name="message"
        type="textarea"
        required
        placeholder="Your message..."
      />

      {status.type && (
        <StatusMessage type={status.type} message={status.message} />
      )}

      <SubmitButton isSubmitting={isSubmitting} />
    </form>
  );
};

export default ContactForm; 