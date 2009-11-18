YUI.add("gallery-recordset",function(C){function A(E){this._count=A._count;this._uid=A.UID_PREFIX+this._count;A._count++;this._data={};if(C.Lang.isObject(E)){for(var D in E){if(C.Object.hasKey(E,D)){this._data[D]=E[D];}}}}A._count=0;A.UID_PREFIX="yui-rec";A.prototype={_count:null,_uid:null,_data:null,getCount:function(){return this._count;},getId:function(){return this._uid;},getData:function(D){if(C.Lang.isString(D)){return this._data[D];}else{return this._data;}},setData:function(D){if(C.Lang.isObject(D)){var E={};if(D.key&&D.value){E[D.key]=D.value;D=E;}for(E in D){if(C.Object.hasKey(D,E)&&this._data[E]){this._data[E]=D[E];}}return this._data;}return null;}};C.Record=A;function B(D){this._uid=B.UID_PREFIX+B._count;B._count++;this._records=[];if(D){if(C.Lang.isArray(D)){this.addRecords(D);}else{if(C.Lang.isObject(D)){this.addRecord(D);}}}}B.prototype={_uid:null,_addRecord:function(F,E){var D=new C.Record(F);if(C.Lang.isNumber(E)&&(E>-1)){this._records.splice(E,0,D);}else{this._records.push(D);}return D;},_setRecord:function(E,D){if(!C.Lang.isNumber(D)||D<0){D=this._records.length;}return(this._records[D]=new C.Record(E));},_deleteRecord:function(E,D){if(!C.Lang.isNumber(D)||(D<0)){D=1;}this._records.splice(E,D);},getId:function(){return this._uid;},getLength:function(){return this._records.length;},getRecord:function(E){var F,D;if(E instanceof C.Record){for(F=0,D=this._records.length;F<D;F++){if(this._records[F]&&(this._records[F].getId()==E.getId())){return E;}}}else{if(C.Lang.isNumber(E)){if(E>-1&&(E<this._records.length)){return this._records[E];}}else{if(C.Lang.isString(E)){for(F=0,D=this._records.length;F<D;F++){if(this._records[F]&&(this._records[F].getId()==E)){return this._records[F];}}}}}return null;},getRecords:function(E,D){if(!C.Lang.isNumber(E)){return this._records;}if(!C.Lang.isNumber(D)){return this._records.slice(E);}return this._records.slice(E,E+D);},hasRecords:function(E,D){for(var F=0;F<D;++F){if(typeof this._records[F]===undefined){return false;}}return true;},getRecordIndex:function(D){if(D){for(var E=this._records.length-1;E>-1;E--){if(this._records[E]&&D.getId()===this._records[E].getId()){return E;}}}return null;},addRecord:function(F,E){if(C.Lang.isObject(F)){var D=this._addRecord(F,E);return D;}return null;},addRecords:function(I,G){if(C.Lang.isArray(I)){var J=[],E,H,D,F;G=C.Lang.isNumber(G)?G:this._records.length;E=G;for(H=0,D=I.length;H<D;++H){if(C.Lang.isObject(I[H])){F=this._addRecord(I[H],E++);J.push(F);}}this.fireEvent("recordsAddEvent",{records:J,data:I});return J;}else{if(C.Lang.isObject(I)){F=this._addRecord(I);this.fireEvent("recordsAddEvent",{records:[F],data:I});return F;}}return null;},setRecord:function(F,E){if(C.Lang.isObject(F)){var D=this._setRecord(F,E);this.fireEvent("recordSetEvent",{record:D,data:F});return D;}return null;},setRecords:function(J,G){var E=C.Lang.isArray(J)?J:[J],I=[],H=0,D=E.length,F=0;G=parseInt(G,10)|0;for(;H<D;++H){if(typeof E[H]=="object"&&E[H]){I[F++]=this._records[G+H]=new C.Record(E[H]);}}this.fireEvent("recordsSetEvent",{records:I,data:J});this.fireEvent("recordsSet",{records:I,data:J});if(E.length&&!I.length){}return I.length>1?I:I[0];},updateRecord:function(D,F){D=this.getRecord(D);if(D&&C.Lang.isObject(F)){var G=C.Object(D.getData()),E=D.setData(F);this.fireEvent("recordUpdateEvent",{record:D,newData:E,oldData:G});return D;}return null;},updateRecordValue:function(D,E,F){D=this.getRecord(D);if(D){var H=null,G=D.getData(E);if(G&&C.Lang.isObject(G)){H=C.Object(G);}else{H=G;}D.setData({key:E,value:F});this.fireEvent("keyUpdateEvent",{record:D,key:E,newData:F,oldData:H});this.fireEvent("recordValueUpdateEvent",{record:D,key:E,newData:F,oldData:H});}else{}},replaceRecords:function(D){this.reset();return this.addRecords(D);},sortRecords:function(D,F,E){return this._records.sort(function(H,G){return D(H,G,F,E);});},reverseRecords:function(){return this._records.reverse();},deleteRecord:function(D){if(C.Lang.isNumber(D)&&(D>-1)&&(D<this.getLength())){var E=C.Object(this.getRecord(D).getData());this._deleteRecord(D);this.fireEvent("recordDeleteEvent",{datai:E,index:D});return E;}else{return null;}},deleteRecords:function(G,E){if(!C.Lang.isNumber(E)){E=1;}if(C.Lang.isNumber(G)&&(G>-1)&&(G<this.getLength())){var I=this.getRecords(G,E),F=[],H=0,D=I.length;for(;H<D;H++){F[F.length]=C.Object(I[H]);}this._deleteRecord(G,E);this.fireEvent("recordsDeleteEvent",{data:F,index:G});return F;}else{return null;}},reset:function(){this._records=[];this.fireEvent("resetEvent");}};B._count=0;B.UID_PREFIX="yui-rs";C.RecordSet=B;},"@VERSION@",{requires:["yui"]});