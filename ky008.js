var Gpio = require('pigpio').Gpio,
    led = new Gpio(26, {mode: Gpio.OUTPUT}),
    dutyCycle = 0;

led.digitalWrite(0);
setTimeout(function () {
    console.log("over")
},10000)