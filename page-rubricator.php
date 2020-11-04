<?php 
/* 
Template name:  Страница рубрикатор
*/
get_header(); ?>
 
        <section class="rubricator section full-center">
            <div class="section-head dis-flex justify-content-between">
                <h1 class="head_title">Рубрикатор</h1>
                <div>
                    <button type="button" class="icon-block calendar head_button">Период</button>
                    <button type="button" class="head_button button-sorting" data-sorting>Сортировка</button>
                </div>
                <?php get_template_part('templates/components/sorting'); ?>
            </div>
            
            <ul class="rubricator_list">
                <?php 

                    $taxonomyName = "category";
                    $parent_terms = get_terms($taxonomyName, array(
                        'parent' => 0,
                        'orderby' => 'slug', 
                        'hide_empty' => false,
                        'exclude' => array( 1, 7, 6 )
                    ));   

                    foreach ($parent_terms as $pterm) { ?>
                    <?php $terms = get_terms($taxonomyName, array('parent' => $pterm->term_id, 'orderby' => 'slug', 'hide_empty' => false)); 
                    $count = $pterm->count ?>
                        <li class="rubricator_item heading">
                            <a href="<?php echo get_term_link($pterm); ?>" class="heading_head">
                                <h2 class="heading_title">
                                    <?php echo $pterm->name ?>
                                </h2>
                                <span class="heading_counter"><?php 
                                    foreach ($terms as $term) {
                                        $count +=$term->count;
                                    }

                                    echo $count;
                                ?></span>
                            </a> 
                            <ul class="heading_list">
                                <?php foreach ($terms as $term) { 
                                    $link = get_term_link($term); ?>
                                    <li class="heading_item subheading">
                                        <a href="<?php echo $link; ?>">
                                            <h3 class="subheading_title">
                                                <?php echo $term->name ?>
                                            </h3>
                                            <span class="subheading_counter"><?php echo $term->count ?></span>
                                        </a>
                                    </li>
                                <?php } ?>
                            </ul>
                        </li>
                    <?php } ?>

                <!-- <li class="rubricator_item heading">
                    <a href="#" class="heading_head">
                        <h2 class="heading_title">
                            Только реализация намеченных плановых заданий  разочаровала
                        </h2>
                        <span class="heading_counter">12500</span>
                    </a> -->
                    <!-- <ul class="heading_list">
                        <li class="heading_item subheading">
                            <a href="#">
                                <h3 class="subheading_title">
                                    Давайте не забывать, что новая модель организационной деятельности процветает, как ни в чем не бывало
                                </h3>
                                <span class="subheading_counter">12500</span>
                            </a>
                        </li>
                    </ul> -->
                <!-- </li> -->
            </ul>
        </section>
<?php get_footer(); ?>