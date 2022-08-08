<?php
//получаем данные с формы
foreach ($_POST['form'] as $input ) {
    $data[$input['name']] = $input['value'];
}
$data['utmSource'] = $_POST['utmSource'];
$data['utmMedium'] = $_POST['utmMedium'];
$data['utmCampaign'] = $_POST['utmCampaign'];

print_r(json_encode($data));



