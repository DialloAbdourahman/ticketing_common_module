import { KEYS } from "./utiles";

export interface OrderCancelledEvent {
  key: KEYS.ORDER_CANCELLED;
  data: {
    id: string;
    ticket: {
      id: string;
    };
  };
}
