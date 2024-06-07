import { CourierAgentWhereInput } from "./CourierAgentWhereInput";
import { CourierAgentOrderByInput } from "./CourierAgentOrderByInput";

export type CourierAgentFindManyArgs = {
  where?: CourierAgentWhereInput;
  orderBy?: Array<CourierAgentOrderByInput>;
  skip?: number;
  take?: number;
};
