# `Entries`

## entries

Classes:

- **`Entries`** – Provides access to entries in the IDA database.
- **`EntryInfo`** – Represents a program entry point.
- **`ForwarderInfo`** – Represents information about an entry point forwarder.

### Entries

```
Entries(database: Database)

```

Bases: `DatabaseEntity`

Provides access to entries in the IDA database.

Can be used to iterate over all entries in the opened database.

Parameters:

- **`database`** (`Database`) – Reference to the active IDA database.

Methods:

- **`add`** – Add a new entry point.
- **`exists`** – Check if an entry point with the given ordinal exists.
- **`get_addresses`** – Get all entry point addresses.
- **`get_all`** – Get all entry points.
- **`get_at`** – Get entry point by its address.
- **`get_at_index`** – Get entry point by its index in the entry table.
- **`get_by_name`** – Find entry point by name.
- **`get_by_ordinal`** – Get entry point by its ordinal number.
- **`get_count`** – Get the total number of entry points.
- **`get_forwarders`** – Get all entry points that have forwarders.
- **`get_names`** – Get all entry point names.
- **`get_ordinals`** – Get all ordinal numbers.
- **`rename`** – Rename an existing entry point.
- **`set_forwarder`** – Set forwarder name for an entry point.

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
    address: ea_t,
    name: str,
    ordinal: Optional[int] = None,
    make_code: bool = True,
) -> bool

```

Add a new entry point.

Parameters:

- **`address`** (`ea_t`) – Linear address of the entry point
- **`name`** (`str`) – Name for the entry point
- **`ordinal`** (`Optional[int]`, default: `None` ) – Ordinal number (if None, uses address as ordinal)
- **`make_code`** (`bool`, default: `True` ) – Whether to convert bytes to instructions

Returns:

- **`bool`** ( `bool` ) – True if successful

#### exists

```
exists(ordinal: int) -> bool

```

Check if an entry point with the given ordinal exists.

Parameters:

- **`ordinal`** (`int`) – Ordinal number to check

Returns:

- **`bool`** ( `bool` ) – True if entry point exists

#### get_addresses

```
get_addresses() -> Iterator[ea_t]

```

Get all entry point addresses.

Yields:

- **`int`** ( `ea_t` ) – Each entry point address

#### get_all

```
get_all() -> Iterator[EntryInfo]

```

Get all entry points.

Yields:

- **`Entry`** ( `EntryInfo` ) – Each entry point in the program

#### get_at

```
get_at(ea: ea_t) -> Optional[EntryInfo]

```

Get entry point by its address.

Parameters:

- **`ea`** (`ea_t`) – Linear address to search for

Returns:

- **`Entry`** ( `Optional[EntryInfo]` ) – The entry point at the specified address, or None if not found

#### get_at_index

```
get_at_index(index: int) -> EntryInfo

```

Get entry point by its index in the entry table.

Parameters:

- **`index`** (`int`) – Internal index (0 to get_count()-1)

Returns:

- **`Entry`** ( `EntryInfo` ) – The entry point at the specified index

Raises:

- `IndexError` – If index is out of range

#### get_by_name

```
get_by_name(name: str) -> Optional[EntryInfo]

```

Find entry point by name.

Parameters:

- **`name`** (`str`) – Name to search for

Returns:

- **`Entry`** ( `Optional[EntryInfo]` ) – The entry point with the specified name, or None if not found

#### get_by_ordinal

```
get_by_ordinal(ordinal: int) -> Optional[EntryInfo]

```

Get entry point by its ordinal number.

Parameters:

- **`ordinal`** (`int`) – Ordinal number of the entry point

Returns:

- **`Entry`** ( `Optional[EntryInfo]` ) – The entry point with the specified ordinal, or None if not found

#### get_count

```
get_count() -> int

```

Get the total number of entry points.

Returns:

- **`int`** ( `int` ) – Number of entry points in the program

#### get_forwarders

```
get_forwarders() -> Iterator[ForwarderInfo]

```

Get all entry points that have forwarders.

Yields:

- **`ForwarderInfo`** ( `ForwarderInfo` ) – Information about each entry with a forwarder

#### get_names

```
get_names() -> Iterator[str]

```

Get all entry point names.

Yields:

- **`str`** ( `str` ) – Each entry point name

#### get_ordinals

```
get_ordinals() -> Iterator[int]

```

Get all ordinal numbers.

Yields:

- **`int`** ( `int` ) – Each ordinal number

#### rename

```
rename(ordinal: int, new_name: str) -> bool

```

Rename an existing entry point.

Parameters:

- **`ordinal`** (`int`) – Ordinal number of the entry point
- **`new_name`** (`str`) – New name for the entry point

Returns:

- **`bool`** ( `bool` ) – True if successful

#### set_forwarder

```
set_forwarder(ordinal: int, forwarder_name: str) -> bool

```

Set forwarder name for an entry point.

Parameters:

- **`ordinal`** (`int`) – Ordinal number of the entry point
- **`forwarder_name`** (`str`) – Forwarder name to set

Returns:

- **`bool`** ( `bool` ) – True if successful

### EntryInfo

```
EntryInfo(
    ordinal: int,
    address: ea_t,
    name: str,
    forwarder_name: str,
)

```

Represents a program entry point. Exported functions are considered entry points as well.

Methods:

- **`has_forwarder`** – Check if this entry point has a forwarder.

Attributes:

- **`address`** (`ea_t`) –
- **`forwarder_name`** (`str`) –
- **`name`** (`str`) –
- **`ordinal`** (`int`) –

#### address

```
address: ea_t

```

#### forwarder_name

```
forwarder_name: str

```

#### name

```
name: str

```

#### ordinal

```
ordinal: int

```

#### has_forwarder

```
has_forwarder() -> bool

```

Check if this entry point has a forwarder.

### ForwarderInfo

```
ForwarderInfo(ordinal: int, name: str)

```

Represents information about an entry point forwarder.

Attributes:

- **`name`** (`str`) –
- **`ordinal`** (`int`) –

#### name

```
name: str

```

#### ordinal

```
ordinal: int

```
