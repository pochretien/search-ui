webpackJsonpCoveo__temporary([54],{129:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),o=n(0),r=n(8);n(348);var l=n(4),u=n(3),a=function(){function t(t,e,n){void 0===t&&(t=function(t){}),this.onChange=t,this.options=e,this.label=n,this.buildContent()}return t.doExport=function(){u.exportGlobally({MultiSelect:t})},t.prototype.build=function(){return this.element},t.prototype.getElement=function(){return this.element},t.prototype.getValue=function(){return o.chain(this.element.options).toArray().filter(function(t){return t.selected}).map(function(t){return t.value}).value()},t.prototype.getUnselectedValues=function(){return o.chain(this.element.options).toArray().filter(function(t){return!t.selected}).map(function(t){return t.value}).value()},t.prototype.setValue=function(t){var e=this.getValue(),n=o.partition(o.toArray(this.element.options),function(t){return o.contains(e,t.value)}),r=o.partition(o.toArray(this.element.options),function(e){return o.contains(t,e.value)});o.each(r[0],function(t){return t.selected=!0}),o.each(r[1],function(t){return t.selected=!1});var u=!1;l.Utils.arrayEqual(n[0],r[0],!1)||(u=!0),l.Utils.arrayEqual(n[1],r[1],!1)||(u=!0),u&&i.$$(this.element).trigger("change")},t.prototype.reset=function(){var t=this.getValue();this.element.selectedIndex=-1,l.Utils.isEmptyArray(t)||i.$$(this.element).trigger("change")},t.prototype.buildContent=function(){var t=this;this.element=i.$$("select",{className:"mdc-multi-select mdl-list",multiple:"",size:this.options.length.toString()}).el;var e=i.$$("optgroup",{className:"mdc-list-group",label:this.label}),n=o.map(this.options,function(t){return i.$$("option",{value:t,className:"mdc-list-item"},r.l(t))});o.each(n,function(t){return e.append(t.el)}),this.element.appendChild(e.el),i.$$(this.element).on("change",function(){return t.onChange(t)})},t}();e.MultiSelect=a},348:function(t,e){}});