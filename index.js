const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar =
      '█'.repeat(passedProgressBarIndex) +
      '▁'.repeat(progressBarCapacity - passedProgressBarIndex)
    return `{ ${progressBar} }`
}
// README.md Start
const readme = `\
### Hi there 👋  I'm Lemonawa  
⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %
---
⏰ Updated on ${new Date().toUTCString()}
---
Just a middle school student from China...  
Learning Python, Html and more.
![](https://raw.githubusercontent.com/Lemonawa/Lemonawa/main/assets/github-contribution-grid-snake.svg)
# ~~Look how hard this robot~~
![Alt](https://repobeats.axiom.co/api/embed/e02bb0793bf59235fcd0d02d38bf634123fc3a78.svg "Repobeats analytics image")

\
`

console.log(readme)
// README.md End
