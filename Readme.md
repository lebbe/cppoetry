
c͔̮̰̟̞͑̑́͘y̖͇͔̞͒̑̚͘b̺̟͎̀̓̏̕͝e̲̲̰͖̫͋̉̒̔r͔̦̜̤̾̉̉̐͝p̨͔̩̾̈́̿͘ȕ͖̦̼͓͚̿͆̊̌n̺̟̱̟̣̉͋̐̈́͝k͕̼͎̍͐͌̄͛ͅ ͕͍̮͉͓͛͋͑̋̓ṕ̪̙͉͎̫̈́͆̆͘ớ̝̟̖͕͚̀̃ẽ͓͎̖͚̌̂̚t̻̩̖̦̂̀̄̿̀ŗ̖͖̤̑̏̏͑̈y̡̛̜̜̮̓͆̓
===================


Spits out a cyberpunk poem. Don't mind the glitches.

```
ꜱ̑ᴛ͑ᴀ̉ᴛ̔ɪ̐ᴄ̏ ɴ͒ᴇ͝ᴏ̈́ɴ̊ ꜱ̒ʜ͝ᴇ́ᴇ̇ᴘ͛
 ꜱ̊ᴛ̊ʀ͛ᴀ̚ɴ̅ɢ͘ᴇ̊ ᴄ͋ʀ̾ᴇ̚ᴀ̽ᴛ͂ᴜ͝ʀ̇ᴇ͛
  ᴇ͜ᴠ̥ɪ̦ʟ͉ ᴍ̭ᴇ̢ᴛ̯ʀ̮ᴏ̣ᴘ̗ᴏ̲ʟ̗ɪ͔ꜱ̻
      ᴄͅᴀ͖ɴ̰ ᴡ̧ᴇ̻ ꜰ̣ᴀ͍ʟ̡ʟ̪
```


See example at https://lebbe.github.io/cppoetry/index.html


To require it just

```
const poem = require('./index.js').poem
```

if you don't want random glitchiness and stuff try


```
const poem = require('./index.js').onlyText
```


```
static strange alien
electrical alien
sacrilogious robot
must we punctuate
```

The poem contains of four lines, inside a JS array.


Please note that the vocabulary contains some filthy words.


Please suggest more words in the vocabulary via issues or PR.


Try to require it or something I think you might install it somehow with npm
from github.



Also check out the example irc bot. Just clone project and insert legit
irc network and channel. Then start the show with:

```
node ./bot.js
```


If you want to build the project into its web app version yourself,
you need to install browserify and terser, and run these commands:

```
browserify .\app.js -o bundle.js
terser .\bundle.js -o bundle-min.js
```
