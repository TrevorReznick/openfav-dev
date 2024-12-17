import React, { useEffect, useState } from 'react';

const SSEClient = ({ url }) => {
  const [messages, setMessages] = useState([]);
  const [connectionStatus, setConnectionStatus] = useState('Connecting...');
  const [error, setError] = useState(null);
  const [lastHeartbeat, setLastHeartbeat] = useState(Date.now());

  useEffect(() => {
    let eventSource;
    let heartbeatInterval;

    const connect = () => {
      if (eventSource) {
        eventSource.close();
      }

      console.log('Attempting to connect to:', url);
      eventSource = new EventSource(url);

      eventSource.addEventListener('open', (event) => {
        console.log('Connection opened:', event)
        setConnectionStatus('Connected')
        setError(null);
      });

      eventSource.addEventListener('message', (event) => {
        console.log('Message received:', event.data)

        const data = JSON.parse(event.data);
        if (data.type === 'heartbeat') {
          setLastHeartbeat(Date.now())
        }

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

        // Chiudi la connessione e ristabilisci dopo 5 secondi
        if (eventSource) {
          eventSource.close();
        }
        setTimeout(connect, 5000)
      });
    };

    const checkHeartbeat = () => {
      const now = Date.now();
      if (now - lastHeartbeat > 60000) { // Se non ricevi heartbeat per più di 60 secondi
        console.log('No heartbeat received, reconnecting...');
        setError(`No heartbeat received`);
        setConnectionStatus('Error - Reconnecting...');
        if (eventSource) {
          eventSource.close();
        }
        connect()
      }
    };

    connect();
    heartbeatInterval = setInterval(checkHeartbeat, 30000); // Controlla il heartbeat ogni 30 secondi

    return () => {
      if (eventSource) {
        console.log('Cleaning up connection...')
        eventSource.close();
      }
      if (heartbeatInterval) {
        clearInterval(heartbeatInterval)
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
  )
}

export default SSEClient