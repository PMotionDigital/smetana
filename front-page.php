<?php 
/* 
Template name:  Главная страница
*/
get_header(); ?>
    <main class="site-main">
        <?php get_template_part('templates/parts/sidebar'); ?>
        <section class="site-main_main-section main">
            <?php get_template_part('templates/parts/news-section'); ?>
            <?php get_template_part('templates/parts/articles-section'); ?>
        </section>
        <section class="site-main_third-section third">
            <section class="third_ads">
                <img src="<?php bloginfo('template_url'); ?>/dist/img/ads-image.png">
            </section>

            <?php get_template_part('templates/parts/blogs-section'); ?>
            <?php get_template_part('templates/parts/actual-section'); ?>
            <?php get_template_part('templates/parts/actual-section'); ?>
            <?php get_template_part('templates/parts/actual-section'); ?>
            <?php get_template_part('templates/parts/actual-section'); ?>
            <?php get_template_part('templates/parts/actual-section'); ?>
        </section>
        <?php get_template_part('templates/parts/comments-section'); ?>
    </main>
<?php get_footer(); ?>