const axios = require('axios')

// index page with no data
exports.index = function(req,res){
    let data = {
        isResult: false,
        message: null,
        results:[]
    }
    return res.render('index',{data:data})
}

// return to index page but with data
exports.search = function(req,res){
    const youtube_id = req.body.youtubeid

    if(youtube_id === null || youtube_id === ""){
        let data = {
            isResult: false,
            message: "Insert a Youtube ID",
            errorStatus: true,
            results:[]
        }
        return res.render('index',{data:data})
    }

    // configuration for youtube to audio API
    let musicConfig = axios.get('https://youtube-mp36.p.rapidapi.com/dl',{
        "params":{id: youtube_id},
        "headers": {
            "X-RapidAPI-Key": process.env.MUSIC_API_KEY,
            "X-RapidAPI-Host": process.env.MUSIC_API_HOST
        }
    })

    // configuration for youtube to video API with formats
    let videoConfig = axios.get('https://ytstream-download-youtube-videos.p.rapidapi.com/dl',{
        "params":{id: youtube_id},
        "headers": {
            "X-RapidAPI-Key": process.env.VIDEO_API_KEY,
            "X-RapidAPI-Host": process.env.VIDEO_API_HOST
        }
    })

    // Query all and return a promise to index page with a data
    // From two API (Audio and Video)
    Promise.all([musicConfig,videoConfig]).then(response=>{
        const DataMusic = response[0].data
        const DataVideo = response[1].data

        let Alldata = {
            isResult: true,
            message: "Success",
            results:[DataMusic,DataVideo]
        }
        return res.render('index',{data:Alldata})
        
    }).catch(error => console.log(error.message))

    
}


exports.guide = function(req,res){
    return res.render('guide')
}

exports.about = function(req,res){
    return res.render('about')
}