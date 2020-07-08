const irc = require('irc')
const poem = require('./index.js').poem

console.log(poem())

const client = new irc.Client('irc.network.here', 'replicant', {
	channels: ['#channel_here']
})
.addListener('message', async function (from, to, message) {
	if(/^\?poem/.test(message)) {

    const p = poem();

    async function fuckWait() {
      return new Promise(function(resolve) {
        setTimeout(resolve, 1000)
      })
    }

    client.say(to, p[0])
    await fuckWait()
    client.say(to, p[1])
    await fuckWait()
    client.say(to, p[2])
    await fuckWait()
    client.say(to, p[3])

		return
	}
})
