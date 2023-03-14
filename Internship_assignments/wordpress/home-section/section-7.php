<?php
$pageId = get_the_ID();
$title = get_post_meta($pageId,'section_7_title', true );
$description = get_post_meta($pageId,'section_7_description', true );
$btn_title = get_post_meta($pageId,'section_7_btn_title', true );

?>


<section class="section_a14 bg-blush">  
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="section_a14--detail">
                    <h3 class="section_a14--title"><?echo $title;?></h3>
                    <p class="section_a14--description Body-XL"><?echo $description?></p>
                    <button  class="section_a14--btn btn-primary  d-flex align-items-center btn_hover2"><?echo $btn_title;?><i class="@@btn_icon"></i></button>    
                </div>
            </div>
        </div>
    </div>
</section>