// ~/api/v1/sse.js

import * as store from '~/store'
import { processMessage } from '~/scripts/utils' // Importa la funzione processMessage

export async function GET(request) {
    const url = new URL(request.url);
    const message = url.searchParams.get('message') || 'Deploy To Koyeb';
    console.log('SSE caugth message:', message);

    const processedMessage = processMessage(message) // Elabora il messaggio
    store.messageStore.set(processedMessage) // Aggiorna lo store con il messaggio elaborato

    const encoder = new TextEncoder()

    const customReadable = new ReadableStream({
        async start(controller) {
        try {
            controller.enqueue(encoder.encode(`data: ${processedMessage}\n\n`));
            console.log('Try Sent message:', processedMessage)
            await new Promise((r) => setTimeout(r, 1000))

            /*
            controller.enqueue(encoder.encode(`data: ${processedMessage}\n\n`))
            console.log('Sent message:', processedMessage)
            await new Promise((r) => setTimeout(r, 1000))

            controller.enqueue(encoder.encode(`data: ${processedMessage}\n\n`))
            console.log('Sent message:', processedMessage)
            await new Promise((r) => setTimeout(r, 1000))
            */

            controller.close()
        } catch (error) {
            console.error('Error sending message:', error)
            controller.error(error)
        }
        }
    });

    return new Response(customReadable, {
        headers: {
        Connection: 'keep-alive',
        'Content-Encoding': 'none',
        'Cache-Control': 'no-cache, no-transform',
        'Content-Type': 'text/event-stream; charset=utf-8',
        },
    })
}