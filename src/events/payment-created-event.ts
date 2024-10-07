import { KEYS } from "./utiles";

export interface PaymentCreatedEvent {
  key: KEYS.PAYMENT_CREATED;
  data: {
    id: string;
    orderId: string;
    paymentId: string;
  };
}
