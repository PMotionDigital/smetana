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
        <div class="site-header_logo">
            <img src="/wp-content/themes/smetana/dist/img/logo.svg">
        </div>
        <form class="site-header_search">
            <input type="text" name="search" placeholder="Поиск">
        </form>
        <div class="site-header_user-nav user-nav">
            <a class="user-nav_login" href="#">Войти</a>
        </div>
    </header>