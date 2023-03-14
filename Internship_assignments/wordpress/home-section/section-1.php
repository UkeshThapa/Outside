<?php
$pageId = get_the_ID();
$header = get_post_meta($pageId,'section_1_header', true );
$description = get_post_meta($pageId,'section_1_name', true );
$image1 = get_post_meta($pageId,'section_1_image1', true );
$image2 = get_post_meta($pageId,'section_1_image2', true );
$image3 = get_post_meta($pageId,'section_1_image3', true );
?>



<section class="hero_section bg-blush">
	<div class="container">
		<div class="row pt-9 pt-xl-20 pt-md-10">
			<div class="col-md-5 d-md-block">
				<div class="hero_section--img_2 ratio ratio-486x397 "> 
				  <img src="<?php echo $image1;?>"  alt="hero_image"></img>
              </div>
            </div>
          <div class="col-md-7 d-md-block d-none" >
            <div class="hero_section--img_2 ratio ratio-754x397 h-100">
				<img src="<?php echo $image2;?>" style="object-fit: cover;" alt="hero_image"></img>
            </div>
          </div>
        </div>
        <div class="row pt-6 pb-34 pt-xl-16 pb-xl-20 pt-md-10 pb-md-10">
          <div class="col col-xl-8  pb-0" >
              <div class="hero_section--details  pt-10 pb-10 ps-6 pe-6 pt-xl-20 ps-xl-20 pe-xl-20 pb-xl-20 pt-md-10 ps-md-10 pe-md-10 pb-md-10 bg-white border-sky">
                <h2 class="h2 @@text-color "><?php echo $header;?></h2>
                <p class="Body-Xl pb-xl-10 pb-md-6 @@text-color "><?php echo $description?></p>
                <button class="hero_section--btn btn_hover1 @@text-color btn-primary border-black d-flex align-items-center">contact<i class="fa-solid fa-arrow-right ps-2 text-color"></i><i class="ps-2 @@btn_icon text-color"></i></button>
              </div> 

          </div>
          <div class="col-xl-4 d-none d-xl-block" >
              <div class="hero_section--img_3 ratio ratio-1x1 ">
				  <img src="<?php echo $image3;?>" style="object-fit: cover;" alt="hero section image 3"></img>
              </div>
          </div>
        </div>
      </div>
</section>






