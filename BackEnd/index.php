<?php	
use App\Autoloader;

require 'Autoloader.php';
Autoloader::register();

use App\Controller\HomeController;
use App\Controller\InsertController;

$home = new HomeController();
$insert = new InsertController();

$uri = preg_split("%\?%",$_SERVER['REQUEST_URI']);
// var_dump($uri[0]);
switch ($uri[0]) {
	case '/one':
		$home->one();
		break;
	case '/insert':
		$insert->index(jsonRequest());
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

function jsonRequest()
{
	try {
		// Takes raw data from the request
		$json = file_get_contents('php://input');
		
		// Converts it into a PHP object
		$data = json_decode($json);
		if (isset($data)) {
			return $data;
		}
	} catch (Exception $e) {
		var_dump($e);
		return false;
	}
}