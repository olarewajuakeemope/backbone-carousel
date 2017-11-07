# Backbone Carousel Demo
Backbone Carousel Demo is an simple carousel with four blocks of images designed using only Backbone

## Features

  - by default, the carousel displays 4 blocks.  
  - navigation is made with next and previous buttons on corresponding sides of the carousel.
  - Next button is disabled, if user is at the very end of the carousel.
  - Previous button is disabled, if user is at the very beginning of carousel.
  - clicking on next/previous buttons shows next/prev 4 carousel blocks accordingly.
  - the source of the carousel blocks is an endpoint, `/slides`, from the server returning the model JSON

## Technologies
Backbone Carousel Demo is implemented using a number few technologies:
* Backbone - Implements MVC on the client
* Underscore -Backbone dependency
* Jquery - Backbone dependency
* [node.js] - evented I/O for the backend
* [express] - Serves development and production builds]


   [backbone]: <http://backbonejs.org/>
   [underscore]: <http://underscorejs.org//>
   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com/>

## Usage
1. Fork this repository to your GitHub account
2. Clone the forked repository and cd into it

3. Install all dependencies by running this command below in your terminal/shell
    ````
    npm install
    ````

4. To run the development server enter the command below in your terminal/shell
    ````
    DEBUG=carousel-demo:* npm start
    ````

5. Navigate to localhost:3000 on your browser



