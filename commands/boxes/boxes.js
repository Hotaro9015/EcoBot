module.exports = {
name: "boxes",
aliases: ['boxs','boxxes'],
code: `
$author[1;Boxes tiers and rewards;$userAvatar[$clientid]]
$color[1;$getVar[color]]
$thumbnail[1;https://media.discordapp.net/attachments/916694829193379872/916719108253438032/848683192404017152.png]
$footer[1;Boxes are not the same as crates they are very diffrent (kind of);https://media.discordapp.net/attachments/916694829193379872/916719108253438032/848683192404017152.png]
$description[1;
**Boxes tiers and rewards are shown below
NOTE: boxes and crates are NOT the same thing a box they give diffrent loot **

<:common:1013341218702377001> **Common box**
\`10-500\`$getVar[symbol]
\`1-3\`$getVar[xpsymbol]

<:uncommon:1013342052253171712> **Unommon box**
\`100-500\`$getVar[symbol]
\`2-4\`$getVar[xpsymbol]

<:rare:1013342584682336256> **Rare box**
\`100-1000\`$getVar[symbol]
\`1-5\`$getVar[xpsymbol]

<:epic:1013343040112427008> **Epic box**
\`500-2000\`$getVar[symbol]
\`1-7\`$getVar[xpsymbol]

<:mythicaly:1013343685871673354> **Mythical box**
\`1000-5000\`$getVar[symbol]
\`5-70\`$getVar[xpsymbol]

<:legendary:1013344335565172827> **Legendary box**
\`10000-100000\`$getVar[symbol]
\`100-150\`$getVar[xpsymbol]]
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**lockdown**} {color:RED} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**hello $username im very sorry but my commands have been temporarily been shutdown so that means you are not gonna be able to use any of my commands
please contact my ower** \`$userTag[$botownerid]\` **If you have any questions. or come to my [support server](https://discord.gg/PrnwYwaP5c)**}}]`}