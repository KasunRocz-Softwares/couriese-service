import { Customer } from "../customer/Customer";
import { Delivery } from "../delivery/Delivery";

export type Order = {
  createdAt: Date;
  customer?: Customer | null;
  deliveries?: Array<Delivery>;
  deliveryLocation: string | null;
  id: string;
  packageDetails: string | null;
  pickupLocation: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
