<?php 

$categories = get_the_category();
foreach($categories as $category) {
    $category_id = $category->cat_ID;
}

if(have_posts()): ?>
    <section class="site-main_main-section main">
        <section class="rubrics section main_articles articles"
        data-post-container
    data-tax-id="<?php echo get_queried_object()->term_id; ?>"
    data-tax="<?php echo get_queried_object()->taxonomy; ?>"
    data-page-id="1">
        
            <div class="section-head dis-flex justify-content-between">
                <div class="kama_breadcrumbs">
                    <span>
                        <a href="/">Главная /</a>
                    </span>
                    <span>
                        <a href="<?php echo get_permalink(get_page_by_title('Рубрикатор')); ?>"> Рубрикатор</a>
                    </span>
                </div>
                <?php get_template_part('templates/components/sorting-buttons'); ?>
                <?php get_template_part('templates/components/sorting'); ?>
            </div>
            <div class="rubrics_info">
                <?php if(get_queried_object()->parent): ?>
                <h1 class="rubrics_parent-rubric">
                    <?php echo get_cat_name(get_queried_object()->parent); ?>
                </h1>
                <?php endif; ?>
                <h2 class="rubrics_current-rubric"><?php echo single_cat_title(); ?></h2>
                <p class="rubrics_desc">
                    Современная методология разработки позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач.
                    Не следует, однако, забывать, что социально-экономическое развитие в значительной степени обусловливает важность.
                </p>
            </div>
            <ul class="articles_list" data-list>
                <?php 
                if(!in_category('stati')){
                    set_query_var('thumbnail', 'none');
                }
                while(have_posts()): the_post(); 
                    get_template_part('templates/parts/post-element');
                endwhile; ?>
            </ul>
        </section>
    </section>
<?php endif; ?>