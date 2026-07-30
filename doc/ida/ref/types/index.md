# `Types`

## types

Classes:

- **`ArrayDetails`** –
- **`BitfieldAttr`** – Bitfield Type flags
- **`BitfieldDetails`** – Bitfield type details
- **`CallingConvention`** – Calling convention for function types.
- **`EnumAttr`** – Enum Type flags
- **`EnumBuilder`** – Builder for creating enum types.
- **`EnumDetails`** – Enum type details.
- **`EnumMemberInfo`** – Details about an enum member.
- **`FuncArgumentInfo`** – Details about a function argument.
- **`FuncAttr`** – Function Type flags
- **`FuncDetails`** – Function type details.
- **`FuncTypeBuilder`** – Builder for creating function types.
- **`LibraryAddFlags`** – Flags for changing the way type libraries are added to the database
- **`LibraryAddResult`** – Return values for library add operation
- **`ObjectIOFlags`** – Flags for object serialization/deserialization operations.
- **`PtrAttr`** – Pointer Type Flags
- **`PtrDetails`** –
- **`StructBuilder`** – Builder for creating struct types.
- **`TypeApplyFlags`** – Flags that control how type information is applied to a given address
- **`TypeAttr`** – General Type attributes
- **`TypeDetails`** – Comprehensive type information with category-specific attributes
- **`TypeDetailsVisitor`** – Visitor class for types.
- **`TypeFormattingFlags`** – Type formatting flags used to control type parsing, formatting and printing
- **`TypeKind`** – Type category enumeration.
- **`TypeManipulationFlags`** – Flags to be used
- **`TypeMemberLookupMode`** – Mode for member lookup operations.
- **`Types`** – Provides access to type information and manipulation in the IDA database.
- **`UdtAttr`** – User Defined Type flags
- **`UdtDetails`** – User Defined Type details
- **`UdtMemberInfo`** – Details about a struct/union member.
- **`UnionBuilder`** – Builder for creating union types.

### ArrayDetails

```
ArrayDetails()

```

Methods:

- **`from_tinfo_t`** – Extract array type attributes and details.

Attributes:

- **`base`** (`int`) – Get array base.
- **`element_type`** (`tinfo_t`) – Get array element type.
- **`length`** (`int`) – Get number of elements.

#### base

```
base: int

```

Get array base.

#### element_type

```
element_type: tinfo_t

```

Get array element type.

#### length

```
length: int

```

Get number of elements.

#### from_tinfo_t

```
from_tinfo_t(type_info: tinfo_t) -> Optional[ArrayDetails]

```

Extract array type attributes and details.

Parameters:

- **`type_info`** (`tinfo_t`) – The type information objects for which to extract details.

Returns:

- `Optional[ArrayDetails]` – Array type details object filled with extracted information.

### BitfieldAttr

Bases: `Flag`

Bitfield Type flags

Attributes:

- **`UNSIGNED`** –
- **`VALID`** –

#### UNSIGNED

```
UNSIGNED = auto()

```

#### VALID

```
VALID = auto()

```

### BitfieldDetails

```
BitfieldDetails()

```

Bitfield type details

Methods:

- **`from_tinfo_t`** – Extract bitfield type attributes and details.

Attributes:

- **`attributes`** (`Optional[BitfieldAttr]`) – Get the bitfield type attributes.

#### attributes

```
attributes: Optional[BitfieldAttr]

```

Get the bitfield type attributes.

#### from_tinfo_t

```
from_tinfo_t(
    type_info: tinfo_t,
) -> Optional[BitfieldDetails]

```

Extract bitfield type attributes and details.

Parameters:

- **`type_info`** (`tinfo_t`) – The type information objects for which to extract details.

Returns:

- `Optional[BitfieldDetails]` – Bitfield type details object filled with extracted information.

### CallingConvention

Bases: `Enum`

Calling convention for function types.

Attributes:

- **`CDECL`** –
- **`DEFAULT`** –
- **`FASTCALL`** –
- **`STDCALL`** –
- **`THISCALL`** –

#### CDECL

```
CDECL = 'cdecl'

```

#### DEFAULT

```
DEFAULT = 'default'

```

#### FASTCALL

```
FASTCALL = 'fastcall'

```

#### STDCALL

```
STDCALL = 'stdcall'

```

#### THISCALL

```
THISCALL = 'thiscall'

```

### EnumAttr

Bases: `Flag`

Enum Type flags

Attributes:

- **`BINARY`** –
- **`BITMASK`** –
- **`CHAR`** –
- **`DECIMAL`** –
- **`HEXADECIMAL`** –
- **`LEADING_ZEROS`** –
- **`OCTAL`** –
- **`SIGNED`** –
- **`SIGNED_BINARY`** –
- **`SIGNED_HEXADECIMAL`** –
- **`SIGNED_OCTAL`** –
- **`UNSIGNED_DECIMAL`** –

#### BINARY

```
BINARY = auto()

```

#### BITMASK

```
BITMASK = auto()

```

#### CHAR

```
CHAR = auto()

```

#### DECIMAL

```
DECIMAL = auto()

```

#### HEXADECIMAL

```
HEXADECIMAL = auto()

```

#### LEADING_ZEROS

```
LEADING_ZEROS = auto()

```

#### OCTAL

```
OCTAL = auto()

```

#### SIGNED

```
SIGNED = auto()

```

#### SIGNED_BINARY

```
SIGNED_BINARY = auto()

```

#### SIGNED_HEXADECIMAL

```
SIGNED_HEXADECIMAL = auto()

```

#### SIGNED_OCTAL

```
SIGNED_OCTAL = auto()

```

#### UNSIGNED_DECIMAL

```
UNSIGNED_DECIMAL = auto()

```

### EnumBuilder

```
EnumBuilder(name: str, base_size: int = 4)

```

Builder for creating enum types.

Example

> > > builder = db.types.create_enum("FileMode", base_size=4) builder.add_member("READ", 1) builder.add_member("WRITE", 2) builder.add_member("EXEC", 4) file_mode = builder.build()

Initialize an enum builder.

Parameters:

- **`name`** (`str`) – Name for the enum type.
- **`base_size`** (`int`, default: `4` ) – Size in bytes (1, 2, 4, or 8).

Methods:

- **`add_member`** – Add a member to the enum.
- **`build`** – Build and return the enum type.
- **`build_and_save`** – Build the enum and save it to a type library.
- **`set_bitmask`** – Set whether this is a bitmask enum.

#### add_member

```
add_member(name: str, value: int) -> 'EnumBuilder'

```

Add a member to the enum.

Parameters:

- **`name`** (`str`) – Member name.
- **`value`** (`int`) – Numeric value.

Returns:

- `'EnumBuilder'` – Self for method chaining.

#### build

```
build() -> tinfo_t

```

Build and return the enum type.

Returns:

- `tinfo_t` – The constructed tinfo_t.

Raises:

- `DatabaseError` – If enum creation fails.

#### build_and_save

```
build_and_save(library: Optional[til_t] = None) -> tinfo_t

```

Build the enum and save it to a type library.

Parameters:

- **`library`** (`Optional[til_t]`, default: `None` ) – Target library (local library if None).

Returns:

- `tinfo_t` – The constructed and saved tinfo_t.

#### set_bitmask

```
set_bitmask(is_bitmask: bool = True) -> 'EnumBuilder'

```

Set whether this is a bitmask enum.

### EnumDetails

```
EnumDetails()

```

Enum type details.

Methods:

- **`from_tinfo_t`** – Extract enum type attributes and details.

Attributes:

- **`attributes`** (`Optional[EnumAttr]`) – Get enum type attributes

#### attributes

```
attributes: Optional[EnumAttr]

```

Get enum type attributes

#### from_tinfo_t

```
from_tinfo_t(type_info: tinfo_t) -> Optional[EnumDetails]

```

Extract enum type attributes and details.

Parameters:

- **`type_info`** (`tinfo_t`) – The type information objects for which to extract details.

Returns:

- `Optional[EnumDetails]` – Enum type details object filled with extracted information.

### EnumMemberInfo

```
EnumMemberInfo(name: str, value: int)

```

Details about an enum member.

Attributes:

- **`name`** (`str`) – Member name.
- **`value`** (`int`) – Numeric value.

#### name

```
name: str

```

Member name.

#### value

```
value: int

```

Numeric value.

### FuncArgumentInfo

```
FuncArgumentInfo(index: int, name: str, type: tinfo_t)

```

Details about a function argument.

Attributes:

- **`index`** (`int`) – Argument index (0-based).
- **`name`** (`str`) – Argument name (may be empty/auto-generated).
- **`type`** (`tinfo_t`) – Argument type information.

#### index

```
index: int

```

Argument index (0-based).

#### name

```
name: str

```

Argument name (may be empty/auto-generated).

#### type

```
type: tinfo_t

```

Argument type information.

### FuncAttr

Bases: `Flag`

Function Type flags

Attributes:

- **`CONST`** –
- **`CONSTRUCTOR`** –
- **`DESTRUCTOR`** –
- **`GOLANG_CC`** –
- **`HIGH_LEVEL`** –
- **`NO_RET`** –
- **`PURE`** –
- **`STATIC`** –
- **`SWIFT_CC`** –
- **`USER_CC`** –
- **`VARARG_CC`** –
- **`VIRTUAL`** –

#### CONST

```
CONST = auto()

```

#### CONSTRUCTOR

```
CONSTRUCTOR = auto()

```

#### DESTRUCTOR

```
DESTRUCTOR = auto()

```

#### GOLANG_CC

```
GOLANG_CC = auto()

```

#### HIGH_LEVEL

```
HIGH_LEVEL = auto()

```

#### NO_RET

```
NO_RET = auto()

```

#### PURE

```
PURE = auto()

```

#### STATIC

```
STATIC = auto()

```

#### SWIFT_CC

```
SWIFT_CC = auto()

```

#### USER_CC

```
USER_CC = auto()

```

#### VARARG_CC

```
VARARG_CC = auto()

```

#### VIRTUAL

```
VIRTUAL = auto()

```

### FuncDetails

```
FuncDetails()

```

Function type details.

Methods:

- **`from_tinfo_t`** – Extract function type attributes and details.

Attributes:

- **`attributes`** (`Optional[FuncAttr]`) – Get the function type attributes.

#### attributes

```
attributes: Optional[FuncAttr]

```

Get the function type attributes.

#### from_tinfo_t

```
from_tinfo_t(type_info: tinfo_t) -> Optional[FuncDetails]

```

Extract function type attributes and details.

Parameters:

- **`type_info`** (`tinfo_t`) – The type information objects for which to extract details.

Returns:

- `Optional[FuncDetails]` – Function type details object filled with extracted information.

### FuncTypeBuilder

```
FuncTypeBuilder()

```

Builder for creating function types.

Example

> > > builder = db.types.create_func_type() builder.set_return_type(db.types.create_primitive(4)) builder.add_argument("count", db.types.create_primitive(4)) builder.add_argument("buffer", db.types.create_pointer(db.types.create_primitive(1))) func_type = builder.build()

Initialize a function type builder.

Methods:

- **`add_argument`** – Add an argument to the function type.
- **`build`** – Build and return the function type.
- **`set_calling_convention`** – Set the calling convention.
- **`set_return_type`** – Set the return type.
- **`set_variadic`** – Set whether function accepts variable arguments.

#### add_argument

```
add_argument(
    name: str, arg_type: tinfo_t
) -> 'FuncTypeBuilder'

```

Add an argument to the function type.

Parameters:

- **`name`** (`str`) – Argument name.
- **`arg_type`** (`tinfo_t`) – Argument type.

Returns:

- `'FuncTypeBuilder'` – Self for method chaining.

#### build

```
build() -> tinfo_t

```

Build and return the function type.

Returns:

- `tinfo_t` – The constructed tinfo_t.

Raises:

- `DatabaseError` – If function type creation fails.

#### set_calling_convention

```
set_calling_convention(
    cc: CallingConvention,
) -> 'FuncTypeBuilder'

```

Set the calling convention.

Parameters:

- **`cc`** (`CallingConvention`) – Calling convention enum value.

Returns:

- `'FuncTypeBuilder'` – Self for method chaining.

#### set_return_type

```
set_return_type(ret_type: tinfo_t) -> 'FuncTypeBuilder'

```

Set the return type.

Parameters:

- **`ret_type`** (`tinfo_t`) – Return type (void if not set).

Returns:

- `'FuncTypeBuilder'` – Self for method chaining.

#### set_variadic

```
set_variadic(variadic: bool = True) -> 'FuncTypeBuilder'

```

Set whether function accepts variable arguments.

Returns:

- `'FuncTypeBuilder'` – Self for method chaining.

### LibraryAddFlags

Bases: `IntFlag`

Flags for changing the way type libraries are added to the database

Attributes:

- **`ADD_DEFAULT`** – Default behavior
- **`ADD_INCOMPATIBLE`** – Add incompatible type libraries
- **`ADD_SILENT`** – Do not ask any questions

#### ADD_DEFAULT

```
ADD_DEFAULT = ADDTIL_DEFAULT

```

Default behavior

#### ADD_INCOMPATIBLE

```
ADD_INCOMPATIBLE = ADDTIL_INCOMP

```

Add incompatible type libraries

#### ADD_SILENT

```
ADD_SILENT = ADDTIL_SILENT

```

Do not ask any questions

### LibraryAddResult

Bases: `IntEnum`

Return values for library add operation

Attributes:

- **`ABORTED`** – Library not loaded, rejected by the user
- **`FAILED`** – Loading library failed
- **`INCOMPATIBLE`** – Library loaded but is incompatible
- **`SUCCESS`** – Library successfully loaded

#### ABORTED

```
ABORTED = ADDTIL_ABORTED

```

Library not loaded, rejected by the user

#### FAILED

```
FAILED = ADDTIL_FAILED

```

Loading library failed

#### INCOMPATIBLE

```
INCOMPATIBLE = ADDTIL_COMP

```

Library loaded but is incompatible

#### SUCCESS

```
SUCCESS = ADDTIL_OK

```

Library successfully loaded

### ObjectIOFlags

Bases: `IntFlag`

Flags for object serialization/deserialization operations.

Attributes:

- **`IGNORE_PTRS`** – Don't follow pointers during conversion
- **`NOATTR_FAIL`** – Treat missing attributes as failures
- **`NONE`** – Default behavior

#### IGNORE_PTRS

```
IGNORE_PTRS = PIO_IGNORE_PTRS

```

Don't follow pointers during conversion

#### NOATTR_FAIL

```
NOATTR_FAIL = PIO_NOATTR_FAIL

```

Treat missing attributes as failures

#### NONE

```
NONE = 0

```

Default behavior

### PtrAttr

Bases: `Flag`

Pointer Type Flags

Attributes:

- **`CODE_POINTER`** –
- **`SHIFTED`** –

#### CODE_POINTER

```
CODE_POINTER = auto()

```

#### SHIFTED

```
SHIFTED = auto()

```

### PtrDetails

```
PtrDetails()

```

Methods:

- **`from_tinfo_t`** – Extract pointer type attributes and details.

Attributes:

- **`attributes`** (`Optional[PtrAttr]`) – Get pointer type attributes.

#### attributes

```
attributes: Optional[PtrAttr]

```

Get pointer type attributes.

#### from_tinfo_t

```
from_tinfo_t(type_info: tinfo_t) -> Optional[PtrDetails]

```

Extract pointer type attributes and details.

Parameters:

- **`type_info`** (`tinfo_t`) – The type information objects for which to extract details.

Returns:

- `Optional[PtrDetails]` – Pointer type details object filled with extracted information.

### StructBuilder

```
StructBuilder(name: str)

```

Builder for creating struct types.

Example

> > > builder = db.types.create_struct("MyStruct") builder.add_member("x", db.types.create_primitive(4)) builder.add_member("y", db.types.create_primitive(4)) my_struct = builder.build()

Initialize a struct builder.

Parameters:

- **`name`** (`str`) – Name for the struct type.

Methods:

- **`add_member`** – Add a member to the struct.
- **`build`** – Build and return the struct type.
- **`build_and_save`** – Build the struct and save it to a type library.
- **`set_alignment`** – Set explicit alignment for the struct.
- **`set_packed`** – Set whether the struct is packed (no padding).

#### add_member

```
add_member(
    name: str,
    member_type: tinfo_t,
    offset: Optional[int] = None,
) -> 'StructBuilder'

```

Add a member to the struct.

Parameters:

- **`name`** (`str`) – Member name.
- **`member_type`** (`tinfo_t`) – Member type.
- **`offset`** (`Optional[int]`, default: `None` ) – Explicit byte offset (auto-calculated if None).

Returns:

- `'StructBuilder'` – Self for method chaining.

#### build

```
build() -> tinfo_t

```

Build and return the struct type.

Returns:

- `tinfo_t` – The constructed tinfo_t.

Raises:

- `DatabaseError` – If struct creation fails.

#### build_and_save

```
build_and_save(library: Optional[til_t] = None) -> tinfo_t

```

Build the struct and save it to a type library.

Parameters:

- **`library`** (`Optional[til_t]`, default: `None` ) – Target library (local library if None).

Returns:

- `tinfo_t` – The constructed and saved tinfo_t.

#### set_alignment

```
set_alignment(alignment: int) -> 'StructBuilder'

```

Set explicit alignment for the struct.

#### set_packed

```
set_packed(packed: bool = True) -> 'StructBuilder'

```

Set whether the struct is packed (no padding).

### TypeApplyFlags

Bases: `IntFlag`

Flags that control how type information is applied to a given address

Attributes:

- **`DEFINITE`** –
- **`DELAYFUNC`** –
- **`GUESSED`** –
- **`STRICT`** –

#### DEFINITE

```
DEFINITE = TINFO_DEFINITE

```

#### DELAYFUNC

```
DELAYFUNC = TINFO_DELAYFUNC

```

#### GUESSED

```
GUESSED = TINFO_GUESSED

```

#### STRICT

```
STRICT = TINFO_STRICT

```

### TypeAttr

Bases: `Flag`

General Type attributes

Attributes:

- **`ARITHMETIC`** –
- **`ARRAY`** –
- **`ATTACHED`** –
- **`BITFIELD`** –
- **`BOOL`** –
- **`CHAR`** –
- **`COMPLEX`** –
- **`CONST`** –
- **`CORRECT`** –
- **`DECL_ARRAY`** –
- **`DECL_BITFIELD`** –
- **`DECL_BOOL`** –
- **`DECL_CHAR`** –
- **`DECL_COMPLEX`** –
- **`DECL_CONST`** –
- **`DECL_DOUBLE`** –
- **`DECL_ENUM`** –
- **`DECL_FLOAT`** –
- **`DECL_FLOATING`** –
- **`DECL_FUNC`** –
- **`DECL_INT`** –
- **`DECL_INT128`** –
- **`DECL_INT16`** –
- **`DECL_INT32`** –
- **`DECL_INT64`** –
- **`DECL_LAST`** –
- **`DECL_LDOUBLE`** –
- **`DECL_PAF`** –
- **`DECL_PARTIAL`** –
- **`DECL_PTR`** –
- **`DECL_STRUCT`** –
- **`DECL_SUE`** –
- **`DECL_TBYTE`** –
- **`DECL_TYPEDEF`** –
- **`DECL_UCHAR`** –
- **`DECL_UDT`** –
- **`DECL_UINT`** –
- **`DECL_UINT128`** –
- **`DECL_UINT16`** –
- **`DECL_UINT32`** –
- **`DECL_UINT64`** –
- **`DECL_UNION`** –
- **`DECL_UNKNOWN`** –
- **`DECL_VOID`** –
- **`DECL_VOLATILE`** –
- **`DOUBLE`** –
- **`ENUM`** –
- **`EXT_ARITHMETIC`** –
- **`EXT_INTEGRAL`** –
- **`FLOAT`** –
- **`FLOATING`** –
- **`FUNC`** –
- **`FUNC_PTR`** –
- **`HIGH_LEVEL_FUNC`** –
- **`INT`** –
- **`INT128`** –
- **`INT16`** –
- **`INT32`** –
- **`INT64`** –
- **`INTEGRAL`** –
- **`LDOUBLE`** –
- **`PAF`** –
- **`PARTIAL`** –
- **`POINTER_UNKNOWN`** –
- **`POINTER_VOID`** –
- **`PTR`** –
- **`PTR_OR_ARRAY`** –
- **`PURGING_CALLING_CONVENTION`** –
- **`SCALAR`** –
- **`SHIFTED_PTR`** –
- **`STRUCT`** –
- **`SUE`** –
- **`TBYTE`** –
- **`UCHAR`** –
- **`UDT`** –
- **`UINT`** –
- **`UINT128`** –
- **`UINT16`** –
- **`UINT32`** –
- **`UINT64`** –
- **`UNION`** –
- **`UNKNOWN`** –
- **`USER_CALLING_CONVENTION`** –
- **`VARARG_CALLING_CONVENTION`** –
- **`VARIABLE_STRUCT`** –
- **`VARIABLE_STRUCT_MEMBER`** –
- **`VOID`** –
- **`VOLATILE`** –
- **`WELL_DEFINED`** –

#### ARITHMETIC

```
ARITHMETIC = auto()

```

#### ARRAY

```
ARRAY = auto()

```

#### ATTACHED

```
ATTACHED = auto()

```

#### BITFIELD

```
BITFIELD = auto()

```

#### BOOL

```
BOOL = auto()

```

#### CHAR

```
CHAR = auto()

```

#### COMPLEX

```
COMPLEX = auto()

```

#### CONST

```
CONST = auto()

```

#### CORRECT

```
CORRECT = auto()

```

#### DECL_ARRAY

```
DECL_ARRAY = auto()

```

#### DECL_BITFIELD

```
DECL_BITFIELD = auto()

```

#### DECL_BOOL

```
DECL_BOOL = auto()

```

#### DECL_CHAR

```
DECL_CHAR = auto()

```

#### DECL_COMPLEX

```
DECL_COMPLEX = auto()

```

#### DECL_CONST

```
DECL_CONST = auto()

```

#### DECL_DOUBLE

```
DECL_DOUBLE = auto()

```

#### DECL_ENUM

```
DECL_ENUM = auto()

```

#### DECL_FLOAT

```
DECL_FLOAT = auto()

```

#### DECL_FLOATING

```
DECL_FLOATING = auto()

```

#### DECL_FUNC

```
DECL_FUNC = auto()

```

#### DECL_INT

```
DECL_INT = auto()

```

#### DECL_INT128

```
DECL_INT128 = auto()

```

#### DECL_INT16

```
DECL_INT16 = auto()

```

#### DECL_INT32

```
DECL_INT32 = auto()

```

#### DECL_INT64

```
DECL_INT64 = auto()

```

#### DECL_LAST

```
DECL_LAST = auto()

```

#### DECL_LDOUBLE

```
DECL_LDOUBLE = auto()

```

#### DECL_PAF

```
DECL_PAF = auto()

```

#### DECL_PARTIAL

```
DECL_PARTIAL = auto()

```

#### DECL_PTR

```
DECL_PTR = auto()

```

#### DECL_STRUCT

```
DECL_STRUCT = auto()

```

#### DECL_SUE

```
DECL_SUE = auto()

```

#### DECL_TBYTE

```
DECL_TBYTE = auto()

```

#### DECL_TYPEDEF

```
DECL_TYPEDEF = auto()

```

#### DECL_UCHAR

```
DECL_UCHAR = auto()

```

#### DECL_UDT

```
DECL_UDT = auto()

```

#### DECL_UINT

```
DECL_UINT = auto()

```

#### DECL_UINT128

```
DECL_UINT128 = auto()

```

#### DECL_UINT16

```
DECL_UINT16 = auto()

```

#### DECL_UINT32

```
DECL_UINT32 = auto()

```

#### DECL_UINT64

```
DECL_UINT64 = auto()

```

#### DECL_UNION

```
DECL_UNION = auto()

```

#### DECL_UNKNOWN

```
DECL_UNKNOWN = auto()

```

#### DECL_VOID

```
DECL_VOID = auto()

```

#### DECL_VOLATILE

```
DECL_VOLATILE = auto()

```

#### DOUBLE

```
DOUBLE = auto()

```

#### ENUM

```
ENUM = auto()

```

#### EXT_ARITHMETIC

```
EXT_ARITHMETIC = auto()

```

#### EXT_INTEGRAL

```
EXT_INTEGRAL = auto()

```

#### FLOAT

```
FLOAT = auto()

```

#### FLOATING

```
FLOATING = auto()

```

#### FUNC

```
FUNC = auto()

```

#### FUNC_PTR

```
FUNC_PTR = auto()

```

#### HIGH_LEVEL_FUNC

```
HIGH_LEVEL_FUNC = auto()

```

#### INT

```
INT = auto()

```

#### INT128

```
INT128 = auto()

```

#### INT16

```
INT16 = auto()

```

#### INT32

```
INT32 = auto()

```

#### INT64

```
INT64 = auto()

```

#### INTEGRAL

```
INTEGRAL = auto()

```

#### LDOUBLE

```
LDOUBLE = auto()

```

#### PAF

```
PAF = auto()

```

#### PARTIAL

```
PARTIAL = auto()

```

#### POINTER_UNKNOWN

```
POINTER_UNKNOWN = auto()

```

#### POINTER_VOID

```
POINTER_VOID = auto()

```

#### PTR

```
PTR = auto()

```

#### PTR_OR_ARRAY

```
PTR_OR_ARRAY = auto()

```

#### PURGING_CALLING_CONVENTION

```
PURGING_CALLING_CONVENTION = auto()

```

#### SCALAR

```
SCALAR = auto()

```

#### SHIFTED_PTR

```
SHIFTED_PTR = auto()

```

#### STRUCT

```
STRUCT = auto()

```

#### SUE

```
SUE = auto()

```

#### TBYTE

```
TBYTE = auto()

```

#### UCHAR

```
UCHAR = auto()

```

#### UDT

```
UDT = auto()

```

#### UINT

```
UINT = auto()

```

#### UINT128

```
UINT128 = auto()

```

#### UINT16

```
UINT16 = auto()

```

#### UINT32

```
UINT32 = auto()

```

#### UINT64

```
UINT64 = auto()

```

#### UNION

```
UNION = auto()

```

#### UNKNOWN

```
UNKNOWN = auto()

```

#### USER_CALLING_CONVENTION

```
USER_CALLING_CONVENTION = auto()

```

#### VARARG_CALLING_CONVENTION

```
VARARG_CALLING_CONVENTION = auto()

```

#### VARIABLE_STRUCT

```
VARIABLE_STRUCT = auto()

```

#### VARIABLE_STRUCT_MEMBER

```
VARIABLE_STRUCT_MEMBER = auto()

```

#### VOID

```
VOID = auto()

```

#### VOLATILE

```
VOLATILE = auto()

```

#### WELL_DEFINED

```
WELL_DEFINED = auto()

```

### TypeDetails

```
TypeDetails()

```

Comprehensive type information with category-specific attributes

Methods:

- **`from_tinfo_t`** – Extract all type attributes and details.

Attributes:

- **`array`** (`Optional[ArrayDetails]`) – Get the array type details, if any.
- **`attributes`** (`TypeAttr`) – Get the general type attributes.
- **`bitfield`** (`Optional[BitfieldDetails]`) – Get the bitfield type details, if any.
- **`enum`** (`Optional[EnumDetails]`) – Get the enum type details, if any.
- **`func`** (`Optional[FuncDetails]`) – Get the function type details, if any.
- **`name`** (`str`) – Get the name of the type.
- **`ptr`** (`Optional[PtrDetails]`) – Get the pointer type details, if any.
- **`size`** (`int`) – Get the size of the type.
- **`udt`** (`Optional[UdtDetails]`) – Get the user-defined type details, if any.

#### array

```
array: Optional[ArrayDetails]

```

Get the array type details, if any.

#### attributes

```
attributes: TypeAttr

```

Get the general type attributes.

#### bitfield

```
bitfield: Optional[BitfieldDetails]

```

Get the bitfield type details, if any.

#### enum

```
enum: Optional[EnumDetails]

```

Get the enum type details, if any.

#### func

```
func: Optional[FuncDetails]

```

Get the function type details, if any.

#### name

```
name: str

```

Get the name of the type.

#### ptr

```
ptr: Optional[PtrDetails]

```

Get the pointer type details, if any.

#### size

```
size: int

```

Get the size of the type.

#### udt

```
udt: Optional[UdtDetails]

```

Get the user-defined type details, if any.

#### from_tinfo_t

```
from_tinfo_t(type_info: tinfo_t) -> TypeDetails

```

Extract all type attributes and details.

Parameters:

- **`type_info`** (`tinfo_t`) – The type information objects for which to extract details.

Returns:

- `TypeDetails` – Type details object filled with extracted information.

### TypeDetailsVisitor

```
TypeDetailsVisitor(db: Database)

```

Bases: `tinfo_visitor_t`

Visitor class for types. Used to recursively traverse types and gather the type members details. Instances of this class can be passed to the traverse() method to initiate the traversal.

Methods:

- **`visit_type`** –

Attributes:

- **`db`** –
- **`output`** (`list[TypeDetails]`) –

#### db

```
db = db

```

#### output

```
output: list[TypeDetails] = []

```

#### visit_type

```
visit_type(
    out: type_mods_t, tif: tinfo_t, name: str, comment: str
) -> int

```

### TypeFormattingFlags

Bases: `IntFlag`

Type formatting flags used to control type parsing, formatting and printing

Attributes:

- **`HTI_DCL`** – Don't complain about redeclarations
- **`HTI_EXT`** – Debug: print external representation of types
- **`HTI_FIL`** – "Input" is file name, otherwise "input" contains a C declaration
- **`HTI_HIGH`** – Assume high level prototypes (with hidden args, etc)
- **`HTI_INT`** – Debug: print internal representation of types
- **`HTI_LEX`** – Debug: print tokens
- **`HTI_LOWER`** – Lower the function prototypes
- **`HTI_MAC`** – Define macros from the base tils
- **`HTI_NDC`** – Don't decorate names
- **`HTI_NER`** – Ignore all errors but display them
- **`HTI_NOBASE`** – Do not inspect base tils
- **`HTI_NWR`** – No warning messages
- **`HTI_PAK`** – Explicit structure pack value (#pragma pack)
- **`HTI_PAK1`** – pragma pack(1)
- **`HTI_PAK16`** – pragma pack(16)
- **`HTI_PAK2`** – pragma pack(2)
- **`HTI_PAK4`** – pragma pack(4)
- **`HTI_PAK8`** – pragma pack(8)
- **`HTI_PAKDEF`** – Default pack value
- **`HTI_PAK_SHIFT`** – Shift for HTI_PAK. This field should be used if you want to remember
- **`HTI_RAWARGS`** – Leave argument names unchanged (do not remove underscores)
- **`HTI_RELAXED`** – Accept references to unknown namespaces
- **`HTI_SEMICOLON`** – Do not complain if the terminating semicolon is absent
- **`HTI_TST`** – Test mode: discard the result
- **`HTI_UNP`** – Debug: check the result by unpacking it

#### HTI_DCL

```
HTI_DCL = HTI_DCL

```

Don't complain about redeclarations

#### HTI_EXT

```
HTI_EXT = HTI_EXT

```

Debug: print external representation of types

#### HTI_FIL

```
HTI_FIL = HTI_FIL

```

"Input" is file name, otherwise "input" contains a C declaration

#### HTI_HIGH

```
HTI_HIGH = HTI_HIGH

```

Assume high level prototypes (with hidden args, etc)

#### HTI_INT

```
HTI_INT = HTI_INT

```

Debug: print internal representation of types

#### HTI_LEX

```
HTI_LEX = HTI_LEX

```

Debug: print tokens

#### HTI_LOWER

```
HTI_LOWER = HTI_LOWER

```

Lower the function prototypes

#### HTI_MAC

```
HTI_MAC = HTI_MAC

```

Define macros from the base tils

#### HTI_NDC

```
HTI_NDC = HTI_NDC

```

Don't decorate names

#### HTI_NER

```
HTI_NER = HTI_NER

```

Ignore all errors but display them

#### HTI_NOBASE

```
HTI_NOBASE = HTI_NOBASE

```

Do not inspect base tils

#### HTI_NWR

```
HTI_NWR = HTI_NWR

```

No warning messages

#### HTI_PAK

```
HTI_PAK = HTI_PAK

```

Explicit structure pack value (#pragma pack)

#### HTI_PAK1

```
HTI_PAK1 = HTI_PAK1

```

##### pragma pack(1)

#### HTI_PAK16

```
HTI_PAK16 = HTI_PAK16

```

##### pragma pack(16)

#### HTI_PAK2

```
HTI_PAK2 = HTI_PAK2

```

##### pragma pack(2)

#### HTI_PAK4

```
HTI_PAK4 = HTI_PAK4

```

##### pragma pack(4)

#### HTI_PAK8

```
HTI_PAK8 = HTI_PAK8

```

##### pragma pack(8)

#### HTI_PAKDEF

```
HTI_PAKDEF = HTI_PAKDEF

```

Default pack value

#### HTI_PAK_SHIFT

```
HTI_PAK_SHIFT = HTI_PAK_SHIFT

```

Shift for HTI_PAK. This field should be used if you want to remember an explicit pack value for each structure/union type. See HTI_PAK... definitions

#### HTI_RAWARGS

```
HTI_RAWARGS = HTI_RAWARGS

```

Leave argument names unchanged (do not remove underscores)

#### HTI_RELAXED

```
HTI_RELAXED = HTI_RELAXED

```

Accept references to unknown namespaces

#### HTI_SEMICOLON

```
HTI_SEMICOLON = HTI_SEMICOLON

```

Do not complain if the terminating semicolon is absent

#### HTI_TST

```
HTI_TST = HTI_TST

```

Test mode: discard the result

#### HTI_UNP

```
HTI_UNP = HTI_UNP

```

Debug: check the result by unpacking it

### TypeKind

Bases: `Enum`

Type category enumeration.

Attributes:

- **`NAMED`** –
- **`NUMBERED`** –

#### NAMED

```
NAMED = 1

```

#### NUMBERED

```
NUMBERED = 2

```

### TypeManipulationFlags

Bases: `IntFlag`

Flags to be used

Attributes:

- **`NTF_64BIT`** – value is 64bit
- **`NTF_CHKSYNC`** – check that synchronization to IDB passed OK (set_numbered_type, set_named_type)
- **`NTF_COPY`** – save a new type definition, not a typeref
- **`NTF_FIXNAME`** – force-validate the name of the type when setting (set_named_type, set_numbered_type only)
- **`NTF_IDBENC`** – the name is given in the IDB encoding;
- **`NTF_NOBASE`** – don't inspect base tils (for get_named_type)
- **`NTF_NOCUR`** – don't inspect current til file (for get_named_type)
- **`NTF_NO_NAMECHK`** – do not validate type name (set_numbered_type, set_named_type)
- **`NTF_REPLACE`** – replace original type (for set_named_type)
- **`NTF_SYMM`** – symbol, name is mangled ('\_func'); only one of NTF_TYPE and NTF_SYMU, NTF_SYMM can be used
- **`NTF_SYMU`** – symbol, name is unmangled ('func')
- **`NTF_TYPE`** – type name
- **`NTF_UMANGLED`** – name is unmangled (don't use this flag)

#### NTF_64BIT

```
NTF_64BIT = NTF_64BIT

```

value is 64bit

#### NTF_CHKSYNC

```
NTF_CHKSYNC = NTF_CHKSYNC

```

check that synchronization to IDB passed OK (set_numbered_type, set_named_type)

#### NTF_COPY

```
NTF_COPY = NTF_COPY

```

save a new type definition, not a typeref (tinfo_t::set_numbered_type, tinfo_t::set_named_type)

#### NTF_FIXNAME

```
NTF_FIXNAME = NTF_FIXNAME

```

force-validate the name of the type when setting (set_named_type, set_numbered_type only)

#### NTF_IDBENC

```
NTF_IDBENC = NTF_IDBENC

```

the name is given in the IDB encoding; non-ASCII bytes will be decoded accordingly (set_named_type, set_numbered_type only)

#### NTF_NOBASE

```
NTF_NOBASE = NTF_NOBASE

```

don't inspect base tils (for get_named_type)

#### NTF_NOCUR

```
NTF_NOCUR = NTF_NOCUR

```

don't inspect current til file (for get_named_type)

#### NTF_NO_NAMECHK

```
NTF_NO_NAMECHK = NTF_NO_NAMECHK

```

do not validate type name (set_numbered_type, set_named_type)

#### NTF_REPLACE

```
NTF_REPLACE = NTF_REPLACE

```

replace original type (for set_named_type)

#### NTF_SYMM

```
NTF_SYMM = NTF_SYMM

```

symbol, name is mangled ('\_func'); only one of NTF_TYPE and NTF_SYMU, NTF_SYMM can be used

#### NTF_SYMU

```
NTF_SYMU = NTF_SYMU

```

symbol, name is unmangled ('func')

#### NTF_TYPE

```
NTF_TYPE = NTF_TYPE

```

type name

#### NTF_UMANGLED

```
NTF_UMANGLED = NTF_UMANGLED

```

name is unmangled (don't use this flag)

### TypeMemberLookupMode

Bases: `Enum`

Mode for member lookup operations.

Attributes:

- **`INDEX`** – Look up member by index (for enum, func args)
- **`NAME`** – Look up member by name
- **`OFFSET`** – Look up member by offset (for UDT)
- **`VALUE`** – Look up member by value (for enum)

#### INDEX

```
INDEX = 'index'

```

Look up member by index (for enum, func args)

#### NAME

```
NAME = 'name'

```

Look up member by name

#### OFFSET

```
OFFSET = 'offset'

```

Look up member by offset (for UDT)

#### VALUE

```
VALUE = 'value'

```

Look up member by value (for enum)

### Types

```
Types(database: Database)

```

Bases: `DatabaseEntity`

Provides access to type information and manipulation in the IDA database.

Can be used to iterate over all types in the opened database.

Parameters:

- **`database`** (`Database`) – Reference to the active IDA database.

Methods:

- **`apply_at`** – Applies a named type to the given address.
- **`apply_declaration_at`** – Parse a C declaration and apply it to the given address.
- **`copy_type`** – Copies a type and all dependent types from one library to another.
- **`create_array`** – Create an array type.
- **`create_enum`** – Create an enum builder.
- **`create_float`** – Create a floating-point type.
- **`create_func_type`** – Create a function type builder.
- **`create_library`** – Initializes a new type library.
- **`create_pointer`** – Create a pointer type.
- **`create_primitive`** – Create a primitive integer type.
- **`create_struct`** – Create a struct builder.
- **`create_union`** – Create a union builder.
- **`create_void`** – Create a void type.
- **`export_to_library`** – Export all types from local library to external library.
- **`export_type`** – Exports a type and all dependent types from the local (database) library
- **`get_all`** – Retrieves an iterator over all types in the specified type library.
- **`get_array_element_type`** – Get the element type of an array type.
- **`get_array_length`** – Get the number of elements in an array type.
- **`get_at`** – Retrieves the type information of the item at the given address.
- **`get_by_name`** – Retrieve a type information object by name.
- **`get_comment`** – Get comment for type.
- **`get_details`** – Get type details and attributes.
- **`get_enum_member_by_name`** – Get a specific enum member by name.
- **`get_enum_member_by_value`** – Get a specific enum member by value.
- **`get_enum_member_count`** – Get the number of members in an enum.
- **`get_enum_members`** – Iterate over all members of an enum type.
- **`get_func_argument_by_index`** – Get a specific function argument by index.
- **`get_func_argument_count`** – Get the number of arguments in a function type.
- **`get_func_arguments`** – Iterate over all arguments of a function type.
- **`get_member`** – Get a type member (LLM-friendly unified interface).
- **`get_members`** – Get all members of a type (LLM-friendly unified interface).
- **`get_pointed_type`** – Get the type pointed to by a pointer type.
- **`get_return_type`** – Get the return type of a function type.
- **`get_udt_member_by_name`** – Get a specific UDT member by name.
- **`get_udt_member_by_offset`** – Get a UDT member at the specified byte offset.
- **`get_udt_member_count`** – Get the number of members in a UDT.
- **`get_udt_members`** – Iterate over all members of a struct or union type.
- **`import_from_library`** – Imports the types from an external library to the local (database) library.
- **`import_type`** – Imports a type and all dependent types from an external (loaded) library
- **`load_library`** – Loads a type library file in memory.
- **`parse_declarations`** – Parse type declarations from string and store created types into a library.
- **`parse_header_file`** – Parse type declarations from file and store created types into a library.
- **`parse_object_at`** – Reconstruct a typed object from a database address.
- **`parse_object_from_bytes`** – Reconstruct a typed object from a packed bytes buffer.
- **`parse_one_declaration`** – Parse one declaration from string and return its tinfo_t.
- **`save_library`** – Stores the type library to a file.
- **`serialize_object_to_bytes`** – Serialize a typed object to a bytes buffer.
- **`set_comment`** – Set comment for type.
- **`store_object_at`** – Store a typed object to a database address.
- **`traverse`** – Traverse the given type using the provided visitor class.
- **`unload_library`** – Unload library (free underlying object).

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

#### apply_at

```
apply_at(
    type: tinfo_t, ea: ea_t, flags: TypeApplyFlags = GUESSED
) -> bool

```

Applies a named type to the given address.

Parameters:

- **`ea`** (`ea_t`) – The effective address.
- **`type`** (`tinfo_t`) – The name of the type to apply.
- **`flags`** (`TypeApplyFlags`, default: `GUESSED` ) – Type apply flags.

Returns:

- `bool` – True if the type was applied successfully, false otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### apply_declaration_at

```
apply_declaration_at(
    ea: ea_t,
    decl: str,
    flags: TypeApplyFlags = GUESSED,
    library: Optional[til_t] = None,
) -> bool

```

Parse a C declaration and apply it to the given address.

This is a convenience method that combines parsing and applying in one step, equivalent to idc.SetType().

Parameters:

- **`ea`** (`ea_t`) – The effective address to apply the type to.
- **`decl`** (`str`) – C declaration string (e.g., "int \_\_fastcall foo(int x, int y)").
- **`flags`** (`TypeApplyFlags`, default: `GUESSED` ) – Type apply flags.
- **`library`** (`Optional[til_t]`, default: `None` ) – Type library for parsing context, defaults to local library.

Returns:

- `bool` – True if the type was parsed and applied successfully, False otherwise.

Raises:

- `InvalidEAError` – If the effective address is invalid.
- `InvalidParameterError` – If the declaration cannot be parsed.

Example

```
db.types.apply_declaration_at(0x401000, "int __fastcall foo(int x)")

```

#### copy_type

```
copy_type(
    source: til_t, destination: til_t, name: str
) -> int

```

Copies a type and all dependent types from one library to another.

Parameters:

- **`source`** (`til_t`) – The source library.
- **`destination`** (`til_t`) – The destination library.
- **`name`** (`str`) – The name of the type.

Raises:

- `DatabaseError` – If the copy operation failed.

Returns:

- `int` – The ordinal number of the copied type.

#### create_array

```
create_array(element_type: tinfo_t, count: int) -> tinfo_t

```

Create an array type.

Parameters:

- **`element_type`** (`tinfo_t`) – Type of array elements.
- **`count`** (`int`) – Number of elements.

Returns:

- `tinfo_t` – The array type.

Example

> > > char_type = db.types.create_primitive(1) buffer = db.types.create_array(char_type, 256)

#### create_enum

```
create_enum(name: str, base_size: int = 4) -> EnumBuilder

```

Create an enum builder.

Parameters:

- **`name`** (`str`) – Name for the enum.
- **`base_size`** (`int`, default: `4` ) – Underlying integer size (1, 2, 4, or 8).

Returns:

- `EnumBuilder` – An EnumBuilder for constructing the type.

#### create_float

```
create_float(size: int = 4) -> tinfo_t

```

Create a floating-point type.

Parameters:

- **`size`** (`int`, default: `4` ) – 4 for float, 8 for double.

Returns:

- `tinfo_t` – The floating-point type.

Raises:

- `InvalidParameterError` – If size is not 4 or 8.

#### create_func_type

```
create_func_type() -> FuncTypeBuilder

```

Create a function type builder.

Returns:

- `FuncTypeBuilder` – A FuncTypeBuilder for constructing the type.

#### create_library

```
create_library(file: Path, description: str) -> til_t

```

Initializes a new type library.

Parameters:

- **`file`** (`Path`) – The name of the library.
- **`description`** (`str`) – The description of the library.

Returns:

- `til_t` – An initialized library.

#### create_pointer

```
create_pointer(target: tinfo_t) -> tinfo_t

```

Create a pointer type.

Parameters:

- **`target`** (`tinfo_t`) – The type being pointed to.

Returns:

- `tinfo_t` – A pointer to the target type.

Example

> > > char_type = db.types.create_primitive(1) char_ptr = db.types.create_pointer(char_type)

#### create_primitive

```
create_primitive(size: int, signed: bool = True) -> tinfo_t

```

Create a primitive integer type.

Parameters:

- **`size`** (`int`) – Size in bytes (1, 2, 4, or 8).
- **`signed`** (`bool`, default: `True` ) – True for signed, False for unsigned.

Returns:

- `tinfo_t` – The primitive type.

Raises:

- `InvalidParameterError` – If size is not 1, 2, 4, or 8.

Example

> > > int32 = db.types.create_primitive(4, signed=True) uint8 = db.types.create_primitive(1, signed=False)

#### create_struct

```
create_struct(name: str) -> StructBuilder

```

Create a struct builder.

Parameters:

- **`name`** (`str`) – Name for the struct.

Returns:

- `StructBuilder` – A StructBuilder for constructing the type.

Example

> > > point = db.types.create_struct("Point") \
> > > ... .add_member("x", db.types.create_primitive(4)) \
> > > ... .add_member("y", db.types.create_primitive(4)) \
> > > ... .build()

#### create_union

```
create_union(name: str) -> UnionBuilder

```

Create a union builder.

Parameters:

- **`name`** (`str`) – Name for the union.

Returns:

- `UnionBuilder` – A UnionBuilder for constructing the type.

#### create_void

```
create_void() -> tinfo_t

```

Create a void type.

Returns:

- `tinfo_t` – A void tinfo_t.

#### export_to_library

```
export_to_library(library: til_t) -> None

```

Export all types from local library to external library. Numbered types will be automatically enabled for the external library.

Parameters:

- **`library`** (`til_t`) – The destination library.

#### export_type

```
export_type(destination: til_t, name: str) -> int

```

Exports a type and all dependent types from the local (database) library into a loaded (external) library.

Numbered types will be automatically enabled for the external library.

Parameters:

- **`destination`** (`til_t`) – The loaded type library from where to import the type.
- **`name`** (`str`) – The name of the type.

Raises:

- `DatabaseError` – If the export operation failed.

Returns:

- `int` – The ordinal number of the imported type.

#### get_all

```
get_all(
    library: Optional[til_t] = None,
    type_kind: TypeKind = NAMED,
) -> Iterator[tinfo_t]

```

Retrieves an iterator over all types in the specified type library.

Parameters:

- **`library`** (`Optional[til_t]`, default: `None` ) – library instance to iterate over (defaults to local library).
- **`type_kind`** (`TypeKind`, default: `NAMED` ) – type kind to iterate over (defaults to 'NAMED').

Returns:

- `Iterator[tinfo_t]` – A types iterator.

#### get_array_element_type

```
get_array_element_type(
    type_info: tinfo_t,
) -> Optional[tinfo_t]

```

Get the element type of an array type.

Parameters:

- **`type_info`** (`tinfo_t`) – An array type.

Returns:

- `Optional[tinfo_t]` – The element type, or None if not an array.

#### get_array_length

```
get_array_length(type_info: tinfo_t) -> Optional[int]

```

Get the number of elements in an array type.

Parameters:

- **`type_info`** (`tinfo_t`) – An array type.

Returns:

- `Optional[int]` – The array length, or None if not an array.

#### get_at

```
get_at(ea: ea_t) -> Optional[tinfo_t]

```

Retrieves the type information of the item at the given address.

Parameters:

- **`ea`** (`ea_t`) – The effective address.

Returns:

- `Optional[tinfo_t]` – The type information object or None if it does not exist.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### get_by_name

```
get_by_name(
    name: str, library: til_t = None
) -> Optional[tinfo_t]

```

Retrieve a type information object by name.

Parameters:

- **`name`** (`str`) – Name of the type to retrieve.
- **`library`** (`til_t`, default: `None` ) – Type library to retrieve from, defaults to local library.

Returns:

- `Optional[tinfo_t]` – The named type information object or None if not found.

#### get_comment

```
get_comment(type_info: tinfo_t) -> str

```

Get comment for type.

Parameters:

- **`type_info`** (`tinfo_t`) – The type info object to get comment from.

Returns:

- `str` – Comment text, or empty string if no comment exists.

#### get_details

```
get_details(type_info: tinfo_t) -> TypeDetails

```

Get type details and attributes.

Parameters:

- **`type_info`** (`tinfo_t`) – The type information object for which to gather details.

Returns:

- `TypeDetails` – Type details object.

#### get_enum_member_by_name

```
get_enum_member_by_name(
    type_info: tinfo_t, name: str
) -> Optional[EnumMemberInfo]

```

Get a specific enum member by name.

Parameters:

- **`type_info`** (`tinfo_t`) – An enum type.
- **`name`** (`str`) – Member name to find.

Returns:

- `Optional[EnumMemberInfo]` – EnumMemberInfo if found, None otherwise.

#### get_enum_member_by_value

```
get_enum_member_by_value(
    type_info: tinfo_t, value: int
) -> Optional[EnumMemberInfo]

```

Get a specific enum member by value.

Parameters:

- **`type_info`** (`tinfo_t`) – An enum type.
- **`value`** (`int`) – Numeric value to find.

Returns:

- `Optional[EnumMemberInfo]` – EnumMemberInfo if found, None otherwise.

#### get_enum_member_count

```
get_enum_member_count(type_info: tinfo_t) -> int

```

Get the number of members in an enum.

Parameters:

- **`type_info`** (`tinfo_t`) – An enum type.

Returns:

- `int` – Member count, or 0 if not an enum.

#### get_enum_members

```
get_enum_members(
    type_info: tinfo_t,
) -> Iterator[EnumMemberInfo]

```

Iterate over all members of an enum type.

Parameters:

- **`type_info`** (`tinfo_t`) – An enum type.

Returns:

- `Iterator[EnumMemberInfo]` – Iterator of EnumMemberInfo for each member.
- `Iterator[EnumMemberInfo]` – Empty iterator if type is not an enum.

Example

> > > enum_type = db.types.get_by_name("FileMode") for member in db.types.get_enum_members(enum_type): ... print(f"{member.name} = {member.value}")

#### get_func_argument_by_index

```
get_func_argument_by_index(
    type_info: tinfo_t, index: int
) -> Optional[FuncArgumentInfo]

```

Get a specific function argument by index.

Parameters:

- **`type_info`** (`tinfo_t`) – A function type.
- **`index`** (`int`) – Argument index (0-based).

Returns:

- `Optional[FuncArgumentInfo]` – FuncArgumentInfo if found, None otherwise.

#### get_func_argument_count

```
get_func_argument_count(type_info: tinfo_t) -> int

```

Get the number of arguments in a function type.

Parameters:

- **`type_info`** (`tinfo_t`) – A function type.

Returns:

- `int` – Argument count, or 0 if not a function type.

#### get_func_arguments

```
get_func_arguments(
    type_info: tinfo_t,
) -> Iterator[FuncArgumentInfo]

```

Iterate over all arguments of a function type.

Parameters:

- **`type_info`** (`tinfo_t`) – A function type.

Returns:

- `Iterator[FuncArgumentInfo]` – Iterator of FuncArgumentInfo for each argument.
- `Iterator[FuncArgumentInfo]` – Empty iterator if type is not a function.

Example

> > > func_type = db.types.get_at(0x401000) for arg in db.types.get_func_arguments(func_type): ... print(f"Arg {arg.index}: {arg.name}")

#### get_member

```
get_member(
    type_info: tinfo_t,
    key: Union[str, int],
    by: Union[TypeMemberLookupMode, str] = NAME,
) -> Optional[
    Union[UdtMemberInfo, EnumMemberInfo, FuncArgumentInfo]
]

```

Get a type member (LLM-friendly unified interface).

Works for struct/union members, enum members, and function arguments.

Parameters:

- **`type_info`** (`tinfo_t`) – The type to inspect.
- **`key`** (`Union[str, int]`) – Lookup key (name, offset, index, or value depending on 'by').
- **`by`** (`Union[TypeMemberLookupMode, str]`, default: `NAME` ) – Lookup mode:
  - "name": Look up by member/argument name
  - "offset": Look up by byte offset (UDT only)
  - "index": Look up by index (enum, func args)
  - "value": Look up by enum value (enum only)

Returns:

- `Optional[Union[UdtMemberInfo, EnumMemberInfo, FuncArgumentInfo]]` – The member info if found, None otherwise.

Example

> > > ##### Get struct member by name
> > >
> > > member = db.types.get_member(struct_type, "x", by="name")
> > >
> > > ##### Get struct member by offset
> > >
> > > member = db.types.get_member(struct_type, 4, by="offset")
> > >
> > > ##### Get function argument by index
> > >
> > > arg = db.types.get_member(func_type, 0, by="index")

#### get_members

```
get_members(
    type_info: tinfo_t,
) -> Iterator[
    Union[UdtMemberInfo, EnumMemberInfo, FuncArgumentInfo]
]

```

Get all members of a type (LLM-friendly unified interface).

Works for struct/union types, enum types, and function types.

Parameters:

- **`type_info`** (`tinfo_t`) – The type to inspect.

Returns:

- `Iterator[Union[UdtMemberInfo, EnumMemberInfo, FuncArgumentInfo]]` – Iterator of member info objects.
- `Iterator[Union[UdtMemberInfo, EnumMemberInfo, FuncArgumentInfo]]` – Empty iterator if type has no members.

Example

> > > for member in db.types.get_members(struct_type): ... print(f"{member.name}")

#### get_pointed_type

```
get_pointed_type(type_info: tinfo_t) -> Optional[tinfo_t]

```

Get the type pointed to by a pointer type.

Parameters:

- **`type_info`** (`tinfo_t`) – A pointer type.

Returns:

- `Optional[tinfo_t]` – The pointed-to type, or None if not a pointer.

Example

> > > ptr_type = db.types.get_at(0x401000) # char\* base = db.types.get_pointed_type(ptr_type) # char

#### get_return_type

```
get_return_type(type_info: tinfo_t) -> Optional[tinfo_t]

```

Get the return type of a function type.

Parameters:

- **`type_info`** (`tinfo_t`) – A function type.

Returns:

- `Optional[tinfo_t]` – The return type, or None if not a function type.

#### get_udt_member_by_name

```
get_udt_member_by_name(
    type_info: tinfo_t, name: str
) -> Optional[UdtMemberInfo]

```

Get a specific UDT member by name.

Parameters:

- **`type_info`** (`tinfo_t`) – A UDT (struct or union) type.
- **`name`** (`str`) – Member name to find.

Returns:

- `Optional[UdtMemberInfo]` – UdtMemberInfo if found, None otherwise.

#### get_udt_member_by_offset

```
get_udt_member_by_offset(
    type_info: tinfo_t, offset: int
) -> Optional[UdtMemberInfo]

```

Get a UDT member at the specified byte offset.

Parameters:

- **`type_info`** (`tinfo_t`) – A UDT (struct or union) type.
- **`offset`** (`int`) – Byte offset within the structure.

Returns:

- `Optional[UdtMemberInfo]` – UdtMemberInfo if found, None otherwise.

#### get_udt_member_count

```
get_udt_member_count(type_info: tinfo_t) -> int

```

Get the number of members in a UDT.

Parameters:

- **`type_info`** (`tinfo_t`) – A UDT type.

Returns:

- `int` – Member count, or 0 if not a UDT.

#### get_udt_members

```
get_udt_members(
    type_info: tinfo_t,
) -> Iterator[UdtMemberInfo]

```

Iterate over all members of a struct or union type.

Parameters:

- **`type_info`** (`tinfo_t`) – A UDT (struct or union) type.

Returns:

- `Iterator[UdtMemberInfo]` – Iterator of UdtMemberInfo for each member.
- `Iterator[UdtMemberInfo]` – Empty iterator if type is not a UDT.

Example

> > > struct_type = db.types.get_by_name("MyStruct") for member in db.types.get_udt_members(struct_type): ... print(f"{member.name}: {member.size} bytes at offset {member.offset}")

#### import_from_library

```
import_from_library(library: til_t) -> None

```

Imports the types from an external library to the local (database) library.

Parameters:

- **`library`** (`til_t`) – The library instance to import from.

Returns:

- `None` – The status of the add library operation.

#### import_type

```
import_type(source: til_t, name: str) -> int

```

Imports a type and all dependent types from an external (loaded) library into the local (database) library.

Parameters:

- **`source`** (`til_t`) – The loaded type library from where to import the type.
- **`name`** (`str`) – The name of the type.

Raises:

- `DatabaseError` – If the import operation failed.

Returns:

- `int` – The ordinal number of the imported type.

#### load_library

```
load_library(file: Path) -> til_t

```

Loads a type library file in memory.

Parameters:

- **`file`** (`Path`) – The path of the library file to load. The library name can be passed with or without extension (.til extension will be forced) and as a relative (default ida til directory will be used) or absolute path.

Returns:

- `til_t` – The loaded til_t object.

#### parse_declarations

```
parse_declarations(
    library: til_t,
    decl: str,
    flags: TypeFormattingFlags = HTI_DCL | HTI_PAKDEF,
) -> int

```

Parse type declarations from string and store created types into a library.

Parameters:

- **`library`** (`til_t`) – The type library into where the parsed types will be stored.
- **`decl`** (`str`) – C type declarations input string.
- **`flags`** (`TypeFormattingFlags`, default: `HTI_DCL | HTI_PAKDEF` ) – Optional combination of TypeFormattingFlags.

Returns:

- `int` – Number of parse errors.

#### parse_header_file

```
parse_header_file(
    library: til_t,
    header: Path,
    flags: TypeFormattingFlags = HTI_FIL | HTI_PAKDEF,
) -> int

```

Parse type declarations from file and store created types into a library.

Parameters:

- **`library`** (`til_t`) – The type library into where the parsed types will be stored.
- **`header`** (`Path`) – The path to a header file.
- **`flags`** (`TypeFormattingFlags`, default: `HTI_FIL | HTI_PAKDEF` ) – Optional combination of TypeFormattingFlags.

Returns:

- `int` – Number of parse errors.

#### parse_object_at

```
parse_object_at(
    ea: ea_t,
    type_info: tinfo_t,
    flags: ObjectIOFlags = NONE,
) -> object_t

```

Reconstruct a typed object from a database address.

Reads memory at the specified address according to the type layout and returns an `object_t` whose attributes correspond to the structure members. Nested structures become nested `object_t` instances. Members can be accessed by attribute (`obj.x`) or by key (`obj['x']`).

Parameters:

- **`ea`** (`ea_t`) – Effective address to read from.
- **`type_info`** (`tinfo_t`) – Type describing the structure layout.
- **`flags`** (`ObjectIOFlags`, default: `NONE` ) – ObjectIOFlags controlling behavior:
  - NONE: Default behavior
  - NOATTR_FAIL: Treat missing attributes as failures
  - IGNORE_PTRS: Don't follow pointers during conversion

Returns:

- `object_t` – An object_t with member names as attributes and values extracted
- `object_t` – according to the type definition.

Raises:

- `InvalidEAError` – If ea is invalid.
- `InvalidParameterError` – If type_info cannot be serialized.
- `DatabaseError` – If unpacking fails.

Example

```
point_type = db.types.get_by_name("Point")
data = db.types.parse_object_at(0x401000, point_type)
data.x  # 10

```

#### parse_object_from_bytes

```
parse_object_from_bytes(
    type_info: tinfo_t,
    data: bytes,
    flags: ObjectIOFlags = NONE,
) -> object_t

```

Reconstruct a typed object from a packed bytes buffer.

Deserializes a previously packed buffer according to the type layout and returns an `object_t` whose attributes correspond to the structure members. Nested structures become nested `object_t` instances. Members can be accessed by attribute (`obj.x`) or by key (`obj['x']`).

Parameters:

- **`type_info`** (`tinfo_t`) – Type describing the structure layout.
- **`data`** (`bytes`) – Packed bytes buffer (typically from serialize_object_to_bytes).
- **`flags`** (`ObjectIOFlags`, default: `NONE` ) – ObjectIOFlags controlling behavior:
  - NONE: Default behavior
  - NOATTR_FAIL: Treat missing attributes as failures
  - IGNORE_PTRS: Don't follow pointers during conversion

Returns:

- `object_t` – An object_t with member names as attributes and values.

Raises:

- `InvalidParameterError` – If type_info cannot be serialized or data is empty.
- `SerializationError` – If unpacking fails.

Example

```
point_type = db.types.get_by_name("Point")
packed = db.types.serialize_object_to_bytes(point_type, {'x': 10, 'y': 20})
data = db.types.parse_object_from_bytes(point_type, packed)
data.x  # 10

```

#### parse_one_declaration

```
parse_one_declaration(
    library: til_t,
    decl: str,
    name: Optional[str] = None,
    flags: TypeFormattingFlags = HTI_DCL | HTI_PAKDEF,
) -> tinfo_t

```

Parse one declaration from string and return its `tinfo_t`.

If `name` is provided, the parsed type is also saved into `library` as a named type. Omit `name` to get a transient `tinfo_t` without modifying the library.

Parameters:

- **`library`** (`til_t`) – The type library used for parsing context. Pass None to use the default idati.
- **`decl`** (`str`) – C type declaration string to parse. A trailing ; is optional — it is appended if missing.
- **`name`** (`Optional[str]`, default: `None` ) – Optional name under which to register the parsed type in library. If None, the type is returned transiently.
- **`flags`** (`TypeFormattingFlags`, default: `HTI_DCL | HTI_PAKDEF` ) – Optional combination of TypeFormattingFlags for parsing behavior.

Returns:

- `tinfo_t` – The tinfo_t instance on success.

Raises:

- `InvalidParameterError` – If decl is empty, decl cannot be parsed, name is empty (but not None), or name cannot be used to save the declaration.

#### save_library

```
save_library(library: til_t, file: Path) -> bool

```

Stores the type library to a file. If the library contains garbage, it will be collected before storing it. Also compacts the library before saving.

Parameters:

- **`library`** (`til_t`) – The type library instance to save to disk.
- **`file`** (`Path`) – The path to save the library to.

Returns:

- `bool` – True if the operation succeeded, False otherwise.

#### serialize_object_to_bytes

```
serialize_object_to_bytes(
    type_info: tinfo_t,
    obj: Dict[str, Any],
    base_ea: ea_t = 0,
    flags: ObjectIOFlags = NONE,
) -> bytes

```

Serialize a typed object to a bytes buffer.

Converts a dictionary to binary representation according to the type layout. The resulting bytes can be stored, transmitted, or later deserialized with parse_object_from_bytes.

Parameters:

- **`type_info`** (`tinfo_t`) – Type describing the structure layout.
- **`obj`** (`Dict[str, Any]`) – Dictionary with member names and values to store.
- **`base_ea`** (`ea_t`, default: `0` ) – Base address for pointer relocation (default: 0). Pointers in the packed object will be relative to this address.
- **`flags`** (`ObjectIOFlags`, default: `NONE` ) – ObjectIOFlags controlling behavior:
  - NONE: Default behavior
  - NOATTR_FAIL: Treat missing attributes as failures
  - IGNORE_PTRS: Don't follow pointers during conversion

Returns:

- `bytes` – Packed bytes buffer containing the serialized object.

Raises:

- `InvalidParameterError` – If type_info cannot be serialized or obj is invalid.
- `SerializationError` – If packing fails.

Example

```
point_type = db.types.get_by_name("Point")
packed = db.types.serialize_object_to_bytes(point_type, {'x': 10, 'y': 20})
print(len(packed))  # 8 (two 4-byte integers)

```

#### set_comment

```
set_comment(type_info: tinfo_t, comment: str) -> bool

```

Set comment for type. This function works only for non-trivial types

Parameters:

- **`type_info`** (`tinfo_t`) – The type info object to set comment for.
- **`comment`** (`str`) – Comment text to set.

Returns:

- `bool` – True if successful, False otherwise.

#### store_object_at

```
store_object_at(
    ea: ea_t,
    type_info: tinfo_t,
    obj: Dict[str, Any],
    flags: ObjectIOFlags = NONE,
) -> None

```

Store a typed object to a database address.

Serializes a dictionary according to the type layout and writes the binary representation to the specified database address.

Parameters:

- **`ea`** (`ea_t`) – Effective address to write to.
- **`type_info`** (`tinfo_t`) – Type describing the structure layout.
- **`obj`** (`Dict[str, Any]`) – Dictionary with member names and values to store.
- **`flags`** (`ObjectIOFlags`, default: `NONE` ) – ObjectIOFlags controlling behavior:
  - NONE: Default behavior
  - NOATTR_FAIL: Treat missing attributes as failures
  - IGNORE_PTRS: Don't follow pointers during conversion

Raises:

- `InvalidEAError` – If ea is invalid.
- `InvalidParameterError` – If type_info cannot be serialized or obj is invalid.
- `DatabaseError` – If packing fails.

Example

```
point_type = db.types.get_by_name("Point")
db.types.store_object_at(0x401000, point_type, {'x': 10, 'y': 20})

```

#### traverse

```
traverse(
    type_info: tinfo_t, visitor: tinfo_visitor_t
) -> bool

```

Traverse the given type using the provided visitor class.

Parameters:

- **`type_info`** (`tinfo_t`) – The type information object to visit.
- **`visitor`** (`tinfo_visitor_t`) – A type visitor subclassed object.

Returns:

- `bool` – True if traversal was successful, False otherwise.

#### unload_library

```
unload_library(library: til_t) -> None

```

Unload library (free underlying object).

Parameters:

- **`library`** (`til_t`) – The library instance to unload.

### UdtAttr

Bases: `Flag`

User Defined Type flags

Attributes:

- **`CPP_OBJ`** –
- **`FIXED`** –
- **`MS_STRUCT`** –
- **`TUPLE`** –
- **`UNALIGNED`** –
- **`UNION`** –
- **`VFTABLE`** –

#### CPP_OBJ

```
CPP_OBJ = 1

```

#### FIXED

```
FIXED = 2

```

#### MS_STRUCT

```
MS_STRUCT = 4

```

#### TUPLE

```
TUPLE = _since_ida('9.2', value=64)

```

#### UNALIGNED

```
UNALIGNED = 8

```

#### UNION

```
UNION = 32

```

#### VFTABLE

```
VFTABLE = 16

```

### UdtDetails

```
UdtDetails()

```

User Defined Type details

Methods:

- **`from_tinfo_t`** – Extract UDT type attributes and details.

Attributes:

- **`attributes`** (`Optional[UdtAttr]`) – Get UDT attributes.
- **`num_members`** (`int`) – Get number of members.

#### attributes

```
attributes: Optional[UdtAttr]

```

Get UDT attributes.

#### num_members

```
num_members: int

```

Get number of members.

#### from_tinfo_t

```
from_tinfo_t(type_info: tinfo_t) -> Optional[UdtDetails]

```

Extract UDT type attributes and details.

Parameters:

- **`type_info`** (`tinfo_t`) – The type information objects for which to extract details.

Returns:

- `Optional[UdtDetails]` – UDT type details object filled with extracted information.

### UdtMemberInfo

```
UdtMemberInfo(
    name: str,
    type: tinfo_t,
    offset: int,
    size: int,
    is_bitfield: bool,
    bit_offset: Optional[int] = None,
    bit_size: Optional[int] = None,
)

```

Details about a struct/union member.

Attributes:

- **`bit_offset`** (`Optional[int]`) – Bit offset within the byte (for bitfields only).
- **`bit_size`** (`Optional[int]`) – Bit size (for bitfields only).
- **`is_bitfield`** (`bool`) – True if this is a bitfield member.
- **`name`** (`str`) – Member name.
- **`offset`** (`int`) – Byte offset within the structure.
- **`size`** (`int`) – Size in bytes.
- **`type`** (`tinfo_t`) – Member type information.

#### bit_offset

```
bit_offset: Optional[int] = None

```

Bit offset within the byte (for bitfields only).

#### bit_size

```
bit_size: Optional[int] = None

```

Bit size (for bitfields only).

#### is_bitfield

```
is_bitfield: bool

```

True if this is a bitfield member.

#### name

```
name: str

```

Member name.

#### offset

```
offset: int

```

Byte offset within the structure.

#### size

```
size: int

```

Size in bytes.

#### type

```
type: tinfo_t

```

Member type information.

### UnionBuilder

```
UnionBuilder(name: str)

```

Builder for creating union types.

Example

> > > builder = db.types.create_union("MyUnion") builder.add_member("as_int", db.types.create_primitive(4)) builder.add_member("as_float", db.types.create_primitive(4)) my_union = builder.build()

Initialize a union builder.

Parameters:

- **`name`** (`str`) – Name for the union type.

Methods:

- **`add_member`** – Add a member to the union.
- **`build`** – Build and return the union type.
- **`build_and_save`** – Build the union and save it to a type library.

#### add_member

```
add_member(
    name: str, member_type: tinfo_t
) -> 'UnionBuilder'

```

Add a member to the union.

Parameters:

- **`name`** (`str`) – Member name.
- **`member_type`** (`tinfo_t`) – Member type.

Returns:

- `'UnionBuilder'` – Self for method chaining.

#### build

```
build() -> tinfo_t

```

Build and return the union type.

Returns:

- `tinfo_t` – The constructed tinfo_t.

Raises:

- `DatabaseError` – If union creation fails.

#### build_and_save

```
build_and_save(library: Optional[til_t] = None) -> tinfo_t

```

Build the union and save it to a type library.

Parameters:

- **`library`** (`Optional[til_t]`, default: `None` ) – Target library (local library if None).

Returns:

- `tinfo_t` – The constructed and saved tinfo_t.
