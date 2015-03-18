menuitems = ['newmenuitem','openmenuitem','savemenuitem','saveasmenuitem','quitmenuitem','zoominmenuitem','zoomoutmenuitem','importmenuitem','setupmenuitem','processmenuitem','helpmenuitem','aboutmenuitem'];
actions = ['actionNew','actionOpen','actionSave','actionImageIn','actionZoomIn','actionZoomOut','actionSetup','actionProcessImages','actionFilterSet','actionFilter'];
buttons = ['aFrameButton','bFrameButton','redrawButton','startButton','backButton','forwardButton','endButton'];
var frameAPreload;
var frameBPreload;
var graphicsView_offset;

function updateView() {
  filter_updateView();
} // end updateView

function updateComboBox(combo,options) {
	combo.empty();
	for (var i=0;i<options.length;i++) {
		option = options[i];
		$( '<option value="'+option[0]+'" selected>'+option[1]+'</option>' ).appendTo( combo );
	}
}; // end updateComboBox

function updateComboBoxes() {
	jdata = {
					'command' : 'fetchValueDicts',
	};
  $.post('', jdata,
      updateComboBoxesCallBack, 'json');
}; // end updateComboBoxes

function updateComboBoxesCallBack(jdata) {
	value_dicts = jdata.values.valueDicts;
	updateComboBox($('#topCombo'),value_dicts.topSelect);
	updateComboBox($('#bottomCombo'),value_dicts.bottomSelect);
	updateComboBox($('#filter_medianCombo'),value_dicts.filter_medianSelect);
	updateComboBox($('#filter_meanCombo'),value_dicts.filter_meanSelect);
	updateComboBox($('#filter_bilinearCombo'),value_dicts.filter_bilinearSelect);
	updateComboBox($('#filter_gaussianCombo'),value_dicts.filter_gaussianSelect);
}; // end updateComboBoxesCallBack

function newmenuitem_click(event) {
	//console.log(event);
	console.log('newmenuitem_click');
}; // end newmenuitem_click

function openmenuitem_click(event) {
	//console.log(event);
	console.log('openmenuitem_click');
}; // end openmenuitem_click

function savemenuitem_click(event) {
	//console.log(event);
	console.log('savemenuitem_click');
}; // end savemenuitem_click

function saveasmenuitem_click(event) {
	//console.log(event);
	console.log('saveasmenuitem_click');
}; // end saveasmenuitem_click

function quitmenuitem_click(event) {
	//console.log(event);
	console.log('quitmenuitem_click');
}; // end quitmenuitem_click

function zoominmenuitem_click(event) {
	//console.log(event);
	console.log('zoominmenuitem_click');
}; // end zoominmenuitem_click

function zoomoutmenuitem_click(event) {
	//console.log(event);
	console.log('zoomoutmenuitem_click');
}; // end zoomoutmenuitem_click

function importmenuitem_click(event) {
	//console.log(event);
	console.log('importmenuitem_click');
}; // end importmenuitem_click

function setupmenuitem_click(event) {
	//console.log(event);
	console.log('setupmenuitem_click');
}; // end setupmenuitem_click

function processmenuitem_click(event) {
	//console.log(event);
	console.log('processmenuitem_click');
}; // end processmenuitem_click

function helpmenuitem_click(event) {
	//console.log(event);
	console.log('helpmenuitem_click');
}; // end helpmenuitem_click

function aboutmenuitem_click(event) {
	//console.log(event);
	//console.log('aboutmenuitem_click');
	$( "#about_dialog" ).dialog( "open" );
}; // end aboutmenuitem_click

function aFrameButton_click(event) {
	//console.log('aFrameButton_click');
	$( '#frameA').show();
	$( '#frameB').hide();
	$( '#aFrameButton').css('color','#00bbbb');
	$( '#bFrameButton').css('color','#000000');
}; // end aFrameButton_click

function bFrameButton_click(event) {
	//console.log('bFrameButton_click');
	$( '#frameB').show();
	$( '#frameA').hide();
	$( '#aFrameButton').css('color','#000000');
	$( '#bFrameButton').css('color','#00bbbb');
}; // end bFrameButton_click

function redrawButton_click(event) {
	//console.log(event);
	console.log('redrawButton_click');
}; // end redrawButton_click

function startButton_click(event) {
	//console.log(event);
	console.log('startButton_click');
}; // end startButton_click

function backButton_click(event) {
	//console.log(event);
	console.log('backButton_click');
}; // end backButton_click

function forwardButton_click(event) {
	//console.log(event);
	console.log('forwardButton_click');
}; // end forwardButton_click

function endButton_click(event) {
	//console.log(event);
	console.log('endButton_click');
}; // end endButton_click

function actionNew_click(event) {
	//console.log(event);
	console.log('actionNew_click');
}; // end actionNew_click

function actionOpen_click(event) {
	//console.log(event);
	console.log('actionOpen_click');
}; // end actionOpen_click

function actionSave_click(event) {
	//console.log(event);
	console.log('actionSave_click');
}; // end actionSave_click

function actionImageIn_click(event) {
	//console.log(event);
	console.log('actionImageIn_click');
}; // end actionImageIn_click

function actionZoomIn_click(event) {
	//console.log(event);
	console.log('actionZoomIn_click');
}; // end actionZoomIn_click

function actionZoomOut_click(event) {
	//console.log(event);
	console.log('actionZoomOut_click');
}; // end actionZoomOut_click

function actionSetup_click(event) {
	//console.log(event);
	console.log('actionSetup_click');
}; // end actionSetup_click

function actionProcessImages_click(event) {
	//console.log(event);
	console.log('actionProcessImages_click');
}; // end actionProcessImages_click

function actionFilterSet_click(event) {
	//console.log(event);
	console.log('actionFilterSet_click');
	$( "#filter_dialog" ).dialog( "open" );
	event.preventDefault();
}; // end actionFilterSet_click

function actionFilter_click(event) {
//	console.log(event);
	console.log('actionFilter_click');
}; // end actionFilter_click

function filemenuMouseOver(event) {
	$('#filemenu').show();
	$('#viewmenu').hide();
	$('#toolsmenu').hide();
	$('#helpmenu').hide();
//	console.log('filemenuMouseOver');
};

function filemenuMouseOut(event) {
//	if (event.relatedTarget.id == 'MainWindow') {
	if (event.relatedTarget.className != 'QMenuItem ui-menu-item') {
		$('#filemenu').hide();
	}
//	console.log('filemenuMouseOut');
//	console.log(event.relatedTarget);
//	console.log(event);
//		console.log(event.relatedTarget.className == 'QMenuItem ui-menu-item');
//		console.log(event.target.className);
//		console.log(event.currentTarget.className);
//		console.log(event.delegateTarget.className);
};

function viewmenuMouseOver(event) {
	$('#filemenu').hide();
	$('#viewmenu').show();
	$('#toolsmenu').hide();
	$('#helpmenu').hide();
//	console.log('viewmenuMouseOver');
};

function viewmenuMouseOut(event) {
	if (event.relatedTarget.className != 'QMenuItem ui-menu-item') {
		$('#viewmenu').hide();
	}
//	console.log('viewmenuMouseOut');
};

function toolsmenuMouseOver(event) {
	$('#filemenu').hide();
	$('#viewmenu').hide();
	$('#toolsmenu').show();
	$('#helpmenu').hide();
//	console.log('toolsmenuMouseOver');
};

function toolsmenuMouseOut(event) {
	if (event.relatedTarget.className != 'QMenuItem ui-menu-item') {
		$('#toolsmenu').hide();
	}
//	console.log('toolsmenuMouseOut');
};

function helpmenuMouseOver(event) {
	$('#filemenu').hide();
	$('#viewmenu').hide();
	$('#toolsmenu').hide();
	$('#helpmenu').show();
//	console.log('helpmenuMouseOver');
};

function helpmenuMouseOut(event) {
	if (event.relatedTarget.className != 'QMenuItem ui-menu-item') {
		$('#helpmenu').hide();
	};
//	console.log('helpmenuMouseOut');
}

function loadFrameA() {
	jdata = {
					'command' : 'fetchFramePath',
					'frame'   : 'a',
	};
//		console.log(jdata);
  $.post('', jdata,
      loadFrameACallBack, 'json');
}; // end load_frame_a

function loadFrameACallBack(jdata) {
//	console.log(jdata);
	values = jdata.values;
	$('#frameA').empty();
	$('#frameA').html('<img src="'+ values.path +'" width=' + values.width + ' height=' + values.height + ' alt="Frame A" />');
}; // end loadFrameA

function loadFrameB() {
	jdata = {
					'command' : 'fetchFramePath',
					'frame'   : 'b',
	};
//		console.log(jdata);
  $.post('', jdata,
      loadFrameBCallBack, 'json');
}; // end loadFrameB

function loadFrameBCallBack(jdata) {
//	console.log(jdata);
	values = jdata.values;
	$('#frameB').empty();
	$('#frameB').html('<img src="'+ values.path +'" width=' + values.width + ' height=' + values.height + ' alt="Frame B" />');
}; // end loadFrameACallBack

var marker_locked = false;
function graphicsViewMouseMove(event) {
	if (marker_locked) return;
	px = event.pageX;
	py = event.pageY;
	x = px - graphicsView_offset.left;
	y = py - graphicsView_offset.top;
	var marker = $('#marker');
	marker.css('left',px);
	marker.css('top',py);
//	marker.empty();
	marker.html(x+','+y);
//	console.log('x='+x+',y='+y);
};

function graphicsViewMouseEnter(event) {
	if (marker_locked) return;
	$('#marker').show();
};

function graphicsViewMouseLeave(event) {
	if (marker_locked) return;
	$('#marker').hide();
};

function graphicsViewMouseClick(event) {
	$('#marker').show();
	marker_locked = !marker_locked;
	console.log('graphicsViewMouseClick '+marker_locked);
};

var filter_changed = false;
function filter_changedAction() {
	filter_changed = true;
	$( '#filter_okButton').css('color','#ff0000');
}; // end filter_changed

function filter_updateView() {
  $.post('', {'command':'fetchFilter'},
  		filter_updateViewCallBack, 'json');
//	console.log('updateView()')
}; // end filter_updateView

function filter_updateViewCallBack(jdata) {
//	console.log(jdata);
	values = jdata.values;
	$('#filter_rangeBox').prop("checked",values.rangeBox);
	$('#filter_minEdit').val(values.minEdit);
	$('#filter_maxEdit').val(values.maxEdit);
	$('#filter_stdBox').prop("checked",values.stdBox);
	$('#filter_stdEdit').val(values.stdEdit);
	$('#filter_medianBox').prop("checked",values.medianBox);
	$('#filter_medianEdit').val(values.medianEdit);
	$('#filter_medianCombo').val(values.medianCombo);
	$('#filter_meanBox').prop("checked",values.meanBox);
	$('#filter_meanEdit').val(values.meanEdit);
	$('#filter_meanCombo').val(values.meanCombo);
	$('#filter_bilinearBox').prop("checked",values.bilinearBox);
	$('#filter_bilinearCombo').val(values.bilinearCombo);
	$('#filter_gaussianBox').prop("checked",values.gaussianBox);
	$('#filter_gaussianEdit').val(values.gaussianEdit);
	$('#filter_gaussianCombo').val(values.gaussianCombo);
	$('#filter_userRadio').prop("checked",values.userRadio);
	$('#filter_processRadio').prop("checked",values.processRadio);
	$('#filter_okButton').css('color','#000000');
	filter_changed = false;
	
}; // end filter_updateViewCallBack

function filter_okAction() {
	jdata = {
					'command'            : 'storeFilter',
					'rangeBox'           : $('#filter_rangeBox').prop("checked"),
					'minEdit'            : $('#filter_minEdit').val(),
					'maxEdit'            : $('#filter_maxEdit').val(),
					'stdBox'             : $('#filter_stdBox').prop("checked"),
					'stdEdit'            : $('#filter_stdEdit').val(),
					'medianBox'          : $('#filter_medianBox').prop("checked"),
					'medianEdit'         : $('#filter_medianEdit').val(),
					'medianCombo'        : $('#filter_medianCombo').val(),
					'meanBox'            : $('#filter_meanBox').prop("checked"),
					'meanEdit'           : $('#filter_meanEdit').val(),
					'meanCombo'          : $('#filter_meanCombo').val(),
					'bilinearBox'        : $('#filter_bilinearBox').prop("checked"),
					'bilinearCombo'      : $('#filter_bilinearCombo').val(),
					'gaussianBox'        : $('#filter_gaussianBox').prop("checked"),
					'gaussianEdit'       : $('#filter_gaussianEdit').val(),
					'gaussianCombo'      : $('#filter_gaussianCombo').val(),
					'userRadio'          : $('#filter_userRadio').prop("checked"),
					'processRadio'       : $('#filter_processRadio').prop("checked"),
			};
//	console.log(jdata);
  $.post('', jdata,
      filter_okActionCallBack, 'json');
} // end filter_okAction

function filter_okActionCallBack(jdata) {
//	console.log(jdata);
	$('#filter_okButton').css('color','#000000');
	filter_changed = false;
} // end filter_okActionCallBack

function filter_cancelAction() {
  filter_updateView();
} // end filter_cancelAction

function about_okAction() {
//	$( "#about_dialog" ).close();
	$( "#about_dialog" ).dialog( "close" );
}

$(document).ready(function() {
	updateComboBoxes();
  updateView();
	loadFrameA();
	loadFrameB();
  $('#filter_okButton').click(filter_okAction);
  $('#filter_cancelButton').click(filter_cancelAction);
	$('#filter_rangeBox').change(filter_changedAction);
	$('#filter_minEdit').change(filter_changedAction);
	$('#filter_maxEdit').change(filter_changedAction);
	$('#filter_stdBox').change(filter_changedAction);
	$('#filter_stdEdit').change(filter_changedAction);
	$('#filter_medianBox').change(filter_changedAction);
	$('#filter_medianEdit').change(filter_changedAction);
	$('#filter_medianCombo').change(filter_changedAction);
	$('#filter_meanBox').change(filter_changedAction);
	$('#filter_meanEdit').change(filter_changedAction);
	$('#filter_meanCombo').change(filter_changedAction);
	$('#filter_bilinearBox').change(filter_changedAction);
	$('#filter_bilinearCombo').change(filter_changedAction);
	$('#filter_gaussianBox').change(filter_changedAction);
	$('#filter_gaussianEdit').change(filter_changedAction);
	$('#filter_gaussianCombo').change(filter_changedAction);
	$('#filter_userRadio').change(filter_changedAction);
	$('#filter_processRadio').change(filter_changedAction);

  $('#about_okButton').click(about_okAction);

	$('#newmenuitem').click(newmenuitem_click);
	$('#openmenuitem').click(openmenuitem_click);
	$('#savemenuitem').click(savemenuitem_click);
	$('#saveasmenuitem').click(saveasmenuitem_click);
	$('#quitmenuitem').click(quitmenuitem_click);
	$('#zoominmenuitem').click(zoominmenuitem_click);
	$('#zoomoutmenuitem').click(zoomoutmenuitem_click);
	$('#importmenuitem').click(importmenuitem_click);
	$('#setupmenuitem').click(setupmenuitem_click);
	$('#processmenuitem').click(processmenuitem_click);
	$('#helpmenuitem').click(helpmenuitem_click);
	$('#aboutmenuitem').click(aboutmenuitem_click);

	$('#aFrameButton').click(aFrameButton_click);
	$('#bFrameButton').click(bFrameButton_click);
	$('#redrawButton').click(redrawButton_click);
	$('#startButton').click(startButton_click);
	$('#backButton').click(backButton_click);
	$('#forwardButton').click(forwardButton_click);
	$('#endButton').click(endButton_click);

	$('#actionNew').click(actionNew_click);
	$('#actionOpen').click(actionOpen_click);
	$('#actionSave').click(actionSave_click);
	$('#actionImageIn').click(actionImageIn_click);
	$('#actionZoomIn').click(actionZoomIn_click);
	$('#actionZoomOut').click(actionZoomOut_click);
	$('#actionSetup').click(actionSetup_click);
	$('#actionProcessImages').click(actionProcessImages_click);
	$('#actionFilterSet').click(actionFilterSet_click);
	$('#actionFilter').click(actionFilter_click);

  $('#filemenu_label').mouseover(filemenuMouseOver);
  $('#filemenu').mouseout(filemenuMouseOut);
  $('#viewmenu_label').mouseover(viewmenuMouseOver);
  $('#viewmenu').mouseout(viewmenuMouseOut);
  $('#toolsmenu_label').mouseover(toolsmenuMouseOver);
  $('#toolsmenu').mouseout(toolsmenuMouseOut);
  $('#helpmenu_label').mouseover(helpmenuMouseOver);
  $('#helpmenu').mouseout(helpmenuMouseOut);
  $('#graphicsView').mousemove(graphicsViewMouseMove);
  $('#graphicsView').hover(graphicsViewMouseEnter,graphicsViewMouseLeave);
  $('#graphicsView').click(graphicsViewMouseClick);
	$('#filemenu').hide();
	$('#viewmenu').hide();
	$('#toolsmenu').hide();
	$('#helpmenu').hide();
	$('#marker').hide();
	graphicsView_offset = $('#graphicsView').offset();
	console.log(graphicsView_offset);
}); // end document ready


