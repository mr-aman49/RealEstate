import Razorpay from 'razorpay';

// Initialize Razorpay with the test credentials
const razorpayInstance = new Razorpay({
  key_id: 'rzp_test_5bdoOsj22Nw9HD',
  key_secret: 'bylPBN0FvYXgUGd02u9HHMQQ',
});

// Add the key_secret to the instance for verification
(razorpayInstance as any).key_secret = 'bylPBN0FvYXgUGd02u9HHMQQ';

export const razorpay = razorpayInstance;

export const RAZORPAY_CONFIG = {
  currency: 'INR',
  receipt_prefix: 'rcpt_',
} as const;