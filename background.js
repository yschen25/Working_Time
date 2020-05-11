function getData(callback) {
    $.ajax({
        url: 'http://hr.pchomepay.com.tw/',
        type: 'GET',
        success: function (response) {
            callback(response);
        }
    });
}