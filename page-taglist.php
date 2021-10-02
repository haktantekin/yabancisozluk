<?php /* Template Name: List */ ?>
<?php get_header(); ?>
<section class="content word-list">
<?php
    $args = array('category__in' => array(1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15),);
    $the_query = new WP_Query($args);
    ?>
    <?php if ($the_query->have_posts()) : ?>
        <?php while ($the_query->have_posts()) : $the_query->the_post();  ?>
            <div class="word-list-item">
                <div class="word-list-item-text"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></div>
                <div class="word-list-item-tags">
                    <?php the_category('') ?>
                    <?php the_tags(' ', ' ', ' '); ?> 
                </div>
            </div>
        <?php endwhile; ?>
        <?php wpex_pagination(); ?>
    <?php endif; ?>
    <?php wp_reset_query(); ?>
</section>
<?php get_footer(); ?>