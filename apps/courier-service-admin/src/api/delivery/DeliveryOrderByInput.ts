import { SortOrder } from "../../util/SortOrder";

export type DeliveryOrderByInput = {
  courierAgentId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  orderId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
