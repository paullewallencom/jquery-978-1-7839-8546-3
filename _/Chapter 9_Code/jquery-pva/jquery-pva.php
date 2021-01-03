<?php
/*
Plugin Name: PageVisibility API Plugin for Wordpress
Plugin URI: http://www.alexlibby.net
Description: 
Version: 1.0 
Author: Alex Libby
Author URI: http://www.alexlibby.net
License: Creative Commons Attribution-ShareAlike 

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License, version 2, as 
published by the Free Software Foundation.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/

global $wp_version;	

$exit_msg='jQuery Overlay requires WordPress 3.0 or newer. <a href="http://codex.wordpress.org/Upgrading_WordPress">Please update!</a>';

if (version_compare($wp_version,"3.0","<"))
{
	exit ($exit_msg);
}

//Add the stylesheet into the header, but not on admin pages
function pva_init() {
	$options = get_option('pva_library');
	$jqVersion = $options['jqversion'];
	
	// add links to WP's header
	echo '<!DOCTYPE html>';
	wp_deregister_script('jquery');
	wp_register_script('jquery', ('http://code.jquery.com/jquery-'. $jqVersion .'.min.js'), false);
	wp_enqueue_script('jquery');
	wp_register_script('pvalibrary', ('//cdnjs.cloudflare.com/ajax/libs/visibility.js/1.2.1/visibility.min.js'), false);
	wp_enqueue_script('pvalibrary');
}

// Draw the menu page itself
function pva_library_do_page() {
?>
<div class="wrap">
<div id="icon-options-general" class="icon32"></div>
<h2>Page Visibility API - Base Settings</h2>
<form method="post" action="options.php">
	<div class="wrap">
		<form method="post" action="options.php">
		
			<?php settings_fields('pva_library_options'); ?>
			<?php $options = get_option('pva_library'); ?>
			<table class="form-table">			
				<tr valign="top"><th scope="row"><?php _e("Version of jQuery:"); ?></th>
					<td><input type="text" name="pva_library[jqversion]" value="<?php echo $options['jqversion']; ?>" /></td>
				</tr>									
			</table>
			<p class="submit">
			<input type="submit" class="button-primary" value="<?php _e('Save Changes') ?>" />
			</p>
		</form>
	</div>
	<?php	
}

// Init plugin options to white list our options
function pva_library_init(){
	register_setting( 'pva_library_options', 'pva_library');
}

// Add menu page
function pva_library_add_page() {
	add_options_page('jQuery Tools Library', 'PVA Options', 'manage_options', 'pva_library', 'pva_library_do_page');
}

add_action('admin_init', 'pva_library_init' );
add_action('admin_menu', 'pva_library_add_page');
add_action('init', 'pva_init');
?>