# FBLA-Programming-2023
My programming project for the 2023 FBLA season. Meets all the required criteria WOOOOOOOOO

See https://www.fbla-pbl.org/fbla-topics/ on the "Coding And Programming" tab for info on the guidelines for this project and any constraints.

# ⭐Awards⭐
 - Won 5th place at Missouri SLC
 - Qualified for NLC (runner up)

# Notable features
 - Meets all requirements on the event topics website
 - Made entirely in HTML and Javascript but uses Electron to make it into an application
 - Database hosted on free edition through Cockroach DB
 - Has a leaderboard page which wasn't required
 - Uses PostgresSQL

# Installation and usage
 - Clone the source code
 - ```git clone https://github.com/NatFletch/FBLA-Programming-2023.git```
 - Download and install Node.js
 - CD into source directory
 - Run `npm install` to install all neccessary project dependencies
 - Add or export an environment variable nanmed `FBLA_23_DATABASE` with your Postgres URL
 - Start the program via `npm start`

# Building
Building the code is very simple. As long as all the dependencies are installed you simply type `npm run make` and it will generate an `out` folder for you. To generate documentation (granted it is already provided) run `jsdoc scripts` and it will appear in the `out` folder.

# Prejudge Day Preperations (Archive)
 - Disable dev tools
 - Generate and provide a DB link (or somehow incorporate it into the binary)
 - Download, compile, and submit a binary of the project
