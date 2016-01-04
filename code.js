$(window).ready(function() {
	
	loadCharacter();
	recalculateAttributeModifiers();
	updateRacialTraitsFromRace($('#race').val());
	updateClassTraitsFromClass($('#class_and_level').val());
	populateSavedJsonField();
	$('.attribute_value').on('change keyup', function() {
		recalculateAttributeModifiers();
	});
	
	$('.holds-content').on('change keyup', function() {
		saveCharacter();
	});
	
	$('input[type="checkbox"]').on('change', function() {		
		saveCharacter();
	});
	
	$('select').on('change keyup', function() {
		setTimeout(function(){
			saveCharacter();
		}, 500);
	});
	
	$('#saved_json').on('change keyup', function() {
		loadCharacterFromSavedJsonTextarea();
	});
	
});

function updateSavedJsonField() {
	var savedCharacterJson = localStorage.getItem('character');
	if (savedCharacterJson != null) {		
		var dataArray = JSON.parse(savedCharacterJson);
		
		$.each(dataArray, function(index, value) {			
			$('#' + index).html(value);
		});
	}
}

function populateSavedJsonField() {
	var savedJson = '';
	var savedCharacterJson = localStorage.getItem('character');
	var savedCharacterJsonCheckboxData = localStorage.getItem('checkboxData');
	var savedCharacterJsonSelectData = localStorage.getItem('selectData');
	
	if (savedCharacterJson != null) {		
		savedJson += savedCharacterJson;	
	}
	
	if (savedCharacterJsonCheckboxData != null) {		
		savedJson += '%%%' + savedCharacterJsonCheckboxData;		
	}
	
	if (savedCharacterJsonSelectData != null) {		
		savedJson += '%%%' + savedCharacterJsonSelectData;		
	}
	
	$('#saved_json').val(savedJson);
}

function recalculateAttributeModifiers() {
	var strMod = Math.floor(($('#attribute__str').html() - 10) / 2);
	var dexMod = Math.floor(($('#attribute__dex').html() - 10) / 2);
	var conMod = Math.floor(($('#attribute__con').html() - 10) / 2);
	var intMod = Math.floor(($('#attribute__int').html() - 10) / 2);
	var wisMod = Math.floor(($('#attribute__wis').html() - 10) / 2);
	var chaMod = Math.floor(($('#attribute__cha').html() - 10) / 2);
	
	if (strMod > 0) {
		strMod = '+' + strMod;
	}
	if (dexMod > 0) {
		dexMod = '+' + dexMod;
	}
	if (conMod > 0) {
		conMod = '+' + conMod;
	}
	if (intMod > 0) {
		intMod = '+' + intMod;
	}
	if (wisMod > 0) {
		wisMod = '+' + wisMod;
	}
	if (chaMod > 0) {
		chaMod = '+' + chaMod;
	}
		
	$('#attribute-mod-value__str').html(strMod);
	$('#attribute-mod-value__dex').html(dexMod);
	$('#attribute-mod-value__con').html(conMod);
	$('#attribute-mod-value__int').html(intMod);
	$('#attribute-mod-value__wis').html(wisMod);
	$('#attribute-mod-value__cha').html(chaMod);
}

function saveCharacter() {
	// keep a variable for use with the saved json field
	var savedJson = '';
	// save all the ".holds-content" fields
	var characterData = {};	
	$('.holds-content').each(function() {
		var field = $(this);
		var id = field.attr('id');
		var value = field.html();
		characterData[id] = value;
	});
	var json = JSON.stringify(characterData);	
	localStorage.setItem('character', json);
	savedJson += json;
	// add all the checkbox values together
	var checkboxData = {};
	$('input[type="checkbox"]').each(function() {
		var field = $(this);
		var id = field.attr('id');
		var value = 0;
		if (field.is(':checked')) {
			value = 1;	
		}
		
		checkboxData[id] = value;
	});
	json = JSON.stringify(checkboxData);	
	localStorage.setItem('checkboxData', json);	
	savedJson += json;
	// save the selects data
	var selectData = {};
	$('select').each(function() {
		var field = $(this);
		var id = field.attr('id');
		var value = field.val()
		
		selectData[id] = value;
	});
	json = JSON.stringify(selectData);	
	localStorage.setItem('selectData', json);
	savedJson += json;
	$('#saved_json').val(savedJson);
}

function loadCharacter() {	
	var savedCharacterJson = localStorage.getItem('character');
	var savedCharacterJsonCheckboxData = localStorage.getItem('checkboxData');
	var savedCharacterJsonSelectData = localStorage.getItem('selectData');
	
	if (savedCharacterJson != null) {		
		var dataArray = JSON.parse(savedCharacterJson);
		
		$.each(dataArray, function(index, value) {			
			$('#' + index).html(value);
		});
	}
	
	if (savedCharacterJsonCheckboxData != null) {		
		var dataArray = JSON.parse(savedCharacterJsonCheckboxData);
		
		$.each(dataArray, function(index, value) {			
			if (value == 1) {
				$('#' + index).prop('checked', true);
			}
		});
	}
	
	if (savedCharacterJsonSelectData != null) {		
		var dataArray = JSON.parse(savedCharacterJsonSelectData);
		
		$.each(dataArray, function(index, value) {						
			$('#' + index).val(value);
		});
	}
}

function loadCharacterFromSavedJsonTextarea() {
	var savedJson = $('#saved_json').val();
	
	var chunks = savedJson.split('%%%');
	var savedCharacterJson = chunks[0];
	var savedCharacterJsonCheckboxData = chunks[1];
	var savedCharacterJsonSelectData = chunks[2];
	
	if (savedCharacterJson != null) {		
		var dataArray = JSON.parse(savedCharacterJson);
		
		$.each(dataArray, function(index, value) {			
			$('#' + index).html(value);
		});
	}
	
	if (savedCharacterJsonCheckboxData != null) {		
		var dataArray = JSON.parse(savedCharacterJsonCheckboxData);
		
		$.each(dataArray, function(index, value) {			
			if (value == 1) {
				$('#' + index).prop('checked', true);
			}
		});
	}
	
	if (savedCharacterJsonSelectData != null) {		
		var dataArray = JSON.parse(savedCharacterJsonSelectData);
		
		$.each(dataArray, function(index, value) {						
			$('#' + index).val(value);
		});
	}
}