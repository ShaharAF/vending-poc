(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,t){e.exports=t(43)},42:function(e,a,t){e.exports=t.p+"static/media/AppsFlyer.f7eae0d3.png"},43:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(9),s=t.n(c),i=t(10),l=t(11),o=t(12),m=t(15),d=t(13),p=t(16),u=function(e){return n.a.createElement("div",{className:"field error"},n.a.createElement("div",{className:"ui left icon input"},n.a.createElement("i",{className:"".concat(e.iconName," icon")}),n.a.createElement("input",{type:"text",name:e.inputName,placeholder:e.placeholder,onChange:e.onInputChange,error:"props.error"})))},g=t(14),h=t.n(g),v=function(e){function a(){var e,t;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(n)))).state={devKey:"",packageName:"",errorMessage:""},t.onInputChange=function(e){t.setState(Object(i.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault();""===t.state.devKey?t.setState({afDevKeyError:!0}):t.setState({emailError:!1})},t.validateForm=function(){var e=/^([A-Za-z]{1}[A-Za-z\d_]*\.)+[A-Za-z][A-Za-z\d_]*$/.test(t.state.packageName);return e?t.setState({packageNameError:!1}):t.setState({packageNameError:!0,errorMessage:{header:"Action Failed",body:"The package name is not valid"}}),e},t.onSubmit=function(){t.validateForm()&&(console.log("valid"),h.a.post("/api/build-apk",{packageName:t.state.packageName,devKey:t.state.devKey}))},t}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=!this.state.devKey||!this.state.packageName,a=this.state.afDevKeyError||this.state.packageNameError;return n.a.createElement("div",{className:"ui middle aligned center aligned grid"},n.a.createElement("div",{className:"column"},n.a.createElement("h2",{className:"ui teal image header"},n.a.createElement("img",{src:t(42),className:"image",alt:"Appsflyer"}),n.a.createElement("div",{className:"content"},"APK Vending Machine")),n.a.createElement("form",{className:"ui large form ".concat(a?"error":"")},n.a.createElement("div",{className:"ui stacked segment"},n.a.createElement(u,{inputName:"devKey",placeholder:"AppsFlyer dev key",iconName:"key",onInputChange:this.onInputChange,error:this.state.afDevKeyError}),n.a.createElement(u,{inputName:"packageName",placeholder:"Android package name",iconName:"box",onInputChange:this.onInputChange,error:this.state.packageNameError}),n.a.createElement("div",{className:"ui fluid large teal submit button ".concat(e?"disabled":""),onClick:this.onSubmit},"Generate APK")),n.a.createElement("div",{className:"ui error message"},n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"header"},this.state.errorMessage.header),n.a.createElement("p",null,this.state.errorMessage.body))))))}}]),a}(n.a.Component);s.a.render(n.a.createElement("div",{className:"ui middle aligned center aligned grid"},n.a.createElement(v,null)),document.querySelector("#root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.b5acd9b2.chunk.js.map