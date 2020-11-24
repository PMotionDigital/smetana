<?php 
/* 
Template name:  Главная страница
*/
get_header(); ?>
   <?php //echo do_shortcode('[widget id="calendar-2"]'); ?>
        <a href="#" class="category_ads full-center">
                    <img src="<?php bloginfo('template_url'); ?>/dist/img/ads-block.png">
                </a>
        <section class="site-main_main-section main">
            <?php get_template_part('templates/parts/news-section'); ?>
            <?php get_template_part('templates/parts/articles-section'); ?>
        </section>
        <section class="site-main_third-section third no-print">
            <section class="third_ads">
                <img src="<?php bloginfo('template_url'); ?>/dist/img/ads-image.png">
            </section>

            <?php // get_template_part('templates/parts/blogs-section'); ?>
            <?php get_template_part('templates/parts/actual-section'); ?>
        </section>
        <!-- <section><?php //get_template_part('templates/parts/comments-section'); ?></section> -->
     
<?php get_footer(); ?>