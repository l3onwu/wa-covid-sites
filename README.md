# wa-covid-sites
A React App UI for the official "unofficial" WA COVID exposure sites spreadsheet.

## Feel free to fork this repo and contribute 

You'll need to get an API key from GCP to make the API requests to the spreadsheet. And you can ignore the Google Analytics key.

## Stack
- Create-react-app
- Chakra-UI as the component library 
- Fontawesome for extra icons
- Google data API for accessing the spreadsheet data

## Potential features
- [ ] Make the table sortable. The date data from google sheets is in a string format, so it will need to be parsed
- [ ] Add light/dark mode theming
- [ ] Display a map of the exposure sites (maybe using the Covid Exposure Map from Michael Rieken)
- [ ] Add a massive load of validation & error handling (hey, I made this at 2am!)
