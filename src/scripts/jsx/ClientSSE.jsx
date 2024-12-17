import { useEffect, useState } from 'react';

const SSEClient = ({ url }) => {
  const [lastMessage, setLastMessage] = useState('');

  useEffect(() => {
    const eventSource = new EventSource(url);

    eventSource.onmessage = (event) => {
      const message = event.data;
      console.log('Received message:', message);
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

export default SSEClient