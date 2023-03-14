<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package myTheme
 */

?>

<footer class="footer bg-sky text-white">
	<div class="container">
		<div class="row">
			<div class="col-4 col-md-3 col-xl-3">
				<div class="footer_logo ratio ratio-272x123 mt-20">
					<?php
					$footer_logo = get_theme_mod('footer_logo');
					$img_url = wp_get_attachment_url($footer_logo);
					?>
												
					<a href="index.html"><img src="<?php echo $img_url;?>"/></a>

				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-6 col-xl-3 text-left">
				<div class="footer-aboutus mt-10 mt-xl-20">
					<a href="#">
						<h6>
							<?php
							echo wp_get_nav_menu_name('footer-menu-1');
							?>
						</h6>
					</a>
					<?php					
					wp_nav_menu(array(
						'theme_location' =>'footer-menu-1',
						'container' =>'',
						'menu_class' => 'footer-lists d-none d-xl-block m-0'
					));
					?>
				</div>
			</div>

			<div class="col-md-6 col-xl-3">
				<div class="footer-our_team mt-5 mt-xl-20">
				<a href="#">
						<h6>
							<?php
							echo wp_get_nav_menu_name('footer-menu-2');
							?>
						</h6>
					</a>
					<?php					
					wp_nav_menu(array(
						'theme_location' =>'footer-menu-2',
						'container' =>'',
						'menu_class' => 'footer-lists d-none d-xl-block m-0'
					));
					?>
				</div>
			</div>
			<div class="col-md-6 col-xl-3">
				<div class="footer-who_we_are mt-5 mt-xl-20">
				<a href="#">
						<h6>
							<?php
							echo wp_get_nav_menu_name('footer-menu-3');
							?>
						</h6>
					</a>
					<?php					
					wp_nav_menu(array(
						'theme_location' =>'footer-menu-3',
						'container' =>'',
						'menu_class' => 'footer-lists d-none d-xl-block m-0'
					));
					?>
				</div>
			</div>
			<div class="col-md-6 col-xl-3">
				<div class="footer-resources mt-5 mt-xl-20">
				<a href="#">
						<h6>
							<?php
							echo wp_get_nav_menu_name('footer-menu-4');
							?>
						</h6>
					</a>
					<?php					
					wp_nav_menu(array(
						'theme_location' =>'footer-menu-4',
						'container' =>'',
						'menu_class' => 'footer-lists d-none d-xl-block m-0'
					));
					?>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-md-12 col-xl-3">
				<div class="footer-contact mt-5 mt-xl-20">
				<a href="#">
						<h6>
							<?php
							echo wp_get_nav_menu_name('footer-menu-5');
							?>
						</h6>
					</a>
					<?php					
					wp_nav_menu(array(
						'theme_location' =>'footer-menu-5',
						'container' =>'',
						'menu_class' => 'footer-lists d-none d-xl-block m-0'
					));
					?>
				</div>
			</div>

			<div class="col col-xl-9">
				<div class="footer-email_form mt-5 mt-xl-20 pt-xl-6">
					<ul class="footer-lists text-decoration-none">
						<li class="fst-italic pb-6 pb-xl-2"><a href="#">Sign up for our newsletter:</a></li>
					</ul>
					<form class="d-flex gap-4 flex-column flex-md-row">
						<input type="email"
							class="footer-email_input text-white bg-transparent ps-3 pt-2 pb-2 col-md-10"
							placeholder="Email address" id="exampleInputEmail1" aria-describedby="emailHelp">
						<button type="submit"
							class="footer-btn bg-transparent text-white ps-4 pe-4 pt-2 pb-2  d-flex align-items-center">Submit
							<i class="icon-arrow-e ps-2"></i></button>
					</form>
				</div>
			</div>

		</div>

		<div class="row">
			<div class="col-8">
				<div class="footer-copyright pt-10 pt-xl-20">
					<p class="Body"><?php echo get_theme_mod( 'footer_copyright');?></p>
				</div>
			</div>
		</div>
	</div>
</footer>

</div><!-- #page -->

<?php wp_footer(); ?>

</body>

</html>