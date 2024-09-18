const fs = require("fs");

const listOfQuestionDirs = fs.readdirSync("./src/").filter(str => str.includes("question"));

let md = 
`
# Answers for the challenge provided by Metrobi
`;

listOfQuestionDirs.forEach((currentQuestionDir) => {
    const basePath = `./src/${currentQuestionDir}`;
    const questionNum = currentQuestionDir.split("-")[1];
    const questionPath = `${basePath}/question.txt`;

    if (!fs.existsSync(questionPath)) return;

    const question = fs.readFileSync(questionPath, 'utf8');
    md += `\n### Question-${questionNum}\n\n> ${question}\n`;

    // List of relevant file extensions to include
    const fileTypes = ['.js', '.jsx', '.html', '.css'];
    const excludedFileType = '.test.js'

    // Read all files in the directory and filter by the allowed extensions
    const answerFiles = fs.readdirSync(basePath).filter(file => 
        fileTypes.some(type => file.endsWith(type) && !file.endsWith(excludedFileType))
    );

    answerFiles.forEach((file) => {
        const filePath = `${basePath}/${file}`;
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const fileExtension = file.substring(file.lastIndexOf('.'));
        
        md += `\n#### File: ${file}\n`;
        md += `\n\`\`\`${getLanguage(fileExtension)}\n${fileContent}\n\`\`\`\n`;
    });
});

// Helper function to map file extension to language type for syntax highlighting
function getLanguage(fileType) {
    switch(fileType) {
        case '.js':
        case '.jsx':
            return 'javascript';
        case '.html':
            return 'html';
        case '.css':
            return 'css';
        default:
            return ''; // Default for unknown types
    }
}

fs.writeFileSync("answers.md", md);
