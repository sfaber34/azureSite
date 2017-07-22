<?php

	// Contact
	$to = 'sfaber34@gmail.com';
    $subject = 'EmailListSignup';

	if(isset($_POST['c_email'])){
    	$from    = $_POST['c_email'];

		if (mail($to, $subject, $from)) {
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
