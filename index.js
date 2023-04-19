const fs = require("fs");
const inquirer = require("inquirer");
inquirer
    .prompt([
        {
            name: "username",
            message: "Enter your name",
            type: "input"
        },
        {
            name: "location",
            message: "Where are you located?",
            type: "input"
        },
        {
            name: "linkedIn",
            message: "Enter your LinkedIn username.",
            default: "FarleyBacon",
            type: "input"
        },
        {
            name: "github",
            message: "Enter your GitHub username.",
            default: "FarleyBacon",
            type: "input"
        },
        {
            name: "bio",
            message: "Talk about yourself a little bit.",
            default: "Please use punctuation!",
            type: "input"
        }
    ])
    .then(answers =>{
        const answersStr = generateHTML(answers);
        fs.writeFile("index.html", answersStr, function(err){
            /* if (err) throw (err);
            else {console.log("woo!")}*/
            err ? console.error(err) : console.log("Woo!");
        });
    });
const generateHTML = ({username, location, linkedIn, github, bio}) => {
    return `
<!DOCTYPE html>
<html lang="en-US">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script rel="script" src="./index.js" defer></script>
        <title> Hello, Welcome to ${username}</title>
    </head>
    <body>
        <header>
            <h1> Hi, I am ${username} </h1>
            <navbar>
                <a href="https://linkedin.com/${linkedIn}/">LinkedIn</a>
                <a href="https://github.com/${github}/">GitHub</a>
            </navbar>
        </header>
        <div>
            I am located in ${location}!
        </div>
        <div>
            Here is a little bit about me:
                <p>${bio}</p>
        </div>
    </body>
</html>
`}