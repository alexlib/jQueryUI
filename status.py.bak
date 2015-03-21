#!/usr/bin/python
# -*- coding: utf-8 -*-

import json
import time
import multiprocessing

#===============================================================================
class Status(object):
	def __init__(self):
		self.about        = About()
		self.fileformat   = FileFormat()
		self.filterlaunch = FilterLaunch()
		self.filter       = Filter()
		self.framelist    = FrameList()
		self.imageimport  = ImageImport()
		self.mainwindow   = MainWindow()
		self.mainwindow2  = MainWindow2()
		self.process      = Process()
		self.setup   = Setup()
		self.frame_info   = FrameInfo()
		self._zoom_factor = 0

#-------------------------------------------------------------------------------
	def grayscale(self,x,y):
		'''Return the grayscale intensity of the pixel at x,y.'''
		#TODO
		return (x*y) % 256

#-------------------------------------------------------------------------------
	def zoom_in(self):
		self._zoom_factor += 1
		#TODO
		return [self._zoom_factor]

#-------------------------------------------------------------------------------
	def zoom_out(self):
		if self._zoom_factor:
			self._zoom_factor -= 1
		#TODO
		return [self._zoom_factor]

#-------------------------------------------------------------------------------
	@property
	def about(self):
		return self._about

	@about.setter
	def about(self,about):
		self._about = about

#-------------------------------------------------------------------------------
	@property
	def fileformat(self):
		return self._fileformat

	@fileformat.setter
	def fileformat(self,fileformat):
		self._fileformat = fileformat

#-------------------------------------------------------------------------------
	@property
	def filterlaunch(self):
		return self._filterlaunch

	@filterlaunch.setter
	def filterlaunch(self,filterlaunch):
		self._filterlaunch = filterlaunch

#-------------------------------------------------------------------------------
	@property
	def filter(self):
		return self._filter

	@filter.setter
	def filter(self,filter):
		self._filter = filter

#-------------------------------------------------------------------------------
	@property
	def framelist(self):
		return self._framelist

	@framelist.setter
	def framelist(self,framelist):
		self._framelist = framelist

#-------------------------------------------------------------------------------
	@property
	def imageimport(self):
		return self._imageimport

	@imageimport.setter
	def imageimport(self,imageimport):
		self._imageimport = imageimport

#-------------------------------------------------------------------------------
	@property
	def mainwindow(self):
		return self._mainwindow

	@mainwindow.setter
	def mainwindow(self,mainwindow):
		self._mainwindow = mainwindow

#-------------------------------------------------------------------------------
	@property
	def mainwindow2(self):
		return self._mainwindow2

	@mainwindow2.setter
	def mainwindow2(self,mainwindow2):
		self._mainwindow2 = mainwindow2

#-------------------------------------------------------------------------------
	@property
	def process(self):
		return self._process

	@process.setter
	def process(self,process):
		self._process = process

#-------------------------------------------------------------------------------
	@property
	def setup(self):
		return self._setup

	@setup.setter
	def setup(self,setup):
		self._setup = setup

#-------------------------------------------------------------------------------
	@property
	def frame_info(self):
		return self._frameinfo

	@frame_info.setter
	def frame_info(self,frameinfo):
		self._frameinfo = frameinfo

#===============================================================================
class About(object):
#-------------------------------------------------------------------------------
	def __init__(self):
		pass

#===============================================================================
class FileFormat(object):
#-------------------------------------------------------------------------------
	def __init__(self):
		pass

#===============================================================================
class FilterLaunch(object):
#-------------------------------------------------------------------------------
	def __init__(self):
		pass

#===============================================================================
class Filter(object):
#-------------------------------------------------------------------------------
	def __init__(self,rangeBox=None,minEdit=None,maxEdit=None,stdBox=None,stdEdit=None,medianBox=None,medianEdit=None,medianCombo=None,meanBox=None,meanEdit=None,meanCombo=None,bilinearBox=None,bilinearCombo=None,gaussianBox=None,gaussianEdit=None,gaussianCombo=None,userRadio=None,processRadio=None):
		self.rangeBox      = rangeBox
		self.minEdit       = minEdit
		self.maxEdit       = maxEdit
		self.stdBox        = stdBox
		self.stdEdit       = stdEdit
		self.medianBox     = medianBox
		self.medianEdit    = medianEdit
		self.medianCombo   = medianCombo
		self.meanBox       = meanBox
		self.meanEdit      = meanEdit
		self.meanCombo     = meanCombo
		self.bilinearBox   = bilinearBox
		self.bilinearCombo = bilinearCombo
		self.gaussianBox   = gaussianBox
		self.gaussianEdit  = gaussianEdit
		self.gaussianCombo = gaussianCombo
		self.userRadio     = userRadio
		self.processRadio  = processRadio

#-------------------------------------------------------------------------------
	@property
	def rangeBox(self):
		return self._rangeBox

	@rangeBox.setter
	def rangeBox(self,rangeBox):
		if isinstance(rangeBox,basestring):
			rangeBox = rangeBox.lower() == 'true'
		self._rangeBox = rangeBox

#-------------------------------------------------------------------------------
	@property
	def minEdit(self):
		return self._minEdit

	@minEdit.setter
	def minEdit(self,minEdit):
		self._minEdit = minEdit

#-------------------------------------------------------------------------------
	@property
	def maxEdit(self):
		return self._maxEdit

	@maxEdit.setter
	def maxEdit(self,maxEdit):
		self._maxEdit = maxEdit

#-------------------------------------------------------------------------------
	@property
	def stdBox(self):
		return self._stdBox

	@stdBox.setter
	def stdBox(self,stdBox):
		if isinstance(stdBox,basestring):
			stdBox = stdBox.lower() == 'true'
		self._stdBox = stdBox

#-------------------------------------------------------------------------------
	@property
	def stdEdit(self):
		return self._stdEdit

	@stdEdit.setter
	def stdEdit(self,stdEdit):
		self._stdEdit = stdEdit

#-------------------------------------------------------------------------------
	@property
	def medianBox(self):
		return self._medianBox

	@medianBox.setter
	def medianBox(self,medianBox):
		if isinstance(medianBox,basestring):
			medianBox = medianBox.lower() == 'true'
		self._medianBox = medianBox

#-------------------------------------------------------------------------------
	@property
	def medianEdit(self):
		return self._medianEdit

	@medianEdit.setter
	def medianEdit(self,medianEdit):
		self._medianEdit = medianEdit

#-------------------------------------------------------------------------------
	@property
	def medianCombo(self):
		return self._medianCombo

	@medianCombo.setter
	def medianCombo(self,medianCombo):
		self._medianCombo = medianCombo

#-------------------------------------------------------------------------------
	@property
	def meanBox(self):
		return self._meanBox

	@meanBox.setter
	def meanBox(self,meanBox):
		if isinstance(meanBox,basestring):
			meanBox = meanBox.lower() == 'true'
		self._meanBox = meanBox

#-------------------------------------------------------------------------------
	@property
	def meanEdit(self):
		return self._meanEdit

	@meanEdit.setter
	def meanEdit(self,meanEdit):
		self._meanEdit = meanEdit

#-------------------------------------------------------------------------------
	@property
	def meanCombo(self):
		return self._meanCombo

	@meanCombo.setter
	def meanCombo(self,meanCombo):
		self._meanCombo = meanCombo

#-------------------------------------------------------------------------------
	@property
	def bilinearBox(self):
		return self._bilinearBox

	@bilinearBox.setter
	def bilinearBox(self,bilinearBox):
		if isinstance(bilinearBox,basestring):
			bilinearBox = bilinearBox.lower() == 'true'
		self._bilinearBox = bilinearBox

#-------------------------------------------------------------------------------
	@property
	def bilinearCombo(self):
		return self._bilinearCombo

	@bilinearCombo.setter
	def bilinearCombo(self,bilinearCombo):
		self._bilinearCombo = bilinearCombo

#-------------------------------------------------------------------------------
	@property
	def gaussianBox(self):
		return self._gaussianBox

	@gaussianBox.setter
	def gaussianBox(self,gaussianBox):
		if isinstance(gaussianBox,basestring):
			gaussianBox = gaussianBox.lower() == 'true'
		self._gaussianBox = gaussianBox

#-------------------------------------------------------------------------------
	@property
	def gaussianEdit(self):
		return self._gaussianEdit

	@gaussianEdit.setter
	def gaussianEdit(self,gaussianEdit):
		self._gaussianEdit = gaussianEdit

#-------------------------------------------------------------------------------
	@property
	def gaussianCombo(self):
		return self._gaussianCombo

	@gaussianCombo.setter
	def gaussianCombo(self,gaussianCombo):
		self._gaussianCombo = gaussianCombo

#-------------------------------------------------------------------------------
	@property
	def userRadio(self):
		return self._userRadio

	@userRadio.setter
	def userRadio(self,userRadio):
		if isinstance(userRadio,basestring):
			userRadio = userRadio.lower() == 'true'
		self._userRadio = userRadio

#-------------------------------------------------------------------------------
	@property
	def processRadio(self):
		return self._processRadio

	@processRadio.setter
	def processRadio(self,processRadio):
		if isinstance(processRadio,basestring):
			processRadio = processRadio.lower() == 'true'
		self._processRadio = processRadio

#===============================================================================
class FrameList(object):
#-------------------------------------------------------------------------------
	def __init__(self):
		pass

#===============================================================================
class ImageImport(object):
#-------------------------------------------------------------------------------
	def __init__(self,baseOrder=None,increment=None,incrementOrder=None,firstFrame=None,secondFrame=None,frameOrder=None,suffix=None,suffixOrder=None):
		self.baseOrder      = baseOrder
		self.increment      = increment
		self.incrementOrder = incrementOrder
		self.firstFrame     = firstFrame
		self.secondFrame    = secondFrame
		self.frameOrder     = frameOrder
		self.suffix         = suffix
		self.suffixOrder    = suffixOrder

#-------------------------------------------------------------------------------
	@property
	def baseOrder(self):
		return self._baseOrder

	@baseOrder.setter
	def baseOrder(self,baseOrder):
		self._baseOrder = baseOrder

#-------------------------------------------------------------------------------
	@property
	def increment(self):
		return self._increment

	@increment.setter
	def increment(self,increment):
		self._increment = increment

#-------------------------------------------------------------------------------
	@property
	def incrementOrder(self):
		return self._incrementOrder

	@incrementOrder.setter
	def incrementOrder(self,incrementOrder):
		self._incrementOrder = incrementOrder

#-------------------------------------------------------------------------------
	@property
	def firstFrame(self):
		return self._firstFrame

	@firstFrame.setter
	def firstFrame(self,firstFrame):
		self._firstFrame = firstFrame

#-------------------------------------------------------------------------------
	@property
	def secondFrame(self):
		return self._secondFrame

	@secondFrame.setter
	def secondFrame(self,secondFrame):
		self._secondFrame = secondFrame

#-------------------------------------------------------------------------------
	@property
	def frameOrder(self):
		return self._frameOrder

	@frameOrder.setter
	def frameOrder(self,frameOrder):
		self._frameOrder = frameOrder

#-------------------------------------------------------------------------------
	@property
	def suffix(self):
		return self._suffix

	@suffix.setter
	def suffix(self,suffix):
		self._suffix = suffix

#-------------------------------------------------------------------------------
	@property
	def suffixOrder(self):
		return self._suffixOrder

	@suffixOrder.setter
	def suffixOrder(self,suffixOrder):
		self._suffixOrder = suffixOrder

#===============================================================================
class MainWindow(object):
#-------------------------------------------------------------------------------
	def __init__(self):
		pass

#===============================================================================
class MainWindow2(object):
#-------------------------------------------------------------------------------
	def __init__(self):
		pass

#===============================================================================
class Process(object):
#-------------------------------------------------------------------------------
	def __init__(self):
		pass

#===============================================================================
class Setup(object):
#-------------------------------------------------------------------------------
#	def __init__(self,signalMean,signalPeak,interrogationArea,xSpacing,ySpacing,deltaTime,scale,pixel,velocity,directory,template,xMin,yMin,xMax,yMax):
	def __init__(self):
		self.signalMean        = None
		self.signalPeak        = None
		self.interrogationArea = None
		self.xSpacing          = None
		self.ySpacing          = None
		self.deltaTime         = None
		self.scale             = None
		self.pixel             = None
		self.velocity          = None
		self.directory         = None
		self.template          = None
		self.xMin              = None
		self.yMin              = None
		self.xMax              = None
		self.yMax              = None

#-------------------------------------------------------------------------------
	@property
	def signalMean(self):
		return self._signalMean

	@signalMean.setter
	def signalMean(self,signalMean):
		self._signalMean = signalMean

#-------------------------------------------------------------------------------
	@property
	def signalPeak(self):
		return self._signalPeak

	@signalPeak.setter
	def signalPeak(self,signalPeak):
		self._signalPeak = signalPeak

#-------------------------------------------------------------------------------
	@property
	def interrogationArea(self):
		return self._interrogationArea

	@interrogationArea.setter
	def interrogationArea(self,interrogationArea):
		self._interrogationArea = interrogationArea

#-------------------------------------------------------------------------------
	@property
	def xSpacing(self):
		return self._xSpacing

	@xSpacing.setter
	def xSpacing(self,xSpacing):
		self._xSpacing = xSpacing

#-------------------------------------------------------------------------------
	@property
	def ySpacing(self):
		return self._ySpacing

	@ySpacing.setter
	def ySpacing(self,ySpacing):
		self._ySpacing = ySpacing

#-------------------------------------------------------------------------------
	@property
	def deltaTime(self):
		return self._deltaTime

	@deltaTime.setter
	def deltaTime(self,deltaTime):
		self._deltaTime = deltaTime

#-------------------------------------------------------------------------------
	@property
	def scale(self):
		return self._scale

	@scale.setter
	def scale(self,scale):
		self._scale = scale

#-------------------------------------------------------------------------------
	@property
	def pixel(self):
		return self._pixel

	@pixel.setter
	def pixel(self,pixel):
		self._pixel = pixel

#-------------------------------------------------------------------------------
	@property
	def velocity(self):
		return self._velocity

	@velocity.setter
	def velocity(self,velocity):
		self._velocity = velocity

#-------------------------------------------------------------------------------
	@property
	def directory(self):
		return self._directory

	@directory.setter
	def directory(self,directory):
		self._directory = directory

#-------------------------------------------------------------------------------
	@property
	def template(self):
		return self._template

	@template.setter
	def template(self,template):
		self._template = template

#-------------------------------------------------------------------------------
	@property
	def xMin(self):
		return self._xMin

	@xMin.setter
	def xMin(self,xMin):
		self._xMin = xMin

#-------------------------------------------------------------------------------
	@property
	def yMin(self):
		return self._yMin

	@yMin.setter
	def yMin(self,yMin):
		self._yMin = yMin

#-------------------------------------------------------------------------------
	@property
	def xMax(self):
		return self._xMax

	@xMax.setter
	def xMax(self,xMax):
		self._xMax = xMax

#-------------------------------------------------------------------------------
	@property
	def yMax(self):
		return self._yMax

	@yMax.setter
	def yMax(self,yMax):
		self._yMax = yMax

#===============================================================================
class FrameInfo(object):
#-------------------------------------------------------------------------------
	def __init__(self,frame_dir='frames',frame_a='exp1_001_a.png',frame_b='exp1_001_b.png'):
		self.frame_dir = frame_dir
		self.frame_a   = frame_a
		self.frame_b   = frame_b
		self.frame_a_width = 511
		self.frame_a_height = 369
		self.frame_b_width = 511
		self.frame_b_height = 369
		

#-------------------------------------------------------------------------------
	@property
	def frame_dir(self):
		return self._frame_dir

	@frame_dir.setter
	def frame_dir(self,frame_dir):
		self._frame_dir = frame_dir

#-------------------------------------------------------------------------------
	@property
	def frame_a(self):
		return self._frame_a

	@frame_a.setter
	def frame_a(self,frame_a):
		self._frame_a = frame_a

#-------------------------------------------------------------------------------
	@property
	def frame_b(self):
		return self._frame_b

	@frame_b.setter
	def frame_b(self,frame_b):
		self._frame_b = frame_b

#-------------------------------------------------------------------------------
	@property
	def frame_a_path(self):
		return '%s/%s' % (self._frame_dir,self._frame_a)

#-------------------------------------------------------------------------------
	@property
	def frame_b_path(self):
		return '%s/%s' % (self._frame_dir,self._frame_b)

#-------------------------------------------------------------------------------
	@property
	def frame_a_width(self):
		return self._frame_a_width

	@frame_a_width.setter
	def frame_a_width(self,frame_a_width):
		self._frame_a_width = frame_a_width

#-------------------------------------------------------------------------------
	@property
	def frame_a_height(self):
		return self._frame_a_height

	@frame_a_height.setter
	def frame_a_height(self,frame_a_height):
		self._frame_a_height = frame_a_height

#-------------------------------------------------------------------------------
	@property
	def frame_b_width(self):
		return self._frame_b_width

	@frame_b_width.setter
	def frame_b_width(self,frame_b_width):
		self._frame_b_width = frame_b_width

#-------------------------------------------------------------------------------
	@property
	def frame_b_height(self):
		return self._frame_b_height

	@frame_b_height.setter
	def frame_b_height(self,frame_b_height):
		self._frame_b_height = frame_b_height

#===============================================================================
def check_members():
	for g in sorted(globals().keys()):
		if g.startswith('_'): continue
		obj = globals()[g]
		try:
			if obj.__module__ != '__main__':
				continue
		except: continue
#		try:
#			to_lines = 	getattr(obj,'to_lines')
#		except AttributeError:
#			print 'to_lines',g
#		try:
#			s = getattr(obj,'__str__')
#			if s.__module__ != '__main__':
#				print '__str__',g
#		except AttributeError:
#			print '__str__',g
#		try:
#			to_json = getattr(obj,'to_json')
#		except AttributeError:
#			print 'to_json',g
		try:
			init_fc = getattr(obj,'__init__').im_func.func_code
		except: pass
		else:
			args = init_fc.co_varnames[1:init_fc.co_argcount]
			for arg in args:
				if arg in ('location','comment'):
					continue
				try:
					getattr(obj,arg)
				except:
					print '#-------------------------------------------------------------------------------'
					print '\t@property\n\tdef %s(self):\n\t\treturn self._%s\n' % (arg,arg)
					print '\t@%s.setter\n\tdef %s(self,%s):\n\t\tself._%s = %s\n' % (arg,arg,arg,arg,arg)

if __name__ == '__main__':
	check_members()

