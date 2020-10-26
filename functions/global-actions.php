<?php



function new_excerpt_more($more) {
    return '… <span class="excerpt-more">подробнее</span>';
};
function excerpt_sentence($excerpt){
    return substr($excerpt,0,strpos($excerpt,'.')+1);
}
add_filter('the_excerpt', 'excerpt_sentence');
add_filter('excerpt_more', 'new_excerpt_more');