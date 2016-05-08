<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>SC2tracker</title>
    <!-- Bootstrap -->
    <link href="../css/bootstrap.min.css" rel="stylesheet">
    <link href="../css/dashboard.css" rel="stylesheet">
  </head>

  <body>
    <?php
    $id = '';
    $name = '';
    $realm = '';

    if((isset($_GET['id']) && $_GET['id'] != '') && (isset($_GET['name']) && $_GET['name'] != '') && (isset($_GET['realm']) && $_GET['realm'] != '')) {
      $id = $_GET['id'];
      $name = $_GET['name'];
      $realm = $_GET['realm'];
    }
    ?>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script type="text/javascript">
      var id = "<?= $id ?>";
      var realm = "<?= $realm ?>";
      var name = "<?= $name ?>";
    </script>
    <script src="../../../../assets/js/dashboard.js"></script>

    <!-- <div class="main-background"> -->
      <div class="header-bar">
        <div class="main-header">
          <div id="title"></div>
          <div class="user-info">
            <p class="desktop-name"><?php echo $name ?></p>
            
            <div id="portrait-container">
              <img id="portrait">
            </div>
            <p class="mobile-name"><?php echo $name ?></p>
          </div>
        </div>
      </div>
      <?php
      if((isset($_GET['id']) && $_GET['id'] != '') && (isset($_GET['name']) && $_GET['name'] != '') && (isset($_GET['realm']) && $_GET['realm'] != '')) {
      ?>
      <div class="main-container">

        <div class="widget-column">
          <div class="widget-container">
            <div class="widget-data" id="profile-widget">
              <?php
                $this->renderPartial('profile-widget', array('id' => $id, 'realm' => $realm, 'name' => $name) ); 
              ?>
            </div>
            <div class="widget-base">profile</div>
          </div>
        </div>

        <div class="widget-column">
          <div class="widget-container">
            <div class="widget-data" id="ladder-widget">
              <?php
                $this->renderPartial('ladder-widget', array('id' => $id, 'realm' => $realm, 'name' => $name) ); 
              ?>
            </div>
            <div class="widget-base">ladder</div>
          </div>
        </div>

        <div class="widget-column">
          <div class="widget-container">
            <div class="widget-data" id="grandmaster-widget">
              <?php
                $this->renderPartial('grandmaster-widget', array('id' => $id, 'realm' => $realm, 'name' => $name) ); 
              ?>
            </div>
            <div class="widget-base">grandmaster</div>
          </div>
        </div>

        <!-- <div class="widget-column">
          <div class="widget-container">
            <div class="widget-data" id="winloss-widget">
              <?php
                // $this->renderPartial('grandmaster-widget', array('id' => $id, 'realm' => $realm, 'name' => $name) ); 
              ?>
            </div>
            <div class="widget-base">win/loss</div>
          </div>
        </div>

        <div class="widget-column">
          <div class="widget-container">
            <div class="widget-data" id="streak-widget">
              <?php
                // $this->renderPartial('grandmaster-widget', array('id' => $id, 'realm' => $realm, 'name' => $name) ); 
              ?>
            </div>
            <div class="widget-base">play streak</div>
          </div>
        </div>

        <div class="widget-column">
          <div class="widget-container">
            <div class="widget-data" id="history-widget">
              <?php
                // $this->renderPartial('grandmaster-widget', array('id' => $id, 'realm' => $realm, 'name' => $name) ); 
              ?>
            </div>
            <div class="widget-base">match history</div>
          </div>
        </div> -->

      </div>
      <?php 
      }
      ?>
    <!-- </div> -->

  </body>
</html>