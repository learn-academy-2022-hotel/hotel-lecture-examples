# Ruby Intro 1/4/2023

### MINASWAN

Matz created Ruby to be human friendly

Dynamic - dynamically typed, you don't have to declare a type when creating a variable (opposite is statically typed)

Interpreted - code is read line by line through an interpreter (opposite is compiled languages)

Open-source - code base in available for free and anyone can use it or modify it

Scripting language - making evaluations and executing logical operations, no markup

OOP - object-oriented programming language, everything is an object, everything is an instance of a class

- `ruby -v` - gives us the version of Ruby we are running
- `irb` - interactive Ruby
- `exit` - back to regular terminal


### Data Types
- Integer - whole numbers
- Float - partial numbers
- String - use single quotes
- Boolean - relational operators, equality ==, logical operators && ||
  - Ruby does not support type coersion
- Nil
- Undefined
- Symbol

```ruby
3.0.0 :001 > 7 + 4
 => 11
3.0.0 :002 > 5 - 3
 => 2
3.0.0 :003 > 4 * 3
 => 12
3.0.0 :004 > 5 / 2
 => 2
3.0.0 :005 > 3 ** 3
 => 27
3.0.0 :006 > 6 % 4
 => 2
3.0.0 :007 > 5 / 2.0
 => 2.5
3.0.0 :008 > 5.0 / 2
 => 2.5
3.0.0 :009 > 'hello'
 => "hello"
3.0.0 :010 > 'yo'
 => "yo"
3.0.0 :011 > 'hotel is awesome'
 => "hotel is awesome"
3.0.0 :012 > "Hey y'all"
 => "Hey y'all"
3.0.0 :013 > true
 => true
3.0.0 :014 > false
 => false
3.0.0 :015 > 4 < 6
 => true
3.0.0 :016 > 3 > 9
 => false
3.0.0 :017 > 5.0 <= 5
 => true
3.0.0 :018 > 5 >= 0
 => true
3.0.0 :019 > 5 == 5.0
 => true
3.0.0 :020 > 3 == '3'
 => false
3.0.0 :021 > 5 != 5
 => false
3.0.0 :022 > 5 == 5
 => true
3.0.0 :023 > 5 > 9 && 8 > 9
 => false
3.0.0 :024 > 5 < 9 && 8 < 9
 => true
3.0.0 :025 > 5 < 9 && 8 > 9
 => false
3.0.0 :026 > 5 < 9 || 8 > 9
 => true
3.0.0 :027 > nil
 => nil
```

### Variables
- no variable declarations
- snake_case naming convention
- single equal sign is an assignment operator
- string interpolation uses double quotes

```ruby
3.0.0 :028 > my_name = 'Sarah'
 => "Sarah"
3.0.0 :029 > my_name
 => "Sarah"
3.0.0 :030 > my_name = 6
 => 6
3.0.0 :031 > my_name
 => 6
3.0.0 :032 > my_name = 'sarah'
 => "sarah"
3.0.0 :033 > "Hey there, #{my_name}"
 => "Hey there, sarah"
```

### Methods
- dot notation for built in methods
- Ruby has a ton of methods
- parentheses are only needed if you are passing arguments
- chained methods will execute in order

```ruby
3.0.0 :034 > 'hello there'.length
 => 11
3.0.0 :035 > my_name
 => "sarah"
3.0.0 :036 > my_name.upcase
 => "SARAH"
3.0.0 :037 > my_name.capitalize
 => "Sarah"
3.0.0 :038 > my_name.reverse
 => "haras"
3.0.0 :039 > 5.upcase
(irb):39:in '<main>': undefined method 'upcase' for 5:Integer (NoMethodError)
3.0.0 :040 > my_name.delete('h')
 => "sara"
3.0.0 :041 > my_name.delete'h'
 => "sara"
3.0.0 :042 > 'moss'.delete('s')
 => "mo"
3.0.0 :043 > my_name.delete('sh')
 => "ara"
3.0.0 :044 > my_name
 => "sarah"
3.0.0 :045 > my_name.include?('s')
 => true
3.0.0 :046 > my_name.include?('t')
 => false
3.0.0 :047 > my_name.include?('S')
 => false
3.0.0 :048 > my_name.reverse.upcase
 => "HARAS"
3.0.0 :049 > my_name.upcase.include?('S')
 => true
3.0.0 :050 > my_name.upcase.include?('sa')
 => false
3.0.0 :051 > my_name.include?('s' && 'a')
 => true
3.0.0 :052 > my_name.include?('sa')
 => true
3.0.0 :053 > my_name.include?('sh')
 => false
3.0.0 :054 > my_name.include?('s' && 'h')
 => true
3.0.0 :055 > my_name
 => "sarah"
3.0.0 :056 > my_name = my_name.capitalize
 => "Sarah"
3.0.0 :057 > my_name
 => "Sarah"
```

### Accessors vs mutators
- Ruby methods are accessors by default
- To be permanent you can redefine the variable
- methods can be made mutators with the bang operator
