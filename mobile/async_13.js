(this.webpackJsonpfsui=this.webpackJsonpfsui||[]).push([[13],{120:function(t,e,i){"use strict";var n=i(70);i.n(n).a},121:function(t,e,i){(t.exports=i(15)(!1)).push([t.i,".demo {\n  padding: 0 15px;\n}\n.demo img,\n  .demo div[lazy] {\n    width: 100%;\n    height: 200px;\n    margin-bottom: 10px;\n    padding: 10px;\n    box-sizing: border-box;\n    background-color: white;\n    background-position: cover;\n    background-size: center;\n    background-repeat: no-repeat;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n}\n",""])},162:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"demo"},[e("fs-group",{attrs:{title:"懒加载"}},this._l(this.imgList,function(t,i){return e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"img"}],key:i})}),0),e("fs-group",{attrs:{title:"背景图懒加载"}},this._l(this.bgList,function(t,i){return e("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:t,expression:"img",arg:"background-image"}],key:i,staticClass:"bg-img"})}),0),e("fs-group",{attrs:{title:"懒加载模块"}},[e("lazy-component",{on:{show:this.handler}},this._l(this.componentList,function(t,i){return e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"img"}],key:i})}),0)],1)],1)};n._withStripped=!0;var o={data:function(){return{imgList:["http://img.article.pchome.net/01/57/88/40/pic_lib/wm/Bing08.jpg","http://file2.desktx.com/pc/wallpaper/2014/12/51df6780e915d.jpg","http://i2.download.fd.pchome.net/t_960x600/g1/M00/02/02/ooYBAFKcSw6IL5zVAAywextzdfEAABHwQO7-fAADLCT123.jpg","http://attach.bbs.miui.com/forum/201306/14/171230vmizsz9zvzdzmhbo.jpg"],bgList:["http://d.5857.com/by_160416/003.jpg","http://i7.download.fd.pchome.net/t_960x600/g1/M00/02/02/ooYBAFKcSvKIKig_AA1MpVcw4oUAABHwQNbK4gADUy9572.jpg"],componentList:["http://pic1.win4000.com/wallpaper/e/5124837137ee5.jpg","http://d.5857.com/byb_160506/011.jpg"]}},methods:{handler:function(){console.log("component show")}}},a=(i(120),i(1)),s=Object(a.a)(o,n,[],!1,null,null,null);s.options.__file="packages/lazy-load/demo/index.vue";e.default=s.exports},70:function(t,e,i){var n=i(121);"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};i(19)(n,o);n.locals&&(t.exports=n.locals)}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mc3VpLy4vcGFja2FnZXMvbGF6eS1sb2FkL2RlbW8vaW5kZXgudnVlP2RmMTkiLCJ3ZWJwYWNrOi8vZnN1aS8uL3BhY2thZ2VzL2xhenktbG9hZC9kZW1vL2luZGV4LnZ1ZT81NTRkIiwid2VicGFjazovL2ZzdWkvLi9wYWNrYWdlcy9sYXp5LWxvYWQvZGVtby9pbmRleC52dWU/OTYyNiIsIndlYnBhY2s6Ly9mc3VpL3BhY2thZ2VzL2xhenktbG9hZC9kZW1vL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly9mc3VpLy4vcGFja2FnZXMvbGF6eS1sb2FkL2RlbW8vaW5kZXgudnVlP2Q2YjkiLCJ3ZWJwYWNrOi8vZnN1aS8uL3BhY2thZ2VzL2xhenktbG9hZC9kZW1vL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly9mc3VpLy4vcGFja2FnZXMvbGF6eS1sb2FkL2RlbW8vaW5kZXgudnVlP2I3OTciXSwibmFtZXMiOlsiX25vZGVfbW9kdWxlc19zdHlsZV9sb2FkZXJfaW5kZXhfanNfbm9kZV9tb2R1bGVzX2Nzc19sb2FkZXJfaW5kZXhfanNfbm9kZV9tb2R1bGVzX3Z1ZV9sb2FkZXJfbGliX2xvYWRlcnNfc3R5bGVQb3N0TG9hZGVyX2pzX25vZGVfbW9kdWxlc19wb3N0Y3NzX2xvYWRlcl9zcmNfaW5kZXhfanNfbm9kZV9tb2R1bGVzX3Nhc3NfbG9hZGVyX2xpYl9sb2FkZXJfanNfbm9kZV9tb2R1bGVzX3Z1ZV9sb2FkZXJfbGliX2luZGV4X2pzX3Z1ZV9sb2FkZXJfb3B0aW9uc19pbmRleF92dWVfdnVlX3R5cGVfc3R5bGVfaW5kZXhfMF9sYW5nX3Njc3NfX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibiIsIm1vZHVsZSIsImV4cG9ydHMiLCJwdXNoIiwiaSIsInJlbmRlciIsIl9oIiwidGhpcyIsIiRjcmVhdGVFbGVtZW50IiwiX2MiLCJfc2VsZiIsInN0YXRpY0NsYXNzIiwiYXR0cnMiLCJ0aXRsZSIsIl9sIiwiaW1nTGlzdCIsImltZyIsImluZGV4IiwiZGlyZWN0aXZlcyIsIm5hbWUiLCJyYXdOYW1lIiwidmFsdWUiLCJleHByZXNzaW9uIiwia2V5IiwiYmdMaXN0IiwiYXJnIiwib24iLCJzaG93IiwiaGFuZGxlciIsImNvbXBvbmVudExpc3QiLCJfd2l0aFN0cmlwcGVkIiwibGF6eV9sb2FkX2RlbW92dWVfdHlwZV9zY3JpcHRfbGFuZ19qc18iLCJkYXRhIiwibWV0aG9kcyIsImNvbnNvbGUiLCJsb2ciLCJjb21wb25lbnQiLCJPYmplY3QiLCJjb21wb25lbnROb3JtYWxpemVyIiwib3B0aW9ucyIsIl9fZmlsZSIsIl9fd2VicGFja19leHBvcnRzX18iLCJjb250ZW50IiwiaG1yIiwidHJhbnNmb3JtIiwiaW5zZXJ0SW50byIsInVuZGVmaW5lZCIsImxvY2FscyJdLCJtYXBwaW5ncyI6IitGQUFBLElBQUFBLEVBQUFDLEVBQUEsSUFBQUEsRUFBQUMsRUFBQUYsR0FBK1ksd0JDQS9ZRyxFQUFBQyxRQUEyQkgsRUFBUSxHQUFSQSxFQUEwRCxJQUtyRkksS0FBQSxDQUFjRixFQUFBRyxFQUFTLHVXQUFxVyw4Q0NMNVgsSUFBQUMsRUFBQSxXQUNBLElBQ0FDLEVBREFDLEtBQ0FDLGVBQ0FDLEVBRkFGLEtBRUFHLE1BQUFELElBQUFILEVBQ0EsT0FBQUcsRUFDQSxNQUNBLENBQUtFLFlBQUEsUUFDTCxDQUNBRixFQUNBLFdBQ0EsQ0FBU0csTUFBQSxDQUFTQyxNQUFBLFFBVGxCTixLQVVBTyxHQVZBUCxLQVVBUSxRQUFBLFNBQUFDLEVBQUFDLEdBQ0EsT0FBQVIsRUFBQSxPQUNBUyxXQUFBLENBQ0EsQ0FBZUMsS0FBQSxPQUFBQyxRQUFBLFNBQUFDLE1BQUFMLEVBQUFNLFdBQUEsUUFFZkMsSUFBQU4sTUFHQSxHQUVBUixFQUNBLFdBQ0EsQ0FBU0csTUFBQSxDQUFTQyxNQUFBLFdBdEJsQk4sS0F1QkFPLEdBdkJBUCxLQXVCQWlCLE9BQUEsU0FBQVIsRUFBQUMsR0FDQSxPQUFBUixFQUFBLE9BQ0FTLFdBQUEsQ0FDQSxDQUNBQyxLQUFBLE9BQ0FDLFFBQUEsMEJBQ0FDLE1BQUFMLEVBQ0FNLFdBQUEsTUFDQUcsSUFBQSxxQkFHQUYsSUFBQU4sRUFDQU4sWUFBQSxhQUdBLEdBRUFGLEVBQ0EsV0FDQSxDQUFTRyxNQUFBLENBQVNDLE1BQUEsVUFDbEIsQ0FDQUosRUFDQSxpQkFDQSxDQUFhaUIsR0FBQSxDQUFNQyxLQTlDbkJwQixLQThDbUJxQixVQTlDbkJyQixLQStDQU8sR0EvQ0FQLEtBK0NBc0IsY0FBQSxTQUFBYixFQUFBQyxHQUNBLE9BQUFSLEVBQUEsT0FDQVMsV0FBQSxDQUNBLENBQ0FDLEtBQUEsT0FDQUMsUUFBQSxTQUNBQyxNQUFBTCxFQUNBTSxXQUFBLFFBR0FDLElBQUFOLE1BR0EsSUFHQSxJQUdBLElBSUFaLEVBQUF5QixlQUFBLEVDcERBLElDbkIyTEMsRURtQjNMLENBQ0FDLEtBREEsV0FFQSxPQUNBakIsUUFBQSxDQUNBLGtFQUNBLGlFQUNBLDZHQUNBLHlFQUVBUyxPQUFBLENBQ0Esc0NBQ0EsOEdBRUFLLGNBQUEsQ0FDQSx3REFDQSwwQ0FJQUksUUFBQSxDQUNBTCxRQURBLFdBRUFNLFFBQUFDLElBQUEscUNFaENBQyxFQUFnQkMsT0FBQUMsRUFBQSxFQUFBRCxDQUNkTixFQUNBMUIsRUg0REYsSUcxREEsRUFDQSxLQUNBLEtBQ0EsTUF1QkErQixFQUFBRyxRQUFBQyxPQUFBLG9DQUNlQyxFQUFBLFFBQUFMLDhCQ3RDZixJQUFBTSxFQUFjM0MsRUFBUSxLQUV0QixpQkFBQTJDLE1BQUEsRUFBNEN6QyxFQUFBRyxFQUFTc0MsRUFBQSxNQU9yRCxJQUFBSCxFQUFBLENBQWVJLEtBQUEsRUFFZkMsZUFQQUEsRUFRQUMsZ0JBQUFDLEdBRWEvQyxFQUFRLEdBQVJBLENBQThEMkMsRUFBQUgsR0FFM0VHLEVBQUFLLFNBQUE5QyxFQUFBQyxRQUFBd0MsRUFBQUsiLCJmaWxlIjoiYXN5bmNfMTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmRlbW8ge1xcbiAgcGFkZGluZzogMCAxNXB4O1xcbn1cXG4uZGVtbyBpbWcsXFxuICAuZGVtbyBkaXZbbGF6eV0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiZGVtb1wiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZnMtZ3JvdXBcIixcbiAgICAgICAgeyBhdHRyczogeyB0aXRsZTogXCLmh5LliqDovb1cIiB9IH0sXG4gICAgICAgIF92bS5fbChfdm0uaW1nTGlzdCwgZnVuY3Rpb24oaW1nLCBpbmRleCkge1xuICAgICAgICAgIHJldHVybiBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHsgbmFtZTogXCJsYXp5XCIsIHJhd05hbWU6IFwidi1sYXp5XCIsIHZhbHVlOiBpbWcsIGV4cHJlc3Npb246IFwiaW1nXCIgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGtleTogaW5kZXhcbiAgICAgICAgICB9KVxuICAgICAgICB9KSxcbiAgICAgICAgMFxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcImZzLWdyb3VwXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdGl0bGU6IFwi6IOM5pmv5Zu+5oeS5Yqg6L29XCIgfSB9LFxuICAgICAgICBfdm0uX2woX3ZtLmJnTGlzdCwgZnVuY3Rpb24oaW1nLCBpbmRleCkge1xuICAgICAgICAgIHJldHVybiBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcImxhenlcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbGF6eTpiYWNrZ3JvdW5kLWltYWdlXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGltZyxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImltZ1wiLFxuICAgICAgICAgICAgICAgIGFyZzogXCJiYWNrZ3JvdW5kLWltYWdlXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJiZy1pbWdcIlxuICAgICAgICAgIH0pXG4gICAgICAgIH0pLFxuICAgICAgICAwXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiZnMtZ3JvdXBcIixcbiAgICAgICAgeyBhdHRyczogeyB0aXRsZTogXCLmh5LliqDovb3mqKHlnZdcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwibGF6eS1jb21wb25lbnRcIixcbiAgICAgICAgICAgIHsgb246IHsgc2hvdzogX3ZtLmhhbmRsZXIgfSB9LFxuICAgICAgICAgICAgX3ZtLl9sKF92bS5jb21wb25lbnRMaXN0LCBmdW5jdGlvbihpbWcsIGluZGV4KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImxhenlcIixcbiAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LWxhenlcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGltZyxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpbWdcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAga2V5OiBpbmRleFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAwXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJkZW1vXCI+XG4gICAgPGZzLWdyb3VwIHRpdGxlPVwi5oeS5Yqg6L29XCI+XG4gICAgICA8aW1nIHYtZm9yPVwiKGltZywgaW5kZXgpIGluIGltZ0xpc3RcIiB2LWxhenk9XCJpbWdcIiA6a2V5PVwiaW5kZXhcIj5cbiAgICA8L2ZzLWdyb3VwPlxuXG4gICAgPGZzLWdyb3VwIHRpdGxlPVwi6IOM5pmv5Zu+5oeS5Yqg6L29XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYmctaW1nXCIgdi1mb3I9XCIoaW1nLCBpbmRleCkgaW4gYmdMaXN0XCIgdi1sYXp5OmJhY2tncm91bmQtaW1hZ2U9XCJpbWdcIiA6a2V5PVwiaW5kZXhcIiAvPlxuICAgIDwvZnMtZ3JvdXA+XG5cbiAgICA8ZnMtZ3JvdXAgdGl0bGU9XCLmh5LliqDovb3mqKHlnZdcIj5cbiAgICAgIDxsYXp5LWNvbXBvbmVudCBAc2hvdz1cImhhbmRsZXJcIj5cbiAgICAgICAgPGltZyB2LWZvcj1cIihpbWcsIGluZGV4KSBpbiBjb21wb25lbnRMaXN0XCIgdi1sYXp5PVwiaW1nXCIgOmtleT1cImluZGV4XCIgPlxuICAgICAgPC9sYXp5LWNvbXBvbmVudD5cbiAgICA8L2ZzLWdyb3VwPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpbWdMaXN0OiBbXG4gICAgICAgICdodHRwOi8vaW1nLmFydGljbGUucGNob21lLm5ldC8wMS81Ny84OC80MC9waWNfbGliL3dtL0JpbmcwOC5qcGcnLFxuICAgICAgICAnaHR0cDovL2ZpbGUyLmRlc2t0eC5jb20vcGMvd2FsbHBhcGVyLzIwMTQvMTIvNTFkZjY3ODBlOTE1ZC5qcGcnLFxuICAgICAgICAnaHR0cDovL2kyLmRvd25sb2FkLmZkLnBjaG9tZS5uZXQvdF85NjB4NjAwL2cxL00wMC8wMi8wMi9vb1lCQUZLY1N3NklMNXpWQUF5d2V4dHpkZkVBQUJId1FPNy1mQUFETENUMTIzLmpwZycsXG4gICAgICAgICdodHRwOi8vYXR0YWNoLmJicy5taXVpLmNvbS9mb3J1bS8yMDEzMDYvMTQvMTcxMjMwdm1penN6OXp2emR6bWhiby5qcGcnXG4gICAgICBdLFxuICAgICAgYmdMaXN0OiBbXG4gICAgICAgICdodHRwOi8vZC41ODU3LmNvbS9ieV8xNjA0MTYvMDAzLmpwZycsXG4gICAgICAgICdodHRwOi8vaTcuZG93bmxvYWQuZmQucGNob21lLm5ldC90Xzk2MHg2MDAvZzEvTTAwLzAyLzAyL29vWUJBRktjU3ZLSUtpZ19BQTFNcFZjdzRvVUFBQkh3UU5iSzRnQURVeTk1NzIuanBnJ1xuICAgICAgXSxcbiAgICAgIGNvbXBvbmVudExpc3Q6IFtcbiAgICAgICAgJ2h0dHA6Ly9waWMxLndpbjQwMDAuY29tL3dhbGxwYXBlci9lLzUxMjQ4MzcxMzdlZTUuanBnJyxcbiAgICAgICAgJ2h0dHA6Ly9kLjU4NTcuY29tL2J5Yl8xNjA1MDYvMDExLmpwZydcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBoYW5kbGVyICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdjb21wb25lbnQgc2hvdycpXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4uZGVtbyB7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgaW1nLFxuICBkaXZbbGF6eV0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY292ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwuMik7XG4gIH1cbn1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDllYzQ3NWEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvb25seXN0YXIv5bel5L2cL+e7hOS7tuW6ky9mcy11aS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDllYzQ3NWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDllYzQ3NWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00OWVjNDc1YSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0OWVjNDc1YScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFja2FnZXMvbGF6eS1sb2FkL2RlbW8vaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==