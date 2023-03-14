<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package myTheme
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<?php wp_body_open(); ?>
	<div id="page" class="site">
		<a class="skip-link screen-reader-text" href="#primary">
			<?php esc_html_e('Skip to content', 'mytheme'); ?>
		</a>

		<header>
			<nav class="nav">
				<div
					class="container-fluid  pt-6 pb-6 ps-6 pe-6 ps-xl-10 pe-xl-10 d-flex align-items-center gap-10 justify-content-between">
					<div class="nav-logo_container  d-flex align-items-center gap-10">
						<div class="nav--ham d-xl-none">
							<button class="btn" type="button" data-bs-toggle="offcanvas"
								data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i
									class="icon-hamburger"></i></button>
							<div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false"
								tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">

								<div class="offcanvas-header bg-teal justify-content-start">
									<button class="button--close bg-transparent me-5" data-bs-dismiss="offcanvas"><i
											class="icon-close text-white"></i></button>
									<div class="nav-logo_container--img">
										<?php
										$header_logo = get_theme_mod('header_logo');
										$img_url = wp_get_attachment_url($header_logo);
										?>
										<img src="<?php echo $img_url;?>" class="navbar_section-logo"/>									</div>
								</div>
								<?php
									wp_nav_menu(
										array(
											'theme_location' => 'menu-1',
											'menu_id' => 'primary-menu',
											'container'=>'div',
											'container_class'=>'offcanvas-body bg-teal',
											'menu_class' => 'nav d-flex flex-column text-center  gap-10 pt-40'
										)
									);
									?> 
							</div>
						</div>
						<div class="nav-logo_container--img">
						<?php
										$header_logo = get_theme_mod('header_logo');
										$img_url = wp_get_attachment_url($header_logo);
										?>
										<img src="<?php echo $img_url;?>" class="navbar_section-logo"/>	
						</div>

					</div>
					<?php
			wp_nav_menu(
				array(
					'theme_location' => 'menu-1',
					'menu_id' => 'primary-menu',
					'container'=>'div',
					'container_class'=>'nav--list d-none d-xl-block',
					'menu_class' => 'nav d-flex text-center  gap-10'
				)
			);
			?> 
					<button class="nav--btn d-none d-md-block d-xl-none pb-2 pt-2 ps-4 pe-4 bg-transparent">Join Us
						Now</button>
				</div>
			</nav>




		</header><!-- #masthead -->