<?php

	// Contact
	$to = 'info@azureuas.com';
  $subject = 'Sitemap Order';

	if(isset($_POST['orderSitemap_email'])){
		  $orderSitemap_name             = $_POST['orderSitemap_name'];
			$orderSitemap_company          = $_POST['orderSitemap_company'];
    	$orderSitemap_email            = $_POST['orderSitemap_email'];
			$orderSitemap_phone            = $_POST['orderSitemap_phone'];
			$orderSitemap_streetAddress    = $_POST['orderSitemap_streetAddress'];
			$orderSitemap_cityAddress      = $_POST['orderSitemap_cityAddress'];
			$orderSitemap_zipCode          = $_POST['orderSitemap_zipCode'];
      $orderSitemap_format          = $_POST['orderSitemap_format'];
			$orderSitemap_message          = $_POST['orderSitemap_message'];
			$orderSitemap_total          = $_POST['orderSitemap_total'];

			$commentsText='Name: '.$orderSitemap_name.'
			Company: '.$orderSitemap_company.'
			Email: '.$orderSitemap_email.'
			Phone: '.$orderSitemap_phone.'
			Street: '.$orderSitemap_streetAddress.'
			City: '.$orderSitemap_cityAddress.'
			Zip: '.$orderSitemap_zipCode.'
      Format: '.$orderSitemap_format.'
			Message: '.$orderSitemap_message.'
			Total:'.$orderSitemap_total;

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
