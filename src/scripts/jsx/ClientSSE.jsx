// ~/components/SSEClient.jsx
import { useEffect, useState } from 'react';

const SSEClient = ({ url }) => {
    const [lastMessage, setLastMessage] = useState('');

  useEffect(() => {
    console.log('Connecting to SSE endpoint:', url);
    const eventSource = new EventSource(url);

    eventSource.onopen = () => {
      console.log('SSE connection opened');
    };

    eventSource.onmessage = (event) => {
        const message = event.data;
        console.log('Client SSE received message:', message);
        setLastMessage(message);

        // Controlla se il messaggio inizia con "ALERT: "
        if (message.startsWith('ALERT: ')) {
            alert(message.replace('ALERT: ', ''));
        }
    };

    eventSource.onerror = (error) => {
      console.error('EventSource failed:', error);
      eventSource.close();
    };

    return () => {
      console.log('Closing SSE connection');
      eventSource.close();
    };
  }, [url]);

    return (
        <div>
        <h2>SSE Client</h2>
        <p>Last Message: {lastMessage}</p>
        </div>
    );
};

export default SSEClient;