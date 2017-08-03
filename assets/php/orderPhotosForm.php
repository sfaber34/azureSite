<?php

	// Contact
	$to = 'orders@azureuas.com';
  $subject = 'Photo Order';

	if(isset($_POST['orderPhotos_email'])){
		  $orderPhotos_name             = $_POST['orderPhotos_name'];
			$orderPhotos_company          = $_POST['orderPhotos_company'];
    	$orderPhotos_email            = $_POST['orderPhotos_email'];
			$orderPhotos_phone            = $_POST['orderPhotos_phone'];
			$orderPhotos_streetAddress    = $_POST['orderPhotos_streetAddress'];
			$orderPhotos_cityAddress      = $_POST['orderPhotos_cityAddress'];
			$orderPhotos_zipCode          = $_POST['orderPhotos_zipCode'];
			$orderPhotos_addPhotos        = $_POST['orderPhotos_addPhotos'];
			$orderPhotos_message          = $_POST['orderPhotos_message'];

			$commentsText='Name: '.$orderPhotos_name.'
			Company: '.$orderPhotos_company.'
			Email: '.$orderPhotos_email.'
			Phone: '.$orderPhotos_phone.'
			Street: '.$orderPhotos_streetAddress.'
			City: '.$orderPhotos_cityAddress.'
			Zip: '.$orderPhotos_zipCode.'
			Add Photos: '.$orderPhotos_addPhotos.'
			Message: '.$orderPhotos_message;

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
