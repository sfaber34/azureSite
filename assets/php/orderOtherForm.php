<?php

	// Contact
	$to = 'info@azureuas.com';
  $subject = 'Other Order';

	if(isset($_POST['orderOther_email'])){
		  $orderOther_name             = $_POST['orderOther_name'];
			$orderOther_company          = $_POST['orderOther_company'];
    	$orderOther_email            = $_POST['orderOther_email'];
			$orderOther_phone            = $_POST['orderOther_phone'];
			$orderOther_message          = $_POST['orderOther_message'];

      $commentsText='Name: '.$orderOther_name.'
			Company: '.$orderOther_company.'
			Email: '.$orderOther_email.'
			Phone: '.$orderOther_phone.'
			Message: '.$orderOther_message;


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
