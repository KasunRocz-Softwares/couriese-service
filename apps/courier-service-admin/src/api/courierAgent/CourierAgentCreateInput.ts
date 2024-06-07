import { DeliveryCreateNestedManyWithoutCourierAgentsInput } from "./DeliveryCreateNestedManyWithoutCourierAgentsInput";

export type CourierAgentCreateInput = {
  deliveries?: DeliveryCreateNestedManyWithoutCourierAgentsInput;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
};
