# polygonApi

## Backend Setup

The backend of this project is responsible for fetching data using the "Daily Open/Close" API provided by Polygon.io. The API endpoint used is "/v1/open-close/{stocksTicker}/{date}". To set up the backend, follow the steps below:

1. Install the required dependencies by running `npm install`.

2. Create an `.env` file in the root directory of the backend and set the required environment variables. For example:

The `API_KEY` will be used to authenticate and access the Polygon.io API.

3. In the backend code, the API key is initialized and accessed from the `.env` file to use it inside the API requests.

4. The backend fetches data from the Polygon.io API and sends the required data as output with proper status codes.

### Edge Cases in Backend

- Handling the request body properly to ensure valid and expected data.
- Properly handling responses from the Polygon.io API to handle any errors or unexpected data.

## Frontend Setup

The frontend of this project is responsible for the user interface and interaction. To set up the frontend, follow the steps below:

1. Install the required dependencies by running `npm install`.

2. Additional package `axios` is used to make API requests from the frontend.

3. The main component of the frontend is `StockForm`, which contains the main form for user input.

4. A reusable component `StockDataCard` is created as a molecule, which can be used on any other page to display stock data.

5. The `displayFlashMessage` function is implemented to show errors and success messages. These messages automatically disappear after 3 seconds and can be customized.

### Edge Cases in Frontend

- Handling the input for the stock key, ensuring that it is always in uppercase alphabetical text.
- Restricting the date calendar to prevent the selection of future dates.

## Technologies Used

- Backend: Node.js, Express, Axios, Polygon.io API
- Frontend: React, Axios, CSS.
