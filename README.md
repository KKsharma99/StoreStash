# StoreStash

App for CS 4261: Mobile Apps & Services, Spring 2020.

2nd place winner of the [Georgia Tech Convergence Innovation Competition: Global Response](http://www.cic.gatech.edu/).

Live demo: https://storestash.now.sh/

Video demo: https://vimeo.com/413484123. See https://vimeo.com/402859833 for an abridged version.

## Running locally

### Backend

`cd backend`

Create a MongoDB database, perhaps on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas). Remember to whitelist your connection IP address. Copy `.env.example` into a new `.env` file and replace the MongoDB <password> in `MONGODB_URI` with your actual one.

Install dependencies: `npm install`

Then, to start the server locally, run

```
npm run build
npm start
```

In production, if you end up using cookies, you should change the `SESSION_SECRET` environment variable.

### Web frontend

`cd frontend`

Install dependencies: `npm install`

Serve the app: `npm start`

The frontend is currently set to interact with the server at https://storestash.herokuapp.com. You can change the URL that requests are made to by editing `frontend/wretcher.ts`.

### Android frontend

To test with an Android device:
- Download the storestash.apk file from 'android/apk_file/storestash.apk' onto your device.
- When you open the file you're device will allow you to install and run the application.

To test with your computer:
- Download Android Studio
- In Android Studio, create an Android Virtual Device (AVD) that the emulator can use to run apps.
- Run an emulated device.
- Download the storestash.apk file from `android/apk_file/storestash.apk` onto your device.
- Drag and drop the apk file onto the emulated device and it will install the app.
Run the installed app.

## Deploying

### Frontend: Vercel

Note that currently, deploying the frontend to Heroku fails. Instead, you can deploy it with Vercel.

### Backend: Heroku

Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli), and then set it up:

```bash
npm install -g heroku # adds the heroku command to CLI on Windows
heroku login
```

Add Heroku remote. Replace the URLs here with the ones for your Heroku app.

```bash
git remote add storestash-app-heroku https://git.heroku.com/storestash-app.git
git remote add storestash-backend-heroku https://git.heroku.com/storestash.git
```

For the following instructions, make sure your command line is in the StoreStash folder, not backend/ or react_ionic

Push from the master branch (non-force):

```bash
git subtree push --prefix frontend storestash-app-heroku master
git subtree push --prefix backend storestash-backend-heroku master
```

Force push from the master branch:

```bash
git push storestash-app-heroku `git subtree split --prefix frontend master`:master --force
git push storestash-backend-heroku `git subtree split --prefix backend master`:master --force
```

Other commands that may be helpful:
```bash
# Force push from local end_to_end branch
git push heroku `git subtree split --prefix backend end_to_end`:master --force
heroku logs -a storestash
# Supposedly this helps with multiple users pushing
git push heroku $(git subtree split --prefix=server $(git symbolic-ref --short -q HEAD)):master --force
```

### Android

The APK was made using https://github.com/xtools-at/Android-PWA-Wrapper

Ionic also has its own way of building Android bundles.