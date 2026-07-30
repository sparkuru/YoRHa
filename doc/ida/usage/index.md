Welcome to the IDA Domain API reference documentation. This section provides comprehensive documentation for all modules and functions available in the IDA Domain library.

The IDA Domain API is organized around the following top level entities:

- **[Database](../ref/database/)** - Main database operations and management
- **[Entries](../ref/entries/)** - Entry point management and analysis
- **[Segments](../ref/segments/)** - Memory segment operations
- **[Functions](../ref/functions/)** - Function analysis and manipulation
- **[Flowchart](../ref/flowchart/)** - Control flow graph and basic blocks operations
- **[Instructions](../ref/instructions/)** - Instruction-level analysis
- **[Operands](../ref/operands/)** - Operand analysis and manipulation
- **[Bytes](../ref/bytes/)** - Raw byte manipulation and analysis
- **[Strings](../ref/strings/)** - String detection and analysis
- **[Types](../ref/types/)** - Type information and management
- **[Heads](../ref/heads/)** - Address head management
- **[Hooks](../ref/hooks/)** - Hooks / event handling
- **[XRefs](../ref/xrefs/)** - Xref analysis
- **[Names](../ref/names/)** - Symbol name management
- **[Comments](../ref/comments/)** - Comment management
- **[Signature Files](../ref/signature_files/)** - FLIRT signature file operations

## Accessing the entities

The first thing that you will usually want to do is opening a **[Database](../ref/database/)**.

Once the database is opened, you can access all other entities from the database handle itself through their respective property.

```
db = Database()
db.open('/path/to/your/database.idb')
db.functions.get_all()
db.segments.get_all()
db.entries.get_all()
...

```

## Compatibility with IDA Python SDK

The IDA Domain API is fully compatible with the IDA Python SDK shipped with IDA. It means the while we are extending the coverage of IDA Domain API, you can always fallback to using the IDA Python SDK.

Here is an example:

```
import ida_domain
import ida_funcs

db = ida_domain.Database()
db.open('/path/to/your/database.idb')
for i, func in enumerate(db.functions.get_all()):
    print(ida_funcs.get_func_name(func.start_ea)) # <== this is calling IDA Python SDK

```
