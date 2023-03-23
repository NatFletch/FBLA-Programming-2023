# FBLA-Programming-2023
My programming project for the 2023 FBLA season.

See https://www.fbla-pbl.org/fbla-topics/ on the "Coding And Programming" tab for info on the guidelines for this project and any constraints.

# Installation and usage
 - Clone the source code
 - ```git clone https://github.com/NatFletch/FBLA-Programming-2023.git```
 - Download and install Node.js
 - CD into source directory
 - Run `npm install` to install all neccessary project dependencies
 - Add or export an environment variable nanmed `FBLA_23_DATABASE` with your Postgres URL
 - Start the program via `npm start`

# Building
Building the code is very simple. As long as all the dependencies are installed you simply type `npm run make` and it will generate an `out` folder for you. Currently supported is Squirrel for Windows. Work for MacOS `dmg` and `deb` for Debian and `rpm` is being worked on
 
Coming Soon

# TODO
There is a lot of stuff I still need to finish up on
 - Reports at the end of each quarter
 
 If all goes well then the next step is to:
 - Do leaderboard
 - User settings
 - Use cache system to load events faster
 - Email recipts for purchases
 - QR code system for attendance at events
 - Website version

# Prejudge Day Preperations
 - Disable dev tools
 - Generate and provide a DB link (or somehow incorporate it into the binary)
 - Download, compile, and submit a binary of the project
