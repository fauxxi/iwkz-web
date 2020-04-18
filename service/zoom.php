<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization');

$zoom_api_key = 'AwBepAvpRBesquukX0UotQ';
$zoom_api_secret = '6AD3qvYGfTZO9HQTzUoI9GT3hiMuYQZylsmg';
$zoom_role = 0;
$data = [];
$active = false;
$zoomUrl = "https://zoom.us/j";

if(isset($_GET['id']) && isset($_GET['pass'])) {
	$meetingId = $_GET['id'];
	$password = $_GET['pass'];
	$zoomUrl = "$zoomUrl/$meetingId";
	
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
    <title>Zoom WebSDK</title>
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
</style>


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

var meetConfig = {
	apiKey: "<?= $data["apiKey"]?>",
	apiSecret: "<?= $zoom_api_secret?>",
	meetingNumber: <?= $data["meetingNumber"]?>,
	userName: "<?= $data["userName"]?>",
	userEmail: "<?= $data["userName"]?>@iwkz.de",
	passWord: "<?= $data["password"]?>",
	signature: "<?= $data["signature"]?>",
	leaveUrl: <?= $zoomUrl ?>,
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

<?php }?>

})();
</script>
</body>
</html>
