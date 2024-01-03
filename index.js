const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

let weight 
let height 

    rl.question(" Enter your weight: ", (Wei) => {
    rl.question(" Enter your height: ", (Hei) =>{
        weight = parseFloat(Wei)
        
        height = parseFloat(Hei*0.01)
        console.log(weight)
        console.log(height)

        let result = weight / (height*height)
         
            if (result<18.5){
                console.log("You are underweight")
                console.log(result.toFixed(2))
            }
          else if (result<24.9){
                console.log("You are nonmal")
                console.log(result.toFixed(2))
            }
            if (result <29.9){
                console.log("You are Overweight")
                console.log(result.toFixed(2))
            }
            else if (result<39.9){
                console.log("You are Obese")
                console.log(result.toFixed(2))
            }
            if (result>49.9){
                console.log("You are Extremely Obese")
                console.log(result.toFixed(2))
            }
            

    })
    })
