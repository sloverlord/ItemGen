const MAXSPELL = 9;

class Item {
	bonus;
	equipment;
	enchantment;
	
	scalar = 20;
	
	constructor(bonus, equipment, enchantment){
		this.bonus = bonus;
		this.equipment = equipment;
		this.enchantment = enchantment;
	}
	
	getString(){
		var string = this.equipment.name + " of " + this.enchantment.getString();
		if (this.bonus > 0){ string = "+" + this.bonus + " " + string; }
		return string;
	}
	
	getValue(){
		var mults = [1.2, 1.1, 1, .9];
		var val = this.equipment.value + this.enchantment.getValue();
		if (this.bonus > 0){ val += this.bonus*this.bonus*this.scalar; }
		mults[0] = Math.floor(val*mults[0]);
		mults[1] = Math.floor(val*mults[1]);
		mults[2] = Math.floor(val*mults[2]);
		mults[3] = Math.floor(val*mults[3]);
		
		return mults;
	}
}

class Equip {
	name;
	value;
	
	constructor(name, value){
		this.name = name;
		this.value = value;
	}
}

class Spell {
	level;
	name;
	
	scalar = 100;
	
	constructor(level, name){
		this.level = level;
		this.name = name;
	}
	
	getString(){
		return this.name;
	}
	
	getValue(){
		return this.level*this.level*this.scalar;
	}
}

class Skill {
	level;
	name;
	
	scalar = 20;
	
	constructor(level, name){
		this.level = level;
		this.name = name;
	}
	
	getString(){
		return "+" + this.level + " " + this.name;
	}
	
	getValue(){
		return this.level*this.level*this.scalar;
	}
}

class Stat {
	level;
	name;
	
	scalar = 60;
	
	constructor(level, name){
		this.level = level;
		this.name = name;
	}
	
	getString(){
		return "+" + this.level + " " + this.name;
	}
	
	getValue(){
		return this.level*this.level*this.scalar;
	}
}

function addToDB(newSpell){
	spellDB[newSpell.level].push(newSpell);
}

function createStatDB(){
	statDB = [];
	
	statDB.push("Strength");
	statDB.push("Dexterity");
	statDB.push("Constitution");
	statDB.push("Intelligence");
	statDB.push("Wisdom");
	statDB.push("Charisma");
}

function createSkillDB(){
	skillDB = [];
	
	skillDB.push("Perception");
	skillDB.push("Stealth");
	skillDB.push("Athletics");
	skillDB.push("Insight");
	skillDB.push("Persuasion");
	skillDB.push("Arcana");
	skillDB.push("Investigation");
	skillDB.push("Intimidation");
	skillDB.push("Deception");
	skillDB.push("Acrobatics");
	skillDB.push("Performance");
	skillDB.push("Religion");
	skillDB.push("Nature");
	skillDB.push("Sleight of Hand");
	skillDB.push("Survival");
	skillDB.push("Animal Handling");
	skillDB.push("Medicine");
	skillDB.push("History");
	skillDB.push("Initiative");
}

function createArmorDB(){
	armorDB = [];
	
	armorDB.push(new Equip("Padded Armor", 5));
	armorDB.push(new Equip("Leather Armor", 10));
	armorDB.push(new Equip("Studded Leather Armor", 40));
	armorDB.push(new Equip("Hide Armor", 10));
	armorDB.push(new Equip("Chain Shirt", 40));
	armorDB.push(new Equip("Scale Mail", 45));
	armorDB.push(new Equip("Breastplate", 90));
	armorDB.push(new Equip("Half Plate", 80));
	armorDB.push(new Equip("Ring Mail", 30));
	armorDB.push(new Equip("Chain Mail", 120));
	armorDB.push(new Equip("Splint", 187));
	armorDB.push(new Equip("Plate Armor", 270));
}

function createWeaponDB(){
	weaponDB = [];
	
	// d4 = 1^2 * 1gp = 1
	// d6 = 2^2 * 1gp = 4
	// d8 = 3^2 * 1gp = 9
	// d10 = 4^2 * 1gp = 16
	// d12 = 5^2 * 1gp = 25
	// 2d6 = 5^ * 1gp = 25
	weaponDB.push(new Equip("Club", 1));
	weaponDB.push(new Equip("Dagger", 1));
	weaponDB.push(new Equip("Greatclub", 9));
	weaponDB.push(new Equip("Handaxe", 4));
	weaponDB.push(new Equip("Javelin", 4));
	weaponDB.push(new Equip("Light Hammer", 1));
	weaponDB.push(new Equip("Mace", 4));
	weaponDB.push(new Equip("Quarterstaff", 4));
	weaponDB.push(new Equip("Sickle", 1));
	weaponDB.push(new Equip("Spear", 4));
	weaponDB.push(new Equip("Light Crossbow", 9));
	weaponDB.push(new Equip("Shortbow", 4));
	weaponDB.push(new Equip("Sling", 1));
	weaponDB.push(new Equip("Battleaxe", 9));
	weaponDB.push(new Equip("Flail", 9));
	weaponDB.push(new Equip("Glaive", 16));
	weaponDB.push(new Equip("Greataxe", 25));
	weaponDB.push(new Equip("Greatsword", 25));
	weaponDB.push(new Equip("Halberd", 16));
	weaponDB.push(new Equip("Lance", 25));
	weaponDB.push(new Equip("Longsword", 9));
	weaponDB.push(new Equip("Maul", 25));
	weaponDB.push(new Equip("Morningstar", 9));
	weaponDB.push(new Equip("Pike", 16));
	weaponDB.push(new Equip("Rapier", 9));
	weaponDB.push(new Equip("Scimitar", 4));
	weaponDB.push(new Equip("Shortsword", 4));
	weaponDB.push(new Equip("Trident", 4));
	weaponDB.push(new Equip("War Pick", 9));
	weaponDB.push(new Equip("Warhammer", 9));
	weaponDB.push(new Equip("Whip", 1));
	weaponDB.push(new Equip("Blowgun", 1));
	weaponDB.push(new Equip("Hand Crossbow", 4));
	weaponDB.push(new Equip("Heavy Crossbow", 16));
	weaponDB.push(new Equip("Longbow", 9));
	weaponDB.push(new Equip("Net", 1));
}

function createSpellDB(){
	spellDB = [];
	for (var i = 0; i <= MAXSPELL; i += 1){ spellDB.push([]); }
	
	var currLevel = 1;
	addToDB(new Spell(currLevel, "Alarm"));
	addToDB(new Spell(currLevel, "Animal Friendship"));
	addToDB(new Spell(currLevel, "Armor of Agathys"));
	addToDB(new Spell(currLevel, "Arms of Hadar"));
	addToDB(new Spell(currLevel, "Bane"));
	addToDB(new Spell(currLevel, "Bless"));
	addToDB(new Spell(currLevel, "Burning Hands"));
	addToDB(new Spell(currLevel, "Charm Person"));
	addToDB(new Spell(currLevel, "Chromatic Orb"));
	addToDB(new Spell(currLevel, "Color Spray"));
	addToDB(new Spell(currLevel, "Command"));
	addToDB(new Spell(currLevel, "Compelled Duel"));
	addToDB(new Spell(currLevel, "Comprehend Languages"));
	addToDB(new Spell(currLevel, "Create or Destroy Water"));
	addToDB(new Spell(currLevel, "Cure Wounds"));
	addToDB(new Spell(currLevel, "Detect Evil and Good"));
	addToDB(new Spell(currLevel, "Detect Magic"));
	addToDB(new Spell(currLevel, "Detect Poison and Disease"));
	addToDB(new Spell(currLevel, "Disguise Self"));
	addToDB(new Spell(currLevel, "Dissonant Whispers"));
	addToDB(new Spell(currLevel, "Divine Favor"));
	addToDB(new Spell(currLevel, "Ensnaring Strike"));
	addToDB(new Spell(currLevel, "Entangle"));
	addToDB(new Spell(currLevel, "Expeditious Retreat"));
	addToDB(new Spell(currLevel, "False Life"));
	addToDB(new Spell(currLevel, "Faerie Fire"));
	addToDB(new Spell(currLevel, "Feather Fall"));
	addToDB(new Spell(currLevel, "Find Familiar"));
	addToDB(new Spell(currLevel, "Fog Cloud"));
	addToDB(new Spell(currLevel, "Goodberry"));
	addToDB(new Spell(currLevel, "Grease"));
	addToDB(new Spell(currLevel, "Guiding Bolt"));
	addToDB(new Spell(currLevel, "Hail of Thorns"));
	addToDB(new Spell(currLevel, "Healing Word"));
	addToDB(new Spell(currLevel, "Hellish Rebuke"));
	addToDB(new Spell(currLevel, "Heroism"));
	addToDB(new Spell(currLevel, "Hex"));
	addToDB(new Spell(currLevel, "Hunter's Mark"));
	addToDB(new Spell(currLevel, "Identify"));
	addToDB(new Spell(currLevel, "Illusory Script"));
	addToDB(new Spell(currLevel, "Inflict Wounds"));
	addToDB(new Spell(currLevel, "Jump"));
	addToDB(new Spell(currLevel, "Longstrider"));
	addToDB(new Spell(currLevel, "Mage Armor"));
	addToDB(new Spell(currLevel, "Magic Missle"));
	addToDB(new Spell(currLevel, "Protection from Evil and Good"));
	addToDB(new Spell(currLevel, "Purify Food and Drink"));
	addToDB(new Spell(currLevel, "Ray of Sickness"));
	addToDB(new Spell(currLevel, "Searing Smite"));
	addToDB(new Spell(currLevel, "Sanctuary"));
	addToDB(new Spell(currLevel, "Shield"));
	addToDB(new Spell(currLevel, "Shield of Faith"));
	addToDB(new Spell(currLevel, "Silent Image"));
	addToDB(new Spell(currLevel, "Sleep"));
	addToDB(new Spell(currLevel, "Speak with Animals"));
	addToDB(new Spell(currLevel, "Tasha's Hideous Laughter"));
	addToDB(new Spell(currLevel, "Tensor's Floating Disk"));
	addToDB(new Spell(currLevel, "Thunderous Smite"));
	addToDB(new Spell(currLevel, "Thunderwave"));
	addToDB(new Spell(currLevel, "Unseen Servant"));
	addToDB(new Spell(currLevel, "Witch Bolt"));
	addToDB(new Spell(currLevel, "Wrathful Smite"));
	
	currLevel = 2;
	addToDB(new Spell(currLevel, "Aid"));
	addToDB(new Spell(currLevel, "Alter Self"));
	addToDB(new Spell(currLevel, "Animal Messenger"));
	addToDB(new Spell(currLevel, "Arcane Lock"));
	addToDB(new Spell(currLevel, "Augury"));
	addToDB(new Spell(currLevel, "Barkskin"));
	addToDB(new Spell(currLevel, "Beast Sense"));
	addToDB(new Spell(currLevel, "Blindness/Deafness"));
	addToDB(new Spell(currLevel, "Blur"));
	addToDB(new Spell(currLevel, "Branding Smite"));
	addToDB(new Spell(currLevel, "Calm Emotions"));
	addToDB(new Spell(currLevel, "Cloud of Daggers"));
	addToDB(new Spell(currLevel, "Continual Flame"));
	addToDB(new Spell(currLevel, "Cordon of Arrows"));
	addToDB(new Spell(currLevel, "Crown of Madness"));
	addToDB(new Spell(currLevel, "Darkness"));
	addToDB(new Spell(currLevel, "Darkvision"));
	addToDB(new Spell(currLevel, "Detect Thoughts"));
	addToDB(new Spell(currLevel, "Enhance Ability"));
	addToDB(new Spell(currLevel, "Enlarge/Reduce"));
	addToDB(new Spell(currLevel, "Enthrall"));
	addToDB(new Spell(currLevel, "Find Steed"));
	addToDB(new Spell(currLevel, "Find Traps"));
	addToDB(new Spell(currLevel, "Flame Blade"));
	addToDB(new Spell(currLevel, "Flaming Sphere"));
	addToDB(new Spell(currLevel, "Heat Metal"));
	addToDB(new Spell(currLevel, "Hold Person"));
	addToDB(new Spell(currLevel, "Gentle Repose"));
	addToDB(new Spell(currLevel, "Gust of Wind"));
	addToDB(new Spell(currLevel, "Invisibility"));
	addToDB(new Spell(currLevel, "Knock"));
	addToDB(new Spell(currLevel, "Lesser Restoration"));
	addToDB(new Spell(currLevel, "Levitate"));
	addToDB(new Spell(currLevel, "Locate Animals or Plants"));
	addToDB(new Spell(currLevel, "Locate Object"));
	addToDB(new Spell(currLevel, "Magic Mouth"));
	addToDB(new Spell(currLevel, "Magic Weapon"));
	addToDB(new Spell(currLevel, "Melf's Acid Arrow"));
	addToDB(new Spell(currLevel, "Mirror Image"));
	addToDB(new Spell(currLevel, "Misty Step"));
	addToDB(new Spell(currLevel, "Moonbeam"));
	addToDB(new Spell(currLevel, "Nystul's Magic Aura"));
	addToDB(new Spell(currLevel, "Pass without Trace"));
	addToDB(new Spell(currLevel, "Phantasmal Force"));
	addToDB(new Spell(currLevel, "Prayer of Healing"));
	addToDB(new Spell(currLevel, "Protection of Poison"));
	addToDB(new Spell(currLevel, "Ray of Enfeeblement"));
	addToDB(new Spell(currLevel, "Rope Trick"));
	addToDB(new Spell(currLevel, "Scorching Ray"));
	addToDB(new Spell(currLevel, "See Invisibility"));
	addToDB(new Spell(currLevel, "Shatter"));
	addToDB(new Spell(currLevel, "Silence"));
	addToDB(new Spell(currLevel, "Spider Climb"));
	addToDB(new Spell(currLevel, "Spike Growth"));
	addToDB(new Spell(currLevel, "Spiritual Weapon"));
	addToDB(new Spell(currLevel, "Suggestion"));
	addToDB(new Spell(currLevel, "Warding Bond"));
	addToDB(new Spell(currLevel, "Web"));
	addToDB(new Spell(currLevel, "Zone of Truth"));
	
	currLevel = 3;
	addToDB(new Spell(currLevel, "Animate Dead"));
	addToDB(new Spell(currLevel, "Aura of Vitality"));
	addToDB(new Spell(currLevel, "Beacon of Hope"));
	addToDB(new Spell(currLevel, "Bestow Curse"));
	addToDB(new Spell(currLevel, "Blinding Smite"));
	addToDB(new Spell(currLevel, "Blink"));
	addToDB(new Spell(currLevel, "Call Lightning"));
	addToDB(new Spell(currLevel, "Clairvoyance"));
	addToDB(new Spell(currLevel, "Conjure Animals"));
	addToDB(new Spell(currLevel, "Conjure Barrage"));
	addToDB(new Spell(currLevel, "Counterspell"));
	addToDB(new Spell(currLevel, "Create Food and Water"));
	addToDB(new Spell(currLevel, "Crusader's Mantle"));
	addToDB(new Spell(currLevel, "Daylight"));
	addToDB(new Spell(currLevel, "Dispel Magic"));
	addToDB(new Spell(currLevel, "Elemental Weapon"));
	addToDB(new Spell(currLevel, "Fear"));
	addToDB(new Spell(currLevel, "Feign Death"));
	addToDB(new Spell(currLevel, "Fireball"));
	addToDB(new Spell(currLevel, "Fly"));
	addToDB(new Spell(currLevel, "Gaseous Form"));
	addToDB(new Spell(currLevel, "Glyph of Warding"));
	addToDB(new Spell(currLevel, "Haste"));
	addToDB(new Spell(currLevel, "Hunger of Hadar"));
	addToDB(new Spell(currLevel, "Hypnotic Pattern"));
	addToDB(new Spell(currLevel, "Leomund's Tiny Hut"));
	addToDB(new Spell(currLevel, "Lightning Arrow"));
	addToDB(new Spell(currLevel, "Lightning Bolt"));
	addToDB(new Spell(currLevel, "Magic Circle"));
	addToDB(new Spell(currLevel, "Major Image"));
	addToDB(new Spell(currLevel, "Mass Healing Word"));
	addToDB(new Spell(currLevel, "Meld Into Stone"));
	addToDB(new Spell(currLevel, "Nondetection"));
	addToDB(new Spell(currLevel, "Phantom Steed"));
	addToDB(new Spell(currLevel, "Plant Growth"));
	addToDB(new Spell(currLevel, "Protection from Energy"));
	addToDB(new Spell(currLevel, "Remove Curse"));
	addToDB(new Spell(currLevel, "Revivify"));
	addToDB(new Spell(currLevel, "Sending"));
	addToDB(new Spell(currLevel, "Sleet Storm"));
	addToDB(new Spell(currLevel, "Slow"));
	addToDB(new Spell(currLevel, "Speak with Dead"));
	addToDB(new Spell(currLevel, "Speak with Plants"));
	addToDB(new Spell(currLevel, "Spirit Guardians"));
	addToDB(new Spell(currLevel, "Stinking Cloud"));
	addToDB(new Spell(currLevel, "Tongues"));
	addToDB(new Spell(currLevel, "Vampiric Touch"));
	addToDB(new Spell(currLevel, "Water Breathing"));
	addToDB(new Spell(currLevel, "Water Walk"));
	addToDB(new Spell(currLevel, "Wind Wall"));
	
	currLevel = 4;
	addToDB(new Spell(currLevel, "Aura of Life"));
	addToDB(new Spell(currLevel, "Aura of Purify"));
	addToDB(new Spell(currLevel, "Arcane Eye"));
	addToDB(new Spell(currLevel, "Banishment"));
	addToDB(new Spell(currLevel, "Blight"));
	addToDB(new Spell(currLevel, "Compulsion"));
	addToDB(new Spell(currLevel, "Confusion"));
	addToDB(new Spell(currLevel, "Conjure Minor Elementals"));
	addToDB(new Spell(currLevel, "Conjure Woodland Beings"));
	addToDB(new Spell(currLevel, "Control Water"));
	addToDB(new Spell(currLevel, "Control Weather"));
	addToDB(new Spell(currLevel, "Death Ward"));
	addToDB(new Spell(currLevel, "Dimension Door"));
	addToDB(new Spell(currLevel, "Divination"));
	addToDB(new Spell(currLevel, "Dominate Beast"));
	addToDB(new Spell(currLevel, "Evard's Black Tentacles"));
	addToDB(new Spell(currLevel, "Fabricate"));
	addToDB(new Spell(currLevel, "Fire Shield"));
	addToDB(new Spell(currLevel, "Freedom of Movement"));
	addToDB(new Spell(currLevel, "Giant Insect"));
	addToDB(new Spell(currLevel, "Grasping Vine"));
	addToDB(new Spell(currLevel, "Greater Invisibility"));
	addToDB(new Spell(currLevel, "Guardian of Faith"));
	addToDB(new Spell(currLevel, "Hallucinatory Terrain"));
	addToDB(new Spell(currLevel, "Ice Storm"));
	addToDB(new Spell(currLevel, "Leomund's Secret Chest"));
	addToDB(new Spell(currLevel, "Locate Creature"));
	addToDB(new Spell(currLevel, "Mordenkainen's Faithful Hound"));
	addToDB(new Spell(currLevel, "Mordenkainen's Private Sanctum"));
	addToDB(new Spell(currLevel, "Otiluke's Resilient Sphere"));
	addToDB(new Spell(currLevel, "Phantasmal Killer"));
	addToDB(new Spell(currLevel, "Polymorph"));
	addToDB(new Spell(currLevel, "Staggering Smite"));
	addToDB(new Spell(currLevel, "Stone Shape"));
	addToDB(new Spell(currLevel, "Stoneskin"));
	addToDB(new Spell(currLevel, "Wall of Fire"));

	currLevel = 5;
	addToDB(new Spell(currLevel, "Animate Objects"));
	addToDB(new Spell(currLevel, "Antilife Shell"));
	addToDB(new Spell(currLevel, "Awaken"));
	addToDB(new Spell(currLevel, "Banishing Smite"));
	addToDB(new Spell(currLevel, "Bigby's Hand"));
	addToDB(new Spell(currLevel, "Circle of Power"));
	addToDB(new Spell(currLevel, "Cloudkill"));
	addToDB(new Spell(currLevel, "Commune"));
	addToDB(new Spell(currLevel, "Commune with Nature"));
	addToDB(new Spell(currLevel, "Cone of Cold"));
	addToDB(new Spell(currLevel, "Conjure ELemental"));
	addToDB(new Spell(currLevel, "Conjure Volley"));
	addToDB(new Spell(currLevel, "Contact Other Plane"));
	addToDB(new Spell(currLevel, "Contagion"));
	addToDB(new Spell(currLevel, "Creation"));
	addToDB(new Spell(currLevel, "Destructive Smite"));
	addToDB(new Spell(currLevel, "Dispel Evil and Good"));
	addToDB(new Spell(currLevel, "Dominate Person"));
	addToDB(new Spell(currLevel, "Dream"));
	addToDB(new Spell(currLevel, "Flame Strike"));
	addToDB(new Spell(currLevel, "Geas"));
	addToDB(new Spell(currLevel, "Greater Restoration"));
	addToDB(new Spell(currLevel, "Hallow"));
	addToDB(new Spell(currLevel, "Hold Monster"));
	addToDB(new Spell(currLevel, "Insect Plague"));
	addToDB(new Spell(currLevel, "Legend Lore"));
	addToDB(new Spell(currLevel, "Mass Cure Wounds"));
	addToDB(new Spell(currLevel, "Mislead"));
	addToDB(new Spell(currLevel, "Modify Memory"));
	addToDB(new Spell(currLevel, "Passwall"));
	addToDB(new Spell(currLevel, "Planar Binding"));
	addToDB(new Spell(currLevel, "Raise Dead"));
	addToDB(new Spell(currLevel, "Rary's Telepathic Bond"));
	addToDB(new Spell(currLevel, "Reincarnate"));
	addToDB(new Spell(currLevel, "Scrying"));
	addToDB(new Spell(currLevel, "Seeming"));
	addToDB(new Spell(currLevel, "Swift Quiver"));
	addToDB(new Spell(currLevel, "Telekinesis"));
	addToDB(new Spell(currLevel, "Teleportation Circle"));
	addToDB(new Spell(currLevel, "Tree Stride"));
	addToDB(new Spell(currLevel, "Wall of Force"));
	addToDB(new Spell(currLevel, "Wall of Stone"));
	
	currLevel = 6;
	addToDB(new Spell(currLevel, "Arcane Gate"));
	addToDB(new Spell(currLevel, "Blade Barrier"));
	addToDB(new Spell(currLevel, "Chain Lightning"));
	addToDB(new Spell(currLevel, "Circle of Death"));
	addToDB(new Spell(currLevel, "Conjure Fey"));
	addToDB(new Spell(currLevel, "Contingency"));
	addToDB(new Spell(currLevel, "Create Undead"));
	addToDB(new Spell(currLevel, "Disintegrate"));
	addToDB(new Spell(currLevel, "Drawmij's Instant Summons"));
	addToDB(new Spell(currLevel, "Eyebit"));
	addToDB(new Spell(currLevel, "Find the Path"));
	addToDB(new Spell(currLevel, "Flesh to Stone"));
	addToDB(new Spell(currLevel, "Forbiddance"));
	addToDB(new Spell(currLevel, "Globe of Invulnerability"));
	addToDB(new Spell(currLevel, "Guards and Wards"));
	addToDB(new Spell(currLevel, "Harm"));
	addToDB(new Spell(currLevel, "Heal"));
	addToDB(new Spell(currLevel, "Heroes' Feast"));
	addToDB(new Spell(currLevel, "Magic Jar"));
	addToDB(new Spell(currLevel, "Mass Suggestion"));
	addToDB(new Spell(currLevel, "Move Earth"));
	addToDB(new Spell(currLevel, "Otiluke's Freezing Sphere"));
	addToDB(new Spell(currLevel, "Otto's Irresistible Dance"));
	addToDB(new Spell(currLevel, "Planar Ally"));
	addToDB(new Spell(currLevel, "Programmed Illusion"));
	addToDB(new Spell(currLevel, "Sunbeam"));
	addToDB(new Spell(currLevel, "Transport via Plants"));
	addToDB(new Spell(currLevel, "True Seeing"));
	addToDB(new Spell(currLevel, "Wall of Ice"));
	addToDB(new Spell(currLevel, "Wall of Thorns"));
	addToDB(new Spell(currLevel, "Wind Walk"));
	addToDB(new Spell(currLevel, "Word of Recall"));
	
	currLevel = 7;
	addToDB(new Spell(currLevel, "Conjure Celestial"));
	addToDB(new Spell(currLevel, "Delayed Blast Fireball"));
	addToDB(new Spell(currLevel, "Divine Word"));
	addToDB(new Spell(currLevel, "Etherealness"));
	addToDB(new Spell(currLevel, "Finger of Death"));
	addToDB(new Spell(currLevel, "Fire Storm"));
	addToDB(new Spell(currLevel, "Forcecage"));
	addToDB(new Spell(currLevel, "Mirage Arcane"));
	addToDB(new Spell(currLevel, "Mordenkainen's Magnificent Mansion"));
	addToDB(new Spell(currLevel, "Mordenkainen's Sword"));
	addToDB(new Spell(currLevel, "Plane Shift"));
	addToDB(new Spell(currLevel, "Prismatic Spray"));
	addToDB(new Spell(currLevel, "Project Image"));
	addToDB(new Spell(currLevel, "Regenerate"));
	addToDB(new Spell(currLevel, "Resurrection"));
	addToDB(new Spell(currLevel, "Reverse Gravity"));
	addToDB(new Spell(currLevel, "Sequester"));
	addToDB(new Spell(currLevel, "Simulacrum"));
	addToDB(new Spell(currLevel, "Symbol"));
	addToDB(new Spell(currLevel, "Teleport"));
	
	currLevel = 8;
	addToDB(new Spell(currLevel, "Animal Shapes"));
	addToDB(new Spell(currLevel, "Antimagic Field"));
	addToDB(new Spell(currLevel, "Antipathy/Sympathy"));
	addToDB(new Spell(currLevel, "Clone"));
	addToDB(new Spell(currLevel, "Control Weather"));
	addToDB(new Spell(currLevel, "Demiplane"));
	addToDB(new Spell(currLevel, "Dominate Monster"));
	addToDB(new Spell(currLevel, "Earthquake"));
	addToDB(new Spell(currLevel, "Feeblemind"));
	addToDB(new Spell(currLevel, "Glibness"));
	addToDB(new Spell(currLevel, "Holy Aura"));
	addToDB(new Spell(currLevel, "Incendiary Cloud"));
	addToDB(new Spell(currLevel, "Maze"));
	addToDB(new Spell(currLevel, "Mind Blank"));
	addToDB(new Spell(currLevel, "Power Word Stun"));
	addToDB(new Spell(currLevel, "Sunburst"));
	addToDB(new Spell(currLevel, "Telepathy"));
	addToDB(new Spell(currLevel, "Trap the Soul"));
	addToDB(new Spell(currLevel, "Tsunami"));
	
	currLevel = 9;
	addToDB(new Spell(currLevel, "Astral Projection"));
	addToDB(new Spell(currLevel, "Foresight"));
	addToDB(new Spell(currLevel, "Gate"));
	addToDB(new Spell(currLevel, "Imprisonment"));
	addToDB(new Spell(currLevel, "Mass Heal"));
	addToDB(new Spell(currLevel, "Meteor Swarm"));
	addToDB(new Spell(currLevel, "Power Word Heal"));
	addToDB(new Spell(currLevel, "Power Word Kill"));
	addToDB(new Spell(currLevel, "Prismatic Wall"));
	addToDB(new Spell(currLevel, "Shapechange"));
	addToDB(new Spell(currLevel, "Storm of Vengeance"));
	addToDB(new Spell(currLevel, "Time Stop"));
	addToDB(new Spell(currLevel, "True Polymorph"));
	addToDB(new Spell(currLevel, "True Resurrection"));
	addToDB(new Spell(currLevel, "Weird"));
	addToDB(new Spell(currLevel, "Wish"));
}