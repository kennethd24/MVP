
# TikTok Analytics

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
Dashboard to analyze any user's latest 100 videos on TikTok. 

<p align="center">
  <img src="https://user-images.githubusercontent.com/78133003/127193362-56d1ae78-3366-44bd-804c-76d9d206cb91.gif" alt="animated gif" />
</p>

To help my girlfriend's monthly task to collect video views and engagements on TikTok, I created this project as part of Hack Reactor's 2 day MVP sprint. This project helps gather, sort, and visualize data trends for competitive and business intelligence. It also has the functionality to toggle display of specific columns and a CSV exporter if further analyses is needed.

## Technologies
Project was created with:
* React
* Express
* PostgreSQL
* Chart
* Bootstrap
* [TikTok Feed API](https://rapidapi.com/premium-apis-premium-apis-default/api/tiktok33/)
* [TikTok Embed Videos](https://developers.tiktok.com/doc/embed-videos)
	
## Setup

### Config File
1. Make copy of example.config.js and rename to config.js
2. Create rapidapi key from https://rapidapi.com/
3. Paste into 'FILL_ME_IN'
4. Update PostgreSQL credentials

### Initialize project
To run this project, install it locally using npm:

```
$ cd ../TikTok-Analytics
$ npm install
$ npm build
$ npm start
```
