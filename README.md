# upfuze

# Users

- Github Account Signup/signin Oauth

```type
{
    email: string
    activated: boolean // default 'false'
    password: string
    phone?: string   // format before insert 
    name: string    // must be at least characters long
    avatarImageUrl: string // must be url
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
    summary: string // general description, goals
    timeFrameNumberOfMonths: number // zero means no 'no time frame, unsure, to-be-dated'
    notes: string // text area. project goals and information, general

    createdAt: Date
}
```

# Project Roles

```typescript
{
    projectRoleId: string
    projectPostId: string       // the project that this role belongs to

    name: string
    userIdThatFilledRole?: string

    createdAt: Date
}
```
