#!/usr/bin/python
# -*- coding: utf-8 -*-

# This module contains dictionaries of internal to human readable values for
# use in various user interfaces. Those whose names end with "Dict" will 
# automatically be included in JSON data sent to a requesting UI.

topDict = {
	0:'None',
	1:'Top Option A',
	2:'Top Option B',
}

bottomDict = {
	0:'None',
	1:'Bottom Option A',
	2:'Bottom Option B',
}

filter_medianDict = {
	0:'None',
	1:'Median Option A',
	2:'Median Option B',
}

filter_meanDict = {
	0:'None',
	1:'Mean Option A',
	2:'Mean Option B',
}

filter_bilinearDict = {
	0:'None',
	1:'Bilinear Option A',
	2:'Bilinear Option B',
}

filter_gaussianDict = {
	0:'None',
	1:'Gaussian Option A',
	2:'Gaussian Option B',
}

toJSON = {}
for k in globals().keys():
	if k.endswith('Dict'):
		d = globals()[k]
		keys = d.keys()
		keys.sort()
		toJSON['%sSelect' % k[0:-4]] = [[key,d[key]] for key in keys]

