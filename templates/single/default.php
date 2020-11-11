<section class="single-post">
   <section class="section single-post_content">
        <div class="single-post_header section-head dis-flex justify-content-between article_item-top">
            <div><?php
                // if ( function_exists('yoast_breadcrumb') ) {
                // yoast_breadcrumb( '<p id="breadcrumbs">','</p>' );
                // }
                if(!in_category('novosti') && !in_category('stati')){ ?>
                    <div class="kama_breadcrumbs">
                        <span>
                            <a href="/">Главная /</a>
                        </span>
                        <span>
                            <?php $cat_id = get_cat_ID('Статьи'); 
                            $cat_link = get_category_link($cat_id); ?>
                            <a href="<?php echo $cat_link; ?>"> Статьи</a>
                        </span>
                    </div>
                <?php } elseif ( function_exists('yoast_breadcrumb')) {
                    yoast_breadcrumb( '<p id="breadcrumbs">','</p>' );
                } ?>
            </div>
            <button type="button" class="article_button-print" aria-label="Распечатать">
                <img class="default" src="<?php bloginfo('template_url'); ?>/dist/img/icons/print.svg">
                <img class="hover" src="<?php bloginfo('template_url'); ?>/dist/img/icons/print-hover.svg">
            </button>
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
            <span class="article_date"><?php echo $date; the_time(' в H:i j F'); ?></span>
            <span class="icon-block views"><?php do_action( 'pageviews' ); ?></span>
        </div>
        
        <?php if(has_post_thumbnail()): ?>
            <div class="article_image">
                <?php the_post_thumbnail(); ?>
            </div>
        <?php endif; ?>

        <?php the_content(); ?>
        <div class="single-post_desc">
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
        </div>
        <!-- <div class="article_item-bottom dis-flex">
            <button type="button" class="icon-block like">Нравится</button>
            <button type="button" class="icon-block blog-icon">В блог</button>
            <button type="button" class="icon-block favorites">В избранное</button>
        </div> -->
    </section>

    <?php //comments_template('/templates/single/comments.php'); ?>
    
    <?php 
   
    $orig_post = $post;
    $tags = wp_get_post_tags($post->ID);
       
    if ($tags):
      $tag_ids = array();
      foreach($tags as $individual_tag): 
        $tag_ids[] = $individual_tag->term_id;
      endforeach;

      $args=array(
        'tag__in' => $tag_ids,
        'post__not_in' => array($post->ID),
        'posts_per_page'=>3, // Number of related posts to display.
        'ignore_sticky_posts'=>1
      );
       
      $my_query = new wp_query( $args );
     
    if( $my_query->have_posts() ):?>
    <section class="section single-post_interesting interesting">
        <div class="section-head dis-flex justify-content-between">
            <p class="head_title">Вам может быть интересно</p>
        </div>
        <div class="section-content">
            <ul class="interesting_list">
                <?php while($my_query->have_posts()):$my_query->the_post(); ?>
                    <li class="interesting_item">
                        <div class="item-head dis-flex">
                            <a href="<?php the_permalink(); ?>">
                                <h2 class="interesting_item-title"><?php the_title(); ?> </h2>
                            </a>
                            <span class="icon-block views"><?php do_action( 'pageviews' ); ?></span>
                            <?php $tags = wp_get_post_tags($post->ID); 
                            if($tags):
                                $max_count = 1; ?>
                            <div class="article_hashtags">
                                <?php foreach($tags as $count => $tag): 
                                $link = get_term_link($tag->term_id); 
                                    if($count < $max_count):?>
                                    <a href="<?php echo $link; ?>" class="article_hashtag"><?php echo '#'.$tag->name; ?></a>
                                    <?php 
                                    endif;
                                endforeach; ?>
                            </div>
                            <?php endif; ?>
                        </div>
                        <div class="interesting_item-desc"><?php the_excerpt(); ?></div>
                        <!-- <div class="article_item-bottom dis-flex">
                            <button type="button" class="icon-block comments-icon">Комментировать</button>
                            <button type="button" class="icon-block like">Нравится</button>
                            <button type="button" class="icon-block blog-icon">В блог</button>
                            <button type="button" class="icon-block favorites">В избранное</button>
                        </div> -->
                    </li>
                <?php endwhile; wp_reset_postdata(); ?>
            </ul>
            <!-- <button type="button" class="icon-block undo interesting_button">Загрузить ещё</button> -->
            <?php echo do_shortcode('[ajax_load_more loading_style="white" container_type="ul" repeater="repeater2" post_type="post" posts_per_page="3" pause="true" scroll="false" button_label="Загрузить ещё"]') ?>
        </div>
    </section>
    <?php 
    endif;
endif; ?>
</section>
