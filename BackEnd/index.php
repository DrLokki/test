<?php	
use App\Autoloader;

require 'Autoloader.php';
Autoloader::register();

use App\Controller;

$controller = new Controller();

switch ($_SERVER['REQUEST_URI']) {
	case 'test':
		// code...
		break;
	default:
		$controller->index(post('test'));
		break;
}

function post($value='')
{
	try {
		if (isset($_POST[$value])) {
			return json_decode($_POST[$value]);
		}
	} catch (Exception $e) {
		var_dump($e);
		return false;
	}
}