<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA_Compatible" content="ie=edge">
    <title>Keno loto</title>
    <script src="loto.js"></script>
	<script src="serviceworker.js"></script>
	<link rel="stylesheet" type="text/css" href="disain.css">	
</head>
	
<body id="body">

	<p id="titleYourNumbers"> Vali piletile numbrid </p>
	
	<?php
		for ($i = 1; $i <= 8; $i++) {
			echo "<div>";
			for ($j = 1; $j <= 8; $j++) {
				$index = 8*($i-1)+$j;
				echo "<button class='rows' id='lotoNumber$index' type='button' value=$index onclick='lotoNumbers(this.value)'><b>$index</b></button>";
			}
			echo "</div>";
		}
		
		echo "<div>";
		for ($i = 1; $i <= 10; $i++) {
			echo "<input class='ticketNumbers' id='ticketNumberPlace$i' type='text'>";
		}
		echo "</div>";
	?>
	
	<button id="fixNumbers" type="button" onclick="fixNumbers()">Fikseeri piletil olevad numbrid</button>
	
	<p id="bet"> Sisesta panuse suurus (1-100 eurot): </p>
	
	<input id="betSize" type="number" min="1" max="100" value="1">
	
	<button id="fixBet" type="button" onclick="fixBet()">Fikseeri</button>
	
	<p id="titleKeno"> Keno loto numbrid </p>
	
	<?php
		
		echo "<div>";
		for ($i = 1; $i <= 10; $i++) {
			echo "<input class='lotoNumbers' id='randomNumber$i' type='text'>";
		}
		echo "</div>";
		
	?>
	
	<button id="generateNumbers" type="button" onclick="generateNumbers()">Vali juhuslikud numbrid</button>
	
	<p id="rightNumbers"></p>
	
	<p id="winTitle"></p>
	
	<button id="playAgain" type="button" onclick="playAgain()">Mängi uuesti</button>

</body>

</html>