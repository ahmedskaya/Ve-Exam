<?php
//REQUEST
$productName = $_GET['product'];
$session = $_GET['sessionId'];
$spec = $_GET['specifications'];

// SET HK TIMEZONE
date_default_timezone_set('Asia/Hong_Kong');

// PRODUCT SPECs
$specDetails = '';
$spec = explode("||",$spec);
for($i=0; $i<count($spec); $i++){
    $i%2 == 0 ? $specDetails .= " ".$spec[$i].": " : $specDetails .= $spec[$i]."\n";
}

// RESPONSE
if(isset($session)){
    echo "Order Processed:\n"
	    .strtoupper($productName)."\n"
	    .strtoupper($specDetails);
    echo date("d/m/Y H:i");
}else{
    echo "!session";
}