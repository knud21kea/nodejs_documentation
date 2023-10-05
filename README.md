# KEA Node.js mandatory assignment 1

Full stack application serving multiple static HTML pages using Express

All content @author Graham Heaven

app.js is formated with Eslint using AirBnB style.

- App uses SSR, pages are fetched fully rendered by clicking an anchor in the top menu.
- The menu displays icons, where hovering shows a pop up wuth the page topic, if it is not clear.
- On each page it is possible to navigate to sections and back to start using the navigation side panel.
- Succesful log in simply redirects server side to simple admin page. The logged in status is not saved.
- Bonus topic is XSS, which is a learning goal but only mentioned in class.
- Clicking the lightbulb icon toggles dark/light css. This is done client side with a javascript utility.