<?php
$post_thumbnail = get_query_var('thumbnail');
$ads = get_field('реклама');
$post_image = get_the_post_thumbnail_url();
        if($ads && $ads == 'true'){
            $className = 'article--ads';
        } else {
            $className = '';
        } ?>
        <li class="articles_item article <?php echo $className; ?>">
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
                <span class="article_date"><?php echo $date; the_time('j F в H:i'); ?></span>
                <span class="icon-block views">888</span>
                <?php $tags = wp_get_post_tags($post->ID); 
                if($tags):
                    $max_count = 2; ?>
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
                <button type="button" class="article_button-print" aria-label="Распечатать">
                    <img src="<?php bloginfo('template_url'); ?>/dist/img/icons/print.svg">
                </button>
            </div>
            <a href="<?php the_permalink(); ?>" class="article_item-center">
                <h3 class="article_title"><?php the_title(); ?> </h3>
                <div class="article_desc"><?php the_excerpt(); ?></div>
                <?php if(has_post_thumbnail()): ?>
                    <?php if(!$post_thumbnail == 'none') { ?>
                        <div class="article_image">
                            <img src="<?php echo $post_image; ?>" alt="<?php the_title(); ?>">s
                        </div>
                        <?php } ?>
                <?php endif; ?>
            </a>
            <button type="button" class="button yellow ads-button">Ознакомиться</button>
            <?php if(in_category('novosti')): ?>
                <button type="button" class="button reply">Развернуть</button>
            <?php endif; ?>
            <div class="article_item-bottom dis-flex">
                <button type="button" class="icon-block comments-icon">Комментировать</button>
                <button type="button" class="icon-block like">Нравится</button>
                <button type="button" class="icon-block blog-icon">В блог</button>
                <button type="button" class="icon-block favorites">В избранное</button>
            </div>
        </li>