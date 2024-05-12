import{_ as h}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c,a as e,d as o,w as l,b as t,e as s,r as n}from"./app.6aa2b576.js";const i={},p=e("h1",{id:"\u7C7B-hsvcolor",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u7C7B-hsvcolor","aria-hidden":"true"},"#"),t(" \u7C7B: HSVColor")],-1),u=e("p",null,"A color represented using [alpha], [hue], [saturation], and [value]. An [HSVColor] is represented in a parameter space that's based on human perception of color in pigments (e.g. paint and printer's ink). The representation is useful for some color computations (e.g. rotating the hue through the colors), because interpolation and picking of colors as red, green, and blue channels doesn't always produce intuitive results. The HSV color space models the way that different pigments are perceived when mixed. The hue describes which pigment is used, the saturation describes which shade of the pigment, and the value resembles mixing the pigment with different amounts of black or white pigment. See also:",-1),_=e("li",null,"[HSLColor], a color that uses a color space based on human perception of colored light.",-1),f={href:"https://en.wikipedia.org/wiki/HSL_and_HSV",target:"_blank",rel:"noopener noreferrer"},y=e("h2",{id:"\u76EE\u5F55",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u76EE\u5F55","aria-hidden":"true"},"#"),t(" \u76EE\u5F55")],-1),g=e("h3",{id:"\u5C5E\u6027",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5C5E\u6027","aria-hidden":"true"},"#"),t(" \u5C5E\u6027")],-1),b=e("h3",{id:"\u65B9\u6CD5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u65B9\u6CD5","aria-hidden":"true"},"#"),t(" \u65B9\u6CD5")],-1),m=s('<h2 id="\u5C5E\u6027-1" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027-1" aria-hidden="true">#</a> \u5C5E\u6027</h2><h3 id="alpha" tabindex="-1"><a class="header-anchor" href="#alpha" aria-hidden="true">#</a> alpha</h3><p>\u2022 <code><span class="token property">Readonly</span></code> <strong>alpha</strong>: <code><span class="token property">number</span></code></p><p>Alpha, from 0.0 to 1.0. The describes the transparency of the color. A value of 0.0 is fully transparent, and 1.0 is fully opaque.</p><hr><h3 id="hue" tabindex="-1"><a class="header-anchor" href="#hue" aria-hidden="true">#</a> hue</h3><p>\u2022 <code><span class="token property">Readonly</span></code> <strong>hue</strong>: <code><span class="token property">number</span></code></p><p>Hue, from 0.0 to 360.0. Describes which color of the spectrum is represented. A value of 0.0 represents red, as does 360.0. Values in between go through all the hues representable in RGB. You can think of this as selecting which pigment will be added to a color.</p><hr><h3 id="saturation" tabindex="-1"><a class="header-anchor" href="#saturation" aria-hidden="true">#</a> saturation</h3><p>\u2022 <code><span class="token property">Readonly</span></code> <strong>saturation</strong>: <code><span class="token property">number</span></code></p><p>Saturation, from 0.0 to 1.0. This describes how colorful the color is. 0.0 implies a shade of grey (i.e. no pigment), and 1.0 implies a color as vibrant as that hue gets. You can think of this as the equivalent of how much of a pigment is added.</p><hr><h3 id="value" tabindex="-1"><a class="header-anchor" href="#value" aria-hidden="true">#</a> value</h3><p>\u2022 <code><span class="token property">Readonly</span></code> <strong>value</strong>: <code><span class="token property">number</span></code></p><p>Value, from 0.0 to 1.0. The &quot;value&quot; of a color that, in this context, describes how bright a color is. A value of 0.0 indicates black, and 1.0 indicates full intensity color. You can think of this as the equivalent of removing black from the color as value increases.</p><h2 id="\u65B9\u6CD5-1" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5-1" aria-hidden="true">#</a> \u65B9\u6CD5</h2><h3 id="scalealpha" tabindex="-1"><a class="header-anchor" href="#scalealpha" aria-hidden="true">#</a> _scaleAlpha</h3>',18),k=e("strong",null,"_scaleAlpha",-1),x=e("code",null,[e("span",{class:"token property"},"factor")],-1),v=e("code",null,[e("span",{class:"token property"},"HSVColor")],-1),C=s('<h4 id="\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a> \u53C2\u6570</h4><table><thead><tr><th style="text-align:left;">\u540D\u79F0</th><th style="text-align:left;">\u7C7B\u578B</th></tr></thead><tbody><tr><td style="text-align:left;"><code><span class="token property">factor</span></code></td><td style="text-align:left;"><code><span class="token property">number</span></code></td></tr></tbody></table><h4 id="\u8FD4\u56DE\u503C" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u503C" aria-hidden="true">#</a> \u8FD4\u56DE\u503C</h4>',3),S=e("code",null,[e("span",{class:"token property"},"HSVColor")],-1),V=s('<hr><h3 id="equals" tabindex="-1"><a class="header-anchor" href="#equals" aria-hidden="true">#</a> equals</h3><p>\u25B8 <strong>equals</strong>(<code><span class="token property">other</span></code>): <code><span class="token property">boolean</span></code></p><h4 id="\u53C2\u6570-1" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570-1" aria-hidden="true">#</a> \u53C2\u6570</h4><table><thead><tr><th style="text-align:left;">\u540D\u79F0</th><th style="text-align:left;">\u7C7B\u578B</th></tr></thead><tbody><tr><td style="text-align:left;"><code><span class="token property">other</span></code></td><td style="text-align:left;"><code><span class="token property">any</span></code></td></tr></tbody></table><h4 id="\u8FD4\u56DE\u503C-1" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u503C-1" aria-hidden="true">#</a> \u8FD4\u56DE\u503C</h4><p><code><span class="token property">boolean</span></code></p><hr><h3 id="tocolor" tabindex="-1"><a class="header-anchor" href="#tocolor" aria-hidden="true">#</a> toColor</h3>',9),H=e("strong",null,"toColor",-1),w=e("code",null,[e("span",{class:"token property"},"Color")],-1),z=e("p",null,"Returns this color in RGB.",-1),A=e("h4",{id:"\u8FD4\u56DE\u503C-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u8FD4\u56DE\u503C-2","aria-hidden":"true"},"#"),t(" \u8FD4\u56DE\u503C")],-1),R=e("code",null,[e("span",{class:"token property"},"Color")],-1),q=s('<hr><h3 id="tostring" tabindex="-1"><a class="header-anchor" href="#tostring" aria-hidden="true">#</a> toString</h3><p>\u25B8 <strong>toString</strong>(): <code><span class="token property">string</span></code></p><h4 id="\u8FD4\u56DE\u503C-3" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u503C-3" aria-hidden="true">#</a> \u8FD4\u56DE\u503C</h4><p><code><span class="token property">string</span></code></p><hr><h3 id="withalpha" tabindex="-1"><a class="header-anchor" href="#withalpha" aria-hidden="true">#</a> withAlpha</h3>',7),T=e("strong",null,"withAlpha",-1),L=e("code",null,[e("span",{class:"token property"},"alpha")],-1),B=e("code",null,[e("span",{class:"token property"},"HSVColor")],-1),N=s('<p>Returns a copy of this color with the [alpha] parameter replaced with the given value.</p><h4 id="\u53C2\u6570-2" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570-2" aria-hidden="true">#</a> \u53C2\u6570</h4><table><thead><tr><th style="text-align:left;">\u540D\u79F0</th><th style="text-align:left;">\u7C7B\u578B</th></tr></thead><tbody><tr><td style="text-align:left;"><code><span class="token property">alpha</span></code></td><td style="text-align:left;"><code><span class="token property">number</span></code></td></tr></tbody></table><h4 id="\u8FD4\u56DE\u503C-4" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u503C-4" aria-hidden="true">#</a> \u8FD4\u56DE\u503C</h4>',4),E=e("code",null,[e("span",{class:"token property"},"HSVColor")],-1),G=e("hr",null,null,-1),I=e("h3",{id:"withhue",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#withhue","aria-hidden":"true"},"#"),t(" withHue")],-1),Y=e("strong",null,"withHue",-1),D=e("code",null,[e("span",{class:"token property"},"hue")],-1),W=e("code",null,[e("span",{class:"token property"},"HSVColor")],-1),j=s('<p>Returns a copy of this color with the [hue] parameter replaced with the given value.</p><h4 id="\u53C2\u6570-3" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570-3" aria-hidden="true">#</a> \u53C2\u6570</h4><table><thead><tr><th style="text-align:left;">\u540D\u79F0</th><th style="text-align:left;">\u7C7B\u578B</th></tr></thead><tbody><tr><td style="text-align:left;"><code><span class="token property">hue</span></code></td><td style="text-align:left;"><code><span class="token property">number</span></code></td></tr></tbody></table><h4 id="\u8FD4\u56DE\u503C-5" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u503C-5" aria-hidden="true">#</a> \u8FD4\u56DE\u503C</h4>',4),F=e("code",null,[e("span",{class:"token property"},"HSVColor")],-1),J=e("hr",null,null,-1),K=e("h3",{id:"withsaturation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#withsaturation","aria-hidden":"true"},"#"),t(" withSaturation")],-1),M=e("strong",null,"withSaturation",-1),O=e("code",null,[e("span",{class:"token property"},"saturation")],-1),P=e("code",null,[e("span",{class:"token property"},"HSVColor")],-1),Q=s('<p>Returns a copy of this color with the [saturation] parameter replaced with the given value.</p><h4 id="\u53C2\u6570-4" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570-4" aria-hidden="true">#</a> \u53C2\u6570</h4><table><thead><tr><th style="text-align:left;">\u540D\u79F0</th><th style="text-align:left;">\u7C7B\u578B</th></tr></thead><tbody><tr><td style="text-align:left;"><code><span class="token property">saturation</span></code></td><td style="text-align:left;"><code><span class="token property">number</span></code></td></tr></tbody></table><h4 id="\u8FD4\u56DE\u503C-6" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u503C-6" aria-hidden="true">#</a> \u8FD4\u56DE\u503C</h4>',4),U=e("code",null,[e("span",{class:"token property"},"HSVColor")],-1),X=e("hr",null,null,-1),Z=e("h3",{id:"withvalue",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#withvalue","aria-hidden":"true"},"#"),t(" withValue")],-1),$=e("strong",null,"withValue",-1),ee=e("code",null,[e("span",{class:"token property"},"value")],-1),te=e("code",null,[e("span",{class:"token property"},"HSVColor")],-1),oe=s('<p>Returns a copy of this color with the [value] parameter replaced with the given value.</p><h4 id="\u53C2\u6570-5" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570-5" aria-hidden="true">#</a> \u53C2\u6570</h4><table><thead><tr><th style="text-align:left;">\u540D\u79F0</th><th style="text-align:left;">\u7C7B\u578B</th></tr></thead><tbody><tr><td style="text-align:left;"><code><span class="token property">value</span></code></td><td style="text-align:left;"><code><span class="token property">number</span></code></td></tr></tbody></table><h4 id="\u8FD4\u56DE\u503C-7" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u503C-7" aria-hidden="true">#</a> \u8FD4\u56DE\u503C</h4>',4),ae=e("code",null,[e("span",{class:"token property"},"HSVColor")],-1),le=e("hr",null,null,-1),se=e("h3",{id:"fromahsv",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#fromahsv","aria-hidden":"true"},"#"),t(" fromAHSV")],-1),ne=e("code",null,[e("span",{class:"token property"},"Static")],-1),re=e("strong",null,"fromAHSV",-1),he=e("code",null,[e("span",{class:"token property"},"alpha")],-1),de=e("code",null,[e("span",{class:"token property"},"hue")],-1),ce=e("code",null,[e("span",{class:"token property"},"saturation")],-1),ie=e("code",null,[e("span",{class:"token property"},"value")],-1),pe=e("code",null,[e("span",{class:"token property"},"HSVColor")],-1),ue=s('<p>Creates a color.</p><p>All the arguments must not be null and be in their respective ranges. See the fields for each parameter for a description of their ranges.</p><h4 id="\u53C2\u6570-6" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570-6" aria-hidden="true">#</a> \u53C2\u6570</h4><table><thead><tr><th style="text-align:left;">\u540D\u79F0</th><th style="text-align:left;">\u7C7B\u578B</th></tr></thead><tbody><tr><td style="text-align:left;"><code><span class="token property">alpha</span></code></td><td style="text-align:left;"><code><span class="token property">number</span></code></td></tr><tr><td style="text-align:left;"><code><span class="token property">hue</span></code></td><td style="text-align:left;"><code><span class="token property">number</span></code></td></tr><tr><td style="text-align:left;"><code><span class="token property">saturation</span></code></td><td style="text-align:left;"><code><span class="token property">number</span></code></td></tr><tr><td style="text-align:left;"><code><span class="token property">value</span></code></td><td style="text-align:left;"><code><span class="token property">number</span></code></td></tr></tbody></table><h4 id="\u8FD4\u56DE\u503C-8" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u503C-8" aria-hidden="true">#</a> \u8FD4\u56DE\u503C</h4>',5),_e=e("code",null,[e("span",{class:"token property"},"HSVColor")],-1),fe=e("hr",null,null,-1),ye=e("h3",{id:"fromcolor",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#fromcolor","aria-hidden":"true"},"#"),t(" fromColor")],-1),ge=e("code",null,[e("span",{class:"token property"},"Static")],-1),be=e("strong",null,"fromColor",-1),me=e("code",null,[e("span",{class:"token property"},"color")],-1),ke=e("code",null,[e("span",{class:"token property"},"HSVColor")],-1),xe=e("p",null,"Creates an [HSVColor] from an RGB [Color].",-1),ve=e("p",null,"This constructor does not necessarily round-trip with [toColor] because of floating point imprecision.",-1),Ce=e("h4",{id:"\u53C2\u6570-7",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u53C2\u6570-7","aria-hidden":"true"},"#"),t(" \u53C2\u6570")],-1),Se=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"\u540D\u79F0"),e("th",{style:{"text-align":"left"}},"\u7C7B\u578B")])],-1),Ve=e("td",{style:{"text-align":"left"}},[e("code",null,[e("span",{class:"token property"},"color")])],-1),He={style:{"text-align":"left"}},we=e("code",null,[e("span",{class:"token property"},"Color")],-1),ze=e("h4",{id:"\u8FD4\u56DE\u503C-9",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u8FD4\u56DE\u503C-9","aria-hidden":"true"},"#"),t(" \u8FD4\u56DE\u503C")],-1),Ae=e("code",null,[e("span",{class:"token property"},"HSVColor")],-1),Re=e("hr",null,null,-1),qe=e("h3",{id:"lerp",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#lerp","aria-hidden":"true"},"#"),t(" lerp")],-1),Te=e("code",null,[e("span",{class:"token property"},"Static")],-1),Le=e("strong",null,"lerp",-1),Be=e("code",null,[e("span",{class:"token property"},"a")],-1),Ne=e("code",null,[e("span",{class:"token property"},"b")],-1),Ee=e("code",null,[e("span",{class:"token property"},"t")],-1),Ge=e("code",null,[e("span",{class:"token keyword"},"undefined")],-1),Ie=e("code",null,[e("span",{class:"token property"},"HSVColor")],-1),Ye=s('<p>Linearly interpolate between two HSVColors.</p><p>The colors are interpolated by interpolating the [alpha], [hue], [saturation], and [value] channels separately, which usually leads to a more pleasing effect than [Color.lerp] (which interpolates the red, green, and blue channels separately).</p><p>If either color is null, this function linearly interpolates from a transparent instance of the other color. This is usually preferable to interpolating from [Colors.transparent] (<code><span class="token keyword">const</span> <span class="token function">Color</span><span class="token punctuation">(</span><span class="token number">0x00000000</span><span class="token punctuation">)</span></code>) since that will interpolate from a transparent red and cycle through the hues to match the target color, regardless of what that color&#39;s hue is.</p><p>Values outside of the valid range for each channel will be clamped.</p><h4 id="\u53C2\u6570-8" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570-8" aria-hidden="true">#</a> \u53C2\u6570</h4>',5),De=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"\u540D\u79F0"),e("th",{style:{"text-align":"left"}},"\u7C7B\u578B")])],-1),We=e("td",{style:{"text-align":"left"}},[e("code",null,[e("span",{class:"token property"},"a")])],-1),je={style:{"text-align":"left"}},Fe=e("code",null,[e("span",{class:"token keyword"},"null")],-1),Je=e("code",null,[e("span",{class:"token property"},"HSVColor")],-1),Ke=e("td",{style:{"text-align":"left"}},[e("code",null,[e("span",{class:"token property"},"b")])],-1),Me={style:{"text-align":"left"}},Oe=e("code",null,[e("span",{class:"token keyword"},"null")],-1),Pe=e("code",null,[e("span",{class:"token property"},"HSVColor")],-1),Qe=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,[e("span",{class:"token property"},"t")])]),e("td",{style:{"text-align":"left"}},[e("code",null,[e("span",{class:"token property"},"number")])])],-1),Ue=e("h4",{id:"\u8FD4\u56DE\u503C-10",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u8FD4\u56DE\u503C-10","aria-hidden":"true"},"#"),t(" \u8FD4\u56DE\u503C")],-1),Xe=e("code",null,[e("span",{class:"token keyword"},"undefined")],-1),Ze=e("code",null,[e("span",{class:"token property"},"HSVColor")],-1);function $e(et,tt){const a=n("RouterLink"),r=n("ExternalLinkIcon");return d(),c("div",null,[p,e("p",null,[o(a,{to:"/zh/v9/generated/modules/color.html"},{default:l(()=>[t("color")]),_:1}),t(".HSVColor")]),u,e("ul",null,[_,e("li",null,[e("a",f,[t("HSV and HSL"),o(r)]),t(" Wikipedia article, which this implementation is based upon.")])]),y,g,e("ul",null,[e("li",null,[o(a,{to:"/zh/v9/generated/classes/color.HSVColor.html#alpha"},{default:l(()=>[t("alpha")]),_:1})]),e("li",null,[o(a,{to:"/zh/v9/generated/classes/color.HSVColor.html#hue"},{default:l(()=>[t("hue")]),_:1})]),e("li",null,[o(a,{to:"/zh/v9/generated/classes/color.HSVColor.html#saturation"},{default:l(()=>[t("saturation")]),_:1})]),e("li",null,[o(a,{to:"/zh/v9/generated/classes/color.HSVColor.html#value"},{default:l(()=>[t("value")]),_:1})])]),b,e("ul",null,[e("li",null,[o(a,{to:"/zh/v9/generated/classes/color.HSVColor.html#_scalealpha"},{default:l(()=>[t("_scaleAlpha")]),_:1})]),e("li",null,[o(a,{to:"/zh/v9/generated/classes/color.HSVColor.html#equals"},{default:l(()=>[t("equals")]),_:1})]),e("li",null,[o(a,{to:"/zh/v9/generated/classes/color.HSVColor.html#tocolor"},{default:l(()=>[t("toColor")]),_:1})]),e("li",null,[o(a,{to:"/zh/v9/generated/classes/color.HSVColor.html#tostring"},{default:l(()=>[t("toString")]),_:1})]),e("li",null,[o(a,{to:"/zh/v9/generated/classes/color.HSVColor.html#withalpha"},{default:l(()=>[t("withAlpha")]),_:1})]),e("li",null,[o(a,{to:"/zh/v9/generated/classes/color.HSVColor.html#withhue"},{default:l(()=>[t("withHue")]),_:1})]),e("li",null,[o(a,{to:"/zh/v9/generated/classes/color.HSVColor.html#withsaturation"},{default:l(()=>[t("withSaturation")]),_:1})]),e("li",null,[o(a,{to:"/zh/v9/generated/classes/color.HSVColor.html#withvalue"},{default:l(()=>[t("withValue")]),_:1})]),e("li",null,[o(a,{to:"/zh/v9/generated/classes/color.HSVColor.html#fromahsv"},{default:l(()=>[t("fromAHSV")]),_:1})]),e("li",null,[o(a,{to:"/zh/v9/generated/classes/color.HSVColor.html#fromcolor"},{default:l(()=>[t("fromColor")]),_:1})]),e("li",null,[o(a,{to:"/zh/v9/generated/classes/color.HSVColor.html#lerp"},{default:l(()=>[t("lerp")]),_:1})])]),m,e("p",null,[t("\u25B8 "),k,t("("),x,t("): "),o(a,{to:"/zh/v9/generated/classes/color.HSVColor.html"},{default:l(()=>[v]),_:1})]),C,e("p",null,[o(a,{to:"/zh/v9/generated/classes/color.HSVColor.html"},{default:l(()=>[S]),_:1})]),V,e("p",null,[t("\u25B8 "),H,t("(): "),o(a,{to:"/zh/v9/generated/classes/color.Color.html"},{default:l(()=>[w]),_:1})]),z,A,e("p",null,[o(a,{to:"/zh/v9/generated/classes/color.Color.html"},{default:l(()=>[R]),_:1})]),q,e("p",null,[t("\u25B8 "),T,t("("),L,t("): "),o(a,{to:"/zh/v9/generated/classes/color.HSVColor.html"},{default:l(()=>[B]),_:1})]),N,e("p",null,[o(a,{to:"/zh/v9/generated/classes/color.HSVColor.html"},{default:l(()=>[E]),_:1})]),G,I,e("p",null,[t("\u25B8 "),Y,t("("),D,t("): "),o(a,{to:"/zh/v9/generated/classes/color.HSVColor.html"},{default:l(()=>[W]),_:1})]),j,e("p",null,[o(a,{to:"/zh/v9/generated/classes/color.HSVColor.html"},{default:l(()=>[F]),_:1})]),J,K,e("p",null,[t("\u25B8 "),M,t("("),O,t("): "),o(a,{to:"/zh/v9/generated/classes/color.HSVColor.html"},{default:l(()=>[P]),_:1})]),Q,e("p",null,[o(a,{to:"/zh/v9/generated/classes/color.HSVColor.html"},{default:l(()=>[U]),_:1})]),X,Z,e("p",null,[t("\u25B8 "),$,t("("),ee,t("): "),o(a,{to:"/zh/v9/generated/classes/color.HSVColor.html"},{default:l(()=>[te]),_:1})]),oe,e("p",null,[o(a,{to:"/zh/v9/generated/classes/color.HSVColor.html"},{default:l(()=>[ae]),_:1})]),le,se,e("p",null,[t("\u25B8 "),ne,t(),re,t("("),he,t(", "),de,t(", "),ce,t(", "),ie,t("): "),o(a,{to:"/zh/v9/generated/classes/color.HSVColor.html"},{default:l(()=>[pe]),_:1})]),ue,e("p",null,[o(a,{to:"/zh/v9/generated/classes/color.HSVColor.html"},{default:l(()=>[_e]),_:1})]),fe,ye,e("p",null,[t("\u25B8 "),ge,t(),be,t("("),me,t("): "),o(a,{to:"/zh/v9/generated/classes/color.HSVColor.html"},{default:l(()=>[ke]),_:1})]),xe,ve,Ce,e("table",null,[Se,e("tbody",null,[e("tr",null,[Ve,e("td",He,[o(a,{to:"/zh/v9/generated/classes/color.Color.html"},{default:l(()=>[we]),_:1})])])])]),ze,e("p",null,[o(a,{to:"/zh/v9/generated/classes/color.HSVColor.html"},{default:l(()=>[Ae]),_:1})]),Re,qe,e("p",null,[t("\u25B8 "),Te,t(),Le,t("("),Be,t(", "),Ne,t(", "),Ee,t("): "),Ge,t(" | "),o(a,{to:"/zh/v9/generated/classes/color.HSVColor.html"},{default:l(()=>[Ie]),_:1})]),Ye,e("table",null,[De,e("tbody",null,[e("tr",null,[We,e("td",je,[Fe,t(" | "),o(a,{to:"/zh/v9/generated/classes/color.HSVColor.html"},{default:l(()=>[Je]),_:1})])]),e("tr",null,[Ke,e("td",Me,[Oe,t(" | "),o(a,{to:"/zh/v9/generated/classes/color.HSVColor.html"},{default:l(()=>[Pe]),_:1})])]),Qe])]),Ue,e("p",null,[Xe,t(" | "),o(a,{to:"/zh/v9/generated/classes/color.HSVColor.html"},{default:l(()=>[Ze]),_:1})])])}const lt=h(i,[["render",$e],["__file","color.HSVColor.html.vue"]]);export{lt as default};