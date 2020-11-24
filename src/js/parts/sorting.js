import $, { get } from 'jquery';
import ajax from '../parts/ajax/ajax';

let send = true;
//render_posts();

let queriedContainer;
function render_posts(container, append = false) {
    const taxId = [];
    if(container.data('tax-id').toString().includes(',')){
        container.data('tax-id').split(',').forEach((el) => {
            if(el) {
                taxId.push(el);
            }
        });
    } else {
        taxId.push(container.data('tax-id'));
    }
    
    
    const taxName = container.data('tax');
    const pageId = container.data('page-id');
    const order = container.data('order');
    const template = container.data('template');
    
    const data = {
        action: 'render_posts',
        tax_id: taxId,
        tax_name: taxName,
        page_id: pageId,
        order: order,
        template: template
    };
    console.log(data);
    let handler;
    append? handler = appendHandler : handler = renderHandler;
    queriedContainer = container;
    ajax.getRequest('GET', data, handler);
}

function appendHandler(data) {
    const resp = JSON.parse(data);
    //$('[data-post-container]').find('ul[data-list]').html(resp.posts_html);
    if(queriedContainer){
        queriedContainer.data('page-id', Number(queriedContainer.data('page-id')+1));
        console.log( queriedContainer.data('page-id'));
        resp.posts_html.forEach((post) => {
            queriedContainer.find('[data-list]').append(post);
        });
    }
    console.log(resp);
    resp.posts_per_page > resp.posts_html.length ? send = false : send = true;
}
function renderHandler(data) {
    const resp = JSON.parse(data);
    if(queriedContainer){
        queriedContainer.find('[data-list]').html('');
        queriedContainer.data('page-id', queriedContainer.data('page-id')+1);
        resp.posts_html.forEach((post) => {
            queriedContainer.find('[data-list]').append(post);
        });
    }
    console.log(resp);
    resp.posts_per_page > resp.posts_html.length ? send = false : send = true;
}



$(document).on('click', '[data-sorting-name]', (e) => {
    e.preventDefault();
    const el = $(e.currentTarget);
    el.closest('[data-sorting]').find('[data-sorting-name').removeClass('sorting_item--current');
    el.addClass('sorting_item--current');
    const name = el.data('sorting-value');
    //console.log(name);
    el.closest('[data-post-container]').data('order', name);
    el.closest('[data-post-container]').data('page-id', 0);
    el.closest('[data-post-container]').find('button[data-sorting]').html(el.data('sorting-name'));
    
    render_posts(el.closest('[data-post-container]'));
    el.closest('[data-sorting]').removeClass('sorting--opened');
    $(el).closest('.section-head').find('button[data-sorting]').removeClass('button-sorting--active');
});

$(document).on('click', '[data-load-more]', (evt) => {
    evt.preventDefault();
    const el = $(evt.currentTarget);
    render_posts(el.closest('[data-post-container]'), true);
})

$(document).on('click', 'button[data-sorting]', (e) => {
    e.preventDefault();
    const btn = $(e.currentTarget);
    const list = btn.closest('[data-post-container]').find('div[data-sorting]');
    btn.toggleClass('button-sorting--active');
    list.toggleClass('sorting--opened');
});


$(document).mouseup(function (e){ // событие клика по веб-документу
    const el = $('[data-sorting]'); // тут указываем ID элемента
    if (!el.is(e.target) // если клик был не по нашему блоку
        && el.has(e.target).length === 0) { // и не по его дочерним элементам
            el.removeClass('button-sorting--active sorting--opened');
    }
});

$(window).bind('scroll', (e)=> {
    loadMore();
});

function loadMore() {
    const containers = $('[data-post-container]');
    containers.each((i, el) => {
        const rect = el.getBoundingClientRect();
        
        const bottom = rect.bottom - $(window).height();
        
        if(bottom <= 150 && bottom >= -150 && send == true) {
            console.log(bottom);
            send = false;
            render_posts($(el), true);
            console.log('fdsafdsa');
        }
    });
}