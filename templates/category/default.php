<?php 
$categories = get_the_category();
$category_id = $categories[0]->cat_ID;
if(have_posts()): ?>

<section class="main_articles articles section default-category" 
    data-post-container
    data-tax-id="<?php echo get_queried_object()->term_id; ?>"
    data-tax="<?php echo get_queried_object()->taxonomy; ?>"
    data-page-id="1"
    data-order="date">
    <div class="section-head main-head dis-flex justify-content-between">
        <h2 class="head_title"><?php echo single_cat_title(); ?></h2>
        <?php get_template_part('templates/components/sorting-buttons'); ?>
        <?php get_template_part('templates/components/sorting'); ?>
    </div>
    <ul class="articles_list" data-list>
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