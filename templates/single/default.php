<section class="single-post">
   <section class="section single-post_content">
        <div class="single-post_header section-head dis-flex justify-content-between article_item-top">
            <div><?php if( function_exists('kama_breadcrumbs') ) kama_breadcrumbs(' / '); ?></div>
            <button type="button" class="article_button-print" aria-label="Распечатать">
                <img src="<?php bloginfo('template_url'); ?>/dist/img/icons/print.svg">
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
            <span class="icon-block views">888</span>
        </div>
        <div class="article_image"><?php the_post_thumbnail(); ?></div>

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
            <span class="single-post_author"><?php echo get_the_author_meta('display_name', $author_id); ?></span>
        </div>
        <div class="article_item-bottom dis-flex">
            <button type="button" class="icon-block like">Нравится</button>
            <button type="button" class="icon-block blog-icon">В блог</button>
            <button type="button" class="icon-block favorites">В избранное</button>
        </div>
    </section>

    <section class="section single-post_comments">
        <div class="section-head dis-flex justify-content-between">
            <p class="head_title">Комментарии</p>
        </div>
        <div class="section-content">
            <p class="single-post_comments-none">Под этой статьей комментарии остутствуют</p>
            <!-- <div class="comments_item comment">
                <div class="comment_author">
                    <div class="comment_avatar">
                        <img src="/wp-content/themes/smetana/dist/img/avatar.png">
                    </div>
                    <div class="dis-flex flex-direction-col justify-content-between">
                        <div class="comment_name">Иванов Иван</div>
                        <div class="comment_date">15 минут назад</div>
                    </div>
                </div>
                <div class="comment_text">
                    Следует отметить, что убеждённость некоторых оппонентов предполагает независимые 
                    способы реализации модели развития.
                </div>
                <button type="button" class="button reply">Ответ</button>
            </div>
            <div class="comments_item comment">
                <div class="comment_author">
                    <div class="comment_avatar">
                        <img src="/wp-content/themes/smetana/dist/img/avatar.png">
                    </div>
                    <div class="dis-flex flex-direction-col justify-content-between">
                        <div class="comment_name">Иванов Иван</div>
                        <div class="comment_date">15 минут назад</div>
                    </div>
                </div>
                <div class="comment_text">
                    Следует отметить, что убеждённость некоторых оппонентов предполагает независимые 
                    способы реализации модели развития.
                </div>
                <button type="button" class="button reply">Ответ</button>
            </div> -->
            <div class="single-post_comments-info">
                <p>Комментарии могут оставлять только зарегистрированные
                пользователи, пожалуйста, <a href="#" class="button reply">авторизуйтесь</a></p>
            </div>
        </div>
    </section>
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
        'caller_get_posts'=>1
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
                            <h2 class="interesting_item-title"><?php the_title(); ?> </h2>
                            <span class="icon-block views">888</span>
                        </div>
                        <div class="interesting_item-desc"><?php the_excerpt(); ?></div>
                        <button type="button" class="icon-block comments-icon">Комментировать</button>
                    </li>
                <?php endwhile; wp_reset_postdata(); ?>
            </ul>
            <button type="button" class="icon-block undo interesting_button">Загрузить ещё</button>
        </div>
    </section>
    <?php 
    endif;
endif; ?>
</section>
