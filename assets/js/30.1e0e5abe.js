(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{585:function(e,n,t){"use strict";t.r(n);var a=t(4),r=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("Byte(ea) 将地址解释为Byte\nWord(ea)\nDWord(ea)\nQWord(ea)\nGetFloat(ea)\nGetDouble(ea)\nGetString(ea, length = -1, strtype = ASCSTR_C) 获取字符串\nGetCurrentLine() 获取光标所在行反汇编")]),e._v(" "),t("p",[e._v("ScreenEA()\n　　获取 IDA 调试窗口中，光标指向代码的地址。通过这个函数，我们就能够从一个已知 的点运行我们的脚本。")]),e._v(" "),t("p",[e._v("GetInputFileMD5()\n　　返回 IDA 加载的二进制文件的 MD5 值，通过这个值能够判断一个文件的不同版本是否 有改变。")]),e._v(" "),t("p",[e._v("FirstSeg()\n　　访问程序中的第一个段。")]),e._v(" "),t("p",[e._v("NextSeg()\n　　访问下一个段，如果没有就返回 BADADDR。")]),e._v(" "),t("p",[e._v("SegByName( string SegmentName )\n　　通过段名字返回段基址，举个例子，如果调用.text 作为参数，就会返回程序中代码段的开始位置。")]),e._v(" "),t("p",[e._v("SegEnd( long Address )\n　　通过段内的某个地址，获得段尾的地址。")]),e._v(" "),t("p",[e._v("SegStart( long Address )\n　　通过段内的某个地址，获得段头的地址。")]),e._v(" "),t("p",[e._v("SegName( long Address )\n　　通过段内的某个地址，获得段名。")]),e._v(" "),t("p",[e._v("Segments()\n　　返回目标程序中的所有段的开始地址。")]),e._v(" "),t("p",[e._v("Functions( long StartAddress, long EndAddress )\n　　返回一个列表，包含了从 StartAddress 到 EndAddress 之间的所有函数。")]),e._v(" "),t("p",[e._v("Chunks( long FunctionAddress )\n　　返回一个列表，包含了函数片段。每个列表项都是一个元组（chunk start, chunk end）")]),e._v(" "),t("p",[e._v("LocByName( string FunctionName )\n　　通过函数名返回函数的地址。")]),e._v(" "),t("p",[e._v('GetFuncOffset( long Address )\n　　通过任意一个地址，然后得到这个地址所属的函数名，以及给定地址和函数的相对位移。 然后把这些信息组成字符串以"名字+位移"的形式返回。')]),e._v(" "),t("p",[e._v("GetFunctionName( long Address )\n　　通过一个地址，返回这个地址所属的函数。")]),e._v(" "),t("p",[e._v("CodeRefsTo( long Address, bool Flow )\n　　返回一个列表，告诉我们 Address 处代码被什么地方引用了，Flow 告诉 IDAPython 是否要 跟踪这些代码。")]),e._v(" "),t("p",[e._v("CodeRefsFrom( long Address, bool Flow )\n　　返回一个列表，告诉我们 Address 地址上的代码引用何处的代码。")]),e._v(" "),t("p",[e._v("DataRefsTo( long Address )\n　　返回一个列表，告诉我们 Address 处数据被什么地方引用了。常用于跟踪全局变量。")]),e._v(" "),t("p",[e._v("DataRefsFrom( long Address )\n　　返回一个列表，告诉我们 Address 地址上的代码引用何处的数据。")]),e._v(" "),t("p",[e._v("Heads(start=None, end=None)\n　　得到两个地址之间所有的元素")]),e._v(" "),t("p",[e._v("GetDisasm(addr)\n　　得到addr的反汇编语句")]),e._v(" "),t("p",[e._v("GetMnem(addr)\n　　得到addr地址的操作码")]),e._v(" "),t("p",[e._v("BADADDR\n　　验证是不是错误地址")]),e._v(" "),t("p",[e._v("GetOpnd(addr，long n)\n　　第一个参数是地址，第二个long n是操作数索引。第一个操作数是0和第二个是1。")]),e._v(" "),t("p",[e._v("idaapi.decode_insn(ea)\n　　得到当前地址指令的长度")]),e._v(" "),t("p",[e._v("idc.FindFuncEnd(ea)\n　　找到当前地址的函数结束地址")]),e._v(" "),t("p",[e._v("Entries()\n　　入口点信息")]),e._v(" "),t("p",[e._v("Structs()\n　　遍历结构体")]),e._v(" "),t("p",[e._v("StructMembers(sid)\n　　遍历结构体成员")]),e._v(" "),t("p",[e._v("DecodePrecedingInstruction(ea) 获取指令结构\nDecodePreviousInstruction(ea)\nDecodeInstruction(ea)")]),e._v(" "),t("p",[e._v("Strings(object) 获取字符串\nGetIdbDir() 获取idb目录\nGetRegisterList() 获取寄存器名表\nGetInstructionList 获取汇编指令表")]),e._v(" "),t("p",[e._v("atoa(ea) 获取所在段\nJump(ea) 移动光标\nEval(expr) 计算表达式\nExec(command) 执行命令行\nMakeCode(ea) 分析代码区\nMakeNameEx(ea, name, flags) 重命名地址\nMakeArray(ea, nitems) 创建数组\nMakeStr(ea, endea) 创建字符串\nMakeData(ea, flags, size, tid) 创建数据\nMakeByte(ea)\nMakeWord(ea)\nMakeDWord(ea)\nMakeQWord(ea)\nMakeOWord(ea)\nMakeYWord(ea)\nMakeFlot(ea)\nMakeDouble(ea)\nMakePackReal(ea)\nMakeTbyte(ea)\nMakeStructEx(ea)\nMakeCustomDataEx(ea)")]),e._v(" "),t("p",[e._v("PatchByte(ea, value) 修改程序字节\nPatchWord(ea, value)\nPatchDword(ea, value)\nPatchByte(ea, value)\nPatchByte(ea, value)")]),e._v(" "),t("p",[e._v("Byte(ea) 将地址解释为Byte\nWord(ea)\nDWord(ea)\nQWord(ea)\nGetFloat(ea)\nGetDouble(ea)\nGetString(ea, length = -1, strtype = ASCSTR_C) 获取字符串\nGetCurrentLine() 获取光标所在行反汇编")]),e._v(" "),t("p",[e._v("ItemSize(ea) 获取指令或数据长度")]),e._v(" "),t("p",[e._v("FindText(ea, flag, y, x, searchstr)查找文本\nFindBinary(ea, flag, searchstr, radix=16) 查找16进制")]),e._v(" "),t("p",[e._v("GetEntryPointQty() 获取入口点个数\nGetEntryOrdinal(index) 获取入口点地址\nGetEntryName(ordinal) 入口名")]),e._v(" "),t("p",[e._v("idc.GetFunctionAttr(ea, attr) //得到当前地址所在函数的数据\n(\nFUNCATTR_START = 0 # function start address\nFUNCATTR_END = 4 # function end address\nFUNCATTR_FLAGS = 8 # function flags\nFUNCATTR_FRAME = 10 # function frame id\nFUNCATTR_FRSIZE = 14 # size of local variables\nFUNCATTR_FRREGS = 18 # size of saved registers area\nFUNCATTR_ARGSIZE = 20 # number of bytes purged from the stack\nFUNCATTR_FPD = 24 # frame pointer delta\nFUNCATTR_COLOR = 28 # function color code\nFUNCATTR_OWNER = 10 # chunk owner (valid only for tail chunks)\nFUNCATTR_REFQTY = 14 # number of chunk parents (valid only for tail chunks)\n)")]),e._v(" "),t("p",[e._v("class DbgHook(DBG_Hooks):")]),e._v(" "),t("h1",{attrs:{id:"event-handler-for-when-the-process-starts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#event-handler-for-when-the-process-starts"}},[e._v("#")]),e._v(" Event handler for when the process starts")]),e._v(" "),t("p",[e._v("def dbg_process_start(self, pid, tid, ea, name, base, size)\nreturn")]),e._v(" "),t("h1",{attrs:{id:"event-handler-for-process-exit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#event-handler-for-process-exit"}},[e._v("#")]),e._v(" Event handler for process exit")]),e._v(" "),t("p",[e._v("def dbg_process_exit(self, pid, tid, ea, code):\nreturn")]),e._v(" "),t("h1",{attrs:{id:"event-handler-for-when-a-shared-library-gets-loaded-def"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#event-handler-for-when-a-shared-library-gets-loaded-def"}},[e._v("#")]),e._v(" Event handler for when a shared library gets loaded def")]),e._v(" "),t("p",[e._v("dbg_library_load(self, pid, tid, ea, name, base, size):\nreturn")]),e._v(" "),t("h1",{attrs:{id:"breakpoint-handler"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#breakpoint-handler"}},[e._v("#")]),e._v(" Breakpoint handler")]),e._v(" "),t("p",[e._v("def dbg_bpt(self, tid, ea):\nreturn")]),e._v(" "),t("p",[e._v("这个类包含了我们在创建调试脚本时，会经常用到的几个调试事件处理函数。安装 hook 的方式如下:\ndebugger = DbgHook()\ndebugger.hook()\n现在运行调试器，hook 会捕捉所有的调试事件，这样就能非常精确的控制 IDA 调试器。 下面的函数在调试的时候非常有用:\nAddBpt( long Address )\n在指定的地点设置软件断点。\nGetBptQty()\n返回当前设置的断点数量。\nGetRegValue( string Register )\n通过寄存器名获得寄存器值。\nSetRegValue( long Value, string Register )")]),e._v(" "),t("p",[e._v("这个是用IDApytohon编写的查找strcpy函数以及他的参数是否在栈区域")])])}),[],!1,null,null,null);n.default=r.exports}}]);