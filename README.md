# 🔋 Battery Tracker Web App

A simple and interactive **real-time Battery Tracker** built using **HTML, CSS, and JavaScript**.  
This project uses the **Browser Battery Status API** to fetch live battery data and dynamically update the UI in real time.


## Live Demo
> (http://127.0.0.1:5500/battery-tracker/battery.html)



## Features

-  Real-time battery percentage display  
-  Charging / Not Charging status detection  
-  Charging time estimation  
-  Discharging time estimation  
-  Dynamic color changes based on battery level  
  - Green → High battery (50%+)  
  - Orange → Medium battery (20% - 50%)  
  - Red → Low battery (< 20%)  
-  Automatic live updates using event listeners  
-  Simple and clean UI design  



## Technologies Used

- **HTML5** – Structure of the application  
- **CSS3** – Styling and UI design  
- **JavaScript (ES6)** – Core logic and interactivity  
- **Battery Status API** – Fetching real-time battery data from browser  


## Project Structure 

```plaintext id="k9x2lm"
battery-tracker/
│
├── index.html      # Main HTML file
├── style.css       # Styling file
└── script.js       # JavaScript logic

How it works

## Bttery API Access
The project uses the built-in browser API:
navigator.getBattery()

##  DOM Manipulation

JavaScript selects HTML elements using:

document.getElementById()


## Real-Time Updates

The application listens for battery changes using event listeners:

battery.addEventListener("levelchange", updateBattery);
battery.addEventListener("chargechange", updateBattery);

## UI Logic

Battery level controls UI appearance:

* 🟢 Above 50% → Green
* 🟠 20% - 50% → Orange
* 🔴 Below 20% → Red