import { CourierAgentWhereUniqueInput } from "../courierAgent/CourierAgentWhereUniqueInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type DeliveryCreateInput = {
  courierAgent?: CourierAgentWhereUniqueInput | null;
  order?: OrderWhereUniqueInput | null;
  status?: "Option1" | null;
};
