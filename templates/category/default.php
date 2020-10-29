<?php 

if(have_posts()): ?>
<section class="main_articles articles section default-category">
    <div class="section-head main-head dis-flex justify-content-between">
        <h2 class="head_title"><?php echo single_cat_title(); ?></h2>
        <div>
            <button type="button" class="icon-block calendar head_button">Период</button>
            <button type="button" class="head_button button-sorting">Сортировка</button>
        </div>
    </div>
    <ul class="articles_list">
        <?php 
        if(in_category('novosti')){
            set_query_var('thumbnail', 'none');
        }
        while(have_posts()): the_post(); 
            get_template_part('templates/parts/post-element');
        endwhile; ?>
        <?php if(in_category('stati')): ?>
        <li class="info-reg section">
            <p>Зарегистрируйтесь и получите <br>
                больше возможностей</p>
            <button type="button" class="button yellow">Зарегистрироваться</button>
        </li>
        <?php endif; ?>
    </ul>
</section>
<?php endif; ?>