import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Upvote extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  comment: number

  @Column()
  user: number


}
