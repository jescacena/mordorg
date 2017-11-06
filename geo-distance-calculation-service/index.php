<?php
/*
Description: Distance calculation from the latitude/longitude of 2 points
Author: Rajesh Singh (2014)
Website: http://AssemblySys.com

If you find this script useful, you can show your
appreciation by getting Rajesh a cup of coffee ;)
PayPal: rajesh.singh@assemblysys.com

As long as this notice (including author name and details) is included and
UNALTERED, this code is licensed under the GNU General Public License version 3:
http://www.gnu.org/licenses/gpl.html
*/

function distanceCalculation($point1_lat, $point1_long, $point2_lat, $point2_long, $unit = 'km', $decimals = 2) {
	// Calculate the distance in degrees
	$degrees = rad2deg(acos((sin(deg2rad($point1_lat))*sin(deg2rad($point2_lat))) + (cos(deg2rad($point1_lat))*cos(deg2rad($point2_lat))*cos(deg2rad($point1_long-$point2_long)))));

	// Convert the distance in degrees to the chosen unit (kilometres, miles or nautical miles)
	switch($unit) {
		case 'km':
			$distance = $degrees * 111.13384; // 1 degree = 111.13384 km, based on the average diameter of the Earth (12,735 km)
			break;
		case 'mi':
			$distance = $degrees * 69.05482; // 1 degree = 69.05482 miles, based on the average diameter of the Earth (7,913.1 miles)
			break;
		case 'nmi':
			$distance =  $degrees * 59.97662; // 1 degree = 59.97662 nautic miles, based on the average diameter of the Earth (6,876.3 nautical miles)
	}
	return round($distance, $decimals);
}
?>

<?php
// origin
// lat:40.74347240000001
// lng:-4.047716499999979
//
// destination
// lat:40.76330613530001
// lng:-4.03435500460000

$point1 = array("lat" => "40.74347240000001", "long" => "-4.047716499999979"); // Paris (France)
$point2 = array("lat" => "40.76330613530001", "long" => "-4.03435500460000"); // Mexico City (Mexico)
$km = distanceCalculation($point1['lat'], $point1['long'], $point2['lat'], $point2['long']); // Calculate distance in kilometres (default)
$mi = distanceCalculation($point1['lat'], $point1['long'], $point2['lat'], $point2['long'], 'mi'); // Calculate distance in miles
$nmi = distanceCalculation($point1['lat'], $point1['long'], $point2['lat'], $point2['long'], 'nmi'); // Calculate distance in nautical miles
echo "The distance between Paris (France) and Mexico City (Mexico) is $km km (= $mi miles = $nmi nautical miles)";
?>
