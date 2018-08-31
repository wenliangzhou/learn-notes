
var wlz = (function (wlz) {
    wlz.inherit = (function (Target,Origin) {
        // 私有变量，中间层
        var F = function () {};
        return function (Target,Origin,Boolean)
        {
            console.log(Origin.prototype);
            F.prototype = Origin.prototype;
            Target.prototype = new F();
            Target.constructor = Target;
            Target.prototype.uber = Origin.prototype;
        };
    }());
    return wlz;
})({});