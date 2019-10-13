<?php

/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link TODO
 *
 * @package WordPress
 * @subpackage Portfolio
 * @since 1.0.0
 */

get_header();
?>

<main>
    <section name="privacy" class="pt-50 privacy-section">
        <a id="privacy" class="section__anchor">&nbsp;</a>
        <div class="container">
            <?php

            /* Start the Loop */
            while (have_posts()) :
                the_post(); ?>

                <h2 class="section__title privacy__title font-weight-normal"><?php the_title(); ?></h2>

                <?php the_content(); ?>

            <?php
            endwhile; // End of the loop.
            ?>

        </div>
    </section>
</main>


<?php

get_footer();

?>