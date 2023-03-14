<?php
// Metaboxes
function section_5_metabox() {
    add_meta_box(
        'section_5_metabox', // $id is a unique id given to every meta box
        'section_5 Details', // $title is the title displayed in custom meta box
        'section_5_metabox_callback', // $callback is a function that outputs markup inside the custom meta box
        'page', // $page represents the admin page on which the meta box will be displayed on. It can be page, post, custom post type.
        'advanced', // $context represents the header of the meta box. It can be normal, advanced or side.
        'default' // $priority is the header of the box inside the context. It can be high, core, default or low.
    );
}
add_action( 'add_meta_boxes', 'section_5_metabox' );

function section_5_metabox_callback( $post ) {
    wp_nonce_field( basename( __FILE__ ), 'section_5_nonce' );
    $section_5_eyebrow = get_post_meta($post->ID, "section_5_eyebrow", true);
    $section_5_title = get_post_meta($post->ID, "section_5_title", true);
    $section_5_time = get_post_meta($post->ID, "section_5_time", true);
    $section_5_description = get_post_meta($post->ID, "section_5_description", true);
    $section_5_btn_title = get_post_meta($post->ID, "section_5_btn_title", true);
	$image1_section_5 = get_post_meta($post->ID, "section_5_image1", true);

    ?>
    <table class="table">
    <tr>
        <td><?php _e( 'Eyebrow', 'section_5' )?></td>
        <td><input type="text" name="eyebrow_section_5" id="eyebrow" value="<?php if ( isset ( $section_5_eyebrow ) ) echo $section_5_eyebrow; ?>" /></td>
    </tr>
    <tr>
        <td for="title" class="section_5-row-title"><?php _e( 'Title', 'section_5' )?></td>
        <td><input type="text" name="title_section_5" id="title" value="<?php if ( isset ( $section_5_title ) ) echo $section_5_title; ?>" /></td>
    </tr>
    <tr>
        <td for="time" class="section_5-row-title"><?php _e( 'Time', 'section_5' )?></td>
        <td><input type="text" name="time_section_5" id="time" value="<?php if ( isset ( $section_5_time ) ) echo $section_5_time; ?>" /></td>
    </tr>
    <tr>
        <td for="section_5_description" class="section_5-row-title"><?php _e( 'Description', 'section_5' )?></td>
        <td><input type="text" name="description_section_5" id="section_5_description" value="<?php if ( isset ( $section_5_description ) ) echo $section_5_description; ?>" /></td>
    </tr>
    <tr>
        <td for="btn_title" class="section_5-row-title"><?php _e( 'button title', 'section_5' )?></td>
        <td><input type="text" name="btn_title_section_5" id="btn_title" value="<?php if ( isset ( $section_5_btn_title ) ) echo $section_5_btn_title; ?>" /></td>
    </tr>
    <tr>
        <td>Image1</td>
        <td>
            <input type="url" name="image1_section_5" id="image1_section_5" value="<?php echo esc_attr( $image1_section_5 ); ?>"><br>
        </td>
        <td><button type="button" class="button" id="image1_section_5" data-media-uploader-target="#image1_section_5"><?php _e( 'Upload Image', 'intern-demo' )?></button></td>
     </tr>

     </table>
    <?php
}


add_action("save_post", "section_5_save_metabox_data", 10, 2);

function section_5_save_metabox_data($post_id, $post) {

    // we have verfied the nonce
    if (!isset($_POST['section_5_nonce']) || !wp_verify_nonce($_POST['section_5_nonce'], basename(__FILE__))) {
        return $post_id;
    }

    // verifying slug value
    $post_slug = "page";
    if ($post_slug != $post->post_type) {
        return;
    }

    //save value to db field
    $section_5_eyebrow = '';
    $section_5_title = '';
    $section_5_time = '';
    $section_5_btn_title = '';
    $section_5_description = '';
	
	$section_5_image1 = '';

    if (isset($_POST['eyebrow_section_5'])) {
        $section_5_eyebrow = sanitize_text_field($_POST['eyebrow_section_5']);
    } 

    if (isset($_POST['title_section_5'])) {
        $section_5_title = sanitize_text_field($_POST['title_section_5']);
    } 
    if (isset($_POST['time_section_5'])) {
        $section_5_time = sanitize_text_field($_POST['time_section_5']);
    } 
    if (isset($_POST['btn_title_section_5'])) {
        $section_5_btn_title = sanitize_text_field($_POST['btn_title_section_5']);
    } 
    if (isset($_POST['description_section_5'])) {
        $section_5_description = sanitize_text_field($_POST['description_section_5']);
    } 

	if (isset($_POST['image1_section_5'])) {
        $section_5_image1 = sanitize_url($_POST['image1_section_5']);
    } 

    update_post_meta($post_id, "section_5_eyebrow", $section_5_eyebrow);
    update_post_meta($post_id, "section_5_title", $section_5_title);
    update_post_meta($post_id, "section_5_time", $section_5_time);
    update_post_meta($post_id, "section_5_btn_title", $section_5_btn_title);
    update_post_meta($post_id, "section_5_description", $section_5_description);
	update_post_meta($post_id, "section_5_image1", $section_5_image1);
}
