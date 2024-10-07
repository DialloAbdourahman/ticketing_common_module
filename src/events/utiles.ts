export enum KEYS {
  TICKET_CREATED = "ticket.created",
  TICKET_UPDATED = "ticket.updated",
  ORDER_CREATED = "order.created",
  ORDER_CANCELLED = "order.cancelled",
  EXPIRATION_COMPLETE = "expiration.complete",
  PAYMENT_CREATED = "payment.created",
}

export enum QUEUES {
  TICKETING_QUEUE = "ticketing_queue",
  ORDERS_QUEUE = "orders_queue",
  EXPIRATION_QUEUE = "expiration_queue",
  PAYMENT_QUEUE = "payment_queue",
}

export enum EXCHANGES {
  TICKETING_EXCHANGE = "ticketing_exchange",
}
