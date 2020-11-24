<?php 
$args = array(
    'post_type' => 'post',
    'numberposts' =>  get_option('posts_per_page'),
    'category__not_in' => array(7)
);
$posts = get_posts($args);
if($posts): ?>
<section class="main_articles articles section"
    data-post-container
    data-tax-id=""
    data-tax="page-stati"
    data-page-id="1"
    data-order="date">
    <div class="section-head main-head dis-flex justify-content-between">
        <h2 class="head_title">Статьи</h2>
        <?php get_template_part('templates/components/sorting-buttons'); ?>
        <?php get_template_part('templates/components/sorting'); ?>
    </div>
    <ul class="articles_list" data-list>
        <?php foreach($posts as $post): setup_postdata($post);
        get_template_part('templates/parts/post-element');
        endforeach; wp_reset_postdata(); ?>
    </ul>
</section>
<?php endif; ?>