# `Bytes`

## bytes

Classes:

- **`ByteFlags`** – Byte flag constants for flag checking operations.
- **`Bytes`** – Handles operations related to raw data access from the IDA database.
- **`SearchFlags`** – Search flags for text and pattern searching.

### ByteFlags

Bases: `IntFlag`

Byte flag constants for flag checking operations.

Attributes:

- **`ALIGN`** – Alignment directive
- **`ANYNAME`** – Has name or dummy name?
- **`BNOT`** – Bitwise negation of operands
- **`BYTE`** – Byte
- **`CODE`** – Code?
- **`COMM`** – Has comment?
- **`CUSTOM`** – Custom data type
- **`DATA`** – Data?
- **`DOUBLE`** – Double
- **`DWORD`** – Double word
- **`FLOAT`** – Float
- **`FLOW`** – Exec flow from prev instruction
- **`FUNC`** – Function start?
- **`IMMD`** – Has immediate value?
- **`IVL`** – Byte has value.
- **`JUMP`** – Has jump table or switch_info?
- **`LABL`** – Has dummy name?
- **`LINE`** – Has next or prev lines?
- **`MS_VAL`** – Mask for byte value.
- **`NAME`** – Has name?
- **`N_CHAR`** – Char ('x')?
- **`N_CUST`** – Custom representation?
- **`N_ENUM`** – Enumeration?
- **`N_FLT`** – Floating point number?
- **`N_FOP`** – Forced operand?
- **`N_NUMB`** – Binary number?
- **`N_NUMD`** – Decimal number?
- **`N_NUMH`** – Hexadecimal number?
- **`N_NUMO`** – Octal number?
- **`N_OFF`** – Offset?
- **`N_SEG`** – Segment?
- **`N_STK`** – Stack variable?
- **`N_STRO`** – Struct offset?
- **`N_VOID`** – Void (unknown)?
- **`OWORD`** – Octaword/XMM word (16 bytes)
- **`PACKREAL`** – Packed decimal real
- **`QWORD`** – Quad word
- **`REF`** – Has references
- **`SIGN`** – Inverted sign of operands
- **`STRLIT`** – String literal
- **`STRUCT`** – Struct variable
- **`TAIL`** – Tail?
- **`TBYTE`** – TByte
- **`UNK`** – Unknown?
- **`UNUSED`** – Unused bit
- **`WORD`** – Word
- **`YWORD`** – YMM word (32 bytes)
- **`ZWORD`** – ZMM word (64 bytes)

#### ALIGN

```
ALIGN = FF_ALIGN

```

Alignment directive

#### ANYNAME

```
ANYNAME = FF_ANYNAME

```

Has name or dummy name?

#### BNOT

```
BNOT = FF_BNOT

```

Bitwise negation of operands

#### BYTE

```
BYTE = FF_BYTE

```

Byte

#### CODE

```
CODE = FF_CODE

```

Code?

#### COMM

```
COMM = FF_COMM

```

Has comment?

#### CUSTOM

```
CUSTOM = FF_CUSTOM

```

Custom data type

#### DATA

```
DATA = FF_DATA

```

Data?

#### DOUBLE

```
DOUBLE = FF_DOUBLE

```

Double

#### DWORD

```
DWORD = FF_DWORD

```

Double word

#### FLOAT

```
FLOAT = FF_FLOAT

```

Float

#### FLOW

```
FLOW = FF_FLOW

```

Exec flow from prev instruction

#### FUNC

```
FUNC = FF_FUNC

```

Function start?

#### IMMD

```
IMMD = FF_IMMD

```

Has immediate value?

#### IVL

```
IVL = FF_IVL

```

Byte has value.

#### JUMP

```
JUMP = FF_JUMP

```

Has jump table or switch_info?

#### LABL

```
LABL = FF_LABL

```

Has dummy name?

#### LINE

```
LINE = FF_LINE

```

Has next or prev lines?

#### MS_VAL

```
MS_VAL = MS_VAL

```

Mask for byte value.

#### NAME

```
NAME = FF_NAME

```

Has name?

#### N_CHAR

```
N_CHAR = FF_N_CHAR

```

Char ('x')?

#### N_CUST

```
N_CUST = FF_N_CUST

```

Custom representation?

#### N_ENUM

```
N_ENUM = FF_N_ENUM

```

Enumeration?

#### N_FLT

```
N_FLT = FF_N_FLT

```

Floating point number?

#### N_FOP

```
N_FOP = FF_N_FOP

```

Forced operand?

#### N_NUMB

```
N_NUMB = FF_N_NUMB

```

Binary number?

#### N_NUMD

```
N_NUMD = FF_N_NUMD

```

Decimal number?

#### N_NUMH

```
N_NUMH = FF_N_NUMH

```

Hexadecimal number?

#### N_NUMO

```
N_NUMO = FF_N_NUMO

```

Octal number?

#### N_OFF

```
N_OFF = FF_N_OFF

```

Offset?

#### N_SEG

```
N_SEG = FF_N_SEG

```

Segment?

#### N_STK

```
N_STK = FF_N_STK

```

Stack variable?

#### N_STRO

```
N_STRO = FF_N_STRO

```

Struct offset?

#### N_VOID

```
N_VOID = FF_N_VOID

```

Void (unknown)?

#### OWORD

```
OWORD = FF_OWORD

```

Octaword/XMM word (16 bytes)

#### PACKREAL

```
PACKREAL = FF_PACKREAL

```

Packed decimal real

#### QWORD

```
QWORD = FF_QWORD

```

Quad word

#### REF

```
REF = FF_REF

```

Has references

#### SIGN

```
SIGN = FF_SIGN

```

Inverted sign of operands

#### STRLIT

```
STRLIT = FF_STRLIT

```

String literal

#### STRUCT

```
STRUCT = FF_STRUCT

```

Struct variable

#### TAIL

```
TAIL = FF_TAIL

```

Tail?

#### TBYTE

```
TBYTE = FF_TBYTE

```

TByte

#### UNK

```
UNK = FF_UNK

```

Unknown?

#### UNUSED

```
UNUSED = FF_UNUSED

```

Unused bit

#### WORD

```
WORD = FF_WORD

```

Word

#### YWORD

```
YWORD = FF_YWORD

```

YMM word (32 bytes)

#### ZWORD

```
ZWORD = FF_ZWORD

```

ZMM word (64 bytes)

### Bytes

```
Bytes(database: Database)

```

Bases: `DatabaseEntity`

Handles operations related to raw data access from the IDA database.

This class provides methods to read various data types (bytes, words, floats, etc.) from memory addresses in the disassembled binary.

Parameters:

- **`database`** (`Database`) – Reference to the active IDA database.

Methods:

- **`check_flags_at`** – Checks if the specified flags are set at the given address.
- **`create_alignment_at`** – Create an alignment item.
- **`create_byte_at`** – Creates byte data items at consecutive addresses starting from the specified address.
- **`create_double_at`** – Creates double data items at consecutive addresses starting from the specified address.
- **`create_dword_at`** – Creates dword data items at consecutive addresses starting from the specified address.
- **`create_float_at`** – Creates float data items at consecutive addresses starting from the specified address.
- **`create_oword_at`** – Creates oword data items at consecutive addresses starting from the specified address.
- **`create_packed_real_at`** – Creates packed real data items at consecutive addresses starting
- **`create_qword_at`** – Creates qword data items at consecutive addresses starting from the specified address.
- **`create_string_at`** – Converts data at address to string type.
- **`create_struct_at`** – Creates struct data items at consecutive addresses starting from the specified address.
- **`create_tbyte_at`** – Creates tbyte data items at consecutive addresses starting from the specified address.
- **`create_word_at`** – Creates word data items at consecutive addresses starting from the specified address.
- **`create_yword_at`** – Creates yword data items at consecutive addresses starting from the specified address.
- **`create_zword_at`** – Creates zword data items at consecutive addresses starting from the specified address.
- **`delete_value_at`** – Delete value from flags. The corresponding address becomes uninitialized.
- **`find_binary_sequence`** – Find all occurrences of a binary pattern.
- **`find_bytes_between`** – Finds a byte pattern in memory.
- **`find_immediate_between`** – Finds an immediate value in instructions.
- **`find_text_between`** – Finds a text string in memory.
- **`get_all_flags_at`** – Gets all the full flags for the specified address.
- **`get_byte_at`** – Retrieves a single byte (8 bits) at the specified address.
- **`get_bytes_at`** – Gets the specified number of bytes of the program.
- **`get_cstring_at`** – Gets a C-style null-terminated string.
- **`get_data_size_at`** – Gets the size of the data item at the specified address.
- **`get_disassembly_at`** – Retrieves the disassembly text at the specified address.
- **`get_double_at`** – Retrieves a double-precision floating-point value at the specified address.
- **`get_dword_at`** – Retrieves a double word (32 bits/4 bytes) at the specified address.
- **`get_flags_at`** – Gets the flags for the specified address masked with IVL and MS_VAL
- **`get_float_at`** – Retrieves a single-precision floating-point value at the specified address.
- **`get_microcode_between`** – Generates microcode for the given address range.
- **`get_next_address`** – Gets the next valid address after the specified address.
- **`get_next_head`** – Gets the next head (start of data item) after the specified address.
- **`get_original_byte_at`** – Get original byte value (that was before patching).
- **`get_original_bytes_at`** – Gets the original bytes before any patches by reading individual bytes.
- **`get_original_dword_at`** – Get original dword value (that was before patching).
- **`get_original_qword_at`** – Get original qword value (that was before patching).
- **`get_original_word_at`** – Get original word value (that was before patching).
- **`get_previous_address`** – Gets the previous valid address before the specified address.
- **`get_previous_head`** – Gets the previous head (start of data item) before the specified address.
- **`get_qword_at`** – Retrieves a quad word (64 bits/8 bytes) at the specified address.
- **`get_string_at`** – Gets a string from the specified address.
- **`get_word_at`** – Retrieves a word (16 bits/2 bytes) at the specified address.
- **`has_any_flags_at`** – Checks if any of the specified flags are set at the given address.
- **`has_user_name_at`** – Checks if the address has a user-defined name.
- **`is_alignment_at`** – Checks if the address contains an alignment directive.
- **`is_byte_at`** – Checks if the address contains a byte data type.
- **`is_code_at`** – Checks if the address contains code.
- **`is_data_at`** – Checks if the address contains data.
- **`is_double_at`** – Checks if the address contains a double data type.
- **`is_dword_at`** – Checks if the address contains a dword data type.
- **`is_float_at`** – Checks if the address contains a float data type.
- **`is_flowed_at`** – Does the previous instruction exist and pass execution flow to the current byte?
- **`is_forced_operand_at`** – Is operand manually defined?
- **`is_head_at`** – Checks if the address is the start of a data item.
- **`is_manual_insn_at`** – Is the instruction overridden?
- **`is_not_tail_at`** – Checks if the address is not a tail byte.
- **`is_oword_at`** – Checks if the address contains an oword data type.
- **`is_packed_real_at`** – Checks if the address contains a packed real data type.
- **`is_qword_at`** – Checks if the address contains a qword data type.
- **`is_string_literal_at`** – Checks if the address contains a string literal data type.
- **`is_struct_at`** – Checks if the address contains a struct data type.
- **`is_tail_at`** – Checks if the address is part of a multi-byte data item.
- **`is_tbyte_at`** – Checks if the address contains a tbyte data type.
- **`is_unknown_at`** – Checks if the address contains unknown/undefined data.
- **`is_value_initialized_at`** – Check if the value at the specified address is initialized
- **`is_word_at`** – Checks if the address contains a word data type.
- **`is_yword_at`** – Checks if the address contains a yword data type.
- **`is_zword_at`** – Checks if the address contains a zword data type.
- **`patch_byte_at`** – Patch a byte of the program.
- **`patch_bytes_at`** – Patch the specified number of bytes of the program.
- **`patch_dword_at`** – Patch a dword of the program.
- **`patch_qword_at`** – Patch a qword of the program.
- **`patch_word_at`** – Patch a word of the program.
- **`revert_byte_at`** – Revert patched byte to its original value.
- **`set_byte_at`** – Sets a byte value at the specified address.
- **`set_bytes_at`** – Sets a sequence of bytes at the specified address.
- **`set_dword_at`** – Sets a double word (4 bytes) value at the specified address.
- **`set_qword_at`** – Sets a quad word (8 bytes) value at the specified address.
- **`set_word_at`** – Sets a word (2 bytes) value at the specified address.

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

#### check_flags_at

```
check_flags_at(ea: ea_t, flag_mask: ByteFlags) -> bool

```

Checks if the specified flags are set at the given address.

Parameters:

- **`ea`** (`ea_t`) – The effective address.
- **`flag_mask`** (`ByteFlags`) – ByteFlags enum value(s) to check.

Returns:

- `bool` – True if all specified flags are set, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### create_alignment_at

```
create_alignment_at(
    ea: ea_t, length: int, alignment: int
) -> bool

```

Create an alignment item.

Parameters:

- **`ea`** (`ea_t`) – The effective address.
- **`length`** (`int`) – Size of the item in bytes. 0 means to infer from alignment.
- **`alignment`** (`int`) – Alignment exponent. Example: 3 means align to 8 bytes, 0 means to infer from length.

Returns:

- `bool` – True if successful, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.
- `InvalidParameterError` – If length or alignment are invalid.

#### create_byte_at

```
create_byte_at(
    ea: ea_t, count: int = 1, force: bool = False
) -> bool

```

Creates byte data items at consecutive addresses starting from the specified address.

Parameters:

- **`ea`** (`ea_t`) – The effective address to start creating bytes.
- **`count`** (`int`, default: `1` ) – Number of consecutive byte elements to create.
- **`force`** (`bool`, default: `False` ) – Forces creation overriding an existing item if there is one.

Returns:

- `bool` – True if successful, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.
- `InvalidParameterError` – If count is not positive.

#### create_double_at

```
create_double_at(
    ea: ea_t, count: int = 1, force: bool = False
) -> bool

```

Creates double data items at consecutive addresses starting from the specified address.

Parameters:

- **`ea`** (`ea_t`) – The effective address to start creating doubles.
- **`count`** (`int`, default: `1` ) – Number of consecutive double elements to create.
- **`force`** (`bool`, default: `False` ) – Forces creation overriding an existing item if there is one.

Returns:

- `bool` – True if successful, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.
- `InvalidParameterError` – If count is not positive.

#### create_dword_at

```
create_dword_at(
    ea: ea_t, count: int = 1, force: bool = False
) -> bool

```

Creates dword data items at consecutive addresses starting from the specified address.

Parameters:

- **`ea`** (`ea_t`) – The effective address to start creating dwords.
- **`count`** (`int`, default: `1` ) – Number of consecutive dword elements to create.
- **`force`** (`bool`, default: `False` ) – Forces creation overriding an existing item if there is one.

Returns:

- `bool` – True if successful, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.
- `InvalidParameterError` – If count is not positive.

#### create_float_at

```
create_float_at(
    ea: ea_t, count: int = 1, force: bool = False
) -> bool

```

Creates float data items at consecutive addresses starting from the specified address.

Parameters:

- **`ea`** (`ea_t`) – The effective address to start creating floats.
- **`count`** (`int`, default: `1` ) – Number of consecutive float elements to create.
- **`force`** (`bool`, default: `False` ) – Forces creation overriding an existing item if there is one.

Returns:

- `bool` – True if successful, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.
- `InvalidParameterError` – If count is not positive.

#### create_oword_at

```
create_oword_at(
    ea: ea_t, count: int = 1, force: bool = False
) -> bool

```

Creates oword data items at consecutive addresses starting from the specified address.

Parameters:

- **`ea`** (`ea_t`) – The effective address to start creating owords.
- **`count`** (`int`, default: `1` ) – Number of consecutive oword elements to create.
- **`force`** (`bool`, default: `False` ) – Forces creation overriding an existing item if there is one.

Returns:

- `bool` – True if successful, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.
- `InvalidParameterError` – If count is not positive.

#### create_packed_real_at

```
create_packed_real_at(
    ea: ea_t, count: int = 1, force: bool = False
) -> bool

```

Creates packed real data items at consecutive addresses starting from the specified address.

Parameters:

- **`ea`** (`ea_t`) – The effective address to start creating packed reals.
- **`count`** (`int`, default: `1` ) – Number of consecutive packed real elements to create.
- **`force`** (`bool`, default: `False` ) – Forces creation overriding an existing item if there is one.

Returns:

- `bool` – True if successful, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.
- `InvalidParameterError` – If count is not positive.

#### create_qword_at

```
create_qword_at(
    ea: ea_t, count: int = 1, force: bool = False
) -> bool

```

Creates qword data items at consecutive addresses starting from the specified address.

Parameters:

- **`ea`** (`ea_t`) – The effective address to start creating qwords.
- **`count`** (`int`, default: `1` ) – Number of consecutive qword elements to create.
- **`force`** (`bool`, default: `False` ) – Forces creation overriding an existing item if there is one.

Returns:

- `bool` – True if successful, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.
- `InvalidParameterError` – If count is not positive.

#### create_string_at

```
create_string_at(
    ea: ea_t,
    length: Optional[int] = None,
    string_type: StringType = C,
) -> bool

```

Converts data at address to string type.

Parameters:

- **`ea`** (`ea_t`) – The effective address.
- **`length`** (`Optional[int]`, default: `None` ) – String length (auto-detect if None).
- **`string_type`** (`StringType`, default: `C` ) – String type (default: StringType.C).

Returns:

- `bool` – True if successful, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.
- `InvalidParameterError` – If length is specified but not positive.

#### create_struct_at

```
create_struct_at(
    ea: ea_t, count: int, tid: int, force: bool = False
) -> bool

```

Creates struct data items at consecutive addresses starting from the specified address.

Parameters:

- **`ea`** (`ea_t`) – The effective address to start creating structs.
- **`count`** (`int`) – Number of consecutive struct elements to create.
- **`tid`** (`int`) – Structure type ID.
- **`force`** (`bool`, default: `False` ) – Forces creation overriding an existing item if there is one.

Returns:

- `bool` – True if successful, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.
- `InvalidParameterError` – If count is not positive or tid is invalid.

Example

```
tif = db.types.parse_one_declaration(None, 'struct Point {int x; int y;};')
db.bytes.create_struct_at(ea, 1, tif.get_tid())

```

#### create_tbyte_at

```
create_tbyte_at(
    ea: ea_t, count: int = 1, force: bool = False
) -> bool

```

Creates tbyte data items at consecutive addresses starting from the specified address.

Parameters:

- **`ea`** (`ea_t`) – The effective address to start creating tbytes.
- **`count`** (`int`, default: `1` ) – Number of consecutive tbyte elements to create.
- **`force`** (`bool`, default: `False` ) – Forces creation overriding an existing item if there is one.

Returns:

- `bool` – True if successful, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.
- `InvalidParameterError` – If count is not positive.

#### create_word_at

```
create_word_at(
    ea: ea_t, count: int = 1, force: bool = False
) -> bool

```

Creates word data items at consecutive addresses starting from the specified address.

Parameters:

- **`ea`** (`ea_t`) – The effective address to start creating words.
- **`count`** (`int`, default: `1` ) – Number of consecutive word elements to create.
- **`force`** (`bool`, default: `False` ) – Forces creation overriding an existing item if there is one.

Returns:

- `bool` – True if successful, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.
- `InvalidParameterError` – If count is not positive.

#### create_yword_at

```
create_yword_at(
    ea: ea_t, count: int = 1, force: bool = False
) -> bool

```

Creates yword data items at consecutive addresses starting from the specified address.

Parameters:

- **`ea`** (`ea_t`) – The effective address to start creating ywords.
- **`count`** (`int`, default: `1` ) – Number of consecutive yword elements to create.
- **`force`** (`bool`, default: `False` ) – Forces creation overriding an existing item if there is one.

Returns:

- `bool` – True if successful, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.
- `InvalidParameterError` – If count is not positive.

#### create_zword_at

```
create_zword_at(
    ea: ea_t, count: int = 1, force: bool = False
) -> bool

```

Creates zword data items at consecutive addresses starting from the specified address.

Parameters:

- **`ea`** (`ea_t`) – The effective address to start creating zwords.
- **`count`** (`int`, default: `1` ) – Number of consecutive zword elements to create.
- **`force`** (`bool`, default: `False` ) – Forces creation overriding an existing item if there is one.

Returns:

- `bool` – True if successful, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.
- `InvalidParameterError` – If count is not positive.

#### delete_value_at

```
delete_value_at(ea: ea_t) -> None

```

Delete value from flags. The corresponding address becomes uninitialized.

Parameters:

- **`ea`** (`ea_t`) – The effective address.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### find_binary_sequence

```
find_binary_sequence(
    pattern: bytes,
    start_ea: ea_t = None,
    end_ea: ea_t = None,
) -> List[ea_t]

```

Find all occurrences of a binary pattern.

Parameters:

- **`pattern`** (`bytes`) – Binary pattern to search for.
- **`start_ea`** (`ea_t`, default: `None` ) – Search start address; defaults to database minimum ea if None.
- **`end_ea`** (`ea_t`, default: `None` ) – Search end address; defaults to database maximum ea if None.

Returns:

- `List[ea_t]` – List of addresses where pattern was found.

Raises:

- `InvalidParameterError` – If pattern is invalid.
- `InvalidEAError` – If start_ea or end_ea are specified but invalid.

#### find_bytes_between

```
find_bytes_between(
    pattern: bytes,
    start_ea: ea_t = None,
    end_ea: ea_t = None,
) -> Optional[ea_t]

```

Finds a byte pattern in memory.

Parameters:

- **`pattern`** (`bytes`) – Byte pattern to search for.
- **`start_ea`** (`ea_t`, default: `None` ) – Search start address; defaults to database minimum ea if None
- **`end_ea`** (`ea_t`, default: `None` ) – Search end address; defaults to database maximum ea if None

Returns:

- `Optional[ea_t]` – Address where pattern was found, or None if not found.

Raises:

- `InvalidParameterError` – If pattern or interval are invalid.
- `InvalidEAError` – If start_ea or end_ea are specified but invalid.

#### find_immediate_between

```
find_immediate_between(
    value: int, start_ea: ea_t = None, end_ea: ea_t = None
) -> Optional[ea_t]

```

Finds an immediate value in instructions.

Parameters:

- **`value`** (`int`) – Immediate value to search for.
- **`start_ea`** (`ea_t`, default: `None` ) – Search start address; defaults to database minimum ea if None
- **`end_ea`** (`ea_t`, default: `None` ) – Search end address; defaults to database maximum ea if None

Returns:

- `Optional[ea_t]` – Address where immediate was found, or None if not found.

Raises:

- `InvalidParameterError` – If value is not an integer.
- `InvalidEAError` – If start_ea or end_ea are specified but invalid.

#### find_text_between

```
find_text_between(
    text: str,
    start_ea: ea_t = None,
    end_ea: ea_t = None,
    flags: SearchFlags = DOWN,
) -> Optional[ea_t]

```

Finds a text string in memory.

Parameters:

- **`text`** (`str`) – Text to search for.
- **`start_ea`** (`ea_t`, default: `None` ) – Search Start address; defaults to database minimum ea if None
- **`end_ea`** (`ea_t`, default: `None` ) – Search end address; defaults to database maximum ea if None
- **`flags`** (`SearchFlags`, default: `DOWN` ) – Search flags (default: SearchFlags.DOWN).

Returns:

- `Optional[ea_t]` – Address where text was found, or None if not found.

Raises:

- `InvalidParameterError` – If text or interval are invalid.
- `InvalidEAError` – If start_ea or end_ea are specified but invalid.

#### get_all_flags_at

```
get_all_flags_at(ea: ea_t) -> ByteFlags

```

Gets all the full flags for the specified address.

Parameters:

- **`ea`** (`ea_t`) – The effective address.

Returns:

- `ByteFlags` – ByteFlags enum value representing the full flags.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### get_byte_at

```
get_byte_at(
    ea: ea_t, allow_uninitialized: bool = False
) -> int

```

Retrieves a single byte (8 bits) at the specified address.

Parameters:

- **`ea`** (`ea_t`) – The effective address.
- **`allow_uninitialized`** (`bool`, default: `False` ) – If True, allows reading addresses with uninitialized values.

Returns:

- `int` – The byte value (0-255).

Raises:

- `InvalidEAError` – If the effective address is invalid.
- `NoValueError` – If allow_uninitialized is False and the address contains an uninitialized value.

#### get_bytes_at

```
get_bytes_at(ea: ea_t, size: int) -> Optional[bytes]

```

Gets the specified number of bytes of the program.

Parameters:

- **`ea`** (`ea_t`) – The effective address.
- **`size`** (`int`) – Number of bytes to read.

Returns:

- `Optional[bytes]` – The bytes (as bytes object), or None in case of failure

Raises:

- `InvalidEAError` – If the effective address is invalid.
- `InvalidParameterError` – If size is not positive.

#### get_cstring_at

```
get_cstring_at(
    ea: ea_t, max_length: int = 1024
) -> Optional[str]

```

Gets a C-style null-terminated string.

Parameters:

- **`ea`** (`ea_t`) – The effective address.
- **`max_length`** (`int`, default: `1024` ) – Maximum string length to read (default: 1024).

Returns:

- `Optional[str]` – The string if it was successfully extracted or None in case of error

Raises:

- `InvalidEAError` – If the effective address is invalid.
- `InvalidParameterError` – If max_length is not positive.

#### get_data_size_at

```
get_data_size_at(ea: ea_t) -> int

```

Gets the size of the data item at the specified address.

Parameters:

- **`ea`** (`ea_t`) – The effective address.

Returns:

- `int` – Size of the data item in bytes.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### get_disassembly_at

```
get_disassembly_at(
    ea: ea_t, remove_tags: bool = True
) -> Optional[str]

```

Retrieves the disassembly text at the specified address.

Parameters:

- **`ea`** (`ea_t`) – The effective address.
- **`remove_tags`** (`bool`, default: `True` ) – If True, removes IDA color/formatting tags from the output.

Returns:

- `Optional[str]` – The disassembly string, or None if an error occurs.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### get_double_at

```
get_double_at(
    ea: ea_t, allow_uninitialized: bool = False
) -> Optional[float]

```

Retrieves a double-precision floating-point value at the specified address.

Best-effort implementation that may fail on some architectures or non-standard floating-point formats.

Parameters:

- **`ea`** (`ea_t`) – The effective address.
- **`allow_uninitialized`** (`bool`, default: `False` ) – If True, allows reading addresses with uninitialized values.

Returns:

- `Optional[float]` – The double value, or None if an error occurs.

Raises:

- `InvalidEAError` – If the effective address is invalid.
- `NoValueError` – If allow_uninitialized is False and the address contains an uninitialized value.
- `UnsupportedValueError` – If the floating-point format is not supported

Note

Only works for standard IEEE 754 32-bit and 64-bit floats. May not work on embedded systems or architectures with custom floating-point representations.

#### get_dword_at

```
get_dword_at(
    ea: ea_t, allow_uninitialized: bool = False
) -> int

```

Retrieves a double word (32 bits/4 bytes) at the specified address.

Parameters:

- **`ea`** (`ea_t`) – The effective address.
- **`allow_uninitialized`** (`bool`, default: `False` ) – If True, allows reading addresses with uninitialized values.

Returns:

- `int` – The dword value.

Raises:

- `InvalidEAError` – If the effective address is invalid.
- `NoValueError` – If allow_uninitialized is False and the address contains an uninitialized value.

#### get_flags_at

```
get_flags_at(ea: ea_t) -> ByteFlags

```

Gets the flags for the specified address masked with IVL and MS_VAL

Parameters:

- **`ea`** (`ea_t`) – The effective address.

Returns:

- `ByteFlags` – ByteFlags enum value representing the flags.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### get_float_at

```
get_float_at(
    ea: ea_t, allow_uninitialized: bool = False
) -> Optional[float]

```

Retrieves a single-precision floating-point value at the specified address.

Best-effort implementation that may fail on some architectures or non-standard floating-point formats.

Parameters:

- **`ea`** (`ea_t`) – The effective address.
- **`allow_uninitialized`** (`bool`, default: `False` ) – If True, allows reading addresses with uninitialized values.

Returns:

- `Optional[float]` – The float value, or None if an error occurs.

Raises:

- `InvalidEAError` – If the effective address is invalid.
- `NoValueError` – If allow_uninitialized is False and the address contains an uninitialized value.
- `UnsupportedValueError` – If the floating-point format is not supported

Note

Only works for standard IEEE 754 32-bit and 64-bit floats. May not work on embedded systems or architectures with custom floating-point representations.

#### get_microcode_between

```
get_microcode_between(
    start_ea: ea_t, end_ea: ea_t
) -> MicroBlockArray

```

Generates microcode for the given address range.

Delegates to `db.microcode.generate_for_range()`.

Parameters:

- **`start_ea`** (`ea_t`) – The range start.
- **`end_ea`** (`ea_t`) – The range end.

Returns:

- **`A`** ( `MicroBlockArray` ) – class:~ida_domain.microcode.MicroBlockArray representing the
- `MicroBlockArray` – generated microcode.

Raises:

- `MicrocodeError` – If microcode generation fails for the range.

#### get_next_address

```
get_next_address(ea: ea_t) -> Optional[ea_t]

```

Gets the next valid address after the specified address.

Parameters:

- **`ea`** (`ea_t`) – The effective address.

Returns:

- `Optional[ea_t]` – Next valid address or None.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### get_next_head

```
get_next_head(
    ea: ea_t, max_ea: ea_t = None
) -> Optional[ea_t]

```

Gets the next head (start of data item) after the specified address.

Parameters:

- **`ea`** (`ea_t`) – The effective address.
- **`max_ea`** (`ea_t`, default: `None` ) – Maximum address to search.

Returns:

- `Optional[ea_t]` – Address of next head, or None if not found.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### get_original_byte_at

```
get_original_byte_at(ea: ea_t) -> Optional[int]

```

Get original byte value (that was before patching).

Parameters:

- **`ea`** (`ea_t`) – The effective address.

Returns:

- `Optional[int]` – The original byte value, or None if an error occurs.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### get_original_bytes_at

```
get_original_bytes_at(
    ea: ea_t, size: int
) -> Optional[bytes]

```

Gets the original bytes before any patches by reading individual bytes.

Parameters:

- **`ea`** (`ea_t`) – The effective address.
- **`size`** (`int`) – Number of bytes to read.

Returns:

- `Optional[bytes]` – The original bytes or None in case of error.

Raises:

- `InvalidEAError` – If the effective address is invalid.
- `InvalidParameterError` – If size is not positive.

#### get_original_dword_at

```
get_original_dword_at(ea: ea_t) -> Optional[int]

```

Get original dword value (that was before patching).

Parameters:

- **`ea`** (`ea_t`) – The effective address.

Returns:

- `Optional[int]` – The original dword value, or None if an error occurs.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### get_original_qword_at

```
get_original_qword_at(ea: ea_t) -> Optional[int]

```

Get original qword value (that was before patching).

Parameters:

- **`ea`** (`ea_t`) – The effective address.

Returns:

- `Optional[int]` – The original qword value, or None if an error occurs.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### get_original_word_at

```
get_original_word_at(ea: ea_t) -> Optional[int]

```

Get original word value (that was before patching).

Parameters:

- **`ea`** (`ea_t`) – The effective address.

Returns:

- `Optional[int]` – The original word value, or None if an error occurs.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### get_previous_address

```
get_previous_address(ea: ea_t) -> Optional[ea_t]

```

Gets the previous valid address before the specified address.

Parameters:

- **`ea`** (`ea_t`) – The effective address.

Returns:

- `Optional[ea_t]` – Previous valid address.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### get_previous_head

```
get_previous_head(
    ea: ea_t, min_ea: ea_t = None
) -> Optional[ea_t]

```

Gets the previous head (start of data item) before the specified address.

Parameters:

- **`ea`** (`ea_t`) – The effective address.
- **`min_ea`** (`ea_t`, default: `None` ) – Minimum address to search.

Returns:

- `Optional[ea_t]` – Address of previous head, or None if not found.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### get_qword_at

```
get_qword_at(
    ea: ea_t, allow_uninitialized: bool = False
) -> int

```

Retrieves a quad word (64 bits/8 bytes) at the specified address.

Parameters:

- **`ea`** (`ea_t`) – The effective address.
- **`allow_uninitialized`** (`bool`, default: `False` ) – If True, allows reading addresses with uninitialized values.

Returns:

- `int` – The qword value.

Raises:

- `InvalidEAError` – If the effective address is invalid.
- `NoValueError` – If allow_uninitialized is False and the address contains an uninitialized value.

#### get_string_at

```
get_string_at(
    ea: ea_t, max_length: Optional[int] = None
) -> Optional[str]

```

Gets a string from the specified address.

Parameters:

- **`ea`** (`ea_t`) – The effective address.
- **`max_length`** (`Optional[int]`, default: `None` ) – Maximum string length to read.

Returns:

- `Optional[str]` – The string if it was successfully extracted or None in case of error

Raises:

- `InvalidEAError` – If the effective address is invalid.
- `InvalidParameterError` – If max_length is specified but not positive.

#### get_word_at

```
get_word_at(
    ea: ea_t, allow_uninitialized: bool = False
) -> int

```

Retrieves a word (16 bits/2 bytes) at the specified address.

Parameters:

- **`ea`** (`ea_t`) – The effective address.
- **`allow_uninitialized`** (`bool`, default: `False` ) – If True, allows reading addresses with uninitialized values.

Returns:

- `int` – The word value.

Raises:

- `InvalidEAError` – If the effective address is invalid.
- `NoValueError` – If allow_uninitialized is False and the address contains an uninitialized value.

#### has_any_flags_at

```
has_any_flags_at(ea: ea_t, flag_mask: ByteFlags) -> bool

```

Checks if any of the specified flags are set at the given address.

Parameters:

- **`ea`** (`ea_t`) – The effective address.
- **`flag_mask`** (`ByteFlags`) – ByteFlags enum value(s) to check.

Returns:

- `bool` – True if any of the specified flags are set, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### has_user_name_at

```
has_user_name_at(ea: ea_t) -> bool

```

Checks if the address has a user-defined name.

Parameters:

- **`ea`** (`ea_t`) – The effective address.

Returns:

- `bool` – True if has user name, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### is_alignment_at

```
is_alignment_at(ea: ea_t) -> bool

```

Checks if the address contains an alignment directive.

Parameters:

- **`ea`** (`ea_t`) – The effective address.

Returns:

- `bool` – True if alignment type, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### is_byte_at

```
is_byte_at(ea: ea_t) -> bool

```

Checks if the address contains a byte data type.

Parameters:

- **`ea`** (`ea_t`) – The effective address.

Returns:

- `bool` – True if byte type, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### is_code_at

```
is_code_at(ea: ea_t) -> bool

```

Checks if the address contains code.

Parameters:

- **`ea`** (`ea_t`) – The effective address.

Returns:

- `bool` – True if code, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### is_data_at

```
is_data_at(ea: ea_t) -> bool

```

Checks if the address contains data.

Parameters:

- **`ea`** (`ea_t`) – The effective address.

Returns:

- `bool` – True if data, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### is_double_at

```
is_double_at(ea: ea_t) -> bool

```

Checks if the address contains a double data type.

Parameters:

- **`ea`** (`ea_t`) – The effective address.

Returns:

- `bool` – True if double type, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### is_dword_at

```
is_dword_at(ea: ea_t) -> bool

```

Checks if the address contains a dword data type.

Parameters:

- **`ea`** (`ea_t`) – The effective address.

Returns:

- `bool` – True if dword type, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### is_float_at

```
is_float_at(ea: ea_t) -> bool

```

Checks if the address contains a float data type.

Parameters:

- **`ea`** (`ea_t`) – The effective address.

Returns:

- `bool` – True if float type, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### is_flowed_at

```
is_flowed_at(ea: ea_t) -> bool

```

Does the previous instruction exist and pass execution flow to the current byte?

Parameters:

- **`ea`** (`ea_t`) – The effective address.

Returns:

- `bool` – True if flow, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### is_forced_operand_at

```
is_forced_operand_at(ea: ea_t, n: int) -> bool

```

Is operand manually defined?

Parameters:

- **`ea`** (`ea_t`) – The effective address.
- **`n`** (`int`) – Operand number (0-based).

Returns:

- `bool` – True if operand is forced, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.
- `InvalidParameterError` – If operand number is negative.

#### is_head_at

```
is_head_at(ea: ea_t) -> bool

```

Checks if the address is the start of a data item.

Parameters:

- **`ea`** (`ea_t`) – The effective address.

Returns:

- `bool` – True if head, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### is_manual_insn_at

```
is_manual_insn_at(ea: ea_t) -> bool

```

Is the instruction overridden?

Parameters:

- **`ea`** (`ea_t`) – The effective address.

Returns:

- `bool` – True if instruction is manually overridden, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### is_not_tail_at

```
is_not_tail_at(ea: ea_t) -> bool

```

Checks if the address is not a tail byte.

Parameters:

- **`ea`** (`ea_t`) – The effective address.

Returns:

- `bool` – True if not tail, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### is_oword_at

```
is_oword_at(ea: ea_t) -> bool

```

Checks if the address contains an oword data type.

Parameters:

- **`ea`** (`ea_t`) – The effective address.

Returns:

- `bool` – True if oword type, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### is_packed_real_at

```
is_packed_real_at(ea: ea_t) -> bool

```

Checks if the address contains a packed real data type.

Parameters:

- **`ea`** (`ea_t`) – The effective address.

Returns:

- `bool` – True if packed real type, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### is_qword_at

```
is_qword_at(ea: ea_t) -> bool

```

Checks if the address contains a qword data type.

Parameters:

- **`ea`** (`ea_t`) – The effective address.

Returns:

- `bool` – True if qword type, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### is_string_literal_at

```
is_string_literal_at(ea: ea_t) -> bool

```

Checks if the address contains a string literal data type.

Parameters:

- **`ea`** (`ea_t`) – The effective address.

Returns:

- `bool` – True if string literal type, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### is_struct_at

```
is_struct_at(ea: ea_t) -> bool

```

Checks if the address contains a struct data type.

Parameters:

- **`ea`** (`ea_t`) – The effective address.

Returns:

- `bool` – True if struct type, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### is_tail_at

```
is_tail_at(ea: ea_t) -> bool

```

Checks if the address is part of a multi-byte data item.

Parameters:

- **`ea`** (`ea_t`) – The effective address.

Returns:

- `bool` – True if tail, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### is_tbyte_at

```
is_tbyte_at(ea: ea_t) -> bool

```

Checks if the address contains a tbyte data type.

Parameters:

- **`ea`** (`ea_t`) – The effective address.

Returns:

- `bool` – True if tbyte type, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### is_unknown_at

```
is_unknown_at(ea: ea_t) -> bool

```

Checks if the address contains unknown/undefined data.

Parameters:

- **`ea`** (`ea_t`) – The effective address.

Returns:

- `bool` – True if unknown, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### is_value_initialized_at

```
is_value_initialized_at(ea: ea_t) -> bool

```

Check if the value at the specified address is initialized

Parameters:

- **`ea`** (`ea_t`) – The effective address.

Returns:

- `bool` – True if byte is loaded, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### is_word_at

```
is_word_at(ea: ea_t) -> bool

```

Checks if the address contains a word data type.

Parameters:

- **`ea`** (`ea_t`) – The effective address.

Returns:

- `bool` – True if word type, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### is_yword_at

```
is_yword_at(ea: ea_t) -> bool

```

Checks if the address contains a yword data type.

Parameters:

- **`ea`** (`ea_t`) – The effective address.

Returns:

- `bool` – True if yword type, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### is_zword_at

```
is_zword_at(ea: ea_t) -> bool

```

Checks if the address contains a zword data type.

Parameters:

- **`ea`** (`ea_t`) – The effective address.

Returns:

- `bool` – True if zword type, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### patch_byte_at

```
patch_byte_at(ea: ea_t, value: int) -> bool

```

Patch a byte of the program. The original value is saved and can be obtained by get_original_byte_at().

Parameters:

- **`ea`** (`ea_t`) – The effective address.
- **`value`** (`int`) – Byte value to patch.

Returns:

- `bool` – True if the database has been modified, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.
- `InvalidParameterError` – If value is not a valid byte (0-0xFF).

#### patch_bytes_at

```
patch_bytes_at(ea: ea_t, data: bytes) -> None

```

Patch the specified number of bytes of the program. Original values are saved and available with get_original_bytes_at().

Parameters:

- **`ea`** (`ea_t`) – The effective address.
- **`data`** (`bytes`) – Bytes to patch.

Raises:

- `InvalidEAError` – If the effective address is invalid.
- `InvalidParameterError` – If data is not bytes or is empty.

#### patch_dword_at

```
patch_dword_at(ea: ea_t, value: int) -> bool

```

Patch a dword of the program. The original value is saved and can be obtained by get_original_dword_at().

Parameters:

- **`ea`** (`ea_t`) – The effective address.
- **`value`** (`int`) – Dword value to patch.

Returns:

- `bool` – True if the database has been modified, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.
- `InvalidParameterError` – If value is not a valid dword (0-0xFFFFFFFF).

#### patch_qword_at

```
patch_qword_at(ea: ea_t, value: int) -> bool

```

Patch a qword of the program. The original value is saved and can be obtained by get_original_qword_at().

Parameters:

- **`ea`** (`ea_t`) – The effective address.
- **`value`** (`int`) – Qword value to patch.

Returns:

- `bool` – True if the database has been modified, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.
- `InvalidParameterError` – If value is not a valid qword (0-0xFFFFFFFFFFFFFFFF).

#### patch_word_at

```
patch_word_at(ea: ea_t, value: int) -> bool

```

Patch a word of the program. The original value is saved and can be obtained by get_original_word_at().

Parameters:

- **`ea`** (`ea_t`) – The effective address.
- **`value`** (`int`) – Word value to patch.

Returns:

- `bool` – True if the database has been modified, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.
- `InvalidParameterError` – If value is not a valid word (0-0xFFFF).

#### revert_byte_at

```
revert_byte_at(ea: ea_t) -> bool

```

Revert patched byte to its original value.

Parameters:

- **`ea`** (`ea_t`) – The effective address.

Returns:

- `bool` – True if byte was patched before and reverted now, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### set_byte_at

```
set_byte_at(ea: ea_t, value: int) -> bool

```

Sets a byte value at the specified address.

Parameters:

- **`ea`** (`ea_t`) – The effective address.
- **`value`** (`int`) – Byte value to set.

Returns:

- `bool` – True if successful, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.
- `InvalidParameterError` – If value is not a valid byte (0-0xFF).

#### set_bytes_at

```
set_bytes_at(ea: ea_t, data: bytes) -> None

```

Sets a sequence of bytes at the specified address.

Parameters:

- **`ea`** (`ea_t`) – The effective address.
- **`data`** (`bytes`) – Bytes to write.

Raises:

- `InvalidEAError` – If the effective address is invalid.
- `InvalidParameterError` – If data is not bytes or is empty.

#### set_dword_at

```
set_dword_at(ea: ea_t, value: int) -> None

```

Sets a double word (4 bytes) value at the specified address.

Parameters:

- **`ea`** (`ea_t`) – The effective address.
- **`value`** (`int`) – Double word value to set.

Raises:

- `InvalidEAError` – If the effective address is invalid.
- `InvalidParameterError` – If value is not a valid dword (0-0xFFFFFFFF).

#### set_qword_at

```
set_qword_at(ea: ea_t, value: int) -> None

```

Sets a quad word (8 bytes) value at the specified address.

Parameters:

- **`ea`** (`ea_t`) – The effective address.
- **`value`** (`int`) – Quad word value to set.

Raises:

- `InvalidEAError` – If the effective address is invalid.
- `InvalidParameterError` – If value is not a valid qword (0-0xFFFFFFFFFFFFFFFF).

#### set_word_at

```
set_word_at(ea: ea_t, value: int) -> None

```

Sets a word (2 bytes) value at the specified address.

Parameters:

- **`ea`** (`ea_t`) – The effective address.
- **`value`** (`int`) – Word value to set.

Raises:

- `InvalidEAError` – If the effective address is invalid.
- `InvalidParameterError` – If value is not a valid word (0-0xFFFF).

### SearchFlags

Bases: `IntFlag`

Search flags for text and pattern searching.

Attributes:

- **`BRK`** – Return BADADDR if the search was cancelled.
- **`CASE`** – Case-sensitive search (case-insensitive otherwise)
- **`DOWN`** – Search towards higher addresses
- **`IDENT`** – Search for an identifier (text search). It means that the
- **`NOBRK`** – Don't test if the user interrupted the search
- **`NOSHOW`** – Don't display the search progress/refresh screen
- **`REGEX`** – Regular expressions in search string
- **`UP`** – Search towards lower addresses

#### BRK

```
BRK = SEARCH_BRK

```

Return BADADDR if the search was cancelled.

#### CASE

```
CASE = SEARCH_CASE

```

Case-sensitive search (case-insensitive otherwise)

#### DOWN

```
DOWN = SEARCH_DOWN

```

Search towards higher addresses

#### IDENT

```
IDENT = SEARCH_IDENT

```

Search for an identifier (text search). It means that the characters before and after the match cannot be is_visible_char().

#### NOBRK

```
NOBRK = SEARCH_NOBRK

```

Don't test if the user interrupted the search

#### NOSHOW

```
NOSHOW = SEARCH_NOSHOW

```

Don't display the search progress/refresh screen

#### REGEX

```
REGEX = SEARCH_REGEX

```

Regular expressions in search string

#### UP

```
UP = SEARCH_UP

```

Search towards lower addresses
