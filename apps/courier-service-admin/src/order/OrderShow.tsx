import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { COURIERAGENT_TITLE_FIELD } from "../courierAgent/CourierAgentTitle";
import { ORDER_TITLE_FIELD } from "./OrderTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";

export const OrderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="customer"
          source="customer.id"
          reference="Customer"
        >
          <TextField source={CUSTOMER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="deliveryLocation" source="deliveryLocation" />
        <TextField label="ID" source="id" />
        <TextField label="packageDetails" source="packageDetails" />
        <TextField label="pickupLocation" source="pickupLocation" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Delivery"
          target="orderId"
          label="Deliveries"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="courierAgent"
              source="courieragent.id"
              reference="CourierAgent"
            >
              <TextField source={COURIERAGENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="order" source="order.id" reference="Order">
              <TextField source={ORDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
