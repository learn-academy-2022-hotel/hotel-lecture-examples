## Rails Params 1/18/23 Hotel

- Rails stores data from the url in a params hash.

- Two ways to gather those params.
  - query string
  - use the url in the route

- To see the params hash, place the following code in a controller method
  render plain: "#{params}"
  - Output: {"controller"=>"luau", "action"=>"entertainment"}

- Using query string
  - ?name=Nicole
  - appended to the end of the url in the browser
    - http://localhost:3000/entertainment/?name=Nicole
    - Output: {"name"=>"Nicole", "controller"=>"luau", "action"=>"entertainment"}
  - store the value from params hash in an instance variable on the controller method
    - @name = params[:name]

- using routes
  - store the value from params hash in an instance variable on the controller method
    - @name = params[:name]
  - modify routes to include the params key in the path
    - get '/entertainment/:name' => 'luau#entertainment'
  - appended to the end of the url in the browser
    - http://localhost:3000/entertainment/Nicole

- links 
  - <%= link_to 'name of link', '/path' %>

- mapping arrays on the views files
  - store array in an instance variable on the controller method
```ruby
  def entertainment
    @name = params[:name]
    @activities = ['hula', 'fire twirling', 'leis', 'climbing palm tree', 'seafaring']
  end
```
  - use map method on the array to display values in a list on the views file
```html
  <% @activities.map do |value|%>
    <h3>
      <li> 
        <%= value %>
      </li>
    </h3>
  <% end %>
```