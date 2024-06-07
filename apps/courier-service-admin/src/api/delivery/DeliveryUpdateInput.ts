import { CourierAgentWhereUniqueInput } from "../courierAgent/CourierAgentWhereUniqueInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type DeliveryUpdateInput = {
  courierAgent?: CourierAgentWhereUniqueInput | null;
  order?: OrderWhereUniqueInput | null;
  status?: "Option1" | null;
};
