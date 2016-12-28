var StepperWiringPi = require("stepper-wiringpi");

module.exports = function(RED) {
    function Stepper(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        var motor = StepperWiringPi.setup(config.steps, config.pin1, config.pin2, config.pin3, config.pin4);
        this.on('input', function(msg) {
            msg.payload  = motor ? true : false;
            node.send(msg);
        });
    }
    RED.nodes.registerType("stepper", Stepper);
}
