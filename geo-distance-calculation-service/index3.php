<?php

// origin
// lat:40.74347240000001
// lng:-4.047716499999979
//
// destination
// lat:40.76330613530001
// lng:-4.03435500460000

$lat1 = 40.74347240000001;
$lon1 = -4.047716499999979;

$lat2 = 40.76330613530001;
$lon2 = -4.03435500460000;

$distance = (3958*3.1415926*sqrt(($lat2-$lat1)*($lat2-$lat1) + cos($lat2/57.29578)*cos($lat1/57.29578)*($lon2-$lon1)*($lon2-$lon1))/180);

print($distance);

?>
