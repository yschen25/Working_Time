const log = chrome.extension.getBackgroundPage().console.log;

function getAjax(callback) {
    $.ajax({
        url: 'http://hr.pchomepay.com.tw/',
        type: 'GET',
        success: function (response) {
            callback(response);
        }
    });
}