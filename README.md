Welcome to MyProject!

This is a React Native TypeScript project that implements the Google Place Autocomplete API from scratch, without using react-native-google-places-autocomplete packages, to find places and display them on a map.
It also utilizes Redux-thunk middleware to fetch data from the API.

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

src/components: Contains reusable components used in the project.
src/hooks: Contains custom hooks.
src/redux: Contains Redux slices for fetching and managing data.
src/screens: Contains the main screens of the application.
src/services: Contains the API service config and endpoints.
src/types: Contains TypeScript type declarations for the project.
