This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```
npm install

npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Configuration In Development

The application requires certain environment variables to run correctly. These variables should be stored in a file named `.env` at the root of project.

### Step 1: Create the .env file

create a new file in the root of your project named `.env`.

### Step 2: Fill the .env file

The `.env.example` file in the root of the project contains all the environment variables that the application needs.

Copy the contents of the `.env.example` file and paste it into the `.env` file. It should look something like this:

```bash
# .env file
DATABASE_URL=
AUTH_SECRET=
```

## Default User Information

For testing purposes, the application comes with some pre-defined user accounts. You can use these accounts to test different functionalities and user roles in the application.

### Admin User

The admin user has full access to the application. Here are the login details for the admin user:

- **Username**: admin
- **Password**: 12345678

### Regular User

The regular user has limited access to the application. Here are the login details for the regular user:

- **Username**: test-user
- **Password**: 12345678

Please note that these accounts are for testing purposes only and should not be used in a production environment.
