<?php
/**
 * myTheme Theme Customizer
 *
 * @package myTheme
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function mytheme_customize_register( $wp_customize ) {
	$wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
	$wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';

	if ( isset( $wp_customize->selective_refresh ) ) {
		$wp_customize->selective_refresh->add_partial(
			'blogname',
			array(
				'selector'        => '.site-title a',
				'render_callback' => 'mytheme_customize_partial_blogname',
			)
		);
		$wp_customize->selective_refresh->add_partial(
			'blogdescription',
			array(
				'selector'        => '.site-description',
				'render_callback' => 'mytheme_customize_partial_blogdescription',
			)
		);
	}
}
add_action( 'customize_register', 'mytheme_customize_register' );

/**
 * Render the site title for the selective refresh partial.
 *
 * @return void
 */
function mytheme_customize_partial_blogname() {
	bloginfo( 'name' );
}

/**
 * Render the site tagline for the selective refresh partial.
 *
 * @return void
 */
function mytheme_customize_partial_blogdescription() {
	bloginfo( 'description' );
}

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function mytheme_customize_preview_js() {
	wp_enqueue_script( 'mytheme-customizer', get_template_directory_uri() . '/js/customizer.js', array( 'customize-preview' ), _S_VERSION, true );
}
add_action( 'customize_preview_init', 'mytheme_customize_preview_js' );



function theme_customize_register($wp_customize){
	// Global Panel
	$wp_customize->add_panel('global_settings', array(
		'title' => 'Global Settings',
		'description' => 'This is panel Description',
		'priority' => 10,
	));

	// Header Section
	$wp_customize->add_section('header_settings', array(
		'title' => 'Header Settings',
		'priority' => 3,
		'panel' => 'global_settings',
	));
	// Settings
	$wp_customize->add_setting('header_logo', []);
	// Control
	$wp_customize->add_control(new \WP_Customize_Media_Control($wp_customize, 'header_logo', array(
		'label' => 'Header Logo',
		'description' => 'Preferred size 400px by 80px',
		'section' => 'header_settings',
		'settings' => 'header_logo',
	)));



	// footer Section
	$wp_customize->add_section('footer_settings', array(
		'title' => 'footer Settings',
		'priority' => 3,
		'panel' => 'global_settings',
	));


	$wp_customize->add_setting('footer_logo', []);
	// Control
	$wp_customize->add_control(new \WP_Customize_Media_Control($wp_customize, 'footer_logo', array(
		'label' => 'Footer Logo',
		'description' => 'Preferred size 400px by 80px',
		'section' => 'footer_settings',
		'settings' => 'footer_logo',
	)));



	// Settings
	$wp_customize->add_setting('footer_copyright', []);
	// Control
	$wp_customize->add_control(new \WP_Customize_Control($wp_customize, 'footer_copyright', array(
		'label' => 'Footer copyright',
		'section' => 'footer_settings',
		'settings' => 'footer_copyright',
	)));
	
}	

add_action( 'customize_register', 'theme_customize_register' );







