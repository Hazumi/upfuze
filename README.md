# upfuze

# Users

- Github Account Signup/signin Oauth

```type
{
    githubAccountId: string // not sure what github sign on needs
    email: string
    activated: boolean // default 'false'
    password: string
    phone: string   // format before insert
    name: string    // must be at least characters long
    avatarImageUrl: string // must be url

    // maybe in onboarding to 'setup profile', optional
    availableTimeFrames: [
        'mondays after 8:00pm',
        'tuesdays after 4:00pm'
    ],

    // prompt as skippable onboarding to 'setup profile', optional
    wantedKeywords: [
        'Adobe XD',
        'React',
        'Graphql'
    ],

    createdAt: Date
}
```

# Email Signup Confirmations
```typescript
{
    userId: string
    createdAt: Date
}
```

# Project Posts
- A project post is created and owned by 

```typescript
{
    projectPostId: string
    ownerUserId: string
    coverImageUrl?: string // must be url
    type: 'open-source' | 'commercial' // dropdown with two options
    name: string
    description: string // general description, goals
    timeFrameNumberOfMonths: number // zero means no 'no time frame, unsure, to-be-dated'

    createdAt: Date
}
```

# Project Goals
- A project can have many goals

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

