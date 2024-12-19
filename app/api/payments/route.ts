import { NextResponse } from "next/server"
import { PaymentService } from "@/lib/chat/services/payment.service"

export async function POST(req: Request) {
  try {
    const { amount, currency } = await req.json()

    const order = await PaymentService.createOrder(amount, currency)

    return NextResponse.json({ order })
  } catch (error) {
    console.error("Payment API Error:", error)
    return NextResponse.json(
      { error: "Failed to create payment" },
      { status: 500 }
    )
  }
}

export async function PUT(req: Request) {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = await req.json()

    const isValid = await PaymentService.verifyPayment(
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature
    )

    if (!isValid) {
      return NextResponse.json(
        { error: "Invalid payment signature" },
        { status: 400 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Payment Verification Error:", error)
    return NextResponse.json(
      { error: "Failed to verify payment" },
      { status: 500 }
    )
  }
}