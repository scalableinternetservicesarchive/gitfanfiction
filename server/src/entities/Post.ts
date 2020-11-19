import { Field, ObjectType } from 'type-graphql';
import { TypeormLoader } from 'type-graphql-dataloader';
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, RelationId } from 'typeorm';
import { Chapter } from './Chapter';

@ObjectType()
@Entity()
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => Chapter, chapter => chapter.children, {cascade: true})
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
  @OneToMany((type) => Chapter, chapter => chapter.post, {cascade: true})
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
