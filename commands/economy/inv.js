module.exports = {
name: "inv",
$if: "v4",
aliases: "inventory",
code: `
$if[$message[1]==]
$thumbnail[1;$replaceText[$userAvatar[$findUser[$message[2];yes]];null;$userAvatar[$clientid]]]
$color[1;$getVar[embed_color]]
$title[1;**$username[$findUser[$message[2]
]]'s inventory**]
$description[1;
<:rod:1013361967433535528>**Fishing rod ─ **$getGlobalUserVar[rod;$findUser[$message[2];yes]]
**ID** \`rod\` **- Tool**

<:pcc:1013362393826467883>**Laptops ─ **$getGlobalUserVar[laptop;$findUser[$message[2];yes]]
**ID** \`laptop\` **- Tool**

<:gunn:1013362157473243186>**Hunting rifle ─ **$getGlobalUserVar[rifle;$findUser[$message[2];yes]]
**ID** \`rifle\` **- Tool**

<:pickaxee:1013685299907407902>**Pickaxe ─ **$getGlobalUserVar[pickaxe;$findUser[$message[2];yes]]
**ID** \`pickaxe\` **- Tool**]
$footer[1;Page 1 of 6]
$else

$if[$message[1]==1]
$thumbnail[1;$replaceText[$userAvatar[$findUser[$message[2];yes]];null;$userAvatar[$clientid]]]
$color[1;$getVar[embed_color]]
$title[1;**$username[$findUser[$message[2]
]]'s inventory**]
$description[1;
<:rod:1013361967433535528>**Fishing rod ─ **$getGlobalUserVar[rod;$findUser[$message[2];yes]]
**ID** \`rod\` **- Tool**

<:pcc:1013362393826467883>**Laptops ─ **$getGlobalUserVar[laptop;$findUser[$message[2];yes]]
**ID** \`laptop\` **- Tool**

<:gunn:1013362157473243186>**Hunting rifle ─ **$getGlobalUserVar[rifle;$findUser[$message[2];yes]]
**ID** \`rifle\` **- Tool**

<:pickaxee:1013685299907407902>**Pickaxe ─ **$getGlobalUserVar[pickaxe;$findUser[$message[2];yes]]
**ID** \`pickaxe\` **- Tool**]
$footer[1;Page 1 of 6]
$else
$if[$message[1]==2]
$thumbnail[1;$replaceText[$userAvatar[$findUser[$message[2];yes]];null;$userAvatar[$clientid]]]
$color[1;$getVar[embed_color]]
$title[1;**$username[$findUser[$message[2]
]]'s inventory**]
$description[1;

<:common:1013630604157403166>**Common lootbox ─ **$numberSeparator[$getGlobalUserVar[common;$findUser[$message[2];yes]];,]
**ID** \`common\` **- Lootbox**

<:uncommonly:1013630835859132516>**Uncommon lootbox ─ **$numberSeparator[$getGlobalUserVar[uncommon;$findUser[$message[2];yes]];,]
**ID** \`uncommon\` **- Lootbox**

<:rare:1013631031024295956>**Rare lootbox ─ **$numberSeparator[$getGlobalUserVar[rare;$findUser[$message[2];yes]];,]
**ID** \`rare\` **- Lootbox**

<:legendary:1013639038919512155>**Legendary lootbox ─ **$numberSeparator[$getGlobalUserVar[legendary;$findUser[$message[2];yes]];,]
**ID** \`legendary\` **- Lootbox**]
$footer[1;Page 2 / 6]
$else
$if[$message[1]==3]

$thumbnail[1;$replaceText[$userAvatar[$findUser[$message[2];yes]];null;$userAvatar[$clientid]]]
$color[1;$getVar[embed_color]]
$footer[1;Page 3 / 6]
$title[1;**$username[$findUser[$message[2]
]]'s inventory**]
$description[1;

<:silverore:1013367696739553280>**Silver gem ─ **$numberSeparator[$getGlobalUserVar[silver;$findUser[$message[2];yes]];,]
**ID** \`common\` **- Lootbox**

<:crystal:1013664737520787497>**Crystal gem ─ **$numberSeparator[$getGlobalUserVar[crystal;$findUser[$message[2];yes]];,]
**ID** \`uncommon\` **- Lootbox**

<:ruby:1013665222935969792>**Ruby gem ─ **$numberSeparator[$getGlobalUserVar[ruby;$findUser[$message[2];yes]];,]
**ID** \`rare\` **- Lootbox**

<:uranium:1013665498367524994>**Uranium gem ─ **$numberSeparator[$getGlobalUserVar[uranium;$findUser[$message[2];yes]];,]
**ID** \`rare\` **- Lootbox**

<:sulphur:1013665816618745936>**Sulphur gem ─ **$numberSeparator[$getGlobalUserVar[sulphur;$findUser[$message[2];yes]];,]
**ID** \`legendary\` **- Lootbox**]
$else
$if[$message[1]==4]

$thumbnail[1;$replaceText[$userAvatar[$findUser[$message[2];yes]];null;$userAvatar[$clientid]]]
$color[1;$getVar[embed_color]]
$footer[1;Page 4 / 6]
$title[1;**$username[$findUser[$message[2]
]]'s inventory**]
$description[1;

<:common:1013341218702377001>**Common box ─ **$numberSeparator[$getGlobalUserVar[cbox;$findUser[$message[2];yes]];,]
**ID** \`cbox\` **- Lootbox**

<:uncommon:1013342052253171712>**Uncommon box ─ **$numberSeparator[$getGlobalUserVar[ubox;$findUser[$message[2];yes]];,]
**ID** \`ubox\` **- Lootbox**

<:rare:1013342584682336256>**Rare box ─ **$numberSeparator[$getGlobalUserVar[rbox;$findUser[$message[2];yes]];,]
**ID** \`rbox\` **- Lootbox**

<:epic:1013343040112427008>**Epic box ─ **$numberSeparator[$getGlobalUserVar[ebox;$findUser[$message[2];yes]];,]
**ID** \`ebox\` **- Lootbox**

<:mythicaly:1013343685871673354>**Mythical box ─ **$numberSeparator[$getGlobalUserVar[mbox;$findUser[$message[2];yes]];,]
**ID** \`mbox\` **- Lootbox**

<:legendary:1013344335565172827>**Legendary box ─ **$numberSeparator[$getGlobalUserVar[lbox;$findUser[$message[2];yes]];,]
**ID** \`lbox\` **- Lootbox**]

$else

$if[$message[1]==5]

$thumbnail[1;$replaceText[$userAvatar[$findUser[$message[2];yes]];null;$userAvatar[$clientid]]]
$color[1;$getVar[embed_color]]
$footer[1;Page 5 / 6]
$title[1;**$username[$findUser[$message[2]
]]'s inventory**]
$description[1;

<:dfire:1013366909716144218>**Camp fire ─ **$numberSeparator[$getGlobalUserVar[campfire;$findUser[$message[2];yes]];,]
**ID** \`campfire\` **- rpg**

<:ctumptet:1013360542611681280>**Coin trumpet ─ **$numberSeparator[$getGlobalUserVar[trumpet;$findUser[$message[2];yes]];,]
**ID** \`trumpet\` **- boost**

<:woterbottle:1013360943905898516>**Water boost ─ **$numberSeparator[$getGlobalUserVar[wbottle;$findUser[$message[2];yes]];,]
**ID** \`bottle\` **- craftable**

<:pboost:1013361479027793970>**Coin boost ─ **$numberSeparator[$getGlobalUserVar[cboost;$findUser[$message[2];yes]];,]
**ID** \`cboost\` **- boost**

<:xpboost:1013361197787131904>**XPboost ─ **$numberSeparator[$getGlobalUserVar[xpboost;$findUser[$message[2];yes]];,]
**ID** \`xpboost\` **- boost**

<:gpotion:1013687693626064947>**Luck potion ─ **$numberSeparator[$getGlobalUserVar[lucky;$findUser[$message[2];yes]];,]
**ID** \`luck\` **- boost**
]

$else

$if[$message[1]==6]

$thumbnail[1;$replaceText[$userAvatar[$findUser[$message[2];yes]];null;$userAvatar[$clientid]]]
$color[1;$getVar[embed_color]]
$footer[1;Page 6 / 6]
$title[1;**$username[$findUser[$message[2]
]]'s inventory**]
$description[1;

<:leaf:1013687911146868777>**Leaf ─ **$numberSeparator[$getGlobalUserVar[leaf;$findUser[$message[2];yes]];,]
**ID** \`leaf\` **- craftable**

<:logs:1013366448867000320>**Wooden logs ─ **$numberSeparator[$getGlobalUserVar[wood;$findUser[$message[2];yes]];,]
**ID** \`wood\` **- craftable**

<:mbwood:1013366670707929168>**Magic wood ─ **$numberSeparator[$getGlobalUserVar[magicwood;$findUser[$message[2];yes]];,]
**ID** \`magicwood\` **- craftable**

<:tinmetal:1013688202869084191>**Silver ingot ─ **$numberSeparator[$getGlobalUserVar[tin;$findUser[$message[2];yes]];,]
**ID** \`tin\` **- craftable**

<:blaxemate:1013688406691291156>**Blazing metal ─ **$numberSeparator[$getGlobalUserVar[blaze;$findUser[$message[2];yes]];,]
**ID** \`blaze\` **- craftable**
]

$endif
$endif
$endif
$endif
$endif
$endif
$endif
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**lockdown**} {color:RED} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**hello $username im very sorry but my commands have been temporarily been shutdown so that means you are not gonna be able to use any of my commands
please contact my owner** \`$userTag[$botownerid]\` **If you have any questions. or come to my [support server](https://discord.gg/PrnwYwaP5c)**}}]`}