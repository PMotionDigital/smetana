<?php get_header(); 

        if(in_category('sggfdsgftati')):
            // get_template_part('templates/single/stati');
        else:
            get_template_part('templates/single/default');
        endif; ?>
        <section class="third_ads no-print">
            <img src="<?php bloginfo('template_url'); ?>/dist/img/ads-image.png">
        </section>
        <?php setcookie('viewedProd['. $post->ID .']', $post->ID, time()+36000, COOKIEPATH, COOKIE_DOMAIN, false);?>
    
<?php get_footer();
