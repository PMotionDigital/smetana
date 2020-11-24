<?php

    function post_sorting() {

        global $post;
        $sort_value = $_GET['value'];
        $tax_id = $_GET['tax_id'];
        $tax_name = $_GET['tax_name'];
        if($tax_name == 'post_tag'){
            $tax_name = 'tag';
            $tax_id = get_term($tax_id)->slug;
        }
        $posts_query = array(
                'posts_per_page'	=> 1,
                'post_type'         => 'post',
                'category__not_in'  => array(7),
        );
        

        if($sort_value == 'views') {
            $posts_query['orderby'] = 'meta_value';
            $posts_query['meta_key'] = 'просмотры';
            $posts_query['order'] = 'DESC';
            $posts_query[$tax_name] = $tax_id;

            $more_load = '
                offset="1" 
                loading_style="white" 
                container_type="ul" 
                repeater="repeater3" 
                post_type="post" 
                category__not_in="7"
                orderby="meta_value"
                order="DESC"
                meta_key="просмотры"
            ';

        } elseif ($sort_value == 'date') {
            $posts_query['orderby'] = 'date';
            $posts_query['order'] = 'DESC';
            $posts_query[$tax_name] = $tax_id;

            $more_load = '
                offset="6" 
                loading_style="white" 
                container_type="ul" 
                repeater="repeater3" 
                post_type="post" 
                category__not_in="7"
                orderby="date"
                order="DESC"
            ';
        };
        print_r($posts_query);
        if(!is_page('stati')) {
            set_query_var('thumbnail', 'none');
        } else {
            set_query_var('thumbnail', 'show');
        }
        $posts = get_posts($posts_query);
        foreach ($posts as $post) {
            
            setup_postdata($post);
            get_template_part('templates/parts/post-element');
        }
        wp_reset_postdata(); 
        
        echo do_shortcode("[ajax_load_more {$more_load}]");    

        die;

    }

    // add_action('wp_ajax_post_sorting', 'post_sorting');
    // add_action('wp_ajax_nopriv_post_sorting', 'post_sorting');

    add_action('wp_ajax_render_posts', 'render_posts');
    add_action('wp_ajax_nopriv_render_posts', 'render_posts');

    function render_posts(){
        //
        // tax, id, order, asc, offset = page_id * numberposts
        $id = $_GET['tax_id'];
        $tax = $_GET['tax_name'];
        $order = $_GET['order']; 
        $page_id = $_GET['page_id'];
        $temp = $_GET['template'];
        if($temp){
            $path = $temp;    
        } else {
            $path = 'post-element';
        }

        $numberposts = get_option('posts_per_page');
        $slug = array();
        foreach($id as $id_){
            $slug[] = get_term($id_)->slug;
        }
        
        $tax_query = array();
        if($tax !== 'page-stati'){
            $tax_query[] = array(
                'taxonomy' => $tax,
                'field' => 'slug',
                'terms' => $slug,
                'operator' => 'IN',
            );
        }
        if($slug !== 'novosti' && $slug[0] !== 'novosti' && $tax !== 'post_tag'){
            $tax_query[] = array(
                'taxonomy' => 'category',
                'field' => 'slug',
                'terms' => 'novosti',
                'operator' => 'NOT IN',
            );
        }
       
        $args = array(
            'posts_per_page' => $numberposts,
            'post_type' => 'post',
            'tax_query' => $tax_query,
            'orderby' => $order,
            'offset' => $page_id * $numberposts,
            'ignore_sticky_posts' => true,
            // 'meta_key' => $meta_key,
            'order' => 'DESC', // 'ASC' 'DESC'

        );
        
        if($order == 'views'){
            $args['orderby'] = 'meta_value';
            $args['meta_key'] = 'просмотры';
        }

        $query = new WP_Query($args);
        $posts = array();
        
        if($query->have_posts()):
            while($query->have_posts()): $query->the_post();
            ob_start(); 
                get_template_part('templates/parts/'.$path);
            $post_HTML = ob_get_clean();
            $posts[] = $post_HTML;
            endwhile;
        endif;
        
        echo json_encode(array(
            'posts_html' => $posts,
            'args' => $args, 
            'posts_per_page' => $numberposts
        ));
        die;
    }
?>