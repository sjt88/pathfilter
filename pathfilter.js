module.exports = {
  byExt: byExt  
};


function byExt(ext,paths) {
    function filterArr(paths,ext) {
      var filtered = [];
      for (var i = 0; i < paths.length; i++) {
        if (hasExt(paths[i], ext)) {
          filtered.push(paths[i]);
        }
      }
      return filtered;
    }
    function hasExt(str,ext) {
      if ( str.split('.' + ext)[str.split.length-1] === '') {
        return true;
      }
      else {
        return false;
      }
    }
  var newPaths = [];
  if (typeof paths === 'string') {
      paths = [paths];
  }
  
  if (Array.isArray(paths)) {
    if (typeof ext === 'string') { // filter by single ext
      newPaths = filterArr(paths,ext);
    }
    else if (Array.isArray(ext)) {
      var filteredArr = [];
      for (var i = 0; i < ext.length; i++) {
        filteredArr = filterArr(paths,ext[i]);
        newPaths = newPaths.concat(filteredArr);
      }
    }
    return newPaths;
  }
}