(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{584:function(t,a,s){"use strict";s.r(a);var p=s(4),e=Object(p.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("18245322906  7477a70041")]),t._v(" "),s("h1",{attrs:{id:"proxy-settings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#proxy-settings"}},[t._v("#")]),t._v(" Proxy Settings")]),t._v(" "),s("p",[t._v("nc 114.116.54.89 10001\t\nnc 114.116.54.89 10001 -x 127.0.0.1:1086")]),t._v(" "),s("p",[t._v("10.22.11.21 8080")]),t._v(" "),s("h2",{attrs:{id:"install-pip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-pip"}},[t._v("#")]),t._v(" install pip")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("$ sudo -i\nexport http_proxy=http://10.22.11.21:8080\nexport https_proxy=https://10.22.11.21:8080\n# easy_install pip\n")])])]),s("h2",{attrs:{id:"apt-get"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apt-get"}},[t._v("#")]),t._v(" apt-get")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v('apt-get -o Acquire::http::proxy="http://10.22.11.21:8080/" update\n')])])]),s("h2",{attrs:{id:"git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[t._v("#")]),t._v(" git")]),t._v(" "),s("p",[t._v("git config --global https.proxy http://10.22.11.21:8080")]),t._v(" "),s("p",[t._v("git config --global https.proxy https://10.22.11.21:8080")]),t._v(" "),s("p",[t._v("git config --global http.proxy 'socks5://127.0.0.1:1086'\ngit config --global https.proxy 'socks5://127.0.0.1:1086'")]),t._v(" "),s("p",[t._v("git config --global --unset http.proxy")]),t._v(" "),s("p",[t._v("git config --global --unset https.proxy")]),t._v(" "),s("p",[t._v('pip install --proxy="user:password@server:port" packagename\npip install --proxy="user:password@server:port" packagename\npip install django --proxy=10.22.11.21:8080\npip --proxy http://PROXYDOM:PROXYPORT install package')]),t._v(" "),s("p",[t._v("pip install --proxy='socks5://127.0.0.1:1080' packagename")]),t._v(" "),s("p",[t._v("10.22.11.21：8080")]),t._v(" "),s("h1",{attrs:{id:"kali安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kali安装"}},[t._v("#")]),t._v(" Kali安装")]),t._v(" "),s("p",[t._v("checksec")]),t._v(" "),s("p",[t._v("pwngdb")]),t._v(" "),s("p",[t._v("sudo pip uninstall pycrypto\nand reinstalling pycrypto:\nsudo pip install pycrypto\ncmake\nInconsistency detected by ld.so: rtld.c: 1273: dl_main: Assertion `GL(dl_rtld_map).l_libname' failed!")]),t._v(" "),s("h1",{attrs:{id:"rsa"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rsa"}},[t._v("#")]),t._v(" RSA")]),t._v(" "),s("p",[t._v("https://www.cnblogs.com/jiftle/p/7903762.html")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("   1. 随意选择两个大的质数p和q，p不等于q，计算N=pq。\n    2. 根据欧拉函数，不大于N且与N互质的整数個数為(p-1)(q-1)。\n    3. 选择一个整数e与(p-1)(q-1)互质，并且e小于(p-1)(q-1)。\n    4. 用以下这个公式计算d：d× e ≡ 1 (mod (p-1)(q-1))。\n    5. 将p和q的记录销毁。\n\n    以上内容中，(N,e)是公钥，(N,d)是私钥。\n\n    下面讲解RSA算法的应用。\n\n    RSA的公钥和私钥是由KeyPairGenerator生成的，获取KeyPairGenerator的实例后还需要设置其密钥位数。设置密钥位数越高，加密过程越安全，一般使用1024位。如下代码：\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);