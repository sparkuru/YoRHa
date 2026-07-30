# `Microcode`

## microcode

Classes:

- **`AccessType`** – Access type for use-def list building (MUST_ACCESS / MAY_ACCESS).
- **`AnalyzeCallsFlags`** – Flags for :meth:MicroBlockArray.analyze_calls (ACFL\_\*).
- **`CallInfoFlags`** – Call information flags (FCI\_\*).
- **`CopyBlockFlags`** – Flags for :meth:MicroBlockArray.copy_block (CPBLK\_\*).
- **`DecompilationFlags`** – Decompilation flags passed to microcode generation (DECOMP\_\*).
- **`FunctionRole`** – Function role constants (ROLE\_\*).
- **`MbaFlags`** – Microcode block-array flags (MBA\_\*).
- **`MicroBlock`** – Wrapper around an IDA mblock_t microcode basic block.
- **`MicroBlockArray`** – Wrapper around an IDA mba_t (micro block array).
- **`MicroBlockFlags`** – Block flags corresponding to MBL\_\* constants.
- **`MicroBlockOptimizer`** – Per-block optimizer. Override :meth:optimize.
- **`MicroBlockType`** – Basic block types corresponding to BLT\_\* constants.
- **`MicroCallArg`** – Wrapper around an IDA mcallarg_t call argument.
- **`MicroCallInfo`** – Wrapper around an IDA mcallinfo_t call information structure.
- **`MicroError`** – Microcode error/return codes corresponding to MERR\_\* constants.
- **`MicroGraph`** – Wrapper around an IDA mbl_graph_t block-level control flow graph.
- **`MicroInstruction`** – Wrapper around an IDA minsn_t microcode instruction.
- **`MicroInstructionOptimizer`** – Per-instruction optimizer. Override :meth:optimize.
- **`MicroInstructionVisitor`** – Visitor that delivers :class:MicroInstruction wrappers.
- **`MicroLocalVar`** – Wrapper around an IDA lvar_t local variable.
- **`MicroLocalVars`** – Wrapper around an IDA lvars_t local variable list.
- **`MicroLocationSet`** – Wrapper around an IDA mlist_t set of memory/register locations.
- **`MicroMaturity`** – Microcode maturity levels corresponding to MMAT\_\* constants.
- **`MicroOpcode`** – Microcode instruction opcodes corresponding to m\_\* constants.
- **`MicroOperand`** – Wrapper around an IDA mop_t microcode operand.
- **`MicroOperandType`** – Microcode operand types corresponding to mop\_\* constants.
- **`MicroOperandVisitor`** – Visitor that delivers :class:MicroOperand wrappers.
- **`Microcode`** – Provides structured access to IDA's Hex-Rays microcode.
- **`MicrocodeError`** – Raised when microcode generation or decompilation fails.
- **`MicrocodeFilter`** – User-defined call filter.
- **`MicrocodeLifter`** – Custom instruction lifter. Override match() and apply().

Functions:

- **`get_hexrays_version`** – Get the Hex-Rays decompiler version string.
- **`mreg2reg`** – Map a micro-register number to a processor register number.
- **`reg2mreg`** – Map a processor register number to a micro-register number.

### AccessType

Bases: `IntEnum`

Access type for use-def list building (`MUST_ACCESS` / `MAY_ACCESS`).

Attributes:

- **`MAY`** –
- **`MUST`** –

#### MAY

```
MAY = MAY_ACCESS

```

#### MUST

```
MUST = MUST_ACCESS

```

### AnalyzeCallsFlags

Bases: `IntFlag`

Flags for :meth:`MicroBlockArray.analyze_calls` (`ACFL_*`).

Attributes:

- **`BLKOPT`** –
- **`GLBDEL`** –
- **`GLBPROP`** –
- **`GUESS`** –
- **`LOCOPT`** –

#### BLKOPT

```
BLKOPT = ACFL_BLKOPT

```

#### GLBDEL

```
GLBDEL = ACFL_GLBDEL

```

#### GLBPROP

```
GLBPROP = ACFL_GLBPROP

```

#### GUESS

```
GUESS = ACFL_GUESS

```

#### LOCOPT

```
LOCOPT = ACFL_LOCOPT

```

### CallInfoFlags

Bases: `IntFlag`

Call information flags (`FCI_*`).

Attributes:

- **`DEAD`** –
- **`EXPLOCS`** –
- **`FINAL`** –
- **`HASCALL`** –
- **`HASFMT`** –
- **`NORET`** –
- **`NOSIDE`** –
- **`PROP`** –
- **`PURE`** –
- **`SPLOK`** –

#### DEAD

```
DEAD = FCI_DEAD

```

#### EXPLOCS

```
EXPLOCS = FCI_EXPLOCS

```

#### FINAL

```
FINAL = FCI_FINAL

```

#### HASCALL

```
HASCALL = FCI_HASCALL

```

#### HASFMT

```
HASFMT = FCI_HASFMT

```

#### NORET

```
NORET = FCI_NORET

```

#### NOSIDE

```
NOSIDE = FCI_NOSIDE

```

#### PROP

```
PROP = FCI_PROP

```

#### PURE

```
PURE = FCI_PURE

```

#### SPLOK

```
SPLOK = FCI_SPLOK

```

### CopyBlockFlags

Bases: `IntFlag`

Flags for :meth:`MicroBlockArray.copy_block` (`CPBLK_*`).

Attributes:

- **`FAST`** –
- **`MINREF`** –
- **`OPTJMP`** –

#### FAST

```
FAST = CPBLK_FAST

```

#### MINREF

```
MINREF = CPBLK_MINREF

```

#### OPTJMP

```
OPTJMP = CPBLK_OPTJMP

```

### DecompilationFlags

Bases: `IntFlag`

Decompilation flags passed to microcode generation (`DECOMP_*`).

Attributes:

- **`ALL_BLKS`** –
- **`GXREFS_DEFLT`** –
- **`GXREFS_FORCE`** –
- **`GXREFS_NOUPD`** –
- **`NO_CACHE`** –
- **`NO_FRAME`** –
- **`NO_HIDE`** –
- **`NO_WAIT`** –
- **`VOID_MBA`** –
- **`WARNINGS`** –

#### ALL_BLKS

```
ALL_BLKS = DECOMP_ALL_BLKS

```

#### GXREFS_DEFLT

```
GXREFS_DEFLT = DECOMP_GXREFS_DEFLT

```

#### GXREFS_FORCE

```
GXREFS_FORCE = DECOMP_GXREFS_FORCE

```

#### GXREFS_NOUPD

```
GXREFS_NOUPD = DECOMP_GXREFS_NOUPD

```

#### NO_CACHE

```
NO_CACHE = DECOMP_NO_CACHE

```

#### NO_FRAME

```
NO_FRAME = DECOMP_NO_FRAME

```

#### NO_HIDE

```
NO_HIDE = DECOMP_NO_HIDE

```

#### NO_WAIT

```
NO_WAIT = DECOMP_NO_WAIT

```

#### VOID_MBA

```
VOID_MBA = DECOMP_VOID_MBA

```

#### WARNINGS

```
WARNINGS = DECOMP_WARNINGS

```

### FunctionRole

Bases: `IntEnum`

Function role constants (`ROLE_*`).

Attributes:

- **`ABS`** –
- **`ALLOCA`** –
- **`BITTEST`** –
- **`BITTESTANDCOMPLEMENT`** –
- **`BITTESTANDRESET`** –
- **`BITTESTANDSET`** –
- **`BSWAP`** –
- **`BUG`** –
- **`CFSUB3`** –
- **`CONTAINING_RECORD`** –
- **`EMPTY`** –
- **`FASTFAIL`** –
- **`IS_MUL_OK`** –
- **`MEMCPY`** –
- **`MEMSET`** –
- **`MEMSET32`** –
- **`MEMSET64`** –
- **`OFSUB3`** –
- **`PRESENT`** –
- **`READFLAGS`** –
- **`ROL`** –
- **`ROR`** –
- **`SATURATED_MUL`** –
- **`SSE_CMP4`** –
- **`SSE_CMP8`** –
- **`STRCAT`** –
- **`STRCPY`** –
- **`STRLEN`** –
- **`TAIL`** –
- **`THREE_WAY_CMP0`** –
- **`THREE_WAY_CMP1`** –
- **`UNK`** –
- **`VA_ARG`** –
- **`VA_COPY`** –
- **`VA_END`** –
- **`VA_START`** –
- **`WCSCAT`** –
- **`WCSCPY`** –
- **`WCSLEN`** –
- **`WMEMCPY`** –
- **`WMEMSET`** –

#### ABS

```
ABS = ROLE_ABS

```

#### ALLOCA

```
ALLOCA = ROLE_ALLOCA

```

#### BITTEST

```
BITTEST = ROLE_BITTEST

```

#### BITTESTANDCOMPLEMENT

```
BITTESTANDCOMPLEMENT = ROLE_BITTESTANDCOMPLEMENT

```

#### BITTESTANDRESET

```
BITTESTANDRESET = ROLE_BITTESTANDRESET

```

#### BITTESTANDSET

```
BITTESTANDSET = ROLE_BITTESTANDSET

```

#### BSWAP

```
BSWAP = ROLE_BSWAP

```

#### BUG

```
BUG = ROLE_BUG

```

#### CFSUB3

```
CFSUB3 = ROLE_CFSUB3

```

#### CONTAINING_RECORD

```
CONTAINING_RECORD = ROLE_CONTAINING_RECORD

```

#### EMPTY

```
EMPTY = ROLE_EMPTY

```

#### FASTFAIL

```
FASTFAIL = ROLE_FASTFAIL

```

#### IS_MUL_OK

```
IS_MUL_OK = ROLE_IS_MUL_OK

```

#### MEMCPY

```
MEMCPY = ROLE_MEMCPY

```

#### MEMSET

```
MEMSET = ROLE_MEMSET

```

#### MEMSET32

```
MEMSET32 = ROLE_MEMSET32

```

#### MEMSET64

```
MEMSET64 = ROLE_MEMSET64

```

#### OFSUB3

```
OFSUB3 = ROLE_OFSUB3

```

#### PRESENT

```
PRESENT = ROLE_PRESENT

```

#### READFLAGS

```
READFLAGS = ROLE_READFLAGS

```

#### ROL

```
ROL = ROLE_ROL

```

#### ROR

```
ROR = ROLE_ROR

```

#### SATURATED_MUL

```
SATURATED_MUL = ROLE_SATURATED_MUL

```

#### SSE_CMP4

```
SSE_CMP4 = ROLE_SSE_CMP4

```

#### SSE_CMP8

```
SSE_CMP8 = ROLE_SSE_CMP8

```

#### STRCAT

```
STRCAT = ROLE_STRCAT

```

#### STRCPY

```
STRCPY = ROLE_STRCPY

```

#### STRLEN

```
STRLEN = ROLE_STRLEN

```

#### TAIL

```
TAIL = ROLE_TAIL

```

#### THREE_WAY_CMP0

```
THREE_WAY_CMP0 = ROLE_3WAYCMP0

```

#### THREE_WAY_CMP1

```
THREE_WAY_CMP1 = ROLE_3WAYCMP1

```

#### UNK

```
UNK = ROLE_UNK

```

#### VA_ARG

```
VA_ARG = ROLE_VA_ARG

```

#### VA_COPY

```
VA_COPY = ROLE_VA_COPY

```

#### VA_END

```
VA_END = ROLE_VA_END

```

#### VA_START

```
VA_START = ROLE_VA_START

```

#### WCSCAT

```
WCSCAT = ROLE_WCSCAT

```

#### WCSCPY

```
WCSCPY = ROLE_WCSCPY

```

#### WCSLEN

```
WCSLEN = ROLE_WCSLEN

```

#### WMEMCPY

```
WMEMCPY = ROLE_WMEMCPY

```

#### WMEMSET

```
WMEMSET = ROLE_WMEMSET

```

### MbaFlags

Bases: `IntFlag`

Microcode block-array flags (`MBA_*`).

These control display options, optimization requests, and internal state of the :class:`MicroBlockArray`.

Attributes:

- **`ASRPROP`** –
- **`ASRTOK`** –
- **`CALLS`** –
- **`CHVARS`** –
- **`CMBBLK`** –
- **`CMNSTK`** –
- **`COLGDL`** –
- **`DELPAIRS`** –
- **`GLBOPT`** –
- **`INSGDL`** –
- **`LOADED`** –
- **`LVARS0`** –
- **`LVARS1`** –
- **`NICE`** –
- **`NOFUNC`** –
- **`NUMADDR`** –
- **`PASSREGS`** –
- **`PATTERN`** –
- **`PRCDEFS`** –
- **`PREOPT`** –
- **`REFINE`** –
- **`RETFP`** –
- **`RETREF`** –
- **`SAVRST`** –
- **`SHORT`** –
- **`SPLINFO`** –
- **`THUNK`** –
- **`VALNUM`** –

#### ASRPROP

```
ASRPROP = MBA_ASRPROP

```

#### ASRTOK

```
ASRTOK = MBA_ASRTOK

```

#### CALLS

```
CALLS = MBA_CALLS

```

#### CHVARS

```
CHVARS = MBA_CHVARS

```

#### CMBBLK

```
CMBBLK = MBA_CMBBLK

```

#### CMNSTK

```
CMNSTK = MBA_CMNSTK

```

#### COLGDL

```
COLGDL = MBA_COLGDL

```

#### DELPAIRS

```
DELPAIRS = MBA_DELPAIRS

```

#### GLBOPT

```
GLBOPT = MBA_GLBOPT

```

#### INSGDL

```
INSGDL = MBA_INSGDL

```

#### LOADED

```
LOADED = MBA_LOADED

```

#### LVARS0

```
LVARS0 = MBA_LVARS0

```

#### LVARS1

```
LVARS1 = MBA_LVARS1

```

#### NICE

```
NICE = MBA_NICE

```

#### NOFUNC

```
NOFUNC = MBA_NOFUNC

```

#### NUMADDR

```
NUMADDR = MBA_NUMADDR

```

#### PASSREGS

```
PASSREGS = MBA_PASSREGS

```

#### PATTERN

```
PATTERN = MBA_PATTERN

```

#### PRCDEFS

```
PRCDEFS = MBA_PRCDEFS

```

#### PREOPT

```
PREOPT = MBA_PREOPT

```

#### REFINE

```
REFINE = MBA_REFINE

```

#### RETFP

```
RETFP = MBA_RETFP

```

#### RETREF

```
RETREF = MBA_RETREF

```

#### SAVRST

```
SAVRST = MBA_SAVRST

```

#### SHORT

```
SHORT = MBA_SHORT

```

#### SPLINFO

```
SPLINFO = MBA_SPLINFO

```

#### THUNK

```
THUNK = MBA_THUNK

```

#### VALNUM

```
VALNUM = MBA_VALNUM

```

### MicroBlock

```
MicroBlock(
    raw: mblock_t,
    parent_mf: Optional[MicroBlockArray] = None,
)

```

Wrapper around an IDA `mblock_t` microcode basic block.

Supports iteration over instructions and navigation to successors/predecessors.

Methods:

- **`add_successor`** – Add a successor edge from this block to target.
- **`append_def_list`** – Append operand def-locations to an existing set.
- **`append_use_list`** – Append operand use-locations to an existing set.
- **`build_def_list`** – Build the def-list for an instruction in this block.
- **`build_lists`** – Build def-use lists and optionally eliminate dead instructions.
- **`build_operand_locations`** – Build the location set for a single operand in this block's context.
- **`build_use_list`** – Build the use-list for an instruction in this block.
- **`clear_block_flag`** – Clear one or more block flags.
- **`clear_predecessors`** – Remove all predecessor edges.
- **`clear_successors`** – Remove all successor edges.
- **`contains_instruction`** – True if insn belongs to this block's instruction list.
- **`find_def_backward`** – Find the nearest instruction that defines operand, searching backward.
- **`find_first_use`** – Find the first instruction after start that uses locations.
- **`find_redefinition`** – Find the first instruction after start that redefines locations.
- **`for_all_instructions`** – Visit all instructions in this block (including sub-instructions).
- **`for_all_operands`** – Visit all operands in this block (including sub-instruction operands).
- **`get_valranges`** – Compute the possible value range for an operand.
- **`insert_instruction`** – Insert a new instruction into this block.
- **`instructions`** – Iterate over all instructions in this block.
- **`is_rhs_redefined`** – Check if the right-hand side of insn is redefined in a range.
- **`make_nop`** – Convert an instruction to a NOP within this block.
- **`mark_lists_dirty`** – Invalidate the use-def lists for this block.
- **`optimize_block`** – Optimize this basic block.
- **`optimize_insn`** – Optimize a single instruction in the context of this block.
- **`optimize_useless_jump`** – Remove a useless jump at the end of this block.
- **`predecessors`** – Iterate over predecessor blocks.
- **`remove_instruction`** – Remove an instruction from this block.
- **`remove_successor`** – Remove a successor edge from this block to target.
- **`replace_instruction`** – Replace old_insn with new_insn, performing cleanup.
- **`replace_successor`** – Replace a successor edge: remove old_target, add new_target.
- **`request_propagation`** – Request value propagation for this block.
- **`set_block_flag`** – Set (OR) one or more block flags.
- **`successors`** – Iterate over successor blocks.
- **`trace_def_backward`** – Trace the definition chain of operand backward through mov instructions.

Attributes:

- **`block_flags`** (`MicroBlockFlags`) – Current block flags as a :class:MicroBlockFlags bit-field.
- **`block_type`** (`MicroBlockType`) – Block type as a :class:MicroBlockType enum.
- **`end_ea`** (`int`) – End effective address of this block.
- **`fall_through`** (`Optional[int]`) – Fall-through (not-taken) block serial, or None.
- **`first_regular_insn`** (`Optional[MicroInstruction]`) – First non-assertion instruction (wraps getf_reginsn()).
- **`head`** (`Optional[MicroInstruction]`) – First instruction in the block, or None if empty.
- **`index`** (`int`) – Block index (same as serial).
- **`instruction_count`** (`int`) – Number of real (non-NOP/non-assertion) instructions.
- **`is_branch`** (`bool`) – True if this block ends with a conditional branch.
- **`is_call_block`** (`bool`) – True if this block contains a call instruction.
- **`is_empty`** (`bool`) – True if this block has no instructions.
- **`is_simple_goto`** (`bool`) – True if this block contains only a goto instruction.
- **`jump_target`** (`Optional[int]`) – Target block serial of the tail jump, or None.
- **`mba`** (`MicroBlockArray`) – Parent :class:MicroBlockArray.
- **`predecessor_count`** (`int`) – Number of predecessor blocks.
- **`predecessor_serials`** (`List[int]`) – List of predecessor block serial numbers.
- **`raw_block`** (`mblock_t`) – Get the underlying mblock_t object.
- **`serial`** (`int`) – Block serial number.
- **`start_ea`** (`int`) – Start effective address of this block.
- **`successor_count`** (`int`) – Number of successor blocks.
- **`successor_serials`** (`List[int]`) – List of successor block serial numbers.
- **`tail`** (`Optional[MicroInstruction]`) – Last instruction in the block, or None if empty.

#### block_flags

```
block_flags: MicroBlockFlags

```

Current block flags as a :class:`MicroBlockFlags` bit-field.

#### block_type

```
block_type: MicroBlockType

```

Block type as a :class:`MicroBlockType` enum.

#### end_ea

```
end_ea: int

```

End effective address of this block.

#### fall_through

```
fall_through: Optional[int]

```

Fall-through (not-taken) block serial, or *None*.

Only meaningful for `TWO_WAY` blocks. In IDA's microcode the fall-through successor of a conditional branch is always the sequentially-next block (`serial + 1`).

#### first_regular_insn

```
first_regular_insn: Optional[MicroInstruction]

```

First non-assertion instruction (wraps `getf_reginsn()`).

#### head

```
head: Optional[MicroInstruction]

```

First instruction in the block, or *None* if empty.

#### index

```
index: int

```

Block index (same as serial).

#### instruction_count

```
instruction_count: int

```

Number of real (non-NOP/non-assertion) instructions.

#### is_branch

```
is_branch: bool

```

True if this block ends with a conditional branch.

#### is_call_block

```
is_call_block: bool

```

True if this block contains a call instruction.

#### is_empty

```
is_empty: bool

```

True if this block has no instructions.

#### is_simple_goto

```
is_simple_goto: bool

```

True if this block contains only a `goto` instruction.

Commonly used by deobfuscators to detect and simplify goto chains.

#### jump_target

```
jump_target: Optional[int]

```

Target block serial of the tail jump, or *None*.

- `TWO_WAY`: the taken-branch target from the conditional jump's `d` operand.
- `ONE_WAY` with `goto`: the goto target from `l`.
- `ONE_WAY` without `goto`: implicit fallthrough (`serial + 1`).
- Other block types: *None*.

#### mba

```
mba: MicroBlockArray

```

Parent :class:`MicroBlockArray`.

#### predecessor_count

```
predecessor_count: int

```

Number of predecessor blocks.

#### predecessor_serials

```
predecessor_serials: List[int]

```

List of predecessor block serial numbers.

#### raw_block

```
raw_block: mblock_t

```

Get the underlying `mblock_t` object.

#### serial

```
serial: int

```

Block serial number.

#### start_ea

```
start_ea: int

```

Start effective address of this block.

#### successor_count

```
successor_count: int

```

Number of successor blocks.

#### successor_serials

```
successor_serials: List[int]

```

List of successor block serial numbers.

#### tail

```
tail: Optional[MicroInstruction]

```

Last instruction in the block, or *None* if empty.

#### add_successor

```
add_successor(target: Any) -> None

```

Add a successor edge from this block to *target*.

Also adds this block to *target*'s predecessor set.

Parameters:

- **`target`** (`Any`) – A :class:MicroBlock or a block serial number.

#### append_def_list

```
append_def_list(
    target: MicroLocationSet,
    operand: MicroOperand,
    maymust: int = 0,
) -> None

```

Append operand def-locations to an existing set.

Parameters:

- **`target`** (`MicroLocationSet`) – Location set to append to.
- **`operand`** (`MicroOperand`) – The operand to analyze.
- **`maymust`** (`int`, default: `0` ) – MUST_ACCESS (0) or MAY_ACCESS (1).

#### append_use_list

```
append_use_list(
    target: MicroLocationSet,
    operand: MicroOperand,
    maymust: int = 0,
) -> None

```

Append operand use-locations to an existing set.

Unlike :meth:`build_use_list` which returns a fresh set, this appends to *target*, allowing incremental construction.

Parameters:

- **`target`** (`MicroLocationSet`) – Location set to append to.
- **`operand`** (`MicroOperand`) – The operand to analyze.
- **`maymust`** (`int`, default: `0` ) – MUST_ACCESS (0) or MAY_ACCESS (1).

#### build_def_list

```
build_def_list(
    insn: MicroInstruction, maymust: int = 0
) -> MicroLocationSet

```

Build the def-list for an instruction in this block.

Parameters:

- **`insn`** (`MicroInstruction`) – The instruction to analyze.
- **`maymust`** (`int`, default: `0` ) – MUST_ACCESS or MAY_ACCESS from ida_hexrays.

#### build_lists

```
build_lists(kill_deads: bool = False) -> int

```

Build def-use lists and optionally eliminate dead instructions.

Parameters:

- **`kill_deads`** (`bool`, default: `False` ) – If True, delete dead instructions.

Returns:

- `int` – Number of eliminated instructions.

#### build_operand_locations

```
build_operand_locations(
    operand: MicroOperand,
) -> MicroLocationSet

```

Build the location set for a single operand in this block's context.

Supports registers (`mop_r`), stack variables (`mop_S`), and local variables (`mop_l`). Returns an empty set for other operand types.

#### build_use_list

```
build_use_list(
    insn: MicroInstruction, maymust: int = 0
) -> MicroLocationSet

```

Build the use-list for an instruction in this block.

Parameters:

- **`insn`** (`MicroInstruction`) – The instruction to analyze.
- **`maymust`** (`int`, default: `0` ) – MUST_ACCESS or MAY_ACCESS from ida_hexrays.

#### clear_block_flag

```
clear_block_flag(flag: MicroBlockFlags) -> None

```

Clear one or more block flags.

#### clear_predecessors

```
clear_predecessors() -> None

```

Remove all predecessor edges.

Also removes this block from each predecessor's successor set.

#### clear_successors

```
clear_successors() -> None

```

Remove all successor edges.

Also removes this block from each successor's predecessor set.

#### contains_instruction

```
contains_instruction(insn: MicroInstruction) -> bool

```

True if *insn* belongs to this block's instruction list.

#### find_def_backward

```
find_def_backward(
    operand: MicroOperand,
    start: Optional[MicroInstruction] = None,
) -> Optional[MicroInstruction]

```

Find the nearest instruction that defines *operand*, searching backward.

Scans from the instruction *before* `start` toward the head of the block. If `start` is *None*, scanning begins at the tail.

Only register (`mop_r`), stack variable (`mop_S`), and local variable (`mop_l`) operands can be tracked.

Parameters:

- **`operand`** (`MicroOperand`) – The operand whose definition to search for.
- **`start`** (`Optional[MicroInstruction]`, default: `None` ) – Reference instruction (excluded from search). If None, the entire block is searched from the tail.

Returns:

- `Optional[MicroInstruction]` – The defining :class:MicroInstruction, or None if no
- `Optional[MicroInstruction]` – definition is found within this block.

#### find_first_use

```
find_first_use(
    locations: MicroLocationSet,
    start: MicroInstruction,
    end: Optional[MicroInstruction] = None,
) -> Optional[MicroInstruction]

```

Find the first instruction after *start* that uses *locations*.

.. warning:: *locations* is **modified** during the search: redefined locations are removed from the set. Pass a :meth:`copy` if you need to preserve the original.

Parameters:

- **`locations`** (`MicroLocationSet`) – The set of locations to search for.
- **`start`** (`MicroInstruction`) – Start searching from this instruction.
- **`end`** (`Optional[MicroInstruction]`, default: `None` ) – Stop searching at this instruction (exclusive). If None, searches to the end of the block.

#### find_redefinition

```
find_redefinition(
    locations: MicroLocationSet,
    start: MicroInstruction,
    end: Optional[MicroInstruction] = None,
) -> Optional[MicroInstruction]

```

Find the first instruction after *start* that redefines *locations*.

Parameters:

- **`locations`** (`MicroLocationSet`) – The set of locations to search for.
- **`start`** (`MicroInstruction`) – Start searching from this instruction.
- **`end`** (`Optional[MicroInstruction]`, default: `None` ) – Stop searching at this instruction (exclusive). If None, searches to the end of the block.

#### for_all_instructions

```
for_all_instructions(
    visitor: MicroInstructionVisitor,
) -> int

```

Visit all instructions in this block (including sub-instructions).

Parameters:

- **`visitor`** (`MicroInstructionVisitor`) – A :class:MicroInstructionVisitor.

Returns:

- `int` – Non-zero if the visitor stopped early.

#### for_all_operands

```
for_all_operands(visitor: MicroOperandVisitor) -> int

```

Visit all operands in this block (including sub-instruction operands).

Parameters:

- **`visitor`** (`MicroOperandVisitor`) – A :class:MicroOperandVisitor.

Returns:

- `int` – Non-zero if the visitor stopped early.

#### get_valranges

```
get_valranges(
    operand: MicroOperand,
    vrflags: int = 0,
    insn: Optional[MicroInstruction] = None,
) -> Optional[valrng_t]

```

Compute the possible value range for an operand.

When *insn* is `None`, computes ranges at the block level. When *insn* is given, computes ranges at that specific instruction.

Requires that value-range analysis has been performed (maturity `GLBOPT1` or higher).

Parameters:

- **`operand`** (`MicroOperand`) – The operand to query (typically a register or stack variable). A vivl_t is constructed from its underlying mop_t automatically.
- **`vrflags`** (`int`, default: `0` ) – Flags controlling the analysis (default 0).
- **`insn`** (`Optional[MicroInstruction]`, default: `None` ) – If given, compute the range at this instruction.

Returns:

- `Optional[valrng_t]` – A valrng_t with the result, or None if the range
- `Optional[valrng_t]` – could not be determined.

#### insert_instruction

```
insert_instruction(
    new_minsn: MicroInstruction,
    after: Optional[MicroInstruction] = None,
) -> None

```

Insert a new instruction into this block.

Parameters:

- **`new_minsn`** (`MicroInstruction`) – The instruction to insert.
- **`after`** (`Optional[MicroInstruction]`, default: `None` ) – Insert after this instruction. If None, insert at head.

#### instructions

```
instructions() -> Iterator[MicroInstruction]

```

Iterate over all instructions in this block.

#### is_rhs_redefined

```
is_rhs_redefined(
    insn: MicroInstruction,
    start: MicroInstruction,
    end: Optional[MicroInstruction] = None,
) -> bool

```

Check if the right-hand side of *insn* is redefined in a range.

Parameters:

- **`insn`** (`MicroInstruction`) – Instruction whose source operands to check.
- **`start`** (`MicroInstruction`) – Start of the range (top-level instruction).
- **`end`** (`Optional[MicroInstruction]`, default: `None` ) – End of the range (exclusive, top-level instruction). If None, checks to the end of the block.

#### make_nop

```
make_nop(insn: MicroInstruction) -> None

```

Convert an instruction to a NOP within this block.

#### mark_lists_dirty

```
mark_lists_dirty() -> None

```

Invalidate the use-def lists for this block.

Must be called after modifying instructions to keep the analysis state consistent.

#### optimize_block

```
optimize_block() -> int

```

Optimize this basic block.

Usually there is no need to call this explicitly because the decompiler will call it itself if an optimizer callback returns non-zero.

Returns:

- `int` – Number of changes made.

#### optimize_insn

```
optimize_insn(
    insn: MicroInstruction, optflags: int = 0
) -> int

```

Optimize a single instruction in the context of this block.

May modify other instructions in the block but will not destroy top-level instructions (converts them to NOPs instead).

Parameters:

- **`insn`** (`MicroInstruction`) – A top-level instruction in this block.
- **`optflags`** (`int`, default: `0` ) – Optimization flag bits.

Returns:

- `int` – Number of changes made.

#### optimize_useless_jump

```
optimize_useless_jump() -> int

```

Remove a useless jump at the end of this block.

Both conditional and unconditional jumps (and jtbl) are handled. Side effects are preserved when removing the jump.

Returns:

- `int` – Number of changes made.

#### predecessors

```
predecessors() -> Iterator[MicroBlock]

```

Iterate over predecessor blocks.

#### remove_instruction

```
remove_instruction(insn: MicroInstruction) -> None

```

Remove an instruction from this block.

#### remove_successor

```
remove_successor(target: Any) -> None

```

Remove a successor edge from this block to *target*.

Also removes this block from *target*'s predecessor set.

Parameters:

- **`target`** (`Any`) – A :class:MicroBlock or a block serial number.

#### replace_instruction

```
replace_instruction(
    old_insn: MicroInstruction, new_insn: MicroInstruction
) -> None

```

Replace *old_insn* with *new_insn*, performing cleanup.

Equivalent to the common deobfuscation idiom::

```
old.swap(new)
old.optimize_solo()
block.mark_lists_dirty()

```

Parameters:

- **`old_insn`** (`MicroInstruction`) – The instruction to replace (must be in this block).
- **`new_insn`** (`MicroInstruction`) – The replacement instruction.

Raises:

- `InvalidParameterError` – If old_insn is not found in this block.

#### replace_successor

```
replace_successor(old_target: Any, new_target: Any) -> None

```

Replace a successor edge: remove *old_target*, add *new_target*.

Also updates predecessor sets of both target blocks.

Parameters:

- **`old_target`** (`Any`) – A :class:MicroBlock or serial to disconnect.
- **`new_target`** (`Any`) – A :class:MicroBlock or serial to connect.

#### request_propagation

```
request_propagation() -> None

```

Request value propagation for this block.

#### set_block_flag

```
set_block_flag(flag: MicroBlockFlags) -> None

```

Set (OR) one or more block flags.

#### successors

```
successors() -> Iterator[MicroBlock]

```

Iterate over successor blocks.

#### trace_def_backward

```
trace_def_backward(
    operand: MicroOperand,
    start: Optional[MicroInstruction] = None,
    max_blocks: int = 64,
) -> List[MicroInstruction]

```

Trace the definition chain of *operand* backward through `mov` instructions.

Starting from *start* (or the tail), this method:

1. Searches backward for the instruction that defines *operand*.
1. If the defining instruction is a `mov`, records it and continues searching for the definition of the `mov`'s source.
1. Follows single-predecessor paths across block boundaries.
1. Stops when a non-`mov` definition is found, the source is a constant or non-trackable operand, or the search is exhausted.

Only register (`mop_r`) and stack variable (`mop_S`) operands are followed through `mov` chains. Local variables (`mop_l`) are not typically present at the maturity levels where this method is most useful.

Parameters:

- **`operand`** (`MicroOperand`) – The operand to trace.
- **`start`** (`Optional[MicroInstruction]`, default: `None` ) – Reference instruction (excluded from search). If None, the entire block is searched from the tail.
- **`max_blocks`** (`int`, default: `64` ) – Maximum number of predecessor blocks to follow (default 64).

Returns:

- `List[MicroInstruction]` – A list of :class:MicroInstruction forming the definition
- `List[MicroInstruction]` – chain, ordered from nearest to earliest. The last entry is
- `List[MicroInstruction]` – the ultimate defining instruction. Returns an empty list
- `List[MicroInstruction]` – if no definition is found.

Example::

```
# Find what value is ultimately moved into rax
for block in mf.blocks(skip_sentinels=True):
    for insn in block:
        if insn.l.is_register:
            chain = block.trace_def_backward(insn.l, start=insn)
            if chain:
                ultimate = chain[-1]
                print(f"{insn.l} defined by: {ultimate}")

```

### MicroBlockArray

```
MicroBlockArray(raw: mba_t, _owner: Any = None)

```

Wrapper around an IDA `mba_t` (micro block array).

An `mba_t` can represent a single function or an arbitrary address range. Supports iteration over blocks, traversal, and access to analysis primitives.

Methods:

- **`alloc_fictional_address`** – Allocate a fictional address for new instructions or variables.
- **`alloc_kernel_register`** – Allocate a kernel register.
- **`alloc_local_variables`** – Allocate local variables.
- **`analyze_calls`** – Analyze call instructions and determine calling conventions.
- **`blocks`** – Iterate over blocks.
- **`build_graph`** – Build (or rebuild) the block-level control flow graph.
- **`clear_mba_flag`** – Clear one or more MBA flags, leaving others unchanged.
- **`copy_block`** – Make a copy of a block and insert it at new_serial.
- **`create_helper_call`** – Create a call to a helper function.
- **`deserialize`** – Deserialize a microcode function from bytes.
- **`dump`** – Dump microcode to a file for debugging.
- **`dump_with_title`** – Dump microcode with a title and optional verification.
- **`find_instructions`** – Find instructions matching the given criteria.
- **`find_mop`** – Find a micro-operand by context, address, and location set.
- **`for_all_instructions`** – Visit all instructions (including sub-instructions) across all blocks.
- **`for_all_operands`** – Visit all operands across all blocks and sub-instructions.
- **`for_all_top_instructions`** – Visit all top-level instructions across all blocks.
- **`free_kernel_register`** – Free a previously allocated kernel register.
- **`get_graph`** – Get the wrapped :class:MicroGraph.
- **`insert_block`** – Insert a new block at the given index.
- **`instructions`** – Flat walk over all instructions.
- **`location_decompiler_to_ida`** – Convert a decompiler vdloc_t to an IDA argloc_t.
- **`location_ida_to_decompiler`** – Convert an IDA argloc_t to a decompiler vdloc_t.
- **`mark_chains_dirty`** – Invalidate the use-def chains for the entire function.
- **`merge_blocks`** – Merge blocks that form a linear flow.
- **`optimize_global`** – Optimize microcode globally.
- **`optimize_local`** – Run local optimization on all blocks.
- **`remove_block`** – Remove a block.
- **`remove_blocks`** – Remove a range of blocks by serial number.
- **`remove_empty_and_unreachable_blocks`** – Delete all empty and unreachable blocks.
- **`serialize`** – Serialize the microcode to bytes.
- **`set_maturity`** – Set the microcode maturity level.
- **`set_mba_flag`** – Set (OR) one or more MBA flags, leaving others unchanged.
- **`split_block`** – Split a block at the given instruction.
- **`stack_offset_decompiler_to_ida`** – Convert a decompiler stack offset to an IDA stack offset.
- **`stack_offset_ida_to_decompiler`** – Convert an IDA stack offset to a decompiler stack offset.
- **`to_text`** – Get text representation of the microcode.
- **`verify`** – Verify the microcode structure for consistency.

Attributes:

- **`argument_indices`** (`List[int]`) – Indices of function arguments in the local variable list.
- **`block_count`** (`int`) – Total number of blocks (including sentinels).
- **`entry_block`** (`MicroBlock`) – First block (index 0).
- **`entry_ea`** (`int`) – Entry effective address of the function.
- **`final_type`** (`tinfo_t`) – Return type of the function.
- **`frame_size`** (`int`) – Size of the local variables area in bytes.
- **`has_over_chains`** (`bool`) – True if overlapped-variable chains have been computed.
- **`incoming_args_offset`** (`int`) – Offset of the incoming arguments area.
- **`maturity`** (`MicroMaturity`) – Current maturity level.
- **`mba_flags`** (`MbaFlags`) – Current MBA flags as a :class:MbaFlags bit-field.
- **`raw_mba`** (`mba_t`) – Get the underlying mba_t object.
- **`retsize`** (`int`) – Size of the return address on the stack.
- **`return_variable_index`** (`int`) – Index of the return variable in the local variable list, or -1.
- **`stacksize`** (`int`) – Total stack size used by the function in bytes.
- **`temp_stack_size`** (`int`) – Size of the temporary stack area in bytes.
- **`vars`** (`MicroLocalVars`) – Local variables (available after MMAT_LVARS maturity).

#### argument_indices

```
argument_indices: List[int]

```

Indices of function arguments in the local variable list.

#### block_count

```
block_count: int

```

Total number of blocks (including sentinels).

#### entry_block

```
entry_block: MicroBlock

```

First block (index 0).

#### entry_ea

```
entry_ea: int

```

Entry effective address of the function.

#### final_type

```
final_type: tinfo_t

```

Return type of the function.

#### frame_size

```
frame_size: int

```

Size of the local variables area in bytes.

#### has_over_chains

```
has_over_chains: bool

```

True if overlapped-variable chains have been computed.

#### incoming_args_offset

```
incoming_args_offset: int

```

Offset of the incoming arguments area.

#### maturity

```
maturity: MicroMaturity

```

Current maturity level.

#### mba_flags

```
mba_flags: MbaFlags

```

Current MBA flags as a :class:`MbaFlags` bit-field.

#### raw_mba

```
raw_mba: mba_t

```

Get the underlying `mba_t` object.

#### retsize

```
retsize: int

```

Size of the return address on the stack.

#### return_variable_index

```
return_variable_index: int

```

Index of the return variable in the local variable list, or -1.

#### stacksize

```
stacksize: int

```

Total stack size used by the function in bytes.

#### temp_stack_size

```
temp_stack_size: int

```

Size of the temporary stack area in bytes.

#### vars

```
vars: MicroLocalVars

```

Local variables (available after `MMAT_LVARS` maturity).

#### alloc_fictional_address

```
alloc_fictional_address(real_ea: int = BADADDR) -> int

```

Allocate a fictional address for new instructions or variables.

Fictional addresses are unique addresses from an unallocated range, useful when creating new instructions where reusing an existing address would cause conflicts.

Parameters:

- **`real_ea`** (`int`, default: `BADADDR` ) – A real instruction address to associate with, or BADADDR.

Returns:

- `int` – A unique fictional address.

#### alloc_kernel_register

```
alloc_kernel_register(
    size: int, check_size: bool = True
) -> int

```

Allocate a kernel register.

Kernel registers are temporary registers that do not interfere with the processor's own registers.

Parameters:

- **`size`** (`int`) – Size of the register in bytes.
- **`check_size`** (`bool`, default: `True` ) – If True, only sizes matching a basic type are accepted.

Returns:

- `int` – Allocated micro-register number, or mr_none on failure.

#### alloc_local_variables

```
alloc_local_variables() -> None

```

Allocate local variables.

Must be called only immediately after :meth:`optimize_global`, with no modifications to the microcode. Converts registers, stack variables, and similar operands into `mop_l`. After this call the microcode reaches its final state.

#### analyze_calls

```
analyze_calls(
    flags: AnalyzeCallsFlags = AnalyzeCallsFlags(0),
) -> int

```

Analyze call instructions and determine calling conventions.

Parameters:

- **`flags`** (`AnalyzeCallsFlags`, default: `AnalyzeCallsFlags(0)` ) – Analysis flags (e.g. AnalyzeCallsFlags.GUESS).

Returns:

- `int` – Number of calls analyzed, or negative on failure.

#### blocks

```
blocks(
    skip_sentinels: bool = False,
) -> Iterator[MicroBlock]

```

Iterate over blocks.

Parameters:

- **`skip_sentinels`** (`bool`, default: `False` ) – If True, skip the entry block (index 0) and BLT_STOP blocks.

#### build_graph

```
build_graph() -> None

```

Build (or rebuild) the block-level control flow graph.

Must be called after heavy structural modifications (block insertion/removal, edge changes) before the microcode can be further analyzed or verified.

#### clear_mba_flag

```
clear_mba_flag(flag: MbaFlags) -> None

```

Clear one or more MBA flags, leaving others unchanged.

#### copy_block

```
copy_block(
    source: MicroBlock,
    new_serial: int,
    flags: CopyBlockFlags = FAST | MINREF,
) -> MicroBlock

```

Make a copy of a block and insert it at *new_serial*.

Parameters:

- **`source`** (`MicroBlock`) – The block to copy.
- **`new_serial`** (`int`) – Serial number where the copy will be inserted. Existing blocks at this index and above are shifted.
- **`flags`** (`CopyBlockFlags`, default: `FAST | MINREF` ) – Copy flags controlling reference updates and jump optimization. The default (FAST | MINREF) matches the IDA SDK default.

Returns:

- `MicroBlock` – The newly created :class:MicroBlock.

#### create_helper_call

```
create_helper_call(
    ea: int, helper_name: str
) -> MicroInstruction

```

Create a call to a helper function.

The returned instruction is detached (not yet in any block). The caller must hold a reference to this :class:`MicroBlockArray` while using the result.

#### deserialize

```
deserialize(data: bytes) -> MicroBlockArray

```

Deserialize a microcode function from bytes.

#### dump

```
dump() -> None

```

Dump microcode to a file for debugging.

The file is created in the directory pointed to by the `IDA_DUMPDIR` environment variable. Dump is only created when IDA is run under a debugger.

#### dump_with_title

```
dump_with_title(title: str, verify: bool = True) -> None

```

Dump microcode with a title and optional verification.

Parameters:

- **`title`** (`str`) – Title/header for the dump output.
- **`verify`** (`bool`, default: `True` ) – If True, verify microcode consistency before dumping.

#### find_instructions

```
find_instructions(
    opcode: Optional[MicroOpcode] = None,
    operand_type: Optional[MicroOperandType] = None,
) -> Iterator[MicroInstruction]

```

Find instructions matching the given criteria.

Parameters:

- **`opcode`** (`Optional[MicroOpcode]`, default: `None` ) – Filter by opcode.
- **`operand_type`** (`Optional[MicroOperandType]`, default: `None` ) – Filter by operand type (any of l, r, d).

#### find_mop

```
find_mop(
    ctx: Any,
    ea: int,
    is_dest: bool,
    locations: MicroLocationSet,
) -> Optional[MicroOperand]

```

Find a micro-operand by context, address, and location set.

Note: The returned operand does not carry a parent instruction reference because `find_mop` does not expose which instruction the operand belongs to. The caller must hold a reference to this :class:`MicroBlockArray` while using the result.

#### for_all_instructions

```
for_all_instructions(
    visitor: MicroInstructionVisitor,
) -> int

```

Visit all instructions (including sub-instructions) across all blocks.

Parameters:

- **`visitor`** (`MicroInstructionVisitor`) – A :class:MicroInstructionVisitor.

Returns:

- `int` – Non-zero if the visitor stopped early.

#### for_all_operands

```
for_all_operands(visitor: MicroOperandVisitor) -> int

```

Visit all operands across all blocks and sub-instructions.

Parameters:

- **`visitor`** (`MicroOperandVisitor`) – A :class:MicroOperandVisitor.

Returns:

- `int` – Non-zero if the visitor stopped early.

#### for_all_top_instructions

```
for_all_top_instructions(
    visitor: MicroInstructionVisitor,
) -> int

```

Visit all top-level instructions across all blocks.

Parameters:

- **`visitor`** (`MicroInstructionVisitor`) – A :class:MicroInstructionVisitor.

Returns:

- `int` – Non-zero if the visitor stopped early.

#### free_kernel_register

```
free_kernel_register(reg: int, size: int) -> None

```

Free a previously allocated kernel register.

Parameters:

- **`reg`** (`int`) – The micro-register number returned by :meth:alloc_kernel_register.
- **`size`** (`int`) – Size of the register in bytes (must match allocation).

#### get_graph

```
get_graph() -> MicroGraph

```

Get the wrapped :class:`MicroGraph`.

#### insert_block

```
insert_block(index: int) -> MicroBlock

```

Insert a new block at the given index.

#### instructions

```
instructions(
    skip_sentinels: bool = False,
) -> Iterator[MicroInstruction]

```

Flat walk over all instructions.

Parameters:

- **`skip_sentinels`** (`bool`, default: `False` ) – If True, skip sentinel blocks.

#### location_decompiler_to_ida

```
location_decompiler_to_ida(
    loc: Any, width: int, spd: Optional[int] = None
) -> Any

```

Convert a decompiler `vdloc_t` to an IDA `argloc_t`.

Parameters:

- **`loc`** (`Any`) – A vdloc_t location.
- **`width`** (`int`) – Size in bytes.
- **`spd`** (`Optional[int]`, default: `None` ) – Optional stack pointer delta.

Returns:

- `Any` – An argloc_t location.

#### location_ida_to_decompiler

```
location_ida_to_decompiler(loc: Any, width: int) -> Any

```

Convert an IDA `argloc_t` to a decompiler `vdloc_t`.

Parameters:

- **`loc`** (`Any`) – An argloc_t location.
- **`width`** (`int`) – Size in bytes.

Returns:

- `Any` – A vdloc_t location.

#### mark_chains_dirty

```
mark_chains_dirty() -> None

```

Invalidate the use-def chains for the entire function.

Call after structural changes (block insertion/removal, edge changes) that affect global data-flow.

#### merge_blocks

```
merge_blocks() -> bool

```

Merge blocks that form a linear flow.

Combines consecutive blocks where one falls through to the next with no other predecessors. Also calls :meth:`remove_empty_and_unreachable_blocks` internally.

Returns:

- `bool` – True if any blocks were merged.

#### optimize_global

```
optimize_global() -> MicroError

```

Optimize microcode globally.

Applies various optimization methods until a fixed point is reached, then preallocates local variables unless the requested maturity forbids it.

Returns:

- `MicroError` – Error code (:attr:MicroError.OK on success).

#### optimize_local

```
optimize_local(locopt_level: int = 0) -> int

```

Run local optimization on all blocks.

This triggers a local optimization pass (constant folding, dead-code elimination, etc.) and is typically called after structural modifications.

Parameters:

- **`locopt_level`** (`int`, default: `0` ) – Optimization level (0 is standard).

Returns:

- `int` – Number of changes made.

#### remove_block

```
remove_block(block: MicroBlock) -> bool

```

Remove a block.

Returns:

- `bool` – True if at least one other block became empty or unreachable.

#### remove_blocks

```
remove_blocks(start: int, end: int) -> bool

```

Remove a range of blocks by serial number.

Parameters:

- **`start`** (`int`) – First block serial to remove (inclusive).
- **`end`** (`int`) – Last block serial to remove (exclusive).

Returns:

- `bool` – True if at least one other block became empty or unreachable.

#### remove_empty_and_unreachable_blocks

```
remove_empty_and_unreachable_blocks() -> bool

```

Delete all empty and unreachable blocks.

Blocks may become empty or unreachable after control-flow modifications (e.g. deobfuscation, unflattening). This method cleans them up in a single pass.

Returns:

- `bool` – True if any blocks were removed.

#### serialize

```
serialize() -> bytes

```

Serialize the microcode to bytes.

#### set_maturity

```
set_maturity(maturity: MicroMaturity) -> None

```

Set the microcode maturity level.

#### set_mba_flag

```
set_mba_flag(flag: MbaFlags) -> None

```

Set (OR) one or more MBA flags, leaving others unchanged.

#### split_block

```
split_block(
    block: MicroBlock, start_insn: MicroInstruction
) -> MicroBlock

```

Split a block at the given instruction.

A new block is inserted after *block*, and all instructions from *start_insn* to the end of *block* are moved to the new block.

Parameters:

- **`block`** (`MicroBlock`) – Block to split.
- **`start_insn`** (`MicroInstruction`) – First instruction to move to the new block.

Returns:

- `MicroBlock` – The newly created :class:MicroBlock.

#### stack_offset_decompiler_to_ida

```
stack_offset_decompiler_to_ida(vd_offset: int) -> int

```

Convert a decompiler stack offset to an IDA stack offset.

Parameters:

- **`vd_offset`** (`int`) – Decompiler-style stack offset.

Returns:

- `int` – IDA-style stack offset.

#### stack_offset_ida_to_decompiler

```
stack_offset_ida_to_decompiler(ida_offset: int) -> int

```

Convert an IDA stack offset to a decompiler stack offset.

Parameters:

- **`ida_offset`** (`int`) – IDA-style stack offset.

Returns:

- `int` – Decompiler-style stack offset.

#### to_text

```
to_text(remove_tags: bool = True) -> List[str]

```

Get text representation of the microcode.

Prints each non-sentinel block individually. When *remove_tags* is True (default), IDA color tags are stripped and empty lines and whitespace are removed. When False, raw block output (including color tags and blank lines) is returned as-is.

#### verify

```
verify(always: bool = False) -> None

```

Verify the microcode structure for consistency.

If any inconsistency is discovered, an internal error will be generated. It is strongly recommended to call this before returning control to the decompiler from callbacks that modify the microcode.

Parameters:

- **`always`** (`bool`, default: `False` ) – If False, the check is only performed when IDA runs under a debugger. If True, always verify.

### MicroBlockFlags

Bases: `IntFlag`

Block flags corresponding to MBL\_\* constants.

Attributes:

- **`BACKPROP`** –
- **`CALL`** –
- **`COMB`** –
- **`DEAD`** –
- **`DMT64`** –
- **`DSLOT`** –
- **`FAKE`** –
- **`GOTO`** –
- **`INCONST`** –
- **`LIST`** –
- **`NONFAKE`** –
- **`NORET`** –
- **`PRIV`** –
- **`PROP`** –
- **`PUSH`** –
- **`TCAL`** –
- **`VALRANGES`** –

#### BACKPROP

```
BACKPROP = MBL_BACKPROP

```

#### CALL

```
CALL = MBL_CALL

```

#### COMB

```
COMB = MBL_COMB

```

#### DEAD

```
DEAD = MBL_DEAD

```

#### DMT64

```
DMT64 = MBL_DMT64

```

#### DSLOT

```
DSLOT = MBL_DSLOT

```

#### FAKE

```
FAKE = MBL_FAKE

```

#### GOTO

```
GOTO = MBL_GOTO

```

#### INCONST

```
INCONST = MBL_INCONST

```

#### LIST

```
LIST = MBL_LIST

```

#### NONFAKE

```
NONFAKE = MBL_NONFAKE

```

#### NORET

```
NORET = MBL_NORET

```

#### PRIV

```
PRIV = MBL_PRIV

```

#### PROP

```
PROP = MBL_PROP

```

#### PUSH

```
PUSH = MBL_PUSH

```

#### TCAL

```
TCAL = MBL_TCAL

```

#### VALRANGES

```
VALRANGES = MBL_VALRANGES

```

### MicroBlockOptimizer

Bases: `optblock_t`

Per-block optimizer. Override :meth:`optimize`.

Use :meth:`install` to register and :meth:`uninstall` to remove::

```
class MyOpt(MicroBlockOptimizer):
    def optimize(self, block):
        ...
        return 1  # modified

opt = MyOpt()
opt.install()

```

Methods:

- **`func`** –
- **`install`** – Register this optimizer with the decompiler.
- **`optimize`** – Override this. Return 1 if modified, 0 otherwise.
- **`uninstall`** – Unregister this optimizer from the decompiler.

#### func

```
func(blk: Any) -> int

```

#### install

```
install() -> None

```

Register this optimizer with the decompiler.

#### optimize

```
optimize(block: MicroBlock) -> int

```

Override this. Return 1 if modified, 0 otherwise.

#### uninstall

```
uninstall() -> None

```

Unregister this optimizer from the decompiler.

### MicroBlockType

Bases: `IntEnum`

Basic block types corresponding to BLT\_\* constants.

Attributes:

- **`EXTERNAL`** –
- **`NONE`** –
- **`N_WAY`** –
- **`ONE_WAY`** –
- **`STOP`** –
- **`TWO_WAY`** –
- **`ZERO_WAY`** –

#### EXTERNAL

```
EXTERNAL = BLT_XTRN

```

#### NONE

```
NONE = BLT_NONE

```

#### N_WAY

```
N_WAY = BLT_NWAY

```

#### ONE_WAY

```
ONE_WAY = BLT_1WAY

```

#### STOP

```
STOP = BLT_STOP

```

#### TWO_WAY

```
TWO_WAY = BLT_2WAY

```

#### ZERO_WAY

```
ZERO_WAY = BLT_0WAY

```

### MicroCallArg

```
MicroCallArg(
    raw: mcallarg_t,
    _parent_call: Optional[MicroCallInfo] = None,
)

```

Wrapper around an IDA `mcallarg_t` call argument.

Each argument has a type, a location (argloc), an optional name, and inherits all `mop_t` fields (the argument value as a micro-operand).

Methods:

- **`make_number`** – Set this argument to a numeric constant.
- **`make_string`** – Set this argument to a string constant.
- **`set_reg_arg`** – Configure this argument as a register argument.
- **`to_text`** – Get text representation of this argument.

Attributes:

- **`argloc`** (`argloc_t`) – Argument location.
- **`ea`** (`ea_t`) – Source address of the argument.
- **`flags`** (`int`) – Argument flags.
- **`name`** (`str`) – Argument name (may be empty).
- **`operand`** (`MicroOperand`) – The argument value as a :class:MicroOperand.
- **`raw_arg`** (`mcallarg_t`) – Get the underlying mcallarg_t object.
- **`size`** (`int`) – Argument size in bytes.
- **`type`** (`tinfo_t`) – Argument type.

#### argloc

```
argloc: argloc_t

```

Argument location.

#### ea

```
ea: ea_t

```

Source address of the argument.

#### flags

```
flags: int

```

Argument flags.

#### name

```
name: str

```

Argument name (may be empty).

#### operand

```
operand: MicroOperand

```

The argument value as a :class:`MicroOperand`.

`mcallarg_t` inherits from `mop_t`, so the argument itself is a micro-operand.

#### raw_arg

```
raw_arg: mcallarg_t

```

Get the underlying `mcallarg_t` object.

#### size

```
size: int

```

Argument size in bytes.

#### type

```
type: tinfo_t

```

Argument type.

#### make_number

```
make_number(value: int, nbytes: int) -> None

```

Set this argument to a numeric constant.

Parameters:

- **`value`** (`int`) – The numeric value.
- **`nbytes`** (`int`) – Size of the number in bytes.

#### make_string

```
make_string(
    value: str, type_info: Optional[tinfo_t] = None
) -> None

```

Set this argument to a string constant.

Sets the operand type to `mop_str`, assigns the string value, and configures type and size. By default the type is set to `const char *` (`STI_PCCHAR`); pass *type_info* to override.

Parameters:

- **`value`** (`str`) – The string value.
- **`type_info`** (`Optional[tinfo_t]`, default: `None` ) – Optional type override. Defaults to const char \*.

#### set_reg_arg

```
set_reg_arg(
    mreg: int, arg_size: int, type_info: tinfo_t
) -> None

```

Configure this argument as a register argument.

Parameters:

- **`mreg`** (`int`) – Micro-register number.
- **`arg_size`** (`int`) – Size in bytes.
- **`type_info`** (`tinfo_t`) – Argument type.

#### to_text

```
to_text() -> str

```

Get text representation of this argument.

### MicroCallInfo

```
MicroCallInfo(
    raw: mcallinfo_t,
    _parent_op: Optional[MicroOperand] = None,
)

```

Wrapper around an IDA `mcallinfo_t` call information structure.

Provides access to the callee, arguments, calling convention, return type, and spoiled/dead registers.

Use :meth:`create` to construct a new call info from scratch, or obtain one from :attr:`MicroOperand.call_info`.

Methods:

- **`add_arg`** – Append a new empty argument and return it for configuration.
- **`add_string_argument`** – Append a const char * string argument to the call.
- **`clear_args`** – Remove all arguments.
- **`create`** – Create a new, empty :class:MicroCallInfo.
- **`get_type`** – Get the full function type.
- **`set_type`** – Set the full function type from a tinfo_t.
- **`to_text`** – Get text representation of this call info.

Attributes:

- **`arg_count`** (`int`) – Number of arguments.
- **`args`** (`List[MicroCallArg]`) – List of call arguments as :class:MicroCallArg wrappers.
- **`call_stack_pointer_delta`** (`int`) – Stack pointer delta at the call point.
- **`callee`** (`ea_t`) – Callee address (BADADDR if indirect/unknown).
- **`calling_convention`** (`int`) – Calling convention (CM_CC\_\* constant).
- **`dead_regs`** (`MicroLocationSet`) – Dead registers set.
- **`fixed_arg_count`** (`int`) – Number of solid (non-variadic) arguments.
- **`flags`** (`CallInfoFlags`) – Call flags as a :class:CallInfoFlags bit-field.
- **`is_noret`** (`bool`) – True if the FCI_NORET flag is set.
- **`is_pure`** (`bool`) – True if the FCI_PURE flag is set (no side effects).
- **`is_vararg`** (`bool`) – True if this is a variadic call.
- **`pass_regs`** (`MicroLocationSet`) – Pass-through registers set.
- **`raw_call_info`** (`mcallinfo_t`) – Get the underlying mcallinfo_t object.
- **`return_argloc`** (`argloc_t`) – Return value location.
- **`return_regs`** (`MicroLocationSet`) – Return registers set.
- **`return_type`** (`tinfo_t`) – Return type.
- **`role`** (`FunctionRole`) – Function role as a :class:FunctionRole enum.
- **`spoiled`** (`MicroLocationSet`) – Spoiled register set.
- **`stack_args_top`** (`int`) – Top of stack arguments area.
- **`visible_memory`** (`ivlset_t`) – Memory visible to the call (ivlset_t).

#### arg_count

```
arg_count: int

```

Number of arguments.

#### args

```
args: List[MicroCallArg]

```

List of call arguments as :class:`MicroCallArg` wrappers.

#### call_stack_pointer_delta

```
call_stack_pointer_delta: int

```

Stack pointer delta at the call point.

#### callee

```
callee: ea_t

```

Callee address (`BADADDR` if indirect/unknown).

#### calling_convention

```
calling_convention: int

```

Calling convention (`CM_CC_*` constant).

#### dead_regs

```
dead_regs: MicroLocationSet

```

Dead registers set.

#### fixed_arg_count

```
fixed_arg_count: int

```

Number of solid (non-variadic) arguments.

#### flags

```
flags: CallInfoFlags

```

Call flags as a :class:`CallInfoFlags` bit-field.

#### is_noret

```
is_noret: bool

```

True if the `FCI_NORET` flag is set.

#### is_pure

```
is_pure: bool

```

True if the `FCI_PURE` flag is set (no side effects).

#### is_vararg

```
is_vararg: bool

```

True if this is a variadic call.

#### pass_regs

```
pass_regs: MicroLocationSet

```

Pass-through registers set.

#### raw_call_info

```
raw_call_info: mcallinfo_t

```

Get the underlying `mcallinfo_t` object.

#### return_argloc

```
return_argloc: argloc_t

```

Return value location.

#### return_regs

```
return_regs: MicroLocationSet

```

Return registers set.

#### return_type

```
return_type: tinfo_t

```

Return type.

#### role

```
role: FunctionRole

```

Function role as a :class:`FunctionRole` enum.

#### spoiled

```
spoiled: MicroLocationSet

```

Spoiled register set.

#### stack_args_top

```
stack_args_top: int

```

Top of stack arguments area.

#### visible_memory

```
visible_memory: ivlset_t

```

Memory visible to the call (`ivlset_t`).

#### add_arg

```
add_arg() -> MicroCallArg

```

Append a new empty argument and return it for configuration.

The returned :class:`MicroCallArg` can be configured with :meth:`~MicroCallArg.make_string`, :meth:`~MicroCallArg.make_number`, property setters, etc.

.. warning:: Adding further arguments may reallocate the internal vector, invalidating previously returned :class:`MicroCallArg` wrappers. Configure each argument before adding the next one, or re-fetch via :attr:`args` after all arguments have been added.

#### add_string_argument

```
add_string_argument(text: str) -> MicroCallArg

```

Append a `const char *` string argument to the call.

Convenience equivalent to `add_arg()` followed by :meth:`MicroCallArg.make_string`.

Parameters:

- **`text`** (`str`) – The string value for the argument.

Returns:

- `MicroCallArg` – The newly created argument wrapper.

#### clear_args

```
clear_args() -> None

```

Remove all arguments.

#### create

```
create(
    callee: ea_t = BADADDR, solid_args: int = 0
) -> MicroCallInfo

```

Create a new, empty :class:`MicroCallInfo`.

Parameters:

- **`callee`** (`ea_t`, default: `BADADDR` ) – Address of the called function (BADADDR if unknown).
- **`solid_args`** (`int`, default: `0` ) – Number of solid (non-variadic) arguments.

#### get_type

```
get_type() -> tinfo_t

```

Get the full function type.

#### set_type

```
set_type(type_info: tinfo_t) -> bool

```

Set the full function type from a `tinfo_t`.

Returns `True` on success.

#### to_text

```
to_text() -> str

```

Get text representation of this call info.

### MicroError

Bases: `IntEnum`

Microcode error/return codes corresponding to MERR\_\* constants.

Attributes:

- **`BADARCH`** –
- **`BADBLK`** –
- **`BADCALL`** –
- **`BADFRAME`** –
- **`BADIDB`** –
- **`BADRANGES`** –
- **`BADSP`** –
- **`BITNESS`** –
- **`BLOCK`** –
- **`BUSY`** –
- **`CANCELED`** –
- **`CLOUD`** –
- **`COMPLEX`** –
- **`DSLOT`** –
- **`EMULATOR`** –
- **`EXCEPTION`** –
- **`EXTERN`** –
- **`FARPTR`** –
- **`FUNCSIZE`** –
- **`HUGESTACK`** –
- **`INSN`** –
- **`INTERR`** –
- **`LICENSE`** –
- **`LOOP`** –
- **`LVARS`** –
- **`MEM`** –
- **`OK`** –
- **`ONLY32`** –
- **`ONLY64`** –
- **`OVERLAP`** –
- **`PARTINIT`** –
- **`PROLOG`** –
- **`RECDEPTH`** –
- **`REDO`** –
- **`SIZEOF`** –
- **`STOP`** –
- **`SWITCH`** –
- **`UNKTYPE`** –

#### BADARCH

```
BADARCH = MERR_BADARCH

```

#### BADBLK

```
BADBLK = MERR_BADBLK

```

#### BADCALL

```
BADCALL = MERR_BADCALL

```

#### BADFRAME

```
BADFRAME = MERR_BADFRAME

```

#### BADIDB

```
BADIDB = MERR_BADIDB

```

#### BADRANGES

```
BADRANGES = MERR_BADRANGES

```

#### BADSP

```
BADSP = MERR_BADSP

```

#### BITNESS

```
BITNESS = MERR_BITNESS

```

#### BLOCK

```
BLOCK = MERR_BLOCK

```

#### BUSY

```
BUSY = MERR_BUSY

```

#### CANCELED

```
CANCELED = MERR_CANCELED

```

#### CLOUD

```
CLOUD = MERR_CLOUD

```

#### COMPLEX

```
COMPLEX = MERR_COMPLEX

```

#### DSLOT

```
DSLOT = MERR_DSLOT

```

#### EMULATOR

```
EMULATOR = _since_ida('9.2', ida_hexrays, 'MERR_EMULATOR')

```

#### EXCEPTION

```
EXCEPTION = MERR_EXCEPTION

```

#### EXTERN

```
EXTERN = MERR_EXTERN

```

#### FARPTR

```
FARPTR = MERR_FARPTR

```

#### FUNCSIZE

```
FUNCSIZE = MERR_FUNCSIZE

```

#### HUGESTACK

```
HUGESTACK = MERR_HUGESTACK

```

#### INSN

```
INSN = MERR_INSN

```

#### INTERR

```
INTERR = MERR_INTERR

```

#### LICENSE

```
LICENSE = MERR_LICENSE

```

#### LOOP

```
LOOP = MERR_LOOP

```

#### LVARS

```
LVARS = MERR_LVARS

```

#### MEM

```
MEM = MERR_MEM

```

#### OK

```
OK = MERR_OK

```

#### ONLY32

```
ONLY32 = MERR_ONLY32

```

#### ONLY64

```
ONLY64 = MERR_ONLY64

```

#### OVERLAP

```
OVERLAP = MERR_OVERLAP

```

#### PARTINIT

```
PARTINIT = MERR_PARTINIT

```

#### PROLOG

```
PROLOG = MERR_PROLOG

```

#### RECDEPTH

```
RECDEPTH = MERR_RECDEPTH

```

#### REDO

```
REDO = MERR_REDO

```

#### SIZEOF

```
SIZEOF = MERR_SIZEOF

```

#### STOP

```
STOP = MERR_STOP

```

#### SWITCH

```
SWITCH = MERR_SWITCH

```

#### UNKTYPE

```
UNKTYPE = MERR_UNKTYPE

```

### MicroGraph

```
MicroGraph(
    raw: Any, _parent_mf: Optional[MicroBlockArray] = None
)

```

Wrapper around an IDA `mbl_graph_t` block-level control flow graph.

Provides iteration and use-def chain access.

Methods:

- **`get_def_use_chains`** – Get def-use chains (returns raw graph_chains_t).
- **`get_use_def_chains`** – Get use-def chains (returns raw graph_chains_t).
- **`is_redefined_globally`** – Check if locations are redefined globally between two points.
- **`is_used_globally`** – Check if locations are used globally between two points.

Attributes:

- **`raw_graph`** (`Any`) – Get the underlying mbl_graph_t object.

#### raw_graph

```
raw_graph: Any

```

Get the underlying `mbl_graph_t` object.

#### get_def_use_chains

```
get_def_use_chains(gctype: int) -> Any

```

Get def-use chains (returns raw `graph_chains_t`).

Parameters:

- **`gctype`** (`int`) – Chain type, e.g. ida_hexrays.GC_REGS_AND_STKVARS.

#### get_use_def_chains

```
get_use_def_chains(gctype: int) -> Any

```

Get use-def chains (returns raw `graph_chains_t`).

Parameters:

- **`gctype`** (`int`) – Chain type, e.g. ida_hexrays.GC_REGS_AND_STKVARS.

#### is_redefined_globally

```
is_redefined_globally(
    locations: MicroLocationSet,
    block1: int,
    block2: int,
    insn1: MicroInstruction,
    insn2: MicroInstruction,
    maymust: int = 0,
) -> bool

```

Check if locations are redefined globally between two points.

Parameters:

- **`locations`** (`MicroLocationSet`) – Location set to check.
- **`block1`** (`int`) – First block serial.
- **`block2`** (`int`) – Second block serial.
- **`insn1`** (`MicroInstruction`) – First instruction.
- **`insn2`** (`MicroInstruction`) – Second instruction.
- **`maymust`** (`int`, default: `0` ) – MUST_ACCESS (0) or MAY_ACCESS (1).

#### is_used_globally

```
is_used_globally(
    locations: MicroLocationSet,
    block1: int,
    block2: int,
    insn1: MicroInstruction,
    insn2: MicroInstruction,
    maymust: int = 0,
) -> bool

```

Check if locations are used globally between two points.

Parameters:

- **`locations`** (`MicroLocationSet`) – Location set to check.
- **`block1`** (`int`) – First block serial.
- **`block2`** (`int`) – Second block serial.
- **`insn1`** (`MicroInstruction`) – First instruction.
- **`insn2`** (`MicroInstruction`) – Second instruction.
- **`maymust`** (`int`, default: `0` ) – MUST_ACCESS (0) or MAY_ACCESS (1).

### MicroInstruction

```
MicroInstruction(
    raw: minsn_t, parent_block: Optional[MicroBlock] = None
)

```

Wrapper around an IDA `minsn_t` microcode instruction.

Provides Pythonic access to opcode, operands, and traversal.

Use :meth:`create` to build new instructions::

```
insn = MicroInstruction.create(
    ea=0x401000,
    opcode=MicroOpcode.MOV,
    left=MicroOperand.reg(mreg, 4),
    dest=MicroOperand.number(0, 4),
)

```

Methods:

- **`clr_assert`** – Clear the assertion flag.
- **`clr_combinable`** – Clear the combinable flag.
- **`clr_combined`** – Clear the combined flag.
- **`clr_floating_point_insn`** – Clear the floating-point instruction flag.
- **`clr_ignore_low_source`** – Clear the ignore-low-source flag.
- **`clr_multimov`** – Clear the multi-move flag.
- **`clr_noret_icall`** – Clear the non-returning indirect call flag.
- **`clr_propagatable`** – Clear the propagatable flag.
- **`clr_tailcall`** – Clear the tail call flag.
- **`contains_call`** – True if this instruction (or any sub-instruction) contains a call.
- **`create`** – Create a new microcode instruction from scratch.
- **`deserialize`** – Deserialize an instruction from bytes.
- **`equals`** – Structural comparison with fine-grained control.
- **`find_call`** – Find the first call in this instruction tree.
- **`find_numeric_operand`** – Find the numeric operand (l or r) of this instruction.
- **`find_opcode`** – Find the first sub-instruction with the given opcode.
- **`find_sub_instruction_operand`** – Find a sub-instruction operand (l or r) with the given opcode.
- **`for_all_instructions`** – Recursively visit all sub-instructions in this instruction tree.
- **`for_all_operands`** – Recursively visit all operands in this instruction tree.
- **`has_side_effects`** – True if this instruction (or any nested sub-instruction) may cause side effects.
- **`is_call`** – True if this is a call instruction (m_call or m_icall).
- **`is_commutative`** – True if this instruction's opcode is commutative.
- **`is_conditional_jump`** – True if this is a conditional jump (jnz..jle, jcnd).
- **`is_floating_point`** – True if this is a floating-point instruction.
- **`is_flow`** – True if this is any control-flow instruction (jump, call, ret).
- **`is_helper`** – True if this is a helper call with the specified name.
- **`is_jump`** – True if this is any jump/branch (including goto, jtbl, ijmp).
- **`is_mov`** – True if this is a m_mov instruction.
- **`is_noret_call`** – True if this is a non-returning call.
- **`is_set`** – True if this is a set-condition instruction (setnz..setle).
- **`make_nop`** – Convert this instruction to a NOP.
- **`operands`** – Iterate over non-empty operands (l, r, d).
- **`optimize_solo`** – Run single-instruction optimization on this instruction.
- **`replace_with`** – Replace this instruction with new_insn, performing cleanup.
- **`serialize`** – IDA 9.4+
- **`set_address`** – Change the effective address of this instruction and all sub-instructions.
- **`set_assert`** – Mark this instruction as an assertion.
- **`set_cleaning_pop`** – Mark this pop as a cleaning pop.
- **`set_combinable`** – Mark this instruction as combinable.
- **`set_combined`** – Mark this instruction as combined.
- **`set_extended_store`** – Mark stx as using sign-extended offset.
- **`set_farcall`** – Mark this as a far call.
- **`set_floating_point_insn`** – Mark this as a floating-point instruction.
- **`set_ignore_low_source`** – Set the ignore-low-source flag.
- **`set_inverted_jump`** – Mark this conditional jump as inverted.
- **`set_memory_barrier`** – Mark this as a memory barrier.
- **`set_multimov`** – Mark this as a multi-move instruction.
- **`set_noret_icall`** – Mark this indirect call as non-returning.
- **`set_optional`** – Mark this instruction as optional.
- **`set_persistent`** – Mark this instruction as persistent (must not be deleted).
- **`set_tailcall`** – Mark this call as a tail call.
- **`set_wild_match`** – Enable wild-matching for this instruction.
- **`swap`** – Swap this instruction with another.
- **`to_text`** – Get text representation of this instruction.

Attributes:

- **`block`** (`Optional[MicroBlock]`) – Parent block, if known.
- **`d`** (`MicroOperand`) – Destination operand.
- **`dest`** (`MicroOperand`) – Destination operand (alias for d).
- **`ea`** (`int`) – Effective address of this instruction.
- **`is_alloca`** (`bool`) – True if this is an alloca call.
- **`is_assert`** (`bool`) – True if this is an assertion instruction.
- **`is_bswap`** (`bool`) – True if this is a byte-swap instruction.
- **`is_cleaning_pop`** (`bool`) – True if this pop instruction cleans up the stack.
- **`is_combinable`** (`bool`) – True if this instruction is combinable.
- **`is_combined`** (`bool`) – True if this instruction was combined from several.
- **`is_extended_store`** (`bool`) – True if this stx uses a sign-extended offset.
- **`is_farcall`** (`bool`) – True if this is a far call.
- **`is_floating_point_insn`** (`bool`) – True if this is a floating-point instruction (flag-based).
- **`is_ignore_low_source`** (`bool`) – True if low part of the source operand should be ignored.
- **`is_inverted_jump`** (`bool`) – True if this conditional jump has been inverted.
- **`is_like_move`** (`bool`) – True if this is structurally similar to a mov instruction.
- **`is_memcpy`** (`bool`) – True if this is a memcpy operation.
- **`is_memory_barrier`** (`bool`) – True if this is a memory barrier instruction.
- **`is_memset`** (`bool`) – True if this is a memset operation.
- **`is_multimov`** (`bool`) – True if this is a multi-move (struct/memcpy).
- **`is_optional`** (`bool`) – True if this instruction is optional (may be dropped).
- **`is_persistent`** (`bool`) – True if this instruction must not be deleted.
- **`is_propagatable`** (`bool`) – True if this instruction is propagatable.
- **`is_readflags`** (`bool`) – True if this instruction reads flags.
- **`is_tailcall`** (`bool`) – True if this call has been recognized as a tail call.
- **`is_top_level`** (`bool`) – True if this instruction lives directly in a block's list.
- **`is_unknown_call`** (`bool`) – True if this is a call to an unknown target.
- **`is_wild_match`** (`bool`) – True if wild-matching is enabled for this instruction.
- **`l`** (`MicroOperand`) – Left operand.
- **`left`** (`MicroOperand`) – Left operand (alias for l).
- **`modifies_dest`** (`bool`) – True if this instruction writes to its d operand.
- **`next`** (`Optional[MicroInstruction]`) – Next instruction in the block, or None.
- **`opcode`** (`MicroOpcode`) – Instruction opcode as a :class:MicroOpcode enum.
- **`prev`** (`Optional[MicroInstruction]`) – Previous instruction in the block, or None.
- **`r`** (`MicroOperand`) – Right operand.
- **`raw_instruction`** (`minsn_t`) – Get the underlying minsn_t object.
- **`right`** (`MicroOperand`) – Right operand (alias for r).

#### block

```
block: Optional[MicroBlock]

```

Parent block, if known.

#### d

```
d: MicroOperand

```

Destination operand.

#### dest

```
dest: MicroOperand

```

Destination operand (alias for `d`).

#### ea

```
ea: int

```

Effective address of this instruction.

#### is_alloca

```
is_alloca: bool

```

True if this is an `alloca` call.

#### is_assert

```
is_assert: bool

```

True if this is an assertion instruction.

#### is_bswap

```
is_bswap: bool

```

True if this is a byte-swap instruction.

#### is_cleaning_pop

```
is_cleaning_pop: bool

```

True if this pop instruction cleans up the stack.

#### is_combinable

```
is_combinable: bool

```

True if this instruction is combinable.

#### is_combined

```
is_combined: bool

```

True if this instruction was combined from several.

#### is_extended_store

```
is_extended_store: bool

```

True if this stx uses a sign-extended offset.

#### is_farcall

```
is_farcall: bool

```

True if this is a far call.

#### is_floating_point_insn

```
is_floating_point_insn: bool

```

True if this is a floating-point instruction (flag-based).

#### is_ignore_low_source

```
is_ignore_low_source: bool

```

True if low part of the source operand should be ignored.

#### is_inverted_jump

```
is_inverted_jump: bool

```

True if this conditional jump has been inverted.

#### is_like_move

```
is_like_move: bool

```

True if this is structurally similar to a `mov` instruction.

#### is_memcpy

```
is_memcpy: bool

```

True if this is a memcpy operation.

#### is_memory_barrier

```
is_memory_barrier: bool

```

True if this is a memory barrier instruction.

#### is_memset

```
is_memset: bool

```

True if this is a memset operation.

#### is_multimov

```
is_multimov: bool

```

True if this is a multi-move (struct/memcpy).

#### is_optional

```
is_optional: bool

```

True if this instruction is optional (may be dropped).

#### is_persistent

```
is_persistent: bool

```

True if this instruction must not be deleted.

#### is_propagatable

```
is_propagatable: bool

```

True if this instruction is propagatable.

#### is_readflags

```
is_readflags: bool

```

True if this instruction reads flags.

#### is_tailcall

```
is_tailcall: bool

```

True if this call has been recognized as a tail call.

#### is_top_level

```
is_top_level: bool

```

True if this instruction lives directly in a block's list.

False for sub-instructions nested inside an operand (`mop_d`).

#### is_unknown_call

```
is_unknown_call: bool

```

True if this is a call to an unknown target.

#### is_wild_match

```
is_wild_match: bool

```

True if wild-matching is enabled for this instruction.

#### l

```
l: MicroOperand

```

Left operand.

#### left

```
left: MicroOperand

```

Left operand (alias for `l`).

#### modifies_dest

```
modifies_dest: bool

```

True if this instruction writes to its `d` operand.

Some instructions (e.g. `stx`) do not modify `d`.

#### next

```
next: Optional[MicroInstruction]

```

Next instruction in the block, or *None*.

#### opcode

```
opcode: MicroOpcode

```

Instruction opcode as a :class:`MicroOpcode` enum.

#### prev

```
prev: Optional[MicroInstruction]

```

Previous instruction in the block, or *None*.

#### r

```
r: MicroOperand

```

Right operand.

#### raw_instruction

```
raw_instruction: minsn_t

```

Get the underlying `minsn_t` object.

#### right

```
right: MicroOperand

```

Right operand (alias for `r`).

#### clr_assert

```
clr_assert() -> None

```

Clear the assertion flag.

#### clr_combinable

```
clr_combinable() -> None

```

Clear the combinable flag.

#### clr_combined

```
clr_combined() -> None

```

Clear the combined flag.

#### clr_floating_point_insn

```
clr_floating_point_insn() -> None

```

Clear the floating-point instruction flag.

#### clr_ignore_low_source

```
clr_ignore_low_source() -> None

```

Clear the ignore-low-source flag.

#### clr_multimov

```
clr_multimov() -> None

```

Clear the multi-move flag.

#### clr_noret_icall

```
clr_noret_icall() -> None

```

Clear the non-returning indirect call flag.

#### clr_propagatable

```
clr_propagatable() -> None

```

Clear the propagatable flag.

#### clr_tailcall

```
clr_tailcall() -> None

```

Clear the tail call flag.

#### contains_call

```
contains_call(with_helpers: bool = False) -> bool

```

True if this instruction (or any sub-instruction) contains a call.

Parameters:

- **`with_helpers`** (`bool`, default: `False` ) – Also consider helper calls.

#### create

```
create(
    ea: int,
    opcode: MicroOpcode,
    left: Optional[MicroOperand] = None,
    right: Optional[MicroOperand] = None,
    dest: Optional[MicroOperand] = None,
) -> MicroInstruction

```

Create a new microcode instruction from scratch.

Parameters:

- **`ea`** (`int`) – Effective address for the instruction.
- **`opcode`** (`MicroOpcode`) – The microcode opcode.
- **`left`** (`Optional[MicroOperand]`, default: `None` ) – Left operand (l).
- **`right`** (`Optional[MicroOperand]`, default: `None` ) – Right operand (r).
- **`dest`** (`Optional[MicroOperand]`, default: `None` ) – Destination operand (d).

Returns:

- `MicroInstruction` – A new :class:MicroInstruction.

#### deserialize

```
deserialize(
    data: bytes, format_version: int
) -> MicroInstruction

```

Deserialize an instruction from bytes.

Parameters:

- **`data`** (`bytes`) – Serialized instruction bytes (as returned by :meth:serialize).
- **`format_version`** (`int`) – The format version returned by :meth:serialize.

Returns:

- `MicroInstruction` – A new :class:MicroInstruction.

#### equals

```
equals(other: MicroInstruction, eqflags: int = 0) -> bool

```

Structural comparison with fine-grained control.

Parameters:

- **`other`** (`MicroInstruction`) – Instruction to compare with.
- **`eqflags`** (`int`, default: `0` ) – Combination of EQ\_\* flags from ida_hexrays: EQ_IGNSIZE (1) — ignore operand sizes, EQ_IGNCODE (2) — ignore opcode, EQ_CMPDEST (4) — compare destination operand, EQ_OPTINSN (8) — optimizer comparison mode.

#### find_call

```
find_call(
    with_helpers: bool = False,
) -> Optional[MicroInstruction]

```

Find the first call in this instruction tree.

#### find_numeric_operand

```
find_numeric_operand() -> Optional[
    Tuple[MicroOperand, MicroOperand]
]

```

Find the numeric operand (`l` or `r`) of this instruction.

Returns:

- `Optional[Tuple[MicroOperand, MicroOperand]]` – A tuple (num_operand, other_operand) where num_operand
- `Optional[Tuple[MicroOperand, MicroOperand]]` – is the numeric one and other_operand is the remaining one,
- `Optional[Tuple[MicroOperand, MicroOperand]]` – or None if neither operand is a number.

#### find_opcode

```
find_opcode(
    mcode: MicroOpcode,
) -> Optional[MicroInstruction]

```

Find the first sub-instruction with the given opcode.

#### find_sub_instruction_operand

```
find_sub_instruction_operand(
    opcode: MicroOpcode = NOP,
) -> Optional[Tuple[MicroInstruction, MicroOperand]]

```

Find a sub-instruction operand (`l` or `r`) with the given opcode.

Parameters:

- **`opcode`** (`MicroOpcode`, default: `NOP` ) – Opcode to search for. NOP (default) matches any.

Returns:

- `Optional[Tuple[MicroInstruction, MicroOperand]]` – A tuple (sub_insn, other_operand) where sub_insn is
- `Optional[Tuple[MicroInstruction, MicroOperand]]` – the nested instruction and other_operand is the remaining
- `Optional[Tuple[MicroInstruction, MicroOperand]]` – operand, or None if no matching sub-instruction is found.

#### for_all_instructions

```
for_all_instructions(
    visitor: MicroInstructionVisitor,
) -> int

```

Recursively visit all sub-instructions in this instruction tree.

Parameters:

- **`visitor`** (`MicroInstructionVisitor`) – A :class:MicroInstructionVisitor whose visit method will be called for each nested instruction.

Returns:

- `int` – Non-zero if the visitor stopped early.

#### for_all_operands

```
for_all_operands(visitor: MicroOperandVisitor) -> int

```

Recursively visit all operands in this instruction tree.

Parameters:

- **`visitor`** (`MicroOperandVisitor`) – A :class:MicroOperandVisitor whose visit method will be called for each operand.

Returns:

- `int` – Non-zero if the visitor stopped early.

#### has_side_effects

```
has_side_effects(
    include_ldx_and_divs: bool = False,
) -> bool

```

True if this instruction (or any nested sub-instruction) may cause side effects.

Parameters:

- **`include_ldx_and_divs`** (`bool`, default: `False` ) – Also treat ldx/div/mod as having side effects.

#### is_call

```
is_call() -> bool

```

True if this is a call instruction (`m_call` or `m_icall`).

#### is_commutative

```
is_commutative() -> bool

```

True if this instruction's opcode is commutative.

#### is_conditional_jump

```
is_conditional_jump() -> bool

```

True if this is a conditional jump (`jnz`..`jle`, `jcnd`).

#### is_floating_point

```
is_floating_point() -> bool

```

True if this is a floating-point instruction.

#### is_flow

```
is_flow() -> bool

```

True if this is any control-flow instruction (jump, call, `ret`).

#### is_helper

```
is_helper(name: str) -> bool

```

True if this is a helper call with the specified name.

Parameters:

- **`name`** (`str`) – Helper function name to check (e.g. "memcpy").

#### is_jump

```
is_jump() -> bool

```

True if this is any jump/branch (including `goto`, `jtbl`, `ijmp`).

#### is_mov

```
is_mov() -> bool

```

True if this is a `m_mov` instruction.

#### is_noret_call

```
is_noret_call(flags: int = 0) -> bool

```

True if this is a non-returning call.

Parameters:

- **`flags`** (`int`, default: `0` ) – Combination of NORET\_\* bits.

#### is_set

```
is_set() -> bool

```

True if this is a set-condition instruction (`setnz`..`setle`).

#### make_nop

```
make_nop() -> None

```

Convert this instruction to a NOP.

Erases all data except the prev/next links. In most cases prefer :meth:`MicroBlock.make_nop` which also marks the block's use-def lists as dirty.

#### operands

```
operands() -> Iterator[MicroOperand]

```

Iterate over non-empty operands (l, r, d).

#### optimize_solo

```
optimize_solo() -> int

```

Run single-instruction optimization on this instruction.

Returns:

- `int` – Number of changes made (non-zero means the instruction was optimized).

#### replace_with

```
replace_with(new_insn: MicroInstruction) -> None

```

Replace this instruction with *new_insn*, performing cleanup.

Equivalent to the common deobfuscation idiom::

```
insn.swap(new_insn)
insn.optimize_solo()
block.mark_lists_dirty()

```

The parent block must be known (i.e. this instruction must have been obtained from a :class:`MicroBlock`).

Raises:

- `DecompilerError` – If the parent block is not known.

#### serialize

```
serialize() -> Tuple[int, bytes]

```

*IDA 9.4+*

Serialize this instruction to bytes.

Returns:

- `int` – A tuple (format_version, data) where format_version is
- `bytes` – the serialization format used and data is the serialized bytes.

#### set_address

```
set_address(ea: int) -> None

```

Change the effective address of this instruction and all sub-instructions.

#### set_assert

```
set_assert() -> None

```

Mark this instruction as an assertion.

#### set_cleaning_pop

```
set_cleaning_pop() -> None

```

Mark this pop as a cleaning pop.

#### set_combinable

```
set_combinable() -> None

```

Mark this instruction as combinable.

#### set_combined

```
set_combined() -> None

```

Mark this instruction as combined.

#### set_extended_store

```
set_extended_store() -> None

```

Mark stx as using sign-extended offset.

#### set_farcall

```
set_farcall() -> None

```

Mark this as a far call.

#### set_floating_point_insn

```
set_floating_point_insn() -> None

```

Mark this as a floating-point instruction.

#### set_ignore_low_source

```
set_ignore_low_source() -> None

```

Set the ignore-low-source flag.

#### set_inverted_jump

```
set_inverted_jump() -> None

```

Mark this conditional jump as inverted.

#### set_memory_barrier

```
set_memory_barrier() -> None

```

Mark this as a memory barrier.

#### set_multimov

```
set_multimov() -> None

```

Mark this as a multi-move instruction.

#### set_noret_icall

```
set_noret_icall() -> None

```

Mark this indirect call as non-returning.

#### set_optional

```
set_optional() -> None

```

Mark this instruction as optional.

#### set_persistent

```
set_persistent() -> None

```

Mark this instruction as persistent (must not be deleted).

#### set_tailcall

```
set_tailcall() -> None

```

Mark this call as a tail call.

#### set_wild_match

```
set_wild_match() -> None

```

Enable wild-matching for this instruction.

#### swap

```
swap(other: MicroInstruction) -> None

```

Swap this instruction with another.

#### to_text

```
to_text(remove_tags: bool = True) -> str

```

Get text representation of this instruction.

### MicroInstructionOptimizer

Bases: `optinsn_t`

Per-instruction optimizer. Override :meth:`optimize`.

Use :meth:`install` to register and :meth:`uninstall` to remove::

```
class MyOpt(MicroInstructionOptimizer):
    def optimize(self, block, insn, optflags):
        ...
        return 1  # number of changes

opt = MyOpt()
opt.install()

```

Methods:

- **`func`** –
- **`install`** – Register this optimizer with the decompiler.
- **`optimize`** – Override this. Return number of changes made.
- **`uninstall`** – Unregister this optimizer from the decompiler.

#### func

```
func(blk: Any, ins: Any, optflags: int = 0) -> int

```

#### install

```
install() -> None

```

Register this optimizer with the decompiler.

#### optimize

```
optimize(
    block: MicroBlock, insn: MicroInstruction, optflags: int
) -> int

```

Override this. Return number of changes made.

#### uninstall

```
uninstall() -> None

```

Unregister this optimizer from the decompiler.

### MicroInstructionVisitor

```
MicroInstructionVisitor()

```

Bases: `minsn_visitor_t`

Visitor that delivers :class:`MicroInstruction` wrappers.

Override :meth:`visit` instead of `visit_minsn()`.

Methods:

- **`visit`** – Override this. Return 0 to continue, non-zero to stop.
- **`visit_minsn`** –

#### visit

```
visit(insn: MicroInstruction) -> int

```

Override this. Return 0 to continue, non-zero to stop.

#### visit_minsn

```
visit_minsn() -> int

```

### MicroLocalVar

```
MicroLocalVar(
    raw: lvar_t,
    _parent_vars: Optional[MicroLocalVars] = None,
)

```

Wrapper around an IDA `lvar_t` local variable.

Provides access to the variable's name, type, location, and flags.

Methods:

- **`accepts_type`** – Check if the variable accepts the given type.
- **`is_dummy_arg`** – True if this is a dummy argument.
- **`is_register_variable`** – True if this variable is in a register.
- **`is_scattered`** – True if this variable is scattered across locations.
- **`is_stack_variable`** – True if this variable is on the stack.
- **`is_thisarg`** – True if this is the this pointer argument.
- **`set_final_type`** – Set the final variable type (no further propagation).
- **`set_type`** – Set the variable type.
- **`set_user_comment`** – Set a user-defined comment for this variable.
- **`set_user_name`** – Set a user-defined name for this variable.

Attributes:

- **`comment`** (`str`) – Variable comment (may be empty).
- **`definition_address`** (`ea_t`) – Address where this variable is first defined.
- **`definition_block`** (`int`) – Block index where this variable is first defined.
- **`divisor`** (`int`) – Variable divisor (for division optimization).
- **`has_nice_name`** (`bool`) – True if the variable has a meaningful name.
- **`has_user_info`** (`bool`) – True if the user has set any custom info.
- **`has_user_name`** (`bool`) – True if the user has set a custom name.
- **`has_user_type`** (`bool`) – True if the user has set a custom type.
- **`is_arg`** (`bool`) – True if this is a function argument.
- **`is_fake`** (`bool`) – True if this is a fake variable.
- **`is_floating`** (`bool`) – True if this is a floating-point variable.
- **`is_overlapped`** (`bool`) – True if this variable overlaps with another.
- **`is_result`** (`bool`) – True if this is the function return variable.
- **`is_spoiled`** (`bool`) – True if this variable is spoiled.
- **`is_typed`** (`bool`) – True if this variable has a type assigned.
- **`is_used`** (`bool`) – True if this variable is used in the function.
- **`location`** (`vdloc_t`) – Variable location (register, stack, or scattered).
- **`name`** (`str`) – Variable name.
- **`raw_var`** (`lvar_t`) – Get the underlying lvar_t object.
- **`type_info`** (`tinfo_t`) – Variable type information.
- **`width`** (`int`) – Variable width in bytes.

#### comment

```
comment: str

```

Variable comment (may be empty).

#### definition_address

```
definition_address: ea_t

```

Address where this variable is first defined.

#### definition_block

```
definition_block: int

```

Block index where this variable is first defined.

#### divisor

```
divisor: int

```

Variable divisor (for division optimization).

#### has_nice_name

```
has_nice_name: bool

```

True if the variable has a meaningful name.

#### has_user_info

```
has_user_info: bool

```

True if the user has set any custom info.

#### has_user_name

```
has_user_name: bool

```

True if the user has set a custom name.

#### has_user_type

```
has_user_type: bool

```

True if the user has set a custom type.

#### is_arg

```
is_arg: bool

```

True if this is a function argument.

#### is_fake

```
is_fake: bool

```

True if this is a fake variable.

#### is_floating

```
is_floating: bool

```

True if this is a floating-point variable.

#### is_overlapped

```
is_overlapped: bool

```

True if this variable overlaps with another.

#### is_result

```
is_result: bool

```

True if this is the function return variable.

#### is_spoiled

```
is_spoiled: bool

```

True if this variable is spoiled.

#### is_typed

```
is_typed: bool

```

True if this variable has a type assigned.

#### is_used

```
is_used: bool

```

True if this variable is used in the function.

#### location

```
location: vdloc_t

```

Variable location (register, stack, or scattered).

#### name

```
name: str

```

Variable name.

#### raw_var

```
raw_var: lvar_t

```

Get the underlying `lvar_t` object.

#### type_info

```
type_info: tinfo_t

```

Variable type information.

#### width

```
width: int

```

Variable width in bytes.

#### accepts_type

```
accepts_type(tif: tinfo_t) -> bool

```

Check if the variable accepts the given type.

Parameters:

- **`tif`** (`tinfo_t`) – The type to check.

Returns:

- `bool` – True if the type is compatible.

#### is_dummy_arg

```
is_dummy_arg() -> bool

```

True if this is a dummy argument.

#### is_register_variable

```
is_register_variable() -> bool

```

True if this variable is in a register.

#### is_scattered

```
is_scattered() -> bool

```

True if this variable is scattered across locations.

#### is_stack_variable

```
is_stack_variable() -> bool

```

True if this variable is on the stack.

#### is_thisarg

```
is_thisarg() -> bool

```

True if this is the `this` pointer argument.

#### set_final_type

```
set_final_type(tif: tinfo_t) -> None

```

Set the final variable type (no further propagation).

The underlying `lvar_t.set_final_lvar_type()` returns `void`, so callers cannot check success; the type is applied unconditionally.

Parameters:

- **`tif`** (`tinfo_t`) – The new type to assign.

#### set_type

```
set_type(tif: tinfo_t) -> bool

```

Set the variable type.

To persist the change to the database, call :meth:`PseudocodeFunction.save_local_variable_info` with `save_type=True`.

Parameters:

- **`tif`** (`tinfo_t`) – The new type to assign.

Returns:

- `bool` – True if the type was accepted.

#### set_user_comment

```
set_user_comment(comment: str) -> None

```

Set a user-defined comment for this variable.

The comment is stored in the underlying `lvar_t` object. To persist changes to the database, call :meth:`PseudocodeFunction.save_local_variable_info` with `save_comment=True` after modifying.

Parameters:

- **`comment`** (`str`) – Comment text to assign to this variable.

#### set_user_name

```
set_user_name(name: str) -> None

```

Set a user-defined name for this variable.

### MicroLocalVars

```
MicroLocalVars(raw: lvars_t, mba: MicroBlockArray)

```

Wrapper around an IDA `lvars_t` local variable list.

Supports iteration, indexing, and lookup by name or location.

Methods:

- **`find_by_name`** – Find a variable by name.
- **`find_lvar`** – Find a variable by its location and width.
- **`find_stkvar`** – Find a stack variable by its stack offset and width.

Attributes:

- **`arguments`** (`List[MicroLocalVar]`) – List of variables that are function arguments.
- **`raw_lvars`** (`lvars_t`) – Get the underlying lvars_t object.

#### arguments

```
arguments: List[MicroLocalVar]

```

List of variables that are function arguments.

#### raw_lvars

```
raw_lvars: lvars_t

```

Get the underlying `lvars_t` object.

#### find_by_name

```
find_by_name(name: str) -> Optional[MicroLocalVar]

```

Find a variable by name.

Note: IDAPython `lvars_t` has no name-based lookup, so this performs a linear scan.

Parameters:

- **`name`** (`str`) – Variable name to search for.

Returns:

- **`The`** ( `Optional[MicroLocalVar]` ) – class:MicroLocalVar, or None if not found.

#### find_lvar

```
find_lvar(
    location: vdloc_t, width: int
) -> Optional[MicroLocalVar]

```

Find a variable by its location and width.

Parameters:

- **`location`** (`vdloc_t`) – Variable location (vdloc_t).
- **`width`** (`int`) – Variable width in bytes.

Returns:

- **`The`** ( `Optional[MicroLocalVar]` ) – class:MicroLocalVar, or None if not found.

#### find_stkvar

```
find_stkvar(
    spoff: int, width: int
) -> Optional[MicroLocalVar]

```

Find a stack variable by its stack offset and width.

Parameters:

- **`spoff`** (`int`) – Stack offset.
- **`width`** (`int`) – Variable width in bytes.

Returns:

- **`The`** ( `Optional[MicroLocalVar]` ) – class:MicroLocalVar, or None if not found.

### MicroLocationSet

```
MicroLocationSet(raw: Optional[mlist_t] = None)

```

Wrapper around an IDA `mlist_t` set of memory/register locations.

Supports Pythonic set operations for use-def analysis::

```
use_set = block.build_use_list(insn)
def_set = block.build_def_list(insn)
if search_set.has_common(use_set):  # any overlap?
    results.append(insn.ea)
search_set -= def_set          # subtract

```

Methods:

- **`add`** – Union this set with other in-place.
- **`add_memory`** – Add a memory range to the set.
- **`add_register`** – Add a micro-register range to the set.
- **`clear`** – Remove all locations from this set.
- **`copy`** – Return a shallow copy of this location set.
- **`has_all_register`** – True if the entire register range is in the set.
- **`has_any_register`** – True if any part of the register range is in the set.
- **`has_common`** – True if this set has any locations in common with other.
- **`has_register`** – True if the given micro-register is in the set.
- **`issubset`** – True if all locations in this set are also in other.
- **`issuperset`** – True if this set contains all locations from other.
- **`subtract`** – Subtract other from this set in-place.
- **`subtract_register`** – Remove a micro-register range from the set.
- **`to_text`** – Get text representation of this location set.

Attributes:

- **`count`** (`int`) – Number of individual locations in the set.
- **`has_memory`** (`bool`) – True if the set contains any memory locations.
- **`raw_mlist`** (`mlist_t`) – Get the underlying mlist_t object.

#### count

```
count: int

```

Number of individual locations in the set.

#### has_memory

```
has_memory: bool

```

True if the set contains any memory locations.

#### raw_mlist

```
raw_mlist: mlist_t

```

Get the underlying `mlist_t` object.

#### add

```
add(other: MicroLocationSet) -> None

```

Union this set with *other* in-place.

#### add_memory

```
add_memory(ea: int, size: int) -> bool

```

Add a memory range to the set.

Parameters:

- **`ea`** (`int`) – Memory address.
- **`size`** (`int`) – Size in bytes.

Returns:

- `bool` – True if the set changed.

#### add_register

```
add_register(mreg: int, size: int) -> bool

```

Add a micro-register range to the set.

Parameters:

- **`mreg`** (`int`) – Micro-register number.
- **`size`** (`int`) – Size in bytes.

Returns:

- `bool` – True if the set changed.

#### clear

```
clear() -> None

```

Remove all locations from this set.

#### copy

```
copy() -> MicroLocationSet

```

Return a shallow copy of this location set.

#### has_all_register

```
has_all_register(mreg: int, size: int) -> bool

```

True if the *entire* register range is in the set.

Parameters:

- **`mreg`** (`int`) – Micro-register number.
- **`size`** (`int`) – Size in bytes.

#### has_any_register

```
has_any_register(mreg: int, size: int) -> bool

```

True if *any* part of the register range is in the set.

Parameters:

- **`mreg`** (`int`) – Micro-register number.
- **`size`** (`int`) – Size in bytes.

#### has_common

```
has_common(other: MicroLocationSet) -> bool

```

True if this set has any locations in common with *other*.

#### has_register

```
has_register(mreg: int) -> bool

```

True if the given micro-register is in the set.

Parameters:

- **`mreg`** (`int`) – Micro-register number.

#### issubset

```
issubset(other: MicroLocationSet) -> bool

```

True if all locations in this set are also in *other*.

#### issuperset

```
issuperset(other: MicroLocationSet) -> bool

```

True if this set contains all locations from *other*.

#### subtract

```
subtract(other: MicroLocationSet) -> None

```

Subtract *other* from this set in-place.

#### subtract_register

```
subtract_register(mreg: int, size: int) -> bool

```

Remove a micro-register range from the set.

Parameters:

- **`mreg`** (`int`) – Micro-register number.
- **`size`** (`int`) – Size in bytes.

Returns:

- `bool` – True if the set changed.

#### to_text

```
to_text() -> str

```

Get text representation of this location set.

### MicroMaturity

Bases: `IntEnum`

Microcode maturity levels corresponding to MMAT\_\* constants.

Attributes:

- **`CALLS`** –
- **`GENERATED`** –
- **`GLBOPT1`** –
- **`GLBOPT2`** –
- **`GLBOPT3`** –
- **`LOCOPT`** –
- **`LVARS`** –
- **`PREOPTIMIZED`** –
- **`ZERO`** –

#### CALLS

```
CALLS = MMAT_CALLS

```

#### GENERATED

```
GENERATED = MMAT_GENERATED

```

#### GLBOPT1

```
GLBOPT1 = MMAT_GLBOPT1

```

#### GLBOPT2

```
GLBOPT2 = MMAT_GLBOPT2

```

#### GLBOPT3

```
GLBOPT3 = MMAT_GLBOPT3

```

#### LOCOPT

```
LOCOPT = MMAT_LOCOPT

```

#### LVARS

```
LVARS = MMAT_LVARS

```

#### PREOPTIMIZED

```
PREOPTIMIZED = MMAT_PREOPTIMIZED

```

#### ZERO

```
ZERO = MMAT_ZERO

```

### MicroOpcode

Bases: `IntEnum`

Microcode instruction opcodes corresponding to m\_\* constants.

Attributes:

- **`ADD`** –
- **`AND`** –
- **`BNOT`** –
- **`CALL`** –
- **`CFADD`** –
- **`CFSHL`** –
- **`CFSHR`** –
- **`EXT`** –
- **`F2F`** –
- **`F2I`** –
- **`F2U`** –
- **`FADD`** –
- **`FDIV`** –
- **`FMUL`** –
- **`FNEG`** –
- **`FSUB`** –
- **`GOTO`** –
- **`HIGH`** –
- **`I2F`** –
- **`ICALL`** –
- **`IJMP`** –
- **`JA`** –
- **`JAE`** –
- **`JB`** –
- **`JBE`** –
- **`JCND`** –
- **`JG`** –
- **`JGE`** –
- **`JL`** –
- **`JLE`** –
- **`JNZ`** –
- **`JTBL`** –
- **`JZ`** –
- **`LDC`** –
- **`LDX`** –
- **`LNOT`** –
- **`LOW`** –
- **`MOV`** –
- **`MUL`** –
- **`NEG`** –
- **`NOP`** –
- **`OFADD`** –
- **`OR`** –
- **`POP`** –
- **`PUSH`** –
- **`RET`** –
- **`SAR`** –
- **`SDIV`** –
- **`SETA`** –
- **`SETAE`** –
- **`SETB`** –
- **`SETBE`** –
- **`SETG`** –
- **`SETGE`** –
- **`SETL`** –
- **`SETLE`** –
- **`SETNZ`** –
- **`SETO`** –
- **`SETP`** –
- **`SETS`** –
- **`SETZ`** –
- **`SHL`** –
- **`SHR`** –
- **`SMOD`** –
- **`STX`** –
- **`SUB`** –
- **`U2F`** –
- **`UDIV`** –
- **`UMOD`** –
- **`UND`** –
- **`XDS`** –
- **`XDU`** –
- **`XOR`** –
- **`is_addsub`** (`bool`) – True for addition/subtraction opcodes (add, sub).
- **`is_arithmetic`** (`bool`) – True for integer arithmetic opcodes.
- **`is_bitwise`** (`bool`) – True for bitwise opcodes (or, and, xor, shl, shr, sar).
- **`is_call`** (`bool`) – True for call opcodes (call, icall).
- **`is_commutative`** (`bool`) – True for commutative opcodes.
- **`is_conditional_jump`** (`bool`) – True for conditional jump opcodes (jnz through jle, plus jcnd).
- **`is_convertible_to_jump`** (`bool`) – True if this set-condition opcode has a corresponding jump opcode.
- **`is_convertible_to_set`** (`bool`) – True if this jump opcode has a corresponding set-condition opcode.
- **`is_floating_point`** (`bool`) – True for floating-point opcodes (f2i through fdiv).
- **`is_flow`** (`bool`) – True for any control-flow opcode (jumps, calls, ret).
- **`is_jump`** (`bool`) – True for any jump/branch opcode including goto, jtbl, and ijmp.
- **`is_propagatable`** (`bool`) – True if this opcode may appear in a sub-instruction (nested mop_d).
- **`is_set`** (`bool`) – True for set-condition opcodes (setnz through setle).
- **`is_shift`** (`bool`) – True for shift opcodes (shl, shr, sar).
- **`is_unary`** (`bool`) – True for unary opcodes (neg, lnot, bnot, fneg).
- **`is_xdsu`** (`bool`) – True for sign/zero extension opcodes (xds, xdu).

#### ADD

```
ADD = m_add

```

#### AND

```
AND = m_and

```

#### BNOT

```
BNOT = m_bnot

```

#### CALL

```
CALL = m_call

```

#### CFADD

```
CFADD = m_cfadd

```

#### CFSHL

```
CFSHL = m_cfshl

```

#### CFSHR

```
CFSHR = m_cfshr

```

#### EXT

```
EXT = m_ext

```

#### F2F

```
F2F = m_f2f

```

#### F2I

```
F2I = m_f2i

```

#### F2U

```
F2U = m_f2u

```

#### FADD

```
FADD = m_fadd

```

#### FDIV

```
FDIV = m_fdiv

```

#### FMUL

```
FMUL = m_fmul

```

#### FNEG

```
FNEG = m_fneg

```

#### FSUB

```
FSUB = m_fsub

```

#### GOTO

```
GOTO = m_goto

```

#### HIGH

```
HIGH = m_high

```

#### I2F

```
I2F = m_i2f

```

#### ICALL

```
ICALL = m_icall

```

#### IJMP

```
IJMP = m_ijmp

```

#### JA

```
JA = m_ja

```

#### JAE

```
JAE = m_jae

```

#### JB

```
JB = m_jb

```

#### JBE

```
JBE = m_jbe

```

#### JCND

```
JCND = m_jcnd

```

#### JG

```
JG = m_jg

```

#### JGE

```
JGE = m_jge

```

#### JL

```
JL = m_jl

```

#### JLE

```
JLE = m_jle

```

#### JNZ

```
JNZ = m_jnz

```

#### JTBL

```
JTBL = m_jtbl

```

#### JZ

```
JZ = m_jz

```

#### LDC

```
LDC = m_ldc

```

#### LDX

```
LDX = m_ldx

```

#### LNOT

```
LNOT = m_lnot

```

#### LOW

```
LOW = m_low

```

#### MOV

```
MOV = m_mov

```

#### MUL

```
MUL = m_mul

```

#### NEG

```
NEG = m_neg

```

#### NOP

```
NOP = m_nop

```

#### OFADD

```
OFADD = m_ofadd

```

#### OR

```
OR = m_or

```

#### POP

```
POP = m_pop

```

#### PUSH

```
PUSH = m_push

```

#### RET

```
RET = m_ret

```

#### SAR

```
SAR = m_sar

```

#### SDIV

```
SDIV = m_sdiv

```

#### SETA

```
SETA = m_seta

```

#### SETAE

```
SETAE = m_setae

```

#### SETB

```
SETB = m_setb

```

#### SETBE

```
SETBE = m_setbe

```

#### SETG

```
SETG = m_setg

```

#### SETGE

```
SETGE = m_setge

```

#### SETL

```
SETL = m_setl

```

#### SETLE

```
SETLE = m_setle

```

#### SETNZ

```
SETNZ = m_setnz

```

#### SETO

```
SETO = m_seto

```

#### SETP

```
SETP = m_setp

```

#### SETS

```
SETS = m_sets

```

#### SETZ

```
SETZ = m_setz

```

#### SHL

```
SHL = m_shl

```

#### SHR

```
SHR = m_shr

```

#### SMOD

```
SMOD = m_smod

```

#### STX

```
STX = m_stx

```

#### SUB

```
SUB = m_sub

```

#### U2F

```
U2F = m_u2f

```

#### UDIV

```
UDIV = m_udiv

```

#### UMOD

```
UMOD = m_umod

```

#### UND

```
UND = m_und

```

#### XDS

```
XDS = m_xds

```

#### XDU

```
XDU = m_xdu

```

#### XOR

```
XOR = m_xor

```

#### is_addsub

```
is_addsub: bool

```

True for addition/subtraction opcodes (`add`, `sub`).

#### is_arithmetic

```
is_arithmetic: bool

```

True for integer arithmetic opcodes.

Includes `add`, `sub`, `mul`, `udiv`, `sdiv`, `umod`, `smod`.

#### is_bitwise

```
is_bitwise: bool

```

True for bitwise opcodes (`or`, `and`, `xor`, `shl`, `shr`, `sar`).

#### is_call

```
is_call: bool

```

True for call opcodes (`call`, `icall`).

#### is_commutative

```
is_commutative: bool

```

True for commutative opcodes.

Includes `add`, `mul`, `or`, `and`, `xor`, `setz`, `setnz`, `cfadd`, `ofadd`.

#### is_conditional_jump

```
is_conditional_jump: bool

```

True for conditional jump opcodes (`jnz` through `jle`, plus `jcnd`).

#### is_convertible_to_jump

```
is_convertible_to_jump: bool

```

True if this set-condition opcode has a corresponding jump opcode.

#### is_convertible_to_set

```
is_convertible_to_set: bool

```

True if this jump opcode has a corresponding set-condition opcode.

#### is_floating_point

```
is_floating_point: bool

```

True for floating-point opcodes (`f2i` through `fdiv`).

#### is_flow

```
is_flow: bool

```

True for any control-flow opcode (jumps, calls, `ret`).

#### is_jump

```
is_jump: bool

```

True for any jump/branch opcode including `goto`, `jtbl`, and `ijmp`.

#### is_propagatable

```
is_propagatable: bool

```

True if this opcode may appear in a sub-instruction (nested `mop_d`).

Non-propagatable opcodes include jumps, `ret`, `nop`, etc.

#### is_set

```
is_set: bool

```

True for set-condition opcodes (`setnz` through `setle`).

#### is_shift

```
is_shift: bool

```

True for shift opcodes (`shl`, `shr`, `sar`).

#### is_unary

```
is_unary: bool

```

True for unary opcodes (`neg`, `lnot`, `bnot`, `fneg`).

#### is_xdsu

```
is_xdsu: bool

```

True for sign/zero extension opcodes (`xds`, `xdu`).

### MicroOperand

```
MicroOperand(
    raw: mop_t, _parent_insn: Optional[Any] = None
)

```

Wrapper around an IDA `mop_t` microcode operand.

Provides Pythonic access to operand type, value, and type-specific accessors. The underlying raw object is always available via :pyattr:`raw_operand`.

Use the static factory methods to create new operands::

```
num = MicroOperand.number(42, size=4)
reg = MicroOperand.reg(mreg, size=8)
blk = MicroOperand.new_block_ref(3)

```

Methods:

- **`apply_sign_extension`** – Apply sign-extension to new_size bytes.
- **`apply_zero_extension`** – Apply zero-extension to new_size bytes.
- **`change_size`** – Change operand size, discarding extra high bytes or zero-extending.
- **`clear`** – Reset this operand to empty (mop_z).
- **`double_size`** – Double the operand size (e.g. 4 -> 8), zero-extending.
- **`empty`** – Create an empty operand (mop_z).
- **`erase_but_keep_size`** – Reset this operand to empty but preserve the size field.
- **`fpnum`** – Create a floating-point constant operand.
- **`from_insn`** – Create an operand wrapping a sub-instruction (mop_d).
- **`get_stack_variable`** – Resolve a stack variable operand to its frame index and IDA offset.
- **`global_addr`** – Create a global address operand.
- **`has_side_effects`** – True if evaluating this operand may cause side effects.
- **`helper`** – Create a helper function name operand.
- **`is_constant`** – Retrieve the value of a constant integer operand.
- **`is_equal_to`** – True if this is a numeric constant equal to n.
- **`is_sign_extended_from`** – True if the high bytes are sign-extended from nbytes.
- **`is_sub_instruction`** – Check if this operand is a nested sub-instruction.
- **`is_zero_extended_from`** – True if the high bytes are zero-extended from nbytes.
- **`local_var`** – Create a local variable operand.
- **`make_first_half`** – Extract the first part (endianness-independent).
- **`make_high_half`** – Extract the high half of this operand.
- **`make_low_half`** – Extract the low half of this operand.
- **`make_second_half`** – Extract the second part (endianness-independent).
- **`new_block_ref`** – Create a block-reference operand.
- **`number`** – Create a numeric constant operand.
- **`reg`** – Create a micro-register operand.
- **`reg_pair`** – Create a register-pair operand.
- **`set_block_ref`** – Convert this operand to a block reference in place.
- **`set_global_addr`** – Convert this operand to a global address in place.
- **`set_helper`** – Convert this operand to a helper function name in place.
- **`set_number`** – Convert this operand to a numeric constant in place.
- **`set_register`** – Convert this operand to a micro-register in place.
- **`shift_operand`** – Shift the operand start by offset bytes.
- **`stack_var`** – Create a stack variable operand.
- **`to_text`** – Get text representation of this operand.

Attributes:

- **`address_target`** (`Optional[MicroOperand]`) – Inner operand of an address-of (mop_a) operand, or None.
- **`block_ref`** (`Optional[int]`) – Target block serial number for mop_b operands, or None.
- **`call_info`** (`Optional[MicroCallInfo]`) – Call information for mop_f operands, or None.
- **`global_address`** (`Optional[int]`) – Global address for mop_v operands, or None.
- **`helper_name`** (`Optional[str]`) – Helper function name for mop_h operands, or None.
- **`is_bit_register`** (`bool`) – True if this is a bit register (including condition codes).
- **`is_boolean`** (`bool`) – True if the operand can only be 0 or 1 (bit register, set result, etc.).
- **`is_condition_code`** (`bool`) – True if this is a condition code register.
- **`is_empty`** (`bool`) – True if this is an empty operand (mop_z).
- **`is_global_address`** (`bool`) – IDA 9.2+
- **`is_helper`** (`bool`) –
- **`is_kernel_register`** (`bool`) – True if this is a kernel register.
- **`is_negative_constant`** (`bool`) – True if this is a negative numeric constant (signed).
- **`is_number`** (`bool`) –
- **`is_one`** (`bool`) – True if this is a numeric constant equal to 1.
- **`is_pair`** (`bool`) –
- **`is_positive_constant`** (`bool`) – True if this is a positive numeric constant.
- **`is_register`** (`bool`) –
- **`is_scattered`** (`bool`) – True if this is a scattered operand.
- **`is_stack_variable`** (`bool`) – IDA 9.2+
- **`is_string`** (`bool`) –
- **`is_zero`** (`bool`) – True if this is a numeric zero constant.
- **`may_use_aliased_memory`** (`bool`) – True if this operand may access aliased memory.
- **`pair`** (`Optional[Tuple[MicroOperand, MicroOperand]]`) – (low, high) operand pair for mop_p operands, or None.
- **`raw_operand`** (`mop_t`) – Get the underlying mop_t object.
- **`register`** (`Optional[int]`) – Micro-register number, or None if not a register operand.
- **`register_name`** (`Optional[str]`) – Human-readable micro-register name, or None.
- **`signed_value`** (`Optional[int]`) – Signed interpretation of a number operand, or None.
- **`size`** (`int`) – Operand size in bytes.
- **`stack_offset`** (`Optional[int]`) – Stack variable offset for mop_S operands, or None.
- **`string_value`** (`Optional[str]`) – String value for mop_str operands, or None.
- **`sub_instruction`** (`Optional[MicroInstruction]`) – Nested :class:MicroInstruction for mop_d operands, or None.
- **`type`** (`MicroOperandType`) – Operand type as a :class:MicroOperandType enum.
- **`unsigned_value`** (`Optional[int]`) – Unsigned interpretation of a number operand, or None.
- **`value`** (`Optional[int]`) – Numeric value for number operands, or None.

#### address_target

```
address_target: Optional[MicroOperand]

```

Inner operand of an address-of (`mop_a`) operand, or *None*.

#### block_ref

```
block_ref: Optional[int]

```

Target block serial number for `mop_b` operands, or *None*.

#### call_info

```
call_info: Optional[MicroCallInfo]

```

Call information for `mop_f` operands, or *None*.

#### global_address

```
global_address: Optional[int]

```

Global address for `mop_v` operands, or *None*.

#### helper_name

```
helper_name: Optional[str]

```

Helper function name for `mop_h` operands, or *None*.

#### is_bit_register

```
is_bit_register: bool

```

True if this is a bit register (including condition codes).

#### is_boolean

```
is_boolean: bool

```

True if the operand can only be 0 or 1 (bit register, set result, etc.).

#### is_condition_code

```
is_condition_code: bool

```

True if this is a condition code register.

#### is_empty

```
is_empty: bool

```

True if this is an empty operand (`mop_z`).

#### is_global_address

```
is_global_address: bool

```

*IDA 9.2+*

#### is_helper

```
is_helper: bool

```

#### is_kernel_register

```
is_kernel_register: bool

```

True if this is a kernel register.

#### is_negative_constant

```
is_negative_constant: bool

```

True if this is a negative numeric constant (signed).

#### is_number

```
is_number: bool

```

#### is_one

```
is_one: bool

```

True if this is a numeric constant equal to 1.

#### is_pair

```
is_pair: bool

```

#### is_positive_constant

```
is_positive_constant: bool

```

True if this is a positive numeric constant.

#### is_register

```
is_register: bool

```

#### is_scattered

```
is_scattered: bool

```

True if this is a scattered operand.

#### is_stack_variable

```
is_stack_variable: bool

```

*IDA 9.2+*

#### is_string

```
is_string: bool

```

#### is_zero

```
is_zero: bool

```

True if this is a numeric zero constant.

#### may_use_aliased_memory

```
may_use_aliased_memory: bool

```

True if this operand may access aliased memory.

#### pair

```
pair: Optional[Tuple[MicroOperand, MicroOperand]]

```

(low, high) operand pair for `mop_p` operands, or *None*.

#### raw_operand

```
raw_operand: mop_t

```

Get the underlying `mop_t` object.

#### register

```
register: Optional[int]

```

Micro-register number, or *None* if not a register operand.

#### register_name

```
register_name: Optional[str]

```

Human-readable micro-register name, or *None*.

#### signed_value

```
signed_value: Optional[int]

```

Signed interpretation of a number operand, or *None*.

#### size

```
size: int

```

Operand size in bytes.

#### stack_offset

```
stack_offset: Optional[int]

```

Stack variable offset for `mop_S` operands, or *None*.

#### string_value

```
string_value: Optional[str]

```

String value for `mop_str` operands, or *None*.

#### sub_instruction

```
sub_instruction: Optional[MicroInstruction]

```

Nested :class:`MicroInstruction` for `mop_d` operands, or *None*.

#### type

```
type: MicroOperandType

```

Operand type as a :class:`MicroOperandType` enum.

#### unsigned_value

```
unsigned_value: Optional[int]

```

Unsigned interpretation of a number operand, or *None*.

#### value

```
value: Optional[int]

```

Numeric value for number operands, or *None*.

#### apply_sign_extension

```
apply_sign_extension(
    new_size: int, ea: int = BADADDR
) -> None

```

Apply sign-extension to *new_size* bytes.

Parameters:

- **`new_size`** (`int`) – Target size in bytes.
- **`ea`** (`int`, default: `BADADDR` ) – Source address for the extending instruction.

#### apply_zero_extension

```
apply_zero_extension(
    new_size: int, ea: int = BADADDR
) -> None

```

Apply zero-extension to *new_size* bytes.

Parameters:

- **`new_size`** (`int`) – Target size in bytes.
- **`ea`** (`int`, default: `BADADDR` ) – Source address for the extending instruction.

#### change_size

```
change_size(new_size: int) -> bool

```

Change operand size, discarding extra high bytes or zero-extending.

Parameters:

- **`new_size`** (`int`) – New size in bytes.

Returns:

- `bool` – True on success.

#### clear

```
clear() -> None

```

Reset this operand to empty (`mop_z`).

#### double_size

```
double_size() -> bool

```

Double the operand size (e.g. 4 -> 8), zero-extending.

Returns:

- `bool` – True on success.

#### empty

```
empty() -> MicroOperand

```

Create an empty operand (`mop_z`).

#### erase_but_keep_size

```
erase_but_keep_size() -> None

```

Reset this operand to empty but preserve the size field.

#### fpnum

```
fpnum(data: bytes) -> MicroOperand

```

Create a floating-point constant operand.

Parameters:

- **`data`** (`bytes`) – Raw floating-point bytes in the processor's native format (e.g. IEEE 754 for x86).

#### from_insn

```
from_insn(insn: MicroInstruction) -> MicroOperand

```

Create an operand wrapping a sub-instruction (`mop_d`).

The instruction becomes a nested expression operand.

Parameters:

- **`insn`** (`MicroInstruction`) – The :class:MicroInstruction to wrap.

#### get_stack_variable

```
get_stack_variable() -> Optional[Tuple[int, int]]

```

Resolve a stack variable operand to its frame index and IDA offset.

Returns:

- `Optional[Tuple[int, int]]` – A tuple (frame_index, ida_offset) or None if this is not
- `Optional[Tuple[int, int]]` – a stack variable operand or the variable cannot be resolved.
- `Optional[Tuple[int, int]]` – frame_index is the index of the struct member in the frame,
- `Optional[Tuple[int, int]]` – ida_offset is the IDA-style stack offset.

#### global_addr

```
global_addr(ea: int, size: int) -> MicroOperand

```

Create a global address operand.

Parameters:

- **`ea`** (`int`) – Global address.
- **`size`** (`int`) – Operand size in bytes.

#### has_side_effects

```
has_side_effects(
    include_ldx_and_divs: bool = False,
) -> bool

```

True if evaluating this operand may cause side effects.

Parameters:

- **`include_ldx_and_divs`** (`bool`, default: `False` ) – Also treat ldx/div/mod as having side effects.

#### helper

```
helper(name: str) -> MicroOperand

```

Create a helper function name operand.

Parameters:

- **`name`** (`str`) – Helper function name (e.g. "memcpy").

#### is_constant

```
is_constant(is_signed: bool = True) -> Optional[int]

```

Retrieve the value of a constant integer operand.

Parameters:

- **`is_signed`** (`bool`, default: `True` ) – Interpret the value as signed.

Returns:

- `Optional[int]` – The integer value if the operand is a numeric constant
- `Optional[int]` – (mop_n), or None otherwise.

#### is_equal_to

```
is_equal_to(n: int, is_signed: bool = True) -> bool

```

True if this is a numeric constant equal to *n*.

Parameters:

- **`n`** (`int`) – The value to compare against.
- **`is_signed`** (`bool`, default: `True` ) – Interpret the comparison as signed.

#### is_sign_extended_from

```
is_sign_extended_from(nbytes: int) -> bool

```

True if the high bytes are sign-extended from *nbytes*.

Parameters:

- **`nbytes`** (`int`) – Number of low bytes that were sign-extended.

#### is_sub_instruction

```
is_sub_instruction(
    opcode: Optional[MicroOpcode] = None,
) -> bool

```

Check if this operand is a nested sub-instruction.

Parameters:

- **`opcode`** (`Optional[MicroOpcode]`, default: `None` ) – If given, also checks that the nested instruction has this specific opcode.

#### is_zero_extended_from

```
is_zero_extended_from(nbytes: int) -> bool

```

True if the high bytes are zero-extended from *nbytes*.

Parameters:

- **`nbytes`** (`int`) – Number of low bytes that were zero-extended.

#### local_var

```
local_var(
    mba: MicroBlockArray, idx: int, off: int = 0
) -> MicroOperand

```

Create a local variable operand.

Parameters:

- **`mba`** (`MicroBlockArray`) – The parent :class:MicroBlockArray.
- **`idx`** (`int`) – Index into the local variable list (mba.vars).
- **`off`** (`int`, default: `0` ) – Offset from the beginning of the variable.

#### make_first_half

```
make_first_half(width: int) -> bool

```

Extract the first part (endianness-independent).

Parameters:

- **`width`** (`int`) – Desired size in bytes.

Returns:

- `bool` – True on success.

#### make_high_half

```
make_high_half(width: int) -> bool

```

Extract the high half of this operand.

Parameters:

- **`width`** (`int`) – Desired size in bytes (must be smaller than current size).

Returns:

- `bool` – True on success.

#### make_low_half

```
make_low_half(width: int) -> bool

```

Extract the low half of this operand.

Parameters:

- **`width`** (`int`) – Desired size in bytes (must be smaller than current size).

Returns:

- `bool` – True on success.

#### make_second_half

```
make_second_half(width: int) -> bool

```

Extract the second part (endianness-independent).

Parameters:

- **`width`** (`int`) – Desired size in bytes.

Returns:

- `bool` – True on success.

#### new_block_ref

```
new_block_ref(serial: int) -> MicroOperand

```

Create a block-reference operand.

Parameters:

- **`serial`** (`int`) – Target block serial number.

#### number

```
number(
    value: int, size: int, ea: int = BADADDR
) -> MicroOperand

```

Create a numeric constant operand.

Parameters:

- **`value`** (`int`) – The integer constant value.
- **`size`** (`int`) – Operand size in bytes (1, 2, 4, 8).
- **`ea`** (`int`, default: `BADADDR` ) – Optional source address (default BADADDR).

#### reg

```
reg(mreg: int, size: int) -> MicroOperand

```

Create a micro-register operand.

Parameters:

- **`mreg`** (`int`) – Micro-register number (from ida_hexrays.reg2mreg() or ida_hexrays.mr\_\* constants).
- **`size`** (`int`) – Operand size in bytes.

#### reg_pair

```
reg_pair(
    loreg: int, hireg: int, halfsize: int
) -> MicroOperand

```

Create a register-pair operand.

Parameters:

- **`loreg`** (`int`) – Micro-register holding the low part.
- **`hireg`** (`int`) – Micro-register holding the high part.
- **`halfsize`** (`int`) – Size of each half-register in bytes.

#### set_block_ref

```
set_block_ref(serial: int) -> None

```

Convert this operand to a block reference in place.

Parameters:

- **`serial`** (`int`) – Target block serial number.

#### set_global_addr

```
set_global_addr(ea: int, size: int) -> None

```

Convert this operand to a global address in place.

Parameters:

- **`ea`** (`int`) – Target address.
- **`size`** (`int`) – Operand size in bytes.

#### set_helper

```
set_helper(name: str) -> None

```

Convert this operand to a helper function name in place.

Parameters:

- **`name`** (`str`) – Helper function name.

#### set_number

```
set_number(
    value: int, size: int, ea: int = BADADDR
) -> None

```

Convert this operand to a numeric constant in place.

Parameters:

- **`value`** (`int`) – The integer constant value.
- **`size`** (`int`) – Operand size in bytes.
- **`ea`** (`int`, default: `BADADDR` ) – Optional source address (default BADADDR).

#### set_register

```
set_register(mreg: int, size: int) -> None

```

Convert this operand to a micro-register in place.

Parameters:

- **`mreg`** (`int`) – Micro-register number.
- **`size`** (`int`) – Operand size in bytes.

#### shift_operand

```
shift_operand(offset: int) -> bool

```

Shift the operand start by *offset* bytes.

Positive offsets move toward higher bytes (shrink from the low end), negative offsets move toward lower bytes (grow from the high end).

Examples::

```
AH.1  shift_operand(-1) → AX.2
#0x12345678.4  shift_operand(3) → #0x12.1

```

Parameters:

- **`offset`** (`int`) – Number of bytes to shift.

Returns:

- `bool` – True on success.

#### stack_var

```
stack_var(
    mba: MicroBlockArray, offset: int
) -> MicroOperand

```

Create a stack variable operand.

Parameters:

- **`mba`** (`MicroBlockArray`) – The parent :class:MicroBlockArray.
- **`offset`** (`int`) – Stack offset.

#### to_text

```
to_text(remove_tags: bool = True) -> str

```

Get text representation of this operand.

### MicroOperandType

Bases: `IntEnum`

Microcode operand types corresponding to mop\_\* constants.

Attributes:

- **`ADDR_OF`** –
- **`BLOCK_REF`** –
- **`CALL_INFO`** –
- **`CASE`** –
- **`EMPTY`** –
- **`FP_CONST`** –
- **`GLOBAL_ADDR`** –
- **`HELPER`** –
- **`LOCAL_VAR`** –
- **`NUMBER`** –
- **`PAIR`** –
- **`REGISTER`** –
- **`SCATTERED`** –
- **`STACK_VAR`** –
- **`STRING`** –
- **`SUB_INSN`** –

#### ADDR_OF

```
ADDR_OF = mop_a

```

#### BLOCK_REF

```
BLOCK_REF = mop_b

```

#### CALL_INFO

```
CALL_INFO = mop_f

```

#### CASE

```
CASE = mop_c

```

#### EMPTY

```
EMPTY = mop_z

```

#### FP_CONST

```
FP_CONST = mop_fn

```

#### GLOBAL_ADDR

```
GLOBAL_ADDR = mop_v

```

#### HELPER

```
HELPER = mop_h

```

#### LOCAL_VAR

```
LOCAL_VAR = mop_l

```

#### NUMBER

```
NUMBER = mop_n

```

#### PAIR

```
PAIR = mop_p

```

#### REGISTER

```
REGISTER = mop_r

```

#### SCATTERED

```
SCATTERED = mop_sc

```

#### STACK_VAR

```
STACK_VAR = mop_S

```

#### STRING

```
STRING = mop_str

```

#### SUB_INSN

```
SUB_INSN = mop_d

```

### MicroOperandVisitor

Bases: `mop_visitor_t`

Visitor that delivers :class:`MicroOperand` wrappers.

Override :meth:`visit` instead of `visit_mop()`.

Methods:

- **`visit`** – Override this. Return 0 to continue, non-zero to stop.
- **`visit_mop`** –

#### visit

```
visit(
    operand: MicroOperand, type_info: Any, is_target: bool
) -> int

```

Override this. Return 0 to continue, non-zero to stop.

#### visit_mop

```
visit_mop(op: Any, type_: Any, is_target: bool) -> int

```

### Microcode

```
Microcode(database: Database)

```

Bases: `DatabaseEntity`

Provides structured access to IDA's Hex-Rays microcode.

Access via `db.microcode`.

Parameters:

- **`database`** (`Database`) – Reference to the active IDA database.

Methods:

- **`from_decompilation`** – Get microcode from a full decompilation (maturity LVARS).
- **`generate`** – Generate microcode for a function.
- **`generate_for_range`** – Generate microcode for an address range.
- **`get_text`** – Generate microcode and return it as text lines.

Attributes:

- **`database`** (`Database`) – Get the database reference, guaranteed to be non-None when called from
- **`m_database`** –

#### database

```
database: Database

```

Get the database reference, guaranteed to be non-None when called from methods decorated with @check_db_open.

Returns:

- `Database` – The active database instance.

Note

This property should only be used in methods decorated with @check_db_open, which ensures m_database is not None.

#### m_database

```
m_database = database

```

#### from_decompilation

```
from_decompilation(func: func_t) -> MicroBlockArray

```

Get microcode from a full decompilation (maturity LVARS).

Uses `ida_hexrays.decompile()` and returns the `mba_t` from the resulting `cfunc_t`.

Parameters:

- **`func`** (`func_t`) – An IDA func_t object.

Returns:

- **`A`** ( `MicroBlockArray` ) – class:MicroBlockArray at LVARS maturity.

Raises:

- `MicrocodeError` – If decompilation fails.

#### generate

```
generate(
    func: func_t,
    maturity: MicroMaturity = GENERATED,
    flags: DecompilationFlags = WARNINGS,
    build_graph: bool = True,
) -> MicroBlockArray

```

Generate microcode for a function.

Parameters:

- **`func`** (`func_t`) – An IDA func_t object (e.g. from db.functions.get_at()).
- **`maturity`** (`MicroMaturity`, default: `GENERATED` ) – The desired maturity level.
- **`flags`** (`DecompilationFlags`, default: `WARNINGS` ) – Decompilation flags (default: DecompilationFlags.WARNINGS).
- **`build_graph`** (`bool`, default: `True` ) – Whether to build the CFG graph after generation.

Returns:

- **`A`** ( `MicroBlockArray` ) – class:MicroBlockArray wrapping the generated mba_t.

Raises:

- `MicrocodeError` – If microcode generation fails.

#### generate_for_range

```
generate_for_range(
    start_ea: int,
    end_ea: int,
    maturity: MicroMaturity = GENERATED,
    flags: DecompilationFlags = WARNINGS,
    build_graph: bool = True,
) -> MicroBlockArray

```

Generate microcode for an address range.

Parameters:

- **`start_ea`** (`int`) – Range start address.
- **`end_ea`** (`int`) – Range end address.
- **`maturity`** (`MicroMaturity`, default: `GENERATED` ) – The desired maturity level.
- **`flags`** (`DecompilationFlags`, default: `WARNINGS` ) – Decompilation flags (default: DecompilationFlags.WARNINGS).
- **`build_graph`** (`bool`, default: `True` ) – Whether to build the CFG graph after generation.

Returns:

- **`A`** ( `MicroBlockArray` ) – class:MicroBlockArray wrapping the generated mba_t.

Raises:

- `MicrocodeError` – If microcode generation fails.

#### get_text

```
get_text(
    func: func_t,
    maturity: MicroMaturity = GENERATED,
    remove_tags: bool = True,
) -> List[str]

```

Generate microcode and return it as text lines.

This is a convenience method equivalent to::

```
mf = db.microcode.generate(func, maturity)
lines = mf.to_text(remove_tags)

```

Parameters:

- **`func`** (`func_t`) – An IDA func_t object.
- **`maturity`** (`MicroMaturity`, default: `GENERATED` ) – The desired maturity level.
- **`remove_tags`** (`bool`, default: `True` ) – Whether to strip IDA color tags.

Returns:

- `List[str]` – A list of strings, each a line of microcode text.

### MicrocodeError

```
MicrocodeError(
    message: str,
    code: Optional[MicroError] = None,
    errea: Optional[int] = None,
)

```

Bases: `DecompilerError`

Raised when microcode generation or decompilation fails.

Attributes:

- **`code`** – The :class:MicroError code (None if not available).
- **`errea`** – The address where the error occurred (None if not available).

#### code

```
code = code

```

#### errea

```
errea = errea

```

### MicrocodeFilter

Bases: `udc_filter_t`

User-defined call filter.

Turns instruction patterns into function calls via a declared signature.

Methods:

- **`install`** – Install this filter.
- **`uninstall`** – Uninstall this filter.

#### install

```
install() -> None

```

Install this filter.

#### uninstall

```
uninstall() -> None

```

Uninstall this filter.

### MicrocodeLifter

Bases: `microcode_filter_t`

Custom instruction lifter. Override `match()` and `apply()`.

Generates custom microcode for unsupported processor instructions (e.g., AVX, SIMD, custom ISA extensions).

The `cdg` parameter in `match()`/`apply()` is a raw `codegen_t` providing:

- `cdg.insn` — current ida instruction (`insn_t`)
- `cdg.emit(op, sz, l, r, d, off)` — emit a micro-instruction
- `cdg.load_operand(n)` — load operand *n* into a micro-register

Methods:

- **`install`** – Install this lifter.
- **`uninstall`** – Uninstall this lifter.

#### install

```
install() -> None

```

Install this lifter.

#### uninstall

```
uninstall() -> None

```

Uninstall this lifter.

### get_hexrays_version

```
get_hexrays_version() -> str

```

Get the Hex-Rays decompiler version string.

Returns:

- `str` – Version in the form "major.minor.revision.build-date".

### mreg2reg

```
mreg2reg(mreg: int, width: int) -> int

```

Map a micro-register number to a processor register number.

Parameters:

- **`mreg`** (`int`) – Micro-register number.
- **`width`** (`int`) – Size of the micro-register in bytes.

Returns:

- `int` – Processor register id, or -1 if no mapping exists.

### reg2mreg

```
reg2mreg(processor_reg: int) -> int

```

Map a processor register number to a micro-register number.

Parameters:

- **`processor_reg`** (`int`) – Processor register number (e.g. from ida_idp).

Returns:

- `int` – Micro-register id, or mr_none if the register has no mapping.
