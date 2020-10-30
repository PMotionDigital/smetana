<?php 
/* 
Template name:  Страница рубрики
*/
get_header(); ?>
    <main class="site-main">
        <?php get_template_part('templates/parts/sidebar'); ?>
        <section class="site-main_main-section main">
            <section class="rubrics section main_articles articles">
                <div class="section-head dis-flex justify-content-between">
                    <div><?php if( function_exists('kama_breadcrumbs') ) kama_breadcrumbs(' / '); ?></div>
                    <div>
                        <button type="button" class="icon-block calendar head_button">Период</button>
                        <button type="button" class="head_button button-sorting">Сортировка</button>
                    </div>
                </div>
                <ul class="articles_list">
                    <li class="articles_item article">
                        <div class="rubrics_info">
                            <h1 class="rubrics_parent-rubric">Название родительской рубрики</h1>
                            <h2 class="rubrics_current-rubric">Название внутренней рубрики</h2>
                            <p class="rubrics_desc">
                                Современная методология разработки позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач.
                                Не следует, однако, забывать, что социально-экономическое развитие в значительной степени обусловливает важность.
                            </p>
                        </div>
                        <div class="article_item-top dis-flex">
                            <span class="article_date">Сегодня 10.08.20 в 8:30</span>
                            <span class="icon-block views">888</span>
                            <div class="article_hashtags">
                                <a href="#" class="article_hashtag">#Автограф</a>
                            </div>
                        </div>
                        <a href="#" class="article_item-center">
                            <h3 class="article_title">В провинции никого не пугает гитарный перебор </h3>
                            <div class="article_desc">
                                Учитывая ключевые сценарии поведения, убеждённость некоторых оппонентов однозначно определяет каждого участника как способного.
                            </div>
                        </a>
                        <button type="button" class="button reply">Развернуть</button>
                        <div class="article_item-bottom dis-flex">
                            <button type="button" class="icon-block comments-icon">Комментировать</button>
                            <button type="button" class="icon-block like">Нравится</button>
                            <button type="button" class="icon-block blog-icon">В блог</button>
                            <button type="button" class="icon-block favorites">В избранное</button>
                        </div>
                    </li>
                    <li class="articles_item article">
                        <div class="article_item-top dis-flex">
                            <span class="article_date">Сегодня 10.08.20 в 8:30</span>
                            <span class="icon-block views">888</span>
                            <div class="article_hashtags">
                                <a href="#" class="article_hashtag">#Автограф</a>
                            </div>
                        </div>
                        <a href="#" class="article_item-center">
                            <h3 class="article_title">В провинции никого не пугает гитарный перебор </h3>
                            <div class="article_desc">
                                Учитывая ключевые сценарии поведения, убеждённость некоторых оппонентов однозначно определяет каждого участника как способного.
                            </div>
                        </a>
                        <button type="button" class="button reply">Развернуть</button>
                        <div class="article_item-bottom dis-flex">
                            <button type="button" class="icon-block comments-icon">Комментировать</button>
                            <button type="button" class="icon-block like">Нравится</button>
                            <button type="button" class="icon-block blog-icon">В блог</button>
                            <button type="button" class="icon-block favorites">В избранное</button>
                        </div>
                    </li>
                    <li class="articles_item article">
                        <div class="article_item-top dis-flex">
                            <span class="article_date">Сегодня 10.08.20 в 8:30</span>
                            <span class="icon-block views">888</span>
                            <div class="article_hashtags">
                                <a href="#" class="article_hashtag">#Автограф</a>
                            </div>
                        </div>
                        <a href="#" class="article_item-center">
                            <h3 class="article_title">В провинции никого не пугает гитарный перебор </h3>
                            <div class="article_desc">
                                Учитывая ключевые сценарии поведения, убеждённость некоторых оппонентов однозначно определяет каждого участника как способного.
                            </div>
                        </a>
                        <button type="button" class="button reply">Развернуть</button>
                        <div class="article_item-bottom dis-flex">
                            <button type="button" class="icon-block comments-icon">Комментировать</button>
                            <button type="button" class="icon-block like">Нравится</button>
                            <button type="button" class="icon-block blog-icon">В блог</button>
                            <button type="button" class="icon-block favorites">В избранное</button>
                        </div>
                    </li>
                    <li class="articles_item article">
                        <div class="article_item-top dis-flex">
                            <span class="article_date">Сегодня 10.08.20 в 8:30</span>
                            <span class="icon-block views">888</span>
                            <div class="article_hashtags">
                                <a href="#" class="article_hashtag">#Автограф</a>
                            </div>
                        </div>
                        <a href="#" class="article_item-center">
                            <h3 class="article_title">В провинции никого не пугает гитарный перебор </h3>
                            <div class="article_desc">
                                Учитывая ключевые сценарии поведения, убеждённость некоторых оппонентов однозначно определяет каждого участника как способного.
                            </div>
                        </a>
                        <button type="button" class="button reply">Развернуть</button>
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
        <?php get_template_part('templates/parts/comments-section'); ?>
    </main>
<?php get_footer(); ?>