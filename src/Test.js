async function test(){
    let val = await fetch("https://cataas.com/api/cats?tags=cute")
    let jsonData = await val.json()
    console.log(jsonData)
    return(
        jsonData["0"]["tags"]["0"]
    )
        
       
}

