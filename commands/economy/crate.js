module.exports = {
name: "open",
$if: "v4",
aliases: ['crate','crates','opencrate'],
code: `
$if[$message[1]==common]
<:common:1013630604157403166> **|** **You are now opening $message[2]<:common:1013630604157403166>**

$editIn[3s;<:common:1013630604157403166> **|** **You are now opening $message[2]<:common:1013630604157403166>** and got

$multi[$message[2];$random[1;500]]$getVar[symbol]

$multi[$message[2];$random[1;5]]<:silverore:1013367696739553280>

$multi[$message[2];$random[1;5]]<:energyss:1013368166472241183>]

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1;500]]]
$setGlobalUserVar[elixer;$sum[$getGlobalUserVar[elixer];$multi[$message[2];$random[1;5]]]]
$setGlobalUserVar[silver;$sum[$getGlobalUserVar[silver];$multi[$message[2];$random[1;5]]]]
$setGlobalUserVar[common;$sub[$getGlobalUserVar[common];$multi[1;$message[2]]]]

$onlyIf[$message[2]>0;Specify an amount]
$onlyIf[$getGlobalUserVar[common]>=$multi[1;$message[2]];You dont have that many to open]
$else

$if[$message[1]==uncommon]
<:uncommonly:1013630835859132516> **|** **You are now opening $message[2]<:uncommonly:1013630835859132516>**

$editIn[3s;<:uncommonly:1013630835859132516> **|** **You are now opening $message[2]<:uncommonly:1013630835859132516>** and got

$multi[$message[2];$random[1;1500]]$getVar[symbol]

$multi[$message[2];$random[1;5]]<:silverore:1013367696739553280>

$multi[$message[2];$random[1;10]]<:crystal:1013664737520787497>

$multi[$message[2];$random[1;5]]<:energyss:1013368166472241183>]

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1;1500]]]
$setGlobalUserVar[elixer;$sum[$getGlobalUserVar[elixer];$multi[$message[2];$random[1;5]]]]
$setGlobalUserVar[silver;$sum[$getGlobalUserVar[silver];$multi[$message[2];$random[1;50]]]]
$setGlobalUserVar[crystal;$sum[$getGlobalUserVar[crystal];$multi[$message[2];$random[1;10]]]]
$setGlobalUserVar[uncommon;$sub[$getGlobalUserVar[uncommon];$multi[1;$message[2]]]]

$onlyIf[$message[2]>0;Specify an amount]
$onlyIf[$getGlobalUserVar[uncommon]>=$multi[1;$message[2]];You dont have that many to open]

$else

$if[$message[1]==rare]
<:rare:1013631031024295956> **|** **You are now opening $message[2]<:rare:1013631031024295956>**

$editIn[3s;<:rare:1013631031024295956> **|** **You are now opening $message[2]<:rare:1013631031024295956>** and got

$multi[$message[2];$random[1;2500]]$getVar[symbol]

$multi[$message[2];$random[1;11]]<:silverore:1013367696739553280>

$multi[$message[2];$random[1;10]]<:crystal:1013664737520787497>

$multi[$message[2];$random[1;4]] <:ruby:1013665222935969792>

$multi[$message[2];$random[1;5]]<:energyss:1013368166472241183>]

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1;2500]]]
$setGlobalUserVar[elixer;$sum[$getGlobalUserVar[elixer];$multi[$message[2];$random[1;5]]]]
$setGlobalUserVar[silver;$sum[$getGlobalUserVar[silver];$multi[$message[2];$random[1;11]]]]
$setGlobalUserVar[crystal;$sum[$getGlobalUserVar[crystal];$multi[$message[2];$random[1;10]]]]
$setGlobalUserVar[ruby;$sum[$getGlobalUserVar[ruby];$multi[$message[2];$random[1;4]]]]
$setGlobalUserVar[rare;$sub[$getGlobalUserVar[rare];$multi[1;$message[2]]]]

$onlyIf[$message[2]>0;Specify an amount]
$onlyIf[$getGlobalUserVar[rare]>=$multi[1;$message[2]];You dont have that many to open]

$else

$if[$message[1]==legendary]
<:legendary:1013639038919512155> **|** **You are now opening $message[2]<:legendary:1013639038919512155>**

$editIn[3s;<:legendary:1013639038919512155> **|** **You are now opening $message[2]<:legendary:1013639038919512155>** and got

$multi[$message[2];$random[1;5000]]$getVar[symbol]

$multi[$message[2];$random[1;11]]<:silverore:1013367696739553280>

$multi[$message[2];$random[1;12]]<:crystal:1013664737520787497>

$multi[$message[2];$random[1;13]] <:ruby:1013665222935969792>

$multi[$message[2];$random[1;14]] <:uranium:1013665498367524994>

$multi[$message[2];$random[1;15]] <:sulphur:1013665816618745936>

$multi[$message[2];$random[1;50]]<:energyss:1013368166472241183>]

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1;5000]]]
$setGlobalUserVar[elixer;$sum[$getGetGlobalUserVar[elixer];$multi[$message[2];$random[1;50]]]]
$setGlobalUserVar[silver;$sum[$getGlobalUserVar[silver];$multi[$message[2];$random[1;11]]]]
$setGlobalUserVar[crystal;$sum[$getGlobalUserVar[crystal];$multi[$message[2];$random[1;12]]]]
$setGlobalUserVar[ruby;$sum[$getGlobalUserVar[ruby];$multi[$message[2];$random[1;13]]]]
$setGlobalUserVar[uranium;$sum[$getGlobalUserVar[uranium];$multi[$message[2];$random[1;14]]]]
$setGlobalUserVar[sulphur;$sum[$getGlobalUserVar[sulphur];$multi[$message[2];$random[1;15]]]]
$setGlobalUserVar[legendary;$sub[$getGlobalUserVar[legendary];$multi[1;$message[2]]]]

$onlyIf[$message[2]>0;Specify an amount]
$onlyIf[$getGlobalUserVar[legendary]>=$multi[1;$message[2]];You dont have that many to open]
$endif
$endif
$endif
$endif
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**lockdown**} {color:RED} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**hello $username im very sorry but my commands have been temporarily been shutdown so that means you are not gonna be able to use any of my commands
please contact my owner** \`$userTag[$botownerid]\` **If you have any questions. or come to my [support server](https://discord.gg/PrnwYwaP5c)**}}]`}