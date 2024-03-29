# Payload Admin

Payload is a package delivrery app. It  aims to help you
deliver packages to organizations and inidividuals
with ease at a reasonable price. This is the React Admin Application 


### Admin

The admin is able to:

1. Register
2. Monitor the movements of riders
3. Remove and add users
4. Send Messages to all users

## Screenshot of the application
### Admin Dashboard
![Dashboard](/src/Images/PayloadAdmin.png)


## Important !!
### Repository structure:



- public : Icons and cofiguration other important files

- src

  - Pages : Contains screens or pages of the application
    - Control.js
    - Dashboard.js
    - HelpandSupport.js
    - Homepage.js
    - Register.js
    - Messaging.js
    - Login.js
  - Images : Contains images used in the app
  - Components
    - styling : Contains styling for the components
    - Navbar.js
    - button.js
    - Callout.js
    - Mapper.js
    - MarkerMapper.js
    - Navbar.js
  - Store : Contains files for managing global state
  - Styling: Contains styles for Pages in the application
    More files
- .gitignore
- package-lock.json
- package.json
- README.md

## Installation
Make sure you have a stable version of [nodejs](https://nodejs.org/en) installed on your system and a good Web browser 
with latest features

#### Clone the git Repository
In your preferred directory, run in your terminal: 

```
git clone https://github.com/AbelTattah/Pkg-Del-Admin.git
```

#### Move into the directory
Run: 

```
cd Pkg-Del-Admin
```

#### Install dependencies
Run: 
```
npm install
```


#### Start the app
Run: 

```
npm start
```

## Contribution 
Visit the [Issues](https://github.com/AbelTattah/Pkg-Del-Admin/issues) section of this repository to find issues that you might be able to help with 

Or 

Navigate to [tasks doc](/docs/tasks.md)

## TroubleShooting
### Known Issues
1. Map not showing
   #### Fix
      Follow this [google_maps_documentation](https://developers.google.com/maps/documentation/javascript/cloud-setup)
      to setup google maps in your copy of this project


## License

This project is licensed under the [MIT License](./docs/LICENSE.md).
