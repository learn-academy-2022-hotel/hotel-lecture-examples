# Active Record Validations and Model Specs 01/17/2023

Validations - Active Record statements that are added to the model class

- Run each time you create or update an instance
- Ensure the data that is getting passed in is what we are expecting

## Setup
$ rails new validations -d postgresql -T 
$ cd validations 
$ rails db:create

Installed RSpec gem:
$ bundle add rspec-rails

Generated a spec folder to hold our RSpec tests
$ rails generate rspec:install

Generate a Model
$ rails g model Animal name:string amount:integer

I want to check that Active Record will reject an instance that does not provide data on a specific column.

spec/models/animal_spec.rb

require 'rails_helper'

```ruby
RSpec.describe Animal, type: :model do
  it 'is valid with valid attributes' do
    cat = Animal.create(name:'Cat', amount: 10)
    expect(cat).to be_valid
  end

  it 'is not valid without a name' do
    cat = Animal.create(amount:12)
    expect(cat.errors[:name]).to_not be_empty  #iow, to throw an error
  end
end
  ```
Good Fail!

Update model to have validations:

/app/models/animal.rb

```ruby
class Animal < ApplicationRecord
  validates :name, presence: true
end
```

Make sure the new instance has an amount

spec/models/animal_spec.rb

```ruby
   it 'is not valid without an amount' do
    #create an instance that will not be admitted to db
    cat = Animal.create(name:'Cat')
    # write expect statement that checks if an error is thrown (if error is present in array)
    expect(cat.errors[:amount]).to_not be_empty  #has error in array ['can't be blank']
  end
  ```

Good fail!

Update model to have validations:

/app/models/animal.rb

```ruby
class Animal < ApplicationRecord
  validates :name, :amount, presence: true
end
```

Use the length property to make sure name is within a certain range of characters

spec/models/animal_spec.rb

  ```ruby
it 'is not valid if name is outside of 2-20 characters' do
    ox = Animal.create(name: 'O', amount:1)
    expect(ox.errors[:name]).to_not be_empty

    long_ox = Animal.create(name: 'Kevin the One-Armed WonderCat', amount:1)
    expect(long_ox.errors[:name]).to_not be_empty
  end
  ```

  Good Fail!

  Update model with length validation

  ```ruby
  class Animal < ApplicationRecord
    validates :name, :amount, presence: true
    validates :name, length: { in: 2..20 }
  end
  ```

Final Result:

spec/models/animal_spec.rb

require 'rails_helper'

```ruby
require 'rails_helper'

RSpec.describe Animal, type: :model do
  it 'is valid with valid attributes' do
    cat = Animal.create(name:'Cat', amount: 10)
    expect(cat).to be_valid
  end

  it 'is not valid without a name' do
    cat = Animal.create(amount:12)
    expect(cat.errors[:name]).to_not be_empty  #iow, to throw an error
  end

  it 'is not valid without an amount' do
    #create an instance that will not be admitted to db
    cat = Animal.create(name:'Cat')
    # write expect statement that checks if an error is thrown (if error is present in array)
    expect(cat.errors[:amount]).to_not be_empty  #has error in array ['can't be blank']
  end

  it 'is not valid if name is outside of 2-20 characters' do
    ox = Animal.create(name: 'O', amount:1)
    expect(ox.errors[:name]).to_not be_empty

    long_ox = Animal.create(name: 'Kevin the One-Armed WonderCat', amount:1)
    expect(long_ox.errors[:name]).to_not be_empty
  end
end

```

models/animal.rb

```ruby

class Animal < ApplicationRecord
  # validates that name is present in an instance
  validates :name, :amount, presence: true
  # validates :amount, presence: true   //
  validates :name, length: { in: 2..20 }
end
```

