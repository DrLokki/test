<?php
namespace App;

use App\Model\Repository\RepositoryFilament;
use App\Model\Entity\Filament;

$filament = new Filament();
$repository = new RepositoryFilament();

if (($handle = fopen("./csv_files/fillament.csv", "r")) !== FALSE) {
	$data = fgetcsv($handle, 1000, ",");
	while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
		$filament->setBrand($data[0])
			->setBobinePrice($data[2])
			->setBobineWeight($data[3])
			->setMaterial($data[4]);
		$repository->newLine($filament);
	}
	fclose($handle);
}

// $repository->insertCSV("./csv_files/fillament.csv");