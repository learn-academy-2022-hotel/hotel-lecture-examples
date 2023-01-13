# ACTIVE RECORD ASSOCIATIONS 1/13/2023

# Concepts
- has_many belongs_to relationship between 2 tables
- foreign key connects the two tables
- foreign key lives on belongs_to side
- foreign key data is primary key of table you're connecting


# Setup
- $ rails new associations -d postgresql -T
- $ rails db:create

# Databases
- $ rails g model Cohort name:string year:string
- $ rails g model Student name:string cohort_id:integer

# Models
***app/models/student***
```ruby
class Student < ApplicationRecord
  belongs_to :cohort
end
```
***app/models/cohort***
```ruby
class Cohort < ApplicationRecord
  has_many :students
end
```

# Adding data in console

- $ Cohort.create(name:'Hotel', year:2022)
    #<Cohort:0x00000001338f9128
    id: 1,                
    name: "Hotel",        
    year: "2022",         
    created_at: Fri, 13 Jan 2023 17:47:43.923767000 UTC +00:00,
    updated_at: Fri, 13 Jan 2023 17:47:43.923767000 UTC +00:00> 



- $ hotel = Cohort.find(1)
- $ hotel.students.create(name:'Monica')

#<Student:0x00000001335d4308                                                    
 id:5,                                                         name:"Monica",                                                cohort_id:1,                                                  
 created_at: Fri, 13 Jan 2023 18:11:14.768125000 UT+00:00,                    
 updated_at: Fri, 13 Jan 2023 18:11:14.768125000 UTC +00:00> 
