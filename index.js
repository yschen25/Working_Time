$(document).ready(function () {

    $.ajax({
        url: 'https://stackoverflow.com/',
        type: 'GET',
        success: function (response) {
            console.log('success', response);
        },
        complete: function (response) {
            console.log('complete', response);
        },
        error: function (response) {

            console.log('error', response);
        }
    });

});


function findAndReplace() {

    console.log('xxxxx', $('.ta-center').val());
    $('.ta-center').val('Hello');
}

window.onload = findAndReplace();

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("fromTime").innerHTML = '09 : 00';
    document.getElementById("toTime").innerHTML = '21 : 00';
});


