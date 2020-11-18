import { GraphQLResolveInfo } from 'graphql'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } &
  { [P in K]-?: NonNullable<T[P]> }
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export interface Query {
  __typename?: 'Query'
  self?: Maybe<User>
  fandoms: Array<Fandom>
  fandom?: Maybe<Fandom>
  posts: Array<Post>
  post?: Maybe<Post>
  ratings: Array<Rating>
  rating?: Maybe<Rating>
  upvotes: Array<Upvote>
  upvote?: Maybe<Upvote>
  comments: Array<Comment>
  comment?: Maybe<Comment>
  surveys: Array<Survey>
  survey?: Maybe<Survey>
  chapters: Array<Chapter>
  chapter?: Maybe<Chapter>
  getFandomChapters: Array<Chapter>
  getPostChapters: Array<Chapter>
}

export interface QueryFandomArgs {
  fandomId: Scalars['Int']
}

export interface QueryPostArgs {
  postId: Scalars['Int']
}

export interface QueryRatingArgs {
  ratingId: Scalars['Int']
}

export interface QueryUpvoteArgs {
  upvoteId: Scalars['Int']
}

export interface QueryCommentArgs {
  commentId: Scalars['Int']
}

export interface QuerySurveyArgs {
  surveyId: Scalars['Int']
}

export interface QueryChapterArgs {
  chapterId: Scalars['Int']
}

export interface QueryGetFandomChaptersArgs {
  fandomId: Scalars['Int']
}

export interface QueryGetPostChaptersArgs {
  postId: Scalars['Int']
}

export interface Mutation {
  __typename?: 'Mutation'
  addFandom?: Maybe<Fandom>
  addUser?: Maybe<User>
  addChapter?: Maybe<Chapter>
  makePost?: Maybe<Post>
  makeComment?: Maybe<Comment>
  answerSurvey: Scalars['Boolean']
  rateStory?: Maybe<Post>
  voteComment?: Maybe<Scalars['Boolean']>
  nextSurveyQuestion?: Maybe<Survey>
}

export interface MutationAddFandomArgs {
  input: FandomInput
}

export interface MutationAddUserArgs {
  input: UserInput
}

export interface MutationAddChapterArgs {
  input: ChapterInput
}

export interface MutationMakePostArgs {
  input: PostInput
}

export interface MutationMakeCommentArgs {
  input: CommentInput
}

export interface MutationAnswerSurveyArgs {
  input: SurveyInput
}

export interface MutationRateStoryArgs {
  input: RatingInput
}

export interface MutationVoteCommentArgs {
  input: VoteInput
}

export interface MutationNextSurveyQuestionArgs {
  surveyId: Scalars['Int']
}

export interface Subscription {
  __typename?: 'Subscription'
  surveyUpdates?: Maybe<Survey>
}

export interface SubscriptionSurveyUpdatesArgs {
  surveyId: Scalars['Int']
}

export interface User {
  __typename?: 'User'
  id: Scalars['Int']
  userType: UserType
  email: Scalars['String']
  password: Scalars['String']
  name: Scalars['String']
}

export interface UserInput {
  email: Scalars['String']
  password: Scalars['String']
}

export interface Fandom {
  __typename?: 'Fandom'
  id: Scalars['Int']
  fandomType: Scalars['String']
  name: Scalars['String']
  chapters: Array<Chapter>
  author: Scalars['String']
  length?: Maybe<Scalars['String']>
}

export interface FandomInput {
  fandomType: Scalars['String']
  name: Scalars['String']
  author: Scalars['String']
}

export interface Originstory {
  __typename?: 'Originstory'
  id: Scalars['Int']
  length: Array<Scalars['Int']>
  type: Scalars['String']
}

export interface Post {
  __typename?: 'Post'
  id: Scalars['Int']
  origin: Chapter
  rating: Scalars['Float']
  num_rating: Scalars['Int']
  chapters: Array<Chapter>
  upvote: Scalars['Int']
  title: Scalars['String']
  description: Scalars['String']
  length?: Maybe<Scalars['Int']>
}

export interface RatingInput {
  some_story: Scalars['Int']
  rating: Scalars['Int']
  some_user: Scalars['Int']
}

export interface VoteInput {
  some_comment: Scalars['Int']
  user: Scalars['Int']
}

export interface PostInput {
  origin: Scalars['Int']
  title: Scalars['String']
  description: Scalars['String']

  //terrible terrible
  length: Scalars['Int']
  father: Scalars['Int']
  ancestor: Scalars['Int']
  fatherIndex: Scalars['String']
}

export interface Chapter {
  __typename?: 'Chapter'
  id: Scalars['Int']
  order: Scalars['Int']
  originDirectFromFandom: Scalars['Boolean']
  length: Scalars['Int']
  rating: Scalars['Float']
  num_rating: Scalars['Int']
  title: Scalars['String']
  post?: Maybe<Post>
  fandom?: Maybe<Fandom>
  children?: Maybe<Array<Post>>
  body: Scalars['String']
}

export interface ChapterInput {
  title: Scalars['String']
  length: Scalars['Int']
  originDirectFromFandom: Scalars['Boolean']
  postOrFandomId: Scalars['Int']
  body: Scalars['String']
}

export interface Rating {
  __typename?: 'Rating'
  id: Scalars['Int']
  story: Scalars['Int']
  rating: Scalars['Int']
  user: Scalars['Int']
}

export interface Comment {
  __typename?: 'Comment'
  id: Scalars['Int']
  story: Scalars['Int']
  body: Scalars['String']
  vote: Scalars['Int']
  time: Scalars['String']
}

export interface CommentInput {
  story: Scalars['Int']
  body: Scalars['String']
  time: Scalars['String']
}

export interface Upvote {
  __typename?: 'Upvote'
  id: Scalars['Int']
  comment: Scalars['Int']
  user: Scalars['Int']
}

export enum UserType {
  Admin = 'ADMIN',
  User = 'USER',
}

export interface Survey {
  __typename?: 'Survey'
  id: Scalars['Int']
  name: Scalars['String']
  isStarted: Scalars['Boolean']
  isCompleted: Scalars['Boolean']
  currentQuestion?: Maybe<SurveyQuestion>
  questions: Array<Maybe<SurveyQuestion>>
}

export interface SurveyQuestion {
  __typename?: 'SurveyQuestion'
  id: Scalars['Int']
  prompt: Scalars['String']
  choices?: Maybe<Array<Scalars['String']>>
  answers: Array<SurveyAnswer>
  survey: Survey
}

export interface SurveyAnswer {
  __typename?: 'SurveyAnswer'
  id: Scalars['Int']
  answer: Scalars['String']
  question: SurveyQuestion
}

export interface SurveyInput {
  questionId: Scalars['Int']
  answer: Scalars['String']
}

export type ResolverTypeWrapper<T> = Promise<T> | T

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>
  Int: ResolverTypeWrapper<Scalars['Int']>
  Mutation: ResolverTypeWrapper<{}>
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>
  Subscription: ResolverTypeWrapper<{}>
  User: ResolverTypeWrapper<User>
  String: ResolverTypeWrapper<Scalars['String']>
  UserInput: UserInput
  Fandom: ResolverTypeWrapper<Fandom>
  FandomInput: FandomInput
  Originstory: ResolverTypeWrapper<Originstory>
  Post: ResolverTypeWrapper<Post>
  Float: ResolverTypeWrapper<Scalars['Float']>
  RatingInput: RatingInput
  VoteInput: VoteInput
  PostInput: PostInput
  Chapter: ResolverTypeWrapper<Chapter>
  ChapterInput: ChapterInput
  Rating: ResolverTypeWrapper<Rating>
  Comment: ResolverTypeWrapper<Comment>
  CommentInput: CommentInput
  Upvote: ResolverTypeWrapper<Upvote>
  UserType: UserType
  Survey: ResolverTypeWrapper<Survey>
  SurveyQuestion: ResolverTypeWrapper<SurveyQuestion>
  SurveyAnswer: ResolverTypeWrapper<SurveyAnswer>
  SurveyInput: SurveyInput
}

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {}
  Int: Scalars['Int']
  Mutation: {}
  Boolean: Scalars['Boolean']
  Subscription: {}
  User: User
  String: Scalars['String']
  UserInput: UserInput
  Fandom: Fandom
  FandomInput: FandomInput
  Originstory: Originstory
  Post: Post
  Float: Scalars['Float']
  RatingInput: RatingInput
  VoteInput: VoteInput
  PostInput: PostInput
  Chapter: Chapter
  ChapterInput: ChapterInput
  Rating: Rating
  Comment: Comment
  CommentInput: CommentInput
  Upvote: Upvote
  Survey: Survey
  SurveyQuestion: SurveyQuestion
  SurveyAnswer: SurveyAnswer
  SurveyInput: SurveyInput
}

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
  > = {
    self?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
    fandoms?: Resolver<Array<ResolversTypes['Fandom']>, ParentType, ContextType>
    fandom?: Resolver<
      Maybe<ResolversTypes['Fandom']>,
      ParentType,
      ContextType,
      RequireFields<QueryFandomArgs, 'fandomId'>
    >
    posts?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType>
    post?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<QueryPostArgs, 'postId'>>
    ratings?: Resolver<Array<ResolversTypes['Rating']>, ParentType, ContextType>
    rating?: Resolver<
      Maybe<ResolversTypes['Rating']>,
      ParentType,
      ContextType,
      RequireFields<QueryRatingArgs, 'ratingId'>
    >
    upvotes?: Resolver<Array<ResolversTypes['Upvote']>, ParentType, ContextType>
    upvote?: Resolver<
      Maybe<ResolversTypes['Upvote']>,
      ParentType,
      ContextType,
      RequireFields<QueryUpvoteArgs, 'upvoteId'>
    >
    comments?: Resolver<Array<ResolversTypes['Comment']>, ParentType, ContextType>
    comment?: Resolver<
      Maybe<ResolversTypes['Comment']>,
      ParentType,
      ContextType,
      RequireFields<QueryCommentArgs, 'commentId'>
    >
    surveys?: Resolver<Array<ResolversTypes['Survey']>, ParentType, ContextType>
    survey?: Resolver<
      Maybe<ResolversTypes['Survey']>,
      ParentType,
      ContextType,
      RequireFields<QuerySurveyArgs, 'surveyId'>
    >
    chapters?: Resolver<Array<ResolversTypes['Chapter']>, ParentType, ContextType>
    chapter?: Resolver<
      Maybe<ResolversTypes['Chapter']>,
      ParentType,
      ContextType,
      RequireFields<QueryChapterArgs, 'chapterId'>
    >
    getFandomChapters?: Resolver<
      Array<ResolversTypes['Chapter']>,
      ParentType,
      ContextType,
      RequireFields<QueryGetFandomChaptersArgs, 'fandomId'>
    >
    getPostChapters?: Resolver<
      Array<ResolversTypes['Chapter']>,
      ParentType,
      ContextType,
      RequireFields<QueryGetPostChaptersArgs, 'postId'>
    >
  }

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
  > = {
    addFandom?: Resolver<
      Maybe<ResolversTypes['Fandom']>,
      ParentType,
      ContextType,
      RequireFields<MutationAddFandomArgs, 'input'>
    >
    addUser?: Resolver<
      Maybe<ResolversTypes['User']>,
      ParentType,
      ContextType,
      RequireFields<MutationAddUserArgs, 'input'>
    >
    addChapter?: Resolver<
      Maybe<ResolversTypes['Chapter']>,
      ParentType,
      ContextType,
      RequireFields<MutationAddChapterArgs, 'input'>
    >
    makePost?: Resolver<
      Maybe<ResolversTypes['Post']>,
      ParentType,
      ContextType,
      RequireFields<MutationMakePostArgs, 'input'>
    >
    makeComment?: Resolver<
      Maybe<ResolversTypes['Comment']>,
      ParentType,
      ContextType,
      RequireFields<MutationMakeCommentArgs, 'input'>
    >
    answerSurvey?: Resolver<
      ResolversTypes['Boolean'],
      ParentType,
      ContextType,
      RequireFields<MutationAnswerSurveyArgs, 'input'>
    >
    rateStory?: Resolver<
      Maybe<ResolversTypes['Post']>,
      ParentType,
      ContextType,
      RequireFields<MutationRateStoryArgs, 'input'>
    >
    voteComment?: Resolver<
      Maybe<ResolversTypes['Boolean']>,
      ParentType,
      ContextType,
      RequireFields<MutationVoteCommentArgs, 'input'>
    >
    nextSurveyQuestion?: Resolver<
      Maybe<ResolversTypes['Survey']>,
      ParentType,
      ContextType,
      RequireFields<MutationNextSurveyQuestionArgs, 'surveyId'>
    >
  }

export type SubscriptionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']
  > = {
    surveyUpdates?: SubscriptionResolver<
      Maybe<ResolversTypes['Survey']>,
      'surveyUpdates',
      ParentType,
      ContextType,
      RequireFields<SubscriptionSurveyUpdatesArgs, 'surveyId'>
    >
  }

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
  > = {
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
    userType?: Resolver<ResolversTypes['UserType'], ParentType, ContextType>
    email?: Resolver<ResolversTypes['String'], ParentType, ContextType>
    password?: Resolver<ResolversTypes['String'], ParentType, ContextType>
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
    __isTypeOf?: IsTypeOfResolverFn<ParentType>
  }

export type FandomResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Fandom'] = ResolversParentTypes['Fandom']
  > = {
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
    fandomType?: Resolver<ResolversTypes['String'], ParentType, ContextType>
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
    chapters?: Resolver<Array<ResolversTypes['Chapter']>, ParentType, ContextType>
    author?: Resolver<ResolversTypes['String'], ParentType, ContextType>
    length?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
    __isTypeOf?: IsTypeOfResolverFn<ParentType>
  }

export type OriginstoryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Originstory'] = ResolversParentTypes['Originstory']
  > = {
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
    length?: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>
    type?: Resolver<ResolversTypes['String'], ParentType, ContextType>
    __isTypeOf?: IsTypeOfResolverFn<ParentType>
  }

export type PostResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']
  > = {
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
    origin?: Resolver<ResolversTypes['Chapter'], ParentType, ContextType>
    rating?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
    num_rating?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
    chapters?: Resolver<Array<ResolversTypes['Chapter']>, ParentType, ContextType>
    upvote?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
    title?: Resolver<ResolversTypes['String'], ParentType, ContextType>
    description?: Resolver<ResolversTypes['String'], ParentType, ContextType>
    length?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
    __isTypeOf?: IsTypeOfResolverFn<ParentType>
  }

export type ChapterResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Chapter'] = ResolversParentTypes['Chapter']
  > = {
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
    order?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
    originDirectFromFandom?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
    length?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
    rating?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
    num_rating?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
    title?: Resolver<ResolversTypes['String'], ParentType, ContextType>
    post?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType>
    fandom?: Resolver<Maybe<ResolversTypes['Fandom']>, ParentType, ContextType>
    children?: Resolver<Maybe<Array<ResolversTypes['Post']>>, ParentType, ContextType>
    body?: Resolver<ResolversTypes['String'], ParentType, ContextType>
    __isTypeOf?: IsTypeOfResolverFn<ParentType>
  }

export type RatingResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Rating'] = ResolversParentTypes['Rating']
  > = {
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
    story?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
    rating?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
    user?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
    __isTypeOf?: IsTypeOfResolverFn<ParentType>
  }

export type CommentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']
  > = {
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
    story?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
    body?: Resolver<ResolversTypes['String'], ParentType, ContextType>
    vote?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
    time?: Resolver<ResolversTypes['String'], ParentType, ContextType>
    __isTypeOf?: IsTypeOfResolverFn<ParentType>
  }

export type UpvoteResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Upvote'] = ResolversParentTypes['Upvote']
  > = {
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
    comment?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
    user?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
    __isTypeOf?: IsTypeOfResolverFn<ParentType>
  }

export type SurveyResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Survey'] = ResolversParentTypes['Survey']
  > = {
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
    isStarted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
    isCompleted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
    currentQuestion?: Resolver<Maybe<ResolversTypes['SurveyQuestion']>, ParentType, ContextType>
    questions?: Resolver<Array<Maybe<ResolversTypes['SurveyQuestion']>>, ParentType, ContextType>
    __isTypeOf?: IsTypeOfResolverFn<ParentType>
  }

export type SurveyQuestionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SurveyQuestion'] = ResolversParentTypes['SurveyQuestion']
  > = {
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
    prompt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
    choices?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>
    answers?: Resolver<Array<ResolversTypes['SurveyAnswer']>, ParentType, ContextType>
    survey?: Resolver<ResolversTypes['Survey'], ParentType, ContextType>
    __isTypeOf?: IsTypeOfResolverFn<ParentType>
  }

export type SurveyAnswerResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SurveyAnswer'] = ResolversParentTypes['SurveyAnswer']
  > = {
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
    answer?: Resolver<ResolversTypes['String'], ParentType, ContextType>
    question?: Resolver<ResolversTypes['SurveyQuestion'], ParentType, ContextType>
    __isTypeOf?: IsTypeOfResolverFn<ParentType>
  }

export type Resolvers<ContextType = any> = {
  Query?: QueryResolvers<ContextType>
  Mutation?: MutationResolvers<ContextType>
  Subscription?: SubscriptionResolvers<ContextType>
  User?: UserResolvers<ContextType>
  Fandom?: FandomResolvers<ContextType>
  Originstory?: OriginstoryResolvers<ContextType>
  Post?: PostResolvers<ContextType>
  Chapter?: ChapterResolvers<ContextType>
  Rating?: RatingResolvers<ContextType>
  Comment?: CommentResolvers<ContextType>
  Upvote?: UpvoteResolvers<ContextType>
  Survey?: SurveyResolvers<ContextType>
  SurveyQuestion?: SurveyQuestionResolvers<ContextType>
  SurveyAnswer?: SurveyAnswerResolvers<ContextType>
}

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>
