<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'Xb1x4EP2ImyYDEfAvqnw4FCHKBfCu2sHAYRa9ulgpmy5qdxRpXLvhebAkS7zSRZGRkNVJK48G4okdD/zkBaSTQ==');
define('SECURE_AUTH_KEY',  'qZ6Yz+cavwRFdoJyzy+2MRv5QdUkK+aoAhoebdfQvca27XHAOsGo4PS9lY5cPKuXZNCDNw6FYc3mFtxNECrOIw==');
define('LOGGED_IN_KEY',    '8dWf57UsbNQ6rN49f83lrEOqwXSRo9NL020RB2DTUxabqBrHFsLlm0NQo8t3pznuUJqoTZoHBS7+7/f9klY1nQ==');
define('NONCE_KEY',        'RQdGfRODP3R9NLTesOeWSq4ZB7V3nhnzM/81aJ2uDDzx/VFhi3Zi5bQiTFuNUEf7H3Mlua/rA3PiCc/priEB3g==');
define('AUTH_SALT',        'imCRer/4V6hbfPEntzbv422ujjjg2w/Vqu4MTF12OE6M4DgpS2tsBetMifEQw7U5CfpO4mFaUK/8txqNReFhUQ==');
define('SECURE_AUTH_SALT', 'OZAqELNI0et67Nte6f/PRjkMeMXAXg0cV1aNMNRrbBzNCKbPfHwINoI9D6+hXN4i8Nl27d9owW3mTgFbx3YmJQ==');
define('LOGGED_IN_SALT',   'o357C9BRUamaNp5RBqYap38Nly1kkucLK0Gp+o6L69zYV00w15Pnf/oVlqTTpeu2LdSmL7E8Oj5QjHCeS3iyCg==');
define('NONCE_SALT',       'I89wmkLQuz7f1r0fXSjb1ykx0VCUaNdF/c+fYLhHqsVl5MGTH7yO48KINYg/t/DYVTWdciPnJqjF1KkfGVCDKg==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
