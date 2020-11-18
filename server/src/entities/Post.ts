import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Chapter } from './Chapter'

@Entity()
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => Chapter, chapter => chapter.children)
  origin: Chapter

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
    default: ""
  })
  length: string

  @Column()
  title: string

  @Column({
  })
  description: string


  //Terrible just Terrible
  @Column()
  ancestor: number // fandom id

  @Column()
  fatherIndex: string
  // position from post (i.e.   3,13 = book 3 chapter 13)
  // book 0 means post. book 1-n means fandom

  @Column()
  father: number // post or fandom id




  get upvotes() {
    return this.upvote
  }
}
