# `Pseudocode`

## pseudocode

Classes:

- **`CommentPlacement`** – Comment placement positions corresponding to ITP\_\* constants.
- **`NumberFormatFlags`** – Number format property flags corresponding to NF\_\* constants.
- **`Pseudocode`** – Provides access to IDA's Hex-Rays decompiler pseudocode/ctree.
- **`PseudocodeBlock`** – Wrapper around an IDA cblock_t statement block.
- **`PseudocodeCallArg`** – Wrapper around an IDA carg_t call argument.
- **`PseudocodeCallArgList`** – Wrapper around an IDA carglist_t argument list.
- **`PseudocodeCase`** – Wrapper around an IDA ccase_t (single switch case).
- **`PseudocodeDo`** – Wrapper around an IDA cdo_t (do-while details).
- **`PseudocodeError`** – Raised when pseudocode/ctree operations fail.
- **`PseudocodeExpression`** – Wrapper around an IDA cexpr_t expression node.
- **`PseudocodeExpressionOp`** – Expression operator types corresponding to cot\_\* constants.
- **`PseudocodeExpressionVisitor`** – Visitor for ctree expressions. Override visit_expression.
- **`PseudocodeFor`** – Wrapper around an IDA cfor_t (for-loop details).
- **`PseudocodeFunction`** – Wrapper around an IDA cfunc_t decompiled function result.
- **`PseudocodeGoto`** – Wrapper around an IDA cgoto_t (goto-instruction details).
- **`PseudocodeIf`** – Wrapper around an IDA cif_t (if-instruction details).
- **`PseudocodeInstruction`** – Wrapper around an IDA cinsn_t instruction/statement node.
- **`PseudocodeInstructionOp`** – Statement/instruction operator types corresponding to cit\_\* constants.
- **`PseudocodeInstructionVisitor`** – Visitor for ctree instructions. Override visit_instruction.
- **`PseudocodeMaturity`** – CTree maturity levels corresponding to CMAT\_\* constants.
- **`PseudocodeNumber`** – Wrapper around an IDA cnumber_t numeric constant.
- **`PseudocodeParentVisitor`** – Visitor with parent tracking.
- **`PseudocodeReturn`** – Wrapper around an IDA creturn_t (return-instruction details).
- **`PseudocodeSwitch`** – Wrapper around an IDA cswitch_t (switch-instruction details).
- **`PseudocodeThrow`** – Wrapper around an IDA cthrow_t (C++ throw-instruction details).
- **`PseudocodeTry`** – Wrapper around an IDA ctry_t (C++ try-instruction details).
- **`PseudocodeVisitor`** – Visitor for both expressions and instructions.
- **`PseudocodeVisitorFlags`** – CTree visitor flags corresponding to CV\_\* constants.
- **`PseudocodeWhile`** – Wrapper around an IDA cwhile_t (while-loop details).

### CommentPlacement

Bases: `IntEnum`

Comment placement positions corresponding to `ITP_*` constants.

Attributes:

- **`ARG1`** –
- **`ARG64`** –
- **`BLOCK1`** –
- **`BLOCK2`** –
- **`BRACE1`** –
- **`BRACE2`** –
- **`CASE`** –
- **`COLON`** –
- **`CURLY1`** –
- **`CURLY2`** –
- **`DO`** –
- **`ELSE`** –
- **`EMPTY`** –
- **`SEMI`** –
- **`SIGN`** –

#### ARG1

```
ARG1 = ITP_ARG1

```

#### ARG64

```
ARG64 = ITP_ARG64

```

#### BLOCK1

```
BLOCK1 = ITP_BLOCK1

```

#### BLOCK2

```
BLOCK2 = ITP_BLOCK2

```

#### BRACE1

```
BRACE1 = ITP_BRACE1

```

#### BRACE2

```
BRACE2 = ITP_BRACE2

```

#### CASE

```
CASE = ITP_CASE

```

#### COLON

```
COLON = ITP_COLON

```

#### CURLY1

```
CURLY1 = ITP_CURLY1

```

#### CURLY2

```
CURLY2 = ITP_CURLY2

```

#### DO

```
DO = ITP_DO

```

#### ELSE

```
ELSE = ITP_ELSE

```

#### EMPTY

```
EMPTY = ITP_EMPTY

```

#### SEMI

```
SEMI = ITP_SEMI

```

#### SIGN

```
SIGN = ITP_SIGN

```

### NumberFormatFlags

Bases: `IntFlag`

Number format property flags corresponding to `NF_*` constants.

Attributes:

- **`BITNOT`** –
- **`FIXED`** –
- **`NEGATE`** –

#### BITNOT

```
BITNOT = NF_BITNOT

```

#### FIXED

```
FIXED = NF_FIXED

```

#### NEGATE

```
NEGATE = NF_NEGATE

```

### Pseudocode

```
Pseudocode(database: Database)

```

Bases: `DatabaseEntity`

Provides access to IDA's Hex-Rays decompiler pseudocode/ctree.

Access via `db.pseudocode`.

Parameters:

- **`database`** (`Database`) – Reference to the active IDA database.

Methods:

- **`decompile`** – Decompile a function and return the ctree result.
- **`decompile_many`** – Decompile multiple functions.
- **`get_text`** – Decompile and return pseudocode text lines.

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

#### decompile

```
decompile(
    ea_or_func: Union[int, func_t],
    flags: DecompilationFlags = DecompilationFlags(0),
) -> PseudocodeFunction

```

Decompile a function and return the ctree result.

Parameters:

- **`ea_or_func`** (`Union[int, func_t]`) – Function entry address or func_t object.
- **`flags`** (`DecompilationFlags`, default: `DecompilationFlags(0)` ) – Decompilation flags (DecompilationFlags).

Returns:

- `PseudocodeFunction` – A PseudocodeFunction wrapping the cfunc_t result.

Raises:

- `PseudocodeError` – If decompilation fails.

#### decompile_many

```
decompile_many(
    functions: List[Union[int, func_t]],
) -> List[PseudocodeFunction]

```

Decompile multiple functions.

Parameters:

- **`functions`** (`List[Union[int, func_t]]`) – List of function addresses or func_t objects.

Returns:

- `List[PseudocodeFunction]` – List of PseudocodeFunction results.

Raises:

- `PseudocodeError` – If any decompilation fails.

#### get_text

```
get_text(
    ea_or_func: Union[int, func_t], remove_tags: bool = True
) -> List[str]

```

Decompile and return pseudocode text lines.

Convenience method equivalent to:

```
decomp = db.pseudocode.decompile(ea_or_func)
return decomp.to_text(remove_tags)

```

Parameters:

- **`ea_or_func`** (`Union[int, func_t]`) – Function entry address or func_t object.
- **`remove_tags`** (`bool`, default: `True` ) – If True, strips IDA color/formatting tags.

Returns:

- `List[str]` – A list of strings, each a line of pseudocode.

### PseudocodeBlock

```
PseudocodeBlock(
    raw: cblock_t, _parent: Optional[Any] = None
)

```

Wrapper around an IDA `cblock_t` statement block.

Supports iteration, indexing, and `len()`.

Methods:

- **`append`** – Append a copy of an instruction to the end of this block.
- **`remove`** – Remove an instruction from this block.

Attributes:

- **`first`** (`Optional[PseudocodeInstruction]`) – First instruction in the block, or None if empty.
- **`is_empty`** (`bool`) – True if the block contains no instructions.
- **`last`** (`Optional[PseudocodeInstruction]`) – Last instruction in the block, or None if empty.
- **`raw_block`** (`cblock_t`) – Get the underlying cblock_t object.

#### first

```
first: Optional[PseudocodeInstruction]

```

First instruction in the block, or `None` if empty.

#### is_empty

```
is_empty: bool

```

True if the block contains no instructions.

#### last

```
last: Optional[PseudocodeInstruction]

```

Last instruction in the block, or `None` if empty.

#### raw_block

```
raw_block: cblock_t

```

Get the underlying `cblock_t` object.

#### append

```
append(
    insn: PseudocodeInstruction,
) -> PseudocodeInstruction

```

Append a copy of an instruction to the end of this block.

Unlike the `from_*` and `make_*` factories which transfer ownership of their inputs, this method deep-copies `insn` via `cinsn_t`'s copy constructor. The original `insn` remains valid and is unaffected.

Parameters:

- **`insn`** (`PseudocodeInstruction`) – The instruction to copy into the block.

Returns:

- `PseudocodeInstruction` – A wrapper pointing to the new copy inside the block.

#### remove

```
remove(insn: PseudocodeInstruction) -> None

```

Remove an instruction from this block.

Parameters:

- **`insn`** (`PseudocodeInstruction`) – The instruction to remove. Must be an instruction currently in this block.

### PseudocodeCallArg

```
PseudocodeCallArg(
    raw: carg_t,
    _parent_list: Optional[PseudocodeCallArgList] = None,
)

```

Wrapper around an IDA `carg_t` call argument.

`carg_t` extends `cexpr_t`, so each argument is also an expression.

Attributes:

- **`expression`** (`PseudocodeExpression`) – The argument value as a PseudocodeExpression.
- **`formal_type`** (`tinfo_t`) – Formal argument type from the function prototype.
- **`is_vararg`** (`bool`) – True if this is a variadic argument.
- **`raw_arg`** (`carg_t`) – Get the underlying carg_t object.

#### expression

```
expression: PseudocodeExpression

```

The argument value as a `PseudocodeExpression`.

`carg_t` inherits from `cexpr_t`, so the argument itself is an expression.

#### formal_type

```
formal_type: tinfo_t

```

Formal argument type from the function prototype.

#### is_vararg

```
is_vararg: bool

```

True if this is a variadic argument.

#### raw_arg

```
raw_arg: carg_t

```

Get the underlying `carg_t` object.

### PseudocodeCallArgList

```
PseudocodeCallArgList(
    raw: carglist_t,
    _parent_expr: Optional[PseudocodeExpression] = None,
)

```

Wrapper around an IDA `carglist_t` argument list.

Supports iteration, indexing, and `len()`.

Attributes:

- **`flags`** (`int`) – Argument list flags.
- **`func_type`** (`tinfo_t`) – Function type information for the call.
- **`raw_arglist`** (`carglist_t`) – Get the underlying carglist_t object.

#### flags

```
flags: int

```

Argument list flags.

#### func_type

```
func_type: tinfo_t

```

Function type information for the call.

#### raw_arglist

```
raw_arglist: carglist_t

```

Get the underlying `carglist_t` object.

### PseudocodeCase

```
PseudocodeCase(
    raw: ccase_t,
    _parent_switch: Optional[PseudocodeSwitch] = None,
)

```

Wrapper around an IDA `ccase_t` (single switch case).

Attributes:

- **`body`** (`PseudocodeInstruction`) – The case body instruction.
- **`is_default`** (`bool`) – True if this is the default case.
- **`raw_case`** (`ccase_t`) – Get the underlying ccase_t object.
- **`values`** (`List[int]`) – List of case values. Empty list means default.

#### body

```
body: PseudocodeInstruction

```

The case body instruction.

`ccase_t` extends `cinsn_t`, so the case itself is the body.

#### is_default

```
is_default: bool

```

True if this is the default case.

#### raw_case

```
raw_case: ccase_t

```

Get the underlying `ccase_t` object.

#### values

```
values: List[int]

```

List of case values. Empty list means `default`.

### PseudocodeDo

```
PseudocodeDo(
    raw: cdo_t,
    _parent_insn: Optional[PseudocodeInstruction] = None,
)

```

Wrapper around an IDA `cdo_t` (do-while details).

Attributes:

- **`body`** (`PseudocodeInstruction`) – Loop body instruction.
- **`condition`** (`PseudocodeExpression`) – Loop condition expression.
- **`raw_do`** (`cdo_t`) – Get the underlying cdo_t object.

#### body

```
body: PseudocodeInstruction

```

Loop body instruction.

#### condition

```
condition: PseudocodeExpression

```

Loop condition expression.

#### raw_do

```
raw_do: cdo_t

```

Get the underlying `cdo_t` object.

### PseudocodeError

```
PseudocodeError(message: str, errea: Optional[int] = None)

```

Bases: `DecompilerError`

Raised when pseudocode/ctree operations fail.

Attributes:

- **`errea`** – The address where the error occurred (None if unavailable).

#### errea

```
errea = errea

```

### PseudocodeExpression

```
PseudocodeExpression(
    raw: cexpr_t, _parent: Optional[Any] = None
)

```

Wrapper around an IDA `cexpr_t` expression node.

Provides Pythonic access to expression type, operands, and sub-fields. Type-specific properties return `None` when the expression type does not match, avoiding undefined behavior from wrong union access.

Methods:

- **`contains_comma`** – Check if this expression contains comma operators.
- **`contains_operator`** – Check if this expression contains the given operator at least times times.
- **`equal_effect`** – Check if this expression has the same effect as other.
- **`from_binary`** – Create a detached binary expression (x op y).
- **`from_call`** – Create a detached call expression (callee(args…)).
- **`from_helper`** – Create a detached helper/intrinsic name expression.
- **`from_number`** – Create a detached numeric constant expression.
- **`from_object`** – Create a detached object-reference expression.
- **`from_string`** – Create a detached string literal expression.
- **`from_unary`** – Create a detached unary expression (op x).
- **`from_variable`** – Create a detached local-variable expression.
- **`negate`** – Logically negate this expression in place.
- **`replace_with`** – Replace this expression in-place with new_expr.
- **`set_type`** – Set the expression type. Returns self for chaining.
- **`to_text`** – Get the expression as a text string.

Attributes:

- **`call_args`** (`Optional[PseudocodeCallArgList]`) – For cot_call: the argument list. None otherwise.
- **`ea`** (`ea_t`) – Effective address of this expression.
- **`exflags`** (`int`) – Expression flags (EXFL\_\*).
- **`fp_number`** (`Optional[fnumber_t]`) – For cot_fnum: floating-point constant (fnumber_t). None otherwise.
- **`helper_name`** (`Optional[str]`) – For cot_helper: the helper function name. None otherwise.
- **`index`** (`int`) – Item index in the ctree arrays.
- **`is_assignment`** (`bool`) – True if this is any assignment expression.
- **`is_call`** (`bool`) – True if this is a call expression.
- **`is_nice_cond`** (`bool`) – True if this expression is well-formed for use as a boolean
- **`is_number`** (`bool`) – True if this is a numeric constant.
- **`is_object`** (`bool`) – True if this is an object address reference.
- **`is_string`** (`bool`) – True if this is a string constant.
- **`is_variable`** (`bool`) – True if this is a local variable reference.
- **`label_num`** (`int`) – Label number (-1 if none).
- **`member_offset`** (`Optional[int]`) – For cot_memref / cot_memptr: the member offset. None otherwise.
- **`number`** (`Optional[PseudocodeNumber]`) – For cot_num: the numeric constant. None otherwise.
- **`obj_ea`** (`Optional[ea_t]`) – For cot_obj: the object effective address. None otherwise.
- **`obj_name`** (`Optional[str]`) – For cot_obj: the object name (resolved via IDA names). None otherwise.
- **`op`** (`PseudocodeExpressionOp`) – Expression operator type.
- **`ptr_size`** (`Optional[int]`) – For cot_ptr / cot_memptr: the access size. None otherwise.
- **`raw_expr`** (`cexpr_t`) – Get the underlying cexpr_t object.
- **`string`** (`Optional[str]`) – For cot_str: the string constant value. None otherwise.
- **`type_info`** (`tinfo_t`) – Expression type information (tinfo_t).
- **`variable`** (`Optional[var_ref_t]`) – For cot_var: the variable reference (var_ref_t). None otherwise.
- **`variable_index`** (`Optional[int]`) – For cot_var: index into the local variable list. None otherwise.
- **`x`** (`Optional[PseudocodeExpression]`) – First operand (left), or None if the operator does not use x.
- **`y`** (`Optional[PseudocodeExpression]`) – Second operand (right), or None if the operator does not use y.
- **`z`** (`Optional[PseudocodeExpression]`) – Third operand (ternary z), or None if the operator does not use z.

#### call_args

```
call_args: Optional[PseudocodeCallArgList]

```

For `cot_call`: the argument list. `None` otherwise.

#### ea

```
ea: ea_t

```

Effective address of this expression.

#### exflags

```
exflags: int

```

Expression flags (`EXFL_*`).

#### fp_number

```
fp_number: Optional[fnumber_t]

```

For `cot_fnum`: floating-point constant (`fnumber_t`). `None` otherwise.

#### helper_name

```
helper_name: Optional[str]

```

For `cot_helper`: the helper function name. `None` otherwise.

#### index

```
index: int

```

Item index in the ctree arrays.

#### is_assignment

```
is_assignment: bool

```

True if this is any assignment expression.

#### is_call

```
is_call: bool

```

True if this is a call expression.

#### is_nice_cond

```
is_nice_cond: bool

```

True if this expression is well-formed for use as a boolean condition (e.g. no top-level commas).

#### is_number

```
is_number: bool

```

True if this is a numeric constant.

#### is_object

```
is_object: bool

```

True if this is an object address reference.

#### is_string

```
is_string: bool

```

True if this is a string constant.

#### is_variable

```
is_variable: bool

```

True if this is a local variable reference.

#### label_num

```
label_num: int

```

Label number (`-1` if none).

#### member_offset

```
member_offset: Optional[int]

```

For `cot_memref` / `cot_memptr`: the member offset. `None` otherwise.

#### number

```
number: Optional[PseudocodeNumber]

```

For `cot_num`: the numeric constant. `None` otherwise.

#### obj_ea

```
obj_ea: Optional[ea_t]

```

For `cot_obj`: the object effective address. `None` otherwise.

#### obj_name

```
obj_name: Optional[str]

```

For `cot_obj`: the object name (resolved via IDA names). `None` otherwise.

#### op

```
op: PseudocodeExpressionOp

```

Expression operator type.

#### ptr_size

```
ptr_size: Optional[int]

```

For `cot_ptr` / `cot_memptr`: the access size. `None` otherwise.

#### raw_expr

```
raw_expr: cexpr_t

```

Get the underlying `cexpr_t` object.

#### string

```
string: Optional[str]

```

For `cot_str`: the string constant value. `None` otherwise.

#### type_info

```
type_info: tinfo_t

```

Expression type information (`tinfo_t`).

#### variable

```
variable: Optional[var_ref_t]

```

For `cot_var`: the variable reference (`var_ref_t`). `None` otherwise.

#### variable_index

```
variable_index: Optional[int]

```

For `cot_var`: index into the local variable list. `None` otherwise.

#### x

```
x: Optional[PseudocodeExpression]

```

First operand (left), or `None` if the operator does not use x.

#### y

```
y: Optional[PseudocodeExpression]

```

Second operand (right), or `None` if the operator does not use y.

#### z

```
z: Optional[PseudocodeExpression]

```

Third operand (ternary `z`), or `None` if the operator does not use z.

#### contains_comma

```
contains_comma(times: int = 1) -> bool

```

Check if this expression contains comma operators.

#### contains_operator

```
contains_operator(
    op: PseudocodeExpressionOp, times: int = 1
) -> bool

```

Check if this expression contains the given operator at least `times` times.

#### equal_effect

```
equal_effect(other: PseudocodeExpression) -> bool

```

Check if this expression has the same effect as `other`.

#### from_binary

```
from_binary(
    op: PseudocodeExpressionOp,
    x: PseudocodeExpression,
    y: PseudocodeExpression,
    type_info: Optional[tinfo_t] = None,
) -> PseudocodeExpression

```

Create a detached binary expression (`x op y`).

Works for any operator that uses two operands: arithmetic, assignment, comparison, bitwise, shift, and access operators.

Parameters:

- **`op`** (`PseudocodeExpressionOp`) – A binary operator (a PseudocodeExpressionOp value).
- **`x`** (`PseudocodeExpression`) – Left operand.
- **`y`** (`PseudocodeExpression`) – Right operand.
- **`type_info`** (`Optional[tinfo_t]`, default: `None` ) – Type to assign to the result expression.

Warning

You must always provide a type before inserting the expression into a ctree. Otherwise it won't work and no exception is raised.

The result shares the underlying `cexpr_t` nodes with `x` and `y`: mutations through either wrapper are visible to the other. Ownership is transferred to the result, so `x` and `y` will dangle once the result is freed or replaced. Reusing them in another factory would also create a tree where two parents share one child, corrupting the ctree. Do not use `x` or `y` independently after this call.

Raises:

- `InvalidParameterError` – If op does not use both operands.

Example

```
add = PseudocodeExpression.from_binary(
    PseudocodeExpressionOp.ADD, expr_a1, expr_a2,
)

```

#### from_call

```
from_call(
    callee: PseudocodeExpression,
    args: Optional[List[PseudocodeExpression]] = None,
    type_info: Optional[tinfo_t] = None,
) -> PseudocodeExpression

```

Create a detached call expression (`callee(args…)`).

Parameters:

- **`callee`** (`PseudocodeExpression`) – The function being called (typically built via from_object or from_helper).
- **`args`** (`Optional[List[PseudocodeExpression]]`, default: `None` ) – Optional list of argument expressions.
- **`type_info`** (`Optional[tinfo_t]`, default: `None` ) – Type to assign to the call result (the return type of the callee).

Warning

You must always provide a type before inserting the expression into a ctree. Otherwise it won't work and no exception is raised. The same applies to `callee` and every item in `args`.

The result shares the underlying `cexpr_t` with `callee`: mutations through either wrapper are visible to the other, and `callee` will dangle once the result is freed or replaced. Each item in `args` is moved (swapped) into the call and becomes an empty expression afterward. Do not use `callee` or `args` items independently after this call.

Example

```
# Build "strlen(msg)" — every node is typed
callee = PseudocodeExpression.from_object(strlen_ea, type_info=strlen_t)
arg = PseudocodeExpression.from_object(msg_ea, type_info=charptr_t)
call = PseudocodeExpression.from_call(callee, [arg], type_info=size_t)

```

#### from_helper

```
from_helper(
    name: str, type_info: Optional[tinfo_t] = None
) -> PseudocodeExpression

```

Create a detached helper/intrinsic name expression.

Parameters:

- **`name`** (`str`) – Helper function name (e.g. "LOWORD").
- **`type_info`** (`Optional[tinfo_t]`, default: `None` ) – Type to assign to the expression.

Warning

You must always provide a type before inserting the expression into a ctree. Otherwise it won't work and no exception is raised.

#### from_number

```
from_number(
    value: int,
    ea: int = BADADDR,
    type_info: Optional[tinfo_t] = None,
) -> PseudocodeExpression

```

Create a detached numeric constant expression.

Parameters:

- **`value`** (`int`) – The integer value.
- **`ea`** (`int`, default: `BADADDR` ) – Address to associate with the expression.
- **`type_info`** (`Optional[tinfo_t]`, default: `None` ) – Type to assign to the expression.

Warning

You must always provide a type before inserting the expression into a ctree. Otherwise it won't work and no exception is raised.

#### from_object

```
from_object(
    obj_ea: int,
    ea: int = BADADDR,
    type_info: Optional[tinfo_t] = None,
) -> PseudocodeExpression

```

Create a detached object-reference expression.

Parameters:

- **`obj_ea`** (`int`) – Address of the referenced object (global, function, …).
- **`ea`** (`int`, default: `BADADDR` ) – Address to associate with the expression itself.
- **`type_info`** (`Optional[tinfo_t]`, default: `None` ) – Type to assign to the expression.

Warning

You must always provide a type before inserting the expression into a ctree. Otherwise it won't work and no exception is raised.

#### from_string

```
from_string(
    text: str,
    ea: int = BADADDR,
    type_info: Optional[tinfo_t] = None,
) -> PseudocodeExpression

```

Create a detached string literal expression.

Parameters:

- **`text`** (`str`) – The string content.
- **`ea`** (`int`, default: `BADADDR` ) – Address to associate with the expression.
- **`type_info`** (`Optional[tinfo_t]`, default: `None` ) – Type to assign to the expression.

Warning

You must always provide a type before inserting the expression into a ctree. Otherwise it won't work and no exception is raised.

#### from_unary

```
from_unary(
    op: PseudocodeExpressionOp,
    x: PseudocodeExpression,
    type_info: Optional[tinfo_t] = None,
) -> PseudocodeExpression

```

Create a detached unary expression (`op x`).

Accepts any unary operator: `NEG`, `LNOT`, `BNOT`, `CAST`, `PTR`, `REF`, `FNEG`, and pre/post increment/decrement.

Parameters:

- **`op`** (`PseudocodeExpressionOp`) – A unary operator (a PseudocodeExpressionOp value).
- **`x`** (`PseudocodeExpression`) – The operand.
- **`type_info`** (`Optional[tinfo_t]`, default: `None` ) – Type to assign to the result expression.

Example

```
neg = PseudocodeExpression.from_unary(
    PseudocodeExpressionOp.NEG, expr_a1,
)

```

Warning

You must always provide a type before inserting the expression into a ctree. Otherwise it won't work and no exception is raised.

The result and `x` share the underlying `cexpr_t`: mutations through either wrapper are visible to the other. Ownership is transferred to the result, so `x` will dangle once the result is freed or replaced. Reusing `x` in another factory would also create a tree where two parents share one child, corrupting the ctree. Do not use `x` independently after this call.

Raises:

- `InvalidParameterError` – If op is not a unary operator.

#### from_variable

```
from_variable(
    idx: int, mba: MicroBlockArray
) -> PseudocodeExpression

```

Create a detached local-variable expression.

Parameters:

- **`idx`** (`int`) – Variable index in the lvars array.
- **`mba`** (`MicroBlockArray`) – MicroBlockArray that owns the variable.

Note

Unlike other factories, the expression type is set automatically from the variable's declared type.

#### negate

```
negate() -> None

```

Logically negate this expression in place.

Uses `ida_hexrays.lnot()` to produce the logical negation and swaps the result into this expression node.

#### replace_with

```
replace_with(new_expr: PseudocodeExpression) -> None

```

Replace this expression in-place with `new_expr`.

After calling, `self` contains the new content and `new_expr` holds the old content (which is freed when `new_expr` is garbage-collected).

Warning

Call `PseudocodeFunction.refresh` after all mutations are complete to regenerate the pseudocode text.

#### set_type

```
set_type(type_info: tinfo_t) -> PseudocodeExpression

```

Set the expression type. Returns `self` for chaining.

Parameters:

- **`type_info`** (`tinfo_t`) – Type information (tinfo_t) to assign.

#### to_text

```
to_text() -> str

```

Get the expression as a text string.

### PseudocodeExpressionOp

Bases: `IntEnum`

Expression operator types corresponding to `cot_*` constants.

Attributes:

- **`ADD`** –
- **`ASG`** –
- **`ASG_ADD`** –
- **`ASG_BAND`** –
- **`ASG_BOR`** –
- **`ASG_MUL`** –
- **`ASG_SDIV`** –
- **`ASG_SHL`** –
- **`ASG_SMOD`** –
- **`ASG_SSHR`** –
- **`ASG_SUB`** –
- **`ASG_UDIV`** –
- **`ASG_UMOD`** –
- **`ASG_USHR`** –
- **`ASG_XOR`** –
- **`BAND`** –
- **`BNOT`** –
- **`BOR`** –
- **`CALL`** –
- **`CAST`** –
- **`COMMA`** –
- **`EMPTY`** –
- **`EQ`** –
- **`FADD`** –
- **`FDIV`** –
- **`FMUL`** –
- **`FNEG`** –
- **`FNUM`** –
- **`FSUB`** –
- **`HELPER`** –
- **`IDX`** –
- **`INSN`** –
- **`LAND`** –
- **`LNOT`** –
- **`LOR`** –
- **`MEMPTR`** –
- **`MEMREF`** –
- **`MUL`** –
- **`NE`** –
- **`NEG`** –
- **`NUM`** –
- **`OBJ`** –
- **`POSTDEC`** –
- **`POSTINC`** –
- **`PREDEC`** –
- **`PREINC`** –
- **`PTR`** –
- **`REF`** –
- **`SDIV`** –
- **`SGE`** –
- **`SGT`** –
- **`SHL`** –
- **`SIZEOF`** –
- **`SLE`** –
- **`SLT`** –
- **`SMOD`** –
- **`SSHR`** –
- **`STR`** –
- **`SUB`** –
- **`TERNARY`** –
- **`TYPE`** –
- **`UDIV`** –
- **`UGE`** –
- **`UGT`** –
- **`ULE`** –
- **`ULT`** –
- **`UMOD`** –
- **`USHR`** –
- **`VAR`** –
- **`XOR`** –
- **`is_arithmetic`** (`bool`) – True for integer arithmetic operators (+, -, \*, /, %).
- **`is_assignment`** (`bool`) – True for all assignment operators (=, +=, -=, etc.).
- **`is_binary`** (`bool`) – True for binary operators (x+y, x-y, etc.). Excludes ternary.
- **`is_call`** (`bool`) – True for call expressions.
- **`is_floating_point`** (`bool`) – True for floating-point arithmetic operators.
- **`is_leaf`** (`bool`) – True for leaf nodes with no children.
- **`is_prepost`** (`bool`) – True for pre/post increment/decrement operators.
- **`is_relational`** (`bool`) – True for comparison operators (==, !=, \<, >, etc.).
- **`is_unary`** (`bool`) – True for unary operators (-x, !x, ~x, \*x, &x, casts, etc.).

#### ADD

```
ADD = cot_add

```

#### ASG

```
ASG = cot_asg

```

#### ASG_ADD

```
ASG_ADD = cot_asgadd

```

#### ASG_BAND

```
ASG_BAND = cot_asgband

```

#### ASG_BOR

```
ASG_BOR = cot_asgbor

```

#### ASG_MUL

```
ASG_MUL = cot_asgmul

```

#### ASG_SDIV

```
ASG_SDIV = cot_asgsdiv

```

#### ASG_SHL

```
ASG_SHL = cot_asgshl

```

#### ASG_SMOD

```
ASG_SMOD = cot_asgsmod

```

#### ASG_SSHR

```
ASG_SSHR = cot_asgsshr

```

#### ASG_SUB

```
ASG_SUB = cot_asgsub

```

#### ASG_UDIV

```
ASG_UDIV = cot_asgudiv

```

#### ASG_UMOD

```
ASG_UMOD = cot_asgumod

```

#### ASG_USHR

```
ASG_USHR = cot_asgushr

```

#### ASG_XOR

```
ASG_XOR = cot_asgxor

```

#### BAND

```
BAND = cot_band

```

#### BNOT

```
BNOT = cot_bnot

```

#### BOR

```
BOR = cot_bor

```

#### CALL

```
CALL = cot_call

```

#### CAST

```
CAST = cot_cast

```

#### COMMA

```
COMMA = cot_comma

```

#### EMPTY

```
EMPTY = cot_empty

```

#### EQ

```
EQ = cot_eq

```

#### FADD

```
FADD = cot_fadd

```

#### FDIV

```
FDIV = cot_fdiv

```

#### FMUL

```
FMUL = cot_fmul

```

#### FNEG

```
FNEG = cot_fneg

```

#### FNUM

```
FNUM = cot_fnum

```

#### FSUB

```
FSUB = cot_fsub

```

#### HELPER

```
HELPER = cot_helper

```

#### IDX

```
IDX = cot_idx

```

#### INSN

```
INSN = cot_insn

```

#### LAND

```
LAND = cot_land

```

#### LNOT

```
LNOT = cot_lnot

```

#### LOR

```
LOR = cot_lor

```

#### MEMPTR

```
MEMPTR = cot_memptr

```

#### MEMREF

```
MEMREF = cot_memref

```

#### MUL

```
MUL = cot_mul

```

#### NE

```
NE = cot_ne

```

#### NEG

```
NEG = cot_neg

```

#### NUM

```
NUM = cot_num

```

#### OBJ

```
OBJ = cot_obj

```

#### POSTDEC

```
POSTDEC = cot_postdec

```

#### POSTINC

```
POSTINC = cot_postinc

```

#### PREDEC

```
PREDEC = cot_predec

```

#### PREINC

```
PREINC = cot_preinc

```

#### PTR

```
PTR = cot_ptr

```

#### REF

```
REF = cot_ref

```

#### SDIV

```
SDIV = cot_sdiv

```

#### SGE

```
SGE = cot_sge

```

#### SGT

```
SGT = cot_sgt

```

#### SHL

```
SHL = cot_shl

```

#### SIZEOF

```
SIZEOF = cot_sizeof

```

#### SLE

```
SLE = cot_sle

```

#### SLT

```
SLT = cot_slt

```

#### SMOD

```
SMOD = cot_smod

```

#### SSHR

```
SSHR = cot_sshr

```

#### STR

```
STR = cot_str

```

#### SUB

```
SUB = cot_sub

```

#### TERNARY

```
TERNARY = cot_tern

```

#### TYPE

```
TYPE = cot_type

```

#### UDIV

```
UDIV = cot_udiv

```

#### UGE

```
UGE = cot_uge

```

#### UGT

```
UGT = cot_ugt

```

#### ULE

```
ULE = cot_ule

```

#### ULT

```
ULT = cot_ult

```

#### UMOD

```
UMOD = cot_umod

```

#### USHR

```
USHR = cot_ushr

```

#### VAR

```
VAR = cot_var

```

#### XOR

```
XOR = cot_xor

```

#### is_arithmetic

```
is_arithmetic: bool

```

True for integer arithmetic operators (`+`, `-`, `*`, `/`, `%`).

#### is_assignment

```
is_assignment: bool

```

True for all assignment operators (`=`, `+=`, `-=`, etc.).

#### is_binary

```
is_binary: bool

```

True for binary operators (`x+y`, `x-y`, etc.). Excludes ternary.

#### is_call

```
is_call: bool

```

True for call expressions.

#### is_floating_point

```
is_floating_point: bool

```

True for floating-point arithmetic operators.

#### is_leaf

```
is_leaf: bool

```

True for leaf nodes with no children.

Matches `num`, `fnum`, `str`, `obj`, `var`, `helper`, and `type`.

#### is_prepost

```
is_prepost: bool

```

True for pre/post increment/decrement operators.

#### is_relational

```
is_relational: bool

```

True for comparison operators (`==`, `!=`, `<`, `>`, etc.).

#### is_unary

```
is_unary: bool

```

True for unary operators (`-x`, `!x`, `~x`, `*x`, `&x`, casts, etc.).

### PseudocodeExpressionVisitor

```
PseudocodeExpressionVisitor(flags: int = CV_FAST)

```

Bases: `ctree_visitor_t`

Visitor for ctree expressions. Override `visit_expression`.

Wraps raw `cexpr_t` into `PseudocodeExpression` before calling the user callback.

Tip

For most use cases, `PseudocodeFunction.walk_expressions`, `find_expression`, and the `find_*` convenience methods are simpler. Use this visitor when you need stateful traversal across multiple visits.

Example

```
class FindCalls(PseudocodeExpressionVisitor):
    def __init__(self):
        super().__init__()
        self.calls = []

    def visit_expression(self, expr):
        if expr.is_call:
            self.calls.append(expr)
        return 0

visitor = FindCalls()
visitor.apply_to(decomp.body)

```

Methods:

- **`apply_to`** – Apply the visitor to a ctree starting at body.
- **`visit_expr`** –
- **`visit_expression`** – Override this. Return 0 to continue, non-zero to stop.

#### apply_to

```
apply_to(
    body: PseudocodeInstruction,
    parent: Optional[Any] = None,
) -> int

```

Apply the visitor to a ctree starting at `body`.

Parameters:

- **`body`** (`PseudocodeInstruction`) – The root instruction to start traversal from.
- **`parent`** (`Optional[Any]`, default: `None` ) – Optional parent item (usually None).

#### visit_expr

```
visit_expr(raw_expr: Any) -> int

```

#### visit_expression

```
visit_expression(expr: PseudocodeExpression) -> int

```

Override this. Return 0 to continue, non-zero to stop.

### PseudocodeFor

```
PseudocodeFor(
    raw: cfor_t,
    _parent_insn: Optional[PseudocodeInstruction] = None,
)

```

Wrapper around an IDA `cfor_t` (for-loop details).

Attributes:

- **`body`** (`PseudocodeInstruction`) – Loop body instruction.
- **`condition`** (`PseudocodeExpression`) – Loop condition expression.
- **`init`** (`PseudocodeExpression`) – Initialization expression.
- **`raw_for`** (`cfor_t`) – Get the underlying cfor_t object.
- **`step`** (`PseudocodeExpression`) – Step/increment expression.

#### body

```
body: PseudocodeInstruction

```

Loop body instruction.

#### condition

```
condition: PseudocodeExpression

```

Loop condition expression.

#### init

```
init: PseudocodeExpression

```

Initialization expression.

#### raw_for

```
raw_for: cfor_t

```

Get the underlying `cfor_t` object.

#### step

```
step: PseudocodeExpression

```

Step/increment expression.

### PseudocodeFunction

```
PseudocodeFunction(raw: cfuncptr_t)

```

Wrapper around an IDA `cfunc_t` decompiled function result.

This is the primary result of decompilation. It provides access to:

- The function body as a ctree (instruction/expression tree)
- Pseudocode text lines
- Local variables (reuses `MicroLocalVars`)
- User annotations (comments, labels, flags)
- Address-to-instruction mappings

Obtained via `db.pseudocode.decompile(ea)`.

Tip

Common workflow — decompile, analyze, mutate, refresh:

```
func = db.pseudocode.decompile(ea)
for expr in func.walk_expressions():
    if expr.is_number and expr.number == 0xDEAD:
        expr.replace_with(PseudocodeExpression.from_number(0))
func.refresh()

```

Methods:

- **`add_comment`** – Add or replace a user comment at the given address.
- **`build_ctree`** – Regenerate the function body from microcode.
- **`find_assignments`** – Find all assignment expressions.
- **`find_calls`** – Find all call expressions, optionally filtered by target.
- **`find_expression`** – Find the first expression matching predicate.
- **`find_if_instructions`** – Find all if-instructions.
- **`find_instruction`** – Find the first instruction matching predicate.
- **`find_local_variable`** – Find a local variable by name.
- **`find_loops`** – Find all loop instructions (for, while, do).
- **`find_objects`** – Find all object reference expressions, optionally filtered by address.
- **`find_parent_of`** – Find the parent ctree item of the given expression or instruction.
- **`find_return_instructions`** – Find all return instructions.
- **`find_strings`** – Find all string constant expressions.
- **`find_variables`** – Find all variable reference expressions, optionally filtered.
- **`get_comment`** – Get a user comment at the given address.
- **`get_func_type`** – Get the function type information.
- **`refresh`** – Refresh the pseudocode text after ctree modifications.
- **`remove_comment`** – Remove a user comment at the given address.
- **`save_local_variable_info`** – Persist local variable modifications to the database.
- **`to_text`** – Get the decompiled pseudocode as text lines.
- **`user_comments`** – Context manager for user-defined comments from the database.
- **`user_iflags`** – Context manager for user-defined ctree item flags from the database.
- **`user_labels`** – Context manager for user-defined labels from the database.
- **`user_lvar_settings`** – Context manager for user-defined local variable settings.
- **`user_numforms`** – Context manager for user-defined number formats from the database.
- **`verify`** – Verify ctree consistency.
- **`walk_all`** – Iterate over all ctree items (expressions and instructions).
- **`walk_expressions`** – Iterate over all expressions in the function body.
- **`walk_instructions`** – Iterate over all instructions in the function body.

Attributes:

- **`arguments`** (`List[MicroLocalVar]`) – Function arguments (filtered from local variables).
- **`body`** (`PseudocodeInstruction`) – Function body as a PseudocodeInstruction (always a block).
- **`boundaries`** (`boundaries_t`) – Instruction boundaries map (boundaries_t).
- **`eamap`** (`eamap_t`) – Address-to-ctree-items map (eamap_t).
- **`entry_ea`** (`ea_t`) – Function entry address.
- **`header_lines`** (`int`) – Number of lines in the declaration/header area.
- **`local_variables`** (`MicroLocalVars`) – Local variables list as MicroLocalVars.
- **`maturity`** (`PseudocodeMaturity`) – Current maturity level of the ctree.
- **`mba`** (`MicroBlockArray`) – Underlying MicroBlockArray.
- **`raw_cfunc`** (`cfuncptr_t`) – Get the underlying cfuncptr_t object.

#### arguments

```
arguments: List[MicroLocalVar]

```

Function arguments (filtered from local variables).

#### body

```
body: PseudocodeInstruction

```

Function body as a `PseudocodeInstruction` (always a block).

#### boundaries

```
boundaries: boundaries_t

```

Instruction boundaries map (`boundaries_t`).

#### eamap

```
eamap: eamap_t

```

Address-to-ctree-items map (`eamap_t`).

Maps binary addresses to the ctree items generated from them.

#### entry_ea

```
entry_ea: ea_t

```

Function entry address.

#### header_lines

```
header_lines: int

```

Number of lines in the declaration/header area.

#### local_variables

```
local_variables: MicroLocalVars

```

Local variables list as `MicroLocalVars`.

#### maturity

```
maturity: PseudocodeMaturity

```

Current maturity level of the ctree.

#### mba

```
mba: MicroBlockArray

```

Underlying `MicroBlockArray`.

#### raw_cfunc

```
raw_cfunc: cfuncptr_t

```

Get the underlying `cfuncptr_t` object.

#### add_comment

```
add_comment(
    ea: int, text: str, placement: CommentPlacement = SEMI
) -> None

```

Add or replace a user comment at the given address.

The comment is persisted to the database immediately.

Parameters:

- **`ea`** (`int`) – Address to place the comment at (use the .ea property of an expression or instruction).
- **`text`** (`str`) – Comment text. Pass an empty string to remove.
- **`placement`** (`CommentPlacement`, default: `SEMI` ) – Item tree position (CommentPlacement.SEMI, CommentPlacement.BLOCK1, etc.). Defaults to CommentPlacement.SEMI, which anchors the comment to the statement's trailing semicolon (rendered as a trailing-line comment).

#### build_ctree

```
build_ctree() -> None

```

Regenerate the function body from microcode.

#### find_assignments

```
find_assignments() -> List[PseudocodeExpression]

```

Find all assignment expressions.

Returns:

- `List[PseudocodeExpression]` – List of PseudocodeExpression nodes where is_assignment is True.

#### find_calls

```
find_calls(
    target_name: Optional[str] = None,
    target_ea: Optional[int] = None,
) -> List[PseudocodeExpression]

```

Find all call expressions, optionally filtered by target.

Parameters:

- **`target_name`** (`Optional[str]`, default: `None` ) – If provided, only return calls to this function name.
- **`target_ea`** (`Optional[int]`, default: `None` ) – If provided, only return calls to this address.

Returns:

- `List[PseudocodeExpression]` – List of call PseudocodeExpression nodes.

#### find_expression

```
find_expression(
    predicate: Callable[[PseudocodeExpression], bool],
) -> Optional[PseudocodeExpression]

```

Find the first expression matching `predicate`.

Uses early termination — stops traversal as soon as a match is found, without collecting the full tree.

Parameters:

- **`predicate`** (`Callable[[PseudocodeExpression], bool]`) – A callable that takes a PseudocodeExpression and returns True for a match.

Returns:

- `Optional[PseudocodeExpression]` – The first matching expression, or None.

Example

```
expr = func.find_expression(
    lambda e: e.is_number and e.number == 0xDEAD
)

```

#### find_if_instructions

```
find_if_instructions() -> List[PseudocodeInstruction]

```

Find all if-instructions.

Returns:

- `List[PseudocodeInstruction]` – List of PseudocodeInstruction nodes where is_if is True.

#### find_instruction

```
find_instruction(
    predicate: Callable[[PseudocodeInstruction], bool],
) -> Optional[PseudocodeInstruction]

```

Find the first instruction matching `predicate`.

Uses early termination — stops traversal as soon as a match is found, without collecting the full tree.

Parameters:

- **`predicate`** (`Callable[[PseudocodeInstruction], bool]`) – A callable that takes a PseudocodeInstruction and returns True for a match.

Returns:

- `Optional[PseudocodeInstruction]` – The first matching instruction, or None.

Example

```
ret = func.find_instruction(lambda i: i.is_return)

```

#### find_local_variable

```
find_local_variable(name: str) -> Optional[MicroLocalVar]

```

Find a local variable by name.

Parameters:

- **`name`** (`str`) – Variable name to search for.

Returns:

- `Optional[MicroLocalVar]` – The MicroLocalVar, or None if not found.

#### find_loops

```
find_loops() -> List[PseudocodeInstruction]

```

Find all loop instructions (`for`, `while`, `do`).

Returns:

- `List[PseudocodeInstruction]` – List of loop PseudocodeInstruction nodes.

#### find_objects

```
find_objects(
    obj_ea: Optional[int] = None,
) -> List[PseudocodeExpression]

```

Find all object reference expressions, optionally filtered by address.

Parameters:

- **`obj_ea`** (`Optional[int]`, default: `None` ) – If provided, only return references to this address.

Returns:

- `List[PseudocodeExpression]` – List of PseudocodeExpression nodes where is_object is True.

#### find_parent_of

```
find_parent_of(
    item: Union[
        PseudocodeExpression, PseudocodeInstruction
    ],
) -> Optional[
    Union[PseudocodeExpression, PseudocodeInstruction]
]

```

Find the parent ctree item of the given expression or instruction.

Parameters:

- **`item`** (`Union[PseudocodeExpression, PseudocodeInstruction]`) – A PseudocodeExpression or PseudocodeInstruction whose parent to find.

Returns:

- `Optional[Union[PseudocodeExpression, PseudocodeInstruction]]` – The parent item wrapped as the appropriate type, or None
- `Optional[Union[PseudocodeExpression, PseudocodeInstruction]]` – if not found.

#### find_return_instructions

```
find_return_instructions() -> List[PseudocodeInstruction]

```

Find all return instructions.

Returns:

- `List[PseudocodeInstruction]` – List of PseudocodeInstruction nodes where is_return is True.

#### find_strings

```
find_strings() -> List[PseudocodeExpression]

```

Find all string constant expressions.

Returns:

- `List[PseudocodeExpression]` – List of PseudocodeExpression nodes where is_string is True.

#### find_variables

```
find_variables(
    var_index: Optional[int] = None,
    var_name: Optional[str] = None,
) -> List[PseudocodeExpression]

```

Find all variable reference expressions, optionally filtered.

Parameters:

- **`var_index`** (`Optional[int]`, default: `None` ) – If provided, only return references to this variable index.
- **`var_name`** (`Optional[str]`, default: `None` ) – If provided, only return references to this variable name.

Returns:

- `List[PseudocodeExpression]` – List of PseudocodeExpression nodes where is_variable is True.

#### get_comment

```
get_comment(
    ea: int, placement: CommentPlacement = SEMI
) -> Optional[str]

```

Get a user comment at the given address.

Parameters:

- **`ea`** (`int`) – Address to look up.
- **`placement`** (`CommentPlacement`, default: `SEMI` ) – Item tree position (default CommentPlacement.SEMI).

Returns:

- `Optional[str]` – The comment text, or None if no comment exists.

#### get_func_type

```
get_func_type() -> Optional[tinfo_t]

```

Get the function type information.

#### refresh

```
refresh() -> None

```

Refresh the pseudocode text after ctree modifications.

#### remove_comment

```
remove_comment(
    ea: int, placement: CommentPlacement = SEMI
) -> None

```

Remove a user comment at the given address.

Parameters:

- **`ea`** (`int`) – Address of the comment to remove.
- **`placement`** (`CommentPlacement`, default: `SEMI` ) – Item tree position (default CommentPlacement.SEMI).

#### save_local_variable_info

```
save_local_variable_info(
    variable: MicroLocalVar,
    *,
    save_name: bool = False,
    save_type: bool = False,
    save_comment: bool = False,
) -> bool

```

Persist local variable modifications to the database.

After modifying a `MicroLocalVar` (via `set_user_name`, `set_user_comment`, or `set_type`), call this method to write the changes to the IDA database so they survive reanalysis.

Wraps `ida_hexrays.modify_user_lvar_info` internally.

Parameters:

- **`variable`** (`MicroLocalVar`) – The local variable whose info should be saved.
- **`save_name`** (`bool`, default: `False` ) – Persist the variable's name.
- **`save_type`** (`bool`, default: `False` ) – Persist the variable's type.
- **`save_comment`** (`bool`, default: `False` ) – Persist the variable's comment.

Returns:

- `bool` – True if the information was saved successfully.

#### to_text

```
to_text(remove_tags: bool = True) -> List[str]

```

Get the decompiled pseudocode as text lines.

Parameters:

- **`remove_tags`** (`bool`, default: `True` ) – If True, strips IDA color/formatting tags.

Returns:

- `List[str]` – A list of strings, each a line of pseudocode.

#### user_comments

```
user_comments() -> Generator

```

Context manager for user-defined comments from the database.

Yields the raw IDA `user_cmts_t` mapping (`treeloc_t` to comment), or `None` if no user-defined comments exist. The resource is freed automatically when the `with` block exits.

Example

```
with func.user_comments() as cmts:
    if cmts is not None:
        for treeloc, cmt in cmts.items():
            print(treeloc.ea, cmt)

```

#### user_iflags

```
user_iflags() -> Generator

```

Context manager for user-defined ctree item flags from the database.

Yields the raw IDA `user_iflags_t` mapping (`citem_locator_t` to flags), or `None` if no user-defined flags exist. The resource is freed automatically when the `with` block exits.

Example

```
with func.user_iflags() as iflags:
    if iflags is not None:
        for cl, f in iflags.items():
            print(cl.ea, cl.op, f)

```

#### user_labels

```
user_labels() -> Generator

```

Context manager for user-defined labels from the database.

Yields the raw IDA `user_labels_t` mapping (label number to name), or `None` if no user-defined labels exist. The resource is freed automatically when the `with` block exits.

Example

```
with func.user_labels() as labels:
    if labels is not None:
        for org_label, name in labels.items():
            print(org_label, name)

```

#### user_lvar_settings

```
user_lvar_settings() -> Generator

```

Context manager for user-defined local variable settings.

Yields a raw IDA `lvar_uservec_t` object, or `None` if no user-defined settings exist. Access the `lvvec` attribute to iterate individual `lvar_saved_info_t` entries (each has `name`, `type`, `cmt`, `size`, and `ll.defea`).

Treat the yielded object as scoped to the `with` block; do not retain references after exit.

Example

```
with func.user_lvar_settings() as lvinf:
    if lvinf is not None:
        for lv in lvinf.lvvec:
            print(lv.name, lv.type, lv.cmt)

```

#### user_numforms

```
user_numforms() -> Generator

```

Context manager for user-defined number formats from the database.

Yields the raw IDA `user_numforms_t` mapping (`operand_locator_t` to `number_format_t`), or `None` if no user-defined number formats exist. The resource is freed automatically when the `with` block exits.

Example

```
with func.user_numforms() as numforms:
    if numforms is not None:
        for ol, nf in numforms.items():
            print(ol.ea, ol.opnum, nf.flags)

```

#### verify

```
verify(allow_unused_labels: bool = True) -> None

```

Verify ctree consistency.

Parameters:

- **`allow_unused_labels`** (`bool`, default: `True` ) – If True, unused labels are allowed.

#### walk_all

```
walk_all() -> Iterator[
    Union[PseudocodeExpression, PseudocodeInstruction]
]

```

Iterate over all ctree items (expressions and instructions).

#### walk_expressions

```
walk_expressions() -> Iterator[PseudocodeExpression]

```

Iterate over all expressions in the function body.

Collects all items first, so the iterator itself is stable.

Warning

Structural mutations (deleting nodes, splicing subtrees) may invalidate already-collected wrappers. In-place swaps via `PseudocodeExpression.replace_with` are safe because the underlying `cexpr_t` pointer remains valid. Call `refresh` after all mutations to regenerate the pseudocode text.

#### walk_instructions

```
walk_instructions() -> Iterator[PseudocodeInstruction]

```

Iterate over all instructions in the function body.

### PseudocodeGoto

```
PseudocodeGoto(
    raw: cgoto_t,
    _parent_insn: Optional[PseudocodeInstruction] = None,
)

```

Wrapper around an IDA `cgoto_t` (goto-instruction details).

Attributes:

- **`label_num`** (`int`) – Target label number.
- **`raw_goto`** (`cgoto_t`) – Get the underlying cgoto_t object.

#### label_num

```
label_num: int

```

Target label number.

#### raw_goto

```
raw_goto: cgoto_t

```

Get the underlying `cgoto_t` object.

### PseudocodeIf

```
PseudocodeIf(
    raw: cif_t,
    _parent_insn: Optional[PseudocodeInstruction] = None,
)

```

Wrapper around an IDA `cif_t` (if-instruction details).

Methods:

- **`swap_branches`** – Swap the then/else branches and negate the condition.

Attributes:

- **`condition`** (`PseudocodeExpression`) – The if-condition expression.
- **`else_branch`** (`Optional[PseudocodeInstruction]`) – The else-branch instruction, or None if no else clause.
- **`has_else`** (`bool`) – True if there is an else-branch.
- **`raw_if`** (`cif_t`) – Get the underlying cif_t object.
- **`then_branch`** (`PseudocodeInstruction`) – The then-branch instruction.

#### condition

```
condition: PseudocodeExpression

```

The if-condition expression.

#### else_branch

```
else_branch: Optional[PseudocodeInstruction]

```

The else-branch instruction, or `None` if no else clause.

#### has_else

```
has_else: bool

```

True if there is an else-branch.

#### raw_if

```
raw_if: cif_t

```

Get the underlying `cif_t` object.

#### then_branch

```
then_branch: PseudocodeInstruction

```

The then-branch instruction.

#### swap_branches

```
swap_branches() -> bool

```

Swap the then/else branches and negate the condition.

Requires both then and else branches to be present.

Returns:

- `bool` – True if the branches were swapped, False if no else branch.

### PseudocodeInstruction

```
PseudocodeInstruction(
    raw: cinsn_t, _parent: Optional[Any] = None
)

```

Wrapper around an IDA `cinsn_t` instruction/statement node.

Type-specific detail properties return `None` when the instruction type does not match.

Methods:

- **`contains_insn`** – Check if this instruction contains the given instruction type.
- **`is_ordinary_flow`** – True if this instruction has ordinary control flow (no jumps/breaks).
- **`make_block`** – Create a detached block instruction containing an empty block.
- **`make_expr`** – Create a detached expression-statement instruction.
- **`make_goto`** – Create a detached goto instruction.
- **`make_if`** – Create a detached if/else instruction.
- **`make_nop`** – Create a detached empty (NOP) instruction.
- **`make_return`** – Create a detached return instruction.
- **`walk_all`** – Iterate over all ctree items (expressions and instructions)
- **`walk_expressions`** – Iterate over all expressions in the subtree rooted at this instruction.
- **`walk_instructions`** – Iterate over all instructions in the subtree rooted at this instruction.

Attributes:

- **`block`** (`Optional[PseudocodeBlock]`) – For cit_block: the statement block. None otherwise.
- **`do_details`** (`Optional[PseudocodeDo]`) – For cit_do: the do-while details. None otherwise.
- **`ea`** (`ea_t`) – Effective address of this instruction.
- **`expression`** (`Optional[PseudocodeExpression]`) – For cit_expr: the contained expression. None otherwise.
- **`for_details`** (`Optional[PseudocodeFor]`) – For cit_for: the for-loop details. None otherwise.
- **`goto_details`** (`Optional[PseudocodeGoto]`) – For cit_goto: the goto-instruction details. None otherwise.
- **`if_details`** (`Optional[PseudocodeIf]`) – For cit_if: the if-instruction details. None otherwise.
- **`index`** (`int`) – Item index in the ctree arrays.
- **`is_block`** (`bool`) – True if this is a block instruction.
- **`is_goto`** (`bool`) – True if this is a goto instruction.
- **`is_if`** (`bool`) – True if this is an if-instruction.
- **`is_loop`** (`bool`) – True if this is a loop instruction (for, while, do).
- **`is_return`** (`bool`) – True if this is a return instruction.
- **`is_switch`** (`bool`) – True if this is a switch instruction.
- **`label_num`** (`int`) – Label number (-1 if none).
- **`op`** (`PseudocodeInstructionOp`) – Instruction operator type.
- **`raw_insn`** (`cinsn_t`) – Get the underlying cinsn_t object.
- **`return_details`** (`Optional[PseudocodeReturn]`) – For cit_return: the return-instruction details. None otherwise.
- **`switch_details`** (`Optional[PseudocodeSwitch]`) – For cit_switch: the switch-instruction details. None otherwise.
- **`throw_details`** (`Optional[PseudocodeThrow]`) – For cit_throw: the throw-instruction details. None otherwise.
- **`try_details`** (`Optional[PseudocodeTry]`) – For cit_try: the try-instruction details. None otherwise.
- **`while_details`** (`Optional[PseudocodeWhile]`) – For cit_while: the while-loop details. None otherwise.

#### block

```
block: Optional[PseudocodeBlock]

```

For `cit_block`: the statement block. `None` otherwise.

#### do_details

```
do_details: Optional[PseudocodeDo]

```

For `cit_do`: the do-while details. `None` otherwise.

#### ea

```
ea: ea_t

```

Effective address of this instruction.

#### expression

```
expression: Optional[PseudocodeExpression]

```

For `cit_expr`: the contained expression. `None` otherwise.

#### for_details

```
for_details: Optional[PseudocodeFor]

```

For `cit_for`: the for-loop details. `None` otherwise.

#### goto_details

```
goto_details: Optional[PseudocodeGoto]

```

For `cit_goto`: the goto-instruction details. `None` otherwise.

#### if_details

```
if_details: Optional[PseudocodeIf]

```

For `cit_if`: the if-instruction details. `None` otherwise.

#### index

```
index: int

```

Item index in the ctree arrays.

#### is_block

```
is_block: bool

```

True if this is a block instruction.

#### is_goto

```
is_goto: bool

```

True if this is a goto instruction.

#### is_if

```
is_if: bool

```

True if this is an if-instruction.

#### is_loop

```
is_loop: bool

```

True if this is a loop instruction (`for`, `while`, `do`).

#### is_return

```
is_return: bool

```

True if this is a return instruction.

#### is_switch

```
is_switch: bool

```

True if this is a switch instruction.

#### label_num

```
label_num: int

```

Label number (`-1` if none).

#### op

```
op: PseudocodeInstructionOp

```

Instruction operator type.

#### raw_insn

```
raw_insn: cinsn_t

```

Get the underlying `cinsn_t` object.

#### return_details

```
return_details: Optional[PseudocodeReturn]

```

For `cit_return`: the return-instruction details. `None` otherwise.

#### switch_details

```
switch_details: Optional[PseudocodeSwitch]

```

For `cit_switch`: the switch-instruction details. `None` otherwise.

#### throw_details

```
throw_details: Optional[PseudocodeThrow]

```

For `cit_throw`: the throw-instruction details. `None` otherwise.

#### try_details

```
try_details: Optional[PseudocodeTry]

```

For `cit_try`: the try-instruction details. `None` otherwise.

#### while_details

```
while_details: Optional[PseudocodeWhile]

```

For `cit_while`: the while-loop details. `None` otherwise.

#### contains_insn

```
contains_insn(
    op: PseudocodeInstructionOp, times: int = 1
) -> bool

```

Check if this instruction contains the given instruction type.

#### is_ordinary_flow

```
is_ordinary_flow() -> bool

```

True if this instruction has ordinary control flow (no jumps/breaks).

#### make_block

```
make_block(ea: int = BADADDR) -> PseudocodeInstruction

```

Create a detached block instruction containing an empty block.

Useful as a container body for `make_if` branches.

Parameters:

- **`ea`** (`int`, default: `BADADDR` ) – Address to associate with the block.

#### make_expr

```
make_expr(
    ea: int, expr: PseudocodeExpression
) -> PseudocodeInstruction

```

Create a detached expression-statement instruction.

Parameters:

- **`ea`** (`int`) – Address to associate with the instruction.
- **`expr`** (`PseudocodeExpression`) – The expression to wrap as a statement.

Warning

The instruction and `expr` share the underlying `cexpr_t`: mutations through either wrapper are visible to the other. Ownership is transferred to the instruction, so `expr` will dangle once the instruction is freed or replaced. Reusing `expr` in another factory would also create a tree where two parents share one child, corrupting the ctree. Do not use `expr` independently after this call.

#### make_goto

```
make_goto(ea: int, label_num: int) -> PseudocodeInstruction

```

Create a detached goto instruction.

Parameters:

- **`ea`** (`int`) – Address to associate with the instruction.
- **`label_num`** (`int`) – Target label number.

#### make_if

```
make_if(
    ea: int,
    condition: PseudocodeExpression,
    then_branch: PseudocodeInstruction,
    else_branch: Optional[PseudocodeInstruction] = None,
) -> PseudocodeInstruction

```

Create a detached if/else instruction.

Parameters:

- **`ea`** (`int`) – Address to associate with the instruction.
- **`condition`** (`PseudocodeExpression`) – The condition expression.
- **`then_branch`** (`PseudocodeInstruction`) – The then-branch instruction (often a block).
- **`else_branch`** (`Optional[PseudocodeInstruction]`, default: `None` ) – Optional else-branch instruction.

Warning

`condition` is moved (swapped) into the if and becomes an empty expression afterward.

`then_branch` and `else_branch` share their underlying `cinsn_t` with the if: mutations through either wrapper are visible to the other, and ownership is transferred to the if (so the wrappers will dangle once the if is freed or replaced). Do not use any of the arguments independently after this call.

#### make_nop

```
make_nop(ea: int) -> PseudocodeInstruction

```

Create a detached empty (NOP) instruction.

Parameters:

- **`ea`** (`int`) – Address to associate with the instruction.

#### make_return

```
make_return(
    ea: int, expr: Optional[PseudocodeExpression] = None
) -> PseudocodeInstruction

```

Create a detached return instruction.

Parameters:

- **`ea`** (`int`) – Address to associate with the instruction.
- **`expr`** (`Optional[PseudocodeExpression]`, default: `None` ) – Optional return-value expression.

Warning

If provided, `expr` is moved (swapped) into the return and becomes an empty expression afterward. Do not use `expr` independently after this call.

#### walk_all

```
walk_all() -> Iterator[
    Union[PseudocodeExpression, PseudocodeInstruction]
]

```

Iterate over all ctree items (expressions and instructions) in the subtree rooted at this instruction.

#### walk_expressions

```
walk_expressions() -> Iterator[PseudocodeExpression]

```

Iterate over all expressions in the subtree rooted at this instruction.

Collects all items first, so the iterator itself is stable.

Warning

Structural mutations (deleting nodes, splicing subtrees) may invalidate already-collected wrappers. In-place swaps via `PseudocodeExpression.replace_with` are safe because the underlying `cexpr_t` pointer remains valid. Call `PseudocodeFunction.refresh` after all mutations to regenerate the pseudocode text.

#### walk_instructions

```
walk_instructions() -> Iterator[PseudocodeInstruction]

```

Iterate over all instructions in the subtree rooted at this instruction.

### PseudocodeInstructionOp

Bases: `IntEnum`

Statement/instruction operator types corresponding to `cit_*` constants.

Attributes:

- **`ASM`** –
- **`BLOCK`** –
- **`BREAK`** –
- **`CONTINUE`** –
- **`DO`** –
- **`EMPTY`** –
- **`EXPR`** –
- **`FOR`** –
- **`GOTO`** –
- **`IF`** –
- **`RETURN`** –
- **`SWITCH`** –
- **`THROW`** –
- **`TRY`** –
- **`WHILE`** –
- **`is_control_flow`** (`bool`) – True for control-flow instructions (break, continue, return, goto).
- **`is_loop`** (`bool`) – True for loop instructions (for, while, do).

#### ASM

```
ASM = cit_asm

```

#### BLOCK

```
BLOCK = cit_block

```

#### BREAK

```
BREAK = cit_break

```

#### CONTINUE

```
CONTINUE = cit_continue

```

#### DO

```
DO = cit_do

```

#### EMPTY

```
EMPTY = cit_empty

```

#### EXPR

```
EXPR = cit_expr

```

#### FOR

```
FOR = cit_for

```

#### GOTO

```
GOTO = cit_goto

```

#### IF

```
IF = cit_if

```

#### RETURN

```
RETURN = cit_return

```

#### SWITCH

```
SWITCH = cit_switch

```

#### THROW

```
THROW = cit_throw

```

#### TRY

```
TRY = cit_try

```

#### WHILE

```
WHILE = cit_while

```

#### is_control_flow

```
is_control_flow: bool

```

True for control-flow instructions (`break`, `continue`, `return`, `goto`).

#### is_loop

```
is_loop: bool

```

True for loop instructions (`for`, `while`, `do`).

### PseudocodeInstructionVisitor

```
PseudocodeInstructionVisitor(
    flags: int = CV_FAST | CV_INSNS,
)

```

Bases: `ctree_visitor_t`

Visitor for ctree instructions. Override `visit_instruction`.

Only visits instruction nodes (`CV_INSNS` flag is set automatically).

Tip

For most use cases, `PseudocodeFunction.walk_instructions`, `find_instruction`, and the `find_*` convenience methods are simpler. Use this visitor when you need stateful traversal across multiple visits.

Example

```
class FindReturns(PseudocodeInstructionVisitor):
    def __init__(self):
        super().__init__()
        self.returns = []

    def visit_instruction(self, insn):
        if insn.is_return:
            self.returns.append(insn)
        return 0

visitor = FindReturns()
visitor.apply_to(decomp.body)

```

Methods:

- **`apply_to`** – Apply the visitor to a ctree starting at body.
- **`visit_insn`** –
- **`visit_instruction`** – Override this. Return 0 to continue, non-zero to stop.

#### apply_to

```
apply_to(
    body: PseudocodeInstruction,
    parent: Optional[Any] = None,
) -> int

```

Apply the visitor to a ctree starting at `body`.

#### visit_insn

```
visit_insn(raw_insn: Any) -> int

```

#### visit_instruction

```
visit_instruction(insn: PseudocodeInstruction) -> int

```

Override this. Return 0 to continue, non-zero to stop.

### PseudocodeMaturity

Bases: `IntEnum`

CTree maturity levels corresponding to `CMAT_*` constants.

Attributes:

- **`BUILT`** –
- **`CASTED`** –
- **`CPA`** –
- **`FINAL`** –
- **`NICE`** –
- **`TRANS1`** –
- **`TRANS2`** –
- **`TRANS3`** –
- **`ZERO`** –

#### BUILT

```
BUILT = CMAT_BUILT

```

#### CASTED

```
CASTED = CMAT_CASTED

```

#### CPA

```
CPA = CMAT_CPA

```

#### FINAL

```
FINAL = CMAT_FINAL

```

#### NICE

```
NICE = CMAT_NICE

```

#### TRANS1

```
TRANS1 = CMAT_TRANS1

```

#### TRANS2

```
TRANS2 = CMAT_TRANS2

```

#### TRANS3

```
TRANS3 = CMAT_TRANS3

```

#### ZERO

```
ZERO = CMAT_ZERO

```

### PseudocodeNumber

```
PseudocodeNumber(
    raw: cnumber_t,
    _parent_expr: Optional[PseudocodeExpression] = None,
)

```

Wrapper around an IDA `cnumber_t` numeric constant.

Supports the full numeric protocol, so instances can be compared and used in arithmetic directly:

```
if expr.number == 0: ...
if expr.number > 10: ...
x = expr.number + 1

```

Methods:

- **`typed_value`** – Value with sign extension based on an explicit type_info.

Attributes:

- **`number_format`** (`number_format_t`) – Number format (number_format_t) for display customization.
- **`raw_number`** (`cnumber_t`) – Get the underlying cnumber_t object.
- **`unsigned_value`** (`int`) – Raw 64-bit unsigned value, ignoring sign.
- **`value`** (`int`) – Numeric value, sign-extended based on the expression type.

#### number_format

```
number_format: number_format_t

```

Number format (`number_format_t`) for display customization.

#### raw_number

```
raw_number: cnumber_t

```

Get the underlying `cnumber_t` object.

#### unsigned_value

```
unsigned_value: int

```

Raw 64-bit unsigned value, ignoring sign.

#### value

```
value: int

```

Numeric value, sign-extended based on the expression type.

Returns the signed interpretation when the parent expression has a signed type (e.g. `-1` for `int`), and the unsigned value otherwise. Falls back to raw unsigned if no parent type is available.

#### typed_value

```
typed_value(type_info: tinfo_t) -> int

```

Value with sign extension based on an explicit `type_info`.

### PseudocodeParentVisitor

```
PseudocodeParentVisitor(post: bool = False)

```

Bases: `ctree_parentee_t`

Visitor with parent tracking.

Extends `PseudocodeVisitor` with methods to access the parent expression or instruction at any point during traversal.

Tip

For one-off parent lookups, `PseudocodeFunction.find_parent_of` is simpler. Use this visitor when you need parent context for every node during a full traversal.

Example

```
class FindAssignedVars(PseudocodeParentVisitor):
    def visit_expression(self, expr):
        if expr.is_variable:
            parent = self.parent_expression()
            if parent and parent.is_assignment:
                ...
        return 0

```

Methods:

- **`apply_to`** – Apply the visitor to a ctree starting at body.
- **`parent_expression`** – Get the parent as a PseudocodeExpression, or None.
- **`parent_instruction`** – Get the parent as a PseudocodeInstruction, or None.
- **`visit_expr`** –
- **`visit_expression`** – Override this. Return 0 to continue, non-zero to stop.
- **`visit_insn`** –
- **`visit_instruction`** – Override this. Return 0 to continue, non-zero to stop.

#### apply_to

```
apply_to(
    body: PseudocodeInstruction,
    parent: Optional[Any] = None,
) -> int

```

Apply the visitor to a ctree starting at `body`.

#### parent_expression

```
parent_expression() -> Optional[PseudocodeExpression]

```

Get the parent as a `PseudocodeExpression`, or `None`.

#### parent_instruction

```
parent_instruction() -> Optional[PseudocodeInstruction]

```

Get the parent as a `PseudocodeInstruction`, or `None`.

#### visit_expr

```
visit_expr(raw_expr: Any) -> int

```

#### visit_expression

```
visit_expression(expr: PseudocodeExpression) -> int

```

Override this. Return 0 to continue, non-zero to stop.

#### visit_insn

```
visit_insn(raw_insn: Any) -> int

```

#### visit_instruction

```
visit_instruction(insn: PseudocodeInstruction) -> int

```

Override this. Return 0 to continue, non-zero to stop.

### PseudocodeReturn

```
PseudocodeReturn(
    raw: creturn_t,
    _parent_insn: Optional[PseudocodeInstruction] = None,
)

```

Wrapper around an IDA `creturn_t` (return-instruction details).

Attributes:

- **`expression`** (`PseudocodeExpression`) – The returned expression.
- **`raw_return`** (`creturn_t`) – Get the underlying creturn_t object.

#### expression

```
expression: PseudocodeExpression

```

The returned expression.

#### raw_return

```
raw_return: creturn_t

```

Get the underlying `creturn_t` object.

### PseudocodeSwitch

```
PseudocodeSwitch(
    raw: cswitch_t,
    _parent_insn: Optional[PseudocodeInstruction] = None,
)

```

Wrapper around an IDA `cswitch_t` (switch-instruction details).

Supports iteration over cases.

Attributes:

- **`cases`** (`List[PseudocodeCase]`) – List of switch cases.
- **`expression`** (`PseudocodeExpression`) – The switch expression being tested.
- **`raw_switch`** (`cswitch_t`) – Get the underlying cswitch_t object.

#### cases

```
cases: List[PseudocodeCase]

```

List of switch cases.

#### expression

```
expression: PseudocodeExpression

```

The switch expression being tested.

#### raw_switch

```
raw_switch: cswitch_t

```

Get the underlying `cswitch_t` object.

### PseudocodeThrow

```
PseudocodeThrow(
    raw: cthrow_t,
    _parent_insn: Optional[PseudocodeInstruction] = None,
)

```

Wrapper around an IDA `cthrow_t` (C++ throw-instruction details).

Attributes:

- **`expression`** (`PseudocodeExpression`) – The thrown expression.
- **`raw_throw`** (`cthrow_t`) – Get the underlying cthrow_t object.

#### expression

```
expression: PseudocodeExpression

```

The thrown expression.

#### raw_throw

```
raw_throw: cthrow_t

```

Get the underlying `cthrow_t` object.

### PseudocodeTry

```
PseudocodeTry(
    raw: ctry_t,
    _parent_insn: Optional[PseudocodeInstruction] = None,
)

```

Wrapper around an IDA `ctry_t` (C++ try-instruction details).

Attributes:

- **`body`** (`PseudocodeBlock`) – The try body block (ctry_t extends cblock_t).
- **`raw_try`** (`ctry_t`) – Get the underlying ctry_t object.

#### body

```
body: PseudocodeBlock

```

The try body block (`ctry_t` extends `cblock_t`).

#### raw_try

```
raw_try: ctry_t

```

Get the underlying `ctry_t` object.

### PseudocodeVisitor

```
PseudocodeVisitor(flags: int = CV_FAST)

```

Bases: `ctree_visitor_t`

Visitor for both expressions and instructions.

Override `visit_expression` and/or `visit_instruction`.

Tip

For most use cases, `PseudocodeFunction.walk_all`, `find_expression`, and `find_instruction` are simpler. Use this visitor when you need stateful traversal across both expressions and instructions simultaneously.

Example

```
class CollectAll(PseudocodeVisitor):
    def __init__(self):
        super().__init__()
        self.items = []

    def visit_expression(self, expr):
        self.items.append(expr)
        return 0

    def visit_instruction(self, insn):
        self.items.append(insn)
        return 0

```

Methods:

- **`apply_to`** – Apply the visitor to a ctree starting at body.
- **`visit_expr`** –
- **`visit_expression`** – Override this. Return 0 to continue, non-zero to stop.
- **`visit_insn`** –
- **`visit_instruction`** – Override this. Return 0 to continue, non-zero to stop.

#### apply_to

```
apply_to(
    body: PseudocodeInstruction,
    parent: Optional[Any] = None,
) -> int

```

Apply the visitor to a ctree starting at `body`.

#### visit_expr

```
visit_expr(raw_expr: Any) -> int

```

#### visit_expression

```
visit_expression(expr: PseudocodeExpression) -> int

```

Override this. Return 0 to continue, non-zero to stop.

#### visit_insn

```
visit_insn(raw_insn: Any) -> int

```

#### visit_instruction

```
visit_instruction(insn: PseudocodeInstruction) -> int

```

Override this. Return 0 to continue, non-zero to stop.

### PseudocodeVisitorFlags

Bases: `IntFlag`

CTree visitor flags corresponding to `CV_*` constants.

Attributes:

- **`FAST`** –
- **`INSNS`** –
- **`PARENTS`** –
- **`POST`** –
- **`PRUNE`** –
- **`RESTART`** –

#### FAST

```
FAST = CV_FAST

```

#### INSNS

```
INSNS = CV_INSNS

```

#### PARENTS

```
PARENTS = CV_PARENTS

```

#### POST

```
POST = CV_POST

```

#### PRUNE

```
PRUNE = CV_PRUNE

```

#### RESTART

```
RESTART = CV_RESTART

```

### PseudocodeWhile

```
PseudocodeWhile(
    raw: cwhile_t,
    _parent_insn: Optional[PseudocodeInstruction] = None,
)

```

Wrapper around an IDA `cwhile_t` (while-loop details).

Attributes:

- **`body`** (`PseudocodeInstruction`) – Loop body instruction.
- **`condition`** (`PseudocodeExpression`) – Loop condition expression.
- **`raw_while`** (`cwhile_t`) – Get the underlying cwhile_t object.

#### body

```
body: PseudocodeInstruction

```

Loop body instruction.

#### condition

```
condition: PseudocodeExpression

```

Loop condition expression.

#### raw_while

```
raw_while: cwhile_t

```

Get the underlying `cwhile_t` object.
