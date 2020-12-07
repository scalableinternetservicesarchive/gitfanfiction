/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchUserContext
// ====================================================

export interface FetchUserContext_self {
  __typename: "User";
  id: number;
  name: string;
  userType: UserType;
}

export interface FetchUserContext {
  self: FetchUserContext_self | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchPost
// ====================================================

export interface FetchPost_post {
  __typename: "Post";
  title: string;
}

export interface FetchPost {
  post: FetchPost_post | null;
}

export interface FetchPostVariables {
  postId: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: MakeNewPost
// ====================================================

export interface MakeNewPost_makePost {
  __typename: "Post";
  id: number;
  title: string;
}

export interface MakeNewPost {
  makePost: MakeNewPost_makePost | null;
}

export interface MakeNewPostVariables {
  title: string;
  description: string;
  origin: number;
  ancestor: number;
  father: number;
  fatherIndex: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddChapter
// ====================================================

export interface AddChapter_addChapter {
  __typename: "Chapter";
  id: number;
  title: string;
}

export interface AddChapter {
  addChapter: AddChapter_addChapter | null;
}

export interface AddChapterVariables {
  title: string;
  body: string;
  length: number;
  originDirectFromFandom: boolean;
  postOrFandomId: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RateStory
// ====================================================

export interface RateStory_rateStory {
  __typename: "Post";
  rating: number;
}

export interface RateStory {
  rateStory: RateStory_rateStory | null;
}

export interface RateStoryVariables {
  some_story: number;
  rating: number;
  some_user: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: VoteComment
// ====================================================

export interface VoteComment_voteComment {
  __typename: "Comment";
  vote: number;
}

export interface VoteComment {
  voteComment: VoteComment_voteComment | null;
}

export interface VoteCommentVariables {
  some_comment: number;
  user: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: MakeComment
// ====================================================

export interface MakeComment_makeComment {
  __typename: "Comment";
  id: number;
}

export interface MakeComment {
  makeComment: MakeComment_makeComment | null;
}

export interface MakeCommentVariables {
  story: number;
  body: string;
  time: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PostPageQuery
// ====================================================

export interface PostPageQuery_post_origin {
  __typename: "Chapter";
  id: number;
}

export interface PostPageQuery_post {
  __typename: "Post";
  origin: PostPageQuery_post_origin;
  title: string;
  length: string;
  ancestor: number;
  id: number;
  authorId: number;
}

export interface PostPageQuery_getPostChapters {
  __typename: "Chapter";
  id: number;
  order: number;
  title: string;
}

export interface PostPageQuery {
  post: PostPageQuery_post | null;
  getPostChapters: PostPageQuery_getPostChapters[];
}

export interface PostPageQueryVariables {
  postid: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ViewpageQuery
// ====================================================

export interface ViewpageQuery_comment {
  __typename: "Comment";
  body: string;
}

export interface ViewpageQuery {
  comment: (ViewpageQuery_comment | null)[];
}

export interface ViewpageQueryVariables {
  postid: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FandomDataQuery
// ====================================================

export interface FandomDataQuery_fandom {
  __typename: "Fandom";
  fandomType: string;
  name: string;
  length: string | null;
  author: string;
  id: number;
}

export interface FandomDataQuery {
  fandom: FandomDataQuery_fandom | null;
}

export interface FandomDataQueryVariables {
  fandomid: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchChapters
// ====================================================

export interface FetchChapters_getPostChapters {
  __typename: "Chapter";
  order: number;
  title: string;
  body: string;
}

export interface FetchChapters_post {
  __typename: "Post";
  title: string;
  length: string;
  id: number;
  authorId: number;
}

export interface FetchChapters {
  getPostChapters: FetchChapters_getPostChapters[];
  post: FetchChapters_post | null;
}

export interface FetchChaptersVariables {
  postid: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllFandom
// ====================================================

export interface AllFandom_fandoms {
  __typename: "Fandom";
  id: number;
  name: string;
}

export interface AllFandom {
  fandoms: AllFandom_fandoms[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getBranchContext
// ====================================================

export interface getBranchContext_fandom {
  __typename: "Fandom";
  id: number;
  name: string;
  length: string | null;
}

export interface getBranchContext {
  fandom: getBranchContext_fandom | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: searchFandoms
// ====================================================

export interface searchFandoms_searchFandom {
  __typename: "Fandom";
  name: string;
  author: string;
}

export interface searchFandoms {
  searchFandom: searchFandoms_searchFandom[];
}

export interface searchFandomsVariables {
  query: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: searchPosts
// ====================================================

export interface searchPosts_searchPost {
  __typename: "Post";
  title: string;
  description: string;
}

export interface searchPosts {
  searchPost: searchPosts_searchPost[];
}

export interface searchPostsVariables {
  query: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchSurveys
// ====================================================

export interface FetchSurveys_surveys_currentQuestion_answers {
  __typename: "SurveyAnswer";
  answer: string;
}

export interface FetchSurveys_surveys_currentQuestion {
  __typename: "SurveyQuestion";
  id: number;
  prompt: string;
  choices: string[] | null;
  answers: FetchSurveys_surveys_currentQuestion_answers[];
}

export interface FetchSurveys_surveys {
  __typename: "Survey";
  id: number;
  name: string;
  isStarted: boolean;
  isCompleted: boolean;
  currentQuestion: FetchSurveys_surveys_currentQuestion | null;
}

export interface FetchSurveys {
  surveys: FetchSurveys_surveys[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: SurveySubscription
// ====================================================

export interface SurveySubscription_surveyUpdates_currentQuestion_answers {
  __typename: "SurveyAnswer";
  answer: string;
}

export interface SurveySubscription_surveyUpdates_currentQuestion {
  __typename: "SurveyQuestion";
  id: number;
  prompt: string;
  choices: string[] | null;
  answers: SurveySubscription_surveyUpdates_currentQuestion_answers[];
}

export interface SurveySubscription_surveyUpdates {
  __typename: "Survey";
  id: number;
  name: string;
  isStarted: boolean;
  isCompleted: boolean;
  currentQuestion: SurveySubscription_surveyUpdates_currentQuestion | null;
}

export interface SurveySubscription {
  surveyUpdates: SurveySubscription_surveyUpdates | null;
}

export interface SurveySubscriptionVariables {
  surveyId: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchSurvey
// ====================================================

export interface FetchSurvey_survey_currentQuestion_answers {
  __typename: "SurveyAnswer";
  answer: string;
}

export interface FetchSurvey_survey_currentQuestion {
  __typename: "SurveyQuestion";
  id: number;
  prompt: string;
  choices: string[] | null;
  answers: FetchSurvey_survey_currentQuestion_answers[];
}

export interface FetchSurvey_survey {
  __typename: "Survey";
  id: number;
  name: string;
  isStarted: boolean;
  isCompleted: boolean;
  currentQuestion: FetchSurvey_survey_currentQuestion | null;
}

export interface FetchSurvey {
  survey: FetchSurvey_survey | null;
}

export interface FetchSurveyVariables {
  surveyId: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AnswerSurveyQuestion
// ====================================================

export interface AnswerSurveyQuestion {
  answerSurvey: boolean;
}

export interface AnswerSurveyQuestionVariables {
  input: SurveyInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: NextSurveyQuestion
// ====================================================

export interface NextSurveyQuestion_nextSurveyQuestion_currentQuestion_answers {
  __typename: "SurveyAnswer";
  answer: string;
}

export interface NextSurveyQuestion_nextSurveyQuestion_currentQuestion {
  __typename: "SurveyQuestion";
  id: number;
  prompt: string;
  choices: string[] | null;
  answers: NextSurveyQuestion_nextSurveyQuestion_currentQuestion_answers[];
}

export interface NextSurveyQuestion_nextSurveyQuestion {
  __typename: "Survey";
  id: number;
  name: string;
  isStarted: boolean;
  isCompleted: boolean;
  currentQuestion: NextSurveyQuestion_nextSurveyQuestion_currentQuestion | null;
}

export interface NextSurveyQuestion {
  nextSurveyQuestion: NextSurveyQuestion_nextSurveyQuestion | null;
}

export interface NextSurveyQuestionVariables {
  surveyId: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Survey
// ====================================================

export interface Survey_currentQuestion_answers {
  __typename: "SurveyAnswer";
  answer: string;
}

export interface Survey_currentQuestion {
  __typename: "SurveyQuestion";
  id: number;
  prompt: string;
  choices: string[] | null;
  answers: Survey_currentQuestion_answers[];
}

export interface Survey {
  __typename: "Survey";
  id: number;
  name: string;
  isStarted: boolean;
  isCompleted: boolean;
  currentQuestion: Survey_currentQuestion | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: SurveyQuestion
// ====================================================

export interface SurveyQuestion_answers {
  __typename: "SurveyAnswer";
  answer: string;
}

export interface SurveyQuestion {
  __typename: "SurveyQuestion";
  id: number;
  prompt: string;
  choices: string[] | null;
  answers: SurveyQuestion_answers[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum UserType {
  ADMIN = "ADMIN",
  USER = "USER",
}

export interface SurveyInput {
  questionId: number;
  answer: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
