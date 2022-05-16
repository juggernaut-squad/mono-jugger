import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
class AuthModel {
    @Prop({ unique: true, required: true })
    email: string;

    @Prop({ required: true })
    passwordHash: string;
}

export const AuthSchema = SchemaFactory.createForClass(AuthModel);
