
function initializeSelectOptions() {

	const etherianNames = [
	    'Golsper',
	    'Cryoclops',
	    'Broxl',
	    'Warzerd',
	    'Raditron',
	    'Maguca',
	    'Aralon',
	    'Mabiki',
	    'Mabiki (Warrior)',
	    'Mabiki (Shaman)',
	    'Mabiki (Archer)',
	    'Mabiki (Defender)',
	    'Ghourien',
	    'Electris',
	    'Gaiarth',
	    'Kangarate',
	    'Umbris',
	    'Lockspectre',
	    'Hyd-dra',
	    'Skrimmrah',
	    'Beetherion',
	    'Pharavil',
	    'Swinance',
	    'Lullafairy',
	    'Scarims',
	    'Ursweet',
	    'Potbrawler',
	    'Ignititan',
	    'Magmantle',
	    'Detoadnate',
	    'Pheracle',
	    'Secton',
	    'Florafluff',
	    'Chambrr',
	    'Miscrelyx',
	    'Outlannon',
	    'Jarantula',
	    'Maltion',
	    'Lucifyce',
	    'Solareign',
	    'Harfin',
	    'Atlantitan',
	    'Golven',
	    'Alchare',
	    'Ramphibien',
	    'Cromite',
	    'Carapinch',
	    'Koutsuki',
	    'Hedgelord',
	    'Dalladoodle',
	    'Aizune (Rose)',
	    'Aizune (Violet)',
	    'Pixbee',
	    'Botanicat',
	    'Tesline',
	    'Wanderwood',
	    'Phytotitan',
	    'Gerridirah',
	    'Stingferno',
	    'Tanukama',
	    'Hawctus',
	    'Toritoregg',
	    'Avalucard',
	    'Fromouda',
	    'Mariposun',
	    'Savagaur',
	    'Cactilibre',
	    'Mulegant',
	    'Poladin',
	    'Chromago',
	    'Cocolossus',
	    'Phesquerade',
	    'Galvant',
	    'Silopsis',
	    'Vacrunch',
	    'Shogong',

	    'Irasper',
	    'Cryoball',
	    'Boxling',
	    'Eletoid',
	    'Jardrix',
	    'Watchbot',
	    'Roboneer',
	    'Magu',
	    'Magecci',
	    'Eidlon',
	    'Terroot',
	    'Geminirt',
	    'Kungafoo',
	    'Spectrability',
	    'Salablinder',
	    'Poigon',
	    'Behero',
	    'Munstorm',
	    'Oinkoin',
	    'Moneyhog',
	    'Spookims',
	    'Honumb',
	    'Teap',
	    'Kettlerit',
	    'Pheral',
	    'Avien',
	    'Kindite',
	    'Sizzlit',
	    'Ribbomb',
	    'Frodiary',
	    'Snik',
	    'Seren',
	    'Lyxic',
	    'Prowlyx',
	    'Crimortar',
	    'Minnart',
	    'Sperish',
	    'Kousai',
	    'Ovelin',
	    'Stolem',
	    'Rabbini',
	    'Rabician',
	    'Tadbowl',
	    'Edgehog',
	    'Kitsakura',
	    'Flyden',
	    'Clovurr',
	    'Elekity',
	    'Amenby',
	    'Magmarva',
	    'Pupagma',
	    'Tarabi',
	    'Cachick',
	    'Egglet',
	    'Scrambird',
	    'Vampyro',
	    'Nosfirno',
	    'Goudrowsy',
	    'Duram',
	    'Ramprant',
	    'Cactikid',
	    'Cactadore',
	    'Braybug',
	    'Equoon',
	    'Growdy',
	    'Sketchop',
	    'Huskot',
	    'Snapalm',
	    'Voltinch',
	    'Bascurus',
	    'Velveal',
	    'Samuring'
	]
	addOptionsToSelect(etherianNames, 'attacking-etherian');
	addOptionsToSelect(etherianNames, 'defending-etherian');

	const typeNames = [
		'Basic',
		'Fire',
		'Water',
		'Electric',
		'Grass',
		'Ice',
		'Fighting',
		'Poison',
		'Terra',
		'Wind',
		'Psychic',
		'Bug',
		'Ghost',
		'Dragon',
		'Dark',
		'Metal',
		'Light',
		'Cosmic'
	]
	addOptionsToSelect(typeNames, 'attacking-etherian-type-1');
	addOptionsToSelect(typeNames, 'attacking-etherian-type-2');
	addOptionsToSelect(typeNames, 'defending-etherian-type-1');
	addOptionsToSelect(typeNames, 'defending-etherian-type-2');
	addOptionsToSelect(typeNames, 'attacking-etherian-move-type');

	const attackingAbilityNames = [
		'25% Boost (Enchanted Weaving)',
		'20% Boost (Sharpened, Solar Absorption, Undersize, Etc.)',
		'15% Boost (Piercing Fangs)',
		'10% Boost (Optimism, Pessimism)',
		'20% Decrease (Solar Absorption, Solar Emission)',
		'Laser Sight',
		'Blinded',
	]
	addOptionsToSelect(attackingAbilityNames, 'attacking-etherian-ability');

	const defendingAbilityNames = [
		'75% Resistance (Oblivion)',
		'25% Resistance (Defensive Stance)',
		'20% Resistance (Flimsy Mask)',
		'10% Resistance (Blossom Cover, Flame Shield, Vapor Guard)',
		'15% Weakness (Blossom Cover, Flame Shield, Vapor Guard)',
		'10% Weakness (Optimism, Pessimism)',
		'+100% Defense (Resting)',
		'Shelter Shield/Exoplating',
		'Extraterrestrial'
	]
	addOptionsToSelect(defendingAbilityNames, 'defending-etherian-ability');

	const attackingItemNames = [
		'25% Boost (Mistlefoe, Eclipse Cuffs)',
		'20% Boost (Type Items, Seashell Blade)',
		'15% Boost (Various Items)'
	]
	addOptionsToSelect(attackingItemNames, 'attacking-etherian-item');

	const defendingItemNames = [
		'Walnut Shield',
		'20% Resistance (Frosted Snowglobe)',
		'15% Resistance (Laurel Crown)'
	]
	addOptionsToSelect(defendingItemNames, 'defending-etherian-item');

	const weatherNames = [
		'25% Boost',
		'25% Decrease'
	]
	addOptionsToSelect(weatherNames, 'weather');

}

function addOptionsToSelect(opts, select) {
	let elOptions = document.getElementById(select).options;
	let newOptions = [];
	for (const name of opts) {
		obj = {'text':name};
		newOptions.push(obj);
	}

	newOptions.forEach(option =>
		elOptions.add(new Option(option.text))
	);
}

initializeSelectOptions();


function dmgOnEtherianChange(side) {
	const selectedEtherian = document.getElementById(side + '-etherian').value;
	if (selectedEtherian == '-') {
		return;
	}

	const type1SelectId = side + '-etherian-type-1';
	const type2SelectId = side + '-etherian-type-2';
	document.getElementById(type1SelectId).value = etherianInfo[selectedEtherian]['types'][0];
	if (etherianInfo[selectedEtherian]['types'].length > 1) {
		document.getElementById(type2SelectId).value = etherianInfo[selectedEtherian]['types'][1];
	} else {
		document.getElementById(type2SelectId).value = '-';
	}

	if (side == 'attacking') {
		const moveSelectId = side + '-etherian-move';
		moveOptions = document.getElementById(moveSelectId).options;
		for (let i = moveOptions.length; i > 0; i--) {
			moveOptions.remove(i);
		}

		newMoveOptions = [];
		for (const move of etherianInfo[selectedEtherian]['learnset']) {
			obj = {'text':move};
			newMoveOptions.push(obj);
		}
		newMoveOptions.forEach(option => {
			moveOptions.add(new Option(option.text));
		});
		if (document.getElementById('all-moves').checked) {
			newMoveOptions = [];
			for (const move of allMoveNames) {
				obj = {'text':move};
				newMoveOptions.push(obj);
			}
			newMoveOptions.forEach(option => {
				moveOptions.add(new Option(option.text));
			});
		}
	}
}
function onMoveChange() {
	const selectedMove = document.getElementById('attacking-etherian-move').value;
	if (selectedMove == '-') {
		document.getElementById('attacking-etherian-move-type').value = '-';
	} else {
		document.getElementById('attacking-etherian-move-type').value = moveInfo[selectedMove]['type'];
	}
}


const typeEffectivenessTable = [
	[1,    1,    1,    1,    1,    1,    1.5,  1,    1,    1,    1,    1,    0.25, 1,    1,    1,    1,    1   ],
	[1,    2/3,  1.5,  1,    2/3,  2/3,  1,    1,    1.5,  1.5,  1,    2/3,  1,    1,    1,    2/3,  1,    1   ],
	[1,    2/3,  2/3,  1.5,  1.5,  2/3,  1,    1.5,  1,    1,    1,    1,    1,    1,    1,    2/3,  1,    1   ],
	[1,    1,    1,    2/3,  1,    1,    1,    1,    1.5,  1,    1,    1,    1,    1,    1,    2/3,  2/3,  1   ],
	[1,    1.5,  2/3,  2/3,  2/3,  1.5,  1,    1.5,  2/3,  1.5,  1,    1.5,  1,    1,    1,    1,    2/3,  1   ],
	[1,    1.5,  2/3,  1,    1,    2/3,  1.5,  1,    1.5,  1,    1,    1,    1,    1,    1,    1.5,  1,    1   ],
	[1,    1,    1,    1,    1,    1,    1.5,  1,    1,    1,    1.5,  1,    1,    1,    2/3,  2/3,  1,    1   ],
	[1,    1,    1,    1,    2/3,  1,    2/3,  2/3,  1.5,  1,    1.5,  2/3,  1,    1,    1,    1,    1,    1   ],
	[2/3,  2/3,  1.5,  0.25, 1.5,  1.5,  1.5,  2/3,  1,    2/3,  1,    1,    1,    1,    1,    1.5,  1,    1.5 ],
	[1,    1,    1,    1.5,  1,    1.5,  2/3,  1.5,  0,    1,    1,    2/3,  1,    1,    1,    1,    1,    1   ],
	[1,    1,    1,    1,    1,    1,    2/3,  1,    1,    1,    2/3,  1.5,  1.5,  1,    1.5,  1,    1,    1.5 ],
	[1,    1.5,  1,    1,    2/3,  1.5,  1,    1,    1,    1,    1,    1,    1,    1,    2/3,  1,    1,    1   ],
	[0.25, 1,    1,    1,    1,    1,    0.25, 2/3,  1,    1,    1.5,  1,    1.5,  1,    1.5,  1,    1.5,  1   ],
	[1,    2/3,  2/3,  2/3,  2/3,  1.5,  1,    1,    2/3,  1,    1,    1,    1,    1.5,  1,    1,    1.5,  1   ],
	[1,    1,    1,    1,    1,    1,    1.5,  1,    1,    1,    2/3,  1.5,  2/3,  1,    2/3,  1,    1.5,  2/3 ],
	[2/3,  1.5,  1.5,  1,    2/3,  2/3,  1.5,  2/3,  1.5,  2/3,  1,    1,    1,    2/3,  1,    2/3,  1,    2/3 ],
	[1,    1,    1,    2/3,  1.5,  1,    1,    1,    1,    1,    1,    1,    2/3,  2/3,  1.5,  1,    2/3,  1   ],
	[1,    1,    1,    1,    1,    2/3,  2/3,  1,    2/3,  2/3,  1.5,  1,    1,    1,    1.5,  1,    1.5,  1.5 ]
];
const typeToNumber = {
	'Basic': 0,
	'Fire': 1,
	'Water': 2,
	'Electric': 3,
	'Grass': 4,
	'Ice': 5,
	'Fighting': 6,
	'Poison': 7,
	'Terra': 8,
	'Wind': 9,
	'Psychic': 10,
	'Bug': 11,
	'Ghost': 12,
	'Dragon': 13,
	'Dark': 14,
	'Metal': 15,
	'Light': 16,
	'Cosmic': 17
}
const slashingMoves = ['Buzzkill (1 Hit)','Dragon Claw','Metal Claw','Night Slash','Scratch','Shadow Claw','Slash'];
const bitingMoves = ['Bite','Bug Bite','Crunch','Fire Fang','Ice Fang','Thunder Fang'];


let defendingEtherianMinCurrentHealth = null;
let defendingEtherianMaxCurrentHealth = null;
let totalDamageRolls = [];
let tryCalculateKoChance = true;
let chanceToKoStr = "";

function calculateDamage() {

	const attackingEtherianName = document.getElementById('attacking-etherian').value;
	const attackingEtherianAbility = document.getElementById('attacking-etherian-ability').value;
	const attackingEtherianItem = document.getElementById('attacking-etherian-item').value;
	const attackingEtherianMove = document.getElementById('attacking-etherian-move').value;
	const attackingEtherianBoosts = parseInt(document.getElementById('attacking-etherian-stat-changes').value);

	const defendingEtherianName = document.getElementById('defending-etherian').value;
	const defendingEtherianAbility = document.getElementById('defending-etherian-ability').value;
	const defendingEtherianItem = document.getElementById('defending-etherian-item').value;
	const defendingEtherianBoosts = parseInt(document.getElementById('defending-etherian-stat-changes').value);

	const weather = document.getElementById('weather').value;
	const isCriticalHit = document.getElementById('critical-hit').checked;
	
	const attackingEtherianTypes = [document.getElementById('attacking-etherian-type-1').value, document.getElementById('attacking-etherian-type-2').value];
	const defendingEtherianTypes = [document.getElementById('defending-etherian-type-1').value, document.getElementById('defending-etherian-type-2').value];

	const attackingMoveType = document.getElementById('attacking-etherian-move-type').value;

	const attackingEtherianInfo = etherianInfo[attackingEtherianName];
	const defendingEtherianInfo = etherianInfo[defendingEtherianName];

	const attackingEtherianStats = {'hp':0,'spd':0,'atk':0,'def':0,'nrg':0,'res':0};
	[['hp',60],['spd',20],['atk',5],['def',5],['nrg',5],['res',5]].forEach((arr) => {
		const level = 100;
		const stat = etherianInfo[attackingEtherianName]['stats'][arr[0]];
		if (arr[0] == 'spd') {
			attackingEtherianStats[arr[0]] = Math.ceil(30-(10*level/100)+(stat*level/200));
		} else {
			attackingEtherianStats[arr[0]] = (stat * ((level/100)*2) + arr[1]);
		}
	});

	const defendingEtherianStats = {'hp':0,'spd':0,'atk':0,'def':0,'nrg':0,'res':0};
	[['hp',60],['spd',20],['atk',5],['def',5],['nrg',5],['res',5]].forEach((arr) => {
		const level = 100;
		const stat = etherianInfo[defendingEtherianName]['stats'][arr[0]];
		if (arr[0] == 'spd') {
			defendingEtherianStats[arr[0]] = Math.ceil(30-(10*level/100)+(stat*level/200));
		} else {
			defendingEtherianStats[arr[0]] = (stat * ((level/100)*2) + arr[1]);
		}
	});

	if (defendingEtherianMinCurrentHealth == null) {
		defendingEtherianMinCurrentHealth = defendingEtherianStats['hp'];
		defendingEtherianMaxCurrentHealth = defendingEtherianStats['hp'];
	}


	const attackingMoveInfo = moveInfo[attackingEtherianMove];

	let damageMultipliers = 1;

	if (attackingMoveType == attackingEtherianTypes[0] || attackingMoveType == attackingEtherianTypes[1]) {
		damageMultipliers *= 1.25;
	}


	//type effectiveness
	let tempMultiplier = 1;
	for (let i = 0; i < defendingEtherianTypes.length; i++) {

		const idx0 = typeToNumber[defendingEtherianTypes[i]];
		const idx1 = typeToNumber[attackingMoveType];
		tempMultiplier *= typeEffectivenessTable[idx0][idx1];

		if (defendingEtherianTypes[1] == '-') {
			damageMultipliers *= tempMultiplier;
			break;
		} else if (i == 1) {
			damageMultipliers *= tempMultiplier;
			break;
		}
	}


	if (attackingEtherianAbility != '-') {
		const table = {
			'25% Boost (Enchanted Weaving)': 1.25,
			'20% Boost (Sharpened, Solar Absorption, Undersize, Etc.)': 1.2,
			'15% Boost (Piercing Fangs)': 1.15,
			'10% Boost (Optimism, Pessimism)': 1.1,
			'20% Decrease (Solar Absorption, Solar Emission)': 0.8,
			'Laser Sight': 1,
			'Blinded': 1
		}
		damageMultipliers *= table[attackingEtherianAbility];
	}
	if (defendingEtherianAbility != '-') {
		const table = {
			'75% Resistance (Oblivion)': 0.25,
			'25% Resistance (Defensive Stance)':0.75,
			'20% Resistance (Flimsy Mask)':0.8,
			'10% Resistance (Blossom Cover, Flame Shield, Vapor Guard)': 0.9,
			'15% Weakness (Blossom Cover, Flame Shield, Vapor Guard)': 1.15,
			'10% Weakness (Optimism, Pessimism)': 1.1,
			'Shelter Shield/Exoplating': 1,
			'Extraterrestrial': 1,
			'+100% Defense (Resting)': 1
		}
		damageMultipliers *= table[defendingEtherianAbility];
	}

	if (attackingEtherianItem != '-') {
		const table = {
			'25% Boost (Mistlefoe, Eclipse Cuffs)': 1.25,
			'20% Boost (Type Items, Seashell Blade)': 1.2,
			'15% Boost (Various Items)': 1.15,
		}
		damageMultipliers *= table[attackingEtherianItem];
	}
	if (defendingEtherianItem != '-') {
		const table = {
			'Walnut Shield': 1,
			'20% Resistance (Frosted Snowglobe)': 0.8,
			'15% Resistance (Laurel Crown)': 0.85
		}
		damageMultipliers *= table[defendingEtherianItem];
	}
	if (defendingEtherianItem == 'Walnut Shield') {
		if (attackingMoveInfo['category'] == 'Physical') {
			damageMultipliers *= 0.8;
		}
		if (attackingMoveInfo['type'] == 'Fire') {
			damageMultipliers *= 1.2;
		}
	}

	if (weather != '-') {
		const table = {
			'25% Boost': 1.25,
			'25% Decrease': 0.75
		}
		damageMultipliers *= table[weather];
	}


	if (isCriticalHit) {
		if (defendingEtherianAbility == 'Shelter Shield/Exoplating') {
			damageMultipliers *= 1.15;
		} else {
			damageMultipliers *= 1.5;
		}
	}


	const power = attackingMoveInfo['power'];

	let offense = 0;
	let defense = 0;
	if (attackingMoveInfo['category'] == 'Physical') {
		offense = attackingEtherianStats['atk'];
		defense = defendingEtherianStats['def'];
	} else {
		offense = attackingEtherianStats['nrg'];
		defense = defendingEtherianStats['res'];
	}


	if (attackingEtherianBoosts != 0) {
		if (attackingEtherianBoosts > 0) {
			offense = Math.round(offense*(1+attackingEtherianBoosts*0.2));
		} else {
			offense = Math.round(offense*(1+attackingEtherianBoosts*0.1));
		}
	}
	if (defendingEtherianBoosts != 0) {
		if (defendingEtherianBoosts > 0) {
			defense = Math.round(defense*(1+defendingEtherianBoosts*0.2));
		} else {
			defense = Math.round(defense*(1+defendingEtherianBoosts*0.1));
		}
	}

	if (defendingEtherianAbility == '+100% Defense (Resting)') {
		defense *= 2;
	}



	let damageRandMin = 90;
	let damageRandMax = 100;

	if (defendingEtherianAbility == 'Extraterrestrial') {
		damageRandMin -= 10;
	}
	if (attackingEtherianAbility == 'Laser Sight') {
		damageRandMin += 5;
	}
	if (attackingEtherianAbility == 'Blinded') {
		damageRandMin -= 10;
		damageRandMax += 5;
	}

	let minDamage = Math.round(42 * power * (offense/defense/50) * damageMultipliers * 0.85 * (damageRandMin/100));
	let maxDamage = Math.round(42 * power * (offense/defense/50) * damageMultipliers * 0.85 * (damageRandMax/100));
	if (attackingMoveInfo['setDamage']) {
		minDamage = attackingMoveInfo['setDamage'];
		maxDamage = attackingMoveInfo['setDamage'];
	}

	if (tryCalculateKoChance) {
		const tempRolls = [];
		if (attackingMoveInfo['setDamage']) {
			tempRolls.push(minDamage);
		} else {
			for (let iNum = damageRandMin; iNum <= damageRandMax; iNum++) {
				currentMult = iNum/100;
				tempRolls.push(Math.round(42 * power * (offense/defense/50) * damageMultipliers * 0.85 * currentMult))
			}
		}
		totalDamageRolls.push(tempRolls);
		chanceToKoStr = getKOChance(defendingEtherianStats['hp'], totalDamageRolls);
		if (chanceToKoStr == "100% chance to KO") {
			tryCalculateKoChance = false;
		}
	}
	

	defendingEtherianMinCurrentHealth -= minDamage;
	defendingEtherianMaxCurrentHealth -= maxDamage;


	document.getElementById('damage-output').innerHTML += attackingEtherianName + "'s " + attackingEtherianMove + " does " + minDamage + " to " + maxDamage + " damage to " + defendingEtherianName + "<br>";
	
	document.getElementById('damage-total').innerHTML = defendingEtherianName + "'s Max HP: " + defendingEtherianMinCurrentHealth + "/" + defendingEtherianStats['hp'] + "<br>" + defendingEtherianName + "'s Min HP: " + defendingEtherianMaxCurrentHealth + "/" + defendingEtherianStats['hp'] + "<br>" + chanceToKoStr;




	document.getElementById('damage-clear-button').style.display = "block";
}


function dmgClearFunc() {
	document.getElementById('damage-output').innerHTML = '';
	document.getElementById('damage-total').innerHTML = '';
	defendingEtherianMinCurrentHealth = null;
	defendingEtherianMaxCurrentHealth = null;
	totalDamageRolls = [];
	tryCalculateKoChance = true;
	document.getElementById('damage-clear-button').style.display = "none";
}





























//taken from https://cantsay.github.io/resources/ko-chance-calculator/
function getKOChance(HPStat, dmgRolls) {
  //turn all the sets of damage rolls into a big array list
  var combinedRolls = [];
  for (var i = 0; i < dmgRolls[0].length; i++) {
    combinedRolls.push(dmgRolls[0][i]);
  }
  var result;
  try {
  	result = getKOChance2(HPStat, combinedRolls, 1, dmgRolls)
  } catch {
  	tryCalculateKoChance = false;
  	return "Unable to calculate KO chance";
  }
  return result;
}

function getKOChance2(HPStat, combinedRolls, beginIndex, dmgRolls) {
  var combinedRollsSize = 0;
  for (var i in combinedRolls) {
    if (combinedRolls[i] !== 0) {
      combinedRollsSize += 1;
    }
  }
  if (beginIndex >= dmgRolls.length) {
    var count = 0;

    for (var i = 0; i < combinedRollsSize; i++) {
      if (combinedRolls[i] >= HPStat) count++;
    }

    return (100.0 * count) / combinedRollsSize + "% chance to KO";
  }

  var newRolls = [];

  for (var i = 0; i < combinedRollsSize; i++) {
    for (var j = 0; j < dmgRolls[beginIndex].length; j++) {
      newRolls.push(combinedRolls[i] + dmgRolls[beginIndex][j]);
    }
  }
	
  return getKOChance2(HPStat, newRolls, beginIndex + 1, dmgRolls);
}

function reduceFraction(top, bottom) {
  var gcd = getGCD(top, bottom);
  return top / gcd + "/" + bottom / gcd;
}

function getGCD(top, bottom) {
  if (bottom === 0) {
    return top;
  }
  return getGCD(bottom, top % bottom);
}












const etherianInfo = {
    'Irasper': {
        'learnset': ['Tackle','Metal Claw','Earthquake','Buzzkill (1 Hit)','Rapid Spin'],
        'stats': {'hp': 50, 'spd': 30, 'atk': 45, 'def': 52, 'nrg': 15, 'res': 34},
        'types': ['Terra', 'Metal'],
    },
    'Golsper': {
        'learnset': ['Tackle','Metal Claw','Earthquake','Buzzkill (1 Hit)','Rapid Spin','Feint Attack','Stone Edge','Power Gem','Hyper Beam'],
        'stats': {'hp': 100, 'spd': 60, 'atk': 90, 'def': 102, 'nrg': 30, 'res': 65},
        'types': ['Terra', 'Metal'],
    },
    'Cryoball': {
        'learnset': ['Tackle','Rapid Spin','Frost Breath','Powder Snow','Ice Fang'],
        'stats': {'hp': 57, 'spd': 26, 'atk': 45, 'def': 30, 'nrg': 10, 'res': 45},
        'types': ['Ice'],
    },
    'Cryoclops': {
        'learnset': ['Tackle','Rapid Spin','Frost Breath','Powder Snow','Ice Fang','Headbutt','Giga Impact'],
        'stats': {'hp': 110, 'spd': 55, 'atk': 105, 'def': 73, 'nrg': 25, 'res': 75},
        'types': ['Ice'],
    },
    'Boxling': {
        'learnset': ['Tackle','Present (40 BP)','Present (80 BP)','Present (120 BP)','Take Down'],
        'stats': {'hp': 20, 'spd': 75, 'atk': 20, 'def': 35, 'nrg': 10, 'res': 20},
        'types': ['Basic'],
    },
    'Broxl': {
        'learnset': ['Tackle','Present (40 BP)','Present (80 BP)','Present (120 BP)','Take Down','Fire Punch','Thunder Punch','Ice Punch','Astonish','Double-Edge','Shadow Punch','Giga Impact','Mega Punch'],
        'stats': {'hp': 90, 'spd': 70, 'atk': 95, 'def': 85, 'nrg': 29, 'res': 80},
        'types': ['Basic', 'Fighting'],
    },
    'Warzerd': {
        'learnset': ['Scratch','Feint Attack','Metal Claw','Slash','Thunder Punch','Fire Punch','Ice Punch','Shadow Claw','Dragon Claw','Night Slash','Dragon Rush'],
        'stats': {'hp': 86, 'spd': 57, 'atk': 106, 'def': 95, 'nrg': 10, 'res': 90},
        'types': ['Dragon', 'Fighting'],
    },
    'Eletoid': {
        'learnset': ['Tackle','Astonish','Electro Ball (40 BP)','Electro Ball (60 BP)','Electro Ball (80 BP)','Electro Ball (120 BP)','Electro Ball (150 BP)','Slash','Psybeam','Shadow Ball','Volt Tackle'],
        'stats': {'hp': 35, 'spd': 35, 'atk': 40, 'def': 25, 'nrg': 40, 'res': 25},
        'types': ['Electric', 'Ghost'],
    },
    'Jardrix': {
        'learnset': ['Tackle','Bug Bite','Feint Attack','Astonish','Night Slash','Contaminate','Bind','Quick Attack'],
        'stats': {'hp': 25, 'spd': 45, 'atk': 45, 'def': 55, 'nrg': 15, 'res': 29},
        'types': ['Bug', 'Poison'],
    },
    'Watchbot': {
        'learnset': ['Thunder Punch','Discharge','Self-Destruct'],
        'stats': {'hp': 45, 'spd': 35, 'atk': 22, 'def': 47, 'nrg': 44, 'res': 34},
        'types': ['Metal', 'Electric'],
        'gender': 'Genderless'
    },
    'Roboneer': {
        'learnset': ['Thunder Punch','Discharge','Self-Destruct','Electro Ball (40 BP)','Electro Ball (60 BP)','Electro Ball (80 BP)','Electro Ball (120 BP)','Electro Ball (150 BP)','Energy Ball','Flamethrower'],
        'stats': {'hp': 65, 'spd': 51, 'atk': 40, 'def': 70, 'nrg': 67, 'res': 53},
        'types': ['Metal', 'Electric'],
        'gender': 'Genderless'
    },
    'Raditron': {
        'learnset': ['Thunder Punch','Discharge','Self-Destruct','Electro Ball (40 BP)','Electro Ball (60 BP)','Electro Ball (80 BP)','Electro Ball (120 BP)','Electro Ball (150 BP)','Energy Ball','Flamethrower','Ice Beam','Thunderbolt','Explosion','Hyper Beam'],
        'stats': {'hp': 79, 'spd': 53, 'atk': 61, 'def': 101, 'nrg': 97, 'res': 74},
        'types': ['Metal', 'Electric'],
        'gender': 'Genderless'
    },
    'Magu': {
        'learnset': ['Astonish','Dream Eater','Shadow Ball','Shadow Punch'],
        'stats': {'hp': 35, 'spd': 55, 'atk': 25, 'def': 25, 'nrg': 65, 'res': 55},
        'types': ['Dark'],
    },
    'Magecci': {
        'learnset': ['Astonish','Dream Eater','Shadow Ball','Shadow Punch','Moonblast'],
        'stats': {'hp': 50, 'spd': 70, 'atk': 55, 'def': 45, 'nrg': 85, 'res': 75},
        'types': ['Dark'],
    },
    'Maguca': {
        'learnset': ['Astonish','Dream Eater','Shadow Ball','Shadow Punch','Moonblast','Starry Spiral','Dark Pulse'],
        'stats': {'hp': 66, 'spd': 108, 'atk': 78, 'def': 68, 'nrg': 116, 'res': 94},
        'types': ['Dark', 'Ghost'],
    },
    'Eidlon': {
        'learnset': ['Scratch','Astonish','Dream Eater','Bug Bite','Feint Attack','Night Slash','Metal Claw'],
        'stats': {'hp': 25, 'spd': 55, 'atk': 55, 'def': 45, 'nrg': 5, 'res': 30},
        'types': ['Bug', 'Metal'],
    },
    'Aralon': {
        'learnset': ['Scratch','Astonish','Dream Eater','Bug Bite','Feint Attack','Night Slash','Metal Claw','Dark Pulse'],
        'stats': {'hp': 60, 'spd': 103, 'atk': 105, 'def': 90, 'nrg': 10, 'res': 63},
        'types': ['Bug', 'Metal'],
    },
    'Mabiki': {
        'learnset': ['Bash','Absorb','Rage','Mega Drain','Mega Punch','Slash','Tackle','Headbutt','Take Down','Giga Drain','Quick Attack'],
        'stats': {'hp': 70, 'spd': 70, 'atk': 70, 'def': 70, 'nrg': 70, 'res': 70},
        'types': ['Grass'],
    },
    'Ghourien': {
        'learnset': ['Tackle','Astonish','Electro Ball (40 BP)','Electro Ball (60 BP)','Electro Ball (80 BP)','Electro Ball (120 BP)','Electro Ball (150 BP)','Slash','Psybeam','Shadow Ball','Volt Tackle','Night Slash','Dark Pulse'],
        'stats': {'hp': 110, 'spd': 65, 'atk': 90, 'def': 70, 'nrg': 45, 'res': 55},
        'types': ['Dark', 'Ghost'],
    },
    'Electris': {
        'learnset': ['Tackle','Astonish','Electro Ball (40 BP)','Electro Ball (60 BP)','Electro Ball (80 BP)','Electro Ball (120 BP)','Electro Ball (150 BP)','Slash','Psybeam','Shadow Ball','Volt Tackle','Thunder Punch','Discharge','Extreme Speed','Thunderbolt'],
        'stats': {'hp': 65, 'spd': 90, 'atk': 45, 'def': 55, 'nrg': 110, 'res': 70},
        'types': ['Electric', 'Ghost'],
    },
    'Terroot': {
        'learnset': ['Absorb','Razor Leaf','Bind','Mega Drain','Energy Ball','Self-Destruct'],
        'stats': {'hp': 47, 'spd': 25, 'atk': 33, 'def': 57, 'nrg': 16, 'res': 42},
        'types': ['Terra', 'Grass'],
    },
    'Geminirt': {
        'learnset': ['Absorb','Razor Leaf','Bind','Mega Drain','Seismic Stomp','Energy Ball','Self-Destruct','Stone Edge'],
        'stats': {'hp': 80, 'spd': 22, 'atk': 60, 'def': 82, 'nrg': 26, 'res': 60},
        'types': ['Terra', 'Grass'],
    },
    'Gaiarth': {
        'learnset': ['Absorb','Razor Leaf','Bind','Mega Drain','Seismic Stomp','Energy Ball','Self-Destruct','Stone Edge','Ancient Power','Gravity Well','Earthquake','Explosion'],
        'stats': {'hp': 109, 'spd': 20, 'atk': 80, 'def': 122, 'nrg': 32, 'res': 92},
        'types': ['Terra', 'Grass'],
    },
    'Kungafoo': {
        'learnset': ['Tackle','Bite','Rage','Headbutt','Take Down','Fire Punch','Ice Punch','Thunder Punch'],
        'stats': {'hp': 32, 'spd': 40, 'atk': 52, 'def': 29, 'nrg': 32, 'res': 33},
        'types': ['Fighting'],
    },
    'Kangarate': {
        'learnset': ['Tackle','Bite','Rage','Headbutt','Take Down','Fire Punch','Ice Punch','Thunder Punch','Mega Punch','Aura Sphere','First Blood'],
        'stats': {'hp': 55, 'spd': 84, 'atk': 95, 'def': 74, 'nrg': 72, 'res': 73},
        'types': ['Fighting'],
    },
    'Umbris': {
        'learnset': ['Headbutt','Ember','Dragon Rage','Wing Attack','Flamethrower','Metal Claw','Ancient Power','Dark Pulse','Fly','Dragon Pulse','Solar Beam'],
        'stats': {'hp': 110, 'spd': 70, 'atk': 83, 'def': 87, 'nrg': 114, 'res': 66},
        'types': ['Dragon', 'Dark'],
    },
    'Spectrability': {
        'learnset': ['Astonish','Confusion','Feint Attack','Shadow Ball','Psybeam','Dark Pulse','Psychic'],
        'stats': {'hp': 25, 'spd': 65, 'atk': 15, 'def': 20, 'nrg': 47, 'res': 21},
        'types': ['Ghost'],
    },
    'Lockspectre': {
        'learnset': ['Astonish','Confusion','Feint Attack','Shadow Ball','Psybeam','Dark Pulse','Psychic','Aura Sphere','Ice Beam','Flamethrower','Thunderbolt'],
        'stats': {'hp': 70, 'spd': 50, 'atk': 30, 'def': 78, 'nrg': 125, 'res': 93},
        'types': ['Ghost', 'Psychic'],
    },
    'Salablinder': {
        'learnset': ['Dragon Rage','Cavitation Bubble (50 BP)','Cavitation Bubble (100 BP)'],
        'stats': {'hp': 52, 'spd': 20, 'atk': 48, 'def': 44, 'nrg': 22, 'res': 38},
        'types': ['Water', 'Dragon'],
    },
    'Hyd-dra': {
        'learnset': ['Dragon Rage','Cavitation Bubble (50 BP)','Cavitation Bubble (100 BP)','Tri Attack (1 Hit)','Dragon Pulse','Hydro Pump','Dragon Rush','Double-Edge'],
        'stats': {'hp': 107, 'spd': 48, 'atk': 51, 'def': 91, 'nrg': 86, 'res': 76},
        'types': ['Water', 'Dragon'],
    },
    'Poigon': {
        'learnset': ['Tackle','Poison Sting','Dragon Rage','Headbutt','Contaminate','Dragon Tail','Shadow Claw','Dragon Claw'],
        'stats': {'hp': 43, 'spd': 45, 'atk': 42, 'def': 30, 'nrg': 25, 'res': 38},
        'types': ['Dragon', 'Poison'],
    },
    'Skrimmrah': {
        'learnset': ['Tackle','Poison Sting','Dragon Rage','Headbutt','Contaminate','Dragon Tail','Shadow Claw','Dragon Claw','Dragon Pulse','Instant Injection','Dragon Rush'],
        'stats': {'hp': 90, 'spd': 87, 'atk': 98, 'def': 55, 'nrg': 53, 'res': 80},
        'types': ['Dragon', 'Poison'],
    },
    'Behero': {
        'learnset': ['Tackle','Take Down','Bullet Seed (1 Hit)','Bug Bite','Headbutt','Mega Punch','Rage','Zen Headbutt','First Blood'],
        'stats': {'hp': 38, 'spd': 41, 'atk': 55, 'def': 40, 'nrg': 15, 'res': 29},
        'types': ['Bug', 'Fighting'],
    },
    'Beetherion': {
        'learnset': ['Tackle','Take Down','Bullet Seed (1 Hit)','Bug Bite','Headbutt','Mega Punch','Rage','Zen Headbutt','First Blood','Power Gem','Giga Impact','Energy Ball'],
        'stats': {'hp': 65, 'spd': 85, 'atk': 95, 'def': 88, 'nrg': 52, 'res': 67},
        'types': ['Bug', 'Fighting'],
    },
    'Munstorm': {
        'learnset': ['Rapid Spin','Astonish','Quick Attack','Thunder Punch','Fire Punch','Ice Punch','Shadow Punch','Bind'],
        'stats': {'hp': 33, 'spd': 85, 'atk': 40, 'def': 22, 'nrg': 13, 'res': 18},
        'types': ['Terra', 'Ghost'],
    },
    'Pharavil': {
        'learnset': ['Rapid Spin','Astonish','Quick Attack','Thunder Punch','Fire Punch','Ice Punch','Shadow Punch','Bind','Shadow Claw','Night Shade','Stone Edge','Earthquake'],
        'stats': {'hp': 60, 'spd': 107, 'atk': 87, 'def': 68, 'nrg': 49, 'res': 63},
        'types': ['Terra', 'Ghost'],
    },
    'Oinkoin': {
        'learnset': ['Tackle','Bullet Seed (1 Hit)','Take Down'],
        'stats': {'hp': 55, 'spd': 25, 'atk': 31, 'def': 55, 'nrg': 5, 'res': 34},
        'types': ['Metal'],
    },
    'Moneyhog': {
        'learnset': ['Tackle','Bullet Seed (1 Hit)','Take Down','Double-Edge','Rage'],
        'stats': {'hp': 80, 'spd': 38, 'atk': 67, 'def': 65, 'nrg': 10, 'res': 56},
        'types': ['Metal'],
    },
    'Swinance': {
        'learnset': ['Tackle','Bullet Seed (1 Hit)','Take Down','Double-Edge','Rage','Seismic Stomp','Giga Impact'],
        'stats': {'hp': 135, 'spd': 62, 'atk': 85, 'def': 93, 'nrg': 15, 'res': 76},
        'types': ['Metal'],
    },
    'Lullafairy': {
        'learnset': ['Tackle','Confusion','Absorb','Mega Drain','Astonish','Giga Drain','Psychic','Moonblast','Starry Spiral'],
        'stats': {'hp': 55, 'spd': 84, 'atk': 52, 'def': 63, 'nrg': 88, 'res': 79},
        'types': ['Light', 'Cosmic'],
    },
    'Spookims': {
        'learnset': ['Tackle','Astonish','Headbutt','Slash','Shadow Claw'],
        'stats': {'hp': 34, 'spd': 35, 'atk': 42, 'def': 33, 'nrg': 36, 'res': 32},
        'types': ['Ghost'],
    },
    'Scarims': {
        'learnset': ['Tackle','Astonish','Headbutt','Slash','Shadow Claw','Giga Drain','Shadow Ball','Quick Attack','Cursed Chant','Psychic','Night Slash'],
        'stats': {'hp': 74, 'spd': 82, 'atk': 94, 'def': 68, 'nrg': 72, 'res': 68},
        'types': ['Ghost'],
    },
    'Honumb': {
        'learnset': ['Tackle','Gust','Headbutt','Bug Buzz','Slash','Take Down'],
        'stats': {'hp': 55, 'spd': 35, 'atk': 35, 'def': 34, 'nrg': 22, 'res': 34},
        'types': ['Basic'],
    },
    'Ursweet': {
        'learnset': ['Tackle','Gust','Headbutt','Bug Buzz','Slash','Take Down','Double-Edge'],
        'stats': {'hp': 100, 'spd': 65, 'atk': 85, 'def': 70, 'nrg': 62, 'res': 67},
        'types': ['Basic'],
    },
    'Teap': {
        'learnset': ['Tackle','Bubble Beam','Astonish'],
        'stats': {'hp': 33, 'spd': 15, 'atk': 27, 'def': 55, 'nrg': 36, 'res': 41},
        'types': ['Ghost', 'Basic'],
    },
    'Kettlerit': {
        'learnset': ['Tackle','Bubble Beam','Astonish','Feint Attack','Water Gun','Shadow Ball'],
        'stats': {'hp': 61, 'spd': 32, 'atk': 45, 'def': 72, 'nrg': 59, 'res': 57},
        'types': ['Ghost', 'Basic'],
    },
    'Potbrawler': {
        'learnset': ['Tackle','Bubble Beam','Astonish','Feint Attack','Water Gun','Shadow Ball','Shadow Punch','Aura Sphere','Hydro Pump','First Blood','Ice Punch','Fire Punch','Thunder Punch'],
        'stats': {'hp': 82, 'spd': 50, 'atk': 93, 'def': 88, 'nrg': 67, 'res': 72},
        'types': ['Ghost', 'Fighting'],
    },
    'Pheral': {
        'learnset': ['Bash','Hidden Power','Feint Attack'],
        'stats': {'hp': 50, 'spd': 28, 'atk': 32, 'def': 37, 'nrg': 43, 'res': 36},
        'types': ['Terra', 'Light'],
    },
    'Avien': {
        'learnset': ['Peck','Gust','Psybeam','Wing Attack','Air Slash','Psychic','Fly'],
        'stats': {'hp': 15, 'spd': 70, 'atk': 31, 'def': 22, 'nrg': 44, 'res': 32},
        'types': ['Wind', 'Cosmic'],
    },
    'Ignititan': {
        'learnset': ['Ember','Bash','Stone Edge','Fire Punch','Lava Plume','Flare Blitz','Giga Impact','Gravity Well','Earthquake','Solar Beam'],
        'stats': {'hp': 125, 'spd': 35, 'atk': 115, 'def': 85, 'nrg': 90, 'res': 75},
        'types': ['Fire', 'Metal'],
        'gender': 'Genderless'
    },
    'Kindite': {
        'learnset': ['Tackle','Ember','Astonish','Quick Attack'],
        'stats': {'hp': 27, 'spd': 30, 'atk': 29, 'def': 33, 'nrg': 55, 'res': 46},
        'types': ['Fire'],
    },
    'Sizzlit': {
        'learnset': ['Tackle','Ember','Astonish','Quick Attack','Flamethrower','Take Down','Magma Glob'],
        'stats': {'hp': 46, 'spd': 60, 'atk': 32, 'def': 43, 'nrg': 77, 'res': 72},
        'types': ['Fire'],
    },
    'Magmantle': {
        'learnset': ['Tackle','Ember','Astonish','Quick Attack','Flamethrower','Take Down','Magma Glob','Extreme Speed','Flare Blitz','Dark Pulse','Fire Blast'],
        'stats': {'hp': 65, 'spd': 80, 'atk': 55, 'def': 60, 'nrg': 93, 'res': 102},
        'types': ['Fire', 'Dark'],
    },
    'Ribbomb': {
        'learnset': ['Bash','Bubble','Forceful Bash'],
        'stats': {'hp': 22, 'spd': 88, 'atk': 22, 'def': 18, 'nrg': 42, 'res': 28},
        'types': ['Water', 'Poison'],
    },
    'Frodiary': {
        'learnset': ['Bash','Bubble','Forceful Bash','Bubble Beam','Present (40 BP)','Present (80 BP)','Present (120 BP)','Cavitation Bubble (50 BP)','Cavitation Bubble (100 BP)','Double-Edge','Self-Destruct'],
        'stats': {'hp': 35, 'spd': 79, 'atk': 52, 'def': 42, 'nrg': 69, 'res': 53},
        'types': ['Water', 'Poison'],
    },
    'Detoadnate': {
        'learnset': ['Bash','Bubble','Forceful Bash','Bubble Beam','Present (40 BP)','Present (80 BP)','Present (120 BP)','Cavitation Bubble (50 BP)','Cavitation Bubble (100 BP)','Double-Edge','Self-Destruct','Rage','Water Gun','Hydro Pump','Explosion'],
        'stats': {'hp': 68, 'spd': 72, 'atk': 79, 'def': 67, 'nrg': 95, 'res': 74},
        'types': ['Water', 'Poison'],
    },
    'Pheracle': {
        'learnset': ['Bash','Hidden Power','Feint Attack','Psychic','Weather Ball (50 BP)','Weather Ball (100 BP)','Mist Ball','Ancient Power','Power Gem'],
        'stats': {'hp': 92, 'spd': 55, 'atk': 48, 'def': 86, 'nrg': 75, 'res': 105},
        'types': ['Terra', 'Light'],
    },
    'Snik': {
        'learnset': ['Bash','Poison Sting','Bug Bite'],
        'stats': {'hp': 38, 'spd': 42, 'atk': 45, 'def': 38, 'nrg': 30, 'res': 37},
        'types': ['Bug'],
    },
    'Seren': {
        'learnset': ['Bash','Poison Sting','Bug Bite','Bug Buzz','Air Slash','Fly','Slash','Dragon Tail'],
        'stats': {'hp': 50, 'spd': 92, 'atk': 72, 'def': 55, 'nrg': 36, 'res': 55},
        'types': ['Bug', 'Dragon'],
    },
    'Secton': {
        'learnset': ['Bash','Poison Sting','Bug Bite','Bug Buzz','Air Slash','Fly','Slash','Dragon Tail','Double-Edge','Dragon Pulse','Dragon Rush','Extreme Speed','Light-Speed'],
        'stats': {'hp': 75, 'spd': 117, 'atk': 100, 'def': 87, 'nrg': 54, 'res': 87},
        'types': ['Bug', 'Dragon'],
    },
    'Florafluff': {
        'learnset': ['Absorb','Forceful Bash','Gust','Bullet Seed (1 Hit)','Mega Drain','Wing Attack','Razor Leaf','Giga Drain','Fly','Double-Edge','Solar Beam'],
        'stats': {'hp': 58, 'spd': 92, 'atk': 49, 'def': 63, 'nrg': 69, 'res': 69},
        'types': ['Grass', 'Wind'],
    },
    'Chambrr': {
        'learnset': ['Bash','Ice Punch','Rage','Powder Snow','Metal Claw','Ice Fang','Shadow Ball','Frost Breath','Hidden Power','Ice Beam','Tri Attack (1 Hit)','Ice Shard'],
        'stats': {'hp': 77, 'spd': 33, 'atk': 93, 'def': 83, 'nrg': 72, 'res': 81},
        'types': ['Ice', 'Metal'],
    },
    'Lyxic': {
        'learnset': ['Bash','Scratch','Bite'],
        'stats': {'hp': 32, 'spd': 44, 'atk': 42, 'def': 32, 'nrg': 20, 'res': 22},
        'types': ['Basic', 'Dark'],
    },
    'Prowlyx': {
        'learnset': ['Bash','Scratch','Bite','Slash','Metal Claw'],
        'stats': {'hp': 45, 'spd': 77, 'atk': 68, 'def': 52, 'nrg': 32, 'res': 39},
        'types': ['Basic', 'Dark'],
    },
    'Miscrelyx': {
        'learnset': ['Bash','Scratch','Bite','Slash','Metal Claw','Buzzkill (1 Hit)','Shadow Claw','Hidden Power','Night Slash'],
        'stats': {'hp': 68, 'spd': 105, 'atk': 93, 'def': 61, 'nrg': 60, 'res': 61},
        'types': ['Basic', 'Dark'],
    },
    'Crimortar': {
        'learnset': ['Ember','Quick Attack','Self-Destruct','Flamethrower','Magma Glob'],
        'stats': {'hp': 35, 'spd': 30, 'atk': 32, 'def': 24, 'nrg': 51, 'res': 46},
        'types': ['Fire', 'Terra'],
    },
    'Outlannon': {
        'learnset': ['Ember','Quick Attack','Self-Destruct','Flamethrower','Magma Glob','Explosion','Fire Blast','Flare Blitz','Hyper Beam','Lava Plume'],
        'stats': {'hp': 68, 'spd': 50, 'atk': 44, 'def': 72, 'nrg': 101, 'res': 112},
        'types': ['Fire', 'Terra'],
    },
    'Jarantula': {
        'learnset': ['Tackle','Bug Bite','Feint Attack','Astonish','Night Slash','Contaminate','Bind','Quick Attack','Instant Injection','Water Gun','Bug Buzz','Zen Headbutt'],
        'stats': {'hp': 65, 'spd': 50, 'atk': 85, 'def': 82, 'nrg': 80, 'res': 72},
        'types': ['Bug', 'Poison'],
    },
    'Maltion': {
        'learnset': ['Peck','Gust','Psybeam','Wing Attack','Air Slash','Psychic','Fly','Zen Headbutt','Collision Course','Hidden Power'],
        'stats': {'hp': 51, 'spd': 88, 'atk': 55, 'def': 58, 'nrg': 93, 'res': 79},
        'types': ['Wind', 'Cosmic'],
    },
    'Lucifyce': {
        'learnset': ['Headbutt','Bite','Ice Fang','Ice Punch','Crunch','Take Down','Aurora Beam','Feint Attack','Frost Breath','Double-Edge','Ice Shard'],
        'stats': {'hp': 70, 'spd': 82, 'atk': 102, 'def': 62, 'nrg': 72, 'res': 62},
        'types': ['Ice', 'Dark'],
    },
    'Solareign': {
        'learnset': ['Nuzzle','Absorb','Bash','Mega Drain','Forceful Bash','Aurora Beam','Giga Drain','Take Down','Razor Leaf','Solar Beam'],
        'stats': {'hp': 84, 'spd': 80, 'atk': 54, 'def': 60, 'nrg': 91, 'res': 68},
        'types': ['Light', 'Grass'],
    },
    'Minnart': {
        'learnset': ['Bash','Bubble','Feint Attack'],
        'stats': {'hp': 15, 'spd': 70, 'atk': 59, 'def': 18, 'nrg': 44, 'res': 13},
        'types': ['Water'],
    },
    'Sperish': {
        'learnset': ['Bash','Bubble','Feint Attack','Bubble Beam','Quick Attack'],
        'stats': {'hp': 30, 'spd': 85, 'atk': 82, 'def': 39, 'nrg': 62, 'res': 33},
        'types': ['Water'],
    },
    'Harfin': {
        'learnset': ['Bash','Bubble','Feint Attack','Bubble Beam','Quick Attack','Water Gun','Night Slash','Air Slash','Aura Sphere','Dragon Tail','Hydro Pump'],
        'stats': {'hp': 55, 'spd': 102, 'atk': 98, 'def': 61, 'nrg': 87, 'res': 56},
        'types': ['Water'],
    },
    'Atlantitan': {
        'learnset': ['Bash','Water Gun','Mega Punch','Cavitation Bubble (50 BP)','Cavitation Bubble (100 BP)','Bubble Beam','Giga Impact','Gravity Well','Earthquake','Hydro Pump'],
        'stats': {'hp': 125, 'spd': 35, 'atk': 75, 'def': 85, 'nrg': 90, 'res': 115},
        'types': ['Water', 'Metal'],
        'gender': 'Genderless'
    },
    'Kousai': {
        'learnset': ['Nuzzle','Bite','Headbutt','Fly','Crunch','Air Slash'],
        'stats': {'hp': 18, 'spd': 64, 'atk': 38, 'def': 42, 'nrg': 32, 'res': 34},
        'types': ['Dark', 'Wind'],
    },
    'Ovelin': {
        'learnset': ['Tackle','Ember'],
        'stats': {'hp': 25, 'spd': 40, 'atk': 28, 'def': 46, 'nrg': 35, 'res': 46},
        'types': ['Metal', 'Fire'],
    },
    'Stolem': {
        'learnset': ['Tackle','Ember','Metal Claw','Flare Blitz','Magma Glob'],
        'stats': {'hp': 42, 'spd': 65, 'atk': 52, 'def': 76, 'nrg': 38, 'res': 76},
        'types': ['Metal', 'Fire'],
    },
    'Golven': {
        'learnset': ['Tackle','Ember','Metal Claw','Flare Blitz','Magma Glob','Ancient Power','Lava Plume','Explosion','Fire Punch','Ice Punch','Thunder Punch'],
        'stats': {'hp': 65, 'spd': 55, 'atk': 80, 'def': 102, 'nrg': 56, 'res': 102},
        'types': ['Metal', 'Fire'],
    },
    'Rabbini': {
        'learnset': ['Rapid Spin','Confusion','Bite'],
        'stats': {'hp': 24, 'spd': 47, 'atk': 24, 'def': 29, 'nrg': 57, 'res': 37},
        'types': ['Psychic'],
    },
    'Rabician': {
        'learnset': ['Rapid Spin','Confusion','Bite','Psybeam','Zen Headbutt'],
        'stats': {'hp': 44, 'spd': 67, 'atk': 44, 'def': 49, 'nrg': 77, 'res': 67},
        'types': ['Psychic'],
    },
    'Alchare': {
        'learnset': ['Rapid Spin','Confusion','Bite','Psybeam','Zen Headbutt','Cursed Chant','Psychic'],
        'stats': {'hp': 54, 'spd': 87, 'atk': 54, 'def': 59, 'nrg': 117, 'res': 87},
        'types': ['Psychic'],
    },
    'Tadbowl': {
        'learnset': ['Bash','Bubble','Water Gun','Bubble Beam'],
        'stats': {'hp': 64, 'spd': 28, 'atk': 20, 'def': 41, 'nrg': 32, 'res': 42},
        'types': ['Water', 'Cosmic'],
    },
    'Ramphibien': {
        'learnset': ['Bash','Bubble','Water Gun','Bubble Beam','Bind','Take Down','Cavitation Bubble (50 BP)','Cavitation Bubble (100 BP)','Starry Spiral','Flamethrower','Hydro Pump'],
        'stats': {'hp': 140, 'spd': 44, 'atk': 52, 'def': 78, 'nrg': 63, 'res': 72},
        'types': ['Water', 'Cosmic'],
    },
    'Cromite': {
        'learnset': ['Forceful Bash','Bubble','Headbutt','Bubble Beam'],
        'stats': {'hp': 31, 'spd': 55, 'atk': 49, 'def': 49, 'nrg': 19, 'res': 22},
        'types': ['Terra', 'Water'],
    },
    'Carapinch': {
        'learnset': ['Scratch','Poison Sting','Astonish','Bind','Bug Bite','Headbutt','Instant Injection'],
        'stats': {'hp': 27, 'spd': 53, 'atk': 41, 'def': 41, 'nrg': 10, 'res': 30},
        'types': ['Poison'],
    },
    'Koutsuki': {
        'learnset': ['Nuzzle','Bite','Headbutt','Fly','Crunch','Air Slash','Wing Attack','Giga Drain','Slash'],
        'stats': {'hp': 40, 'spd': 83, 'atk': 61, 'def': 72, 'nrg': 50, 'res': 49},
        'types': ['Dark', 'Wind'],
    },
    'Edgehog': {
        'learnset': ['Bash','Scratch','Quick Attack','Slash','Crunch'],
        'stats': {'hp': 34, 'spd': 66, 'atk': 62, 'def': 12, 'nrg': 34, 'res': 9},
        'types': ['Dark'],
    },
    'Hedgelord': {
        'learnset': ['Bash','Scratch','Quick Attack','Slash','Crunch','Night Slash','Mega Punch','Metal Claw','Dark Pulse','Double-Edge','Giga Impact'],
        'stats': {'hp': 56, 'spd': 102, 'atk': 118, 'def': 44, 'nrg': 82, 'res': 40},
        'types': ['Dark'],
    },
    'Dalladoodle': {
        'learnset': ['Forceful Bash','Bite','Confusion','Psybeam','Aurora Beam','Zen Headbutt','Moonblast','Psychic'],
        'stats': {'hp': 71, 'spd': 71, 'atk': 60, 'def': 72, 'nrg': 92, 'res': 80},
        'types': ['Psychic', 'Light'],
    },
    'Kitsakura': {
        'learnset': ['Tackle','Absorb','Forceful Bash','Razor Leaf','Bite','Mega Drain','Psybeam','Energy Ball'],
        'stats': {'hp': 30, 'spd': 40, 'atk': 38, 'def': 28, 'nrg': 38, 'res': 28},
        'types': ['Light', 'Psychic'],
    },
    'Aizune (Rose)': {
        'learnset': ['Tackle','Absorb','Forceful Bash','Razor Leaf','Bite','Mega Drain','Psybeam','Energy Ball','Fire Fang','Light-Speed','Fire Punch','Flare Blitz','Solar Beam'],
        'stats': {'hp': 70, 'spd': 105, 'atk': 95, 'def': 50, 'nrg': 70, 'res': 60},
        'types': ['Light', 'Fire'],
    },
    'Flyden': {
        'learnset': ['Gust','Nuzzle','Bug Bite','Wing Attack'],
        'stats': {'hp': 31, 'spd': 57, 'atk': 23, 'def': 18, 'nrg': 41, 'res': 21},
        'types': ['Wind', 'Electric'],
    },
    'Pixbee': {
        'learnset': ['Gust','Nuzzle','Bug Bite','Wing Attack','Bug Buzz','Electro Ball (40 BP)','Electro Ball (60 BP)','Electro Ball (80 BP)','Electro Ball (120 BP)','Electro Ball (150 BP)','Discharge','Thunderbolt'],
        'stats': {'hp': 51, 'spd': 90, 'atk': 59, 'def': 54, 'nrg': 93, 'res': 64},
        'types': ['Wind', 'Electric'],
    },
    'Clovurr': {
        'learnset': ['Scratch','Quick Attack','Bite','Energy Ball','Razor Leaf'],
        'stats': {'hp': 44, 'spd': 37, 'atk': 27, 'def': 34, 'nrg': 21, 'res': 38},
        'types': ['Grass'],
        'gender': 'Female'
    },
    'Botanicat': {
        'learnset': ['Scratch','Quick Attack','Bite','Energy Ball','Razor Leaf','Giga Drain','Slash','Double-Edge','Leaf Storm'],
        'stats': {'hp': 78, 'spd': 86, 'atk': 62, 'def': 74, 'nrg': 59, 'res': 78},
        'types': ['Grass'],
        'gender': 'Female'
    },
    'Elekity': {
        'learnset': ['Scratch','Quick Attack','Bite','Electro Ball (40 BP)','Electro Ball (60 BP)','Electro Ball (80 BP)','Electro Ball (120 BP)','Electro Ball (150 BP)','Discharge','Take Down'],
        'stats': {'hp': 24, 'spd': 66, 'atk': 37, 'def': 22, 'nrg': 21, 'res': 31},
        'types': ['Electric'],
        'gender': 'Male'
    },
    'Tesline': {
        'learnset': ['Scratch','Quick Attack','Bite','Electro Ball (40 BP)','Electro Ball (60 BP)','Electro Ball (80 BP)','Electro Ball (120 BP)','Electro Ball (150 BP)','Discharge','Take Down','Thunder Fang','Light-Speed','Thunderbolt','Slash','Double-Edge','Volt Tackle'],
        'stats': {'hp': 67, 'spd': 104, 'atk': 79, 'def': 63, 'nrg': 56, 'res': 68},
        'types': ['Electric'],
        'gender': 'Male'
    },
    'Wanderwood': {
        'learnset': ['Forceful Bash','Absorb','Astonish','Razor Leaf','Mega Drain','Shadow Ball','Giga Drain','Dream Eater','Double-Edge','Cursed Chant','Night Shade','Leaf Storm'],
        'stats': {'hp': 62, 'spd': 45, 'atk': 55, 'def': 115, 'nrg': 80, 'res': 105},
        'types': ['Ghost', 'Grass'],
    },
    'Phytotitan': {
        'learnset': ['Absorb','Bash','Bullet Seed (1 Hit)','Razor Leaf','Metal Claw','Giga Drain','Giga Impact','Gravity Well','Earthquake','Leaf Storm'],
        'stats': {'hp': 125, 'spd': 35, 'atk': 90, 'def': 75, 'nrg': 115, 'res': 85},
        'types': ['Grass', 'Metal'],
        'gender': 'Genderless'
    },
    'Amenby': {
        'learnset': ['Scratch','Bubble','Bug Bite','Quick Attack','Mega Drain','Bubble Beam'],
        'stats': {'hp': 34, 'spd': 40, 'atk': 30, 'def': 26, 'nrg': 41, 'res': 26},
        'types': ['Bug', 'Water'],
    },
    'Gerridirah': {
        'learnset': ['Scratch','Bubble','Bug Bite','Quick Attack','Mega Drain','Bubble Beam','Bug Buzz','Slash','Night Slash','Cavitation Bubble (50 BP)','Cavitation Bubble (100 BP)','Hydro Pump'],
        'stats': {'hp': 61, 'spd': 90, 'atk': 91, 'def': 66, 'nrg': 71, 'res': 66},
        'types': ['Bug', 'Water'],
    },
    'Magmarva': {
        'learnset': ['Tackle','Ember','Forceful Bash','Rage','Bug Bite'],
        'stats': {'hp': 28, 'spd': 32, 'atk': 42, 'def': 19, 'nrg': 28, 'res': 34},
        'types': ['Fire', 'Bug'],
    },
    'Pupagma': {
        'learnset': ['Tackle','Ember','Forceful Bash','Rage','Bug Bite','Take Down','Lava Plume'],
        'stats': {'hp': 56, 'spd': 30, 'atk': 60, 'def': 81, 'nrg': 35, 'res': 78},
        'types': ['Fire', 'Bug'],
    },
    'Stingferno': {
        'learnset': ['Tackle','Ember','Forceful Bash','Rage','Bug Bite','Take Down','Lava Plume','Bug Buzz','Fire Punch','Flamethrower','Instant Injection','Fire Blast','Flare Blitz'],
        'stats': {'hp': 73, 'spd': 85, 'atk': 93, 'def': 44, 'nrg': 84, 'res': 68},
        'types': ['Fire', 'Bug'],
    },
    'Tarabi': {
        'learnset': ['Tackle','Scratch','Bite','Bullet Seed (1 Hit)','Feint Attack','Take Down'],
        'stats': {'hp': 60, 'spd': 54, 'atk': 34, 'def': 30, 'nrg': 14, 'res': 27},
        'types': ['Basic'],
    },
    'Tanukama': {
        'learnset': ['Tackle','Scratch','Bite','Bullet Seed (1 Hit)','Feint Attack','Take Down','Slash','Night Slash','Double-Edge','Giga Impact'],
        'stats': {'hp': 132, 'spd': 47, 'atk': 75, 'def': 73, 'nrg': 32, 'res': 71},
        'types': ['Basic'],
    },
    'Cachick': {
        'learnset': ['Peck','Scratch','Absorb','Gust','Bullet Seed (1 Hit)','Wing Attack'],
        'stats': {'hp': 36, 'spd': 40, 'atk': 41, 'def': 44, 'nrg': 24, 'res': 38},
        'types': ['Wind', 'Grass'],
    },
    'Hawctus': {
        'learnset': ['Peck','Scratch','Absorb','Gust','Bullet Seed (1 Hit)','Wing Attack','Buzzkill (1 Hit)','Slash','Giga Drain','Fly','Energy Ball','Air Slash','Double-Edge'],
        'stats': {'hp': 80, 'spd': 75, 'atk': 85, 'def': 92, 'nrg': 43, 'res': 81},
        'types': ['Wind', 'Grass'],
    },
    'Egglet': {
        'learnset': ['Bash','Peck','Forceful Bash','Headbutt'],
        'stats': {'hp': 50, 'spd': 30, 'atk': 37, 'def': 55, 'nrg': 10, 'res': 42},
        'types': ['Wind', 'Basic'],
    },
    'Scrambird': {
        'learnset': ['Bash','Peck','Forceful Bash','Headbutt','Gust','Rage','Wing Attack'],
        'stats': {'hp': 73, 'spd': 45, 'atk': 63, 'def': 80, 'nrg': 24, 'res': 65},
        'types': ['Wind', 'Basic'],
    },
    'Toritoregg': {
        'learnset': ['Bash','Peck','Forceful Bash','Headbutt','Gust','Rage','Wing Attack','Air Slash','Take Down','Fly','Double-Edge'],
        'stats': {'hp': 135, 'spd': 70, 'atk': 83, 'def': 61, 'nrg': 45, 'res': 61},
        'types': ['Wind', 'Basic'],
    },
    'Vampyro': {
        'learnset': ['Ember','Bite','Absorb','Astonish','Feint Attack'],
        'stats': {'hp': 27, 'spd': 60, 'atk': 50, 'def': 18, 'nrg': 43, 'res': 18},
        'types': ['Fire', 'Dark'],
    },
    'Nosfirno': {
        'learnset': ['Ember','Bite','Absorb','Astonish','Feint Attack','Mega Drain','Wing Attack','Fire Fang','Giga Drain','Crunch'],
        'stats': {'hp': 49, 'spd': 77, 'atk': 71, 'def': 44, 'nrg': 65, 'res': 44},
        'types': ['Fire', 'Dark'],
    },
    'Avalucard': {
        'learnset': ['Ember','Bite','Absorb','Astonish','Feint Attack','Mega Drain','Wing Attack','Fire Fang','Giga Drain','Crunch','Lava Plume','Flamethrower','Cursed Chant','Dark Pulse','Flare Blitz'],
        'stats': {'hp': 80, 'spd': 65, 'atk': 93, 'def': 53, 'nrg': 91, 'res': 80},
        'types': ['Fire', 'Dark'],
    },
    'Goudrowsy': {
        'learnset': ['Bash','Rage','Powder Snow','Headbutt','Bite'],
        'stats': {'hp': 102, 'spd': 23, 'atk': 20, 'def': 23, 'nrg': 20, 'res': 10},
        'types': ['Basic'],
    },
    'Fromouda': {
        'learnset': ['Bash','Rage','Powder Snow','Headbutt','Bite','Contaminate','Mega Punch','Double-Edge'],
        'stats': {'hp': 205, 'spd': 51, 'atk': 50, 'def': 52, 'nrg': 32, 'res': 62},
        'types': ['Basic'],
    },
    'Mariposun': {
        'learnset': ['Gust','Bug Bite','Astonish','Wing Attack','Bug Buzz','Air Slash','Ancient Power','Hidden Power','Power Gem','Solar Beam','Earthquake'],
        'stats': {'hp': 67, 'spd': 70, 'atk': 48, 'def': 72, 'nrg': 85, 'res': 91},
        'types': ['Terra', 'Wind'],
    },
    'Duram': {
        'learnset': ['Bash','Bite','Rage','Headbutt'],
        'stats': {'hp': 50, 'spd': 30, 'atk': 45, 'def': 45, 'nrg': 16, 'res': 40},
        'types': ['Terra'],
    },
    'Ramprant': {
        'learnset': ['Bash','Bite','Rage','Headbutt','Slash','Crunch','Take Down','Ancient Power'],
        'stats': {'hp': 80, 'spd': 60, 'atk': 75, 'def': 65, 'nrg': 22, 'res': 50},
        'types': ['Terra'],
    },
    'Savagaur': {
        'learnset': ['Bash','Bite','Rage','Headbutt','Slash','Crunch','Take Down','Ancient Power','Dragon Tail','Seismic Stomp','Dragon Claw','Earthquake','Dragon Rush'],
        'stats': {'hp': 105, 'spd': 71, 'atk': 100, 'def': 88, 'nrg': 33, 'res': 70},
        'types': ['Terra', 'Dragon'],
    },
    'Cactikid': {
        'learnset': ['Bash','Scratch','Absorb','Rage','Bullet Seed (1 Hit)'],
        'stats': {'hp': 53, 'spd': 26, 'atk': 49, 'def': 40, 'nrg': 20, 'res': 20},
        'types': ['Grass', 'Fighting'],
    },
    'Cactadore': {
        'learnset': ['Bash','Scratch','Absorb','Rage','Bullet Seed (1 Hit)','Feint Attack','Mega Drain','Headbutt'],
        'stats': {'hp': 80, 'spd': 44, 'atk': 77, 'def': 64, 'nrg': 34, 'res': 49},
        'types': ['Grass', 'Fighting'],
    },
    'Cactilibre': {
        'learnset': ['Bash','Scratch','Absorb','Rage','Bullet Seed (1 Hit)','Feint Attack','Mega Drain','Headbutt','Fire Punch','Aura Sphere','Mega Punch','Double-Edge'],
        'stats': {'hp': 88, 'spd': 66, 'atk': 100, 'def': 75, 'nrg': 48, 'res': 87},
        'types': ['Grass', 'Fighting'],
    },
    'Braybug': {
        'learnset': ['Tackle','Quick Attack','Bug Bite','Headbutt'],
        'stats': {'hp': 44, 'spd': 30, 'atk': 40, 'def': 30, 'nrg': 26, 'res': 30},
        'types': ['Bug', 'Basic'],
    },
    'Equoon': {
        'learnset': ['Tackle','Quick Attack','Bug Bite','Headbutt','Rage','Take Down'],
        'stats': {'hp': 61, 'spd': 46, 'atk': 60, 'def': 59, 'nrg': 54, 'res': 50},
        'types': ['Bug', 'Basic'],
    },
    'Mulegant': {
        'learnset': ['Tackle','Quick Attack','Bug Bite','Headbutt','Rage','Take Down','Wing Attack','Slash','Bug Buzz','Fly','Night Slash','Double-Edge','Giga Impact'],
        'stats': {'hp': 80, 'spd': 72, 'atk': 88, 'def': 78, 'nrg': 71, 'res': 66},
        'types': ['Bug', 'Wind'],
    },
    'Growdy': {
        'learnset': ['Scratch','Quick Attack','Bite','Feint Attack','Slash','Ice Fang','Ice Shard'],
        'stats': {'hp': 51, 'spd': 55, 'atk': 54, 'def': 24, 'nrg': 12, 'res': 21},
        'types': ['Ice'],
    },
    'Poladin': {
        'learnset': ['Scratch','Quick Attack','Bite','Feint Attack','Slash','Ice Fang','Ice Shard','Metal Claw','Night Slash','Ice Punch','Double-Edge','Aura Sphere','First Blood','Giga Impact'],
        'stats': {'hp': 109, 'spd': 43, 'atk': 125, 'def': 76, 'nrg': 39, 'res': 54},
        'types': ['Ice', 'Fighting'],
    },
    'Sketchop': {
        'learnset': ['Tackle','Bite','Tackle','Fly','Bash','Mega Punch','Fire Punch','Ice Punch','Thunder Punch','Scratch','Gust','Wing Attack','Bind','Headbutt','Forceful Bash','Take Down','Double-Edge','Poison Sting','Bite','Ember','Water Gun','Bug Bite','Psybeam','Bubble Beam','Aurora Beam','Absorb','Razor Leaf','Dragon Rage','Earthquake','Confusion','Psychic','Quick Attack','Rage','Dream Eater','Bubble','Ancient Power','Mist Ball','Astonish','Bullet Seed (1 Hit)','Aura Sphere','Night Slash','Air Slash','Dragon Pulse','Dragon Rush','Power Gem','Discharge','Boomburst','Zen Headbutt','Fire Blast','Feint Attack','Extreme Speed','Energy Ball','Electro Ball (40 BP)','Electro Ball (60 BP)','Electro Ball (80 BP)','Electro Ball (120 BP)','Electro Ball (150 BP)','Flamethrower','Hydro Pump','Hyper Beam','Solar Beam','Frost Breath','Giga Drain','Hidden Power','Giga Impact','Fire Fang','Ice Beam','Mega Drain','Metal Claw','Ice Fang','Lava Plume','Leaf Storm','Peck','Night Shade','Moonblast','Nuzzle','Present (40 BP)','Present (80 BP)','Present (120 BP)','Dragon Tail','Slash','Stone Edge','Shadow Ball','Shadow Claw','Thunderbolt','Tri Attack (1 Hit)','Powder Snow','Weather Ball (50 BP)','Weather Ball (100 BP)','Dragon Claw','Volt Tackle','Rapid Spin','Crunch','Shadow Punch','Flare Blitz','Dark Pulse','Bug Buzz','Ice Shard','Thunder Fang','Instant Injection','Light-Speed','First Blood','Cavitation Bubble (50 BP)','Cavitation Bubble (100 BP)','Contaminate','Gravity Well','Buzzkill (1 Hit)','Collision Course','Starry Spiral','Magma Glob','Seismic Stomp','Cursed Chant'],
        'stats': {'hp': 35, 'spd': 35, 'atk': 28, 'def': 30, 'nrg': 28, 'res': 30},
        'types': ['Basic'],
    },
    'Chromago': {
        'learnset': ['Tackle','Bite','Tri Attack (1 Hit)','Take Down','Hidden Power','Tackle','Fly','Bash','Mega Punch','Fire Punch','Ice Punch','Thunder Punch','Scratch','Gust','Wing Attack','Bind','Headbutt','Forceful Bash','Take Down','Double-Edge','Poison Sting','Bite','Ember','Water Gun','Bug Bite','Psybeam','Bubble Beam','Aurora Beam','Absorb','Razor Leaf','Dragon Rage','Earthquake','Confusion','Psychic','Quick Attack','Rage','Dream Eater','Bubble','Ancient Power','Mist Ball','Astonish','Bullet Seed (1 Hit)','Aura Sphere','Night Slash','Air Slash','Dragon Pulse','Dragon Rush','Power Gem','Discharge','Boomburst','Zen Headbutt','Fire Blast','Feint Attack','Extreme Speed','Energy Ball','Electro Ball (40 BP)','Electro Ball (60 BP)','Electro Ball (80 BP)','Electro Ball (120 BP)','Electro Ball (150 BP)','Flamethrower','Hydro Pump','Hyper Beam','Solar Beam','Frost Breath','Giga Drain','Hidden Power','Giga Impact','Fire Fang','Ice Beam','Mega Drain','Metal Claw','Ice Fang','Lava Plume','Leaf Storm','Peck','Night Shade','Moonblast','Nuzzle','Present (40 BP)','Present (80 BP)','Present (120 BP)','Dragon Tail','Slash','Stone Edge','Shadow Ball','Shadow Claw','Thunderbolt','Tri Attack (1 Hit)','Powder Snow','Weather Ball (50 BP)','Weather Ball (100 BP)','Dragon Claw','Volt Tackle','Rapid Spin','Crunch','Shadow Punch','Flare Blitz','Dark Pulse','Bug Buzz','Ice Shard','Thunder Fang','Instant Injection','Light-Speed','First Blood','Cavitation Bubble (50 BP)','Cavitation Bubble (100 BP)','Contaminate','Gravity Well','Buzzkill (1 Hit)','Collision Course','Starry Spiral','Magma Glob','Seismic Stomp','Cursed Chant'],
        'stats': {'hp': 74, 'spd': 70, 'atk': 59, 'def': 59, 'nrg': 59, 'res': 59},
        'types': ['Basic'],
    },
    'Huskot': {
        'learnset': ['Bash','Astonish','Dragon Rage','Razor Leaf','Water Gun','Headbutt'],
        'stats': {'hp': 40, 'spd': 31, 'atk': 22, 'def': 49, 'nrg': 33, 'res': 36},
        'types': ['Grass'],
    },
    'Snapalm': {
        'learnset': ['Bash','Astonish','Dragon Rage','Razor Leaf','Water Gun','Headbutt','Bite','Mega Drain','Crunch'],
        'stats': {'hp': 64, 'spd': 35, 'atk': 49, 'def': 68, 'nrg': 68, 'res': 58},
        'types': ['Dragon', 'Grass'],
    },
    'Cocolossus': {
        'learnset': ['Bash','Astonish','Dragon Rage','Razor Leaf','Water Gun','Headbutt','Bite','Mega Drain','Crunch','Giga Drain','Leaf Storm','Dragon Rush'],
        'stats': {'hp': 88, 'spd': 83, 'atk': 68, 'def': 80, 'nrg': 61, 'res': 77},
        'types': ['Dragon', 'Grass'],
    },
    'Phesquerade': {
        'learnset': ['Peck','Gust','Confusion','Wing Attack','Slash','Zen Headbutt','Psychic','Air Slash','Aura Sphere','Double-Edge'],
        'stats': {'hp': 61, 'spd': 103, 'atk': 89, 'def': 59, 'nrg': 66, 'res': 58},
        'types': ['Psychic', 'Fighting'],
    },
    'Voltinch': {
        'learnset': ['Gust','Nuzzle','Quick Attack','Electro Ball (40 BP)','Electro Ball (60 BP)','Electro Ball (80 BP)','Electro Ball (120 BP)','Electro Ball (150 BP)','Wing Attack','Discharge','Fly'],
        'stats': {'hp': 20, 'spd': 60, 'atk': 33, 'def': 25, 'nrg': 50, 'res': 18},
        'types': ['Electric'],
    },
    'Galvant': {
        'learnset': ['Gust','Nuzzle','Quick Attack','Electro Ball (40 BP)','Electro Ball (60 BP)','Electro Ball (80 BP)','Electro Ball (120 BP)','Electro Ball (150 BP)','Wing Attack','Discharge','Fly','Air Slash','Metal Claw','Slash','Dragon Claw','Thunder Punch','Thunderbolt','Dragon Pulse','Light-Speed','Volt Tackle'],
        'stats': {'hp': 65, 'spd': 109, 'atk': 83, 'def': 50, 'nrg': 88, 'res': 56},
        'types': ['Electric', 'Dragon'],
    },
    'Silopsis': {
        'learnset': ['Tackle','Confusion','Water Gun','Bubble','Rapid Spin','Psybeam','Bubble Beam','Zen Headbutt','Psychic'],
        'stats': {'hp': 67, 'spd': 79, 'atk': 51, 'def': 68, 'nrg': 85, 'res': 75},
        'types': ['Water', 'Psychic'],
    },
    'Vacrunch': {
        'learnset': ['Bash','Absorb','Bite','Astonish','Water Gun','Mega Drain','Feint Attack','Shadow Ball'],
        'stats': {'hp': 48, 'spd': 20, 'atk': 21, 'def': 33, 'nrg': 65, 'res': 37},
        'types': ['Cosmic'],
    },
    'Bascurus': {
        'learnset': ['Bash','Absorb','Bite','Astonish','Water Gun','Mega Drain','Feint Attack','Shadow Ball','Night Shade','Double-Edge','Dark Pulse','Collision Course','Gravity Well','Starry Spiral'],
        'stats': {'hp': 80, 'spd': 45, 'atk': 50, 'def': 71, 'nrg': 135, 'res': 80},
        'types': ['Cosmic', 'Dark'],
    },
    'Velveal': {
        'learnset': ['Bite','Forceful Bash','Bind'],
        'stats': {'hp': 35, 'spd': 49, 'atk': 47, 'def': 30, 'nrg': 20, 'res': 41},
        'types': ['Fighting'],
    },
    'Samuring': {
        'learnset': ['Bite','Forceful Bash','Bind','Dragon Tail','Aura Sphere','Tri Attack (1 Hit)'],
        'stats': {'hp': 40, 'spd': 72, 'atk': 47, 'def': 56, 'nrg': 72, 'res': 60},
        'types': ['Fighting'],
    },
    'Shogong': {
        'learnset': ['Bite','Forceful Bash','Bind','Dragon Tail','Aura Sphere','Tri Attack (1 Hit)','Extreme Speed','Dragon Pulse','Boomburst'],
        'stats': {'hp': 80, 'spd': 78, 'atk': 57, 'def': 69, 'nrg': 94, 'res': 87},
        'types': ['Fighting', 'Dragon'],
    },
    'Mabiki (Warrior)': {
        'learnset': ['Bash','Absorb','Rage','Mega Drain','Mega Punch','Slash','Tackle','Headbutt','Take Down','Giga Drain','Quick Attack','First Blood','Rapid Spin'],
        'stats': {'hp': 90, 'spd': 80, 'atk': 110, 'def': 60, 'nrg': 20, 'res': 60},
        'types': ['Grass'],
    },
    'Mabiki (Shaman)': {
        'learnset': ['Bash','Absorb','Rage','Mega Drain','Mega Punch','Slash','Tackle','Headbutt','Take Down','Giga Drain','Quick Attack','Cursed Chant','Zen Headbutt'],
        'stats': {'hp': 70, 'spd': 65, 'atk': 30, 'def': 65, 'nrg': 80, 'res': 110},
        'types': ['Grass'],
    },
    'Mabiki (Archer)': {
        'learnset': ['Bash','Absorb','Rage','Mega Drain','Mega Punch','Slash','Tackle','Headbutt','Take Down','Giga Drain','Quick Attack','Hidden Power'],
        'stats': {'hp': 50, 'spd': 70, 'atk': 70, 'def': 55, 'nrg': 110, 'res': 65},
        'types': ['Grass'],
    },
    'Mabiki (Defender)': {
        'learnset': ['Bash','Absorb','Rage','Mega Drain','Mega Punch','Slash','Tackle','Headbutt','Take Down','Giga Drain','Quick Attack','Astonish'],
        'stats': {'hp': 110, 'spd': 55, 'atk': 70, 'def': 85, 'nrg': 25, 'res': 75},
        'types': ['Grass'],
    },
    'Aizune (Violet)': {
        'learnset': ['Tackle','Absorb','Forceful Bash','Razor Leaf','Bite','Mega Drain','Psybeam','Energy Ball','Shadow Punch','Light-Speed','Aurora Beam','Night Shade','Shadow Ball','Moonblast'],
        'stats': {'hp': 70, 'spd': 105, 'atk': 95, 'def': 50, 'nrg': 70, 'res': 60},
        'types': ['Light', 'Ghost'],
    }
}
const moveInfo = {
    'Tackle': {
        'name': 'Tackle',
        'type': 'Basic',
        'category': 'Physical',
        'power': 40
    },
    'Fly': {
        'name': 'Fly',
        'type': 'Wind',
        'category': 'Physical',
        'power': 90,
    },
    'Bash': {
        'name': 'Bash',
        'type': 'Basic',
        'category': 'Physical',
        'power': 40
    },
    'Mega Punch': {
        'name': 'Mega Punch',
        'type': 'Fighting',
        'category': 'Physical',
        'power': 80,
    },
    'Fire Punch': {
        'name': 'Fire Punch',
        'type': 'Fire',
        'category': 'Physical',
        'power': 75
    },
    'Ice Punch': {
        'name': 'Ice Punch',
        'type': 'Ice',
        'category': 'Physical',
        'power': 75
    },
    'Thunder Punch': {
        'name': 'Thunder Punch',
        'type': 'Electric',
        'category': 'Physical',
        'power': 75
    },
    'Scratch': {
        'name': 'Scratch',
        'type': 'Basic',
        'category': 'Physical',
        'power': 40
    },
    'Gust': {
        'name': 'Gust',
        'type': 'Wind',
        'category': 'Special',
        'power': 40
    },
    'Wing Attack': {
        'name': 'Wing Attack',
        'type': 'Wind',
        'category': 'Physical',
        'power': 60
    },
    'Bind': {
        'name': 'Bind',
        'type': 'Basic',
        'category': 'Physical',
        'power': 15
    },
    'Headbutt': {
        'name': 'Headbutt',
        'type': 'Basic',
        'category': 'Physical',
        'power': 70
    },
    'Forceful Bash': {
        'name': 'Forceful Bash',
        'type': 'Basic',
        'category': 'Physical',
        'power': 45
    },
    'Take Down': {
        'name': 'Take Down',
        'type': 'Basic',
        'category': 'Physical',
        'power': 90,
    },
    'Double-Edge': {
        'name': 'Double-Edge',
        'type': 'Basic',
        'category': 'Physical',
        'power': 120,
    },
    'Poison Sting': {
        'name': 'Poison Sting',
        'type': 'Poison',
        'category': 'Physical',
        'power': 50
    },
    'Bite': {
        'name': 'Bite',
        'type': 'Dark',
        'category': 'Physical',
        'power': 60
    },
    'Ember': {
        'name': 'Ember',
        'type': 'Fire',
        'category': 'Special',
        'power': 40
    },
    'Water Gun': {
        'name': 'Water Gun',
        'type': 'Water',
        'category': 'Special',
        'power': 40
    },
    'Bug Bite': {
        'name': 'Bug Bite',
        'type': 'Bug',
        'category': 'Physical',
        'power': 65
    },
    'Psybeam': {
        'name': 'Psybeam',
        'type': 'Psychic',
        'category': 'Special',
        'power': 65
    },
    'Bubble Beam': {
        'name': 'Bubble Beam',
        'type': 'Water',
        'category': 'Special',
        'power': 65
    },
    'Aurora Beam': {
        'name': 'Aurora Beam',
        'type': 'Light',
        'category': 'Special',
        'power': 65
    },
    'Absorb': {
        'name': 'Absorb',
        'type': 'Grass',
        'category': 'Special',
        'power': 20,
    },
    'Razor Leaf': {
        'name': 'Razor Leaf',
        'type': 'Grass',
        'category': 'Physical',
        'power': 55,
        'makesContact': false,
    },
    'Dragon Rage': {
        'name': 'Dragon Rage',
        'type': 'Dragon',
        'category': 'Special',
        'power': null,
        'setDamage': 40
    },
    'Earthquake': {
        'name': 'Earthquake',
        'type': 'Terra',
        'category': 'Physical',
        'power': 100,
        'makesContact': false
    },
    'Confusion': {
        'name': 'Confusion',
        'type': 'Psychic',
        'category': 'Special',
        'power': 50
    },
    'Psychic': {
        'name': 'Psychic',
        'type': 'Psychic',
        'category': 'Special',
        'power': 90
    },
    'Quick Attack': {
        'name': 'Quick Attack',
        'type': 'Basic',
        'category': 'Physical',
        'power': 40,
    },
    'Rage': {
        'name': 'Rage',
        'type': 'Basic',
        'category': 'Physical',
        'power': 20
    },
    'Dream Eater': {
        'name': 'Dream Eater',
        'type': 'Psychic',
        'category': 'Special',
        'power': 60,
    },
    'Bubble': {
        'name': 'Bubble',
        'type': 'Water',
        'category': 'Special',
        'power': 40
    },
    'Ancient Power': {
        'name': 'Ancient Power',
        'type': 'Terra',
        'category': 'Special',
        'power': 70
    },
    'Mist Ball': {
        'name': 'Mist Ball',
        'type': 'Psychic',
        'category': 'Special',
        'power': 70
    },
    'Astonish': {
        'name': 'Astonish',
        'type': 'Ghost',
        'category': 'Physical',
        'power': 30
    },
    'Bullet Seed (1 Hit)': {
        'name': 'Bullet Seed (1 Hit)',
        'type': 'Grass',
        'category': 'Physical',
        'power': 25,
        'makesContact': false
    },
    'Aura Sphere': {
        'name': 'Aura Sphere',
        'type': 'Fighting',
        'category': 'Special',
        'power': 80
    },
    'Night Slash': {
        'name': 'Night Slash',
        'type': 'Dark',
        'category': 'Physical',
        'power': 70,
        'increasedCritRatio': 1
    },
    'Air Slash': {
        'name': 'Air Slash',
        'type': 'Wind',
        'category': 'Special',
        'power': 75
    },
    'Dragon Pulse': {
        'name': 'Dragon Pulse',
        'type': 'Dragon',
        'category': 'Special',
        'power': 85
    },
    'Dragon Rush': {
        'name': 'Dragon Rush',
        'type': 'Dragon',
        'category': 'Physical',
        'power': 100
    },
    'Power Gem': {
        'name': 'Power Gem',
        'type': 'Terra',
        'category': 'Special',
        'power': 80
    },
    'Discharge': {
        'name': 'Discharge',
        'type': 'Electric',
        'category': 'Special',
        'power': 80
    },
    'Boomburst': {
        'name': 'Boomburst',
        'type': 'Basic',
        'category': 'Special',
        'power': 140
    },
    'Zen Headbutt': {
        'name': 'Zen Headbutt',
        'type': 'Psychic',
        'category': 'Physical',
        'power': 80
    },
    'Fire Blast': {
        'name': 'Fire Blast',
        'type': 'Fire',
        'category': 'Special',
        'power': 130
    },
    'Explosion': {
        'name': 'Explosion',
        'type': 'Basic',
        'category': 'Physical',
        'power': 250
    },
    'Feint Attack': {
        'name': 'Feint Attack',
        'type': 'Dark',
        'category': 'Physical',
        'power': 60
    },
    'Extreme Speed': {
        'name': 'Extreme Speed',
        'type': 'Basic',
        'category': 'Physical',
        'power': 80,
    },
    'Energy Ball': {
        'name': 'Energy Ball',
        'type': 'Grass',
        'category': 'Special',
        'power': 90
    },
    'Electro Ball (40 BP)': {
        'name': 'Electro Ball (40 BP)',
        'type': 'Electric',
        'category': 'Special',
        'power': 40
    },
    'Electro Ball (60 BP)': {
        'name': 'Electro Ball (60 BP)',
        'type': 'Electric',
        'category': 'Special',
        'power': 60
    },
    'Electro Ball (80 BP)': {
        'name': 'Electro Ball (80 BP)',
        'type': 'Electric',
        'category': 'Special',
        'power': 80
    },
    'Electro Ball (120 BP)': {
        'name': 'Electro Ball (120 BP)',
        'type': 'Electric',
        'category': 'Special',
        'power': 120
    },
    'Electro Ball (150 BP)': {
        'name': 'Electro Ball (150 BP)',
        'type': 'Electric',
        'category': 'Special',
        'power': 150
    },
    'Flamethrower': {
        'name': 'Flamethrower',
        'type': 'Fire',
        'category': 'Special',
        'power': 90
    },
    'Hydro Pump': {
        'name': 'Hydro Pump',
        'type': 'Water',
        'category': 'Special',
        'power': 110,
    },
    'Hyper Beam': {
        'name': 'Hyper Beam',
        'type': 'Basic',
        'category': 'Special',
        'power': 150,
    },
    'Solar Beam': {
        'name': 'Solar Beam',
        'type': 'Grass',
        'category': 'Special',
        'power': 110
    },
    'Frost Breath': {
        'name': 'Frost Breath',
        'type': 'Ice',
        'category': 'Special',
        'power': 60,
    },
    'Giga Drain': {
        'name': 'Giga Drain',
        'type': 'Grass',
        'category': 'Special',
        'power': 75,
    },
    'Hidden Power': {
        'name': 'Hidden Power',
        'type': 'Basic',
        'category': 'Special',
        'power': 60
    },
    'Giga Impact': {
        'name': 'Giga Impact',
        'type': 'Basic',
        'category': 'Physical',
        'power': 150,
    },
    'Fire Fang': {
        'name': 'Fire Fang',
        'type': 'Fire',
        'category': 'Physical',
        'power': 65
    },
    'Ice Beam': {
        'name': 'Ice Beam',
        'type': 'Ice',
        'category': 'Special',
        'power': 90
    },
    'Mega Drain': {
        'name': 'Mega Drain',
        'type': 'Grass',
        'category': 'Special',
        'power': 40,
    },
    'Metal Claw': {
        'name': 'Metal Claw',
        'type': 'Metal',
        'category': 'Physical',
        'power': 50
    },
    'Ice Fang': {
        'name': 'Ice Fang',
        'type': 'Ice',
        'category': 'Physical',
        'power': 65
    },
    'Lava Plume': {
        'name': 'Lava Plume',
        'type': 'Fire',
        'category': 'Special',
        'power': 80
    },
    'Leaf Storm': {
        'name': 'Leaf Storm',
        'type': 'Grass',
        'category': 'Special',
        'power': 130,
    },
    'Peck': {
        'name': 'Peck',
        'type': 'Wind',
        'category': 'Physical',
        'power': 50
    },
    'Night Shade': {
        'name': 'Night Shade',
        'type': 'Ghost',
        'category': 'Special',
        'power': null,
        'setDamage': 100
    },
    'Moonblast': {
        'name': 'Moonblast',
        'type': 'Light',
        'category': 'Special',
        'power': 95
    },
    'Nuzzle': {
        'name': 'Nuzzle',
        'type': 'Electric',
        'category': 'Physical',
        'power': 20
    },
    'Preseant (40 BP)': {
        'name': 'Present (40 BP)',
        'type': 'Basic',
        'category': 'Physical',
        'power': 40,
        'makesContact': false,
    },
    'Preseant (80 BP)': {
        'name': 'Present (80 BP)',
        'type': 'Basic',
        'category': 'Physical',
        'power': 80,
        'makesContact': false,
    },
    'Preseant (120 BP)': {
        'name': 'Present (120 BP)',
        'type': 'Basic',
        'category': 'Physical',
        'power': 120,
        'makesContact': false,
    },
    'Dragon Tail': {
        'name': 'Dragon Tail',
        'type': 'Dragon',
        'category': 'Physical',
        'power': 60,
    },
    'Self-Destruct': {
        'name': 'Self-Destruct',
        'type': 'Basic',
        'category': 'Physical',
        'power': 200
    },
    'Slash': {
        'name': 'Slash',
        'type': 'Basic',
        'category': 'Physical',
        'power': 70
    },
    'Stone Edge': {
        'name': 'Stone Edge',
        'type': 'Terra',
        'category': 'Physical',
        'power': 100,
        'makesContact': false
    },
    'Shadow Ball': {
        'name': 'Shadow Ball',
        'type': 'Ghost',
        'category': 'Special',
        'power': 80
    },
    'Shadow Claw': {
        'name': 'Shadow Claw',
        'type': 'Ghost',
        'category': 'Physical',
        'power': 70,
    },
    'Thunderbolt': {
        'name': 'Thunderbolt',
        'type': 'Electric',
        'category': 'Special',
        'power': 90,
    },
    'Tri Attack (1 Hit)': {
        'name': 'Tri Attack (1 Hit)',
        'type': 'Basic',
        'category': 'Special',
        'power': 80
    },
    'Powder Snow': {
        'name': 'Powder Snow',
        'type': 'Ice',
        'category': 'Special',
        'power': 40
    },
    'Weather Ball (50 BP)': {
        'name': 'Weather Ball',
        'type': 'Basic',
        'category': 'Special',
        'power': 50
    },
    'Weather Ball (100 BP)': {
        'name': 'Weather Ball',
        'type': 'Basic',
        'category': 'Special',
        'power': 100
    },
    'Dragon Claw': {
        'name': 'Dragon Claw',
        'type': 'Dragon',
        'category': 'Physical',
        'power': 80
    },
    'Volt Tackle': {
        'name': 'Volt Tackle',
        'type': 'Electric',
        'category': 'Physical',
        'power': 120,
    },
    'Copycat': {
        'name': 'Copycat',
        'type': 'Basic',
        'category': 'Status',
        'power': null,
        'range': 'Self'
    },
    'Rapid Spin': {
        'name': 'Rapid Spin',
        'type': 'Basic',
        'category': 'Physical',
        'power': 50
    },
    'Crunch': {
        'name': 'Crunch',
        'type': 'Dark',
        'category': 'Physical',
        'power': 80
    },
    'Shadow Punch': {
        'name': 'Shadow Punch',
        'type': 'Ghost',
        'category': 'Physical',
        'power': 60
    },
    'Flare Blitz': {
        'name': 'Flare Blitz',
        'type': 'Fire',
        'category': 'Physical',
        'power': 120,
    },
    'Dark Pulse': {
        'name': 'Dark Pulse',
        'type': 'Dark',
        'category': 'Special',
        'power': 80
    },
    'Bug Buzz': {
        'name': 'Bug Buzz',
        'type': 'Bug',
        'category': 'Special',
        'power': 90
    },
    'Ice Shard': {
        'name': 'Ice Shard',
        'type': 'Ice',
        'category': 'Physical',
        'power': 40,
        'makesContact': false
    },
    'Thunder Fang': {
        'name': 'Thunder Fang',
        'type': 'Electric',
        'category': 'Physical',
        'power': 65
    },
    'Instant Injection': {
        'name': 'Instant Injection',
        'type': 'Poison',
        'category': 'Physical',
        'power': 80
    },
    'Light-Speed': {
        'name': 'Light-Speed',
        'type': 'Light',
        'category': 'Physical',
        'power': 100,
    },
    'First Blood': {
        'name': 'First Blood',
        'type': 'Fighting',
        'category': 'Physical',
        'power': 70
    },
    'Cavitation Bubble (50 BP)': {
        'name': 'Cavitation Bubble (50 BP)',
        'type': 'Water',
        'category': 'Physical',
        'power': 50,
        'makesContact': false
    },
    'Cavitation Bubble (100 BP)': {
        'name': 'Cavitation Bubble (50 BP)',
        'type': 'Water',
        'category': 'Physical',
        'power': 100,
        'makesContact': false
    },
    'Contaminate': {
        'name': 'Contaminate',
        'type': 'Poison',
        'category': 'Special',
        'power': 60
    },
    'Gravity Well': {
        'name': 'Gravity Well',
        'type': 'Cosmic',
        'category': 'Special',
        'power': 70
    },
    'Buzzkill (1 Hit)': {
        'name': 'Buzzkill (1 Hit)',
        'type': 'Metal',
        'category': 'Special',
        'power': 65
    },
    'Collision Course': {
        'name': 'Collision Course',
        'type': 'Cosmic',
        'category': 'Physical',
        'power': 90,
        'makesContact': false
    },
    'Starry Spiral': {
        'name': 'Starry Spiral',
        'type': 'Cosmic',
        'category': 'Special',
        'power': 70
    },
    'Magma Glob': {
        'name': 'Magma Glob',
        'type': 'Fire',
        'category': 'Physical',
        'power': 60,
        'makesContact': false
    },
    'Seismic Stomp': {
        'name': 'Seismic Stomp',
        'type': 'Terra',
        'category': 'Physical',
        'power': 70,
        'makesContact': false
    },
    'Cursed Chant': {
        'name': 'Cursed Chant',
        'type': 'Ghost',
        'category': 'Special',
        'power': 60
    }
}

const allMoveNames = [
	'Tackle',
	'Fly',
	'Bash',
	'Mega Punch',
	'Fire Punch',
	'Ice Punch',
	'Thunder Punch',
	'Scratch',
	'Gust',
	'Wing Attack',
	'Bind',
	'Headbutt',
	'Forceful Bash',
	'Take Down',
	'Double-Edge',
	'Poison Sting',
	'Bite',
	'Ember',
	'Water Gun',
	'Bug Bite',
	'Psybeam',
	'Bubble Beam',
	'Aurora Beam',
	'Absorb',
	'Razor Leaf',
	'Dragon Rage',
	'Earthquake',
	'Confusion',
	'Psychic',
	'Quick Attack',
	'Rage',
	'Dream Eater',
	'Bubble',
	'Ancient Power',
	'Mist Ball',
	'Astonish',
	'Bullet Seed (1 Hit)',
	'Aura Sphere',
	'Night Slash',
	'Air Slash',
	'Dragon Pulse',
	'Dragon Rush',
	'Power Gem',
	'Discharge',
	'Boomburst',
	'Zen Headbutt',
	'Fire Blast',
	'Feint Attack',
	'Extreme Speed',
	'Energy Ball',
	'Electro Ball (40 BP)',
	'Electro Ball (60 BP)',
	'Electro Ball (80 BP)',
	'Electro Ball (120 BP)',
	'Electro Ball (150 BP)',
	'Flamethrower',
	'Hydro Pump',
	'Hyper Beam',
	'Solar Beam',
	'Frost Breath',
	'Giga Drain',
	'Hidden Power',
	'Giga Impact',
	'Fire Fang',
	'Ice Beam',
	'Mega Drain',
	'Metal Claw',
	'Ice Fang',
	'Lava Plume',
	'Leaf Storm',
	'Peck',
	'Night Shade',
	'Moonblast',
	'Nuzzle',
	'Present (40 BP)',
	'Present (80 BP)',
	'Present (120 BP)',
	'Dragon Tail',
	'Slash',
	'Stone Edge',
	'Shadow Ball',
	'Shadow Claw',
	'Thunderbolt',
	'Tri Attack (1 Hit)',
	'Powder Snow',
	'Weather Ball (50 BP)',
	'Weather Ball (100 BP)',
	'Dragon Claw',
	'Volt Tackle',
	'Rapid Spin',
	'Crunch',
	'Shadow Punch',
	'Flare Blitz',
	'Dark Pulse',
	'Bug Buzz',
	'Ice Shard',
	'Thunder Fang',
	'Instant Injection',
	'Light-Speed',
	'First Blood',
	'Cavitation Bubble (50 BP)',
	'Cavitation Bubble (100 BP)',
	'Contaminate',
	'Gravity Well',
	'Buzzkill (1 Hit)',
	'Collision Course',
	'Starry Spiral',
	'Magma Glob',
	'Seismic Stomp',
	'Cursed Chant'
]