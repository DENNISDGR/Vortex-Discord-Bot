# Vortex, A Discord Bot

# About Vortex
Vortex was initially a closed source bot created to offer services of all kinds to Horizon, a Discord server owned by a friend of mine. That server, however, was shut down on September 7th, 2021 and currently there no plans indicating its reopening any time soon. 

This put Vortex on a hiatus for a few months, but we recently got back at it and decided it would be best to make the most out of it. 

# Features
**The default set of modules includes but is not limited to:**

* Moderation features (kick/ban/mute/chat clean-up)
* Music features (YouTube, Playlists, queues)
* Fun commands (8ball, snake, meme)
* Currency commands (beg, balance, deposit, withdraw etc.) *Note: this requires some technical knowledge in databases and specifically in MongoDB to set up properly*
* More miscellaneous utilities

# Installation
Though it is generally advised to copy segments of the code from the GitHub repo and use it in your own project in a way that fits your needs, you can clone it into your own machine or host it in the cloud after some troubleshooting.

### You'll need some dependencies to run the bot yourself, these are:

* [nodejs 16.x](https://nodejs.org/en/download/)
* [npm](https://www.npmjs.com/)
* [MongoDB](https://www.mongodb.com/)

You can grab all the above from the links provided or from your preferred package manager.

### After that, you have to do the following proccess:

1. Clone the repo into your machine.

``` console 
git clone https://github.com/DENNISDGR/Vortex-Discord-Bot.git
```

2. Change into the directory.

``` console
cd Vortex-Discord-Bot
```

3. Fix the code a bit so it works for your server and create a file called `.env` including the following:

``` console
DISCORD_TOKEN = <The token of the bot that you've created from the Discord Developer Portal>
PREFIX = <Your preferrer prefix>
MONGODB_SRV = <The SRV if you have set up a MongoDB database>
```

4. Install the dependencies.

``` console
npm install
```

5. Run the bot.

``` console
node main.js
```

# Heroku

Additionally, you can deploy it to Heroku.

I will probably provide a step by step guide on how to do this some time in the future including setting up the database, ~don't take my word for it though~. For now [this video](https://www.youtube.com/watch?v=VZUulBMKfoY) should help you set up the basics on heroku. *Note: I already have the procfile ready for you.*

# License
Released under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)

# Finally

### Contribute
If you have any suggestions or want to contribute to the bot, please do so on the GitHub repo.
Also, if you have any questions, feel free to ask me on Discord (DENNISDGR#4419).

### Support
I know that this is only my first project, but if you want to support the development of the bot, you can do so by donating in one of the following ways:

* XMR address: 89Rg5gxnuGpbKSCsXfmtnEYPubMP6HkKP9WYXNJNCVinVyvKeY5XGeRFJDK7fhNnSs14yXtGxFivNDSzeJaMaPbXVp4RzAy
* BTC address: bc1q8nsv46auuf8zfreznnp4turhd3weegv87kfxlk
* Patreon ~coming soon~