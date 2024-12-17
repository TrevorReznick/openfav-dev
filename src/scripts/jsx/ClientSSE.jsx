import React, { useEffect, useState } from 'react';

const SSEClient = ({ url }) => {
  const [lastMessage, setLastMessage] = useState('Waiting for messages...');
  const [connectionStatus, setConnectionStatus] = useState('Connecting...');
  const [error, setError] = useState(null);

  useEffect(() => {
    let eventSource;
    
    try {
      console.log('Attempting to connect to:', url);
      eventSource = new EventSource(url);
      
      // Debug connection state
      eventSource.addEventListener('open', (event) => {
        console.log('Connection opened:', event);
        setConnectionStatus('Connected');
      });

      // Log raw event data
      eventSource.addEventListener('message', (event) => {
        console.log('Raw event received:', event);
        console.log('Event data:', event.data);
        console.log('Event type:', event.type);
        
        setLastMessage(prevMessage => `${event.data} (Received at: ${new Date().toLocaleTimeString()})`);
      });

      // Specific error handling
      eventSource.addEventListener('error', (event) => {
        console.error('SSE Error:', event);
        setError(`Connection error: ${event.type}`);
        setConnectionStatus('Error');
        
        if (eventSource.readyState === EventSource.CLOSED) {
          console.log('Connection was closed');
        }
      });

    } catch (err) {
      console.error('Error setting up EventSource:', err);
      setError(`Setup error: ${err.message}`);
    }

    return () => {
      if (eventSource) {
        console.log('Closing connection...');
        eventSource.close();
      }
    };
  }, [url]);

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">SSE Debug Client</h2>
      
      <div className="space-y-2">
        <div className="bg-gray-100 p-2 rounded">
          <strong>Connection Status:</strong> {connectionStatus}
        </div>
        
        <div className="bg-gray-100 p-2 rounded">
          <strong>Last Message:</strong>
          <pre className="mt-1 whitespace-pre-wrap">{lastMessage}</pre>
        </div>
        
        {error && (
          <div className="bg-red-100 p-2 rounded">
            <strong>Error:</strong>
            <pre className="mt-1 text-red-600">{error}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default SSEClient;