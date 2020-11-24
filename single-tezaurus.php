<?php 
global $post;
get_header(); 
?>

<section class="site-main_main-section main">
    <section class="main-thesaurus thesaurus section">
        <div class="section-head dis-flex justify-content-between">
            <h1 class="head_title">Тезаурус</h1>
            <input class="thesaurus_search col-lg-7" type="text" placeholder="Введите термин" name="thesaurus-search">
        </div>
        <div class="thesaurus_content">
        <?php 
        $alphabet = array('а','б','в','г','д','е','ё','ж','з','и','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','щ','э','ю','я');
        $current = true;
        ?>
            <ul class="thesaurus_letters letters dis-flex flex-wrap-wrap">
            <?php foreach($alphabet as $let): ?>
                <li>
                    <button 
                    type="button" 
                    class="letter" data-letter="<?php echo $let; ?>">
                        <?php echo $let; ?>
                    </button>
                </li>
            <?php endforeach; ?>
            </ul>
            <div class="changable-container">
            <div class="thesaurus_word">
                <?php the_content() ?>
            </div>
            </div>
        </div>
    </section>
    
    <section class="thesaurus_articles">
        <div class="section-head">
            <h2 class="head_title">Статьи по теме</h2>
        </div>
        <ul>
        <?php
                // args

            $cur_post = $post->ID;

            $args = array(
                'numberposts'	=> -1,
                'post_type'		=> 'post',
                'meta_query'    => array (
                    'relation'  => 'AND',
                    array(
                        'key'   => 'тезаурус',
                        'value' => $cur_post,
                        'compare' => 'LIKE'
                    )
                )
            );


            // query
            $the_query = new WP_Query( $args );

            ?>
            <?php if( $the_query->have_posts() ): ?>
                
                <?php while( $the_query->have_posts() ) :
                    $the_query->the_post(); 
                    set_query_var('thumbnail', 'none');
                    get_template_part( 'templates/parts/post-element');
                endwhile; ?>
                
            <?php endif; ?>

            <?php wp_reset_query();
        ?>
        </ul>
    </section>
    
</section>
<section class="site-main_third-section third no-print">
    <section class="third_ads">
        <img src="<?php bloginfo('template_url'); ?>/dist/img/ads-image.png">
    </section>
</section>
    
<?php get_footer(); ?>