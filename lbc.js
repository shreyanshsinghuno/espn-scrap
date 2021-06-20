// cheerio can only load content which is loaded at first on webpage 
const request = require("request");
const cheerio = require("cheerio");
const url =
  "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary";
request(url, cb);
function cb(err, response, html) {
  if (err) {
    console.log(err);
  } else {
    handleHtml(html);
  }
}

function handleHtml(html) {
  let func = cheerio.load(html);
  let elemsArr = func(
    ".d-flex.match-comment-padder.align-items-center .match-comment-long-text"
  );
  let text = func(elemsArr[0]).text();
  let htmlText = func(elemsArr[0]).html();
  console.log(text);
  console.log(htmlText);
}
