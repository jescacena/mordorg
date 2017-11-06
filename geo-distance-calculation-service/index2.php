<?php

function get_meters_between_points($latitude1, $longitude1, $latitude2, $longitude2) {
	if (($latitude1 == $latitude2) && ($longitude1 == $longitude2)) { return 0; } // distance is zero because they're the same point
	$p1 = deg2rad($latitude1);
	$p2 = deg2rad($latitude2);
	$dp = deg2rad($latitude2 - $latitude1);
	$dl = deg2rad($longitude2 - $longitude1);
	$a = (sin($dp/2) * sin($dp/2)) + (cos($p1) * cos($p2) * sin($dl/2) * sin($dl/2));
	$c = 2 * atan2(sqrt($a),sqrt(1-$a));
	$r = 6371008; // Earth's average radius, in meters
	$d = $r * $c;
	return $d; // distance, in meters
}

function get_distance_between_points($latitude1, $longitude1, $latitude2, $longitude2) {
	$meters = get_meters_between_points($latitude1, $longitude1, $latitude2, $longitude2);
	$kilometers = $meters / 1000;
	$miles = $meters / 1609.34;
	$yards = $miles * 1760;
	$feet = $miles * 5280;
	return compact('miles','feet','yards','kilometers','meters');
}

// origin
// lat:40.74347240000001
// lng:-4.047716499999979
//
// destination
// lat:40.76330613530001
// lng:-4.03435500460000
$lat1 = floatval($_GET['lat1']);
$lon1 = floatval($_GET['lon1']);
$lat2 = floatval($_GET['lat2']);
$lon2 = floatval($_GET['lon2']);

// echo '<p>lat1:'.$lat1.'</p>';
// echo '<p>lon1:'.$lon1.'</p>';
// echo '<p>lat2:'.$lat2.'</p>';
// echo '<p>lon2:'.$lon2.'</p>';

$point1 = array($lat1, $lon1);
$point2 = array($lat2, $lon2);

$distance = get_distance_between_points($point1['0'], $point1['1'], $point2['0'], $point2['1']);
// echo '<p>The two points are '.round($distance['kilometers'],2).' kilometers apart.</p>';

$data = [ 'distance' => round($distance['kilometers'],2), 'units' => 'kilometers'];

header('Content-Type: application/json');
echo json_encode($data);

?>
