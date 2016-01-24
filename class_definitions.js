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

var barbarianClassTraits = '';
barbarianClassTraits += '<strong>Hit Dice:</strong> 1d12 per barbarian level<br />';
barbarianClassTraits += '<strong>Hit Points at 1st Level:</strong> 12 + your Constitution modifier<br />';
barbarianClassTraits += '<strong>Hit Points at Higher Levels:</strong> 1d12 (or 7) + your Constitution modifier per barbarian level after 1st<br />';

barbarianClassTraits += "In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action.<br />"
barbarianClassTraits += "While raging, you gain the following benefits if you aren’t wearing heavy armor:<br />"
barbarianClassTraits += " - You have advantage on Strength checks and Strength saving throws.<br />"
barbarianClassTraits += " - When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases as you gain levels as a barbarian, as shown in the Rage Damage column of the Barbarian table.<br />"
barbarianClassTraits += " - You have resistance to bludgeoning, piercing, and slashing damage.<br />"
barbarianClassTraits += "If you are able to cast spells, you can’t cast them or concentrate on them while raging.<br />"
barbarianClassTraits += "Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven’t attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action.<br />"
barbarianClassTraits += "Once you have raged the number of times shown for your barbarian level in the Rages column of the Barbarian table, you must finish a long rest before you can rage again.<br />"

var clericClassTraits = 'this is the cleric stuff<br>what a time';
