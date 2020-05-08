$(document).ready(function () {
    $.ajax({
        url: 'http://hr.pchomepay.com.tw/',
        type: 'GET',
        success: function (response) {

        },
        complete: function () {

        },
        error: function () {

        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("fromTime").innerHTML = '09 : 00';
    document.getElementById("toTime").innerHTML = '21 : 00';
});