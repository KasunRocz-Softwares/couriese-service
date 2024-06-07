import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  deliveryLocation?: SortOrder;
  id?: SortOrder;
  packageDetails?: SortOrder;
  pickupLocation?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
