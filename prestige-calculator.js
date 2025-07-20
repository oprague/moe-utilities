const prsEtherianInfo = {
	'Irasper': {'startingLevel': 6, 'expClass': 'Regular'},
	'Cryoball': {'startingLevel': 13, 'expClass': 'Regular'},
	'Boxling': {'startingLevel': 3, 'expClass': 'Regular'},
	'Warzerd': {'startingLevel': 18, 'expClass': 'Regular'},
	'Eletoid': {'startingLevel': 12, 'expClass': 'Regular'},
	'Jardrix': {'startingLevel': 7, 'expClass': 'Regular'},
	'Watchbot': {'startingLevel': 15, 'expClass': 'Regular'},
	'Magu': {'startingLevel': 10, 'expClass': 'Ethereal'},
	'Eidlon': {'startingLevel': 12, 'expClass': 'Regular'},
	'Mabiki': {'startingLevel': 10, 'expClass': 'Regular'},
	'Terroot': {'startingLevel': 8, 'expClass': 'Regular'},
	'Kungafoo': {'startingLevel': 6, 'expClass': 'Regular'},
	'Umbris': {'startingLevel': 20, 'expClass': 'Draconic'},
	'Spectrability': {'startingLevel': 7, 'expClass': 'Regular'},
	'Salablinder': {'startingLevel': 7, 'expClass': 'Regular'},
	'Poigon': {'startingLevel': 15, 'expClass': 'Regular'},
	'Behero': {'startingLevel': 15, 'expClass': 'Regular'},
	'Munstorm': {'startingLevel': 6, 'expClass': 'Regular'},
	'Oinkoin': {'startingLevel': 10, 'expClass': 'Regular'},
	'Lullafairy': {'startingLevel': 8, 'expClass': 'Regular'},
	'Spookims': {'startingLevel': 11, 'expClass': 'Regular'},
	'Honumb': {'startingLevel': 4, 'expClass': 'Regular'},
	'Teap': {'startingLevel': 6, 'expClass': 'Regular'},
	'Pheral': {'startingLevel': 11, 'expClass': 'Regular'},
	'Avien': {'startingLevel': 8, 'expClass': 'Regular'},
	'Ignititan': {'startingLevel': 25, 'expClass': 'Titan'},
	'Kindite': {'startingLevel': 4, 'expClass': 'Regular'},
	'Ribbomb': {'startingLevel': 6, 'expClass': 'Regular'},
	'Snik': {'startingLevel': 5, 'expClass': 'Regular'},
	'Florafluff': {'startingLevel': 15, 'expClass': 'Regular'},
	'Chambrr': {'startingLevel': 20, 'expClass': 'Regular'},
	'Lyxic': {'startingLevel': 4, 'expClass': 'Regular'},
	'Crimortar': {'startingLevel': 10, 'expClass': 'Regular'},
	'Lucifyce': {'startingLevel': 16, 'expClass': 'Regular'},
	'Solareign': {'startingLevel': 12, 'expClass': 'Regular'},
	'Minnart': {'startingLevel': 5, 'expClass': 'Regular'},
	'Atlantitan': {'startingLevel': 25, 'expClass': 'Titan'},
	'Kousai': {'startingLevel': 4, 'expClass': 'Regular'},
	'Ovelin': {'startingLevel': 5, 'expClass': 'Regular'},
	'Rabbini': {'startingLevel': 4, 'expClass': 'Regular'},
	'Tadbowl': {'startingLevel': 5, 'expClass': 'Regular'},
	'Cromite': {'startingLevel': 8, 'expClass': 'Regular'},
	'Carapinch': {'startingLevel': 8, 'expClass': 'Regular'},
	'Edgehog': {'startingLevel': 11, 'expClass': 'Regular'},
	'Dalladoodle': {'startingLevel': 19, 'expClass': 'Regular'},
	'Kitsakura': {'startingLevel': 4, 'expClass': 'Regular'},
	'Flyden': {'startingLevel': 10, 'expClass': 'Regular'},
	'Clovurr': {'startingLevel': 4, 'expClass': 'Regular'},
	'Elekity': {'startingLevel': 5, 'expClass': 'Regular'},
	'Wanderwood': {'startingLevel': 16, 'expClass': 'Regular'},
	'Phytotitan': {'startingLevel': 25, 'expClass': 'Titan'},
	'Amenby': {'startingLevel': 3, 'expClass': 'Regular'},
	'Magmarva': {'startingLevel': 6, 'expClass': 'Regular'},
	'Tarabi': {'startingLevel': 6, 'expClass': 'Regular'},
	'Cachick': {'startingLevel': 3, 'expClass': 'Regular'},
	'Egglet': {'startingLevel': 5, 'expClass': 'Regular'},
	'Vampyro': {'startingLevel': 7, 'expClass': 'Regular'},
	'Goudrowsy': {'startingLevel': 4, 'expClass': 'Regular'},
	'Mariposun': {'startingLevel': 10, 'expClass': 'Regular'},
	'Duram': {'startingLevel': 6, 'expClass': 'Regular'},
	'Cactikid': {'startingLevel': 6, 'expClass': 'Regular'},
	'Braybug': {'startingLevel': 5, 'expClass': 'Regular'},
	'Growdy': {'startingLevel': 7, 'expClass': 'Regular'},
	'Sketchop': {'startingLevel': 4, 'expClass': 'Regular'},
	'Huskot': {'startingLevel': 8, 'expClass': 'Regular'},
	'Phesquerade': {'startingLevel': 9, 'expClass': 'Regular'},
	'Voltinch': {'startingLevel': 6, 'expClass': 'Regular'},
	'Silopsis': {'startingLevel': 8, 'expClass': 'Regular'},
	'Vacrunch': {'startingLevel': 4, 'expClass': 'Regular'},
	'Velveal': {'startingLevel': 10, 'expClass': 'Regular'}
}

let totalBaseSeconds = 0;


function onEtherianChange() {
	const etherianName = document.getElementById("etherian").value;
	const startingLevel = prsEtherianInfo[etherianName]['startingLevel'];
	document.getElementById("default-level").innerHTML = "(Default Level: " + startingLevel + ")";
	document.getElementById("starting-level").value = startingLevel;
	document.getElementById("starting-level").min = startingLevel;
}


function clearFunc() {
	document.getElementById('output').innerHTML = '';
	document.getElementById('total').innerHTML = '';
	totalBaseSeconds = 0;
	document.getElementById('clear-button').style.display = "none";
}


function prestige(expGain, startingLevel, expClass, playerStartingLevel, startingPrestige, targetPrestige) {
	if (expClass == "Draconic" || expClass == "Titan") {
		expGain *= 0.75;
	};
	if (expClass == "Ethereal") {
		expGain *= 0.5;
	};

	let expTicks = 0;
	let level = playerStartingLevel;
	let exp = 0;
	let prestige = startingPrestige;

	while (prestige < targetPrestige) {
		exp += (expGain * (1 + (prestige * 0.1)));
		while (exp > (level * 10)) {
			exp -= (level * 10);
			level++;
			if (level >= 100) {
				level = startingLevel;
				prestige++;
			};
		};
		expTicks++;
	};
	return expTicks;
}


function calculate() {
	document.getElementById('clear-button').style.display = "block";

	const etherianName = document.getElementById("etherian").value;
	const startingPrestige = parseInt(document.getElementById("starting-prestige").value);
	const targetPrestige = parseInt(document.getElementById("target-prestige").value);
	const orb = document.getElementById("orb").checked;
	const gamepass = document.getElementById("gamepass").checked;
	const friendBonus = document.getElementById("friend-bonus").value;
	const rp = document.getElementById("rp-mode").checked;
	const playerStartingLevel = document.getElementById("starting-level").value;

	let expGain = 50;
	if (orb == true) {
		expGain *= 2;
	};
	if (gamepass == true) {
		expGain *= 2;
	};
	if (rp == true) {
		expGain *= 0.5;
	};
	expGain *= friendBonus;

	let expTicks = 0;
	if (!(document.getElementById('all-etherians').checked)){
		const startingLevel = prsEtherianInfo[etherianName]['startingLevel'];
		const expClass = prsEtherianInfo[etherianName]['expClass'];
		expTicks = prestige(expGain, startingLevel, expClass, playerStartingLevel, startingPrestige, targetPrestige);
	} else {
		for (const [key, value] of Object.entries(prsEtherianInfo)) {
			const startingLevel = prsEtherianInfo[key]['startingLevel'];
			const expClass = prsEtherianInfo[key]['expClass'];
			expTicks += prestige(expGain, startingLevel, expClass, startingLevel, startingPrestige, targetPrestige);
		}
	}

	const baseSeconds = expTicks * 10;
	totalBaseSeconds += baseSeconds;

	const seconds = baseSeconds % 60;
	const minutes = Math.floor((baseSeconds % (60 * 60)) / 60);
	const hours = Math.floor(baseSeconds / 60 / 60);

	let strEtherianName = etherianName;
	if (document.getElementById('all-etherians').checked) {
		strEtherianName = 'All Etherians';
	}

	const newStr = "It would take " + hours + " hours, " + minutes + " minutes, and " + seconds + " seconds to get " + strEtherianName + " from prestige " + startingPrestige + " to prestige " + targetPrestige;

	document.getElementById('output').innerHTML += newStr + "<br>";

	if (baseSeconds !== totalBaseSeconds) {
		const totalSeconds = totalBaseSeconds % 60;
		const totalMinutes = Math.floor((totalBaseSeconds % (60 * 60)) / 60);
		const totalHours = Math.floor(totalBaseSeconds / 60 / 60);

		const newTotalStr = "Total: " + totalHours + " hours, " + totalMinutes + " minutes, " + totalSeconds + " seconds";

		document.getElementById('total').innerHTML = newTotalStr;
	}
}