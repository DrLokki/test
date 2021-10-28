<?php

namespace App\Model\Repository;

use App\model\Crendential;
use App\Model\Entity\Filament;

/**
 * summary
 */
class RepositoryFilament
{
	private $pdo;
	/**
	 * summary
	 */
	public function __construct()
	{
		$crential = new Crendential();
		$this->pdo = $crential->getPdo();
	}

	public function newLine($obj)
	{
		$statement = $this->pdo->prepare('INSERT INTO filament(brand,bobine_price,bobine_weight,material) VALUES(:brand,:bobine_price,:bobine_weight,:material)');
		$statement->bindValue(':brand',$obj->getBrand(),\PDO::PARAM_STR);
		$statement->bindValue(':bobine_price',$obj->getBobinePrice(),\PDO::PARAM_INT);
		$statement->bindValue(':bobine_weight',$obj->getBobineWeight(),\PDO::PARAM_INT);
		$statement->bindValue(':material',$obj->getMaterial(),\PDO::PARAM_STR);
		$statement->execute();
	}

	public function insertCSV($path)
	{
		$statement = $this->pdo->prepare("COPY filament(brand,bobine_price,bobine_weight,material)
			FROM :path
			DELIMITER ','
			CSV HEADER
			");
		$statement->bindValue(':path',$path,\PDO::PARAM_STR);
		$statement->execute();
	}

	public function getAll(Int $page=1)
	{
		$statement = $this->pdo->prepare('SELECT * FROM filament ORDER BY id LIMIT 100 OFFSET :start');
		$statement->bindValue(':start', 100*($page-1), \PDO::PARAM_INT);
		if ($statement->execute()) {
			$filament = $statement->fetchAll(\PDO::FETCH_ASSOC);
			return $filament;
		}
	}

	public function getOneById(Int $id=1)
	{
		$statement = $this->pdo->prepare('SELECT * FROM filament WHERE id=:id');
		$statement->bindValue(':id', $id, \PDO::PARAM_INT);
		if ($statement->execute()) {
			$filament = $statement->fetch(\PDO::FETCH_ASSOC);
			return $filament;
		}
	}

	public function findAll(Int $page=1)
	{
		$statement = $this->pdo->prepare('SELECT * FROM filament ORDER BY id LIMIT 100 OFFSET :start');
		$statement->bindValue(':start', 100*($page-1), \PDO::PARAM_INT);
		$statement->setFetchMode(\PDO::FETCH_CLASS, Filament::class);
		if ($statement->execute()) {
			$filament = $statement->fetchAll();
			return $filament;
		}
	}

	public function findOneById(Int $id=1)
	{
		$statement = $this->pdo->prepare('SELECT * FROM filament WHERE id=:id');
		$statement->bindValue(':id', $id, \PDO::PARAM_INT);
		$statement->setFetchMode(\PDO::FETCH_CLASS, Filament::class);
		if ($statement->execute()) {
			$filament = $statement->fetch();
			return $filament;
		}
	}

	public function setQuality(int $id, int $quality)
	{
		$statement = $this->pdo->prepare('UPDATE filament SET quality=:quality WHERE id=:id');
		$statement->bindValue(':id',$id,\PDO::PARAM_INT);
		$statement->bindValue(':quality',$quality,\PDO::PARAM_INT);
		if ($statement->execute()) {
			return true;
		}else{
			return false;
		}
	}

	public function getQuality(Int $id=1)
	{
		$statement = $this->pdo->prepare('SELECT quality FROM filament WHERE id=:id');
		$statement->bindValue(':id', $id, \PDO::PARAM_INT);
		if ($statement->execute()) {
			$filament = $statement->fetch(\PDO::FETCH_NUM);
			return $filament[0];
		}
	}
}