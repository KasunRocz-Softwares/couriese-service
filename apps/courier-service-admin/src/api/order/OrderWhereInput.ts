import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DeliveryListRelationFilter } from "../delivery/DeliveryListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type OrderWhereInput = {
  customer?: CustomerWhereUniqueInput;
  deliveries?: DeliveryListRelationFilter;
  deliveryLocation?: StringNullableFilter;
  id?: StringFilter;
  packageDetails?: StringNullableFilter;
  pickupLocation?: StringNullableFilter;
  status?: "Option1";
};
