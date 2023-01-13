## Active Record Migrations 1/12/23 Hotel Cohort

### Setup
- $ rails new party_menu -d postgresql -T
- $ cd party_menu
- $ rails db:create
- $ rails server
- $ code .
- $ rails new party_menu -d postgresql -T
- $ cd party_menu
- $ rails db:create
- $ rails server
- $ code .

### Files of concern
- migration file (db/migrate)
- model file (app/models)

### Resources
- Info about RoR: https://guides.rubyonrails.org/
- Info about Active Records: https://edgeguides.rubyonrails.org/index.html
- $ rails --help

### Process
- Generate a model
- Generate a migration
- Perform CRUD Actions

# Generate a Model
- $ rails generate model EventMenu title:string chef:string
```bash
 invoke  active_record
      create    db/migrate/20230112225219_create_event_menus.rb
      create    app/models/event_menu.rb
```

- $ rails db:migrate
  - Should see a successful printout like the following
```bash
    == 20230112225219 CreateEventMenus: migrating ==
    -- create_table(:event_menus)
      -> 0.0138s
    == 20230112225219 CreateEventMenus: migrated (0.0138s)
```

- $ rails c
  - NOTE: control + L will clear the rails console

### CREATE
> cake = EventMenu.create( title: 'Lemon Raspberry Cheesecake', chef: 'Cheesecake Factory' )
> cake
```bash
  #<EventMenu:0x00000001287d29d0
  id: 1,                       
  title: "Lemon Raspberry Cheesecake",
  chef: "Cheesecake Factory",  
  created_at: Thu, 12 Jan 2023 23:08:34.792937000 UTC +00:00,
  updated_at: Thu, 12 Jan 2023 23:08:34.792937000 UTC +00:00>
```

### READ
- see all the entries in the database
  > EventMenu.all

- to see a specific entry
  > EventMenu.find 4
  > EventMenu.where(chef: 'Christian')

### UPDATE
  > christian = EventMenu.where(chef: 'Christian')
  > christian.update(title: 'Cranberry Ginger Ale')

### DELETE
  > charlean = EventMenu.where(chef: 'Cheesecake Factory')
  > charlean
```bash
  # returns the output as an array on the where method
  [#<EventMenu:0x000000010aa82ea0
  id: 1,                      
  title: "Lemon Raspberry Cheesecake",
  chef: "Cheesecake Factory", 
  created_at: Thu, 12 Jan 2023 23:08:34.792937000 UTC +00:00,
  updated_at: Thu, 12 Jan 2023 23:08:34.792937000 UTC +00:00>]
```
- Use bracket notation to access the value in the array
  > charlean[0].destroy

  > dessert = EventMenu.find 1
  > dessert
```bash
  # returns a hash
  <EventMenu:0x000000010b33a480                   
  id: 1,          
  title: "Lemon Raspberry Cheesecake",
  chef: "Cheesecake Factory",                        created_at: Thu, 12 Jan 2023 23:08:34.792937000 UTC +00:00,
  updated_at: Thu, 12 Jan 2023 23:08:34.792937000 UTC +00:00>               
```

## Migration
- Migration - new version of your database
  - $ rails generate migration add_price_column
- Add change definition
  - $ rails db:migrate
- The database will be updated with the new key:value pair. Value will be nil because we have not assigned a value.
- To update, we will assign an entry to a variable.
  > bora = EventMenu.where(title: 'Egg Rolls')
  > bora.update(price: '$25.00')
  > EventMenu.where(chef: 'Fred').update(price: '$30.50')

