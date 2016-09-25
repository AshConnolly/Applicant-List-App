# Applicant List App

To run the app you will need to install all relevant node modules and dependencies. Navigate to the folder directory in terminal and type
```
npm install
```

Once all node modules have been downloaded, from the project directory run
```
gulp
```
This will use gulp browsersync to create a local express server, it will auto inject any css changes made to main.scss and will auto refresh the page when changes are made to any html or js files. React uses JSX and some es6 is also used, this is transpiled using babel on save.

If you wish to inspect the React DOM, you can download [React Developer Tools.](https://facebook.github.io/react/blog/2015/09/02/new-react-developer-tools.html)

####Future updates:
- Routing 404 issue: prevent users trying to access non-existent subdirectories using express to send the [correct server response on request](https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#browserhistory) - 
- Set up routing to only change out body content - as to not repeat <Header/> and <Footer /> inside components.
- Unit tests
- More complex experience data, paragraphs etc
- Update CSS to be more inline with website
- Move react state into its own file
- Ability to add applicants