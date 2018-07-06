# CodeBlockEditor
A blockly web editor for code block 
### Compatibility 
The attributes of definition below are different between npl and blockly json,
It is fixed with the BlocklyLoader.js
```
previousStatement = true -> previousStatement = null
nextStatement = true -> nextStatement = null
output = { type = "field_number" } -> output = "field_number"
output = { type = "null" } -> output = null
arg0 -> args0

text -> value in "field_number"
```
### Preview
```lua
-- Loading the config source dynamically after running paracraft every time
http://localhost:8099/blockeditor

-- debug
-- Loading the static files which include menu_xml/config_json/execution_js from the folder of [BlocklySourceTemplate] to run blockly
http://localhost:8099/blockeditor?debug=true
```
![image](https://user-images.githubusercontent.com/5885941/42315274-9ea57e68-8079-11e8-9d45-a4a5ccf0d895.png)

