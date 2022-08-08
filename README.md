# Banking-App

## Functions

- Here are the required functions:
- create_user(user, balance)
  -function creates new user in the system
  -New user has zero balance (or an optional initial balance)
  -user (argument) is any string value
- deposit(user, amount)
  -increases user's balance by amount value
  -returns new_balance of the user
- withdraw(user, amount)
  -decreases user's balance by amount value
  -returns new_balance of the user
- send(from_user, to_user, amount)
  -decreases from_user's balance by amount value
  -increases to_user's balance in amount value
  -returns balance of from_user and to_user in given format
- get_balance(user)
  -returns balance of the user in given format (₱xx,xxx.xx or Phpxx,xxx.xx)
- list_users()
  -returns all users

## Error Handling

- wrong_arguments (e.g. amount cannot be negative, name cannot start with a number)
  -user_already_exists ('Den' == 'den')
  -user_does_not_exists ('Den' == 'den')
  -not_enough_money
  -sender_does_not_exists
  -receiver_does_not_exists

## Use localStorage

- You may use a button somewhere in your application page that when pressed should load the initial data to the localStorage
  This will help you, and other visitors on you Github Page, to immediately test the capabilities of your banking app
  Note: localStorage across different pages will only work on your Github Pages because it depends on the domain.

## Something Unique...

- Total Users
- To be implemented
- To be implemented

## Link

[Banking-App](#)

Banking App Project
