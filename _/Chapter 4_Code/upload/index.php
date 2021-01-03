<!DOCTYPE HTML>
<html>
<head>
  <meta charset="utf-8">
  <title>jQuery File Upload Example</title>
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <link rel="stylesheet" href="css/styles.css">
  <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
  <script src="js/jquery.ui.widget.js"></script>
  <script src="js/jquery.iframe-transport.js"></script>
  <script src="js/jquery.fileupload.js"></script>
  <script src="js/uploadfiles.js"></script>
</head>
<body>
<div class="container">  
  <span class="btn btn-success fileinput-button">
    <span>Select files...</span>
    <input id="fileupload" type="file" name="files[]" multiple>
  </span>
  
  <p>Upload progress</p>
  <div id="progress" class="progress progress-success progress-striped">
    <div class="bar"></div>
  </div>
  
  <p>Files uploaded:</p>
  <ul id="files"></ul>
</div>
</body> 
</html>