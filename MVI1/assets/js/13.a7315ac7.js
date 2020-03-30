(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{264:function(t,e,r){"use strict";r.r(e);var a=r(28),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"proxy-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#proxy-configuration"}},[t._v("#")]),t._v(" Proxy configuration")]),t._v(" "),r("p",[t._v("The Reference Configuration for Rancher on HPE SimpliVity\nsupports deploying Rancher in environments that require the use of a proxy to access the internet.\nConfiguration variables for the playbooks must be specified, while the Ansible controller itself must also\nbe properly configured.")]),t._v(" "),r("h2",{attrs:{id:"proxy-configuration-variables"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#proxy-configuration-variables"}},[t._v("#")]),t._v(" Proxy configuration variables")]),t._v(" "),r("p",[t._v("Proxy configuration is specified in the "),r("code",[t._v("proxy")]),t._v(" dictionary variable and are described in the table below.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[t._v("Variable")]),t._v(" "),r("th",{staticStyle:{"text-align":"left"}},[t._v("File")]),t._v(" "),r("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[t._v("proxy.http")])]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v('Hostname or IP address of the HTTP proxy server and the proxy port number separated by a colon. For example: "http://web-proxy.hpecloud.org:8080".'),r("br"),r("br"),t._v("Mandatory if proxy support is required.")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[t._v("proxy.https")])]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("Hostname or IP address of the HTTP proxy server and the proxy port number separated by a colon. Typically, this is identical to the "),r("code",[t._v("http_proxy")]),t._v(" value."),r("br"),r("br"),t._v("Mandatory if proxy support is required.")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[t._v("proxy.except")])]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("A comma-separated list of hostnames, IP addresses, or network ranges that should bypass the proxy server. The list should include: localhost, the configured domain name used to deploy the Rancher cluster, the DHCP subnet CIDR, and the vCenter hostname. "),r("br"),r("br"),t._v("Mandatory if proxy support is required.")])])])]),t._v(" "),r("p",[t._v("A sample proxy configuration is provided in the file "),r("code",[t._v("group_vars/all/vars.yml.sample")]),t._v(":")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('#\n# Proxy Configuration\n#\nproxy:\n  http:  "http://10.12.7.21:8080/"\n  https:  "http://10.12.7.21:8080/"\n  except: "localhost,.am2.cloudra.local,.rancher-demo.org"\n')])])]),r("h2",{attrs:{id:"configuring-the-ansible-controller"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configuring-the-ansible-controller"}},[t._v("#")]),t._v(" Configuring the Ansible controller")]),t._v(" "),r("p",[t._v("The Ansible controller should be configured to match the proxy requirements for your environment. The only "),r("strong",[t._v("required")]),t._v(" proxy configuration on the Ansible node is to ensure that the solution playbooks can install any necessary software packages, such as a local HTTP server. This can be done, for example, by adding a proxy entry to the "),r("code",[t._v("/etc/dnf/dnf.conf")]),t._v(" file or by setting system-wide proxy settings in the "),r("code",[t._v("/etc/environment")]),t._v(" file.")]),t._v(" "),r("p",[t._v("The following is an example of how to configure a proxy server in the "),r("code",[t._v("/etc/dnf/dnf.conf")]),t._v(" file:")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("[main]\ngpgcheck=1\ninstallonly_limit=3\nclean_requirements_on_remove=True\nbest=False\nskip_if_unavailable=True\nproxy=http://web-proxy.hpecloud.org:8080\n")])])])])}),[],!1,null,null,null);e.default=o.exports}}]);