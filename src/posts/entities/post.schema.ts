import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type PostDocument = Post & Document;

@Schema()
export class Post {
    
    @Prop()
    title: string;
    
    @Prop()
    content: string;
    
    @Prop([String])
    tags: string[];

}

export const PostSchema = SchemaFactory.createForClass(Post)