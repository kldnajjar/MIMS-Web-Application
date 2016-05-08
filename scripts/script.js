function loadingDocument(){
	documentReady();
}

function documentReady(){
	jQuery(document).ready(function(){
		verticalNavigationComponentShowing();
		clickableTableRow();
		checkAllRelatedCheckBoxes();
		videoModal();
		dataTablesActivations();
		handleDragAndDrop();
		switcherlabelling();
		checkNotificationBox();
		matchusers();
		currentDate();
	});
}

function dataTablesActivations(){
	var obj = jQuery('.datatable-table');
	if (obj.length == 0){return;}

	jQuery.each(obj, function( key, value ) {
		var rowsNumber = jQuery(value).attr("number-of-rows");
		if (rowsNumber == undefined){
			rowsNumber = 10;
		}else if (rowsNumber == "5"){
			rowsNumber = 5;
		}else{
			rowsNumber = 10;
		}

		jQuery(value).DataTable( {
	        "dom": '<"top"f>rt<"bottom" <"datatable-pagination-info"p> <"pull-right pagination-info"i>><"clearfx">',
	        'iDisplayLength': rowsNumber
	    });
	});	

	activateDatatableFunctionality();
}

function activateDatatableFunctionality(){
	var searchObj = jQuery(".panel-datatable .datatable-search");
	jQuery.each( searchObj, function( key, value ) {
		jQuery(value).keyup(function() {
		  jQuery(jQuery(value).parents(".panel-datatable").find(".form-control.input-sm")[0]).val(jQuery(value).val()).keyup();
		});
	});	
}


function verticalNavigationComponentShowing(){
	var verticalNavigation = jQuery(".vertical-components-show");
	if (verticalNavigation.length == 0){
		return;
	}
	
	jQuery.each(jQuery(".vertical-components-show li a"),function(index, value){
		jQuery(value).click(function(){
			jQuery(".show-component").hide();
			jQuery("." + jQuery(value).attr("href").replace("#","")).show("slow");
		});
	});
}

function clickableTableRow(){
    jQuery(".clickable-row-links").click(function() {
        window.document.location = jQuery(this).data("href");
    });	
}

function checkAllRelatedCheckBoxes(){
	jQuery.each(jQuery("input[name='majorCheckbox']"),function(index, value){
		var obj = jQuery(value);
		obj.click(function(){
			var retrievedValue = ":not(:checked)";
			if (obj.prop("checked")){
				retrievedValue = ":checked";
			}			
			obj.parents("table").find("tbody input[type='checkbox']" + retrievedValue).click();	
			obj.parents("table").find("tbody input[type='checkbox']").click();				
		});
	});
}

function videoModal(){
	var obj = jQuery('.videoModal');
	if (obj.length == 0){
		return;
	}
	
	obj.on('hidden.bs.modal', function () {
		jQuery(".videoModal").find(".video-presenter").attr("src","");
	});

	obj.on('shown.bs.modal', function () {
		jQuery(".videoModal:visible").find(".video-presenter").attr("src",jQuery(".videoModal:visible").find(".video-link").text().trim());
	});
}

function handleDragAndDrop(){
	if (jQuery(".drag-elements").length == 0){
		return;
	}

	[{
		name: 'advanced',
		pull: 'clone',
		put: false
	}, {
		name: 'advanced',
		pull: false,
		put: true
	}].forEach(function (MovabaleElementsGroups, i) {
		var selector = "";
		if (i == 0){
			selector = ".drag-elements";
		}else{
			selector = ".drop-element";
		}

		var obj = jQuery(selector);
		jQuery.each( obj, function( key, value ) {
			Sortable.create(value, {
				sort: (i == 1),
				group: MovabaleElementsGroups,
				onEnd: function(evt){ console.log('onEnd.foo:', [evt.item, evt.from, jQuery(evt.item).parents(".drop-element")]);},
				animation: 150
			});
		});			
	});
}


function switcherlabelling(){
	var obj = jQuery(".checkbox-label-switcher");
	if(obj.length == 0){return;}

	jQuery.each( obj, function( key, value ) {
		var switcherLabel = "ON";
		var switcher = jQuery(value);
		bindSwitcher(switcher);
		if (!switcher.find(".js-switch").prop("checked")){switcherLabel = "OFF"}
		switcher.find(".switchery").append("<h3 class='swticher-labelling'>"+switcherLabel+"</h3>");
	});	
	
}

function bindSwitcher(obj){
	obj.find(".js-switch").change(function(){
		var label = "ON";
		if (!obj.find(".js-switch").prop("checked")){label = "OFF";}
		obj.find(".swticher-labelling").html(label);
	})
}

function checkNotificationBox(){
	var obj = jQuery(".notification-box");
	jQuery.each( obj, function( key, value ) {
		var currentObj = jQuery(value);
		if (currentObj.html().length == 0){currentObj.addClass("hidden")};
	});	
}

function matchusers(){
	var obj = jQuery(".match-user");
	if (obj.length == 0){return;}

	jQuery.each( obj, function( key, value ) {
		var currentObj = jQuery(value);
    	currentObj.click(function() {
        	var relatedContainer = currentObj.attr("class").substring(currentObj.attr("class").indexOf('match-user ') + 11,currentObj.attr("class").length);
			currentObj.parents(".row").removeClass("container-match-user-1");
			currentObj.parents(".row").removeClass("container-match-user-2");
			currentObj.parents(".row").removeClass("container-match-user-3");
			currentObj.parents(".row").removeClass("container-match-user-4");
			currentObj.parents(".row").removeClass("container-match-user-5");
        	currentObj.parents(".row").addClass("container-" + relatedContainer);
    	});				
	});
}

function currentDate(){
	var obj = jQuery(".current-time");
	if (obj.length == 0){
		return;
	}

	var dateObj = new Date();
	var dayName = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
	var hours = dateObj.getHours()
	var minutes = dateObj.getMinutes()
	var day = dateObj.getDay()
	var amPM = (hours > 11) ? " PM, " : " AM, ";
	obj.html(hours+":"+ minutes + amPM + dayName[day])
}
