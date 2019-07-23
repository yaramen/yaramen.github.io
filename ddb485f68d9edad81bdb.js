(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{70:function(t,r,e){"use strict";e.r(r);var s=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"works-controller"},[t.isAdd||t.isEdit?e("workForm",{key:t.formWorkData.id,attrs:{add:t.isAdd,edit:t.isEdit,work:t.formWorkData},on:{cancel:t.cancel}}):t._e(),e("div",{staticClass:"card-list"},[e("div",{staticClass:"card-list__col"},[e("button",{staticClass:"card-list__add",on:{click:t.openFormAdd}},[e("div",{staticClass:"card-list__icon"},[t._v("+")]),t._m(0)])]),t._l(t.works,function(r){return e("workCard",{key:r.id,attrs:{work:r},on:{edit:t.editWork}})})],2)],1)};s._withStripped=!0;var i=e(3),o=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("form",{staticClass:"works-form",on:{submit:t.onSendWork}},[t._m(0),e("div",{staticClass:"works-form__body"},[e("div",{staticClass:"works-form__media"},[e("label",{staticClass:"works-form__file-area",attrs:{for:"work-file"}},[e("input",{staticClass:"works-form__file",attrs:{type:"file",id:"work-file"},on:{change:t.loadPhoto}}),t.currWork.photo&&!t.photoUrl?e("img",{staticClass:"works-form__image",attrs:{src:""+t.serverBase+t.currWork.photo}}):t._e(),t.photoUrl?e("img",{staticClass:"works-form__image",attrs:{src:t.photoUrl}}):t._e(),t._m(1)])]),e("div",{staticClass:"works-form__content"},[e("div",{staticClass:"field-group"},[e("label",{staticClass:"field-group__label",attrs:{for:"name"}},[t._v("Название")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.currWork.title,expression:"currWork.title"}],staticClass:"field-group__field",attrs:{type:"text",id:"name"},domProps:{value:t.currWork.title},on:{input:function(r){r.target.composing||t.$set(t.currWork,"title",r.target.value)}}})]),e("div",{staticClass:"field-group"},[e("label",{staticClass:"field-group__label",attrs:{for:"link"}},[t._v("Ссылка")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.currWork.link,expression:"currWork.link"}],staticClass:"field-group__field",attrs:{type:"text",id:"link"},domProps:{value:t.currWork.link},on:{input:function(r){r.target.composing||t.$set(t.currWork,"link",r.target.value)}}})]),e("div",{staticClass:"field-group"},[e("label",{staticClass:"field-group__label",attrs:{for:"desc"}},[t._v("Описание")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.currWork.description,expression:"currWork.description"}],staticClass:"field-group__field",attrs:{id:"desc"},domProps:{value:t.currWork.description},on:{input:function(r){r.target.composing||t.$set(t.currWork,"description",r.target.value)}}})]),e("div",{staticClass:"field-group"},[e("label",{staticClass:"field-group__label",attrs:{for:"tags"}},[t._v("Добавленные тэги")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.currWork.techs,expression:"currWork.techs"}],staticClass:"field-group__field",attrs:{type:"text",id:"tags"},domProps:{value:t.currWork.techs},on:{input:function(r){r.target.composing||t.$set(t.currWork,"techs",r.target.value)}}}),e("ul",{staticClass:"tags"},t._l(t.tags,function(r,s){return e("li",{key:s,staticClass:"tags__item"},[e("div",{staticClass:"tags__name"},[t._v(t._s(r))]),e("button",{staticClass:"tags__close",on:{click:function(r){return r.preventDefault(),t.removeTag(s)}}})])}),0)]),e("div",{staticClass:"works-form__actions"},[e("button",{staticClass:"btn -cancel",on:{click:function(r){return t.$emit("cancel")}}},[t._v("Отмена")]),e("button",{staticClass:"btn -save"},[t._v("Сохранить")])])])])])};function a(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}o._withStripped=!0;var n={props:{work:Object,add:Boolean,edit:Boolean},data:function(){return{photoUrl:!1,currWork:this.$props.work,isAdd:this.$props.add,isEdit:this.$props.edit,serverBase:"https://webdev-api.loftschool.com/"}},computed:{tags:function(){return this.currWork.techs.includes(",")?this.currWork.techs.split(",").filter(function(t){var r=t.trim();if(r)return r}):this.currWork.techs.trim()?[this.currWork.techs]:[]}},methods:function(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{},s=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.forEach(function(r){a(t,r,e[r])})}return t}({},Object(i.b)("works",["addNewWork","updateWork"]),Object(i.b)(["showTooltip"]),{onSendWork:function(){if(this.validate()){var t=new FormData;t.append("title",this.currWork.title),t.append("link",this.currWork.link),t.append("description",this.currWork.description),t.append("techs",this.currWork.techs),t.append("photo",this.currWork.photo),console.log(this.currWork),this.isAdd?this.addNewWork(t):this.updateWork({formData:t,id:this.work.id}),this.$emit("cancel")}},loadPhoto:function(t){var r=this;this.currWork.photo=t.target.files[0];var e=new FileReader;try{e.readAsDataURL(this.currWork.photo),e.onload=function(){r.photoUrl=e.result}}catch(t){console.log(t)}},validate:function(){return 0===this.currWork.title.length?(this.showTooltip({type:"danger",message:"Заполните название"}),!1):0===this.currWork.link.length?(this.showTooltip({type:"danger",message:"Заполните ссылку"}),!1):0===this.currWork.description.length?(this.showTooltip({type:"danger",message:"Заполните описание"}),!1):0===this.currWork.techs.length?(this.showTooltip({type:"danger",message:"Заполните теги"}),!1):!this.isAdd||this.currWork.photo instanceof File||(this.showTooltip({type:"danger",message:"Добавьте картинку"}),!1)},removeTag:function(t){this.currWork.techs=this.tags.filter(function(r,e){return e!==t}).join(", ")}})},c=e(4),l=Object(c.a)(n,o,[function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"works-form__header"},[r("div",{staticClass:"works-form__title"},[this._v("Редактирование работы")])])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"works-form__file-text"},[this._v("Перетащите или загрузите"),r("br"),this._v("для загрузки изображения"),r("br"),r("div",{staticClass:"btn -load"},[this._v("Загрузить")])])}],!1,null,"c94877c0",null);l.options.__file="src/admin/components/work-form.vue";var d,u=l.exports,p=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"card-list__col"},[e("div",{staticClass:"card -works"},[e("div",{staticClass:"card__header"},[e("img",{staticClass:"card__image",attrs:{src:""+t.server+t.work.photo,width:"100%"}}),e("div",{staticClass:"card__tags"},t._l(t.tags,function(r){return e("div",{staticClass:"card__tags-item"},[t._v(t._s(r))])}),0)]),e("div",{staticClass:"card__content"},[e("h2",{staticClass:"card__title"},[t._v(t._s(t.work.title))]),e("div",{staticClass:"card__desc"},[t._v(t._s(t.work.description))]),e("a",{staticClass:"card__link",attrs:{href:t.work.link}},[t._v(t._s(t.work.link))])]),e("div",{staticClass:"card__control"},[e("button",{staticClass:"btn -card-edit",on:{click:function(r){return t.$emit("edit",t.work.id)}}},[t._v("Править")]),e("button",{staticClass:"btn -card-remove",on:{click:function(r){return t.removeWork(t.work.id)}}},[t._v("Удалить")])])])])};function f(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{},s=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.forEach(function(r){h(t,r,e[r])})}return t}function h(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}p._withStripped=!0;var k=(h(d={props:{work:Object},data:function(){return{currWork:f({},this.$props.work)}},computed:{tags:function(){return this.work.techs.includes(",")?this.work.techs.split(",").filter(function(t){var r=t.trim();if(r)return r}):[this.work.techs]}}},"data",function(){return{server:"https://webdev-api.loftschool.com/"}}),h(d,"methods",f({},Object(i.b)("works",["removeWork"]))),d),_=Object(c.a)(k,p,[],!1,null,"7ea22c6c",null);function m(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{},s=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.forEach(function(r){v(t,r,e[r])})}return t}function v(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}_.options.__file="src/admin/components/work-card.vue";var w={components:{workForm:u,workCard:_.exports},data:function(){return{isAdd:!1,isEdit:!1,workData:{title:"",techs:"",photo:"",link:"",description:""},editingWorkId:0}},computed:m({},Object(i.c)("works",{works:function(t){return t.works}}),{formWorkData:function(){var t=this,r=m({},this.workData);return this.isEdit&&(r=m({},this.works.find(function(r){return r.id===t.editingWorkId}))),r}}),methods:m({},Object(i.b)("works",["getAllWorks"]),{openFormAdd:function(){this.isAdd=!0,this.isEdit=!1},cancel:function(){this.isAdd=!1,this.isEdit=!1},editWork:function(t){this.isEdit=!0,this.isAdd=!1,this.editingWorkId=t}}),created:function(){this.getAllWorks()}},g=Object(c.a)(w,s,[function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"card-list__text"},[this._v("Добавить"),r("br"),this._v(" работу")])}],!1,null,null,null);g.options.__file="src/admin/components/pages/works.vue";r.default=g.exports}}]);