# Creating a React app

- $ yarn create react-app <app-name> -->
- dash between react and app is NECESSARY
- <app-name>  follows kebab-case naming convention
  --> all lower case, no spaces, dashes between each word
    ex:  first-react-app

# Functional Component
    - fxn declaration
    - component name - PascalCase
    - return of JSX - one element at top level (wrap around a bunch of elements to return one)
    - don't need fragments if only one element
    - every component needs to be exported in order to be accessed by other files
      - export default App
      - use same name as component created in file
    - generally - one component per file
    - imports


`app/src/App.js`

```javascript
  const App = () => {
    return (
      <>
        <Header />
        <h2>HELLO THERE!</h2>
        <NewMovies />
      </>
    )
  }

  export default App
```
# Adding a new component/file

`app/src/components/Header.js`

```javascript
  const Header = () => {
    return (
      <>
        <Header />
        <h1>WELCOME TO OUR APP!!!!!</h1>
        <NewMovies />
      </>
    )
  }

  export default Header
  ```
# Add a Movies component
  `app/src/components/NewMovie.js`

```javascript
  const NewMovies = () => {
    return (
      <>
      <ul>
        <li>Home Alone</li>
        <li>JoJo Rabbit</li>
        <li>Harry Potter & the Sorceror's Stone</li>
        <li>Black Panther: Wakanda Forever</li>
      </ul>
      </>
    )
  }

  export default NewMovies
```


  ##  APP.js is special
  - notice everything is being pulled into App.js 
  - App is the only thing being rendered
  - if we look back at index.js =>  <App />

  ## This is called a SINGLE PAGE APPLICATION (SPA)
  - only ever showing 1 page 
  - just updating, overlaying, underlaying, moving things
  - allows for very quick load times
  - however, not optimized for Search Engines (poor SEO)

  ### RECAP
  1. Yarn is a package manager built by Meta
  2. React is an SPA that is based on components (building blocks of code)
  3. In React applications, generally one component per file
  4. Component and file share name  - in PascalCase
  5. Command to create a react app using yarn: 
    $ yarn create react-app <app-name>
  6. React components bring info from other files using Imports
  7. Components require Exports
  8. Reac components are invoked or called using <Component Call/>
  9. Can see changes you are making by running $ yarn start.
  10. Can stop server with  CTRL+ C 
  11. Use the Browser JS Console to check your errors. (right-click -> inspect -> console)


