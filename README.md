# Impulse - A Template for Netlify

Built using Netlify CMS, Eleventy, Alpine.js & TailwindCSS, Stripe

Perfect for blogging & ecomerce websites, Impulse Netlify comes with everything you need to get started with NetlifyCMS support.

## Live Demo

[https://novolio-impulse.netlify.app/](https://novolio-impulse.netlify.app/)

## Quick Install

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/rosstopping/impulse-netlify&amp;stack=cms"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" /></a>

## Using template on Netlify

### 1\. Setup a new git repository

```
git init
git add .
git commit -m "init"
git remote add origin https://github.com/<username>/<reponame>.git
git branch -M main
git push -u origin main
```

### 2\. Login with Netlify and connect your new repository

Navigate to [netlify.com](https://netlify.com) and login or create a new account. Click 'new site from git', connect your github account and select your newly created repo.

### 3\. Enable Netlify Identity

Go to the Identify section to enable. Then make sure to enable 'Git Gateway'. We recommend disabling registration otherwise you leave your CMS open to anyone. 

![image](https://novolio.dev/images/git-gateway.png)

### 4\. Email Templates
All of our themes come with custom email templates for use with Netlify. To enable these go to the Identity > Emails section and enter the following paths for each template.

#### Invitation template
``` /email-templates/invitation.html ```

#### Confirmation template
``` /email-templates/confirmation.html ```

#### Recovery template
``` /email-templates/recovery.html ```

#### Email change template
``` /email-templates/email-change.html ```

## Development

### 1\. Clone this Repository

```
git clone https://github.com/rosstopping/impulse-netlify.git
```

### 2\. Navigate to the directory

```
cd impulse-netlify
```

### 3\. Install dependencies

```
npm install
```

### 4\. Build the project to generate the first CSS

This step is only required the very first time.

```
npm run build
```

### 5\. Run Eleventy

```
npm run start
```

## Author

Digizu [@digizultd](https://digizu.co.uk/)
