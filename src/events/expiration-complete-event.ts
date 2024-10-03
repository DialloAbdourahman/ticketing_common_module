import { KEYS } from "./utiles";

export interface ExpirationComleteEvent {
  key: KEYS.EXPIRATION_COMPLETE;
  data: {
    orderId: string;
  };
}
