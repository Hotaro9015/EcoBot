module.exports = {
name: "bal",
aliases: ['money','cash','wallet','balance','coins'],
code: `
$title[1;**$username[$findUser[$message;yes]]'s balance**]
$thumbnail[1;$replaceText[$userAvatar[$findUser[$message;yes]];null;$userAvatar[$clientid]]]
$color[1;$getServerVar[embed_color]]
$footer[1;Balance of $getVar[money]]
$description[1;
**───────────────**
**<:money:1013427928496877680> | Wallet:** $numberSeparator[$getGlobalUserVar[cash;$findUser[$message;yes]];,]$getVar[symbol]
**<:bank:1013349004794400802> | Bank:** $numberSeparator[$getGlobalUserVar[bank;$findUser[$message;yes]];,]$getVar[symbol] **(**\`$truncate[$multi[$divide[$getGlobalUserVar[bank;$findUser[$message;yes]];$getGlobalUserVar[bankspace;$findUser[$message;yes]]];100]]%\`**)**]
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**lockdown**} {color:RED} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**hello $username im very sorry but my commands have been temporarily been shutdown so that means you are not gonna be able to use any of my commands
please contact my owner** \`$userTag[$botownerid]\` **If you have any questions. or come to my [support server](https://discord.gg/PrnwYwaP5c)**}}]`}