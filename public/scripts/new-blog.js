addRemoveListeners();

$('input[type=submit]').click(function(){
	var text = ['[center-justify]', '[float-left]', '[float-right]'];
	var ct =0;
	for(var i =0; i < $('input[type=radio]').length; i++){
		console.log("i hear ya");
		var nameVal = 'subData[justify][group' + Math.floor(i/3) + ']' + text[ct]; 
		$('input[type=radio]').slice(i, i+1).attr('name', nameVal);
		ct++;
		if(ct>2){
			ct=0;
		}
	}
})

$('.new-content').click(function(){
	var radioBtnName = 'group' + $('.content-elements').length+1;

	$('.content-series').append(`<div class="content-elements">
				<div class="form-group">
					<div class="row">
						<div class="col">
							<button class="remove-content btn btn-warning" type='button'>Remove Content Series</button>
						</div>
					</div>
				</div>
				<div class="form-group">
					<div class="row">
						<div class="col">
							<input placeholder="Subheading" class="form-control" type="text" name="subData[sub_heading]">
						</div>
					</div>
				</div>
				<div class="form-group">
					<div class="row">
						<div class="col">
							<textarea class="form-control" placeholder="Blog Text" name="subData[blog_text]"></textarea>
						</div>
					</div>
				</div>
				<div class="form-group">
					<div class="row">
						<div class="col">
							<input class="form-control" placeholder="Image URL" class="form-control" type="text" name="subData[normal_image_url]">
						</div>
						<div class="col">
							<label for="center-justify">Center Justify</label>
							<input class="form-control" id="center-justify" type="radio" name=`+ radioBtnName +` checked>
						</div>
						<div class="col">
							<label for="float-left">Float Left</label>
							<input class="form-control" type="radio" name=`+ radioBtnName +` id="float-left">
						</div>
						<div class="col">
							<label for="float-right">Float Right</label>
							<input class="form-control" type="radio" name=`+ radioBtnName +` id="float-right">
						</div>
					</div>
				</div>
				<div class="form-group">
					<div class="row">
						<div class="col">
							<input placeholder="Image Caption" class="form-control" type="text" name="subData[normal_image_caption]">
						</div>
					</div>
				</div>
			</div>`);
	addRemoveListeners();
});

function addRemoveListeners(){
	$('button.remove-content').on('click', function(){
		$(this).parents('.content-elements').remove();
	});
}
