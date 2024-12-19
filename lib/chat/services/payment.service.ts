import crypto from 'crypto';
import { razorpay, RAZORPAY_CONFIG } from '@/lib/config/razorpay';
// import type { Razorpay } from 'razorpay';

export class PaymentService {
  static async createOrder(amount: number, currency: string = RAZORPAY_CONFIG.currency) {
    try {
      const order = await razorpay.orders.create({
        amount: amount * 100, // Amount in smallest currency unit (paise)
        currency,
        receipt: `${RAZORPAY_CONFIG.receipt_prefix}${Date.now()}`,
      });

      return order;
    } catch (error) {
      console.error('Error creating Razorpay order:', error);
      throw new Error('Failed to create payment order');
    }
  }

  static async verifyPayment(
    orderId: string,
    paymentId: string,
    signature: string
  ): Promise<boolean> {
    try {
      const text = `${orderId}|${paymentId}`;
      const expectedSignature = crypto
        .createHmac('sha256', (razorpay as any).key_secret)
        .update(text)
        .digest('hex');

      // Convert strings to Uint8Array for comparison
      const signatureBytes = new Uint8Array(Buffer.from(signature, 'utf-8'));
      const expectedBytes = new Uint8Array(Buffer.from(expectedSignature, 'utf-8'));

      if (signatureBytes.length !== expectedBytes.length) {
        return false;
      }

      return crypto.timingSafeEqual(signatureBytes, expectedBytes);
    } catch (error) {
      console.error('Error verifying payment:', error);
      throw new Error('Failed to verify payment');
    }
  }
}