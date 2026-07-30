# `Instructions`

## instructions

Classes:

- **`Instructions`** – Provides access to instruction-related operations using structured operand hierarchy.

### Instructions

```
Instructions(database: Database)

```

Bases: `DatabaseEntity`

Provides access to instruction-related operations using structured operand hierarchy.

Can be used to iterate over all instructions in the opened database.

Parameters:

- **`database`** (`Database`) – Reference to the active IDA database.

Methods:

- **`breaks_sequential_flow`** – Check if the instruction stops sequential control flow.
- **`get_all`** – Retrieves an iterator over all instructions in the database.
- **`get_at`** – Decodes the instruction at the specified address.
- **`get_between`** – Retrieves instructions between the specified addresses.
- **`get_disassembly`** – Retrieves the disassembled string representation of the given instruction.
- **`get_mnemonic`** – Retrieves the mnemonic of the given instruction.
- **`get_operand`** – Get a specific operand from the instruction.
- **`get_operands`** – Get all operands from the instruction.
- **`get_operands_count`** – Retrieve the operands number of the given instruction.
- **`get_previous`** – Decodes previous instruction of the one at specified address.
- **`is_call_instruction`** – Check if the instruction is a call instruction.
- **`is_indirect_jump_or_call`** – Check if the instruction passes execution using indirect jump or call
- **`is_valid`** – Checks if the given instruction is valid.

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

#### breaks_sequential_flow

```
breaks_sequential_flow(insn: insn_t) -> bool

```

Check if the instruction stops sequential control flow.

This includes return instructions, unconditional jumps, halt instructions, and any other instruction that doesn't pass execution to the next sequential instruction.

Parameters:

- **`insn`** (`insn_t`) – The instruction to analyze.

Returns:

- `bool` – True if this instruction has the CF_STOP flag set.

#### get_all

```
get_all() -> Iterator[insn_t]

```

Retrieves an iterator over all instructions in the database.

Returns:

- `Iterator[insn_t]` – An iterator over the instructions.

#### get_at

```
get_at(ea: ea_t) -> Optional[insn_t]

```

Decodes the instruction at the specified address.

Parameters:

- **`ea`** (`ea_t`) – The effective address of the instruction.

Returns:

- `Optional[insn_t]` – An insn_t instance, if fails returns None.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### get_between

```
get_between(start: ea_t, end: ea_t) -> Iterator[insn_t]

```

Retrieves instructions between the specified addresses.

Parameters:

- **`start`** (`ea_t`) – Start of the address range.
- **`end`** (`ea_t`) – End of the address range.

Returns:

- `Iterator[insn_t]` – An instruction iterator.

Raises:

- `InvalidEAError` – If start or end are not within database bounds.
- `InvalidParameterError` – If start >= end.

#### get_disassembly

```
get_disassembly(
    insn: insn_t, remove_tags: bool = True
) -> Optional[str]

```

Retrieves the disassembled string representation of the given instruction.

Parameters:

- **`insn`** (`insn_t`) – The instruction to disassemble.
- **`remove_tags`** (`bool`, default: `True` ) – If True, removes IDA color/formatting tags from the output.

Returns:

- `Optional[str]` – The disassembly as string, if fails, returns None.

#### get_mnemonic

```
get_mnemonic(insn: insn_t) -> Optional[str]

```

Retrieves the mnemonic of the given instruction.

Parameters:

- **`insn`** (`insn_t`) – The instruction to analyze.

Returns:

- `Optional[str]` – A string representing the mnemonic of the given instruction.
- `Optional[str]` – If retrieving fails, returns None.

#### get_operand

```
get_operand(
    insn: insn_t, index: int
) -> Optional[Operand] | None

```

Get a specific operand from the instruction.

Parameters:

- **`insn`** (`insn_t`) – The instruction to analyze.
- **`index`** (`int`) – The operand index (0, 1, 2, etc.).

Returns:

- `Optional[Operand] | None` – An Operand instance of the appropriate type, or None
- `Optional[Operand] | None` – if the index is invalid or operand is void.

#### get_operands

```
get_operands(insn: insn_t) -> List[Operand]

```

Get all operands from the instruction.

Parameters:

- **`insn`** (`insn_t`) – The instruction to analyze.

Returns:

- `List[Operand]` – A list of Operand instances of appropriate types (excludes void operands).

#### get_operands_count

```
get_operands_count(insn: insn_t) -> int

```

Retrieve the operands number of the given instruction.

Parameters:

- **`insn`** (`insn_t`) – The instruction to analyze.

Returns:

- `int` – An integer representing the number, if error, the number is negative.

#### get_previous

```
get_previous(ea: ea_t) -> Optional[insn_t]

```

Decodes previous instruction of the one at specified address.

Parameters:

- **`ea`** (`ea_t`) – The effective address of the instruction.

Returns:

- `Optional[insn_t]` – An insn_t instance, if fails returns None.

Raises:

- `InvalidEAError` – If the effective address is invalid.

#### is_call_instruction

```
is_call_instruction(insn: insn_t) -> bool

```

Check if the instruction is a call instruction.

Parameters:

- **`insn`** (`insn_t`) – The instruction to analyze.

Returns:

- `bool` – True if this is a call instruction.

#### is_indirect_jump_or_call

```
is_indirect_jump_or_call(insn: insn_t) -> bool

```

Check if the instruction passes execution using indirect jump or call

Parameters:

- **`insn`** (`insn_t`) – The instruction to analyze.

Returns: True if this instruction has the CF_JUMP flag set.

#### is_valid

```
is_valid(insn: insn_t) -> bool

```

Checks if the given instruction is valid.

Parameters:

- **`insn`** (`insn_t`) – The instruction to validate.

Returns:

- `bool` – True if the instruction is valid, False otherwise.
