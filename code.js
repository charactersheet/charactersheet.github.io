$(window).ready(function() {
	
	loadCharacter();
	recalculateAttributeModifiers();
	
	$('.attribute_value').on('change keyup', function() {
		recalculateAttributeModifiers();
	});
	
	$('.holds-content').on('change keyup', function() {
		saveCharacter();
	});
});

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
	
	console.log(strMod);
	
	$('#attribute-mod-value__str').html(strMod);
	$('#attribute-mod-value__dex').html(dexMod);
	$('#attribute-mod-value__con').html(conMod);
	$('#attribute-mod-value__int').html(intMod);
	$('#attribute-mod-value__wis').html(wisMod);
	$('#attribute-mod-value__cha').html(chaMod);
}

function saveCharacter() {	
	
	var characterData = {};
	
	$('.holds-content').each(function() {
		var field = $(this);
		var id = field.attr('id');
		var value = field.html();
		
		characterData[id] = value;
		
	});
	
	var json = JSON.stringify(characterData);
	
	localStorage.setItem('character', json);
}

function loadCharacter() {	
	var savedCharacterJson = localStorage.getItem('character');
	
	if (savedCharacterJson != null) {		
		var dataArray = JSON.parse(savedCharacterJson);
		
		$.each(dataArray, function(index, value) {
			console.log(index);
			$('#' + index).html(value);
		});
	}
}