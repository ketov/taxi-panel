'use strict'

$(document).ready(function () {

    var $containers = $('[data-animation]:not([data-animation-child]), [data-animation-container]');
    $containers.scrollAnimations();

    function scrollTo(element, anchor) {
        $(element).click(function () {
            var destination = $(anchor).offset().top - 75;
            jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 500);
            return false;
        });
    }

    if ($('#mark-input').length > 0) {
        $(function () {
            var availableTags = [
                "Audi",
                "BMW",
                "Chevrolet",
                "Citroen",
                "Daewoo",
                "Ford",
                "Honda",
                "Hyundai",
                "Infiniti",
                "KIA",
                "Land Rover",
                "Lexus",
                "LIFAN",
                "Mazda",
                "Mercedes-Benz",
                "Mitsubishi",
                "Nissan",
                "Opel",
                "Peugeot",
                "Renault",
                "Skoda",
                "Subaru",
                "Suzuki",
                "Toyota",
                "Volkswagen",
                "ВАЗ",
                "ГАЗ",
                "УАЗ"
            ];
            $("#mark-input").autocomplete({
                source: availableTags
            });
        });
    }
    
    if ($('#model-input').length > 0) {
        $(function () {
            var availableTags = [
                "1",
                "2",
                "3"
            ];
            $("#model-input").autocomplete({
                source: availableTags
            });
        });
    }



    //Работа с меню
    function setCookie(name, value) {
        document.cookie = name + "=" + value;
    }
    function getCookie(name) {
        var r = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
        if (r)
            return r[2];
        else
            return "";
    }
    function deleteCookie(name) {
        var date = new Date(); // Берём текущую дату
        date.setTime(date.getTime() - 1); // Возвращаемся в "прошлое"
        document.cookie = name += "=; expires=" + date.toGMTString(); // Устанавливаем cookie пустое значение и срок действия до прошедшего уже времени
    }
    //setCookie("checkbox", true); // Устанавливаем cookie
    //alert(getCookie("firstname")); // Выводим cookie
    //deleteCookie("firstname"); // Удаляем cookie
    //alert(getCookie("firstname")); // Убеждаемся, что ничего не осталось
    //if(getCookie("checkbox")!=false){
    //    alert(1);
    //}
    //var c = getCookie(checkbox);
    //alert(c);

    var c = getCookie("checkbox");

    if (c != false) {
        $('nav').addClass('active');
        $('#full-menu-checkbox').prop('checked', true)
    }

    $('#full-menu-checkbox').on('change', function () {
        if ($(this).prop('checked') != false) {
            $('nav').addClass('active');
            setCookie("checkbox", true);
        } else {
            $('nav').removeClass('active');
            deleteCookie("checkbox");
        }
    });

    $('#buffer').on('click', function () {

        let datesArray = [];

        $('.input-checkbox').each(function () {
            var date = $(this).attr('data-date').slice(0, 5);

            if ($(this).prop('checked') == true) {
                datesArray.push(date);
            }
        });

        datesArray = Array.from(new Set(datesArray));
        let clipboard = {};

        $('.input-checkbox').each(function () {
            var date = $(this).attr('data-date').slice(0, 5);
            if ($(this).prop('checked') == true) {
                for (var i = 0; i < datesArray.length; i++) {
                    clipboard[date] = [];
                }
            }
        });

        $('.input-checkbox').each(function () {
            var date = $(this).attr('data-date').slice(0, 5);
            var time = $(this).attr('data-date').slice(13, 18);
            var from = $(this).attr('data-from');
            var where = $(this).attr('data-where');
            var number = $(this).attr('data-number');
            var bust = $(this).attr('data-bust');
            var childseat = $(this).attr('data-childseat');
            var cradle = $(this).attr('data-cradle');

            //Бустеры
            if (bust === undefined) {
                bust = '';
            } else {
                bust = "Бустеры: " + bust;
            }

            //Детские кресла
            if (childseat === undefined) {
                childseat = '';
            } else {
                childseat = "Детские кресла: " + childseat;
            }

            //Люльки
            if (cradle === undefined) {
                cradle = '';
            } else {
                cradle = "Люльки: " + cradle;
            }

            var str = time + " " + from + " — " + where + " " + number + " " + bust + " " + childseat + " " + cradle + "\n";

            if ($(this).prop('checked') == true) {
                for (var i in clipboard) {
                    if (date == i) {
                        clipboard[i].push(str);
                    }
                }
            }
        });

        var result = '';
        for (var i in clipboard) {
            result = result + i + "\n" + clipboard[i] + "\n";
        }

        result = result.replace(/,/g, '');
        //alert(typeof result);

        $('#clipboard-hidden').val(result).select();
        $('#clipboard-hidden').select();
        document.execCommand("copy");
    });

    $("#rowsperpage").change(function ()
    {
        document.location.href = $(this).val();
    });

    $("#date").mask("99/99/9999", {placeholder: "00/00/0000"});
    $("#time").mask("99:99", {placeholder: "00:00"});
    //$("#new-driver-phone").mask("+7 (999) 999-99-99", {placeholder: "+7 (000) 000-00-00"});

    $('nav').hover(function () {
        if ($('#full-menu-checkbox').prop('checked') != false) {
            return;
        } else {
            $(this).addClass('active');
        }
    }, function () {
        if ($('#full-menu-checkbox').prop('checked') != false) {
            return;
        } else {
            $(this).removeClass('active');
        }
    });

    $('#hamburger').on('click', function () {
        var el = $(this);
        if (!el.hasClass('active')) {
            //$('nav').addClass('mobile');
            $('nav').animate({width: 'toggle'}, 250);
            $('#black-bg').fadeIn(400);
            $('#black-bg').addClass('nav-show');
            el.addClass('active');
            $('body').css({'overflow': 'hidden'});
        }
    });

    $('#black-bg').on('click', function () {
        if ($(this).hasClass('nav-show')) {
            if ($(event.target).closest("nav").length)
                return;
            $('nav').fadeOut(400);

            $('#hamburger').removeClass('active');

            setTimeout(function () {
                $('#black-bg').fadeOut(400);
                $('#black-bg').removeClass('nav-show');
                $('body').css({'overflow': 'auto'});
            }, 450);
            event.stopPropagation();
        }
    });

    $(function () {
        $.datepicker.regional['ru'] = {//clearText: 'Effacer', clearStatus: '',
            //closeText: 'sluiten', closeStatus: 'Onveranderd sluiten ',
            prevText: '<назад', //prevStatus: 'Zie de vorige maand',
            nextText: 'вперёд>', //nextStatus: 'Zie de volgende maand',
            //currentText: 'Huidige', currentStatus: 'Bekijk de huidige maand',
            monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
                'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            monthNamesShort: ['Янв', 'Фев', 'Мрт', 'Апр', 'Май', 'Июн',
                'Июл', 'Авг', 'Сен', 'Окт', 'Нбр', 'Дек'],
            //monthStatus: 'Bekijk een andere maand', yearStatus: 'Bekijk nog een jaar',
            weekHeader: 'Sm', weekStatus: '',
            dayNames: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
            dayNamesShort: ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'],
            dayNamesMin: ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'],
            dateFormat: 'dd/mm/yy', firstDay: 1};
        $.datepicker.setDefaults($.datepicker.regional['ru']);
        $(".datepicker").datepicker();
    });







        /*
    $('.with-hidden').on('focusout', function () {
        var el = $(this);
        var m = el.siblings('.suggestion-menu');
        m.fadeOut(250);
    });

    $('.with-hidden').on('input', function () {
        var el = $(this);
        //var ul = el.siblings('ul');
        var l = el.val().length;
        if (l >= 0) {
            el.siblings('.suggestion-menu').fadeIn(250);
        } else {
            el.siblings('.suggestion-menu').fadeOut(250);
        }

        document.onkeyup = function (evt) {
            evt = evt || window.event;

            var m = el.siblings('.suggestion-menu');
            var a = m.children('.active');
            var num = m.children('li').length; //Сколько всего элементов в наборе
            var activeNumber = a.index() + 1; //Порядковый номер текущего элемента
            var input = m.siblings('.with-hidden');

            if (m.attr('id') == 'suggestion-menu-mark') {
                //alert(input.val().trim());
                if (input.val().trim() == '') {
                    $('#suggestion-menu-model').siblings('.with-hidden').val('');
                    $('#suggestion-menu-model').siblings('.with-hidden').attr('disabled', true);
                } else {
                    $('#suggestion-menu-model').siblings('.with-hidden').attr('disabled', false);
                }
            }

            if (evt.keyCode == 40) {
                a.removeClass('active');
                if (num == activeNumber) {
                    m.children('li').eq(0).addClass('active');
                } else {
                    m.children('li').eq(activeNumber).addClass('active');
                }
            }

            if (evt.keyCode == 38) {
                a.removeClass('active');
                if (activeNumber == 0) {
                    m.children('li').eq(num).addClass('active');
                } else {
                    //alert(2);
                    m.children('li').eq(activeNumber - 2).addClass('active');
                }
            }

            if (evt.keyCode == 13) {
                m.fadeOut(250);
                input.val(a.text());
                input.focus();
                input.blur();
            }

        };
    });

    $('.suggestion-menu li').on('click', function () {
        var el = $(this);

        var input = el.parent('.suggestion-menu').siblings('.with-hidden');
        var m = el.parent('.suggestion-menu');

        input.val(el.text());
        el.siblings('.active').removeClass('active');
        el.addClass('active');

        if (m.attr('id') == 'suggestion-menu-mark') {
            $('#suggestion-menu-model').siblings('.with-hidden').attr('disabled', false);
        }

        m.fadeOut(250);
        input.focus();
        input.blur();
    });
*/

















    if ($('#app-sort-clients').length > 0) {
        var appsortclients = new Vue({
            el: '#app-sort-clients',
            computed: {
                sortedData() {
                    if (!this.sort.field) {
                        return this.items
                    }

                    return this.items.concat().sort((b, a) => {
                        if (this.sort.desc) {
                            return a[this.sort.field] > b[this.sort.field] ? -1 : 1
                        } else {
                            return a[this.sort.field] > b[this.sort.field] ? 1 : -1
                        }
                    })
                }
            },
            data() {
                return {
                    inputName: '',
                    inputPhone: '',
                    sort: {
                        field: '',
                        desc: true
                    },
                    items: [
                        {name: 'Андрей', phone: '8 (908) 441-19-10', orders: '1', cancelled: '3', reviews: '1', promocode: 'А397373', discount: '100'},
                        {name: 'Юрий', phone: '8 (922) 040-31-91', orders: '2', cancelled: '0', reviews: '4', promocode: 'А397374', discount: '500'},
                        {name: 'Юрий', phone: '8 (908) 441-19-10', orders: '3', cancelled: '0', reviews: '2', promocode: 'А397375', discount: '350'},
                    ]
                }
            },
            methods: {
                sortRow(field) {
                    if (field == this.sort.field) {
                        this.sort.desc = !this.sort.desc
                    } else {
                        this.sort.field = field;
                        this.sort.desc = true;
                    }
                }
            }
        });



        $('#clear').on('mouseup', function () {
            $('.form-control').each(function () {
                if ($(this).hasClass('datepicker') || $(this).hasClass('custom-select')) {
                    return;
                } else {
                    $(this).val('');
                    $(this).focus();
                    $(this).blur();
                }
                //$(this).val('');
                //$(this).focus();
                //$(this).blur();
            });
            $(this).submit();
        });
    }






    if ($('#app-sort-drivers').length > 0) {
        var appsortdrivers = new Vue({
            el: '#app-sort-drivers',
            computed: {
                sortedData() {
                    if (!this.sort.field) {
                        return this.items
                    }

                    return this.items.concat().sort((b, a) => {
                        if (this.sort.desc) {
                            return a[this.sort.field] > b[this.sort.field] ? -1 : 1
                        } else {
                            return a[this.sort.field] > b[this.sort.field] ? 1 : -1
                        }
                    })
                }
            },
            data() {
                return {
                    inputName: '',
                    inputPhone: '',
                    inputMark: '',
                    inputModel: '',
                    inputNumber: '',
                    sort: {
                        field: '',
                        desc: true
                    },
                    items: [
                        {name: 'Андрей', phone: '8 (908) 441-19-10', mark: 'Chevrolet', model: 'Aveo', number: 'К342АР 66', done: '120', inwork: '1', disruptions: '0', cancelled: '3', late: '3', reviews: '1', refuse: '0'},
                        {name: 'Юрий', phone: '8 (922) 040-31-91', mark: 'Kia', model: 'Rio', number: '	E402РН 99', done: '560', inwork: '2', disruptions: '2', cancelled: '0', late: '2', reviews: '4', refuse: '1'},
                        {name: 'Юрий', phone: '8 (908) 441-19-10', mark: 'Kia', model: 'Picanto', number: 'E610ЕК 159', done: '570', inwork: '0', disruptions: '0', cancelled: '0', late: '1', reviews: '1', refuse: '2'},
                    ]
                }
            },
            methods: {
                sortRow(field) {
                    if (field == this.sort.field) {
                        this.sort.desc = !this.sort.desc
                    } else {
                        this.sort.field = field;
                        this.sort.desc = true;
                    }
                }
            }
        });

        $('#clear').on('mouseup', function () {
            $('.form-control').each(function () {
                if ($(this).hasClass('datepicker') || $(this).hasClass('custom-select')) {
                    return;
                } else {
                    $(this).val('');
                    $(this).focus();
                    $(this).blur();
                }
            });
            $(this).submit();
        });
    }



    if ($('#app-sort-assign-drivers').length > 0) {
        var appsortassigndrivers = new Vue({
            el: '#app-sort-assign-drivers',
            computed: {
                sortedData() {
                    if (!this.sort.field) {
                        return this.items
                    }

                    return this.items.concat().sort((b, a) => {
                        if (this.sort.desc) {
                            return a[this.sort.field] > b[this.sort.field] ? -1 : 1
                        } else {
                            return a[this.sort.field] > b[this.sort.field] ? 1 : -1
                        }
                    })
                }
            },
            data() {
                return {
                    inputName: '',
                    inputPhone: '',
                    inputMark: '',
                    inputModel: '',
                    inputNumber: '',
                    sort: {
                        field: '',
                        desc: true
                    },
                    items: [
                        {name: 'Андрей', phone: '8 (908) 441-19-10', mark: 'Chevrolet', model: 'Aveo', number: 'К342АР 66', done: '120', inwork: '1', disruptions: '0', cancelled: '3', late: '3', reviews: '1', refuse: '0'},
                        {name: 'Юрий', phone: '8 (922) 040-31-91', mark: 'Kia', model: 'Rio', number: '	E402РН 99', done: '560', inwork: '2', disruptions: '2', cancelled: '0', late: '2', reviews: '4', refuse: '1'},
                        {name: 'Юрий', phone: '8 (908) 441-19-10', mark: 'Kia', model: 'Picanto', number: 'E610ЕК 159', done: '570', inwork: '0', disruptions: '0', cancelled: '0', late: '1', reviews: '1', refuse: '2'},
                    ]
                }
            },
            methods: {
                sortRow(field) {
                    if (field == this.sort.field) {
                        this.sort.desc = !this.sort.desc
                    } else {
                        this.sort.field = field;
                        this.sort.desc = true;
                    }
                }
            }
        });
    }


    if ($('#app-sort-index').length > 0) {
        var appsortindex = new Vue({
            el: '#app-sort-index',
            computed: {
                sortedData() {
                    if (!this.sort.field) {
                        return this.items
                    }

                    return this.items.concat().sort((b, a) => {
                        if (this.sort.desc) {
                            return a[this.sort.field] > b[this.sort.field] ? -1 : 1
                        } else {
                            return a[this.sort.field] > b[this.sort.field] ? 1 : -1
                        }
                    })
                }
            },
            data() {
                return {
                    inputNumber: '',
                    inputDate: '',
                    inputTime: '',
                    inputFrom: '',
                    inputWhere: '',
                    inputPhone: '',
                    sort: {
                        field: '',
                        desc: true
                    },
                    items: [
                        {class: 'green', number: 'A342344', date: '12.09.2019 — 11:00', time: '11:00', timeclass: '', from: 'Коктебель', where: 'Бухта Ласпи', name: 'Алёна', phone: '8 (908) 441-19-10', price: '2000', percent: '500', tariff: 'Стандарт', source: 'ВК', payment: 'Нал.', bust: 0, childseat: 1, cradle: 2},
                        {number: 'A342256', date: '11.09.2019 — 09:15', time: '09:15', timeclass: 'timeerror', from: 'Аэр. Симферополь', where: 'Саки', name: 'Георгий', phone: '8 (922) 040-31-91', price: '1700', percent: '100', tariff: 'Комфорт', source: 'Одноклассники', payment: 'Безнал.'},
                        {class: 'red', number: 'A342321', date: '09.09.2019 — 15:30', time: '15:30', timeclass: 'timeerror', from: 'Аэр. Симферополь', where: 'Судак', name: 'Лидия', phone: '8 (908) 441-19-10', price: '2500', percent: '250', tariff: 'Универсал', source: 'Телефон', payment: 'Нал.'},
                        {number: 'A341050', date: '09.09.2019 — 16:30', time: '16:30', timeclass: '', from: 'Аэр. Симферополь', where: 'Евпатория', name: 'Евгения', phone: '8 (922) 040-31-91', price: '3000', percent: '400', tariff: 'Универсал', source: 'Инстаграм', payment: 'Безнал.', bust: 2, childseat: 2, cradle: 2},
                        {number: 'A341023', date: '09.09.2019 — 16:30', time: '16:30', timeclass: '', from: 'Ялта', where: 'Алушта', name: 'Михаил', phone: '8 (996) 321-48-80', price: '1000', percent: '500', tariff: 'Бизнес', source: 'ВК', payment: 'Нал.'},
                        {number: 'A338027', date: '08.09.2019 — 17:00', time: '17:00', timeclass: '', from: 'Отрадное', where: 'Керчь', name: 'Дмитрий', phone: '8 (908) 441-19-10', price: '2000', percent: '400', tariff: 'Комфорт', source: 'Одноклассники', payment: 'Безнал.'},
                        {number: 'A337990', date: '08.09.2019 — 20:00', time: '20:00', timeclass: '', from: 'Аэр. Симферополь', where: 'Малый маяк', name: 'Анна', phone: '8 (908) 441-19-10', price: '2000', percent: '250', tariff: 'Универсал', source: 'Телефон', payment: 'Нал.'},
                        {class: "yellow", number: 'A337602', date: '09.09.2019 — 15:40', time: '15:40', timeclass: '', from: 'Саки', where: 'Сукко', name: 'Павел', phone: '8 (996) 321-48-80', price: '3900', percent: '250', tariff: 'Стандарт', source: 'Инстаграм', payment: 'Безнал.'},
                        {class: "blue", number: 'A325087', date: '09.09.2019 — 16:30', time: '16:30', timeclass: '', from: 'Севастополь', where: 'Симферополь', name: 'Артём', phone: '8 (908) 441-19-10', price: '5000', percent: '100', tariff: 'Бизнес', source: 'ВК', payment: 'Нал.'},
                        {number: 'A319888', date: '08.09.2019 — 12:00', time: '12:00', timeclass: '', from: 'Ялта', where: 'Солнечногорское', name: 'Светлана', phone: '8 (996) 321-48-80', price: '1900', percent: '250', tariff: 'Комфорт', source: 'Одноклассники', payment: 'Безнал.'},
                    ]
                }
            },
            methods: {
                sortRow(field) {
                    if (field == this.sort.field) {
                        this.sort.desc = !this.sort.desc
                    } else {
                        this.sort.field = field;
                        this.sort.desc = true;
                    }
                }
            }
        });



        $('#clear').on('mouseup', function () {
            $('.form-control').each(function () {
                if ($(this).hasClass('datepicker') || $(this).hasClass('custom-select')) {
                    return;
                } else {
                    $(this).val('');
                    $(this).focus();
                    $(this).blur();
                }
                //$(this).val('');
                //$(this).focus();
                //$(this).blur();
            });
            $(this).submit();
        });
    }



    if ($('#app-sort-process').length > 0) {
        var appsortindex = new Vue({
            el: '#app-sort-process',
            computed: {
                sortedData() {
                    if (!this.sort.field) {
                        return this.items
                    }

                    return this.items.concat().sort((b, a) => {
                        if (this.sort.desc) {
                            return a[this.sort.field] > b[this.sort.field] ? -1 : 1
                        } else {
                            return a[this.sort.field] > b[this.sort.field] ? 1 : -1
                        }
                    })
                }
            },
            data() {
                return {
                    inputNumber: '',
                    inputDate: '',
                    inputTime: '',
                    inputFrom: '',
                    inputWhere: '',
                    inputPhone: '',
                    inputDriver: '',
                    sort: {
                        field: '',
                        desc: true
                    },
                    items: [
                        {number: 'A342344', date: '12.09.2019 — 11:00', time: '11:00', timeclass: 'timeerror', from: 'Коктебель', where: 'Бухта Ласпи', name: 'Алёна', phone: '8 (908) 441-19-10', price: '2000', percent: '500', tariff: 'Стандарт', driver: '8 (912) 499-50-11', source: 'ВК', payment: 'Нал.'},
                        {number: 'A342256', date: '11.09.2019 — 09:15', time: '09:15', timeclass: 'timeerror', from: 'Аэр. Симферополь', where: 'Саки', name: 'Георгий', phone: '8 (922) 040-31-91', price: '1700', percent: '100', tariff: 'Комфорт', driver: '8 (909) 113-75-92', source: 'Одноклассники', payment: 'Безнал.'},
                        {number: 'A342321', date: '09.09.2019 — 15:30', time: '15:30', timeclass: '', from: 'Аэр. Симферополь', where: 'Судак', name: 'Лидия', phone: '8 (908) 441-19-10', price: '2500', percent: '250', tariff: 'Универсал', driver: '8 (912) 067-44-46', source: 'Телефон', payment: 'Нал.'},
                        {number: 'A341050', date: '09.09.2019 — 16:00', time: '16:30', timeclass: '', from: 'Аэр. Симферополь', where: 'Евпатория', name: 'Евгения', phone: '8 (922) 040-31-91', price: '3000', percent: '400', tariff: 'Универсал', driver: '8 (917) 341-26-50', source: 'Инстаграм', payment: 'Безнал.'},
                        {number: 'A341023', date: '09.09.2019 — 16:00', time: '16:30', timeclass: 'timeerror', from: 'Ялта', where: 'Алушта', name: 'Михаил', phone: '8 (996) 321-48-80', price: '1000', percent: '500', tariff: 'Бизнес', driver: '8 (917) 502-35-78', source: 'ВК', payment: 'Нал.'},
                        {number: 'A338027', date: '08.09.2019 — 17:00', time: '17:00', timeclass: '', from: 'Отрадное', where: 'Керчь', name: 'Дмитрий', phone: '8 (908) 441-19-10', price: '2000', percent: '400', tariff: 'Комфорт', driver: '8 (909) 124-19-48', source: 'Одноклассники', payment: 'Безнал.'},
                        {number: 'A337990', date: '08.09.2019 — 20:00', time: '20:00', timeclass: '', from: 'Аэр. Симферополь', where: 'Малый маяк', name: 'Анна', phone: '8 (908) 441-19-10', price: '2000', percent: '250', tariff: 'Универсал', driver: '8 (967) 273-61-89', source: 'Телефон', payment: 'Нал.'},
                        {number: 'A337602', date: '09.09.2019 — 15:00', time: '15:40', timeclass: '', from: 'Саки', where: 'Сукко', name: 'Павел', phone: '8 (996) 321-48-80', price: '3900', percent: '250', tariff: 'Стандарт', driver: '8 (922) 536-38-17', source: 'Инстаграм', payment: 'Безнал.'},
                        {number: 'A325087', date: '09.09.2019 — 16:30', time: '16:30', timeclass: 'timeerror', from: 'Севастополь', where: 'Симферополь', name: 'Артём', phone: '8 (908) 441-19-10', price: '5000', percent: '100', tariff: 'Бизнес', driver: '8 (964) 879-88-50', source: 'ВК', payment: 'Нал.', bust: 0, childseat: 1, cradle: 2},
                        {number: 'A319888', date: '08.09.2019 — 12:00', time: '12:00', timeclass: '', from: 'Ялта', where: 'Солнечногорское', name: 'Светлана', phone: '8 (996) 321-48-80', price: '1900', percent: '250', tariff: 'Комфорт', driver: '8 (909) 712-25-00', source: 'Одноклассники', payment: 'Безнал.'},
                    ]
                }
            },
            methods: {
                sortRow(field) {
                    if (field == this.sort.field) {
                        this.sort.desc = !this.sort.desc
                    } else {
                        this.sort.field = field;
                        this.sort.desc = true;
                    }
                }
            }
        });



        $('#clear').on('mouseup', function () {
            $('.form-control').each(function () {
                if ($(this).hasClass('datepicker') || $(this).hasClass('custom-select')) {
                    return;
                } else {
                    $(this).val('');
                    $(this).focus();
                    $(this).blur();
                }
                //$(this).val('');
                //$(this).focus();
                //$(this).blur();
            });
            $(this).submit();
        });
    }


    if ($('#app-sort-archive').length > 0) {
        var appsortarchive = new Vue({
            el: '#app-sort-archive',
            computed: {
                sortedData() {
                    if (!this.sort.field) {
                        return this.items
                    }

                    return this.items.concat().sort((b, a) => {
                        if (this.sort.desc) {
                            return a[this.sort.field] > b[this.sort.field] ? -1 : 1
                        } else {
                            return a[this.sort.field] > b[this.sort.field] ? 1 : -1
                        }
                    })
                }
            },
            data() {
                return {
                    inputNumber: '',
                    inputDate: '',
                    inputTime: '',
                    inputFrom: '',
                    inputWhere: '',
                    inputPhone: '',
                    inputDriver: '',
                    sort: {
                        field: '',
                        desc: true
                    },
                    items: [
                        {class: 'green', number: 'A342344', date: '12.09.2019 — 11:00', time: '11:00', timeclass: '', from: 'Коктебель', where: 'Бухта Ласпи', name: 'Алёна', phone: '8 (908) 441-19-10', price: '2000', percent: '500', tariff: 'Стандарт', driver: '8 (912) 499-50-11', status: 'Закрыт', source: 'ВК', payment: 'Нал.', bust: 0, childseat: 1, cradle: 2},
                        {class: 'red', number: 'A342256', date: '11.09.2019 — 09:15', time: '09:15', timeclass: '', from: 'Аэр. Симферополь', where: 'Саки', name: 'Георгий', phone: '8 (922) 040-31-91', price: '1700', percent: '100', tariff: 'Комфорт', driver: '8 (909) 113-75-92', status: 'Отменён', source: 'Одноклассники', payment: 'Безнал.'},
                        {class: 'green', number: 'A342321', date: '09.09.2019 — 15:30', time: '15:30', timeclass: 'timeerror', from: 'Аэр. Симферополь', where: 'Судак', name: 'Лидия', phone: '8 (908) 441-19-10', price: '2500', percent: '250', tariff: 'Универсал', driver: '8 (912) 067-44-46', status: 'Закрыт', source: 'Телефон', payment: 'Нал.'},
                        {class: 'red', number: 'A341050', date: '09.09.2019 — 16:30', time: '16:30', timeclass: '', from: 'Аэр. Симферополь', where: 'Евпатория', name: 'Евгения', phone: '8 (922) 040-31-91', price: '3000', percent: '400', tariff: 'Универсал', driver: '8 (917) 341-26-50', status: 'Сорван', source: 'Инстаграм', payment: 'Безнал.'},
                        {class: 'green', number: 'A341023', date: '09.09.2019 — 16:30', time: '16:30', timeclass: '', from: 'Ялта', where: 'Алушта', name: 'Михаил', phone: '8 (996) 321-48-80', price: '1000', percent: '500', tariff: 'Бизнес', driver: '8 (917) 502-35-78', status: 'Закрыт', source: 'ВК', payment: 'Нал.'},
                        {class: 'red', number: 'A338027', date: '08.09.2019 — 16:00', time: '17:00', timeclass: 'timeerror', from: 'Отрадное', where: 'Керчь', name: 'Дмитрий', phone: '8 (908) 441-19-10', price: '2000', percent: '400', tariff: 'Комфорт', driver: '8 (909) 124-19-48', status: 'Отменён', source: 'Одноклассники', payment: 'Безнал.'},
                        {class: 'green', number: 'A337990', date: '08.09.2019 — 20:00', time: '20:00', timeclass: '', from: 'Аэр. Симферополь', where: 'Малый маяк', name: 'Анна', phone: '8 (908) 441-19-10', price: '2000', percent: '250', tariff: 'Универсал', driver: '8 (967) 273-61-89', status: 'Закрыт', source: 'Телефон', payment: 'Нал.'},
                        {class: 'red', number: 'A337602', date: '09.09.2019 — 15:40', time: '15:40', timeclass: 'timeerror', from: 'Саки', where: 'Сукко', name: 'Павел', phone: '8 (996) 321-48-80', price: '3900', percent: '250', tariff: 'Стандарт', driver: '8 (922) 536-38-17', status: 'Сорван', source: 'Инстаграм', payment: 'Безнал'},
                        {class: 'green', number: 'A325087', date: '09.09.2019 — 16:30', time: '16:30', timeclass: '', from: 'Севастополь', where: 'Симферополь', name: 'Артём', phone: '8 (908) 441-19-10', price: '5000', percent: '100', tariff: 'Бизнес', driver: '8 (964) 879-88-50', status: 'Закрыт', source: 'ВК', payment: 'Нал.'},
                        {class: 'red', number: 'A319888', date: '08.09.2019 — 12:00', time: '12:00', timeclass: '', from: 'Ялта', where: 'Солнечногорское', name: 'Светлана', phone: '8 (996) 321-48-80', price: '1900', percent: '250', tariff: 'Комфорт', driver: '8 (909) 712-25-00', status: 'Не оплачен', source: 'Одноклассники', payment: 'Безнал.'},
                    ]
                }
            },
            methods: {
                sortRow(field) {
                    if (field == this.sort.field) {
                        this.sort.desc = !this.sort.desc
                    } else {
                        this.sort.field = field;
                        this.sort.desc = true;
                    }
                }
            }
        });



        $('#clear').on('mouseup', function () {
            $('.form-control').each(function () {
                if ($(this).hasClass('datepicker') || $(this).hasClass('custom-select')) {
                    return;
                } else {
                    $(this).val('');
                    $(this).focus();
                    $(this).blur();
                }
                //$(this).val('');
                //$(this).focus();
                //$(this).blur();
            });
            $(this).submit();
        });
    }


    if ($('#app-sort-new-orders').length > 0) {
        var appsortneworders = new Vue({
            el: '#app-sort-new-orders',
            computed: {
                sortedData() {
                    if (!this.sort.field) {
                        return this.items
                    }

                    return this.items.concat().sort((b, a) => {
                        if (this.sort.desc) {
                            return a[this.sort.field] > b[this.sort.field] ? -1 : 1
                        } else {
                            return a[this.sort.field] > b[this.sort.field] ? 1 : -1
                        }
                    })
                }
            },
            data() {
                return {
                    inputNumber: '',
                    inputDate: '',
                    inputTime: '',
                    inputFrom: '',
                    inputWhere: '',
                    inputPhone: '',
                    inputStatus: '',
                    sort: {
                        field: '',
                        desc: true
                    },
                    items: [
                        {number: 'A342344', date: '12.09.2019 — 11:00', time: '11:00', timeclass: 'timeerror', from: 'Коктебель', where: 'Бухта Ласпи', name: 'Алёна', phone: '8 (908) 441-19-10', price: '2000', percent: '500', tariff: 'Стандарт', status: 'Новый', source: 'Вк', payment: 'Нал.'},
                        {number: 'A342256', date: '11.09.2019 — 09:15', time: '09:15', timeclass: '', from: 'Аэр. Симферополь', where: 'Саки', name: 'Георгий', phone: '8 (922) 040-31-91', price: '1700', percent: '100', tariff: 'Комфорт', status: 'Новый', source: 'Одноклассники', payment: 'Безнал.', bust: 0, childseat: 1, cradle: 2},
                        {number: 'A342321', date: '09.09.2019 — 15:30', time: '15:30', timeclass: '', from: 'Аэр. Симферополь', where: 'Судак', name: 'Лидия', phone: '8 (908) 441-19-10', price: '2500', percent: '250', tariff: 'Универсал', status: 'Новый', source: 'Телефон', payment: 'Нал.'},
                        {number: 'A341050', date: '09.09.2019 — 16:30', time: '16:30', timeclass: '', from: 'Аэр. Симферополь', where: 'Евпатория', name: 'Евгения', phone: '8 (922) 040-31-91', price: '3000', percent: '400', tariff: 'Универсал', status: 'Новый', source: 'Инстаграм', payment: 'Безнал.'}
                    ]
                }
            },
            methods: {
                sortRow(field) {
                    if (field == this.sort.field) {
                        this.sort.desc = !this.sort.desc
                    } else {
                        this.sort.field = field;
                        this.sort.desc = true;
                    }
                }
            }
        });

        $('#clear').on('mouseup', function () {
            $('.form-control').each(function () {
                if ($(this).hasClass('datepicker') || $(this).hasClass('custom-select')) {
                    return;
                } else {
                    $(this).val('');
                    $(this).focus();
                    $(this).blur();
                }
            });
            $(this).submit();
        });
    }



    /*
     if ($('#app').length > 0) {
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
     
     $('#clear').on('mouseup', function () {
     $('.form-control').each(function () {
     $(this).val('');
     $(this).focus();
     $(this).blur();
     });
     $(this).submit();
     });
     }*/



    if ($('#app-process').length > 0) {
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
                        timeclass: 'timeerror',
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
                        timeclass: 'timeerror',
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
                        timeclass: '',
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
                        timeclass: '',
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
                        timeclass: 'timeerror',
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
                        timeclass: '',
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
                        timeclass: '',
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
                        timeclass: '',
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
                        timeclass: 'timeerror',
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
                        timeclass: '',
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

        $('#clear').on('mouseup', function () {
            $('.form-control').each(function () {
                if ($(this).hasClass('datepicker') || $(this).hasClass('custom-select')) {
                    return;
                } else {
                    $(this).val('');
                    $(this).focus();
                    $(this).blur();
                }
            });
            $(this).submit();
        });
    }




    if ($('#app-archive').length > 0) {
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
                        timeclass: '',
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
                        timeclass: '',
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
                        timeclass: 'timeerror',
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
                        timeclass: '',
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
                        timeclass: '',
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
                        timeclass: 'timeerror',
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
                        timeclass: '',
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
                        timeclass: 'timeerror',
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
                        timeclass: '',
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
                        timeclass: '',
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

        $('#clear').on('mouseup', function () {
            $('.form-control').each(function () {
                if ($(this).hasClass('datepicker') || $(this).hasClass('custom-select')) {
                    return;
                } else {
                    $(this).val('');
                    $(this).focus();
                    $(this).blur();
                }
            });
            $(this).submit();
        });
    }


    if ($('#app-new-orders').length > 0) {
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



    if ($('#app-drivers').length > 0) {
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
                        late: '3',
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
                        late: '2',
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
                        late: '1',
                        reviews: '1'
                    }
                ]
            }
        });

        $('#clear').on('mouseup', function () {
            $('.form-control').each(function () {
                if ($(this).hasClass('datepicker') || $(this).hasClass('custom-select')) {
                    return;
                } else {
                    $(this).val('');
                    $(this).focus();
                    $(this).blur();
                }
            });
            $(this).submit();
        });
    }


    if ($('#app-settings').length > 0) {
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

    /*
     $('.phone--drivers').on('click', function () {
     var top = $(window).scrollTop() + 100;
     $('.popup--drivers').css({'top': top});
     $('#black-bg').stop(true, true).fadeIn(300);
     setTimeout(function () {
     $('.popup--drivers').stop(true, true).fadeIn(300);
     }, 350);
     });
     */

    /*
     $('.phone--clients').on('click', function () {
     var top = $(window).scrollTop() + 100;
     $('.popup--clients').css({'top': top});
     $('#black-bg').stop(true, true).fadeIn(300);
     setTimeout(function () {
     $('.popup--clients').stop(true, true).fadeIn(300);
     }, 350);
     });
     */


    $('.close-form').on('click', function () {
        //var top = $(window).scrollTop() + 100;
        /*if ($(this).parents('.popup').hasClass('popup--drivers')) {
         if (($('.popup--order').css('display') == 'block') || ($('.popup--assign-driver').css('display') == 'block')) {
         $(this).parent('.popup').stop(true, true).fadeOut(300);
         } else {
         $(this).parent('.popup').stop(true, true).fadeOut(300);
         setTimeout(function () {
         $('#black-bg').stop(true, true).fadeOut(300);
         }, 350);
         }
         } else if ($(this).parents('.popup').hasClass('popup--order')) {
         if ($('.popup--clients').css('display') == 'block') {
         $(this).parent('.popup').stop(true, true).fadeOut(300);
         } else {
         $(this).parent('.popup').stop(true, true).fadeOut(300);
         setTimeout(function () {
         $('#black-bg').stop(true, true).fadeOut(300);
         }, 350);
         }
         } else {
         $(this).parent('.popup').stop(true, true).fadeOut(300);
         setTimeout(function () {
         $('#black-bg').stop(true, true).fadeOut(300);
         }, 350);
         }*/


        if (($('.popup--order').css('display') == 'block') && ($('.popup--drivers').css('display') == 'block')) {
            $('.popup--primary').stop(true, true).fadeOut(300);
            $('.popup--primary').removeClass('popup--primary');
            $('.popup--order').addClass('popup--primary');
        } else if (($('.popup--assign-driver').css('display') == 'block') && ($('.popup--drivers').css('display') == 'block')) {
            $('.popup--primary').stop(true, true).fadeOut(300);
            $('.popup--primary').removeClass('popup--primary');
            $('.popup--assign-driver').addClass('popup--primary');
        } else if (($('.popup--assign-driver').css('display') == 'block') && ($('.popup--add-driver').css('display') == 'block')) {
            $('.popup--primary').stop(true, true).fadeOut(300);
            $('.popup--primary').removeClass('popup--primary');
            $('.popup--assign-driver').addClass('popup--primary');
        } else if (($('.popup--order').css('display') == 'block') && ($('.popup--clients').css('display') == 'block')) {
            $('.popup--primary').stop(true, true).fadeOut(300);
            $('.popup--primary').removeClass('popup--primary');
            $('.popup--clients').addClass('popup--primary');
        } else {
            $('.popup--primary').stop(true, true).fadeOut(300);
            $('.popup--primary').removeClass('popup--primary');
            setTimeout(function () {
                $('#black-bg').stop(true, true).fadeOut(300);
            }, 350);
        }

    });

    /*
     $('.close-add-driver').on('click', function () {
     $(this).parent('.popup').stop(true, true).fadeOut(300);
     setTimeout(function () {
     $('.popup--assign-driver').stop(true, true).fadeIn(300);
     }, 350);
     });*/

    document.onkeydown = function (evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
            //$(".close-form").click();
            if (($('.popup--order').css('display') == 'block') && ($('.popup--drivers').css('display') == 'block')) {
                $('.popup--primary').stop(true, true).fadeOut(300);
                $('.popup--primary').removeClass('popup--primary');
                $('.popup--order').addClass('popup--primary');
            } else if (($('.popup--assign-driver').css('display') == 'block') && ($('.popup--drivers').css('display') == 'block')) {
                $('.popup--primary').stop(true, true).fadeOut(300);
                $('.popup--primary').removeClass('popup--primary');
                $('.popup--assign-driver').addClass('popup--primary');
            } else if (($('.popup--assign-driver').css('display') == 'block') && ($('.popup--add-driver').css('display') == 'block')) {
                $('.popup--primary').stop(true, true).fadeOut(300);
                $('.popup--primary').removeClass('popup--primary');
                $('.popup--assign-driver').addClass('popup--primary');
            } else if (($('.popup--order').css('display') == 'block') && ($('.popup--clients').css('display') == 'block')) {
                $('.popup--primary').stop(true, true).fadeOut(300);
                $('.popup--primary').removeClass('popup--primary');
                $('.popup--clients').addClass('popup--primary');
            } else {
                $('.popup--primary').stop(true, true).fadeOut(300);
                $('.popup--primary').removeClass('popup--primary');
                setTimeout(function () {
                    $('#black-bg').stop(true, true).fadeOut(300);
                }, 350);
            }
        }
    };

    /*
     $('.add-driver').on('click', function () {
     var top = $(window).scrollTop() + 100;
     $('.popup--assign-driver').stop(true, true).fadeOut(300);
     $('.popup--add-driver').css({'top': top});
     setTimeout(function () {
     $('.popup--add-driver').stop(true, true).fadeIn(300);
     }, 350);
     });*/

    //function test(){
    //    alert(1);
    //};

});