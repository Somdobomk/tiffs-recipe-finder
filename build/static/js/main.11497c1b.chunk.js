(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],[,,,,function(e,a,t){},,,function(e,a,t){e.exports=t(17)},,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(0),l=t.n(c),r=t(5),n=t.n(r),i=(t(4),t(2)),s=t.n(i),m=t(6),o=t(1),u=(t(14),function(e){var a=e.title,t=e.calories,c=e.totalTime,r=e.image,n=e.ingredients;e.url;return l.a.createElement("div",{className:"recipe"},l.a.createElement("h1",{className:"recipe_title"},a),l.a.createElement("div",{className:"image_div"},l.a.createElement("img",{className:"image",src:r,alt:""})),l.a.createElement("p",{className:"calories"},"Calories: ",parseInt(t)," "),l.a.createElement("p",{className:"totalTime"},l.a.createElement("i",{className:"far fa-clock"}),c),l.a.createElement("h2",null,"Ingredients:"),l.a.createElement("ul",{className:"ingredients"},n.map((function(e,a){return l.a.createElement("li",{className:"ingredient",key:a},l.a.createElement("i",{className:"fas fa-caret-right"})," ",e.text)}))))}),f=(t(15),function(e){var a=e.search,t=e.updateSearch,c=e.placeholder;return l.a.createElement("div",null,l.a.createElement("input",{type:"text",className:"search-bar",value:a,onChange:t,placeholder:c}),l.a.createElement("button",{type:"submit",className:"search-button"},l.a.createElement("i",{className:"fas fa-search"})))}),p=(t(16),function(e){var a=e.filterLogic;return l.a.createElement("div",null,l.a.createElement("ul",{className:"filters"},l.a.createElement("li",{className:"filter",onClick:a},"Keto"),l.a.createElement("li",{className:"filter",onClick:a},"Paleo"),l.a.createElement("li",{className:"filter",onClick:a},"Sushi"),l.a.createElement("li",{className:"filter",onClick:a},"Chicken"),l.a.createElement("li",{className:"filter",onClick:a},"Meat"),l.a.createElement("li",{className:"filter",onClick:a},"Pasta"),l.a.createElement("li",{className:"filter",onClick:a},"Dessert"),l.a.createElement("li",{className:"filter",onClick:a},"Salad"),l.a.createElement("li",{className:"filter",onClick:a},"Eggs"),l.a.createElement("li",{className:"filter",onClick:a},"Pizza"),l.a.createElement("li",{className:"filter",onClick:a},"Fish"),l.a.createElement("li",{className:"filter",onClick:a},"Grill")))}),E=function(){var e=Object(c.useState)([]),a=Object(o.a)(e,2),t=a[0],r=a[1],n=Object(c.useState)(""),i=Object(o.a)(n,2),E=i[0],d=i[1],h=Object(c.useState)(""),N=Object(o.a)(h,2),g=N[0],v=N[1];Object(c.useEffect)((function(){(function(){var e=Object(m.a)(s.a.mark((function e(){var a,t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(g,"&app_id=").concat("af0a8d09","&app_key=").concat("382c6c5216b807809217e9d658aeddbd\t"));case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,r(t.hits),console.log(t.hits);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[g]);return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"header"},l.a.createElement("h1",{className:"title"},"Tiff's Recipe Finder"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),v(E)},className:"search-form"},l.a.createElement(f,{updateSearch:function(e){d(e.target.value)},placeholder:"Search recipe"})),l.a.createElement("div",{className:"search-filter"},l.a.createElement(p,{filterLogic:function(e){e.target.classList.toggle("active-filter");var a=e.target;a.classList.contains("active-filter")?v(a.innerText):v("")}}))),l.a.createElement("div",{className:"recipes"},t.map((function(e,a){return l.a.createElement(u,{key:a,title:e.recipe.label,calories:e.recipe.calories,totalTime:e.recipe.totalTime,image:e.recipe.image,ingredients:e.recipe.ingredients,url:e.recipe.url})}))))};n.a.render(l.a.createElement(E,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.11497c1b.chunk.js.map