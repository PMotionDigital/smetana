import $ from 'jquery';
import hui from './ajax';

const expandButtons = document.querySelectorAll('[data-expand]');
const articles = document.querySelectorAll('.article');
let content = "";

// articles.forEach((article) => {
//     const articleDesc = article.querySelector('.post-expand_desc');
//     if (articleDesc) {
//         articleDesc.classList.remove('hidden');
//     }
// })

const postExpand = (data, button) => {
    const response = JSON.parse(data);
    const parent = button.closest('.article').querySelector('.article_desc');
    const desc = button.closest('.article').querySelector('.post-expand_desc');
    parent.innerHTML = `<div class="single-post_content">${response.template}</div>`;
    desc.classList.remove('hidden');
};

expandButtons.forEach((button) => {
    const parent = button.closest('.article').querySelector('.article_desc');
    const desc = button.closest('.article').querySelector('.post-expand_desc');
    button.addEventListener('click', (e) => {
        e.preventDefault();
        

        if (button.innerHTML === button.dataset['expandText']){
            const postId = button.dataset['expand'];
            const dataExpand = {
                action: 'expand_post',
                post_id: postId
            }
            content = parent.innerHTML;
            hui.getRequest('POST', dataExpand, postExpand, button);

            button.innerHTML = button.dataset['narrowText'];
        } else if (button.innerHTML == button.dataset['narrowText']){
            parent.innerHTML = content;
            button.innerHTML = button.dataset['expandText'];
            desc.classList.add('hidden');
        }
    });
});



