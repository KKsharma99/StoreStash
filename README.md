# StoreStash

App for CS 4261: Mobile Apps & Services, Spring 2020.

2nd place winner of the [Georgia Tech Convergence Innovation Competition: Global Response](http://www.cic.gatech.edu/).

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

### Frontend

`cd react_ionic`

Install dependencies: `npm install`

Serve the app: `npm start`

## Deploying to Heroku

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

Push from the master branch:

```bash
git subtree push --prefix react_ionic storestash-app-heroku master
git subtree push --prefix backend storestash-backend-heroku master
```

Force push from the master branch:

```bash
git push storestash-app-heroku `git subtree split --prefix backend master`:master --force
```

Other commands that may be helpful:
```bash
# Force push from local end_to_end branch
git push heroku `git subtree split --prefix backend end_to_end`:master --force
heroku logs -a storestash
# Supposedly this helps with multiple users pushing
git push heroku $(git subtree split --prefix=server $(git symbolic-ref --short -q HEAD)):master --force
```