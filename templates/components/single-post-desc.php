<div class="single-post_desc">
    <p>Источник: <a href="/" class="single-post_source">Сметана</a></p>
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
    <a href="#" class="single-post_author"><?php echo get_the_author_meta('display_name', get_the_author_ID()); ?></a>
</div>