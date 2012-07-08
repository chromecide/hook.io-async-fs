
var fs      = require('fs')
  , path	= require('path')
  , util	= require('util')
  , Hook 	= require('hook.io').Hook
  ;

var cache = [];

var FileHook = exports.FileHook = function(options){
	Hook.call(this, options);
	var self = this;
	
	if(!self.path){
		self.path = './';
	}
	
	fs.watchFile(self.path, fileEventListener);
	
	self.emit('file::watching', self.path);
	
	function fileEventListener(curr, prev) {
    	self.emit('file::access', {path: self.path, curr: curr, prev: prev});
      
	    if (curr.nlink === 0) {
	      self.emit('file::destroy', {path: self.path, curr: curr, prev: prev});
	    }
    
    	if (+curr.mtime != +prev.mtime) {  
      		if (curr.isDirectory() && prev.isDirectory()) {
        		if (curr.nlink > prev.nlink) {
          			self.emit('file::add', {path: self.path, curr: curr, prev: prev});
        		} else if (curr.nlink < prev.nlink) {
          			self.emit('file::delete', {path: self.path, curr: curr, prev: prev});
        		}
         
      		}
      
      		self.emit('file::change', {path: self.path, curr: curr, prev: prev});
    	}
  	}
}

	util.inherits(FileHook, Hook);
	
	FileHook.prototype.unwatch = function unwatch_FileEventEmitter() {
	  fs.unwatchFile(this.path);
	  this.emit('file::stopped_watching', {path: this.path});
	}