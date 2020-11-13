# Server documentation

Chapters are the breakpoints from which new stories will start. Both posts and fandoms will contain chapters, but the querying is slightly different for each.

## How to query a chapter

POST (a story made by user):
```
query getChapters{
  getFandomChapters(fandomId: 1) {
    order
    title
  }
}
```

FANDOM (the original source material):
```
query getChapters{
  getPostChapters(postId: 1) {
    order
    title
    body
  }
}
```

Again, you can query any fields that you wish. The complete list of fields held by the chapter database is as follows:

{
    id
    order
    originDirectFromFandom
    post
    fandom
    title
    body
}

### by specific ID
```
query getChapters{
  chapter(chapterId: 1){
    id
    order
    originDirectFromFandom
    post
    fandom
    title
    body
    children{
      title
      description
    }
  }
}
```
The children field in the chapter class is used for storing the stories that originate from that particular chapter.
This will be useful for retrieving the chapter origin info for a particular story (the ID in question can be retrieved by the following query):
```
query getPostOrigin{
  post(postId: 1){
    origin {
      ...
    }
  }
}
```

## How to add a chapter

POST (a story made by user):
```
mutation addChapterPost {
  addChapter(input: {
    title: "Epilogue"
    body: "And they all lived happily ever after."
    postOrFandomId: 1
    originDirectFromFandom: false
  }) {
    order
    title
    body
  }
}
```

You can also query other fields if you wish.

FANDOM (the original source material):
```
mutation addChapterFandom {
  addChapter(input: {
    title: "Cursed Child"
    body: ""
    postOrFandomId: 1
    originDirectFromFandom: true
  }) {
    order
    title
  }
}
```

(NOTE: Put in an empty string "" for body in mutation addChapterFandom, for there is no default value allowed for its associated field in MySQL as it is of data type text).
originDirectFromFandom basically allows you to add the chapter to the appropriate database by ID; if true it will place in Fandom, and if false it will be placed in Post.

Like with POST, you can query other fields that you wish.

## Miscellaneous information

WARNING: Some of the above queries may not work with the migration data since GraphQL did not link that data and it was parsed by SQL directly, but if you work with data that is exclusively added using GraphQL, all of the above will work.