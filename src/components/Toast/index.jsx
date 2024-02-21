import React, { useState, useEffect } from "react";

const Toast = ({ className, message, duration = 3000, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) {
    return null;
  }

  return <div className={className}>{message}</div>;
};

export { Toast };
