function popupDrivers() {
    var top = $(window).scrollTop() + 100;
    $('.popup--drivers').css({'top': top});
    $('.popup--primary').removeClass('popup--primary');
    $('.popup--drivers').addClass('popup--primary');
    $('#black-bg').stop(true, true).fadeIn(300);
    setTimeout(function () {
        $('.popup--drivers').stop(true, true).fadeIn(300);
    }, 350);
}

function popupOrder() {
    var top = $(window).scrollTop() + 100;
    $('.popup--order').css({'top': top});
    $('.popup--primary').removeClass('popup--primary');
    $('.popup--order').addClass('popup--primary');
    $('#black-bg').stop(true, true).fadeIn(300);
    setTimeout(function () {
        $('.popup--order').stop(true, true).fadeIn(300);
    }, 350);
}

function popupClients() {
    var top = $(window).scrollTop() + 100;
    $('.popup--clients').css({'top': top});
    $('.popup--primary').removeClass('popup--primary');
    $('.popup--clients').addClass('popup--primary');
    $('#black-bg').stop(true, true).fadeIn(300);
    setTimeout(function () {
        $('.popup--clients').stop(true, true).fadeIn(300);
    }, 350);
}

function popupNewClient() {
    var top = $(window).scrollTop() + 100;
    $('.popup--new-client').css({'top': top});
    $('.popup--primary').removeClass('popup--primary');
    $('.popup--new-client').addClass('popup--primary');
    $('#black-bg').stop(true, true).fadeIn(300);
    setTimeout(function () {
        $('.popup--new-client').stop(true, true).fadeIn(300);
    }, 350);
}

function popupAssignDriver() {
    var top = $(window).scrollTop() + 100;
    $('.popup--assign-driver').css({'top': top});
    $('.popup--primary').removeClass('popup--primary');
    $('.popup--assign-driver').addClass('popup--primary');
    $('#black-bg').stop(true, true).fadeIn(300);
    setTimeout(function () {
        $('.popup--assign-driver').stop(true, true).fadeIn(300);
    }, 350);
}

function popupAddDriver() {
    var top = $(window).scrollTop() + 100;
    $('.popup--add-driver').css({'top': top});
    $('.popup--primary').removeClass('popup--primary');
    $('.popup--add-driver').addClass('popup--primary');
    
    var p = $('#assign-drivers-input').val();
    $('#new-driver-phone').val(p);
    
    $('#black-bg').stop(true, true).fadeIn(300);
    setTimeout(function () {
        $('.popup--add-driver').stop(true, true).fadeIn(300);
    }, 350);
}

function popupQuestion() {
    var top = $(window).scrollTop() + 100;
    $('.popup--question').css({'top': top});
    $('.popup--primary').removeClass('popup--primary');
    $('.popup--question').addClass('popup--primary');
    $('#black-bg').stop(true, true).fadeIn(300);
    setTimeout(function () {
        $('.popup--question').stop(true, true).fadeIn(300);
    }, 350);
}