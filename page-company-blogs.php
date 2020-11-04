<?php 
/* 
Template name:  Страница блоги компаний
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
                        Создайте коммерческий блог и начните продвигать свой бизнес! 
                        <a href="#" class="button yellow">Создать блог компании</a>
                    </div>
                </div>
            </div>
            <ul class="company-blogs">
                <li class="company-blogs_item section dis-flex flex-wrap-wrap justify-content-between">
                    <div class="blogs_item dis-flex">
                        <div class="blogs_item-avatar">
                            <img src="/wp-content/themes/smetana/dist/img/avatar.png">
                        </div>
                        <div class="blogs_item-desc">
                            <div class="blogs_item-name">
                                Мария Павлова
                            </div>
                            <div class="blogs_item-subscribe dis-flex">
                                <button type="button" class="button yellow-border">Подписаться</button>
                                <div class="blogs_item-subscribers">
                                    <span class="subscribers icon-block">238</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#" class="button reply">Сайт компании</a>
                    <p class="company-blogs_desc col-lg-12">Описание компании.Описание компании.Описание компании</p>
                </li>
                <li class="company-blogs_item section dis-flex flex-wrap-wrap justify-content-between">
                    <div class="blogs_item dis-flex">
                        <div class="blogs_item-avatar">
                            <img src="/wp-content/themes/smetana/dist/img/avatar.png">
                        </div>
                        <div class="blogs_item-desc">
                            <div class="blogs_item-name">
                                Мария Павлова
                            </div>
                            <div class="blogs_item-subscribe dis-flex">
                                <button type="button" class="button yellow-border">Подписаться</button>
                                <div class="blogs_item-subscribers">
                                    <span class="subscribers icon-block">238</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#" class="button reply">Сайт компании</a>
                    <p class="company-blogs_desc col-lg-12">Описание компании.Описание компании.Описание компании</p>
                </li>
                <li class="company-blogs_item section dis-flex flex-wrap-wrap justify-content-between">
                    <div class="blogs_item dis-flex">
                        <div class="blogs_item-avatar">
                            <img src="/wp-content/themes/smetana/dist/img/avatar.png">
                        </div>
                        <div class="blogs_item-desc">
                            <div class="blogs_item-name">
                                Мария Павлова
                            </div>
                            <div class="blogs_item-subscribe dis-flex">
                                <button type="button" class="button yellow-border">Подписаться</button>
                                <div class="blogs_item-subscribers">
                                    <span class="subscribers icon-block">238</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#" class="button reply">Сайт компании</a>
                    <p class="company-blogs_desc col-lg-12">Описание компании.Описание компании.Описание компании</p>
                </li>
                <li class="company-blogs_item section dis-flex flex-wrap-wrap justify-content-between">
                    <div class="blogs_item dis-flex">
                        <div class="blogs_item-avatar">
                            <img src="/wp-content/themes/smetana/dist/img/avatar.png">
                        </div>
                        <div class="blogs_item-desc">
                            <div class="blogs_item-name">
                                Мария Павлова
                            </div>
                            <div class="blogs_item-subscribe dis-flex">
                                <button type="button" class="button yellow-border">Подписаться</button>
                                <div class="blogs_item-subscribers">
                                    <span class="subscribers icon-block">238</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#" class="button reply">Сайт компании</a>
                    <p class="company-blogs_desc col-lg-12">Описание компании.Описание компании.Описание компании</p>
                </li>
                <li class="company-blogs_item section dis-flex flex-wrap-wrap justify-content-between">
                    <div class="blogs_item dis-flex">
                        <div class="blogs_item-avatar">
                            <img src="/wp-content/themes/smetana/dist/img/avatar.png">
                        </div>
                        <div class="blogs_item-desc">
                            <div class="blogs_item-name">
                                Мария Павлова
                            </div>
                            <div class="blogs_item-subscribe dis-flex">
                                <button type="button" class="button yellow-border">Подписаться</button>
                                <div class="blogs_item-subscribers">
                                    <span class="subscribers icon-block">238</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#" class="button reply">Сайт компании</a>
                    <p class="company-blogs_desc col-lg-12">Описание компании.Описание компании.Описание компании</p>
                </li>
                <li class="company-blogs_item section dis-flex flex-wrap-wrap justify-content-between">
                    <div class="blogs_item dis-flex">
                        <div class="blogs_item-avatar">
                            <img src="/wp-content/themes/smetana/dist/img/avatar.png">
                        </div>
                        <div class="blogs_item-desc">
                            <div class="blogs_item-name">
                                Мария Павлова
                            </div>
                            <div class="blogs_item-subscribe dis-flex">
                                <button type="button" class="button yellow-border">Подписаться</button>
                                <div class="blogs_item-subscribers">
                                    <span class="subscribers icon-block">238</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#" class="button reply">Сайт компании</a>
                    <p class="company-blogs_desc col-lg-12">Описание компании.Описание компании.Описание компании</p>
                </li>
            </ul>
        </section>
    </section>
    <section class="site-main_third-section third">
        <?php get_template_part('templates/parts/blogs-section'); ?>
    </section>

<?php get_footer(); ?>