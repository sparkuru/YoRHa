# `Flowchart`

## flowchart

Classes:

- **`BasicBlock`** – Provides access to basic block properties and navigation
- **`FlowChart`** – Provides analysis and iteration over basic blocks within
- **`FlowChartFlags`** – Flags for flowchart generation from IDA SDK.

### BasicBlock

```
BasicBlock(
    database: Optional[Database],
    id: int,
    block: qbasic_block_t,
    flowchart: qflow_chart_t,
)

```

Bases: `BasicBlock`, `DatabaseEntity`

Provides access to basic block properties and navigation between connected blocks within a control flow graph.

Initialize basic block.

Parameters:

- **`id`** (`int`) – Block ID within the flowchart
- **`block`** (`qbasic_block_t`) – The underlying qbasic_block_t object
- **`flowchart`** (`qflow_chart_t`) – Parent flowchart

Methods:

- **`count_predecessors`** – Count the number of predecessor blocks.
- **`count_successors`** – Count the number of successor blocks.
- **`get_instructions`** – Retrieves all instructions within this basic block.
- **`get_predecessors`** – Iterator over predecessor blocks.
- **`get_successors`** – Iterator over successor blocks.

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

#### count_predecessors

```
count_predecessors() -> int

```

Count the number of predecessor blocks.

#### count_successors

```
count_successors() -> int

```

Count the number of successor blocks.

#### get_instructions

```
get_instructions() -> Optional[Iterator[insn_t]]

```

Retrieves all instructions within this basic block.

Returns:

- `Optional[Iterator[insn_t]]` – An instruction iterator for this block.

#### get_predecessors

```
get_predecessors() -> Iterator[BasicBlock]

```

Iterator over predecessor blocks.

#### get_successors

```
get_successors() -> Iterator[BasicBlock]

```

Iterator over successor blocks.

### FlowChart

```
FlowChart(
    database: Optional[Database],
    func: func_t = None,
    bounds: Optional[tuple[ea_t, ea_t]] = None,
    flags: FlowChartFlags = NONE,
)

```

Bases: `FlowChart`, `DatabaseEntity`

Provides analysis and iteration over basic blocks within functions or address ranges.

Initialize FlowChart for analyzing basic blocks within functions or address ranges.

Parameters:

- **`database`** (`Optional[Database]`) – Database instance to associate with this flowchart. Can be None.
- **`func`** (`func_t`, default: `None` ) – IDA function object (func_t) to analyze. Defaults to None.
- **`bounds`** (`Optional[tuple[ea_t, ea_t]]`, default: `None` ) – Address range tuple (start_ea, end_ea) defining the analysis scope. Defaults to None.
- **`flags`** (`FlowChartFlags`, default: `NONE` ) – FlowChart creation flags controlling analysis behavior. Defaults to FlowChartFlags.NONE.

Note

At least one of `func` or `bounds` must be specified.

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

### FlowChartFlags

Bases: `IntFlag`

Flags for flowchart generation from IDA SDK.

Attributes:

- **`NOEXT`** –
- **`NONE`** –
- **`PREDS`** –

#### NOEXT

```
NOEXT = FC_NOEXT

```

#### NONE

```
NONE = 0

```

#### PREDS

```
PREDS = FC_PREDS

```
