<?php	
use App\Autoloader;

require 'Autoloader.php';
Autoloader::register();

use App\Controller\HomeController;

$home = new HomeController();

$uri = preg_split("%\?%",$_SERVER['REQUEST_URI']);
// var_dump($uri[0]);
switch ($uri[0]) {
	case '/one':
		$home->one();
		break;
	default:
		$home->index();
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