# Ruby Inheritance Lecture Notes 1/10/2023

# Object-oriented programming (OOP)

# Everything in Ruby is an object
# Meaning everything is an instance of a class

# initialize method - to declare new instances of Classes with unique data
# - takes as many parameters as we want and we can use them as they want

class Hulu
  # attr_accessor creates a getter and a setter method for the instance variables it gets passed
  attr_accessor :title, :run_time, :watch
  # setter method:
  def initialize(title, run_time)
    @title = title
    @run_time = run_time
    @watch = false
  end

  # getter method:
  def get_show_data
    if @watch
      "You have watched the show #{@title} is #{@run_time} long."
    else
      "You have not watched the show #{@title} is #{@run_time} long."
    end
  end
end

#podcast, streaming video (YouTube), streaming music (Spotify)

#Inheritance allows classes to have relationships with each other.
# Superclass - common behaviors in a shared classes
# Parent Class - has attributes common to all possible children
  #Child class - has attributes specific to the child and NOT the other children
# superclass passes info to the subclasses

class StreamingApp 
  attr_accessor :title, :run_time, :consumed_media
  def initialize(title, run_time)
    @title = title
    @run_time = run_time
    @consumed_media = false
  end
  def content_data
    if consumed_media
      "You have consumed the media called #{@title} for #{@run_time} long."
    else
      "You have not consumed the media called #{@title} for #{@run_time} long."
    end
  end
end

# Child classes use super().  
# initialize method in the child class invokes the super() --->  tells parent class it's going to use
# its initialize method and borrow your parameters/instance variables

class YouTube < StreamingApp
  def initialize(title_parameter, run_time_parameter, creator_parameter)
    super(title_parameter, run_time_parameter)
    @creator = creator_parameter
  end
end

babish = YouTube.new("How to Make Pigs in a Blanket", "11:15", "Babish")
# p babish
# #<YouTube:0x000000011f0a58c8 @title="How to Make Pigs in a Blanket", @run_time="11:15", @consumed_media=false, @creator="Babish">
p babish.content_data
"You have not consumed the media called How to Make Pigs in a Blanket for 11:15 long."

class Spotify < StreamingApp
  def initialize(title_parameter, run_time_parameter, artist_parameter, album_parameter)
    super(title_parameter, run_time_parameter)
    @artist = artist_parameter
    @album = album_parameter
  end
  #getter method to get all this info in one nice clean stream
  def get_info
    content_data + "This song was created by #{@artist} and is part of the #{@album} album"
  end
end

lauryn_hill = Spotify.new("Everything is Everything", "3:47", "Lauryn Hill", "The Miseducation of Lauryn Hill")
# p lauryn_hill
# -->  #<Spotify:0x000000013485ed70 @title="Everything is Everything", @run_time="3:47", @consumed_media=false, @artist="Lauryn Hill", @album="The Miseducation of Lauryn Hill">

lauryn_hill.get_info
"You have not consumed the media called Everything is Everything for 3:47 long.This song was created by Lauryn Hill and is part of the The Miseducation of Lauryn Hill album"