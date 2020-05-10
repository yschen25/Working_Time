


const log = chrome.extension.getBackgroundPage().console.log;

$(document).ready(function () {
    $('#btn').click(function () {
        var bgPage = chrome.extension.getBackgroundPage();
        bgPage.getAjax(function (res) {
            let parser = new DOMParser();
            let html = parser.parseFromString(res, "text/html");
            let nameList = html.getElementsByClassName('text-primary')[0]['innerText'];
            let name = nameList.split(' ');

            console.log(document.getElementById("name"));
            document.getElementById("name").innerHTML = name[1];

        });
    });
    // $.ajax({
    //     url: 'http://hr.pchomepay.com.tw/',
    //     type: 'GET',
    //     success: function (response) {
    //         log('success', response);
            // let parser = new DOMParser();
            // let html = parser.parseFromString(response, "text/html");
            // let text = html.getElementsByClassName('text-success')[0]['innerText'];
            // let nameList = html.getElementsByClassName('text-primary')[0]['innerText'];
            //
            // // 姓名
            // let name = nameList.split(' ');
            //
            // console.log(document.getElementById("name"));
            // document.getElementById("name").innerHTML = name[1];
            //
            // console.log('name', name[1]);
            //
            // // 未登入
            // if (text === undefined){
            //     document.getElementById("text").style.display = 'block';
            //     document.getElementById("text").innerHTML = '請登入';
            //     return;
            //
            // }
            //
            // console.log('text', text);
            //
            // // 放假
            // if(text === '例假日'){
            //     document.getElementById("text").style.display = 'block';
            //     document.getElementById("text").innerHTML = '今天放假欸!';
            //     return;
            // }
            //
            // calculateTime(text);
        // },
        // error: function (xhr, status, error) {
        //     log(xhr);
            var err = eval("(" + xhr.responseText + ")");
            // log(xhr.responseText);
        // }
    // });
});
//
// function calculateTime(text) {
//
//     let result = '';
//     let time = text.split(':');
//     let hours = parseInt(time[0]);
//     let second = parseInt(time[1], 10);
//
//     // 整天班
//     // 9:30 ~ 10:00 到，直接 + 9
//     if (hours === 9 || hours === 10) {
//         if (second === 0) {
//             second = '00';
//         }
//         result = hours + 9 + ' : ' + second;
//     }
//
//     // <= 9:30 到，一律用 9:30 去計算，9:30 + 9
//     if (hours <= 9 && second <= 30) {
//         result = '18 : 30';
//     }
//
//     // >= 10 點到，一律用 10:00 去計算，10:00 + 9
//     if (hours > 10) {
//         result = '19 : 00';
//     }
//
//     // 下午班
//     // 13:30 ~ 14:00 到，直接 + 5
//     if (hours === 13 || hours === 14) {
//         if (second === 0) {
//             second = '00';
//         }
//         result = hours + 5 + ' : ' + second;
//     }
//
//     // <= 13:30 到，一律用 13:30 去計算，13:30 + 5
//     if (hours <= 13 && second <= 30) {
//         result = '18 : 30';
//     }
//
//     // >= 14 點到，一律用 14:00 去計算，14:00 + 5
//     if (hours > 14) {
//         result = '19 : 00';
//     }
//
//     console.log('下班時間', result);
//
//     document.addEventListener('DOMContentLoaded', function () {
//         document.getElementById("fromTimeWrapper").style.display = 'block';
//         document.getElementById("toTimeWrapper").style.display = 'block';
//         document.getElementById("fromTime").innerHTML = value;
//         document.getElementById("toTime").innerHTML = result;
//     });
// }

// document.addEventListener('DOMContentLoaded', function () {
//     document.getElementById("fromTimeWrapper").style.display = 'block';
//     document.getElementById("toTimeWrapper").style.display = 'block';
//     document.getElementById("fromTime").innerHTML = '09 : 00';
//     document.getElementById("toTime").innerHTML = '21 : 00';
// });

