// ~/components/SSEClient.jsx
import { useEffect } from 'react'

const SSEClient = () => {
  useEffect(() => {
    const eventSource = new EventSource('https://openfav-dev.vercel.app/api/v1/sse');

    eventSource.onmessage = (event) => {
      const message = event.data;
      console.log('Received message:', message);

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
  }, []);

  return <div>SSE Client</div>;
}

export default SSEClient