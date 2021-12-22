const request = require("request");
const cheerio = require("cheerio");
const url = "https://en.wikipedia.org/wiki/A#History";

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

    let h2s = $("div.mw-parser-output>h2");
    
    //history
    let historyh2 = $(h2s[0]).text();

    let ps =  $("div #mw-content-text .mw-parser-output>p");
    let p1 = $(ps[4]).text();
    let p2 = $(ps[5]).text();
    let p3 = $(ps[6]).text();

    let h3s = $("div.mw-parser-output h3");

    //typographic variant
    let teventh3 = $(h3s[0]).text();

    let p4 = $(ps[7]).text();
    let p5 = $(ps[8]).text();
    let p6 = $(ps[9]).text();
    let p7 = $(ps[10]).text();

    console.log(historyh2);

    console.log(p1);
    console.log(p2);
    console.log(p3);

    console.log(teventh3);

    console.log(""+$(ps[7]).text());
    console.log(""+$(ps[8]).text());
    console.log(""+$(ps[9]).text());
    console.log(""+$(ps[10]).text());
}

