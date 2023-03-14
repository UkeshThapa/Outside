<?php
$pageId = get_the_ID();
$eyebrow = get_post_meta($pageId,'section_5_eyebrow', true );
$title = get_post_meta($pageId,'section_5_title', true );
$time = get_post_meta($pageId,'section_5_time', true );
$description = get_post_meta($pageId,'section_5_description', true );
$btn_title = get_post_meta($pageId,'section_5_btn_title', true );
$image1 = get_post_meta($pageId,'section_5_image1', true );

?>


<section class="section_a111 bg-mint">
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-6">
                <figure class="section_a11--img_container ratio ratio-620x465 ">
                    <img src="<?echo $image1?>" class="section_a11--img" alt="@@title">
                </figure>

            </div>  
            <div class="col-12 col-md-6">
                <div class="section_a11--details">
                    <h6 class="section_a11--details-eyebrow eyebrow"><?echo $eyebrow;?></h6>
                    <h4 class="section_a11--details-title"><?echo $title;?></h4>
                    <p class="section_a11--details-description"><span class="section_a11--details-time"><?echo $time;?></span> <br><br><?echo $description;?></p>
                    <button class="section_a11--btn btn-primary d-flex align-items-center btn_hover1"><?echo $btn_title;?><i class="@@btn_icon"></i></button>
                </div>
            </div>

        </div>
    </div>
</section>