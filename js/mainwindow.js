menuitems = ['newmenuitem','openmenuitem','savemenuitem','saveasmenuitem','quitmenuitem','zoominmenuitem','zoomoutmenuitem','importmenuitem','setupmenuitem','processmenuitem','helpmenuitem','aboutmenuitem'];
actions = ['actionNew','actionOpen','actionSave','actionImageIn','actionZoomIn','actionZoomOut','actionSetup','actionProcessImages','actionFilterSet','actionFilter'];
buttons = ['aFrameButton','bFrameButton','redrawButton','startButton','backButton','forwardButton','endButton'];
var frameAPreload;
var frameBPreload;
var graphicsView_offset;

function updateView() {
  setup_updateView();
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
	console.log(value_dicts);
	updateComboBox($('#topCombo'),value_dicts.topSelect);
	updateComboBox($('#bottomCombo'),value_dicts.bottomSelect);
	updateComboBox($('#imgimp_baseOrderCombo'),value_dicts.imgimp_orderSelect);
	updateComboBox($('#imgimp_incrementCombo'),value_dicts.imgimp_incrementSelect);
	updateComboBox($('#imgimp_incrementOrderCombo'),value_dicts.imgimp_orderSelect);
	updateComboBox($('#imgimp_frameOrderCombo'),value_dicts.imgimp_orderSelect);
	updateComboBox($('#imgimp_suffixOrderCombo'),value_dicts.imgimp_orderSelect);
	updateComboBox($('#setup_intAreaCombo'),value_dicts.setup_interrogationAreaSelect);
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
	//window.close();
	$('#filemenu').hide();
	alert("There is no quitting now.");
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
	//console.log('helpmenuitem_click');
	window.open("help.html");
	$('#helpmenu').hide();
}; // end helpmenuitem_click

function aboutmenuitem_click(event) {
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
	$( "#filefmt_dialog" ).dialog( "open" );
}; // end actionNew_click

function actionOpen_click(event) {
	//console.log(event);
	console.log('actionOpen_click');
	$( "#framelist_dialog" ).dialog( "open" );
	event.preventDefault();
}; // end actionOpen_click

function actionSave_click(event) {
	//console.log(event);
	console.log('actionSave_click');
}; // end actionSave_click

function actionImageIn_click(event) {
	//console.log(event);
	console.log('actionImageIn_click');
	$( "#imgimp_dialog" ).dialog( "open" );
}; // end actionImageIn_click

function actionZoomIn_click(event) {
	//console.log(event);
	//console.log('actionZoomIn_click');
	jdata = {
					'command' : 'zoomIn',
	};
//		console.log(jdata);
  $.post('', jdata,
      zoomCallBack, 'json');
}; // end actionZoomIn_click

function actionZoomOut_click(event) {
	//console.log(event);
	//console.log('actionZoomOut_click');
	jdata = {
					'command' : 'zoomOut',
	};
//		console.log(jdata);
  $.post('', jdata,
      zoomCallBack, 'json');
}; // end actionZoomOut_click

function zoomCallBack(jdata) {
	values = jdata.values;
	console.log(values);
}; //end zoomCallBack

function actionSetup_click(event) {
	//console.log(event);
	//console.log('actionSetup_click');
	$( "#setup_dialog" ).dialog( "open" );
	event.preventDefault();
}; // end actionSetup_click

function actionProcessImages_click(event) {
	//console.log(event);
	//console.log('actionProcessImages_click');
	$( "#process_dialog" ).dialog( "open" );
	event.preventDefault();
}; // end actionProcessImages_click

function actionFilterSet_click(event) {
	//console.log(event);
	//console.log('actionFilterSet_click');
	$( "#filter_dialog" ).dialog( "open" );
	event.preventDefault();
}; // end actionFilterSet_click

function actionFilter_click(event) {
//	console.log('actionFilter_click');
	$( "#flaunch_dialog" ).dialog( "open" );
	event.preventDefault();
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
	if (event.relatedTarget.className != 'op_menu_item ui-menu-item') {
		$('#filemenu').hide();
	}
//	console.log('filemenuMouseOut');
//	console.log(event.relatedTarget);
//	console.log(event);
//		console.log(event.relatedTarget.className == 'op_menu_item ui-menu-item');
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
	if (event.relatedTarget.className != 'op_menu_item ui-menu-item') {
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
	if (event.relatedTarget.className != 'op_menu_item ui-menu-item') {
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
	if (event.relatedTarget.className != 'op_menu_item ui-menu-item') {
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
	var marker = $('#marker');
	px = event.pageX;
	py = event.pageY;
	x = px - graphicsView_offset.left;
	y = py - graphicsView_offset.top;
	marker.css('left',px);
	marker.css('top',py);
//	marker.empty();
	marker.html(x+','+y);
/*	jdata = {
					'command' : 'fetchPixelInfo',
					'x'       : x,
					'y'       : y,
					'px'      : px,
					'py'      : py,
			};
//	console.log(jdata);
  $.post('', jdata,
      graphicsViewMouseMoveCallBack, 'json');*/
}

function graphicsViewMouseMoveCallBack(jdata) {
	var marker = $('#marker');
	values = jdata.values;
	x = values.x;
	y = values.y;
	px = values.px;
	py = values.py;
	grayscale = values.grayscale;

	marker.css('left',px);
	marker.css('top',py);
//	marker.empty();
//	marker.html(x+','+y);
	marker.html(grayscale);
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
//	console.log('graphicsViewMouseClick '+marker_locked);
	$('#marker').show();
	marker_locked = !marker_locked;
	if (!marker_locked) return;
	px = event.pageX;
	py = event.pageY;
	x = px - graphicsView_offset.left;
	y = py - graphicsView_offset.top;
	jdata = {
					'command' : 'fetchPixelInfo',
					'x'       : x,
					'y'       : y,
					'px'      : px,
					'py'      : py,
			};
//	console.log(jdata);
  $.post('', jdata,
      graphicsViewMouseClickCallBack, 'json');
};

function graphicsViewMouseClickCallBack(jdata) {
	var marker = $('#marker');
	values = jdata.values;
	x = values.x;
	y = values.y;
	px = values.px;
	py = values.py;
	grayscale = values.grayscale;

	marker.css('left',px);
	marker.css('top',py);
//	marker.empty();
//	marker.html(x+','+y);
	marker.html(grayscale);
//	console.log('x='+x+',y='+y);
};

function frlist_importButtonAction(event) {
	console.log('frlist_importButtonAction');
}; // end frlist_importButtonAction

function frlist_cancelButtonAction(event) {
	//console.log('frlist_cancelButtonAction');
	$( "#framelist_dialog" ).dialog( "close" );
}; // end frlist_cancelButtonAction


// Import images dialog event handlers
function imgimp_fileSelectAction(event) {
	console.log('imgimp_fileSelectAction');
}; // end imgimp_fileSelectAction

function imgimp_autoConfigAction(event) {
	console.log('imgimp_autoConfigAction');
}; // end imgimp_autoConfigAction

function imgimp_applyNameAction(event) {
	console.log('imgimp_applyNameAction');
	jdata = {
					'command'        : 'continueImportImages',
					'baseOrder'      : $('imgimp_baseOrderCombo').val(),
					'increment'      : $('imgimp_incrementCombo').val(),
					'incrementOrder' : $('imgimp_incrementOrderCombo').val(),
					'firstFrame'     : $('imgimp_firstFrameEdit').val(),
					'secondFrame'    : $('imgimp_secondFrameEdit').val(),
					'frameOrder'     : $('imgimp_frameOrderCombo').val(),
					'suffix'         : $('imgimp_suffixEdit').val(),
					'suffixOrder'    : $('imgimp_suffixOrderCombo').val(),
			};
//	$( "#imgimp_dialog" ).dialog( "close" );
  $.post('', jdata,
      imgimp_applyNameActionCallBack, 'json');

}; // end imgimp_applyNameAction

function imgimp_applyNameActionCallBack(jdata) {
}; // end imgimp_applyNameAction

// Setup dialog event handlers
function setup_directoryButtonClick() {
	console.log('directoryButtonClick');
};

var setup_changed = false;
function setup_changedAction() {
	setup_changed = true;
	$( '#setup_applyButton').css('color','#ff0000');
}; // end setup_changed

function setup_updateView() {
  $.post('', {'command':'fetchSetup'},
  		setup_updateViewCallBack, 'json');
}; // end setup_updateView

function setup_updateViewCallBack(jdata) {
	values = jdata.values;
	$('#setup_sigMeanText').val(values.sigMean);
	$('#setup_sigPeakText').val(values.sigPeak);
	$('#setup_intAreaCombo').val(values.intArea);
	$('#setup_xSpacing').val(values.xSpacing);
	$('#setup_ySpacing').val(values.ySpacing);
	$('#setup_deltaTEdit').val(values.deltaT);
	$('#setup_scaleEdit').val(values.scale);
	$('#setup_pixelRadio').prop("checked",values.pixel);
	$('#setup_velocityRadio').prop("checked",values.velocity);
	$('#setup_directoryEdit').val(values.directory);
	$('#setup_templateEdit').val(values.template);
	$('#setup_xMinEdit').val(values.xMin);
	$('#setup_yMinEdit').val(values.yMin);
	$('#setup_xMaxEdit').val(values.xMax);
	$('#setup_yMaxEdit').val(values.yMax);
	$('#setup_applyButton').css('color','#000000');
	setup_changed = false;
	
}; // end setup_updateViewCallBack

function setup_applyAction() {
	jdata = {
					'command'  : 'storeSetup',
					'sigMean'  : $('#setup_sigMeanText').val(),
					'sigPeak'  : $('#setup_sigPeakText').val(),
					'intArea'  : $('#setup_intAreaCombo').val(),
					'xSpacing' : $('#setup_xSpacing').val(),
					'ySpacing' : $('#setup_ySpacing').val(),
					'deltaT'   : $('#setup_deltaTEdit').val(),
					'scale'    : $('#setup_scaleEdit').val(),
					'pixel'    : $('#setup_pixelRadio').prop("checked"),
					'velocity' : $('#setup_velocityRadio').prop("checked"),
					'directory': $('#setup_directoryEdit').val(),
					'template' : $('#setup_templateEdit').val(),
					'xMin'     : $('#setup_xMinEdit').val(),
					'yMin'     : $('#setup_yMinEdit').val(),
					'xMax'     : $('#setup_xMaxEdit').val(),
					'yMax'     : $('#setup_yMaxEdit').val(),
			};
//	$( "#setup_dialog" ).dialog( "close" );
  $.post('', jdata,
      setup_applyActionCallBack, 'json');
}; // end setup_applyAction

function setup_applyActionCallBack(jdata) {
	$('#setup_applyButton').css('color','#000000');
}; // end setup_applyActionCallBack

function setup_cancelAction() {
	$( "#setup_dialog" ).dialog( "close" );
}; // end setup_applyAction

// Process dialog event handlers
function process_okAction() {
	jdata = {
					'command'      : 'processImages',
					'all'          : $('#process_allRadio').prop("checked"),
					'single'       : $('#process_singleRadio').prop("checked"),
			};
	$( "#process_dialog" ).dialog( "close" );
  $.post('', jdata,
      process_okActionCallBack, 'json');
}; // end process_okAction

function process_okActionCallBack(jdata) {
//	console.log(jdata);
}; // end process_okActionCallBack

function process_cancelAction() {
	$( "#process_dialog" ).dialog( "close" );
}; // end process_okAction

// Filter dialog event handlers
var filter_changed = false;
function filter_changedAction(event) {
	filter_changed = true;
	$( '#filter_okButton').css('color','#ff0000');
}; // end filter_changed

function filter_updateView() {
  $.post('', {'command':'fetchFilter'},
  		filter_updateViewCallBack, 'json');
}; // end filter_updateView

function filter_updateViewCallBack(jdata) {
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

function filter_okAction(event) {
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
}; // end filter_okActionCallBack

function filter_cancelAction(event) {
  filter_updateView();
}; // end filter_cancelAction

// Filter launch dialog event handlers
function flaunch_okAction(event) {
	jdata = {
					'command'      : 'launchFilter',
					'all'          : $('#flaunch_allRadio').prop("checked"),
					'single'       : $('#flaunch_singleRadio').prop("checked"),
			};
	$( "#flaunch_dialog" ).dialog( "close" );
//	console.log(jdata);
  $.post('', jdata,
      flaunch_okActionCallBack, 'json');
}; // end flaunch_okAction

function flaunch_okActionCallBack(jdata) {
//	console.log(jdata);
}; // end flaunch_okActionCallBack

function flaunch_cancelAction(event) {
	$( "#flaunch_dialog" ).dialog( "close" );
}; // end flaunch_okAction

// About dialog event handlers.
function about_okAction(event) {
	$( "#about_dialog" ).dialog( "close" );
}

/*
	All the things that should happen after the document is completely loaded
	should be here.
*/
$(document).ready(function() {
	$(function() {
		var frameSpinBox = $( "#frameSpinBox" ).spinner();
		$( "#filemenu" ).menu();
		$( "#viewmenu" ).menu();
		$( "#toolsmenu" ).menu();
		$( "#helpmenu" ).menu();

		$( "#frlist_frame1List" ).selectable();
		$( "#frlist_frame2List" ).selectable();
		$( "#framelist_dialog" ).dialog({
			autoOpen: false,
			width: 640,
			height: 500
		});
		$( "#imgimp_dialog" ).dialog({
			autoOpen: false,
			width: 536,
			height: 460
		});
		$( "#filefmt_dialog" ).dialog({
			autoOpen: false,
			width: 536,
			height: 350
		});
		$( "#setup_dialog" ).dialog({
			autoOpen: false,
			width: 556,
			height: 410
		});
		$( "#process_dialog" ).dialog({
			autoOpen: false,
			width: 370,
			height: 210
		});
		$( "#filter_dialog" ).dialog({
			autoOpen: false,
			width: 639,
			height: 419
		});
		$( "#flaunch_dialog" ).dialog({
			autoOpen: false,
			width: 370,
			height: 210
		});
		$( "#about_dialog" ).dialog({
			autoOpen: false,
			width: 415,
			height: 288
		});
	});
	$( "#setup_tabWidget" ).tabs();
	updateComboBoxes();
  updateView();
	loadFrameA();
	loadFrameB();

	// Associate click event handlers with menu items
	$('#newmenuitem').click(actionNew_click);
	$('#openmenuitem').click(actionOpen_click);
	$('#savemenuitem').click(actionSave_click);
	$('#saveasmenuitem').click(saveasmenuitem_click);
	$('#quitmenuitem').click(quitmenuitem_click);
	$('#zoominmenuitem').click(actionZoomIn_click);
	$('#zoomoutmenuitem').click(actionZoomOut_click);
	$('#importmenuitem').click(actionImageIn_click);
	$('#setupmenuitem').click(actionSetup_click);
	$('#processmenuitem').click(actionProcessImages_click);
	$('#helpmenuitem').click(helpmenuitem_click);
	$('#aboutmenuitem').click(aboutmenuitem_click);

	// Associate mouse event handlers with menu items
  $('#filemenu_label').mouseover(filemenuMouseOver);
  $('#filemenu').mouseout(filemenuMouseOut);
  $('#viewmenu_label').mouseover(viewmenuMouseOver);
  $('#viewmenu').mouseout(viewmenuMouseOut);
  $('#toolsmenu_label').mouseover(toolsmenuMouseOver);
  $('#toolsmenu').mouseout(toolsmenuMouseOut);
  $('#helpmenu_label').mouseover(helpmenuMouseOver);
  $('#helpmenu').mouseout(helpmenuMouseOut);

	// Set initial menu state
	$('#filemenu').hide();
	$('#viewmenu').hide();
	$('#toolsmenu').hide();
	$('#helpmenu').hide();

	// Associate click event handlers with toolbar items
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

	// Associate click event handlers with main window buttons
	$('#aFrameButton').click(aFrameButton_click);
	$('#bFrameButton').click(bFrameButton_click);
	$('#redrawButton').click(redrawButton_click);
	$('#startButton').click(startButton_click);
	$('#backButton').click(backButton_click);
	$('#forwardButton').click(forwardButton_click);
	$('#endButton').click(endButton_click);

	// Associate event handlers with frame list dialog buttons
	$('#frlist_importButton').click(frlist_importButtonAction);
  $('#frlist_cancelButton').click(frlist_cancelButtonAction);

	// Associate event handlers with import images dialog controls
	$('#imgimp_fileSelectButton').click(imgimp_fileSelectAction);
  $('#imgimp_autoConfigButton').click(imgimp_autoConfigAction);
  $('#imgimp_applyNameButton').click(imgimp_applyNameAction);

	// Associate event handlers with setup dialog controls
	$('#setup_directoryButton').click(setup_directoryButtonClick);
  $('#setup_applyButton').click(setup_applyAction);
  $('#setup_cancelButton').click(setup_cancelAction);
	$('#setup_sigMeanText').change(setup_changedAction);
	$('#setup_sigPeakText').change(setup_changedAction);
	$('#setup_intAreaCombo').change(setup_changedAction);
	$('#setup_xSpacing').change(setup_changedAction);
	$('#setup_ySpacing').change(setup_changedAction);
	$('#setup_deltaTEdit').change(setup_changedAction);
	$('#setup_scaleEdit').change(setup_changedAction);
	$('#setup_pixelRadio').change(setup_changedAction);
	$('#setup_velocityRadio').change(setup_changedAction);
	$('#setup_directoryEdit').change(setup_changedAction);
	$('#setup_templateEdit').change(setup_changedAction);
	$('#setup_xMinEdit').change(setup_changedAction);
	$('#setup_yMinEdit').change(setup_changedAction);
	$('#setup_xMaxEdit').change(setup_changedAction);
	$('#setup_yMaxEdit').change(setup_changedAction);

	// Associate event handlers with process dialog controls
  $('#process_okButton').click(process_okAction);
  $('#process_cancelButton').click(process_cancelAction);

	// Associate event handlers with filtet dialog controls
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

	// Associate event handlers with filter launch dialog controls
  $('#flaunch_okButton').click(flaunch_okAction);
  $('#flaunch_cancelButton').click(flaunch_cancelAction);

	// Associate event handlers with about dialog controls
  $('#about_okButton').click(about_okAction);

  $('#graphicsView').mousemove(graphicsViewMouseMove);
  $('#graphicsView').hover(graphicsViewMouseEnter,graphicsViewMouseLeave);
  $('#graphicsView').click(graphicsViewMouseClick);

	$('#marker').hide();
	graphicsView_offset = $('#graphicsView').offset();
//	console.log(graphicsView_offset);
}); // end document ready


