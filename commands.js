var fs = require('fs'),
    os = require("os"),
    jsonfile = require('jsonfile')

var commands = {
  cmd_ping: function(command, message){
    console.log("Ping received from: " + message.author.username + "#" + message.author.discriminator);
    message.reply("Pong " + message.guild.id);
	},
  cmd_count: function(command, message){
    if(message.author.id == "186864070488621057")
    {
      console.log("Count from : " + message.author.username + "#" + message.author.discriminator);
      message.reply("There are " + message.guild.memberCount + " on " + message.guild.name);
    }
	},
  cmd_debug: function(command, message){
    if(message.author.id == "186864070488621057")
    {
      for(i = 0; i < message.guild.memberCount; i++)
      {
        console.log(message.guild.members.array()[i].user.username)
        //message.reply(message.guild.members.array()[i].user.username)
      }
    }
	},
  cmd_help: function(command, message){
    console.log("Help from : " + message.author.username + "#" + message.author.discriminator);
    message.reply("Les commandes actuellement disponible pour vous sont : !ping / !info / !tg \n \n Le bot est en plein developpement merci de comprendre ceci.");
  },
  cmd_test: function(command, message){
    // var file = fs.readFileSync('config/servers/' + message.guild.id + '.json', 'utf8')
    // //var lineNbr = file.split(/[\r\n]/).map(function (line, l) { if (/(\[roles\])+/g.test(line)){ return l + 1 } })
    //
    // console.log('test');
    // // processInput('config/servers/' + message.guild.id + '.json', "testligne" , lineNbr)
  },
  cmd_tg: function(command, message){
    substring = "@";
    var users = [];
    yes = 0

    for(i = 0; i < message.guild.memberCount; i++)
    {
      users.push(message.guild.members.array()[i].user.username);
    }

    for(i = 0; i < users.length; i++)
    {
      if (message.content.indexOf(users[i]) !== -1)
      {
        yes = 1
        user = users[i]
        console.log(users[i])
        message.reply("<@" + message.guild.members.array()[i].user.id + ">" + ":regional_indicator_t::regional_indicator_a: :regional_indicator_g::regional_indicator_u::regional_indicator_e::regional_indicator_u::regional_indicator_l::regional_indicator_e:");
        //idUser = message.guild.members.array()[length].user.discriminator
      }
    }

    if(yes == 0)
    {
      message.reply("entrer un utilisateurs et verifier a ce que l'ortographe de celui-ci sois P.A.R.F.A.I.T.E.M.E.N.T correct. Merci.");
    }
  },
  cmd_info: function(command, message){
    var permissionList = "";
    jsonfile.readFile('config/servers/' + message.guild.id + '.json', function(err, obj) {
      //user
      if (typeof obj.permissions.users[message.author.id] !== 'undefined'){
        for (var i = 0; i < obj.permissions.users[message.author.id].length; i++) {
          permissionList += obj.permissions.users[message.author.id][i]+ " "
        }
      }
      //default
      for (var i = 0; i < obj.permissions.default.length; i++) {
          permissionList += obj.permissions.default[i]+ " "
      }

      var reply = "```\n"+
        "Username: "+ message.author.username+ "#"+ message.author.discriminator+ "\n"+
        "UserID: "+ message.author.id+ "\n"+
        "Server ID: "+ message.guild.id+ "\n"+
        "Permission : "+ permissionList+
        "```";

      message.reply(reply);
    })



  }
}

module.exports = commands;
