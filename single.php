<?php get_header(); ?>
    <main class="site-main">
        <?php get_template_part('templates/parts/sidebar');
        if(in_category('sggfdsgftati')):
            // get_template_part('templates/single/stati');
        else:
            get_template_part('templates/single/default');
        endif; ?>
        <section class="third_ads">
            <img src="<?php bloginfo('template_url'); ?>/dist/img/ads-image.png">
        </section>
        <?php get_template_part('templates/parts/comments-section'); ?>
    </main> 
<?php get_footer();
