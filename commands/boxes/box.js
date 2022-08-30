module.exports = {
name: "box",
$if: "v4",
code: `
$if[$message[1]==cbox]
$author[1;Opening common box]
$thumbnail[1;https://media.discordapp.net/attachments/916694829193379872/916723316889378846/discord-avatar-128-5OX60.gif]
$color[1;$getVar[color]]
$description[1;**You are opening $numberSeparator[$multi[$message[2];1];,]$get[emoji]...**]
$editIn[3s;{newEmbed:{author:Opened $numberSeparator[$multi[$message[2];1];,] common lootboxes} {color:$getVar[color]} {thumbnail:https://media.discordapp.net/attachments/916694829193379872/916723316889378846/discord-avatar-128-5OX60.gif} {description:<a:opened:1013340779822985277> **| You opened $numberSeparator[$multi[$message[2];1];,]$get[emoji] and you got $numberSeparator[$multi[$message[2];$random[1;500]];,]$getVar[symbol] and $numberSeparator[$multi[$message[2];$random[1;3]];,]$getVar[xpsymbol]**}}]
$setGlobalUserVar[xpt;$sum[$getGlobalUserVar[xpt];$multi[$message[2];$random[1;3]]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[$message[2];$random[1;500]]]]
$setGlobalUserVar[cbox;$sub[$getGlobalUserVar[cbox];$multi[$message[2];1]]]
$onlyIf[$isNumber[$message[2]]==true;<:no:986620613537959946> **Not a valid number]
$onlyIf[$message[2]>0;<:no:986620613537959946> **Please specify an amount**]
$onlyIf[$getGlobalUserVar[cbox]>=$multi[$message[2];1];<:no:986620613537959946> **You do not have enough $get[emoji]**]
$let[emoji;<:common:1013341218702377001>]
$else
$if[$message[1]==ubox]
$author[1;Opening uncommon box]
$thumbnail[1;https://media.discordapp.net/attachments/916694829193379872/916723316889378846/discord-avatar-128-5OX60.gif]
$color[1;$getVar[color]]
$description[1;**You are opening $numberSeparator[$multi[$message[2];1];,]$get[emoji]...**]
$editIn[3s;{newEmbed:{author:Opened $numberSeparator[$multi[$message[2];1];,] uncommon lootboxes} {color:$getVar[color]} {thumbnail:https://media.discordapp.net/attachments/916694829193379872/916723316889378846/discord-avatar-128-5OX60.gif} {description:<a:opened:1013340779822985277> **| You opened $numberSeparator[$multi[$message[2];1];,]$get[emoji] and you got $numberSeparator[$multi[$message[2];$random[100;500]];,]$getVar[symbol] and $numberSeparator[$multi[$message[2];$random[2;4]];,]$getVar[xpsymbol]**}}]
$setGlobalUserVar[xpt;$sum[$getGlobalUserVar[xpt];$multi[$message[2];$random[2;4]]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[$message[2];$random[100;500]]]]
$setGlobalUserVar[ubox;$sub[$getGlobalUserVar[ubox];$multi[$message[2];1]]]
$onlyIf[$isNumber[$message[2]]==true;<:no:986620613537959946> **Not a valid number]
$onlyIf[$message[2]>0;<:no:986620613537959946> **Please specify an amount**]
$onlyIf[$getGlobalUserVar[ubox]>=$multi[$message[2];1];<:no:986620613537959946> **You do not have enough $get[emoji]**]
$let[emoji;<:uncommon:1013342052253171712>]
$else
$if[$message[1]==rbox]
$author[1;Opening rare box]
$thumbnail[1;https://media.discordapp.net/attachments/916694829193379872/916723316889378846/discord-avatar-128-5OX60.gif]
$color[1;$getVar[color]]
$description[1;**You are opening $numberSeparator[$multi[$message[2];1];,]$get[emoji]...**]
$editIn[3s;{newEmbed:{author:Opened $numberSeparator[$multi[$message[2];1];,] rare lootboxes} {color:$getVar[color]} {thumbnail:https://media.discordapp.net/attachments/916694829193379872/916723316889378846/discord-avatar-128-5OX60.gif} {description:<a:opened:1013340779822985277> **| You opened $numberSeparator[$multi[$message[2];1];,]$get[emoji] and you got $numberSeparator[$multi[$message[2];$random[100;1000]];,]$getVar[symbol] and $numberSeparator[$multi[$message[2];$random[1;5]];,]$getVar[xpsymbol]**}}]
$setGlobalUserVar[xpt;$sum[$getGlobalUserVar[xpt];$multi[$message[2];$random[1;5]]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[$message[2];$random[100;1000]]]]
$setGlobalUserVar[rbox;$sub[$getGlobalUserVar[rbox];$multi[$message[2];1]]]
$onlyIf[$isNumber[$message[2]]==true;<:no:986620613537959946> **Not a valid number]
$onlyIf[$message[2]>0;<:no:986620613537959946> **Please specify an amount**]
$onlyIf[$getGlobalUserVar[rbox]>=$multi[$message[2];1];<:no:986620613537959946> **You do not have enough $get[emoji]**]
$let[emoji;<:rare:1013342584682336256>]
$else
$if[$message[1]==ebox]
$author[1;Opening epic box]
$thumbnail[1;https://media.discordapp.net/attachments/916694829193379872/916723316889378846/discord-avatar-128-5OX60.gif]
$color[1;$getVar[color]]
$description[1;**You are opening $numberSeparator[$multi[$message[2];1];,]$get[emoji]...**]
$editIn[3s;{newEmbed:{author:Opened $numberSeparator[$multi[$message[2];1];,] epic lootboxes} {color:$getVar[color]} {thumbnail:https://media.discordapp.net/attachments/916694829193379872/916723316889378846/discord-avatar-128-5OX60.gif} {description:<a:opened:1013340779822985277> **| You opened $numberSeparator[$multi[$message[2];1];,]$get[emoji] and you got $numberSeparator[$multi[$message[2];$random[500;2000]];,]$getVar[symbol] and $numberSeparator[$multi[$message[2];$random[1;7]];,]$getVar[xpsymbol]**}}]
$setGlobalUserVar[xpt;$sum[$getGlobalUserVar[xpt];$multi[$message[2];$random[1;7]]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[$message[2];$random[500;2000]]]]
$setGlobalUserVar[ebox;$sub[$getGlobalUserVar[ebox];$multi[$message[2];1]]]
$onlyIf[$isNumber[$message[2]]==true;<:no:986620613537959946> **Not a valid number]
$onlyIf[$message[2]>0;<:no:986620613537959946> **Please specify an amount**]
$onlyIf[$getGlobalUserVar[ebox]>=$multi[$message[2];1];<:no:986620613537959946> **You do not have enough $get[emoji]**]
$let[emoji;<:epic:1013343040112427008>]
$else
$if[$message[1]==mbox]
$author[1;Opening mythical box]
$thumbnail[1;https://media.discordapp.net/attachments/916694829193379872/916723316889378846/discord-avatar-128-5OX60.gif]
$color[1;$getVar[color]]
$description[1;**You are opening $numberSeparator[$multi[$message[2];1];,]$get[emoji]...**]
$editIn[3s;{newEmbed:{author:Opened $numberSeparator[$multi[$message[2];1];,] mythical lootboxes} {color:$getVar[color]} {thumbnail:https://media.discordapp.net/attachments/916694829193379872/916723316889378846/discord-avatar-128-5OX60.gif} {description:<a:opened:1013340779822985277> **| You opened $numberSeparator[$multi[$message[2];1];,]$get[emoji] and you got $numberSeparator[$multi[$message[2];$random[1000;5000]];,]$getVar[symbol] and $numberSeparator[$multi[$message[2];$random[5;70]];,]$getVar[xpsymbol]**}}]
$setGlobalUserVar[xpt;$sum[$getGlobalUserVar[xpt];$multi[$message[2];$random[5;70]]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[$message[2];$random[1000;5000]]]]
$setGlobalUserVar[mbox;$sub[$getGlobalUserVar[mbox];$multi[$message[2];1]]]
$onlyIf[$isNumber[$message[2]]==true;<:no:986620613537959946> **Not a valid number]
$onlyIf[$message[2]>0;<:no:986620613537959946> **Please specify an amount**]
$onlyIf[$getGlobalUserVar[mbox]>=$multi[$message[2];1];<:no:986620613537959946> **You do not have enough $get[emoji]**]
$let[emoji;<:mythicaly:1013343685871673354>]
$else
$if[$message[1]==lbox]
$author[1;Opening legendary box]
$thumbnail[1;https://media.discordapp.net/attachments/916694829193379872/916723316889378846/discord-avatar-128-5OX60.gif]
$color[1;$getVar[color]]
$description[1;**You are opening $numberSeparator[$multi[$message[2];1];,]$get[emoji]...**]
$editIn[3s;{newEmbed:{author:Opened $numberSeparator[$multi[$message[2];1];,] legendary lootboxes} {color:$getVar[color]} {thumbnail:https://media.discordapp.net/attachments/916694829193379872/916723316889378846/discord-avatar-128-5OX60.gif} {description:<a:opened:1013340779822985277> **| You opened $numberSeparator[$multi[$message[2];1];,]$get[emoji] and you got $numberSeparator[$multi[$message[2];$random[10000;100000]];,]$getVar[symbol] and $numberSeparator[$multi[$message[2];$random[100;150]];,]$getVar[xpsymbol]**}}]
$setGlobalUserVar[xpt;$sum[$getGlobalUserVar[xpt];$multi[$message[2];$random[100;150]]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[$message[2];$random[10000;100000]]]]
$setGlobalUserVar[lbox;$sub[$getGlobalUserVar[lbox];$multi[$message[2];1]]]
$onlyIf[$isNumber[$message[2]]==true;<:no:986620613537959946> **Not a valid number]
$onlyIf[$message[2]>0;<:no:986620613537959946> **Please specify an amount**]
$onlyIf[$getGlobalUserVar[lbox]>=$multi[$message[2];1];<:no:986620613537959946> **You do not have enough $get[emoji]**]
$let[emoji;<:legendary:1013344335565172827>]
$else
:x: invalid option

$endif
$endif
$endif
$endif
$endif
$endif
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**lockdown**} {color:RED} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**hello $username im very sorry but my commands have been temporarily been shutdown so that means you are not gonna be able to use any of my commands
please contact my owner** \`$userTag[$botownerid]\` **If you have any questions. or come to my [support server](https://discord.gg/PrnwYwaP5c)**}}]`}