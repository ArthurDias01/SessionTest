import { NextResponse } from 'next/server'
import { z } from 'zod';
import { transformData } from '@/lib/transform';
import { InputData } from '@/interfaces/global';

const inputSchema = z.object({
  events: z.array(z.object({
    url: z.string(),
    visitorId: z.string(),
    timestamp: z.number(),
  }))
});

export async function POST(request: Request) {
  const data = await request.json();

  const parsedBody = inputSchema.safeParse(data);
  // console.log("parsedBody", JSON.parse(JSON.stringify(parsedBody)));
  const error = parsedBody.success ? undefined : parsedBody.error;

  if (error) {
    return NextResponse.json({ error: error.errors });
  }

  const dataParsed = parsedBody.success ? transformData(parsedBody.data) : undefined;

  return NextResponse.json(dataParsed)
}
