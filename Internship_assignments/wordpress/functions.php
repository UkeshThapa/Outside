<?php
/**
 * myTheme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package myTheme
 */

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function mytheme_setup() {
	/*
		* Make theme available for translation.
		* Translations can be filed in the /languages/ directory.
		* If you're building a theme based on myTheme, use a find and replace
		* to change 'mytheme' to the name of your theme in all the template files.
		*/
	load_theme_textdomain( 'mytheme', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
		* Let WordPress manage the document title.
		* By adding theme support, we declare that this theme does not use a
		* hard-coded <title> tag in the document head, and expect WordPress to
		* provide it for us.
		*/
	add_theme_support( 'title-tag' );

	/*
		* Enable support for Post Thumbnails on posts and pages.
		*
		* @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		*/
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus(
		array(
			'menu-1' => esc_html__( 'Primary', 'mytheme' ),
			'footer-menu-1' => esc_html__( 'about_us', 'mytheme' ),
			'footer-menu-2' => esc_html__( 'our_team', 'mytheme' ),
			'footer-menu-3' => esc_html__( 'who_we_are', 'mytheme' ),
			'footer-menu-4' => esc_html__( 'resources', 'mytheme' ),
			'footer-menu-5' => esc_html__( 'contact', 'mytheme' ),
		)
	);

	/*
		* Switch default core markup for search form, comment form, and comments
		* to output valid HTML5.
		*/
	add_theme_support(
		'html5',
		array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'style',
			'script',
		)
	);

	// Set up the WordPress core custom background feature.
	add_theme_support(
		'custom-background',
		apply_filters(
			'mytheme_custom_background_args',
			array(
				'default-color' => 'ffffff',
				'default-image' => '',
			)
		)
	);

	// Add theme support for selective refresh for widgets.
	add_theme_support( 'customize-selective-refresh-widgets' );

	/**
	 * Add support for core custom logo.
	 *
	 * @link https://codex.wordpress.org/Theme_Logo
	 */
	add_theme_support(
		'custom-logo',
		array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		)
	);
}
add_action( 'after_setup_theme', 'mytheme_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function mytheme_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'mytheme_content_width', 640 );
}
add_action( 'after_setup_theme', 'mytheme_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function mytheme_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'mytheme' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'mytheme' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'mytheme_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function mytheme_scripts() {
	wp_enqueue_style( 'mytheme-style', get_stylesheet_uri(), array(), _S_VERSION );
	wp_enqueue_style( 'style-style', get_template_directory_uri().'/style/style.css' );
	wp_enqueue_style( 'fonticon', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css' );
	wp_style_add_data( 'mytheme-style', 'rtl', 'replace' );

	wp_enqueue_script( 'mytheme-navigation', get_template_directory_uri() . '/js/navigation.js', array(), _S_VERSION, true );
	wp_enqueue_script( 'mytheme-app', get_template_directory_uri() . '/js/app.js', array(), _S_VERSION, true );
	wp_enqueue_script( 'mytheme-jquery', get_template_directory_uri() . '/js/jquery.js', array(), _S_VERSION, true );
	wp_enqueue_script( 'mytheme-model', get_template_directory_uri() . '/js/model.js', array(), _S_VERSION, true );
	wp_enqueue_script( 'mytheme-model', get_template_directory_uri() . '/js/pushy.js', array(), _S_VERSION, true );

	// ajax 
	wp_enqueue_script( 'my-ajax-form', get_template_directory_uri() . '/js/ajax-filter.js', array('jquery'), '1.0', true );
	wp_localize_script( 'my-ajax-form', 'my_ajax_form', array( 'ajaxurl' =>  admin_url( 'admin-ajax.php' ) ) );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'mytheme_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

require get_template_directory() . '/home-meta/section-1.php';
require get_template_directory() . '/home-meta/section-2.php';
require get_template_directory() . '/home-meta/section-5.php';
require get_template_directory() . '/home-meta/section-6.php';
require get_template_directory() . '/home-meta/section-7.php';

/*
* Load metabox admin styles
*/
function load_metabox_admin_styles(){
    wp_enqueue_script( 'metabox-js', get_template_directory_uri() . '/js/meta-box.js', array('jquery'), '', false );
    wp_enqueue_style( 'metabox-style', get_template_directory_uri().'/style/meta.css');
}

add_action( 'admin_enqueue_scripts','load_metabox_admin_styles');
/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}



function create_team_post_type(){
	$labels = array(
		'name'=>'Teams',
		'singular_name' =>'Team',
		'menu_name'=>'Teams'
	);
	$args =array(
		'labels'=>$labels,
		'public'=>true,
		'rewrite'=>array('slug'=>'team'),
		'supports'=>array('title','editor','author','thumbnail','excerpt','comments')
	);
	register_post_type('team',$args);
}
add_action('init','create_team_post_type');

function create_team_taxonomies(){
	$labels = array(
		'name'=>'Team category',
		'singular_name' => 'Category',
		'menu_name'=>'category'
	);
	register_taxonomy('team_category',array('team'),array(
		'hierarchical'=>true,
		'lables'=>$labels,
		'rewrite'=>array('slug'=>'team_category'),
	));
}
add_action('init','create_team_taxonomies',0);


function team_metabox(){
	add_meta_box(
		'team_meta_box',
		'TeamDetails',
		'team_metabox_callback',
		'team',
		'advanced',
		'default'
	);
}

add_action('add_meta_boxes','team_metabox');


function team_metabox_callback($post){
	wp_nonce_field(basename(__FILE__),'team_nonce');
	$team_postion = get_post_meta($post->ID,"team_postion",true);
	$team_name = get_post_meta($post->ID,"team_name",true);
	?>
	<p>	
		<label for="postion" class="team-row-title"><?php _e('Position','team')?></label>
		<input type="text" name="position" id="position" value="<?php if(isset($team_position)) echo $team_position;?>"/>
	</p>
	<p>
		<label for="name" class="team-row-title"><?php _e('Name','team')?></label>
		<input type="text" name="name" id="name" value="<?php if(isset($team_name)) echo $team_name;?>"/>
	</p>
	<?php
}
add_action("save_post","team_save_metabox_data",10,2);

function team_save_metabox_data($post_id, $post){
	// we have verified the nonce
	if(!isset($_POSt['team_nonce'])||!wp_verify_nonce($_POST['team_nonce'],basename(__FILE__))){
		return $post_id;
	}
	//verifying slug value 
	$post_slug = 'team';
	if($post_slug != $post->post_type){
		return;
	}

	// SAVE Value to db field
	$team_position = '';
	$team_name = '';
	if(isset($_POST['position'])){
		$team_position = sanitize_text_field($_POST['position']);
	}
	if(isset($_POST['name'])){
		$team_position = sanitize_text_field($_POST['name']);
	}

	update_post_meta($post_id,"team_position",$team_position);
	update_post_meta($post_id,"team_name",$team_name);

}





// ajax

add_action( 'wp_ajax_my_action_callback', 'my_action_callback' );
add_action( 'wp_ajax_nopriv_my_action_callback', 'my_action_callback' );
function my_action_callback() {
	// Perform some action here
   	$termId = $_POST['term_id'];
	$searchKey =$_POST['searchKey'];

	if($termId){

		
			if($termId == 'all'){
				
			$args = array(
				'post_type' => 'post',
				'post_status' => 'publish',
				'orderby' => 'date',
				'order' => 'DESC',
				'posts_per_page' => get_option('posts_per_page'),
			);
			}
		
			else{
				$args = array(
					'post_type' => 'post',
					'post_status' => 'publish',
					'orderby' => 'date',
					'order' => 'DESC',
					'posts_per_page' => get_option('posts_per_page'),
					'tax_query' => array(
					array(
					'taxonomy' => 'category',
					'field'    => 'term_id',
					'terms'    => $termId,
					),
					),
				);
			}
		
			$query = new WP_Query( $args );
			ob_start();
			if ($query->have_posts()) :
			while ($query->have_posts()): $query->the_post();
			$img_url = get_the_post_thumbnail_url();
			?>
		
			<div class="col-12 col-md-6 col-xl-4 mb-10 mb-md-20">
				<a href="blog_single.html">
					<div class="card_a11 @@card_color h-100">
						<figure class="card_a11--img_container ratio ratio-327x245 ratio-md-452x300 ratio-xl-400x300 ">
							<img src="<?php echo  $img_url;?>" class="card_a11--img-container--img object-fit-cover"  alt="@@title">
						</figure>
						<div class="card_a11--detail_container ps-10 pt-6 pe-10 pb-6">
							<h6 class="eyebrow mb-4">june 11, 2022</h6>
							<h5 ><?php the_title()?></h5>
						</div>
					</div>
				</a>    
			</div>
			<?php
		
			endwhile;
			endif;
			wp_reset_postdata();
			$result = ob_get_contents();
			ob_end_clean();
			// echo 'Action performed successfully.';
			$return = array('content' => $result);
			wp_send_json($return);
			wp_die();
	}
	if($searchKey){
				$args = array(
					'post_type' => 'post',
					'post_status' => 'publish',
					'orderby' => 'date',
					'order' => 'DESC',
					'posts_per_page' => get_option('posts_per_page'),
					's' => $searchKey
				);
			
		
			$query = new WP_Query( $args );
			ob_start();
			if ($query->have_posts()) :
			while ($query->have_posts()): $query->the_post();
			$img_url = get_the_post_thumbnail_url();
			?>
		
			<div class="col-12 col-md-6 col-xl-4 mb-10 mb-md-20">
				<a href="blog_single.html">
					<div class="card_a11 @@card_color h-100">
						<figure class="card_a11--img_container ratio ratio-327x245 ratio-md-452x300 ratio-xl-400x300 ">
							<img src="<?php echo  $img_url;?>" class="card_a11--img-container--img object-fit-cover"  alt="@@title">
						</figure>
						<div class="card_a11--detail_container ps-10 pt-6 pe-10 pb-6">
							<h6 class="eyebrow mb-4">june 11, 2022</h6>
							<h5 ><?php the_title()?></h5>
						</div>
					</div>
				</a>    
			</div>
			<?php
		
			endwhile;
			endif;
			wp_reset_postdata();
			$result = ob_get_contents();
			ob_end_clean();
			// echo 'Action performed successfully.';
			$return = array('content' => $result);
			wp_send_json($return);
			wp_die();
	}else{
		$args = array(
			'post_type' => 'post',
			'post_status' => 'publish',
			'orderby' => 'date',
			'order' => 'DESC',
			'posts_per_page' => get_option('posts_per_page')
		);
	

	$query = new WP_Query( $args );
	ob_start();
	if ($query->have_posts()) :
	while ($query->have_posts()): $query->the_post();
	$img_url = get_the_post_thumbnail_url();
	?>

	<div class="col-12 col-md-6 col-xl-4 mb-10 mb-md-20">
		<a href="blog_single.html">
			<div class="card_a11 @@card_color h-100">
				<figure class="card_a11--img_container ratio ratio-327x245 ratio-md-452x300 ratio-xl-400x300 ">
					<img src="<?php echo  $img_url;?>" class="card_a11--img-container--img object-fit-cover"  alt="@@title">
				</figure>
				<div class="card_a11--detail_container ps-10 pt-6 pe-10 pb-6">
					<h6 class="eyebrow mb-4">june 11, 2022</h6>
					<h5 ><?php the_title()?></h5>
				</div>
			</div>
		</a>    
	</div>
	<?php

	endwhile;
	endif;
	wp_reset_postdata();
	$result = ob_get_contents();
	ob_end_clean();
	// echo 'Action performed successfully.';
	$return = array('content' => $result);
	wp_send_json($return);
	wp_die();

	}
}