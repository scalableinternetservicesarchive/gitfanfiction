import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  origin: number

  @Column()
  start: string

  @Column()
  length: string

  @Column()
  rating: number

  @Column()
  num_rating: number

  @Column()
  title: string

  @Column()
  body: string
}
