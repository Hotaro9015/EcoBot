module.exports = {
name: "slot",
$if: "v4",
aliases: "slots",
code: `
$if[$randomText[lost;lost;win]==win]
<:blanko:1013753349335691304> ┊ <:blanko:1013753349335691304> ┊ <:blanko:1013753349335691304> 
You bet **$numberSeparator[$truncate[$message[1]];,]** $getVar[symbol] 
$editIn[0.8s;$randomText[
<:pboost:1013361479027793970>;<:xpboost:1013361197787131904>;<:metalsa:1013754216449319002>;<:mbwood:1013366670707929168>;<:health:1013754698555215932>;<:bluefire:1013754996145258566>;<:blaxemate:1013688406691291156>;<:wolfy:1013755453471215676>] ┊ <:blanko:1013753349335691304> ┊ <:blanko:1013753349335691304> 
You bet **$numberSeparator[$truncate[$message[1]];,]** $getVar[symbol];$randomText[<:pboost:1013361479027793970>;<:xpboost:1013361197787131904>;<:metalsa:1013754216449319002>;<:mbwood:1013366670707929168>;<:health:1013754698555215932>;<:bluefire:1013754996145258566>;<:blaxemate:1013688406691291156>;<:wolfy:1013755453471215676>] ┊ $randomText[<:pboost:1013361479027793970>;<:xpboost:1013361197787131904>;<:metalsa:1013754216449319002>;<:mbwood:1013366670707929168>;<:health:1013754698555215932>;<:bluefire:1013754996145258566>;<:blaxemate:1013688406691291156>;<:wolfy:1013755453471215676>] ┊ <:blanko:1013753349335691304> 
You bet **$numberSeparator[$truncate[$message[1]];,]** $getVar[symbol];$randomText[<:pboost:1013361479027793970>;<:xpboost:1013361197787131904>;<:metalsa:1013754216449319002>;<:mbwood:1013366670707929168>;<:health:1013754698555215932>;<:bluefire:1013754996145258566>;<:blaxemate:1013688406691291156>;<:wolfy:1013755453471215676>] ┊ $randomText[<:pboost:1013361479027793970>;<:xpboost:1013361197787131904>;<:metalsa:1013754216449319002>;<:mbwood:1013366670707929168>;<:health:1013754698555215932>;<:bluefire:1013754996145258566>;<:blaxemate:1013688406691291156>;<:wolfy:1013755453471215676>] ┊ $randomText[<:pboost:1013361479027793970>;<:xpboost:1013361197787131904>;<:metalsa:1013754216449319002>;<:mbwood:1013366670707929168>;<:health:1013754698555215932>;<:bluefire:1013754996145258566>;<:blaxemate:1013688406691291156>;<:wolfy:1013755453471215676>] 
You bet **$numberSeparator[$truncate[$message[1]];,]** $getVar[symbol]
You won **$numberseparator[$multi[$truncate[$message[1]];2];,]** $getVar[symbol]]

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash;$authorID];$truncate[$message[1]]];$authorID]

$else

$if[$randomText[lost;lost;win]==lost]

<:blanko:1013753349335691304> ┊ <:blanko:1013753349335691304> ┊ <:blanko:1013753349335691304> 
You bet **$numberSeparator[$truncate[$message[1]];,]** $getVar[symbol] 
$editIn[0.8s; 
$randomText[<:pboost:1013361479027793970>;<:xpboost:1013361197787131904>;<:metalsa:1013754216449319002>;<:mbwood:1013366670707929168>;<:health:1013754698555215932>;<:bluefire:1013754996145258566>;<:blaxemate:1013688406691291156>;<:wolfy:1013755453471215676>] ┊ <:blanko:1013753349335691304> ┊ <:blanko:1013753349335691304> 
You bet **$numberSeparator[$truncate[$message[1]];,]** $getVar[symbol];$randomText[<:pboost:1013361479027793970>;<:xpboost:1013361197787131904>;<:metalsa:1013754216449319002>;<:mbwood:1013366670707929168>;<:health:1013754698555215932>;<:bluefire:1013754996145258566>;<:blaxemate:1013688406691291156>;<:wolfy:1013755453471215676>] ┊ $randomText[<:pboost:1013361479027793970>;<:metalsa:1013754216449319002>;<:mbwood:1013366670707929168>;<:health:1013754698555215932>;<:bluefire:1013754996145258566>;<:blaxemate:1013688406691291156>;<:wolfy:1013755453471215676>] ┊ <:blanko:1013753349335691304> 
You bet **$numberSeparator[$truncate[$message[1]];,]** $getVar[symbol];$randomText[<:pboost:1013361479027793970>;<:xpboost:1013361197787131904>;<:metalsa:1013754216449319002>;<:mbwood:1013366670707929168>;<:bluefire:1013754996145258566>;<:health:1013754698555215932>;<:blaxemate:1013688406691291156>;<:wolfy:1013755453471215676>] ┊ $randomText[<:pboost:1013361479027793970>;<:xpboost:1013361197787131904>;<:metalsa:1013754216449319002>;<:mbwood:1013366670707929168>;<:health:1013754698555215932>;<:bluefire:1013754996145258566>;<:blaxemate:1013688406691291156>;<:wolfy:1013755453471215676>] ┊ $randomText[<:pboost:1013361479027793970>;<:xpboost:1013361197787131904>;<:metalsa:1013754216449319002>;<:mbwood:1013366670707929168>;<:health:1013754698555215932>;<:bluefire:1013754996145258566>;<:wolfy:1013755453471215676>;<:blaxemate:1013688406691291156>] 
You bet **$numberSeparator[$truncate[$message[1]];,]** $getVar[symbol]
You lost **$numberseparator[$multi[$truncate[$message[1]];2];,]** $getVar[symbol]]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash;$authorID];$truncate[$message[1]]];$authorID]
$endif
$endif

$globalCooldown[15s;<:_timer:1013756274724323349> You are on a **cooldown** of **%time%**]

$onlyIf[$isNumber[$message[1]]==true;<:no:986620613537959946> Please provide **valid number**]
$onlyIf[$getGlobalUserVar[cash;$authorID]>=$message[1];<:no:986620613537959946> You don't have enough **$getVar[money]** $getVar[symbol]]`}
