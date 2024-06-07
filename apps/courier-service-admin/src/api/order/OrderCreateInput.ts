import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DeliveryCreateNestedManyWithoutOrdersInput } from "./DeliveryCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  deliveries?: DeliveryCreateNestedManyWithoutOrdersInput;
  deliveryLocation?: string | null;
  packageDetails?: string | null;
  pickupLocation?: string | null;
  status?: "Option1" | null;
};
