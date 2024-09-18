export async function printItemsWithExponentialDelay(data) {
    return new Promise((resolve,_) => {
        data.forEach((item, i) => {
            setTimeout(() => {
                console.log(item)
                
                if(i === data.length-1) {
                    resolve()
                }
            }, Math.pow(2,i)*1000)
        })
    })
}