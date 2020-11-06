import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Fandom extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    length: 50,
  })
  fandomType: string

  @Column({
    length: 250,
  })
  name: string

  @Column({
    length: 100,
    nullable: true,
  })
  author: string

  @Column({
    length: 500,
  })
  length: string
}
