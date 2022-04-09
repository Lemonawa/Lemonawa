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
### Hi there 🖐️
14岁，是学生  
~~Also a gay~~  
在学Html/css/js  
⏳ 今年已经过去了 ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %
![](https://raw.githubusercontent.com/Lemonawa/Lemonawa/main/assets/github-contribution-grid-snake.svg)
###### ~~Look how hard this robot~~
![Alt](https://repobeats.axiom.co/api/embed/e02bb0793bf59235fcd0d02d38bf634123fc3a78.svg "Repobeats analytics image")
\
`

console.log(readme)
// README.md End
