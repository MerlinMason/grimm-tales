<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>

    <!-- Meta tags -->
    <meta charset="utf-8">
	<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,minimal-ui">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="HandheldFriendly" content="true">

    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
    <meta name="format-detection" content="telephone=no"/>

    <meta name="description" content="">

    <title><?php wp_title('|', true, 'right'); bloginfo('name'); ?></title>

    <link rel="stylesheet" type="text/css" media="all" href="<?php echo get_stylesheet_uri(); ?>"/>
    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>"/>
    <link rel="icon" type="image/png" href="<?php bloginfo('template_url'); ?>/img/favicon.ico">

    <?php wp_head(); ?>

</head>

<body>

<header class="page-header">
    <div class="container cf">

        <div class="logos fl">
            <a href="#" class="timeout" target="_blank">Timeout London</a>
            <a href="#" class="penguin" target="_blank">Penguin Classics</a>
        </div>

        <nav class="scroll-nav fr">
            <a href="#grimm-tales">Home</a>
            <a href="#about">About</a>
            <a href="#the-stories">The Stories</a>
            <a href="#tickets">Tickets</a>
            <a href="#cast">Cast</a>
            <a href="#find-us">Find Us</a>
            <a href="#sponsors">Sponsors</a>
            <a href="#tour">Tour</a>
        </nav>

    </div>
</header>
