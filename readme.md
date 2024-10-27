# Metrobi Tech Challenge

This repository contains solutions to the Metrobi tech challenge, organized by question. Each solution is accompanied by the original question prompt, an answer file, and, where applicable, test cases to verify functionality. The `create_md.js` script consolidates all questions and answers into a single markdown file, [answers.md](./answers.md).

## Table of Contents
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
  - [Generating the Answers File](#generating-the-answers-file)
  - [Running Tests](#running-tests)
- [Question Overview](#question-overview)

## Project Structure

```
└── answers.md               # Consolidated markdown file of all questions and answers
└── package.json             # Project dependencies and scripts
└── package-lock.json        # Exact dependency versions
└── src
    ├── create_md.js         # Script to parse the questions and answers into a markdown file
    ├── question-[n]
    │   ├── answer.[ext]     # Solution file(s) for the question
    │   ├── answer.test.js   # Test cases for the solution (if applicable)
    │   └── question.txt     # Text file with the question prompt
    └── ...
```

## Installation

To prepare the environment for running scripts or tests, install the dependencies by navigating to the repository root and running:

```bash
npm install
```

## Usage

### Generating the Answers File

Run `create_md.js` to generate a consolidated `answers.md` file containing all questions and answers:

```bash
node src/create_md.js
```

This will update `answers.md` with the latest question and answer content.

### Running Tests

Most questions include dedicated test cases. To run all tests, use:

```bash
npm test
```

This command executes each `answer.test.js` file within the question directories, validating the solutions provided.

## Question Overview

Below is a brief description of each question and the files associated with its solution:

1. **Duplicate Items in Array**  
   - **Files**: `answer.js`
   - Finds duplicate items in an array with options to return duplicates with or without repetitions.

2. **Exponential Delay Printing**  
   - **Files**: `answer.js`
   - Prints array items with delays that increase exponentially (1, 2, 4, 8 seconds, etc.).

3. **React Layout Using Flexbox**  
   - **Files**: `answer.jsx`, `styles.css`
   - Constructs a responsive layout using Flexbox.

4. **Bracket Matching**  
   - **Files**: `answer.js`
   - Checks if brackets in a string are properly opened and closed.

5. **Egg Drop Puzzle**  
   - **Files**: `answer.js`
   - Finds the highest safe floor to drop an egg from with minimal drops.

6. **Zeno’s Paradox Animation**  
   - **Files**: `answer.html`, `answer.js`, `script.js`, `styles.css`
   - Animates “Zeno’s Paradox of Achilles and the Tortoise” in a web interface.

7. **Knapsack Problem with Unlimited Carrot Types**  
   - **Files**: `answer.js`
   - Solves the unbounded knapsack problem to maximize value within a weight limit.