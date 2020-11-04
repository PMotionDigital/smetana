<?php 
$cat = get_category_by_slug('novosti');
$args = array(
    'post_type' => 'post',
    'numberposts' => 10,
    'category' => $cat->term_id
);
$posts = get_posts($args);
if($posts): ?>


<section class="main_news news section">
    <div class="section-head main-head dis-flex justify-content-between">
        <h2 class="head_title">Новости</h2>
        <div>
            <button type="button" class="icon-block calendar head_button">Период</button>
            <button type="button" class="head_button button-sorting" data-sorting>По просмотрам</button>
        </div>
        <?php get_template_part('templates/components/sorting'); ?>
    </div>
    <div class="news_section"> 
    <?php
     
        $prev_date = '';
        $count = 0;
        echo '<ul class="news_list">';
        foreach($posts as $post): setup_postdata($post);
            if($count == 0):
                $prev_date = get_the_time('Yd');
            endif;

            if($prev_date != get_the_time('Yd')):
                ?></ul>
                </div>
                <div class="news_section">
                    <div class="news_section-title">
                    <?php 
                        if(get_the_time('Yd') == current_time('Yd') - 1) {
                            $date = 'Вчера, ';
                        } else {
                            $date = '';
                        }
                        echo $date .' '.get_the_time('j F');
                    ?>
                    </div>
                    <ul class="news_list"> 
                <?php

                $prev_date = get_the_time('Yd');
            endif;
            get_template_part('templates/parts/news-element');
            $count ++;
        endforeach;
        echo '</ul>';
    ?>
    </div>
    <button type="button" class="icon-block undo news_button">Загрузить ещё</button>
</section>
<?php endif; ?>