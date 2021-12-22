const request = require("request");
const cheerio = require("cheerio");
const url = "https://en.wikipedia.org/wiki/A#Other_uses";

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

    //other uses
    let otherUsesh2 = $(h2s[2]).text();

    let ps = $("div #mw-content-text .mw-parser-output>p");
    
    let otherUsesp1 = $(ps[16]).text();
    let otherUsesp2 = $(ps[17]).text();
    let otherUsesp3 = $(ps[18]).text();
    let otherUsesp4 = $(ps[19]).text();
    let otherUsesp5 = $(ps[20]).text();
    let otherUsesp6 = $(ps[21]).text();

    // console.log(otherUsesh2);
    // console.log(otherUsesp1);
    // console.log(otherUsesp2);
    // console.log(otherUsesp3);
    // console.log(otherUsesp4);
    // console.log(otherUsesp5);
    // console.log(otherUsesp6);
}

