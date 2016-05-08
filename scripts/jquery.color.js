!function(a,b){function c(a,b,c){var d=l[b.type]||{},e=b.empty||c;return e&&null==a?null:b.def&&null==a?b.def:(a=d.floor?~~a:parseFloat(a),null==a||isNaN(a)?b.def:d.mod?(a%=d.mod,0>a?d.mod+a:a):d.min>a?d.min:d.max<a?d.max:a)}function d(b){var c=j(),d=c._rgba=[];return b=b.toLowerCase(),o(i,function(a,e){var f,g=e.re.exec(b),h=g&&e.parse(g),i=e.space||"rgba",j=k[i].cache;return h?(f=c[i](h),c[j]=f[j],d=c._rgba=f._rgba,!1):void 0}),0!==d.length?(0===Math.max.apply(Math,d)&&a.extend(d,f.transparent),c):(b=f[b])?b:void 0}function e(a,b,c){return c=(c+1)%1,1>6*c?a+6*(b-a)*c:1>2*c?b:2>3*c?a+(b-a)*(2/3-c)*6:a}var f,g="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color outlineColor".split(" "),h=/^([\-+])=\s*(\d+\.?\d*)/,i=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(a){return[a[1],a[2],a[3],a[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(a){return[2.55*a[1],2.55*a[2],2.55*a[3],a[4]]}},{re:/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,parse:function(a){return[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]}},{re:/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/,parse:function(a){return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(a){return[a[1],a[2]/100,a[3]/100,a[4]]}}],j=a.Color=function(b,c,d,e){return new a.Color.fn.parse(b,c,d,e)},k={rgba:{cache:"_rgba",props:{red:{idx:0,type:"byte",empty:!0},green:{idx:1,type:"byte",empty:!0},blue:{idx:2,type:"byte",empty:!0},alpha:{idx:3,type:"percent",def:1}}},hsla:{cache:"_hsla",props:{hue:{idx:0,type:"degrees",empty:!0},saturation:{idx:1,type:"percent",empty:!0},lightness:{idx:2,type:"percent",empty:!0}}}},l={"byte":{floor:!0,min:0,max:255},percent:{min:0,max:1},degrees:{mod:360,floor:!0}},m=k.rgba.props,n=j.support={},o=a.each;k.hsla.props.alpha=m.alpha,j.fn=j.prototype={constructor:j,parse:function(e,g,h,i){if(e===b)return this._rgba=[null,null,null,null],this;(e instanceof a||e.nodeType)&&(e=e instanceof a?e.css(g):a(e).css(g),g=b);var l=this,n=a.type(e),p=this._rgba=[];return g!==b&&(e=[e,g,h,i],n="array"),"string"===n?this.parse(d(e)||f._default):"array"===n?(o(m,function(a,b){p[b.idx]=c(e[b.idx],b)}),this):"object"===n?(e instanceof j?o(k,function(a,b){e[b.cache]&&(l[b.cache]=e[b.cache].slice())}):o(k,function(a,b){o(b.props,function(a,d){var f=b.cache;if(!l[f]&&b.to){if(null==e[a]||"alpha"===a)return;l[f]=b.to(l._rgba)}l[f][d.idx]=c(e[a],d,!0)})}),this):void 0},is:function(a){var b=j(a),c=!0,d=this;return o(k,function(a,e){var f,g=b[e.cache];return g&&(f=d[e.cache]||e.to&&e.to(d._rgba)||[],o(e.props,function(a,b){return null!=g[b.idx]?c=g[b.idx]===f[b.idx]:void 0})),c}),c},_space:function(){var a=[],b=this;return o(k,function(c,d){b[d.cache]&&a.push(c)}),a.pop()},transition:function(a,b){var d=j(a),e=d._space(),f=k[e],g=this[f.cache]||f.to(this._rgba),h=g.slice();return d=d[f.cache],o(f.props,function(a,e){var f=e.idx,i=g[f],j=d[f],k=l[e.type]||{};null!==j&&(null===i?h[f]=j:(k.mod&&(j-i>k.mod/2?i+=k.mod:i-j>k.mod/2&&(i-=k.mod)),h[e.idx]=c((j-i)*b+i,e)))}),this[e](h)},blend:function(b){if(1===this._rgba[3])return this;var c=this._rgba.slice(),d=c.pop(),e=j(b)._rgba;return j(a.map(c,function(a,b){return(1-d)*e[b]+d*a}))},toRgbaString:function(){var b="rgba(",c=a.map(this._rgba,function(a,b){return null==a?b>2?1:0:a});return 1===c[3]&&(c.pop(),b="rgb("),b+c.join(",")+")"},toHslaString:function(){var b="hsla(",c=a.map(this.hsla(),function(a,b){return null==a&&(a=b>2?1:0),b&&3>b&&(a=Math.round(100*a)+"%"),a});return 1===c[3]&&(c.pop(),b="hsl("),b+c.join(",")+")"},toHexString:function(b){var c=this._rgba.slice(),d=c.pop();return b&&c.push(~~(255*d)),"#"+a.map(c,function(a,b){return a=(a||0).toString(16),1===a.length?"0"+a:a}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}},j.fn.parse.prototype=j.fn,k.hsla.to=function(a){if(null==a[0]||null==a[1]||null==a[2])return[null,null,null,a[3]];var b,c,d=a[0]/255,e=a[1]/255,f=a[2]/255,g=a[3],h=Math.max(d,e,f),i=Math.min(d,e,f),j=h-i,k=h+i,l=.5*k;return b=i===h?0:d===h?60*(e-f)/j+360:e===h?60*(f-d)/j+120:60*(d-e)/j+240,c=0===l||1===l?l:.5>=l?j/k:j/(2-k),[Math.round(b)%360,c,l,null==g?1:g]},k.hsla.from=function(a){if(null==a[0]||null==a[1]||null==a[2])return[null,null,null,a[3]];var b=a[0]/360,c=a[1],d=a[2],f=a[3],g=.5>=d?d*(1+c):d+c-d*c,h=2*d-g;return[Math.round(255*e(h,g,b+1/3)),Math.round(255*e(h,g,b)),Math.round(255*e(h,g,b-1/3)),f]},o(k,function(d,e){var f=e.props,g=e.cache,i=e.to,k=e.from;j.fn[d]=function(d){if(i&&!this[g]&&(this[g]=i(this._rgba)),d===b)return this[g].slice();var e,h=a.type(d),l="array"===h||"object"===h?d:arguments,m=this[g].slice();return o(f,function(a,b){var d=l["object"===h?a:b.idx];null==d&&(d=m[b.idx]),m[b.idx]=c(d,b)}),k?(e=j(k(m)),e[g]=m,e):j(m)},o(f,function(b,c){j.fn[b]||(j.fn[b]=function(e){var f,g=a.type(e),i="alpha"===b?this._hsla?"hsla":"rgba":d,j=this[i](),k=j[c.idx];return"undefined"===g?k:("function"===g&&(e=e.call(this,k),g=a.type(e)),null==e&&c.empty?this:("string"===g&&(f=h.exec(e),f&&(e=k+parseFloat(f[2])*("+"===f[1]?1:-1))),j[c.idx]=e,this[i](j)))})})}),o(g,function(b,c){a.cssHooks[c]={set:function(b,e){var f,g,h;if("string"!==a.type(e)||(f=d(e))){if(e=j(f||e),!n.rgba&&1!==e._rgba[3]){h="backgroundColor"===c?b.parentNode:b;do g=a.curCSS(h,"backgroundColor");while((""===g||"transparent"===g)&&(h=h.parentNode)&&h.style);e=e.blend(g&&"transparent"!==g?g:"_default")}e=e.toRgbaString()}b.style[c]=e}},a.fx.step[c]=function(b){b.colorInit||(b.start=j(b.elem,c),b.end=j(b.end),b.colorInit=!0),a.cssHooks[c].set(b.elem,b.start.transition(b.end,b.pos))}}),a(function(){var a=document.createElement("div"),b=a.style;b.cssText="background-color:rgba(1,1,1,.5)",n.rgba=b.backgroundColor.indexOf("rgba")>-1}),f=a.Color.names={aqua:"#00ffff",azure:"#f0ffff",beige:"#f5f5dc",black:"#000000",blue:"#0000ff",brown:"#a52a2a",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgrey:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkviolet:"#9400d3",fuchsia:"#ff00ff",gold:"#ffd700",green:"#008000",indigo:"#4b0082",khaki:"#f0e68c",lightblue:"#add8e6",lightcyan:"#e0ffff",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightyellow:"#ffffe0",lime:"#00ff00",magenta:"#ff00ff",maroon:"#800000",navy:"#000080",olive:"#808000",orange:"#ffa500",pink:"#ffc0cb",purple:"#800080",violet:"#800080",red:"#ff0000",silver:"#c0c0c0",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery);