<!-- <link href="../css/ladder-widget.css" rel="stylesheet"> -->
<script src="../../../../assets/js/grandmaster-widget.js"></script>
<div style="height: 100%; width: 100%; color: #417292;">
	<div class="league-container">
		<div id="gmleague-symbol">
		</div>
	</div>
	<?php
	for($i = 1; $i < 6; $i++){
		echo '<div id="gmrow'.$i.'" class="row ';
		if($i % 2 == 0){
			echo 'even-row';
		}
		else{
			echo 'odd-row';
		}
		echo '">';

		echo '<div class="rank" id="gmrank'.$i.'"></div>';
		echo '<div class="race" id="gmrace'.$i.'"></div>';
		echo '<div class="name" id="gmname'.$i.'"></div>';

		echo '</div>';
	}
	?>
</div>