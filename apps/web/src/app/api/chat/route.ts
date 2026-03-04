import OpenAI from "openai";

export const dynamic = "force-dynamic";

function getClient() {
  return new OpenAI();
}

const SYSTEM_PROMPT = `Eres la asistente virtual de GLEZFIT, marca premium de moda fitness mexicana.

PRODUCTOS:
- Leggings Premium — $89 USD. Tejido acanalado que moldea y estiliza tu figura con compresión premium.
- Tops Esculturales — $69 USD. Diseño escultural que realza tu silueta con soporte y elegancia.
- Sets Completos — $139 USD. Conjuntos coordinados para un look completo de lujo en cada entrenamiento.

CARACTERÍSTICAS DE MARCA:
- Telas ribbed de alta densidad que moldean y definen cada curva con suavidad excepcional.
- Diseño ergonómico con patrones anatómicos que abrazan tu cuerpo.
- Hecho en México con producción artesanal y los más altos estándares de calidad.

DATOS CLAVE:
- +10,000 clientas satisfechas
- Rating promedio de 4.9 estrellas
- Envío GRATIS en todos los pedidos

INSTRUCCIONES:
- Responde siempre en español.
- Sé amable, concisa y enfocada en ayudar a la clienta.
- Guía hacia la compra de forma natural, sin ser agresiva.
- Si preguntan algo fuera de tu alcance, redirige amablemente al tema de GLEZFIT.
- Usa un tono cálido y empoderador, acorde con la marca.
- No inventes información sobre la marca que no esté aquí.`;

export async function POST(request: Request) {
  try {
    const { messages } = (await request.json()) as {
      messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[];
    };

    if (!messages || !Array.isArray(messages)) {
      return Response.json(
        { error: "Messages array is required" },
        { status: 400 },
      );
    }

    const openai = getClient();

    const stream = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
      stream: true,
      max_tokens: 500,
      temperature: 0.7,
    });

    const encoder = new TextEncoder();

    const readable = new ReadableStream({
      async start(controller) {
        for await (const chunk of stream) {
          const content = chunk.choices[0]?.delta?.content;
          if (content) {
            controller.enqueue(encoder.encode(content));
          }
        }
        controller.close();
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
      },
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return Response.json(
      { error: "Error processing chat request" },
      { status: 500 },
    );
  }
}
