<?php

namespace App\Model\Entity;
use App\model\Repository\RepositoryFilament;

/**
 * summary
 */
class Filament
{
	private int $id;
	private String $brand;
	private float $price;
	private float $bobine_price;
	private int $bobine_weight;
	private String $material;
	private $quality;

	/**
	 * Class Constructor 
	 */
	public function __construct()
	{

	}

	public function setBrand($value='')
	{
		$this->brand = htmlspecialchars($value);
		return $this;
	}

	public function setPrice($value=0)
	{
		$this->price = $value;
		return $this;
	}

	public function setBobinePrice($value=0)
	{
		$this->bobine_price = $value;
		return $this;
	}

	public function setBobineWeight($value=0)
	{
		$this->bobine_weight = $value;
		return $this;
	}

	public function setMaterial($value='')
	{
		$this->material = htmlspecialchars($value);
		return $this;
	}

	public function setQuality($value=0)
	{
		$this->quality = $value;
		return $this;
	}

	public function getBrand()
	{
		return $this->brand;
	}

	public function getPrice()
	{
		return $this->price;
	}

	public function getBobinePrice()
	{
		return $this->bobine_price;
	}

	public function getBobineWeight()
	{
		return $this->bobine_weight;
	}

	public function getMaterial()
	{
		return $this->material;
	}

	public function getQuality()
	{
		return $this->quality;
	}
}