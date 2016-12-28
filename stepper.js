var StepperWiringPi = require("stepper-wiringpi");

module.exports = function(RED) {
    function Stepper(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        this.log('init stepper');
        this.log('StepperWiringPi ' + (StepperWiringPi ? true : false));
        var motor = StepperWiringPi.setup(config.steps, config.pin1, config.pin2);
        this.log('motor initialized ' + (motor ? true : false));
        this.on('input', function(msg) {
            node.send(msg);
        });
    }
    RED.nodes.registerType("stepper", Stepper);
}
