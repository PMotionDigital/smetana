<?php 
/* 
Template name:  Страница блоги
*/
get_header(); ?>
    
    
    
    <section class="site-main_main-section main">
        <section class="main_blogs">
            <div class="section">
                <div class="section-head dis-flex justify-content-between">
                    <div><?php if( function_exists('kama_breadcrumbs') ) kama_breadcrumbs(' / '); ?></div>
                    <div>
                        <button type="button" class="icon-block calendar head_button">Период</button>
                        <button type="button" class="head_button button-sorting">Сортировка</button>
                    </div>
                </div>
                <div class="main_blogs-desc">
                    <h1 class="main_blogs-title"><?php echo the_title(); ?></h1>
                    <div class="main_blogs-info">
                        Найдите единомышленников, <a href="#">опубликовав свой дневник,</a> или начните
                        продвигать бизнес, <a href="#">создав блог компании</a>.
                    </div>
                </div>
            </div>
            <ul class="main_blogs-list">
                <li class="main_blogs-item blog-element section">
                    <div class="article_item-top dis-flex">
                        <div class="blog-element_author dis-flex col-lg-5">
                            <img src="/wp-content/themes/smetana/dist/img/avatar.png">
                            <span class="name">Александр Фадеев</span>
                        </div>
                        <span class="article_date">Сегодня 10.08.20 в 8:30</span>
                        <span class="icon-block views">888</span>
                        <div class="article_hashtags">
                            <a href="#" class="article_hashtag">#Автограф</a>
                        </div>
                    </div>
                    <a href="#" class="article_item-center">
                        <div class="article_desc">
                            <h3 class="article_title">В провинции никого не пугает гитарный перебор </h3>
                            Учитывая ключевые сценарии поведения, убеждённость некоторых оппонентов однозначно определяет каждого участника как способного.
                        </div>
                    </a>
                    <div class="article_item-bottom dis-flex">
                        <button type="button" class="icon-block comments-icon">Комментировать</button>
                        <button type="button" class="icon-block like">Нравится</button>
                        <button type="button" class="icon-block blog-icon">В блог</button>
                        <button type="button" class="icon-block favorites">В избранное</button>
                    </div>
                </li>
                <li class="main_blogs-item blog-element blog-element--image section">
                    <div class="article_item-top dis-flex">
                        <div class="blog-element_author dis-flex col-lg-5">
                            <img src="/wp-content/themes/smetana/dist/img/avatar.png">
                            <span class="name">Александр Фадеев</span>
                        </div>
                        <span class="article_date">Сегодня 10.08.20 в 8:30</span>
                        <span class="icon-block views">888</span>
                        <div class="article_hashtags">
                            <a href="#" class="article_hashtag">#Автограф</a>
                        </div>
                    </div>
                    <a href="#" class="article_item-center">
                        <div class="article_thumbnail">
                            <img src="<?php bloginfo('template_url'); ?>/dist/img/article-image.png">
                        </div>
                        <div class="article_desc">
                            <h3 class="article_title">В провинции никого не пугает гитарный перебор </h3>
                            Учитывая ключевые сценарии поведения, убеждённость некоторых оппонентов однозначно определяет каждого участника как способного.
                        </div>
                    </a>
                    <div class="article_item-bottom dis-flex">
                        <button type="button" class="icon-block comments-icon">Комментировать</button>
                        <button type="button" class="icon-block like">Нравится</button>
                        <button type="button" class="icon-block blog-icon">В блог</button>
                        <button type="button" class="icon-block favorites">В избранное</button>
                    </div>
                </li>
                <li class="main_blogs-item blog-element blog-element--image section">
                    <div class="article_item-top dis-flex">
                        <div class="blog-element_author dis-flex col-lg-5">
                            <img src="/wp-content/themes/smetana/dist/img/avatar.png">
                            <span class="name">Александр Фадеев</span>
                        </div>
                        <span class="article_date">Сегодня 10.08.20 в 8:30</span>
                        <span class="icon-block views">888</span>
                        <div class="article_hashtags">
                            <a href="#" class="article_hashtag">#Автограф</a>
                        </div>
                    </div>
                    <a href="#" class="article_item-center">
                        <div class="article_thumbnail">
                            <img src="<?php bloginfo('template_url'); ?>/dist/img/article-image.png">
                        </div>
                        <div class="article_desc">
                            <h3 class="article_title">В провинции никого не пугает гитарный перебор </h3>
                            Учитывая ключевые сценарии поведения, убеждённость некоторых оппонентов однозначно определяет каждого участника как способного.
                        </div>
                    </a>
                    <div class="article_item-bottom dis-flex">
                        <button type="button" class="icon-block comments-icon">Комментировать</button>
                        <button type="button" class="icon-block like">Нравится</button>
                        <button type="button" class="icon-block blog-icon">В блог</button>
                        <button type="button" class="icon-block favorites">В избранное</button>
                    </div>
                </li>
                <li class="main_blogs-item blog-element section">
                    <div class="article_item-top dis-flex">
                        <div class="blog-element_author dis-flex col-lg-5">
                            <img src="/wp-content/themes/smetana/dist/img/avatar.png">
                            <span class="name">Александр Фадеев</span>
                        </div>
                        <span class="article_date">Сегодня 10.08.20 в 8:30</span>
                        <span class="icon-block views">888</span>
                        <div class="article_hashtags">
                            <a href="#" class="article_hashtag">#Автограф</a>
                        </div>
                    </div>
                    <a href="#" class="article_item-center">
                        <div class="article_desc">
                            <h3 class="article_title">В провинции никого не пугает гитарный перебор </h3>
                            Учитывая ключевые сценарии поведения, убеждённость некоторых оппонентов однозначно определяет каждого участника как способного.
                        </div>
                    </a>
                    <div class="article_item-bottom dis-flex">
                        <button type="button" class="icon-block comments-icon">Комментировать</button>
                        <button type="button" class="icon-block like">Нравится</button>
                        <button type="button" class="icon-block blog-icon">В блог</button>
                        <button type="button" class="icon-block favorites">В избранное</button>
                    </div>
                </li>
                <li class="main_blogs-item blog-element section">
                    <div class="article_item-top dis-flex">
                        <div class="blog-element_author dis-flex col-lg-5">
                            <img src="/wp-content/themes/smetana/dist/img/avatar.png">
                            <span class="name">Александр Фадеев</span>
                        </div>
                        <span class="article_date">Сегодня 10.08.20 в 8:30</span>
                        <span class="icon-block views">888</span>
                        <div class="article_hashtags">
                            <a href="#" class="article_hashtag">#Автограф</a>
                        </div>
                    </div>
                    <a href="#" class="article_item-center">
                        <div class="article_desc">
                            <h3 class="article_title">В провинции никого не пугает гитарный перебор </h3>
                            Учитывая ключевые сценарии поведения, убеждённость некоторых оппонентов однозначно определяет каждого участника как способного.
                        </div>
                    </a>
                    <div class="article_item-bottom dis-flex">
                        <button type="button" class="icon-block comments-icon">Комментировать</button>
                        <button type="button" class="icon-block like">Нравится</button>
                        <button type="button" class="icon-block blog-icon">В блог</button>
                        <button type="button" class="icon-block favorites">В избранное</button>
                    </div>
                </li>
                <li class="main_blogs-item blog-element section">
                    <div class="article_item-top dis-flex">
                        <div class="blog-element_author dis-flex col-lg-5">
                            <img src="/wp-content/themes/smetana/dist/img/avatar.png">
                            <span class="name">Александр Фадеев</span>
                        </div>
                        <span class="article_date">Сегодня 10.08.20 в 8:30</span>
                        <span class="icon-block views">888</span>
                        <div class="article_hashtags">
                            <a href="#" class="article_hashtag">#Автограф</a>
                        </div>
                    </div>
                    <a href="#" class="article_item-center">
                        <div class="article_desc">
                            <h3 class="article_title">В провинции никого не пугает гитарный перебор </h3>
                            Учитывая ключевые сценарии поведения, убеждённость некоторых оппонентов однозначно определяет каждого участника как способного.
                        </div>
                    </a>
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
        <?php get_template_part('templates/parts/blogs-section'); ?>
    </section>


<?php get_footer(); ?>