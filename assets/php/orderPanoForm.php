<?php

	// Contact
	$to = 'orders@azureuas.com';
  $subject = 'Pano Order';

	if(isset($_POST['orderPano_email'])){
		  $orderPano_name             = $_POST['orderPano_name'];
			$orderPano_company          = $_POST['orderPano_company'];
    	$orderPano_email            = $_POST['orderPano_email'];
			$orderPano_phone            = $_POST['orderPano_phone'];
			$orderPano_streetAddress    = $_POST['orderPano_streetAddress'];
			$orderPano_cityAddress      = $_POST['orderPano_cityAddress'];
			$orderPano_zipCode          = $_POST['orderPano_zipCode'];
			$orderPano_message          = $_POST['orderPano_message'];
			$orderPano_total          = $_POST['orderPano_total'];

			$commentsText='Name: '.$orderPano_name.'
			Company: '.$orderPano_company.'
			Email: '.$orderPano_email.'
			Phone: '.$orderPano_phone.'
			Street: '.$orderPano_streetAddress.'
			City: '.$orderPano_cityAddress.'
			Zip: '.$orderPano_zipCode.'
			Message: '.$orderPano_message.'
			Total:'.$orderPano_total;

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
