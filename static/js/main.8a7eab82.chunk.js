(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{46:function(e,t,s){},47:function(e,t,s){"use strict";s.r(t);var a=s(2),n=s.n(a),i=s(14),r=s.n(i),c=s(5),o=s.n(c),m=s(15),l=s(16),d=s(17),j=s(20),u=s(19),v=s(18),p=s.n(v),h=s(0);var b=function(e){e.id;var t=e.year,s=e.title,a=e.summary,n=e.poster,i=e.genres;return Object(h.jsxs)("div",{className:"movie",children:[Object(h.jsx)("img",{src:n,alt:s,title:s}),Object(h.jsxs)("div",{className:"movie_data",children:[Object(h.jsx)("h3",{className:"movie_title",children:s}),Object(h.jsx)("span",{className:"movie_year",children:t}),Object(h.jsx)("ul",{className:"genres",children:i.map((function(e,t){return Object(h.jsx)("li",{className:"genres_genre",children:e},t)}))}),Object(h.jsxs)("p",{className:"movie_summary ",children:[a.slice(0,150),"..."]})]})]})},O=(s(46),function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(l.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(o.a.mark((function t(){var s,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,a=s.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(h.jsx)("section",{className:"container",children:t?Object(h.jsx)("div",{className:"loader",children:Object(h.jsx)("span",{className:"loader_text",children:"Loading.."})}):Object(h.jsx)("div",{className:"movies",children:s.map((function(e){return Object(h.jsx)(b,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(n.a.Component));r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.8a7eab82.chunk.js.map