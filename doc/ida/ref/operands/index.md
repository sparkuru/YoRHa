# `Operands`

## operands

Classes:

- **`AccessType`** – Enumeration of operand access types.
- **`ImmediateOperand`** – Operand representing immediate values (o_imm, o_far, o_near).
- **`MemoryOperand`** – Operand representing memory access (o_mem, o_phrase, o_displ).
- **`Operand`** – Abstract base class for all operand types.
- **`OperandDataType`** – Enumeration of operand data types.
- **`OperandFactory`** – Factory for creating appropriate operand instances.
- **`OperandInfo`** – Basic information about an operand.
- **`OperandType`** – Enumeration of operand types for easier identification.
- **`ProcessorSpecificOperand`** – Operand representing processor-specific types (o_idpspec0-5).
- **`RegisterOperand`** – Operand representing a processor register (o_reg).

### AccessType

Bases: `Enum`

Enumeration of operand access types.

Attributes:

- **`NONE`** –
- **`READ`** –
- **`READ_WRITE`** –
- **`WRITE`** –

#### NONE

```
NONE = 'none'

```

#### READ

```
READ = 'read'

```

#### READ_WRITE

```
READ_WRITE = 'read_write'

```

#### WRITE

```
WRITE = 'write'

```

### ImmediateOperand

```
ImmediateOperand(
    database: Database, operand: op_t, instruction_ea: ea_t
)

```

Bases: `Operand`

Operand representing immediate values (o_imm, o_far, o_near).

Methods:

- **`get_access_type`** – Get a string description of how this operand is accessed.
- **`get_info`** – Get structured information about the operand.
- **`get_name`** – Get the symbolic name for address operands.
- **`get_value`** – Get the immediate value or address.
- **`has_outer_displacement`** – Check if this operand has an outer displacement.
- **`is_address`** – Check if this is an address operand (far/near).
- **`is_floating_point`** – Check if this is a floating point operand.
- **`is_read`** – Check if this operand is read (used) by the instruction.
- **`is_write`** – Check if this operand is written (modified) by the instruction.

Attributes:

- **`data_type`** (`OperandDataType`) – Get the operand data type as an enum.
- **`flags`** (`int`) – Get the operand flags.
- **`is_shown`** (`bool`) – Check if the operand should be displayed.
- **`m_database`** –
- **`number`** (`int`) – Get the operand number (0, 1, 2, etc.).
- **`raw_operand`** (`op_t`) – Get the underlying op_t object.
- **`size_bits`** (`int`) – Get the size of the operand in bits.
- **`size_bytes`** (`int`) – Get the size of the operand in bytes.
- **`type`** (`OperandType`) – Get the operand type as an enum.

#### data_type

```
data_type: OperandDataType

```

Get the operand data type as an enum.

#### flags

```
flags: int

```

Get the operand flags.

#### is_shown

```
is_shown: bool

```

Check if the operand should be displayed.

#### m_database

```
m_database = database

```

#### number

```
number: int

```

Get the operand number (0, 1, 2, etc.).

#### raw_operand

```
raw_operand: op_t

```

Get the underlying op_t object.

#### size_bits

```
size_bits: int

```

Get the size of the operand in bits.

#### size_bytes

```
size_bytes: int

```

Get the size of the operand in bytes.

#### type

```
type: OperandType

```

Get the operand type as an enum.

#### get_access_type

```
get_access_type() -> AccessType

```

Get a string description of how this operand is accessed.

#### get_info

```
get_info() -> OperandInfo

```

Get structured information about the operand.

#### get_name

```
get_name() -> Optional[str]

```

Get the symbolic name for address operands.

#### get_value

```
get_value() -> int

```

Get the immediate value or address.

#### has_outer_displacement

```
has_outer_displacement() -> bool

```

Check if this operand has an outer displacement.

Returns True if the OF_OUTER_DISP flag is set.

#### is_address

```
is_address() -> bool

```

Check if this is an address operand (far/near).

#### is_floating_point

```
is_floating_point() -> bool

```

Check if this is a floating point operand.

#### is_read

```
is_read() -> bool

```

Check if this operand is read (used) by the instruction.

#### is_write

```
is_write() -> bool

```

Check if this operand is written (modified) by the instruction.

### MemoryOperand

```
MemoryOperand(
    database: Database, operand: op_t, instruction_ea: ea_t
)

```

Bases: `Operand`

Operand representing memory access (o_mem, o_phrase, o_displ).

Methods:

- **`get_access_type`** – Get a string description of how this operand is accessed.
- **`get_address`** – Get the address for direct memory operands.
- **`get_displacement`** – Get the base displacement value.
- **`get_formatted_string`** – Get the formatted operand string from IDA.
- **`get_info`** – Get structured information about the operand.
- **`get_name`** – Get the symbolic name for direct memory operands.
- **`get_outer_displacement`** – Get the outer displacement value for complex addressing modes.
- **`get_phrase_number`** – Get the phrase number for register-based operands.
- **`get_value`** – Get the primary value based on memory type.
- **`has_outer_displacement`** – Check if this operand has an outer displacement.
- **`is_direct_memory`** – Check if this is direct memory access.
- **`is_floating_point`** – Check if this is a floating point operand.
- **`is_read`** – Check if this operand is read (used) by the instruction.
- **`is_register_based`** – Check if this uses register-based addressing.
- **`is_write`** – Check if this operand is written (modified) by the instruction.

Attributes:

- **`data_type`** (`OperandDataType`) – Get the operand data type as an enum.
- **`flags`** (`int`) – Get the operand flags.
- **`is_shown`** (`bool`) – Check if the operand should be displayed.
- **`m_database`** –
- **`number`** (`int`) – Get the operand number (0, 1, 2, etc.).
- **`raw_operand`** (`op_t`) – Get the underlying op_t object.
- **`size_bits`** (`int`) – Get the size of the operand in bits.
- **`size_bytes`** (`int`) – Get the size of the operand in bytes.
- **`type`** (`OperandType`) – Get the operand type as an enum.

#### data_type

```
data_type: OperandDataType

```

Get the operand data type as an enum.

#### flags

```
flags: int

```

Get the operand flags.

#### is_shown

```
is_shown: bool

```

Check if the operand should be displayed.

#### m_database

```
m_database = database

```

#### number

```
number: int

```

Get the operand number (0, 1, 2, etc.).

#### raw_operand

```
raw_operand: op_t

```

Get the underlying op_t object.

#### size_bits

```
size_bits: int

```

Get the size of the operand in bits.

#### size_bytes

```
size_bytes: int

```

Get the size of the operand in bytes.

#### type

```
type: OperandType

```

Get the operand type as an enum.

#### get_access_type

```
get_access_type() -> AccessType

```

Get a string description of how this operand is accessed.

#### get_address

```
get_address() -> Optional[ea_t]

```

Get the address for direct memory operands.

#### get_displacement

```
get_displacement() -> Optional[int]

```

Get the base displacement value.

This is the primary displacement used in addressing modes like [reg + disp]. Stored in op_t.addr field.

#### get_formatted_string

```
get_formatted_string() -> Optional[str]

```

Get the formatted operand string from IDA.

#### get_info

```
get_info() -> OperandInfo

```

Get structured information about the operand.

#### get_name

```
get_name() -> Optional[str]

```

Get the symbolic name for direct memory operands.

#### get_outer_displacement

```
get_outer_displacement() -> Optional[int]

```

Get the outer displacement value for complex addressing modes.

Only present when OF_OUTER_DISP flag is set. Stored in op_t.value field.

#### get_phrase_number

```
get_phrase_number() -> Optional[int]

```

Get the phrase number for register-based operands.

#### get_value

```
get_value() -> Any

```

Get the primary value based on memory type.

#### has_outer_displacement

```
has_outer_displacement() -> bool

```

Check if this operand has an outer displacement.

Returns True if the OF_OUTER_DISP flag is set.

#### is_direct_memory

```
is_direct_memory() -> bool

```

Check if this is direct memory access.

#### is_floating_point

```
is_floating_point() -> bool

```

Check if this is a floating point operand.

#### is_read

```
is_read() -> bool

```

Check if this operand is read (used) by the instruction.

#### is_register_based

```
is_register_based() -> bool

```

Check if this uses register-based addressing.

#### is_write

```
is_write() -> bool

```

Check if this operand is written (modified) by the instruction.

### Operand

```
Operand(
    database: Database, operand: op_t, instruction_ea: ea_t
)

```

Bases: `ABC`

Abstract base class for all operand types.

Methods:

- **`get_access_type`** – Get a string description of how this operand is accessed.
- **`get_info`** – Get structured information about the operand.
- **`get_value`** – Get the primary value of the operand.
- **`is_floating_point`** – Check if this is a floating point operand.
- **`is_read`** – Check if this operand is read (used) by the instruction.
- **`is_write`** – Check if this operand is written (modified) by the instruction.

Attributes:

- **`data_type`** (`OperandDataType`) – Get the operand data type as an enum.
- **`flags`** (`int`) – Get the operand flags.
- **`is_shown`** (`bool`) – Check if the operand should be displayed.
- **`m_database`** –
- **`number`** (`int`) – Get the operand number (0, 1, 2, etc.).
- **`raw_operand`** (`op_t`) – Get the underlying op_t object.
- **`size_bits`** (`int`) – Get the size of the operand in bits.
- **`size_bytes`** (`int`) – Get the size of the operand in bytes.
- **`type`** (`OperandType`) – Get the operand type as an enum.

#### data_type

```
data_type: OperandDataType

```

Get the operand data type as an enum.

#### flags

```
flags: int

```

Get the operand flags.

#### is_shown

```
is_shown: bool

```

Check if the operand should be displayed.

#### m_database

```
m_database = database

```

#### number

```
number: int

```

Get the operand number (0, 1, 2, etc.).

#### raw_operand

```
raw_operand: op_t

```

Get the underlying op_t object.

#### size_bits

```
size_bits: int

```

Get the size of the operand in bits.

#### size_bytes

```
size_bytes: int

```

Get the size of the operand in bytes.

#### type

```
type: OperandType

```

Get the operand type as an enum.

#### get_access_type

```
get_access_type() -> AccessType

```

Get a string description of how this operand is accessed.

#### get_info

```
get_info() -> OperandInfo

```

Get structured information about the operand.

#### get_value

```
get_value() -> Any

```

Get the primary value of the operand.

#### is_floating_point

```
is_floating_point() -> bool

```

Check if this is a floating point operand.

#### is_read

```
is_read() -> bool

```

Check if this operand is read (used) by the instruction.

#### is_write

```
is_write() -> bool

```

Check if this operand is written (modified) by the instruction.

### OperandDataType

Bases: `IntEnum`

Enumeration of operand data types.

Attributes:

- **`BITFIELD`** –
- **`BYTE`** –
- **`BYTE16`** –
- **`BYTE32`** –
- **`BYTE64`** –
- **`CODE`** –
- **`DOUBLE`** –
- **`DWORD`** –
- **`FLOAT`** –
- **`FWORD`** –
- **`HALF`** –
- **`LDBL`** –
- **`PACKREAL`** –
- **`QWORD`** –
- **`STRING`** –
- **`TBYTE`** –
- **`UNICODE`** –
- **`VOID`** –
- **`WORD`** –

#### BITFIELD

```
BITFIELD = dt_bitfild

```

#### BYTE

```
BYTE = dt_byte

```

#### BYTE16

```
BYTE16 = dt_byte16

```

#### BYTE32

```
BYTE32 = dt_byte32

```

#### BYTE64

```
BYTE64 = dt_byte64

```

#### CODE

```
CODE = dt_code

```

#### DOUBLE

```
DOUBLE = dt_double

```

#### DWORD

```
DWORD = dt_dword

```

#### FLOAT

```
FLOAT = dt_float

```

#### FWORD

```
FWORD = dt_fword

```

#### HALF

```
HALF = dt_half

```

#### LDBL

```
LDBL = dt_ldbl

```

#### PACKREAL

```
PACKREAL = dt_packreal

```

#### QWORD

```
QWORD = dt_qword

```

#### STRING

```
STRING = dt_string

```

#### TBYTE

```
TBYTE = dt_tbyte

```

#### UNICODE

```
UNICODE = dt_unicode

```

#### VOID

```
VOID = dt_void

```

#### WORD

```
WORD = dt_word

```

### OperandFactory

Factory for creating appropriate operand instances.

Methods:

- **`create`** – Create an operand instance based on the operand type.

#### create

```
create(
    database: Database, operand: op_t, instruction_ea: int
) -> Optional[Operand]

```

Create an operand instance based on the operand type.

### OperandInfo

```
OperandInfo(
    number: int,
    type: OperandType,
    data_type: OperandDataType,
    access_type: AccessType,
    size_bytes: int,
    size_bits: int,
    flags: int,
    is_hidden: bool,
    is_floating_point: bool,
)

```

Basic information about an operand.

Attributes:

- **`access_type`** (`AccessType`) –
- **`data_type`** (`OperandDataType`) –
- **`flags`** (`int`) –
- **`is_floating_point`** (`bool`) –
- **`is_hidden`** (`bool`) –
- **`number`** (`int`) –
- **`size_bits`** (`int`) –
- **`size_bytes`** (`int`) –
- **`type`** (`OperandType`) –

#### access_type

```
access_type: AccessType

```

#### data_type

```
data_type: OperandDataType

```

#### flags

```
flags: int

```

#### is_floating_point

```
is_floating_point: bool

```

#### is_hidden

```
is_hidden: bool

```

#### number

```
number: int

```

#### size_bits

```
size_bits: int

```

#### size_bytes

```
size_bytes: int

```

#### type

```
type: OperandType

```

### OperandType

Bases: `IntEnum`

Enumeration of operand types for easier identification.

Attributes:

- **`DISPLACEMENT`** –
- **`FAR_ADDRESS`** –
- **`IMMEDIATE`** –
- **`MEMORY`** –
- **`NEAR_ADDRESS`** –
- **`PHRASE`** –
- **`PROCESSOR_SPECIFIC_0`** –
- **`PROCESSOR_SPECIFIC_1`** –
- **`PROCESSOR_SPECIFIC_2`** –
- **`PROCESSOR_SPECIFIC_3`** –
- **`PROCESSOR_SPECIFIC_4`** –
- **`PROCESSOR_SPECIFIC_5`** –
- **`REGISTER`** –
- **`VOID`** –

#### DISPLACEMENT

```
DISPLACEMENT = o_displ

```

#### FAR_ADDRESS

```
FAR_ADDRESS = o_far

```

#### IMMEDIATE

```
IMMEDIATE = o_imm

```

#### MEMORY

```
MEMORY = o_mem

```

#### NEAR_ADDRESS

```
NEAR_ADDRESS = o_near

```

#### PHRASE

```
PHRASE = o_phrase

```

#### PROCESSOR_SPECIFIC_0

```
PROCESSOR_SPECIFIC_0 = o_idpspec0

```

#### PROCESSOR_SPECIFIC_1

```
PROCESSOR_SPECIFIC_1 = o_idpspec1

```

#### PROCESSOR_SPECIFIC_2

```
PROCESSOR_SPECIFIC_2 = o_idpspec2

```

#### PROCESSOR_SPECIFIC_3

```
PROCESSOR_SPECIFIC_3 = o_idpspec3

```

#### PROCESSOR_SPECIFIC_4

```
PROCESSOR_SPECIFIC_4 = o_idpspec4

```

#### PROCESSOR_SPECIFIC_5

```
PROCESSOR_SPECIFIC_5 = o_idpspec5

```

#### REGISTER

```
REGISTER = o_reg

```

#### VOID

```
VOID = o_void

```

### ProcessorSpecificOperand

```
ProcessorSpecificOperand(
    database: Database, operand: op_t, instruction_ea: int
)

```

Bases: `Operand`

Operand representing processor-specific types (o_idpspec0-5).

Methods:

- **`get_access_type`** – Get a string description of how this operand is accessed.
- **`get_info`** – Get structured information about the operand.
- **`get_spec_type`** – Get the processor-specific type number (0-5).
- **`get_value`** – Return raw value for processor-specific operands.
- **`is_floating_point`** – Check if this is a floating point operand.
- **`is_read`** – Check if this operand is read (used) by the instruction.
- **`is_write`** – Check if this operand is written (modified) by the instruction.

Attributes:

- **`data_type`** (`OperandDataType`) – Get the operand data type as an enum.
- **`flags`** (`int`) – Get the operand flags.
- **`is_shown`** (`bool`) – Check if the operand should be displayed.
- **`m_database`** –
- **`number`** (`int`) – Get the operand number (0, 1, 2, etc.).
- **`raw_operand`** (`op_t`) – Get the underlying op_t object.
- **`size_bits`** (`int`) – Get the size of the operand in bits.
- **`size_bytes`** (`int`) – Get the size of the operand in bytes.
- **`type`** (`OperandType`) – Get the operand type as an enum.

#### data_type

```
data_type: OperandDataType

```

Get the operand data type as an enum.

#### flags

```
flags: int

```

Get the operand flags.

#### is_shown

```
is_shown: bool

```

Check if the operand should be displayed.

#### m_database

```
m_database = database

```

#### number

```
number: int

```

Get the operand number (0, 1, 2, etc.).

#### raw_operand

```
raw_operand: op_t

```

Get the underlying op_t object.

#### size_bits

```
size_bits: int

```

Get the size of the operand in bits.

#### size_bytes

```
size_bytes: int

```

Get the size of the operand in bytes.

#### type

```
type: OperandType

```

Get the operand type as an enum.

#### get_access_type

```
get_access_type() -> AccessType

```

Get a string description of how this operand is accessed.

#### get_info

```
get_info() -> OperandInfo

```

Get structured information about the operand.

#### get_spec_type

```
get_spec_type() -> int

```

Get the processor-specific type number (0-5).

#### get_value

```
get_value() -> Any

```

Return raw value for processor-specific operands.

#### is_floating_point

```
is_floating_point() -> bool

```

Check if this is a floating point operand.

#### is_read

```
is_read() -> bool

```

Check if this operand is read (used) by the instruction.

#### is_write

```
is_write() -> bool

```

Check if this operand is written (modified) by the instruction.

### RegisterOperand

```
RegisterOperand(
    database: Database, operand: op_t, instruction_ea: ea_t
)

```

Bases: `Operand`

Operand representing a processor register (o_reg).

Methods:

- **`get_access_type`** – Get a string description of how this operand is accessed.
- **`get_info`** – Get structured information about the operand.
- **`get_register_name`** – Get the name of this register using the operand's size.
- **`get_value`** –
- **`is_floating_point`** – Check if this is a floating point operand.
- **`is_read`** – Check if this operand is read (used) by the instruction.
- **`is_write`** – Check if this operand is written (modified) by the instruction.

Attributes:

- **`data_type`** (`OperandDataType`) – Get the operand data type as an enum.
- **`flags`** (`int`) – Get the operand flags.
- **`is_shown`** (`bool`) – Check if the operand should be displayed.
- **`m_database`** –
- **`number`** (`int`) – Get the operand number (0, 1, 2, etc.).
- **`raw_operand`** (`op_t`) – Get the underlying op_t object.
- **`register_number`** (`int`) – Get the register number.
- **`size_bits`** (`int`) – Get the size of the operand in bits.
- **`size_bytes`** (`int`) – Get the size of the operand in bytes.
- **`type`** (`OperandType`) – Get the operand type as an enum.

#### data_type

```
data_type: OperandDataType

```

Get the operand data type as an enum.

#### flags

```
flags: int

```

Get the operand flags.

#### is_shown

```
is_shown: bool

```

Check if the operand should be displayed.

#### m_database

```
m_database = database

```

#### number

```
number: int

```

Get the operand number (0, 1, 2, etc.).

#### raw_operand

```
raw_operand: op_t

```

Get the underlying op_t object.

#### register_number

```
register_number: int

```

Get the register number.

#### size_bits

```
size_bits: int

```

Get the size of the operand in bits.

#### size_bytes

```
size_bytes: int

```

Get the size of the operand in bytes.

#### type

```
type: OperandType

```

Get the operand type as an enum.

#### get_access_type

```
get_access_type() -> AccessType

```

Get a string description of how this operand is accessed.

#### get_info

```
get_info() -> OperandInfo

```

Get structured information about the operand.

#### get_register_name

```
get_register_name() -> str

```

Get the name of this register using the operand's size.

#### get_value

```
get_value() -> int

```

#### is_floating_point

```
is_floating_point() -> bool

```

Check if this is a floating point operand.

#### is_read

```
is_read() -> bool

```

Check if this operand is read (used) by the instruction.

#### is_write

```
is_write() -> bool

```

Check if this operand is written (modified) by the instruction.
