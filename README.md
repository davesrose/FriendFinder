#Friend Finder - Node and Express Server hosted on Heroku

The live version of this homework assignment is here: [http://desolate-temple-11248.herokuapp.com/](http://desolate-temple-11248.herokuapp.com/)

I have created the file structure as outlined in the homework assignment.  I have also created a favicon to further the front end design enhancement, as well as a static public directory for a CSS file, and various images:

  ```
  FriendFinder
    - app
      - data
        - friends.js
      - public
      	- images
      	- favicon.ico
        - home.html
        - style.css
        - survey.html
      - routing
        - apiRoutes.js
        - htmlRoutes.js
    - .gitignore
    - node_modules
    - package.json
    - Procfile
    - server.js
  ```

For the express routing, I have a default route to home.html, and /survey to survey.html.  There's also a link for showing the /api/friends JSON object.  Each individual friend object includes a name, link to photo, a short description, and the 10 answers.  For creating the saved profiles, I tried to be cheeky and have celebrities or TV/movie characters.  There's validation in the survey: the user will be alerted if they haven't filled out the survey or if they've already filled out the survey.  There's a callback for comparing their answers with stored profiles, and a response is generated for the match with the lowest compatibility difference score.  Their profile is then pushed to the friends JSON.  I've noticed that with the hosted node server on Heroku, that the added profiles are purged when the site is dormant for awhile.  For future revision, I might try the fs package to see if I can append to the friends.js file: and then new data would be more permenant.
