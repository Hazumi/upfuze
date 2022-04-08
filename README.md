# upfuze

# Users

- Github Account Signup/signin Oauth

```type
{
    githubAccountId: string // not sure what github sign on needs
    email: string
    password: string
    phone: string   // format before instead
    name: string    // must be at least characters long
    avatarImageUrl: string // must be url
    createdAt: Date
}
```

# Project Posts
- A project post is created and owned by 

```typescript
{
    projectPostId: string
    ownerUserId: string
    type: 'open-source' | 'commercial' // dropdown with two options
    name: string
    description: string // general description, goals
    timeFrameNumberOfMonths: number // zero means no 'no time frame, unsure, to-be-dated'

    createdAt: Date
}
```

# Project Goals
- A project can have many goals

======================
[ ] 'name of goal' ( Due in 16 days )
======================

```typescript
{
    projectGoalId: string
    projectPostId: string // the project post this goal belongs to
    name: string
    dueDate: Date
    completedAt: Date
    createdAt: Date
}
```

# Project Position Posts

- Name of needed position
```typescript
{
    projectPostId: string
    name: string
    description: string
    keywords: string[]  // for predictive text tag searching/adding
    createdAt: Date
}
```
