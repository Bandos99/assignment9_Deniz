

const fs = require("fs");
const puppeteer = require("puppeteer");
const axios = require("axios");
const util = require("util");
const generateHTML = require("./generateHTML.js");
const inquirer = require("inquirer");



 
async function generateResume(){
    try{
        const { gitUserName, backgroundColor }= await inquirer.prompt([
            {
                type:"input",
                name:"gitUserName",
                location:"Please input your GitHub Username"
            },
            {
                type:"list",
                name: "backgroundColor",
                message: "Please choose your background color",
                choices:[
                    "blue",
                    "green",
                    "pink",
                    "red"
                ]
            }
        ])
        const userQueryUrl = `https://api.github.com/users/${gitUserName}`;
        const repoQueryUrl = `https://api.github.com/users/${gitUserName}/repos`;
        const userResponse = await axios.get(userQueryUrl);
        const repoResponse = await axios.get(repoQueryUrl);
        const starArray = repoResponse.data.map(repo => parseInt(repo.watchers));
        const locationURI = encodeURI(`https://www.google.com/maps/place/${userResponse.data.location}`)
        const totalStars = starArray.reduce((a,b)=> a+b,0);
        const resultHTML = generateHTML.generateHTMLHead(backgroundColor)+generateHTML.generateHTMLBody(userResponse.data,totalStars, locationURI);
        await writeFileAsync(`${gitUserName}.html`, resultHTML);
        const pdfRes = await write2PDF(resultHTML,`${gitUserName}.pdf`);
    }catch(err){
        console.log(err);
    }
}

generateResume();
