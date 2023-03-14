<?php

/* Template Name : Filter Template

*/


$terms = get_terms('category',array(
    'hide_empty' => false
)); 
?>




<section class="section_a32 pt-10 pt-md-20 pt-xl-30">
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="section_a32--heading_container">
                    <h6 class="eyebrow mb-10 mb-md-20">@@eyebrow</h6>
                    <div class="section_a32--heading_container--categories d-flex flex-wrap mb-10 mb-md-13">
                        <p class="Body mb-0">Categories:</p>
                        <ul class="terms d-flex flex-wrap ps-0 mb-0 align-items-center">
                            <li id="all" class="eyebrow ms-md-2 me-5 mb-0 category">All</li>
                            <?php
                            if(isset($terms)&& is_array($terms)):
                                foreach($terms as $term):?>
                                    <li id="<?php echo $term->term_id;?>" class="eyebrow ms-md-2 me-5 mb-0 category"><?php echo $term->name;?></li>
                            <?php
                                endforeach;
                            endif;
                                ?>
                        </ul>
                    </div>
                    <div class="section_a32--heading_container--search_container d-flex flex-column flex-md-row justify-content-md-between align-items-md-center">
                        <form class="section_a32--heading_container--search_container--form_container col col-md-7 d-flex align-items-center mb-10 mb-md-20">
                            <input class="section_a32--heading_container--search_container--form_container-form form-control" id="searchBox">
                            <i class="fa-solid fa-magnifying-glass section_a32--heading_container--search_container--form_container--icon"></i>
                        </form>
                        <div class="dropdown section_a32--heading_container--search_container--dropdown mb-10 mb-md-20">
                            <button class="btn section_a32--heading_container--search_container--dropdown--btn mb-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <h6 class="eyebrow mb-0">latest<i class="fa-solid fa-caret-down"></i></h6>
                            </button>
                            <ul class="dropdown-menu section_a32--heading_container--search_container--dropdown--dropdown_menu pt-4 pb-4 " aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item pb-0 pt-0" href="#"><span class="eyebrow">Alphabetical order</span></a></li>
                              <hr class="section_a32--heading_container--search_container--dropdown--dropdown_menu--hr mt-3 mb-3">
                              <li><a class="dropdown-item pb-0 pt-0" href="#"><span class="eyebrow">feature</span></a></li>
                              <hr class="section_a32--heading_container--search_container--dropdown--dropdown_menu--hr mt-3 mb-3">
                              <li><a class="dropdown-item pb-0 pt-0" href="#"><span class="eyebrow">latest</span></a></li>
                              <hr class="section_a32--heading_container--search_container--dropdown--dropdown_menu--hr mt-3 mb-3">
                              <li><a class="dropdown-item pb-0 pt-0" href="#"><span class="eyebrow">oldest</span></a></li>

                            </ul> 
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="container-wrapper row">

        <!-- pagination -->

                            

                            <!-- first items -->
            <?php
                
            $args = array(
                'post_type' => 'post',
                'post_status' => 'publish',
                'orderby' => 'date',
                'order' => 'DESC',
                'posts_per_page' => get_option('posts_per_page'),
            );
        
            $query = new WP_Query( $args );
            if ($query->have_posts()) :
            while ($query->have_posts()): $query->the_post();
            $img_url = get_the_post_thumbnail_url();
            ?>
        
            <div class="col-12 col-md-6 col-xl-4 mb-10 mb-md-20">
                <a href="blog_single.html">
                    <div class="card_a11 @@card_color h-100">
                        <figure class="card_a11--img_container ratio ratio-327x245 ratio-md-452x300 ratio-xl-400x300 ">
                            <img src="<?php echo  $img_url;?>" class="card_a11--img-container--img object-fit-cover"  alt="@@title">
                        </figure>
                        <div class="card_a11--detail_container ps-10 pt-6 pe-10 pb-6">
                            <h6 class="eyebrow mb-4">june 11, 2022</h6>
                            <h5 ><?php the_title()?></h5>
                        </div>
                    </div>
                </a>    
            </div>
            <?php
        
            endwhile;
            endif;
            wp_reset_postdata();
            
            ?>
        </div>
        <div class="section_a32--pagination mt-6 mb-6 mb-md-20 mb-xl-32">
            <ul class="pagination-list d-flex justify-content-center align-items-center">
                <li class="me-18"><a class="" href="#"><i class="icon-arrow-w bg-black ps-2 pt-2 pe-2 pb-2 text-white rounded-circle "></i></a></li>
                <li class="number me-2"><a class="page-link active" href="#">1</a></li>
                <li class="me-2"><a class="page-link" href="#">2</a></li>
                <li class="me-2"><a class="page-link" href="#">3</a></li>
                <li class="me-2"><a class="page-link" href="#">4</a></li>
                <li class="me-2"><a class="page-link" href="#">5</a></li>
                <li class="me-2"><a class="page-link" href="#">6</a></li>
                <li class=""><a class="page-link" href="#">7</a></li>
                <li class="ms-18"><a class="page-link" href="#"><i class="icon-arrow-e bg-black ps-2 pt-2 pe-2 pb-2 text-white rounded-circle"></i></a></li>
            </ul>
        </div>
    </div>
</section>