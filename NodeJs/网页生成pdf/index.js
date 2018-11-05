const $ = require("cheerio"),
  url = "https://wangdoc.com/javascript",
  request = require("./util"),
  percollate = require("percollate");

let urlList = [];

// console.log("percollate--", percollate);

const getHtml = url => {
  return request.parseBody(url);
};

const getUrlList = (body, el) => {
  $(body)
    .find(el)
    .eq(0)
    .find("li a")
    .each((i, v) => {
      const pathStr = $(v).attr("href");
      const path = pathStr.slice(pathStr.indexOf("/"));
      // console.log("path--", path);
      urlList.push(url + path);
    });
};

// 获取页面HTML
getHtml(url).then(res => {
  getUrlList(res, ".menu-list");
  // console.log("urlList---", urlList);
  // var arr = [
  //   "https://wangdoc.com/javascript/basic/index.html",
  //   "https://wangdoc.com/javascript/basic/introduction.html",
  //   "https://wangdoc.com/javascript/basic/history.html",
  //   "https://wangdoc.com/javascript/basic/grammar.html",
  //   "https://wangdoc.com/javascript/types/index.html",
  //   "https://wangdoc.com/javascript/types/general.html"
  // ];
  // console.log("percollate---", percollate);
  percollate.configure();
  percollate.pdf(urlList, {
    output: "阮一峰JavaScript教程.pdf",
    sandbox: false
  });
});
