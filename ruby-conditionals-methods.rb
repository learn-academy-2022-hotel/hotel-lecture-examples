# Ruby Methods and Conditionals Lecture - 1/4/23

# methods - functions that belongs to objects, allows us to have reusable, dynamic code 

# keywords to create a method
  # def
  # end

  # def hotel_message
  #   p 'Aloha, Hotel, do you like to dance?'
  # end

  # hotel_message
  # Output: "Aloha, Hotel, do you like to dance?"

  # Using variables
  # def hotel_message
  #   question = 'Aloha, Hotel, do you like to dance?'
  #   p question
  # end

  # hotel_message
  # Output: "Aloha, Hotel, do you like to dance?"

  # p question
  # # Output: NameError because the variable question is locally scoped to the method. 

  # method with arguments
  # Create a method that takes two strings and returns a statement that shows who is in the dance off.
  # expected output: "Tricia and Charlean show us your footwork."

  # string interpolation "#{variable_name}"

  # def dance_off(name1, name2)
  #   "#{name1} and #{name2} show us your footwork."
  # end

  # p dance_off('Moss', 'Bora')
  # Output: "Moss and Bora show us your footwork."

  # conditional statements
    # every if needs an end
  
  # create a method that shares catch phrases from certain WWE wrestlers.
    # Expected output if The Rock: 'Can you smell what the Rock is cooking?'
    # Expected output if Stone Cold: 'Handed out whipped contents in a can'
    # Expected output if Junk Yard Dog: "Woof Woof Woof"

  # Binary
    # keyword if to begin conditional statements - takes in a condition, code block is nested under the condition
    # every if needs an end
    # only one if per conditional
    # else - catchall, does not have a condition, code block is nested under the else
    # only one else per conditional
    # because parenthesis and curly braces are not necessary, BE MINDFUL OF INDENTATION.
  # def catch_phrase wrestler
  #   if wrestler == 'The Rock'
  #     p 'Can you smell what the Rock is cooking?'
  #   else
  #     p 'Sorry that wrestler did not register on the smack-talk meter'
  #   end
  # end

  # catch_phrase 'The Rock'
  # # Output: "Can you smell what the Rock is cooking?"

  # catch_phrase 'Hulk Hogan'
  # # Output: "Sorry that wrestler did not register on the smack-talk meter"

  # Multiple outputs
    # elsif - allows additional conditions to be set, can have as many as necessary, requires a condition and executable code
    # def catch_phrase wrestler
    #   if wrestler == 'The Rock'
    #     p 'Can you smell what the Rock is cooking?'
    #   elsif wrestler == 'Stone Cold'
    #     p 'Handed out whipped contents in a can'
    #   elsif wrestler == 'Junk Yard Dog'
    #     p 'WOOF WOOF WOOF!!!'
    #   else
    #     p 'Sorry that wrestler did not register on the smack-talk meter'
    #   end
    # end

    # catch_phrase 'Junk Yard Dog'
    # # Output: "WOOF WOOF WOOF!!!"
    # catch_phrase 'Ric Flair'
    # # Output: "Sorry that wrestler did not register on the smack-talk meter"

    # User input
    # Create a method that asks a user for their name and birthyear and returns a customized wrestler name and costume.
    # Expected output: Moss, 2001 ---> "Moss, you will wear a robe and huge glittery glasses in the shape of 2001"
    # Expected output: Torin, 1977 ---> "Torin, you will wear spandex shorts and tube socks embroidered with 1977"

    # getting user inputs
      # gets method - stops the executuion of the program and waits for something to be typed in the terminal

      # my_name = gets
      # p my_name
      # Output: "Moss\n"

      # \n means new line character that occurs because you have have press the enter to input the data from the prompt
      # Recommend printing out a message to inform user what is expected

      # # .chomp method removes any non-string characters
      # p 'Please enter your name'
      # my_name = gets.chomp
      # p my_name
      # # Output: "Moss"

      # p 'Please enter your birth year'
      # birth_year = gets.chomp
      # p birth_year
      # # Output: "2001"
      # # NOTE: values from the gets method are stored as strings

      # def wrestler(name, year)
      #   if year > 2000
      #     p "#{name}, you will wear a robe and huge glittery glasses in the shape of #{year}"
      #   else
      #     p "#{name}, you will wear spandex shorts and tube socks embroidered with #{year}"
      #   end
      # end

      # wrestler(my_name, birth_year)

      # Output: ArgumentError after inputting birth_year because the condition is based on an integer. gets method stored the user input as a string. Therefore we need a method to convert the string to an integer for this method. `.to_i`

      # .chomp method removes any non-string characters
      p 'Please enter your name'
      my_name = gets.chomp
      p my_name
      # Output: "Moss"

      p 'Please enter your birth year'
      birth_year = gets.chomp.to_i
      p birth_year
      # Output: "2001"
      # NOTE: values from the gets method are stored as strings

      def wrestler(name, year)
        if year > 2000
          p "#{name}, you will wear a robe and huge glittery glasses in the shape of #{year}"
        else
          p "#{name}, you will wear spandex shorts and tube socks embroidered with #{year}"
        end
      end

      wrestler(my_name, birth_year)

      