<?php

	// Contact
	$to = 'orders@azureuas.com';
  $subject = '3D Model Order';

	if(isset($_POST['orderModel_email'])){
		  $orderModel_name             = $_POST['orderModel_name'];
			$orderModel_company          = $_POST['orderModel_company'];
    	$orderModel_email            = $_POST['orderModel_email'];
			$orderModel_phone            = $_POST['orderModel_phone'];
			$orderModel_streetAddress    = $_POST['orderModel_streetAddress'];
			$orderModel_cityAddress      = $_POST['orderModel_cityAddress'];
			$orderModel_zipCode          = $_POST['orderModel_zipCode'];
      $orderModel_format          = $_POST['orderModel_format'];
			$orderModel_message          = $_POST['orderModel_message'];
			$orderModel_total          = $_POST['orderModel_total'];

			$commentsText='Name: '.$orderModel_name.'
			Company: '.$orderModel_company.'
			Email: '.$orderModel_email.'
			Phone: '.$orderModel_phone.'
			Street: '.$orderModel_streetAddress.'
			City: '.$orderModel_cityAddress.'
			Zip: '.$orderModel_zipCode.'
      Format: '.$orderModel_format.'
			Message: '.$orderModel_message.'
			Total:'.$orderModel_total;

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
