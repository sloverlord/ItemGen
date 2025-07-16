const OFFSET = 25;

Array.prototype.sample = function(){
  return this[Math.floor(Math.random()*this.length)];
}

statDB = [];
skillDB = [];
spellDB = [];
armorDB = [];
weaponDB = [];

window.onload = function(){
	setup();
}

function setup(){
	createStatDB();
	createSkillDB();
	createSpellDB();
	createArmorDB();
	createWeaponDB();
	
	update();
}

function updateLevel(){
	var level = document.getElementById("Level").value;
	
	var spellBreakpoints = [[-1, -1], [1,1], [5,3], [7,4], [9,5], [11,6], [13,7], [15,8], [17,9]];
	var weaponBreakpoints = [[-1, -1], [3,1], [8,2], [15,3]];
	var skillBreakpoints = [[-1, -1], [1,2], [5,3], [9,4], [13,5], [17,6]];
	var statBreakpoints = [[-1, -1], [3,1], [8,2], [15,3]];
	
	document.getElementById("MaxSpell").value = findBreakpoint(level, spellBreakpoints);
	document.getElementById("MaxWeapon").value = findBreakpoint(level, weaponBreakpoints);
	document.getElementById("MaxSkill").value = findBreakpoint(level, skillBreakpoints);
	document.getElementById("MaxStat").value = findBreakpoint(level, statBreakpoints);
	
	update();
}

function findBreakpoint(level, breakpoints){
	for (var i = 1; i < breakpoints.length; i += 1){
		if (breakpoints[i][0] > level){
			return(breakpoints[i-1][1]);
		}
	}
	
	return breakpoints[breakpoints.length - 1][1];
}

function update(){
	var textBox = document.getElementById("TextBox");
	var toMake = getInfo("ItemCount");
	var maxSpellLevel = getInfo("MaxSpell");
	var maxWeaponLevel = getInfo("MaxWeapon");
	var maxSkillLevel = getInfo("MaxSkill");
	var maxStatLevel = getInfo("MaxStat");
	
	var itemSet = makeItems(toMake, maxSpellLevel, maxWeaponLevel, maxSkillLevel, maxStatLevel);
	
	var itemString = ["", "", "", "", ""];
	
	for (var i = 0; i < itemSet.length; i += 1){
		var vals = itemSet[i].getValue();
		itemString[0] += itemSet[i].getString() + "<br>";
		itemString[1] += vals[0] + "<br>";
		itemString[2] += vals[1] + "<br>";
		itemString[3] += vals[2] + "<br>";
		itemString[4] += vals[3] + "<br>";
	}
	
	//textBox.innerHTML = itemString;
	document.getElementById("col0").innerHTML = itemString[0];
	document.getElementById("col1").innerHTML = itemString[1];
	document.getElementById("col2").innerHTML = itemString[2];
	document.getElementById("col3").innerHTML = itemString[3];
	document.getElementById("col4").innerHTML = itemString[4];
}

function remove(name){
	document.getElementById(name).value = -1;
	
	update();
}

function makeItems(toMake, maxSpellLevel, maxWeaponLevel, maxSkillLevel, maxStatLevel){
	var itemList = [];
	var bonusTypeList = [];
	if (maxSpellLevel > 0){ bonusTypeList.push("spell"); }
	if (maxSkillLevel > 0){ bonusTypeList.push("skill"); }
	if (maxStatLevel > 0){ bonusTypeList.push("stat"); }
	
	var maxLevels = document.getElementById("max").checked;
	
	var typeList = [];
	if (document.getElementById("helmets").checked){ typeList.push(new Equip("Helmet", 5)); }
	if (document.getElementById("armors").checked){ typeList.push("armor"); }
	if (document.getElementById("gloves").checked){ typeList.push(new Equip("Gloves", 5)); }
	if (document.getElementById("pants").checked){ typeList.push(new Equip("Pants", 5)); }
	if (document.getElementById("boots").checked){ typeList.push(new Equip("Boots", 5)); }
	if (document.getElementById("weapons").checked){ typeList.push("weapon"); }
	
	for (var i = 0; i < toMake; i += 1){
		var bonusType = bonusTypeList.sample();
		
		var bonus = -1;
		var itemType = typeList.sample();
		if (itemType == "armor"){ itemType = armorDB.sample(); }
		if (itemType == "weapon"){
			itemType = weaponDB.sample();
			bonus = maxLevels ? maxWeaponLevel : Math.ceil(Math.random()*maxWeaponLevel);
		}
		
		var enchantment = "miss";
		if (bonusType == "spell"){
			var level = maxLevels ? Math.min(maxSpellLevel, MAXSPELL) : Math.min(Math.ceil(Math.random()*maxSpellLevel), MAXSPELL);
			enchantment = spellDB[level].sample();
		} else if (bonusType == "skill"){
			var level = maxLevels ? maxSkillLevel : Math.ceil(Math.random()*maxSkillLevel);
			enchantment = new Skill(level, skillDB.sample());
		} else if (bonusType == "stat"){
			var level = maxLevels ? maxStatLevel : Math.ceil(Math.random()*maxStatLevel);
			enchantment = new Stat(level, statDB.sample());
		}
		
		itemList.push(new Item(bonus, itemType, enchantment));
	}
	
	return itemList;
}

function getInfo(field){
	var data = Number(document.getElementById(field).value);
	
	// use defaults if empty
if (data == ""){
		if (field == "ItemCount"){
			data = 10;
		} else if (field == "MaxSpell"){
			data = 9;
		} else if (field == "MaxWeapon"){
			data = 3;
		} else if (field == "MaxSkill"){
			data = 6;
		} else if (field == "MaxStat"){
			data = 3;
		}
	}
	
	return data;
}