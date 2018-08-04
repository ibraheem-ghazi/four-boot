/*!
 * four-boot v2.0.0 (https://github.com/IbraheemAlnabriss/four-boot)
 *
 * Copyright 2018 four-boot
 * Licensed under MIT (https://github.com/IbraheemAlnabriss/four-boot/blob/master/LICENSE)
 */
//IE 11 fix for includes 
if(navigator.userAgent.indexOf('MSIE')!==-1 || navigator.appVersion.indexOf('Trident/') > 0){
	String.prototype.includes=function(needle){
		return this.search(needle) != -1;
	}
	Array.prototype.includes=function(needle){
		return this.filter(function(value){return value===needle}).length>0
	}
}
 (function($, window, document, undefined) {

    //the default options for select
    var default_options = {
        class: "btn-outline-dark",
        dropdownClass: "",
        closeOnSelect: true,
        multipleSelectedSeparator: ', ',
        liveSearch: false,
        liveSearchCaseSensitive: false,
        maxOptions: null,
        autoSelectFirst: false,
        selectedTextFormat: 'values',//
        height: '192px',
        observerEnabled: true,
        actions: false,
        header: null,
		lang:'en',
		dict:{
			en:{
				selectAll:'Select all',
				deselectAll:'Delect all',
				nothingSelected:'Nothing selected',
				search:'search ...',
				noSearchResult:'No results matched "%%"',
			},
			ar:{
				selectAll:'تحديد الكل',
				deselectAll:'إلغاء الكل',
				nothingSelected:'لا شيء محدد',
				search:'البحث ...',
				noSearchResult:'لا يوجد ما يطابق "%%"',
			},
		}
    };
	
	var $instances = null;

    //the public method user can call
    var public_methods = {
		
		'reset':function(){
			setOptionForElement.apply(this);
			updateUi(this);
		},
		'update':function(){
			// setOptionForElement.apply(this);
			updateUi(this);
		},
		'val':function(params_bag){
			$(this).val(params_bag.param1);
			$(this).change();
			updateUi(this);
		},
		'disabled':function(params_bag){
			$(this).prop('disabled',params_bag.param1);
			updateUi(this);
		},
		'toggle':function(){
			if ($(this).siblings().hasClass('show')){
				$(this).siblings().removeClass('show').find('.dropdown-menu').removeClass('show');
			}else{
				$(this).siblings().addClass('show').find('.dropdown-menu').addClass('show');
			}
		},
		'hide':function(){
			$(this).closest('.four-boot').addClass('d-none')
		},
		'show':function(){
			$(this).closest('.four-boot').removeClass('d-none')
		},
		'destroy':function(){
			$(this).siblings().remove();
			$(this).unwrap('.four-boot');
			$(this).show();
			delete this.fourBootOptions;
		},
		'select-all':function(){
			selectAll(this);
		},
		'deselect-all':function(){
			deselectAll(this);
		},
		'set':function(params_bag){
			if(typeof params_bag.param1 === 'string' && params_bag.param1.trim().length){
				if(typeof this.fourBootOptions[params_bag.param1] !=='undefined'){
					this.fourBootOptions[params_bag.param1] = params_bag.param2;
					updateUi(this);
					return $instances;
				}
				throw Error('option ['+params_bag.param1+'] is not declared');
			}
			throw Error('no option specified to set it');
		},
		'get':function(params_bag){
			var cloned_opts = JSON.parse(JSON.stringify(this.fourBootOptions));
			if(typeof params_bag.param1 === 'string' && params_bag.param1.trim().length){
				if(typeof cloned_opts[params_bag.param1] !=='undefined'){
					return cloned_opts[params_bag.param1];
				}
				throw Error('option ['+params_bag.param1+'] is not declared');
			}
			return cloned_opts;
			
		},
		
	};

    //current instances used
    var $instances = null;

    //current instance options
    var current_options = null;
	
	//DOM Observer to monitter changes 
	var observeDOM = (function(){
		var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
			eventListenerSupported = window.addEventListener;

		return function(obj, callback){
			if( MutationObserver ){
				// define a new observer
				var obs = new MutationObserver(function(mutations, observer){
					if( mutations[0].addedNodes.length || mutations[0].removedNodes.length )
						callback(obj,mutations[0].addedNodes,mutations[0].removedNodes);
				});
				// have the observer observe foo for changes in children
				obs.observe( obj, { childList:true, subtree:true });
			}
			else if( eventListenerSupported ){
				obj.addEventListener('DOMNodeInserted', callback, false);
				obj.addEventListener('DOMNodeRemoved', callback, false);
			}
		};
	})();

    //FourBoot Handler
    function fourBoot(optionsOrMethod, paramsOrBag,param2) {
		optionsOrMethod = optionsOrMethod || null;
		paramsOrBag = paramsOrBag || null;
		param2 = paramsOrBag || null;
        current_options = $.extend({}, $.fn.fourBoot.default, typeof optionsOrMethod === "object" ? optionsOrMethod : {});
       		
		$instances = $(this);
			
		// var new_params_bag = typeof paramsOrBag ==='object' ? paramsOrBag : {};
		var new_params_bag = {};
		if(Object.prototype.toString.call( paramsOrBag ) === '[object Object]'){
			new_params_bag = paramsOrBag;
		}else{
			new_params_bag = {
				param1 : paramsOrBag,
				param2 : param2
			};
		}
		var return_value;
		$.each($(this), function(i, obj) {
			if (isInitilized(obj) && typeof optionsOrMethod !== "string") {
				throw Error("FourBoot already initialized for: \r\n\r\n" + obj.outerHTML + "\r\n");
			} else if (isInitilized(obj)) {
				if(typeof public_methods[optionsOrMethod] === 'function'){
					var passed_params_bag = JSON.parse(JSON.stringify(new_params_bag));
					return_value =  public_methods[optionsOrMethod].apply(obj, [passed_params_bag]);
					return false;
				}else{
					throw Error("FourBoot does not have public method with name [" + optionsOrMethod + "]");
				}
			} else {
				initialize.apply(obj);
			}
        });
		return return_value;

    }

    function initialize() {
		setOptionForElement.apply(this,[true]);
        //TODO: if nothing has selected attribute then do as option say select first or dont select anything
		$(this).wrap('<div class="four-boot ' + ($(this).is("[multiple]") ? 'multiple' : '') + '">');
        $(this).hide().after(getPickerTemplate(this));
		
		if(this.fourBootOptions.observerEnabled){
			observeDOM( this ,function(obj,added,removed){ 
				setOptionForElement.apply(obj);
				updateUi(obj);
			});
		}

    }
	
	function _(key){
		var current_lang = this.fourBootOptions.lang;
		return this.fourBootOptions.dict[current_lang][key];
	}
	
	function setOptionForElement(deactiveateAutoSelect){//deactiveateAutoSelect work-around fix
		deactiveateAutoSelect = deactiveateAutoSelect || false;
		this.fourBootOptions = $.extend({}, current_options, filterObjectByObject($(this).data(), default_options));
		if(!this.fourBootOptions.autoSelectFirst && deactiveateAutoSelect && !$(this).find('option[selected]').length){
			$(this).is('[multiple]')?$(this).val([]):$(this).val(null);
		}
	}
	
	function updateUi(obj){
		var withShown = $(obj).siblings().hasClass('show');
		$(obj).siblings().remove();
		$(obj).after(getPickerTemplate(obj));
		if(withShown)
			$(obj).siblings().find('.dropdown-toggle').click();
	}

    function getPickerTemplate(element) {
		var attr_disabled= $(element).prop('disabled')?'disabled':'';
        var template = '<div class="dropdown '+element.fourBootOptions.dropdownClass+' ">' +
            '<button '+attr_disabled+' class="btn dropdown-toggle ' + getButtonClasses(element) + '"  type="button" id="fourboot_' + element.name + '" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
            '' + getPlaceholder(element) +
            '</button>' +
            '<div class="dropdown-menu " aria-labelledby="fourboot_' + element.name + '">';
        template += getHeaderTemplate(element);
        template += getSearchTemplate(element);
        template += getActionsTemplate(element);
        template += '<div class="options-list" style="max-height:'+element.fourBootOptions.height+'">';
        template += getOptionsListTemplate(element);
        template += '</div>' +
            '</div>' +
            '</div>';
        return template;
    }

    function getHeaderTemplate(element) {
        if (element.fourBootOptions.header!==null) {
            return '<p class="h6 dropdown-header four-boot-header">'+element.fourBootOptions.header+'</p>';
        }
        return "";
    }
	function getSearchTemplate(element) {
        if (element.fourBootOptions.liveSearch) {
            var searchTemplate = '<div class="dropdown-item four-boot-search"><input class="form-control" placeholder="' + _.apply(element,['search']) + '" /></div>';
            searchTemplate += '<div class="dropdown-divider"></div>';

            return searchTemplate;
        }
        return "";
    }
	function getActionsTemplate(element){
		
		if(!$(element).is('[multiple]')){return '';}
		var template  =  '<div class="four-boot-actions container-fluid"><div class="row">';
		if(element.fourBootOptions.actions===true || (isArray(element.fourBootOptions.actions) && $.inArray('select-all',element.fourBootOptions.actions)>-1)){
			template +=  	'<button type="button" class="btn col" data-four-boot-action="select-all">'+_.apply(element,['selectAll'])+'</button>';
		}
		if(element.fourBootOptions.actions===true || (isArray(element.fourBootOptions.actions) && $.inArray('deselect-all',element.fourBootOptions.actions)>-1)){
			template +=  	'<button type="button" class="btn col" data-four-boot-action="deselect-all">'+_.apply(element,['deselectAll'])+'</button>';
		}
			template += '</div></div>';
		return template;
	}
	function getOptionsListTemplate(element){
		 var opt_counter = 0;
		 var template ='';
			$.each($(element).find('> optgroup, > option'), function(i, o) {
				if (o.tagName === "OPTGROUP") {
					var maxoptdata = !isNaN($(o).data('max-options')) ? 'data-max-options="' + $(o).data('max-options') + '"' : '';
					
					template += '<small  class="dropdown-header " ' + maxoptdata + ' data-four-boot-optgroup-id="' + i + '">' + o.label + '</small>';
					$.each($(o).find('> option'), function(i2, o2) {
						template += generateOptionTemplate(o2, opt_counter++, isOptionSelected(element, o2), i,$(o).prop('disabled') || $(o2).prop('disabled'));
					});
					template += '<div class="dropdown-divider"></div>';
				} else {
					
					template += generateOptionTemplate(o, opt_counter++, isOptionSelected(element, o),false,$(o).prop('disabled'));
				}
			});
		return template;
	}

    function generateOptionTemplate(o, opt_counter, selected, optgroup_id,isDisabled) {
		selected = selected || false;
		optgroup_id = optgroup_id || false;
		isDisabled = isDisabled || false;
        if ($(o).is('[data-divider]')) {
            return '<div class="dropdown-divider"></div>';
        }
		var attr_disabled= isDisabled?'disabled':'';
        var optgroup_data = optgroup_id !== false ? 'data-four-boot-optgroup="' + optgroup_id + '"' : '';
        var tokens = ($(o).data('tokens') || "").length ? 'data-four-boot-tokens="' + $(o).data('tokens') + '"' : '';
        var icon_data =  ($(o).data('icon') !== undefined && $(o).data('icon').length) ? '<i class="four-boot-option-icon '+$(o).data('icon')+'"></i>' :'';
		
		var content_data =  ($(o).data('content') !== undefined && $(o).data('content').length) ? $(o).data('content') : icon_data + o.text;
		
		return '<button '+attr_disabled+' class="dropdown-item ' + ($(o).data('class') || '') + ' ' + (selected ? 'selected' : '') + '" ' + tokens + ' ' + optgroup_data + ' data-four-boot-item="' + (opt_counter) + '" type="button">'+ content_data + '</button>';
    }

    function isOptionSelected(element, o) {
        if ($(element).is("[multiple]")) {
            return $(element).val().includes(o.value);
        }
        return $(element).val() === o.value;
    }

    function getPlaceholder(element) {
		var withFirst = element.fourBootOptions.autoSelectFirst;
		var placeholder='';
		var textFormat = element.fourBootOptions.selectedTextFormat.toLowerCase().trim();
		
		/* nested */ 
		function getByKey(key){
			
			if(key==='values'){
				  return $(element).find('option:selected').map(function() {
					return $(this).is('[title]')?this.title:$(this).text();
				}).get().join(element.fourBootOptions.multipleSelectedSeparator);
			}
			else if(key === 'count'){
				var selected = $(element).find('option:selected').length;
				var total = $(element).find('option').length;
				return selected+" of "+total+" selected";				
			}
			
		} 
		/* endNested */
		
		if(textFormat==='values' || textFormat === 'count'){
			  placeholder = getByKey(textFormat);
		}
		else if(textFormat.split('>').length === 2 && textFormat.split('>').shift().trim().toLowerCase() ==='count'){
			var cond = parseInt(textFormat.split('>').pop()) || 1;
			var selected = $(element).find('option:selected').length;
			placeholder = (selected>cond) ? getByKey('count') : getByKey('values');
		}

		if(withFirst){
			placeholder = $(element).find('option:eq(0)').text();
		}
		//case static
		if(!placeholder.trim().length || textFormat==="static"){
			placeholder = element.title || element.fourBootOptions.placeholder;
		}
		if(!placeholder || !placeholder.trim().length && !withFirst){
			placeholder = _.apply(element,['nothingSelected']);
		}
		return placeholder;
    }

    function getButtonClasses(element) {
        return (element.className || "") + " " + (element.fourBootOptions.class || "");
    }

    //not used yet
    function camelize(str) {
        return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
            return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
        }).replace(/\s+/g, '');
    }
	
	function isArray(object){
		return Object.prototype.toString.call( object );
	}

    //used to filter data options and remove options that is not in default_options
    function filterObjectByObject(target, resource) {
        var cloned = JSON.parse(JSON.stringify(target)); //clone target so the original is not affected
        for (var optidx in cloned) {
            if (!Object.keys(resource).includes(optidx)) {
                delete cloned[optidx]
            }
        }
        return cloned;
    }

	function bindDropdownEvents() {

        //reset search on hide menu
        $(document).on('hide.bs.dropdown', '.four-boot .dropdown', function() {
            var $container = $(this).closest('.four-boot');
            $container.find('.dropdown-item.four-boot-search input').val('');
            $container.find('.dropdown-item.four-boot-search small').remove();
            $container.find('.dropdown-item:not(.four-boot-search)').show();
            $container.find('.dropdown-header').show();
            $container.find('.dropdown-divider').show();
        });

        //search input
        $(document).on('input', ".four-boot .dropdown .dropdown-menu .dropdown-item.four-boot-search input", function(e) {

            var $container = $(this).closest('.four-boot');
            var $select = $container.find('select');
            var search_val = $(this).val();
            var liveSearchCaseSensitive = $select[0].fourBootOptions.liveSearchCaseSensitive;
            if (search_val.length) {
                var filtered_items = $container.find('.dropdown-item:not(.four-boot-search)').map(function(k, v) {
                    if (
                        (!liveSearchCaseSensitive && ($(v).data('four-boot-tokens') || '').toLowerCase().includes(search_val.toLowerCase())) ||
                        (!liveSearchCaseSensitive && $(v).text().toLowerCase().includes(search_val.toLowerCase())) ||
                        (liveSearchCaseSensitive && $(v).text().includes(search_val)) ||
                        (liveSearchCaseSensitive && ($(v).data('four-boot-tokens') || '').includes(search_val))
                    ) return v;
                });
                $container.find('.dropdown-item:not(.four-boot-search)').hide();
                $container.find('.dropdown-header').hide();
                $container.find('.dropdown-divider').hide();
                $.each(filtered_items, function(i, o) {

                    $(o).show();
                    if ($(o).is('[data-four-boot-optgroup]')) {
                        var $optgroup = $container.find('.dropdown-header[data-four-boot-optgroup-id=' + $(o).data('four-boot-optgroup') + ']');
                        $optgroup.show();
                        $optgroup.prev('.dropdown-divider').show();
                    }

                });
                if (!filtered_items.length) {
                    $(this).parent().find('small').remove();
                    $(this).after('<small>' + _.apply($select[0],['noSearchResult']).replace('%%', search_val) + '</small>');
                }
            } else {
                $container.find('.dropdown-item.four-boot-search small').remove();
                $container.find('.dropdown-item:not(.four-boot-search)').show();
                $container.find('.dropdown-header').show();
                $container.find('.dropdown-divider').show();
            }

        });
        //prevent close dropdown on some conditions
		$(document).on('click', ".four-boot .dropdown", function(e) {
            var $container = $(this).closest('.four-boot');
            var $select = $container.find('select');
			if(!$select.length){return;};
            if ($select.is("[multiple]") || $select[0].fourBootOptions.closeOnSelect === false) {
                e.preventDefault();
                e.stopPropagation();
            }
        });
        //on dropdown action click
        $(document).on('click', ".four-boot .dropdown .dropdown-menu .four-boot-actions button[data-four-boot-action]", function(e) {
			e.preventDefault();
			e.stopPropagation();
			
			switch($(this).data('four-boot-action')){
				
				case 'select-all':
					selectAll($(this).closest('.four-boot').find('select').get(0));
					break;
				case 'deselect-all':
					deselectAll($(this).closest('.four-boot').find('select').get(0));
					break;
				
			};
			
		});
        //on dropdown item click
        $(document).on('click', ".four-boot .dropdown .dropdown-menu .dropdown-item[data-four-boot-item]", function(e) {
            //do events before and after
            var $container = $(this).closest('.four-boot');
            var $select = $container.find('select');
            if ($select.is("[multiple]")) {

                //limit select max options
                if (!$(this).hasClass('selected') && !isNaN($select[0].fourBootOptions.maxOptions) && $select.val().length === $select[0].fourBootOptions.maxOptions) {
                    $container.find('.dropdown-item.fb-error,.dropdown-divider.fb-error').remove();
                    var $first_target = $container.find('.dropdown-header:eq(0)').length ? $container.find('.dropdown-header:eq(0)') : $container.find('.dropdown-item:not(.four-boot-search):eq(0)');
                    clearTimeout($container[0].timer);
                    $first_target.before('<small class="dropdown-item fb-error">' + 'max options reached' + '</small>');
                    $first_target.before('<div class="dropdown-divider fb-error"></div>');
                    $container[0].timer = setTimeout(function() {
                        $container.find('.dropdown-item.fb-error,.dropdown-divider.fb-error').remove();
                    }, 2000);
                    return;
                }

                //limit group selection
                var $relatedOptGroup = $container.find('[data-four-boot-optgroup-id=' + $(this).data('four-boot-optgroup') + ']');
                if (!$(this).hasClass('selected') && $(this).is('[data-four-boot-optgroup]') && !isNaN($relatedOptGroup.data('max-options')) && $('[data-four-boot-optgroup=' + $(this).data('four-boot-optgroup') + '].selected').length === $('[data-four-boot-optgroup-id=' + $(this).data('four-boot-optgroup') + ']').data('max-options')) {
                    $relatedOptGroup.next('small.fb-error').remove();
                    clearTimeout($relatedOptGroup[0].timer);
                    $relatedOptGroup.after('<small class="dropdown-item fb-error">' + 'max group options reached' + '</small>');
                    $relatedOptGroup[0].timer = setTimeout(function() {
                        $relatedOptGroup.next('small.fb-error').remove();
                    }, 2000);
                    return;
                }
                $(this).toggleClass('selected');
                var cval = [];
                $.each($(this).parent().find('.dropdown-item.selected'), function(i, o) {
                    var $selectedOpt = $select.find('option:eq(' + $(o).data('four-boot-item') + ')');
                    cval.push($selectedOpt.val());
                });
                $select.val(cval);
				
                $container.find('.dropdown-toggle').text(getPlaceholder($select[0]));
            } else {
                var $selectedOpt = $select.find('option:eq(' + $(this).data('four-boot-item') + ')');
                $select.val($selectedOpt.attr('value'));
				
                $container.find('.dropdown-toggle').text(getPlaceholder($select[0]));
                $(this).addClass('selected').siblings().removeClass('selected');
            }
			$($select).change();

        });
    }

    function isInitilized(element) {
        return typeof element.fourBootOptions === "object";
    }
	
	function selectAll(element){
		if($(element).is('[multiple]')) {
			$(element).find('option').prop('selected', true);
			$(element).change();
			updateUi(element);
		}
		
	}
	
	function deselectAll(element){
		if($(element).is('[multiple]')) {
			$(element).find('option').prop('selected', false);
			$(element).change();
			updateUi(element);
		}
	}

   


    $.fn.fourBoot = fourBoot;
    $.fn.fourBoot.default = default_options;
    bindDropdownEvents();

}(jQuery, window, document, undefined));