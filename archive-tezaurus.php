<?php 
get_header(); ?>

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
                        <div class="thesaurus_recent recent">
                            <h2 class="recent_title">Недавно добавлены</h2>
                            <ul class="recent_list list dis-flex flex-wrap-wrap">
                            <?php
                                $posts = get_posts(array(
                                    'posts_per_page'	=> 18,
                                    'post_type'         => 'tezaurus'
                                ));

                                foreach ($posts as $post) {
                                    setup_postdata($post); ?>

                                <li class="recent_item item col-lg-4" data-word-id="<?php the_ID(); ?>">
                                    <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                                </li>
                            <?php    }
                                wp_reset_postdata();
                            ?>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section class="thesaurus_recent-views section">
                <div class="section-head">
                    <h2 class="head_title">Вы недавно смотрели</h2>
                </div>
                <?php
                echo $_COOKIE['viewedProd'];
                if ( $_COOKIE['viewedProd'] ){
                    // echo 'Вы просмотрели следующие посты:<br>';
                    foreach ($_COOKIE['viewedProd'] as $viewedProdId ){
                        $viewedProd = get_post( $viewedProdId );
                        get_template_part('templates/parts/post-element');
                    }
                    
                }
                
                ?>
                <ul>
                    <li class="interesting_item">
                        <div class="item-head dis-flex">
                            <a href="#"><h3 class="interesting_item-title">Учитывая </h3></a>
                            <span class="icon-block views">888</span>
                            <div class="article_hashtags">
                                <a href="#" class="article_hashtag">#Автограф</a>
                            </div>
                        </div>
                        <div class="interesting_item-desc">
                            Прежде всего, начало повседневной работы по формированию позиции не
                            оставляет шанса для системы обучения кадров, соответствующей.
                                </div>
                        <div class="article_item-bottom dis-flex">
                            <button type="button" class="icon-block comments-icon">Комментировать</button>
                            <button type="button" class="icon-block like">Нравится</button>
                            <button type="button" class="icon-block blog-icon">В блог</button>
                            <button type="button" class="icon-block favorites">В избранное</button>
                        </div>
                    </li>
                </ul>
            </section>
            
        </section>
        <section class="site-main_third-section third">
            <section class="third_ads">
                <img src="<?php bloginfo('template_url'); ?>/dist/img/ads-image.png">
            </section>
        </section>
    
<?php get_footer(); ?>