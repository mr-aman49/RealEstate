import { NextResponse } from "next/server"
import { ChatService } from "@/lib/chat/services/chat.services"
import { ChatMessage, ChatContext } from "@/lib/types/chat"

export async function POST(req: Request) {
  try {
    const { messages, context }: { 
      messages: ChatMessage[], 
      context: ChatContext 
    } = await req.json()

    // Validate request data
    if (!messages?.length || !context?.brokerId) {
      return NextResponse.json(
        { error: "Invalid request data" },
        { status: 400 }
      )
    }

    const response = await ChatService.generateResponse(messages, context)

    return NextResponse.json({ response })
  } catch (error) {
    console.error("Chat API Error:", error)
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 }
    )
  }
}