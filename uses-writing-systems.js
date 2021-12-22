const request = require("request");
const cheerio = require("cheerio");
const url = "https://en.wikipedia.org/wiki/A#Use_in_writing_systems";

request(url, cb);
function cb(err, response, html){
    if(err){
        console.log(err);
    }else{
        parseAndextract(html);
    }
}
function parseAndextract(html){

    let $ = cheerio.load(html);

    let h2s = $("div #mw-content-text .mw-parser-output>h2");
    let useh2 = $(h2s[1]).text();

    let h3s = $("div.mw-parser-output h3");

    //english
    let englishh3 = $(h3s[1]).text();

    let ps = $("div #mw-content-text .mw-parser-output>p");
    let uls = $("div #mw-content-text .mw-parser-output>ul");
    
    let englishps1 = $(ps[11]).text();
    let englishul = $(uls[0]).text();
    let englishps2 = $(ps[12]).text();
    let englishps3 = $(ps[13]).text();

    //other languages
    let otherLanh3 = $(h3s[2]).text();
    let otherlanp = $(ps[14]).text();

    //other Systems
    let otherSysh3 = $(h3s[3]).text();

    let otherSysp = $(ps[14]).text();
    let otherSysul = $(uls[1]).text();
    
    console.log(useh2);
    console.log(englishh3);
    console.log(englishps1);
    console.log(englishul);
    console.log(englishps2);
    console.log(englishps3);

    console.log(otherLanh3);
    console.log(otherlanp);

    console.log(otherSysh3);
    console.log(otherSysp);
    console.log(otherSysul);
}

