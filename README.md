#Installation



To run the application you need to run a few commands in this project.
Let's start at the backend which is located at

		coucher/back-end

Because we've been using a few packages to manage the back-end, you need to install all those packages. You can do this by running the following command.

		npm install

After you've installed the packages you need to duplicate the .env.example to .env and you need to fill all the credentials.

After the packages are installed  & the .env file is changed with all the information you need to run the following command to activate the backend of this project.
		
		npm start

After you run the command, the database is active and at last you need to run the front-end which is built in Angular. But first install all the packages as well.

		npm install

After the packagers are installed you need to fill in the credentials in the environment.prod.ts which is located at 

		front-end/src/environment.prod.ts


After the packages are downloaded & you've filled in the environment file, you need to run the following command to start the application.

		ng build --prod

After the build is complete, move the dist folder, which is automatically generated, to the root your webserver.

That's it!

Enjoy our application.

Yawuar & Adriaan

https://github.com/yawuar
https://github.com/AdrianMrn