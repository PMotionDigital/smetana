<!DOCTYPE html>
<html <?php language_attributes(); ?>>
    <head>
        <meta charset="<?php bloginfo( 'charset' ); ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes">
        <?php wp_head(); ?>
    </head>
    <?php
    	if(wp_is_mobile()) {
    		$mobile = 'mobile';
        }
    ?>
<body <?php body_class(array($mobile)); ?>>
    <header class="site-header">
        <a href="/" class="site-header_logo">
            <img class="logo" src="/wp-content/themes/smetana/dist/img/logo.svg">
            <img class="logo-hover" src="/wp-content/themes/smetana/dist/img/logo-hover.svg">
        </a>
        <button type="button" class="button-burger" data-menu aria-label="Открыть меню"></button>
            <?php echo do_shortcode('[wpdreams_ajaxsearchlite]'); ?>
        <!-- <div class="site-header_user-nav user-nav">
            <a class="user-nav_login" href="#">Войти</a>
        </div> -->
    </header>
    <main class="site-main">
        <?php get_template_part('templates/parts/sidebar'); ?>
        <section class="site-main_wrapper">