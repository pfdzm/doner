# Doner

Web app that offers a monthly subscription for 3.50 (swipe)
One local Berlin charity is highlighted each month and will receive the funds
Tracker for 'doners' donated this month
Tracker for past months
Charities can apply to be considered in the rotation

## Model and data flow

Database of charities needed with:

- Name
- Display name (? German charity names can get pretty long)
- Summary
- link / URL
- Unique ID to reference from other parts of the app

Database of 'orders' (donations):

- Unique ID
- Doner configuration
- Donation amount

Database of 'users' (donors) OPTIONAL:

- Track unique user stats
- Display a user stats page with personalised stats

## Tasks

### Overall

- Initialize repo
- Configure eslint
- Configure git hooks (husky) to run eslint pre-commit
- Add TravisCI hook before build step
- Deploy to Heroku

### Front

- Define theme colors - main and secondary colors
- Find a cool font
- Decide on a component library (Material UI, Ant Design) or CSS (Tailwind) or both(?)
- Install component library and display example

### Front - React

- Define main page component
- Define order component
- Define 'doner' component -> change based on chosen donation amount
- Define Donate button component
- Define Subscribe button component
- Define a Spinner component for loading/transitions [React Epic Spinners](https://bondz.github.io/react-epic-spinners/)
- Define Stats component with a goal and a current count/sum of donations
- Expand Stats component with a yearly overview of donations and chosen charities

### Back

- Decide on a database scheme and db driver (Mongoose + MongoDB or Sequelize + MySQL)
- Define schema for 'charities' -> name, url, img, month
- Seed 'charity' db with some initial data
- Define schema for 'orders'
- Define schema for 'users'
- Set up simple server with Express
- Define routes
- connect server to DB
