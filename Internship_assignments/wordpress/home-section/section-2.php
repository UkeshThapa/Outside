<?php
$pageId = get_the_ID();
$header = get_post_meta($pageId,'section_2_header', true );
$description = get_post_meta($pageId,'section_2_name', true );
$btn_title = get_post_meta($pageId,'section_2_btn_title', true );
$video_title = get_post_meta($pageId,'section_2_video_title', true );
$image1 = get_post_meta($pageId,'section_2_image1', true );

?>

<section class="section_a12">
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="section_a12--details">
                    <h6 class="section_a12--details-eyebrow eyebrow"><?echo $header?></h6>
                    <h3 class="section_a12--details-title"><?echo $description;?></h3>
                    <button class="section_a12--btn btn-primary bg-sky  d-flex align-items-center btn_hover2"><?echo $btn_title;?><i class="fa-solid fa-arrow-right ps-2"></i></button>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="section_a12--video_container">
                    <h6 class="section_a12--video_title"><?echo $video_title?></h6>
                    <video poster="<?echo $image1;?>" class="ratio ratio-462x276" controls>
                        <source src="images/@@videourl" type="video/mp4">
                    </video>
                </div>
            </div>  
        </div>
    </div>
</section>