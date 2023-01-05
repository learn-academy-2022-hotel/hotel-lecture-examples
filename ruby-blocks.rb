# Ruby Blocks and Iterables  1/5/2023

# Iteration - process of repeating a code action until a condition is met

# while - needs starting point and end point and condition starts as true and will become false eventually

num = 1 
while num <= 10
  # p num
  num += 2
end

# METHODS
# methods can take an anonymous function ===> Block
# use keyword `do` and `end` (multiple line)
# one-liners use {}

# TIMES
  # executes block certain number of times

  8.times do
    # p 'Hello Hotel!'
  end

  new_num = 5
  new_num.times do
    # p 'Hello world'
  end

  # EACH  - works on arrays

  nums = [3,4,5,6]

  nums.each do |value|
    # p value * 5 
  end

  # output -> 15
            # 20
            # 25
            # 30
  
 # RANGES
 # list of values - give start and end point separated by 2 dots, ruby fills in the content between the points
 # can also  be letters
 
#  p 1..10 

 range = 1..10
 range.each do |value|
  # p value
 end

 a_range = 'a'..'g'
 a_range.each do |value|
  # p value
 end

#  p a_range.to_a  #output -> ["a", "b", "c", "d", "e", "f", "g"]
# .to_a returns array of elements in the range 

# -----------

# MAP
# returns array of the same length of the thing you're action on
# to get the array assign to variable to get array

nums = 1..10

mapped = nums.map do |val|
   val * 3
end

# p mapped  #output -> [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]

# p mapped[5]

evens = nums.map do |value|
  if value % 2 == 0
    'even'
  else
    value
  end
end
# p evens
# output -> [1, "even", 3, "even", 5, "even", 7, "even", 9, "even"]

def even_or_odd(array)
  array.map do |value|
    if value.even?
      'even'
    else
      'odd'
    end
  end
end

p even_or_odd([42, 36, 15, 8, 0, 52, 17, 23])
#output -> ["even", "even", "odd", "even", "even", "even", "odd", "odd"]

# -----------

# SELECT
# Returns a subset as an array as it makes decision on each item

def only_evens(array)
  array.select do |value|
    value.even?
  end
end

p only_evens(1..10)  #output -> [2, 4, 6, 8, 10]