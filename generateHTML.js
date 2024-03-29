const colors = {
    green: {
        wrapperBackground: "#E6E1C3",
        headerBackground: "#C1C72C",
        headerColor: "black",
        photoBorderColor: "#black"
    },
    blue: {
        wrapperBackground: "#5F64D3",
        headerBackground: "#26175A",
        headerColor: "white",
        photoBorderColor: "#73448C"
    },
    pink: {
        wrapperBackground: "#879CDF",
        headerBackground: "#FF8374",
        headerColor: "white",
        photoBorderColor: "#FEE24C"
    },
    red: {
        wrapperBackground: "#DE9967",
        headerBackground: "#870603",
        headerColor: "white",
        photoBorderColor: "white"
    }
};

function generateHTMLHead(backgroundColor) {
    return `<!DOCTYPE html>
  <html lang="en">
     <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
        <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
        <title>Document</title>
        <style>
            @page {
              margin: 0;
            }
           *,
           *::after,
           *::before {
           box-sizing: border-box;
           }
           html, body {
           padding: 0;
           margin: 0;
           }
           html, body, .wrapper {
           height: 100%;
           }
           .wrapper {
           background-color: ${colors[backgroundColor].wrapperBackground};
           padding-top: 100px;
           }
           body {
           background-color: white;
           -webkit-print-color-adjust: exact !important;
           font-family: 'Cabin', sans-serif;
           }
           main {
           background-color: #E9EDEE;
           height: auto;
           padding-top: 30px;
           }
           h1, h2, h3, h4, h5, h6 {
           font-family: 'BioRhyme', serif;
           margin: 0;
           }
           h1 {
           font-size: 3em;
           }
           h2 {
           font-size: 2.5em;
           }
           h3 {
           font-size: 2em;
           }
           h4 {
           font-size: 1.5em;
           }
           h5 {
           font-size: 1.3em;
           }
           h6 {
           font-size: 1.2em;
           }
           .photo-header {
           position: relative;
           margin: 0 auto;
           margin-bottom: -50px;
           display: flex;
           justify-content: center;
           flex-wrap: wrap;
           background-color: ${colors[backgroundColor].headerBackground};
           color: ${colors[backgroundColor].headerColor};
           padding: 10px;
           width: 95%;
           border-radius: 6px;
           }
           .photo-header img {
            width: 250px;
            height: 250px;
            border-radius: 50%;
            object-fit: cover;
            margin-top: -75px;
           border: 6px solid ${colors[backgroundColor].photoBorderColor};
           box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
           }
           .photo-header h1, .photo-header h2 {
           width: 100%;
           text-align: center;
           }
           .photo-header h1 {
           margin-top: 10px;
           }
           .links-nav {
           width: 100%;
           text-align: center;
           padding: 20px 0;
           font-size: 1.1em;
           }
           .nav-link {
           display: inline-block;
           margin: 5px 10px;
           }
           .workExp-date {
           font-style: italic;
           font-size: .7em;
           text-align: right;
           margin-top: 10px;
           }
           .container {
           padding: 50px;
           padding-left: 100px;
           padding-right: 100px;
           }
  
           .row {
             display: flex;
             flex-wrap: wrap;
             justify-content: space-between;
             margin-top: 20px;
             margin-bottom: 20px;
           }
  
           .card {
             padding: 20px;
             border-radius: 6px;
             background-color: ${colors[backgroundColor].headerBackground};
             color: ${colors[backgroundColor].headerColor};
             margin: 20px;
           }
           
           .col {
           flex: 1;
           text-align: center;
           }
  
           a, a:hover {
           text-decoration: none;
           color: inherit;
           font-weight: bold;
           }
  
           @media print { 
            body { 
              zoom: .75; 
            } 
           }
        </style></head>`
}


function generateHTMLBody(response, totalStars, geoLocationURI) {
    return `<body>
    <div class="main">
    <div class="wrapper">
    <header class="photo-header">
        <img src="${response.avatar_url}">
        <h1>Hi!</h1>
        <h1>My Name is ${response.name}</h1>
        <h4>Currently @ ${response.company}</h3>
        <div class="links-nav">
            <p>
                <i class="fas fa-location-arrow"></i><a class="nav-link" href="${geoLocationURI}">${response.location}</a> 
                <i class="fab fa-github"> </i><a class="nav-link" href="${response.html_url}">GitHub</a>
                <i class="fas fa-blog"> </i> <a class="nav-link" href="${response.blog}">Blog</a>
            </p>
        </div>
    </header>
    </div>
    <div class="main container">
        <div class="row>
            <div class="col">
                <h3>${response.bio}</h3>
            </div>
        </div>
        <div class="row">
            <div class="card col">
                <h3>Public Repositories</h3>
                <h4>${response.public_repos}</h4>
            </div>
            <div class="card col">
                <h3>Followers</h3>
                <h4>${response.followers}</h4>
            </div>
        </div>

        <div class="row">
            <div class="card col">
                <h3>GitHub Stars</h3>
                <h4>${totalStars}</h4>
            </div>
            <div class="card col">
                <h3>Following</h3>
                <h4>${response.following}</h4>
            </div>
        </div>
    </div>
    <div class="wrapper"></div>
    </div>
</body>`
}

module.exports = {
    generateHTMLBody:generateHTMLBody,
    generateHTMLHead: generateHTMLHead,
    colors:colors
}