module.exports = [{
name: "woodshop",
code: `
$author[1;Welcome to the woodshop;https://images-ext-2.discordapp.net/external/TXgqNXq6sHLyNNY2zxBItXZrc1nvEmnS9WlWT2LfilU/https/i.imgur.com/ipL2Zco.png?width=421&height=421]
$thumbnail[1;https://images-ext-2.discordapp.net/external/TXgqNXq6sHLyNNY2zxBItXZrc1nvEmnS9WlWT2LfilU/https/i.imgur.com/ipL2Zco.png?width=421&height=421]
$color[1;BORDO]
$description[1;**Hey there fellow traveler i see your checking out my shop
dont be confused with the name woodshop since we dont just sell wood we sell everything related to nature
navigate through the select menu**]

$addSelectMenu[1;wood;Wood shop;1;1;no;Page 1:First page of the wood shop:1:no:<:dfire:1013366909716144218>]`
}, {
  name: "wood", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed:
{color:BORDO} {title:**Wood shop**} 
{thumbnail:https://images-ext-1.discordapp.net/external/Wim45dtQykDoodWob97EXdbXTgc8fOh9n__e5GjsFCc/https/i.imgur.com/IdfGvjC.png?width=421&height=421} {description:

<:logs:1013366448867000320> **Wooden logs**
**ID:** \`wood\`
**Cost:** \`5\`$getVar[xpsymbol]

<:mbwood:1013366670707929168> **Magic wooden logs**
**ID:** \`magicwood\`
**Cost:** \`50\`$getVar[xpsymbol]

<:dfire:1013366909716144218> **Campfire**
**ID:** \`magicwood\`
**Cost:** \`10\`$getVar[xpsymbol]}};;;yes]
$onlyif[$interactionData[values[0]]==1;]`}]