/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CourierAgentWhereUniqueInput } from "../../courierAgent/base/CourierAgentWhereUniqueInput";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";
import { EnumDeliveryStatus } from "./EnumDeliveryStatus";

@InputType()
class DeliveryUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CourierAgentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CourierAgentWhereUniqueInput)
  @IsOptional()
  @Field(() => CourierAgentWhereUniqueInput, {
    nullable: true,
  })
  courierAgent?: CourierAgentWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => OrderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrderWhereUniqueInput)
  @IsOptional()
  @Field(() => OrderWhereUniqueInput, {
    nullable: true,
  })
  order?: OrderWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumDeliveryStatus,
  })
  @IsEnum(EnumDeliveryStatus)
  @IsOptional()
  @Field(() => EnumDeliveryStatus, {
    nullable: true,
  })
  status?: "Option1" | null;
}

export { DeliveryUpdateInput as DeliveryUpdateInput };
