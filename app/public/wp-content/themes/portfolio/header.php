<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Luis Martinez Suarez - Web Professional</title>
    <meta name="description" content="Lorem ipsum dolor sit amet" />
    <?php wp_head(); ?>
</head>

<body>
    <header class="fixed-top">
        <div class="container header-items__container">
            <div class="brand grow">
                <a href="./index.html">
                    <img class="brand__icon" src="./images/logo-v3.png" alt="logo" />
                </a>
            </div>
            <nav role="navigation">
                <div id="menuToggle" class="menu-toggle smaller-than-large-screen">
                    <input id="menuCheckbox" type="checkbox" />
                    <!-- BURGER MENU -->
                    <span></span>
                    <span></span>
                    <span></span>
                    <!-- MENU CONTENT -->
                    <ul id="mainMenuMobile" class="main-menu main-menu__mobile u-full-width">
                        <li><a class="mobile-menu__link" href="./index.html#aboutMe">About</a></li>
                        <li><a class="mobile-menu__link" href="./index.html#services">Services</a></li>
                        <li><a class="mobile-menu__link" href="./index.html#contact">Contact</a></li>
                    </ul>
                </div>
                <div class="large-screen">
                    <ul id="mainMenuDesktop" class="main-menu main-menu__desktop row-list">
                        <li><a class="desktop-menu__link" href="./index.html#aboutMe">About</a></li>
                        <li><a class="desktop-menu__link" href="./index.html#services">Services</a></li>
                        <li><a class="desktop-menu__link" href="./index.html#contact">Contact</a></li>
                    </ul>
                </div>
                <!-- CHECKBOX -->
            </nav>
        </div>
    </header>