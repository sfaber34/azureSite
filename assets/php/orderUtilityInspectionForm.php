<?php

	// Contact
	$to = 'orders@azureuas.com';
  $subject = 'Infrastructure Inspection Order';

	if(isset($_POST['orderUtilityInspection_email'])){
		  $orderUtilityInspection_name             = $_POST['orderUtilityInspection_name'];
			$orderUtilityInspection_company          = $_POST['orderUtilityInspection_company'];
    	$orderUtilityInspection_email            = $_POST['orderUtilityInspection_email'];
			$orderUtilityInspection_phone            = $_POST['orderUtilityInspection_phone'];
			$orderUtilityInspection_streetAddress    = $_POST['orderUtilityInspection_streetAddress'];
			$orderUtilityInspection_cityAddress      = $_POST['orderUtilityInspection_cityAddress'];
			$orderUtilityInspection_zipCode          = $_POST['orderUtilityInspection_zipCode'];
      $orderUtilityInspection_format          = $_POST['orderUtilityInspection_format'];
			$orderUtilityInspection_message          = $_POST['orderUtilityInspection_message'];
			$orderUtilityInspection_total          = $_POST['orderUtilityInspection_total'];

			$commentsText='Name: '.$orderUtilityInspection_name.'
			Company: '.$orderUtilityInspection_company.'
			Email: '.$orderUtilityInspection_email.'
			Phone: '.$orderUtilityInspection_phone.'
			Street: '.$orderUtilityInspection_streetAddress.'
			City: '.$orderUtilityInspection_cityAddress.'
			Zip: '.$orderUtilityInspection_zipCode.'
      Format: '.$orderUtilityInspection_format.'
			Message: '.$orderUtilityInspection_message.'
			Total:'.$orderUtilityInspection_total;

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
