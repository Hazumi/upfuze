# upfuze

- [How To Run](#run)
- [How To Run](#run)
- [API Documentation](#api-docs)

<a id="run"></a>
## Getting Started

```bash
cp .env.example .env.local
open .env.local
```

First, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More About Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

<hr>

<a id="api-docs"></a>
# API Documentation

These are not final and are open to changes ( please make pull request )

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
