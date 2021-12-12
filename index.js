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

const readme = `\
### Hi there 👋
⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %
---
⏰ Updated on ${new Date().toUTCString()}
---
![](https://github-readme-stats.vercel.app/api?username=Lemonawa&bg_color=30,e96443,904e95&title_color=fff&text_color=fff&layout=compact)
![](https://github-readme-stats.vercel.app/api/top-langs/?username=Lemonawa&layout=compact&bg_color=30,e96443,904e95&title_color=fff&text_color=fff)  
![](https://raw.githubusercontent.com/Lemonawa/Lemonawa/main/assets/github-contribution-grid-snake.svg)


<!---
Lemonawa/Lemonawa is a ✨ special ✨ repository because its `README.md` (this file) appears on your GitHub profile.
You can click the Preview link to take a look at your changes.
--->
\
`

console.log(readme)
