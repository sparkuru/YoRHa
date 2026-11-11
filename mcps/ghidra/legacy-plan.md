# ghidra headless

[ghidra](https://github.com/NationalSecurityAgency/ghidra.git) 的 gui 是基于 swing 写的，但是反编译组件是用 cpp 写的，两者可以分开独立使用，也就是 ghidra-headless 模式。

这是调用 ghidra 功能的 python 脚本示例：https://github.com/HackOvert/GhidraSnippets.git

目的是写一些 headless 脚本，模板化规范化，自动去识别像是调用 system，exec 这类函数的数据流，比如现在有一堆elf文件，放在一个文件夹里面，然后这个脚本可以快速分析这些elf谁调用了危险函数，以及危险函数的调用链，调用危险函数的那个函数的 c 伪代码，汇编代码。给出一些示例，并且验证成果。

## tmp

ghidra 有一个 [ghidrathon](https://github.com/mandiant/Ghidrathon.git)

## logic

找到 system -> 找 caller 列表 -> 递归 decompile 掉 caller 列表中的函数，直到 main

```python
info_dict = {
    'program_name': '',
    'program_path': '',
    'first_function': '',
    'program_function_list': {
        'main': '0xdeadbeef'
    },
    'risk_function': {
        'system@1': {
            'addr': '0xdeadbeef',
            'chain': 'main+0x2a>func1+0x31>func2+0x11',
            'chain_file_path': '/e/project/17-ghidra-scripts/storage/binary_name/system@1'
        },
        'system@2': {
            'addr': '0xdeadbeef',
            'chain': 'main+0x2a>func1+0x31>func2+0x12',
            'chain_file_path': '/e/project/17-ghidra-scripts/storage/binary_name/system@2'
        },
        'gets@1': {
            'addr': '0xdeadbeef',
            'chain': 'main+0x2a>func1+0x31>func2+0x13',
            'chain_file_path': '/e/project/17-ghidra-scripts/storage/binary_name/gets@1'
        }
    }
}
```

a1：strip、dynamic，无法识别 main

b1：no-strip、static，能够识别 main

c1：no-strip、dynamic，能够识别 main

## ex

1.   调整目录结构，工程化，将文件放置在一个 project 里，
2.   检查程序的 load，在当前目录、默认 so 目录、程序 so 目录进行检索对应的 so，装载

## refer

1.   https://github.com/NationalSecurityAgency/ghidra.git
2.   https://github.com/HackOvert/GhidraSnippets.git
3.   https://github.com/NSSL-SJTU/SaTC.git
4.   https://www.cnblogs.com/wingsummer/p/16678277.html