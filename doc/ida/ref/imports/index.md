# `Imports`

## imports

Classes:

- **`ImportInfo`** – Represents an imported function/symbol.
- **`ImportModuleInfo`** – Represents an imported module (DLL/shared library).
- **`Imports`** – Provides access to imports in the IDA database.

### ImportInfo

```
ImportInfo(
    address: ea_t,
    name: Optional[str],
    ordinal: int,
    module_index: int,
    module_name: str,
)

```

Represents an imported function/symbol.

Methods:

- **`has_name`** – Check if this import has a name (not ordinal-only).

Attributes:

- **`address`** (`ea_t`) –
- **`module_index`** (`int`) –
- **`module_name`** (`str`) –
- **`name`** (`Optional[str]`) –
- **`ordinal`** (`int`) –

#### address

```
address: ea_t

```

#### module_index

```
module_index: int

```

#### module_name

```
module_name: str

```

#### name

```
name: Optional[str]

```

#### ordinal

```
ordinal: int

```

#### has_name

```
has_name() -> bool

```

Check if this import has a name (not ordinal-only).

### ImportModuleInfo

```
ImportModuleInfo(index: int, name: str)

```

Represents an imported module (DLL/shared library).

Attributes:

- **`index`** (`int`) –
- **`name`** (`str`) –

#### index

```
index: int

```

#### name

```
name: str

```

### Imports

```
Imports(database: Database)

```

Bases: `DatabaseEntity`

Provides access to imports in the IDA database.

Can be used to iterate over all import modules in the opened database.

Parameters:

- **`database`** (`Database`) – Reference to the active IDA database.

Methods:

- **`exists`** – Check if an import with the given qualified name exists (case-insensitive).
- **`get_all_imports`** – Get all imports from all modules (flattened).
- **`get_all_modules`** – Get all import modules.
- **`get_import_addresses`** – Get all import addresses.
- **`get_import_at`** – Get import at a specific address.
- **`get_import_by_name`** – Find import by qualified name (case-insensitive).
- **`get_import_count`** – Get the total number of imports across all modules.
- **`get_import_names`** – Get all import names in qualified format.
- **`get_imports_for_module`** – Get all imports from a specific module.
- **`get_module_at_index`** – Get import module by its index.
- **`get_module_by_name`** – Find import module by name (case-insensitive).
- **`get_module_count`** – Get the total number of import modules.
- **`get_module_names`** – Get all module names.

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

#### exists

```
exists(name: str) -> bool

```

Check if an import with the given qualified name exists (case-insensitive).

Parameters:

- **`name`** (`str`) – Import name in 'module!symbol' or 'module!#ordinal' format.

Returns:

- `bool` – True if import exists.

#### get_all_imports

```
get_all_imports() -> Iterator[ImportInfo]

```

Get all imports from all modules (flattened).

Yields:

- `ImportInfo` – Each import in the program.

#### get_all_modules

```
get_all_modules() -> Iterator[ImportModuleInfo]

```

Get all import modules.

Yields:

- `ImportModuleInfo` – Each import module in the program.

#### get_import_addresses

```
get_import_addresses() -> Iterator[ea_t]

```

Get all import addresses.

Yields:

- `ea_t` – Each import address.

#### get_import_at

```
get_import_at(ea: ea_t) -> Optional[ImportInfo]

```

Get import at a specific address.

Parameters:

- **`ea`** (`ea_t`) – Linear address to search for.

Returns:

- `Optional[ImportInfo]` – The import at the specified address, or None if not found.

#### get_import_by_name

```
get_import_by_name(name: str) -> Optional[ImportInfo]

```

Find import by qualified name (case-insensitive).

Parameters:

- **`name`** (`str`) – Import name in 'module!symbol' format (e.g., 'kernel32.dll!CreateFileW') or 'module!#ordinal' format (e.g., 'kernel32.dll!#42').

Returns:

- `Optional[ImportInfo]` – The import with the specified name, or None if not found.

#### get_import_count

```
get_import_count() -> int

```

Get the total number of imports across all modules.

Returns:

- `int` – Total number of imports.

#### get_import_names

```
get_import_names() -> Iterator[str]

```

Get all import names in qualified format.

Yields:

- `str` – Each import in 'module!symbol' or 'module!#ordinal' format.

#### get_imports_for_module

```
get_imports_for_module(
    module_index: int,
) -> Iterator[ImportInfo]

```

Get all imports from a specific module.

Parameters:

- **`module_index`** (`int`) – Index of the module.

Yields:

- `ImportInfo` – Each import from the specified module.

Raises:

- `IndexError` – If module_index is out of range.

#### get_module_at_index

```
get_module_at_index(index: int) -> ImportModuleInfo

```

Get import module by its index.

Parameters:

- **`index`** (`int`) – Module index (0 to get_module_count()-1)

Returns:

- `ImportModuleInfo` – The import module at the specified index.

Raises:

- `IndexError` – If index is out of range.

#### get_module_by_name

```
get_module_by_name(name: str) -> Optional[ImportModuleInfo]

```

Find import module by name (case-insensitive).

Parameters:

- **`name`** (`str`) – Module name to search for.

Returns:

- `Optional[ImportModuleInfo]` – The import module with the specified name, or None if not found.

#### get_module_count

```
get_module_count() -> int

```

Get the total number of import modules.

Returns:

- `int` – Number of import modules in the program.

#### get_module_names

```
get_module_names() -> Iterator[str]

```

Get all module names.

Yields:

- `str` – Each module name.
