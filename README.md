# Movie Suggestor

Movie Suggestor is a web application that suggests top 10 movies based on a selected genre using the Google Gemini API.

## Features
- Select a movie genre from a dropdown list.
- Fetch top 10 movies for the selected genre using AI.
- Display movie suggestions dynamically.

## Technologies Used
- HTML
- CSS
- JavaScript
- Google Gemini API

## Usage
1. Select a movie genre from the dropdown menu.
2. Click the "Get Suggestions" button.
3. View the top 10 suggested movies.

## API Configuration
This project uses Google Gemini API for movie recommendations. Ensure you have a valid API key:
- Replace `YOUR_API_KEY` in `script.js` with your actual API key.
- API Endpoint used:
  ```sh
  https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=YOUR_API_KEY
  ```


