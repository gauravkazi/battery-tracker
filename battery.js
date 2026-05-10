const batteryLevel = document.getElementById("battery-level");
const percentage = document.getElementById("percentage");
const statusText = document.getElementById("status");
const chargingTime = document.getElementById("charging-time");
const dischargingTime = document.getElementById("discharging-time");


navigator.getBattery() .then(function(battery){
    function updateBattery(){

        //battery%

        let level = battery.level * 100;
        batteryLevel.style.width = level + "%";
        percentage.innerText = level + "%";

       //charging status
       
        if(battery.charging){
            statusText.innerText = "charging ⚡";

        }else{
            
            statusText.innerText = "Not-charging";


        }
        // color change

        if(level > 50){
            batteryLevel.style.background ="limegreen";

        }
        else if (level > 20) {
            batteryLevel.style.background ="orange";

        } else{
            batteryLevel.style.background ="red";

        }

        //charging time 

        if(battery.chargingTime === Infinity){
            chargingTime.innerText = "charging Time: Not available";

        }else{
            chargingTime.innertext = "chargingTime: " + battery.chargingTime + "sec";

        }
        
        // discharging time 
        
        if(battery.dischargingTime === Infinity){
            dischargingTime.innerText = "dischargingTime: Not available";

        }else{
            dischargingTime.innertext = "discharging: " + battery.dischargingTime + "sec";
        }



    }
    // initial run
   
    updateBattery();

    // Real time updates
    
    battery.addEventListener("levelchange", updateBattery);
    
    
    battery.addEventListener("chargingchange", updateBattery);


});

console.log("battery is working");