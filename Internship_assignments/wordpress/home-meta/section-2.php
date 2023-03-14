<?php
// Metaboxes
function section_2_metabox() {
    add_meta_box(
        'section_2_metabox', // $id is a unique id given to every meta box
        'section_2 Details', // $title is the title displayed in custom meta box
        'section_2_metabox_callback', // $callback is a function that outputs markup inside the custom meta box
        'page', // $page represents the admin page on which the meta box will be displayed on. It can be page, post, custom post type.
        'advanced', // $context represents the header of the meta box. It can be normal, advanced or side.
        'default' // $priority is the header of the box inside the context. It can be high, core, default or low.
    );
}
add_action( 'add_meta_boxes', 'section_2_metabox' );

function section_2_metabox_callback( $post ) {
    wp_nonce_field( basename( __FILE__ ), 'section_2_nonce' );
    $section_2_header = get_post_meta($post->ID, "section_2_header", true);
    $section_2_name = get_post_meta($post->ID, "section_2_name", true);
    $section_2_btn_title = get_post_meta($post->ID, "section_2_btn_title", true);
    $section_2_video_title = get_post_meta($post->ID, "section_2_video_title", true);
	$image1_section_2 = get_post_meta($post->ID, "section_2_image1", true);

    ?>
    <table class="table">
    <tr>
        <td><?php _e( 'Header', 'section_2' )?></td>
        <td><input type="text" name="header_section_2" id="header" value="<?php if ( isset ( $section_2_header ) ) echo $section_2_header; ?>" /></td>
    </tr>
    <tr>
        <td for="name" class="section_2-row-title"><?php _e( 'Description', 'section_2' )?></td>
        <td><input type="text" name="name_section_2" id="name" value="<?php if ( isset ( $section_2_name ) ) echo $section_2_name; ?>" /></td>
    </tr>
    <tr>
        <td for="btn_title" class="section_2-row-title"><?php _e( 'button title', 'section_2' )?></td>
        <td><input type="text" name="btn_title_section_2" id="btn_title" value="<?php if ( isset ( $section_2_btn_title ) ) echo $section_2_btn_title; ?>" /></td>
    </tr>
    <tr>
        <td for="section_2_video_title" class="section_2-row-title"><?php _e( 'video_title', 'section_2' )?></td>
        <td><input type="text" name="video_title_section_2" id="section_2_video_title" value="<?php if ( isset ( $section_2_video_title ) ) echo $section_2_video_title; ?>" /></td>
    </tr>
	<tr>
        <td>Image1</td>
        <td>
            <input type="url" name="image1_section_2" id="image1_section_2" value="<?php echo esc_attr( $image1_section_2 ); ?>"><br>
        </td>
        <td><button type="button" class="button" id="image1_section_2" data-media-uploader-target="#image1_section_2"><?php _e( 'Upload Image', 'intern-demo' )?></button></td>
     </tr>

     </table>
    <?php
}


add_action("save_post", "section_2_save_metabox_data", 10, 2);

function section_2_save_metabox_data($post_id, $post) {

    // we have verfied the nonce
    if (!isset($_POST['section_2_nonce']) || !wp_verify_nonce($_POST['section_2_nonce'], basename(__FILE__))) {
        return $post_id;
    }

    // verifying slug value
    $post_slug = "page";
    if ($post_slug != $post->post_type) {
        return;
    }

    //save value to db field
    $section_2_header = '';
    $section_2_name = '';
    $section_2_btn_title = '';
    $section_2_video_title = '';
	
	$section_2_image1 = '';

    if (isset($_POST['header_section_2'])) {
        $section_2_header = sanitize_text_field($_POST['header_section_2']);
    } 

    if (isset($_POST['name_section_2'])) {
        $section_2_name = sanitize_text_field($_POST['name_section_2']);
    } 
    if (isset($_POST['btn_title_section_2'])) {
        $section_2_btn_title = sanitize_text_field($_POST['btn_title_section_2']);
    } 
    if (isset($_POST['video_title_section_2'])) {
        $section_2_video_title = sanitize_text_field($_POST['video_title_section_2']);
    } 

	if (isset($_POST['image1_section_2'])) {
        $section_2_image1 = sanitize_url($_POST['image1_section_2']);
    } 

    update_post_meta($post_id, "section_2_header", $section_2_header);
    update_post_meta($post_id, "section_2_name", $section_2_name);
    update_post_meta($post_id, "section_2_btn_title", $section_2_btn_title);
    update_post_meta($post_id, "section_2_video_title", $section_2_video_title);
	update_post_meta($post_id, "section_2_image1", $section_2_image1);
}
