# upfuze

- [How To Run](#run)
- [API Documentation](#api-docs)

<a id="run"></a>
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

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
