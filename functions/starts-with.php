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
    
        ob_start(); ?>
        
        <section class="main-thesaurus thesaurus section">
                <div class="section-head dis-flex justify-content-between">
                    <h1 class="head_title">Тезаурус</h1>
                    <input class="thesaurus_search col-lg-7" type="text" placeholder="Введите термин" name="thesaurus-search">
                </div>
                <div class="thesaurus_content">
                <?php 
                $alphabet = array('а','б','в','г','д','е','ё','ж','з','и','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','щ','э','ю','я');
                $current = true;
                ?>
                    <ul class="thesaurus_letters letters dis-flex flex-wrap-wrap">
                    <?php foreach($alphabet as $let): ?>
                        <li>
                            <button 
                            type="button" 
                            class="letter" data-letter="<?php echo $let; ?>">
                                <?php echo $let; ?>
                            </button>
                        </li>
                    <?php endforeach; ?>
                    </ul>
                    <div class="changable-container">
                    <?php if ( $results ) { ?>
                        <div class="thesaurus_words words">
                            <ul class="words_list list dis-flex flex-wrap-wrap"><?php
                            foreach ( $results as $post ) {

                                setup_postdata ( $post ); 
                                ?>
                                <li class="words_item item col-lg-12">
                                    <a href="<?php the_permalink(); ?>" data-word-id="<?php the_ID(); ?>"><?php the_title(); ?></a>
                                </li>
                                <?php
                            };
                            ?>
                            </ul>
                        </div>
                        <?php } else {
                            echo 'Ничего не найдено.';
                        }; ?>
                    </div>
                </div>
            </section>

            <section class="thesaurus_recent-views section">
                <div class="section-head">
                    <h2 class="head_title">Вы недавно смотрели</h2>
                </div>
                <ul>
                    <?php
                    if ( $_COOKIE['viewedProd'] ){
                        
                        foreach ($_COOKIE['viewedProd'] as $viewedProdId ){

                            $viewedProd = get_post( $viewedProdId ); ?>

                                <li class="interesting_item">
                                    <div class="item-head dis-flex">
                                        <a href="<?php echo get_the_permalink($viewedProd->ID); ?>"><h3 class="interesting_item-title"><?php echo $viewedProd->post_title ?> </h3></a>
                                        <span class="icon-block views"><?php do_action( 'pageviews' ); ?></span>
                                        <?php $tags = wp_get_post_tags($viewedProd->ID); 
                                            if($tags):
                                                $max_count = 1; ?>
                                            <div class="article_hashtags">
                                                <?php foreach($tags as $count => $tag): 
                                                $link = get_term_link($tag->term_id); 
                                                    if($count < $max_count): ?>
                                                    <a href="<?php echo $link; ?>" class="article_hashtag"><?php echo '#'.$tag->name; ?></a>
                                                    <?php 
                                                    endif;
                                                endforeach; ?>
                                            </div>
                                        <?php endif; ?>
                                    </div>
                                    <div class="interesting_item-desc">
                                        <?php print_r($viewedProd->post_excerpt); ?>
                                    </div>
                                    <!-- <div class="article_item-bottom dis-flex">
                                        <button type="button" class="icon-block comments-icon">Комментировать</button>
                                        <button type="button" class="icon-block like">Нравится</button>
                                        <button type="button" class="icon-block blog-icon">В блог</button>
                                        <button type="button" class="icon-block favorites">В избранное</button>
                                    </div> -->
                                </li>
                        <?php }
                        
                    }
                    
                    ?>
                </ul>
            </section>
        <?php
            wp_reset_postdata();
        $response_html = ob_get_clean();
    
 
    echo json_encode(array(
        'html' => $response_html
    ));
    die;
}

add_action('wp_ajax_nopriv_search_by_letter', 'get_tezaurus');
add_action('wp_ajax_search_by_letter', 'get_tezaurus');
