import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Chapter } from './Chapter'
import { Post } from './Post'

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
    length: 250,
  })
  length: string

  @OneToMany(() => Chapter, chapter => chapter.fandom)
  chapters: Chapter[]

  @OneToMany(() => Post, post => post.fandom)
  post: Post

  @Column({
    length: 100,
    nullable: true,
  })
  author: string

}
