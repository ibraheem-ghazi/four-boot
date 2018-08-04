**FourBoot Bootstrap Select Picker (Bootstrap 4)**
==========

javascript library to convert html select into beautiful **Bootstrap 4** dropdown


!> **Note** send us a file with your translation to add it to FourBoot Select Picker

### <u>*How to define new language*</u>

```js
$.fn.fourBoot.default.dict.{lang_key}={
	selectAll:'Select all',
	deselectAll:'Delect all',
	nothingSelected:'Nothing selected',
	search:'search ...',
	noSearchResult:'No results matched "%%"',
};
```

for example:
```js
//Example of Custom language
$.fn.fourBoot.default.dict.test={
	selectAll:'Test 1',
	deselectAll:'Test 2',
	nothingSelected:'Test 3',
	search:'Test 4',
	noSearchResult:'Test 5 "%%"', //"%%" will be replaced by search value
};
```



