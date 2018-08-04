**FourBoot Bootstrap Select Picker (Bootstrap 4)**
==========

javascript library to convert html select into beautiful **Bootstrap 4** dropdown

### Options:
here is a list of all available options

*Note:* All options can be passed directly to JS and can be overriden for each element individual by ```data-``` attribute

|Name|Type|Default|Description|
|--- |--- |--- |--- |
|class|string|"fourboot-default"|the dropdown button classes.|
|dropdownClass|string|""|add .dropdown classes, useful when add .dropleft, .dropright, .dropup, ... etc|
|closeOnSelect|boolean|true|on single select, should dropdown close after select or not.|
|multipleSelectedSeparator|string|', '|multiple selected choices separator text on dropdown button|
|liveSearch|boolean|false|enable/disable the live search input|
|liveSearchCaseSensitive|boolean|false|allows for accent-insensitive searching.|
|maxOptions|integer OR null|null|define max option selected|
|height|css height|'192px'|determine the height of the dropdown|
|ObserverEnabled|boolean|true|enabling the observer will automatically detect any changes (add/remove options) to select and manipulate changes to dropdown according to new changes|
|actions|boolean OR array|false|When set to true, it will add all available actions (select/deselect) buttons , otherwise when it array it will accept any of these data ['select-all','deselect-all']|
|header|string OR null|null|when it is a string a header in top of dropdown will be visible|
|autoSelectFirst|boolean|false|when false if no option has is has selected attribute then the default value is null, or empty array in multiple case|
|selectedTextFormat|string|"values"|accepted values are: <br> ["values","count","count > X","static"] <br> <br>  - **values:** always display selected values joined by ```multipleSelectedSeparator``` <br> - **count:** always display selected count in format ```X of Y selected```  <br> - **count > X:** if count of selected is greater than X then ```count``` is applied otherwise ```values``` is applied  <br> - **static:** always display the placeholder|

<hr>

### **```option```** element attributes:

1. **data-tokens** =>  allow to search form options by any tokens
2. **data-class** =>  allow to add class for dropdown item corresponding to this option
3. **data-icon** =>  allow to add icon before option text ```example: data-icon="fa fa-trash"```
4. **data-content** =>  allow to override original content with custom content
5. **title** => display alternate text to original when option is selected
