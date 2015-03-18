widget_names = ['rangeBox',
								'minEdit',
								'maxEdit',
								'stdBox',
								'stdEdit',
								'medianBox',
								'medianEdit',
								'medianCombo',
								'meanBox',
								'meanEdit',
								'meanCombo',
								'bilinearBox',
								'bilinearCombo',
								'gaussianBox',
								'gaussianEdit',
								'gaussianCombo',
								'userRadio',
								'processRadio',
		];

function updateComboBoxes() {
	combo = $('#medianCombo');
	combo.empty();
	options = ['None','Median Option A','Median Option B']
	for (i in options) {
		$( '<option value="'+i+'" selected>'+options[i]+'</option>' ).appendTo( combo );
	}
	combo = $('#meanCombo');
	combo.empty();
	options = ['None','Mean Option A','Mean Option B']
	for (i in options) {
		$( '<option value="'+i+'" selected>'+options[i]+'</option>' ).appendTo( combo );
	}
	combo = $('#bilinearCombo');
	combo.empty();
	options = ['None','Bilinear Option A','Bilinear Option B']
	for (i in options) {
		$( '<option value="'+i+'" selected>'+options[i]+'</option>' ).appendTo( combo );
	}
	combo = $('#gaussianCombo');
	combo.empty();
	options = ['None','Gaussian Option A','Gaussian Option B']
	for (i in options) {
		$( '<option value="'+i+'" selected>'+options[i]+'</option>' ).appendTo( combo );
	}
}

function updateView() {
  $.post('', {'command':'fetchFilter'},
  		updateViewCallBack, 'json');
//	console.log('updateView()')
}; // end updateView

function updateViewCallBack(jdata) {
	console.log(jdata);
	values = jdata.values;
	$('#rangeBox').prop("checked",values.rangeBox);
	$('#minEdit').val(values.minEdit);
	$('#maxEdit').val(values.maxEdit);
	$('#stdBox').prop("checked",values.stdBox);
	$('#stdEdit').val(values.stdEdit);
	$('#medianBox').prop("checked",values.medianBox);
	$('#medianEdit').val(values.medianEdit);
	$('#medianCombo').val(values.medianCombo);
	$('#meanBox').prop("checked",values.meanBox);
	$('#meanEdit').val(values.meanEdit);
	$('#meanCombo').val(values.meanCombo);
	$('#bilinearBox').prop("checked",values.bilinearBox);
	$('#bilinearCombo').val(values.bilinearCombo);
	$('#gaussianBox').prop("checked",values.gaussianBox);
	$('#gaussianEdit').val(values.gaussianEdit);
	$('#gaussianCombo').val(values.gaussianCombo);
	$('#userRadio').prop("checked",values.userRadio);
	$('#processRadio').prop("checked",values.processRadio);
	
}; // end updateViewCallBack

function okAction() {
	jdata = {
					'command'            : 'storeFilter',
					'rangeBox'           : $('#rangeBox').prop("checked"),
					'minEdit'            : $('#minEdit').val(),
					'maxEdit'            : $('#maxEdit').val(),
					'stdBox'             : $('#stdBox').prop("checked"),
					'stdEdit'            : $('#stdEdit').val(),
					'medianBox'          : $('#medianBox').prop("checked"),
					'medianEdit'         : $('#medianEdit').val(),
					'medianCombo'        : $('#medianCombo').val(),
					'meanBox'            : $('#meanBox').prop("checked"),
					'meanEdit'           : $('#meanEdit').val(),
					'meanCombo'          : $('#meanCombo').val(),
					'bilinearBox'        : $('#bilinearBox').prop("checked"),
					'bilinearCombo'      : $('#bilinearCombo').val(),
					'gaussianBox'        : $('#gaussianBox').prop("checked"),
					'gaussianEdit'       : $('#gaussianEdit').val(),
					'gaussianCombo'      : $('#gaussianCombo').val(),
					'userRadio'          : $('#userRadio').prop("checked"),
					'processRadio'       : $('#processRadio').prop("checked"),
			};
	console.log(jdata);
  $.post('', jdata,
      okActionCallBack, 'json');
} // end okAction

function okActionCallBack(jdata) {
//	console.log(jdata);
} // end okActionCallBack

function cancelAction() {
  updateView();
} // end cancelAction

$(document).ready(function() {
	updateComboBoxes();
  updateView();
  $('#okButton').click(okAction);
  $('#cancelButton').click(cancelAction);
}); // end document ready


