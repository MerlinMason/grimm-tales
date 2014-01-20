<?php

    // stop wordpress from loading it's own version of jQuery
    function wpstarter_custom_js() {
        wp_deregister_script('jquery');
    }
    if (!is_admin()) add_action('wpstarter_enqueue_scripts', 'wpstarter_custom_js', 11);


	// Remove the admin bar from the front end
	add_filter( 'show_admin_bar', '__return_false' );


	// Call Googles HTML5 Shim, but only for users on old versions of IE
	function wpfme_IEhtml5_shim () {
		global $is_IE;
		if ($is_IE)
		echo '<!--[if lt IE 9]><script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script><![endif]-->';
	}
	add_action('wp_head', 'wpfme_IEhtml5_shim');


	// Remove the version number of WP
	// Warning - this info is also available in the readme.html file in your root directory - delete this file!
	remove_action('wp_head', 'wp_generator');


	// Obscure login screen error messages
	function wpfme_login_obscure(){ return '<strong>Sorry</strong>: Think you have gone wrong somwhere!';}
	add_filter( 'login_errors', 'wpfme_login_obscure' );


	// Disable the theme / plugin text editor in Admin
	define('DISALLOW_FILE_EDIT', true);

?>
