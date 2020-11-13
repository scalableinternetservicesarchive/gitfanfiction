/* eslint-disable prettier/prettier */
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Rating extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  story: number

  @Column()
  rating: number

  @Column()
  user: number


}
