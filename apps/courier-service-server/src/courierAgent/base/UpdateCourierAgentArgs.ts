/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CourierAgentWhereUniqueInput } from "./CourierAgentWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CourierAgentUpdateInput } from "./CourierAgentUpdateInput";

@ArgsType()
class UpdateCourierAgentArgs {
  @ApiProperty({
    required: true,
    type: () => CourierAgentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CourierAgentWhereUniqueInput)
  @Field(() => CourierAgentWhereUniqueInput, { nullable: false })
  where!: CourierAgentWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CourierAgentUpdateInput,
  })
  @ValidateNested()
  @Type(() => CourierAgentUpdateInput)
  @Field(() => CourierAgentUpdateInput, { nullable: false })
  data!: CourierAgentUpdateInput;
}

export { UpdateCourierAgentArgs as UpdateCourierAgentArgs };