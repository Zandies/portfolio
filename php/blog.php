<!DOCTYPE html>
<html>
	<meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    <script src="js/jquery.js"></script>
    <script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>
    <script type="text/javascript">
    window.addEventListener('load', function(){
      document.getElementById('loader').style.display = 'none';
    });
    </script>
    <link rel="stylesheet" type="text/css" href="../css/style.css" />
    <link rel="stylesheet" href="../css/article.css">
    <link rel="stylesheet" href="../css/responsive.css">
    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet"> 
    <link rel="stylesheet" href="../css/animations.css">
    <!-- <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script> -->
    <link rel="icon" href="../img/favicon.ico" />
    <title>Test Parallax</title>
  </head>
  <body>
  <div id="loader">
  </div>
  <header>
    <div class="burger" onclick="burger(this)">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </div>
    <nav>
     <a class="nav-option" href="#">Accueil</a>
     <a class="nav-option" href="#">Jeu de Rôle</a>
     <a class="nav-option" href="#" id="code">Code</a>
     <a href="#" class="subnav-option-burger">HTML/CSS</a>
     <a href="#" class="subnav-option-burger">JS/JQuery</a>
     <a href="#" class="subnav-option-burger">PHP/MySQl</a>
     <a href="#" class="subnav-option-burger">Linux</a>
     <div class="dropdown">
        <a class="nav-option" href="#" id="dropbtn">Code</a>
        <div class="dropdown-content">
          <a class="subnav-option" href="#">HTML/CSS</a>
          <a class="subnav-option" href="#">Javascript/JQuery</a>
          <a class="subnav-option" href="#">PHP/MySQL</a>
          <a class="subnav-option" href="#">Linux</a>
        </div>
    </div>
     <a class="nav-option" href="#box3" id="contact">Contact</a>
  </header>
 
  <article>
  	<div class="banner-article">
  		<p id="banner-title">Lorem ipsum</p>
  	</div>
  	<div class="content-article">
	  	<!-- <div class="info-article">
	  		<img id="author" src="../img/author.jpg">
	  	</div> -->
  		<h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident nobis nostrum nam, error et labore. Atque, molestiae.</h3>
  		<p>Salut !  Ceci est mon premier article "intitulé "Lorem ipsum", un nom bien étrange qui est utilisé dans le domaine de l'informatique pour remplir des zones qui contiendront du texte mais on ne sait pas encore lequel.
  		Donc voici le texte : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aspernatur. Cupiditate dolor quae debitis, sequi saepe sit deserunt nobis porro, magnam, placeat omnis, reprehenderit vel quam voluptates soluta fuga magni." Cela signifie un truc comme "Personne n'aime la douleur pour la douleur...". Ha et oui, Hufflepuff Forever ! ^^</p>
  		<img id="hufflepuff" src="../img/Hufflepuff_Logo.png">
  		<span id="signature">Zandies Scepoli</span>
  	</div>
  </article>

  <div class="comments">
  	
  </div>

  <footer>
    <a href="#"><img src="../img/Github_Logo.png" alt=""></a>
    <p>
      Fait avec les moyens du bord, à l'arrache comme on l'aime, l'image est gratuite et libre de droits - Zandies &copy; - Ca ne sert à rien mais c'est toujours classe d'avoir ce logo ;)
    </p>
    <a href="#"><img src="../img/Facebook_Logo.png" alt=""></a>
  </footer>

  <script src="../js/test.js"></script>
	</body>
</html>