import $ from 'jquery';
const expandButtons = document.querySelectorAll('[data-expand]');
const postExpand = (id, button) => {
    $.ajax({
        url: `${window.location.origin}/wp-admin/admin-ajax.php`,
        method: 'POST',
        cahce: false,
        data: {
            action: 'expand_post',
            post_id: id
        },
        beforeSend: () => {
            console.log('ушел запросичек');
        },
        success: (data) => {
            const response = JSON.parse(data);
            console.log(response);
            const parent = button.closest('.article').querySelector('.article_desc');
            parent.innerHTML = `<div class="single-post_content">${response.template}</div>`;
        }
    })
};
expandButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const postId = button.dataset['expand'];
        postExpand(postId, button);
    });
});

