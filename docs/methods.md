**FourBoot Bootstrap Select Picker (Bootstrap 4)**
==========

javascript library to convert html select into beautiful **Bootstrap 4** dropdown

### Methods:
here is a list of all available methods allow yoiu to get or modify select dropdown


|Name|param1|param2|Description|
|--- |--- |--- |--- |
|reset|-|-|re-read configuration from ```data-``` attributes and passed configuration to js code then update and re-write the dropdown|
|update|-|-|update and re-write the dropdown|
|val|integer OR string OR array OR null|-|update select value ```equal to $(select).val(somthing); $(select).fourBoot('update');|
|disabled|boolean|-|disable/enable the select and it's dropdown|
|toggle|-|-|open or close the dropdown menu for select dropdown|
|hide|-|-|hide the select dropdown|
|show|-|-|show the select dropdown|
|destroy|-|-|remove fourBoot code and display oroiginal select|
|select-all|-|-|select all options|
|deselect-all|-|-|deselect all options|
|set|string&nbsp;&nbsp;&nbsp;&nbsp;<br>(option-name)|string / boolean / array / null (option-name)|update options <br>**note: by calling reset any update from ```set``` will be reset**|
|get|- / string|-|with no parameters return a clone of all config otherwise it will return specified option|
