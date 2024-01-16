# Front End Technical Challenge

## Setup

To run the project, use the following commands:

```shell
npm run dev
npm rum mockserver
```
To run the tests:
```shell
npm run test
```
To run the test coverage:

```shell
npm run test:cov
```

# Tasks

### Inventory Page

The backend team has implemented a new endpoint `/models`, and you have recently added the `getModels` function in `src/api/getModels.ts`. Your tasks are as follows:

1. Display a list of cards, each representing a model from the response.
   a. Hovering over a card should display a blue border around it.
   b. Each card should link to `/analysis/{MODEL_NAME}`.
   c. Display the model's name on the left side of the card and its type (Classification or Regression) on the right.

### Analysis Page

1. Create a new Analysis page accessible via the route `/analysis/${MODEL_NAME}`.
2. Display the model's name prominently at the top of the page.
3. Incorporate a card that presents a NIVO bar chart with data from `getAnalysis` in `src/api/getAnalysis.ts`.
   a. The bars in the chart should be oriented horizontally.
   b. The bars should be grouped by origin (not stacked) with label values shown as percentages.
   c. Ensure the card does not exceed the height and width of the screen.
   d. The card should be responsive and scale appropriately on smaller screens, with scrolling enabled inside the card for screens that are too short or narrow.