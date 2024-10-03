import { KEYS } from "./utiles";

export interface ExpirationComlete {
  key: KEYS.EXPIRATION_COMPLETE;
  data: {
    orderId: string;
  };
}
