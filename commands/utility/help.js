module.exports = [{
  name: "help",
  aliases: ['hepl','hell','hepp','heep'], 
  $if: "v4", 
  usage: "\`$getServerVar[prefix]help <command>\`",
  code: `
$if[$message==]
$title[1;<:iconfire:917445081890431066> $username[$clientid] commandlist;https://Horizon.snipedprox.repl.co]
$description[1;
**Use the select menu below to view all my cool commands**.

<:ribbonn:1013996296606077101> **[Offical server](https://discord.gg/PrnwYwaP5c)  [Website](https://www.ecobot.ga) **<:ribbonn:1013996296606077101>]
$color[1;$getVar[color]]
$addSelectMenu[1;helpcmd;Help categories;1;1;no;economy commands:All of my economy commands.:economy:no:<:money:1013427928496877680>;Utility commands:All of my utility commands.:utility:no:<:Utility:1014001091945431060>;Promocode commands:All of my promocode commands.:promocodes:no:<:promocode:1014001613142241292>;Music commands:All of my music commands.:music:no:<:music:1014001988222079086>;Pet commands:All of my pet commands.:pet:no:<:panda:1013758585672585266>;Level commands:All of my level commands.:rank:no:<:rankings:1014006802628755477>]
$endif`
}, {
  name: "helpcmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed:{title:Utility commands}{thumbnail:$userAvatar[$clientID]}{description:\`setguildavatar\` **,** \`setguildname\` **,** \`prefix\` **,** \`help\` **,** \`avatar\` **,** \`servericon\` **,** \`guildname\` **,** \`invite\`}{footer:My server prefix is $getServerVar[prefix]}{color:$getVar[color]}};;;yes]
$onlyif[$interactionData[values[0]]==utility;]`
}, {
  name: "helpcmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed:{title:Economy commands}{thumbnail:$userAvatar[$clientID]}{description:\`job\` **,** \`work\` **,** \`beg\` **,** \`deposit\` **,** \`withdraw\` **,** \`stream\` **,** \`shop\` **,** \`mine\` **,** \`inventory\` **,** \`buy\` **,** \`balance\` **,** \`sell\` **,** \`fish\` **,** \`hunt\` **,** \`daily\` **,** \`weekly\` **,** \`collect\` **,** \`profile\` **,** \`xp\` **,** \`box\` **,** \`boxes\` **,** \`gift\` **,** \`use\` **,** \`stroll\` **,** \`adventure\` **,** \`craft\` **,** \`recipes\` **,** \`chop\` **,** \`melt\` **,** \`slots\` **,** \`woodshop\` **,** \`pickaxe\` **,** \`pickaxe upgrade\` **,** \`pickaxe recharge\` **,** \`pickaxe stats\` **,** \`pickaxe list\`}{footer:My server prefix is $getServerVar[prefix]}{color:$getvar[color]}};;;yes]
$onlyif[$interactionData[values[0]]==economy;]`
}, {
  name: "helpcmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed:{title:Promocode commands}{thumbnail:$userAvatar[$clientID]}{description:\`pgen\` **,** \`pclaim\` **,** \`pdelete\`}{footer:My server prefix is $getServerVar[prefix]}{color:$getVar[color]}};;;yes]
$onlyif[$interactionData[values[0]]==promocodes;]`
}, {
  name: "helpcmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed:{title:Music commands}{thumbnail:$userAvatar[$clientID]}{description:\`play\` **,** \`volume\`}{footer:My server prefix is $getServerVar[prefix]}{color:$getVar[color]}};;;yes]
$onlyif[$interactionData[values[0]]==music;]`
}, {
  name: "helpcmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed:{title:Pet commands}{thumbnail:$userAvatar[$clientID]}{description:\`pet\` **,** \`pet-sleep\` **,** \`pet-feed\` **,** \`pet-rename\` **,** \`pet-collect\` **,** \`pet-shop\` **,** \`adopt\` **,** \`pet-play\`}{footer:My server prefix is $getServerVar[prefix]}{color:$getVar[color]}};;;yes]
$onlyif[$interactionData[values[0]]==pet;]`
    }, {
  name: "helpcmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed:{title:Level commands}{thumbnail:$userAvatar[$clientID]}{description:\`rank\` **,** \`setbg\`}{footer:My server prefix is $getServerVar[prefix]}{color:$getVar[color]}};;;yes]
$onlyif[$interactionData[values[0]]==rank;]`
  }];
