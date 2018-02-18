$(function() {
	$button_add_comment = $('#add-comment-button, #add-comment-button-responsive');

	$button_add_comment.click(function() {
		$tips_connect = $('#tips-alert');
		if ($tips_connect.css('display') == 'flex') {
			$tips_connect.css('display', 'none')
		}else{
	   		$tips_connect.css('display', 'flex');
	   	}
	});



});