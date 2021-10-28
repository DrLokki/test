<?php

namespace App;

/**
 * summary
 */
class Controller
{
    public function index($post)
    {
    	header('Content-type: application/json; charset=UTF-8');
    	echo "{'test': 'machin'}";
    }

    public function test()
    {
    	include 'readCSV.php';
    }
}