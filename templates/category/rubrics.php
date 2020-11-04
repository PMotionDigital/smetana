<?php 

if(have_posts()): ?>
    <section class="site-main_main-section main">
        <section class="rubrics section main_articles articles">
            <div class="section-head dis-flex justify-content-between">
                <div class="kama_breadcrumbs">
                    <span>
                        <a href="/">Главная /</a>
                    </span>
                    <span>
                        <a href="<?php echo get_permalink(get_page_by_title('Рубрикатор')); ?>"> Рубрикатор</a>
                    </span>
                </div>
                <div>
                    <button type="button" class="icon-block calendar head_button">Период</button>
                    <button type="button" class="head_button button-sorting" data-sorting>Сортировка</button>
                </div>
                <?php get_template_part('templates/components/sorting'); ?>
            </div>
            <div class="rubrics_info">
                <?php if(get_queried_object()->parent): ?>
                <h1 class="rubrics_parent-rubric">
                    <?php echo get_cat_name(get_queried_object()->parent); ?>
                </h1>
                <?php endif; ?>
                <h2 class="rubrics_current-rubric"><?php echo single_cat_title(); ?></h2>
                <p class="rubrics_desc">
                    Современная методология разработки позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач.
                    Не следует, однако, забывать, что социально-экономическое развитие в значительной степени обусловливает важность.
                </p>
            </div>
            <ul class="articles_list">
                <?php 
                if(!in_category('stati')){
                    set_query_var('thumbnail', 'none');
                }
                while(have_posts()): the_post(); 
                    get_template_part('templates/parts/post-element');
                endwhile; ?>
                <!-- <li class="articles_item article">
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
                </li> -->
            </ul>
        </section>
    </section>
<?php endif; ?>