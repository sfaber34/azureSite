<?php

	// Contact
	$to = 'orders@azureuas.com';
  $subject = 'Cut/Fill Order';

	if(isset($_POST['orderCutfill_email'])){
		  $orderCutfill_name             = $_POST['orderCutfill_name'];
			$orderCutfill_company          = $_POST['orderCutfill_company'];
    	$orderCutfill_email            = $_POST['orderCutfill_email'];
			$orderCutfill_phone            = $_POST['orderCutfill_phone'];
			$orderCutfill_streetAddress    = $_POST['orderCutfill_streetAddress'];
			$orderCutfill_cityAddress      = $_POST['orderCutfill_cityAddress'];
			$orderCutfill_zipCode          = $_POST['orderCutfill_zipCode'];
			$orderCutfill_message          = $_POST['orderCutfill_message'];
			$orderCutfill_total          = $_POST['orderCutfill_total'];

			$commentsText='Name: '.$orderCutfill_name.'
			Company: '.$orderCutfill_company.'
			Email: '.$orderCutfill_email.'
			Phone: '.$orderCutfill_phone.'
			Street: '.$orderCutfill_streetAddress.'
			City: '.$orderCutfill_cityAddress.'
			Zip: '.$orderCutfill_zipCode.'
			Message: '.$orderCutfill_message.'
			Total:'.$orderCutfill_total;

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
