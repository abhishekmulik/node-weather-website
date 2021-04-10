const request=require('request')

const forecast=(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=0cfef54d504268dcd3155f1bb704f6d8&query='+latitude+','+longitude+'&units=f'

    request({url,json:true},(error,{ body })=>{
        if (error){ 
            callback('Unable to connect to weather service',undefined)
        }else if (body.error){
            callback('Unable to find location',undefined)
        }else{
            callback(undefined,`The temperature is ${body.current.temperature}\nHumidity: ${body.current.humidity}\nLocal date Time: ${body.location.localtime}`)
        }
        // }else{
        //     callback(undefined,`The temperaure is ${body.current.temperature} but it feels like ${body.current.feelslike}`)
        // }
    })
}

module.exports=forecast