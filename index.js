var useragents = require('./useragents.json')

function randomUseragent(byPopularity=true) {
    // Randomly
    if (!byPopularity) {
        var r = (Math.random()*Object.keys(useragents.useragents).length).toFixed(0)
        var ky = Object.keys(useragents.useragents)[r]
        var ua = useragents.useragents[ky]
        ua.ua = ky
        return ua        
    }

    // byPopularity
    var rnd = Math.random()*useragents.totalPopularity
    var total = 0    
    for(var i in useragents.useragents) {
        var agent = useragents.useragents[i]
        if (rnd>total && rnd<=total+agent.popularity) {
            agent.ua = i
            return agent            
        }
        total+=agent.popularity
        
        
    }
    return false
}

module.exports={
    useragents,
    randomUseragent
}