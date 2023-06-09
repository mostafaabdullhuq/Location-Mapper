# Location Mapper

Location Mapper is a TypeScript/Webpack project that integrates Google Maps and Google Geolocation API to convert user-entered addresses into coordinates and render them on a map with a beautiful interface. It utilizes Tailwind CSS for styling.

## Features

-   **Address input:** Enter the desired address in a user-friendly input field.
-   **Geolocation API integration:** Utilize the Google Geolocation API to fetch the latitude and longitude coordinates of the entered address.
-   **Map rendering:** Display the geolocation coordinates obtained from the API on a map using the Google Maps API.
-   **Beautiful interface:** The application provides a visually appealing and responsive interface using Tailwind CSS.

## Usage

### Prerequisites

-   Node.js and npm should be installed on your system.

### Installation

1. Clone the repository:

    ```shell
    git clone https://github.com/mostafaabdullhuq/Location-Mapper
    ```

2. Navigate to the project directory:

    ```shell
    cd Location-Mapper
    ```

3. Install the dependencies:

    ```shell
    npm install
    ```

4. Rename `.env.example` file to `.env` and change the value of `GOOGLE_MAPS_API_KEY` to your own Google Maps API key.

5. Start the development server:

    ```shell
    npm start
    ```

6. Open the application in your browser at `http://localhost:8080`.

### Building

1. Run the following command:

    ```shell
    npm run build
    ```
