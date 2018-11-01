//深拷贝json的函数
var CopyJson = function (json) {
               //同型元素  
               var ptList = new Array();  
               //找出各类元素(元素，路径，寻找历史)  
               var allPath = new Array();  
               function _getAllKeyType(Obj, Key, Path, LogList) {  
                   //添加寻找历史  
                   if (!Key) Key = "$";  
                   if (!Path) Path = "$"  
                   if (!LogList) LogList = new Array();  
                   LogList.push({ Key: Key, Obj: Obj, Path: Path });  
                   for (var key in Obj) {  
                       var keyPath = Path + "." + key  
                       //判断是否包含key  
                       if (!Obj.hasOwnProperty(key)) continue;  
                       if (typeof Obj[key] === 'object' && Obj[key] != null) {  
                           //判断是否是  
                           var FindParentObj = LogList.find(p=>Object.is(p.Obj, Obj[key]));  
                           //如果是添加并跳出  
                           if (FindParentObj != null) {  
                               ptList.push({ Path: keyPath, Parent: FindParentObj.Path, Key: key, ParentKey: FindParentObj.Key });  
                               continue;  
                           }  
                           allPath.push(keyPath)  
                           _getAllKeyType(Obj[key], key, keyPath, LogList);  
                       }  
                   }  
               }  
               _getAllKeyType(json)  
               //寻找同级元素  
               function _copyjson(p, c, Jpath) {  
                   if (!Jpath) Jpath = "$";  
                   var c = c || {};  
                   for (var i in p) {  
                       if (!p.hasOwnProperty(i)) {  
                           continue;  
                       }  
                       if (typeof p[i] === 'object') {  
                           var kypath = Jpath + "." + i;  
                           if (ptList.find(q=>q.Path == kypath) != null) continue;  
                           switch ((Object.prototype.toString.call(p[i])).toLowerCase().split(" ")[1].replace("]", "")) {  
                               case "array":  
                                   c[i] = [];  
                                   break;  
                               case "object":  
                                   c[i] = {};  
                                   break;  
                               case "null":  
                                   c[i] = null;  
                                   break;  
                               default: break;  
                           }  
                           //不是同型元素  
                           _copyjson(p[i], c[i], kypath);  
  
                       } else {  
                           c[i] = p[i];  
                       }  
                   }  
                   return c;  
               }  
               var newcpyjson = _copyjson(json);  
               function _jsonpath(obj, findpath) {  
                   findpath.split(".").forEach(p=> {  
                       if (typeof (obj) != "undefined" && p != "$" && obj != null) {  
                           obj = obj[p];  
                       }  
                   })  
                   return obj;  
               }  
               while (ptList.length > 0) {  
                   var p = ptList.shift()  
                   if (p.Parent != "$" && allPath.find(fq=>fq == p.Parent) == null) {  
                       ptList.push(p);  
                   } else {  
                       var ptObj = _jsonpath(newcpyjson, p.Parent);  
                       // console.log(JSON.stringify(p))  
                       // console.log(ptObj)  
                       var _pathlist = p.Path.split(".")  
                       _pathlist.pop();  
                       var sonObj = _jsonpath(newcpyjson, _pathlist.join("."))  
                       sonObj[p.Key] = ptObj  
                       allPath.push(p.Path);  
                   }  
               }  
               return newcpyjson  
           }  