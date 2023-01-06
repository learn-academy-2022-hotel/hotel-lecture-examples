# Ruby Classes and Objects 1/6/2023

# OOP - object oriented programming

# p 1.class
# Integer

# p 5.0.class
# Float

# p true.class
# TrueClass
# p false.class
# FalseClass

# class Hulu
# end

# p Hulu.new
#<Hulu:0x000000013487fcc8> unique object
# alaska_daily = Hulu.new
# p alaska_daily

# things we want to be able to do:
#   - set data - setters
#   - get data - getters

# Setter methods:
# class Hulu
#   def set_show_data(title)
#     @title = title
#   end
# end
# alaska_daily = Hulu.new
#
# p alaska_daily
# alaska_daily.set_show_data('Alaska Daily')
# p alaska_daily
#
# @variable_name - instance variable, variable that belongs to a class
# lego_masters = Hulu.new
# lego_masters.set_show_data('Lego Masters')
# p lego_masters


# Setter method with two parameters:
# class Hulu
#   def set_show_data(title, run_time)
#     @title = title
#     @run_time = run_time
#   end
# end
#
# alaska_daily = Hulu.new
# alaska_daily.set_show_data('Alaska Daily', '30min')
# p alaska_daily
# #<Hulu:0x0000000112846350 @title="Alaska Daily", @run_time="30min">
#
# lego_masters = Hulu.new
# lego_masters.set_show_data('Lego Masters', '60min')
# p lego_masters
#<Hulu:0x00000001128460d0 @title="Lego Masters", @run_time="60min">

# Getter methods:
# class Hulu
#   def set_show_data(title, run_time)
#     @title = title
#     @run_time = run_time
#   end
#   def get_title
#     @title
#   end
#   def show_info
#     "The show #{@title} is #{@run_time} long."
#   end
# end
#
# alaska_daily = Hulu.new
# alaska_daily.set_show_data('Alaska Daily', '30min')
# p alaska_daily.get_title
# # "Alaska Daily"
# p alaska_daily.show_info
# # "The show Alaska Daily is 30min long."
#
# lego_masters = Hulu.new
# lego_masters.set_show_data('Lego Masters', '60min')
# p lego_masters.get_title
# # "Lego Masters"
# p lego_masters.show_info
# "The show Lego Masters is 60min long."

# Initialize method is invoked with .new
# class Hulu
#   def initialize(title, run_time)
#     @title = title
#     @run_time = run_time
#   end
#   def get_title
#     @title
#   end
#   def show_info
#     "The show #{@title} is #{@run_time} long."
#   end
# end
#
# alaska_daily = Hulu.new('Alaska Daily', '30min')
# p alaska_daily
# p alaska_daily.get_title
# p alaska_daily.show_info
#
#
# lego_masters = Hulu.new('Lego Masters', '60min')
# p lego_masters.get_title
# p lego_masters.show_info

# Adding more logic to the class:
# class Hulu
#   def initialize(title, run_time)
#     @title = title
#     @run_time = run_time
#     @watched = false
#   end
#   def get_title
#     @title
#   end
#   def show_info
#     if @watched
#       "You have watched the show #{@title} which is #{@run_time} long."
#     else
#       "You have not watched the show #{@title} which is #{@run_time} long."
#     end
#   end
#   # setter method:
#   def watched_it
#     @watched = true
#   end
# end
#
# alaska_daily = Hulu.new('Alaska Daily', '30min')
# # p alaska_daily.get_title
# # p alaska_daily.show_info
# p alaska_daily.show_info
# alaska_daily.watched_it
# p alaska_daily.show_info

# lego_masters = Hulu.new('Lego Masters', '60min')
# p lego_masters.get_title
# p lego_masters.show_info

# attr_accessor refactor
class Hulu
  attr_accessor :title, :watched

  def initialize(title, run_time)
    @title = title
    @run_time = run_time
    @watched = false
  end
  def show_info
    if @watched
      "You have watched the show #{@title} which is #{@run_time} long."
    else
      "You have not watched the show #{@title} which is #{@run_time} long."
    end
  end
end

alaska_daily = Hulu.new('Alaska Daily', '30min')
# p alaska_daily
# p alaska_daily.title
p alaska_daily.show_info
alaska_daily.watched = true
p alaska_daily.show_info

# helper methods - are methods that make more methods
# helper method in Ruby that will manage getters and setters
