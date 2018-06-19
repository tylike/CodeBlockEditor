String.prototype.format = function () {
    var a = this;
    if (arguments && arguments.length > 0) {
        var b;
        for (b in arguments) {
            a = a.replace(/%[a-z]/, arguments[b]);
        }
    }
    return String(a);
};

var paracraft_blockly_config_source = Blockly.paracraft_blockly_config_source;

Blockly.paracraft_config_map = {};

function fix_format(item) {
    if (!item) {
        return
    }
    var arg0 = item.arg0;
    if (arg0) {
        var len = arg0.length;
        for (var i = 0; i < len; i++) {
            var arg_item = arg0[i];
            if (arg_item.type == "field_number") {
                arg_item.value = arg_item.text;
                arg_item.text = null;
            }
        }
        
        item.args0 = arg0;

        item.previousStatement = null;
        item.nextStatement = null;

        if(arg0.output){
            var old_output = arg0.output;
            arg0.output = old_output.type;
        }
    }
    return item;
}
function load(paracraft_blockly_config_source) {
    if (!paracraft_blockly_config_source) {
        return
    }
    var len = paracraft_blockly_config_source.length;
    for (var i = 0; i < len; i++) {
        var item = paracraft_blockly_config_source[i];
        var type = item.type;
        var block = Blockly.Blocks[type];
        if(!block){
            Blockly.paracraft_config_map[type] = fix_format(item);
            block = {
                init: function () {
                    var source = Blockly.paracraft_config_map[this.type];
                    this.jsonInit(source);
                }
            }
            Blockly.Blocks[type] = block;
        }
    }
}

load(paracraft_blockly_config_source);