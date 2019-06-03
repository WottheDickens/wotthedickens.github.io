<?php
if (isset($_FILES['myFile'])) {
    // 
	$tmpFile = $_FILES["myFile"]["tmp_name"];
	
	date_default_timezone_set("Europe/London");
	$date = date("Ymd_His");
	$myfile = $date.'_phone';
	
	move_uploaded_file($tmpFile, 'uploads/' . $myfile . '.jpg');
	
//    move_uploaded_file($_FILES['myFile']['tmp_name'], "uploads/" . $_FILES['myFile']['name']);
    echo 'successful';
}
?>