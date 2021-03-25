# Impulse - A Novolio Template for Netlify

Built using Netlify CMS, Eleventy, Alphine JS & Tailwind CSS

Perfect for blogging websites, Impulse Netlify comes with everything you need to get started with NetlifyCMS support.

## Live Demo

[https://novolio-impulse.netlify.app/](https://novolio-impulse.netlify.app/)

## Quick Install

[Deploy to netlify](https://app.netlify.com/start/deploy?repository=https://github.com/rosstopping/impulse-netlify&stack=cms)


| ![image](https://novolio.dev/images/themes/impulse/preview.png) |
| ------------------------------------------------------------------------------------------------------------- |

## Getting Started

Prefer to watch a quick tutorial? [Watch video](https://www.youtube.com/watch?v=b3R7Ca1saJI)

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


## Author

Novolio [@novolio_dev](https://novolio.dev/)
