
<?php

if (isset($_SERVER['HTTP_ORIGIN'])) {
    //header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Credentials: true');    
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); 
}   
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers:{$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);
} 




$con = mysqli_connect("localhost","root","","angular");
mysqli_set_charset($con, "utf8");

if($_FILES["stphoto"])  
 {  
   $tmporary = $_FILES["stphoto"]["tmp_name"];
   $file_name = $_FILES["stphoto"]["name"];
      if(move_uploaded_file($tmporary,"img/"."$file_name"))

    {

       if($file = addslashes(file_get_contents("img/"."$file_name")))
       {
		   //$image1 =$_FILES["stphoto"]["tmp_name"];
		    $data = file_get_contents("img/"."$file_name");
            $data = mysql_real_escape_string($data);
		   //$image = base64_encode(addcslashes(file_get_contents($image1));

		   
          $sql = "INSERT INTO imagedb  VALUES ('$data')";
            mysqli_query($con,$sql);
           // mysqli_query($con,"ALTER TABLE imagedb AUTO_INCREMENT = 1");
           // print json_encode(gettype("$image"));
       }
    }

       else
        echo json_encode("error");
 }

   print json_encode("succesfully testimage");
	//print("heelo from post method");
 
?>