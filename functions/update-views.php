<?php 

function update_views_value(){
    global $post;
    $post = $_GET['post_id'];
    if($post):
        $views = get_field('просмотры', $post);
        update_field('просмотры', intval($views)+1, $post);
        $status = 'ok';
    else: 
        $status = 'failed';
    endif;
    echo json_encode(array(
        'views' => $views,
        'status' => $status,
        'post' => $post
    ));
    die;
};

add_action('wp_ajax_update_views', 'update_views_value');
add_action('wp_ajax_nopriv_update_views', 'update_views_value');