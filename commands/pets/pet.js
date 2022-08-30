module.exports = {
name: "pet",
$if: "v4",
aliases: ['animal','pett'],
code: `
$if[$getGlobalUserVar[panda]>0]
$author[1;Your panda;https://cdn.discordapp.com/emojis/893258971077545984.png?size=56]
$color[1;BORDO]
$footer[1;Your panda named $getGlobalUserVar[pname];https://cdn.discordapp.com/emojis/893258971077545984.png?size=56]
$thumbnail[1;https://cdn.discordapp.com/emojis/893258971077545984.png?size=56]
$description[1;
<:panda:1013758585672585266> **welcome to your pet panda named $getGlobalUserVar[pname]**
**✄... if you dont like your pandas name you can change it** \`$getGlobaluserVar[prefix]pet-rename [ new name ]\` 

<:bird_hunger:1013793880719765625> **Hunger**
\`$getGlobalUserVar[phunger]%\`

$getVar[symbol] **Coins collected**
\`$numberSeparator[$getGlobalUserVar[pcoin];,]\`$getVar[symbol]

<:sleepy:1013794068553273395> **Sleep**
\`$getGlobalUserVar[psleep]%\`

<:bird_love:1013794236421914624> **Love**
\`$getGlobalUserVar[plove]%\`]

$else

$if[$getGlobalUserVar[dog]>0]
$author[1;Your dog;https://cdn.discordapp.com/emojis/862045691006419004.png?size=56]
$color[1;BORDO]
$footer[1;Your dog named $getGlobalUserVar[pname];https://cdn.discordapp.com/emojis/862045691006419004.png?size=56]
$thumbnail[1;https://cdn.discordapp.com/emojis/862045691006419004.png?size=56]
$description[1;
**<:dog:1013758811024134174> welcome to your pet dog named $getGlobalUserVar[pname]**
**✄... if you dont like your dogs name you can change it** \`$getGlobaluserVar[prefix]pet-rename [ new name ]\` 

<:bird_hunger:1013793880719765625> **Hunger**
\`$getGlobalUserVar[phunger]%\`

$getVar[symbol] **Coins collected**
\`$numberSeparator[$getGlobalUserVar[pcoin];,]%\`

<:sleepy:1013794068553273395> **Sleep**
\`$getGlobalUserVar[psleep]%\`

<:bird_love:1013794236421914624> **Love**
\`$getGlobalUserVar[plove]%\`]

$else

$if[$getGlobalUserVar[cat]>0]
$author[1;Your cat;https://cdn.discordapp.com/emojis/918933580812537876.png?size=56]
$color[1;BORDO]
$footer[1;Your cat named $getGlobalUserVar[pname];https://cdn.discordapp.com/emojis/918933580812537876.png?size=56]
$thumbnail[1;https://cdn.discordapp.com/emojis/918933580812537876.png?size=56]
$description[1;
**<:cat:1013759097327329300> welcome to your pet cat named $getGlobalUserVar[pname]**
**✄... if you dont like your cats name you can change it** \`$getGlobaluserVar[prefix]pet-rename [ new name ]\` 

<:bird_hunger:1013793880719765625> **Hunger**
\`$getGlobalUserVar[phunger]%\`

$getVar[symbol] **Coins collected**
\`$numberSeparator[$getGlobalUserVar[pcoin];,]\`

<:sleepy:1013794068553273395> **Sleep**
\`$getGlobalUserVar[psleep]%\`

<:bird_love:1013794236421914624> **Love**
\`$getGlobalUserVar[plove]%\`]
$else
**You fr that lonely? go buy a pet first bruh**
$endif
$endif
$endif
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**lockdown**} {color:RED} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**hello $username im very sorry but my commands have been temporarily been shutdown so that means you are not gonna be able to use any of my commands
please contact my owner** \`$userTag[$botownerid]\` **If you have any questions. or come to my [support server](https://discord.gg/PrnwYwaP5c)**}}]`
}