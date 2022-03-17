---
layout: ../../layouts/BlogPost.astro
featured: true
title: My Dev Cheatsheet
description: This article is not code-intensive, so you won’t need much coding
  experience. You do need to have a VsCode and a Netlify account. You can create
  a Netlify account here and download Vs Code here.
image: /images/uploads/how-to-make-a-website-in-5-mins.png
published: true
tags:
  - VsCode
  - HTML
category:
  - oss
date: 2022-02-23T17:54:04.139Z
publishDate: 2020-02-09
---





#### digital envelope routines

- export NODE_OPTIONS=--openssl-legacy-provider  


#### Install Node.js on Windows Subsystem for Linux (WSL2)

- https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl
  




To change all the directories to 755 (drwxr-xr-x):


``` js
find -type d -exec chmod 755 {} \;
```


To change all the files to 644 (-rw-r--r--):

``` ruby
find -type f -exec chmod 644 {} \;
```