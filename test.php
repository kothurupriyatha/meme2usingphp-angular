<?php
$con = mysqli_connect("localhost","root","","angular");
mysqli_set_charset($con, "utf8");

$sql = "SELECT Photo FROM imagedb";
$result = mysqli_query($con,$sql);

 //$data = file_get_contents("C:/Users/Priyatha/Downloads/PUPPY.jpg");
//echo $data;

$a=array();
//array_push($a,"blue","yellow");

//var imgs:blob[]; 
if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
	  array_push($a,$row["Photo"]);
    
  }
echo $a[0];


}

$row = mysqli_fetch_assoc($result);
//echo $row['Photo'];
print "hello";

?>