<?php

/**
 * mon petit test
 */
class prout 
{
	
	public $file;


	public function __construct($argument)
	{
		$this->file = fopen($argument, "a");
	}

	public function FunctionName($value='test')
	{
		fwrite($this->file, $value."\n");
	}

	public function __destruct()
	{
		fclose($this->file);
	}
}

$licorne = new prout("magicsysteme");

echo "là c'est du php </br>";

$licorne->FunctionName("je fait un test pour voir");

echo "là on sort du php </br>";
