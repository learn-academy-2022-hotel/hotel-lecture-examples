## Routes, Controllers, Views 1/17/23 Hotel

## Create rails app
- $ cd <github-repo>
- $ git checkout main
- $ git pull origin main
- $ git checkout -b <branch-name>
- $ rails new <app_name> -d postgresql -T
- $ cd <app_name>
- $ rails db:create
- $ code .
- $ rails s

 ## Overview
 - Data flow
 - Routes
 - Controller
 - Views

## Data flow in the request-response cycle
- Web server receives request. It uses routes (url) to find out which controller to use.
  - config/routes.rb
- Controllers coordinate between the route and the views. It tells our app what view to render as the response based on the controller method that gets called by the route.
  - app/controllers
- Views are what the user sees on the screen. Visual representation of the html content.
  - app/views

## Process
- Generate a controller file
  - Add applicable methods
  - Render a view
- Modify routes for each controller method
- Create a view file

## Useful resources
https://guides.rubyonrails.org/

## Generate a Controller
 - $ rails g controller Home
  - new file created --> app/controllers/home_controller.rb
  - add a method on this file

## Modify Routes file
 - config/routes.rb
 - structure
    - combination of http verb, path, hashrocket, controller_name, #, method_name
    - get '/aloha' => 'home#aloha'
    - Read 

## Views
  - app/views/home
  - create files with same name as method in the applicable controller with the extension `.html.erb`
  - for data not to be seen on the screen by the user
  <% variable_name %>
  - for data to be seen on the screen by the user
  <%= variable_name %>

## Make a controller that will send back an aloha greeting 
```ruby
  # app/controllers/home_controller.rb
  class HomeController < ApplicationController
    # create an aloha greeting
    def aloha
      # render html: 'Aloha, Hotel, we are learning about routes, controllers, and views!'
      @cohort = 'Hotel 2022'
      # render 'home/aloha'
    end
  end

  # config/routes.rb
  Rails.application.routes.draw do
    
    # route for landing page
    # get '/' => 'home#aloha'
    root 'home#aloha'

    # routes for each controller method
    get '/aloha' => 'home#aloha'

  end

  # app/views/home/aloha.html.erb
  # To comment out lines of code in the views <!--  -->

  <!-- <% @cohort = 'Hotel 2022' %> --> 

  <h2> Aloha, <%= @cohort %> ! The aloha method on the home controller delivered this view to the screen. </h2>
```

## Make a controller that will send back different lists for the luau birthday party
```ruby
  # stub the methods so the rails app knows what view to find. Stubs are empty methods.
    # app/controllers/luau_controller.rb
    class LuauController < ApplicationController
      def food
      end

      def beverages
      end
      
      def entertainment
      end
    end

  # config/routes.rb
  Rails.application.routes.draw do
    
    # route for landing page
    # get '/' => 'home#aloha'
    root 'home#aloha'

    # routes for each controller method
    get '/aloha' => 'home#aloha'
    get '/food' => 'luau#food'
    get '/beverages' => 'luau#beverages'
  end


  # when the controller method is call on the routes, it will automatically display what is on the views file

    # app/views/luau/food.html.erb
    <h2> Here is the food list. </h2>
    <ul>
      <li> kalua pork </li>
      <li> sticky rice </li>
      <li> pancit </li>
      <li> spam musubi </li>
      <li> sauteed veggies </li>
      <li> bbq salmon </li>
    <ul>
    
    # app/views/luau/beverages.html.erb
    <div style='color:green'>
      <p> 
        The Aloha Queen's favorite drink is coquito.
        <ul>
          🧉 🍹 If you don't like coquito, then we will also provide 🧉 🍹
          <li> ginger ale </li>
          <li> diet Coke </li>
          <li> water </li>
          <li> sweet tea </li>
        </ul>
      </p>
    </div>
```

## Styling
- Inline
```html
  <div style='color:green'>
    ...
  </div>
```
- External file
  - Add css declaration to the bottom of the css file on the application
    - app/assets/stylesheets/application.css
```css
  /*
    * This is a manifest file that'll be compiled into application.css, which will include all the files
    * listed below.
    *
    * Any CSS (and SCSS, if configured) file within this directory, lib/assets/stylesheets, or any plugin's
    * vendor/assets/stylesheets directory can be referenced here using a relative path.
    *
    * You're free to add application-wide styles to this file and they'll appear at the bottom of the
    * compiled file so the styles you add here take precedence over styles defined in any other CSS
    * files in this directory. Styles in this file should be added after the last require_* statement.
    * It is generally better to create a new file per style scope.
    *
    *= require_tree .
    *= require_self
  */
  h2, p {
    text-align: center;
  }
```