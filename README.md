# Sports-Field-Finder
This is a CRUD project I've built using ReactJs, Node.Js and the free JSON Server fake REST API (https://www.npmjs.com/package/json-server) to mimick backend.  

I've used two additional free API's in the project : Mapbox (https://www.mapbox.com/) and OpenWeatherMap (https://openweathermap.org/)

The project is a work in progress. Details below.

## About the app

![1 (2)](https://user-images.githubusercontent.com/97125327/170995778-f87c99c6-02e3-4bff-bcc7-1a413d9b050a.png)

The application is mimicking a real website where the user can find sport fields in Cluj-Napoca (Romania). The properties are sorted into 4 categories: football,
basketball, tennis and table-tennis. The page also has login and register functionality (needs more validation and error handling).

### For all users (who are not registered)

![2 (2)](https://user-images.githubusercontent.com/97125327/170996130-ba51f05c-9d8c-4b4c-b5b5-4d611e6ca518.png)

Users can click on any of the categories to find all the available properties in that category. The property objects represent real sport properties in Cluj-Napoca (Romania).
These objects are created in the fake database (db.json) file.

![7](https://user-images.githubusercontent.com/97125327/170998109-66f1f0b2-0438-4021-b839-a4cc7464df89.png)

By clicking on any of the properties, the users can find details about the properties (facilities, address, contact details, map location (by using the free Mapbox API)).

There is also a small weather widget on the details page which displays information about the current weather and a 7 day forecast (by using the OpenWeatherMap free API).

![8](https://user-images.githubusercontent.com/97125327/170999612-1280adf1-a75f-4874-a5c3-f197fa97f786.png)

### For registered users (who are logged in)

Users who are logged in have access to the following extra features: 

### Add a property to a favorites list
![9](https://user-images.githubusercontent.com/97125327/171001097-f0fce5e3-10fa-4740-8368-4abeffa7ab53.png)

### A profile page 
Users have access to a BMI (Body Mass Index) calculator and a Favorites list where they can see their saved properties and delete them from the list if they like.

![10](https://user-images.githubusercontent.com/97125327/171002230-f01ba265-8f38-42de-9c9a-ce38c9921dae.png)

Users can also change their name on the profile page (changing the password functionality is not implemented).

### CSS
The styling is done by using only plain CSS (the pages are responsive, however the code is not optimized and can be improved upon).

### CRUD functionality and user experience
The user can add or delete properties from their favorite list however updating the name of their properties is not implemented.
Dialog box (modal) is added to ask the user if they want to change their name or add a property to their favorite list, however there is no dialog box added yet when the user wants to delete a property.

![11](https://user-images.githubusercontent.com/97125327/171009321-cd72a02a-c636-4bc8-b5bf-04f8054e0de3.png)

![12](https://user-images.githubusercontent.com/97125327/171009380-73e0be93-b3fa-4393-808b-692c4cd773f0.png)

Dialog box is not yet added to greet the user after logging in or ask the user for confirmation before logging out.

The user should also be able to change their password which is also not yet implemented.

If the user logs out at any point he will be redirected to the home page, however after session expires scenario is not implemented yet.

