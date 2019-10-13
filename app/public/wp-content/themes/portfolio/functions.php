<?php 

function portfolio_files()
{
    wp_enqueue_style('font-awesome', '//cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css');
    wp_enqueue_style('university_main_styles', get_stylesheet_uri(), NULL, microtime());
}

add_action('wp_enqueue_scripts', 'portfolio_files');
