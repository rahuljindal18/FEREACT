Using the data provided by the following service http://worldcup.sfg.io, write a *REACT/REDUX* application composed of a search form that allows a user to search countries by their FIFA code and display *match results* in a readable way. Additional to this, using CSS custom properties (AKA CSS Variables), make the UI themeable. Choose two components, could be a button and the data grid, and allow the user to change their background colors using a color picker for each one. There should also be a toggle button that switches between the current theme (whatever colors the user has selected) and a dark theme, all black and white, in any order you like, white text/black background, or white bg/black text.  Last, given the following object, using regular expressions, loop over the object values and replace link-color the actual value, and order the keys so that the ones with link-color as it's value, appear last. You can create a function that just logs the process and results into the web console.

```
{
  'link-color':  '#244cde',
  'primary-button:'  'link-color',
  'nav-color': '#1a1d26',
  'subnav-color': ''#494f63',
  'nav-item-active-color': 'link-color'
}
```

While building the app, take into account the following:

• The application *must* be written using React and Redux

• *Don't* use boilerplates/templates.

• Don't commit directly to master, create another branch and a PR.

• Avoid having only one component.

• The application *must* show a loading indicator while fetching and hide it if result is success/error.

• You *must* use node to include libraries/dependencies.

• You *must* use fetch and redux-thunk (or something equivalent, maybe sagas)

• You *must* use git, *fork this repo*, starting off with an initial commit and subsequent micro-commits.

• Errors of any kind *must* be handled correctly and the app should not fail silently.

• Use  webpack/webpack-dev-server to build/start the app.

• Must use *ES6* features, and above if you want.

• We highly value readable, clean code. The code we programmers write is intended for other developers to read. A computer doesn't care how you write it, we mortals do.

• Use Eslint

• Give an estimate of how long you think it will take to complete the task, Before you begin the actual coding.

• Must use latest react features (componentDidCatch, getDerivedStateFromProps, hooks, Fragments )

• Tests are not required, but nice if you add them.

• Re-read the exercise and follow the instructions. Do nothing more, nothing less from what's been asked/mentioned above.

• Finally, create a screencast doing a demo of the application and walking through the code.

Note: Don't worry about styling too much, but do think about the *end user*.
