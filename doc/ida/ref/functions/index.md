# `Functions`

## functions

Classes:

- **`FunctionChunk`** – Represents a function chunk (main or tail).
- **`FunctionFlags`** – Function attribute flags from IDA SDK.
- **`Functions`** – Provides access to function-related operations within the IDA database.
- **`LocalVariable`** – Represents a local variable or argument in a function.
- **`LocalVariableAccessType`** – Type of access to a local variable.
- **`LocalVariableContext`** – Context where local variable is referenced.
- **`LocalVariableReference`** – Reference to a local variable in pseudocode.
- **`StackPoint`** – Stack pointer change information.
- **`TailInfo`** – Function tail chunk information.

### FunctionChunk

```
FunctionChunk(start_ea: ea_t, end_ea: ea_t, is_main: bool)

```

Represents a function chunk (main or tail).

Attributes:

- **`end_ea`** (`ea_t`) – End address of the function chunk
- **`is_main`** (`bool`) – True if is the function main chunk
- **`start_ea`** (`ea_t`) – Start address of the function chunk

#### end_ea

```
end_ea: ea_t

```

End address of the function chunk

#### is_main

```
is_main: bool

```

True if is the function main chunk

#### start_ea

```
start_ea: ea_t

```

Start address of the function chunk

### FunctionFlags

Bases: `Flag`

Function attribute flags from IDA SDK.

Attributes:

- **`BOTTOMBP`** – BP points to the bottom of the stack frame
- **`CATCH`** – Function is an exception catch handler
- **`FAR`** – Far function
- **`FRAME`** – Function uses frame pointer (BP)
- **`FUZZY_SP`** – Function changes SP in untraceable way
- **`HIDDEN`** – A hidden function chunk
- **`LIB`** – Library function
- **`LUMINA`** – Function info is provided by Lumina
- **`NORET`** – Function doesn't return
- **`NORET_PENDING`** – Function 'non-return' analysis needed
- **`OUTLINE`** – Outlined code, not a real function
- **`PROLOG_OK`** – Prolog analysis has been performed
- **`PURGED_OK`** – 'argsize' field has been validated
- **`REANALYZE`** – Function frame changed, request to reanalyze
- **`SP_READY`** – SP-analysis has been performed
- **`STATICDEF`** – Static function
- **`TAIL`** – This is a function tail
- **`THUNK`** – Thunk (jump) function
- **`UNWIND`** – Function is an exception unwind handler
- **`USERFAR`** – User has specified far-ness of the function

#### BOTTOMBP

```
BOTTOMBP = FUNC_BOTTOMBP

```

BP points to the bottom of the stack frame

#### CATCH

```
CATCH = FUNC_CATCH

```

Function is an exception catch handler

#### FAR

```
FAR = FUNC_FAR

```

Far function

#### FRAME

```
FRAME = FUNC_FRAME

```

Function uses frame pointer (BP)

#### FUZZY_SP

```
FUZZY_SP = FUNC_FUZZY_SP

```

Function changes SP in untraceable way

#### HIDDEN

```
HIDDEN = FUNC_HIDDEN

```

A hidden function chunk

#### LIB

```
LIB = FUNC_LIB

```

Library function

#### LUMINA

```
LUMINA = FUNC_LUMINA

```

Function info is provided by Lumina

#### NORET

```
NORET = FUNC_NORET

```

Function doesn't return

#### NORET_PENDING

```
NORET_PENDING = FUNC_NORET_PENDING

```

Function 'non-return' analysis needed

#### OUTLINE

```
OUTLINE = FUNC_OUTLINE

```

Outlined code, not a real function

#### PROLOG_OK

```
PROLOG_OK = FUNC_PROLOG_OK

```

Prolog analysis has been performed

#### PURGED_OK

```
PURGED_OK = FUNC_PURGED_OK

```

'argsize' field has been validated

#### REANALYZE

```
REANALYZE = FUNC_REANALYZE

```

Function frame changed, request to reanalyze

#### SP_READY

```
SP_READY = FUNC_SP_READY

```

SP-analysis has been performed

#### STATICDEF

```
STATICDEF = FUNC_STATICDEF

```

Static function

#### TAIL

```
TAIL = FUNC_TAIL

```

This is a function tail

#### THUNK

```
THUNK = FUNC_THUNK

```

Thunk (jump) function

#### UNWIND

```
UNWIND = FUNC_UNWIND

```

Function is an exception unwind handler

#### USERFAR

```
USERFAR = FUNC_USERFAR

```

User has specified far-ness of the function

### Functions

```
Functions(database: Database)

```

Bases: `DatabaseEntity`

Provides access to function-related operations within the IDA database.

This class handles function discovery, analysis, manipulation, and provides access to function properties like names, signatures, basic blocks, and pseudocode.

Can be used to iterate over all functions in the opened database.

Parameters:

- **`database`** (`Database`) – Reference to the active IDA database.

Note

Since this class does not manage the lifetime of IDA kernel objects (func_t\*), it is recommended to use these pointers within a limited scope. Obtain the pointer, perform the necessary operations, and avoid retaining references beyond the immediate context to prevent potential issues with object invalidation.

Methods:

- **`create`** – Creates a new function at the specified address.
- **`does_return`** – Check if function returns.
- **`get_all`** – Retrieves all functions in the database.
- **`get_at`** – Retrieves the function that contains the given address.
- **`get_between`** – Retrieves functions within the specified address range.
- **`get_by_name`** – Find a function by its name.
- **`get_callees`** – Gets all functions called by this function.
- **`get_callers`** – Gets all functions that call this function.
- **`get_chunk_at`** – Get function chunk at exact address.
- **`get_chunks`** – Get all chunks (main and tail) of a function.
- **`get_comment`** – Get comment for function.
- **`get_data_items`** – Iterate over data items within the function.
- **`get_disassembly`** – Retrieves the disassembly lines for the given function.
- **`get_flags`** – Get function attribute flags.
- **`get_flowchart`** – Retrieves the flowchart of the specified function,
- **`get_function_by_name`** –
- **`get_instructions`** – Retrieves all instructions within the given function.
- **`get_local_variable_by_name`** – Find a local variable by name.
- **`get_local_variable_references`** – Get all references to a specific local variable.
- **`get_local_variables`** – Get all local variables for a function.
- **`get_microcode`** – Generates microcode for the given function.
- **`get_name`** – Retrieves the function's name.
- **`get_next`** – Get the next function after the given address.
- **`get_pseudocode`** – Decompiles the given function and returns the pseudocode result.
- **`get_signature`** – Retrieves the function's type signature.
- **`get_stack_points`** – Get function stack points for SP tracking.
- **`get_tail_info`** – Get information about tail chunk's owner function.
- **`get_tails`** – Get all tail chunks of a function.
- **`is_chunk_at`** – Check if the given address belongs to a function chunk.
- **`is_entry_chunk`** – Check if chunk is entry chunk.
- **`is_far`** – Check if function is far.
- **`is_tail_chunk`** – Check if chunk is tail chunk.
- **`remove`** – Removes the function at the specified address.
- **`set_comment`** – Set comment for function.
- **`set_name`** – Renames the given function.

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

#### create

```
create(ea: ea_t) -> bool

```

Creates a new function at the specified address.

Parameters:

- **`ea`** (`ea_t`) – The effective address where the function should start.

Returns:

- `bool` – True if the function was successfully created, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### does_return

```
does_return(func: func_t) -> bool

```

Check if function returns.

Parameters:

- **`func`** (`func_t`) – Function object

Returns:

- `bool` – True if function returns, False if it's noreturn

#### get_all

```
get_all() -> Iterator[func_t]

```

Retrieves all functions in the database.

Returns:

- `Iterator[func_t]` – An iterator over all functions in the database.

#### get_at

```
get_at(ea: ea_t) -> Optional[func_t]

```

Retrieves the function that contains the given address.

Parameters:

- **`ea`** (`ea_t`) – An effective address within the function body.

Returns:

- `Optional[func_t]` – The function object containing the address,
- `Optional[func_t]` – or None if no function exists at that address.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### get_between

```
get_between(
    start_ea: ea_t, end_ea: ea_t
) -> Iterator[func_t]

```

Retrieves functions within the specified address range.

Parameters:

- **`start_ea`** (`ea_t`) – Start address of the range (inclusive).
- **`end_ea`** (`ea_t`) – End address of the range (exclusive).

Yields:

- `func_t` – Function objects whose start address falls within the specified range.

Raises:

- `InvalidEAError` – If the start_ea/end_ea are specified but they are not in the database range.

#### get_by_name

```
get_by_name(name: str) -> Optional[func_t]

```

Find a function by its name.

Parameters:

- **`name`** (`str`) – Function name to search for

Returns:

- `Optional[func_t]` – Function object if found, None otherwise

#### get_callees

```
get_callees(func: func_t) -> List[func_t]

```

Gets all functions called by this function.

Parameters:

- **`func`** (`func_t`) – The function instance.

Returns:

- `List[func_t]` – List of called functions.

#### get_callers

```
get_callers(func: func_t) -> List[func_t]

```

Gets all functions that call this function.

Parameters:

- **`func`** (`func_t`) – The function instance.

Returns:

- `List[func_t]` – List of calling functions.

#### get_chunk_at

```
get_chunk_at(ea: int) -> Optional[func_t]

```

Get function chunk at exact address.

Parameters:

- **`ea`** (`int`) – Address within function chunk

Returns:

- `Optional[func_t]` – Function chunk or None

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### get_chunks

```
get_chunks(func: func_t) -> Iterator[FunctionChunk]

```

Get all chunks (main and tail) of a function.

Parameters:

- **`func`** (`func_t`) – The function to analyze.

Yields:

- `FunctionChunk` – FunctionChunk objects representing each chunk.

#### get_comment

```
get_comment(func: func_t, repeatable: bool = False) -> str

```

Get comment for function.

Parameters:

- **`func`** (`func_t`) – The function to get comment from.
- **`repeatable`** (`bool`, default: `False` ) – If True, retrieves repeatable comment (shows at all identical operands). If False, retrieves non-repeatable comment (shows only at this function).

Returns:

- `str` – Comment text, or empty string if no comment exists.

#### get_data_items

```
get_data_items(func: func_t) -> Iterator[ea_t]

```

Iterate over data items within the function.

This method finds all addresses within the function that are defined as data (not code). Useful for finding embedded data, jump tables, or other non-code items within function boundaries.

Parameters:

- **`func`** (`func_t`) – The function object

Yields:

- `ea_t` – Addresses of data items within the function

Example

```
>>> func = db.functions.get_at(0x401000)
>>> for data_ea in db.functions.get_data_items(func):
...     size = ida_bytes.get_item_size(data_ea)
...     print(f"Data at 0x{data_ea:x}, size: {size}")

```

#### get_disassembly

```
get_disassembly(
    func: func_t, remove_tags: bool = True
) -> List[str]

```

Retrieves the disassembly lines for the given function.

Parameters:

- **`func`** (`func_t`) – The function instance.
- **`remove_tags`** (`bool`, default: `True` ) – If True, removes IDA color/formatting tags from the output.

Returns:

- `List[str]` – A list of strings, each representing a line of disassembly.
- `List[str]` – Returns empty list if function is invalid.

#### get_flags

```
get_flags(func: func_t) -> FunctionFlags

```

Get function attribute flags.

Parameters:

- **`func`** (`func_t`) – Function object

Returns:

- `FunctionFlags` – FunctionFlags enum with all active flags

#### get_flowchart

```
get_flowchart(
    func: func_t, flags: FlowChartFlags = NONE
) -> Optional[FlowChart]

```

Retrieves the flowchart of the specified function, which the user can use to retrieve basic blocks.

Parameters:

- **`func`** (`func_t`) – The function instance.

Returns:

- `Optional[FlowChart]` – An iterator over the function's basic blocks, or empty iterator if function is invalid.

#### get_function_by_name

```
get_function_by_name(name: str) -> Optional[func_t]

```

#### get_instructions

```
get_instructions(func: func_t) -> Iterator[insn_t]

```

Retrieves all instructions within the given function.

Parameters:

- **`func`** (`func_t`) – The function instance.

Returns:

- `Iterator[insn_t]` – An iterator over all instructions in the function,
- `Iterator[insn_t]` – or empty iterator if function is invalid.

#### get_local_variable_by_name

```
get_local_variable_by_name(
    func: func_t, name: str
) -> Optional[LocalVariable]

```

Find a local variable by name.

Parameters:

- **`func`** (`func_t`) – The function instance.
- **`name`** (`str`) – Variable name to search for.

Returns:

- `Optional[LocalVariable]` – LocalVariable if found

Raises:

- `DecompilerError` – If decompilation fails for the function.
- `KeyError` – If the variable is not found

#### get_local_variable_references

```
get_local_variable_references(
    func: func_t, lvar: LocalVariable
) -> List[LocalVariableReference]

```

Get all references to a specific local variable.

Parameters:

- **`func`** (`func_t`) – The function instance.
- **`lvar`** (`LocalVariable`) – The local variable to find references for.

Returns:

- `List[LocalVariableReference]` – List of references to the variable in pseudocode.

Raises:

- `DecompilerError` – If decompilation fails for the function.

#### get_local_variables

```
get_local_variables(func: func_t) -> List[LocalVariable]

```

Get all local variables for a function.

Parameters:

- **`func`** (`func_t`) – The function instance.

Returns:

- `List[LocalVariable]` – List of local variables including arguments and local vars.

Raises:

- `DecompilerError` – If decompilation fails for the function.

#### get_microcode

```
get_microcode(func: func_t) -> MicroBlockArray

```

Generates microcode for the given function.

Delegates to `db.microcode.generate()`.

Parameters:

- **`func`** (`func_t`) – The function instance.

Returns:

- **`A`** ( `MicroBlockArray` ) – class:~ida_domain.microcode.MicroBlockArray representing the
- `MicroBlockArray` – generated microcode.

Raises:

- `MicrocodeError` – If microcode generation fails for the function.

#### get_name

```
get_name(func: func_t) -> str

```

Retrieves the function's name.

Parameters:

- **`func`** (`func_t`) – The function instance.

Returns:

- `str` – The function name as a string, or empty string if no name is set.

#### get_next

```
get_next(ea: int) -> Optional[func_t]

```

Get the next function after the given address.

Parameters:

- **`ea`** (`int`) – Address to search from

Returns:

- `Optional[func_t]` – Next function after ea, or None if no more functions

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### get_pseudocode

```
get_pseudocode(func: func_t) -> PseudocodeFunction

```

Decompiles the given function and returns the pseudocode result.

Delegates to `db.pseudocode.decompile()`.

The returned object provides full ctree access. To get the pseudocode as plain text, call `str()` or `to_text()`:

```
pseudo = db.functions.get_pseudocode(func)
print(str(pseudo))           # full text
print(pseudo.to_text())      # list of lines

```

Parameters:

- **`func`** (`func_t`) – The function instance.

Returns:

- **`A`** ( `PseudocodeFunction` ) – class:~ida_domain.pseudocode.PseudocodeFunction wrapping the
- `PseudocodeFunction` – decompiled result.

Raises:

- `PseudocodeError` – If decompilation fails for the function.

#### get_signature

```
get_signature(func: func_t) -> Optional[str]

```

Retrieves the function's type signature.

Parameters:

- **`func`** (`func_t`) – The function instance.

Returns:

- `Optional[str]` – The function signature as a string, or None if no type
- `Optional[str]` – is stored for this function.

#### get_stack_points

```
get_stack_points(func: func_t) -> List[StackPoint]

```

Get function stack points for SP tracking.

Parameters:

- **`func`** (`func_t`) – Function object

Returns:

- `List[StackPoint]` – List of StackPoint objects showing where SP changes

#### get_tail_info

```
get_tail_info(chunk: func_t) -> Optional[TailInfo]

```

Get information about tail chunk's owner function.

Parameters:

- **`chunk`** (`func_t`) – Function chunk (must be tail chunk)

Returns:

- `Optional[TailInfo]` – TailInfo with owner details, or None if not a tail chunk

#### get_tails

```
get_tails(func: func_t) -> List[func_t]

```

Get all tail chunks of a function.

Parameters:

- **`func`** (`func_t`) – Function object (must be entry chunk)

Returns:

- `List[func_t]` – List of tail chunks, empty if not entry chunk

#### is_chunk_at

```
is_chunk_at(ea: ea_t) -> bool

```

Check if the given address belongs to a function chunk.

Parameters:

- **`ea`** (`ea_t`) – The address to check.

Returns:

- `bool` – True if the address is in a function chunk.

#### is_entry_chunk

```
is_entry_chunk(chunk: func_t) -> bool

```

Check if chunk is entry chunk.

Parameters:

- **`chunk`** (`func_t`) – Function chunk to check

Returns:

- `bool` – True if this is an entry chunk, False otherwise

#### is_far

```
is_far(func: func_t) -> bool

```

Check if function is far.

Parameters:

- **`func`** (`func_t`) – Function object

Returns:

- `bool` – True if function is far, False otherwise

#### is_tail_chunk

```
is_tail_chunk(chunk: func_t) -> bool

```

Check if chunk is tail chunk.

Parameters:

- **`chunk`** (`func_t`) – Function chunk to check

Returns:

- `bool` – True if this is a tail chunk, False otherwise

#### remove

```
remove(ea: ea_t) -> bool

```

Removes the function at the specified address.

Parameters:

- **`ea`** (`ea_t`) – The effective address of the function to remove.

Returns:

- `bool` – True if the function was successfully removed, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### set_comment

```
set_comment(
    func: func_t, comment: str, repeatable: bool = False
) -> bool

```

Set comment for function.

Parameters:

- **`func`** (`func_t`) – The function to set comment for.
- **`comment`** (`str`) – Comment text to set.
- **`repeatable`** (`bool`, default: `False` ) – If True, creates a repeatable comment (shows at all identical operands). If False, creates a non-repeatable comment (shows only at this function).

Returns:

- `bool` – True if successful, False otherwise.

#### set_name

```
set_name(
    func: func_t, name: str, auto_correct: bool = True
) -> bool

```

Renames the given function.

Parameters:

- **`func`** (`func_t`) – The function instance.
- **`name`** (`str`) – The new name to assign to the function.
- **`auto_correct`** (`bool`, default: `True` ) – If True, allows IDA to replace invalid characters automatically.

Returns:

- `bool` – True if the function was successfully renamed, False otherwise.

Raises:

- `InvalidParameterError` – If the name parameter is empty or invalid.

### LocalVariable

```
LocalVariable(
    index: int,
    name: str,
    type: Optional[tinfo_t],
    size: int,
    is_argument: bool,
    is_result: bool,
)

```

Represents a local variable or argument in a function.

Attributes:

- **`index`** (`int`) – Variable index in function
- **`is_argument`** (`bool`) – True if is a function argument
- **`is_result`** (`bool`) – True if is a return value variable
- **`name`** (`str`) – Variable name
- **`size`** (`int`) – Size in bytes
- **`type`** (`Optional[tinfo_t]`) – Type information
- **`type_str`** (`str`) – Get string representation of the type.

#### index

```
index: int

```

Variable index in function

#### is_argument

```
is_argument: bool

```

True if is a function argument

#### is_result

```
is_result: bool

```

True if is a return value variable

#### name

```
name: str

```

Variable name

#### size

```
size: int

```

Size in bytes

#### type

```
type: Optional[tinfo_t]

```

Type information

#### type_str

```
type_str: str

```

Get string representation of the type.

### LocalVariableAccessType

Bases: `IntEnum`

Type of access to a local variable.

Attributes:

- **`ADDRESS`** – Address of variable is taken (&var)
- **`READ`** – Variable value is read
- **`WRITE`** – Variable value is modified

#### ADDRESS

```
ADDRESS = 3

```

Address of variable is taken (&var)

#### READ

```
READ = 1

```

Variable value is read

#### WRITE

```
WRITE = 2

```

Variable value is modified

### LocalVariableContext

Bases: `Enum`

Context where local variable is referenced.

Attributes:

- **`ARITHMETIC`** – var + 1, var * 2, etc.
- **`ARRAY_INDEX`** – arr[var] or var[i]
- **`ASSIGNMENT`** – var = expr or expr = var
- **`CALL_ARG`** – func(var)
- **`CAST`** – (type)var
- **`COMPARISON`** – var == x, var < y, etc.
- **`CONDITION`** – if (var), while (var), etc.
- **`OTHER`** – Other contexts
- **`POINTER_DEREF`** – \*var or var->field
- **`RETURN`** – return var

#### ARITHMETIC

```
ARITHMETIC = 'arithmetic'

```

var + 1, var * 2, etc.

#### ARRAY_INDEX

```
ARRAY_INDEX = 'array_index'

```

arr[var] or var[i]

#### ASSIGNMENT

```
ASSIGNMENT = 'assignment'

```

var = expr or expr = var

#### CALL_ARG

```
CALL_ARG = 'call_arg'

```

func(var)

#### CAST

```
CAST = 'cast'

```

(type)var

#### COMPARISON

```
COMPARISON = 'comparison'

```

var == x, var < y, etc.

#### CONDITION

```
CONDITION = 'condition'

```

if (var), while (var), etc.

#### OTHER

```
OTHER = 'other'

```

Other contexts

#### POINTER_DEREF

```
POINTER_DEREF = 'pointer_deref'

```

\*var or var->field

#### RETURN

```
RETURN = 'return'

```

return var

### LocalVariableReference

```
LocalVariableReference(
    access_type: LocalVariableAccessType,
    context: Optional[LocalVariableContext] = None,
    ea: Optional[ea_t] = None,
    line_number: Optional[int] = None,
    code_line: Optional[str] = None,
)

```

Reference to a local variable in pseudocode.

Attributes:

- **`access_type`** (`LocalVariableAccessType`) – How variable is accessed
- **`code_line`** (`Optional[str]`) – The pseudocode line containing the reference
- **`context`** (`Optional[LocalVariableContext]`) – Usage context
- **`ea`** (`Optional[ea_t]`) – Binary address if mappable
- **`line_number`** (`Optional[int]`) – Line number in pseudocode

#### access_type

```
access_type: LocalVariableAccessType

```

How variable is accessed

#### code_line

```
code_line: Optional[str] = None

```

The pseudocode line containing the reference

#### context

```
context: Optional[LocalVariableContext] = None

```

Usage context

#### ea

```
ea: Optional[ea_t] = None

```

Binary address if mappable

#### line_number

```
line_number: Optional[int] = None

```

Line number in pseudocode

### StackPoint

```
StackPoint(ea: ea_t, sp_delta: int)

```

Stack pointer change information.

Attributes:

- **`ea`** (`ea_t`) – Address where SP changes
- **`sp_delta`** (`int`) – Stack pointer delta at this point

#### ea

```
ea: ea_t

```

Address where SP changes

#### sp_delta

```
sp_delta: int

```

Stack pointer delta at this point

### TailInfo

```
TailInfo(owner_ea: ea_t, owner_name: str)

```

Function tail chunk information.

Attributes:

- **`owner_ea`** (`ea_t`) – Address of owning function
- **`owner_name`** (`str`) – Name of owning function

#### owner_ea

```
owner_ea: ea_t

```

Address of owning function

#### owner_name

```
owner_name: str

```

Name of owning function
