<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<div class="main">
        <div class="container">
            <header class="header">
                <h2>update Anime Information</h2>
            </header>
            <?php
                require_once( "connection/conn.php");
                $anime_id = $_GET['updateid'];
                $sql = "SELECT * FROM anime WHERE id = $anime_id ";
                $result =  $conn->query($sql);

                if($result){
                    $row = $result->fetch_assoc();
                    $anime_name = $row["anime_name"];
                    $writer = $row["writer_name"];
                    $production_company = $row["production_company_name"];
                    $type_anime = $row["type"];
                    $genre = $row["genre"];
                }


            ?>
            <form method="post" action="editAction.php">
                <input type="hidden" id="anime_id" name="anime_id" value="<?php  echo $anime_id; ?>" required>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" value="<?php  echo $anime_name; ?>" required><br><br>
                <label for="writer">writer:</label>
                <input type="text" id="writer" name="writer" value="<?php  echo $writer; ?>" required><br><br>
                <label for="company">production company:</label>
                <input type="text" id="company" name="company" value="<?php  echo $production_company; ?>" required><br><br>
                <label for="type">Anime Type:</label><br>
                <input type="radio" id="company" name="type" value="series" <?php if ($type_anime == 'series') echo 'checked'; ?> required>
                <label for="type">series</label><br>
                <input type="radio" id="company" name="type" value="movie" <?php if ($type_anime == 'movie') echo 'checked'; ?>  required>
                <label for="type">movie</label><br><br>
                <label for="genre">Genre:</label><br>
                <input type="text" id="genre" name="genre" value="<?php  echo $genre; ?>" required><br><br>

                <input type="submit" value="Submit">
            </form>
        </div>
    </div>
</body>
</html>










