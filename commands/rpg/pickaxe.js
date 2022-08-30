module.exports = {
name: "pickaxe",
$if: "v4",
code: `
$if[$message==]
$author[1;Pickaxe]
$color[1;$getVar[color]]
$description[1;
Information regarding pickaxe!

**Subcommands**
\`\`\`
upgrade , recharge , stats , list\`\`\`

**Symbols**
\`\`\`
[] are optional and <> are required\`\`\`]
$else
$if[$message==list]
$author[1;Pickaxe list]
$thumbnail[1;https://images-ext-2.discordapp.net/external/ZDId41hcfRWM4RHHiK4-EtLeuCfupkfAzRIgNzy39hI/%3Fsize%3D56/https/cdn.discordapp.com/emojis/915383399424868363.png]
$color[1;$getVar[color]]
$description[1;
** === Pickaxe list === **

<:ironpick:1013690781170679828> **Iron pickaxe**
**Type:** \`basic\`
**Durability loss:** \`1\`
**Upgrade:** \`5,000\`$getVar[symbol]

<:goldpick:1013690984888025138> **Gold pickaxe**
**Type:** \`noraml\`
**Durability loss:** \`1\`
**Upgrade:** \`10,000\`$getVar[symbol]

<:diamondpick:1013691186319474698> **Diamond pickaxe**
**Type:** \`epic\`
**Durability loss:** \`2\`
**Upgrade:** \`15,000\`$getVar[symbol]]
$else
$if[$message==recharge]
$author[1;Pickaxe upgrade]
$color[1;$getVar[color]]
$description[1;**You upgraded your $replaceText[$replaceText[$getGlobalUserVar[wood_pickaxe];1;<:woodpick:1013690441297834024>];0;]$replaceText[$replaceText[$getGlobalUserVar[iron_pickaxe];1;<:ironpick:1013690781170679828>];0;]$replaceText[$replaceText[$getGlobalUserVar[gold_pickaxe];1;<:goldpick:1013690984888025138>];0;]$replaceText[$replaceText[$getGlobalUserVar[diamond_pickaxe];1;<:diamondpick:1013691186319474698>];0;] 2,500 $getVar[symbol]**]











$setGlobalUserVar[durability;10]
$onlyIf[$getGlobalUserVar[durability]==0;**You still have some durability left**]
$onlyIf[$getGlobalUserVar[cash]>2499;**You do not have enough $getVar[symbol] to upgrade your $replaceText[$getGlobalUserVar[wood_pickaxe];1;<:woodpick:1013690441297834024>]$replaceText[$getGlobalUserVar[iron_pickaxe];1;<:ironpick:1013690781170679828>]$replaceText[$getGlobalUserVar[gold_pickaxe];1;<:goldpick:1013690984888025138>]$replaceText[$getGlobalUserVar[diamond_pickaxe];1;<:diamondpick:1013691186319474698>] you need 2,500 $getVar[symbol]]

$else

$if[$message==stats]
$author[1;pickaxe stats]
$thumbnail[1;https://images-ext-1.discordapp.net/external/LX_JAqQxEpLL7bLPRpPDdVli5mKDYWIHBV6IyrQjBT8/https/emoji.gg/assets/emoji/7824-bluebook.gif]
$color[1;$getVar[color]]
$description[1;
**Your pickaxe's stats **
**Name:** $replaceText[$replaceText[$getGlobalUserVar[wood_pickaxe];0; ];1;<:woodpick:1013690441297834024>] $replaceText[$replaceText[$getGlobalUserVar[iron_pickaxe];0; ];1;<:ironpick:1013690781170679828>] $replaceText[$replaceText[$getGlobalUserVar[gold_pickaxe];0; ];1;<:goldpick:1013690984888025138>] $replaceText[$replaceText[$getGlobalUserVar[diamond_pickaxe];0; ];1;<:diamondpick:1013691186319474698>] $replaceText[$replaceText[$getGlobalUserVar[wood_pickaxe];0; ];1;Wooden pickaxe] $replaceText[$replaceText[$getGlobalUserVar[iron_pickaxe];0; ];1;Iron pickaxe] $replaceText[$replaceText[$getGlobalUserVar[gold_pickaxe];0; ];1;Gold pickaxe] $replaceText[$replaceText[$getGlobalUserVar[diamond_pickaxe];0; ];1;Diamond pickaxe] 
**Durability: [$repeatMessage[$getGlobalUserVar[durability];$replaceText[$getGlobalUserVar[durability];$getGlobalUserVar[durability];■]]]($getBotInvite)**]

$else

$if[$message[1]==upgrade]
$author[1;pickaxe upgrade]
$thumbnail[1;https://images-ext-1.discordapp.net/external/LX_JAqQxEpLL7bLPRpPDdVli5mKDYWIHBV6IyrQjBT8/https/emoji.gg/assets/emoji/7824-bluebook.gif]
$color[1;$getVar[color]]


$if[$message[2]==iron]
$setGlobalUserVar[wood_pickaxe;0]
$setGlobalUserVar[iron_pickaxe;1]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];5000]]
$color[1;BLUE]
$description[1; **You upgraded your $replaceText[$replaceText[$getGlobalUserVar[wood_pickaxe];0; ];1;<:woodpick:1013690441297834024>] $replaceText[$replaceText[$getGlobalUserVar[iron_pickaxe];0; ];1;<:ironpick:1013690781170679828>] $replaceText[$replaceText[$getGlobalUserVar[gold_pickaxe];0; ];1;<:goldpick:1013690984888025138>] $replaceText[$replaceText[$getGlobalUserVar[diamond_pickaxe];0; ];1;<:diamondpick:1013691186319474698>] to <:ironpick:1013690781170679828>  and had to pay 5,000$getVar[symbol]**]

$onlyIf[$getGlobalUserVar[cash]>4999;**You need 5,000$getVar[cash]**]
$onlyIf[$getGlobalUserVar[gold_pickaxe]==0;You cant degrade bruh]
$onlyIf[$getGlobalUserVar[diamond_pickaxe]==0;You cant degrade bruh]
$color[1;BLUE]
$else
$if[$message[2]==gold]
$setGlobalUserVar[wood_pickaxe;0]
$setGlobalUserVar[iron_pickaxe;0]
$setGlobalUserVar[gold_pickaxe;1]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];10000]]
$color[1;BLUE]
$description[1; **You upgraded your $replaceText[$replaceText[$getGlobalUserVar[wood_pickaxe];0; ];1;<:woodpick:1013690441297834024>] $replaceText[$replaceText[$getGlobalUserVar[iron_pickaxe];0; ];1;<:ironpick:1013690781170679828>] $replaceText[$replaceText[$getGlobalUserVar[gold_pickaxe];0; ];1;<:goldpick:1013690984888025138>] $replaceText[$replaceText[$getGlobalUserVar[diamond_pickaxe];0; ];1;<:diamondpick:1013691186319474698>] to <:goldpick:1013690984888025138> and had to pay 10,000$getVar[symbol]**]

$onlyIf[$getGlobalUserVar[cash]>9999;**You need 10,000$getVar[cash]**]

$onlyIf[$getGlobalUserVar[diamond_pickaxe]==0;You cant degrade bruh]
$else

$if[$message[2]==diamond]
$setGlobalUserVar[wood_pickaxe;0]
$setGlobalUserVar[iron_pickaxe;0]
$setGlobalUserVar[gold_pickaxe;0]
$setGlobalUserVar[diamond_pickaxe;1]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];15000]]
$description[1; **You upgraded your $replaceText[$replaceText[$getGlobalUserVar[wood_pickaxe];0; ];1;<:woodpick:1013690441297834024>] $replaceText[$replaceText[$getGlobalUserVar[iron_pickaxe];0; ];1;<:ironpick:1013690781170679828>] $replaceText[$replaceText[$getGlobalUserVar[gold_pickaxe];0; ];1;<:goldpick:1013690984888025138>] $replaceText[$replaceText[$getGlobalUserVar[diamond_pickaxe];0; ];1;<:diamondpick:1013691186319474698>] to <:diamondpick:1013691186319474698>  and had to pay 15,000$getVar[symbol]**]

$onlyIf[$getGlobalUserVar[cash]>14999;**You need 15,000$getVar[cash]**]

$onlyIf[$getGlobalUserVar[diamond_pickaxe]==0;You cant degrade bruh]
$else
**Choose from iron / gold /diamond**

$endif 
$endif
$endif
$endif
$endif
$endif
$endif 
$endif`}
