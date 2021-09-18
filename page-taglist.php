<?php /* Template Name: List */ ?>
<?php get_header(); ?>
<section class="content word-list">
<?php
// wp-query to get all published posts without pagination
$allPostsWPQuery = new WP_Query(array('post_type' => 'post', 'post_status' => 'publish', 'posts_per_page' => -1)); ?>

<?php if ($allPostsWPQuery->have_posts()) : ?>
    <?php while ($allPostsWPQuery->have_posts()) : $allPostsWPQuery->the_post(); ?>
    <div class="word-list-item">
                <div class="word-list-item-text"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></div>
                <div class="word-list-item-tags">
                <?php the_tags(' ', ' ', ' ');
                    ?> <?php the_category('') ?>
                </div>
            </div>
    <?php endwhile; ?>
    <?php wpex_pagination(); ?>
    <?php wp_reset_postdata(); ?>
<?php else : ?>
    <p><?php _e('There no posts to display.'); ?></p>
<?php endif; ?>
</section>
<?php get_footer(); ?>