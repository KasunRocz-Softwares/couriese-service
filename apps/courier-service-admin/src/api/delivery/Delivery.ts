import { CourierAgent } from "../courierAgent/CourierAgent";
import { Order } from "../order/Order";

export type Delivery = {
  courierAgent?: CourierAgent | null;
  createdAt: Date;
  id: string;
  order?: Order | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
