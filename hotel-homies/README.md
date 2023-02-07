Project Setup

  - $ rails new hotel-homies -d postgresql -T
  - $ cd hotel-homies
  - $ rails db:create
  - $ rails s
  - $ bundle add webpacker
  - $ bundle add react-rails
  - $ rails webpacker:install
  - $ rails webpacker:install:react
  - $ yarn add @babel/preset-react
  - $ yarn add @rails/activestorage
  - $ yarn add @rails/ujs
  - $ rails generate react:install
  - $ rails g react:component App
  - $ code .
  - refactor App.js
  - $ rails g controller Home
  - $ rm app/helpers/home_helper.rb
  - $ rails s

<OPTION + Shift + i> after highlighting block of text will give you cursor on every highlighted line.  Use CMD + left arrow to move them all to beginning of line.

**app/views/home**
add file:  index.html.erb
add ` <%= react_component 'App' %>` to this file

**app/views/layouts/application.html.erb**
- Find this line:
  ` <%= javascript_importmap_tags %>`

  Replace with:
  `<%= javascript_pack_tag 'application', 'data-turbolinks-track': 'reload' %>`

  - Now Add ROUTE:
```ruby
  Rails.application.routes.draw do
    root 'home#index'
  end
```

### CSS
- $ bundle add bootstrap  
rename the application.css file to .scss. run command or rename the file in the file tree
- $ mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss
- $ yarn add reactstrap   
**app/assets/stylesheets/application.scss** 
`@import 'bootstrap'`

### React Folder Structure
 app/javascript/components
- assets
-  components
  - Navigation.js 
- pages
  - AboutUs.js
  - Home.js

### React Router
- $ yarn add react-router-dom  

**App.js**
```javascript
import {
  BrowserRouter, Routes,
  Route
} from 'react-router-dom'
import Navigation from './components/Navigation'
import AboutUs from './pages/AboutUs'
import Home from './pages/Home'


return (
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  </BrowserRouter>
)
```

**routes.rb**
```ruby
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  ```

-code Navigation component 

```javascript
import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class Navigation extends Component {
  render() {
    return(
      <>
        <Nav>
          <NavItem>
            <NavLink to="/" className="nav-link">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about" className="nav-link">About Us</NavLink>
          </NavItem>
        </Nav>
      </>
    )
  }
}
export default Navigation