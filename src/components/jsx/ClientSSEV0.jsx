import React, { useEffect, useState } from 'react';

const SSEClient = ({ url }) => {
  const [messages, setMessages] = useState([]);
  const [connectionStatus, setConnectionStatus] = useState('Connecting...');
  const [error, setError] = useState(null);

  useEffect(() => {
    let eventSource;
    
    try {
      console.log('Attempting to connect to:', url);
      eventSource = new EventSource(url);
      
      eventSource.addEventListener('open', (event) => {
        console.log('Connection opened:', event);
        setConnectionStatus('Connected');
      });

      eventSource.addEventListener('message', (event) => {
        console.log('Message received:', event.data);
        
        setMessages(prevMessages => [
          ...prevMessages,
          {
            text: event.data,
            timestamp: new Date().toLocaleTimeString()
          }
        ]);
      });

      eventSource.addEventListener('error', (event) => {
        console.error('SSE Error:', event);
        setError(`Connection error occurred`);
        setConnectionStatus('Error - Reconnecting...');
        
        // Riconnessione automatica dopo 5 secondi
        setTimeout(() => {
          if (eventSource) {
            eventSource.close();
            eventSource = new EventSource(url);
          }
        }, 5000);
      });

    } catch (err) {
      console.error('Error setting up EventSource:', err);
      setError(`Setup error: ${err.message}`);
    }

    return () => {
      if (eventSource) {
        console.log('Cleaning up connection...');
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
        
        <div className="bg-gray-100 p-2 rounded max-h-60 overflow-y-auto">
          <strong>Messages:</strong>
          {messages.map((msg, index) => (
            <div key={index} className="mt-2 p-2 bg-white rounded">
              <div>{msg.text}</div>
              <div className="text-sm text-gray-500">Received at: {msg.timestamp}</div>
            </div>
          ))}
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