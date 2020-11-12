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

  @Column({
    default: 0,
  })
  upvote: number

  @Column()
  title: string

  @Column({
  })
  body: string


  get upvotes() {
    return this.upvote
  }

}
