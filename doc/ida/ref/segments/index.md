# `Segments`

## segments

Classes:

- **`AddSegmentFlags`** –
- **`AddressingMode`** –
- **`PredefinedClass`** –
- **`SegmentPermissions`** –
- **`Segments`** – Provides access to segment-related operations in the IDA database.

### AddSegmentFlags

Bases: `IntFlag`

Attributes:

- **`FILLGAP`** –
- **`IDBENC`** –
- **`NOAA`** –
- **`NONE`** –
- **`NOSREG`** –
- **`NOTRUNC`** –
- **`OR_DIE`** –
- **`QUIET`** –
- **`SPARSE`** –

#### FILLGAP

```
FILLGAP = ADDSEG_FILLGAP

```

#### IDBENC

```
IDBENC = ADDSEG_IDBENC

```

#### NOAA

```
NOAA = ADDSEG_NOAA

```

#### NONE

```
NONE = 0

```

#### NOSREG

```
NOSREG = ADDSEG_NOSREG

```

#### NOTRUNC

```
NOTRUNC = ADDSEG_NOTRUNC

```

#### OR_DIE

```
OR_DIE = ADDSEG_OR_DIE

```

#### QUIET

```
QUIET = ADDSEG_QUIET

```

#### SPARSE

```
SPARSE = ADDSEG_SPARSE

```

### AddressingMode

Bases: `IntEnum`

Attributes:

- **`BIT16`** –
- **`BIT32`** –
- **`BIT64`** –

#### BIT16

```
BIT16 = 0

```

#### BIT32

```
BIT32 = 1

```

#### BIT64

```
BIT64 = 2

```

### PredefinedClass

Bases: `Enum`

Attributes:

- **`ABS`** –
- **`BSS`** –
- **`CODE`** –
- **`COMM`** –
- **`CONST`** –
- **`DATA`** –
- **`STACK`** –
- **`XTRN`** –

#### ABS

```
ABS = 'ABS'

```

#### BSS

```
BSS = 'BSS'

```

#### CODE

```
CODE = 'CODE'

```

#### COMM

```
COMM = 'COMM'

```

#### CONST

```
CONST = 'CONST'

```

#### DATA

```
DATA = 'DATA'

```

#### STACK

```
STACK = 'STACK'

```

#### XTRN

```
XTRN = 'XTRN'

```

### SegmentPermissions

Bases: `IntFlag`

Attributes:

- **`ALL`** –
- **`EXEC`** –
- **`NONE`** –
- **`READ`** –
- **`WRITE`** –

#### ALL

```
ALL = SEGPERM_MAXVAL

```

#### EXEC

```
EXEC = SEGPERM_EXEC

```

#### NONE

```
NONE = 0

```

#### READ

```
READ = SEGPERM_READ

```

#### WRITE

```
WRITE = SEGPERM_WRITE

```

### Segments

```
Segments(database: Database)

```

Bases: `DatabaseEntity`

Provides access to segment-related operations in the IDA database.

Can be used to iterate over all segments in the opened database.

Parameters:

- **`database`** (`Database`) – Reference to the active IDA database.

Note

Since this class does not manage the lifetime of IDA kernel objects (segment_t\*), it is recommended to use these pointers within a limited scope. Obtain the pointer, perform the necessary operations, and avoid retaining references beyond the immediate context to prevent potential issues with object invalidation.

Methods:

- **`add`** – Adds a new segment to the IDA database.
- **`add_permissions`** – OR the given permission bits into the existing segment permissions.
- **`append`** – Append a new segment directly after the last segment in the database.
- **`get_all`** – Retrieves an iterator over all segments in the database.
- **`get_at`** – Retrieves the segment that contains the given address.
- **`get_bitness`** – Get segment bitness (16/32/64).
- **`get_by_name`** – Find segment by name.
- **`get_class`** – Get segment class name.
- **`get_comment`** – Get comment for segment.
- **`get_name`** – Retrieves the name of the given segment.
- **`get_size`** – Calculate segment size in bytes.
- **`remove_permissions`** – Clear the given permission bits from the existing segment permissions.
- **`set_addressing_mode`** – Sets the segment addressing mode (16-bit, 32-bit, or 64-bit).
- **`set_comment`** – Set comment for segment.
- **`set_name`** – Renames a segment.
- **`set_permissions`** – Set the segment permissions exactly to perms (overwrites existing flags).

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

#### add

```
add(
    seg_para: ea_t,
    start_ea: ea_t,
    end_ea: ea_t,
    seg_name: Optional[str] = None,
    seg_class: Optional[Union[str, PredefinedClass]] = None,
    flags: AddSegmentFlags = NONE,
) -> Optional[segment_t]

```

Adds a new segment to the IDA database.

Parameters:

- **`seg_para`** (`ea_t`) – Segment base paragraph.
- **`start_ea`** (`ea_t`) – Start address of the segment (linear EA).
- **`end_ea`** (`ea_t`) – End address of the segment (exclusive).
- **`seg_name`** (`Optional[str]`, default: `None` ) – Name of new segment (optional).
- **`seg_class`** (`Optional[Union[str, PredefinedClass]]`, default: `None` ) – Class of the segment (optional). Accepts str or PredefinedClass.
- **`flags`** (`AddSegmentFlags`, default: `NONE` ) – Add segment flags (AddSegmentFlags).

Returns:

- `Optional[segment_t]` – The created segment_t on success, or None on failure.

#### add_permissions

```
add_permissions(
    segment: segment_t, perms: SegmentPermissions
) -> bool

```

OR the given permission bits into the existing segment permissions.

#### append

```
append(
    seg_para: ea_t,
    seg_size: ea_t,
    seg_name: Optional[str] = None,
    seg_class: Optional[Union[str, PredefinedClass]] = None,
    flags: AddSegmentFlags = NONE,
) -> Optional[segment_t]

```

Append a new segment directly after the last segment in the database.

Parameters:

- **`seg_para`** (`ea_t`) – Segment base paragraph (selector/paragraph as used by IDA).
- **`seg_size`** (`ea_t`) – Desired size in bytes for the new segment (must be > 0).
- **`seg_name`** (`Optional[str]`, default: `None` ) – Optional name for the new segment.
- **`seg_class`** (`Optional[Union[str, PredefinedClass]]`, default: `None` ) – Optional class for the new segment (str or PredefinedClass).
- **`flags`** (`AddSegmentFlags`, default: `NONE` ) – Add segment flags (AddSegmentFlags).

Returns:

- `Optional[segment_t]` – The created segment_t on success, or None on failure.

Raises:

- `InvalidParameterError` – If seg_size is \<= 0.
- `DatabaseError` – If there are no existing segments to append after.

#### get_all

```
get_all() -> Iterator[segment_t]

```

Retrieves an iterator over all segments in the database.

Returns:

- `Iterator[segment_t]` – A generator yielding all segment_t objects in the database.

#### get_at

```
get_at(ea: ea_t) -> Optional[segment_t]

```

Retrieves the segment that contains the given address.

Parameters:

- **`ea`** (`ea_t`) – The effective address to search.

Returns:

- `Optional[segment_t]` – A segment_t object, or None if none found.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### get_bitness

```
get_bitness(segment: segment_t) -> int

```

Get segment bitness (16/32/64).

#### get_by_name

```
get_by_name(name: str) -> Optional[segment_t]

```

Find segment by name.

Parameters:

- **`name`** (`str`) – Segment name to search for

Returns:

- `Optional[segment_t]` – segment_t if found, None otherwise

#### get_class

```
get_class(segment: segment_t) -> Optional[str]

```

Get segment class name.

#### get_comment

```
get_comment(
    segment: segment_t, repeatable: bool = False
) -> str

```

Get comment for segment.

Parameters:

- **`segment`** (`segment_t`) – The segment to get comment from.
- **`repeatable`** (`bool`, default: `False` ) – If True, retrieves repeatable comment (shows at all identical operands). If False, retrieves non-repeatable comment (shows only at this segment).

Returns:

- `str` – Comment text, or empty string if no comment exists.

#### get_name

```
get_name(segment: segment_t) -> str

```

Retrieves the name of the given segment.

Parameters:

- **`segment`** (`segment_t`) – The segment to get the name from.

Returns:

- `str` – The segment name as a string, or an empty string if unavailable.

#### get_size

```
get_size(segment: segment_t) -> int

```

Calculate segment size in bytes.

#### remove_permissions

```
remove_permissions(
    segment: segment_t, perms: SegmentPermissions
) -> bool

```

Clear the given permission bits from the existing segment permissions.

#### set_addressing_mode

```
set_addressing_mode(
    segment: segment_t, mode: AddressingMode
) -> bool

```

Sets the segment addressing mode (16-bit, 32-bit, or 64-bit).

Parameters:

- **`segment`** (`segment_t`) – The target segment object.
- **`mode`** (`AddressingMode`) – AddressingMode enum value.

Returns:

- `bool` – True if successful, False otherwise.

#### set_comment

```
set_comment(
    segment: segment_t,
    comment: str,
    repeatable: bool = False,
) -> bool

```

Set comment for segment.

Parameters:

- **`segment`** (`segment_t`) – The segment to set comment for.
- **`comment`** (`str`) – Comment text to set.
- **`repeatable`** (`bool`, default: `False` ) – If True, creates a repeatable comment (shows at all identical operands). If False, creates a non-repeatable comment (shows only at this segment).

Returns:

- `bool` – True if successful, False otherwise.

#### set_name

```
set_name(segment: segment_t, name: str) -> bool

```

Renames a segment.

Parameters:

- **`segment`** (`segment_t`) – The segment to rename.
- **`name`** (`str`) – The new name to assign to the segment.

Returns:

- `bool` – True if the rename operation succeeded, False otherwise.

#### set_permissions

```
set_permissions(
    segment: segment_t, perms: SegmentPermissions
) -> bool

```

Set the segment permissions exactly to `perms` (overwrites existing flags).
