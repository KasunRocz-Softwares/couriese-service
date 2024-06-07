import { Delivery } from "../delivery/Delivery";

export type CourierAgent = {
  createdAt: Date;
  deliveries?: Array<Delivery>;
  email: string | null;
  id: string;
  name: string | null;
  phone: string | null;
  updatedAt: Date;
};
