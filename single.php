<?php get_header(); ?>
<section class="content content-detail">
    <?php wp_reset_query(); ?>
    <?php if (have_posts()) : ?>
        <?php while (have_posts()) : the_post(); ?>
            <h1><?php the_title(); ?></h1>
            <?php the_excerpt();  ?>
            <div class="content-in">
                <?php the_content(); ?>
            </div>
</section>
<?php endwhile; ?>
<?php endif; ?>
<?php wp_reset_query(); ?>

<?php get_footer(); ?>