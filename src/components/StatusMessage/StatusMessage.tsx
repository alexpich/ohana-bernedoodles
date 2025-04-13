import React from 'react';
import './StatusMessage.css';

interface StatusMessageProps {
  type: 'success' | 'error';
  message: string;
}

export const StatusMessage: React.FC<StatusMessageProps> = ({ type, message }) => (
  <div className={`status-message ${type}`} role="alert">
    {message}
  </div>
); 