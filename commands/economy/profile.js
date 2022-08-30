module.exports = {
$if: "v4", 
name: "profile",
code: `
$title[1;**$username[$findUser[$message;yes]]\'s profile**]
$color[1;$getVar[color]]
$thumbnail[1;$replaceText[$userAvatar[$findUser[$message;yes]];null;$useravatar[$clientid]]]
$description[1;
**Progress
Money: $getVar[symbol]$numberSeparator[$getGlobalUserVar[cash;$findUser[$message;yes]];,]
Bank: $getVar[symbol]$numberSeparator[$getGlobalUserVar[bank;$findUser[$message;yes]];,]**

**Rings**
**<:collection:1013694670133538869> Collected:** $replaceText[$replaceText[$getGlobalUserVar[coring;$findUser[$message;yes]];0; ];1;<:cocring:1013363590012620800>] $replaceText[$replaceText[$getGlobalUserVar[uncoring;$findUser[$message;yes]];0; ];1;<:ucring:1013363824289665024>] $replaceText[$replaceText[$getGlobalUserVar[epring;$findUser[$message;yes]];0; ];1;<:epiccc:1013364034650787901>] $replaceText[$replaceText[$getGlobalUserVar[myring;$findUser[$message;yes]];0; ];1;<:mringg:1013364256357494844>] $replaceText[$replaceText[$getGlobalUserVar[lering;$findUser[$message;yes]];0; ];1;<a:legendaryring:1013364569059623002>] $replaceText[$replaceText[$getGlobalUserVar[faring;$findUser[$message;yes]];0; ];1;<a:fabled:1013364862962909224>]

**Automation**
<:robotit:1013693103913316363> **Earnings:** **$getVar[symbol]$numberSeparator[$getGlobalUserVar[alcap;$findUser[$message;yes]];,]/s**
<a:collect:1013693748447813653> **Collect:** \`$getServerVar[prefix]collect\`
<:robotit:1013693103913316363> **Available:** $getVar[symbol]**$numberSeparator[$getGlobalUserVar[allowence;$findUser[$message;yes]];,]**]
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**lockdown**} {color:RED} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**hello $username im very sorry but my commands have been temporarily been shutdown so that means you are not gonna be able to use any of my commands
please contact my owner** \`$userTag[$botownerid]\` **If you have any questions. or come to my [support server](https://discord.gg/PrnwYwaP5c)**}}]`
}