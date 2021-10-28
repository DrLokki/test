<?php

namespace App\Model;
/**
 * crential
 */
class Crendential
{

    private String $dsn; 
    private \PDO $pdo;

	/**
	 * Crendential
	 */
	public function __construct()
	{
		$this->dsn = 'pgsql:host=localhost;port=5432;dbname=filament_db;user=hyoide;password=radius2';
		$this->pdo = new \PDO($this->dsn);
	}

	public function getPdo()
	{
		return $this->pdo;
	}

	public function getDsn()
	{
		return $this->dsn;
	}

}