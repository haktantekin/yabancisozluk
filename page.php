<?php get_header(); ?>
<section class="content content-detail">
    <?php if (have_posts()) : ?>
        <?php while (have_posts()) : the_post(); ?>
            <?php $url = wp_get_attachment_url(get_post_thumbnail_id($post->ID), 'full');
            $nowebp = str_replace(".webp", "", $url);
            $nowebp = $nowebp;
            ?>
            <h1><?php the_title(); ?></h1>
            <div class="content-in">
                <div class="content-section info-section">
                    <div class="content-section-right light-blue">
                        <?php the_content(); ?>
                    </div>
                </div>
            </div>
        <?php endwhile; ?>
    <?php endif; ?>
    <?php wp_reset_query(); ?>
</section>
<?php get_footer(); ?>