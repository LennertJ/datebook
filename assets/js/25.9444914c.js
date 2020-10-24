(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{399:function(a,t,s){"use strict";s.r(t);var e=s(42),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"documentation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#documentation"}},[a._v("#")]),a._v(" Documentation")]),a._v(" "),s("p",[a._v("Datebook supports the creation of "),s("code",[a._v(".ics")]),a._v(" files for iCalendar and Office Outlook, and also supports Google Calendar, Yahoo! Calendar and Outlook Online.")]),a._v(" "),s("h2",{attrs:{id:"demo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#demo"}},[a._v("#")]),a._v(" Demo")]),a._v(" "),s("p",[a._v("Try the "),s("RouterLink",{attrs:{to:"/generators/"}},[a._v("online calendar generators →")])],1),a._v(" "),s("h2",{attrs:{id:"basic-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-usage"}},[a._v("#")]),a._v(" Basic Usage")]),a._v(" "),s("h3",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[a._v("#")]),a._v(" Installation")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" datebook\n")])])]),s("h3",{attrs:{id:"example-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[a._v("#")]),a._v(" Example Usage")]),a._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" config"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" CalendarOptions "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  title"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Happy Hour'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  location"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'The Bar, New York, NY'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  description"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Let\\'s blow off some steam with a tall cold one!'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  start"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'2022-07-08T19:00:00'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  end"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'2022-07-08T23:30:00'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// an event that recurs every two weeks:")]),a._v("\n  recurrence"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    frequency"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'WEEKLY'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    interval"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h4",{attrs:{id:"icalendar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#icalendar"}},[a._v("#")]),a._v(" iCalendar")]),a._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" icalendar "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ICalendar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\nicalendar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("download")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("p",[a._v("This will download "),s("code",[a._v("Happy Hour.ics")]),a._v(" onto the user's device. On most mobile devices, this will open the default calendar app with the event.")]),a._v(" "),s("h4",{attrs:{id:"google-calendar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#google-calendar"}},[a._v("#")]),a._v(" Google Calendar")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" googleCalendar "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("GoogleCalendar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\ngoogleCalendar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("p",[s("code",[a._v("googleCalendar.render()")]),a._v(" will return a URL that the user can navigate to and pre-fill event details:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("https://calendar.google.com/calendar/render?action=TEMPLATE&text=Happy%20Hour&details=Let's%20blow%20off%20some%20steam%20with%20a%20tall%20cold%20one!&location=The%20Bar%2C%20New%20York%2C%20NY&dates=20220708T190000%2F20220708T230000&recur=RRULE%3AFREQ%3DWEEKLY%3BINTERVAL%3D1\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);