# Applicant List App

To run the app, download the project and open `index.html`.

If you wish to run the dev environment for the app, navigate to the folder directory in terminal and type
```
npm install
```
This will install all relevant node modules and dependencies.

Once all node modules have been downloaded, from the project directory run
```
gulp
```
This will use gulp browsersync, this will spin up an express server locally, it will auto inject any css changes made to main.scss and will auto refresh the page when changes are made to any html files.

If you wish to inspect the React DOM, you can download [React Developer Tools.](https://facebook.github.io/react/blog/2015/09/02/new-react-developer-tools.html)

####Further updates:
- Routing 404 issue: prevent users trying to access non-existent subdirectories with express to send [correct server response on request](https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#browserhistory) - 
- Storing paragraphs with line breaks in state object.experience
- Set up routing to only change out body content - as to not repeat <Header/> and <Footer /> inside components.
- Unit tests
- more complex experience data, paragraphs etc
- update CSS to be more inline with website
- move react state into its own file
- ability to add applicants