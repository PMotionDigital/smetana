<?php

add_theme_support('post-thumbnails');

register_nav_menus(array(
    'top'    => 'Top menu'
));

// user profile

//include 'functions/func-profile.php';

// custom dashboard

//include 'functions/func-users.php';

// settings site

if (function_exists('acf_add_options_page')) {

    $option_page = acf_add_options_page(
        array(
            'page_title' => 'Контактные данные',
            'menu_title' => 'Контактные данные',
            'menu_slug'  => 'contacts',
            'capability' => 'edit_posts',
            'redirect'   => false
        )
    );

    $option_page = acf_add_options_page(
        array(
            'page_title' => 'Тарифные планы',
            'menu_title' => 'Тарифные планы',
            'menu_slug'  => 'tariffs',
            'capability' => 'edit_posts',
            'redirect'   => false
        )
    );
}

// автообновление версии файлов

function my_theme_load_resources() {

    $theme_uri = get_template_directory_uri();
    $theme_styles = $theme_uri.'/dist/css/style.bundle.css';
    $theme_scripts = $theme_uri.'/dist/js/bundle.js';


    // global style connected
  
    wp_register_style('my-theme-style', $theme_styles , false, filemtime(get_stylesheet_directory() .'/dist/css/style.bundle.css'));
    wp_enqueue_style('my-theme-style');
        
    // scripts connected
        
    wp_register_script('my_theme_functions', $theme_scripts , array('jquery'), filemtime(get_stylesheet_directory() .'/dist/css/style.bundle.css'), true);
    wp_enqueue_script('my_theme_functions'); 
  }

  add_action('wp_enqueue_scripts', 'my_theme_load_resources');



function menu_item_count($output, $item, $depth, $args) {

	if($item->type == "taxonomy") {
	
		$object = get_term($item->object_id, $item->object);
        //$output .= "(".$object->count.")";
        $output .= '<span class="menu-item_counter">' . $object->count . '</span>';
		
	}    
	
	return $output;
	
}

add_action("walker_nav_menu_start_el", "menu_item_count", 10, 4);


add_action( 'after_setup_theme', function() {
    add_theme_support( 'pageviews' );
});



// includes 
include 'functions/starts-with.php';
include 'functions/global-actions.php';
include 'functions/breadcrumbs.php';
include 'functions/post-expand.php';
