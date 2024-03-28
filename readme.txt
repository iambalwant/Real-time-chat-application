REAL-TIME-CHAT-APPLICATION
This repository contains two folders public and server
----------------------------
First, install all dependencies
In public :
    "axios": "^1.6.2",
    "buffer": "^6.0.3",
    "emoji-picker-react": "^4.5.16",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.12.0",
    "react-router-dom": "^6.20.1",
    "react-scripts": "5.0.1",
    "react-toastify": "^9.1.3",
    "socket.io": "^4.7.2",
    "socket.io-client": "^4.7.2",
    "styled-components": "^6.1.1",
    "uuid": "^9.0.1",
    "web-vitals": "^2.1.4",
    "yarn": "^1.22.21"

In server :
    "bcrypt": "^5.1.1",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "mongoose": "^8.0.2",
    "socket.io": "^4.7.2"

just by typing 'npm install'
----------------------------

In the public folder, you can run the program by - npm start
In the server folder first, you have to create a .env file and add :

PORT=##### -- your port
MONGO_URL="mongodb://0.0.0.0:27017/#####" -- your mongo db database to stablize the connection

 then, you have to run the server by  nodemon .\index.js (install nodemon in your system first)
--------------------------
Have fun 😉😉!!!
