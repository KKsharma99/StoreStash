# StoreStash

App for CS 4261: Mobile Apps & Services.

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

## Deploying

Some helpful commands for pushing the subfolders to Heroku:

```bash
npm install -g heroku
heroku login

# Add Heroku remote
heroku git:remote -a storestash # or…
git remote add storestash-app-heroku https://git.heroku.com/storestash-app.git
git remote add storestash-backend-heroku https://git.heroku.com/storestash.git

# cd to StoreStash folder, not backend/ or react_ionic

# Push
git subtree push --prefix backend heroku master
# Force push from local end_to_end branch
git push heroku `git subtree split --prefix backend end_to_end`:master --force
heroku logs -a storestash
# Supposedly this helps with multiple users pushing
git push heroku $(git subtree split --prefix=server $(git symbolic-ref --short -q HEAD)):master --force
```