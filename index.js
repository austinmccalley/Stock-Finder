var rp = require('request-promise-native');

module.exports = function (symbol, apiKey, curl=false) {
    return new Promise(function (fulfill, reject) {
        if (apiKey == undefined || apiKey == null) {
            reject({
                error: 'Please provide a proper IEX Cloud api key.'
            })
        } else {
            if (curl) {
               rp(`https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=${apiKey}`)
                .then(function (res_) {
                    if (!res_) reject({
                        error: "Something went wrong."
                    })
                    fulfill(JSON.parse(res_));
                })
                .catch(function (err) {
                    reject(err);
                });        
            }else{
                rp(`https://cloud.iexapis.com/stable/tops?token=${apiKey}&symbols=${symbol}`)
                    .then(function (res_) {
                        if (!res_) reject({
                            error: "Something went wrong."
                        })
                        fulfill(JSON.parse(res_));
                    })
                    .catch(function (err) {
                        reject(err);
                    });
                }
            }
            
    });
}