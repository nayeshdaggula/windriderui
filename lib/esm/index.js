import React from 'react';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

function Button(_a) {
    var children = _a.children, _b = _a.size, size = _b === void 0 ? 'md' : _b, _c = _a.variant, variant = _c === void 0 ? 'light' : _c, _d = _a.rounded, rounded = _d === void 0 ? 'md' : _d, _e = _a.color, color = _e === void 0 ? 'blue' : _e, _f = _a.className, className = _f === void 0 ? '' : _f, props = __rest(_a, ["children", "size", "variant", "rounded", "color", "className"]);
    var sizeClasses = {
        xs: 'px-[0.875rem] text-xs font-medium h-[1.875rem]',
        sm: 'px-[1.125rem] text-sm font-medium h-[2.25rem]',
        md: 'px-[1.375rem] text-base font-medium h-[2.625rem]',
        lg: 'px-[1.625rem] text-lg font-medium h-[3.125rem]',
        xl: 'px-[2rem] text-xl font-medium h-[3.5rem]',
    };
    var roundedClasses = {
        xs: 'rounded-xs',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
    };
    var filledcolorClasses = {
        black: 'bg-black text-white hover:bg-black',
        white: 'bg-white text-black hover:bg-white',
        red: 'bg-red-500 text-white hover:bg-red-600',
        green: 'bg-green-500 text-white hover:bg-green-600',
        blue: 'bg-blue-500 text-white hover:bg-blue-600',
        yellow: 'bg-yellow-500 text-white hover:bg-yellow-600',
        purple: 'bg-purple-500 text-white hover:bg-purple-600',
        pink: 'bg-pink-500 text-white hover:bg-pink-600',
        indigo: 'bg-indigo-500 text-white hover:bg-indigo-600',
        teal: 'bg-teal-500 text-white hover:bg-teal-600',
        gray: 'bg-gray-500 text-white hover:bg-gray-600',
        orange: 'bg-orange-500 text-white hover:bg-orange-600',
        cyan: 'bg-cyan-500 text-white hover:bg-cyan-600',
        lime: 'bg-lime-500 text-white hover:bg-lime-600',
        amber: 'bg-amber-500 text-white hover:bg-amber-600',
        emerald: 'bg-emerald-500 text-white hover:bg-emerald-600',
        lightBlue: 'bg-lightBlue-500 text-white hover:bg-lightBlue-600',
        violet: 'bg-violet-500 text-white hover:bg-violet-600',
        fuchsia: 'bg-fuchsia-500 text-white hover:bg-fuchsia-600',
        rose: 'bg-rose-500 text-white hover:bg-rose-600',
        warmGray: 'bg-warmGray-500 text-white hover:bg-warmGray-600',
        trueGray: 'bg-trueGray-500 text-white hover:bg-trueGray-600',
        coolGray: 'bg-coolGray-500 text-white hover:bg-coolGray-600',
        blueGray: 'bg-blueGray-500 text-white hover:bg-blueGray-600',
    };
    var lightcolorClasses = {
        black: 'bg-black text-black hover:bg-black',
        white: 'bg-white text-white hover:bg-white',
        red: 'bg-red-100 text-red-500 hover:bg-red-200',
        green: 'bg-green-100 text-green-500 hover:bg-green-200',
        blue: 'bg-blue-100 text-blue-500 hover:bg-blue-200',
        yellow: 'bg-yellow-100 text-yellow-500 hover:bg-yellow-200',
        purple: 'bg-purple-100 text-purple-500 hover:bg-purple-200',
        pink: 'bg-pink-100 text-pink-500 hover:bg-pink-200',
        indigo: 'bg-indigo-100 text-indigo-500 hover:bg-indigo-200',
        teal: 'bg-teal-100 text-teal-500 hover:bg-teal-200',
        gray: 'bg-gray-100 text-gray-500 hover:bg-gray-200',
        orange: 'bg-orange-100 text-orange-500 hover:bg-orange-200',
        cyan: 'bg-cyan-100 text-cyan-500 hover:bg-cyan-200',
        lime: 'bg-lime-100 text-lime-500 hover:bg-lime-200',
        amber: 'bg-amber-100 text-amber-500 hover:bg-amber-200',
        emerald: 'bg-emerald-100 text-emerald-500 hover:bg-emerald-200',
        lightBlue: 'bg-lightBlue-100 text-lightBlue-500 hover:bg-lightBlue-200',
        violet: 'bg-violet-100 text-violet-500 hover:bg-violet-200',
        fuchsia: 'bg-fuchsia-100 text-fuchsia-500 hover:bg-fuchsia-200',
        rose: 'bg-rose-100 text-rose-500 hover:bg-rose-200',
        warmGray: 'bg-warmGray-100 text-warmGray-500 hover:bg-warmGray-200',
        trueGray: 'bg-trueGray-100 text-trueGray-500 hover:bg-trueGray-200',
        coolGray: 'bg-coolGray-100 text-coolGray-500 hover:bg-coolGray-200',
        blueGray: 'bg-blueGray-100 text-blueGray-500 hover:bg-blueGray-200',
    };
    var getBackgroundAndTextClasses = function () {
        if (variant === 'light') {
            return lightcolorClasses[color] || "".concat(color, " text-white");
        }
        else if (variant === 'filled') {
            return filledcolorClasses[color] || "".concat(color, " text-white");
        }
        else if (variant === 'outline') {
            return "bg-white border border-".concat(color, " text-").concat(color);
        }
        else if (variant === 'ghost') {
            return "text-".concat(color);
        }
        else {
            return "bg-white text-black border border-black";
        }
    };
    var buttonClasses = clsx('mainbutton', roundedClasses[rounded], sizeClasses[size], getBackgroundAndTextClasses(), className);
    return (React.createElement("button", __assign({ className: buttonClasses }, props), children));
}

function Box(_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React.createElement("div", __assign({}, props), children));
}

var TextSize;
(function (TextSize) {
    TextSize["xs"] = "text-xs";
    TextSize["sm"] = "text-sm";
    TextSize["md"] = "text-md";
    TextSize["lg"] = "text-lg";
    TextSize["xl"] = "text-xl";
})(TextSize || (TextSize = {}));
var TextColor;
(function (TextColor) {
    TextColor["black"] = "text-black";
    TextColor["white"] = "text-white";
    TextColor["red"] = "text-red-500";
    TextColor["green"] = "text-green-500";
    TextColor["blue"] = "text-blue-500";
    TextColor["yellow"] = "text-yellow-500";
    TextColor["purple"] = "text-purple-500";
    TextColor["pink"] = "text-pink-500";
    TextColor["indigo"] = "text-indigo-500";
    TextColor["teal"] = "text-teal-500";
    TextColor["gray"] = "text-gray-500";
    TextColor["orange"] = "text-orange-500";
    TextColor["cyan"] = "text-cyan-500";
    TextColor["lime"] = "text-lime-500";
    TextColor["amber"] = "text-amber-500";
    TextColor["emerald"] = "text-emerald-500";
    TextColor["lightBlue"] = "text-lightBlue-500";
    TextColor["violet"] = "text-violet-500";
    TextColor["fuchsia"] = "text-fuchsia-500";
    TextColor["rose"] = "text-rose-500";
    TextColor["warmGray"] = "text-warmGray-500";
    TextColor["trueGray"] = "text-trueGray-500";
    TextColor["coolGray"] = "text-coolGray-500";
    TextColor["blueGray"] = "text-blueGray-500";
    TextColor["inherit"] = "text-current";
})(TextColor || (TextColor = {}));
var TextAlign;
(function (TextAlign) {
    TextAlign["left"] = "text-left";
    TextAlign["center"] = "text-center";
    TextAlign["right"] = "text-right";
    TextAlign["justify"] = "text-justify";
})(TextAlign || (TextAlign = {}));
var TextTransform;
(function (TextTransform) {
    TextTransform["uppercase"] = "uppercase";
    TextTransform["lowercase"] = "lowercase";
    TextTransform["capitalize"] = "capitalize";
    TextTransform["normalCase"] = "normal-case";
})(TextTransform || (TextTransform = {}));
var TextDecoration;
(function (TextDecoration) {
    TextDecoration["lineThrough"] = "line-through";
    TextDecoration["underline"] = "underline";
    TextDecoration["noUnderline"] = "no-underline";
})(TextDecoration || (TextDecoration = {}));
var TextWeight;
(function (TextWeight) {
    TextWeight["thin"] = "font-thin";
    TextWeight["extralight"] = "font-extralight";
    TextWeight["light"] = "font-light";
    TextWeight["normal"] = "font-normal";
    TextWeight["medium"] = "font-medium";
    TextWeight["semibold"] = "font-semibold";
    TextWeight["bold"] = "font-bold";
    TextWeight["extrabold"] = "font-extrabold";
    TextWeight["black"] = "font-black";
})(TextWeight || (TextWeight = {}));
var TextStyles;
(function (TextStyles) {
    TextStyles["italic"] = "italic";
    TextStyles["notItalic"] = "not-italic";
})(TextStyles || (TextStyles = {}));
function Text(_a) {
    var children = _a.children, _b = _a.component, component = _b === void 0 ? 'p' : _b, _c = _a.size, size = _c === void 0 ? 'md' : _c, _d = _a.color, color = _d === void 0 ? 'inherit' : _d, _e = _a.align, align = _e === void 0 ? 'left' : _e, _f = _a.tt, tt = _f === void 0 ? 'normalCase' : _f, _g = _a.td, td = _g === void 0 ? 'noUnderline' : _g, _h = _a.tw, tw = _h === void 0 ? 'normal' : _h, _j = _a.ts, ts = _j === void 0 ? 'notItalic' : _j, _k = _a.className, className = _k === void 0 ? '' : _k, props = __rest(_a, ["children", "component", "size", "color", "align", "tt", "td", "tw", "ts", "className"]);
    var Component = component;
    var textClasses = [
        TextSize[size],
        TextColor[color],
        TextAlign[align],
        TextTransform[tt],
        TextDecoration[td],
        TextWeight[tw],
        TextStyles[ts],
        className,
    ]
        .filter(Boolean)
        .join(' ');
    return (React.createElement(Component, __assign({ className: textClasses }, props), children));
}

var Grid = function (_a) {
    var children = _a.children, _b = _a.gap, gap = _b === void 0 ? 'gap-4' : _b, _c = _a.className, className = _c === void 0 ? '' : _c;
    return (React.createElement("div", { className: "grid ".concat(gap, " ").concat(className) }, children));
};
var GridItem = function (_a) {
    var children = _a.children, _b = _a.xs, xs = _b === void 0 ? 'col-span-12' : _b, _c = _a.sm, sm = _c === void 0 ? 'sm:col-span-6' : _c, _d = _a.md, md = _d === void 0 ? 'md:col-span-4' : _d, _e = _a.lg, lg = _e === void 0 ? 'lg:col-span-3' : _e, _f = _a.xl, xl = _f === void 0 ? 'xl:col-span-2' : _f, _g = _a.className, className = _g === void 0 ? '' : _g;
    return (React.createElement("div", { className: "".concat(xs, " ").concat(sm, " ").concat(md, " ").concat(lg, " ").concat(xl, " ").concat(className) }, children));
};
// Assign GridItem as a static property of Grid
Grid.Item = GridItem;

var ImageFit;
(function (ImageFit) {
    ImageFit["contain"] = "object-contain";
    ImageFit["cover"] = "object-cover";
    ImageFit["fill"] = "object-fill";
    ImageFit["none"] = "object-none";
    ImageFit["scaleDown"] = "object-scale-down";
})(ImageFit || (ImageFit = {}));
var ImagePosition;
(function (ImagePosition) {
    ImagePosition["bottom"] = "object-bottom";
    ImagePosition["center"] = "object-center";
    ImagePosition["left"] = "object-left";
    ImagePosition["leftBottom"] = "object-left-bottom";
    ImagePosition["leftTop"] = "object-left-top";
    ImagePosition["right"] = "object-right";
    ImagePosition["rightBottom"] = "object-right-bottom";
    ImagePosition["rightTop"] = "object-right-top";
    ImagePosition["top"] = "object-top";
})(ImagePosition || (ImagePosition = {}));
var ImageRadius;
(function (ImageRadius) {
    ImageRadius["none"] = "rounded-none";
    ImageRadius["sm"] = "rounded-sm";
    ImageRadius["md"] = "rounded-md";
    ImageRadius["lg"] = "rounded-lg";
    ImageRadius["xl"] = "rounded-xl";
    ImageRadius["full"] = "rounded-full";
})(ImageRadius || (ImageRadius = {}));
function Image(_a) {
    var src = _a.src, alt = _a.alt, _b = _a.fit, fit = _b === void 0 ? 'cover' : _b, _c = _a.position, position = _c === void 0 ? 'center' : _c, _d = _a.radius, radius = _d === void 0 ? 'none' : _d, _e = _a.width, width = _e === void 0 ? 'auto' : _e, _f = _a.height, height = _f === void 0 ? 'auto' : _f, _g = _a.className, className = _g === void 0 ? '' : _g, props = __rest(_a, ["src", "alt", "fit", "position", "radius", "width", "height", "className"]);
    var imageClasses = [
        ImageFit[fit],
        ImagePosition[position],
        ImageRadius[radius],
        className,
    ]
        .filter(function (c) { return c; })
        .join(' ');
    var style = {
        width: typeof width === 'number' ? "".concat(width, "px") : width,
        height: typeof height === 'number' ? "".concat(height, "px") : height,
    };
    return (React.createElement("img", __assign({ src: src, alt: alt, className: imageClasses, style: style }, props)));
}

export { Box, Button, Grid, Image, Text };
//# sourceMappingURL=index.js.map
