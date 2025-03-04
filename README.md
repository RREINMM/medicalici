
# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/6f97df7e-f15b-451c-a850-b36f05720f45

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/6f97df7e-f15b-451c-a850-b36f05720f45) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## How to deploy to GoDaddy

### Step 1: Build the application
Run the build command to create a production-ready version of your app:
```sh
npm run build
```

This will create a `dist` folder with all the static files needed to serve your application.

### Step 2: Upload to GoDaddy
1. Log in to your GoDaddy account and access your cPanel or File Manager
2. Navigate to the public_html folder (or your preferred deployment directory)
3. Upload all the files from the `dist` folder to this directory

### Step 3: Configure for client-side routing (important!)
If you're using React Router (which this project does), you'll need to create a .htaccess file to handle client-side routing:

```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

Upload this .htaccess file to the same directory where you uploaded your dist files.

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Alternative deployment options

You can also open [Lovable](https://lovable.dev/projects/6f97df7e-f15b-451c-a850-b36f05720f45) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

You can deploy this application to any hosting provider that supports static websites, including your GoDaddy hosting account.
