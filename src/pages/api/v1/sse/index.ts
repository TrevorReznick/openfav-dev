export async function GET(request) {
  const url = new URL(request.url);
  const message = url.searchParams.get('message') || 'Deploy To Koyeb';
  const encoder = new TextEncoder();

  const customReadable = new ReadableStream({
    async start(controller) {
      try {
        // Send initial connection message
        controller.enqueue(encoder.encode(`data: Connected to SSE server\n\n`));
        
        // Send the main message
        controller.enqueue(encoder.encode(`data: ${message}\n\n`));
        
        // Keep connection alive with periodic heartbeat
        const heartbeat = setInterval(() => {
          controller.enqueue(encoder.encode(`data: heartbeat\n\n`));
        }, 30000); // Every 30 seconds

        // Clean up after 5 minutes
        setTimeout(() => {
          clearInterval(heartbeat);
          controller.close();
        }, 300000); // 5 minutes
      } catch (error) {
        controller.error(error);
      }
    }
  });

  return new Response(customReadable, {
    headers: {
      'Connection': 'keep-alive',
      'Content-Encoding': 'none',
      'Cache-Control': 'no-cache, no-transform',
      'Content-Type': 'text/event-stream; charset=utf-8',
      'Access-Control-Allow-Origin': '*', // Add CORS support if needed
    },
  });
}