var five = require("../");
var board = new five.Board();

board.on("ready", function() {

  // Hookup Guide
  // https://learn.sparkfun.com/tutorials/lsm303c-6dof-hookup-guide#hardware-assembly
  //
  // Basically uses I2C, so only 4 pins are needed:
  // VCC --> VIN
  // GND --> GND
  // SCL --> SCL
  // SDA --> SDA

  var layout = `
  Board layout:
       +----------+
       |         *| VIN   PITCH  ROLL  HEADING
       |         *| 3V3
  INTA |*        *| GND     ^            /->
  DRYM |*        *| SCL     |            |
  INTM |*        *| SDA     Y    Z-->    \-X
       |         *| CSA
       |         *| CMS
       +----------+
  `;

  console.log(layout);

  var imu = new five.IMU({
    controller: "LSM303C"
  });


  imu.on("change", function() {
    // console.log("Thermometer");
    // console.log("  celsius      : ", this.thermometer.celsius);
    // console.log("  fahrenheit   : ", this.thermometer.fahrenheit);
    // console.log("--------------------------------------");

    // console.log("Accelerometer");
    // console.log("  x            : ", this.accelerometer.x);
    // console.log("  y            : ", this.accelerometer.y);
    // console.log("  z            : ", this.accelerometer.z);
    // console.log("--------------------------------------");

    console.log("magnetometer");
    console.log("  heading : ", Math.floor(this.magnetometer.heading));
    //console.log("  bearing : ", this.magnetometer.bearing.name);
    console.log("  x            : ", this.magnetometer.heading.x);
    console.log("  y            : ", this.magnetometer.heading.y);
    console.log("  z            : ", this.magnetometer.heading.z);
    console.log("--------------------------------------");
  });
});
