export async function GET(request) {
  const url = new URL(request.url);
  const message = url.searchParams.get('message') || 'Deploy To Koyeb';
  const encoder = new TextEncoder();

  console.log('Server received request. Message:', message);

  const customReadable = new ReadableStream({
    start(controller) {
      // Formatta correttamente il messaggio SSE
      const sendMessage = (msg) => {
        const formattedMessage = `data: ${msg}\n\n`;
        console.log('Sending formatted message:', formattedMessage);
        controller.enqueue(encoder.encode(formattedMessage));
      };

      // Invia il messaggio iniziale
      sendMessage(message);

      // Invia un secondo messaggio di test dopo 2 secondi
      const secondMessage = setTimeout(() => {
        sendMessage('Test message after 2 seconds');
        console.log('Sent second test message');
      }, 2000);

      // Mantenere la connessione aperta con un heartbeat
      const heartbeat = setInterval(() => {
        sendMessage('heartbeat');
        console.log('Sent heartbeat');
      }, 15000);

      // Cleanup function
      request.signal.addEventListener('abort', () => {
        clearTimeout(secondMessage);
        clearInterval(heartbeat);
        console.log('Connection aborted, cleaning up');
      });
    }
  });

  return new Response(customReadable, {
    headers: {
      'Connection': 'keep-alive',
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      'X-Accel-Buffering': 'no', // Disabilita il buffering
      'Access-Control-Allow-Origin': '*'
    }
  });
}