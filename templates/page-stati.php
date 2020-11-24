<?php
/* 
Template name:  Страница - Статьи
*/
get_header(); ?>

<?php
    $posts = get_posts(array(
        'posts_per_page'	=> get_option('posts_per_page'),
        'post_type'         => 'post',
        'category__not_in'  => array(7)
    ));

    // foreach ($posts as $post) {
    //     setup_postdata($post);
    //     get_template_part( 'templates/category/default');
    // }
    // wp_reset_postdata();
?>

<a href="#" class="category_ads full-center">
                    <img src="<?php bloginfo('template_url'); ?>/dist/img/ads-block.png">
                </a>

<section class="main_articles articles section default-category"
    data-post-container
    data-tax-id=""
    data-tax="page-stati"
    data-page-id="1"
    data-order="date">
    <div class="section-head main-head dis-flex justify-content-between">
        <h2 class="head_title"><?php echo the_title(); ?></h2>
        <div>
            <button type="button" class="icon-block calendar head_button">Период</button>
            <button type="button" class="head_button button-sorting" data-sorting>Сортировка</button>
        </div>
        <?php get_template_part('templates/components/sorting'); ?>
    </div>
    <ul class="articles_list" data-list>
        <?php 
        foreach ($posts as $post) {
            setup_postdata($post);
            get_template_part('templates/parts/post-element');
        }
        wp_reset_postdata(); 
        ?>
    </ul>
</section>


<section class="site-main_third-section third no-print">
    <section class="third_ads no-print">
        <img class="no-print" src="<?php bloginfo('template_url'); ?>/dist/img/ads-image.png">
    </section>

    <?php get_template_part('templates/parts/actual-section'); ?>
</section>

<?php get_footer();
