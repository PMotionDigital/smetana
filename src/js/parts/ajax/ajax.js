import $ from 'jquery';

const getRequest = (met, dataData, func, button) => {
    $.ajax({
        url: `${window.location.origin}/wp-admin/admin-ajax.php`,
        method: met,
        cahce: false,
        data: dataData,
        beforeSend: () => {
            $('[data-preloader]').addClass('preloader--active');
            $('body').css('overflow', 'hidden');
        },
        success: (data) => {
            $('[data-preloader]').removeClass('preloader--active');
            $('body').attr('style', '');
            func(data, button);
        }
    });
};


export default {
    getRequest
};