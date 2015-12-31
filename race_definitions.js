$(window).ready(function() {	
	$('#race').on('change', function() {
		var chosenRace = $('#race').val();
		
		updateRacialTraitsFromRace(chosenRace);
		
	});
});

function updateRacialTraitsFromRace(chosenRace) {
	switch (chosenRace) {
		case 'Dwarf' :
			$('#racial_traits').html(dwarfRacialTraits);
			break;
		case 'Elf' :
			$('#racial_traits').html(elfRacialTraits);
			break;
		case 'Halfling' :
			$('#racial_traits').html(halflingRacialTraits);
			break;
		case 'Human' :
			$('#racial_traits').html(humanRacialTraits);
			break;
		case 'Dragonborn' :
			$('#racial_traits').html(dragonbornRacialTraits);
			break;
		case 'Gnome' :
			$('#racial_traits').html(gnomeRacialTraits);
			break;
		case 'Half-Orc' :
			$('#racial_traits').html(halfofcRacialTraits);
			break;
		case 'Half-Elf' :
			$('#racial_traits').html(halfelfRacialTraits);
			break;
		case 'Tiefling' :
			$('#racial_traits').html(tieflingRacialTraits);
			break;			
	}
}

var dwarfRacialTraits = '<strong>Size:</strong> 4 to 5 feet tall; Medium<br />';
dwarfRacialTraits += '<strong>Speed:</strong> 25 feet. Your speed is <em>not</em> reduced by wearing heavy armour with which you have proficiency<br />';
dwarfRacialTraits += "<strong>Dark Vision:</strong> Standard dark vision<br />";
dwarfRacialTraits += "<strong>Dwarven Resilience:</strong> You have advantage on saving throws against poison, and you have resistance against poison damage<br />";
dwarfRacialTraits += "<strong>Dwarven Combat Training:</strong> You have proficiency with the battleaxe, handaxe, throwing hammer, and warhammer<br />";
dwarfRacialTraits += "<strong>Tool Proficiency:</strong> You have proficiency with <em>one</em> of the following tool sets: smith's tools, brewer's tools, or mason's tools<br />";
dwarfRacialTraits += "<strong>Dwarven Stonecunning:</strong> Whenever you make an History check related to the origin of stonework, you are considered proficient in the History skill <em>and</em> add double your proficiency bonus<br />";

var elfRacialTraits = '<strong>Size:</strong> 5 to 6 feet tall; Medium<br />';
elfRacialTraits += '<strong>Speed:</strong> 30 feet. <br />';
elfRacialTraits += "<strong>Dark Vision:</strong> Standard dark vision<br />";
elfRacialTraits += "<strong>Keen Senses:</strong> You have proficiency in the Perception skill<br />";
elfRacialTraits += "<strong>Fey Ancestry:</strong> You have advantage on saving throws against being charmed, and magic can't put you to sleep<br />";
elfRacialTraits += "<strong>Trance:</strong> Elves do not sleep - instead, they go into a unconcious trance for 4 hours a day. 4 hours of uninterrupted trance is the same as another race's 8 hours of good sleep<br />";

var halflingRacialTraits = '<strong>Size:</strong> about 3 feet tall; Medium<br />';
halflingRacialTraits += '<strong>Speed:</strong> 25 feet. <br />';
halflingRacialTraits += "<strong>Lucky:</strong> Rolling a 1 on an attack roll, ability check, or saving throw, you can re-roll the result<br />";
halflingRacialTraits += "<strong>Brave:</strong> You have advantage on saving throws against being frightened<br />";
halflingRacialTraits += "<strong>Halfling Nimbleness:</strong> You can effectively move through the space of any creature that is larger than yourself<br />";

var humanRacialTraits = '<strong>Size:</strong> varies wildly, average from 5 to 6 feet; Medium<br />';
humanRacialTraits += '<strong>Speed:</strong> 30 feet. <br />';
humanRacialTraits += '<strong>Ability Score Bonus:</strong> Add 1 to any <em>two</em> ability scores<br />';
humanRacialTraits += '<strong>Quick Learner:</strong> You are proficient in any 1 skill of your choosing<br />';
humanRacialTraits += '<strong>Adaptive:</strong> Gain 1 feat of your choosing<br />';

var dragonbornRacialTraits = '<strong>Size:</strong> 6 feet and over; Medium<br />';
dragonbornRacialTraits += '<strong>Speed:</strong> 30 feet. <br />';
dragonbornRacialTraits += '<strong>Breath Weapon:</strong> You have a breath weapon, whose exact effect depends upon your draconic ancestry. Consult PHB for further details<br />';
dragonbornRacialTraits += '<strong>Damage Resistance:</strong> You have natrual damage resistance. The exact damage type you are resistant to depends upon your draconic ancestry. Consult PHB for further details<br />';

var gnomeRacialTraits = '<strong>Size:</strong> 3 to 4 feet tall; Small<br />';
gnomeRacialTraits += '<strong>Speed:</strong> 25 feet.<br />';
gnomeRacialTraits += "<strong>Dark Vision:</strong> Standard dark vision<br />";
gnomeRacialTraits += "<strong>Gnome Cunning:</strong> You have advantage on all Intelligence, Wisdom and Charisma saving throws against magic<br />";

var halfelfRacialTraits = '<strong>Size:</strong> 5 to 6 feet on average; Medium<br />';
halfelfRacialTraits += '<strong>Speed:</strong> 30 feet. <br />';
halfelfRacialTraits += '<strong>Ability Score Bonus:</strong> Add 2 to Charisma, and 1 to any other <em>two</em> ability scores<br />';
halfelfRacialTraits += "<strong>Dark Vision:</strong> Standard dark vision<br />";
halfelfRacialTraits += "<strong>Fey Ancestry:</strong> You have advantage on saving throws against being charmed, and magic can't put you to sleep<br />";
halfelfRacialTraits += '<strong>Quick Learner:</strong> You are proficient in any 2 skills of your choosing<br />';

var halfofcRacialTraits = '<strong>Size:</strong> 6 feet or above, 7 feet is not uncommon; Medium<br />';
halfofcRacialTraits += '<strong>Speed:</strong> 30 feet. <br />';
halfofcRacialTraits += '<strong>Ability Score Bonus:</strong> Add 2 to Strength, and 1 to Constitution<br />';
halfofcRacialTraits += "<strong>Dark Vision:</strong> Standard dark vision<br />";
halfofcRacialTraits += "<strong>Menacing:</strong> You are proficient in the Intimidation skill<br />";
halfofcRacialTraits += '<strong>Relentless Endurance:</strong> When you are reduced to 0 HP but not killed outright, you instead drop to 1 HP. You can only use this ability once per long rest.<br />';
halfofcRacialTraits += '<strong>Savage Attacks:</strong> When you score a critical hit on an attack roll, roll the damage die.<br />';

var tieflingRacialTraits = '<strong>Size:</strong> 5 to 6 feet; Medium<br />';
tieflingRacialTraits += '<strong>Speed:</strong> 30 feet. <br />';
tieflingRacialTraits += '<strong>Ability Score Bonus:</strong> Add 2 to Charisma, and 1 to Intelligence<br />';
tieflingRacialTraits += "<strong>Dark Vision:</strong> Standard dark vision<br />";
tieflingRacialTraits += "<strong>Hellish Resistance:</strong> You have resistance to fire damage<br />";
tieflingRacialTraits += '<strong>Infernal Legacy:</strong> At level 1, you know the <em>Thaumaturgy</em> cantrip; at level 3.<br />';




