$(window).ready(function() {	
		$('#class_and_level').on('change', function() {
		var chosenClass = $('#class_and_level').val();
		
		updateClassTraitsFromClass(chosenClass);
		
	});
});

function updateClassTraitsFromClass(chosenClass) {
	switch (chosenClass) {
		case 'Barbarian' :
			$('#class_features').html(barbarianClassTraits);
			break;
		case 'Bard' :
			$('#class_features').html(bardClassTraits);
			break;
		case 'Cleric' :
			$('#class_features').html(clericClassTraits);
			break;
		case 'Druid' :
			$('#class_features').html(druidClassTraits);
			break;
		case 'Fighter' :
			$('#class_features').html(fighterClassTraits);
			break;
		case 'Monk' :
			$('#class_features').html(monkClassTraits);
			break;
		case 'Paladin' :
			$('#class_features').html(paladinClassTraits);
			break;
		case 'Ranger' :
			$('#class_features').html(rangerClassTraits);
			break;
		case 'Rogue' :
			$('#class_features').html(rogueClassTraits);
			break;
		case 'Sorcerer' :
			$('#class_features').html(sorcererClassTraits);
			break;
		case 'Warlock' :
			$('#class_features').html(warlockClassTraits);
			break;
		case 'Wizard' :
			$('#class_features').html(wizardClassTraits);
			break;
	}
}

var barbarianClassTraits = '';
barbarianClassTraits += '<strong>Hit Dice:</strong> 1d12 per barbarian level<br />';
barbarianClassTraits += '<strong>Hit Points at 1st Level:</strong> 12 + your Constitution modifier<br />';
barbarianClassTraits += '<strong>Hit Points at Higher Levels:</strong> 1d12 (or 7) + your Constitution modifier per barbarian level after 1st<br />';
barbarianClassTraits += "<br />";
barbarianClassTraits += "<strong>Armor:</strong> Light armor, medium armor, shields<br /><strong>Weapons:</strong> Simple weapons, martial weapons Tools: None<br />";
barbarianClassTraits += "<strong>Saving Throws:</strong> Strength, Constitution<br />";
barbarianClassTraits += "<strong>Skills:</strong> Choose two from Animal Handling, Athletics, Intimidation, Nature, Perception, and Survival<br />";

var bardClassTraits = '';
bardClassTraits += "<strong>Hit Dice:</strong> 1d8 per bard level<br />";
bardClassTraits += "<strong>Hit Points at 1st Level:</strong> 8 + your Constitution modifier<br />";
bardClassTraits += "<strong>Hit Points at Higher Levels:</strong> 1d8 (or 5) + your Constitution modifier per bard level after 1st<br />";
bardClassTraits += "<br />";
bardClassTraits += "<strong>Armor:</strong> Light armor<br />";
bardClassTraits += "<strong>Weapons:</strong> Simple weapons, hand crossbows, longswords, rapiers, shortswords<br />";
bardClassTraits += "<strong>Tools:</strong> Three musical instruments of your choice<br />";
bardClassTraits += "<strong>Saving Throws:</strong> Dexterity, Charisma<br />";
bardClassTraits += "<strong>Skills:</strong> Choose any three<br />";

var clericClassTraits = '';

clericClassTraits += "<strong>Hit Dice:</strong> 1d8 per cleric level<br />";
clericClassTraits += "<strong>Hit Points at 1st Level:</strong> 8 + your Constitution modifier<br />";
clericClassTraits += "<strong>Hit Points at Higher Levels:</strong> 1d8 (or 5) + your Constitution modifier per cleric level after 1st<br />";
clericClassTraits += "<br />";
clericClassTraits += "<strong>Armor:</strong> Light armor, medium armor, shields<br />";
clericClassTraits += "<strong>Weapons:</strong> Simple weapons<br />";
clericClassTraits += "<strong>Tools:</strong> None<br />";
clericClassTraits += "<strong>Saving Throws:</strong> Wisdom, Charisma<br />";
clericClassTraits += "<strong>Skills:</strong> Choose two from History, Insight, Medicine, Persuasion, and Religion<br />";

var druidClassTraits = '';

druidClassTraits += "<strong>Hit Dice:</strong> 1d8 per druid level<br />";
druidClassTraits += "<strong>Hit Points at 1st Level:</strong> 8 + your Constitution modifier<br />";
druidClassTraits += "<strong>Hit Points at Higher Levels:</strong> 1d8 (or 5) + your Constitution modifier per druid level after 1st<br />";
druidClassTraits += "<br />";
druidClassTraits += "<strong>Armor:</strong> Light armor, medium armor, shields (druids will not wear armor or use shields made of metal)<br />";
druidClassTraits += "<strong>Weapons:</strong> Clubs, daggers, darts, javelins, maces, quarterstaffs, scimitars, sickles, slings, spears<br />";
druidClassTraits += "<strong>Tools:</strong> Herbalism kit<br />";
druidClassTraits += "<strong>Saving Throws:</strong> Intelligence, Wisdom<br />";
druidClassTraits += "<strong>Skills:</strong> Choose two from Arcana, Animal Handling, Insight, Medicine, Nature, Perception, Religion, and Survival<br />";

var fighterClassTraits = '';

fighterClassTraits += "<strong>Hit Dice:</strong> 1d10 per fighter level<br />";
fighterClassTraits += "<strong>Hit Points at 1st Level:</strong> 10 + your Constitution modifier<br />";
fighterClassTraits += "<strong>Hit Points at Higher Levels:</strong> 1d10 (or 6) + your Constitution modifier per fighter level after 1st<br />";
fighterClassTraits += "<br />";
fighterClassTraits += "<strong>Armor:</strong> All armor, shields<br />";
fighterClassTraits += "<strong>Weapons:</strong> Simple weapons, martial weapons<br />";
fighterClassTraits += "<strong>Tools:</strong> None<br />";
fighterClassTraits += "<strong>Saving Throws:</strong> Strength, Constitution<br />";
fighterClassTraits += "<strong>Skills:</strong> Choose two skills from Acrobatics, Animal Handling, Athletics, History, Insight, Intimidation, Perception, and Survival<br />";

var monkClassTraits = '';

monkClassTraits += "<strong>Hit Dice:</strong> 1d8 per monk level<br />";
monkClassTraits += "<strong>Hit Points at 1st Level:</strong> 8 + your Constitution modifier<br />";
monkClassTraits += "<strong>Hit Points at Higher Levels:</strong> 1d8 (or 5) + your Constitution modifier per monk level after 1st<br />";
monkClassTraits += "<br />";
monkClassTraits += "<strong>Armor:</strong> None<br />";
monkClassTraits += "<strong>Weapons:</strong> Simple weapons, shortswords<br />";
monkClassTraits += "<strong>Tools:</strong> Choose one type of artisan’s tools or one musical instrument<br />";
monkClassTraits += "<strong>Saving Throws:</strong> Strength, Dexterity<br />";
monkClassTraits += "<strong>Skills:</strong> Choose two from Acrobatics, Athletics, History, Insight, Religion, and Stealth<br />";

var paladinClassTraits = '';

paladinClassTraits += "<strong>Hit Dice:</strong> 1d10 per paladin level<br />";
paladinClassTraits += "<strong>Hit Points at 1st Level:</strong> 10 + your Constitution modifier<br />";
paladinClassTraits += "<strong>Hit Points at Higher Levels:</strong> 1d10 (or 6) + your Constitution modifier per paladin level after 1st<br />";
paladinClassTraits += "<br />";
paladinClassTraits += "<strong>Armor:</strong> All armor, shields<br />";
paladinClassTraits += "<strong>Weapons:</strong> Simple weapons, martial weapons<br />";
paladinClassTraits += "<strong>Tools:</strong> None<br />";
paladinClassTraits += "<strong>Saving Throws:</strong> Wisdom, Charisma<br />";
paladinClassTraits += "<strong>Skills:</strong> Choose two from Athletics, Insight, Intimidation, Medicine, Persuasion, and Religion<br />";

var rangerClassTraits = '';

rangerClassTraits += "<strong>Hit Dice:</strong> 1d10 per ranger level<br />";
rangerClassTraits += "<strong>Hit Points at 1st Level:</strong> 10 + your Constitution modifier<br />";
rangerClassTraits += "<strong>Hit Points at Higher Levels:</strong> 1d10 (or 6) + your Constitution modifier per ranger level after 1st<br />";
rangerClassTraits += "<br />";
rangerClassTraits += "<strong>Armor:</strong> Light armor, medium armor, shields<br />";
rangerClassTraits += "<strong>Weapons:</strong> Simple weapons, martial weapons<br />";
rangerClassTraits += "<strong>Tools:</strong> None<br />";
rangerClassTraits += "<strong>Saving Throws:</strong> Strength, Dexterity<br />";
rangerClassTraits += "<strong>Skills:</strong> Choose three from Animal Handling, Athletics, Insight, Investigation, Nature, Perception, Stealth, and Survival<br />";

var rogueClassTraits = '';

rogueClassTraits += "<strong>Hit Dice:</strong> 1d8 per rogue level<br />";
rogueClassTraits += "<strong>Hit Points at 1st Level:</strong> 8 + your Constitution modifier<br />";
rogueClassTraits += "<strong>Hit Points at Higher Levels:</strong> 1d8 (or 5) + your Constitution modifier per rogue level after 1st<br />";
rogueClassTraits += "<br />";
rogueClassTraits += "<strong>Armor:</strong> Light armor<br />";
rogueClassTraits += "<strong>Weapons:</strong> Simple weapons, hand crossbows, longswords, rapiers, shortswords<br />";
rogueClassTraits += "<strong>Tools:</strong> Thieves’ tools<br />";
rogueClassTraits += "<strong>Saving Throws:</strong> Dexterity, Intelligence<br />";
rogueClassTraits += "<strong>Skills:</strong> Choose four from Acrobatics, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Performance, Persuasion, Sleight of Hand, and Stealth<br />";

var sorcererClassTraits = '';

sorcererClassTraits += "<strong>Hit Dice:</strong> 1d6 per sorcerer level<br />";
sorcererClassTraits += "<strong>Hit Points at 1st Level:</strong> 6 + your Constitution modifier<br />";
sorcererClassTraits += "<strong>Hit Points at Higher Levels:</strong> 1d6 (or 4) + your Constitution modifier per sorcerer level after 1st<br />";
sorcererClassTraits += "<br />";
sorcererClassTraits += "<strong>Armor:</strong> None<br />";
sorcererClassTraits += "<strong>Weapons:</strong> Daggers, darts, slings, quarterstaffs, light crossbows<br />";
sorcererClassTraits += "<strong>Tools:</strong> None<br />";
sorcererClassTraits += "<strong>Saving Throws:</strong> Constitution, Charisma<br />";
sorcererClassTraits += "<strong>Skills:</strong> Choose two from Arcana, Deception, Insight, Intimidation, Persuasion, and Religion<br />";

var warlockClassTraits = '';

warlockClassTraits += "<strong>Hit Dice:</strong> 1d8 per warlock level<br />";
warlockClassTraits += "<strong>Hit Points at 1st Level:</strong> 8 + your Constitution modifier<br />";
warlockClassTraits += "<strong>Hit Points at Higher Levels:</strong> 1d8 (or 5) + your Constitution modifier per warlock level after 1st<br />";
warlockClassTraits += "<br />";
warlockClassTraits += "<strong>Armor:</strong> Light armor<br />";
warlockClassTraits += "<strong>Weapons:</strong> Simple weapons<br />";
warlockClassTraits += "<strong>Tools:</strong> None<br />";
warlockClassTraits += "<strong>Saving Throws:</strong> Wisdom, Charisma<br />";
warlockClassTraits += "<strong>Skills:</strong> Choose two skills from Arcana, Deception, History, Intimidation, Investigation, Nature, and Religion<br />";

var wizardClassTraits = '';

wizardClassTraits += "<strong>Hit Dice:</strong> 1d6 per wizard level<br />";
wizardClassTraits += "<strong>Hit Points at 1st Level:</strong> 6 + your Constitution modifier<br />";
wizardClassTraits += "<strong>Hit Points at Higher Levels:</strong> 1d6 (or 4) + your Constitution modifier per wizard level after 1st<br />";
wizardClassTraits += "<br />";
wizardClassTraits += "<strong>Armor:</strong> None<br />";
wizardClassTraits += "<strong>Weapons:</strong> Daggers, darts, slings, quarterstaffs, light crossbows<br />";
wizardClassTraits += "<strong>Tools:</strong> None<br />";
wizardClassTraits += "<strong>Saving Throws:</strong> Intelligence, Wisdom<br />";
wizardClassTraits += "<strong>Skills:</strong> Choose two from Arcana, History, Insight, Investigation, Medicine, and Religion<br />";