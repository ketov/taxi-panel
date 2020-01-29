'use strict'

$(document).ready(function () {

    var $containers = $('[data-animation]:not([data-animation-child]), [data-animation-container]');
    $containers.scrollAnimations();

    function scrollTo(element, anchor) {
        $(element).click(function () {
            var destination = $(anchor).offset().top-75;
            jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 500);
            return false;
        });
    }
    
    $("#date").mask("99/99/9999", {placeholder: "00/00/0000" });
    $("#time").mask("99:99", {placeholder: "00:00" });
    $("#phone").mask("+7 (999) 999-99-99", {placeholder: "+7 (000) 000-00-00"})
    
    if ($('#app').length > 0){
        new Vue({
            el: "#app",
            data: {
                inputNumber: '',
                inputDate: '',
                inputTime: '',
                inputFrom: '',
                inputWhere: '',
                inputPhone: '',
                array: [
                    {
                        class: 'green',
                        date: '12.09.2019',
                        time: '11:00',
                        number: 'A342344',
                        from: 'Коктебель',
                        where: 'Бухта Ласпи',
                        name: 'Алёна',
                        phone: '8 (908) 441-19-10',
                        price: '2 000 ₽',
                        percent: '500',
                        tariff: 'Стандарт'
                    },
                    {                        
                        date: '11.09.2019',
                        time: '09:15',
                        number: 'A342256',
                        from: 'Аэр. Симферополь',
                        where: 'Саки',
                        name: 'Георгий',
                        phone: '8 (922) 040-31-91',
                        price: '1 700 ₽',
                        percent: '100',
                        tariff: 'Комфорт'
                    },
                    {
                        class: 'red',
                        date: '09.09.2019',
                        time: '15:30',
                        number: 'A342321',
                        from: 'Аэр. Симферополь',
                        where: 'Судак',
                        name: 'Лидия',
                        phone: '8 (908) 441-19-10',
                        price: '2 500 ₽',
                        percent: '250',
                        tariff: 'Универсал'
                    },
                    {
                        date: '09.09.2019',
                        time: '16:30',
                        number: 'A341050',
                        from: 'Аэр. Симферополь',
                        where: 'Евпатория',
                        name: 'Евгения',
                        phone: '8 (922) 040-31-91',
                        price: '3 000 ₽',
                        percent: '400',
                        tariff: 'Универсал'
                    },
                    {
                        date: '09.09.2019',
                        time: '16:30',
                        number: 'A341023',
                        from: 'Ялта',
                        where: 'Алушта',
                        name: 'Михаил',
                        phone: '8 (996) 321-48-80',
                        price: '1 000 ₽',
                        percent: '500',
                        tariff: 'Бизнес'
                    },
                    {
                        date: '08.09.2019',
                        time: '17:00',
                        number: 'A338027',
                        from: 'Отрадное',
                        where: 'Керчь',
                        name: 'Дмитрий',
                        phone: '8 (908) 441-19-10',
                        price: '2 000 ₽',
                        percent: '400',
                        tariff: 'Комфорт'
                    },
                    {                        
                        date: '08.09.2019',
                        time: '20:00',
                        number: 'A337990',
                        from: 'Аэр. Симферополь',
                        where: 'Малый маяк',
                        name: 'Анна',
                        phone: '8 (908) 441-19-10',
                        price: '2 000 ₽',
                        percent: '250',
                        tariff: 'Универсал'
                    },
                    {
                        class: 'yellow',
                        date: '09.09.2019',
                        time: '15:40',
                        number: 'A337602',
                        from: 'Саки',
                        where: 'Сукко',
                        name: 'Павел',
                        phone: '8 (996) 321-48-80',
                        price: '3 900 ₽',
                        percent: '250',
                        tariff: 'Стандарт'
                    },
                    {
                        class: 'blue',
                        date: '09.09.2019',
                        time: '16:30',
                        number: 'A325087',
                        from: 'Севастополь',
                        where: 'Симферополь',
                        name: 'Артём',
                        phone: '8 (908) 441-19-10',
                        price: '5 000 ₽',
                        percent: '100',
                        tariff: 'Бизнес'
                    },
                    {
                        date: '08.09.2019',
                        time: '12:00',
                        number: 'A319888',
                        from: 'Ялта',
                        where: 'Солнечногорское',
                        name: 'Светлана',
                        phone: '8 (996) 321-48-80',
                        price: '900 ₽',
                        percent: '250',
                        tariff: 'Комфорт'
                    }
                ]
            }
        });
    
        $('#clear').on('mouseup', function(){
            $('.form-control').each(function(){
                $(this).val('');
                $(this).focus();
                $(this).blur();
            });
            $(this).submit();
        });
    }
    
    
    
    if ($('#app-process').length > 0){
        new Vue({
            el: "#app-process",
            data: {
                inputNumber: '',
                inputDate: '',
                inputTime: '',
                inputFrom: '',
                inputWhere: '',
                inputPhone: '',
                inputDriver: '',
                array: [
                    {
                        date: '12.09.2019',
                        time: '11:00',
                        number: 'A342344',
                        from: 'Коктебель',
                        where: 'Бухта Ласпи',
                        name: 'Алёна',
                        phone: '8 (908) 441-19-10',
                        price: '2 000 ₽',
                        percent: '500',
                        tariff: 'Стандарт',
                        driver: '8 (912) 499-50-11'
                    },
                    {                        
                        date: '11.09.2019',
                        time: '09:15',
                        number: 'A342256',
                        from: 'Аэр. Симферополь',
                        where: 'Саки',
                        name: 'Георгий',
                        phone: '8 (922) 040-31-91',
                        price: '1 700 ₽',
                        percent: '100',
                        tariff: 'Комфорт',
                        driver: '8 (909) 113-75-92'
                    },
                    {
                        date: '09.09.2019',
                        time: '15:30',
                        number: 'A342321',
                        from: 'Аэр. Симферополь',
                        where: 'Судак',
                        name: 'Лидия',
                        phone: '8 (908) 441-19-10',
                        price: '2 500 ₽',
                        percent: '250',
                        tariff: 'Универсал',
                        driver: '8 (912) 067-44-46'
                    },
                    {
                        date: '09.09.2019',
                        time: '16:30',
                        number: 'A341050',
                        from: 'Аэр. Симферополь',
                        where: 'Евпатория',
                        name: 'Евгения',
                        phone: '8 (922) 040-31-91',
                        price: '3 000 ₽',
                        percent: '400',
                        tariff: 'Универсал',
                        driver: '8 (917) 341-26-50'
                    },
                    {
                        date: '09.09.2019',
                        time: '16:30',
                        number: 'A341023',
                        from: 'Ялта',
                        where: 'Алушта',
                        name: 'Михаил',
                        phone: '8 (996) 321-48-80',
                        price: '1 000 ₽',
                        percent: '500',
                        tariff: 'Бизнес',
                        driver: '8 (917) 502-35-78'
                    },
                    {
                        date: '08.09.2019',
                        time: '17:00',
                        number: 'A338027',
                        from: 'Отрадное',
                        where: 'Керчь',
                        name: 'Дмитрий',
                        phone: '8 (908) 441-19-10',
                        price: '2 000 ₽',
                        percent: '400',
                        tariff: 'Комфорт',
                        driver: '8 (909) 124-19-48'
                    },
                    {                        
                        date: '08.09.2019',
                        time: '20:00',
                        number: 'A337990',
                        from: 'Аэр. Симферополь',
                        where: 'Малый маяк',
                        name: 'Анна',
                        phone: '8 (908) 441-19-10',
                        price: '2 000 ₽',
                        percent: '250',
                        tariff: 'Универсал',
                        driver: '8 (967) 273-61-89'
                    },
                    {
                        date: '09.09.2019',
                        time: '15:40',
                        number: 'A337602',
                        from: 'Саки',
                        where: 'Сукко',
                        name: 'Павел',
                        phone: '8 (996) 321-48-80',
                        price: '3 900 ₽',
                        percent: '250',
                        tariff: 'Стандарт',
                        driver: '8 (922) 536-38-17'
                    },
                    {
                        date: '09.09.2019',
                        time: '16:30',
                        number: 'A325087',
                        from: 'Севастополь',
                        where: 'Симферополь',
                        name: 'Артём',
                        phone: '8 (908) 441-19-10',
                        price: '5 000 ₽',
                        percent: '100',
                        tariff: 'Бизнес',
                        driver: '8 (964) 879-88-50'
                    },
                    {
                        date: '08.09.2019',
                        time: '12:00',
                        number: 'A319888',
                        from: 'Ялта',
                        where: 'Солнечногорское',
                        name: 'Светлана',
                        phone: '8 (996) 321-48-80',
                        price: '900 ₽',
                        percent: '250',
                        tariff: 'Комфорт',
                        driver: '8 (909) 712-25-00'
                    }
                ]
            }
        });
    
        $('#clear').on('mouseup', function(){
            $('.form-control').each(function(){
                $(this).val('');
                $(this).focus();
                $(this).blur();
            });
            $(this).submit();
        });
    }
    
    
    
    
    if ($('#app-archive').length > 0){
        new Vue({
            el: "#app-archive",
            data: {
                inputNumber: '',
                inputDate: '',
                inputTime: '',
                inputFrom: '',
                inputWhere: '',
                inputPhone: '',
                inputDriver: '',
                array: [
                    {
                        class: 'green',
                        date: '12.09.2019',
                        time: '11:00',
                        number: 'A342344',
                        from: 'Коктебель',
                        where: 'Бухта Ласпи',
                        name: 'Алёна',
                        phone: '8 (908) 441-19-10',
                        price: '2 000 ₽',
                        percent: '500',
                        tariff: 'Стандарт',
                        driver: '8 (912) 499-50-11',
                        status: 'Закрыт'
                    },
                    {           
                        class: 'red',             
                        date: '11.09.2019',
                        time: '09:15',
                        number: 'A342256',
                        from: 'Аэр. Симферополь',
                        where: 'Саки',
                        name: 'Георгий',
                        phone: '8 (922) 040-31-91',
                        price: '1 700 ₽',
                        percent: '100',
                        tariff: 'Комфорт',
                        driver: '8 (909) 113-75-92',
                        status: 'Отменён'
                    },
                    {
                        class: 'green',
                        date: '09.09.2019',
                        time: '15:30',
                        number: 'A342321',
                        from: 'Аэр. Симферополь',
                        where: 'Судак',
                        name: 'Лидия',
                        phone: '8 (908) 441-19-10',
                        price: '2 500 ₽',
                        percent: '250',
                        tariff: 'Универсал',
                        driver: '8 (912) 067-44-46',
                        status: 'Закрыт'
                    },
                    {
                        class: 'red',
                        date: '09.09.2019',
                        time: '16:30',
                        number: 'A341050',
                        from: 'Аэр. Симферополь',
                        where: 'Евпатория',
                        name: 'Евгения',
                        phone: '8 (922) 040-31-91',
                        price: '3 000 ₽',
                        percent: '400',
                        tariff: 'Универсал',
                        driver: '8 (917) 341-26-50',
                        status: 'Сорван'
                    },
                    {
                        class: 'green',
                        date: '09.09.2019',
                        time: '16:30',
                        number: 'A341023',
                        from: 'Ялта',
                        where: 'Алушта',
                        name: 'Михаил',
                        phone: '8 (996) 321-48-80',
                        price: '1 000 ₽',
                        percent: '500',
                        tariff: 'Бизнес',
                        driver: '8 (917) 502-35-78',
                        status: 'Закрыт'
                    },
                    {
                        class: 'red',
                        date: '08.09.2019',
                        time: '17:00',
                        number: 'A338027',
                        from: 'Отрадное',
                        where: 'Керчь',
                        name: 'Дмитрий',
                        phone: '8 (908) 441-19-10',
                        price: '2 000 ₽',
                        percent: '400',
                        tariff: 'Комфорт',
                        driver: '8 (909) 124-19-48',
                        status: 'Отменён'
                    },
                    {     
                        class: 'green',                  
                        date: '08.09.2019',
                        time: '20:00',
                        number: 'A337990',
                        from: 'Аэр. Симферополь',
                        where: 'Малый маяк',
                        name: 'Анна',
                        phone: '8 (908) 441-19-10',
                        price: '2 000 ₽',
                        percent: '250',
                        tariff: 'Универсал',
                        driver: '8 (967) 273-61-89',
                        status: 'Закрыт'
                    },
                    {
                        class: 'red',
                        date: '09.09.2019',
                        time: '15:40',
                        number: 'A337602',
                        from: 'Саки',
                        where: 'Сукко',
                        name: 'Павел',
                        phone: '8 (996) 321-48-80',
                        price: '3 900 ₽',
                        percent: '250',
                        tariff: 'Стандарт',
                        driver: '8 (922) 536-38-17',
                        status: 'Сорван'
                    },
                    {
                        class: 'green',
                        date: '09.09.2019',
                        time: '16:30',
                        number: 'A325087',
                        from: 'Севастополь',
                        where: 'Симферополь',
                        name: 'Артём',
                        phone: '8 (908) 441-19-10',
                        price: '5 000 ₽',
                        percent: '100',
                        tariff: 'Бизнес',
                        driver: '8 (964) 879-88-50',
                        status: 'Закрыт'
                    },
                    {
                        class: 'red',
                        date: '08.09.2019',
                        time: '12:00',
                        number: 'A319888',
                        from: 'Ялта',
                        where: 'Солнечногорское',
                        name: 'Светлана',
                        phone: '8 (996) 321-48-80',
                        price: '900 ₽',
                        percent: '250',
                        tariff: 'Комфорт',
                        driver: '8 (909) 712-25-00',
                        status: 'Не оплачен'
                    }
                ]
            }
        });
    
        $('#clear').on('mouseup', function(){
            $('.form-control').each(function(){
                $(this).val('');
                $(this).focus();
                $(this).blur();
            });
            $(this).submit();
        });
    }
    
    
    if ($('#app-new-orders').length > 0){
        new Vue({
            el: "#app-new-orders",
            data: {
                array: [
                    {
                        date: '12.09.2019',
                        time: '11:00',
                        number: 'A342344',
                        from: 'Коктебель',
                        where: 'Бухта Ласпи',
                        name: 'Алёна',
                        phone: '8 (908) 441-19-10',
                        price: '2 000 ₽',
                        percent: '500',
                        tariff: 'Стандарт',
                        status: 'Новый'
                    },
                    {                        
                        date: '11.09.2019',
                        time: '09:15',
                        number: 'A342256',
                        from: 'Аэр. Симферополь',
                        where: 'Саки',
                        name: 'Георгий',
                        phone: '8 (922) 040-31-91',
                        price: '1 700 ₽',
                        percent: '100',
                        tariff: 'Комфорт',
                        status: 'Новый'
                    },
                    {
                        date: '09.09.2019',
                        time: '15:30',
                        number: 'A342321',
                        from: 'Аэр. Симферополь',
                        where: 'Судак',
                        name: 'Лидия',
                        phone: '8 (908) 441-19-10',
                        price: '2 500 ₽',
                        percent: '250',
                        tariff: 'Универсал',
                        status: 'Новый'
                    },
                    {
                        date: '09.09.2019',
                        time: '16:30',
                        number: 'A341050',
                        from: 'Аэр. Симферополь',
                        where: 'Евпатория',
                        name: 'Евгения',
                        phone: '8 (922) 040-31-91',
                        price: '3 000 ₽',
                        percent: '400',
                        tariff: 'Универсал',
                        status: 'Новый'
                    }
                ]
            }
        });
    }
    
    
    
    if ($('#app-drivers').length > 0){
        new Vue({
            el: "#app-drivers",
            data: {
                inputName: '',
                inputPhone: '',
                inputMark: '',
                inputModel: '',
                inputNumber: '',
                array: [
                    {
                        name: 'Андрей',
                        phone: '8 (908) 441-19-10', 
                        mark: 'Chevrolet',
                        model: 'Aveo',
                        number: 'К342АР 66',
                        done: '120',
                        inwork: '1',
                        disruptions: '0',
                        cancelled: '3',
                        reviews: '1'
                    },
                    {
                        name: 'Юрий',
                        phone: '8 (996) 321-48-80', 
                        mark: 'Kia',
                        model: 'Rio',
                        number: 'E402РН 99',
                        done: '560',
                        inwork: '2',
                        disruptions: '2',
                        cancelled: '0',
                        reviews: '4'
                    },
                    {
                        name: 'Юрий',
                        phone: '8 (922) 040-31-91', 
                        mark: 'Kia',
                        model: 'Picanto',
                        number: 'E610ЕК 159',
                        done: '50',
                        inwork: '0',
                        disruptions: '0',
                        cancelled: '0',
                        reviews: '1'
                    }
                ]
            }
        });
    
        $('#clear').on('mouseup', function(){
            $('.form-control').each(function(){
                $(this).val('');
                $(this).focus();
                $(this).blur();
            });
            $(this).submit();
        });
    }
    
    
     if ($('#app-settings').length > 0){
        new Vue({
            el: "#app-settings",
            data: {
                array: [
                    {
                        name: 'Андрей',
                        phone: '8 (908) 441-19-10',
                        password: '●●●●●●●●'
                    }
                ]
            }
        });
    
    }
    
    
    
    $('.phone--drivers').on('click', function () {
        var top = $(window).scrollTop() + 100;
        $('.popup--drivers').css({'top': top});
        $('#black-bg').stop(true, true).fadeIn(300);
        setTimeout(function () {
            $('.popup--drivers').stop(true, true).fadeIn(300);
        }, 350);
    });
    
    $('.phone--clients').on('click', function () {
        var top = $(window).scrollTop() + 100;
        $('.popup--clients').css({'top': top});
        $('#black-bg').stop(true, true).fadeIn(300);
        setTimeout(function () {
            $('.popup--clients').stop(true, true).fadeIn(300);
        }, 350);
    });
    
    $('#new-client-button').on('click', function () {
        var top = $(window).scrollTop() + 100;
        $('.popup--new-client').css({'top': top});
        $('#black-bg').stop(true, true).fadeIn(300);
        setTimeout(function () {
            $('.popup--new-client').stop(true, true).fadeIn(300);
        }, 350);
    });
    
    $('.close-form').on('click', function () {
        //var top = $(window).scrollTop() + 100;
        $(this).parent('.popup').stop(true, true).fadeOut(300);
        setTimeout(function () {
            $('#black-bg').stop(true, true).fadeOut(300);
        }, 350);
    });
    
    $('.close-add-driver').on('click', function () {
        $(this).parent('.popup').stop(true, true).fadeOut(300);
        setTimeout(function () {
            $('.popup--assign-driver').stop(true, true).fadeIn(300);
        }, 350);
    });

    $('.assign-driver').on('click', function () {
        var top = $(window).scrollTop() + 100;
        $('.popup--assign-driver').css({'top': top});
        $('#black-bg').stop(true, true).fadeIn(300);
        setTimeout(function () {
            $('.popup--assign-driver').stop(true, true).fadeIn(300);
        }, 350);
    });
    
    $('.add-driver').on('click', function(){
        var top = $(window).scrollTop() + 100;
        $('.popup--assign-driver').stop(true, true).fadeOut(300);
        $('.popup--add-driver').css({'top': top});
        setTimeout(function () {
            $('.popup--add-driver').stop(true, true).fadeIn(300);
        }, 350);
    });

});