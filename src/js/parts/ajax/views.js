import $, { post } from 'jquery';

const singlePost = $('.single-post[data-post]');


const getviews = (id) => {
    $.ajax({
        url: `${window.location.origin}/wp-admin/admin-ajax.php`,
        method: 'GET',
        cahce: false,
        data: {
            action: 'update_views',
            post_id: id
        },
        beforeSend: () => {
            console.log('load');
        },
        success: (data) => {
            console.log(data, id);
        }
    });
};
 //console.log(singlePost, 'huishe');

if(singlePost){
    const postId = singlePost.data('post');
    
    if(!localStorage.getItem(`post-${postId}`)){
        localStorage.setItem(`post-${postId}`, 'viewed');
        getviews(postId);
    }
}