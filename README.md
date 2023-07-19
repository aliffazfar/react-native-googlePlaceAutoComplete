<br />

<p align="center">
  <h1 align="center">React Native Google Place Autocomplete</h1>

  <p align="center">
    Implements the Google Place Autocomplete API from scratch, without using react-native-google-places-autocomplete packages, to find    places and display them on a map.
    <br />
    </p>
</p>

https://github.com/aliffazfar/react-native-googlePlaceAutoComplete/assets/97839622/5e3f96cd-ee67-4800-b2c5-6cf8f2fad0e7

## Features

- Search for places using the Google Place Autocomplete API.
- Display search results on a map (react-native-maps) and details.
- Utilize Redux-thunk middleware for asynchronous API calls.

## Prerequisites

Before running the project, make sure you have the following:

- Node.js installed on your machine
- React Native CLI installed globally
- An active Google Cloud Platform (GCP) project with the Place Autocomplete API enabled

## Getting Started

To get started with the project, follow these steps:

Clone the repository:
git clone https://github.com/aliffazfar/react-native-googlePlaceAutoComplete.git

1. Install dependencies:

   - cd react-native-googlePlaceAutoComplete
   - yarn

2. Configure the API key:

   - Create a new file named .env in the project root directory.
   - Open the .env file and add the following line:
     PLACE_AUTO_COMPLETE_KEY=YOUR_API_KEY_HERE

3. yarn ios | yarn android

## Folder Structure

The project follows the following folder structure:

- src/components: Contains reusable components used in the project.
- src/hooks: Contains custom hooks.
- src/redux: Contains Redux slices for fetching and managing data.
- src/redux/thunk: Contains API fetching with async thunk.
- src/screens: Contains the main screens of the application.
- src/services: Contains the API service config and endpoints.
- src/types: Contains TypeScript type declarations for the project.


## Contact
For any inquiries or questions, please contact aliffazfararis@gmail.com.
