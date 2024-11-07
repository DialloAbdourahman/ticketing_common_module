import { KEYS } from "./utiles";

export interface TicketUpdatedEvent {
  key: KEYS.TICKET_UPDATED;
  data: {
    id: string;
    title: string;
    price: number;
    userId: string;
    version: number;
    orderId?: string;
  };
}
