module.exports = {
    Bot: {
    token: process.env.token,
    prefix: ["$getServerVar[prefix]","<@$clientID>","Eco","Eco "],
    intents: "all",
    database: {
        type:'default',
        db:require('dbdjs.db'),
        path:"./data/",
        tables:["ecobot"],
        promisify:false
    },
    respondOnEdit: {
        commands: true
    },
    debug: {
        interpreter : true 
},
    suppressAllErrors: {
        errorMessage: ["", "{newEmbed:{title:Opps!}{description:<:no:986620613537959946> **There is an error!**}{color:ff0000}}"]
    }
}
}

//OTkyNjU5NjczMjU5OTc4Nzgy.GuSKd6.oDH5Hf38n4UJnVJq5DCmXviWP4G5a696PFZpOU