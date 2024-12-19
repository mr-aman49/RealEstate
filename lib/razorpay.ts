import Razorpay from 'razorpay';
import crypto from 'crypto';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function createOrder(amount: number, currency: string = 'INR') {
  try {
    const order = await razorpay.orders.create({
      amount: amount * 100, // Amount in smallest currency unit (paise)
      currency,
      receipt: `receipt_${Date.now()}`,
    });

    return order;
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    throw new Error('Failed to create payment order');
  }
}

export async function verifyPayment(
  razorpay_order_id: string,
  razorpay_payment_id: string,
  razorpay_signature: string
) {
  const text = `${razorpay_order_id}|${razorpay_payment_id}`;
  const signature = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
    .update(text)
    .digest('hex');

  return signature === razorpay_signature;
}
