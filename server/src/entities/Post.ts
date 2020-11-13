import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Chapter } from './Chapter'

@Entity()
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => Chapter, chapter => chapter.children)
  origin: Chapter

  @Column({
    default: 0,
  })
  upvote: number

  @OneToMany(() => Chapter, chapter => chapter.post)
  chapters: Chapter[]

  @Column()
  title: string

  @Column({
  })
  description: string


  get upvotes() {
    return this.upvote
  }

}
