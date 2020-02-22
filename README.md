# Doner

Web app that offers a monthly subscription for 3.50 (swipe)
One local Berlin charity is highlighted each month and will receive the funds
Tracker for 'doners' donated this month
Tracker for past months
Charities can apply to be considered in the rotation

## Model and data flow

Database of charities needed with:

- Name
- Display name (? German names can get long)
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

### Frontend

- Define theme colors - main and secondary colors
- Find a cool font
- Decide on a component library (Material UI, Ant Design) or CSS (Tailwind) or both(?)
- Use Tailwind CSS, set up config to include in dev and prod builds (see homework week 19 for reference)
- Define main page component (static)
- Define order component (static)
- Define 'doner' component -> change based on chosen donation amount
- Define Donate button component
- Define Subscribe button component
- Define a Spinner component for loading/transitions [React Epic Spinners](https://bondz.github.io/react-epic-spinners/)
- Define Stats component with a goal and a current count/sum of donations
- Expand Stats component with a yearly overview of donations and chosen charities

### Backend

- Decide on a database scheme and db driver (Mongoose + MongoDB or Sequelize + MySQL)
- Define schema for 'charities' -> name, url, img, date_until
- Seed 'charity' db with some initial data
- Define schema for 'orders'
- Define schema for 'users'
- Set up simple server with Express
- Define routes
- connect server to DB
- Integration with Stripe for payments [Documentation](https://stripe.com/docs)
- Quick solution (?): [Stripe Checkout](https://stripe.com/docs/payments/checkout)
- Set up a subscription option [Stripe subscription example](https://github.com/stripe-samples/set-up-subscriptions)

## CRA readme

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
