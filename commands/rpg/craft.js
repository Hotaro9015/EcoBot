module.exports = {
name: "craft",
$if: "v4",
code: `
$if[$message[1]==lucky]
$setGlobalUserVar[lucky;$sum[$getGlobalUserVar[lucky];$multi[$message[2];1]]]
$setGlobalUserVar[wbottle;$sub[$getGlobalUserVar[wbottle];$multi[$message[2];1]]]
$setGlobalUserVar[leaf;$sub[$getGlobalUserVar[leaf];$multi[$message[2];25]]]
$setGlobalUserVar[wood;$sub[$getGlobalUserVar[wood];$multi[$message[2];50]]]

$author[1;Item crafted;https://cdn.discordapp.com/emojis/920052406467838013.png?size=128]
$thumbnail[1;https://cdn.discordapp.com/emojis/920052406467838013.png?size=128]
$color[1;$getVar[color]]
$description[1;**You have successfully crafted** \`$numberSeparator[$multi[$message[2];1];,]\`<:gpotion:1013687693626064947>
\` - $numberSeparator[$multi[$message[2];25];,] \`<:leaf:1013687911146868777>
\` - $numberSeparator[$multi[$message[2];1];,] \` <:woterbottle:1013360943905898516>
\` - $numberSeparator[$multi[$message[2];50];,] \`<:logs:1013366448867000320>
]


$onlyIf[$message[2]>0;**specify an amount please**]

$onlyIf[$getGlobalUserVar[leaf]>$multi[$message[2];24];{newEmbed: {thumbnail:https://cdn.discordapp.com/emojis/827568525425115148.png?size=56} {color:RED} {title:**<:no:986620613537959946> Error occured**} {description:**You do not have enough <:leaf:1013687911146868777>** \`$numberSeparator[$getGlobalUserVar[leaf];,] / $numberSeparator[$multi[$message[2];25];,]\` <:leaf:1013687911146868777>}}]

$onlyIf[$getGlobalUserVar[wbottle]>$multi[$message[2];1];{newEmbed: {thumbnail:https://cdn.discordapp.com/emojis/827568525425115148.png?size=56} {color:RED} {title:**<:no:986620613537959946> Error occured**} {description:**You do not have enough <:woterbottle:1013360943905898516>** \`$numberSeparator[$getGlobalUserVar[wbottle];,] / $numberSeparator[$multi[$message[2];1];,]\` <:woterbottle:1013360943905898516>}}]


$onlyIf[$getGlobalUserVar[wood]>$multi[$message[2];49];{newEmbed: {thumbnail:https://cdn.discordapp.com/emojis/827568525425115148.png?size=56} {color:RED} {title:**<:no:986620613537959946> Error occured**} {description:**You do not have enough <:logs:1013366448867000320>** \`$numberSeparator[$getGlobalUserVar[wood];,] / $numberSeparator[$multi[$message[2];50];,]\` <:logs:1013366448867000320>}}]

$onlyIf[$checkContains[$message[2];-;+;minus]==false;{newEmbed: {thumbnail:https://cdn.discordapp.com/emojis/827568525425115148.png?size=56} {color:RED} {title:**<:no:986620613537959946> Error occured**} {description:**Please do not us negative numbers**}}]

$else

$if[$message[1]==magicwood]
$setGlobalUserVar[magicwood;$sum[$getGlobalUserVar[magicwood];$multi[$message[2];1]]]

$setGlobalUserVar[blaze;$sub[$getGlobalUserVar[blaze];$multi[$message[2];5]]]
$setGlobalUserVar[wood;$sub[$getGlobalUserVar[wood];$multi[$message[2];100]]]

$author[1;Item crafted;https://cdn.discordapp.com/emojis/920058962731225108.png?size=128]
$thumbnail[1;https://cdn.discordapp.com/emojis/920058962731225108.png?size=128]
$color[1;$getVar[color]]
$description[1;**You have successfully crafted** \`$numberSeparator[$multi[$message[2];1];,]\`<:mbwood:1013366670707929168>
\` - $numberSeparator[$multi[$message[2];5];,] \` <:blaxemate:1013688406691291156>
\` - $numberSeparator[$multi[$message[2];100];,] \`<:logs:1013366448867000320>
]


$onlyIf[$message[2]>0;**specify an amount please**]

$onlyIf[$getGlobalUserVar[blaze]>$multi[$message[2];24];{newEmbed: {thumbnail:https://cdn.discordapp.com/emojis/827568525425115148.png?size=56} {color:RED} {title:**<:no:986620613537959946> Error occured**} {description:**You do not have enough <:blaxemate:1013688406691291156>** \`$numberSeparator[$getGlobalUserVar[blaze];,] / $numberSeparator[$multi[$message[2];5];,]\` <:blaxemate:1013688406691291156>}}]



$onlyIf[$getGlobalUserVar[wood]>$multi[$message[2];99];{newEmbed: {thumbnail:https://cdn.discordapp.com/emojis/827568525425115148.png?size=56} {color:RED} {title:**<:no:986620613537959946> Error occured**} {description:**You do not have enough <:logs:1013366448867000320>** \`$numberSeparator[$getGlobalUserVar[wood];,] / $numberSeparator[$multi[$message[2];100];,]\` <:logs:1013366448867000320>}}]

$onlyIf[$checkContains[$message[2];-;+;minus]==false;{newEmbed: {thumbnail:https://cdn.discordapp.com/emojis/827568525425115148.png?size=56} {color:RED} {title:**<:no:986620613537959946> Error occured**} {description:**Please do not us negative numbers**}}]

$else

$if[$message[1]==campfire]
$setGlobalUserVar[campfire;$sum[$getGlobalUserVar[campfire];$multi[$message[2];1]]]


$setGlobalUserVar[wood;$sub[$getGlobalUserVar[wood];$multi[$message[2];50]]]

$author[1;Item crafted;https://cdn.discordapp.com/emojis/920058962731225108.png?size=128]
$thumbnail[1;https://cdn.discordapp.com/emojis/920058962731225108.png?size=128]
$color[1;$getVar[color]]
$description[1;**You have successfully crafted** \`$numberSeparator[$multi[$message[2];1];,]\`<:dfire:1013366909716144218>
\` - $numberSeparator[$multi[$message[2];50];,] \`<:logs:1013366448867000320>
]


$onlyIf[$message[2]>0;**specify an amount please**]





$onlyIf[$getGlobalUserVar[wood]>$multi[$message[2];49];{newEmbed: {thumbnail:https://cdn.discordapp.com/emojis/827568525425115148.png?size=56} {color:RED} {title:**<:no:986620613537959946> Error occured} {description:**You do not have enough ** <:logs:1013366448867000320> \`$numberSeparator[$getGlobalUserVar[wood];,] / $numberSeparator[$multi[$message[2];50];,]\` <:logs:1013366448867000320>}}]

$onlyIf[$checkContains[$message[2];-;+;minus]==false;{newEmbed: {thumbnail:https://cdn.discordapp.com/emojis/827568525425115148.png?size=56} {color:RED} {title:**<:no:986620613537959946> Error occured} {description:**Please do not us negative numbers**}}]
$endif
$endif
$endif
$suppressErrors[ {error} ]`}