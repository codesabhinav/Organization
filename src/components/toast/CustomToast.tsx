import React from 'react';
import { toast, ToastOptions } from 'react-hot-toast';

interface CustomToastProps {
  message: string;
  type?: 'success' | 'error' | 'loading';
}

const CustomToast: React.FC<CustomToastProps> = ({ message, type = 'success' }) => {
  const getIcon = () => {
    switch (type) {
      case 'success':
        return <i className="ph ph-check-circle" style={{ color: '#c9f31d' }} />;
      case 'error':
        return <i className="ph ph-x-circle" style={{ color: '#ff4444' }} />;
      case 'loading':
        return <i className="ph ph-spinner" style={{ color: '#c9f31d' }} />;
      default:
        return <i className="ph ph-info" style={{ color: '#c9f31d' }} />;
    }
  };

  return (
    <div className="custom-toast" style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '16px 20px',
      background: '#1d1d1d',
      color: '#ffffff',
      borderRadius: '8px',
      border: `1px solid ${type === 'error' ? '#ff4444' : '#c9f31d'}`,
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
      fontFamily: 'Outfit, serif',
      fontSize: '14px',
      fontWeight: '500',
      minWidth: '300px',
      maxWidth: '400px'
    }}>
      {getIcon()}
      <span>{message}</span>
    </div>
  );
};

export const showToast = (message: string, type: 'success' | 'error' | 'loading' = 'success') => {
  const toastOptions: ToastOptions = {
    duration: type === 'loading' ? Infinity : 4000,
    position: 'top-right',
  };

  if (type === 'loading') {
    return toast.loading(message, toastOptions);
  }

  return toast.custom(
    <CustomToast message={message} type={type} />,
    toastOptions
  );
};

export default CustomToast;
