# Ruby Hashes 1/5/2023 Hotel Cohort

# Structure of a hash
  # Hash - unordered collectio nof unique keys and their values
    # Defining keys and values with => hash rocket or :
  
    # 1st technique
    # newer syntax using symbols
    disney_inspiration = {
      merida_quote: 'Our fate lives within us. You only have to be brave enough to see it.',
      dumbo_quote: "Don't just fly, soar.",
      rafiki_quote: 'The past can hurt, but the way I see it you can either run from it or learn from it.'
    }
    # Hash rocket not necessary because using a symbol
      # Symbol is key with a colon on the right `merida_quote:`

    # p disney_inspiration
    # Output: displayed in the older syntax
    # {:merida_quote=>"Our fate lives within us. You only have to be brave enough to see it.", :dumbo_quote=>"Don't just fly, soar.", :rafiki_quote=>"The past can hurt, but the way I see it you can either run from it or learn from it."}

    # Hash rocket required when not using a symbol. Examples--- 
    # older syntax using hash rocket
    # office_space = {
    #   44 => 'Charlean at the desk', 
    #   'desk' => 'ergonomic, black, standup desk' 
    # }

    # p office_space
    # Output: {44=>"Charlean at the desk", "desk"=>"ergonomic, black, standup desk"}

    # 2nd technique - new method
    looney_talk = Hash.new
    # p looney_talk
    # Output: {}

# Display/create/update/delete content from the hash

    # CREATE
    looney_talk[:bugs_bunny] = 'Whatz up, Doc?'
    # p looney_talk
    # Output:
    # {:bugs_bunny=>"Whatz up, Doc?"}
    looney_talk[:road_runner] = 'Meep Meep!'
    # p looney_talk
    # Output: {:bugs_bunny=>"Whatz up, Doc?", :road_runner=>"Meep Meep!"}
    looney_talk[:slyvester_the_cat] = 'Thuffering Thuccotash!'

    # READ (displaying content)
    # All the pairs in the hash
    # p looney_talk
    # Output: {:bugs_bunny=>"Whatz up, Doc?", :road_runner=>"Meep Meep!", :slyvester_the_cat=>"Thuffering Thuccotash!"}

    # one value
    # p looney_talk[:road_runner]
    # Output: "Meep Meep!"

    # p looney_talk[:slyvester_the_cat]
    # Output: "Thuffering Thuccotash!"

    # show only the values in the hash
    # p looney_talk.values
    # Output: ["Whatz up, Doc?", "Meep Meep!", "Thuffering Thuccotash!"]

    # UPDATE 
    looney_talk[:slyvester_the_cat] = "Thuffering Succotash!"
    # p looney_talk
    # Output: {:bugs_bunny=>"Whatz up, Doc?", :road_runner=>"Meep Meep!", :slyvester_the_cat=>"Thuffering Succotash!"}

    # DELETE
    looney_talk.delete(:slyvester_the_cat)
    # p looney_talk
    # Output: {:bugs_bunny=>"Whatz up, Doc?", :road_runner=>"Meep Meep!"}


# Ducktyping - allows methods to be used in Ruby based on behavior instead of Ruby class
    # Modules - way of grouping like things with similar properties
      # Enumerable module - iterable group i.e. hashes, arrays, ranges

      # each for iteration
      # map for transformation

      # each 
      # looney_talk.each do |key, value|
      #   p "#{key} often says, #{value}"
      # end

      # Output:
      # "bugs_bunny often says, Whatz up, Doc?"
      # "road_runner often says, Meep Meep!"

      # p looney_talk
      # Output: {:bugs_bunny=>"Whatz up, Doc?", :road_runner=>"Meep Meep!"}

      # Map
      # looney_talk.map do |key, value|
      #   p "#{key} says #{value} 👍🏼"
      # end
      # Output: 
      # "bugs_bunny says Whatz up, Doc? 👍🏼"
      # "road_runner says Meep Meep! 👍🏼"

      # To get access to the array

        # Store logic in a variable
        # print the variable to the console

        # talking_looney =       
        #   looney_talk.map do |key, value|
        #     p "#{key} says #{value} 👍🏼"
        #   end

        # p talking_looney
        # Output: ["bugs_bunny says Whatz up, Doc? 👍🏼", "road_runner says Meep Meep! 👍🏼"]

        # p looney_talk
        # Output: {:bugs_bunny=>"Whatz up, Doc?", :road_runner=>"Meep Meep!"}

        # create a method to iterate across the hash
        def character_said hash
          hash.map do |symbol, word|
            "#{symbol} says #{word}"
          end
        end

        p character_said looney_talk
        # Output:
        # ["bugs_bunny says Whatz up, Doc?", "road_runner says Meep Meep!"]
        p character_said disney_inspiration
        # Output: 
        # ["merida_quote says Our fate lives within us. You only have to be brave enough to see it.", "dumbo_quote says Don't just fly, soar.", "rafiki_quote says The past can hurt, but the way I see it you can either run from it or learn from it."]