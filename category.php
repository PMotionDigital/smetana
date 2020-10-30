<?php get_header(); ?>
    <main class="rubricator-main category">
        <?php get_template_part('templates/parts/sidebar'); ?>

        <section class="category_section">
            <?php if(in_category('stati')): ?>
                <a href="#" class="category_ads">
                    <img src="<?php bloginfo('template_url'); ?>/dist/img/ads-block.png">
                </a>
            <?php endif; ?>
            <div class="category_wrapper">
                <?php if(in_category('sggfdsgftati')):
                // get_template_part('templates/single/stati');
                else:
                    get_template_part('templates/category/default');
                endif; ?>
                <section class="site-main_third-section third">
                    <section class="third_ads">
                        <img src="<?php bloginfo('template_url'); ?>/dist/img/ads-image.png">
                    </section>

                    <?php if(in_category('stati')): ?>
                    <div class="info-reg section">
                        <p>Зарегистрируйтесь и получите <br>
                            больше возможностей</p>
                        <button type="button" class="button yellow">Зарегистрироваться</button>
                    </div>
                    <?php endif; ?>

                    <?php get_template_part('templates/parts/blogs-section'); ?>
                    <?php get_template_part('templates/parts/actual-section'); ?>
                </section>
            </div>
        </section>
        
        <?php get_template_part('templates/parts/comments-section'); ?>
    </main> 
<?php get_footer();
