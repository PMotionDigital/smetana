<?php get_header(); ?>
 
            <?php if(in_category('stati')): ?>
                <a href="#" class="category_ads full-center">
                    <img src="<?php bloginfo('template_url'); ?>/dist/img/ads-block.png">
                </a>
            <?php endif; ?>
                <?php if(!in_category('novosti') && !in_category('stati')):
                    get_template_part('templates/category/rubrics');
                else:
                    get_template_part('templates/category/default');
                endif; ?>
                <section class="site-main_third-section third">
                    <section class="third_ads">
                        <img src="<?php bloginfo('template_url'); ?>/dist/img/ads-image.png">
                    </section>

                    <?php if(in_category('stati')): ?>
                    <!-- <div class="info-reg section">
                        <p>Зарегистрируйтесь и получите <br>
                            больше возможностей</p>
                        <button type="button" class="button yellow">Зарегистрироваться</button>
                    </div> -->
                    <?php endif; ?>

                    <?php get_template_part('templates/parts/actual-section'); ?>
                </section>
 
<?php get_footer();
