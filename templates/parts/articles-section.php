<?php 
$cat = get_category_by_slug('stati');
$args = array(
    'post_type' => 'post',
    'numberposts' => 10,
    'category' => $cat->term_id
);
$posts = get_posts($args);
if($posts): ?>
<section class="main_articles articles section">
    <div class="section-head main-head dis-flex justify-content-between">
        <h2 class="head_title">Статьи</h2>
        <div>
            <button type="button" class="icon-block calendar head_button">Период</button>
            <button type="button" class="head_button button-sorting" data-sorting>Сортировка</button>
        </div>
        <?php get_template_part('templates/components/sorting'); ?>
    </div>
    <ul class="articles_list">
        <?php foreach($posts as $post): setup_postdata($post);
        get_template_part('templates/parts/post-element');
        endforeach; wp_reset_postdata(); ?>
    </ul>
</section>
<?php endif; ?>