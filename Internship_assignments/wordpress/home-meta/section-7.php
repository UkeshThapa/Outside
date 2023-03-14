<?php
// Metaboxes
function section_7_metabox() {
    add_meta_box(
        'section_7_metabox', // $id is a unique id given to every meta box
        'section_7 Details', // $title is the title displayed in custom meta box
        'section_7_metabox_callback', // $callback is a function that outputs markup inside the custom meta box
        'page', // $page represents the admin page on which the meta box will be displayed on. It can be page, post, custom post type.
        'advanced', // $context represents the header of the meta box. It can be normal, advanced or side.
        'default' // $priority is the header of the box inside the context. It can be high, core, default or low.
    );
}
add_action( 'add_meta_boxes', 'section_7_metabox' );

function section_7_metabox_callback( $post ) {
    wp_nonce_field( basename( __FILE__ ), 'section_7_nonce' );
    $section_7_title = get_post_meta($post->ID, "section_7_title", true);
    $section_7_description = get_post_meta($post->ID, "section_7_description", true);
    $section_7_btn_title = get_post_meta($post->ID, "section_7_btn_title", true);

    ?>
    <table class="table">
    <tr>
        <td for="title" class="section_7-row-title"><?php _e( 'Title', 'section_7' )?></td>
        <td><input type="text" name="title_section_7" id="title" value="<?php if ( isset ( $section_7_title ) ) echo $section_7_title; ?>" /></td>
    </tr>
    <tr>
        <td for="section_7_description" class="section_7-row-title"><?php _e( 'Description', 'section_7' )?></td>
        <td><input type="text" name="description_section_7" id="section_7_description" value="<?php if ( isset ( $section_7_description ) ) echo $section_7_description; ?>" /></td>
    </tr>
    <tr>
        <td for="btn_title" class="section_7-row-title"><?php _e( 'button title', 'section_7' )?></td>
        <td><input type="text" name="btn_title_section_7" id="btn_title" value="<?php if ( isset ( $section_7_btn_title ) ) echo $section_7_btn_title; ?>" /></td>
    </tr>
    </table>
    <?php
}


add_action("save_post", "section_7_save_metabox_data", 10, 2);

function section_7_save_metabox_data($post_id, $post) {

    // we have verfied the nonce
    if (!isset($_POST['section_7_nonce']) || !wp_verify_nonce($_POST['section_7_nonce'], basename(__FILE__))) {
        return $post_id;
    }

    // verifying slug value
    $post_slug = "page";
    if ($post_slug != $post->post_type) {
        return;
    }

    //save value to db field
    $section_7_title = '';
    $section_7_btn_title = '';
    $section_7_description = '';


    if (isset($_POST['title_section_7'])) {
        $section_7_title = sanitize_text_field($_POST['title_section_7']);
    } 
    if (isset($_POST['description_section_7'])) {
        $section_7_description = sanitize_text_field($_POST['description_section_7']);
    } 
    if (isset($_POST['btn_title_section_7'])) {
        $section_7_btn_title = sanitize_text_field($_POST['btn_title_section_7']);
    } 


    update_post_meta($post_id, "section_7_title", $section_7_title);
    update_post_meta($post_id, "section_7_btn_title", $section_7_btn_title);
    update_post_meta($post_id, "section_7_description", $section_7_description);
}
