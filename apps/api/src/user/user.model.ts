import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';

@Schema({ timestamps: true })
export class UserModel {
	_id: MongooseSchema.Types.ObjectId;

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
