import React from 'react';
import './SubmitButton.css';

interface SubmitButtonProps {
  isSubmitting: boolean;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ isSubmitting }) => (
  <button
    type="submit"
    disabled={isSubmitting}
    className="submit-button"
  >
    {isSubmitting ? (
      <span className="button-content">
        <span className="spinner" />
        Sending...
      </span>
    ) : (
      'Send Message'
    )}
  </button>
); 