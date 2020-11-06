<?php

function get_tezaurus(){
    global $wpdb; 
    global $post;
    $request = $_GET['letter'];
    $response_html = '';
    $results = $wpdb->get_results(
        "
        SELECT * FROM $wpdb->posts
        WHERE post_title LIKE '$request%'
        AND post_type = 'tezaurus'
        AND post_status = 'publish'; 
        "
    ); 
    if ( $results ) {
        ob_start(); ?>
        <div class="thesaurus_words words">
            <ul class="words_list list dis-flex flex-wrap-wrap"><?php
            foreach ( $results as $post ) {

                setup_postdata ( $post ); 
                ?>
                <li class="words_item item col-lg-4">
                    <a href="<?php the_permalink(); ?>" data-word-id="<?php the_ID(); ?>"><?php the_title(); ?></a>
                </li>
                <?php
            };
            ?>
            </ul>
        </div>
        <?php
            wp_reset_postdata();
        $response_html = ob_get_clean();
    } 
    else {
        $response_html = 'Нет слов на эту букву';
    }
    echo json_encode(array(
        'html' => $response_html
    ));
    die;
}
function get_single_word(){
    $word_id = $_GET['letter'];
    global $post;
    $post = intval($word_id);
    setup_postdata($post);

    ob_start(); ?>
        <div class="thesaurus_word">
            <?php the_content() ?>
        </div>
        <?php
    $single_template = ob_get_clean();

    echo json_encode(array(
        'html' => $single_template
    ));
    die;
}
add_action('wp_ajax_nopriv_search_by_letter', 'get_tezaurus');
add_action('wp_ajax_search_by_letter', 'get_tezaurus');

add_action('wp_ajax_nopriv_get_single_word', 'get_single_word');
add_action('wp_ajax_get_single_word', 'get_single_word');