# Ruby RSPEC 1/10/23 Hotel Cohort
# Rspec - testing framework for ruby

# Two files
  # fav_recipe.rb - contains the code for the class
  # fav_recipe_spec.rb - contains the test

# Process
  # add rspec gem
    # $ gem install rspec
  # run the test 
    # $ rspec fav_recipe_spec.rb

# RED - GREEN - REFACTOR

  # Create the test
    # describe 'name of the class'+ do/end block
    # it 'property or feature of the class that you are testing' + do/end block
    # expect statement

  # Look for good failure
    # run the test rspec <name of rspec file>
  
  # Create passing code in the ruby file

  # Look for a valid pass
    # run the test rspec <name of rspec file>

# Prompt: create a test for the FavRecipe Class
  # import the rspec tools and appropriate files
  # these imports are normally at the top, only required once per file
require 'rspec'
require_relative 'fav_recipe'

  # Create a test
  # describe 'FavRecipe' do
  #   it 'has to be real' do
  #     expect{ FavRecipe.new }.to_not raise_error
  #   end
  # end

  # Good failure

    # Failures:

    # 1) FavRecipe has to be real
    #   Failure/Error: expect{ FavRecipe.new }.to_not raise_error
      
    #     expected no Exception, got #<NameError: uninitialized constant FavRecipe> with backtrace:

  # Make test pass, add FavRecipe Class to the fav_recipe.rb

    # Passing test
      # FavRecipe
      # has to be real
  
      # Finished in 0.00101 seconds (files took 0.10374 seconds to load)
      # 1 example, 0 failures

describe 'FavRecipe' do
  # test that the class exists
  it 'has to be real' do
    expect{ FavRecipe.new('Buttermilk Cornbread') }.to_not raise_error
  end
  # test that the object has a title
  it 'has a title' do
    cornbread = FavRecipe.new('Buttermilk Cornbread')
    expect(cornbread.title).to be_a(String)
  end
  # test that the object can be given ingredients
  it 'can be given ingredients or be still searching by default' do
    # cornbread object
    cornbread = FavRecipe.new('Buttermilk Cornbread')
    # p cornbread
    expect(cornbread.ingredients).to be_a(String)
    expect(cornbread.ingredients).to eq('still searching')
    # hot water bread object
    hot_water_bread = FavRecipe.new('Hot Water Bread', 'hot water, corn meal, flour, butter, egg')
    # p 'hot water', hot_water_bread
    expect(hot_water_bread.ingredients).to be_a(String)
    expect(hot_water_bread.ingredients).to eq('hot water, corn meal, flour, butter, egg')
  end
  # test the verification status
  it 'has a verification status' do
    stove_top = FavRecipe.new('Stove Top', 'container of Stove Top, water, egg')
    p 'stove top', stove_top
    expect{ stove_top.cooked }.to change{ stove_top.verified }.from(false).to(true)
    p 'cooked stove top', stove_top
  end
end

# Process to test for a title
# Good failure
  # FavRecipe
  #   has to be real (FAILED - 1)
  #   has a title (FAILED - 2)
  # expected no Exception, got #<ArgumentError: wrong number of arguments (given 1, expected 0)> with backtrace:
    # Failing because do not have key that stores the value for title nor access to it

# Make test pass
  # need access to the values/properties within the object created from the class
  # initialize method to state what argument needs to be given when the class is instantiated 

  # NOTE: If you see unexpected failures on previous test, ensure those tests are reflecting the current status of your class declaration.

# to see the object, print the object within the it method
  # before modifying the class declaration
    # p cornbread
    # Output: #<FavRecipe:0x0000000131293ab0 @title="Buttermilk Cornbread">
  # after modifying the class declaration
    # Output: #<FavRecipe:0x000000014e333660 @title="Buttermilk Cornbread", @ingredients="still searching">

# Flexibility of setting default values
  # When object is created without an ingredients argument
    # hot_water_bread = FavRecipe.new('Hot Water Bread')
    # p hot_water_bread
    #<FavRecipe:0x0000000127b50360 @title="Hot Water Bread", @ingredients="still searching">

  # When object is created with an ingredients argument
    # hot_water_bread = FavRecipe.new('Hot Water Bread', 'hot water, corn meal, flour, butter, egg')
    # p hot_water_bread
    #<FavRecipe:0x00000001453755a0 @title="Hot Water Bread", @ingredients="hot water, corn meal, flour, butter, egg">

  # testing that cooked method will change the verification status
    # need access to the instance variable that stores the verification status `verified`
    # give that instance variable a default value
    # create cooked method that changes the value of that instance variable

    # NOTE: 
    #   when testing behavior {}
    #   when testing data ()

  