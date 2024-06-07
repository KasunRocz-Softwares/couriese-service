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
import { CourierAgentWhereInput } from "./CourierAgentWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CourierAgentListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CourierAgentWhereInput,
  })
  @ValidateNested()
  @Type(() => CourierAgentWhereInput)
  @IsOptional()
  @Field(() => CourierAgentWhereInput, {
    nullable: true,
  })
  every?: CourierAgentWhereInput;

  @ApiProperty({
    required: false,
    type: () => CourierAgentWhereInput,
  })
  @ValidateNested()
  @Type(() => CourierAgentWhereInput)
  @IsOptional()
  @Field(() => CourierAgentWhereInput, {
    nullable: true,
  })
  some?: CourierAgentWhereInput;

  @ApiProperty({
    required: false,
    type: () => CourierAgentWhereInput,
  })
  @ValidateNested()
  @Type(() => CourierAgentWhereInput)
  @IsOptional()
  @Field(() => CourierAgentWhereInput, {
    nullable: true,
  })
  none?: CourierAgentWhereInput;
}
export { CourierAgentListRelationFilter as CourierAgentListRelationFilter };
