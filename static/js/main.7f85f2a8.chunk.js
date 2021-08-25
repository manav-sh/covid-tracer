(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{180:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(60),n=c.n(s),r=(c(67),c(7)),o=c.n(r),i=c(14),l=c(4),u=(c(69),c(70),c(2)),d=function(e){var t=Object(u.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t},j=(c(71),c(0)),b=function(e){var t=e.countries;e.selectedCountry;return Object(j.jsxs)("div",{className:"tableData",children:[Object(j.jsxs)("tr",{className:"table-row diff-row",children:[Object(j.jsx)("th",{className:"table-cell diff-cell",children:"Name"}),Object(j.jsx)("th",{className:"table-cell diff-cel",children:"Cases"})]}),t.map((function(e){var t=e.country,c=e.cases,a=e.countryInfo;return Object(j.jsxs)("tr",{className:"table-row",children:[Object(j.jsx)("td",{className:"table-cell",id:a.iso3,onClick:function(e){e.target.id},children:t}),Object(j.jsx)("td",{className:"table-cell",children:Intl.NumberFormat("en-US").format(c)})]})}))]})};c(179);var h=function(e){return Object(j.jsxs)("div",{className:"caseBox",style:{backgroundColor:e.bg,color:e.text},children:[Object(j.jsx)("div",{className:"case-title",children:e.title}),Object(j.jsx)("div",{className:"case-count",children:Intl.NumberFormat("en-US").format(e.total_count)}),Object(j.jsxs)("div",{className:"case-today",children:["+",e.today_count," today"]})]})};var f=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)("WWE"),r=Object(l.a)(n,2),u=r[0],f=r[1],O=Object(a.useState)({}),v=Object(l.a)(O,2),x=v[0],m=v[1],y=Object(a.useState)([]),p=Object(l.a)(y,2),N=p[0],g=p[1];Object(a.useEffect)((function(){(function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,code:e.countryInfo.iso3}})),c=d(e);s(t),g(c)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.useEffect)((function(){(function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="WWE"===u?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(u),e.next=3,fetch(t).then((function(e){return e.json()})).then((function(e){m(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u]);var C=new Date;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("div",{className:"header",children:"COVID-19 Cases Tracker"}),Object(j.jsxs)("div",{className:"country-selection",children:[Object(j.jsx)("div",{className:"country-title",children:"Search a country:"}),Object(j.jsx)("br",{className:"country-newline"}),Object(j.jsx)("div",{className:"country-dropdown",children:Object(j.jsxs)("select",{name:"country-search",id:"search",className:"country-search",onChange:function(e){f(e.target.value)},children:[Object(j.jsx)("option",{value:"WWE",children:" Worldwide"}),c.map((function(e){return Object(j.jsxs)("option",{value:e.code,children:[e.name," (",e.code,")"]})}))]})})]}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"left",children:[Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"case-boxes",children:[Object(j.jsx)(h,{countryCode:u,title:"Total Cases",total_count:x.cases,today_count:x.todayCases,bg:"#fddaa6e7",text:"#fb5e16"}),Object(j.jsx)(h,{countryCode:u,title:"Active Cases",total_count:x.active,today_count:x.todayCases,bg:"#ffa0a083",text:"#ff2626"}),Object(j.jsx)(h,{countryCode:u,title:"Deaths",total_count:x.deaths,today_count:x.todayDeaths,bg:"#5db7da63",text:"#0735b3"}),Object(j.jsx)(h,{countryCode:u,title:"Recovered",total_count:x.recovered,today_count:x.todayRecovered,bg:"#D5EEBB",text:"#0d7231"})]}),Object(j.jsxs)("div",{className:"last-updated",children:[Object(j.jsx)("i",{class:"fa fa-clock-o","aria-hidden":"true",style:{marginBottom:"2px"}}),"\xa0Last Updated ",C.getHours(),":",C.getMinutes()," | ",C.getDate()," ",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][C.getMonth()],", ",C.getFullYear()]})]}),Object(j.jsxs)("div",{className:"right",children:[Object(j.jsx)("h4",{children:"Live Cases by Country"}),Object(j.jsx)(b,{countries:N,selectedCountry:u})]})]})]})};n.a.render(Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))},67:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){}},[[180,1,2]]]);
//# sourceMappingURL=main.7f85f2a8.chunk.js.map