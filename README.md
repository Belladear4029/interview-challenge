# Feedr Technical Challenge

Thank you for taking the time to attempt this challenge.

These tests are used to evaluate candidates of all skill levels so please complete them to a level you feel is an accurate representation of your skill set.

Please read `README-FRONTEND.md` for further instructions.

If you have any questions or would like to clarify any details, please email lyz@feedr.co.

Good luck!

# Quick Start
Fork the repository, clone it to your local system, then:

## Install dependencies
yarn (or npm install)

## Start development server
yarn dev (or npm run dev)

## Run tests
yarn test (or npm run test)


# App
## Details:
- Class component
- Holds state and lifecycle hooks
## Functionality:
- Retreive items from server
- Handle search
- Filter items
- Add item to selected array
- Remove item from selected array

# Header
## Details:
- Dumb component
- Functional component
- Receives items as prop
## Functionality:
- Display number of items selected - total and individual dietary types

# MenuPicker
## Details:
- Dumb component
- Functional component
- Receives items as prop
- Receives selectItem function as prop
- Receives handleSearch function as prop
## Functionality:
- Display all items passed as props
- Call selectItem function when item selected
- Call handleSearch function when user input in search bar

# MenuPreview
## Details:
- Dumb component
- Receives items as prop
- Receives removeItem function as prop
## Functionality:
- Display all items passed as prop

# ItemCard
## Details:
- Dumb component
- Functional component
- Child component for MenuPicker and MenuPreview
- Receives item as prop
- Receives removeItem function as prop
## Functionality:
- Display item info
- Call removeItem function when remove icon clicked
