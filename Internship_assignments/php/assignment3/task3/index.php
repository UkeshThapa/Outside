<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style/dashboard.css">
    <title>Anime management system</title>
</head>
<body>
    <div class="main">
        <header class="page_header">
            Dashboard
        </header>
        <div class="table_detail_header">
            <button><a href="post.html">Add ticket</a></button>
        </div>
        <table class="table">
            <tr class="table_header">
                <th>Id</th>
                <th>Name</th>
                <th>Author</th>
                <th>Production</th>
                <th>Anime Type</th>
                <th>Genre</th>
                <th></th>
            </tr>
            <?php include 'dashboard.php' ?>
        </table>
    </div>
</body>
</html>