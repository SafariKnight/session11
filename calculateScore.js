const kills = 3
const multiplier = 1.2
const deaths = 1

function calculateScore() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.fround((kills * multiplier) - (deaths * 1.1)))
    })
  })
}

calculateScore().then((score) => {
  console.log(`Score: ${score}`)
})
