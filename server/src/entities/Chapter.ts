import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Fandom } from './Fandom'
import { Post } from './Post'

@Entity()
export class Chapter extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  order: number

  @Column()
  originDirectFromFandom: boolean

  @ManyToOne(() => Post, post => post.chapters, {
    nullable: true
  })
  post: Post

  @ManyToOne(() => Fandom, fandom => fandom.chapters, {
    nullable: true
  })
  fandom: Fandom

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