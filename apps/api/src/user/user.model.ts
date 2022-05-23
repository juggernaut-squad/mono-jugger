import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class UserModel {
	@Prop({ unique: true, required: true })
	email: string;

	@Prop({ required: true })
	first_name: string;

	@Prop({ required: true })
	last_name: string;

	@Prop({ required: true })
	city: string;
}

export const UserSchema = SchemaFactory.createForClass(UserModel);
