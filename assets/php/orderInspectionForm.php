<?php

	// Contact
	$to = 'info@azureuas.com';
  $subject = 'Inspection Order';

	if(isset($_POST['orderInspection_email'])){
		  $orderInspection_name             = $_POST['orderInspection_name'];
			$orderInspection_company          = $_POST['orderInspection_company'];
    	$orderInspection_email            = $_POST['orderInspection_email'];
			$orderInspection_phone            = $_POST['orderInspection_phone'];
			$orderInspection_streetAddress    = $_POST['orderInspection_streetAddress'];
			$orderInspection_cityAddress      = $_POST['orderInspection_cityAddress'];
			$orderInspection_zipCode          = $_POST['orderInspection_zipCode'];
      $orderInspection_format          = $_POST['orderInspection_format'];
			$orderInspection_message          = $_POST['orderInspection_message'];
			$orderInspection_total          = $_POST['orderInspection_total'];

			$commentsText='Name: '.$orderInspection_name.'
			Company: '.$orderInspection_company.'
			Email: '.$orderInspection_email.'
			Phone: '.$orderInspection_phone.'
			Street: '.$orderInspection_streetAddress.'
			City: '.$orderInspection_cityAddress.'
			Zip: '.$orderInspection_zipCode.'
      Format: '.$orderInspection_format.'
			Message: '.$orderInspection_message.'
			Total:'.$orderInspection_total;

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
