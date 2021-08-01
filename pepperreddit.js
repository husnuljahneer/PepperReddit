class REDDIT {

  constructor(options) {
    
    if (!options.message) throw new TypeError('Missing argument: message')
    this.message = options.message;

  }
  async start(args) {
    const Discord = require('discord.js');
      const got = require('got');
      const name = args.join(" ");
      if (!name) {
      const embed = new Discord.MessageEmbed();
	    got('https://www.reddit.com/r/meme/random/.json')
	  	.then(response => {
			const [list] = JSON.parse(response.body);
			const [post] = list.data.children;

			const permalink = post.data.permalink;
			const memeUrl = `https://reddit.com${permalink}`;
			const memeImage = post.data.url;
			const memeTitle = post.data.title;
			const memeUpvotes = post.data.ups;
			const memeNumComments = post.data.num_comments;

			embed.setTitle(`${memeTitle}`);
			embed.setURL(`${memeUrl}`);
			embed.setColor('PURPLE');
			embed.setImage(memeImage);
			embed.setFooter(`👍 ${memeUpvotes} 💬 ${memeNumComments}`);

			this.message.channel.send(embed);
	  	})
	  	.catch(console.error);
      }

      const embed = new Discord.MessageEmbed();
	    got(`https://www.reddit.com/r/${name}/random/.json`)
	  	.then(response => {
			const [list] = JSON.parse(response.body);
			const [post] = list.data.children;

			const permalink = post.data.permalink;
			const memeUrl = `https://reddit.com${permalink}`;
			const memeImage = post.data.url;
			const memeTitle = post.data.title;
			const memeUpvotes = post.data.ups;
			const memeNumComments = post.data.num_comments;

			embed.setTitle(`${memeTitle}`);
			embed.setURL(`${memeUrl}`);
			embed.setColor('PURPLE');
			embed.setImage(memeImage);
			embed.setFooter(`👍 ${memeUpvotes} 💬 ${memeNumComments}`);

			this.message.channel.send(embed);
		})
		.catch(console.error);
  }
}

module.exports = REDDIT;