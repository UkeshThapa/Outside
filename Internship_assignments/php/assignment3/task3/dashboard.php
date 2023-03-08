<?php
require_once( "connection/conn.php");


$sql = "SELECT * FROM anime";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    $id = $row["id"]; 
    $anime_name = $row["anime_name"];
    $writer = $row["writer_name"];
    $production_company = $row["production_company_name"];
    $type_anime = $row["type"];
    $genre = $row["genre"];
    echo "
        <tr>
            <td>.$id.</td>
            <td>$anime_name</td>
            <td>$writer</td>
            <td>$production_company</td>
            <td>$type_anime</td>
            <td>$genre</td>
            <td>
                <button><a href='edit.php?updateid=$id'>edit</a></button>
                <button><a href='delete.php?deleteid=$id'>delete</a></button>
            </td>
        </tr>";
  }
} else {
  echo "0 results";
}
$conn->close();
?>