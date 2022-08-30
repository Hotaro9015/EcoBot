module.exports = {
name: "func",
aliases: ['funcs','commands','code'],
code: `
$title[1;$getObjectProperty[data[0].name];https://aoi.js.org/functions/$replaceText[$getObjectProperty[data[0].name];$;usd]]
$author[1;aoi.js (Stable)]
$addField[1;Source;[Documentation](https://aoi.js.org);yes]
$addField[1;Description;\`\`\`$getObjectProperty[data[0].desc]\`\`\`]
$addField[1;Usage;\`\`\`php
$getObjectProperty[data[0].usage]\`\`\`]
$addTimestamp[1]
$color[1;RANDOM]
$createObject[$jsonRequest[https://aoi.js.org/functions/$message]]
$argsCheck[>0;<:no:986620613537959946> Please enter the function name.]
$suppressErrors[<:no:986620613537959946> Function \`$message\` not found or something went wrong.]`
}