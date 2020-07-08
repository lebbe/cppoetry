
const luni = require('lunicode')

var As = [
  'scarlet',
  'electrical',
  'evil',
  'good',
  'alien',
  'strange',
  'sacrilogious',
  'drifting',
  'false',
  'static',
  'neon'
]

var Ns = [
  'clouds',
  'sheep',
  'aliens',
  'alien',
  'creature',
  'robot',
  'synth',
  'replicator',
  'robocop',
  'robots',
  'cocksuckers',
  'metropolis'
]

var VPs = [
  'we are all going to',
  'are we all going to',
  'everyone must',
  'please let us',
  'can we',
  'must we',
  'can I',
  'must I'
]

var Vs = [
  'die',
  'sleep',
  'cry',
  'show mercy',
  'fall',
  'succumb to misery',
  'punctuate',
  'get shot'
]


function random(array) {
	return array[Math.floor(Math.random() * array.length)]
}

function mirror(text) {
	return luni.tools.flip.encode(text)
}

function tiny(text) {
	return luni.tools.tiny.encode(text)
}

function squares(text) {
	return luni.tools.roundsquares.encode(text)
}

function bubbles(text) {
	return luni.tools.bubbles.encode(text.split('').join(' '))
}

luni.tools.creepify.options.maxHeight = 1
luni.tools.creepify.options.randomization = 20
luni.tools.creepify.options.middle = false

function creepyTop(text) {
	luni.tools.creepify.options.bottom = false
	luni.tools.creepify.options.top = true
	return text.split('').map(function(a) {
		if (a === ' ') return a;
		return luni.tools.creepify.encode(a)
	}).join('')
}

function creepyBottom(text) {
	luni.tools.creepify.options.bottom = true
	luni.tools.creepify.options.top = false
	return text.split('').map(function(a) {
		if (a === ' ') return a;
		return luni.tools.creepify.encode(a)
	}).join('')
}


function onlyText() {
  const line1 = random(As) + ' ' + random(As) + ' ' + random(Ns)
  const line2 = random(As) + ' ' + random(Ns)
  const line3 = random(As) + ' ' + random(Ns)
  const line4 = random(VPs) + ' ' + random(Vs)
  return [line1, line2, line3, line4]
}

function generate() {
  let [line1, line2, line3, line4] = onlyText()

	// MIRRROOORRR
	if(Math.random() > 0.95) {
		line1 = mirror(line1)
		line2 = mirror(line2)
		line3 = mirror(line3)
		line4 = mirror(line4)
	} else if(Math.random() > 0.97) {
		line1 = bubbles(line1)
		line2 = bubbles(line2)
		line3 = bubbles(line3)
		line4 = bubbles(line4)
	} else if(Math.random() > 0.50) {
		line1 = tiny(line1)
		line2 = tiny(line2)
		line3 = tiny(line3)
		line4 = tiny(line4)
	}


   	// LEFTPADDDDD RIGHT ALIGN!
	const longest = Math.max(line1.length, Math.max(line2.length, Math.max(line3.length, line4.length)))

	line1 = line1.padStart(longest, ' ')
	line2 = line2.padStart(longest, ' ')
	line3 = line3.padStart(longest)
	line4 = line4.padStart(longest)


	// f̷͙̠̿̊ü̴̘̲̒ţ̷̬̯̓u̶͈̎ŕ̷̨͇̱͒è̶̦͍̔̊ ̵̰͑d̴̰͗̑̚ř̷͇̞͝ĕ̵̲͝a̸̖͔̅̀͠m̷̯̦̥̓͂͗s̴̨̏̉ ̶̨̘̿õ̶̱̰̀͝f̴̥͆ ̸͉̀t̶̙͋h̵͓͕͛ę̷̆̉̍ ̶̙̒̿p̸͉̟̽r̶̛̺̔ȇ̴̥̹̳̚͝s̶̭̜͛́́ë̷͙͙́n̸̜̉͠t̶̡̲̖̐̊
	line1 = creepyTop(line1)
	line2 = creepyTop(line2)
	line3 = creepyBottom(line3)
	line4 = creepyBottom(line4)

	return [line1, line2, line3, line4]
}


module.exports = {
  poem: generate,
  onlyText: onlyText
};
