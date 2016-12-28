var StepperWiringPi = require("stepper-wiringpi");

module.exports = function(RED) {
    function Stepper(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        var motor = StepperWiringPi.setup(16, 2, 6, 7, 8);
        this.on('input', function(msg) {
            msg.payload  = "test";
            node.send(msg);
        });
    }
    RED.nodes.registerType("stepper", Stepper);
}
