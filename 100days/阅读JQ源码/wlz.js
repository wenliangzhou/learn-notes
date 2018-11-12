/**
 * 注释
 */
(function (global,factory) {
    "use strict";
    factory(global);
})(typeof window !== "undefined" ? window : this,function (global) {
    "use strict";
    global.wlz = {
        
        getClass:function (x,y) {
            
            $(x).addClass(y);
        }
    }
});
