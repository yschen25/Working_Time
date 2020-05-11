const log = chrome.extension.getBackgroundPage().console.log;

$(document).ready(function () {

    let bgPage = chrome.extension.getBackgroundPage();
    bgPage.getData(function (response) {
        let parser = new DOMParser();
        let html = parser.parseFromString(response, "text/html");
        let textSuccess = html.getElementsByClassName('text-success');
        let textDanger = html.getElementsByClassName('text-danger');

        let today = date();

        console.log('ff',localStorage.getItem(today + 'name'));

        // 抓 localStorage
        if (localStorage.getItem(today + 'fromTime') !== null && localStorage.getItem(today + 'toTime') !== null) {
            document.getElementById("name").style.display = 'block';
            document.getElementById("fromTimeWrapper").style.display = 'block';
            document.getElementById("toTimeWrapper").style.display = 'block';
            document.getElementById("name").innerHTML = localStorage.getItem(today + 'name');
            document.getElementById("fromTime").innerHTML = localStorage.getItem(today + 'fromTime');
            document.getElementById("toTime").innerHTML = localStorage.getItem(today + 'toTime');
            return;
        }

        // 未登入
        if (textSuccess.length === 0 || textDanger.length === 0) {
            document.getElementById("text").style.display = 'block';
            document.getElementById("text").innerHTML = '請登入';
            return;
        }

        // 姓名
        let nameList = html.getElementsByClassName('text-primary')[0]['innerText'];
        let name = nameList.split(' ');
        document.getElementById("name").innerHTML = name[1];
        localStorage.setItem(today + 'name', name[1]);

        let text = textSuccess.length !== 0 ? textSuccess[0]['innerText'] : textDanger[0]['innerText'];

        // 未刷卡
        if (text === '未刷卡') {
            document.getElementById("text").style.display = 'block';
            document.getElementById("text").innerHTML = '你還沒刷卡吧';
            return;
        }

        // 放假
        if (text === '例假日') {
            document.getElementById("text").style.display = 'block';
            document.getElementById("text").innerHTML = '今天放假欸!';
            return;
        }

        calculateTime(text, today);

    });
});


function calculateTime(text, today) {

    let result = '';
    let time = text.split(':');
    let hours = parseInt(time[0]);
    let second = parseInt(time[1], 10);

    // 整天班
    // 9:30 ~ 10:00 到，直接 + 9
    if (hours === 9 || hours === 10) {
        if (second === 0) {
            second = '00';
        }
        result = hours + 9 + ':' + second;
    }

    // <= 9:30 到，一律用 9:30 去計算，9:30 + 9
    if (hours <= 9 && second <= 30) {
        result = '18:30';
    }

    // >= 10 點到，一律用 10:00 去計算，10:00 + 9
    if (hours > 10) {
        result = '19:00';
    }

    // 下午班
    // 13:30 ~ 14:00 到，直接 + 5
    if (hours === 13 || hours === 14) {
        if (second === 0) {
            second = '00';
        }
        result = hours + 5 + ':' + second;
    }

    // <= 13:30 到，一律用 13:30 去計算，13:30 + 5
    if (hours <= 13 && second <= 30) {
        result = '18:30';
    }

    // >= 14 點到，一律用 14:00 去計算，14:00 + 5
    if (hours > 14) {
        result = '19:00';
    }

    localStorage.setItem(today + 'fromTime', text);
    localStorage.setItem(today + 'toTime', result);

    document.getElementById("fromTimeWrapper").style.display = 'block';
    document.getElementById("toTimeWrapper").style.display = 'block';
    document.getElementById("fromTime").innerHTML = text;
    document.getElementById("toTime").innerHTML = result;
}

// 今天時間
function date() {
    let today = new Date();
    let day = String(today.getDate()).padStart(2, '0');
    let month = String(today.getMonth() + 1).padStart(2, '0');
    let year = today.getFullYear();

    return year + month + day;
}