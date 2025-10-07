import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export type ProductDocument = Product & Document;

@Schema({ collection: 'products' })
export class Product {
  @Prop({ required: true, unique: true })
  productName: string;

  @Prop({ default: 0 })
  productPrice: number;


  @Prop({ default: '' })
  productDetail: string;

  @Prop({ default: 0 })
  productStock: number;
}
export const ProductSchema = SchemaFactory.createForClass(Product);
