module.exports = function(RED) {
    function Stepper(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        this.on('input', function(msg) {
            msg.payload  = "test";
            node.send(msg);
        });
    }
    RED.nodes.registerType("stepper", Stepper);
}