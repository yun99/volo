//Wrapped in an outer function to preserve global this
(function (root) { var amdExports; define([], function () { (function () {


window.baz = 'bam';


amdExports = baz;

}.call(root));
    return amdExports;
}); }(this));
