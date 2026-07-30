# `Signature Files`

## signature_files

Classes:

- **`FileInfo`** – Represents information about a FLIRT signature file application.
- **`MatchInfo`** – Represents information about a single function matched by a FLIRT signature.
- **`SignatureFiles`** – Provides access to FLIRT signature (.sig) files in the IDA database.

### FileInfo

```
FileInfo(
    path: str = '',
    matches: int = 0,
    functions: List[MatchInfo] = list(),
)

```

Represents information about a FLIRT signature file application. Contains the signature file path, number of matches, and details of matched functions.

Attributes:

- **`functions`** (`List[MatchInfo]`) –
- **`matches`** (`int`) –
- **`path`** (`str`) –

#### functions

```
functions: List[MatchInfo] = field(default_factory=list)

```

#### matches

```
matches: int = 0

```

#### path

```
path: str = ''

```

### MatchInfo

```
MatchInfo(addr: ea_t, name: str = '', lib: str = '')

```

Represents information about a single function matched by a FLIRT signature.

Attributes:

- **`addr`** (`ea_t`) –
- **`lib`** (`str`) –
- **`name`** (`str`) –

#### addr

```
addr: ea_t

```

#### lib

```
lib: str = ''

```

#### name

```
name: str = ''

```

### SignatureFiles

```
SignatureFiles(database: Database)

```

Bases: `DatabaseEntity`

Provides access to FLIRT signature (.sig) files in the IDA database.

Parameters:

- **`database`** (`Database`) – Reference to the active IDA database.

Methods:

- **`apply`** – Applies signature files to current database.
- **`create`** – Create signature files (.pat and .sig) from current database.
- **`get_files`** – Retrieves a list of available FLIRT signature (.sig) files.
- **`get_index`** – Get index of applied signature file.

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

#### apply

```
apply(
    path: Path, probe_only: bool = False
) -> List[FileInfo]

```

Applies signature files to current database.

Parameters:

- **`path`** (`Path`) – Path to the signature file or directory with sig files.
- **`probe_only`** (`bool`, default: `False` ) – If true, signature files are only probed (apply operation is undone).

Returns:

- `List[FileInfo]` – A list of FileInfo objects containing application details.

#### create

```
create(pat_only: bool = False) -> List[str] | None

```

Create signature files (.pat and .sig) from current database.

Parameters:

- **`pat_only`** (`bool`, default: `False` ) – If true, generate only PAT file.

Returns:

- `List[str] | None` – A list containing paths to the generated files.
- `List[str] | None` – In case of failure, returns None.

#### get_files

```
get_files(
    directories: Optional[List[Path]] = None,
) -> List[Path]

```

Retrieves a list of available FLIRT signature (.sig) files.

Parameters:

- **`directories`** (`Optional[List[Path]]`, default: `None` ) – Optional list of paths to directories containing FLIRT signature files. If the parameter is missing, IDA signature folders will be used.

Returns:

- `List[Path]` – A list of available signature file paths.

#### get_index

```
get_index(path: Path) -> int

```

Get index of applied signature file.

Parameters:

- **`path`** (`Path`) – Path to the signature file.

Returns:

- `int` – Index of applied signature file, -1 if not found.
