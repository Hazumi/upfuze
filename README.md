# upfuze

- [How To Run](#run)
- [API Documentation](#api-docs)

<a id="run"></a>
## Getting Started

```bash
cp .env.example .env.local
open .env.local
```

## Github App Keys

1. Go to your Github settings -> Developer Settings
2. Go to GitHub Apps and 'New Github App'
3. Set your Homepage URL to whatever you want, and make sure the callback URL is **`https://domain.com/api/auth/callback/github`**
4. Create+Save, then "Generate a new client secret". This is the `GITHUB_SECRET`
5. The `Client ID` at the top of the page is the `GITHUB_ID`

## Start Mongo

Mongo is required to run upfuze. Easiest way is through docker


1. Start running a mongo container:

```
docker run -d \
   -v mongodata:/data/db \
   -e MONGO_INITDB_DATABASE=UPFUZE \
   -e MONGO_INITDB_ROOT_USERNAME=upfuze \
   -e MONGO_INITDB_ROOT_PASSWORD=password123 \
   -p 27017:27017 \
   --name mongo mongo
```

- `-d` is let it run in the background
- `-v` is to set the folder for the _volume_ of data
- `-e` is to set the environmental variables.
- `-p` is to open the mongo port 27017
- `--name` is set the name of this container to `mongo`

2. Set `MONGODB_URI` env var

- Would look like this based off the `docker run` command above
- **Do not use ROOT_USERNAME and ROOT_PASSWORD in production!!!**

```
MONGODB_URI="mongodb://upfuze:password123@localhost:27017/UPFUZE"

# like this:
# MONGODB_URI="mongodb://USERNAME:PASSWORD@localhost:27017/DATABASENAME"
```

## Serve the app

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
