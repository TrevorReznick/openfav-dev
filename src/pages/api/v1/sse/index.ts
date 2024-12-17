export async function GET(request) {
  const url = new URL(request.url);
  const message = url.searchParams.get('message') || 'Deploy To Koyeb';
  const encoder = new TextEncoder();

  console.log('Server received request. Message:', message);

  const customReadable = new ReadableStream({
    start(controller) {
      // Funzione di utilità per inviare messaggi
      const sendMessage = (msg) => {
        const formattedMessage = `data: ${msg}\n\n`;
        console.log('Sending formatted message:', formattedMessage);
        controller.enqueue(encoder.encode(formattedMessage));
      };

      // Invia il messaggio iniziale
      sendMessage(message);

      // Invia il secondo messaggio dopo 2 secondi
      setTimeout(() => {
        sendMessage('Test message after 2 seconds');
        console.log('Sent second test message');
      }, 2000);

      // Chiudi lo stream dopo un timeout ragionevole
      setTimeout(() => {
        console.log('Closing stream after timeout');
        controller.close();
      }, 30000); // 30 secondi
    }
  });

  return new Response(customReadable, {
    headers: {
      'Connection': 'keep-alive',
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      'X-Accel-Buffering': 'no',
      'Access-Control-Allow-Origin': '*'
    }
  });
}