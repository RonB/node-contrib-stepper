var StepperWiringPi = require("stepper-wiringpi");

module.exports = function(RED) {
    function Stepper(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        var motor = StepperWiringPi.setup(16, 2, 3, 4);
        this.on('input', function(msg) {
            msg.payload  = motor.forward();
            node.send(msg);
        });
    }
    RED.nodes.registerType("stepper", Stepper);
}
