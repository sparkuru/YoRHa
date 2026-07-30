# `Names`

## names

Classes:

- **`DemangleFlags`** – Flags for demangling operations.
- **`Names`** – Provides access to symbol and label management in the IDA database.
- **`SetNameFlags`** – Flags for set_name() function.

### DemangleFlags

Bases: `IntFlag`

Flags for demangling operations.

Attributes:

- **`CALC_VALID`** –
- **`COMPILER_MSK`** –
- **`DEFFAR`** –
- **`DEFHUGE`** –
- **`DEFNEAR`** –
- **`DEFNEARANY`** –
- **`DEFNONE`** –
- **`DEFPTR64`** –
- **`DROP_IMP`** –
- **`IGN_ANYWAY`** –
- **`IGN_JMP`** –
- **`LONG_FORM`** –
- **`MOVE_JMP`** –
- **`NOBASEDT`** –
- **`NOCALLC`** –
- **`NOCLOSUR`** –
- **`NOCSVOL`** –
- **`NODEFINIT`** –
- **`NOECSU`** –
- **`NOMANAGE`** –
- **`NOMODULE`** –
- **`NOPOSTFC`** –
- **`NOPTRTYP`** –
- **`NOPTRTYP16`** –
- **`NORETTYPE`** –
- **`NOSCTYP`** –
- **`NOSTVIR`** –
- **`NOTHROW`** –
- **`NOTYPE`** –
- **`NOUNALG`** –
- **`NOUNDERSCORE`** –
- **`PTRMSK`** –
- **`SHORT_FORM`** –
- **`SHORT_S`** –
- **`SHORT_U`** –
- **`ZPT_SPACE`** –

#### CALC_VALID

```
CALC_VALID = MNG_CALC_VALID

```

#### COMPILER_MSK

```
COMPILER_MSK = MNG_COMPILER_MSK

```

#### DEFFAR

```
DEFFAR = MNG_DEFFAR

```

#### DEFHUGE

```
DEFHUGE = MNG_DEFHUGE

```

#### DEFNEAR

```
DEFNEAR = MNG_DEFNEAR

```

#### DEFNEARANY

```
DEFNEARANY = MNG_DEFNEARANY

```

#### DEFNONE

```
DEFNONE = MNG_DEFNONE

```

#### DEFPTR64

```
DEFPTR64 = MNG_DEFPTR64

```

#### DROP_IMP

```
DROP_IMP = MNG_DROP_IMP

```

#### IGN_ANYWAY

```
IGN_ANYWAY = MNG_IGN_ANYWAY

```

#### IGN_JMP

```
IGN_JMP = MNG_IGN_JMP

```

#### LONG_FORM

```
LONG_FORM = MNG_LONG_FORM

```

#### MOVE_JMP

```
MOVE_JMP = MNG_MOVE_JMP

```

#### NOBASEDT

```
NOBASEDT = MNG_NOBASEDT

```

#### NOCALLC

```
NOCALLC = MNG_NOCALLC

```

#### NOCLOSUR

```
NOCLOSUR = MNG_NOCLOSUR

```

#### NOCSVOL

```
NOCSVOL = MNG_NOCSVOL

```

#### NODEFINIT

```
NODEFINIT = MNG_NODEFINIT

```

#### NOECSU

```
NOECSU = MNG_NOECSU

```

#### NOMANAGE

```
NOMANAGE = MNG_NOMANAGE

```

#### NOMODULE

```
NOMODULE = MNG_NOMODULE

```

#### NOPOSTFC

```
NOPOSTFC = MNG_NOPOSTFC

```

#### NOPTRTYP

```
NOPTRTYP = MNG_NOPTRTYP

```

#### NOPTRTYP16

```
NOPTRTYP16 = MNG_NOPTRTYP16

```

#### NORETTYPE

```
NORETTYPE = MNG_NORETTYPE

```

#### NOSCTYP

```
NOSCTYP = MNG_NOSCTYP

```

#### NOSTVIR

```
NOSTVIR = MNG_NOSTVIR

```

#### NOTHROW

```
NOTHROW = MNG_NOTHROW

```

#### NOTYPE

```
NOTYPE = MNG_NOTYPE

```

#### NOUNALG

```
NOUNALG = MNG_NOUNALG

```

#### NOUNDERSCORE

```
NOUNDERSCORE = MNG_NOUNDERSCORE

```

#### PTRMSK

```
PTRMSK = MNG_PTRMSK

```

#### SHORT_FORM

```
SHORT_FORM = MNG_SHORT_FORM

```

#### SHORT_S

```
SHORT_S = MNG_SHORT_S

```

#### SHORT_U

```
SHORT_U = MNG_SHORT_U

```

#### ZPT_SPACE

```
ZPT_SPACE = MNG_ZPT_SPACE

```

### Names

```
Names(database: Database)

```

Bases: `DatabaseEntity`

Provides access to symbol and label management in the IDA database.

Can be used to iterate over all names in the opened database.

Parameters:

- **`database`** (`Database`) – Reference to the active IDA database.

Methods:

- **`delete`** – Delete name at the specified address.
- **`demangle_name`** – Demangle a mangled name.
- **`force_name`** – Force set a name, trying variations if the name already exists.
- **`get_all`** – Returns an iterator over all named elements in the database.
- **`get_at`** – Retrieves the name at the specified address.
- **`get_at_index`** – Retrieves the named element at the specified index.
- **`get_count`** – Retrieves the total number of named elements in the database.
- **`get_demangled_name`** – Get demangled name at address.
- **`is_public_name`** – Check if name at address is public.
- **`is_valid_name`** – Check if a name is a valid user defined name.
- **`is_weak_name`** – Check if name at address is weak.
- **`make_name_non_public`** – Make name at address non-public.
- **`make_name_non_weak`** – Make name at address non-weak.
- **`make_name_public`** – Make name at address public.
- **`make_name_weak`** – Make name at address weak.
- **`set_name`** – Set or delete name of an item at the specified address.

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

#### delete

```
delete(ea: ea_t) -> bool

```

Delete name at the specified address.

Parameters:

- **`ea`** (`ea_t`) – Linear address.

Returns:

- `bool` – True if successful, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### demangle_name

```
demangle_name(
    name: str, disable_mask: Union[int, DemangleFlags] = 0
) -> str

```

Demangle a mangled name.

Parameters:

- **`name`** (`str`) – Mangled name to demangle.
- **`disable_mask`** (`Union[int, DemangleFlags]`, default: `0` ) – Bits to inhibit parts of demangled name (DemangleFlags enum or raw int).

Returns:

- `str` – Demangled name or original name if demangling failed.

#### force_name

```
force_name(
    ea: ea_t,
    name: str,
    flags: Union[int, SetNameFlags] = NOCHECK,
) -> bool

```

Force set a name, trying variations if the name already exists.

Parameters:

- **`ea`** (`ea_t`) – Linear address.
- **`name`** (`str`) – New name.
- **`flags`** (`Union[int, SetNameFlags]`, default: `NOCHECK` ) – Set name flags (SetNameFlags enum or raw int).

Returns:

- `bool` – True if successful, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### get_all

```
get_all() -> Iterator[Tuple[ea_t, str]]

```

Returns an iterator over all named elements in the database.

Returns:

- `Iterator[Tuple[ea_t, str]]` – An iterator over (address, name) tuples.

#### get_at

```
get_at(ea: ea_t) -> Optional[str]

```

Retrieves the name at the specified address.

Parameters:

- **`ea`** (`ea_t`) – The effective address.

Returns:

- `Optional[str]` – The name string if it exists, None otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### get_at_index

```
get_at_index(index: int) -> Tuple[ea_t, str] | None

```

Retrieves the named element at the specified index.

Parameters:

- **`index`** (`int`) – Index of the named element to retrieve.

Returns:

- `Tuple[ea_t, str] | None` – A tuple (effective address, name) at the given index.
- `Tuple[ea_t, str] | None` – In case of error, returns None.

#### get_count

```
get_count() -> int

```

Retrieves the total number of named elements in the database.

Returns:

- `int` – The number of named elements.

#### get_demangled_name

```
get_demangled_name(
    ea: ea_t,
    inhibitor: Union[int, DemangleFlags] = 0,
    demform: int = 0,
) -> Optional[str]

```

Get demangled name at address.

Parameters:

- **`ea`** (`ea_t`) – Linear address.
- **`inhibitor`** (`Union[int, DemangleFlags]`, default: `0` ) – Demangling inhibitor flags (DemangleFlags enum or raw int).
- **`demform`** (`int`, default: `0` ) – Demangling form flags.

Returns:

- `Optional[str]` – Demangled name or None if not available.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### is_public_name

```
is_public_name(ea: ea_t) -> bool

```

Check if name at address is public.

Parameters:

- **`ea`** (`ea_t`) – Linear address.

Returns:

- `bool` – True if public, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### is_valid_name

```
is_valid_name(name: str) -> bool

```

Check if a name is a valid user defined name.

Parameters:

- **`name`** (`str`) – Name to validate.

Returns:

- `bool` – True if valid, False otherwise.

#### is_weak_name

```
is_weak_name(ea: ea_t) -> bool

```

Check if name at address is weak.

Parameters:

- **`ea`** (`ea_t`) – Linear address.

Returns:

- `bool` – True if weak, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### make_name_non_public

```
make_name_non_public(ea: ea_t) -> None

```

Make name at address non-public.

Parameters:

- **`ea`** (`ea_t`) – Linear address.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### make_name_non_weak

```
make_name_non_weak(ea: ea_t) -> None

```

Make name at address non-weak.

Parameters:

- **`ea`** (`ea_t`) – Linear address.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### make_name_public

```
make_name_public(ea: ea_t) -> None

```

Make name at address public.

Parameters:

- **`ea`** (`ea_t`) – Linear address.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### make_name_weak

```
make_name_weak(ea: ea_t) -> None

```

Make name at address weak.

Parameters:

- **`ea`** (`ea_t`) – Linear address.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### set_name

```
set_name(
    ea: ea_t,
    name: str,
    flags: Union[int, SetNameFlags] = NOCHECK,
) -> bool

```

Set or delete name of an item at the specified address.

Parameters:

- **`ea`** (`ea_t`) – Linear address.
- **`name`** (`str`) – New name. Empty string to delete name.
- **`flags`** (`Union[int, SetNameFlags]`, default: `NOCHECK` ) – Set name flags (SetNameFlags enum or raw int).

Returns:

- `bool` – True if successful, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.

### SetNameFlags

Bases: `IntFlag`

Flags for set_name() function.

Attributes:

- **`AUTO`** –
- **`CHECK`** –
- **`DELTAIL`** –
- **`FORCE`** –
- **`IDBENC`** –
- **`LOCAL`** –
- **`NOCHECK`** –
- **`NODUMMY`** –
- **`NOLIST`** –
- **`NON_AUTO`** –
- **`NON_PUBLIC`** –
- **`NON_WEAK`** –
- **`NOWARN`** –
- **`PUBLIC`** –
- **`WEAK`** –

#### AUTO

```
AUTO = SN_AUTO

```

#### CHECK

```
CHECK = SN_CHECK

```

#### DELTAIL

```
DELTAIL = SN_DELTAIL

```

#### FORCE

```
FORCE = SN_FORCE

```

#### IDBENC

```
IDBENC = SN_IDBENC

```

#### LOCAL

```
LOCAL = SN_LOCAL

```

#### NOCHECK

```
NOCHECK = SN_NOCHECK

```

#### NODUMMY

```
NODUMMY = SN_NODUMMY

```

#### NOLIST

```
NOLIST = SN_NOLIST

```

#### NON_AUTO

```
NON_AUTO = SN_NON_AUTO

```

#### NON_PUBLIC

```
NON_PUBLIC = SN_NON_PUBLIC

```

#### NON_WEAK

```
NON_WEAK = SN_NON_WEAK

```

#### NOWARN

```
NOWARN = SN_NOWARN

```

#### PUBLIC

```
PUBLIC = SN_PUBLIC

```

#### WEAK

```
WEAK = SN_WEAK

```
