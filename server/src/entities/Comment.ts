import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  body: string

  @Column()
  time: string

  @Column()
  vote: number

  get votes() {
    return this.vote
  }
}
