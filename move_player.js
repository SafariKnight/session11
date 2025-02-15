function move_player(direction) {
   return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`moved ${direction}`)
        }, 1000);
    })
}

move_player("left").then((resolve) =>{
    console.log(resolve);
}
)
