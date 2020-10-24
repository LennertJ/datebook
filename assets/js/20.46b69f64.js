(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{394:function(t,a,e){"use strict";e.r(a);var r=e(42),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"alarms"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#alarms"}},[t._v("#")]),t._v(" Alarms "),e("Badge",{attrs:{text:"6.0.0",vertical:"middle"}})],1),t._v(" "),e("p",[e("code",[t._v("ICSAlarm")]),t._v("s are used for "),e("RouterLink",{attrs:{to:"/config/icalendar.html#addalarm-alarm-alarm"}},[t._v("iCalendar event alarms")]),t._v(" and are often used for reminders before an event occurs.")],1),t._v(" "),e("h3",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" alarm"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ICSAlarm "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  action"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'AUDIO'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  trigger"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1998-01-01T05:00:00Z'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  duration"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    after"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    hours"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  attach"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    params"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'FMTTYPE=audio/mp3'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    url"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ftp://host.com/novo-procs/felizano.mp3'")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"action"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#action"}},[t._v("#")]),t._v(" action")]),t._v(" "),e("ul",[e("li",[t._v("Type: "),e("code",[t._v("string")])]),t._v(" "),e("li",[t._v("Required: "),e("strong",[t._v("yes")])]),t._v(" "),e("li",[t._v("Valid value: any of "),e("code",[t._v("AUDIO")]),t._v(", "),e("code",[t._v("DISPLAY")]),t._v(", "),e("code",[t._v("EMAIL")]),t._v(", or "),e("code",[t._v("PROCEDURE")])])]),t._v(" "),e("p",[t._v("Determines how the alarm will behave.")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("Important")]),t._v(" "),e("p",[t._v("If the action is set to "),e("code",[t._v("AUDIO")]),t._v(", a valid audio file "),e("a",{attrs:{href:"#attach"}},[t._v("ICSAttachment")]),t._v(" must be specified.")])]),t._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),e("ul",[e("li",[t._v("Type: "),e("code",[t._v("string")])]),t._v(" "),e("li",[t._v("Required: "),e("strong",[t._v("yes")])])]),t._v(" "),e("p",[t._v("The description for the alarm.")]),t._v(" "),e("h2",{attrs:{id:"summary"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[t._v("#")]),t._v(" summary")]),t._v(" "),e("ul",[e("li",[t._v("Type: "),e("code",[t._v("string")])]),t._v(" "),e("li",[t._v("Required: "),e("strong",[t._v("yes")])])]),t._v(" "),e("p",[t._v("The summary for the alarm.")]),t._v(" "),e("h2",{attrs:{id:"trigger"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#trigger"}},[t._v("#")]),t._v(" trigger")]),t._v(" "),e("ul",[e("li",[t._v("Type: "),e("RouterLink",{attrs:{to:"/config/durations.html"}},[e("code",[t._v("ICSDuration")])]),t._v(" or "),e("code",[t._v("Date")])],1),t._v(" "),e("li",[t._v("Required: "),e("strong",[t._v("yes")])]),t._v(" "),e("li",[t._v("Valid value: a "),e("RouterLink",{attrs:{to:"/config/durations.html"}},[e("code",[t._v("ICSDuration")])]),t._v(" object, or a valid "),e("code",[t._v("Date")]),t._v(" reference")],1)]),t._v(" "),e("p",[t._v("When to trigger the alarm. This can be a "),e("RouterLink",{attrs:{to:"/config/durations.html"}},[e("code",[t._v("ICSDuration")])]),t._v(" object representing the time to display before or after an event, or a valid "),e("code",[t._v("Date")]),t._v(" reference.")],1),t._v(" "),e("h2",{attrs:{id:"duration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#duration"}},[t._v("#")]),t._v(" duration")]),t._v(" "),e("ul",[e("li",[t._v("Type: "),e("RouterLink",{attrs:{to:"/config/durations.html"}},[e("code",[t._v("ICSDuration")])])],1),t._v(" "),e("li",[t._v("Required: no")]),t._v(" "),e("li",[t._v("Valid value: a "),e("RouterLink",{attrs:{to:"/config/durations.html"}},[e("code",[t._v("ICSDuration")])]),t._v(" object")],1)]),t._v(" "),e("p",[t._v("How long the alarm should be present for.")]),t._v(" "),e("h2",{attrs:{id:"repeat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#repeat"}},[t._v("#")]),t._v(" repeat")]),t._v(" "),e("ul",[e("li",[t._v("Type: "),e("code",[t._v("number")])]),t._v(" "),e("li",[t._v("Required: no")]),t._v(" "),e("li",[t._v("Valid value: a positive integer")])]),t._v(" "),e("p",[t._v("The number of times to repeat the alarm.")]),t._v(" "),e("h2",{attrs:{id:"attach"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#attach"}},[t._v("#")]),t._v(" attach")]),t._v(" "),e("ul",[e("li",[t._v("Type: "),e("code",[t._v("ICSAttachment")])]),t._v(" "),e("li",[t._v("Required: no")]),t._v(" "),e("li",[t._v("Valid value: an "),e("code",[t._v("ICSAttachment")]),t._v(" object")])]),t._v(" "),e("h3",{attrs:{id:"attach-params"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#attach-params"}},[t._v("#")]),t._v(" attach.params")]),t._v(" "),e("ul",[e("li",[t._v("Type: "),e("code",[t._v("string")])]),t._v(" "),e("li",[t._v("Required: no")]),t._v(" "),e("li",[t._v("Valid value: any "),e("a",{attrs:{href:"https://www.kanzaki.com/docs/ical/attach.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ICS Attachment parameter"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("Sets the parameter for the "),e("code",[t._v("ICSAttachment")]),t._v(". This could be a MIME type if referencing a file.")]),t._v(" "),e("h3",{attrs:{id:"attach-url"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#attach-url"}},[t._v("#")]),t._v(" attach.url")]),t._v(" "),e("ul",[e("li",[t._v("Type: "),e("code",[t._v("string")])]),t._v(" "),e("li",[t._v("Required: "),e("strong",[t._v("yes")])]),t._v(" "),e("li",[t._v("Valid value: a valid URL")])]),t._v(" "),e("p",[t._v("Sets the URL for the resource of this "),e("code",[t._v("ICSAttachment")]),t._v(".")])])}),[],!1,null,null,null);a.default=s.exports}}]);