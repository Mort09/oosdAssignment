<?php

print('
<nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
        <a class="navbar-brand" href="index.php"><img src="img/logo3.png" alt="logo" width="50" height="50"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav" id="navbar-cont">
                <li class="nav-item">
                    <a class="nav-link" href="index.php" data-toggle="tooltip" data-placement="bottom" title="home"><i class="fas fa-home fa-2x" alt="home"></i> <span class="sr-only">(current)</span><span class="d-md-none nav-hidden">Home</span></a>
                </li>
                <li class="nav-item">
                    <!-- <img src="img/add-contacts.png" alt="register" title="Register" width="40" height="40"> -->
                    <a class="nav-link" href="gallery.php"><span class="d-md-block"><i class="far fa-images fa-2x" title="Gallery"></i></span><span class="d-md-none nav-hidden">Gallery</span></a>
                </li>
                <li class="nav-item">
                    <!-- <img src="img/contact.png" alt="contact" title="Contact" width="40" height="40"> -->
                    <a class="nav-link" href="contact.php"><span class="d-md-block"><i class="fas fa-mail-bulk fa-2x" title="Contact"></i></span><span class="d-md-none nav-hidden">Contact</span></a>
                </li>
                <li class="nav-item">
                    <!-- <img src="img/add-contacts.png" alt="register" title="Register" width="40" height="40"> -->
                    <a class="nav-link" href="register.php"><span class="d-md-block"><i class="fas fa-user-plus fa-2x" title="Register"></i></span><span class="d-md-none nav-hidden">Register</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="links.php"><i class="fas fa-link fa-2x" title="links"></i></a>
                </li>
            </ul>
        </div>
    </div>
</nav>'
);
?>