<li class="interesting_item">
    <div class="item-head dis-flex">
        <a href="<?php the_permalink(); ?>">
            <h2 class="interesting_item-title"><?php the_title(); ?> </h2>
        </a>
        <span class="icon-block views"><?php echo get_post_meta($post->ID, 'просмотры', true); ?></span>
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
    <div class="article_item-bottom dis-flex">
        <button type="button" class="icon-block comments-icon">Комментировать</button>
        <button type="button" class="icon-block like">Нравится</button>
        <button type="button" class="icon-block blog-icon">В блог</button>
        <button type="button" class="icon-block favorites">В избранное</button>
    </div>
</li>