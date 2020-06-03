var index =1;

var manage = {
	nodata: true,
	code: false,
	picture: false
}

var sectionManager = [];
sectionManager.push(manage);

addRemoveListeners();


function showImageBlock(button){
	var image_block	= button.parentNode.parentNode.parentNode.nextSibling.nextSibling;
	var code_button = button.parentNode.nextSibling.nextSibling.childNodes[1];

	code_button.style.display = 'none';
	button.style.display = 'none';
	image_block.classList.add('show');
}

function cancelImageBlock(button){
	var image_block = button.parentNode.parentNode.parentNode.parentNode;
	var image_button = button.parentNode.parentNode.parentNode.parentNode.previousSibling.previousSibling.childNodes[1].childNodes[1].childNodes[1];
	var code_button = button.parentNode.parentNode.parentNode.parentNode.previousSibling.previousSibling.childNodes[1].childNodes[3].childNodes[1];
	
	image_block.classList.remove('show');
	image_button.style.display='block';
	code_button.style.display = 'block';
}

function showCodeBlock(button){
	var code_block	= button.parentNode.parentNode.parentNode.nextSibling.nextSibling.nextSibling.nextSibling;
	var image_button = button.parentNode.parentNode.childNodes[1].childNodes[1];

	image_button.style.display = 'none';
	button.style.display = 'none';
	code_block.classList.add('show');
}

function cancelCodeBlock(button){
	var code_block = button.parentNode.parentNode.parentNode.parentNode;
	var image_button = button.parentNode.parentNode.parentNode.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.childNodes[1].childNodes[1].childNodes[1];
	var code_button = button.parentNode.parentNode.parentNode.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.childNodes[1].childNodes[3].childNodes[1];
	
	code_block.classList.remove('show');
	image_button.style.display='block';
	code_button.style.display = 'block';
}


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

	index++;

	sectionManager.push(manage);
	console.log(sectionManager);

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
							<input placeholder="Subheading" class="form-control" type="text" name="subData[`+ index +`][sub_heading]">
						</div>
					</div>
				</div>
				<div class="form-group">
					<div class="row">
						<div class="col">
							<textarea class="form-control" placeholder="Blog Text" name="subData[`+ index +`][blog_text]"></textarea>
						</div>
					</div>
				</div>
				<div class="form-group">
					<div class="row">
						<div class="col-lg-2">
							<button class="btn btn-primary add-image-block" onclick="showImageBlock(this)" type='button'>Add Image</button>
						</div>
						<div class="col-lg-2">
							<button class="btn btn-primary" onclick="showCodeBlock(this)" type='button'>Add Code Block</button>
						</div>
					</div>
				</div>
				<div class="image-block">
					<div class="form-group">
						<div class="row">
							<div class="col">
								<input class="form-control" placeholder="Image URL" class="form-control" type="text" name="subData[`+ index +`][normal_image_url]">
							</div>
						</div>
					</div>
					<div class="form-group">
						<div class="row">
							<div class="col">
								<input placeholder="Image Caption" class="form-control" type="text" name="subData[`+ index +`][normal_image_caption]">
							</div>
						</div>
					</div>
					<div class="form-group">
						<div class="row">
							<div class="col-lg-2">
								<button class="btn btn-warning" onclick="cancelImageBlock(this)" type='button'>Cancel</button>
							</div>
						</div>
					</div>
				</div>
				<div class="code-block">
					<div class="form-group">
						<div class="row">
							<div class="col-lg-10">
								<textarea class="form-control" placeholder="Code" name="subData[`+ index +`][code]"></textarea>
							</div>
							<div class="col-lg-2">
								<select name='subData[`+ index +`][language]'>
									<option>JS</option>
									<option>HTML</option>
									<option>CSS</option>
									<option>VHDL</option>
									<option>C</option>
								</select>
							</div>
						</div>
					</div>
					<div class="form-group">
						<div class="row">
							<div class="col-lg-2">
								<button class="btn btn-warning" onclick="cancelCodeBlock(this)" type='button'>Cancel</button>
							</div>
						</div>
					</div>
				</div>
			</div>`);
	addRemoveListeners();
});

function addRemoveListeners(){
	$('button.remove-content').on('click', function(){
		for (var i =0; i<$('button.remove-content').length; i++){
			if ($(this)[0] == $('button.remove-content')[i]){
				sectionManager.splice(i, 1);
				console.log(sectionManager);
			}
		}
		$(this).parents('.content-elements').remove();

		index--;
	});
}

function removeUnused(){
	document.querySelectorAll('input').forEach(function(o){
		if(o.value === ''){
			o.parentNode.removeChild(o);
		}
	})

	document.querySelectorAll('textarea').forEach(function(o){
		if(o.value === ''){
			o.parentNode.removeChild(o);
		}
	})
}
