import "./import/modules";

$(document).ready(function() {
    // new Vue({
    //     el: '#app',
    //     data: {
    //         items: [
    //             'Главная',
    //             'Жителям',
    //             'О компании',
    //             'Аварийные службы',
    //             'Контакты'
    //         ],
    //         show: false,
    //     },
    // })

    $('.hamburger').click(function() {
        $(this).toggleClass('hamburger_active');
        $('body, html').addClass('ov_h');
        if ($(this).hasClass('hamburger_active')) {
            $('.top-menu').addClass('top_menu_active');
        } else {
            $('body, html').removeClass('ov_h');
            $('.top-menu').removeClass('top_menu_active');
        }
    });
});