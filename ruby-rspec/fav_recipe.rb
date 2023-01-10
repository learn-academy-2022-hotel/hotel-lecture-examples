class FavRecipe
  # gain access to the values in the object created by the class
  attr_accessor :title, :ingredients, :verified

  # initialize method that displays the properties of an object when it is created/executed
  def initialize(title, ingredients='still searching')
    @title = title
    @ingredients = ingredients
    @verified = false
  end

  # cooked method changes the status of the verified instance variable 
  def cooked
    @verified = true
  end

end