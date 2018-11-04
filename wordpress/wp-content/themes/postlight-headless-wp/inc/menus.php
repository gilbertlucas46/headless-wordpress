<?php

/**
 * Register navigation menu.
 *
 * @return void
 */
function register_menus() {
    register_nav_menu( 'header-menu', __( 'Header Menu', 'postlight-headless-wp' ) );
    register_nav_menu( 'main-menu', __( 'Main Menu', 'postlight-headless-wp' ) );
    register_nav_menu( 'footer-menu', __( 'Footer Menu', 'postlight-headless-wp' ) );
}
add_action( 'after_setup_theme', 'register_menus' );
