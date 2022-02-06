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
![](https://github-readme-stats.vercel.app/api?username=Lemonawa&bg_color=30,e96443,904e95&title_color=fff&text_color=fff&layout=compact)
![](https://github-readme-stats.vercel.app/api/top-langs/?username=Lemonawa&layout=compact&bg_color=30,e96443,904e95&title_color=fff&text_color=fff)  
![](https://raw.githubusercontent.com/Lemonawa/Lemonawa/main/assets/github-contribution-grid-snake.svg)



\
`

console.log(readme)
// README.md End
