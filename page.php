<?php get_header();  ?>
        <section class="single-post">
        <section class="section single-post_content">
                <h1 class="single-post_title"><?php the_title(); ?></h1>
                <?php if(has_post_thumbnail()): ?>
                    <div class="article_image">
                        <?php the_post_thumbnail(); ?>
                    </div>
                <?php endif; ?>

                <?php the_content(); ?>
            </section>
        </section>

        <section class="third_ads no-print">
            <img src="<?php bloginfo('template_url'); ?>/dist/img/ads-image.png">
        </section>

<?php get_footer();