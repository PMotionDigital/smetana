<?php get_header(); ?>
 
            <?php if(in_category('stati')): ?>
                <a href="#" class="category_ads full-center">
                    <img src="<?php bloginfo('template_url'); ?>/dist/img/ads-block.png">
                </a>
            <?php endif; ?>
            <?php 
$categories = get_the_category();
$category_id = $categories[0]->cat_ID;
if(have_posts()): ?>

<section class="main_articles articles section default-category">
    <ul class="articles_list">
        <?php 
        if(in_category('novosti')) {
            set_query_var('thumbnail', 'none');
        }
        while(have_posts()): the_post(); 
            get_template_part('templates/parts/post-element');
        endwhile; ?>
        <?php //if(in_category('stati')): ?>
        <!-- <li class="info-reg section">
            <p>Зарегистрируйтесь и получите <br>
                больше возможностей</p>
            <button type="button" class="button yellow">Зарегистрироваться</button>
        </li> -->
        <?php //endif; ?>
    </ul>
</section>
<?php endif; ?>
                <section class="site-main_third-section third no-print">
                    <section class="third_ads no-print">
                        <img class="no-print" src="<?php bloginfo('template_url'); ?>/dist/img/ads-image.png">
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
