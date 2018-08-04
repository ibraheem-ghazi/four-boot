**FourBoot Bootstrap Select Picker (Bootstrap 4)**
==========

javascript library to convert html select into beautiful **Bootstrap 4** dropdown

### Changelog
v2.0.0 (2018/08/04)
* fixed issue (deselect-all dont work)[https://github.com/IbraheemAlnabriss/four-boot/issues/1]
* fixed issue (added translation feature)[https://github.com/IbraheemAlnabriss/four-boot/issues/2]
* fixed issue (width size is over)[https://github.com/IbraheemAlnabriss/four-boot/issues/5]
* fixed issue (Error on IE 11)[https://github.com/IbraheemAlnabriss/four-boot/issues/6]

### Documentation
```
https://IbraheemAlnabriss.github.io/four-boot/
```

### Dependencies:

* JQuery 1.8+
* Bootstrap 4.0+ (preferred 4.1)

### CDNJS:
The folks at CDNJS host a copy of the library. The CDN is updated after the release is made public, which means there is a delay between the publishing of a release and its availability on the CDN, so keep that in mind. Just use these links:

```
Not Supported Yet :(
```

### JSdeliver:

```
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/four-boot@1.0.0/dist/JQuery.four-boot.css">
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/four-boot@1.0.0/dist/JQuery.four-boot.min.css">

<script src="https://cdn.jsdelivr.net/npm/four-boot@1.0.0/dist/JQuery.four-boot.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/four-boot@1.0.0/dist/JQuery.four-boot.js"></script>
```

### Unpkg:

```
<link rel="stylesheet" type="text/css" href="https://unpkg.com/four-boot@1.0.0/dist/JQuery.four-boot.css">
<link rel="stylesheet" type="text/css" href="https://unpkg.com/four-boot@1.0.0/dist/JQuery.four-boot.min.css">

<script src="https://unpkg.com/four-boot@1.0.0/dist/JQuery.four-boot.min.js"></script>
<script src="https://unpkg.com/four-boot@1.0.0/dist/JQuery.four-boot.js"></script>
```

### Install with Bower:
```
Not Supported Yet :(
```

### Install with npm:
```
npm install four-boot
```


### Usage:
Create your ```<select>``` then apply four-boot using js code.

```html
<select class="four-boot-select" >
	<option selected value="apple">apple</option>
	<option value="banana">banana</option>
	<option value="watermelon">watermelon</option>
	<option value="blueberries">blueberries</option>
	<option value="apricots">apricots</option>
	<option value="cantaloupe">cantaloupe</option>
</select>
```
Options can be passed via data attributes or JavaScript.

```
$('select').fourBoot();
//OR
$('select').fourBoot({
	class:"btn-danger",
	height:"192px",
	liveSearch:true
});

```
