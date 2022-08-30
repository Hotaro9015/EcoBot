module.exports = {
name: "pgen",
code: `
$color[1;YELLOW]
$title[1;**Promocode generated**]
$description[1;<:arroww:1013692379854802965> **Promocode:** **$message[2]**]
$setServerVar[worth;$message[1]]
$setServerVar[promocode;$message[2]]
$onlyIf[$isNumber[$message[1]]==true;Not a valid number]
$onlyIf[$charCount[$message[1]]=<25;Char count cannot be more than 25 charactars]
$onlyForIDs[$botownerid;907169033764356097;]`}


