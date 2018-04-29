<style>
.text-bold{
	font-weight: bold !important;
}
.hover-bg-black:hover{
	background:black !important;
	color:#fff !important;
}
.four-boot{
margin:10px 0px;
}
article section {
    border: 1px solid #ccc;
    padding: 15px;
    margin-bottom: 20px !important;
}
article h6 {
    margin-top: 80px !important;
}
article h4 + h6 {
	margin-top:40px !important;
}
article section button.fix-mt{
	margin-top: -30px !important;
}
/*conflict between theme and bootstrap 4 (fix)*/
.btn{
	font-size:1.6rem;
}
.dropdown-item{
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
}
.dropdown-header {
    font-size: 14px;
    margin: 0px !important;
}
/********************************/
#modal{
	font-size:16px !important;
	font-weight:400 !important;
	line-height:1rem !important;
}
pre{
margin:0px;
}
</style>

**FourBoot Bootstrap Select Picker (Bootstrap 4)**
==========

javascript library to convert html select into beautiful **Bootstrap 4** dropdown

### Examples:

#### <u>*Standard examples*</u>
###### <u>*(single)*</u>
<section>
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
</section>
###### <u>*(optgroup)*</u>
<section>
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
</section>
###### <u>*(multiple)*</u>
<section>
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
</section>
<hr>
#### <u>*Live search examples*</u>
###### <u>*(default)*</u>
<section>
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
</section>
###### <u>*(case sensitive)*</u>
<section>
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
</section>
###### <u>*(tokens)*</u>
try search for fruit colors: yellow, red, green, orange, brown
<section>
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
</section>
<hr>
#### <u>*Max Options examples*</u>
###### <u>*(select)*</u>
<section>
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
</section>
###### <u>*(optgroup)*</u>
<section>
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
</section>
<hr>
#### <u>*Button text examples*</u>
###### <u>*(title)*</u>
<section>
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
</section>
###### <u>*(placeholder / data-placeholder)*</u>
<section>
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
</section>
###### <u>*(selected item with title set)*</u>
<section>
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
</section>
<hr>
#### <u>*Selected button text examples*</u>
###### <u>*(mutliple separator text)*</u>
<section>
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
</section>
###### <u>*(option title attribute)*</u>
<section>
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
</section>
<hr>
#### <u>*Multiple selected button format examples*</u>
###### <u>*(static)*</u>
<section>
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
</section>
###### <u>*(values)*</u>
<section>
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
</section>
###### <u>*(count)*</u>
<section>
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
</section>
###### <u>*(count > X)*</u>
in this example ```count > 3```
<section>
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
</section>

<hr>
#### <u>*Styling examples*</u>
###### <u>*(button styling)*</u>
<small>use attribute <code>class</code> to append classes to default</small><br>
<small>use attribute <code>data-class</code> to replace default classes</small>
<section>
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
</section>
###### <u>*(dropdown styling)*</u>
<section>
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
</section>

###### <u>*(style individual options)*</u>
<section>
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
</section>
<hr>
#### <u>*Customize options examples*</u>
###### <u>*(icons)*</u>
<section>
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
</section>
###### <u>*(content)*</u>
<section>
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
</section>
###### <u>*(title)*</u>
<section>
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
</section>
<hr>
#### <u>*Customize dropoown examples*</u>
###### <u>*(height)*</u>
<section>
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
</section>
###### <u>*(actions)*</u>
<section>
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
</section>
###### <u>*(custom actions)*</u>
<section>
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
```html
	<select class="four-boot" data-actions='["select-all","select-all"]'>
		...
	</select>
	<select class="four-boot" data-actions='["select-all"]'>
		...
	</select>
	<select class="four-boot" data-actions='["deselect-all"]'>
		...
	</select>
```
</section>
###### <u>*(divider)*</u>
<section>
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
</section>
###### <u>*(menu header)*</u>
<section>
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
</section>
<hr>
#### <u>*Observer examples*</u>
<small>monitor changes to select (add/remove) options and apply changes directly to dropdown</small>
###### <u>*(enabled)*</u>
<section data-adder>
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
```html
	&lt;!-- it's enabled by default --&gt;
	<select class ="four-boot" data-observer-enabled="true">
		...
	</select>
```
<br>
</section>

###### <u>*(disabled)*</u>
<section data-adder>
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
```html
	<select class ="four-boot" data-observer-enabled="false">
		...
	</select>
```
<br>
</section>