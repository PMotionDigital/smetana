<?php 

add_action('wp_ajax_expand_post', 'load_post_template');
add_action('wp_ajax_nopriv_expand_post', 'load_post_template');

function load_post_template(){
    global $post;
    $post = $_POST['post_id'];
    if($post):
        setup_postdata($post);
        $exerpt = get_the_excerpt();
        ob_start();
            the_content();
        $post_template = ob_get_clean();
        $status = 'ok';
    else: 
        $status = 'failed';
    endif;
    echo json_encode(array(
        'template' => $post_template,
        'exerpt' => $exerpt,
        'status' => $status
    ));
    wp_reset_postdata();
    die;
}