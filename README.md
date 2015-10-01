# prime_peer_fs_02
Peer Challenge: Maximum Cute Card Deck App

In this assignment, you’re going to practice peer programming while reinforcing the following topics: fileserving, creating project structures, and separating client-side code from server-side code.

The requirements are split into four sections. Switch places (i.e. 1 person at the keyboard, 1 person speaking-out-loud the requirements) when you encounter a new section.

Remember the goal is not to finish, the goal is to practice writing and speaking code.

Section 1
Install express-generator via npm. Create a new project using express generator and name it prime_peer_fs_02. 

Delete the views/index.jade file and create an HTML5 file: views/index.html. Change the routes/index.js file to serve this file as a static file.

Create the file public/javascripts/app.js. Add jQuery to this folder and include it in your index.html. (Copy jquery.min.js into your ‘public/javascripts’ directory)

In your backend (server side) app.js file, serve the public folder using express.static. 

Create a new folder in your root directory named models. Inside of this folder create a json file that has an array of extremely cute images (e.g. animals, children holding hands dressed as an old married couple, whatever registers as something you need to see on a crap day). It is up to you to find 6+ images for your cute deck.

Place all images in the /public/images folder.
Section 2
Serve the json file using the app.get('/:id', function) method using a module file.

When the page loads, display a default cute deck of 5 images.
Section 3
Provide a button that allows the user to get a new deck. Provide another button under each image that allows the user to change out just that specific card for another. NOTE: The same image should not be displayed more than once in a deck.
Section 4
Install bootstrap via npm.  Add some styling. Put the images inside of Bootstrap Thumbnail Components. Deploy your code to Heroku and post the link in Slack #epsilon.

