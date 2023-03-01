# DATA

## PRODUCTS

- id
- name
- price
- image
- is available?

## CUSTOMERS

- id
- name
- customer adress
- email
- isLogged?

## ORDERS

- id
- list of products
- customer
- state ( ready to dispatch | dispatched )

# DATA MODIFICATION

## PRODUCTS

- load products
- set isAvailable
- unset isAvailable

## CUSTOMERS

- create new user
- set isLogged
- unset isLogged
- modify user

## ORDERS

- add selected products
- delete selected products
- set order state to ready to dispatch
- set ordre state to dispatched
