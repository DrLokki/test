<?php 
namespace App\Controller;

use App\Model\Repository\RepositoryFilament;
use App\Model\Entity\Filament;

class InsertController
{
	private $view;
	private $entity;
	private $repository;

	/**
	 * summary
	 */
	public function __construct()
	{
		$this->repository = new RepositoryFilament;
		$this->entity = new Filament;
	}

	public function index($request)
	{
		$this->entity->setBrand($request->brand);
		$this->entity->setBobinePrice($request->bobine_price);
		$this->entity->setBobineWeight($request->bobine_weight);
		$this->entity->setMaterial($request->material);
		if (isset($request->quality)) {
			$this->entity->setQuality($request->quality);
		}
		$this->repository->newLine($this->entity);
		// var_dump((array) $this->entity);
		header('Content-type: application/json; charset=UTF-8');
		echo json_encode((array) $this->entity);
	}

	public function test()
    {
    	include '../readCSV.php';
    }
}