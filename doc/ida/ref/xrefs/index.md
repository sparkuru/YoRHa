# `Xrefs`

## xrefs

Classes:

- **`CallerInfo`** – Information about a function caller.
- **`XrefInfo`** – Enhanced cross-reference information.
- **`XrefType`** – Unified cross-reference types (both code and data).
- **`Xrefs`** – Provides unified access to cross-reference (xref) analysis in the IDA database.
- **`XrefsFlags`** – Flags for xref iteration control.

### CallerInfo

```
CallerInfo(
    ea: ea_t,
    name: str,
    xref_type: XrefType,
    function_ea: Optional[ea_t] = None,
)

```

Information about a function caller.

Attributes:

- **`ea`** (`ea_t`) –
- **`function_ea`** (`Optional[ea_t]`) –
- **`name`** (`str`) –
- **`xref_type`** (`XrefType`) –

#### ea

```
ea: ea_t

```

#### function_ea

```
function_ea: Optional[ea_t] = None

```

#### name

```
name: str

```

#### xref_type

```
xref_type: XrefType

```

### XrefInfo

```
XrefInfo(
    from_ea: ea_t,
    to_ea: ea_t,
    is_code: bool,
    type: XrefType,
    user: bool,
)

```

Enhanced cross-reference information.

Attributes:

- **`from_ea`** (`ea_t`) –
- **`is_call`** (`bool`) – Check if this is a call reference.
- **`is_code`** (`bool`) –
- **`is_flow`** (`bool`) – Check if this is ordinary flow reference.
- **`is_jump`** (`bool`) – Check if this is a jump reference.
- **`is_read`** (`bool`) – Check if this is a data read reference.
- **`is_write`** (`bool`) – Check if this is a data write reference.
- **`to_ea`** (`ea_t`) –
- **`type`** (`XrefType`) –
- **`user`** (`bool`) –

#### from_ea

```
from_ea: ea_t

```

#### is_call

```
is_call: bool

```

Check if this is a call reference.

#### is_code

```
is_code: bool

```

#### is_flow

```
is_flow: bool

```

Check if this is ordinary flow reference.

#### is_jump

```
is_jump: bool

```

Check if this is a jump reference.

#### is_read

```
is_read: bool

```

Check if this is a data read reference.

#### is_write

```
is_write: bool

```

Check if this is a data write reference.

#### to_ea

```
to_ea: ea_t

```

#### type

```
type: XrefType

```

#### user

```
user: bool

```

### XrefType

Bases: `IntEnum`

Unified cross-reference types (both code and data).

Methods:

- **`is_code_ref`** – Check if this is a code reference.
- **`is_data_ref`** – Check if this is a data reference.

Attributes:

- **`CALL_FAR`** – Call Far - creates a function at referenced location
- **`CALL_NEAR`** – Call Near - creates a function at referenced location
- **`INFORMATIONAL`** – Informational reference
- **`JUMP_FAR`** – Jump Far
- **`JUMP_NEAR`** – Jump Near
- **`OFFSET`** – Offset reference or OFFSET flag set
- **`ORDINARY_FLOW`** – Ordinary flow to next instruction
- **`READ`** – Read access
- **`SYMBOLIC`** – Reference to enum member (symbolic constant)
- **`TEXT`** – Text (for forced operands only)
- **`UNKNOWN`** – Unknown
- **`USER_SPECIFIED`** – User specified (obsolete)
- **`WRITE`** – Write access

#### CALL_FAR

```
CALL_FAR = fl_CF

```

Call Far - creates a function at referenced location

#### CALL_NEAR

```
CALL_NEAR = fl_CN

```

Call Near - creates a function at referenced location

#### INFORMATIONAL

```
INFORMATIONAL = dr_I

```

Informational reference

#### JUMP_FAR

```
JUMP_FAR = fl_JF

```

Jump Far

#### JUMP_NEAR

```
JUMP_NEAR = fl_JN

```

Jump Near

#### OFFSET

```
OFFSET = dr_O

```

Offset reference or OFFSET flag set

#### ORDINARY_FLOW

```
ORDINARY_FLOW = fl_F

```

Ordinary flow to next instruction

#### READ

```
READ = dr_R

```

Read access

#### SYMBOLIC

```
SYMBOLIC = dr_S

```

Reference to enum member (symbolic constant)

#### TEXT

```
TEXT = dr_T

```

Text (for forced operands only)

#### UNKNOWN

```
UNKNOWN = 0

```

Unknown

#### USER_SPECIFIED

```
USER_SPECIFIED = fl_USobsolete

```

User specified (obsolete)

#### WRITE

```
WRITE = dr_W

```

Write access

#### is_code_ref

```
is_code_ref() -> bool

```

Check if this is a code reference.

#### is_data_ref

```
is_data_ref() -> bool

```

Check if this is a data reference.

### Xrefs

```
Xrefs(database: Database)

```

Bases: `DatabaseEntity`

Provides unified access to cross-reference (xref) analysis in the IDA database.

This class offers a simplified API for working with both code and data cross-references, with convenient methods for common use cases.

Parameters:

- **`database`** (`Database`) – Reference to the active IDA database.

Example

```
# Get all references to an address
for xref in db.xrefs.to(ea):
    print(f"{xref.frm:x} -> {xref.to:x} ({xref.type.name})")

# Get only code references
for caller in db.xrefs.code_refs_to(func_ea):
    print(f"Called from: {caller:x}")

# Get data reads
for reader in db.xrefs.reads_of(data_ea):
    print(f"Read by: {reader:x}")

```

Methods:

- **`calls_from_ea`** – Get addresses called from this address.
- **`calls_to_ea`** – Get addresses where calls to this address occur.
- **`code_refs_from_ea`** – Get code reference addresses from ea.
- **`code_refs_to_ea`** – Get code reference addresses to ea.
- **`data_refs_from_ea`** – Get data reference addresses from ea.
- **`data_refs_to_ea`** – Get data reference addresses to ea.
- **`from_ea`** – Get all cross-references from an address.
- **`get_callers`** – Get detailed caller information for a function.
- **`jumps_from_ea`** – Get addresses jumped to from this address.
- **`jumps_to_ea`** – Get addresses where jumps to this address occur.
- **`reads_of_ea`** – Get addresses that read from this data location.
- **`to_ea`** – Get all cross-references to an address.
- **`writes_to_ea`** – Get addresses that write to this data location.

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

#### calls_from_ea

```
calls_from_ea(ea: ea_t) -> Iterator[ea_t]

```

Get addresses called from this address.

Parameters:

- **`ea`** (`ea_t`) – Source address

Yields:

- `ea_t` – Called addresses

Raises:

- `InvalidEAError` – If the effective address is invalid

#### calls_to_ea

```
calls_to_ea(ea: ea_t) -> Iterator[ea_t]

```

Get addresses where calls to this address occur.

Parameters:

- **`ea`** (`ea_t`) – Target address

Yields:

- `ea_t` – Addresses containing call instructions

Raises:

- `InvalidEAError` – If the effective address is invalid

#### code_refs_from_ea

```
code_refs_from_ea(
    ea: ea_t, flow: bool = True
) -> Iterator[ea_t]

```

Get code reference addresses from ea.

Parameters:

- **`ea`** (`ea_t`) – Source address
- **`flow`** (`bool`, default: `True` ) – Include ordinary flow references (default: True)

Yields:

- `ea_t` – Target addresses of code references

Raises:

- `InvalidEAError` – If the effective address is invalid

#### code_refs_to_ea

```
code_refs_to_ea(
    ea: ea_t, flow: bool = True
) -> Iterator[ea_t]

```

Get code reference addresses to ea.

Parameters:

- **`ea`** (`ea_t`) – Target address
- **`flow`** (`bool`, default: `True` ) – Include ordinary flow references (default: True)

Yields:

- `ea_t` – Source addresses of code references

Raises:

- `InvalidEAError` – If the effective address is invalid

#### data_refs_from_ea

```
data_refs_from_ea(ea: ea_t) -> Iterator[ea_t]

```

Get data reference addresses from ea.

Parameters:

- **`ea`** (`ea_t`) – Source address

Yields:

- `ea_t` – Target addresses of data references

Raises:

- `InvalidEAError` – If the effective address is invalid

#### data_refs_to_ea

```
data_refs_to_ea(ea: ea_t) -> Iterator[ea_t]

```

Get data reference addresses to ea.

Parameters:

- **`ea`** (`ea_t`) – Target address

Yields:

- `ea_t` – Source addresses of data references

Raises:

- `InvalidEAError` – If the effective address is invalid

#### from_ea

```
from_ea(
    ea: ea_t, flags: XrefsFlags = ALL
) -> Iterator[XrefInfo]

```

Get all cross-references from an address.

Note: Method named 'from\_' because 'from' is a Python keyword.

Parameters:

- **`ea`** (`ea_t`) – Source effective address
- **`flags`** (`XrefsFlags`, default: `ALL` ) – Filter flags (default: all xrefs)

Yields:

- `XrefInfo` – XrefInfo objects with detailed xref information

Raises:

- `InvalidEAError` – If the effective address is invalid

#### get_callers

```
get_callers(func_ea: ea_t) -> Iterator[CallerInfo]

```

Get detailed caller information for a function.

Parameters:

- **`func_ea`** (`ea_t`) – Function start address

Yields:

- `CallerInfo` – CallerInfo objects with caller details

Raises:

- `InvalidEAError` – If the effective address is invalid

#### jumps_from_ea

```
jumps_from_ea(ea: ea_t) -> Iterator[ea_t]

```

Get addresses jumped to from this address.

Parameters:

- **`ea`** (`ea_t`) – Source address

Yields:

- `ea_t` – Jump target addresses

Raises:

- `InvalidEAError` – If the effective address is invalid

#### jumps_to_ea

```
jumps_to_ea(ea: ea_t) -> Iterator[ea_t]

```

Get addresses where jumps to this address occur.

Parameters:

- **`ea`** (`ea_t`) – Target address

Yields:

- `ea_t` – Addresses containing jump instructions

Raises:

- `InvalidEAError` – If the effective address is invalid

#### reads_of_ea

```
reads_of_ea(data_ea: ea_t) -> Iterator[ea_t]

```

Get addresses that read from this data location.

Parameters:

- **`data_ea`** (`ea_t`) – Data address

Yields:

- `ea_t` – Addresses that read the data

Raises:

- `InvalidEAError` – If the effective address is invalid

#### to_ea

```
to_ea(
    ea: ea_t, flags: XrefsFlags = ALL
) -> Iterator[XrefInfo]

```

Get all cross-references to an address.

Parameters:

- **`ea`** (`ea_t`) – Target effective address
- **`flags`** (`XrefsFlags`, default: `ALL` ) – Filter flags (default: all xrefs)

Yields:

- `XrefInfo` – XrefInfo objects with detailed xref information

Raises:

- `InvalidEAError` – If the effective address is invalid

#### writes_to_ea

```
writes_to_ea(data_ea: ea_t) -> Iterator[ea_t]

```

Get addresses that write to this data location.

Parameters:

- **`data_ea`** (`ea_t`) – Data address

Yields:

- `ea_t` – Addresses that write to the data

Raises:

- `InvalidEAError` – If the effective address is invalid

### XrefsFlags

Bases: `IntFlag`

Flags for xref iteration control.

Methods:

- **`to_ida_flags`** – Convert to IDA's xref flags.

Attributes:

- **`ALL`** – Default - all xrefs
- **`CODE`** – Return only code references
- **`CODE_NOFLOW`** – Code xrefs without flow
- **`DATA`** – Return only data references
- **`NOFLOW`** – Skip ordinary flow xrefs

#### ALL

```
ALL = 0

```

Default - all xrefs

#### CODE

```
CODE = XREF_CODE

```

Return only code references

#### CODE_NOFLOW

```
CODE_NOFLOW = CODE | NOFLOW

```

Code xrefs without flow

#### DATA

```
DATA = XREF_DATA

```

Return only data references

#### NOFLOW

```
NOFLOW = XREF_NOFLOW

```

Skip ordinary flow xrefs

#### to_ida_flags

```
to_ida_flags() -> int

```

Convert to IDA's xref flags.
