<?php

	// Contact
	$to = 'info@azureuas.com';
  $subject = 'Video Order';

	if(isset($_POST['orderVideo_email'])){
		  $orderVideo_name             = $_POST['orderVideo_name'];
			$orderVideo_company          = $_POST['orderVideo_company'];
    	$orderVideo_email            = $_POST['orderVideo_email'];
			$orderVideo_phone            = $_POST['orderVideo_phone'];
			$orderVideo_streetAddress    = $_POST['orderVideo_streetAddress'];
			$orderVideo_cityAddress      = $_POST['orderVideo_cityAddress'];
			$orderVideo_zipCode          = $_POST['orderVideo_zipCode'];
			$orderVideo_addVideo        = $_POST['orderVideo_addVideo'];
      $orderVideo_resolution          = $_POST['orderVideo_resolution'];
			$orderVideo_message          = $_POST['orderVideo_message'];
			$orderVideo_total          = $_POST['orderVideo_total'];

			$commentsText='Name: '.$orderVideo_name.'
			Company: '.$orderVideo_company.'
			Email: '.$orderVideo_email.'
			Phone: '.$orderVideo_phone.'
			Street: '.$orderVideo_streetAddress.'
			City: '.$orderVideo_cityAddress.'
			Zip: '.$orderVideo_zipCode.'
			Add Video: '.$orderVideo_addVideo.'
      Resolution: '.$orderVideo_resolution.'
			Message: '.$orderVideo_message.'
			Total:'.$orderVideo_total;

		if (mail($to, $subject, $commentsText)) {
			$result = array(
				'message' => "We'll keep you in the loop!",
				'sendstatus' => 1
				);
			echo json_encode($result);
		} else {
			$result = array(
				'message' => 'Sorry, something is wrong',
				'sendstatus' => 1
				);
			echo json_encode($result);
		}
	}

?>
