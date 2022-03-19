# wa-covid-sites
A React App UI for the official "unofficial" WA COVID exposure sites spreadsheet.

## wa-covit-sites is now offline
Unfortunately, due to the changing situation around COVID cases in Western Australia, I have decided to take this website offline (March 7 2022). With the successful drive to increase vaccination numbers, the state government has loosened restrictions and set a number for acceptable cases based on modeling. This number makes it very difficult to reliably track exposure sites. Given this is a community project run by volunteers, continuing it would be unfeasable. 

I'm proud to have used programming to add convenience to members of my local community. According to analytics, the site hit 7,000 pageviews across Australia, in the month it was up. It was a great learning experience too. One key takeaway was the importance of responsiveness, as 80% of my traffic was coming from mobile.


<img width="812" alt="wacovid" src="https://user-images.githubusercontent.com/85681107/159121054-3c801b8b-43cd-4f71-aa17-531e58a4bd3c.png">

---

## Feel free to fork this repo and contribute

You'll need to get an API key from GCP to make the API requests to the spreadsheet. And you can ignore the Google Analytics key.

## Stack
- Create-react-app
- Chakra-UI as the component library 
- Fontawesome for extra icons
- Google data API for accessing the spreadsheet data

## Potential features
- [x] Make the table sortable. The date data from google sheets is in a string format, so it will need to be parsed
- [ ] Add light/dark mode theming
- [x] Display a map of the exposure sites (maybe using the Covid Exposure Map from Michael Rieken)
- [x] Add a massive load of validation & error handling (hey, I made this at 2am!)
