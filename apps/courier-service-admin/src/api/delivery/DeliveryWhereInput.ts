import { CourierAgentWhereUniqueInput } from "../courierAgent/CourierAgentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type DeliveryWhereInput = {
  courierAgent?: CourierAgentWhereUniqueInput;
  id?: StringFilter;
  order?: OrderWhereUniqueInput;
  status?: "Option1";
};
