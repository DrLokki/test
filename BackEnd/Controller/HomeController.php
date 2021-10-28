<?php 
namespace App\Controller;

use App\Model\Repository\RepositoryFilament;

class HomeController
{
	private $view;
	private $user;
	private $repository;

	/**
	 * summary
	 */
	public function __construct()
	{
		$this->repository = new RepositoryFilament;
	}

	public function index()
	{
		header('Content-type: application/json; charset=UTF-8');
		echo json_encode($this->repository->getAll());
	}

	public function one()
	{
		if(isset($_GET['id'])){
			$id = (int) $_GET['id'];
			if(is_int($id)){
				header('Content-type: application/json; charset=UTF-8');
				echo json_encode($this->repository->getOneById($id));
			}
		}
	}
}