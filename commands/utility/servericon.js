module.exports = {
name: "servericon",
$if: "v4",
aliases: ['guildicon','serveravatar'],
code: `
$if[$getGlobalUserVar[lang]==french]
$color[1;$getVar[embed_color]]
$description[1;**icone dicone du serveur $servername]
$image[1;$servericon]
$else
$color[1;$getVar[embed_color]]
$description[1;**$servername's server icon]
$image[1;$servericon]
$endif
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**lockdown**} {color:RED} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**hello $username im very sorry but my commands have been temporarily been shutdown so that means you are not gonna be able to use any of my commands
please contact my owner** \`$userTag[$botownerid]\` **If you have any questions. or come to my [support server](https://discord.gg/PrnwYwaP5c)**}}]`
}