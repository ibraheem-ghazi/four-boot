**FourBoot Bootstrap Select Picker (Bootstrap 4)**
==========

javascript library to convert html select into beautiful **Bootstrap 4** dropdown


**Documentation**
=================
https://IbraheemAlnabriss.github.io/four-boot/


### Dependencies:

* JQuery 1.8+
* Bootstrap 4.0+ (preferred 4.1)

### CDNJS:
The folks at CDNJS host a copy of the library. The CDN is updated after the release is made public, which means there is a delay between the publishing of a release and its availability on the CDN, so keep that in mind. Just use these links:

```
Not Supported Yet :(
```

### Install with Bower:
```
Not Supported Yet :(
```

### Install with npm:
```
Not Supported Yet :(
```

### Install with NuGet:
```
Not Supported Yet :(
```

### Usage:
Create your ```<select>``` with the ```.four-boot-select``` class. The data-api will automatically theme these elements.

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
