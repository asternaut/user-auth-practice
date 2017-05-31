Welcome to your first authorization project!

We've gotten all the basics working for you here so you can just focus on
building and playing with your authorization. Our objectives are as follows:


  1.) "git clone" this repo

  2.) Run "npm install".

  3.) Change into your "client" directory and also run "npm install"

  4.) In your project route directory, create a blank ".env" file

  5.) Create a "models" directory and add a user model. The UserScheam should
      have a password and a email as below:

          local: {email: String, password: String}

  6.) Create a "routes" director and add the file "auth.js". We'll walk
      through the creation of the api routes, so leave this file blank for now.


Once your server is running, I'll take you through auth creation! It's going
to be a bit different than how we'll implement it in our project, but not so
much that you won't be able to translate what we do here to your project. Get
excited! Creating authorization is a big step in understanding how to build
secure web applications and software.

Note that we've created a a separate client folder to run our front end. If
you're on windows, you'll have to start your back-end and front-end servers
separately. Otherwise just run:

  npm run dev

as per your blog project!
