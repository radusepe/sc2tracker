<link href="../css/ladder-widget.css" rel="stylesheet">
<script src="../../../../assets/js/ladder-widget.js"></script>
<div style="height: 100%; width: 100%; color: #417292;">
	<div class="league-container">
		<div id="league-symbol">
		</div>
	</div>
	<?php
	for($i = 1; $i < 6; $i++){
		echo '<div id="row'.$i.'" class="row ';
		if($i % 2 == 0){
			echo 'even-row';
		}
		else{
			echo 'odd-row';
		}
		echo '">';

		echo '<div class="rank" id="rank'.$i.'"></div>';
		echo '<div class="race" id="race'.$i.'"></div>';
		echo '<div class="name" id="name'.$i.'"></div>';

		echo '</div>';
	}
	?>
</div>