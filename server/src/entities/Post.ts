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

<<<<<<< HEAD
  @Column()
  rating: number

  @Column()
  num_rating: number
=======
  @Column({
    default: 0,
  })
  upvote: number
>>>>>>> ae2adc3e69973132eeccf1bd0ae3122edef977e8

  @Column()
  title: string

  @Column()
  body: string
}
