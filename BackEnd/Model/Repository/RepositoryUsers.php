<?php

namespace App\Model\Repository;

use App\Model\Entity\Users;

/**
 * summary
 */
class RepositoryUsers
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

	public function newUsers(Users $obj)
	{
		$statement = $this->pdo->prepare('INSERT INTO Users(name,last_name,role,email,birth_date,mdp) VALUES (:name, :lname, :role, :email, DATE(:bdate), :mdp)');
		$statement->bindValue(':name',$obj->getName(),\PDO::PARAM_STR);
		$statement->bindValue(':lname',$obj->getLastName(),\PDO::PARAM_STR);
		$statement->bindValue(':role',$obj->getRole(),\PDO::PARAM_STR);
		$statement->bindValue(':email',$obj->getEmail(),\PDO::PARAM_STR);
		$statement->bindValue(':bdate',$obj->getBdate(),\PDO::PARAM_INT);
		$statement->bindValue(':mdp',$obj->getPassword(),\PDO::PARAM_STR);
		$statement->execute();
	}

	public function findOneByEmailPass(String $email, String $mdp)
	{
		$statement = $this->pdo->prepare('SELECT * FROM users WHERE email LIKE :email');
		$statement->bindValue(':email', $email, \PDO::PARAM_STR);
		$statement->setFetchMode(\PDO::FETCH_CLASS, Users::class);
		if ($statement->execute()) {
			$user = $statement->fetch();
			if ($user) {
				if (\password_verify($mdp, $user->getPassword())) {
					return $user;
				}
			}
			
			return false;
		}
	}

	public function findOneByName(String $name)
	{
		$statement = $this->pdo->prepare('SELECT * FROM users WHERE name LIKE :name');
		$statement->bindValue(':name', $name, \PDO::PARAM_STR);
		$statement->setFetchMode(\PDO::FETCH_CLASS, Users::class);
		if ($statement->execute()) {
			$user = $statement->fetch();
			return $user;
		}
	}

	public function findOneById(String $id)
	{
		$statement = $this->pdo->prepare('SELECT *,extract(EPOCH FROM birth_date) as timestamp FROM users WHERE id=:id');
		$statement->bindValue(':id', $id, \PDO::PARAM_INT);
		$statement->setFetchMode(\PDO::FETCH_CLASS, Users::class);
		if ($statement->execute()) {
			$user = $statement->fetch();
			return $user;
		}
	}
}