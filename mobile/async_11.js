(this.webpackJsonpfsui=this.webpackJsonpfsui||[]).push([[11],{112:function(e,t,i){"use strict";var s=i(66);i.n(s).a},113:function(e,t,i){(e.exports=i(15)(!1)).push([e.i,".image-preview-demo {\n  color: red;\n}\n",""])},133:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"image-preview-demo"},[i("fs-group",{attrs:{title:"基础用法"}},[i("fs-button",{on:{click:e.showImagePreview}},[e._v("预览图片")])],1),i("fs-group",{attrs:{title:"指定初始位置"}},[i("fs-button",{on:{click:function(t){return e.showImagePreview(2)}}},[e._v("预览图片")])],1),i("fs-group",{attrs:{title:"3秒后自动关闭"}},[i("fs-button",{on:{click:function(t){return e.showImagePreview(3,3e3)}}},[e._v("预览图片")])],1),i("fs-group",{attrs:{title:"不显示页码"}},[i("fs-button",{on:{click:function(t){return e.showImagePreview("","",!1)}}},[e._v("预览图片")])],1),i("fs-group",{attrs:{title:"html用法"}},[i("fs-button",{on:{click:function(t){e.show=!0}}},[e._v("预览图片")])],1),i("fs-image-preview",{attrs:{images:e.images,value:e.show},on:{close:function(t){e.show=!1}}})],1)};s._withStripped=!0;var n=i(16),o={data:function(){return{show:!1,images:["https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg","https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg","https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg","https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg"]}},methods:{showImagePreview:function(e,t){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=this.images,o=Object(n.a)({images:s,showIndex:i,startPosition:"number"==typeof e?e:0,onClose:function(e){var t=e.index,i=e.url;o.value=!1,console.log(t,i),console.log("close")}});t&&setTimeout(function(){o.value=!1},t)}}},c=(i(112),i(1)),r=Object(c.a)(o,s,[],!1,null,null,null);r.options.__file="packages/image-preview/demo/index.vue";t.default=r.exports},66:function(e,t,i){var s=i(113);"string"==typeof s&&(s=[[e.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};i(19)(s,n);s.locals&&(e.exports=s.locals)}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mc3VpLy4vcGFja2FnZXMvaW1hZ2UtcHJldmlldy9kZW1vL2luZGV4LnZ1ZT85YWRkIiwid2VicGFjazovL2ZzdWkvLi9wYWNrYWdlcy9pbWFnZS1wcmV2aWV3L2RlbW8vaW5kZXgudnVlP2JkYjgiLCJ3ZWJwYWNrOi8vZnN1aS8uL3BhY2thZ2VzL2ltYWdlLXByZXZpZXcvZGVtby9pbmRleC52dWU/ZmFlYSIsIndlYnBhY2s6Ly9mc3VpLy4vcGFja2FnZXMvaW1hZ2UtcHJldmlldy9kZW1vL2luZGV4LnZ1ZT80OWZlIiwid2VicGFjazovL2ZzdWkvcGFja2FnZXMvaW1hZ2UtcHJldmlldy9kZW1vL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly9mc3VpLy4vcGFja2FnZXMvaW1hZ2UtcHJldmlldy9kZW1vL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly9mc3VpLy4vcGFja2FnZXMvaW1hZ2UtcHJldmlldy9kZW1vL2luZGV4LnZ1ZT9hN2Y0Il0sIm5hbWVzIjpbIl9ub2RlX21vZHVsZXNfc3R5bGVfbG9hZGVyX2luZGV4X2pzX25vZGVfbW9kdWxlc19jc3NfbG9hZGVyX2luZGV4X2pzX25vZGVfbW9kdWxlc192dWVfbG9hZGVyX2xpYl9sb2FkZXJzX3N0eWxlUG9zdExvYWRlcl9qc19ub2RlX21vZHVsZXNfcG9zdGNzc19sb2FkZXJfc3JjX2luZGV4X2pzX25vZGVfbW9kdWxlc19zYXNzX2xvYWRlcl9saWJfbG9hZGVyX2pzX25vZGVfbW9kdWxlc192dWVfbG9hZGVyX2xpYl9pbmRleF9qc192dWVfbG9hZGVyX29wdGlvbnNfaW5kZXhfdnVlX3Z1ZV90eXBlX3N0eWxlX2luZGV4XzBfbGFuZ19zY3NzX19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm4iLCJtb2R1bGUiLCJleHBvcnRzIiwicHVzaCIsImkiLCJyZW5kZXIiLCJfdm0iLCJ0aGlzIiwiX2giLCIkY3JlYXRlRWxlbWVudCIsIl9jIiwiX3NlbGYiLCJzdGF0aWNDbGFzcyIsImF0dHJzIiwidGl0bGUiLCJvbiIsImNsaWNrIiwic2hvd0ltYWdlUHJldmlldyIsIl92IiwiJGV2ZW50Iiwic2hvdyIsImltYWdlcyIsInZhbHVlIiwiY2xvc2UiLCJfd2l0aFN0cmlwcGVkIiwiaW1hZ2VfcHJldmlld19kZW1vdnVlX3R5cGVfc2NyaXB0X2xhbmdfanNfIiwiZGF0YSIsIm1ldGhvZHMiLCJwb3NpdGlvbiIsInRpbWVyIiwic2hvd0luZGV4IiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiaW5zdGFuY2UiLCJPYmplY3QiLCJpbWFnZV9wcmV2aWV3Iiwic3RhcnRQb3NpdGlvbiIsIm9uQ2xvc2UiLCJfcmVmIiwiaW5kZXgiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwic2V0VGltZW91dCIsImNvbXBvbmVudCIsImNvbXBvbmVudE5vcm1hbGl6ZXIiLCJvcHRpb25zIiwiX19maWxlIiwiX193ZWJwYWNrX2V4cG9ydHNfXyIsImNvbnRlbnQiLCJobXIiLCJ0cmFuc2Zvcm0iLCJpbnNlcnRJbnRvIiwibG9jYWxzIl0sIm1hcHBpbmdzIjoiK0ZBQUEsSUFBQUEsRUFBQUMsRUFBQSxJQUFBQSxFQUFBQyxFQUFBRixHQUErWSx3QkNBL1lHLEVBQUFDLFFBQTJCSCxFQUFRLEdBQVJBLEVBQTBELElBS3JGSSxLQUFBLENBQWNGLEVBQUFHLEVBQVMsNENBQTBDLDhDQ0xqRSxJQUFBQyxFQUFBLFdBQ0EsSUFBQUMsRUFBQUMsS0FDQUMsRUFBQUYsRUFBQUcsZUFDQUMsRUFBQUosRUFBQUssTUFBQUQsSUFBQUYsRUFDQSxPQUFBRSxFQUNBLE1BQ0EsQ0FBS0UsWUFBQSxzQkFDTCxDQUNBRixFQUNBLFdBQ0EsQ0FBU0csTUFBQSxDQUFTQyxNQUFBLFNBQ2xCLENBQ0FKLEVBQUEsYUFBMkJLLEdBQUEsQ0FBTUMsTUFBQVYsRUFBQVcsbUJBQWdDLENBQ2pFWCxFQUFBWSxHQUFBLFdBR0EsR0FFQVIsRUFDQSxXQUNBLENBQVNHLE1BQUEsQ0FBU0MsTUFBQSxXQUNsQixDQUNBSixFQUNBLFlBQ0EsQ0FDQUssR0FBQSxDQUNBQyxNQUFBLFNBQUFHLEdBQ0EsT0FBQWIsRUFBQVcsaUJBQUEsTUFJQSxDQUFBWCxFQUFBWSxHQUFBLFdBR0EsR0FFQVIsRUFDQSxXQUNBLENBQVNHLE1BQUEsQ0FBU0MsTUFBQSxZQUNsQixDQUNBSixFQUNBLFlBQ0EsQ0FDQUssR0FBQSxDQUNBQyxNQUFBLFNBQUFHLEdBQ0EsT0FBQWIsRUFBQVcsaUJBQUEsVUFJQSxDQUFBWCxFQUFBWSxHQUFBLFdBR0EsR0FFQVIsRUFDQSxXQUNBLENBQVNHLE1BQUEsQ0FBU0MsTUFBQSxVQUNsQixDQUNBSixFQUNBLFlBQ0EsQ0FDQUssR0FBQSxDQUNBQyxNQUFBLFNBQUFHLEdBQ0EsT0FBQWIsRUFBQVcsaUJBQUEsYUFJQSxDQUFBWCxFQUFBWSxHQUFBLFdBR0EsR0FFQVIsRUFDQSxXQUNBLENBQVNHLE1BQUEsQ0FBU0MsTUFBQSxXQUNsQixDQUNBSixFQUNBLFlBQ0EsQ0FDQUssR0FBQSxDQUNBQyxNQUFBLFNBQUFHLEdBQ0FiLEVBQUFjLE1BQUEsS0FJQSxDQUFBZCxFQUFBWSxHQUFBLFdBR0EsR0FFQVIsRUFBQSxvQkFDQUcsTUFBQSxDQUFnQlEsT0FBQWYsRUFBQWUsT0FBQUMsTUFBQWhCLEVBQUFjLE1BQ2hCTCxHQUFBLENBQ0FRLE1BQUEsU0FBQUosR0FDQWIsRUFBQWMsTUFBQSxPQUtBLElBSUFmLEVBQUFtQixlQUFBLGNDdkcyTEMsRUN3QjNMLENBQ0FDLEtBREEsV0FFQSxPQUNBTixNQUFBLEVBQ0FDLE9BQUEsQ0FDQSxvRkFDQSxvRkFDQSxvRkFDQSx1RkFJQU0sUUFBQSxDQUNBVixpQkFEQSxTQUNBVyxFQUFBQyxHQUFBLElBQUFDLElBQUFDLFVBQUFDLE9BQUEsUUFBQUMsSUFBQUYsVUFBQSxLQUFBQSxVQUFBLEdBQ0FWLEVBQUFkLEtBQUFjLE9BQ0FhLEVBQUFDLE9BQUFDLEVBQUEsRUFBQUQsQ0FBQSxDQUNBZCxTQUNBUyxZQUNBTyxjQUFBLGlCQUFBVCxJQUFBLEVBQ0FVLFFBQUEsU0FBQUMsR0FBQSxJQUFBQyxFQUFBRCxFQUFBQyxNQUFBQyxFQUFBRixFQUFBRSxJQUNBUCxFQUFBWixPQUFBLEVBQ0FvQixRQUFBQyxJQUFBSCxFQUFBQyxHQUNBQyxRQUFBQyxJQUFBLFlBR0FkLEdBQ0FlLFdBQUEsV0FDQVYsRUFBQVosT0FBQSxHQUNBTyxzQkM1Q0FnQixFQUFnQlYsT0FBQVcsRUFBQSxFQUFBWCxDQUNkVixFQUNBcEIsRUg0RkYsSUcxRkEsRUFDQSxLQUNBLEtBQ0EsTUF1QkF3QyxFQUFBRSxRQUFBQyxPQUFBLHdDQUNlQyxFQUFBLFFBQUFKLDhCQ3RDZixJQUFBSyxFQUFjbkQsRUFBUSxLQUV0QixpQkFBQW1ELE1BQUEsRUFBNENqRCxFQUFBRyxFQUFTOEMsRUFBQSxNQU9yRCxJQUFBSCxFQUFBLENBQWVJLEtBQUEsRUFFZkMsZUFQQUEsRUFRQUMsZ0JBQUFwQixHQUVhbEMsRUFBUSxHQUFSQSxDQUE4RG1ELEVBQUFILEdBRTNFRyxFQUFBSSxTQUFBckQsRUFBQUMsUUFBQWdELEVBQUFJIiwiZmlsZSI6ImFzeW5jXzExLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5pbWFnZS1wcmV2aWV3LWRlbW8ge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiaW1hZ2UtcHJldmlldy1kZW1vXCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJmcy1ncm91cFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRpdGxlOiBcIuWfuuehgOeUqOazlVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZnMtYnV0dG9uXCIsIHsgb246IHsgY2xpY2s6IF92bS5zaG93SW1hZ2VQcmV2aWV3IH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwi6aKE6KeI5Zu+54mHXCIpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcImZzLWdyb3VwXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdGl0bGU6IFwi5oyH5a6a5Yid5aeL5L2N572uXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImZzLWJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2hvd0ltYWdlUHJldmlldygyKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCLpooTop4jlm77niYdcIildXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiZnMtZ3JvdXBcIixcbiAgICAgICAgeyBhdHRyczogeyB0aXRsZTogXCIz56eS5ZCO6Ieq5Yqo5YWz6ZetXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImZzLWJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2hvd0ltYWdlUHJldmlldygzLCAzMDAwKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCLpooTop4jlm77niYdcIildXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiZnMtZ3JvdXBcIixcbiAgICAgICAgeyBhdHRyczogeyB0aXRsZTogXCLkuI3mmL7npLrpobXnoIFcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZnMtYnV0dG9uXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zaG93SW1hZ2VQcmV2aWV3KFwiXCIsIFwiXCIsIGZhbHNlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCLpooTop4jlm77niYdcIildXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiZnMtZ3JvdXBcIixcbiAgICAgICAgeyBhdHRyczogeyB0aXRsZTogXCJodG1s55So5rOVXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImZzLWJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5zaG93ID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCLpooTop4jlm77niYdcIildXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXCJmcy1pbWFnZS1wcmV2aWV3XCIsIHtcbiAgICAgICAgYXR0cnM6IHsgaW1hZ2VzOiBfdm0uaW1hZ2VzLCB2YWx1ZTogX3ZtLnNob3cgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBjbG9zZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICBfdm0uc2hvdyA9IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImltYWdlLXByZXZpZXctZGVtb1wiPlxuICAgIDxmcy1ncm91cCB0aXRsZT1cIuWfuuehgOeUqOazlVwiPlxuICAgICAgPGZzLWJ1dHRvbiBAY2xpY2s9XCJzaG93SW1hZ2VQcmV2aWV3XCI+6aKE6KeI5Zu+54mHPC9mcy1idXR0b24+XG4gICAgPC9mcy1ncm91cD5cbiAgICA8ZnMtZ3JvdXAgdGl0bGU9XCLmjIflrprliJ3lp4vkvY3nva5cIj5cbiAgICAgIDxmcy1idXR0b24gQGNsaWNrPVwic2hvd0ltYWdlUHJldmlldygyKVwiPumihOiniOWbvueJhzwvZnMtYnV0dG9uPlxuICAgIDwvZnMtZ3JvdXA+XG4gICAgPGZzLWdyb3VwIHRpdGxlPVwiM+enkuWQjuiHquWKqOWFs+mXrVwiPlxuICAgICAgPGZzLWJ1dHRvbiBAY2xpY2s9XCJzaG93SW1hZ2VQcmV2aWV3KDMsIDMwMDApXCI+6aKE6KeI5Zu+54mHPC9mcy1idXR0b24+XG4gICAgPC9mcy1ncm91cD5cbiAgICA8ZnMtZ3JvdXAgdGl0bGU9XCLkuI3mmL7npLrpobXnoIFcIj5cbiAgICAgIDxmcy1idXR0b24gQGNsaWNrPVwic2hvd0ltYWdlUHJldmlldygnJywgJycsIGZhbHNlKVwiPumihOiniOWbvueJhzwvZnMtYnV0dG9uPlxuICAgIDwvZnMtZ3JvdXA+XG4gICAgPGZzLWdyb3VwIHRpdGxlPVwiaHRtbOeUqOazlVwiPlxuICAgICAgPGZzLWJ1dHRvbiBAY2xpY2s9XCJzaG93ID0gdHJ1ZVwiPumihOiniOWbvueJhzwvZnMtYnV0dG9uPlxuICAgIDwvZnMtZ3JvdXA+XG4gICAgPGZzLWltYWdlLXByZXZpZXdcbiAgICAgIDppbWFnZXM9XCJpbWFnZXNcIiA6dmFsdWU9XCJzaG93XCIgQGNsb3NlPVwic2hvdyA9IGZhbHNlXCIvPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgSW1hZ2VQcmV2aWV3IGZyb20gJy4uL2luZGV4J1xuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2hvdzogZmFsc2UsXG4gICAgICBpbWFnZXM6IFtcbiAgICAgICAgJ2h0dHBzOi8vaW1nLnl6Y2RuLmNuL3B1YmxpY19maWxlcy8yMDE3LzA5LzA1LzNiZDM0N2U0NDIzM2E4NjhjOTljZjBmZTU2MDIzMmJlLmpwZycsXG4gICAgICAgICdodHRwczovL2ltZy55emNkbi5jbi9wdWJsaWNfZmlsZXMvMjAxNy8wOS8wNS9jMGRhYjQ2MTkyMDY4NzkxMTUzNjYyMWIzNDVhMGJjOS5qcGcnLFxuICAgICAgICAnaHR0cHM6Ly9pbWcueXpjZG4uY24vcHVibGljX2ZpbGVzLzIwMTcvMDkvMDUvNGUzZWEwODk4YjFjMmM0MTZlZWM4YzExYzUzNjA4MzMuanBnJyxcbiAgICAgICAgJ2h0dHBzOi8vaW1nLnl6Y2RuLmNuL3B1YmxpY19maWxlcy8yMDE3LzA5LzA1L2ZkMDhmMDc2NjVlZDY3ZDUwZTExYjMyYTIxY2UwNjgyLmpwZydcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBzaG93SW1hZ2VQcmV2aWV3IChwb3NpdGlvbiwgdGltZXIsIHNob3dJbmRleCA9IHRydWUpIHtcbiAgICAgIGNvbnN0IGltYWdlcyA9IHRoaXMuaW1hZ2VzXG4gICAgICBjb25zdCBpbnN0YW5jZSA9IEltYWdlUHJldmlldyh7XG4gICAgICAgIGltYWdlcyxcbiAgICAgICAgc2hvd0luZGV4LFxuICAgICAgICBzdGFydFBvc2l0aW9uOiB0eXBlb2YgcG9zaXRpb24gPT09ICdudW1iZXInID8gcG9zaXRpb24gOiAwLFxuICAgICAgICBvbkNsb3NlOiAoeyBpbmRleCwgdXJsIH0pID0+IHtcbiAgICAgICAgICBpbnN0YW5jZS52YWx1ZSA9IGZhbHNlXG4gICAgICAgICAgY29uc29sZS5sb2coaW5kZXgsIHVybClcbiAgICAgICAgICBjb25zb2xlLmxvZygnY2xvc2UnKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgaWYgKHRpbWVyKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGluc3RhbmNlLnZhbHVlID0gZmFsc2VcbiAgICAgICAgfSwgdGltZXIpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4uaW1hZ2UtcHJldmlldy1kZW1vIHtcbiAgY29sb3I6IHJlZDtcbn1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NmY1ODJjMyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9vbmx5c3Rhci/lt6XkvZwv57uE5Lu25bqTL2ZzLXVpL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3NmY1ODJjMycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3NmY1ODJjMycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc2ZjU4MmMzJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzc2ZjU4MmMzJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWNrYWdlcy9pbWFnZS1wcmV2aWV3L2RlbW8vaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==