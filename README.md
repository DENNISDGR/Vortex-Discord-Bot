# Vortex Discord Bot

# Who is Vortex?
Vortex was created by the Horizon team (Mainly me and ghostt) as a side project and a custom addition for our Discord server.
The server itself is closed at the momment without any plans of reopening, though you can still join and look a bit arround [here](https://discord.gg/3EfBe5q).

# Features
**The default set of modules includes but is not limited to:**

* Moderation features (kick/ban/mute/chat cleanup)
* Music features (YouTube, playlists, queues)
* Fun commands (8ball, snake, meme)
* Currency commands (beg, balance, deposit, withdraw etc.) *note this requires some technical knowledge in databases and specifically in MongoDB to set up properly*
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

3. Create a file called .env and include the following:

``` console
DISCORD_TOKEN = <The token of the bot that you've created from the Discord Developer Prtal>
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