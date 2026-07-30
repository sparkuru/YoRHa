# `Comments`

## comments

Classes:

- **`CommentInfo`** – Represents information about a Comment.
- **`CommentKind`** – Enumeration for IDA comment types.
- **`Comments`** – Provides access to user-defined comments in the IDA database.
- **`ExtraCommentKind`** – Enumeration for extra comment positions.

### CommentInfo

```
CommentInfo(ea: ea_t, comment: str, repeatable: bool)

```

Represents information about a Comment.

Attributes:

- **`comment`** (`str`) –
- **`ea`** (`ea_t`) –
- **`repeatable`** (`bool`) –

#### comment

```
comment: str

```

#### ea

```
ea: ea_t

```

#### repeatable

```
repeatable: bool

```

### CommentKind

Bases: `Enum`

Enumeration for IDA comment types.

Attributes:

- **`ALL`** –
- **`REGULAR`** –
- **`REPEATABLE`** –

#### ALL

```
ALL = 'all'

```

#### REGULAR

```
REGULAR = 'regular'

```

#### REPEATABLE

```
REPEATABLE = 'repeatable'

```

### Comments

```
Comments(database: Database)

```

Bases: `DatabaseEntity`

Provides access to user-defined comments in the IDA database.

Can be used to iterate over all comments in the opened database.

IDA supports two types of comments:

- Regular comments: Displayed at specific addresses
- Repeatable comments: Displayed at all references to the same address

Parameters:

- **`database`** (`Database`) – Reference to the active IDA database.

Methods:

- **`delete_at`** – Deletes a comment at the specified address.
- **`delete_extra_at`** – Deletes a specific extra comment.
- **`get_all`** – Creates an iterator for comments in the database.
- **`get_all_extra_at`** – Gets all extra comments of a specific kind.
- **`get_at`** – Retrieves the comment at the specified address.
- **`get_extra_at`** – Gets a specific extra comment.
- **`set_at`** – Sets a comment at the specified address.
- **`set_extra_at`** – Sets an extra comment at the specified address and index.

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

#### delete_at

```
delete_at(
    ea: int, comment_kind: CommentKind = REGULAR
) -> None

```

Deletes a comment at the specified address.

Parameters:

- **`ea`** (`int`) – The effective address.
- **`comment_kind`** (`CommentKind`, default: `REGULAR` ) – Type of comment to delete (REGULAR or REPEATABLE).

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### delete_extra_at

```
delete_extra_at(
    ea: int, index: int, kind: ExtraCommentKind
) -> bool

```

Deletes a specific extra comment.

Parameters:

- **`ea`** (`int`) – The effective address.
- **`index`** (`int`) – The comment index (0-based).
- **`kind`** (`ExtraCommentKind`) – ANTERIOR or POSTERIOR.

Raises:

- `InvalidEAError` – If the effective address is invalid.

Returns:

- `bool` – True if successful.

#### get_all

```
get_all(
    comment_kind: CommentKind = REGULAR,
) -> Iterator[CommentInfo]

```

Creates an iterator for comments in the database.

Parameters:

- **`comment_kind`** (`CommentKind`, default: `REGULAR` ) – Type of comments to retrieve:
  - CommentKind.REGULAR: Only regular comments
  - CommentKind.REPEATABLE: Only repeatable comments
  - CommentKind.ALL: Both regular and repeatable comments

Yields:

- `CommentInfo` – Tuples of (address, comment_text, is_repeatable) for each comment found.

#### get_all_extra_at

```
get_all_extra_at(
    ea: int, kind: ExtraCommentKind
) -> Iterator[str]

```

Gets all extra comments of a specific kind.

Parameters:

- **`ea`** (`int`) – The effective address.
- **`kind`** (`ExtraCommentKind`) – ANTERIOR or POSTERIOR.

Raises:

- `InvalidEAError` – If the effective address is invalid.

Yields:

- `str` – Comment strings in order.

#### get_at

```
get_at(
    ea: ea_t, comment_kind: CommentKind = REGULAR
) -> Optional[CommentInfo]

```

Retrieves the comment at the specified address.

Parameters:

- **`ea`** (`ea_t`) – The effective address.
- **`comment_kind`** (`CommentKind`, default: `REGULAR` ) – Type of comment to retrieve (REGULAR or REPEATABLE).

Raises:

- `InvalidEAError` – If the effective address is invalid.

Returns:

- `Optional[CommentInfo]` – The comment string, or None if no comment exists.

#### get_extra_at

```
get_extra_at(
    ea: int, index: int, kind: ExtraCommentKind
) -> Optional[str]

```

Gets a specific extra comment.

Parameters:

- **`ea`** (`int`) – The effective address.
- **`index`** (`int`) – The comment index (0-based).
- **`kind`** (`ExtraCommentKind`) – ANTERIOR or POSTERIOR.

Raises:

- `InvalidEAError` – If the effective address is invalid.

Returns:

- `Optional[str]` – The comment text or None if not found.

#### set_at

```
set_at(
    ea: int,
    comment: str,
    comment_kind: CommentKind = REGULAR,
) -> bool

```

Sets a comment at the specified address.

Parameters:

- **`ea`** (`int`) – The effective address.
- **`comment`** (`str`) – The comment text to assign.
- **`comment_kind`** (`CommentKind`, default: `REGULAR` ) – Type of comment to set (REGULAR or REPEATABLE).

Raises:

- `InvalidEAError` – If the effective address is invalid.

Returns:

- `bool` – True if the comment was successfully set, False otherwise.

#### set_extra_at

```
set_extra_at(
    ea: int,
    index: int,
    comment: str,
    kind: ExtraCommentKind,
) -> bool

```

Sets an extra comment at the specified address and index.

Parameters:

- **`ea`** (`int`) – The effective address.
- **`index`** (`int`) – The comment index (0-based).
- **`comment`** (`str`) – The comment text.
- **`kind`** (`ExtraCommentKind`) – ANTERIOR or POSTERIOR.

Raises:

- `InvalidEAError` – If the effective address is invalid.

Returns:

- `bool` – True if successful.

### ExtraCommentKind

Bases: `Enum`

Enumeration for extra comment positions.

Attributes:

- **`ANTERIOR`** –
- **`POSTERIOR`** –

#### ANTERIOR

```
ANTERIOR = 'anterior'

```

#### POSTERIOR

```
POSTERIOR = 'posterior'

```
