module.exports = {
name: "invite",
$if: "v4",
code: `
$if[$getGlobalUserVar[lang]==french]
$color[1;$getVar[color]]
$description[1;:diamonds: **Invitez-moi maintenant** [Ici](https://discord.com/api/oauth2/authorize?client_id=915037953863061575&permissions=8&scope=bot%20applications.commands)]
$else
$color[1;$getVar[color]]
$description[1;<:iconshine:1014007656916193371> **Invite me now [Here](https://discord.com/api/oauth2/authorize?client_id=$clientID&permissions=3533921&scope=bot%20applications.commands)**]
$endif
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**lockdown**} {color:RED} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**hello $username im very sorry but my commands have been temporarily been shutdown so that means you are not gonna be able to use any of my commands
please contact my owner** \`$userTag[$botownerid]\` **If you have any questions. or come to my [support server](https://discord.gg/PrnwYwaP5c)**}}]`
}