<section class="single-post" data-post="<?php echo get_the_ID(); ?>">
   <section class="section single-post_content">
        <div class="single-post_header section-head dis-flex justify-content-between article_item-top no-print">
            <?php if ( function_exists('yoast_breadcrumb')) {
                    yoast_breadcrumb( '<p id="breadcrumbs">','</p>' );
                } ?>
            <a href="javascript:(print());" class="article_button-print" aria-label="Распечатать">
                <img class="default" src="<?php bloginfo('template_url'); ?>/dist/img/icons/print.svg">
                <img class="hover" src="<?php bloginfo('template_url'); ?>/dist/img/icons/print-hover.svg">
            </a>
        </div>
        <h1 class="single-post_title"><?php the_title(); ?></h1>
        <div class="article_item-top dis-flex">
            <?php 
            if ( get_the_time( 'Yd' ) === current_time( 'Yd' ) ) {
                $date = 'Сегодня ';
            } else if(get_the_time('Yd') == current_time('Yd') - 1) {
                $date = 'Вчера ';
            } else {
                $date = '';
            }
            ?>
            <span class="article_date"><?php echo $date; the_time('j F Y в H:i '); ?></span>
            <span class="icon-block views"><?php echo get_post_meta($post->ID, 'просмотры', true); ?></span>
        </div>
        <?php get_template_part('templates/components/share'); ?>
        <?php if(has_post_thumbnail()): ?>
            <div class="article_image">
                <?php the_post_thumbnail(); ?>
            </div>
        <?php endif; ?>

        <?php the_content(); ?>
        <?php get_template_part('templates/components/single-post-desc'); ?>
        <!-- <div class="single-post_desc">
            <p>Источник: <span class="single-post_source">Сметана</span></p>
                <?php $tags = wp_get_post_tags($post->ID); 
                if($tags):
                // $max_count = 2; ?>
                <div class="article_hashtags">
                    <?php foreach($tags as $count => $tag): 
                    $link = get_term_link($tag->term_id); 
                        //if($count < $max_count):?>
                        <a href="<?php echo $link; ?>" class="article_hashtag"><?php echo '#'.$tag->name; ?></a>
                        <?php 
                        //endif;
                    endforeach; ?>
                </div>
                <?php endif; ?>
            <span class="single-post_author"><?php echo get_the_author_meta('display_name', get_the_author_ID()); ?></span>
        </div> -->
        <div class="article_item-bottom dis-flex">
            <button type="button" class="icon-block comments-icon">Комментировать</button>
            <button type="button" class="icon-block like">Нравится</button>
            <button type="button" class="icon-block blog-icon">В блог</button>
            <button type="button" class="icon-block favorites">В избранное</button>
        </div>
    </section>

    <?php comments_template('/templates/single/comments.php'); ?>
    
    <?php 
   
    $orig_post = $post;
    $tags = wp_get_post_tags($post->ID);
       
    if ($tags):
      $tag_ids = array();
      $id_string= '';
      foreach($tags as $individual_tag): 
        $tag_ids[] = $individual_tag->term_id;
        $id_string .= $individual_tag->term_id .',';
      endforeach;

      $args=array(
        'tag__in' => $tag_ids,
        'post__not_in' => array($post->ID),
        'posts_per_page'=>3, // Number of related posts to display.
        'ignore_sticky_posts'=>1
      );
       
      $my_query = new wp_query( $args );
     
    if( $my_query->have_posts() ):?>
    <section class="section single-post_interesting interesting no-print"
        
        data-tax-id="<?php echo $id_string; ?>"
        data-tax="post_tag"
        data-page-id="1"
        data-template="interesting-element"
        data-order="date">
        <div class="section-head dis-flex justify-content-between">
            <p class="head_title">Вам может быть интересно</p>
        </div>
        <div class="section-content">
            <ul class="interesting_list" data-list>
                <?php while($my_query->have_posts()):$my_query->the_post(); ?>
                    <?php get_template_part('templates/parts/interesting-element'); ?>
                <?php endwhile; wp_reset_postdata(); ?>
            </ul>
            <!-- <button type="button" class="icon-block undo interesting_button" data-load-more>Загрузить ещё</button> -->
        </div>
    </section>
    <?php 
    endif;
endif; ?>
</section>
