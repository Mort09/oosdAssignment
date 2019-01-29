<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Links | Travel Experts Agency</title>

        <link href="https://fonts.googleapis.com/css?family=Marck+Script|Aclonica|Berkshire+Swash|Metrophobic" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/10up-sanitize.css/8.0.0/sanitize.css">
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        <!-- Begin Header -->
        <header class="container-header">

                <!-- Begin Bootstrap Nav -->
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container">
                        <a class="navbar-brand" href="index.php"><img src="img/logo3.png" alt="logo" width="50" height="50"></a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul class="navbar-nav" id="navbar-cont">
                                <li class="nav-item">
                                    <a class="nav-link" href="index.php"><i class="fas fa-home fa-2x" title="home" alt="home"></i> <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <!-- <img src="img/add-contacts.png" alt="register" title="Register" width="40" height="40"> -->
                                    <a class="nav-link" href="gallery.php"><i class="far fa-images fa-2x" title="Gallery"></i></a>
                                </li>
                                <li class="nav-item">
                                    <!-- <img src="img/contact.png" alt="contact" title="Contact" width="40" height="40"> -->
                                    <a class="nav-link" href="contact.php"><i class="fas fa-mail-bulk fa-2x" title="Contact"></i></a>
                                </li>
                                <li class="nav-item">
                                    <!-- <img src="img/add-contacts.png" alt="register" title="Register" width="40" height="40"> -->
                                    <a class="nav-link" href="register.php"><i class="fas fa-user-plus fa-2x" title="Register"></i></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="link.php"><i class="fas fa-link fa-2x" title="links"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <!-- End Bootstrap Nav -->
                
            </div>

            <div class="jumbotron jumbotron-fluid jumbotron-php">
                <div class="container">
                    <h1 class="display-4 register-greetings h1-responsive">links</h1>
                    <hr class="my-4">
                    <p class="lead register-heading">Create some links</p>
                </div>
            </div>

        </header>
        <!-- End Header -->
        <br>

        <!-- Begin Main -->
        <main>
            <div class="container">

                <div class="register-main">

                    <div class="register-box">

                        <div class="table-responsive-sm container" id="php-table-container">
                            <?php

                                $tableOpen = "<table class='table table-hover'>";
                                $tableClose = "</table>";
                                $rows = 6;
                                $cols = 2;

                                $row_no = 0;

                                $row_links = [
                                    'page1.php', 'page2.php', 'page3.php',
                                    'page4.php', 'page5.php', 'page6.php'
                                ];

                                $page_name = [
                                    'page1', 'page2', 'page3',
                                    'page4', 'page5', 'page6'
                                ];

                                echo $tableOpen;
                                    echo "<tr> <th>Serial no.</th> <th>Links</th> </tr>";

                                    for ($i = 0; $i < $rows; $i++) {
                                        
                                        $row_no += 1;

                                        echo "<tr>";
                                        
                                         echo "<td> $row_no </td> <td> <a href='$row_links[$i]'> $page_name[$i] </a></td>";
                                        
                                         // for($j = 1; $j <= $cols; $j++) {
                                        //     // $k = $i * $j;
                                            
                                        //     echo "<td> $k $row_links[$i] </td>";                                       

                                        // }

                                        echo "</tr> \n <br>";
                                    }
                                echo $tableClose;
                            ?>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <!-- End Main -->

        <!-- Begin Footer -->
        <footer>
            <div class="footer">
                <p> kabal tech &copy; 2019</p>
            </div>
        </footer>
        <!-- End Footer -->

        <!-- Begin JavaScript -->
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
        <!-- <script src="js/main-gallery.js"></script> -->
        <script src="js/main.js"></script>
        <!-- End JavaScript -->
    
    </body>
</html>