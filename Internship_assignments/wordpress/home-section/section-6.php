
<?php
$pageId = get_the_ID();
$description1 = get_post_meta($pageId,'section_6_description1', true );
$title = get_post_meta($pageId,'section_6_title', true );
$description = get_post_meta($pageId,'section_6_description', true );
$img_description = get_post_meta($pageId,'section_6_img_description', true );
$image1 = get_post_meta($pageId,'section_6_image1', true );

?>


<section class="section_a15">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col col-md-6 text-center">
                <div class="section_a15--container">
                    <h2 class="section_a15--title"><?echo $title;?></h2>
                    <p class="section_a15--description Body-Xl"><?echo $description1?></p>           
                </div>                
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col col-md-5 d-flex justify-content-center">
                <div class="section_a15--img_wrapper">
                    <div class="section_a15--img_container ratio ratio-1x1">
                        <img src="<?echo $image1;?>" alt="@@title">
                    </div>
                </div>
            </div>
        </div> 
        <div class="row justify-content-center">
            <div class="col col-md-6 text-center">
                
                <h4 class="section_a15--img_description"><?php echo $img_description;?></h4>
                <div class="section_a15--social_wrapper d-flex align-items-center justify-content-center gap-3 mb-6 mb-md-7 mb-xl-5">
                    <a href="#"><i class="icon-linkedin text-sky"></i></a>
                    <a href="#"><i class="icon-github text-sky"></i></a>
                    <a href="#"><i class="icon-twitter text-sky"></i></a>
                    <a href="#"><i class="icon-facebook text-sky"></i></a>
                    

                </div>
                <p class="section_a15--description1 Body"><?php echo $description;?></p>   
            </div>

        </div>   
    </div>
</section>