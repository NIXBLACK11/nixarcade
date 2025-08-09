'use client';

import React, { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react';
import { 
  IoCheckmarkCircle, 
  IoInformationCircle, 
  IoWarning, 
  IoClose 
} from 'react-icons/io5';

// Define the types for our notifications
export type NotificationType = 'info' | 'success' | 'error' | 'warning';

export interface Notification {
  id: string;
  type: NotificationType;
  message: string;
}

// Define the context type
interface NotificationContextType {
  notifications: Notification[];
  showNotification: (type: NotificationType, message: string) => void;
  dismissNotification: (id: string) => void;
}

// Create the context with a default value
const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

// Create the NotificationPopup component
function NotificationPopup({ 
  notification,
  onDismiss
}: { 
  notification: Notification, 
  onDismiss: () => void 
}) {
  const { type, message } = notification;
  const getIcon = () => {
    switch (type) {
      case 'success':
        return <IoCheckmarkCircle className="text-emerald-500 text-2xl" />;
      case 'error':
        return <IoWarning className="text-[#FF4081] text-2xl" />;
      case 'warning':
        return <IoWarning className="text-yellow-500 text-2xl" />;
      case 'info':
      default:
        return <IoInformationCircle className="text-[#6A1B9A] text-2xl" />;
    }
  };
  
  // Determine the color based on the type
  let bgColor = '';
  let borderColor = '';
  
  switch (type) {
    case 'success':
      bgColor = 'bg-neutral-900';
      borderColor = 'border-emerald-500';
      break;
    case 'error':
      bgColor = 'bg-neutral-900';
      borderColor = 'border-[#FF4081]';
      break;
    case 'warning':
      bgColor = 'bg-neutral-900';
      borderColor = 'border-yellow-500';
      break;
    case 'info':
    default:
      bgColor = 'bg-neutral-900';
      borderColor = 'border-[#6A1B9A]';
      break;
  }

  return (
    <div 
      className={`${bgColor} ${borderColor} border-2 text-white rounded-xl shadow-2xl backdrop-blur-md p-10 flex items-center gap-3 min-w-[320px] max-w-[450px]`}
      style={{ position: 'relative', zIndex: 999999 }}
      role="alert"
    >
      <div className="flex-shrink-0">
        {getIcon()}
      </div>
      <span className="text-base flex-1 font-medium">{message}</span>
      <button 
        onClick={onDismiss}
        className="text-neutral-400 hover:text-white transition-colors"
      >
        <IoClose className="text-xl" />
      </button>
    </div>
  );
}

// Create a provider component
export function NotificationProvider({ children }: { children: React.ReactNode }) {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const notificationTimers = useRef<Record<string, NodeJS.Timeout>>({});

  // Cleanup timers when component unmounts
  useEffect(() => {
    return () => {
      Object.values(notificationTimers.current).forEach(timer => {
        clearTimeout(timer);
      });
    };
  }, []);

  // Function to show a notification
  const showNotification = useCallback((type: NotificationType, message: string) => {
    // Clear existing notifications to ensure only one shows at a time
    Object.values(notificationTimers.current).forEach(timer => {
      clearTimeout(timer);
    });
    notificationTimers.current = {};
    setNotifications([]);
    
    const id = `notification-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
    
    const newNotification: Notification = {
      id,
      type,
      message
    };
    
    // Add a small delay before showing notification to ensure DOM updates
    setTimeout(() => {
      setNotifications([newNotification]);
    }, 10);
    
    // Auto-dismiss after 5 seconds
    const timer = setTimeout(() => {
      dismissNotification(id);
    }, 5000);
    
    notificationTimers.current[id] = timer;
    
    return id;
  }, []);

  // Function to dismiss a notification
  const dismissNotification = useCallback((id: string) => {
    // Clear the timer
    if (notificationTimers.current[id]) {
      clearTimeout(notificationTimers.current[id]);
      delete notificationTimers.current[id];
    }
    
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  }, []);

  return (
    <NotificationContext.Provider value={{ notifications, showNotification, dismissNotification }}>
      {children}
      {/* Render the notifications */}
      <div 
        className="fixed top-4 right-4 flex flex-col gap-4 pointer-events-none" 
        style={{ zIndex: 999999 }}
      >
        {notifications.map(notification => (
          <div key={notification.id} className="pointer-events-auto">
            <NotificationPopup
              notification={notification}
              onDismiss={() => dismissNotification(notification.id)}
            />
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  );
}

// Create a hook for using the context
export function useNotification() {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
}