var Gpio = require('pigpio').Gpio,
    device = new Gpio(4, {mode: Gpio.OUTPUT,alert:true});

device.digitalWrite(0);
setTimeout(function () {
    device.trigger(25, 1);

    device.mode(Gpio.INPUT);
    let tic=0;
    let d = [];
    let flag = false
    device.on('alert', function (level, t) {
        level = level===0?1:0;

        let tick = t-tic;
        tic = t

        console.log(level,tick)
        if(level===1 && flag===true){
            if(tick<30){
                d.push(0)
            }else{
                d.push(1)
            }
        }

        if(65<tick&&tick<95&&level===1){
            flag = true;
        }
        //
        //
        if(d.length===40){
            let chr = d.join("")
            console.log(chr)
            let h=chr[0]*128+chr[1]*64+chr[2]*32+chr[3]*16+chr[4]*8+chr[5]*4+chr[6]*2+chr[7];
            let t = chr[16]*128+chr[17]*64+chr[18]*32+chr[19]*16+chr[20]*8+chr[21]*4+chr[22]*2+chr[23];
            console.log(t/10,h/10)
        }
    });

},50)



