#!/usr/bin/python
# -*- coding: utf-8 -*-

##  @package json_serializer
#   Base class for objects that can be serialized to JSON representation.  Also included
#   a class to represent web service responses.

import json
import sys
from copy import deepcopy

##    This class used to serialize object to JSON format.  Objects simply need to subclass it. 
#
class JsonSerializer(): 
    
#    ##  Create a JsonSerializer object 
#    # @param self The object pointer
#    # @return A JsonSerializer object
#    def __init__(self):
#        pass
       
    ##  Serialize self to JSON string.
    # @param self The object pointer
    # @param compact  Make the string compact (True or False)
    # @return  The JSON string representation.
    def serialize(self, compact=False):     
        """ Serialize self to JSON string.
        """
        if (compact):
            jsonpickle.set_encoder_options('json', indent=None)   
            jsonpickle.set_encoder_options('simplejson', indent=None)  
        else:  
            jsonpickle.set_encoder_options('json', indent=3)   
            jsonpickle.set_encoder_options('simplejson', indent=3)  
        return jsonpickle.encode(self)    
    
    @staticmethod    
    def create_object(dct):
        if 'py/object' in dct:
            cls = dct['py/object']
            if cls.startswith(__name__):
                cls = cls[len(__name__)+1:]
 #           print __name__
            cls = eval(cls)
            obj = cls()
            for k,v in list(dct.items()):
            	if k != 'py/object':
            		print(dir(obj))
            		obj.__dict__[k] = v
            return obj
        return dct

    @staticmethod    
    ##  Un-serialize a JSON string and return an object.
    # @param jsonString  The JSON string representation of the object
    # @return  The object
    def deserialize(jsonString):        
#        return jsonpickle.decode(jsonString)
        return json.loads(jsonString, object_hook=JsonSerializer.create_object)
    
    @staticmethod    
    ##  Serialize data to JSON string.
    # @param data  The data (object) to serialize to JSON
    # @param compact  Make the string compact (True or False)
    # @return  The JSON string representation.
    def serializeData(data,compact=False):     
        if (compact):
            jsonpickle.set_encoder_options('json', indent=None)   
            jsonpickle.set_encoder_options('simplejson', indent=None)  
        else:  
            jsonpickle.set_encoder_options('json', indent=3)   
            jsonpickle.set_encoder_options('simplejson', indent=3)  
        return jsonpickle.encode(data)    
    
##    This class used to create an object that encapsulates the standard JSON 
#     response used by certain web based service, including the TWTA and network camera. 
class WebServiceResponse(JsonSerializer):

    ##  Create a WebServiceResponse object 
    # @param self The object pointer
    # @param command  The name of the command invoked on the web service.  
    #                    This is mainly used for debugging (i.e. displaying a meaningful 
    #                    error message to the client).
    # @return A WebServiceResponse object
    def __init__(self, command=None):
        self.command = command
        self.values = {}
        self.errorMessages = []
        
    ##  Add a name / value pair to the object.
    # @param self The object pointer
    # @param key   The name (or key) of the value.
    # @param value  The value in the name / value pair 
    def addValue(self, key, value):
        self.values[key] = value
                
    ##  Set all the name/value pairs in this object to those in the dictionary.
    # @param self The object pointer
    # @param dictionary  The dictionary whose values you will use to set the values in this object.
    def setValuesFromDictionary(self, dictionary):
        self.values = deepcopy(dictionary)
        
    ##  Add the values in the dictionary to the name/value pairs in this object.
    # @param self The object pointer
    # @param dictionary  The dictionary whose values you will add to those in this object.
    def addValuesFromDictionary(self, dictionary):
        for key, value in list(dictionary.items()):
            self.values[key] = value
      
    ##  Add an error message to the error message string.
    # @param self The object pointer
    # @param errorMessage   The error message. 
    def addErrorMessage(self, errorMessage):
        self.errorMessages.append(errorMessage)

    @property
    def command(self):
    	return self._command
    
    @command.setter
    def command(self,command):
    	self._command = command
    
    @property
    ##  Return True if there were no errors
    # @param self The object pointer
    # @return  True if there were no errors
    def OK(self):
        if len(self.errorMessages) == 0:
            return True
        return False

    def serialize(self, compact=False):     
        """ Serialize self to JSON string.
        """
#            "py/object": "json_serializer.WebServiceResponse", 
#        print dir(self.__class__)
        data = {
            "py/object": '%s.%s' % (self.__module__,self.__class__.__name__), 
            "errorMessages": self.errorMessages, 
            "values": self.values, 
            "command": self.command,
        }
        if (compact):
        	return json.dumps(data)
#            jsonpickle.set_encoder_options('json', indent=None)   
#            jsonpickle.set_encoder_options('simplejson', indent=None)  
        else:
        	return json.dumps(data, sort_keys=True, indent=3, separators=(',', ': '))
#            jsonpickle.set_encoder_options('json', indent=3)   
#            jsonpickle.set_encoder_options('simplejson', indent=3)  
#        return jsonpickle.encode(self)    

if __name__ == '__main__':
    
#    from json_serializer import *
    
    webServiceResponse = WebServiceResponse("testCommandName")
    jsonString = webServiceResponse.serialize()
    print(jsonString)
#{
#   "py/object": "json_serializer.WebServiceResponse", 
#   "errorMessages": [], 
#   "values": {}, 
#   "commandName": "testCommandName"
#}
    
    webServiceResponse.addErrorMessage("error message 1")
    webServiceResponse.addErrorMessage("error message 2")
    jsonString = webServiceResponse.serialize()
    print(jsonString)

    sys.exit('Enough!')
    webServiceReponse2 = JsonSerializer.deserialize(jsonString)
    
    print(repr(webServiceReponse2))
    print(repr(webServiceReponse2.errorMessages))
    for message in webServiceReponse2.errorMessages:
        print(message)
        
    webServiceResponse.addValue("testInt", 7)
    webServiceResponse.addValue("testSring", "hello world")
    webServiceResponse.addValue("testIntList", [0,1,3,7])
    
    d1 = {"dataType": "float", "isReadOnly": False, "availableToScenarios": True, \
             "commandName": "setCenterFrequency", "description": "Center Frequecy"}
    d2 = {"dataType": "dictionary", "isReadOnly": True, "availableToScenarios": False, \
             "commandName": "fetch", "description": "Return all available data"}   
    
    webServiceResponse.addValue("testDictList", [d1,d2])
    
    
    jsonString = webServiceResponse.serialize()
    print(jsonString)
    webServiceReponse2 = JsonSerializer.deserialize(jsonString)
    print(repr(webServiceReponse2))
    for key,value in list(webServiceReponse2.values.items()):
        print(repr(key) + ' : ' + repr(value))

