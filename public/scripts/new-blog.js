addRemoveListeners();

$('.new-content').click(function(){
	var radioBtnName = 'group' + $('content-elements').length;

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
							<input placeholder="Subheading" class="form-control" type="text" name="sub-heading">
						</div>
					</div>
				</div>
				<div class="form-group">
					<div class="row">
						<div class="col">
							<textarea class="form-control" placeholder="Blog Text" name="blog-text"></textarea>
						</div>
					</div>
				</div>
				<div class="form-group">
					<div class="row">
						<div class="col">
							<input class="form-control" placeholder="Image URL" class="form-control" type="text" name="normal-image-url">
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
							<input placeholder="Image Caption" class="form-control" type="text" name="normal-image-caption">
						</div>
					</div>
				</div>
			</div>`);
	addRemoveListeners();
});

function addRemoveListeners(){
	$('button.remove-content').on('click', function(){
		console.log($(this).parents());
		$(this).parents('.content-elements').remove();
	});
}
