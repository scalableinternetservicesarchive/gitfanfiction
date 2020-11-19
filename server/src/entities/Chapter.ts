import { Field, ObjectType } from 'type-graphql'
import { TypeormLoader } from 'type-graphql-dataloader/dist/decorators/typeorm/TypeormLoader'
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, RelationId } from 'typeorm'
import { Fandom } from './Fandom'
import { Post } from './Post'

@ObjectType()
@Entity()
export class Chapter extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  order: number

  @Column()
  length: number

  @Column({
    type: "float",
    default: 0
  })
  rating: number

  @Column({
    default: 0
  })
  num_rating: number

  @Column()
  originDirectFromFandom: boolean

  @ManyToOne(() => Post, post => post.chapters, {
    nullable: true,
  })
  @TypeormLoader((type) => Post, (chapter: Chapter) => chapter.postId)
  post: Post

  @RelationId((chapter: Chapter) => chapter.post)
  postId: number;

  @ManyToOne(() => Fandom, fandom => fandom.chapters, {
    nullable: true,
  })
  @TypeormLoader((type) => Post, (chapter: Chapter) => chapter.fandomId)
  fandom: Fandom

  @RelationId((chapter: Chapter) => chapter.fandom)
  fandomId: number;

  @Field((type) => [Post])
  @OneToMany(() => Post, post => post.origin, {
    nullable: true
  })
  children: Post[]

  @Column({
    default: ""
  })
  title: string

  @Column({
    type: "text",
  })
  body: string
}