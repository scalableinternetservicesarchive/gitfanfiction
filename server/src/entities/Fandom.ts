import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Chapter } from './Chapter'

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
    default: "",
    length: 250,
  })
  length: string

  @OneToMany(() => Chapter, chapter => chapter.fandom)
  chapters: Chapter[]

  @Column({
    length: 100,
    nullable: true,
  })
  author: string

}
