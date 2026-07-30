# `Strings`

## strings

Classes:

- **`StringItem`** – Represents detailed information about a string in the IDA database.
- **`StringListConfig`** – Configuration for building the internal string list.
- **`StringType`** – String type constants.
- **`Strings`** – Provides access to string-related operations in the IDA database.

### StringItem

```
StringItem(address: ea_t, length: int, internal_type: int)

```

Represents detailed information about a string in the IDA database.

Attributes:

- **`address`** (`ea_t`) – String address
- **`contents`** (`bytes`) – Returns utf-8 encoded string contents.
- **`encoding`** (`str`) – Returns internal IDA string encoding, e.g. 'iso-8859-1'.
- **`internal_type`** (`int`) – Internal IDA string type, including internal string encoding
- **`length`** (`int`) – String length in number of characters
- **`type`** (`StringType`) – Return string type enum value, e.g. 'C-style null-terminated string'.

#### address

```
address: ea_t

```

String address

#### contents

```
contents: bytes

```

Returns utf-8 encoded string contents.

#### encoding

```
encoding: str

```

Returns internal IDA string encoding, e.g. 'iso-8859-1'. Note that retrieved string contents will always be utf-8 encoded.

#### internal_type

```
internal_type: int

```

Internal IDA string type, including internal string encoding

#### length

```
length: int

```

String length in number of characters

#### type

```
type: StringType

```

Return string type enum value, e.g. 'C-style null-terminated string'.

### StringListConfig

```
StringListConfig(
    string_types: list[StringType] = lambda: [C](),
    min_len: int = 5,
    only_ascii_7bit: bool = True,
    only_existing: bool = False,
    ignore_instructions: bool = False,
)

```

Configuration for building the internal string list.

Attributes:

- **`ignore_instructions`** (`bool`) –
- **`min_len`** (`int`) –
- **`only_ascii_7bit`** (`bool`) –
- **`only_existing`** (`bool`) –
- **`string_types`** (`list[StringType]`) –

#### ignore_instructions

```
ignore_instructions: bool = False

```

#### min_len

```
min_len: int = 5

```

#### only_ascii_7bit

```
only_ascii_7bit: bool = True

```

#### only_existing

```
only_existing: bool = False

```

#### string_types

```
string_types: list[StringType] = field(
    default_factory=lambda: [C]
)

```

### StringType

Bases: `IntEnum`

String type constants.

Attributes:

- **`C`** –
- **`C_16`** –
- **`C_32`** –
- **`LEN2`** –
- **`LEN2_16`** –
- **`LEN2_32`** –
- **`LEN4`** –
- **`LEN4_16`** –
- **`LEN4_32`** –
- **`PASCAL`** –
- **`PASCAL_16`** –
- **`PASCAL_32`** –

#### C

```
C = STRTYPE_C

```

#### C_16

```
C_16 = STRTYPE_C_16

```

#### C_32

```
C_32 = STRTYPE_C_32

```

#### LEN2

```
LEN2 = STRTYPE_LEN2

```

#### LEN2_16

```
LEN2_16 = STRTYPE_LEN2_16

```

#### LEN2_32

```
LEN2_32 = STRTYPE_LEN2_32

```

#### LEN4

```
LEN4 = STRTYPE_LEN4

```

#### LEN4_16

```
LEN4_16 = STRTYPE_LEN4_16

```

#### LEN4_32

```
LEN4_32 = STRTYPE_LEN4_32

```

#### PASCAL

```
PASCAL = STRTYPE_PASCAL

```

#### PASCAL_16

```
PASCAL_16 = STRTYPE_PASCAL_16

```

#### PASCAL_32

```
PASCAL_32 = STRTYPE_PASCAL_32

```

### Strings

```
Strings(database: Database)

```

Bases: `DatabaseEntity`

Provides access to string-related operations in the IDA database.

Can be used to iterate over all strings in the opened database.

Parameters:

- **`database`** (`Database`) – Reference to the active IDA database.

Methods:

- **`clear`** – Clear the string list, strings will not be saved in the database.
- **`get_all`** – Retrieves an iterator over all extracted strings in the database.
- **`get_at`** – Retrieves detailed string information at the specified address.
- **`get_at_index`** – Retrieves the string at the specified index.
- **`get_between`** – Retrieves strings within the specified address range.
- **`rebuild`** – Rebuild the string list from scratch.

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

#### clear

```
clear() -> None

```

Clear the string list, strings will not be saved in the database.

#### get_all

```
get_all() -> Iterator[StringItem]

```

Retrieves an iterator over all extracted strings in the database.

Returns:

- `Iterator[StringItem]` – An iterator over all strings.

#### get_at

```
get_at(ea: ea_t) -> Optional[StringItem]

```

Retrieves detailed string information at the specified address.

Parameters:

- **`ea`** (`ea_t`) – The effective address.

Returns:

- `Optional[StringItem]` – A StringItem object if found, None otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### get_at_index

```
get_at_index(index: int) -> StringItem

```

Retrieves the string at the specified index.

Parameters:

- **`index`** (`int`) – Index of the string to retrieve.

Returns:

- `StringItem` – A StringItem object at the given index.
- `StringItem` – In case of error, returns None.

#### get_between

```
get_between(
    start_ea: ea_t, end_ea: ea_t
) -> Iterator[StringItem]

```

Retrieves strings within the specified address range.

Parameters:

- **`start_ea`** (`ea_t`) – Start address of the range (inclusive).
- **`end_ea`** (`ea_t`) – End address of the range (exclusive).

Returns:

- `Iterator[StringItem]` – An iterator over strings in the range.

Raises:

- `InvalidEAError` – If start_ea or end_ea are not within database bounds.
- `InvalidParameterError` – If start_ea >= end_ea.

#### rebuild

```
rebuild(
    config: StringListConfig = StringListConfig(),
) -> None

```

Rebuild the string list from scratch. This should be called to get an up-to-date string list.
