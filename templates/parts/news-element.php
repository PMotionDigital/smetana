<li class="news_item">
    <a href="<?php the_permalink(); ?>" class="dis-flex">
        <div class="news_item-date"><?php echo $date; the_time('H:i'); ?></div>
        <h3 class="news_item-title"><?php the_excerpt(); ?></h3>
    </a>
</li>