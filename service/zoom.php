<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization');

require __DIR__ . '/env.php';

$zoom_api_key = Config::ZOOM_KEY;
$zoom_api_secret = Config::ZOOM_SECRET;
$zoomJoinUrl = Config::ZOOM_JOIN_URL;
$zoom_role = 0;
$data = [];
$active = false;
$zoomUrl = "https://zoom.us/j";
$showedPassword = '';

if(isset($_GET['id']) && isset($_GET['pass'])) {
	$meetingId = $_GET['id'];
	$password = $_GET['pass'];
	$showedPassword = "| pass: $password";
	$zoomUrl = "$zoomUrl/$meetingId";

	if(in_array($meetingId, array_keys($zoomJoinUrl))) {
		$zoomUrl = $zoomJoinUrl[$meetingId];
		$showedPassword = '';
	}
	
	$signature = generate_signature($meetingId);
	
	$active = true;
	$data = [
		"meetingNumber" => $meetingId,
		"userName" => "Jamaah IWKZ Berlin",
		"signature" => $signature,
		"apiKey" => $zoom_api_key,
		"password" => $password,
	];
}

function generate_signature ($meeting_number){
	global $zoom_api_key, $zoom_api_secret, $zoom_role;

	$time = time() * 1000 - 30000;//time in milliseconds (or close enough)
	
	$data = base64_encode($api_key . $meeting_number . $time . $role);
	
	$hash = hash_hmac('sha256', $data, $api_secret, true);
	
	$_sig = $api_key . "." . $meeting_number . "." . $time . "." . $role . "." . base64_encode($hash);
	
	//return signature, url safe base64 encoded
	return rtrim(strtr(base64_encode($_sig), '+/', '-_'), '=');
}

?>

<!DOCTYPE html>
<head>
    <title>IWKZ Zoom Client</title>
    <meta charset="utf-8" />
    <link type="text/css" rel="stylesheet" href="https://source.zoom.us/1.7.5/css/bootstrap.css"/>
    <link type="text/css" rel="stylesheet" href="https://source.zoom.us/1.7.5/css/react-select.css"/>
    <meta name="format-detection" content="telephone=no">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
</head>
<body>
<style>
    body {
        padding-top: 50px;
    }
	#join_meeting {
		margin-top: 20px;
		margin-bottom: 20px;
	}
</style>

<?php if($active) {?> 
	<nav id="nav-tool" class="navbar navbar-inverse navbar-fixed-top">
	<div class="container">
        <div id="navbar">
			<button type="button" class="btn btn-primary btn-lg btn-block" id="join_meeting">Join Langsung</button>
			<a href="<?=$zoomUrl?>" target="_blank">
				<button type="button" class="btn btn-danger btn-lg btn-block">Join via Zoom-App <?="$showedPassword"?></button>
			</a>
        </div><!--/.navbar-collapse -->
    </div>
	</nav>
<?php }?>

<script src="https://source.zoom.us/1.7.5/lib/vendor/react.min.js"></script>
<script src="https://source.zoom.us/1.7.5/lib/vendor/react-dom.min.js"></script>
<script src="https://source.zoom.us/1.7.5/lib/vendor/redux.min.js"></script>
<script src="https://source.zoom.us/1.7.5/lib/vendor/redux-thunk.min.js"></script>
<script src="https://source.zoom.us/1.7.5/lib/vendor/jquery.min.js"></script>
<script src="https://source.zoom.us/1.7.5/lib/vendor/lodash.min.js"></script>

<script src="https://source.zoom.us/zoom-meeting-1.7.5.min.js"></script>

<script>
(function(){
<?php if($active) {?>    
	ZoomMtg.preLoadWasm();
	ZoomMtg.prepareJssdk();

	document.getElementById('join_meeting').addEventListener('click', function(e){
		e.preventDefault();

		var meetConfig = {
			apiKey: "<?= $data["apiKey"]?>",
			apiSecret: "<?= $zoom_api_secret?>",
			meetingNumber: <?= $data["meetingNumber"]?>,
			userName: "<?= $data["userName"]?>",
			userEmail: "<?= $data["userName"]?>@iwkz.de",
			passWord: "<?= $data["password"]?>",
			signature: "<?= $data["signature"]?>",
			leaveUrl: "<?= $zoomUrl ?>",
			role: 0,
		};

		var signature = ZoomMtg.generateSignature({
			meetingNumber: meetConfig.meetingNumber,
			apiKey: meetConfig.apiKey,
			apiSecret: meetConfig.apiSecret,
			role: meetConfig.role,
			success: function(res){
				console.log(res.result);
			}
		});

		ZoomMtg.init({
			leaveUrl: meetConfig.leaveUrl,
			isSupportAV: true,
			success: function () {
				ZoomMtg.join(
					{
						meetingNumber: meetConfig.meetingNumber,
						userName: meetConfig.userName,
						signature: signature,
						apiKey: meetConfig.apiKey,
						passWord: meetConfig.passWord,
						success: function(res){
							$('#nav-tool').hide();
							console.log('join meeting success');
						},
						error: function(res) {
							console.log(res);
						}
					}
				);
			},
			error: function(res) {
				console.log(res);
			}
		});
    });
<?php }?>

})();
</script>
</body>
</html>
