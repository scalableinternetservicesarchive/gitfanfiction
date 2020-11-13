import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Chapter } from './Chapter'
import { Fandom } from './Fandom'

@Entity()
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => Chapter, chapter => chapter.children)
  origin: Chapter

  @ManyToOne(() => Fandom, fandom => fandom.post)
  fandom: Fandom

  @Column({
    type: "float",
    default: 0
  })
  rating: number

  @Column({
    default: 0
  })
  num_rating: number

  @Column({
    default: 0,
  })
  upvote: number

  @OneToMany(() => Chapter, chapter => chapter.post)
  chapters: Chapter[]

  @Column({
    length: 250,
    default: ""
  })
  length: string

  @Column()
  title: string

  @Column({
  })
  description: string



  get upvotes() {
    return this.upvote
  }
}
