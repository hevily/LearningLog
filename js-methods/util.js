// 补零
function formatNumber(n) {
  n = n.toString();
  return n[1] ? n : "0" + n;
}

// 格式化时间
function formatTime(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return (
    [year, month, day].map(formatNumber).join("/") +
    " " +
    [hour, minute, second].map(formatNumber).join(":")
  );
}

// 浮点型除法
function div(a, b) {
  let c;
  let d;
  let e = 0;
  let f = 0;
  try {
    e = a.toString().split(".")[1].length;
  } catch (g) {}
  try {
    f = b.toString().split(".")[1].length;
  } catch (g) {}
  return (
    (c = Number(a.toString().replace(".", ""))),
    (d = Number(b.toString().replace(".", ""))),
    mul(c / d, Math.pow(10, f - e))
  );
}

// 浮点型加法函数
function accAdd(arg1, arg2) {
  var r1, r2, m;
  try {
    r1 = arg1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  return ((arg1 * m + arg2 * m) / m).toFixed(2);
}

// 浮点型乘法
function mul(a, b) {
  var c = 0;
  var d = a.toString();
  var e = b.toString();
  try {
    c += d.split(".")[1].length;
  } catch (f) {}
  try {
    c += e.split(".")[1].length;
  } catch (f) {}
  return (
    (Number(d.replace(".", "")) * Number(e.replace(".", ""))) / Math.pow(10, c)
  );
}

// 小程序倒计时功能

function countdownTimer(name = "timer") {
  let { days, hours, minutes, seconds } = this.data;
  if (!days || !hours || !minutes || !seconds) {
    console.warn("countdownTimer缺少必要的参数！");
    return;
  }
  clearInterval(getApp()[name]);
  getApp()[name] = setInterval(() => {
    seconds--;
    if (seconds < 0) {
      seconds = 59;
    }
    this.setData({
      seconds: formatNumber(seconds)
    });
    if (seconds === 59) {
      minutes--;
      if (minutes < 0) {
        minutes = 59;
      }
      this.setData({
        minutes: formatNumber(minutes)
      });
    }
    if (minutes === 59 && seconds === 59) {
      hours--;
      if (hours < 0) {
        hours = 23;
      }
      this.setData({
        hours: formatNumber(hours)
      });
    }
    if (hours === 23 && minutes === 59 && seconds === 59) {
      days--;
      if (days < 0) {
        days = 0;
      }
      this.setData({
        days: formatNumber(days)
      });
    }
    if (
      (seconds == 0 || seconds == "00") &&
      (minutes == "00" || minutes == "0") &&
      (hours == "00" || hours == "0") &&
      (days == "00" || days == "0")
    ) {
      clearInterval(getApp()[name]);
      this.setData({
        gameOver: true
      });
    }
    this.triggerEvent("saveCountDown", { days, hours, minutes, seconds });
  }, 1000);
}

// 节流函数
function throttle(fn, gapTime) {
  if (gapTime === null || gapTime === undefined) {
    gapTime = 2000;
  }

  let _lastTime = null;

  return function() {
    let _nowTime = +new Date();
    if (_nowTime - _lastTime > gapTime || !_lastTime) {
      fn.apply(this, arguments);
      _lastTime = _nowTime;
    }
  };
}

// 函数防抖
function debounce(fn, wait) {
  var timer = null;
  return function() {
    clearTimeout(timer);
    setTimeout(function() {
      fn && fn();
    }, wait);
  };
}

/**
 * 获取当前url中的参数
 *
 * @returns {object} 参数对象
 */
function getUrlParam() {
  var param = {};
  var item = [];
  if (location.search == "") {
    return param;
  }
  var query = decodeURIComponent
    ? decodeURIComponent(location.search.substring(1))
    : location.search.substring(1);
  var list = query.split("&");
  for (var i = 0; i < list.length; i++) {
    item = list[i].split("=");
    if (typeof param[item[0]] == "undefined") {
      param[item[0]] = "";
    }
    param[item[0]] = item[1];
  }
  return param;
}

/**
 * 生成包含自定义参数的url
 *
 * @param {any} param 包含参数的对象
 * @returns url
 */
function setUrlByParam(param) {
  var url = "";
  for (key in param) {
    url += "&" + key + "=" + param[key];
  }
  return url == ""
    ? url
    : getHost() + location.pathname + "?" + url.substring(1);
}

/**
 * 判断浏览器是否支持localStorage
 *
 * @returns
 */
function hasLocalStorage() {
  try {
    "localStorage" in window && window["localStorage"] !== null;
    window.localStorage.setItem("test", "1");

    return true;
  } catch (e) {
    return false;
  }
}
/**
 * 设置本地储存数据
 *
 * @param {string} key
 * @param {string} value
 */
function setRecord(key, value) {
  //验证是否支持 hasLocalStorage
  this[key] = value;
  if (this.hasLocalStorage()) {
    //支持
    window.localStorage.setItem(key, value);
  } else {
    //不支持 入cookies
    var Days = 3600;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = key + "=" + value + ";expires=" + exp.toGMTString();
  }
}
/**
 * 获取本地储存数据
 *
 * @param {string} key
 * @param {string} value
 * @returns
 */
function getRecord(key, value) {
  try {
    if (this[key]) {
      return this[key];
    }
    if (this.hasLocalStorage()) {
      //支持
      var value = window.localStorage.getItem(key);

      return value || "";
    } else {
      //不支持
      var value = "";
      try {
        var ca = document.cookie.split(";");

        for (var i = 0; i < ca.length; i++) {
          var temp = ca[i].split("=");
          if (temp[0].toLowerCase().replace(/ /gi, "") == key.toLowerCase()) {
            value = temp[1];
            break;
          }
        }
      } catch (e) {}

      return value;
    }
  } catch (e) {
    return "";
  }
}

/*
* 功能齐全的金额转换
* 参数说明：
* number：要格式化的数字,可以为字符串和数字类型
* decimals：保留几位小数
* decPoint：小数点符号,默认为"."
* thousandsSep：千分位符号,默认为",",参数为""时没有符号
* roundtag:舍入参数，默认 "floor向下取(截取),ceil向上取","round" 四舍五入
* example:
* console.log(formatNumber(234.334, 2, ".", "")) // 234.33
* console.log(formatNumber(0.232373, 4, ".", "")) // 0.2323
* console.log(formatNumber(2, 2, ",", ","))//"2,00"
* console.log(formatNumber(3.7, 2, ".", ","))//"3.70"
* console.log(formatNumber(3, 0, ",", ",")) //"3"
* console.log(formatNumber(9.0312, 2, ".", ","))//"9.03"
* console.log(formatNumber(9.00, 2, ".", ","))//"9.00"
* console.log(formatNumber(39.715001, 2, ".", ",", "floor")) //"39.71"
* console.log(formatNumber(9.7, 2, ".", ","))//"9.70"
* console.log(formatNumber(39.7, 2, ".", ","))//"39.70"
* console.log(formatNumber(9.70001, 2, ".", ","))//"9.70"
* console.log(formatNumber(39.70001, 2, ".", ","))//"39.70"
* console.log(formatNumber(9996.03, 2, ".", ","))//"9,996.03"
* console.log(formatNumber(1.7973, 3, ".", ",", "ceil"))//"1.798"
* console.log(formatNumber(393434.715961, 4, '.', '')) // 393434.7159
* console.log(formatNumber(393434.715861, 4, '.', '', 'round')) // 393434.7159
* console.log(formatNumber(393434.715661, 4, '.', ',', 'round')) // 393,434.7157
* */
export function formatNumber(
  number,
  decimals,
  decPoint,
  thousandsSep,
  roundtag
) {
  number = (number + "").replace(/[^0-9+-Ee.]/g, "");
  roundtag = roundtag || "floor"; // "ceil","floor","round"
  var n = !isFinite(+number) ? 0 : +number; // 要处理的数值
  var prec = !isFinite(+decimals) ? 0 : Math.abs(decimals); // 保留多少位
  var dec = typeof decPoint === "undefined" ? "." : decPoint; // 小数点符号
  var sep = typeof thousandsSep === "undefined" ? "," : thousandsSep; // 千分位符号
  var s = "";
  var toFixedFix = function(n, prec) {
    var k = Math.pow(10, prec);
    return (
      "" +
      parseFloat(
        Math[roundtag](parseFloat((n * k).toFixed(prec * 2))).toFixed(prec * 2)
      ) /
        k
    );
  };
  s = (prec ? toFixedFix(n, prec) : "" + Math.round(n)).split(".");
  if (sep !== "") {
    var re = /(-?\d+)(\d{3})/;
    while (re.test(s[0])) {
      s[0] = s[0].replace(re, "$1" + sep + "$2");
    }
  }
  if ((s[1] || "").length < prec) {
    s[1] = s[1] || "";
    s[1] += new Array(prec - s[1].length + 1).join("0");
  }
  return s.join(dec);
}

/**
 * 数字转人民币金额
 * @param  {[type]} money [description]
 * @return {[type]}       [description]
 */
export function changeNumMoneyToChinese(money) {
  var cnNums = new Array(
    "零",
    "壹",
    "贰",
    "叁",
    "肆",
    "伍",
    "陆",
    "柒",
    "捌",
    "玖"
  ); // 汉字的数字
  var cnIntRadice = new Array("", "拾", "佰", "仟"); // 基本单位
  var cnIntUnits = new Array("", "万", "亿", "兆"); // 对应整数部分扩展单位
  var cnDecUnits = new Array("角", "分", "毫", "厘"); // 对应小数部分单位
  var cnInteger = "整"; // 整数金额时后面跟的字符
  var cnIntLast = "元"; // 整型完以后的单位
  var maxNum = 999999999999999.9999; // 最大处理的数字
  var IntegerNum; // 金额整数部分
  var DecimalNum; // 金额小数部分
  var ChineseStr = ""; // 输出的中文金额字符串
  var parts; // 分离金额后用的数组，预定义
  if (money == "") {
    return "";
  }
  money = parseFloat(money);
  if (money >= maxNum) {
    alert("超出最大处理数字");
    return "";
  }
  if (money == 0) {
    ChineseStr = cnNums[0] + cnIntLast + cnInteger;
    return ChineseStr;
  }
  money = money.toString(); // 转换为字符串
  if (money.indexOf(".") == -1) {
    IntegerNum = money;
    DecimalNum = "";
  } else {
    parts = money.split(".");
    IntegerNum = parts[0];
    DecimalNum = parts[1].substr(0, 4);
  }
  if (parseInt(IntegerNum, 10) > 0) {
    // 获取整型部分转换
    var zeroCount = 0;
    var IntLen = IntegerNum.length;
    for (var i = 0; i < IntLen; i++) {
      var n = IntegerNum.substr(i, 1);
      var p = IntLen - i - 1;
      var q = p / 4;
      var m = p % 4;
      if (n == "0") {
        zeroCount++;
      } else {
        if (zeroCount > 0) {
          ChineseStr += cnNums[0];
        }
        zeroCount = 0; // 归零
        ChineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
      }
      if (m == 0 && zeroCount < 4) {
        ChineseStr += cnIntUnits[q];
      }
    }
    ChineseStr += cnIntLast; // 整型部分处理完毕
  }
  if (DecimalNum != "") {
    // 小数部分
    var decLen = DecimalNum.length;
    for (var i = 0; i < decLen; i++) {
      var n = DecimalNum.substr(i, 1);
      if (n != "0") {
        ChineseStr += cnNums[Number(n)] + cnDecUnits[i];
      }
    }
  }
  if (ChineseStr == "") {
    ChineseStr += cnNums[0] + cnIntLast + cnInteger;
  } else if (DecimalNum == "") {
    ChineseStr += cnInteger;
  }
  return ChineseStr;
}

/**
 * 返回时间区间
 * @param  {[type]} d      []
 * @param  {[type]} f      [description]
 * @param  {[type]} date   [截止时间，默认]
 * @param  {[type]} format [返回的时间格式，默认yyyyMMdd]
 * @return {[type]}        [description]
 */
export function recentDate(d, f, date, format) {
  var curDate = "";
  if (typeof d === "undefined") {
    return;
  }
  curDate =
    typeof date !== "undefined"
      ? this.formatDate(date, format || "yyyyMMdd")
      : this.getSystemTime(format || "yyyyMMdd");
  var startDate = this.formatDate(
    this.diffDateAdd(curDate, -d, f || "d"),
    format || "yyyyMMdd"
  );

  return {
    startDate: startDate,
    endDate: curDate
  };
}

/**
 * 时间推移的功能,
 * parm:
 *  t1 当前时间   形式为  这些方式  '2012.3.4 23:22:33' '2012.3.4' new Date()
 *  num 推移的次数
 *  unit  单位   只能为('y'或者'm'或者'd')
 *  return: 返回推移后的时间对象
 */
export function diffDateAdd(t1, num, unit) {
  if (!t1 || typeof num === "undefined" || !unit) {
    return "";
  }
  t1 = this.formatTime(t1);
  var units = {
    y: 1000 * 60 * 60 * 24 * 365,
    m: 1000 * 60 * 60 * 24 * 30,
    d: 1000 * 60 * 60 * 24
  }[unit];
  return new Date(t1.getTime() + num * units);
}

function toQueryPair(key, value) {
  if (typeof value === "undefined") {
    return key;
  }
  return key + "=" + encodeURIComponent(value === null ? "" : String(value));
}

/* 
封装console.log方法
*/
function customLog(message, color = "black") {
  switch (color) {
    case "success":
      color = "Green";
      break;
    case "info":
      color = "Blue";
      break;
    case "error":
      color = "Red";
      break;
    case "warning":
      color = "Orange";
      break;
    default:
      color = color;
  }

  console.log(`%c${message}`, `color:${color}`);
}

/*
* 深拷贝对象
*/
function deepCopy(source, target = {}) {
  var key;
  for (key in source) {
      if (source.hasOwnProperty(key)) {                         // 意思就是__proto__上面的属性,我不拷贝
          if (typeof(source[key]) === "object") {               // 如果这一项是object类型,就递归调用deepCopy
              target[key] = Array.isArray(source[key]) ? [] : {};
              deepCopy(source[key], target[key]);
          } else {                                            // 如果不是object类型,就直接赋值拷贝
              target[key] = source[key];
          }
      }
  }
  return target;
}