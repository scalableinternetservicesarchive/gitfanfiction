import { Field, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Chapter } from './Chapter';

@ObjectType()
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

  @Field((type) => [Chapter])
  @OneToMany(() => Chapter, chapter => chapter.fandom, {cascade: true})
  chapters: Chapter[]

  @Column({
    length: 100,
    nullable: true,
  })
  author: string

}
