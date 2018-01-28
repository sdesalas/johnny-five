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

  this.samplingInterval(1000);

  var imu = new five.IMU({
    controller: "LSM303C"
  });

  //console.log(imu);

  imu.on("change", function() {
    // console.log("Thermometer");
    // console.log("  celsius      : ", this.thermometer.celsius);
    // console.log("  fahrenheit   : ", this.thermometer.fahrenheit);
    // console.log("--------------------------------------");

    if (this.accelerometer) {
      console.log("Accelerometer");
      console.log("  x            : ", this.accelerometer.x);
      console.log("  y            : ", this.accelerometer.y);
      console.log("  z            : ", this.accelerometer.z);
      console.log("  pitch        : ", this.accelerometer.pitch);
      console.log("  roll         : ", this.accelerometer.roll);
      console.log("  acceleration : ", this.accelerometer.acceleration);
      console.log("  inclination  : ", this.accelerometer.inclination);
      console.log("  orientation  : ", this.accelerometer.orientation);
      console.log("--------------------------------------");
    }

    if (this.magnetometer) {
      console.log("magnetometer");
      console.log("  heading : ", Math.floor(this.magnetometer.heading));
      //console.log("  bearing : ", this.magnetometer.bearing.name);
      console.log("  x            : ", this.magnetometer.raw.x);
      console.log("  y            : ", this.magnetometer.raw.y);
      console.log("  z            : ", this.magnetometer.raw.z);
      console.log("--------------------------------------");
    }

    if (this.thermometer) {
      console.log("Thermometer");
      console.log("  celsius      : ", this.thermometer.celsius);
      console.log("  fahrenheit   : ", this.thermometer.fahrenheit);
      console.log("--------------------------------------");
    }
    console.log("=====================================");
  });
});
