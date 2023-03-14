<?php
// Metaboxes
function section_6_metabox() {
    add_meta_box(
        'section_6_metabox', // $id is a unique id given to every meta box
        'section_6 Details', // $title is the title displayed in custom meta box
        'section_6_metabox_callback', // $callback is a function that outputs markup inside the custom meta box
        'page', // $page represents the admin page on which the meta box will be displayed on. It can be page, post, custom post type.
        'advanced', // $context represents the header of the meta box. It can be normal, advanced or side.
        'default' // $priority is the header of the box inside the context. It can be high, core, default or low.
    );
}
add_action( 'add_meta_boxes', 'section_6_metabox' );

function section_6_metabox_callback( $post ) {
    wp_nonce_field( basename( __FILE__ ), 'section_6_nonce' );
    $section_6_title = get_post_meta($post->ID, "section_6_title", true);
    $section_6_description1 = get_post_meta($post->ID, "section_6_description1", true);
    $section_6_img_description = get_post_meta($post->ID, "section_6_img_description", true);
    $section_6_description = get_post_meta($post->ID, "section_6_description", true);
	$image1_section_6 = get_post_meta($post->ID, "section_6_image1", true);

    ?>
    <table class="table">
        <tr>
            <td for="title" class="section_6-row-title"><?php _e( 'Title', 'section_6' )?></td>
            <td><input type="text" name="title_section_6" id="title" value="<?php if ( isset ( $section_6_title ) ) echo $section_6_title; ?>" /></td>
        </tr>
        <tr>
            <td><?php _e( 'description1', 'section_6' )?></td>
            <td><input type="text" name="description1_section_6" id="description1" value="<?php if ( isset ( $section_6_description1 ) ) echo $section_6_description1; ?>" /></td>
        </tr>
        <tr>
            <td for="img_description" class="section_6-row-title"><?php _e( 'img_description', 'section_6' )?></td>
            <td><input type="text" name="img_description_section_6" id="img_description" value="<?php if ( isset ( $section_6_img_description ) ) echo $section_6_img_description; ?>" /></td>
        </tr>
        <tr>
            <td for="section_6_description" class="section_6-row-title"><?php _e( 'Description', 'section_6' )?></td>
            <td><input type="text" name="description_section_6" id="section_6_description" value="<?php if ( isset ( $section_6_description ) ) echo $section_6_description; ?>" /></td>
        </tr>
        <tr>
            <td>Image1</td>
            <td>
                <input type="url" name="image1_section_6" id="image1_section_6" value="<?php echo esc_attr( $image1_section_6 ); ?>"><br>
            </td>
            <td><button type="button" class="button" id="image1_section_6" data-media-uploader-target="#image1_section_6"><?php _e( 'Upload Image', 'intern-demo' )?></button></td>
        </tr>

     </table>
    <?php
}


add_action("save_post", "section_6_save_metabox_data", 10, 2);

function section_6_save_metabox_data($post_id, $post) {

    // we have verfied the nonce
    if (!isset($_POST['section_6_nonce']) || !wp_verify_nonce($_POST['section_6_nonce'], basename(__FILE__))) {
        return $post_id;
    }

    // verifying slug value
    $post_slug = "page";
    if ($post_slug != $post->post_type) {
        return;
    }

    //save value to db field
    $section_6_description1 = '';
    $section_6_title = '';
    $section_6_img_description = '';
    $section_6_description = '';
	$section_6_image1 = '';

    if (isset($_POST['title_section_6'])) {
        $section_6_title = sanitize_text_field($_POST['title_section_6']);
    } 
    if (isset($_POST['description1_section_6'])) {
        $section_6_description1 = sanitize_text_field($_POST['description1_section_6']);
    } 

    if (isset($_POST['img_description_section_6'])) {
        $section_6_img_description = sanitize_text_field($_POST['img_description_section_6']);
    } 

    if (isset($_POST['description_section_6'])) {
        $section_6_description = sanitize_text_field($_POST['description_section_6']);
    } 

	if (isset($_POST['image1_section_6'])) {
        $section_6_image1 = sanitize_url($_POST['image1_section_6']);
    } 

    update_post_meta($post_id, "section_6_title", $section_6_title);
    update_post_meta($post_id, "section_6_description1", $section_6_description1);
    update_post_meta($post_id, "section_6_img_description", $section_6_img_description);
    update_post_meta($post_id, "section_6_description", $section_6_description);
	update_post_meta($post_id, "section_6_image1", $section_6_image1);
}
