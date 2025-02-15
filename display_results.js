function checkGameOver() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Game Over")
        }, 1000);
    })
}

checkGameOver().then((resolve)=>{
        console.log(resolve)
    }
)