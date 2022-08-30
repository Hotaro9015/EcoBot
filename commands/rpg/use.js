module.exports = {
name: "use",
$if: "v4",
code: `
$if[$message==xpboost]
$setGlobalUserVar[xpon;on]
$setGlobalUserVar[xpboost;$sub[$getGlobalUserVar[xpboost];1]]

**You used some <:xpboost:1013361197787131904> and now youll get some more xp which you can use. but beware it can wear off randomly**


$onlyIf[$getGlobalUserVar[xpboost]>0;{newEmbed: {color:RED} {title:**Error occured**} {description: **ERROR you do not own a <:xpboost:1013361197787131904>**}}]
$onlyIf[$getGlobalUserVar[xpon]==off;**You already have used your <:xpboost:1013361197787131904>**]

$else

$if[$message==cboost]
$setGlobalUserVar[con;on]
$setGlobalUserVar[cboost;$sub[$getGlobalUserVar[cboost];1]]
**You used some <:pboost:1013361479027793970> and now get some more allowence. but beware it can wear off randomly**


$onlyIf[$getGlobalUserVar[cboost]>0;{newEmbed: {color:RED} {title:**Error occured**} {description: **ERROR you do not own a <:pboost:1013361479027793970>**}}]
$onlyIf[$getGlobalUserVar[con]==off;**You already have used your <:pboost:1013361479027793970>**]

$else

$if[$message==lboost]
$setGlobalUserVar[lon;on]
$setGlobalUserVar[lucky;$sub[$getGlobalUserVar[lucky];1]]

**You used some <:gpotion:1013687693626064947> now youll get some more lucky in** \`stroll , adventure\` **but beware it can wear off randomly**


$onlyIf[$getGlobalUserVar[lucky]>0;{newEmbed: {color:RED} {title:**Error occured**} {description: **ERROR you do not own a <:gpotion:1013687693626064947>**}}]
$onlyIf[$getGlobalUserVar[lon]==off;**You already have used your <:gpotion:1013687693626064947>**]
$else
<:no:986620613537959946> **Invalid item**
$endif
$endif
$endif`
}
