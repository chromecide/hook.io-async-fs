hook.io-async-fs
================

Basic Hook.io Hook based on async-fs by Gabriel Lesperance

## Installation

     git clone git@github.com:chromecide/hook.io-async-fs.git
     cd hook.io-async-fs
     npm install
     node bin/async_fs

## Hook Event Names

### Event Listeners

**[name]::async_fs::watch_file** *{name, path}* - Watches file *path* using the hook name *name*

**[name]::async_fs::unwatch_file** *{path}* - Stops watching the file specified by *path*

**[name]::async_fs::watch_tree** *{name, path}* - Traverses the directory defined by *path* and recursively creates an async_fs FileHook object for each file

### Events Emitted:

**async_fs::file::watching** *{path, curr, prev}* - 

**async_fs::file::stopped_watching** *{path, curr, prev}* - 

**async_fs::file::access** *{path, curr, prev}* -

**async_fs::file::destroy** *{path, curr, prev}* -

**async_fs::file::delete** *{path, curr, prev}* -

**async_fs::file::add** *{path, curr, prev}* -

**async_fs::file::change** *{path, curr, prev}* - 

### Hook config.json settings

```js
{

}
```
