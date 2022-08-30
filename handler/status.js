module.exports = (bot) => {
    bot.status({
        text: "@EcoBot and my server prefix is : Eco",
        type: "PLAYING",
        time: 12
    })

    bot.status({
        text: "Your Balance",
        type: "WATCHING",
        time: 12
    })
}
