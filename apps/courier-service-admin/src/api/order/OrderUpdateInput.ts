import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DeliveryUpdateManyWithoutOrdersInput } from "./DeliveryUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  deliveries?: DeliveryUpdateManyWithoutOrdersInput;
  deliveryLocation?: string | null;
  packageDetails?: string | null;
  pickupLocation?: string | null;
  status?: "Option1" | null;
};
