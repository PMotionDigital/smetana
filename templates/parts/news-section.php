<?php 
$cat = get_category_by_slug('novosti');
$args = array(
    'post_type' => 'post',
    'numberposts' => get_option('posts_per_page'),
    'category' => $cat->term_id
);
$posts = get_posts($args);
if($posts): ?>


<section class="main_news news section"
    data-post-container
    data-tax-id="<?php echo $cat->term_id; ?>"
    data-tax="category"
    data-page-id="1"
    data-template="news-element"
    data-order="date">
    <div class="section-head main-head dis-flex justify-content-between">
        <h2 class="head_title">Новости</h2>
        <?php get_template_part('templates/components/sorting-buttons'); ?>
        <?php get_template_part('templates/components/sorting'); ?>
    </div>
   
    <div class="news_section" > 
    <ul class="news_list" data-list>
    <?php
     
        $prev_date = '';
        $count = 0;
        echo '<ul class="news_list">';
        foreach($posts as $post): setup_postdata($post);
            // if($count == 0):
            //     $prev_date = get_the_time('Yd');
            // endif;

            // if($prev_date != get_the_time('Yd')):
                ?>
                <!-- </ul>
                </div>
                <div class="news_section">
                    <div class="news_section-title"> -->
                    <?php 
                        // if(get_the_time('Yd') == current_time('Yd') - 1) {
                        //     $date = 'Вчера, ';
                        // } else {
                        //     $date = '';
                        // }
                        // echo $date .' '.get_the_time('j F Y');
                    ?>
                    <!-- </div>
                    <ul class="news_list">  -->
                <?php

                //$prev_date = get_the_time('Yd');
            //endif;
            get_template_part('templates/parts/news-element');
            //$count ++;
        endforeach;
        //echo '</ul>';
    ?>
        </ul>
    </div>
    <button type="button" class="icon-block undo news_button" data-load-more>Загрузить ещё</button>
</section>
<?php endif; ?>