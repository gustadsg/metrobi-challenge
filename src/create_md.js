const fs = require("fs");

const listOfQuestionDirs = fs.readdirSync("./src/").filter(str => str.includes("question"))

let md = 
`
# Answers for the challenge provided by metrobi

`

listOfQuestionDirs.forEach((currentQuestionDir) => {
    const basePath = `./src/${currentQuestionDir}`
    const answerPath = `${basePath}/answer.js`
    const questionPath = `${basePath}/question.txt`
    if(!fs.existsSync(answerPath)) return;

    const questionNum = currentQuestionDir.split("-")[1]
    const answer = fs.readFileSync(answerPath)
    const question = fs.readFileSync(questionPath)
    md += 
`\n### Question-${questionNum}

> ${question}

\`\`\`javaScript
${answer}
\`\`\`
`
})

fs.writeFileSync("answers.md", md)

