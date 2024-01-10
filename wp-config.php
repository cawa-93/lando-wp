<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'wordpress' );

/** Database password */
define( 'DB_PASSWORD', 'wordpress' );

/** Database hostname */
define( 'DB_HOST', 'database' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '+iTmtUX`[yj9%?o4W}-KIicEo~Ni82(|DsIBgfaQQZ0IphcG*&=)^5RnHScDy?7d' );
define( 'SECURE_AUTH_KEY',   '7|PSRYR>b..hw*[[ARHAa;)RWO`!I^%l%$jfA`@(% :-PU|u:<*7<Z7[Qho$,(hY' );
define( 'LOGGED_IN_KEY',     'I<HLLp#x,T)5D1v`Fb&z)SRLa}ucxi-Rpg8Bn.^YYQD5cua1Hib>GBzrg&uCNg}U' );
define( 'NONCE_KEY',         '/3Y7%6s4-JV?H`83yh_=GDkem`Z4Sid:V9?0Y$JkAWWrg,ahV~<t69KF8$:ah`D`' );
define( 'AUTH_SALT',         'HD,e|pp4FY2Zj~~A<K!IZYGSPSJ&$k;=nqPk$`g%Yf$-])r=1x{~Bx#B[32f4)<j' );
define( 'SECURE_AUTH_SALT',  'R^I@W$e91v0Ql^MIj9mZu_I/*3BTKe<pFutU,M!%|.!Xm?lVcquJA~n)6Y!~@VZr' );
define( 'LOGGED_IN_SALT',    'Q*&tT@,&#^[:gYapO3ea_+o+Wx(XJB2WU7.*/?nKg~u]bu[(9FJiS3v;G=R8R#6=' );
define( 'NONCE_SALT',        '/8vw)42Y%O/t0v[B]>*#3bMgv~>vJqeh0;FFX[^}Nh($r[Sh4OeVJi5WP9rwtxC<' );
define( 'WP_CACHE_KEY_SALT', 'F$t2mjKp9spNl6_<ETRnkotfp_M!PH<P`J<b$Fl4eZwaKvjj-=VP=]GxN9ptFEZ)' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
