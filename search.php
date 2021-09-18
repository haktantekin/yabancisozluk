<?php get_header(); ?>
<section class="content word-list">
    <h1><span><?php printf(__('%s', 'nat kah'), get_search_query()); ?></span> sonuçları</h1>
    <?php wp_reset_query(); ?>
    <?php if (have_posts()) : ?>
        <?php while (have_posts()) : the_post(); ?>
            <?php $url = wp_get_attachment_url(get_post_thumbnail_id($post->ID), 'full'); ?>
            <?php
            $the_cat = get_the_category();
            $category_name = $the_cat[0]->cat_name;
            $category_link = get_category_link($the_cat[0]->cat_ID);
            ?>
            <div class="word-list-item">
                <div class="word-list-item-text"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></div>
                <div class="word-list-item-tags">
                <?php the_tags(' ', ' ', ' ');
                    ?> <?php the_category('') ?>
                </div>
            </div>
        <?php endwhile; ?>
        <?php wpex_pagination(); ?>
    <?php endif; ?>
    <?php wp_reset_query(); ?>
</section>
<?php get_footer(); ?>