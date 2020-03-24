# StoreStash

App for CS 4261: Mobile Apps & Services.

Some helpful commands for pushing the subfolders to Heroku:

```bash
npm install -g heroku
heroku login
heroku git:remote -a storestash
# In StoreStash folder
git subtree --prefix backend heroku master
# Force push
git push heroku `git subtree split --prefix backend end_to_end`:master --force
heroku logs -a storestash
```