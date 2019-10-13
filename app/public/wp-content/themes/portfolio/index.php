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
    <section id="hero" class="hero-section mask">
      <div class="container d-flex flex-col text-center justify-content-center align-items-center full-height">
        <h2 class="hero__subtitle font-weight-normal">Luis Martinez Suarez</h2>
        <h1 class="hero__title font-weight-bold">Web professional</h1>
        <p class="hero__subtext">Web Development - Web design - Wordpress</p>
      </div>
    </section>

    <section name="aboutMe" class="padded-section about-me-section">
      <a id="aboutMe" class="section__anchor">&nbsp;</a>
      <div class="container text-center">
        <h2 class="section__title font-weight-normal">About Me</h2>
        <p class="section__subtitle">The value of first impressions</p>
        <div class="line-separator"></div>
        <p>
          Hi, I am Luis! I am a professional web developer and project manager living in Amsterdam, and I like to stay
          up to date with modern web technologies.
        </p>
        <p>
          My goal is to help you take care of your website, so that you can sleep well at night. Your website is
          important, because it is the face of your business in the digital world. It is your introductory card. It
          talks about your image: if your website works well, is fast and looks amazing, so will your business be
          perceived, and that will help you gain the trust of people.
        </p>
        <p>
          I can help you build and maintain your website, by
          making it modern, fast, usable from any device and fully customized to your needs. I’d love to know about what
          you need!
        </p>
        <p><a href="#contact" alt="Contact me">Contact me now.</a></p>
        </p>
      </div>
    </section>

    <section name="services" class="padded-section services-section">
      <a id="services" class="section__anchor">&nbsp;</a>
      <div class="container text-center">
        <h2 class="section__title font-weight-normal">Services</h2>
        <p class="section__subtitle">What I can do for you</p>
        <div class="line-separator"></div>
        <ul class="services">
          <li class="service column one-third">
            <i class="fas fa-laptop-code service-icon grow"></i>
            <p class="service__title">Fully Customized Web Applications</p>
          </li>
          <li class="service column one-third">
            <i class="fab fa-wordpress service-icon grow"></i>
            <p class="service__title">WordPress Theme Development</p>
          </li>
          <li class="service column one-third">
            <i class="fas fa-graduation-cap service-icon grow"></i>
            <p class="service__title">WordPress Training and Tutoring</p>
          </li>
        </ul>
      </div>
    </section>

    <section name="contact" class="padded-section contact-section">
      <a id="contact" class="section__anchor">&nbsp;</a>
      <div class="container">
        <h2 class="section__title contact__title font-weight-normal">Get in touch</h2>
        <form action="submit">
          <label for="name">Name<span class="mandatory">*</span></label>
          <input class="u-full-width" type="text" id="name" placeholder="Name" required />
          <label for="email">Email<span class="mandatory">*</span></label>
          <input class="u-full-width" type="email" id="email" placeholder="Email" required />
          <label for="name">Telephone</label>
          <input class="u-full-width" type="tel" id="telephone" placeholder="Telephone" />
          <label for="message">What can I do for you?<span class="mandatory">*</span></label>
          <textarea class="u-full-width contact__textarea" name="message" id="message" rows="7"
            placeholder="Please, tell me about your project." required></textarea>
          <input class="button button-primary contact__submit-btn" type="submit" value="Submit" />
        </form>
      </div>
    </section>
  </main>


<?php

get_footer();

?>