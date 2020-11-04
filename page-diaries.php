<?php 
/* 
Template name:  Страница дневники
*/
get_header(); ?>

<section class="site-main_main-section main">
    <section class="diaries">
        <div class="diaries_head">
            <div class="section-head dis-flex justify-content-between">
                <div><?php if( function_exists('kama_breadcrumbs') ) kama_breadcrumbs(' / '); ?></div>
                <div>
                    <button type="button" class="icon-block calendar head_button">Период</button>
                    <button type="button" class="head_button button-sorting">Сортировка</button>
                </div>
            </div>
            <div class="diaries_desc">
                <h1 class="diaries_title"><?php echo the_title(); ?></h1>
                <div class="diaries_info">
                    Создать дневник можно в личном кабинете, для этого необходимо зарегистрироваться
                </div>
            </div>
        </div>
        <ul class="diaries_list">
            <li class="diaries_item">
                <div class="diaries_item-top dis-flex justify-content-between align-items-center">
                    <div class="diaries_item-author dis-flex">
                        <div class="diaries_item-avatar">
                            <img src="/wp-content/themes/smetana/dist/img/diary-avatar.png">
                        </div>
                        <p class="diaries_item-name">Александр Фадеев</p>
                    </div>
                    <span class="diaries_item-date">Сегодня 10.08.20 в 8:30</span>
                </div>
                <a href="#" class="diaries_item-center">
                    <h2 class="diaries_item-title">Сложно сказать, почему жизнь прекрасна</h2>
                    <p class="diaries_item-desc">
                        Ясность нашей позиции очевидна: убеждённость некоторых оппонентов требует анализа 
                        дальнейших направлений развития.
                    </p>
                    <div class="diaries_item-image">
                        <img src="<?php bloginfo('template_url'); ?>/dist/img/article-image.png">
                    </div>
                </a>
                <div class="diaries_item-bottom dis-flex justify-content-between">
                    <div class="buttons dis-flex">
                        <button type="button" class="icon-block comments-icon" aria-label="Комментировать"></button>
                        <button type="button" class="icon-block like" aria-label="Нравится"></button>
                        <button type="button" class="icon-block favorites" aria-label="В избранное"></button>
                    </div>
                    <div class="dis-flex align-items-center">
                        <a href="#" class="diaries_hashtag hashtag">#Lorem ipsum</a>
                        <span class="icon-block views">888</span>
                    </div>
                </div>
            </li>
            <li class="diaries_item">
                <div class="diaries_item-top dis-flex justify-content-between align-items-center">
                    <div class="diaries_item-author dis-flex">
                        <div class="diaries_item-avatar">
                            <img src="/wp-content/themes/smetana/dist/img/diary-avatar.png">
                        </div>
                        <p class="diaries_item-name">Александр Фадеев</p>
                    </div>
                    <span class="diaries_item-date">Сегодня 10.08.20 в 8:30</span>
                </div>
                <a href="#" class="diaries_item-center">
                    <h2 class="diaries_item-title">Сложно сказать, почему жизнь прекрасна</h2>
                    <p class="diaries_item-desc">
                        Ясность нашей позиции очевидна: убеждённость некоторых оппонентов требует анализа 
                        дальнейших направлений развития.
                    </p>
                    <!-- <div class="diaries_item-image">
                        <img src="<?php bloginfo('template_url'); ?>/dist/img/article-image.png">
                    </div> -->
                </a>
                <div class="diaries_item-bottom dis-flex justify-content-between">
                    <div class="buttons dis-flex">
                        <button type="button" class="icon-block comments-icon" aria-label="Комментировать"></button>
                        <button type="button" class="icon-block like" aria-label="Нравится"></button>
                        <button type="button" class="icon-block favorites" aria-label="В избранное"></button>
                    </div>
                    <div class="dis-flex align-items-center">
                        <a href="#" class="diaries_hashtag hashtag">#Lorem ipsum</a>
                        <span class="icon-block views">888</span>
                    </div>
                </div>
            </li>
            <li class="articles_item article article--ads">
                <div class="article_item-top dis-flex">
                    <div class="article_hashtags">
                        <a href="#" class="article_hashtag">#Реклама</a>
                    </div>
                </div>
                <a href="#" class="article_item-center">
                    <h3 class="article_title">Добрая половина выводов стала доступной ширнармассам</h3>
                    <div class="article_desc">
                        <p>Предприниматели в сети интернет будут объявлены нарушающими общечеловеческие нормы этики и морали.</p>
                    </div>
                </a>
                <button type="button" class="button yellow ads-button">Ознакомиться</button>
            </li>
            <li class="diaries_item">
                <div class="diaries_item-top dis-flex justify-content-between align-items-center">
                    <div class="diaries_item-author dis-flex">
                        <div class="diaries_item-avatar">
                            <img src="/wp-content/themes/smetana/dist/img/diary-avatar.png">
                        </div>
                        <p class="diaries_item-name">Александр Фадеев</p>
                    </div>
                    <span class="diaries_item-date">Сегодня 10.08.20 в 8:30</span>
                </div>
                <a href="#" class="diaries_item-center">
                    <h2 class="diaries_item-title">Сложно сказать, почему жизнь прекрасна</h2>
                    <p class="diaries_item-desc">
                        Ясность нашей позиции очевидна: убеждённость некоторых оппонентов требует анализа 
                        дальнейших направлений развития.
                    </p>
                    <div class="diaries_item-image">
                        <img src="<?php bloginfo('template_url'); ?>/dist/img/article-image.png">
                    </div>
                </a>
                <div class="diaries_item-bottom dis-flex justify-content-between">
                    <div class="buttons dis-flex">
                        <button type="button" class="icon-block comments-icon" aria-label="Комментировать"></button>
                        <button type="button" class="icon-block like" aria-label="Нравится"></button>
                        <button type="button" class="icon-block favorites" aria-label="В избранное"></button>
                    </div>
                    <div class="dis-flex align-items-center">
                        <a href="#" class="diaries_hashtag hashtag">#Lorem ipsum</a>
                        <span class="icon-block views">888</span>
                    </div>
                </div>
            </li>
            <li class="info-reg section">
                <p>Зарегистрируйтесь и получите <br>
                    больше возможностей</p>
                <button type="button" class="button yellow">Зарегистрироваться</button>
            </li>
            <li class="diaries_item">
                <div class="diaries_item-top dis-flex justify-content-between align-items-center">
                    <div class="diaries_item-author dis-flex">
                        <div class="diaries_item-avatar">
                            <img src="/wp-content/themes/smetana/dist/img/diary-avatar.png">
                        </div>
                        <p class="diaries_item-name">Александр Фадеев</p>
                    </div>
                    <span class="diaries_item-date">Сегодня 10.08.20 в 8:30</span>
                </div>
                <a href="#" class="diaries_item-center">
                    <h2 class="diaries_item-title">Сложно сказать, почему жизнь прекрасна</h2>
                    <p class="diaries_item-desc">
                        Ясность нашей позиции очевидна: убеждённость некоторых оппонентов требует анализа 
                        дальнейших направлений развития.
                    </p>
                    <!-- <div class="diaries_item-image">
                        <img src="<?php bloginfo('template_url'); ?>/dist/img/article-image.png">
                    </div> -->
                </a>
                <div class="diaries_item-bottom dis-flex justify-content-between">
                    <div class="buttons dis-flex">
                        <button type="button" class="icon-block comments-icon" aria-label="Комментировать"></button>
                        <button type="button" class="icon-block like" aria-label="Нравится"></button>
                        <button type="button" class="icon-block favorites" aria-label="В избранное"></button>
                    </div>
                    <div class="dis-flex align-items-center">
                        <a href="#" class="diaries_hashtag hashtag">#Lorem ipsum</a>
                        <span class="icon-block views">888</span>
                    </div>
                </div>
            </li>
        </ul>
    </section>
</section>

<section class="site-main_third-section third">
    <div class="info-reg section">
        <p>Зарегистрируйтесь и получите <br>
            больше возможностей</p>
        <button type="button" class="button yellow">Зарегистрироваться</button>
    </div>
    <div class="third_ads">
        <img src="<?php bloginfo('template_url'); ?>/dist/img/ads-image.png">
    </div>
    <div class="third_ads">
        <img src="<?php bloginfo('template_url'); ?>/dist/img/ads-image2.png">
    </div>
    <div class="subscription-block">
        <h3 class="subscription_title">Оформить подписку</h3>
        <form class="dis-flex col-lg-12">
            <input type="text" name="email" placeholder="E-mail" class="subscription_input">
            <button type="submit" class="subscription_button" aria-label="Отправить"></button>
        </form>
    </div>
</section>

<?php get_footer(); ?>