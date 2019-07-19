(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{216:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(227),i=n(219),c=n(105).a.div(function(e){var t;return(t={display:"grid",gridGap:"0.7rem",padding:"0.5rem 0",gridTemplateColumns:e.templateColumns})[Object(i.c)(i.b.mobile)]={gridTemplateColumns:"100%"},t});var l=function(e){for(var t="",n=0;n<e.noCols;n++)void 0!==e.nSizes&&null!==e.nSizes&&n<e.nSizes.length?t+=e.nSizes[n]+"% ":t+="1fr ";return o.a.createElement(c,{templateColumns:t},e.children)},s=(n(42),n(13),n(7),n(8),n(1),n(17),n(16));function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(n,!0).forEach(function(t){m(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(e){return Object(s.e)("div",{key:e.id,sx:d({margin:"0.5rem"},e.css)},e.children)},b=n(21),f=n(242),g=n.n(f);function y(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,{fluid:e.src,alt:e.alt,style:e.style,imgStyle:e.imgStyle}),e.caption)}y.defaultProps={alt:"",caption:o.a.createElement("div",null)};var h=y,w=n(133);function j(e){var t=e.image,n=e.caption,r=!1===Object(w.a)().rounded?"0%":"50%";return Object(b.c)(o.a.Fragment,null,Object(b.c)(h,{src:t.fluid,style:{borderRadius:r},imgStyle:{borderRadius:r+" !important"},caption:n}))}j.defaultProps={caption:Object(b.c)("div",null)};var v=j,O=n(217),x=n(245),k=n(218),I=n(228);function M(e){var t=e.linkedin,n=e.github,r=e.twitter;return Object(s.e)("p",{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",fontSize:[0,0,2]}},null!==t&&""!==t&&Object(s.e)("a",{href:"https://www.linkedin.com/"+t,target:"_blank",rel:"noopener noreferrer",style:{borderBottom:"none"},"aria-label":"LinkedIn"},Object(s.e)(I.a,{icon:["fab","linkedin-in"],size:"lg",sx:{color:"icons.linkedin"}})),null!==n&&""!==n&&Object(s.e)("a",{href:"https://www.github.com/"+n,target:"_blank",rel:"noopener noreferrer",style:{borderBottom:"none"},"aria-label":"Github"},Object(s.e)(I.a,{icon:["fab","github"],size:"lg",sx:{color:"icons.github"}})),null!==r&&""!==r&&Object(s.e)("a",{href:"https://www.twitter.com/"+r,target:"_blank",rel:"noopener noreferrer",style:{borderBottom:"none"},"aria-label":"Twitter"},Object(s.e)(I.a,{icon:["fab","twitter"],size:"lg",sx:{color:"icons.twitter"}})))}O.b.add(x.a,k.a,k.b,k.e),M.defaultProps={linkedin:"",github:"",twitter:""};var D=M;function E(e){var t=e.positions;return o.a.createElement("div",{style:{textAlign:"center"}},t.map(function(e,t){return o.a.createElement("p",{key:"position"+t},o.a.createElement("b",null,e.title),", ",e.company," (",e.duration,")")}))}E.defaultProps={};var C=E,P=n(246),S=n(249),z=function(){return S.data.mdx};function L(){var e=z();return o.a.createElement(P.MDXRenderer,null,e.body)}L.defaultProps={};var Y=L,A=n(220),Z=n(250),G=function(){return Z.data.authorYaml.positions};function N(e){var t,n=e.location,r=z(),c=Object(A.a)(),s=G(),u=r.frontmatter.title||"Home page",d=r.frontmatter.summary||"Home page",m=c.cover.childImageSharp;return o.a.createElement(a.a,{title:u,description:d,location:n},o.a.createElement(l,{noCols:2,nSizes:[40,60]},o.a.createElement(p,{id:"figureBio",css:(t={margin:"0 10%",display:"flex",flexDirection:"column",alignSelf:"flex-start"},t[Object(i.a)(i.b.mobile)]={position:"sticky",top:"15vh",placeSelf:"self-start stretch"},t)},null!=m&&o.a.createElement(v,{image:m}),o.a.createElement(D,{linkedin:c.username.linkedin,github:c.username.github,twitter:c.username.twitter}),null!=s&&s.length>0&&o.a.createElement(C,{positions:s})),o.a.createElement(p,{id:"descriptionBio",css:{padding:"0 1rem 1rem 1rem"}},o.a.createElement(Y,{description:r.body}))))}N.defaultProps={};t.default=N},219:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"c",function(){return a}),n.d(t,"b",function(){return i});var r=[20,40,48,64,80,86,120,240],o=function(e){return"@media screen and (min-width: "+e+"rem)"},a=function(e){return"@media screen and (max-width: "+e+"rem)"},i={mobile:r[1],minitablet:r[2],tablet:r[3],laptop:r[4],desktop:r[5],fullhd:r[6],ultrahd:r[7]}},220:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(223),o=function(){return r.data.authorYaml}},221:function(e){e.exports={data:{site:{siteMetadata:{appName:"Demo of gatsby-theme-simple-bio",title:"Demo of gatsby-theme-simple-bio",author:"John Doe",siteUrl:"https://www.gatsbyjs.org",description:"This site is a demonstration for using theme gatsby-theme-simple-bio"}}}}},222:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyOCAyOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjggMjg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojNjYzMzk5O30KCS5zdDF7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPGcgaWQ9Im1vbm9ncmFtIj4KCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjE0IiBjeT0iMTQiIHI9IjE0Ii8+Cgk8Zz4KCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNi4yLDIxLjhDNC4xLDE5LjcsMywxNi45LDMsMTQuMkwxMy45LDI1QzExLjEsMjQuOSw4LjMsMjMuOSw2LjIsMjEuOHoiLz4KCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTYuNCwyNC43TDMuMywxMS42QzQuNCw2LjcsOC44LDMsMTQsM2MzLjcsMCw2LjksMS44LDguOSw0LjVsLTEuNSwxLjNDMTkuNyw2LjUsMTcsNSwxNCw1CgkJCWMtMy45LDAtNy4yLDIuNS04LjUsNkwxNywyMi41YzIuOS0xLDUuMS0zLjUsNS44LTYuNUgxOHYtMmg3QzI1LDE5LjIsMjEuMywyMy42LDE2LjQsMjQuN3oiLz4KCTwvZz4KPC9nPgo8L3N2Zz4K"},223:function(e){e.exports={data:{authorYaml:{name:"John Doe",username:{email:"john_doe@mail.com",github:"john-doe",twitter:"john_doe",linkedin:"john-doe",facebook:"john.doe"},cover:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAADAElEQVQ4y6VSW0hUURS989BKCAL96S8irB/xrYUfIRRkIkkz4ygkSGX1I5WVIGKKYVkaQSZqYkWW5aij+SjzQUTkI8OPIHCydMTUqSgt1BlnnLPa586d8Tr5+OjCunuffdZaZ5+HIKz9qQgKr5pijfq6nzd5O2EnYcsqXOVGZnKCjtBK+E2wEcYJdYR0aYENTd0TAZIR1oGV0E2IWMvUvU1/wrAkckhgEpzSeElmbFvL1D0okxGZlDMZ5GObNG5c7ezdgyZZd0yhUDClUgGKnu1u8lUzXx81k3Xau9qtq6RYwcUqpdLOyYWZKfg5eB+9hkK0VWXjdW0BZoceIiM1jhvZfdQqHiu9PFYMUqVVl1RKBasvvcRePshn+NoCTLXDUJrFbB+fsoGGa+4z5VzNP4aZqbGePGF/UB8nJsfHOD6038LlDD3DFyMcw3W4mJ7ITJ23gZluZ+LBaARs8/sMDG/mOs2B4OX2gBdCVV6KeDHTPQX5N7P0sPTfc2CihWHUCHyqZyLMTWA8Trbb3zdewYuyU0/cd4Dx6pWHyE1dO6D/zPPjmGyD02RYwlizE2basvkZKGdspMGOiVZgpPY6vl/1E/mLxpWX8u1VoRhtQ3c8NTKrwa9OWLuKsdBVzKw9JWy+o4jhRweZNXR7GjHXiGYDjy4sG7KUYGHqsatgqz6rnKJ36SjPVGO0udg+WLUwZ8zFn/octthXbqfzrGZv727lj2+hLlvNNZamHGHp5D5phSTXYSItUIAmXOX9nub6iyoxUklnX4H5dzcM3vPQhqu4Vu4l4PQOAXExCle3Qf5MG3IGyVH1i4d3m8YKY62z/XngGC85ZF2M32OCPqpB5BBX1JOWe3g6Y5IZdCFp0IRZoI+EiKNhmNbtYhPnIh0T56McFn0g4zXPPOeSxmPKO6WiymUWegLH9oI6A3QRLiSRSEdIDAaOBLtysSbNcy7XkFb04F4sIdrVnTY0lwpvCK1ME9ZBsYNHpqVcFyGC5/I5zhU1pBU9JC+eCP/7uT3+Aqxn34x6Pop3AAAAAElFTkSuQmCC",aspectRatio:1,src:"/static/7846e2ae8d027f0caed3668139fb10b1/647de/profile.png",srcSet:"/static/7846e2ae8d027f0caed3668139fb10b1/bf65b/profile.png 100w,\n/static/7846e2ae8d027f0caed3668139fb10b1/7c0ed/profile.png 200w,\n/static/7846e2ae8d027f0caed3668139fb10b1/647de/profile.png 400w,\n/static/7846e2ae8d027f0caed3668139fb10b1/59139/profile.png 600w,\n/static/7846e2ae8d027f0caed3668139fb10b1/af144/profile.png 800w,\n/static/7846e2ae8d027f0caed3668139fb10b1/ec873/profile.png 1920w",srcWebp:"/static/7846e2ae8d027f0caed3668139fb10b1/f4957/profile.webp",srcSetWebp:"/static/7846e2ae8d027f0caed3668139fb10b1/74729/profile.webp 100w,\n/static/7846e2ae8d027f0caed3668139fb10b1/1932c/profile.webp 200w,\n/static/7846e2ae8d027f0caed3668139fb10b1/f4957/profile.webp 400w,\n/static/7846e2ae8d027f0caed3668139fb10b1/6fae7/profile.webp 600w,\n/static/7846e2ae8d027f0caed3668139fb10b1/c6096/profile.webp 800w,\n/static/7846e2ae8d027f0caed3668139fb10b1/cb272/profile.webp 1920w",sizes:"(max-width: 400px) 100vw, 400px"}}}}}}},224:function(e){e.exports={data:{site:{buildTime:"Fri Jul 19 2019 16:49:19 +00:00"}}}},225:function(e){e.exports={data:{sitePlugin:{version:"0.1.0",name:"gatsby-theme-simple-bio"}}}},227:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(16),i=n(217),c=n(218),l=n(105),s=n(229),u=n.n(s),d=n(221),m=function(){return d.data.site.siteMetadata};function p(e){var t=e.lang,n=e.title,r=e.description,i=e.author,c=e.keywords,l=m(),s=Object(a.g)(),d=s.theme,p=s.colorMode,b="";"light"===p?b=d.colors.primary:"dark"===p&&(b=d.colors.modes.dark.primary);var f={title:""===n?l.title:n,author:""===l.author?i:l.author,description:r,keywords:c};return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{htmlAttributes:{lang:t},title:f.title,meta:[{name:"author",content:f.author},{name:"description",content:f.description},{name:"keywords",content:f.keywords},{name:"generator",content:"Gatsby site generator"},{name:"application-name",content:l.appName},{name:"theme-color",content:b}]}))}p.defaultProps={lang:"en",author:"John Doe",title:"",description:"",keywords:["gatsby","gatsby-theme","gatsby-theme-simple-bio","gatsby-plugin"]};var b=p;var f=function(e){var t=e.children;return Object(a.e)("div",{sx:{position:"relative",margin:"0 auto",width:["90%","90%","85%","80%"]}},t)};var g=function(){return Object(a.e)("nav",{role:"navigation",sx:{display:"flex",flexDirection:"row",position:"fixed",width:"100%",zIndex:10,top:0,bg:"background"}},Object(a.e)(f,null,Object(a.e)(a.b.h1,null,"Demo")))},y=(n(24),n(1),n(18),n(222)),h=n.n(y),w=n(228),j=n(219),v=n(220),O=n(224),x=function(){return O.data.site.buildTime},k=n(225),I=function(){return k.data.sitePlugin};i.b.add(c.c);var M=function(){var e,t,n=Object(v.a)(),r=x(),o=I();return Object(a.e)("footer",{style:{zIndex:4,fontSize:"0.8rem",width:"100%",backgroundColor:"",padding:"2rem",bottom:"-10rem",position:"relative",textAlign:"center"}},Object(a.e)("div",{style:{margin:"0.2rem auto"}},Object(a.e)("span",{id:"copyright"},"© ",Object(a.e)(a.b.a,{href:"/"},n.name)," ",(new Date).getFullYear(),". ")," ",Object(a.e)("br",null),Object(a.e)("span",{css:(e={},e[Object(j.c)(j.b.minitablet)]={display:"none"},e)},"Made in",Object(a.e)("span",null," ",Object(a.e)(w.a,{icon:["fas","heart"],size:"sm",color:"red"})," "),"with ",Object(a.e)("a",{href:"https://www.gatsbyjs.org/",sx:{textDecoration:"none",borderBottom:"none"}},Object(a.e)("img",{alt:"Gatsby icon",src:h.a,width:"18",height:"18",role:"presentation"})),". Powered by ",o.name," (Version: ",o.version,"). "),Object(a.e)("br",null),Object(a.e)("span",{css:(t={},t[Object(j.c)(j.b.mobile)]={display:"none"},t)},Object(a.e)("b",null,"Last modified: "),new Date(r).toString())))};function D(){var e=C(["\n  display: flex;\n  flex-direction: column;\n  top: 5rem;\n  position: relative;\n  width: 90%;\n  margin: 0 auto;\n  margin-bottom: 5rem;\n"]);return D=function(){return e},e}function E(){var e=C(["\n  display: flex;\n  flex-direction: column;\n  /*width: 100%;\n  height: 100%;\n  position: absolute;*/\n"]);return E=function(){return e},e}function C(e,t){return t||(t=e.slice(0)),e.raw=t,e}var P=l.a.div(E()),S=l.a.main(D());function z(e){var t=e.title,n=e.description,r=(e.location,e.children);return o.a.createElement(o.a.Fragment,null,o.a.createElement(b,{title:t,description:n}),o.a.createElement(P,null,o.a.createElement(g,null),o.a.createElement(S,null,r),o.a.createElement(M,null)))}var L=z;function Y(e){var t=e.title,n=e.description,r=e.location,i=e.children;return o.a.createElement(L,{title:t,description:n,location:r},o.a.createElement(a.b.h1,null," ",o.a.createElement("span",null,t)),o.a.createElement("section",null,i))}z.defaultProps={description:""},i.b.add(c.d);t.a=Y;Y.defaultProps={description:""}},249:function(e){e.exports={data:{mdx:{frontmatter:{title:"Home",author:"",summary:""},body:'function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsx mdx */\nvar _frontmatter = {\n  "title": "Home",\n  "author": "",\n  "type": "home-page",\n  "summary": ""\n};\n\nvar makeShortcode = function makeShortcode(name) {\n  return function MDXDefaultShortcode(props) {\n    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");\n    return mdx("div", props);\n  };\n};\n\nvar layoutProps = {\n  _frontmatter: _frontmatter\n};\nvar MDXLayout = "wrapper";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, ["components"]);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: "MDXLayout"\n  }), mdx("h1", null, "Hi, This is John Doe. I develop some stuff on web."), mdx("hr", null), mdx("p", null, "You may want to have a look at my resume ", mdx("a", _extends({\n    parentName: "p"\n  }, {\n    "href": "http://link-to-resume"\n  }), "here"), "."));\n}\n;\nMDXContent.isMDXComponent = true;'}}}},250:function(e){e.exports={data:{authorYaml:{positions:[{title:"Position 1",duration:"July YYYY - Present",company:"XYZ Company"},{title:"Degree 2",duration:"YYYY - YYYY",company:"DEF University"},{title:"Degree 1",duration:"YYYY - YYYY",company:"ABC University"}]}}}}}]);
//# sourceMappingURL=component---gatsby-theme-simple-bio-src-templates-home-js-5a921d4f44d5e4693d84.js.map