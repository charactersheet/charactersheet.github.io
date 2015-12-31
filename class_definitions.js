$(window).ready(function() {	
	$('#class_and_level').on('change', function() {
		var chosenClass = $('#class_and_level').val();
		
		updateClassTraitsFromClass(chosenClass);
		
	});
});

function updateClassTraitsFromClass(chosenClass) {
	switch (chosenClass) {
		case 'Cleric' :
			$('#class_features').html(clericClassTraits);
			break;
		case 'Barbarian' :
			$('#class_features').html(barbarianClassTraits);
			break;
	}
}

var clericClassTraits = 'this is the cleric stuff<br>what a time';
var barbarianClassTraits = 'barbarian stuff lol';