#!/usr/bin/python
# -*- coding: utf-8 -*-

import BaseHTTPServer
import cgi
import json
import multiprocessing
import os
import logging
import random
import signal
import SimpleHTTPServer
import socket
import SocketServer
import struct
import sys
import time
import urlparse
from Queue import Empty

#import exception
import http_handler
import status
try:
    import gzip
except ImportError:
    gzip = None #python can be built without zlib/gzip support

manager = multiprocessing.Manager()
namespace = manager.Namespace()

#===============================================================================
##
# Return a decoded file-like object for the gzip encoding
# as described in RFC 1952.
#
# @param response A stream supporting a read() method
# @return a file-like object that the decoded data can be read() from

class GzipDecodedResponse(gzip.GzipFile if gzip else object):
	"""a file-like object to decode a response encoded with the gzip
	method, as described in RFC 1952.
	"""
#-------------------------------------------------------------------------------
	def __init__(self, response):
		#response doesn't support tell() and read(), required by
		#GzipFile
		if not gzip:
			raise NotImplementedError
		self.stringio = StringIO.StringIO(response.read())
		gzip.GzipFile.__init__(self, mode="rb", fileobj=self.stringio)

#-------------------------------------------------------------------------------
	def close(self):
		gzip.GzipFile.close(self)
		self.stringio.close()

#===============================================================================
## @class Server
# A class for an http server to handle communication with the Channel Emulator 
# XML-RPC service.
#
# @extends object
class Server(object):

#-------------------------------------------------------------------------------
	## Constructor
	#
	# @param host     the address for the http server, defaults to 'localhost'
	# @param port     the port for the http server, defaults to 8080.
	# @param rpcuri   the uri for the XML-RPC server, defaults to 'http://10.55.215.51:8080',
	# @param verbose  a debugging flag passed to the xmlrpclib.ServerProxy object
	def __init__(self,host='localhost',port=8080):
		command_queue = manager.Queue()
		response_queue = manager.Queue()
		# http process thread
		def httptarget(handler,namespace,command_queue):
			print 'Starting HTTP server on %s.' % port
			server = BaseHTTPServer.HTTPServer((host, port), handler)
#			server.status = status.StatusManager(namespace,command_queue,response_queue)
			server.status = status.Status()
#			server.status.start()
			server.namespace = namespace
			server.command_queue = command_queue
			server.serve_forever()
		self.httpd = multiprocessing.Process(target=httptarget, args=(http_handler.HTTPRequestHandler,namespace,command_queue))
		self.httpd.start()

		# signal handler
		def handler(signum, frame):
			self.httpd.terminate()
#			self.cmd.terminate()
		signal.signal(signal.SIGINT, handler)
		self.httpd.join()
		print 'All done!'
		
if __name__ == '__main__':
	Server()

