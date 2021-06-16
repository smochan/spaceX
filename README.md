## To run this project:
```bash
git clone https://github.com/smochan/spaceX.git
cd spaceX
npm install
npm start
```

## View this live:
https://mochan-spacex.herokuapp.com/


## Tech stack used:
### node
Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.

### express
Express is a minimal and flexible Node.js web application framework which we used to create our server.

### Javascript
JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language.

### JQuery
JQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler

### EJS 
EJS is a templating language that lets you generate HTML markup with plain JavaScript. 

### CSS
CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.

## Approach 

- server.js file is used for creating the server and also for initial server side rendering of the page with missions of spaceX.
- I have used axios for https call from the spacex api
- Created a new array of object having just the data which will be rendered on page the and hence improving the time to load the page.

- index.ejs file is used for creating components of the page and to get data of missions from server. 

- In index.js there is two main function getText() and renderFlight().
    - In getText(), fetch method is used to make a get request from the api and then the data received from that request is converted to a json object.
    - In renderFlight(), full URL is created by combining three query flight_year, launch_succes and, landing_succes. Next we call getText() function by providing full url as a argument to fetch the required data. Then we used the data we got to store it in html string one by using forEach loop.
- In index.js file, whenever a button(year or launch/landing succes) is pressed a event is triggered and it checks if the button pressed was already pressed or not.
    - If it was already pressed then it removes that query from url and make get request with modified url and then renders the missions using renderFlight() function.
    - Otherwise it adds the query in the url corresponding to the button pressed and make get request with modified url and then renders the missions using renderFlight() function.
    