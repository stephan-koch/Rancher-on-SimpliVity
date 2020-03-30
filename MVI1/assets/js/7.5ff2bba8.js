(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{253:function(e,a,s){"use strict";s.r(a);var t=s(28),n=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"editing-the-hosts-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#editing-the-hosts-file"}},[e._v("#")]),e._v(" Editing the hosts file")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("hosts")]),e._v(" file consists of definitions for:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("Cluster")]),e._v(" nodes for the Rancher admin cluster")]),e._v(" "),s("li",[s("code",[e._v("Support")]),e._v(" node(s) for DHCP")]),e._v(" "),s("li",[s("code",[e._v("Load balancer")]),e._v(" node(s)")])]),e._v(" "),s("h2",{attrs:{id:"rancher-admin-cluster-nodes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rancher-admin-cluster-nodes"}},[e._v("#")]),e._v(" Rancher admin cluster nodes")]),e._v(" "),s("p",[e._v("It is recommended that a minimum of three nodes are provisioned for the admin cluster.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("[ranchernodes]\nhpe-rke1      ansible_host=10.15.152.21\nhpe-rke2      ansible_host=10.15.152.22\nhpe-rke3      ansible_host=10.15.152.23\n")])])]),s("h2",{attrs:{id:"support-nodes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#support-nodes"}},[e._v("#")]),e._v(" Support nodes")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("[support]\nhpe-support1  ansible_host=10.15.152.5\n")])])]),s("h2",{attrs:{id:"load-balancers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#load-balancers"}},[e._v("#")]),e._v(" Load balancers")]),e._v(" "),s("p",[e._v("The playbooks can be used to deploy load balancers using the\ninformation in the "),s("code",[e._v("loadbalancer")]),e._v(" group.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("[loadbalancer]\nhpe-lb1       ansible_host=10.15.152.11\n")])])]),s("h2",{attrs:{id:"general-recommendations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#general-recommendations"}},[e._v("#")]),e._v(" General recommendations")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("The recommended naming convention for cluster nodes is  "),s("code",[e._v("<<cluster_name>>")]),e._v("-"),s("code",[e._v("<<node-type>><<node-number>>")]),e._v(", with\nnode numbering typically starting at 1.")])]),e._v(" "),s("li",[s("p",[e._v("Underscores ("),s("code",[e._v("_")]),e._v(") are not valid characters in hostnames.")])]),e._v(" "),s("li",[s("p",[e._v("Make sure you change all the IP addresses in the sample files to match your environment.")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);