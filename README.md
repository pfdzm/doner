# Doner

Web app that offers a monthly subscription for 3.50 (swipe)
One local Berlin charity is highlighted each month and will receive the funds
Tracker for 'doners' donated this month
Tracker for past months
Charities can apply to be considered in the rotation

## Main page:

Branded top bar

'Charity of the month' widget with a charity displaying the title, picture, and a link to their website.

-> Click on charity name navigates to Charity-detail page

Donate button with a big, flashy CTA

-> Click on donate button starts an 'interactive' menu or flow of questions

## Choice 1 page (main ingredient)

Chicken, Beef, Vegan? -> different options result in a different donation amount in the end

## Choice 2 page (secondary ingredient)

Salat komplett, keine zwiebeln, keine tomaten, etc. -> Different options result in diff donation amount

## Choice 3 page (sauce ingredient)

Knoblauch, Krauter, Scharf

## Order summary page

Display a 'receipt' for the chosen ingredients/options with a total amount that will be donated

Order button at the bottom -> sends the order to db and creates a new donation

Navigated to thank you page if donation succesful

## Thank you

A simple thank you message and a link to the Doner stats page

## Döner stats

An overview of total donations per month and year total

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
