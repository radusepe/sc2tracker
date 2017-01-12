<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>SC2tracker</title>
    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="../css/login.css" rel="stylesheet">
    <link href='https://fonts.googleapis.com/css?family=Open+Sans+Condensed:700' rel='stylesheet' type='text/css'>
  </head>

  <body>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="../../../../assets/js/login.js"></script>
    <div class="main-background">
      <div class="login-card">
        <div class="demo">
          <a href="/?&id=2538432&realm=1&name=radu">Demo</a>
        </div>
        <div class="login-container">
          <div class="top-rim"></div>
          <div id="title">
            <img src="/images/title.png" alt="SC2tracker">
          </div>

          <form name="login" action="" method="post" onsubmit="return validateForm()">
            <div class="form-group">
              <label for="login-url">SC2 PROFILE URL</label>
              <input type="text" class="form-control" id="InputUrl" name="profileUrl" placeholder="URL">
            </div>
            <div id="error-message" style="display:none;">
              The URL you provided is not valid
            </div>
            <!-- <div class="form-group">
              <label for="login-email">EMAIL</label>
              <input type="email" class="form-control" id="InputEmail" placeholder="EMAIL">
            </div>
            <div class="form-group">
              <label for="login-password">PASSWORD</label>
              <input type="password" class="form-control" id="InputPassword" placeholder="PASSWORD">
            </div> -->
            <div class="form-group">
              <button type="submit" class="btn btn-default" name="submit">Submit</button>
            </div>
          </form>

        </div>
      </div>
    </div>

  </body>
</html>