import React from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = "/*! tailwindcss v3.4.1 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.rounded{border-radius:.25rem}.rounded-lg{border-radius:.5rem}.rounded-md{border-radius:.375rem}.rounded-sm{border-radius:.125rem}.rounded-xl{border-radius:.75rem}.border{border-width:1px}.border-black{--tw-border-opacity:1;border-color:rgb(0 0 0/var(--tw-border-opacity))}.bg-amber-100{--tw-bg-opacity:1;background-color:rgb(254 243 199/var(--tw-bg-opacity))}.bg-amber-500{--tw-bg-opacity:1;background-color:rgb(245 158 11/var(--tw-bg-opacity))}.bg-black{--tw-bg-opacity:1;background-color:rgb(0 0 0/var(--tw-bg-opacity))}.bg-blue-100{--tw-bg-opacity:1;background-color:rgb(219 234 254/var(--tw-bg-opacity))}.bg-blue-500{--tw-bg-opacity:1;background-color:rgb(59 130 246/var(--tw-bg-opacity))}.bg-cyan-100{--tw-bg-opacity:1;background-color:rgb(207 250 254/var(--tw-bg-opacity))}.bg-cyan-500{--tw-bg-opacity:1;background-color:rgb(6 182 212/var(--tw-bg-opacity))}.bg-emerald-100{--tw-bg-opacity:1;background-color:rgb(209 250 229/var(--tw-bg-opacity))}.bg-emerald-500{--tw-bg-opacity:1;background-color:rgb(16 185 129/var(--tw-bg-opacity))}.bg-fuchsia-100{--tw-bg-opacity:1;background-color:rgb(250 232 255/var(--tw-bg-opacity))}.bg-fuchsia-500{--tw-bg-opacity:1;background-color:rgb(217 70 239/var(--tw-bg-opacity))}.bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.bg-gray-500{--tw-bg-opacity:1;background-color:rgb(107 114 128/var(--tw-bg-opacity))}.bg-green-100{--tw-bg-opacity:1;background-color:rgb(220 252 231/var(--tw-bg-opacity))}.bg-green-500{--tw-bg-opacity:1;background-color:rgb(34 197 94/var(--tw-bg-opacity))}.bg-indigo-100{--tw-bg-opacity:1;background-color:rgb(224 231 255/var(--tw-bg-opacity))}.bg-indigo-500{--tw-bg-opacity:1;background-color:rgb(99 102 241/var(--tw-bg-opacity))}.bg-lime-100{--tw-bg-opacity:1;background-color:rgb(236 252 203/var(--tw-bg-opacity))}.bg-lime-500{--tw-bg-opacity:1;background-color:rgb(132 204 22/var(--tw-bg-opacity))}.bg-orange-100{--tw-bg-opacity:1;background-color:rgb(255 237 213/var(--tw-bg-opacity))}.bg-orange-500{--tw-bg-opacity:1;background-color:rgb(249 115 22/var(--tw-bg-opacity))}.bg-pink-100{--tw-bg-opacity:1;background-color:rgb(252 231 243/var(--tw-bg-opacity))}.bg-pink-500{--tw-bg-opacity:1;background-color:rgb(236 72 153/var(--tw-bg-opacity))}.bg-purple-100{--tw-bg-opacity:1;background-color:rgb(243 232 255/var(--tw-bg-opacity))}.bg-purple-500{--tw-bg-opacity:1;background-color:rgb(168 85 247/var(--tw-bg-opacity))}.bg-red-100{--tw-bg-opacity:1;background-color:rgb(254 226 226/var(--tw-bg-opacity))}.bg-red-500{--tw-bg-opacity:1;background-color:rgb(239 68 68/var(--tw-bg-opacity))}.bg-rose-100{--tw-bg-opacity:1;background-color:rgb(255 228 230/var(--tw-bg-opacity))}.bg-rose-500{--tw-bg-opacity:1;background-color:rgb(244 63 94/var(--tw-bg-opacity))}.bg-teal-100{--tw-bg-opacity:1;background-color:rgb(204 251 241/var(--tw-bg-opacity))}.bg-teal-500{--tw-bg-opacity:1;background-color:rgb(20 184 166/var(--tw-bg-opacity))}.bg-violet-100{--tw-bg-opacity:1;background-color:rgb(237 233 254/var(--tw-bg-opacity))}.bg-violet-500{--tw-bg-opacity:1;background-color:rgb(139 92 246/var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.bg-yellow-100{--tw-bg-opacity:1;background-color:rgb(254 249 195/var(--tw-bg-opacity))}.bg-yellow-500{--tw-bg-opacity:1;background-color:rgb(234 179 8/var(--tw-bg-opacity))}.text-amber-500{--tw-text-opacity:1;color:rgb(245 158 11/var(--tw-text-opacity))}.text-black{--tw-text-opacity:1;color:rgb(0 0 0/var(--tw-text-opacity))}.text-blue-500{--tw-text-opacity:1;color:rgb(59 130 246/var(--tw-text-opacity))}.text-cyan-500{--tw-text-opacity:1;color:rgb(6 182 212/var(--tw-text-opacity))}.text-emerald-500{--tw-text-opacity:1;color:rgb(16 185 129/var(--tw-text-opacity))}.text-fuchsia-500{--tw-text-opacity:1;color:rgb(217 70 239/var(--tw-text-opacity))}.text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}.text-green-500{--tw-text-opacity:1;color:rgb(34 197 94/var(--tw-text-opacity))}.text-indigo-500{--tw-text-opacity:1;color:rgb(99 102 241/var(--tw-text-opacity))}.text-lime-500{--tw-text-opacity:1;color:rgb(132 204 22/var(--tw-text-opacity))}.text-orange-500{--tw-text-opacity:1;color:rgb(249 115 22/var(--tw-text-opacity))}.text-pink-500{--tw-text-opacity:1;color:rgb(236 72 153/var(--tw-text-opacity))}.text-purple-500{--tw-text-opacity:1;color:rgb(168 85 247/var(--tw-text-opacity))}.text-red-500{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}.text-rose-500{--tw-text-opacity:1;color:rgb(244 63 94/var(--tw-text-opacity))}.text-teal-500{--tw-text-opacity:1;color:rgb(20 184 166/var(--tw-text-opacity))}.text-violet-500{--tw-text-opacity:1;color:rgb(139 92 246/var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.text-yellow-500{--tw-text-opacity:1;color:rgb(234 179 8/var(--tw-text-opacity))}.outline{outline-style:solid}.hover\\:bg-amber-200:hover{--tw-bg-opacity:1;background-color:rgb(253 230 138/var(--tw-bg-opacity))}.hover\\:bg-amber-600:hover{--tw-bg-opacity:1;background-color:rgb(217 119 6/var(--tw-bg-opacity))}.hover\\:bg-black:hover{--tw-bg-opacity:1;background-color:rgb(0 0 0/var(--tw-bg-opacity))}.hover\\:bg-blue-200:hover{--tw-bg-opacity:1;background-color:rgb(191 219 254/var(--tw-bg-opacity))}.hover\\:bg-blue-600:hover{--tw-bg-opacity:1;background-color:rgb(37 99 235/var(--tw-bg-opacity))}.hover\\:bg-cyan-200:hover{--tw-bg-opacity:1;background-color:rgb(165 243 252/var(--tw-bg-opacity))}.hover\\:bg-cyan-600:hover{--tw-bg-opacity:1;background-color:rgb(8 145 178/var(--tw-bg-opacity))}.hover\\:bg-emerald-200:hover{--tw-bg-opacity:1;background-color:rgb(167 243 208/var(--tw-bg-opacity))}.hover\\:bg-emerald-600:hover{--tw-bg-opacity:1;background-color:rgb(5 150 105/var(--tw-bg-opacity))}.hover\\:bg-fuchsia-200:hover{--tw-bg-opacity:1;background-color:rgb(245 208 254/var(--tw-bg-opacity))}.hover\\:bg-fuchsia-600:hover{--tw-bg-opacity:1;background-color:rgb(192 38 211/var(--tw-bg-opacity))}.hover\\:bg-gray-200:hover{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity))}.hover\\:bg-gray-600:hover{--tw-bg-opacity:1;background-color:rgb(75 85 99/var(--tw-bg-opacity))}.hover\\:bg-green-200:hover{--tw-bg-opacity:1;background-color:rgb(187 247 208/var(--tw-bg-opacity))}.hover\\:bg-green-600:hover{--tw-bg-opacity:1;background-color:rgb(22 163 74/var(--tw-bg-opacity))}.hover\\:bg-indigo-200:hover{--tw-bg-opacity:1;background-color:rgb(199 210 254/var(--tw-bg-opacity))}.hover\\:bg-indigo-600:hover{--tw-bg-opacity:1;background-color:rgb(79 70 229/var(--tw-bg-opacity))}.hover\\:bg-lime-200:hover{--tw-bg-opacity:1;background-color:rgb(217 249 157/var(--tw-bg-opacity))}.hover\\:bg-lime-600:hover{--tw-bg-opacity:1;background-color:rgb(101 163 13/var(--tw-bg-opacity))}.hover\\:bg-orange-200:hover{--tw-bg-opacity:1;background-color:rgb(254 215 170/var(--tw-bg-opacity))}.hover\\:bg-orange-600:hover{--tw-bg-opacity:1;background-color:rgb(234 88 12/var(--tw-bg-opacity))}.hover\\:bg-pink-200:hover{--tw-bg-opacity:1;background-color:rgb(251 207 232/var(--tw-bg-opacity))}.hover\\:bg-pink-600:hover{--tw-bg-opacity:1;background-color:rgb(219 39 119/var(--tw-bg-opacity))}.hover\\:bg-purple-200:hover{--tw-bg-opacity:1;background-color:rgb(233 213 255/var(--tw-bg-opacity))}.hover\\:bg-purple-600:hover{--tw-bg-opacity:1;background-color:rgb(147 51 234/var(--tw-bg-opacity))}.hover\\:bg-red-200:hover{--tw-bg-opacity:1;background-color:rgb(254 202 202/var(--tw-bg-opacity))}.hover\\:bg-red-600:hover{--tw-bg-opacity:1;background-color:rgb(220 38 38/var(--tw-bg-opacity))}.hover\\:bg-rose-200:hover{--tw-bg-opacity:1;background-color:rgb(254 205 211/var(--tw-bg-opacity))}.hover\\:bg-rose-600:hover{--tw-bg-opacity:1;background-color:rgb(225 29 72/var(--tw-bg-opacity))}.hover\\:bg-teal-200:hover{--tw-bg-opacity:1;background-color:rgb(153 246 228/var(--tw-bg-opacity))}.hover\\:bg-teal-600:hover{--tw-bg-opacity:1;background-color:rgb(13 148 136/var(--tw-bg-opacity))}.hover\\:bg-violet-200:hover{--tw-bg-opacity:1;background-color:rgb(221 214 254/var(--tw-bg-opacity))}.hover\\:bg-violet-600:hover{--tw-bg-opacity:1;background-color:rgb(124 58 237/var(--tw-bg-opacity))}.hover\\:bg-white:hover{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.hover\\:bg-yellow-200:hover{--tw-bg-opacity:1;background-color:rgb(254 240 138/var(--tw-bg-opacity))}.hover\\:bg-yellow-600:hover{--tw-bg-opacity:1;background-color:rgb(202 138 4/var(--tw-bg-opacity))}";
styleInject(css_248z$1);

function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

var css_248z = ".mainbutton{align-items:center;border-color:transparent;border-width:1px;column-gap:.5rem;display:inline-flex}.mainbutton:disabled{opacity:.5;pointer-events:none}@media (prefers-color-scheme:dark){.mainbutton:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);--tw-ring-opacity:1;--tw-ring-color:rgb(75 85 99/var(--tw-ring-opacity));box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000);outline:2px solid transparent;outline-offset:2px}}.size-xl{font-size:1.25rem;height:3.5rem;padding-left:2rem;padding-right:2rem}.size-lg,.size-xl{font-weight:500;line-height:1.75rem}.size-lg{font-size:1.125rem;height:3.125rem;padding-left:1.625rem;padding-right:1.625rem}.size-md{font-size:1rem;height:2.625rem;line-height:1.5rem;padding-left:1.375rem;padding-right:1.375rem}.size-md,.size-sm{font-weight:500}.size-sm{font-size:.875rem;height:2.25rem;line-height:1.25rem;padding-left:1.125rem;padding-right:1.125rem}.size-xs{font-size:.75rem;font-weight:500;height:1.875rem;line-height:1rem;padding-left:.875rem;padding-right:.875rem}";
styleInject(css_248z);

function Button(_a) {
    var children = _a.children, _b = _a.size, size = _b === void 0 ? 'md' : _b, _c = _a.variant, variant = _c === void 0 ? 'light' : _c, _d = _a.rounded, rounded = _d === void 0 ? 'md' : _d, _e = _a.color, color = _e === void 0 ? 'blue' : _e, _f = _a.className, className = _f === void 0 ? '' : _f;
    var sizeClasses = {
        xs: 'size-xs',
        sm: 'size-sm',
        md: 'size-md',
        lg: 'size-lg',
        xl: 'size-xl',
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
    return (React.createElement("button", { className: buttonClasses }, children));
}

export { Button };
//# sourceMappingURL=index.js.map
