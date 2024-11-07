import { OrderStatus } from "./types/order-status";
import { KEYS } from "./utiles";

export interface OrderCreatedEvent {
  key: KEYS.ORDER_CREATED;
  data: {
    id: string;
    status: OrderStatus;
    userId: string;
    expiresAt: string;
    ticket: {
      id: string;
      price: number;
    };
    version: number;
  };
}
