(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{565:function(t,a,s){t.exports=s.p+"assets/img/Software_die02.5f883f13.jpg"},566:function(t,a,s){t.exports=s.p+"assets/img/Software_die01.0c02491d.jpg"},638:function(t,a,s){"use strict";s.r(a);var e=s(4),v=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("[TOC]")]),t._v(" "),e("h1",{attrs:{id:"misc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#misc"}},[t._v("#")]),t._v(" Misc")]),t._v(" "),e("h2",{attrs:{id:"隐写题-答题思路"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#隐写题-答题思路"}},[t._v("#")]),t._v(" 隐写题-答题思路")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("1.先看题目, 根据题目搜索关键字 2.  按提示转base64搜，末尾字符搜，多处合并 3. 附件的文件名")])]),t._v(" "),e("li",[e("p",[t._v("文件属性-详细信息 ，各种奇怪的数据，加转码。")])]),t._v(" "),e("li",[e("p",[t._v("010editor, 搜索Text型, flag, Unicode型 flag")])]),t._v(" "),e("li",[e("p",[t._v("打开看文件内容")])]),t._v(" "),e("li",[e("p",[t._v("文件异常：高度，宽度是否正常。")])]),t._v(" "),e("li",[e("p",[t._v("winhex分析，前部中部尾部")])]),t._v(" "),e("li",[e("p",[t._v("binwalk试下 binwalk -e new.jpg")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v(" * tiff data, 用 Stegano_Stegsolve的 frame browser\n * 有zlib 可能需要 lsb, RGB 加密等，用Stegano_Stegsolve各种尝试。\n")])])])]),t._v(" "),e("li",[e("p",[t._v("010editor 分析, 配合 dd命令 分离，或者直接010 editor中分离")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v(' 010editor 搜索 `\\{[a-z\\d]{4,}`, 选项勾上 Regular expression\n strings xiaojiejie.jpeg | grep -E "\\{[a-z]{4,}"\n')])])])]),t._v(" "),e("li",[e("p",[t._v("foremost试下")])]),t._v(" "),e("li",[e("p",[t._v("PNG文件：一定要使用windows照片查看器看，会忽略crc检验。")])]),t._v(" "),e("li",[e("p",[t._v("PNG文件：调整下高度，看看有没有flag。")])]),t._v(" "),e("li",[e("p",[t._v("PNG文件：改了宽度。暴破下过CRC32验证")])]),t._v(" "),e("li",[e("p",[t._v("GIF文件：stegsolve 按帧看")])]),t._v(" "),e("li",[e("p",[t._v("pdf文件: chrome打开全选复制出来看看")])]),t._v(" "),e("li",[e("p",[t._v("图片隐写 stegsolve 看下lsb隐写, zsteg看=> "),e("code",[t._v("zsteg pcat.png")])])]),t._v(" "),e("li",[e("p",[t._v("图片隐写 Steghide 看下有没有隐写。 steghide extract -sf filename")])]),t._v(" "),e("li",[e("p",[t._v("图片隐写 outguess -k 密码-r 需要破解的文件名 -t 转出的文件名\noutguess -k gemlove -r sheng_huo_zhao_zhao.jpg -t flag.txt")])]),t._v(" "),e("li",[e("p",[t._v("图片隐写 2进制的拼图,用010editor或winhex看形状。")])]),t._v(" "),e("li",[e("p",[t._v("图片隐写 提示 刷新/F5, 使用F5-steganography")])]),t._v(" "),e("li",[e("p",[t._v("图片隐写 彩图提取二维码。stegsolve选一适合的黑白帧。调整大小/去取某通道某 bit 信息/随机上色/etc. 都行。")]),t._v(" "),e("ol",{attrs:{start:"11"}},[e("li",[t._v("或者"),e("a",{attrs:{href:"http://www.fzwjscj.xyz/index.php/archives/30/#bincat2",target:"_blank",rel:"noopener noreferrer"}},[t._v("BJDCTF#bincat2"),e("OutboundLink")],1),t._v("，对比两小图的区别，然后循环大图对比指定偏移量。")])])]),t._v(" "),e("li",[e("p",[t._v("文字隐写 snow可Google:space tab steg, baidu: 空格 制表符 隐写")])]),t._v(" "),e("li",[e("p",[t._v("文字隐写 snow.exe -C flag.txt")])]),t._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("    base64隐写\n")])])])]),t._v(" "),e("li",[e("p",[t._v("脑洞信息 图片是倒着的, dragon倒过来就是 nogard")])]),t._v(" "),e("li",[e("p",[t._v("exe文件 foremost")])]),t._v(" "),e("li",[e("p",[t._v("exe文件 binwlak -e filename")])]),t._v(" "),e("li",[e("p",[t._v("exe文件 7z解压, 不要光用winrar")])]),t._v(" "),e("li",[e("p",[t._v("Detect it Easy 查看, 见下面的具体用法")])]),t._v(" "),e("li",[e("p",[t._v("pcapng 取证： 1. foremost分解看看。 2. 用bytes搜索pass, flag 3. 追踪流 4.见底下详解")])]),t._v(" "),e("li",[e("p",[t._v("zip/rar 文件，先 foremost 分离")])]),t._v(" "),e("li",[e("p",[t._v("zip/rar 文件，或 binwalk -e filename 解压")])]),t._v(" "),e("li",[e("p",[t._v("zip/rar 文件， 使用unzip或者winrar打开 逐个解压，因为包里可能有不需要密码的。")])]),t._v(" "),e("li",[e("p",[t._v("zip/rar 密码，先看题目提示，图片文件用010 editor搜索设置 Unicode型, 搜pass, 4位试下。不行再看总结。")])]),t._v(" "),e("li",[e("p",[t._v("zip/rar 明文攻击, 里面文件有可能是网上有的。搜一下下载个进行明文攻击。")])]),t._v(" "),e("li",[e("p",[t._v("doc文件 1. 显示隐藏文字 2. 解压看有没有隐藏图片")])]),t._v(" "),e("li",[e("p",[t._v("cap文件, 802.11协议的数据包  aircrack-ng shipin.cap 见底下")])]),t._v(" "),e("li",[e("p",[t._v("01001010 等二进制转字符串试试。")])]),t._v(" "),e("li",[e("p",[t._v("xor文件 xortools破解。见下面")])]),t._v(" "),e("li",[e("p",[t._v("hex文件 IDA分析, 或 xxd -r -p MissionImprobable.TEENSY31.hex out")])]),t._v(" "),e("li",[e("p",[t._v("路由相关使用 routerpassview 搜 username 或者是password")])]),t._v(" "),e("li",[e("p",[t._v("音频, Audition 看看。多是摩斯码。")])]),t._v(" "),e("li",[e("p",[t._v("vmdk 一定要在Linux下7z解压: "),e("strong",[t._v("7z x filename")])])]),t._v(" "),e("li",[e("p",[t._v("查找webshell, 使用D盾审计。")])]),t._v(" "),e("li",[e("p",[t._v("视频文件, Premiere看比较清楚。")])]),t._v(" "),e("li",[e("p",[t._v("sage 解方程，二元一次，一元多次方程，见下面")])])]),t._v(" "),e("h2",{attrs:{id:"png隐写"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#png隐写"}},[t._v("#")]),t._v(" png隐写")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("00 00 00 0D 49 48 44 52 --0D头块长13, 49 48 44 52 IHDR标识\n00 00 01 f4 00 00 01 a4  宽:00 00 01 f4即500 高: 00 00 01 a4即 400\n08 06 00 00 00 cb d6 df 8a --- CRC校验 29:32 这4个字节是CRC\n")])])]),e("p",[t._v("有时会改宽度，需要CRC校验的。")]),t._v(" "),e("p",[t._v("0x12,13 宽度, 大端模式, 999为03e7")]),t._v(" "),e("p",[t._v("0x16,17 高度")]),t._v(" "),e("p",[t._v("左上角为基点分别是向右拉和向下。宽度一般不会改，会进行CRC校验的。")]),t._v(" "),e("p",[t._v("pngcheck -v filename")]),t._v(" "),e("p",[t._v("Image photography线上和离线加密方式不同。")]),t._v(" "),e("h3",{attrs:{id:"png格式介绍1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#png格式介绍1"}},[t._v("#")]),t._v(" png格式介绍1")]),t._v(" "),e("p",[t._v("参考链接")]),t._v(" "),e("p",[t._v("https://dev.gameres.com/Program/Visual/Other/PNGFormat.htm")]),t._v(" "),e("p",[t._v("https://blog.csdn.net/hherima/article/details/45847043")]),t._v(" "),e("p",[t._v("https://www.bilibili.com/video/BV1V4411Z7VA")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("00")]),t._v(" "),e("th",[t._v("01")]),t._v(" "),e("th",[t._v("02")]),t._v(" "),e("th",[t._v("03")]),t._v(" "),e("th",[t._v("04")]),t._v(" "),e("th",[t._v("05")]),t._v(" "),e("th",[t._v("06")]),t._v(" "),e("th",[t._v("07")]),t._v(" "),e("th",[t._v("08")]),t._v(" "),e("th",[t._v("09")]),t._v(" "),e("th",[t._v("0A")]),t._v(" "),e("th",[t._v("0B")]),t._v(" "),e("th",[t._v("0C")]),t._v(" "),e("th",[t._v("0D")]),t._v(" "),e("th",[t._v("0E")]),t._v(" "),e("th",[t._v("0F")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("89")]),t._v(" "),e("td",[t._v("50")]),t._v(" "),e("td",[t._v("4E")]),t._v(" "),e("td",[t._v("47")]),t._v(" "),e("td",[t._v("0D")]),t._v(" "),e("td",[t._v("0A")]),t._v(" "),e("td",[t._v("1A")]),t._v(" "),e("td",[t._v("0A")]),t._v(" "),e("td",[t._v("00")]),t._v(" "),e("td",[t._v("00")]),t._v(" "),e("td",[t._v("00")]),t._v(" "),e("td",[t._v("0D")]),t._v(" "),e("td",[t._v("49")]),t._v(" "),e("td",[t._v("48")]),t._v(" "),e("td",[t._v("44")]),t._v(" "),e("td",[t._v("52")])]),t._v(" "),e("tr",[e("td",[t._v("00")]),t._v(" "),e("td",[t._v("00")]),t._v(" "),e("td",[t._v("00")]),t._v(" "),e("td",[t._v("0F")]),t._v(" "),e("td",[t._v("00")]),t._v(" "),e("td",[t._v("00")]),t._v(" "),e("td",[t._v("00")]),t._v(" "),e("td",[t._v("20")]),t._v(" "),e("td",[t._v("08")]),t._v(" "),e("td",[t._v("06")]),t._v(" "),e("td",[t._v("00")]),t._v(" "),e("td",[t._v("00")]),t._v(" "),e("td",[t._v("00")]),t._v(" "),e("td",[t._v("CD")]),t._v(" "),e("td",[t._v("2C")]),t._v(" "),e("td",[t._v("22")])]),t._v(" "),e("tr",[e("td",[t._v("宽度1/4")]),t._v(" "),e("td",[t._v("2/4")]),t._v(" "),e("td",[t._v("3/4")]),t._v(" "),e("td",[t._v("4/4")]),t._v(" "),e("td",[t._v("高度1/4")]),t._v(" "),e("td",[t._v("2/4")]),t._v(" "),e("td",[t._v("3/4")]),t._v(" "),e("td",[t._v("4/4")]),t._v(" "),e("td",[t._v("Bit depth")]),t._v(" "),e("td",[t._v("ColorType")]),t._v(" "),e("td",[t._v("Compression Method")]),t._v(" "),e("td",[t._v("Filter method")]),t._v(" "),e("td",[t._v("Interlace Method")]),t._v(" "),e("td",[t._v("crc 1/4")]),t._v(" "),e("td",[t._v("2/4")]),t._v(" "),e("td",[t._v("3/4")])]),t._v(" "),e("tr",[e("td",[t._v("A9")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("4/4")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td")])])]),t._v(" "),e("h3",{attrs:{id:"png格式介绍2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#png格式介绍2"}},[t._v("#")]),t._v(" png格式介绍2")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("89 50 4E 47 0D 0A 1A 0A 00 00 00 0D 49 48 44 52\n00 00 07 80 00 00 04 B0 \n")])])]),e("p",[t._v("前四个字节00 00 00 0D（即为十进制的13）代表数据块的长度为13，数据块包含了png图片的宽高等信息，该段格式是固定的")]),t._v(" "),e("p",[t._v("之后的四个字节49 48 44 52（即为ASCII码的IHDR）是文件头数据块的标示，该段格式也是固定的")]),t._v(" "),e("p",[t._v("之后进入13位数据块，前8个字节00 00 05 56 00 00 03 00中：")]),t._v(" "),e("p",[t._v("前四个字节00 00 05 56（即为十进制的1366），代表该图片的宽，该段数据是由图片的实际宽决定的")]),t._v(" "),e("p",[t._v("后四个字节00 00 03 00（即为十进制的768），代表该图片的高，该段数据是由图片的实际高度决定的")]),t._v(" "),e("p",[t._v("这8个字节都属于13位数据块的内容，因此数据块应再向后数5个字节，即为00 00 05 56 00 00 03 00 08 02 00 00 00")]),t._v(" "),e("p",[t._v("剩余的4位40 5C AB 95为该png的CRC检验码，也就是本篇文章要重点讨论的地方，该段数据是由IDCH以及十三位数据块（即上文中的49 48 44 52 00 00 05 56 00 00 03 00 08 02 00 00 00）计算得到的")]),t._v(" "),e("h3",{attrs:{id:"_17-steghide隐写01"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_17-steghide隐写01"}},[t._v("#")]),t._v(" 17 steghide隐写01\\")]),t._v(" "),e("p",[t._v("将Misc.png拖入winhex发现尾部不对。")]),t._v(" "),e("ol",[e("li",[t._v("用foremost 解压 Misc.png")]),t._v(" "),e("li",[t._v("用steghide 解密 000112.jpg，出现密码")]),t._v(" "),e("li",[t._v("打开pdf，输入密码。（或者暴破）")])]),t._v(" "),e("h3",{attrs:{id:"_19-outguess隐写"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_19-outguess隐写"}},[t._v("#")]),t._v(" 19 outguess隐写")]),t._v(" "),e("p",[t._v("outguess -r angrybird.jpg 11.txt")]),t._v(" "),e("h1",{attrs:{id:"工具使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#工具使用"}},[t._v("#")]),t._v(" 工具使用")]),t._v(" "),e("h2",{attrs:{id:"wifi-cap-wifi密码破解-aircrack-airdecap-ng"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wifi-cap-wifi密码破解-aircrack-airdecap-ng"}},[t._v("#")]),t._v(" wifi.cap wifi密码破解 aircrack, airdecap-ng")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("aircrack-ng -w 常用密码.txt wifi.cap\naircrack-ng -w /usr/share/wordlists/rockyou.txt wifi.cap\n")])])]),e("p",[t._v("解密流量包")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("airdecap-ng shipin.cap -e 0719 -p 88888888\nairdecap-ng shipin.cap -e 0719(前面的essid) -p 88888888\n")])])]),e("h3",{attrs:{id:"解密-http-包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解密-http-包"}},[t._v("#")]),t._v(" 解密 http 包")]),t._v(" "),e("p",[t._v("过滤语句 http.request.method==POST 找到压缩包分卷每个进行保存。")]),t._v(" "),e("p",[t._v("binwalk分析一下 发现有一个rar压缩包 364应该是数据包的一些头等等全部去掉。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("dd if=a1 bs=1 skip=364 of=b1\ndd if=a2 bs=1 skip=364 of=b2\ndd if=a3 bs=1 skip=364 of=b3\ndd if=a4 bs=1 skip=364 of=b4\ndd if=a5 bs=1 skip=364 of=b5\ncat b1 b2 b3 b4 b5 > fly.rar\n")])])]),e("p",[t._v("参考 https://www.cnblogs.com/cat47/p/11567399.html")]),t._v(" "),e("p",[t._v("https://blog.csdn.net/sinat_36188088/article/details/53333565")]),t._v(" "),e("h2",{attrs:{id:"notepad"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#notepad"}},[t._v("#")]),t._v(" notepad++")]),t._v(" "),e("p",[t._v("二进制转字符-转10进制")]),t._v(" "),e("h2",{attrs:{id:"binwalk-kali-分析文件工具-分析头和尾"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binwalk-kali-分析文件工具-分析头和尾"}},[t._v("#")]),t._v(" binwalk -- kali 分析文件工具 分析头和尾")]),t._v(" "),e("p",[t._v("binwalk -e new.jpg")]),t._v(" "),e("p",[t._v("-e = extract 直接解压文件")]),t._v(" "),e("p",[t._v('\\u1111\\u2222 --- 要在Chrome里直接 F12 console加引号输出 , "\\u1111\\u2222" 回车。')]),t._v(" "),e("h2",{attrs:{id:"foremost-kali-分析文件工具-并拆分隐藏的文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#foremost-kali-分析文件工具-并拆分隐藏的文件"}},[t._v("#")]),t._v(" foremost -- kali 分析文件工具,并拆分隐藏的文件")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.cnblogs.com/cnnnnnn/p/8994362.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("windows上使用foremost"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("foremost new.jpg")]),t._v(" "),e("h2",{attrs:{id:"stegsolve-lsb隐写"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stegsolve-lsb隐写"}},[t._v("#")]),t._v(" Stegsolve --- LSB隐写")]),t._v(" "),e("p",[t._v("java -jar Stegsolve.jar")]),t._v(" "),e("p",[t._v("Analasys - Data Extract")]),t._v(" "),e("p",[t._v("最低位先用0 (alpha没变形没选)")]),t._v(" "),e("p",[t._v("√LSB First")]),t._v(" "),e("p",[t._v("测试每个 Bit Plane Order")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("  找到明显标志后保存 - Save Test \n")])])]),e("p",[t._v("SaveBin")]),t._v(" "),e("h2",{attrs:{id:"zsteg"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zsteg"}},[t._v("#")]),t._v(" zsteg")]),t._v(" "),e("p",[t._v("zsteg -h")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("# 查看LSB信息\nzsteg pcat.png\n\n检测zlib\n# -b的位数是从1开始的\nzsteg zlib.bmp -b 1 -o xy -v\n")])])]),e("h2",{attrs:{id:"file-命令分析文件-或者winhex"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#file-命令分析文件-或者winhex"}},[t._v("#")]),t._v(" file 命令分析文件 或者winhex")]),t._v(" "),e("h2",{attrs:{id:"volatility-内存取证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#volatility-内存取证"}},[t._v("#")]),t._v(" volatility 内存取证")]),t._v(" "),e("p",[e("code",[t._v("volatility -f <文件名> --profile=<配置文件> <插件> [插件参数]")])]),t._v(" "),e("p",[t._v("获取–profile的参数")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("volatility -f mem.vmem imageinfo\n\nvolatility -f mem.vmem –profile=WinXPSP2x86 volshell\n")])])]),e("p",[t._v("shell的命令：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('dt("内核关键数据结构名称")\n如\ndt("_PEB")\n')])])]),e("p",[t._v("剪贴板")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("volatility -f memeories.vmem --profile=Win10x86_14393 clipboard\n")])])]),e("p",[t._v("列举进程：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("volatility -f mem.vmem –profile=WinXPSP2x86 pslist\n")])])]),e("p",[t._v("列举缓存在内存的注册表 ：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("volatility -f mem.vmem –profile=WinXPSP2x86 hivelist\n")])])]),e("p",[t._v("hivedump 打印出注册表中的数据 ：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("volatility -f mem.vmem –profile=WinXPSP2x86 hivedump -o 注册表的 virtual 地址\n")])])]),e("p",[t._v("获取SAM表中的用户 ：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('volatility -f mem.vmem –profile=WinXPSP2x86 printkey -K "SAM\\Domains\\Account\\Users\\Names" \n')])])]),e("p",[t._v("可以看到有4个用户")]),t._v(" "),e("p",[t._v("获取最后登录系统的账户 ：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('volatility -f mem.vmem –profile=WinXPSP2x86 printkey -K "SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Winlogon" \n')])])]),e("p",[t._v("提取出内存中记录的 当时正在运行的程序有哪些，运行过多少次，最后一次运行的时间等信息")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("volatility -f mem.vmem –profile=WinXPSP2x86 userassist\n")])])]),e("p",[t._v("将内存中的某个进程数据以 dmp 的格式保存出来 。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("volatility -f mem.vmem –profile=WinXPSP2x86 -p [PID] -D [dump 出的文件保存的目录]\n")])])]),e("p",[t._v("二进制编辑器 hexeditor 将以上保存的 dmp 文件打开，并进行调查取证的工作 。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("hexeditor 1736.dmp\n")])])]),e("p",[t._v("二进制.png")]),t._v(" "),e("p",[t._v("你还可以使用 strings 这个工具将它的字符串打印出来。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("例：\n\nstrings 1736.dmp > 1736.txt \n\nstrings 1608.dmp > 1736.txt | grep shellcode \n")])])]),e("p",[t._v("提取内存中保留的 cmd 命令使用情况 。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("volatility -f mem.vmem –profile=WinXPSP2x86 cmdscan\n")])])]),e("p",[t._v("获取到当时的网络连接情况 。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("volatility -f mem.vmem –profile=WinXPSP2x86 netscan\n")])])]),e("p",[t._v("获取 IE 浏览器的使用情况。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("volatility -f mem.vmem –profile=WinXPSP2x86 iehistory \n")])])]),e("p",[t._v("获取内存中的系统密码，我们可以使用 hashdump 将它提取出来 。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("volatility -f mem.vmem –profile=WinXPSP2x86 hashdump -y （注册表 system 的 virtual 地址 ）-s （SAM 的 virtual 地址）\n\nvolatility -f mem.vmem –profile=WinXPSP2x86 hashdump -y 0xe1035b60 -s 0xe16aab60 \n")])])]),e("p",[t._v("最大程度上将内存中的信息提取出来，那么你可以使用 timeliner 这个插件。它会从多个位置来收集系统的活动信息")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("volatility -f mem.vmem –profile=WinXPSP2x86 timeliner\n")])])]),e("p",[t._v("打开kali，使用volatility 查看进程，可以发现一个TrueCrypy.exe的进程。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("volatility -f mem.vmem –profile=WinXPSP2x86 pslist\n")])])]),e("p",[t._v("TrueCrypy.exe是一款加密程序，而我们可以推出，suspicion为加密的结果。")]),t._v(" "),e("p",[t._v("我们需要从内存dump出key来。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("volatility -f mem.vmem –profile=WinXPSP2x86 memdump -p 1464 -D ctf/ \n")])])]),e("p",[t._v("dump出来的文件为1464.dmp 。")]),t._v(" "),e("p",[t._v("Elcomsoft Forensic Disk Decryptor 的使用。")]),t._v(" "),e("p",[t._v("我们需要借助Elcomsoft Forensic Disk Decryptor（Elcomsoft硬盘取证解密器，简称为EFDD）软件来获取key和破解文件  。")]),t._v(" "),e("h3",{attrs:{id:"bitlocker解密-vmem-vhdx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bitlocker解密-vmem-vhdx"}},[t._v("#")]),t._v(" bitlocker解密, vmem, vhdx")]),t._v(" "),e("p",[t._v("参见  网鼎杯2020白虎组 密码柜")]),t._v(" "),e("p",[t._v("windows挂载后, 有密钥情况下。")]),t._v(" "),e("p",[t._v("manage-bde -unlock G: -RecoveryPassword 294173-189123-573023-455081-459382-434610-344091-286275")]),t._v(" "),e("h3",{attrs:{id:"xor解密"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#xor解密"}},[t._v("#")]),t._v(" xor解密")]),t._v(" "),e("p",[t._v("xortool -c 20 filename 得到密钥。 脚本跑")]),t._v(" "),e("div",{staticClass:"language-python line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#coding:utf-8")]),t._v("\n\nf "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xor'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rb'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nw "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xor1.png'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ab'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nline "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" f"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nkey "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'WDCTF'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# print hex(ord(line[1]))")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("line"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    w"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("chr")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("ord")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("line"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("ord")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br")])]),e("h3",{attrs:{id:"sage-计算，解方程等"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sage-计算，解方程等"}},[t._v("#")]),t._v(" sage 计算，解方程等")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# 三元一次方程\nvar('x y z')\nsolve([3*x-y+z==185,\n2*x+3*y-z==321,\nx+y+z==173], [x, y, z])\n\n# 一元二次方程\nvar('x')\nf(x)=x*x+x-7943722218936282\nf.roots()\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br")])]),e("h2",{attrs:{id:"detect-it-easy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#detect-it-easy"}},[t._v("#")]),t._v(" Detect it Easy")]),t._v(" "),e("p",[t._v("DIE看时发现资源区段显示加壳，很可疑。")]),t._v(" "),e("p",[e("img",{attrs:{src:s(565),alt:"注意，前面"}})]),t._v(" "),e("p",[t._v("查看资源，发现Flag关键字。")]),t._v(" "),e("p",[e("img",{attrs:{src:s(566),alt:"注意，前面"}})]),t._v(" "),e("p",[t._v("在图1处右击查看16进制，发现PNG头。转储出来。恢复PNG头。显示出flag")]),t._v(" "),e("p",[t._v("也可以用ResHackerFX或 "),e("a",{attrs:{href:"https://www.xiazaiba.com/html/2983.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ResourcesExtract1.18"),e("OutboundLink")],1),t._v(" 提取")]),t._v(" "),e("h2",{attrs:{id:"文件头"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文件头"}},[t._v("#")]),t._v(" 文件头")]),t._v(" "),e("p",[t._v("字符串 PK是 zip的开头,  5d480506xxxxx 为尾部")])])}),[],!1,null,null,null);a.default=v.exports}}]);