#!/usr/bin/python
# -*- coding: utf-8 -*-

import BaseHTTPServer
import SimpleHTTPServer
import cgi
import os
import time
import struct
import uuid
import urlparse

from json_serializer import WebServiceResponse
import value_dicts

#===============================================================================
class HTTPRequestHandler(SimpleHTTPServer.SimpleHTTPRequestHandler): #BaseHTTPServer.BaseHTTPRequestHandler
#-------------------------------------------------------------------------------
	def __getitem__(self,key):
		try:
			attr = getattr(self,key)
			if attr.ok:
				return attr
		except:
			pass

#-------------------------------------------------------------------------------
#	def do_GET(self):
#		"""The GET method for http request returns the status of the device as a 
#		WebServiceResponse object. For the proxy and scenario, this will return 
#		the structure of available commands."""
#		scheme,netloc,path,params,query,fragment = urlparse.urlparse(self.path)
#		SimpleHTTPServer.SimpleHTTPRequestHandler.do_GET(self)

#-------------------------------------------------------------------------------
	def do_POST(self):
		"""The POST method returns a WebServiceResponse Object containing the requested 
		data for fetch and get commands or the status for store and set commands."""
#		scheme,netloc,path,params,query,fragment = urlparse.urlparse(self.path)
#		print path,params,query
#		print self.server
		content_type = self.headers['Content-Type']
		form = cgi.FieldStorage(fp=self.rfile,headers=self.headers,environ={
				'REQUEST_METHOD'                        : 'POST',
				'CONTENT_TYPE'                          : self.headers['Content-Type']})
		response = WebServiceResponse()
		try:
			command = form['command'].value.strip()
			print command
		except:
			response.addErrorMessage('No Command sent to POST')
		else:
			response.command = command
			method = self[command]
			if method is None:
#				print command
				print '#-------------------------------------------------------------------------------'
				print '\t## @method %s' % command
				print '\t# .'
				print '\t#'
				print '\t# @param form a FieldStorage object containing the data from the request form'
				print '\t# @param response a WebServiceResponse object'
				print '\tdef %s(self,form,response):' % command
				print '\t\t\'\'\'.\'\'\''
				print '\t\tparameter = form[\'parameter\'].value.strip()'
				for key in sorted(form.keys()):
					print "\t\t%-24s = form[\'%s\'].value.strip()" % (key,key)
				
				print "\t\tresponse.addValue('parameter',parameter)"
#				print '		getattr(self.server.proxy, \'%%s.%s\' %% module_name)(channel_name,segment_name)' % command
				print
				print '\t%s.ok = True' % command

			done = method(form,response)
			if done:
				return
		self.send_response(200)
		self.send_header('Content-Type','application/json')
		self.end_headers()
#		print response.serialize()
		self.wfile.write(response.serialize())
		return None

#-------------------------------------------------------------------------------
	## @method fetchValueDicts
	# 
	#
	# @param form a FieldStorage object containing the data from the request form
	# @param response a WebServiceResponse object
	def fetchValueDicts(self,form,response):
		'''Returns the dictionaries cross referencing internal to human readable values.'''
		response.addValue('valueDicts',value_dicts.toJSON)

	fetchValueDicts.ok = True

#-------------------------------------------------------------------------------
	## @method continueImportImages
	# .
	#
	# @param form a FieldStorage object containing the data from the request form
	# @param response a WebServiceResponse object
	def continueImportImages(self,form,response):
		'''.'''
#		parameter = form['parameter'].value.strip()
#		command                  = form['command'].value.strip()
		imageimport = self.server.status.imageimport
		try: imageimport.baseOrder      = form['baseOrder'].value.strip()
		except KeyError: pass
		try: imageimport.increment      = form['increment'].value.strip()
		except KeyError: pass
		try: imageimport.incrementOrder = form['incrementOrder'].value.strip()
		except KeyError: pass
		try: imageimport.firstFrame     = form['firstFrame'].value.strip()
		except KeyError: pass
		try: imageimport.secondFrame    = form['secondFrame'].value.strip()
		except KeyError: pass
		try: imageimport.frameOrder     = form['frameOrder'].value.strip()
		except KeyError: pass
		try: imageimport.suffix         = form['suffix'].value.strip()
		except KeyError: pass
		try: imageimport.suffixOrder    = form['suffixOrder'].value.strip()
		except KeyError: pass
#		response.addValue('parameter',parameter)

	continueImportImages.ok = True

#-------------------------------------------------------------------------------
	## @method fetchSetup
	# .
	#
	# @param form a FieldStorage object containing the data from the request form
	# @param response a WebServiceResponse object
	def fetchSetup(self,form,response):
		setup_info = self.server.status.setup
		response.addValue('sigMean',setup_info.signalMean)
		response.addValue('sigPeak',setup_info.signalPeak)
		response.addValue('intArea',setup_info.interrogationArea)
		response.addValue('xSpacing',setup_info.xSpacing)
		response.addValue('ySpacing',setup_info.ySpacing)
		response.addValue('deltaT',setup_info.deltaTime)
		response.addValue('scale',setup_info.scale)
		response.addValue('pixel',setup_info.pixel)
		response.addValue('velocity',setup_info.velocity)
		response.addValue('directory',setup_info.directory)
		response.addValue('template',setup_info.template)
		response.addValue('xMin',setup_info.xMin)
		response.addValue('yMin',setup_info.yMin)
		response.addValue('xMax',setup_info.xMax)
		response.addValue('yMax',setup_info.yMax)

	fetchSetup.ok = True

#-------------------------------------------------------------------------------
	## @method storeSetup
	# .
	#
	# @param form a FieldStorage object containing the data from the request form
	# @param response a WebServiceResponse object
	def storeSetup(self,form,response):
		'''.'''
#		parameter = form['parameter'].value.strip()
#		response.addValue('parameter',parameter)
#,signalMean,signalPeak,interrogationArea,xSpacing,ySpacing,deltaTime,scale,pixel,velocity,directory,template,xMin,yMin,xMax,yMax
		setup_info = self.server.status.setup
		try: setup_info.signalMean            = form['sigMean'].value.strip()
		except KeyError: pass
		try: setup_info.signalPeak            = form['sigPeak'].value.strip()
		except KeyError: pass
		try: setup_info.interrogationArea     = form['intArea'].value.strip()
		except KeyError: pass
		try: setup_info.xSpacing              = form['xSpacing'].value.strip()
		except KeyError: pass
		try: setup_info.ySpacing              = form['ySpacing'].value.strip()
		except KeyError: pass
		try: setup_info.deltaTime             = form['deltaT'].value.strip()
		except KeyError: pass
		try: setup_info.scale                 = form['scale'].value.strip()
		except KeyError: pass
		try: setup_info.pixel                 = form['pixel'].value.strip()
		except KeyError: pass
		try: setup_info.velocity              = form['velocity'].value.strip()
		except KeyError: pass
		try: setup_info.directory             = form['directory'].value.strip()
		except KeyError: pass
		try: setup_info.template              = form['template'].value.strip()
		except KeyError: pass
		try: setup_info.xMin                  = form['xMin'].value.strip()
		except KeyError: pass
		try: setup_info.yMin                  = form['yMin'].value.strip()
		except KeyError: pass
		try: setup_info.xMax                  = form['xMax'].value.strip()
		except KeyError: pass
		try: setup_info.yMax                  = form['yMax'].value.strip()
		except KeyError: pass

	storeSetup.ok = True

#-------------------------------------------------------------------------------
	## @method processImages
	# .
	#
	# @param form a FieldStorage object containing the data from the request form
	# @param response a WebServiceResponse object
	def processImages(self,form,response):
		'''.'''
#		parameter = form['parameter'].value.strip()
#		response.addValue('parameter',parameter)
		all_                     = form['all'].value.strip()
		single                   = form['single'].value.strip()

	processImages.ok = True
#-------------------------------------------------------------------------------
	## @method fetchFilter
	# 
	#
	# @param form a FieldStorage object containing the data from the request form
	# @param response a WebServiceResponse object
	def fetchFilter(self,form,response):
		'''Returns the data for the filter window.'''
		filter_data = self.server.status.filter
		response.addValue('rangeBox',filter_data.rangeBox)
		response.addValue('minEdit',filter_data.minEdit)
		response.addValue('maxEdit',filter_data.maxEdit)
		response.addValue('stdBox',filter_data.stdBox)
		response.addValue('stdEdit',filter_data.stdEdit)
		response.addValue('medianBox',filter_data.medianBox)
		response.addValue('medianEdit',filter_data.medianEdit)
		response.addValue('medianCombo',filter_data.medianCombo)
		response.addValue('meanBox',filter_data.meanBox)
		response.addValue('meanEdit',filter_data.meanEdit)
		response.addValue('meanCombo',filter_data.meanCombo)
		response.addValue('bilinearBox',filter_data.bilinearBox)
		response.addValue('bilinearCombo',filter_data.bilinearCombo)
		response.addValue('gaussianBox',filter_data.gaussianBox)
		response.addValue('gaussianEdit',filter_data.gaussianEdit)
		response.addValue('gaussianCombo',filter_data.gaussianCombo)
		response.addValue('userRadio',filter_data.userRadio)
		response.addValue('processRadio',filter_data.processRadio)

	fetchFilter.ok=True

#-------------------------------------------------------------------------------
	## @method storeFilter
	# 
	#
	# @param form a FieldStorage object containing the data from the request form
	# @param response a WebServiceResponse object
	def storeFilter(self,form,response):
		'''Stores the data from the filter window.'''
		filter_data = self.server.status.filter
#		print form
		try: filter_data.rangeBox      = form['rangeBox'].value.strip()
		except KeyError: pass
		try: filter_data.minEdit       = form['minEdit'].value.strip()
		except KeyError: pass
		try: filter_data.maxEdit       = form['maxEdit'].value.strip()
		except KeyError: pass
		try: filter_data.stdBox        = form['stdBox'].value.strip()
		except KeyError: pass
		try: filter_data.stdEdit       = form['stdEdit'].value.strip()
		except KeyError: pass
		try: filter_data.medianBox     = form['medianBox'].value.strip()
		except KeyError: pass
		try: filter_data.medianEdit    = form['medianEdit'].value.strip()
		except KeyError: pass
		try: filter_data.medianCombo   = form['medianCombo'].value.strip()
		except KeyError: pass
		try: filter_data.meanBox       = form['meanBox'].value.strip()
		except KeyError: pass
		try: filter_data.meanEdit      = form['meanEdit'].value.strip()
		except KeyError: pass
		try: filter_data.meanCombo     = form['meanCombo'].value.strip()
		except KeyError: pass
		try: filter_data.bilinearBox   = form['bilinearBox'].value.strip()
		except KeyError: pass
		try: filter_data.bilinearCombo = form['bilinearCombo'].value.strip()
		except KeyError: pass
		try: filter_data.gaussianBox   = form['gaussianBox'].value.strip()
		except KeyError: pass
		try: filter_data.gaussianEdit  = form['gaussianEdit'].value.strip()
		except KeyError: pass
		try: filter_data.gaussianCombo = form['gaussianCombo'].value.strip()
		except KeyError: pass
		try: filter_data.userRadio     = form['userRadio'].value.strip()
		except KeyError: pass
		try: filter_data.processRadio  = form['processRadio'].value.strip()
		except KeyError: pass

	storeFilter.ok=True

#-------------------------------------------------------------------------------
	## @method launchFilter
	# .
	#
	# @param form a FieldStorage object containing the data from the request form
	# @param response a WebServiceResponse object
	def launchFilter(self,form,response):
		'''.'''
		all_                     = form['all'].value.strip()
		single                   = form['single'].value.strip()
#		parameter = form['parameter'].value.strip()
#		response.addValue('parameter',parameter)

	launchFilter.ok = True

#-------------------------------------------------------------------------------
	def fetchFramePath(self,form,response):
		'''Return the requested frame.'''
		try: frame = form['frame'].value.strip()
		except KeyError: pass
		frame_info = self.server.status.frame_info
		if frame == 'b':
			path   = frame_info.frame_b_path
			width  = frame_info.frame_b_width
			height = frame_info.frame_b_height
		else:
			path   = frame_info.frame_a_path
			width  = frame_info.frame_a_width
			height = frame_info.frame_a_height
		print path
		response.addValue('path',path)
		response.addValue('width',width)
		response.addValue('height',height)
		
#		fi = open(path,'rb')
#		content = fi.read()#spapng.SPAPNG.capture(self.server.namespace)
#		fi.close()
#		self.send_response(200)
#		self.send_header('Content-Type', 'image/png')
#		self.send_header('Content-disposition', 'attachment')
#		self.end_headers()
#		self.wfile.write(content)
#		return True

	fetchFramePath.ok = True

#-------------------------------------------------------------------------------
	## @method fetchPixelInfo
	# .
	#
	# @param form a FieldStorage object containing the data from the request form
	# @param response a WebServiceResponse object
	def fetchPixelInfo(self,form,response):
		'''.'''
		px        = int(form['px'].value.strip())
		py        = int(form['py'].value.strip())
		x         = int(form['x'].value.strip())
		y         = int(form['y'].value.strip())
		response.addValue('px',px)
		response.addValue('py',py)
		response.addValue('x',x)
		response.addValue('y',y)
		response.addValue('grayscale',self.server.status.grayscale(x,y))

	fetchPixelInfo.ok = True

#-------------------------------------------------------------------------------
	## @method zoomIn
	# Zoom in on the imported frames.
	#
	# @param form a FieldStorage object containing the data from the request form
	# @param response a WebServiceResponse object
	def zoomIn(self,form,response):
		'''Zoom in on the imported frames.'''
		frames = self.server.status.zoom_in()
		response.addValue('command','reload_frames')
		response.addValue('frames',frames)

	zoomIn.ok = True

#-------------------------------------------------------------------------------
	## @method zoomOut
	# Zoom out on the imported frames.
	#
	# @param form a FieldStorage object containing the data from the request form
	# @param response a WebServiceResponse object
	def zoomOut(self,form,response):
		'''Zoom out on the imported frames.'''
		frames = self.server.status.zoom_out()
		response.addValue('command','reload_frames')
		response.addValue('frames',frames)

	zoomOut.ok = True

#-------------------------------------------------------------------------------
	## @method fetchUpdate
	# .
	#
	# @param form a FieldStorage object containing the data from the request form
	# @param response a WebServiceResponse object
	def fetchUpdate(self,form,response):
		'''.'''
#		parameter = form['parameter'].value.strip()
#		command                  = form['command'].value.strip()
		response.addValue('parameter',time.ctime())

	fetchUpdate.ok = True

