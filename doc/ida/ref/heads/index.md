# `Heads`

## heads

Classes:

- **`Heads`** – Provides access to heads (instructions or data items) in the IDA database.

### Heads

```
Heads(database: Database)

```

Bases: `DatabaseEntity`

Provides access to heads (instructions or data items) in the IDA database.

Can be used to iterate over all heads in the opened database.

Parameters:

- **`database`** (`Database`) – Reference to the active IDA database.

Methods:

- **`bounds`** – Get the bounds (start and end addresses) of the item containing the given address.
- **`get_all`** – Retrieves an iterator over all heads in the database.
- **`get_between`** – Retrieves all basic heads between two addresses.
- **`get_next`** – Get the next head address.
- **`get_previous`** – Get the previous head address.
- **`is_code`** – Check if the item at the given address is code.
- **`is_data`** – Check if the item at the given address is data.
- **`is_head`** – Check if the given address is a head (start of an item).
- **`is_tail`** – Check if the given address is a tail (part of an item but not the start).
- **`is_unknown`** – Check if the item at the given address is unknown.
- **`size`** – Get the size of the item at the given address.

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

#### bounds

```
bounds(ea: ea_t) -> tuple[ea_t, ea_t]

```

Get the bounds (start and end addresses) of the item containing the given address.

Parameters:

- **`ea`** (`ea_t`) – Address within the item.

Returns:

- `tuple[ea_t, ea_t]` – Tuple of (start_address, end_address) of the item.

Raises:

- `InvalidEAError` – If the effective address is not in the database range.

#### get_all

```
get_all() -> Iterator[ea_t]

```

Retrieves an iterator over all heads in the database.

Returns:

- `Iterator[ea_t]` – An iterator over the heads.

#### get_between

```
get_between(start_ea: ea_t, end_ea: ea_t) -> Iterator[ea_t]

```

Retrieves all basic heads between two addresses.

Parameters:

- **`start_ea`** (`ea_t`) – Start address of the range.
- **`end_ea`** (`ea_t`) – End address of the range.

Returns:

- `Iterator[ea_t]` – An iterator over the heads.

Raises:

- `InvalidEAError` – If the effective address is not in the database range.

#### get_next

```
get_next(ea: ea_t) -> Optional[ea_t]

```

Get the next head address.

Parameters:

- **`ea`** (`ea_t`) – Current address.

Returns:

- `Optional[ea_t]` – Next head address, or None if no next head exists.

Raises:

- `InvalidEAError` – If the effective address is not in the database range.

#### get_previous

```
get_previous(ea: ea_t) -> Optional[ea_t]

```

Get the previous head address.

Parameters:

- **`ea`** (`ea_t`) – Current address.

Returns:

- `Optional[ea_t]` – Previous head address, or None if no previous head exists.

Raises:

- `InvalidEAError` – If the effective address is not in the database range.

#### is_code

```
is_code(ea: ea_t) -> bool

```

Check if the item at the given address is code.

Parameters:

- **`ea`** (`ea_t`) – Address to check.

Returns:

- `bool` – True if the item is code, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is not in the database range.

#### is_data

```
is_data(ea: ea_t) -> bool

```

Check if the item at the given address is data.

Parameters:

- **`ea`** (`ea_t`) – Address to check.

Returns:

- `bool` – True if the item is data, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is not in the database range.

#### is_head

```
is_head(ea: ea_t) -> bool

```

Check if the given address is a head (start of an item).

Parameters:

- **`ea`** (`ea_t`) – Address to check.

Returns:

- `bool` – True if the address is a head, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is not in the database range.

#### is_tail

```
is_tail(ea: ea_t) -> bool

```

Check if the given address is a tail (part of an item but not the start).

Parameters:

- **`ea`** (`ea_t`) – Address to check.

Returns:

- `bool` – True if the address is a tail, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is not in the database range.

#### is_unknown

```
is_unknown(ea: ea_t) -> bool

```

Check if the item at the given address is unknown.

Parameters:

- **`ea`** (`ea_t`) – Address to check.

Returns:

- `bool` – True if the item is data, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is not in the database range.

#### size

```
size(ea: ea_t) -> int

```

Get the size of the item at the given address.

Parameters:

- **`ea`** (`ea_t`) – Address of the item.

Returns:

- `int` – Size of the item in bytes.

Raises:

- `InvalidEAError` – If the effective address is not in the database range.
- `InvalidParameterError` – If the address is not a head.
