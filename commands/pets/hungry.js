module.exports = {
name: "pet-feed",
$if: "v4",
aliases: ['petfeed','petf','pf','pfeed'],
code: `
$if[$getGlobalUserVar[panda]>0]
$author[1;Your panda;https://cdn.discordapp.com/emojis/893258971077545984.png?size=56]
$color[1;BORDO]
$footer[1;Your panda;https://cdn.discordapp.com/emojis/893258971077545984.png?size=56]
$thumbnail[1;https://cdn.discordapp.com/emojis/893258971077545984.png?size=56]
$description[1;
<:panda:1013758585672585266> **Your pet was starving so you fed him some <:food:1013366015746396170> and now your pets hunger is at** \`100%\`]
$setGlobalUserVar[phunger;100]
$setGlobalUserVar[food;$sub[$getGlobalUserVar[food];1]]
$onlyIf[$getGlobalUserVar[food]>0;**You dont own any <:food:1013366015746396170>**]
$onlyIf[$getGlobalUserVar[phunger]<45;**Your pet is not hungry bruh**]

$else

$if[$getGlobalUserVar[dog]>0]
$setGlobalUserVar[pcoin;0]
$author[1;Your dog;https://cdn.discordapp.com/emojis/862045691006419004.png?size=56]
$color[1;BORDO]
$footer[1;Your dog;https://cdn.discordapp.com/emojis/862045691006419004.png?size=56]
$thumbnail[1;https://cdn.discordapp.com/emojis/862045691006419004.png?size=56]
$description[1;
<:dog:1013758811024134174> **Your pet was starving so you fed him some <:food:1013366015746396170> and now your pets hunger is at** \`100%\`]
$setGlobalUserVar[phunger;100]
$setGlobalUserVar[food;$sub[$getGlobalUserVar[food];1]]
$onlyIf[$getGlobalUserVar[food]>0;**You dont own any <:food:1013366015746396170>**]
$onlyIf[$getGlobalUserVar[phunger]<45;**Your pet is not hungry bruh**]

$else

$if[$getGlobalUserVar[cat]>0]
$author[1;Your cat;https://cdn.discordapp.com/emojis/918933580812537876.png?size=56]
$color[1;BORDO]
$footer[1;Your cat;https://cdn.discordapp.com/emojis/918933580812537876.png?size=56]
$thumbnail[1;https://cdn.discordapp.com/emojis/918933580812537876.png?size=56]
$description[1;
<:cat:1013759097327329300> **Your pet was starving so you fed him some <:food:1013366015746396170> and now your pets hunger is at** \`100%\`]
$setGlobalUserVar[phunger;100]
$setGlobalUserVar[food;$sub[$getGlobalUserVar[food];1]]
$onlyIf[$getGlobalUserVar[food]>0;**You dont own any <:food:1013366015746396170>**]
$onlyIf[$getGlobalUserVar[phunger]<45;**Your pet is not hungry bruh**]

$else

**You fr that lonely? go buy a pet bruh**
$endif
$endif
$endif
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**lockdown**} {color:RED} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**hello $username im very sorry but my commands have been temporarily been shutdown so that means you are not gonna be able to use any of my commands
please contact my owner** \`$userTag[$botownerid]\` **If you have any questions. or come to my [support server](https://discord.gg/PrnwYwaP5c)**}}]`
}