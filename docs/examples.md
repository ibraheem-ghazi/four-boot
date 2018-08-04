**FourBoot Bootstrap Select Picker (Bootstrap 4)**
==========

javascript library to convert html select into beautiful **Bootstrap 4** dropdown

### Examples:

#### <u>*Standard examples*</u>
###### <u>*(single)*</u>
<select class ="four-boot" name="fourboot_select">
	<option value="1">Banana</option>
	<option value="2">Apple</option>
	<option value="3">Watermelon</option>
	<option value="4">Carrot</option>
	<option value="5">Pinapple</option>
</select>
```html
<select class ="four-boot" name="fourboot_select">
	<option value="1">Banana</option>
	<option value="2">Apple</option>
	<option value="3">Watermelon</option>
	<option value="4">Carrot</option>
	<option value="5">Pinapple</option>
</select>
```

###### <u>*(optgroup)*</u>
<select class ="four-boot" name="fourboot_select">
	<optgroup label='Fruits'>
		<option value="1">Banana</option>
		<option value="2">Apple</option>
		<option value="3">Watermelon</option>
		<option value="4">Carrot</option>
		<option value="5">Pinapple</option>
	</optgroup>
	<optgroup label='Drinks'>
		<option value="6">Coffee</option>
		<option value="7">Tea</option>
	</optgroup>
</select>
```html
<select class ="four-boot" name="fourboot_select">
	<optgroup label='Fruits'>
		<option value="1">Banana</option>
		<option value="2">Apple</option>
		<option value="3">Watermelon</option>
		<option value="4">Carrot</option>
		<option value="5">Pinapple</option>
	</optgroup>
	<optgroup label='Drinks'>
		<option value="6">Coffee</option>
		<option value="7">Tea</option>
	</optgroup>
</select>
```

###### <u>*(multiple)*</u>
<select class ="four-boot" multiple name="fourboot_select">
	<optgroup label='Fruits'>
		<option value="1">Banana</option>
		<option value="2">Apple</option>
		<option value="3">Watermelon</option>
		<option value="4">Carrot</option>
		<option value="5">Pinapple</option>
	</optgroup>
	<optgroup label='Drinks'>
		<option value="6">Coffee</option>
		<option value="7">Tea</option>
	</optgroup>
</select>
```html
<select class ="four-boot" multiple name="fourboot_select">
	<optgroup label='Fruits'>
		<option value="1">Banana</option>
		<option value="2">Apple</option>
		<option value="3">Watermelon</option>
		<option value="4">Carrot</option>
		<option value="5">Pinapple</option>
	</optgroup>
	<optgroup label='Drinks'>
		<option value="6">Coffee</option>
		<option value="7">Tea</option>
	</optgroup>
</select>
```

<hr>
#### <u>*Live search examples*</u>
###### <u>*(default)*</u>
<select class ="four-boot" multiple data-live-search="true" name="fourboot_select">
	<optgroup label='Fruits'>
		<option value="1">Banana</option>
		<option value="2">Apple</option>
		<option value="3">Watermelon</option>
		<option value="4">Carrot</option>
		<option value="5">Pinapple</option>
	</optgroup>
	<optgroup label='Drinks'>
		<option value="6">Coffee</option>
		<option value="7">Tea</option>
	</optgroup>
</select>
```html
<select class ="four-boot" multiple data-live-search="true" name="fourboot_select">
	<optgroup label='Fruits'>
		<option value="1">Banana</option>
		<option value="2">Apple</option>
		<option value="3">Watermelon</option>
		<option value="4">Carrot</option>
		<option value="5">Pinapple</option>
	</optgroup>
	<optgroup label='Drinks'>
		<option value="6">Coffee</option>
		<option value="7">Tea</option>
	</optgroup>
</select>
```

###### <u>*(case sensitive)*</u>
<select class ="four-boot" multiple data-live-search="true" data-live-search-case-sensitive="true" name="fourboot_select">
	<optgroup label='Fruits'>
		<option value="1">Banana</option>
		<option value="2">Apple</option>
		<option value="3">Watermelon</option>
		<option value="4">Carrot</option>
		<option value="5">Pinapple</option>
	</optgroup>
	<optgroup label='Drinks'>
		<option value="6">Coffee</option>
		<option value="7">Tea</option>
	</optgroup>
</select>
```html
<select class ="four-boot" multiple data-live-search="true" data-live-search-case-sensitive="true" name="fourboot_select">
	<optgroup label='Fruits'>
		<option value="1">Banana</option>
		<option value="2">Apple</option>
		<option value="3">Watermelon</option>
		<option value="4">Carrot</option>
		<option value="5">Pinapple</option>
	</optgroup>
	<optgroup label='Drinks'>
		<option value="6">Coffee</option>
		<option value="7">Tea</option>
	</optgroup>
</select>
```

###### <u>*(tokens)*</u>
try search for fruit colors: yellow, red, green, orange, brown
<select class ="four-boot" multiple data-live-search="true" data-live-search-case-sensitive="true" name="fourboot_select">
	<option value="1" data-tokens="yellow">Banana</option>
	<option value="2" data-tokens="red, green">Apple</option>
	<option value="3" data-tokens="green">Watermelon</option>
	<option value="4" data-tokens="orange">Carrot</option>
	<option value="5" data-tokens="brown, yellow, green">Pinapple</option>
</select>
```html
<select class ="four-boot" multiple data-live-search="true" data-live-search-case-sensitive="true" name="fourboot_select">
		<option value="1" data-tokens="yellow">Banana</option>
		<option value="2" data-tokens="red, green">Apple</option>
		<option value="3" data-tokens="green">Watermelon</option>
		<option value="4" data-tokens="orange">Carrot</option>
		<option value="5" data-tokens="brown, yellow, green">Pinapple</option>
</select>
```

<hr>
#### <u>*Max Options examples*</u>
###### <u>*(select)*</u>
<select class ="four-boot" multiple data-max-options="2" name="fourboot_select">
		<option value="1" data-tokens="yellow">Banana</option>
		<option value="2" data-tokens="red, green">Apple</option>
		<option value="3" data-tokens="green">Watermelon</option>
		<option value="4" data-tokens="orange">Carrot</option>
		<option value="5" data-tokens="brown, yellow, green">Pinapple</option>
</select>
```html
<select class ="four-boot" multiple data-max-options="2" name="fourboot_select">
		<option value="1" data-tokens="yellow">Banana</option>
		<option value="2" data-tokens="red, green">Apple</option>
		<option value="3" data-tokens="green">Watermelon</option>
		<option value="4" data-tokens="orange">Carrot</option>
		<option value="5" data-tokens="brown, yellow, green">Pinapple</option>
</select>
```

###### <u>*(optgroup)*</u>
<select class ="four-boot" multiple name="fourboot_select">
	<optgroup label='Fruits' data-max-options="3" >
		<option value="1">Banana</option>
		<option value="2">Apple</option>
		<option value="3">Watermelon</option>
		<option value="4">Carrot</option>
		<option value="5">Pinapple</option>
	</optgroup>
	<optgroup label='Drinks' data-max-options="1">
		<option value="6">Coffee</option>
		<option value="7">Tea</option>
	</optgroup>
</select>
```html
<select class ="four-boot" multiple name="fourboot_select">
	<optgroup label='Fruits' data-max-options="3" >
		<option value="1">Banana</option>
		<option value="2">Apple</option>
		<option value="3">Watermelon</option>
		<option value="4">Carrot</option>
		<option value="5">Pinapple</option>
	</optgroup>
	<optgroup label='Drinks' data-max-options="1">
		<option value="6">Coffee</option>
		<option value="7">Tea</option>
	</optgroup>
</select>
```

<hr>
#### <u>*Button text examples*</u>
###### <u>*(title)*</u>
<select class="four-boot" multiple title="this from title" name="fourboot_select">
		<option value="1">Banana</option>
		<option value="2">Apple</option>
		<option value="3">Watermelon</option>
		<option value="4">Carrot</option>
		<option value="5">Pinapple</option>
</select>
```html
<select class="four-boot" multiple title="this from title" name="fourboot_select">
		<option value="1">Banana</option>
		<option value="2">Apple</option>
		<option value="3">Watermelon</option>
		<option value="4">Carrot</option>
		<option value="5">Pinapple</option>
</select>
```

###### <u>*(placeholder / data-placeholder)*</u>
<select class="four-boot" multiple title="this from data-placeholder" name="fourboot_select">
	<option value="1">Banana</option>
	<option value="2">Apple</option>
	<option value="3">Watermelon</option>
	<option value="4">Carrot</option>
	<option value="5">Pinapple</option>
</select>
```html
<select class="four-boot" multiple title="this from data-placeholder" name="fourboot_select">
	<option value="1">Banana</option>
	<option value="2">Apple</option>
	<option value="3">Watermelon</option>
	<option value="4">Carrot</option>
	<option value="5">Pinapple</option>
</select>
```

###### <u>*(selected item with title set)*</u>
<select class="four-boot" multiple title="select option from list" name="fourboot_select">
	<option value="1" selected>Banana</option>
	<option value="2" selected>Apple</option>
	<option value="3">Watermelon</option>
	<option value="4">Carrot</option>
	<option value="5">Pinapple</option>
</select>
```html
<select class="four-boot" multiple title="select option from list" name="fourboot_select">
	<option value="1" selected>Banana</option>
	<option value="2" selected>Apple</option>
	<option value="3">Watermelon</option>
	<option value="4">Carrot</option>
	<option value="5">Pinapple</option>
</select>
```

<hr>
#### <u>*Selected button text examples*</u>
###### <u>*(mutliple separator text)*</u>
<select class="four-boot" multiple data-multiple-selected-separator=" | " name="fourboot_select">
	<option value="1">Banana</option>
	<option value="2">Apple</option>
	<option value="3">Watermelon</option>
	<option value="4">Carrot</option>
	<option value="5">Pinapple</option>
</select>
```html
<select class="four-boot" multiple data-multiple-selected-separator=" | " name="fourboot_select">
	...
</select>
```

###### <u>*(option title attribute)*</u>
<select class="four-boot" multiple data-multiple-selected-separator=" | " name="fourboot_select">
	<option title="Banana is yellow" value="1">Banana</option>
	<option title="Apple is red" value="2">Apple</option>
	<option title="Watermelon is green" value="3">Watermelon</option>
	<option title="Carrot is orange" value="4">Carrot</option>
	<option title="Pinapple is brown" value="5">Pinapple</option>
</select>
```html
<select class="four-boot" multiple data-multiple-selected-separator=" | " name="fourboot_select">
	<option title="Banana is yellow" value="1">Banana</option>
	<option title="Apple is red" value="2">Apple</option>
	<option title="Watermelon is green" value="3">Watermelon</option>
	<option title="Carrot is orange" value="4">Carrot</option>
	<option title="Pinapple is brown" value="5">Pinapple</option>
</select>
```

<hr>
#### <u>*Multiple selected button format examples*</u>
###### <u>*(static)*</u>
<select class="four-boot" multiple data-selected-text-format="static" title="static title/placeholder" name="fourboot_select">
	<option value="1">Banana</option>
	<option value="2">Apple</option>
	<option value="3">Watermelon</option>
	<option value="4">Carrot</option>
	<option value="5">Pinapple</option>
</select>
```html
	<select class="four-boot" multiple data-selected-text-format="static" title="static title/placeholder" name="fourboot_select">
		...
	</select>
```

###### <u>*(values)*</u>
<select class="four-boot" multiple data-selected-text-format="values" name="fourboot_select">
	<option value="1">Banana</option>
	<option value="2">Apple</option>
	<option value="3">Watermelon</option>
	<option value="4">Carrot</option>
	<option value="5">Pinapple</option>
</select>
```html
<select class="four-boot" multiple data-selected-text-format="values" name="fourboot_select">
	...
</select>
```

###### <u>*(count)*</u>
<select class="four-boot" multiple data-selected-text-format="count" name="fourboot_select">
	<option value="1">Banana</option>
	<option value="2">Apple</option>
	<option value="3">Watermelon</option>
	<option value="4">Carrot</option>
	<option value="5">Pinapple</option>
</select>
```html
<select class="four-boot" multiple data-selected-text-format="count" name="fourboot_select">
	...
</select>
```

###### <u>*(count > X)*</u>
in this example ```count > 3```
<select class="four-boot" multiple data-selected-text-format="count &gt; 3" name="fourboot_select">
	<option value="1">Banana</option>
	<option value="2">Apple</option>
	<option value="3">Watermelon</option>
	<option value="4">Carrot</option>
	<option value="5">Pinapple</option>
</select>
```html
	<select class="four-boot" multiple data-selected-text-format="count &gt; 3" name="fourboot_select">
		...
	</select>
	<select class="four-boot" multiple data-selected-text-format="count > 3" name="fourboot_select">
		...
	</select>
```

<hr>
#### <u>*Styling examples*</u>
###### <u>*(button styling)*</u>
<small>use attribute <code>class</code> to append classes to default</small><br>
<small>use attribute <code>data-class</code> to replace default classes</small>
<select class ="four-boot" data-class="btn-primary" name="fourboot_select">
	<option value="1">Banana</option>
	<option value="2">Apple</option>
	<option value="3">Watermelon</option>
	<option value="4">Carrot</option>
	<option value="5">Pinapple</option>
</select>
<select class ="four-boot" data-class="btn-info" name="fourboot_select">
	<option value="1">Banana</option>
	<option value="2">Apple</option>
	<option value="3">Watermelon</option>
	<option value="4">Carrot</option>
	<option value="5">Pinapple</option>
</select>
<select class ="four-boot" data-class="btn-warning" name="fourboot_select">
	<option value="1">Banana</option>
	<option value="2">Apple</option>
	<option value="3">Watermelon</option>
	<option value="4">Carrot</option>
	<option value="5">Pinapple</option>
</select>
<select class ="four-boot" data-class="btn-danger" name="fourboot_select">
	<option value="1">Banana</option>
	<option value="2">Apple</option>
	<option value="3">Watermelon</option>
	<option value="4">Carrot</option>
	<option value="5">Pinapple</option>
</select>
<select class ="four-boot" data-class="btn-outline-danger" name="fourboot_select">
	<option value="1">Banana</option>
	<option value="2">Apple</option>
	<option value="3">Watermelon</option>
	<option value="4">Carrot</option>
	<option value="5">Pinapple</option>
</select>
```html
<select class ="four-boot" data-class="btn-primary" name="fourboot_select">
	...
</select>
<select class ="four-boot" data-class="btn-info" name="fourboot_select">
	...
</select>
<select class ="four-boot" data-class="btn-warning" name="fourboot_select">
	...
</select>
<select class ="four-boot" data-class="btn-danger" name="fourboot_select">
	...
</select>
<select class ="four-boot" data-class="btn-outline-danger" name="fourboot_select">
	...
</select>
```

###### <u>*(dropdown styling)*</u>
<select class ="four-boot" data-dropdown-class="dropleft" name="fourboot_select">
	<option value="1">Banana</option>
	<option value="2">Apple</option>
	<option value="3">Watermelon</option>
	<option value="4">Carrot</option>
	<option value="5">Pinapple</option>
</select>
<select class ="four-boot" data-dropdown-class="dropright" name="fourboot_select">
	<option value="1">Banana</option>
	<option value="2">Apple</option>
	<option value="3">Watermelon</option>
	<option value="4">Carrot</option>
	<option value="5">Pinapple</option>
</select>
```html
<select class ="four-boot" data-dropdown-class="dropleft" name="fourboot_select">
	...
</select>
<select class ="four-boot" data-dropdown-class="dropright" name="fourboot_select">
	...
</select>
```

###### <u>*(style individual options)*</u>
<select class ="four-boot" data-dropdown-class="dropright" name="fourboot_select">
	<option data-class="text-primary hover-bg-black" value="1">Banana</option>
	<option data-class="text-info hover-bg-black" value="2">Apple</option>
	<option data-class="text-warning hover-bg-black" value="3">Watermelon</option>
	<option data-class="text-danger hover-bg-black" value="4">Carrot</option>
	<option data-class="text-bold hover-bg-black" value="5">Pinapple</option>
</select>
```html
<select class ="four-boot" data-dropdown-class="dropright" name="fourboot_select">
	<option data-class="text-primary hover-bg-black" value="1">Banana</option>
	<option data-class="text-info hover-bg-black" value="2">Apple</option>
	<option data-class="text-warning hover-bg-black" value="3">Watermelon</option>
	<option data-class="text-danger hover-bg-black" value="4">Carrot</option>
	<option data-class="text-bold hover-bg-black" value="5">Pinapple</option>
</select>
```

<hr>
#### <u>*Customize options examples*</u>
###### <u>*(icons)*</u>
<select class="four-boot">
	<option data-icon="fa fa-twitter" value="twitter">Twitter</option>
	<option data-icon="fa fa-facebook" value="facebook">Facebook</option>
	<option data-icon="fa fa-youtube" value="youtube">Youtube</option>
	<option data-icon="fa fa-instagram" value="instagram">Instagram</option>
	<option data-icon="fa fa-telegram" value="telegram">Telegram</option>
</select>
```html
<select class="four-boot">
	<option data-icon="fa fa-twitter" value="twitter">Twitter</option>
	<option data-icon="fa fa-facebook" value="facebook">Facebook</option>
	<option data-icon="fa fa-youtube" value="youtube">Youtube</option>
	<option data-icon="fa fa-instagram" value="instagram">Instagram</option>
	<option data-icon="fa fa-telegram" value="telegram">Telegram</option>
</select>
```

###### <u>*(content)*</u>
<select class="four-boot">
	<option data-content="<span class='text-danger'><i class='fa fa-fw fa-google-plus text-primary '></i>&nbsp;Google Plus</span>" value="1">Google Plus</option>
	<option data-content="<span class='text-primary'><i class='fa fa-fw fa-twitter text-primary '></i>&nbsp;Twitter</span>" value="2">Twitter</option>
</select>
```html
<select class="four-boot">
	<option data-content="<span class='text-danger'><i class='fa fa-fw fa-google-plus text-primary '></i>&nbsp;Google Plus</span>" value="1">Google Plus</option>
	<option data-content="<span class='text-primary'><i class='fa fa-fw fa-twitter text-primary '></i>&nbsp;Twitter</span>" value="2">Twitter</option>
</select>
```

###### <u>*(title)*</u>
<select class="four-boot">
	<option title="public social media" value="twitter">facebook</option>
	<option title="business social media" value="facebook">Facebook</option>
	<option title="videos social media" value="youtube">Youtube</option>
	<option title="photos social media" value="instagram">Instagram</option>
</select>
```html
<select class="four-boot">
	<option title="public social media" value="twitter">facebook</option>
	<option title="business social media" value="facebook">Facebook</option>
	<option title="videos social media" value="youtube">Youtube</option>
	<option title="photos social media" value="instagram">Instagram</option>
</select>
```

<hr>
#### <u>*Customize dropoown examples*</u>
###### <u>*(height)*</u>
<select class ="four-boot" multiple data-height="150px" name="fourboot_select">
	<optgroup label='Fruits'>
		<option value="1">Banana</option>
		<option value="2">Apple</option>
		<option value="3">Watermelon</option>
		<option value="4">Carrot</option>
		<option value="5">Pinapple</option>
	</optgroup>
	<optgroup label='Drinks'>
		<option value="6">Coffee</option>
		<option value="7">Tea</option>
	</optgroup>
</select>
<select class ="four-boot" multiple data-height="220px" name="fourboot_select">
	<optgroup label='Fruits'>
		<option value="1">Banana</option>
		<option value="2">Apple</option>
		<option value="3">Watermelon</option>
		<option value="4">Carrot</option>
		<option value="5">Pinapple</option>
	</optgroup>
	<optgroup label='Drinks'>
		<option value="6">Coffee</option>
		<option value="7">Tea</option>
	</optgroup>
</select>
```html
<select class ="four-boot" data-height="150px" name="fourboot_select">
	...
</select>
<select class ="four-boot" data-height="220px" name="fourboot_select">
	...
</select>
```

###### <u>*(actions)*</u>
<select class ="four-boot" multiple data-actions="true" name="fourboot_select">
	<optgroup label='Fruits'>
		<option value="1">Banana</option>
		<option value="2">Apple</option>
		<option value="3">Watermelon</option>
		<option value="4">Carrot</option>
		<option value="5">Pinapple</option>
	</optgroup>
	<optgroup label='Drinks'>
		<option value="6">Coffee</option>
		<option value="7">Tea</option>
	</optgroup>
</select>
```html
<select class ="four-boot" multiple data-actions="true" name="fourboot_select">
	...
</select>
```

###### <u>*(custom actions)*</u>
<select class="four-boot" multiple data-actions='["select-all","deselect-all"]' name="fourboot_select">
	<optgroup label='Fruits'>
		<option value="1">Banana</option>
		<option value="2">Apple</option>
		<option value="3">Watermelon</option>
		<option value="4">Carrot</option>
		<option value="5">Pinapple</option>
	</optgroup>
	<optgroup label='Drinks'>
		<option value="6">Coffee</option>
		<option value="7">Tea</option>
	</optgroup>
</select>
<select class="four-boot" multiple data-actions='["select-all"]' name="fourboot_select">
	<optgroup label='Fruits'>
		<option value="1">Banana</option>
		<option value="2">Apple</option>
		<option value="3">Watermelon</option>
		<option value="4">Carrot</option>
		<option value="5">Pinapple</option>
	</optgroup>
	<optgroup label='Drinks'>
		<option value="6">Coffee</option>
		<option value="7">Tea</option>
	</optgroup>
</select>
<select class="four-boot" multiple data-actions='["deselect-all"]' name="fourboot_select">
	<optgroup label='Fruits'>
		<option value="1">Banana</option>
		<option value="2">Apple</option>
		<option value="3">Watermelon</option>
		<option value="4">Carrot</option>
		<option value="5">Pinapple</option>
	</optgroup>
	<optgroup label='Drinks'>
		<option value="6">Coffee</option>
		<option value="7">Tea</option>
	</optgroup>
</select>
```html
<select class="four-boot" data-actions='["select-all","deselect-all"]'>
	...
</select>
<select class="four-boot" data-actions='["select-all"]'>
	...
</select>
<select class="four-boot" data-actions='["deselect-all"]'>
	...
</select>
```

###### <u>*(divider)*</u>
<select class="four-boot"  name="fourboot_select">
	<option value="1">Banana</option>
	<option value="2">Apple</option>
	<option value="3">Watermelon</option>
	<option value="5">Pinapple</option>
	<option data-divider></option>
	<option value="4">Carrot</option>
	<option data-divider></option>
	<option value="6">Coffee</option>
	<option value="7">Tea</option>
</select>
```html
<select class="four-boot"  name="fourboot_select">
	...
	<option data-divider></option>
	...
	<option data-divider></option>
	...
</select>
```

###### <u>*(menu header)*</u>
<select class="four-boot" data-header="choose what you would like to eat/drink" name="fourboot_select">
	<option value="1">Banana</option>
	<option value="2">Apple</option>
	<option value="3">Watermelon</option>
	<option value="5">Pinapple</option>
</select>
```html
<select class="four-boot" data-header="choose what you would like to eat/drink">
	<option value="1">Banana</option>
	<option value="2">Apple</option>
	<option value="3">Watermelon</option>
	<option value="5">Pinapple</option>
</select>
```

<hr>
#### <u>*Observer examples*</u>
<small>monitor changes to select (add/remove) options and apply changes directly to dropdown</small>
###### <u>*(enabled)*</u>
<div class="with-link">
<select class ="four-boot"  data-observer-enabled="true" name="fourboot_select">
	<optgroup label='Fruits'>
		<option value="1">Banana</option>
		<option value="2">Apple</option>
		<option value="3">Watermelon</option>
		<option value="4">Carrot</option>
		<option value="5">Pinapple</option>
	</optgroup>
	<optgroup label='Drinks'>
		<option value="6">Coffee</option>
		<option value="7">Tea</option>
	</optgroup>
</select>
<button type="button" class="btn btn-link" data-adder-opt>add option</button>
</div>
```html
	&lt;!-- it's enabled by default --&gt;
	<select class ="four-boot" data-observer-enabled="true">
		...
	</select>
```
<br>

###### <u>*(disabled)*</u>
<div class="with-link">
<select class ="four-boot" data-observer-enabled="false" name="fourboot_select">
	<optgroup label='Fruits'>
		<option value="1">Banana</option>
		<option value="2">Apple</option>
		<option value="3">Watermelon</option>
		<option value="4">Carrot</option>
		<option value="5">Pinapple</option>
	</optgroup>
	<optgroup label='Drinks'>
		<option value="6">Coffee</option>
		<option value="7">Tea</option>
	</optgroup>
</select>
<button type="button" class="btn btn-link" data-adder-opt>add option</button>
</div>
```html
<select class ="four-boot" data-observer-enabled="false">
	...
</select>
```

<hr>
#### <u>*Languages examples*</u>
<small>change language of dropdown</small>
###### <u>*Arabic*</u>
<select class ="four-boot" data-lang="ar" name="fourboot_select">
	<optgroup label='Fruits'>
		<option value="1">Banana</option>
		<option value="2">Apple</option>
		<option value="3">Watermelon</option>
		<option value="4">Carrot</option>
		<option value="5">Pinapple</option>
	</optgroup>
	<optgroup label='Drinks'>
		<option value="6">Coffee</option>
		<option value="7">Tea</option>
	</optgroup>
</select>
```html
<select class ="four-boot" data-lang="ar" name="fourboot_select">
	...
</select>
```

###### <u>*How to define new language*</u>


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



