import { Field, ObjectType } from 'type-graphql';
import { TypeormLoader } from 'type-graphql-dataloader';
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, RelationId } from 'typeorm';
import { Chapter } from './Chapter';

@ObjectType()
@Entity()
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => Chapter, chapter => chapter.children, { cascade: true })
  @TypeormLoader((type) => Chapter, (post: Post) => post.originId)
  origin: Chapter

  @RelationId((post: Post) => post.origin)
  originId: number;

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

  @Field((type) => [Chapter])
  @OneToMany((type) => Chapter, chapter => chapter.post, { cascade: true })
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

  @Column({
    default: 0, //means error. no one wrote it
  })
  authorId: number //user id



  get upvotes() {
    return this.upvote
  }
}
