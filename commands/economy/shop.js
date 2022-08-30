module.exports = [{
  name: "shop",
  $if: "v4", 
  usage: "\`$getServerVar[prefix]help <command>\`",
  code: `
$if[$message==]
$title[1;<:iconfire:917445081890431066> $username[$clientid] shop list;https://sayu.cextora.repl.co/]
$description[1;
**Hey didnt know you would be here this early well lucky for you my shop is open i would suggest to use the select menu below to view all my cool items**.]
$color[1;764Cf4]
$addSelectMenu[1;helpcmd;Shop;1;1;no;Page 1:First page of the shop:1:no:<:carr:1013710646661087242>;Page 2:Second page of the shop:2:no:<:carr:1013710646661087242>;Page 3:Third page of the shop:3:no:<:carr:1013710646661087242>;Page 4:Fourth page of the shop:4:no:<:carr:1013710646661087242>;Page 5:Fifth page of the shop:5:no:<:carr:1013710646661087242>;Page 6:Sixth page of the shop:6:no:<:carr:1013710646661087242>;Page 7:Seventh page of the shop:7:no:<:carr:1013710646661087242>]
$endif`
}, {
  name: "helpcmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed:{title:Page 1 of my shop}{thumbnail:$userAvatar[$clientID]}{description:<:shopelo:1013710754437931021> **"Helo, Welcome to my Shop, $username!"**
You can buy something here! Just do \`$getServerVar[prefix]buy <item> <amount>\` to buy it!
**──────────────
❖ Shop Items ❖
──────────────**

<:rod:1013361967433535528>**Fishing rod**
**ID | ** \`rod\`
**Buy:** **[2,500]($getBotInvite)**$getVar[symbol]
**Sell:** **[1,500]($getBotInvite)**$getVar[symbol]

<:gunn:1013362157473243186>**Hunting rifle**
**ID | ** \`rifle\`
**Buy:** **[2,500]($getBotInvite)**$getVar[symbol]
**Sell:** **[1,500]($getBotInvite)**$getVar[symbol]

<:pcc:1013362393826467883>**Laptop**
**ID | ** \`laptop\`
**Buy:** **[2,500]($getBotInvite)**$getVar[symbol]
**Sell:** **[1,500]($getBotInvite)**$getVar[symbol]

<:axes:1013362593471156294>**Axe**
**ID | ** \`axe\`
**Buy:** **[2,500]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not sellable]($getBotInvite)**}{footer:Make sure to use the id and not an alternative}{color:$getVar[color]}};;;yes]
$onlyif[$interactionData[values[0]]==1;]`
}, {
  name: "helpcmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed:{title:Page 2 of my shop}{thumbnail:$userAvatar[$clientID]}{description:<:shopelo:1013710754437931021> **"Helo, Welcome to my Shop, $username!"**
You can buy something here! Just do \`$getServerVar[prefix]buy <item> <amount>\` to buy it!
**──────────────
❖ Shop Items ❖
──────────────**

<:common:1013630604157403166> **Common lootbox**
**ID | ** \`common\`
**Buy:** **[2,000]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not sellable]($getBotInvite)**

<:uncommonly:1013630835859132516> **Uncommon lootbox**
**ID | ** \`uncommon\`
**Buy:** **[5,000]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not sellable]($getBotInvite)**

<:rare:1013631031024295956> **Rare lootbox**
**ID | ** \`rare\`
**Buy:** **[7,500]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not sellable]($getBotInvite)**

<:legendary:1013639038919512155> **Legendary lootbox**
**ID | ** \`legendary\`
**Buy:** **[15,000]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not sellable]($getBotInvite)**}{footer:Make sure to use the id and not an alternative}{color:$getVar[color]}};;;yes]
$onlyif[$interactionData[values[0]]==2;]`
}, {
  name: "helpcmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed:{title:Page 3 of my shop}{thumbnail:$userAvatar[$clientID]}{description:<:shopelo:1013710754437931021> **"Helo, Welcome to my Shop, $username!"**
You can buy something here! Just do \`$getServerVar[prefix]buy <item> <amount>\` to buy it!
**──────────────
❖ Shop Items ❖
──────────────**

<:robotit:1013693103913316363> **Automation upgrade**
**ID | ** \`income\`
**Buy:** **[750]($getBotInvite)**$getVar[symbol]
**Upgrade:** **Increases earning $getVar[symbol] by 5$getVar[symbol]**
**Sell:** **[Not Sellable]($getBotInvite)**

<:expp:1013712676217692273> **Daily upgrade**
**ID | ** \`daily\`
**Buy:** **[1,500]($getBotInvite)**$getVar[symbol]
**Upgrade:** **Increases daily earning by 15$getVar[symbol]**
**Sell:** **[Not Sellable]($getBotInvite)**}{footer:Make sure to use the id and not an alternative}{color:$getVar[color]}};;;yes]
$onlyif[$interactionData[values[0]]==3;]`
}, {
  name: "helpcmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed:{title:Page 4 of my shop}{thumbnail:$userAvatar[$clientID]}{description:<:shopelo:1013710754437931021> **"Helo, Welcome to my Shop, $username!"**
You can buy something here! Just do \`$getServerVar[prefix]buy <item> <amount>\` to buy it!
**──────────────
❖ Shop Items ❖
──────────────**

<:cocring:1013363590012620800> **Common ring**
**ID | ** \`coring\`
**Buy:** **[500]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not Sellable]($getBotInvite)**

<:ucring:1013363824289665024> **Uncommon ring**
**ID | ** \`uncoring\`
**Buy:** **[1,000]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not Sellable]($getBotInvite)**

<:epiccc:1013364034650787901> **Epic ring**
**ID | ** \`epring\`
**Buy:** **[1,500]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not Sellable]($getBotInvite)**

<:mringg:1013364256357494844> **Mythical ring**
**ID | ** \`myring\`
**Buy:** **[5,000]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not Sellable]($getBotInvite)**

<a:legendaryring:1013364569059623002>**Legendary ring**
**ID | ** \`lering\`
**Buy:** **[10,000]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not Sellable]($getBotInvite)**

<a:fabled:1013364862962909224> **Fabled ring**
**ID | ** \`faring\`
**Buy:** **[15,000]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not Sellable]($getBotInvite)**}{footer:Make sure to use the id and not an alternative}{color:$getVar[color]}};;;yes]
$onlyif[$interactionData[values[0]]==4;]`
}, {
  name: "helpcmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed:{title:Page 5 of my shop}{thumbnail:$userAvatar[$clientID]}{description:<:shopelo:1013710754437931021> **"Helo, Welcome to my Shop, $username!"**
You can buy something here! Just do \`$getServerVar[prefix]buy <item> <amount>\` to buy it!
**──────────────
❖ Shop Items ❖
──────────────**

<:common:1013341218702377001> **Common box**
**ID | ** \`cbox\`
**Buy:** **[2,000]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not Sellable]($getBotInvite)**

<:uncommon:1013342052253171712> **Uncommon box**
**ID | ** \`ubox\`
**Buy:** **[4,000]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not Sellable]($getBotInvite)**

<:rare:1013342584682336256> **Rare box**
**ID | ** \`rbox\`
**Buy:** **[6,000]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not Sellable]($getBotInvite)**

<:epic:1013343040112427008> **Epic box**
**ID | ** \`ebox\`
**Buy:** **[8,000]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not Sellable]($getBotInvite)**

<:mythicaly:1013343685871673354> **Mythical box**
**ID | ** \`mbox\`
**Buy:** **[50]($getBotInvite)**$getVar[xpsymbol]
**Sell:** **[Not Sellable]($getBotInvite)**

<:legendary:1013344335565172827> **Legendary box**
**ID | ** \`lbox\`
**Buy:** **[100]($getBotInvite)**$getVar[xpsymbol]
**Sell:** **[Not Sellable]($getBotInvite)**}{footer:Make sure to use the id and not an alternative}{color:$getVar[color]}};;;yes]
$onlyif[$interactionData[values[0]]==5;]`
}, {
  name: "helpcmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed:{title:Page 6 of my shop}{thumbnail:$userAvatar[$clientID]}{description:<:shopelo:1013710754437931021> **"Helo, Welcome to my Shop, $username!"**
You can buy something here! Just do \`$getServerVar[prefix]buy <item> <amount>\` to buy it!
**──────────────
❖ Shop Items ❖
──────────────**

**[Stars and sky](http://data.owobot.com/background/1.png)**
**ID | ** \`stars\`
**Buy:** **[25,000]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not Sellable]($getBotInvite)**

**[Forest street](http://data.owobot.com/background/2.png)**
**ID | ** \`forest\`
**Buy:** **[25,000]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not Sellable]($getBotInvite)**

**[Mountain top](http://data.owobot.com/background/3.png)**
**ID | ** \`mountain\`
**Buy:** **[25,000]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not Sellable]($getBotInvite)**

**[Colored wood](http://data.owobot.com/background/4.png)**
**ID | ** \`colored\`
**Buy:** **[25,000]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not Sellable]($getBotInvite)**

**[Foggy horizon](http://data.owobot.com/background/5.png)**
**ID | ** \`fog\`
**Buy:** **[25,000]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not Sellable]($getBotInvite)**

**[Church](http://data.owobot.com/background/6.png)**
**ID | ** \`church\`
**Buy:** **[25,000]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not Sellable]($getBotInvite)**}{footer:Make sure to use the id and not an alternative}{color:$getVar[color]}};;;yes]
$onlyif[$interactionData[values[0]]==6;]`
    }, {
  name: "helpcmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed:{title:Page 7 of my shop}{thumbnail:$userAvatar[$clientID]}{description:<:shopelo:1013710754437931021> **"Helo, Welcome to my Shop, $username!"**
You can buy something here! Just do \`$getServerVar[prefix]buy <item> <amount>\` to buy it!
**──────────────
❖ Shop Items ❖
──────────────**

<:xpboost:1013361197787131904> **XPboost**
**ID | ** \`xpboost\`
**Buy:** **[10,000]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not Sellable]($getBotInvite)**

<:woterbottle:1013360943905898516> **Watter potion**
**ID | ** \`bottle\`
**Buy:** **[1,000]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not Sellable]($getBotInvite)**

<:pboost:1013361479027793970> **Coin boost**
**ID | ** \`cboost\`
**Buy:** **[10,000]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not Sellable]($getBotInvite)**

<:ctumptet:1013360542611681280> **Coin trumpet**
**ID | ** \`trumpet\`
**Buy:** **[100]($getBotInvite)**$getVar[xpsymbol]
**Sell:** **[Not Sellable]($getBotInvite)**
}{footer:Make sure to use the id and not an alternative}{color:$getVar[color]}};;;yes]
$onlyif[$interactionData[values[0]]==7;]`
  }];