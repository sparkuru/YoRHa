# `Hooks`

## hooks

Classes:

- **`DatabaseHooks`** – Convenience class for IDB (database) events handling.
- **`DebuggerHooks`** – Convenience class for debugger events handling.
- **`DecompilerHooks`** – Convenience class for decompiler events handling.
- **`ProcessorHooks`** – Convenience class for IDP (processor) events handling.
- **`UIHooks`** – Convenience class for UI events handling.
- **`ViewHooks`** – Convenience class for IDA View events handling.

Attributes:

- **`HooksList`** (`TypeAlias`) –

### HooksList

```
HooksList: TypeAlias = list[
    Union[
        ProcessorHooks,
        DatabaseHooks,
        DebuggerHooks,
        DecompilerHooks,
        UIHooks,
        ViewHooks,
    ]
]

```

### DatabaseHooks

```
DatabaseHooks()

```

Bases: `_BaseHooks`, `IDB_Hooks`

Convenience class for IDB (database) events handling.

Methods:

- **`adding_segm`** – A segment is being created.
- **`allsegs_moved`** – Program rebasing is complete. This event is generated after a series of segm_moved events.
- **`auto_empty`** – Info: all analysis queues are empty. This callback is called once when the initial
- **`auto_empty_finally`** – Info: all analysis queues are empty definitively. This callback is called only once.
- **`bookmark_changed`** – Bookmarked position changed.
- **`byte_patched`** – A byte has been patched.
- **`callee_addr_changed`** – Callee address has been updated by the user.
- **`changing_cmt`** – An item comment is to be changed.
- **`changing_op_ti`** – An operand typestring (c/c++ prototype) is to be changed.
- **`changing_op_type`** – An operand type (offset, hex, etc...) is to be changed.
- **`changing_range_cmt`** – Range comment is to be changed.
- **`changing_segm_class`** – Segment class is being changed.
- **`changing_segm_end`** – Segment end address is to be changed.
- **`changing_segm_name`** – Segment name is being changed.
- **`changing_segm_start`** – Segment start address is to be changed.
- **`changing_ti`** – An item typestring (c/c++ prototype) is to be changed.
- **`closebase`** – The database will be closed now.
- **`cmt_changed`** – An item comment has been changed.
- **`compiler_changed`** – The kernel has changed the compiler information (idainfo::cc structure; get_abi_name).
- **`deleting_func`** – The kernel is about to delete a function.
- **`deleting_func_tail`** – A function tail chunk is to be removed.
- **`deleting_segm`** – A segment is to be deleted.
- **`deleting_tryblks`** – About to delete tryblk information in given range.
- **`destroyed_items`** – Instructions/data have been destroyed in \[ea1, ea2).
- **`determined_main`** – The main() function has been determined.
- **`dirtree_link`** – Dirtree: an item has been linked/unlinked.
- **`dirtree_mkdir`** – Dirtree: a directory has been created.
- **`dirtree_move`** – Dirtree: a directory or item has been moved.
- **`dirtree_rank`** – Dirtree: a directory or item rank has been changed.
- **`dirtree_rmdir`** – Dirtree: a directory has been deleted.
- **`dirtree_rminode`** – Dirtree: an inode became unavailable.
- **`dirtree_segm_moved`** – Dirtree: inodes were changed due to a segment movement or a program rebasing.
- **`extlang_changed`** – The list of extlangs or the default extlang was changed.
- **`extra_cmt_changed`** – An extra comment has been changed.
- **`flow_chart_created`** – GUI has retrieved a function flow chart.
- **`frame_created`** – A function frame has been created.
- **`frame_deleted`** – The kernel has deleted a function frame.
- **`frame_expanded`** – A frame type has been expanded or shrunk.
- **`frame_udm_changed`** – Frame member has been changed.
- **`frame_udm_created`** – Frame member has been added.
- **`frame_udm_deleted`** – Frame member has been deleted.
- **`frame_udm_renamed`** – Frame member has been renamed.
- **`func_added`** – The kernel has added a function.
- **`func_deleted`** – A function has been deleted.
- **`func_noret_changed`** – FUNC_NORET bit has been changed.
- **`func_tail_appended`** – A function tail chunk has been appended.
- **`func_tail_deleted`** – A function tail chunk has been removed.
- **`func_updated`** – The kernel has updated a function.
- **`hook`** – Hook (activate) the event handlers.
- **`idasgn_loaded`** – FLIRT signature has been loaded for normal processing
- **`idasgn_matched_ea`** – A FLIRT match has been found.
- **`item_color_changed`** – An item color has been changed.
- **`kernel_config_loaded`** – This event is issued when ida.cfg is parsed.
- **`loader_finished`** – External file loader finished its work.
- **`local_type_renamed`** – Local type has been renamed.
- **`local_types_changed`** – Local types have been changed.
- **`log`** – Utility method to optionally log called hooks and their parameters.
- **`lt_edm_changed`** – Local type enum member has been changed.
- **`lt_edm_created`** – Local type enum member has been added.
- **`lt_edm_deleted`** – Local type enum member has been deleted.
- **`lt_edm_renamed`** – Local type enum member has been renamed.
- **`lt_udm_changed`** – Local type UDT member has been changed.
- **`lt_udm_created`** – Local type UDT member has been added.
- **`lt_udm_deleted`** – Local type UDT member has been deleted.
- **`lt_udm_renamed`** – Local type UDT member has been renamed.
- **`lt_udt_expanded`** – A structure type has been expanded or shrunk.
- **`make_code`** – An instruction is being created.
- **`make_data`** – A data item is being created.
- **`op_ti_changed`** – An operand typestring (c/c++ prototype) has been changed.
- **`op_type_changed`** – An operand type (offset, hex, etc...) has been set or deleted.
- **`range_cmt_changed`** – Range comment has been changed.
- **`renamed`** – The kernel has renamed a byte. See also the rename event.
- **`savebase`** – The database is being saved.
- **`segm_added`** – A new segment has been created.
- **`segm_attrs_updated`** – Segment attributes have been changed.
- **`segm_class_changed`** – Segment class has been changed.
- **`segm_deleted`** – A segment has been deleted.
- **`segm_end_changed`** – Segment end address has been changed.
- **`segm_moved`** – Segment has been moved.
- **`segm_name_changed`** – Segment name has been changed.
- **`segm_start_changed`** – Segment start address has been changed.
- **`set_func_end`** – Function chunk end address will be changed.
- **`set_func_start`** – Function chunk start address will be changed.
- **`sgr_changed`** – The kernel has changed a segment register value.
- **`sgr_deleted`** – The kernel has deleted a segment register value.
- **`stkpnts_changed`** – Stack change points have been modified.
- **`tail_owner_changed`** – A tail chunk owner has been changed.
- **`thunk_func_created`** – A thunk bit has been set for a function.
- **`ti_changed`** – An item typestring (c/c++ prototype) has been changed.
- **`tryblks_updated`** – Updated tryblk information.
- **`unhook`** – Un-hook (de-activate) the event handlers.
- **`updating_tryblks`** – About to update tryblk information.
- **`upgraded`** – The database has been upgraded and the receiver can upgrade its info as well.

Attributes:

- **`database`** (`Database`) – Get the database reference, guaranteed to be non-None when called from
- **`is_hooked`** (`bool`) –
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

#### is_hooked

```
is_hooked: bool

```

#### m_database

```
m_database = database

```

#### adding_segm

```
adding_segm(s: 'segment_t *') -> None

```

A segment is being created.

Parameters:

- **`s`** (`segment_t`) – The segment being created.

#### allsegs_moved

```
allsegs_moved(info: 'segm_move_infos_t *') -> None

```

Program rebasing is complete. This event is generated after a series of segm_moved events.

Parameters:

- **`info`** (`segm_move_infos_t *`) – Information about all moved segments.

#### auto_empty

```
auto_empty() -> None

```

Info: all analysis queues are empty. This callback is called once when the initial analysis is finished. If the queue is not empty upon the return from this callback, it will be called later again.

#### auto_empty_finally

```
auto_empty_finally() -> None

```

Info: all analysis queues are empty definitively. This callback is called only once.

#### bookmark_changed

```
bookmark_changed(
    index: int,
    pos: 'lochist_entry_t const *',
    desc: str,
    operation: int,
) -> None

```

Bookmarked position changed.

Parameters:

- **`index`** (`int`) – Bookmark index (uint32).
- **`pos`** (`lochist_entry_t`) – Position info.
- **`desc`** (`str`) – Description, or None if deleted.
- **`operation`** (`int`) – 0 = added, 1 = updated, 2 = deleted. If desc is None, the bookmark was deleted.

#### byte_patched

```
byte_patched(ea: ea_t, old_value: int) -> None

```

A byte has been patched.

Parameters:

- **`ea`** (`ea_t`) – Address of the patched byte.
- **`old_value`** (`int`) – Previous value (uint32).

#### callee_addr_changed

```
callee_addr_changed(ea: ea_t, callee: ea_t) -> None

```

Callee address has been updated by the user.

Parameters:

- **`ea`** (`ea_t`) – Address of the call instruction.
- **`callee`** (`ea_t`) – Updated callee address.

#### changing_cmt

```
changing_cmt(
    ea: ea_t, repeatable_cmt: bool, newcmt: str
) -> None

```

An item comment is to be changed.

Parameters:

- **`ea`** (`ea_t`) – Address of the item.
- **`repeatable_cmt`** (`bool`) – True if the comment is repeatable.
- **`newcmt`** (`str`) – New comment text.

#### changing_op_ti

```
changing_op_ti(
    ea: ea_t,
    n: int,
    new_type: 'type_t const *',
    new_fnames: 'p_list const *',
) -> None

```

An operand typestring (c/c++ prototype) is to be changed.

Parameters:

- **`ea`** (`ea_t`) – Address.
- **`n`** (`int`) – Operand number.
- **`new_type`** (`type_t const *`) – New type.
- **`new_fnames`** (`p_list const *`) – New field names.

#### changing_op_type

```
changing_op_type(
    ea: ea_t, n: int, opinfo: opinfo_t
) -> None

```

An operand type (offset, hex, etc...) is to be changed.

Parameters:

- **`ea`** (`ea_t`) – Address.
- **`n`** (`int`) – Operand number (eventually or'ed with OPND_OUTER or OPND_ALL).
- **`opinfo`** (`opinfo_t`) – Additional operand info.

#### changing_range_cmt

```
changing_range_cmt(
    kind: range_kind_t,
    a: range_t,
    cmt: str,
    repeatable: bool,
) -> None

```

Range comment is to be changed.

Parameters:

- **`kind`** (`range_kind_t`) – Kind of the range.
- **`a`** (`range_t`) – The range.
- **`cmt`** (`str`) – New comment text.
- **`repeatable`** (`bool`) – True if the comment is repeatable.

#### changing_segm_class

```
changing_segm_class(s: 'segment_t *') -> None

```

Segment class is being changed.

Parameters:

- **`s`** (`segment_t *`) – The segment whose class is changing.

#### changing_segm_end

```
changing_segm_end(
    s: 'segment_t *', new_end: ea_t, segmod_flags: int
) -> None

```

Segment end address is to be changed.

Parameters:

- **`s`** (`segment_t *`) – The segment.
- **`new_end`** (`ea_t`) – New end address.
- **`segmod_flags`** (`int`) – Segment modification flags.

#### changing_segm_name

```
changing_segm_name(s: 'segment_t *', oldname: str) -> None

```

Segment name is being changed.

Parameters:

- **`s`** (`segment_t *`) – The segment whose name is changing.
- **`oldname`** (`str`) – The old segment name.

#### changing_segm_start

```
changing_segm_start(
    s: 'segment_t *', new_start: ea_t, segmod_flags: int
) -> None

```

Segment start address is to be changed.

Parameters:

- **`s`** (`segment_t *`) – The segment.
- **`new_start`** (`ea_t`) – New start address.
- **`segmod_flags`** (`int`) – Segment modification flags.

#### changing_ti

```
changing_ti(
    ea: ea_t,
    new_type: 'type_t const *',
    new_fnames: 'p_list const *',
) -> None

```

An item typestring (c/c++ prototype) is to be changed.

Parameters:

- **`ea`** (`ea_t`) – Address.
- **`new_type`** (`type_t const *`) – New type.
- **`new_fnames`** (`p_list const *`) – New field names.

#### closebase

```
closebase() -> None

```

The database will be closed now.

#### cmt_changed

```
cmt_changed(ea: ea_t, repeatable_cmt: bool) -> None

```

An item comment has been changed.

Parameters:

- **`ea`** (`ea_t`) – Address of the item.
- **`repeatable_cmt`** (`bool`) – True if the comment is repeatable.

#### compiler_changed

```
compiler_changed(adjust_inf_fields: bool) -> None

```

The kernel has changed the compiler information (idainfo::cc structure; get_abi_name).

Parameters:

- **`adjust_inf_fields`** (`bool`) – May change inf fields.

#### deleting_func

```
deleting_func(pfn: 'func_t *') -> None

```

The kernel is about to delete a function.

Parameters:

- **`pfn`** (`func_t *`) – The function that will be deleted.

#### deleting_func_tail

```
deleting_func_tail(pfn: 'func_t *', tail: range_t) -> None

```

A function tail chunk is to be removed.

Parameters:

- **`pfn`** (`func_t *`) – The function from which the tail will be removed.
- **`tail`** (`range_t`) – The tail range to be removed.

#### deleting_segm

```
deleting_segm(start_ea: ea_t) -> None

```

A segment is to be deleted.

Parameters:

- **`start_ea`** (`ea_t`) – Start address of the segment to delete.

#### deleting_tryblks

```
deleting_tryblks(range: range_t) -> None

```

About to delete tryblk information in given range.

Parameters:

- **`range`** (`range_t`) – The range from which try blocks will be deleted.

#### destroyed_items

```
destroyed_items(
    ea1: ea_t, ea2: ea_t, will_disable_range: bool
) -> None

```

Instructions/data have been destroyed in \[ea1, ea2).

Parameters:

- **`ea1`** (`ea_t`) – Start address of destroyed range.
- **`ea2`** (`ea_t`) – End address of destroyed range.
- **`will_disable_range`** (`bool`) – True if the range will be disabled.

#### determined_main

```
determined_main(main: ea_t) -> None

```

The main() function has been determined.

Parameters:

- **`main`** (`ea_t`) – Address of the main() function.

#### dirtree_link

```
dirtree_link(
    dt: 'dirtree_t *', path: str, link: bool
) -> None

```

Dirtree: an item has been linked/unlinked.

Parameters:

- **`dt`** (`dirtree_t`) – The dirtree object.
- **`path`** (`str`) – Path of the item.
- **`link`** (`bool`) – True if linked, False if unlinked.

#### dirtree_mkdir

```
dirtree_mkdir(dt: 'dirtree_t *', path: str) -> None

```

Dirtree: a directory has been created.

Parameters:

- **`dt`** (`dirtree_t`) – The dirtree object.
- **`path`** (`str`) – Path to the created directory.

#### dirtree_move

```
dirtree_move(
    dt: 'dirtree_t *', _from: str, to: str
) -> None

```

Dirtree: a directory or item has been moved.

Parameters:

- **`dt`** (`dirtree_t`) – The dirtree object.
- **`_from`** (`str`) – Source path.
- **`to`** (`str`) – Destination path.

#### dirtree_rank

```
dirtree_rank(
    dt: 'dirtree_t *', path: str, rank: size_t
) -> None

```

Dirtree: a directory or item rank has been changed.

Parameters:

- **`dt`** (`dirtree_t`) – The dirtree object.
- **`path`** (`str`) – Path of the directory or item.
- **`rank`** (`size_t`) – New rank value.

#### dirtree_rmdir

```
dirtree_rmdir(dt: 'dirtree_t *', path: str) -> None

```

Dirtree: a directory has been deleted.

Parameters:

- **`dt`** (`dirtree_t`) – The dirtree object.
- **`path`** (`str`) – Path to the deleted directory.

#### dirtree_rminode

```
dirtree_rminode(dt: 'dirtree_t *', inode: inode_t) -> None

```

Dirtree: an inode became unavailable.

#### dirtree_segm_moved

```
dirtree_segm_moved(dt: 'dirtree_t *') -> None

```

Dirtree: inodes were changed due to a segment movement or a program rebasing.

#### extlang_changed

```
extlang_changed(
    kind: int, el: 'extlang_t *', idx: int
) -> None

```

The list of extlangs or the default extlang was changed.

Parameters:

- **`kind`** (`int`) – 0: extlang installed, 1: extlang removed, 2: default extlang changed.
- **`el`** (`extlang_t *`) – Pointer to the extlang affected.
- **`idx`** (`int`) – Extlang index.

#### extra_cmt_changed

```
extra_cmt_changed(
    ea: ea_t, line_idx: int, cmt: str
) -> None

```

An extra comment has been changed.

Parameters:

- **`ea`** (`ea_t`) – Address of the item.
- **`line_idx`** (`int`) – Line index of the comment.
- **`cmt`** (`str`) – The comment text.

#### flow_chart_created

```
flow_chart_created(fc: qflow_chart_t) -> None

```

GUI has retrieved a function flow chart. Plugins may modify the flow chart in this callback.

Parameters:

- **`fc`** (`qflow_chart_t *`) – Function flow chart.

#### frame_created

```
frame_created(func_ea: ea_t) -> None

```

A function frame has been created.

#### frame_deleted

```
frame_deleted(pfn: 'func_t *') -> None

```

The kernel has deleted a function frame.

Parameters:

- **`pfn`** (`func_t *`) – The function whose frame was deleted.

#### frame_expanded

```
frame_expanded(
    func_ea: ea_t, udm_tid: tid_t, delta: adiff_t
) -> None

```

A frame type has been expanded or shrunk.

#### frame_udm_changed

```
frame_udm_changed(
    func_ea: ea_t,
    udm_tid: tid_t,
    udmold: udm_t,
    udmnew: udm_t,
) -> None

```

Frame member has been changed.

#### frame_udm_created

```
frame_udm_created(func_ea: ea_t, udm: udm_t) -> None

```

Frame member has been added.

#### frame_udm_deleted

```
frame_udm_deleted(
    func_ea: ea_t, udm_tid: tid_t, udm: udm_t
) -> None

```

Frame member has been deleted.

#### frame_udm_renamed

```
frame_udm_renamed(
    func_ea: ea_t, udm: udm_t, oldname: str
) -> None

```

Frame member has been renamed.

#### func_added

```
func_added(pfn: 'func_t *') -> None

```

The kernel has added a function.

Parameters:

- **`pfn`** (`func_t *`) – The function that was added.

#### func_deleted

```
func_deleted(func_ea: ea_t) -> None

```

A function has been deleted.

Parameters:

- **`func_ea`** (`ea_t`) – Address of the deleted function.

#### func_noret_changed

```
func_noret_changed(pfn: 'func_t *') -> None

```

FUNC_NORET bit has been changed.

Parameters:

- **`pfn`** (`func_t *`) – The function whose noreturn bit was changed.

#### func_tail_appended

```
func_tail_appended(
    pfn: 'func_t *', tail: 'func_t *'
) -> None

```

A function tail chunk has been appended.

Parameters:

- **`pfn`** (`func_t *`) – The function to which the tail was appended.
- **`tail`** (`func_t *`) – The tail function chunk.

#### func_tail_deleted

```
func_tail_deleted(pfn: 'func_t *', tail_ea: ea_t) -> None

```

A function tail chunk has been removed.

Parameters:

- **`pfn`** (`func_t *`) – The function from which the tail was removed.
- **`tail_ea`** (`ea_t`) – The start address of the tail that was deleted.

#### func_updated

```
func_updated(pfn: 'func_t *') -> None

```

The kernel has updated a function.

Parameters:

- **`pfn`** (`func_t *`) – The function that was updated.

#### hook

```
hook() -> None

```

Hook (activate) the event handlers.

#### idasgn_loaded

```
idasgn_loaded(short_sig_name: str) -> None

```

FLIRT signature has been loaded for normal processing (not for recognition of startup sequences).

Parameters:

- **`short_sig_name`** (`str`) – The short signature name.

#### idasgn_matched_ea

```
idasgn_matched_ea(
    ea: ea_t, name: str, lib_name: str
) -> None

```

A FLIRT match has been found.

#### item_color_changed

```
item_color_changed(ea: ea_t, color: bgcolor_t) -> None

```

An item color has been changed.

Parameters:

- **`ea`** (`ea_t`) – Address of the item.
- **`color`** (`bgcolor_t`) – The new color. If color == DEFCOLOR, then the color is deleted.

#### kernel_config_loaded

```
kernel_config_loaded(pass_number: int) -> None

```

This event is issued when ida.cfg is parsed.

Parameters:

- **`pass_number`** (`int`) – Pass number.

#### loader_finished

```
loader_finished(
    li: 'linput_t *', neflags: uint16, filetypename: str
) -> None

```

External file loader finished its work. Use this event to augment the existing loader functionality.

Parameters:

- **`li`** (`linput_t *`) – Loader input pointer.
- **`neflags`** (`uint16`) – Load file flags.
- **`filetypename`** (`str`) – File type name.

#### local_type_renamed

```
local_type_renamed(
    ordinal: int, oldname: str, newname: str
) -> None

```

Local type has been renamed.

#### local_types_changed

```
local_types_changed(
    ltc: local_type_change_t, ordinal: int, name: str
) -> None

```

Local types have been changed.

#### log

```
log(msg: str = '') -> None

```

Utility method to optionally log called hooks and their parameters.

#### lt_edm_changed

```
lt_edm_changed(
    enumname: str,
    edm_tid: tid_t,
    edmold: edm_t,
    edmnew: edm_t,
) -> None

```

Local type enum member has been changed.

#### lt_edm_created

```
lt_edm_created(enumname: str, edm: edm_t) -> None

```

Local type enum member has been added.

#### lt_edm_deleted

```
lt_edm_deleted(
    enumname: str, edm_tid: tid_t, edm: edm_t
) -> None

```

Local type enum member has been deleted.

#### lt_edm_renamed

```
lt_edm_renamed(
    enumname: str, edm: edm_t, oldname: str
) -> None

```

Local type enum member has been renamed.

#### lt_udm_changed

```
lt_udm_changed(
    udtname: str,
    udm_tid: tid_t,
    udmold: udm_t,
    udmnew: udm_t,
) -> None

```

Local type UDT member has been changed.

#### lt_udm_created

```
lt_udm_created(udtname: str, udm: udm_t) -> None

```

Local type UDT member has been added.

#### lt_udm_deleted

```
lt_udm_deleted(
    udtname: str, udm_tid: tid_t, udm: udm_t
) -> None

```

Local type UDT member has been deleted.

#### lt_udm_renamed

```
lt_udm_renamed(
    udtname: str, udm: udm_t, oldname: str
) -> None

```

Local type UDT member has been renamed.

#### lt_udt_expanded

```
lt_udt_expanded(
    udtname: str, udm_tid: tid_t, delta: adiff_t
) -> None

```

A structure type has been expanded or shrunk.

#### make_code

```
make_code(insn: 'insn_t const *') -> None

```

An instruction is being created.

Parameters:

- **`insn`** (`insn_t const *`) – The instruction being created.

#### make_data

```
make_data(
    ea: ea_t, flags: flags64_t, tid: tid_t, len: asize_t
) -> None

```

A data item is being created.

Parameters:

- **`ea`** (`ea_t`) – Effective address.
- **`flags`** (`flags64_t`) – Item flags.
- **`tid`** (`tid_t`) – Type ID.
- **`len`** (`asize_t`) – Length in bytes.

#### op_ti_changed

```
op_ti_changed(
    ea: ea_t,
    n: int,
    type: 'type_t const *',
    fnames: 'p_list const *',
) -> None

```

An operand typestring (c/c++ prototype) has been changed.

Parameters:

- **`ea`** (`ea_t`) – Address.
- **`n`** (`int`) – Operand number.
- **`type`** (`type_t const *`) – Type.
- **`fnames`** (`p_list const *`) – Field names.

#### op_type_changed

```
op_type_changed(ea: ea_t, n: int) -> None

```

An operand type (offset, hex, etc...) has been set or deleted.

Parameters:

- **`ea`** (`ea_t`) – Address.
- **`n`** (`int`) – Operand number (eventually OR'ed with OPND_OUTER or OPND_ALL).

#### range_cmt_changed

```
range_cmt_changed(
    kind: range_kind_t,
    a: range_t,
    cmt: str,
    repeatable: bool,
) -> None

```

Range comment has been changed.

Parameters:

- **`kind`** (`range_kind_t`) – Kind of the range.
- **`a`** (`range_t`) – The range.
- **`cmt`** (`str`) – The comment text.
- **`repeatable`** (`bool`) – True if the comment is repeatable.

#### renamed

```
renamed(
    ea: ea_t, new_name: str, local_name: bool, old_name: str
) -> None

```

The kernel has renamed a byte. See also the rename event.

Parameters:

- **`ea`** (`ea_t`) – Effective address of the renamed item.
- **`new_name`** (`str`) – New name (can be None).
- **`local_name`** (`bool`) – Whether the new name is local.
- **`old_name`** (`str`) – Old name (can be None).

#### savebase

```
savebase() -> None

```

The database is being saved.

#### segm_added

```
segm_added(s: 'segment_t *') -> None

```

A new segment has been created.

Parameters:

- **`s`** (`segment_t *`) – The newly created segment. See also adding_segm.

#### segm_attrs_updated

```
segm_attrs_updated(s: 'segment_t *') -> None

```

Segment attributes have been changed.

Parameters:

- **`s`** (`segment_t *`) – The segment whose attributes have been updated.

#### segm_class_changed

```
segm_class_changed(s: 'segment_t *', sclass: str) -> None

```

Segment class has been changed.

Parameters:

- **`s`** (`segment_t *`) – The segment whose class has changed.
- **`sclass`** (`str`) – The new segment class.

#### segm_deleted

```
segm_deleted(
    start_ea: ea_t, end_ea: ea_t, flags: int
) -> None

```

A segment has been deleted.

Parameters:

- **`start_ea`** (`ea_t`) – Start address of the deleted segment.
- **`end_ea`** (`ea_t`) – End address of the deleted segment.
- **`flags`** (`int`) – Segment flags.

#### segm_end_changed

```
segm_end_changed(s: 'segment_t *', oldend: ea_t) -> None

```

Segment end address has been changed.

Parameters:

- **`s`** (`segment_t *`) – The segment.
- **`oldend`** (`ea_t`) – Old end address.

#### segm_moved

```
segm_moved(
    _from: ea_t,
    to: ea_t,
    size: asize_t,
    changed_netmap: bool,
) -> None

```

Segment has been moved.

Parameters:

- **`_from`** (`ea_t`) – Original segment start address.
- **`to`** (`ea_t`) – New segment start address.
- **`size`** (`asize_t`) – Size of the segment.
- **`changed_netmap`** (`bool`) – See also idb_event::allsegs_moved.

#### segm_name_changed

```
segm_name_changed(s: 'segment_t *', name: str) -> None

```

Segment name has been changed.

Parameters:

- **`s`** (`segment_t *`) – The segment whose name has changed.
- **`name`** (`str`) – The new segment name.

#### segm_start_changed

```
segm_start_changed(
    s: 'segment_t *', oldstart: ea_t
) -> None

```

Segment start address has been changed.

Parameters:

- **`s`** (`segment_t *`) – The segment.
- **`oldstart`** (`ea_t`) – Old start address.

#### set_func_end

```
set_func_end(pfn: 'func_t *', new_end: ea_t) -> None

```

Function chunk end address will be changed.

Parameters:

- **`pfn`** (`func_t *`) – The function to modify.
- **`new_end`** (`ea_t`) – The new end address.

#### set_func_start

```
set_func_start(pfn: 'func_t *', new_start: ea_t) -> None

```

Function chunk start address will be changed.

Parameters:

- **`pfn`** (`func_t *`) – The function to modify.
- **`new_start`** (`ea_t`) – The new start address.

#### sgr_changed

```
sgr_changed(
    start_ea: ea_t,
    end_ea: ea_t,
    regnum: int,
    value: sel_t,
    old_value: sel_t,
    tag: uchar,
) -> None

```

The kernel has changed a segment register value.

Parameters:

- **`start_ea`** (`ea_t`) – Start address of the affected range.
- **`end_ea`** (`ea_t`) – End address of the affected range.
- **`regnum`** (`int`) – Register number.
- **`value`** (`sel_t`) – New value.
- **`old_value`** (`sel_t`) – Previous value.
- **`tag`** (`uchar`) – Segment register range tag.

#### sgr_deleted

```
sgr_deleted(
    start_ea: ea_t, end_ea: ea_t, regnum: int
) -> None

```

The kernel has deleted a segment register value.

Parameters:

- **`start_ea`** (`ea_t`) – Start address of the range.
- **`end_ea`** (`ea_t`) – End address of the range.
- **`regnum`** (`int`) – Register number.

#### stkpnts_changed

```
stkpnts_changed(pfn: 'func_t *') -> None

```

Stack change points have been modified.

Parameters:

- **`pfn`** (`func_t *`) – The function whose stack points were modified.

#### tail_owner_changed

```
tail_owner_changed(
    tail: 'func_t *', owner_func: ea_t, old_owner: ea_t
) -> None

```

A tail chunk owner has been changed.

Parameters:

- **`tail`** (`func_t *`) – The tail function chunk.
- **`owner_func`** (`ea_t`) – The new owner function address.
- **`old_owner`** (`ea_t`) – The previous owner function address.

#### thunk_func_created

```
thunk_func_created(pfn: 'func_t *') -> None

```

A thunk bit has been set for a function.

Parameters:

- **`pfn`** (`func_t *`) – The thunk function created.

#### ti_changed

```
ti_changed(
    ea: ea_t,
    type: 'type_t const *',
    fnames: 'p_list const *',
) -> None

```

An item typestring (c/c++ prototype) has been changed.

Parameters:

- **`ea`** (`ea_t`) – Address.
- **`type`** (`type_t const *`) – Type.
- **`fnames`** (`p_list const *`) – Field names.

#### tryblks_updated

```
tryblks_updated(tbv: 'tryblks_t const *') -> None

```

Updated tryblk information.

Parameters:

- **`tbv`** (`tryblks_t const *`) – The updated try blocks.

#### unhook

```
unhook() -> None

```

Un-hook (de-activate) the event handlers.

#### updating_tryblks

```
updating_tryblks(tbv: 'tryblks_t const *') -> None

```

About to update tryblk information.

Parameters:

- **`tbv`** (`tryblks_t const *`) – The try blocks being updated.

#### upgraded

```
upgraded(_from: int) -> None

```

The database has been upgraded and the receiver can upgrade its info as well.

### DebuggerHooks

```
DebuggerHooks()

```

Bases: `_BaseHooks`, `DBG_Hooks`

Convenience class for debugger events handling.

Methods:

- **`dbg_bpt`** – A user defined breakpoint was reached.
- **`dbg_bpt_changed`** – Breakpoint has been changed.
- **`dbg_exception`** – Debug exception.
- **`dbg_finished_loading_bpts`** – Finished loading breakpoint info from idb.
- **`dbg_information`** – Debug information.
- **`dbg_library_load`** – Called on library load.
- **`dbg_library_unload`** – Called on library unload.
- **`dbg_process_attach`** – Called on process attached.
- **`dbg_process_detach`** – Called on process detach.
- **`dbg_process_exit`** – Called on process exit.
- **`dbg_process_start`** – Called on process started.
- **`dbg_request_error`** – An error occurred during the processing of a request.
- **`dbg_run_to`** – Called on run to.
- **`dbg_started_loading_bpts`** – Started loading breakpoint info from idb.
- **`dbg_step_into`** – Called on step into.
- **`dbg_step_over`** – Called on step over.
- **`dbg_step_until_ret`** – Called on step until ret.
- **`dbg_suspend_process`** – The process is now suspended.
- **`dbg_thread_exit`** – Called on thread exit.
- **`dbg_thread_start`** – Called on thread start.
- **`dbg_trace`** – A step occurred (one instruction was executed).
- **`hook`** – Hook (activate) the event handlers.
- **`log`** – Utility method to optionally log called hooks and their parameters.
- **`unhook`** – Un-hook (de-activate) the event handlers.

Attributes:

- **`database`** (`Database`) – Get the database reference, guaranteed to be non-None when called from
- **`is_hooked`** (`bool`) –
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

#### is_hooked

```
is_hooked: bool

```

#### m_database

```
m_database = database

```

#### dbg_bpt

```
dbg_bpt(tid: thid_t, bptea: ea_t) -> int

```

A user defined breakpoint was reached. Args: tid (thid_t): Thread ID. bptea (ea_t): Breakpoint address.

#### dbg_bpt_changed

```
dbg_bpt_changed(bptev_code: int, bpt: bpt_t) -> None

```

Breakpoint has been changed. Args: bptev_code (int): Breakpoint modification events. bpt (bpt_t): Breakpoint.

#### dbg_exception

```
dbg_exception(
    pid: pid_t,
    tid: thid_t,
    ea: ea_t,
    exc_code: int,
    exc_can_cont: bool,
    exc_ea: ea_t,
    exc_info: str,
) -> int

```

Debug exception.

Parameters:

- **`pid`** (`pid_t`) – Process ID.
- **`tid`** (`thid_t`) – Thread ID.
- **`ea`** (`ea_t`) – Address.
- **`exc_code`** (`int`) – Exception code.
- **`exc_can_cont`** (`bool`) – Can continue.
- **`exc_ea`** (`ea_t`) – Exception address.
- **`exc_info`** (`str`) – Exception info.

#### dbg_finished_loading_bpts

```
dbg_finished_loading_bpts() -> None

```

Finished loading breakpoint info from idb.

#### dbg_information

```
dbg_information(
    pid: pid_t, tid: thid_t, ea: ea_t, info: str
) -> None

```

Debug information.

Parameters:

- **`pid`** (`pid_t`) – Process ID.
- **`tid`** (`thid_t`) – Thread ID.
- **`ea`** (`ea_t`) – Address.
- **`info`** (`str`) – Info string.

#### dbg_library_load

```
dbg_library_load(
    pid: pid_t,
    tid: thid_t,
    ea: ea_t,
    modinfo_name: str,
    modinfo_base: ea_t,
    modinfo_size: asize_t,
) -> None

```

Called on library load.

Parameters:

- **`pid`** (`pid_t`) – Process ID.
- **`tid`** (`thid_t`) – Thread ID.
- **`ea`** (`ea_t`) – Address.
- **`modinfo_name`** (`str`) – Module info name.
- **`modinfo_base`** (`ea_t`) – Module info base address.
- **`modinfo_size`** (`asize_t`) – Module info size.

#### dbg_library_unload

```
dbg_library_unload(
    pid: pid_t, tid: thid_t, ea: ea_t, info: str
) -> None

```

Called on library unload.

Parameters:

- **`pid`** (`pid_t`) – Process ID.
- **`tid`** (`thid_t`) – Thread ID.
- **`ea`** (`ea_t`) – Address.
- **`info`** (`str`) – Info string.

#### dbg_process_attach

```
dbg_process_attach(
    pid: pid_t,
    tid: thid_t,
    ea: ea_t,
    modinfo_name: str,
    modinfo_base: ea_t,
    modinfo_size: asize_t,
) -> None

```

Called on process attached. Args: pid (pid_t): Process ID. tid (thid_t): Thread ID. ea (ea_t): Address. modinfo_name (str): Module info name. modinfo_base (ea_t): Module info base address. modinfo_size (asize_t): Module info size.

#### dbg_process_detach

```
dbg_process_detach(
    pid: pid_t, tid: thid_t, ea: ea_t
) -> None

```

Called on process detach.

Parameters:

- **`pid`** (`pid_t`) – Process ID.
- **`tid`** (`thid_t`) – Thread ID.
- **`ea`** (`ea_t`) – Address.

#### dbg_process_exit

```
dbg_process_exit(
    pid: pid_t, tid: thid_t, ea: ea_t, exit_code: int
) -> None

```

Called on process exit.

Parameters:

- **`pid`** (`pid_t`) – Process ID.
- **`tid`** (`thid_t`) – Thread ID.
- **`ea`** (`ea_t`) – Address.
- **`exit_code`** (`int`) – Exit code.

#### dbg_process_start

```
dbg_process_start(
    pid: pid_t,
    tid: thid_t,
    ea: ea_t,
    modinfo_name: str,
    modinfo_base: ea_t,
    modinfo_size: asize_t,
) -> None

```

Called on process started.

Parameters:

- **`pid`** (`pid_t`) – Process ID.
- **`tid`** (`thid_t`) – Thread ID.
- **`ea`** (`ea_t`) – Address.
- **`modinfo_name`** (`str`) – Module info name.
- **`modinfo_base`** (`ea_t`) – Module info base address.
- **`modinfo_size`** (`asize_t`) – Module info size.

#### dbg_request_error

```
dbg_request_error(
    failed_command: int, failed_dbg_notification: int
) -> None

```

An error occurred during the processing of a request. Args: failed_command (ui_notification_t): The failed command. failed_dbg_notification (dbg_notification_t): The failed debugger notification.

#### dbg_run_to

```
dbg_run_to(pid: pid_t, tid: thid_t, ea: ea_t) -> None

```

Called on run to.

#### dbg_started_loading_bpts

```
dbg_started_loading_bpts() -> None

```

Started loading breakpoint info from idb.

#### dbg_step_into

```
dbg_step_into() -> None

```

Called on step into.

#### dbg_step_over

```
dbg_step_over() -> None

```

Called on step over.

#### dbg_step_until_ret

```
dbg_step_until_ret() -> None

```

Called on step until ret.

#### dbg_suspend_process

```
dbg_suspend_process() -> None

```

The process is now suspended.

#### dbg_thread_exit

```
dbg_thread_exit(
    pid: pid_t, tid: thid_t, ea: ea_t, exit_code: int
) -> None

```

Called on thread exit.

Parameters:

- **`pid`** (`pid_t`) – Process ID.
- **`tid`** (`thid_t`) – Thread ID.
- **`ea`** (`ea_t`) – Address.
- **`exit_code`** (`int`) – Exit code.

#### dbg_thread_start

```
dbg_thread_start(pid: pid_t, tid: thid_t, ea: ea_t) -> None

```

Called on thread start.

Parameters:

- **`pid`** (`pid_t`) – Process ID.
- **`tid`** (`thid_t`) – Thread ID.
- **`ea`** (`ea_t`) – Address.

#### dbg_trace

```
dbg_trace(tid: thid_t, ip: ea_t) -> int

```

A step occurred (one instruction was executed). This event notification is only generated if step tracing is enabled. Args: tid (thid_t): Thread ID. ip (ea_t): Current instruction pointer. Usually points after the executed instruction. Returns: int: 1 = do not log this trace event, 0 = log it.

#### hook

```
hook() -> None

```

Hook (activate) the event handlers.

#### log

```
log(msg: str = '') -> None

```

Utility method to optionally log called hooks and their parameters.

#### unhook

```
unhook() -> None

```

Un-hook (de-activate) the event handlers.

### DecompilerHooks

```
DecompilerHooks()

```

Bases: `_BaseHooks`, `Hexrays_Hooks`

Convenience class for decompiler events handling.

Methods:

- **`begin_inlining`** – Starting to inline outlined functions.
- **`build_callinfo`** – Analyzing a call instruction.
- **`callinfo_built`** – A call instruction has been analyzed.
- **`calls_done`** – All calls have been analyzed.
- **`close_pseudocode`** – Pseudocode view is being closed.
- **`cmt_changed`** – Comment got changed.
- **`collect_warnings`** – Collect warning messages from plugins.
- **`combine`** – Trying to combine instructions of a basic block.
- **`create_hint`** – Create a hint for the current item.
- **`curpos`** – Current cursor position has been changed.
- **`double_click`** – Mouse double click.
- **`flowchart`** – Flowchart has been generated.
- **`func_printed`** – Function text has been generated.
- **`glbopt`** – Global optimization has been finished.
- **`hook`** – Hook (activate) the event handlers.
- **`inlined_func`** – A set of ranges got inlined.
- **`inlining_func`** – A set of ranges is going to be inlined.
- **`interr`** – Internal error has occurred.
- **`keyboard`** – Keyboard has been hit.
- **`locopt`** – Basic block level optimization has been finished.
- **`log`** – Utility method to optionally log called hooks and their parameters.
- **`lvar_cmt_changed`** – Local variable comment got changed.
- **`lvar_mapping_changed`** – Local variable mapping got changed.
- **`lvar_name_changed`** – Local variable got renamed.
- **`lvar_type_changed`** – Local variable type got changed.
- **`maturity`** – Ctree maturity level is being changed.
- **`mba_maturity`** – Maturity level of an MBA was changed.
- **`microcode`** – Microcode has been generated.
- **`open_pseudocode`** – New pseudocode view has been opened.
- **`populating_popup`** – Populating popup menu. We can add menu items now.
- **`pre_structural`** – Structure analysis is starting.
- **`prealloc`** – Local variables: preallocation step begins.
- **`preoptimized`** – Microcode has been preoptimized.
- **`print_func`** – Printing ctree and generating text.
- **`prolog`** – Prolog analysis has been finished.
- **`refresh_pseudocode`** – Existing pseudocode text has been refreshed.
- **`resolve_stkaddrs`** – The optimizer is about to resolve stack addresses.
- **`right_click`** – Mouse right click.
- **`stkpnts`** – SP change points have been calculated.
- **`structural`** – Structural analysis has been finished.
- **`switch_pseudocode`** – Existing pseudocode view has been reloaded with a new function.
- **`text_ready`** – Decompiled text is ready.
- **`unhook`** – Un-hook (de-activate) the event handlers.

Attributes:

- **`database`** (`Database`) – Get the database reference, guaranteed to be non-None when called from
- **`is_hooked`** (`bool`) –
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

#### is_hooked

```
is_hooked: bool

```

#### m_database

```
m_database = database

```

#### begin_inlining

```
begin_inlining(cdg: codegen_t, decomp_flags: int) -> int

```

Starting to inline outlined functions. This is an opportunity to inline other ranges. Args: cdg (codegen_t): The code generator object. decomp_flags (int): Decompiler flags. Returns: int: Microcode error codes code.

#### build_callinfo

```
build_callinfo(
    blk: mblock_t, type: tinfo_t
) -> 'PyObject *'

```

Analyzing a call instruction. Args: blk (mblock_t): Block; blk->tail is the call. type (tinfo_t): Buffer for the output type.

#### callinfo_built

```
callinfo_built(blk: mblock_t) -> int

```

A call instruction has been analyzed. Args: blk (mblock_t): Block; blk->tail is the call.

#### calls_done

```
calls_done(mba: mba_t) -> int

```

All calls have been analyzed. This event is generated immediately after analyzing all calls, before any optimizations, call unmerging and block merging. Args: mba (mba_t): The microcode basic block array.

#### close_pseudocode

```
close_pseudocode(vu: vdui_t) -> int

```

Pseudocode view is being closed. Args: vu (vdui_t): The pseudocode UI object. Returns: int: 1 if the event has been handled.

#### cmt_changed

```
cmt_changed(
    cfunc: cfunc_t, loc: treeloc_t, cmt: str
) -> int

```

Comment got changed. Args: cfunc (cfunc_t): The decompiled function. loc (treeloc_t): The tree location of the comment. cmt (str): The new comment string. Returns: int: 1 if the event has been handled.

#### collect_warnings

```
collect_warnings(cfunc: cfunc_t) -> int

```

Collect warning messages from plugins. These warnings will be displayed at the function header, after the user-defined comments. Args: cfunc (cfunc_t): The cfunc object. Returns: int: Microcode error codes code.

#### combine

```
combine(blk: mblock_t, insn: minsn_t) -> int

```

Trying to combine instructions of a basic block. Args: blk (mblock_t): The basic block. insn (minsn_t): The instruction. Returns: int: 1 if combined the current instruction with a preceding one, -1 if the instruction should not be combined, 0 otherwise.

#### create_hint

```
create_hint(vu: vdui_t) -> 'PyObject *'

```

Create a hint for the current item. Args: vu (vdui_t): The pseudocode UI object. Returns: PyObject: 0 to continue collecting hints with other subscribers, 1 to stop collecting hints.

#### curpos

```
curpos(vu: vdui_t) -> int

```

Current cursor position has been changed. For example, by left-clicking or using keyboard. Args: vu (vdui_t): The pseudocode UI object. Returns: int: 1 if the event has been handled.

#### double_click

```
double_click(vu: vdui_t, shift_state: int) -> int

```

Mouse double click. Args: vu (vdui_t): The pseudocode UI object. shift_state (int): Keyboard shift state. Returns: int: 1 if the event has been handled.

#### flowchart

```
flowchart(
    fc: qflow_chart_t,
    mba: mba_t,
    reachable_blocks: bitset_t,
    decomp_flags: int,
) -> int

```

Flowchart has been generated. Args: fc (qflow_chart_t): The flowchart object. mba (mba_t): The microcode basic block array. reachable_blocks (bitset_t): Set of reachable blocks. decomp_flags (int): Decompiler flags. Returns: int: Microcode error code.

#### func_printed

```
func_printed(cfunc: cfunc_t) -> int

```

Function text has been generated. Plugins may modify the text in cfunc_t::sv. However, it is too late to modify the ctree or microcode. The text uses regular color codes (see lines.hpp). COLOR_ADDR is used to store pointers to ctree items. Args: cfunc (cfunc_t): The cfunc object.

#### glbopt

```
glbopt(mba: mba_t) -> int

```

Global optimization has been finished. If microcode is modified, MERR_LOOP must be returned. It will cause a complete restart of the optimization. Args: mba (mba_t): The microcode basic block array. Returns: int: Microcode error codes code.

#### hook

```
hook() -> None

```

Hook (activate) the event handlers.

#### inlined_func

```
inlined_func(
    cdg: codegen_t,
    blk: int,
    mbr: mba_ranges_t,
    i1: int,
    i2: int,
) -> int

```

A set of ranges got inlined. Args: cdg (codegen_t): The code generator object. blk (int): The block containing call/jump to inline. mbr (mba_ranges_t): The range to inline. i1 (int): Block number of the first inlined block. i2 (int): Block number of the last inlined block (excluded). Returns: int: Microcode error codes code.

#### inlining_func

```
inlining_func(
    cdg: codegen_t, blk: int, mbr: mba_ranges_t
) -> int

```

A set of ranges is going to be inlined. Args: cdg (codegen_t): The code generator object. blk (int): The block containing call/jump to inline. mbr (mba_ranges_t): The range to inline. Returns: int: Microcode error codes code.

#### interr

```
interr(errcode: int) -> int

```

Internal error has occurred. Args: errcode (int): The error code.

#### keyboard

```
keyboard(
    vu: vdui_t, key_code: int, shift_state: int
) -> int

```

Keyboard has been hit. Args: vu (vdui_t): The pseudocode UI object. key_code (int): Virtual key code. shift_state (int): Keyboard shift state. Returns: int: 1 if the event has been handled.

#### locopt

```
locopt(mba: mba_t) -> int

```

Basic block level optimization has been finished. Args: mba (mba_t): The microcode basic block array. Returns: int: Microcode error codes code.

#### log

```
log(msg: str = '') -> None

```

Utility method to optionally log called hooks and their parameters.

#### lvar_cmt_changed

```
lvar_cmt_changed(vu: vdui_t, v: lvar_t, cmt: str) -> int

```

Local variable comment got changed. Args: vu (vdui_t): The pseudocode UI object. v (lvar_t): The local variable object. cmt (str): The new comment. Note: It is possible to read/write user settings for lvars directly from the idb. Returns: int: 1 if the event has been handled.

#### lvar_mapping_changed

```
lvar_mapping_changed(
    vu: vdui_t, frm: lvar_t, to: lvar_t
) -> int

```

Local variable mapping got changed. Args: vu (vdui_t): The pseudocode UI object. frm (lvar_t): The original local variable. to (lvar_t): The mapped local variable. Note: It is possible to read/write user settings for lvars directly from the idb. Returns: int: 1 if the event has been handled.

#### lvar_name_changed

```
lvar_name_changed(
    vu: vdui_t, v: lvar_t, name: str, is_user_name: bool
) -> int

```

Local variable got renamed. Args: vu (vdui_t): The pseudocode UI object. v (lvar_t): The local variable object. name (str): The new variable name. is_user_name (bool): True if this is a user-provided name. Note: It is possible to read/write user settings for lvars directly from the idb. Returns: int: 1 if the event has been handled.

#### lvar_type_changed

```
lvar_type_changed(
    vu: vdui_t, v: lvar_t, tinfo: tinfo_t
) -> int

```

Local variable type got changed. Args: vu (vdui_t): The pseudocode UI object. v (lvar_t): The local variable object. tinfo (tinfo_t): The new type info. Note: It is possible to read/write user settings for lvars directly from the idb. Returns: int: 1 if the event has been handled.

#### maturity

```
maturity(
    cfunc: cfunc_t, new_maturity: ctree_maturity_t
) -> int

```

Ctree maturity level is being changed. Args: cfunc (cfunc_t): The cfunc object. new_maturity (ctree_maturity_t): New ctree maturity level.

#### mba_maturity

```
mba_maturity(mba: mba_t, reqmat: mba_maturity_t) -> int

```

Maturity level of an MBA was changed. Args: mba (mba_t): The microcode block. reqmat (mba_maturity_t): Requested maturity level. Returns: int: Microcode error codes code.

#### microcode

```
microcode(mba: mba_t) -> int

```

Microcode has been generated. Args: mba (mba_t): The microcode basic block array. Returns: int: Microcode error codes code.

#### open_pseudocode

```
open_pseudocode(vu: vdui_t) -> int

```

New pseudocode view has been opened. Args: vu (vdui_t): The pseudocode UI object. Returns: int: Microcode error codes code.

#### populating_popup

```
populating_popup(
    widget: 'TWidget *',
    popup_handle: 'TPopupMenu *',
    vu: vdui_t,
) -> int

```

Populating popup menu. We can add menu items now. Args: widget (TWidget): The widget object. popup_handle (TPopupMenu): The popup menu handle. vu (vdui_t): The pseudocode UI object. Returns: int: 1 if the event has been handled.

#### pre_structural

```
pre_structural(
    ct: 'control_graph_t *',
    cfunc: cfunc_t,
    g: simple_graph_t,
) -> int

```

Structure analysis is starting. Args: ct (control_graph_t \*): Control graph (input/output). cfunc (cfunc_t): The current function (input). g (simple_graph_t): Control flow graph (input). Returns: int: Microcode error codes code; MERR_BLOCK means that the analysis has been performed by a plugin.

#### prealloc

```
prealloc(mba: mba_t) -> int

```

Local variables: preallocation step begins. Args: mba (mba_t): The microcode basic block array. This event may occur several times. Returns: int: 1 if microcode was modified, otherwise negative values are Microcode error codes.

#### preoptimized

```
preoptimized(mba: mba_t) -> int

```

Microcode has been preoptimized. Args: mba (mba_t): The microcode basic block array. Returns: int: Microcode error codes code.

#### print_func

```
print_func(cfunc: cfunc_t, vp: vc_printer_t) -> int

```

Printing ctree and generating text. It is forbidden to modify ctree at this event. Args: cfunc (cfunc_t): The cfunc object. vp (vc_printer_t): The vc_printer object. Returns: int: 1 if text has been generated by the plugin.

#### prolog

```
prolog(
    mba: mba_t,
    fc: qflow_chart_t,
    reachable_blocks: bitset_t,
    decomp_flags: int,
) -> int

```

Prolog analysis has been finished. Args: mba (mba_t): The microcode basic block array. fc (qflow_chart_t): The function's flowchart. reachable_blocks (bitset_t): Set of reachable blocks. decomp_flags (int): Decompiler flags. Returns: int: Microcode error codes code. This event is generated for each inlined range as well.

#### refresh_pseudocode

```
refresh_pseudocode(vu: vdui_t) -> int

```

Existing pseudocode text has been refreshed. Adding/removing pseudocode lines is forbidden in this event. Args: vu (vdui_t): The pseudocode UI object. See also hxe_text_ready, which happens earlier. Returns: int: Microcode error codes code.

#### resolve_stkaddrs

```
resolve_stkaddrs(mba: mba_t) -> int

```

The optimizer is about to resolve stack addresses. Args: mba (mba_t): The microcode basic block array.

#### right_click

```
right_click(vu: vdui_t) -> int

```

Mouse right click. Use hxe_populating_popup instead, in case you want to add items in the popup menu. Args: vu (vdui_t): The pseudocode UI object. Returns: int: 1 if the event has been handled.

#### stkpnts

```
stkpnts(mba: mba_t, *sps: 'stkpnts*t *') -> int

```

SP change points have been calculated. Args: mba (mba_t): The microcode basic block array. *sps (stkpnts*t \*): Stack pointer change points. Returns: int: Microcode error codes code. This event is generated for each inlined range as well.

#### structural

```
structural(ct: 'control_graph_t *') -> int

```

Structural analysis has been finished. Args: ct (control_graph_t \*): The control graph.

#### switch_pseudocode

```
switch_pseudocode(vu: vdui_t) -> int

```

Existing pseudocode view has been reloaded with a new function. Its text has not been refreshed yet, only cfunc and mba pointers are ready. Args: vu (vdui_t): The pseudocode UI object. Returns: int: Microcode error codes code.

#### text_ready

```
text_ready(vu: vdui_t) -> int

```

Decompiled text is ready. This event can be used to modify the output text (sv). Obsolete. Please use hxe_func_printed instead. Args: vu (vdui_t): The pseudocode UI object. Returns: int: 1 if the event has been handled.

#### unhook

```
unhook() -> None

```

Un-hook (de-activate) the event handlers.

### ProcessorHooks

```
ProcessorHooks()

```

Bases: `_BaseHooks`, `IDP_Hooks`

Convenience class for IDP (processor) events handling.

Methods:

- **`ev_add_cref`** – A code reference is being created.
- **`ev_add_dref`** – A data reference is being created.
- **`ev_adjust_argloc`** – Adjust argloc according to its type/size and platform endianess.
- **`ev_adjust_libfunc_ea`** – Called when a signature module has been matched against bytes in the database.
- **`ev_adjust_refinfo`** – Called from apply_fixup before converting operand to reference.
- **`ev_ana_insn`** – Analyze one instruction and fill the 'out' structure.
- **`ev_analyze_prolog`** – Analyzes function prolog/epilog and updates purge and function attributes.
- **`ev_arch_changed`** – The loader finished parsing arch-related info;
- **`ev_arg_addrs_ready`** – Argument address info is ready.
- **`ev_asm_installed`** – After setting a new assembler.
- **`ev_assemble`** – Assemble an instruction. Display a warning if an error is found.
- **`ev_auto_queue_empty`** – One analysis queue is empty.
- **`ev_calc_arglocs`** – Calculate function argument locations.
- **`ev_calc_cdecl_purged_bytes`** – Calculate number of purged bytes after call.
- **`ev_calc_next_eas`** – Calculate list of addresses the instruction in 'insn' may pass control to.
- **`ev_calc_purged_bytes`** – Calculate number of purged bytes by the given function type.
- **`ev_calc_retloc`** – Calculate return value location.
- **`ev_calc_spdelta`** – Calculate amount of change to SP for the given instruction.
- **`ev_calc_step_over`** – Calculate the address of the instruction which will be executed after "step over".
- **`ev_calc_switch_cases`** – Calculate case values and targets for a custom jump table.
- **`ev_calc_varglocs`** – Calculate locations of the arguments that correspond to '...'.
- **`ev_calcrel`** – Reserved.
- **`ev_can_have_type`** – Can the operand have a type (offset, segment, decimal, etc)?
- **`ev_clean_tbit`** – Clear the TF bit after an insn like pushf stored it in memory.
- **`ev_cmp_operands`** – Compare instruction operands.
- **`ev_coagulate`** – Try to define some unexplored bytes.
- **`ev_coagulate_dref`** – Data reference is being analyzed. Plugin may correct 'code_ea'
- **`ev_create_flat_group`** – Create special segment representing the flat group.
- **`ev_create_func_frame`** – Create a function frame for a newly created function.
- **`ev_create_merge_handlers`** – Create merge handlers, if needed.
- **`ev_create_switch_xrefs`** – Create xrefs for a custom jump table.
- **`ev_creating_segm`** – A new segment is about to be created.
- **`ev_cvt64_hashval`** – Perform 32-64 conversion for a hash value.
- **`ev_cvt64_supval`** – Perform 32-64 conversion for a netnode array element.
- **`ev_decorate_name`** – Decorate or undecorate a C symbol name.
- **`ev_del_cref`** – A code reference is being deleted.
- **`ev_del_dref`** – A data reference is being deleted.
- **`ev_delay_slot_insn`** – Get delay slot instruction.
- **`ev_demangle_name`** – Demangle a C++ (or other language) name into a user-readable string.
- **`ev_emu_insn`** – Emulate an instruction, create cross-references, plan subsequent analyses,
- **`ev_endbinary`** – Called after IDA has loaded a binary file.
- **`ev_ending_undo`** – Ended undoing/redoing an action.
- **`ev_equal_reglocs`** – Are two register arglocs the same?
- **`ev_extract_address`** – Extract address from a string.
- **`ev_find_op_value`** – Find operand value via a register tracker.
- **`ev_find_reg_value`** – Find register value via a register tracker.
- **`ev_func_bounds`** – Called after find_func_bounds() finishes. The module may fine-tune the function bounds.
- **`ev_gen_asm_or_lst`** – Generating asm or lst file. Called twice: at the beginning and at the end of
- **`ev_gen_map_file`** – Generate map file. If not implemented, the kernel itself will create the map file.
- **`ev_gen_regvar_def`** – Generate register variable definition line.
- **`ev_gen_src_file_lnnum`** – Callback: generate an analog of '#line 123'.
- **`ev_gen_stkvar_def`** – Generate stack variable definition line.
- **`ev_get_abi_info`** – Get all possible ABI names and optional extensions for given compiler.
- **`ev_get_autocmt`** – Callback: get dynamic auto comment.
- **`ev_get_bg_color`** – Get item background color.
- **`ev_get_cc_regs`** – Get register allocation convention for given calling convention.
- **`ev_get_code16_mode`** – Get ISA 16-bit mode.
- **`ev_get_dbr_opnum`** – Get the number of the operand to be displayed in the debugger reference view (text mode).
- **`ev_get_default_enum_size`** – Get default enum size.
- **`ev_get_frame_retsize`** – Get size of function return address in bytes.
- **`ev_get_macro_insn_head`** – Calculate the start of a macro instruction.
- **`ev_get_operand_string`** – Request text string for operand (cli, java, ...).
- **`ev_get_procmod`** – Get pointer to the processor module object.
- **`ev_get_reg_accesses`** – Get info about registers that are used/changed by an instruction.
- **`ev_get_reg_info`** – Get register information by its name.
- **`ev_get_reg_name`** – Generate text representation of a register.
- **`ev_get_simd_types`** – Get SIMD-related types according to given attributes and/or argument location.
- **`ev_get_stkarg_area_info`** – Get metrics of the stack argument area.
- **`ev_get_stkvar_scale_factor`** – Should stack variable references be multiplied by a coefficient
- **`ev_getreg`** – IBM PC only internal request. Should never be used for other purposes. Get register value
- **`ev_init`** – The IDP module is just loaded.
- **`ev_insn_reads_tbit`** – Check if insn will read the TF bit.
- **`ev_is_addr_insn`** – Does the instruction calculate some address using an immediate operand?
- **`ev_is_align_insn`** – Checks if the instruction is created only for alignment purposes.
- **`ev_is_alloca_probe`** – Checks if the function at 'ea' behaves as \_\_alloca_probe.
- **`ev_is_basic_block_end`** – Checks if the current instruction is the end of a basic block.
- **`ev_is_call_insn`** – Checks if the instruction is a "call".
- **`ev_is_cond_insn`** – Checks if the instruction is conditional.
- **`ev_is_control_flow_guard`** – Detect if an instruction is a "thunk call" to a flow guard function
- **`ev_is_far_jump`** – Checks if the instruction is an indirect far jump or call instruction.
- **`ev_is_indirect_jump`** – Determine if instruction is an indirect jump.
- **`ev_is_insn_table_jump`** – Reserved.
- **`ev_is_jump_func`** – Determine if the function is a trivial "jump" function.
- **`ev_is_ret_insn`** – Checks if the instruction is a "return".
- **`ev_is_sane_insn`** – Checks if the instruction is sane for the current file type.
- **`ev_is_sp_based`** – Check whether the operand is relative to stack pointer or frame pointer.
- **`ev_is_switch`** – Find 'switch' idiom or override processor module's decision.
- **`ev_last_cb_before_loader`** –
- **`ev_loader`** – This code and higher ones are reserved for the loaders.
- **`ev_lower_func_type`** – Get function arguments to convert to pointers when lowering prototype.
- **`ev_max_ptr_size`** – Get maximal size of a pointer in bytes.
- **`ev_may_be_func`** – Checks if a function can start at this instruction.
- **`ev_may_show_sreg`** – The kernel wants to display the segment registers in the messages window.
- **`ev_moving_segm`** – May the kernel move the segment?
- **`ev_newasm`** – Called before setting a new assembler.
- **`ev_newbinary`** – Called when IDA is about to load a binary file.
- **`ev_newfile`** – Called when a new file has been loaded.
- **`ev_newprc`** – Called before changing processor type.
- **`ev_next_exec_insn`** – Get next address to be executed.
- **`ev_oldfile`** – Called when an old file has been loaded.
- **`ev_out_assumes`** – Produce assume directives when segment register value changes.
- **`ev_out_data`** – Generate text representation of data items.
- **`ev_out_footer`** – Produce the end of disassembled text.
- **`ev_out_header`** – Produce the start of disassembled text.
- **`ev_out_insn`** – Generate text representation of an instruction in 'ctx.insn'.
- **`ev_out_label`** – The kernel is going to generate an instruction label line or a function header.
- **`ev_out_mnem`** – Generate instruction mnemonics.
- **`ev_out_operand`** – Generate text representation of an instruction operand.
- **`ev_out_segend`** – Produce the end of a segment in disassembled output.
- **`ev_out_segstart`** – Produce the start of a segment in disassembled output.
- **`ev_out_special_item`** – Generate text representation of an item in a special segment.
- **`ev_privrange_changed`** – Privrange interval has been moved to a new location.
- **`ev_realcvt`** – Floating point to IEEE conversion.
- **`ev_rename`** – The kernel is going to rename a byte.
- **`ev_replaying_undo`** – Replaying an undo/redo buffer.
- **`ev_set_code16_mode`** – Set ISA 16-bit mode (for some processors, e.g. ARM Thumb, PPC VLE, MIPS16).
- **`ev_set_proc_options`** – Called if the user specified an option string in the command line or via SetProcessorType.
- **`ev_setup_til`** – Setup default type libraries.
- **`ev_str2reg`** – Convert a register name to a register number.
- **`ev_term`** – The IDP module is being unloaded.
- **`ev_treat_hindering_item`** – An item hinders creation of another item.
- **`ev_undefine`** – An item in the database (instruction or data) is being deleted.
- **`ev_update_call_stack`** – Calculate the call stack trace for the given thread.
- **`ev_use_arg_types`** – Use information about callee arguments.
- **`ev_use_regarg_type`** – Use information about register argument.
- **`ev_use_stkarg_type`** – Use information about a stack argument.
- **`ev_validate_flirt_func`** – FLIRT has recognized a library function.
- **`ev_verify_noreturn`** – The kernel wants to set 'noreturn' flags for a function.
- **`ev_verify_sp`** – Called after all function instructions have been analyzed.
- **`hook`** – Hook (activate) the event handlers.
- **`log`** – Utility method to optionally log called hooks and their parameters.
- **`unhook`** – Un-hook (de-activate) the event handlers.

Attributes:

- **`database`** (`Database`) – Get the database reference, guaranteed to be non-None when called from
- **`is_hooked`** (`bool`) –
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

#### is_hooked

```
is_hooked: bool

```

#### m_database

```
m_database = database

```

#### ev_add_cref

```
ev_add_cref(_from: ea_t, to: ea_t, type: cref_t) -> int

```

A code reference is being created.

Parameters:

- **`_from`** (`ea_t`) – Source address.
- **`to`** (`ea_t`) – Target address.
- **`type`** (`cref_t`) – Reference type.

Returns:

- **`int`** ( `int` ) – \<0 to cancel cref creation, 0 to not implement or continue.

#### ev_add_dref

```
ev_add_dref(_from: ea_t, to: ea_t, type: dref_t) -> int

```

A data reference is being created.

Parameters:

- **`_from`** (`ea_t`) – Source address.
- **`to`** (`ea_t`) – Target address.
- **`type`** (`dref_t`) – Reference type.

Returns:

- **`int`** ( `int` ) – \<0 to cancel dref creation, 0 to not implement or continue.

#### ev_adjust_argloc

```
ev_adjust_argloc(
    argloc: argloc_t, optional_type: tinfo_t, size: int
) -> int

```

Adjust argloc according to its type/size and platform endianess.

Parameters:

- **`argloc`** (`argloc_t`) – Argument location, inout.
- **`optional_type`** (`tinfo_t`) – Type information (may be None).
- **`size`** (`int`) – Argument size; ignored if type is not None.

Returns:

- **`int`** ( `int` ) – 0 if not implemented, 1 if ok, -1 on error.

#### ev_adjust_libfunc_ea

```
ev_adjust_libfunc_ea(
    sig: 'idasgn_t const *',
    libfun: 'libfunc_t const *',
    ea: 'ea_t *',
) -> int

```

Called when a signature module has been matched against bytes in the database. This is used to compute the offset at which a particular module's libfunc should be applied.

Parameters:

- **`sig`** (`idasgn_t const *`) – Signature.
- **`libfun`** (`libfunc_t const *`) – Library function.
- **`ea`** (`ea_t *`) – Pointer to effective address (may be modified).

Returns:

- **`int`** ( `int` ) – 1 if the address was modified, \<=0 if not (use default algorithm).

#### ev_adjust_refinfo

```
ev_adjust_refinfo(
    ri: refinfo_t,
    ea: ea_t,
    n: int,
    fd: 'fixup_data_t const *',
) -> int

```

Called from apply_fixup before converting operand to reference.

Can be used for changing the reference info (e.g. PPC module adds REFINFO_NOBASE for some references).

Parameters:

- **`ri`** (`refinfo_t`) – Reference info.
- **`ea`** (`ea_t`) – Instruction address.
- **`n`** (`int`) – Operand number.
- **`fd`** (`fixup_data_t const *`) – Fixup data.

Returns:

- **`int`** ( `int` ) – \<0 to not create an offset, 0 if not implemented or refinfo adjusted.

#### ev_ana_insn

```
ev_ana_insn(out: 'insn_t *') -> bool

```

Analyze one instruction and fill the 'out' structure.

This function shouldn't change the database, flags, or anything else. All such actions should be performed only by ev_emu_insn(). insn_t::ea contains address of instruction to analyze.

Parameters:

- **`out`** (`insn_t *`) – Structure to be filled with the analyzed instruction.

Returns:

- **`bool`** ( `bool` ) – Length of the instruction in bytes, or 0 if instruction can't be decoded.

#### ev_analyze_prolog

```
ev_analyze_prolog(ea: ea_t) -> int

```

Analyzes function prolog/epilog and updates purge and function attributes.

Parameters:

- **`ea`** (`ea_t`) – Start address of the function.

Returns:

- **`int`** ( `int` ) – 1 for ok, 0 if not implemented.

#### ev_arch_changed

```
ev_arch_changed() -> int

```

The loader finished parsing arch-related info; processor module might use it to finish init.

Returns:

- **`int`** ( `int` ) – 1 if success, 0 if not implemented or failed.

#### ev_arg_addrs_ready

```
ev_arg_addrs_ready(
    caller: ea_t, n: int, tif: tinfo_t, addrs: 'ea_t *'
) -> int

```

Argument address info is ready.

Parameters:

- **`caller`** (`ea_t`) – Address of the caller.
- **`n`** (`int`) – Number of formal arguments.
- **`tif`** (`tinfo_t`) – Call prototype.
- **`addrs`** (`ea_t *`) – Argument initialization addresses.

Returns:

- **`int`** ( `int` ) – \<0 to avoid saving into idb; other values mean "ok to save".

#### ev_asm_installed

```
ev_asm_installed(asmnum: int) -> int

```

After setting a new assembler.

Parameters:

- **`asmnum`** (`int`) – Assembler number (see also ev_newasm).

Returns:

- **`int`** ( `int` ) – 1 if ok, 0 if not implemented.

#### ev_assemble

```
ev_assemble(
    ea: ea_t, cs: ea_t, ip: ea_t, use32: bool, line: str
) -> 'PyObject *'

```

Assemble an instruction. Display a warning if an error is found.

Parameters:

- **`ea`** (`ea_t`) – Linear address of instruction.
- **`cs`** (`ea_t`) – Code segment of instruction.
- **`ip`** (`ea_t`) – Instruction pointer of instruction.
- **`use32`** (`bool`) – Is it a 32-bit segment?
- **`line`** (`str`) – Line to assemble.

Returns:

- `'PyObject *'` – PyObject\*: Size of the instruction in bytes.

#### ev_auto_queue_empty

```
ev_auto_queue_empty(type: atype_t) -> int

```

One analysis queue is empty.

Parameters:

- **`type`** (`atype_t`) – The queue type.

Returns:

- **`int`** ( `int` ) – See also idb_event::auto_empty_finally.

#### ev_calc_arglocs

```
ev_calc_arglocs(fti: func_type_data_t) -> int

```

Calculate function argument locations.

This callback should fill retloc, all arglocs, and stkargs. This callback is never called for CM_CC_SPECIAL functions.

Parameters:

- **`fti`** (`func_type_data_t`) – Points to the func type info.

Returns:

- **`int`** ( `int` ) – 0 if not implemented, 1 if ok, -1 on error.

#### ev_calc_cdecl_purged_bytes

```
ev_calc_cdecl_purged_bytes(ea: ea_t) -> int

```

Calculate number of purged bytes after call.

Parameters:

- **`ea`** (`ea_t`) – Address of the call instruction.

Returns:

- **`int`** ( `int` ) – Number of purged bytes (usually add sp, N).

#### ev_calc_next_eas

```
ev_calc_next_eas(
    res: 'eavec_t *', insn: 'insn_t const *', over: bool
) -> int

```

Calculate list of addresses the instruction in 'insn' may pass control to.

This callback is required for source level debugging.

Parameters:

- **`res`** (`eavec_t *`) – Output array for the results.
- **`insn`** (`insn_t const *`) – The instruction.
- **`over`** (`bool`) – Calculate for step over (ignore call targets).

Returns:

- **`int`** ( `int` ) – \<0 if incalculable (indirect jumps, for example), =0 for the number of addresses of called functions in the array. They must be put at the beginning of the array (0 if over=True).

#### ev_calc_purged_bytes

```
ev_calc_purged_bytes(
    p_purged_bytes: 'int *', fti: func_type_data_t
) -> int

```

Calculate number of purged bytes by the given function type.

Parameters:

- **`p_purged_bytes`** (`int *`) – Pointer to output value.
- **`fti`** (`func_type_data_t`) – Function type details.

Returns:

- **`int`** ( `int` ) – 1 if handled, 0 if not implemented.

#### ev_calc_retloc

```
ev_calc_retloc(
    retloc: argloc_t, rettype: tinfo_t, cc: callcnv_t
) -> int

```

Calculate return value location.

Parameters:

- **`retloc`** (`argloc_t`) – Output argument location.
- **`rettype`** (`tinfo_t`) – Return type information.
- **`cc`** (`callcnv_t`) – Calling convention.

Returns:

- **`int`** ( `int` ) – 0 if not implemented, 1 if ok, -1 on error.

#### ev_calc_spdelta

```
ev_calc_spdelta(
    spdelta: 'sval_t *', insn: 'insn_t const *'
) -> int

```

Calculate amount of change to SP for the given instruction. This event is required to decompile code snippets.

Parameters:

- **`spdelta`** (`sval_t *`) – Output stack pointer delta.
- **`insn`** (`insn_t const *`) – The instruction.

Returns:

- **`int`** ( `int` ) – 1 for ok, 0 if not implemented.

#### ev_calc_step_over

```
ev_calc_step_over(target: 'ea_t *', ip: ea_t) -> int

```

Calculate the address of the instruction which will be executed after "step over".

The kernel will put a breakpoint there. If the step over is equal to step into or we cannot calculate the address, return BADADDR.

Parameters:

- **`target`** (`ea_t *`) – Pointer to the answer.
- **`ip`** (`ea_t`) – Instruction address.

Returns:

- **`int`** ( `int` ) – 0 if unimplemented, 1 if implemented.

#### ev_calc_switch_cases

```
ev_calc_switch_cases(
    casevec: 'casevec_t *',
    targets: 'eavec_t *',
    insn_ea: ea_t,
    si: switch_info_t,
) -> int

```

Calculate case values and targets for a custom jump table.

Parameters:

- **`casevec`** (`casevec_t *`) – Vector of case values (may be None).
- **`targets`** (`eavec_t *`) – Corresponding target addresses (may be None).
- **`insn_ea`** (`ea_t`) – Address of the 'indirect jump' instruction.
- **`si`** (`switch_info_t`) – Switch information.

Returns:

- **`int`** ( `int` ) – 1: Success. \<=0: Failed.

#### ev_calc_varglocs

```
ev_calc_varglocs(
    ftd: func_type_data_t,
    aux_regs: regobjs_t,
    aux_stkargs: relobj_t,
    nfixed: int,
) -> int

```

Calculate locations of the arguments that correspond to '...'.

On some platforms, variadic calls require passing additional information (e.g., number of floating variadic arguments must be passed in rax on gcc-x64). The locations and values that constitute this additional information are returned in the buffers pointed by aux_regs and aux_stkargs.

Parameters:

- **`ftd`** (`func_type_data_t`) – Info about all arguments (including varargs), inout.
- **`aux_regs`** (`regobjs_t`) – Buffer for hidden register arguments, may be None.
- **`aux_stkargs`** (`relobj_t`) – Buffer for hidden stack arguments, may be None.
- **`nfixed`** (`int`) – Number of fixed arguments.

Returns:

- **`int`** ( `int` ) – 0 if not implemented, 1 if ok, -1 on error.

#### ev_calcrel

```
ev_calcrel() -> int

```

Reserved.

Returns:

- **`int`** ( `int` ) – Reserved return value.

#### ev_can_have_type

```
ev_can_have_type(op: 'op_t const *') -> int

```

Can the operand have a type (offset, segment, decimal, etc)?

For example, a register AX can't have a type, meaning the user can't change its representation. See bytes.hpp for information about types and flags.

Parameters:

- **`op`** (`op_t const *`) – The operand.

Returns:

- **`int`** ( `int` ) – 0 if unknown, \<0 if no, 1 if yes.

#### ev_clean_tbit

```
ev_clean_tbit(
    ea: ea_t,
    getreg: 'processor_t::regval_getter_t *',
    regvalues: regval_t,
) -> int

```

Clear the TF bit after an insn like pushf stored it in memory.

Parameters:

- **`ea`** (`ea_t`) – Instruction address.
- **`getreg`** (`processor_t`) – :regval_getter_t \*): Function to get register values.
- **`regvalues`** (`regval_t`) – Register values array.

Returns:

- **`int`** ( `int` ) – 1 if ok, 0 if failed.

#### ev_cmp_operands

```
ev_cmp_operands(
    op1: 'op_t const *', op2: 'op_t const *'
) -> int

```

Compare instruction operands.

Parameters:

- **`op1`** (`op_t const *`) – First operand.
- **`op2`** (`op_t const *`) – Second operand.

Returns:

- **`int`** ( `int` ) – 1 if equal, -1 if not equal, 0 if not implemented.

#### ev_coagulate

```
ev_coagulate(start_ea: ea_t) -> int

```

Try to define some unexplored bytes.

This notification will be called if the kernel tried all possibilities and could not find anything more useful than to convert to array of bytes. The module can help the kernel and convert the bytes into something more useful.

Parameters:

- **`start_ea`** (`ea_t`) – Start address.

Returns:

- **`int`** ( `int` ) – Number of converted bytes.

#### ev_coagulate_dref

```
ev_coagulate_dref(
    _from: ea_t,
    to: ea_t,
    may_define: bool,
    code_ea: 'ea_t *',
) -> int

```

Data reference is being analyzed. Plugin may correct 'code_ea' (e.g., for thumb mode refs, we clear the last bit).

Parameters:

- **`_from`** (`ea_t`) – Source address.
- **`to`** (`ea_t`) – Target address.
- **`may_define`** (`bool`) – Whether a definition may be created.
- **`code_ea`** (`ea_t *`) – Pointer to the effective code address (may be modified).

Returns:

- **`int`** ( `int` ) – \<0 for failed dref analysis, 0 for done dref analysis, 0 to not implement or continue.

#### ev_create_flat_group

```
ev_create_flat_group(
    image_base: ea_t, bitness: int, dataseg_sel: sel_t
) -> int

```

Create special segment representing the flat group.

Parameters:

- **`image_base`** (`ea_t`) – Image base.
- **`bitness`** (`int`) – Bitness.
- **`dataseg_sel`** (`sel_t`) – Data segment selector.

Returns:

- **`int`** ( `int` ) – 1 if ok, 0 if not implemented.

#### ev_create_func_frame

```
ev_create_func_frame(pfn: 'func_t *') -> int

```

Create a function frame for a newly created function.

Set up frame size, its attributes, etc.

Parameters:

- **`pfn`** (`func_t *`) – The function.

Returns:

- **`int`** ( `int` ) – 1 if ok, 0 if not implemented.

#### ev_create_merge_handlers

```
ev_create_merge_handlers(md: 'merge_data_t *') -> int

```

Create merge handlers, if needed. This event is generated immediately after opening idbs.

Parameters:

- **`md`** (`merge_data_t *`) – Merge data pointer.

Returns:

- **`int`** ( `int` ) – Must be 0.

#### ev_create_switch_xrefs

```
ev_create_switch_xrefs(
    jumpea: ea_t, si: switch_info_t
) -> int

```

Create xrefs for a custom jump table.

Must be implemented if module uses custom jump tables, SWI_CUSTOM.

Parameters:

- **`jumpea`** (`ea_t`) – Address of the jump instruction.
- **`si`** (`switch_info_t`) – Switch information.

Returns:

- **`int`** ( `int` ) – Must return 1.

#### ev_creating_segm

```
ev_creating_segm(seg: 'segment_t *') -> int

```

A new segment is about to be created.

Parameters:

- **`seg`** (`segment_t *`) – The segment being created.

Returns:

- **`int`** ( `int` ) – 1 if OK, \<0 if the segment should not be created.

#### ev_cvt64_hashval

```
ev_cvt64_hashval(
    node: nodeidx_t,
    tag: uchar,
    name: str,
    data: 'uchar const *',
) -> int

```

Perform 32-64 conversion for a hash value.

Parameters:

- **`node`** (`nodeidx_t`) – Node index.
- **`tag`** (`uchar`) – Tag value.
- **`name`** (`str`) – Name string.
- **`data`** (`uchar const *`) – Data pointer.

Returns:

- **`int`** ( `int` ) – 0 if nothing was done, 1 if converted successfully, -1 for error (and message in errbuf).

#### ev_cvt64_supval

```
ev_cvt64_supval(
    node: nodeidx_t,
    tag: uchar,
    idx: nodeidx_t,
    data: 'uchar const *',
) -> int

```

Perform 32-64 conversion for a netnode array element.

Parameters:

- **`node`** (`nodeidx_t`) – Node index.
- **`tag`** (`uchar`) – Tag value.
- **`idx`** (`nodeidx_t`) – Index.
- **`data`** (`uchar const *`) – Data pointer.

Returns:

- **`int`** ( `int` ) – 0 if nothing was done, 1 if converted successfully, -1 for error (and message in errbuf).

#### ev_decorate_name

```
ev_decorate_name(
    name: str, mangle: bool, cc: int, optional_type: tinfo_t
) -> 'PyObject *'

```

Decorate or undecorate a C symbol name.

Parameters:

- **`name`** (`str`) – Name of the symbol.
- **`mangle`** (`bool`) – True to mangle, False to unmangle.
- **`cc`** (`int`) – Calling convention (callcnv_t).
- **`optional_type`** (`tinfo_t`) – Optional type information.

Returns:

- `'PyObject *'` – PyObject\*: 1 if success, 0 if not implemented or failed.

#### ev_del_cref

```
ev_del_cref(_from: ea_t, to: ea_t, expand: bool) -> int

```

A code reference is being deleted.

Parameters:

- **`_from`** (`ea_t`) – Source address.
- **`to`** (`ea_t`) – Target address.
- **`expand`** (`bool`) – Whether to expand the cref deletion.

Returns:

- **`int`** ( `int` ) – \<0 to cancel cref deletion, 0 to not implement or continue.

#### ev_del_dref

```
ev_del_dref(_from: ea_t, to: ea_t) -> int

```

A data reference is being deleted.

Parameters:

- **`_from`** (`ea_t`) – Source address.
- **`to`** (`ea_t`) – Target address.

Returns:

- **`int`** ( `int` ) – \<0 to cancel dref deletion, 0 to not implement or continue.

#### ev_delay_slot_insn

```
ev_delay_slot_insn(
    ea: ea_t, bexec: bool, fexec: bool
) -> 'PyObject *'

```

Get delay slot instruction.

Parameters:

- **`ea`** (`ea_t`) – Input: Instruction address in question. Output: If the answer is positive and the delay slot contains a valid instruction, returns the address of the delay slot instruction, else BADADDR (invalid instruction, e.g. a branch).
- **`bexec`** (`bool`) – Execute slot if jumping, initially set to True.
- **`fexec`** (`bool`) – Execute slot if not jumping, initially set to True.

Returns:

- `'PyObject *'` – PyObject\*: 1 for a positive answer, \<=0 for ordinary instruction.

#### ev_demangle_name

```
ev_demangle_name(
    name: str, disable_mask: int, demreq: int
) -> 'PyObject *'

```

Demangle a C++ (or other language) name into a user-readable string.

This event is called by demangle_name().

Parameters:

- **`name`** (`str`) – Mangled name.
- **`disable_mask`** (`int`) – Flags to inhibit parts of output or compiler info/other (see MNG\_).
- **`demreq`** (`int`) – Operation to perform (demreq_type_t).

Returns:

- `'PyObject *'` – PyObject\*: 1 if success, 0 if not implemented.

#### ev_emu_insn

```
ev_emu_insn(insn: 'insn_t const *') -> bool

```

Emulate an instruction, create cross-references, plan subsequent analyses, modify flags, etc.

Upon entry, all information about the instruction is in the 'insn' structure.

Parameters:

- **`insn`** (`insn_t const *`) – Structure containing instruction information.

Returns:

- **`bool`** ( `bool` ) – True (1) if OK; False (-1) if the kernel should delete the instruction.

#### ev_endbinary

```
ev_endbinary(ok: bool) -> int

```

Called after IDA has loaded a binary file.

Parameters:

- **`ok`** (`bool`) – True if file loaded successfully.

#### ev_ending_undo

```
ev_ending_undo(action_name: str, is_undo: bool) -> int

```

Ended undoing/redoing an action.

Parameters:

- **`action_name`** (`str`) – Action that was undone or redone (not None).
- **`is_undo`** (`bool`) – True if undo, False if redo.

Returns:

- **`int`** ( `int` ) – 1 if ok, 0 if not implemented.

#### ev_equal_reglocs

```
ev_equal_reglocs(a1: argloc_t, a2: argloc_t) -> int

```

Are two register arglocs the same?

Parameters:

- **`a1`** (`argloc_t`) – First argument location.
- **`a2`** (`argloc_t`) – Second argument location.

Returns:

- **`int`** ( `int` ) – 1 if yes, -1 if no, 0 if not implemented.

#### ev_extract_address

```
ev_extract_address(
    out_ea: 'ea_t *',
    screen_ea: ea_t,
    string: str,
    position: size_t,
) -> int

```

Extract address from a string.

Parameters:

- **`out_ea`** (`ea_t *`) – Output address (pointer).
- **`screen_ea`** (`ea_t`) – Current screen address.
- **`string`** (`str`) – Source string.
- **`position`** (`size_t`) – Position in the string.

Returns:

- **`int`** ( `int` ) – 1 for success, 0 for standard algorithm, -1 for error.

#### ev_find_op_value

```
ev_find_op_value(
    pinsn: 'insn_t const *', opn: int
) -> 'PyObject *'

```

Find operand value via a register tracker.

The returned value in 'out' is valid before executing the instruction.

Parameters:

- **`pinsn`** (`insn_t const *`) – The instruction.
- **`opn`** (`int`) – Operand index.

Returns:

- `'PyObject *'` – PyObject\*: 1 if implemented and value was found, 0 if not implemented, -1 if decoding failed or no value found.

#### ev_find_reg_value

```
ev_find_reg_value(
    pinsn: 'insn_t const *', reg: int
) -> 'PyObject *'

```

Find register value via a register tracker.

The returned value in 'out' is valid before executing the instruction.

Parameters:

- **`pinsn`** (`insn_t const *`) – The instruction.
- **`reg`** (`int`) – Register index.

Returns:

- `'PyObject *'` – PyObject\*: 1 if implemented and value was found, 0 if not implemented, -1 if decoding failed or no value found.

#### ev_func_bounds

```
ev_func_bounds(
    possible_return_code: 'int *',
    pfn: 'func_t *',
    max_func_end_ea: ea_t,
) -> int

```

Called after find_func_bounds() finishes. The module may fine-tune the function bounds.

Parameters:

- **`possible_return_code`** (`int *`) – In/out, possible return code.
- **`pfn`** (`func_t *`) – The function.
- **`max_func_end_ea`** (`ea_t`) – From the kernel's point of view.

#### ev_gen_asm_or_lst

```
ev_gen_asm_or_lst(
    starting: bool,
    fp: 'FILE *',
    is_asm: bool,
    flags: int,
    outline: 'html_line_cb_t **',
) -> int

```

Generating asm or lst file. Called twice: at the beginning and at the end of listing generation. The processor module can intercept this event and adjust its output.

Parameters:

- **`starting`** (`bool`) – True if beginning listing generation.
- **`fp`** (`FILE *`) – Output file.
- **`is_asm`** (`bool`) – True for assembler, False for listing.
- **`flags`** (`int`) – Flags passed to gen_file().
- **`outline`** (`html_line_cb_t **`) – Pointer to pointer to outline callback. If defined, it will be used by the kernel to output the generated lines.

Returns:

- **`int`** ( `int` ) – 1 if ok, 0 if not implemented.

#### ev_gen_map_file

```
ev_gen_map_file(nlines: 'int *', fp: 'FILE *') -> int

```

Generate map file. If not implemented, the kernel itself will create the map file.

Parameters:

- **`nlines`** (`int *`) – Number of lines in the map file (-1 means write error).
- **`fp`** (`FILE *`) – Output file.

Returns:

- **`int`** ( `int` ) – 0 if not implemented, 1 for ok, -1 for write error.

#### ev_gen_regvar_def

```
ev_gen_regvar_def(
    outctx: 'outctx_t *', v: 'regvar_t *'
) -> int

```

Generate register variable definition line.

Parameters:

- **`outctx`** (`outctx_t *`) – Output context.
- **`v`** (`regvar_t *`) – Register variable.

Returns:

- **`int`** ( `int` ) – 0 if generated the definition text, 0 if not implemented.

#### ev_gen_src_file_lnnum

```
ev_gen_src_file_lnnum(
    outctx: 'outctx_t *', file: str, lnnum: size_t
) -> int

```

Callback: generate an analog of '#line 123'.

Parameters:

- **`outctx`** (`outctx_t *`) – Output context.
- **`file`** (`str`) – Source file name (may be None).
- **`lnnum`** (`size_t`) – Line number.

Returns:

- **`int`** ( `int` ) – 1 if directive has been generated, 0 if not implemented.

#### ev_gen_stkvar_def

```
ev_gen_stkvar_def(
    outctx: 'outctx_t *', stkvar: udm_t, v: int, tid: tid_t
) -> int

```

Generate stack variable definition line.

Default line is

varname = type ptr value,

where 'type' is one of byte, word, dword, qword, tbyte.

Parameters:

- **`outctx`** (`outctx_t *`) – Output context.
- **`stkvar`** (`udm_t`) – Stack variable (const).
- **`v`** (`int`) – Stack variable value.
- **`tid`** (`tid_t`) – Stack variable TID.

Returns:

- **`int`** ( `int` ) – 1 if ok, 0 if not implemented.

#### ev_get_abi_info

```
ev_get_abi_info(comp: comp_t) -> int

```

Get all possible ABI names and optional extensions for given compiler.

abiname/option is a string entirely consisting of letters, digits and underscore.

Parameters:

- **`comp`** (`comp_t`) – Compiler ID.

Returns:

- **`int`** ( `int` ) – 0 if not implemented, 1 if ok.

#### ev_get_autocmt

```
ev_get_autocmt(insn: 'insn_t const *') -> 'PyObject *'

```

Callback: get dynamic auto comment.

Will be called if the autocomments are enabled and the comment retrieved from ida.int starts with '$!'. 'insn' contains valid info.

Parameters:

- **`insn`** (`insn_t const *`) – The instruction.

Returns:

- `'PyObject *'` – PyObject\*: 1 if a new comment has been generated, 0 if not handled (buffer not changed).

#### ev_get_bg_color

```
ev_get_bg_color(color: 'bgcolor_t *', ea: ea_t) -> int

```

Get item background color.

Plugins can hook this callback to color disassembly lines dynamically.

Parameters:

- **`color`** (`bgcolor_t *`) – Out, background color.
- **`ea`** (`ea_t`) – Address.

Returns:

- **`int`** ( `int` ) – 0 if not implemented, 1 if color set.

#### ev_get_cc_regs

```
ev_get_cc_regs(regs: callregs_t, cc: callcnv_t) -> int

```

Get register allocation convention for given calling convention.

Parameters:

- **`regs`** (`callregs_t`) – Output for register allocation info.
- **`cc`** (`callcnv_t`) – Calling convention.

Returns:

- **`int`** ( `int` ) – 1 if handled, 0 if not implemented.

#### ev_get_code16_mode

```
ev_get_code16_mode(ea: ea_t) -> int

```

Get ISA 16-bit mode.

Parameters:

- **`ea`** (`ea_t`) – Address to get the ISA mode.

Returns:

- **`int`** ( `int` ) – 1 for 16-bit mode, 0 if not implemented or 32-bit mode.

#### ev_get_dbr_opnum

```
ev_get_dbr_opnum(
    opnum: 'int *', insn: 'insn_t const *'
) -> int

```

Get the number of the operand to be displayed in the debugger reference view (text mode).

Parameters:

- **`opnum`** (`int *`) – Operand number (output, -1 means no such operand).
- **`insn`** (`insn_t const *`) – The instruction.

Returns:

- **`int`** ( `int` ) – 0 if unimplemented, 1 if implemented.

#### ev_get_default_enum_size

```
ev_get_default_enum_size() -> int

```

Get default enum size.

Note

Not generated anymore. inf_get_cc_size_e() is used instead.

#### ev_get_frame_retsize

```
ev_get_frame_retsize(
    frsize: 'int *', pfn: 'func_t const *'
) -> int

```

Get size of function return address in bytes.

If not implemented, the kernel will assume: * 8 bytes for 64-bit function * 4 bytes for 32-bit function * 2 bytes otherwise

Parameters:

- **`frsize`** (`int *`) – Out, frame size.
- **`pfn`** (`func_t const *`) – The function (cannot be nullptr).

Returns:

- **`int`** ( `int` ) – 1 if ok, 0 if not implemented.

#### ev_get_macro_insn_head

```
ev_get_macro_insn_head(head: 'ea_t *', ip: ea_t) -> int

```

Calculate the start of a macro instruction.

This notification is called if IP points to the middle of an instruction.

Parameters:

- **`head`** (`ea_t *`) – Output answer; BADADDR means normal instruction.
- **`ip`** (`ea_t`) – Instruction address.

Returns:

- **`int`** ( `int` ) – 0 if unimplemented, 1 if implemented.

#### ev_get_operand_string

```
ev_get_operand_string(
    insn: 'insn_t const *', opnum: int
) -> 'PyObject *'

```

Request text string for operand (cli, java, ...).

Parameters:

- **`insn`** (`insn_t const *`) – The instruction.
- **`opnum`** (`int`) – Operand number, -1 means any string operand.

Returns:

- `'PyObject *'` – PyObject\*: 0 if no string (or empty string), >0 for original string length (without
- `'PyObject *'` – terminating zero).

#### ev_get_procmod

```
ev_get_procmod() -> int

```

Get pointer to the processor module object.

All processor modules must implement this. The pointer is returned as size_t.

Returns:

- **`int`** ( `int` ) – Processor module object pointer as size_t.

#### ev_get_reg_accesses

```
ev_get_reg_accesses(
    accvec: reg_accesses_t,
    insn: 'insn_t const *',
    flags: int,
) -> int

```

Get info about registers that are used/changed by an instruction.

Parameters:

- **`accvec`** (`reg_accesses_t`) – Output info about accessed registers.
- **`insn`** (`insn_t const *`) – Instruction in question.
- **`flags`** (`int`) – Reserved, must be 0.

Returns:

- **`int`** ( `int` ) – -1 if accvec is None, 1 if found the requested access and filled accvec, 0 if not implemented.

#### ev_get_reg_info

```
ev_get_reg_info(
    main_regname: 'char const **',
    bitrange: bitrange_t,
    regname: str,
) -> int

```

Get register information by its name.

"ah" returns:

- main_regname="eax"
- bitrange_t = { offset==8, nbits==8 }

This callback may be unimplemented if the register names are all present in processor_t::reg_names and they all have the same size.

Parameters:

- **`main_regname`** (`char const **`) – Output main register name.
- **`bitrange`** (`bitrange_t`) – Output position and size of the value within 'main_regname' (empty bitrange == whole register).
- **`regname`** (`str`) – Register name.

Returns:

- **`int`** ( `int` ) – 1 if ok, -1 if failed (not found), 0 if unimplemented.

#### ev_get_reg_name

```
ev_get_reg_name(
    reg: int, width: size_t, reghi: int
) -> 'PyObject *'

```

Generate text representation of a register.

Most processor modules do not need to implement this callback. It is useful only if processor_t::reg_names[reg] does not provide the correct register name.

Parameters:

- **`reg`** (`int`) – Internal register number as defined in the processor module.
- **`width`** (`size_t`) – Register width in bytes.
- **`reghi`** (`int`) – If not -1, returns the register pair.

Returns:

- `'PyObject *'` – PyObject\*: -1 if error, strlen(buf) if success.

#### ev_get_simd_types

```
ev_get_simd_types(
    out: 'simd_info_vec_t *',
    simd_attrs: simd_info_t,
    argloc: argloc_t,
    create_tifs: bool,
) -> int

```

Get SIMD-related types according to given attributes and/or argument location.

Parameters:

- **`out`** (`simd_info_vec_t *`) – Output vector of SIMD types.
- **`simd_attrs`** (`simd_info_t`) – SIMD attributes (may be None).
- **`argloc`** (`argloc_t`) – Argument location (may be None).
- **`create_tifs`** (`bool`) – Return valid tinfo_t objects, create if necessary.

Returns:

- **`int`** ( `int` ) – Number of found types, -1 on error.

#### ev_get_stkarg_area_info

```
ev_get_stkarg_area_info(
    out: stkarg_area_info_t, cc: callcnv_t
) -> int

```

Get metrics of the stack argument area.

Parameters:

- **`out`** (`stkarg_area_info_t`) – Output info.
- **`cc`** (`callcnv_t`) – Calling convention.

Returns:

- **`int`** ( `int` ) – 1 if success, 0 if not implemented.

#### ev_get_stkvar_scale_factor

```
ev_get_stkvar_scale_factor() -> int

```

Should stack variable references be multiplied by a coefficient before being used in the stack frame?

Currently used by TMS320C55 because the references into the stack should be multiplied by 2.

Returns:

- **`int`** ( `int` ) – Scaling factor, or 0 if not implemented.

#### ev_getreg

```
ev_getreg(regval: 'uval_t *', regnum: int) -> int

```

IBM PC only internal request. Should never be used for other purposes. Get register value by internal index.

Parameters:

- **`regval`** (`uval_t *`) – Output register value.
- **`regnum`** (`int`) – Register number.

Returns:

- **`int`** ( `int` ) – 1 for ok, 0 if not implemented, -1 for failed (undefined value or bad regnum).

#### ev_init

```
ev_init(idp_modname: str) -> int

```

The IDP module is just loaded.

Parameters:

- **`idp_modname`** (`str`) – Processor module name.

Returns:

- **`int`** ( `int` ) – \<0 on failure.

#### ev_insn_reads_tbit

```
ev_insn_reads_tbit(
    insn: 'insn_t const *',
    getreg: 'processor_t::regval_getter_t *',
    regvalues: regval_t,
) -> int

```

Check if insn will read the TF bit.

Parameters:

- **`insn`** (`insn_t const *`) – The instruction.
- **`getreg`** (`processor_t`) – :regval_getter_t \*): Function to get register values.
- **`regvalues`** (`regval_t`) – Register values array.

Returns:

- **`int`** ( `int` ) – 2 if will generate 'step' exception, 1 if will store the TF bit in memory, 0 if no.

#### ev_is_addr_insn

```
ev_is_addr_insn(
    type: 'int *', insn: 'insn_t const *'
) -> int

```

Does the instruction calculate some address using an immediate operand?

For example, in PC, such operand may be o_displ: 'lea eax, [esi+4]'

Parameters:

- **`type`** (`int *`) – Pointer to the returned instruction type. 0: "add" instruction (immediate operand is a relative value) 1: "move" instruction (immediate operand is absolute) 2: "sub" instruction (immediate operand is a relative value)
- **`insn`** (`insn_t const *`) – Instruction.

Returns:

- **`int`** ( `int` ) – 0 for operand number + 1, 0 if not implemented.

#### ev_is_align_insn

```
ev_is_align_insn(ea: ea_t) -> int

```

Checks if the instruction is created only for alignment purposes.

Do not directly call this function, use is_align_insn().

Parameters:

- **`ea`** (`ea_t`) – Instruction address.

Returns:

- **`int`** ( `int` ) – Number of bytes in the instruction.

#### ev_is_alloca_probe

```
ev_is_alloca_probe(ea: ea_t) -> int

```

Checks if the function at 'ea' behaves as \_\_alloca_probe.

Parameters:

- **`ea`** (`ea_t`) – Function address.

Returns:

- **`int`** ( `int` ) – 1: Yes. 0: No.

#### ev_is_basic_block_end

```
ev_is_basic_block_end(
    insn: 'insn_t const *', call_insn_stops_block: bool
) -> int

```

Checks if the current instruction is the end of a basic block.

This function should be defined for processors with delayed jump slots.

Parameters:

- **`insn`** (`insn_t const *`) – The instruction.
- **`call_insn_stops_block`** (`bool`) – True if call instruction stops block.

Returns:

- **`int`** ( `int` ) – 0: Unknown. \<0: No, not the end. 1: Yes, is the end.

#### ev_is_call_insn

```
ev_is_call_insn(insn: 'insn_t const *') -> int

```

Checks if the instruction is a "call".

Parameters:

- **`insn`** (`insn_t const *`) – The instruction.

Returns:

- **`int`** ( `int` ) – 0: Unknown. \<0: No, not a call. 1: Yes, is a call.

#### ev_is_cond_insn

```
ev_is_cond_insn(insn: 'insn_t const *') -> int

```

Checks if the instruction is conditional.

Parameters:

- **`insn`** (`insn_t const *`) – The instruction address.

Returns:

- **`int`** ( `int` ) – 1: Yes, conditional instruction. -1: No, not conditional. 0: Not implemented or not an instruction.

#### ev_is_control_flow_guard

```
ev_is_control_flow_guard(
    p_reg: 'int *', insn: 'insn_t const *'
) -> int

```

Detect if an instruction is a "thunk call" to a flow guard function (equivalent to call reg/return/nop).

Parameters:

- **`p_reg`** (`int *`) – Indirect register number, may be -1.
- **`insn`** (`insn_t const *`) – Call/jump instruction.

Returns:

- **`int`** ( `int` ) – -1 if no thunk detected, 1 if indirect call, 2 if security check routine call (NOP), 3 if return thunk, 0 if not implemented.

#### ev_is_far_jump

```
ev_is_far_jump(icode: int) -> int

```

Checks if the instruction is an indirect far jump or call instruction. Meaningful only if the processor has 'near' and 'far' reference types.

Parameters:

- **`icode`** (`int`) – Instruction code.

Returns:

- **`int`** ( `int` ) – 0: Not implemented. 1: Yes, is a far jump/call. -1: No.

#### ev_is_indirect_jump

```
ev_is_indirect_jump(insn: 'insn_t const *') -> int

```

Determine if instruction is an indirect jump.

If CF_JUMP bit cannot describe all jump types, please define this callback.

Parameters:

- **`insn`** (`insn_t const *`) – The instruction.

Returns:

- **`int`** ( `int` ) – 0: Use CF_JUMP. 1: No, not indirect jump. 2: Yes, is indirect jump.

#### ev_is_insn_table_jump

```
ev_is_insn_table_jump() -> int

```

Reserved.

#### ev_is_jump_func

```
ev_is_jump_func(
    pfn: 'func_t *',
    jump_target: 'ea_t *',
    func_pointer: 'ea_t *',
) -> int

```

Determine if the function is a trivial "jump" function.

Parameters:

- **`pfn`** (`func_t *`) – The function.
- **`jump_target`** (`ea_t *`) – Out, jump target.
- **`func_pointer`** (`ea_t *`) – Out, function pointer.

Returns:

- **`int`** ( `int` ) – \<0 if no, 0 if don't know, 1 if yes (see jump_target and func_pointer).

#### ev_is_ret_insn

```
ev_is_ret_insn(insn: 'insn_t const *', flags: uchar) -> int

```

Checks if the instruction is a "return".

Parameters:

- **`insn`** (`insn_t const *`) – The instruction.
- **`flags`** (`uchar`) – Combination of IRI\_... flags.

Returns:

- **`int`** ( `int` ) – 0: Unknown. \<0: No, not a return. 1: Yes, is a return.

#### ev_is_sane_insn

```
ev_is_sane_insn(
    insn: 'insn_t const *', no_crefs: int
) -> int

```

Checks if the instruction is sane for the current file type.

Parameters:

- **`insn`** (`insn_t const *`) – The instruction.
- **`no_crefs`** (`int`) – 1 if the instruction has no code refs (IDA just tries to convert unexplored bytes to an instruction), 0 if created because of some coderef, user request or other weighty reason.

Returns:

- **`int`** ( `int` ) – =0: OK (sane). \<0: No, the instruction isn't likely to appear in the program.

#### ev_is_sp_based

```
ev_is_sp_based(
    mode: 'int *',
    insn: 'insn_t const *',
    op: 'op_t const *',
) -> int

```

Check whether the operand is relative to stack pointer or frame pointer.

This event is used to determine how to output a stack variable. If not implemented, all operands are sp based by default. Implement this only if some stack references use frame pointer instead of stack pointer.

Parameters:

- **`mode`** (`int *`) – Out, combination of SP/FP operand flags.
- **`insn`** (`insn_t const *`) – The instruction.
- **`op`** (`op_t const *`) – The operand.

Returns:

- **`int`** ( `int` ) – 0 if not implemented, 1 if ok.

#### ev_is_switch

```
ev_is_switch(
    si: switch_info_t, insn: 'insn_t const *'
) -> int

```

Find 'switch' idiom or override processor module's decision.

Called for instructions marked with CF_JUMP.

Parameters:

- **`si`** (`switch_info_t`) – Output, switch info.
- **`insn`** (`insn_t const *`) – Instruction possibly belonging to a switch.

Returns:

- **`int`** ( `int` ) – 1: Switch is found, 'si' is filled. -1: No switch found. Forbids switch creation by processor module. 0: Not implemented.

#### ev_last_cb_before_loader

```
ev_last_cb_before_loader() -> int

```

#### ev_loader

```
ev_loader() -> int

```

This code and higher ones are reserved for the loaders. The arguments and the return values are defined by the loaders.

#### ev_lower_func_type

```
ev_lower_func_type(
    argnums: 'intvec_t *', fti: func_type_data_t
) -> int

```

Get function arguments to convert to pointers when lowering prototype.

The processor module can also modify 'fti' for non-standard conversions. argnums[0] can contain a special negative value indicating that the return value should be passed as a hidden 'retstr' argument:

- -1: first argument, return pointer to the argument
- -2: last argument, return pointer to the argument
- -3: first argument, return void

Parameters:

- **`argnums`** (`intvec_t`) – Output, numbers of arguments to convert to pointers (ascending order).
- **`fti`** (`func_type_data_t`) – Inout, function type details.

Returns:

- **`int`** ( `int` ) – 0 if not implemented, 1 if argnums was filled, 2 if argnums was filled and fti substantially changed.

#### ev_max_ptr_size

```
ev_max_ptr_size() -> int

```

Get maximal size of a pointer in bytes.

Returns:

- **`int`** ( `int` ) – Maximum possible size of a pointer.

#### ev_may_be_func

```
ev_may_be_func(insn: 'insn_t const *', state: int) -> int

```

Checks if a function can start at this instruction.

Parameters:

- **`insn`** (`insn_t const *`) – The instruction.
- **`state`** (`int`) – Autoanalysis phase. 0 for creating functions, 1 for creating chunks.

Returns:

- **`int`** ( `int` ) – Probability (1..100).

#### ev_may_show_sreg

```
ev_may_show_sreg(current_ea: ea_t) -> int

```

The kernel wants to display the segment registers in the messages window.

Parameters:

- **`current_ea`** (`ea_t`) – Current address.

Returns:

- **`int`** ( `int` ) – \<0 if the kernel should not show the segment registers (assuming the module has done it), 0 if not implemented.

#### ev_moving_segm

```
ev_moving_segm(
    seg: 'segment_t *', to: ea_t, flags: int
) -> int

```

May the kernel move the segment?

Parameters:

- **`seg`** (`segment_t *`) – Segment to move.
- **`to`** (`ea_t`) – New segment start address.
- **`flags`** (`int`) – Combination of Move segment flags.

Returns:

- **`int`** ( `int` ) – 0 for yes, \<0 for the kernel should stop.

#### ev_newasm

```
ev_newasm(asmnum: int) -> int

```

Called before setting a new assembler.

Parameters:

- **`asmnum`** (`int`) – The assembler number. See also ev_asm_installed.

#### ev_newbinary

```
ev_newbinary(
    filename: 'char *',
    fileoff: qoff64_t,
    basepara: ea_t,
    binoff: ea_t,
    nbytes: uint64,
) -> int

```

Called when IDA is about to load a binary file.

Parameters:

- **`filename`** (`char *`) – Binary file name.
- **`fileoff`** (`qoff64_t`) – Offset in the file.
- **`basepara`** (`ea_t`) – Base loading paragraph.
- **`binoff`** (`ea_t`) – Loader offset.
- **`nbytes`** (`uint64`) – Number of bytes to load.

#### ev_newfile

```
ev_newfile(fname: 'char *') -> int

```

Called when a new file has been loaded.

Parameters:

- **`fname`** (`char *`) – The input file name.

#### ev_newprc

```
ev_newprc(pnum: int, keep_cfg: bool) -> int

```

Called before changing processor type.

Parameters:

- **`pnum`** (`int`) – Processor number in the array of processor names.
- **`keep_cfg`** (`bool`) – True to not modify kernel configuration.

Returns:

- **`int`** ( `int` ) – 1 if OK, \<0 to prohibit change.

#### ev_next_exec_insn

```
ev_next_exec_insn(
    target: 'ea_t *',
    ea: ea_t,
    tid: int,
    getreg: 'processor_t::regval_getter_t *',
    regvalues: regval_t,
) -> int

```

Get next address to be executed.

Must return the next address to be executed. If the instruction following the current one is executed, return BADADDR. Usually used for jumps, branches, calls, returns. This is essential if "single step" is not supported in hardware.

Parameters:

- **`target`** (`ea_t *`) – Out: pointer to the answer.
- **`ea`** (`ea_t`) – Instruction address.
- **`tid`** (`int`) – Current thread id.
- **`getreg`** (`processor_t`) – :regval_getter_t \*): Function to get register values.
- **`regvalues`** (`regval_t`) – Register values array (const).

Returns:

- **`int`** ( `int` ) – 0 if unimplemented, 1 if implemented.

#### ev_oldfile

```
ev_oldfile(fname: 'char *') -> int

```

Called when an old file has been loaded.

Parameters:

- **`fname`** (`char *`) – The input file name.

#### ev_out_assumes

```
ev_out_assumes(outctx: 'outctx_t *') -> int

```

Produce assume directives when segment register value changes.

Parameters:

- **`outctx`** (`outctx_t *`) – Output context.

Returns:

- **`int`** ( `int` ) – 1 if OK, 0 if not implemented.

#### ev_out_data

```
ev_out_data(
    outctx: 'outctx_t *', analyze_only: bool
) -> int

```

Generate text representation of data items.

This function may change the database and create cross-references if analyze_only is set.

Parameters:

- **`outctx`** (`outctx_t *`) – Output context.
- **`analyze_only`** (`bool`) – True if only analysis should be performed.

Returns:

- **`int`** ( `int` ) – 1 if OK, 0 if not implemented.

#### ev_out_footer

```
ev_out_footer(outctx: 'outctx_t *') -> int

```

Produce the end of disassembled text.

Parameters:

- **`outctx`** (`outctx_t *`) – Output context.

#### ev_out_header

```
ev_out_header(outctx: 'outctx_t *') -> int

```

Produce the start of disassembled text.

Parameters:

- **`outctx`** (`outctx_t *`) – Output context.

#### ev_out_insn

```
ev_out_insn(outctx: 'outctx_t *') -> bool

```

Generate text representation of an instruction in 'ctx.insn'.

outctx_t provides functions to output the generated text. This function shouldn't change the database, flags, or anything else. All these actions should be performed only by emu_insn().

Parameters:

- **`outctx`** (`outctx_t *`) – Output context.

#### ev_out_label

```
ev_out_label(
    outctx: 'outctx_t *', colored_name: str
) -> int

```

The kernel is going to generate an instruction label line or a function header.

Parameters:

- **`outctx`** (`outctx_t *`) – Output context.
- **`colored_name`** (`str`) – Colored name string.

Returns:

- **`int`** ( `int` ) – \<0 if the kernel should not generate the label, 0 if not implemented or continue.

#### ev_out_mnem

```
ev_out_mnem(outctx: 'outctx_t *') -> int

```

Generate instruction mnemonics.

This callback should append the colored mnemonics to ctx.outbuf. Optional notification; if absent, out_mnem will be called.

Parameters:

- **`outctx`** (`outctx_t *`) – Output context.

Returns:

- **`int`** ( `int` ) – 1 if appended the mnemonics, 0 if not implemented.

#### ev_out_operand

```
ev_out_operand(
    outctx: 'outctx_t *', op: 'op_t const *'
) -> bool

```

Generate text representation of an instruction operand.

outctx_t provides functions to output the generated text. All these actions should be performed only by emu_insn().

Parameters:

- **`outctx`** (`outctx_t *`) – Output context.
- **`op`** (`op_t const *`) – Operand.

Returns:

- **`bool`** ( `bool` ) – True (1) if OK, False (-1) if the operand is hidden.

#### ev_out_segend

```
ev_out_segend(
    outctx: 'outctx_t *', seg: 'segment_t *'
) -> int

```

Produce the end of a segment in disassembled output.

Parameters:

- **`outctx`** (`outctx_t *`) – Output context.
- **`seg`** (`segment_t *`) – Segment.

Returns:

- **`int`** ( `int` ) – 1 if OK, 0 if not implemented.

#### ev_out_segstart

```
ev_out_segstart(
    outctx: 'outctx_t *', seg: 'segment_t *'
) -> int

```

Produce the start of a segment in disassembled output.

Parameters:

- **`outctx`** (`outctx_t *`) – Output context.
- **`seg`** (`segment_t *`) – Segment.

Returns:

- **`int`** ( `int` ) – 1 if OK, 0 if not implemented.

#### ev_out_special_item

```
ev_out_special_item(
    outctx: 'outctx_t *', segtype: uchar
) -> int

```

Generate text representation of an item in a special segment.

Examples: absolute symbols, externs, communal definitions, etc.

Parameters:

- **`outctx`** (`outctx_t *`) – Output context.
- **`segtype`** (`uchar`) – Segment type.

Returns:

- **`int`** ( `int` ) – 1 if OK, 0 if not implemented, -1 on overflow.

#### ev_privrange_changed

```
ev_privrange_changed(
    old_privrange: range_t, delta: adiff_t
) -> int

```

Privrange interval has been moved to a new location. Most common actions: fix indices of netnodes used by module.

Parameters:

- **`old_privrange`** (`range_t`) – Old privrange interval.
- **`delta`** (`adiff_t`) – Address difference.

Returns:

- **`int`** ( `int` ) – 0 for Ok, -1 for error (and message in errbuf).

#### ev_realcvt

```
ev_realcvt(
    m: 'void *', e: 'fpvalue_t *', swt: uint16
) -> int

```

Floating point to IEEE conversion.

Parameters:

- **`m`** (`void *`) – Pointer to processor-specific floating point value.
- **`e`** (`fpvalue_t *`) – IDA representation of a floating point value.
- **`swt`** (`uint16`) – Operation (see realcvt() in ieee.h).

Returns:

- **`int`** ( `int` ) – 0 if not implemented.

#### ev_rename

```
ev_rename(ea: ea_t, new_name: str) -> int

```

The kernel is going to rename a byte.

Parameters:

- **`ea`** (`ea_t`) – Address of the item to rename.
- **`new_name`** (`str`) – New name to assign.

Returns:

- **`int`** ( `int` ) – \<0: If the kernel should not rename it. 2: To inhibit the notification. The kernel should not rename, but 'set_name()' should return 'true'. (Also see 'renamed'.) The return value is ignored when kernel is going to delete name.

#### ev_replaying_undo

```
ev_replaying_undo(
    action_name: str,
    vec: 'undo_records_t const *',
    is_undo: bool,
) -> int

```

Replaying an undo/redo buffer.

Parameters:

- **`action_name`** (`str`) – Action being undone or redone (can be None for intermediary buffers).
- **`vec`** (`undo_records_t const *`) – Undo records vector.
- **`is_undo`** (`bool`) – True if undo, False if redo.

Returns:

- **`int`** ( `int` ) – 1 if ok, 0 if not implemented.

#### ev_set_code16_mode

```
ev_set_code16_mode(ea: ea_t, code16: bool) -> int

```

Set ISA 16-bit mode (for some processors, e.g. ARM Thumb, PPC VLE, MIPS16).

Parameters:

- **`ea`** (`ea_t`) – Address to set new ISA mode.
- **`code16`** (`bool`) – True for 16-bit mode, False for 32-bit mode.

Returns:

- **`int`** ( `int` ) – 1 if ok, 0 if not implemented.

#### ev_set_proc_options

```
ev_set_proc_options(options: str, confidence: int) -> int

```

Called if the user specified an option string in the command line or via SetProcessorType.

Can be used for setting a processor subtype. Also called if option string is passed to set_processor_type() and IDC's SetProcessorType().

Parameters:

- **`options`** (`str`) – Option string (e.g., processor subtype).
- **`confidence`** (`int`) – 0 for loader's suggestion, 1 for user's decision.

Returns:

- **`int`** ( `int` ) – \<0 if bad option string.

#### ev_setup_til

```
ev_setup_til() -> int

```

Setup default type libraries.

Called after loading a new file into the database. The processor module may load TILs, setup memory model, and perform other actions required to set up the type system. This is an optional callback.

Returns:

- **`int`** ( `int` ) – 1 if ok, 0 if not implemented.

#### ev_str2reg

```
ev_str2reg(regname: str) -> int

```

Convert a register name to a register number.

The register number is the register index in the processor_t::reg_names array. Most processor modules do not need to implement this callback; useful only if processor_t::reg_names[reg] does not provide the correct register names.

Parameters:

- **`regname`** (`str`) – Register name.

Returns:

- **`int`** ( `int` ) – Register number + 1, 0 if not implemented or could not be decoded.

#### ev_term

```
ev_term() -> int

```

The IDP module is being unloaded.

#### ev_treat_hindering_item

```
ev_treat_hindering_item(
    hindering_item_ea: ea_t,
    new_item_flags: flags64_t,
    new_item_ea: ea_t,
    new_item_length: asize_t,
) -> int

```

An item hinders creation of another item.

Parameters:

- **`hindering_item_ea`** (`ea_t`) – Address of the hindering item.
- **`new_item_flags`** (`flags64_t`) – Flags for the new item (0 for code).
- **`new_item_ea`** (`ea_t`) – Address of the new item.
- **`new_item_length`** (`asize_t`) – Length of the new item.

Returns:

- **`int`** ( `int` ) – 0 for no reaction, !=0 if the kernel may delete the hindering item.

#### ev_undefine

```
ev_undefine(ea: ea_t) -> int

```

An item in the database (instruction or data) is being deleted.

Parameters:

- **`ea`** (`ea_t`) – Address.

Returns:

- **`int`** ( `int` ) – 1 to not delete srranges at the item end, 0 to allow srranges to be deleted.

#### ev_update_call_stack

```
ev_update_call_stack(
    stack: call_stack_t,
    tid: int,
    getreg: 'processor_t::regval_getter_t *',
    regvalues: regval_t,
) -> int

```

Calculate the call stack trace for the given thread.

This callback is invoked when the process is suspended and should fill the 'trace' object with the information about the current call stack. Note that this callback is NOT invoked if the current debugger backend implements stack tracing via debugger_t::event_t::ev_update_call_stack. The debugger-specific algorithm takes priority. Implementing this callback in the processor module is useful when multiple debugging platforms follow similar patterns, and thus the same processor-specific algorithm can be used for different platforms.

Parameters:

- **`stack`** (`call_stack_t`) – Result object to fill with call stack trace.
- **`tid`** (`int`) – Thread ID.
- **`getreg`** (`processor_t`) – :regval_getter_t \*): Function to get register values.
- **`regvalues`** (`regval_t`) – Register values array.

Returns:

- **`int`** ( `int` ) – 1 if ok, -1 if failed, 0 if unimplemented.

#### ev_use_arg_types

```
ev_use_arg_types(
    ea: ea_t, fti: func_type_data_t, rargs: 'funcargvec_t *'
) -> int

```

Use information about callee arguments.

Parameters:

- **`ea`** (`ea_t`) – Address of the call instruction.
- **`fti`** (`func_type_data_t`) – Function type info.
- **`rargs`** (`funcargvec_t`) – Array of register arguments.

Returns:

- **`int`** ( `int` ) – 1 if handled (removes handled args from fti/rargs), 0 if not implemented.

#### ev_use_regarg_type

```
ev_use_regarg_type(
    ea: ea_t, rargs: 'funcargvec_t const *'
) -> 'PyObject *'

```

Use information about register argument.

Parameters:

- **`ea`** (`ea_t`) – Address of the instruction.
- **`rargs`** (`funcargvec_t`) – Vector of register arguments.

Returns:

- `'PyObject *'` – PyObject\*: 1 if ok, 0 if not implemented.

#### ev_use_stkarg_type

```
ev_use_stkarg_type(ea: ea_t, arg: funcarg_t) -> int

```

Use information about a stack argument.

Parameters:

- **`ea`** (`ea_t`) – Address of the push instruction which pushes the argument onto the stack.
- **`arg`** (`funcarg_t`) – Argument information.

Returns:

- **`int`** ( `int` ) – 1 if ok, \<=0 if failed (kernel will create a comment for the instruction).

#### ev_validate_flirt_func

```
ev_validate_flirt_func(
    start_ea: ea_t, funcname: str
) -> int

```

FLIRT has recognized a library function. This callback can be used by a plugin or proc module to intercept and validate such a function.

Parameters:

- **`start_ea`** (`ea_t`) – Function start address.
- **`funcname`** (`str`) – Recognized function name.

Returns:

- **`int`** ( `int` ) – -1 to not create a function, 0 if function is validated.

#### ev_verify_noreturn

```
ev_verify_noreturn(pfn: 'func_t *') -> int

```

The kernel wants to set 'noreturn' flags for a function.

Parameters:

- **`pfn`** (`func_t *`) – The function.

Returns:

- **`int`** ( `int` ) – 0 if ok, any other value means do not set 'noreturn' flag.

#### ev_verify_sp

```
ev_verify_sp(pfn: 'func_t *') -> int

```

Called after all function instructions have been analyzed.

Now the processor module can analyze the stack pointer for the whole function.

Parameters:

- **`pfn`** (`func_t *`) – The function.

Returns:

- **`int`** ( `int` ) – 0 if ok, \<0 if bad stack pointer.

#### hook

```
hook() -> None

```

Hook (activate) the event handlers.

#### log

```
log(msg: str = '') -> None

```

Utility method to optionally log called hooks and their parameters.

#### unhook

```
unhook() -> None

```

Un-hook (de-activate) the event handlers.

### UIHooks

```
UIHooks()

```

Bases: `_BaseHooks`, `UI_Hooks`

Convenience class for UI events handling.

Methods:

- **`create_desktop_widget`** – Create a widget to be placed in the widget tree (at desktop-creation time).
- **`current_widget_changed`** – Called when the currently-active TWidget has changed.
- **`database_closed`** – The database has been closed.
- **`database_inited`** – Called when database initialization has completed and the kernel is about to run IDC
- **`debugger_menu_change`** – Notifies about debugger menu modification.
- **`desktop_applied`** – Called when a desktop has been applied.
- **`destroying_plugmod`** – Called when the plugin object is about to be destroyed.
- **`destroying_procmod`** – Called when the processor module is about to be destroyed.
- **`finish_populating_widget_popup`** – Called when IDA is about to be done populating the context menu for a widget.
- **`get_chooser_item_attrs`** – Get item-specific attributes for a chooser.
- **`get_custom_viewer_hint`** – Requests a hint for a viewer (idaview or custom).
- **`get_ea_hint`** – Requests a simple hint for an address. Use this event to generate a custom hint.
- **`get_item_hint`** – Requests a multiline hint for an item.
- **`get_lines_rendering_info`** – Get lines rendering information.
- **`get_widget_config`** – Retrieve the widget configuration.
- **`hook`** – Hook (activate) the event handlers.
- **`idcstart`** – Start of IDC engine work.
- **`idcstop`** – Stop of IDC engine work.
- **`initing_database`** – Called when database initialization has started.
- **`log`** – Utility method to optionally log called hooks and their parameters.
- **`plugin_loaded`** – Called when a plugin has been loaded in memory.
- **`plugin_unloading`** – Called when a plugin is about to be unloaded.
- **`populating_widget_popup`** – Called when IDA is populating the context menu for a widget.
- **`postprocess_action`** – Called after an IDA UI action has been handled.
- **`preprocess_action`** – Called when the IDA UI is about to handle a user action.
- **`range`** – The disassembly range has been changed (idainfo::min_ea ... idainfo::max_ea).
- **`ready_to_run`** – Called when all UI elements have been initialized.
- **`resume`** – Resume the suspended graphical interface. Only the text version.
- **`saved`** – The kernel has saved the database. This callback just informs the interface.
- **`saving`** – The kernel is flushing its buffers to the disk.
- **`screen_ea_changed`** – Called when the "current address" has changed.
- **`set_widget_config`** – Set the widget configuration.
- **`suspend`** – Suspend graphical interface. Only the text version.
- **`unhook`** – Un-hook (de-activate) the event handlers.
- **`updated_actions`** – Called when IDA is done updating actions.
- **`updating_actions`** – Called when IDA is about to update all actions.
- **`widget_closing`** – Called when a TWidget is about to close. This event precedes ui_widget_invisible.
- **`widget_invisible`** – Called when a TWidget is being closed. Use this event to destroy the window controls.
- **`widget_visible`** – Called when a TWidget is displayed on the screen.

Attributes:

- **`database`** (`Database`) – Get the database reference, guaranteed to be non-None when called from
- **`is_hooked`** (`bool`) –
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

#### is_hooked

```
is_hooked: bool

```

#### m_database

```
m_database = database

```

#### create_desktop_widget

```
create_desktop_widget(
    title: str, cfg: jobj_wrapper_t
) -> 'PyObject *'

```

Create a widget to be placed in the widget tree (at desktop-creation time).

Parameters:

- **`title`** (`str`) – The widget title.
- **`cfg`** (`jobj_t`) – Configuration object.

Returns:

- `'PyObject *'` – PyObject\*: The created widget, or None.

#### current_widget_changed

```
current_widget_changed(
    widget: 'TWidget *', prev_widget: 'TWidget *'
) -> None

```

Called when the currently-active TWidget has changed.

Parameters:

- **`widget`** (`TWidget*`) – The new active widget.
- **`prev_widget`** (`TWidget*`) – The previously active widget.

#### database_closed

```
database_closed() -> None

```

The database has been closed. See also processor_t::closebase, it occurs earlier. See also ui_initing_database. This is not the same as IDA exiting. If you need to perform cleanup at the exiting time, use qatexit().

#### database_inited

```
database_inited(
    is_new_database: int, idc_script: str
) -> None

```

Called when database initialization has completed and the kernel is about to run IDC scripts.

Parameters:

- **`is_new_database`** (`int`) – Non-zero if the database is new.
- **`idc_script`** (`str`) – The IDC script to run (may be None).

Note

See also ui_initing_database. This event is called for both new and old databases.

#### debugger_menu_change

```
debugger_menu_change(enable: bool) -> None

```

Notifies about debugger menu modification. Args: enable (bool): True if the debugger menu has been added or a different debugger has been selected. False if the debugger menu will be removed (user switched to "No debugger").

#### desktop_applied

```
desktop_applied(
    name: str, from_idb: bool, type: int
) -> None

```

Called when a desktop has been applied.

Parameters:

- **`name`** (`str`) – The desktop name.
- **`from_idb`** (`bool`) – True if the desktop was stored in the IDB, False if it comes from the registry.
- **`type`** (`int`) – The desktop type (1-disassembly, 2-debugger, 3-merge).

#### destroying_plugmod

```
destroying_plugmod(
    plugmod: plugmod_t, entry: 'plugin_t const *'
) -> None

```

Called when the plugin object is about to be destroyed.

Parameters:

- **`plugmod`** (`plugmod_t`) – The plugin object being destroyed.
- **`entry`** (`plugin_t const *`) – Plugin entry.

#### destroying_procmod

```
destroying_procmod(procmod: procmod_t) -> None

```

Called when the processor module is about to be destroyed.

Parameters:

- **`procmod`** (`procmod_t`) – The processor module being destroyed.

#### finish_populating_widget_popup

```
finish_populating_widget_popup(
    widget: 'TWidget *',
    popup_handle: 'TPopupMenu *',
    ctx: action_ctx_base_t = None,
) -> None

```

Called when IDA is about to be done populating the context menu for a widget.

This is your chance to attach_action_to_popup().

Parameters:

- **`widget`** (`TWidget*`) – The widget for which the popup is being finalized.
- **`popup_handle`** (`TPopupMenu*`) – The popup menu handle.
- **`ctx`** (`action_activation_ctx_t`, default: `None` ) – The action context.

#### get_chooser_item_attrs

```
get_chooser_item_attrs(
    chooser: chooser_base_t,
    n: size_t,
    attrs: chooser_item_attrs_t,
) -> None

```

Get item-specific attributes for a chooser.

This callback is generated only after enable_chooser_attrs().

Parameters:

- **`chooser`** (`chooser_base_t`) – The chooser object.
- **`n`** (`size_t`) – Index of the item.
- **`attrs`** (`chooser_item_attrs_t`) – Attributes to be set.

#### get_custom_viewer_hint

```
get_custom_viewer_hint(
    viewer: 'TWidget *', place: place_t
) -> 'PyObject *'

```

Requests a hint for a viewer (idaview or custom).

Each subscriber should append their hint lines to HINT and increment IMPORTANT_LINES accordingly. Completely overwriting the existing lines in HINT is possible but not recommended.

If the REG_HINTS_MARKER sequence is found in the returned hints string, it will be replaced with the contents of the "regular" hints. If the SRCDBG_HINTS_MARKER sequence is found, it will be replaced with the contents of the source-level debugger-generated hints.

Special keywords

- HIGHLIGHT text: Where 'text' will be highlighted.
- CAPTION caption: Caption for the hint widget.

Parameters:

- **`viewer`** (`TWidget*`) – The viewer widget.
- **`place`** (`place_t*`) – The current position in the viewer.

Returns:

- `'PyObject *'` – PyObject\*: 0 to continue collecting hints from other subscribers,
- `'PyObject *'` – 1 to stop collecting hints.

#### get_ea_hint

```
get_ea_hint(ea: ea_t) -> 'PyObject *'

```

Requests a simple hint for an address. Use this event to generate a custom hint. See also: more generic ui_get_item_hint. Args: ea (ea_t): The address for which the hint is requested. Returns: PyObject\*: True if a hint was generated.

#### get_item_hint

```
get_item_hint(ea: ea_t, max_lines: int) -> 'PyObject *'

```

Requests a multiline hint for an item. See also: more generic ui_get_custom_viewer_hint. Args: ea (ea_t): Address or item id (e.g., structure or enum member). max_lines (int): Maximum number of lines to show. Returns: PyObject\*: True if a hint was generated.

#### get_lines_rendering_info

```
get_lines_rendering_info(
    out: lines_rendering_output_t,
    widget: 'TWidget const *',
    info: lines_rendering_input_t,
) -> None

```

Get lines rendering information.

Parameters:

- **`out`** (`lines_rendering_output_t`) – Output information to be populated.
- **`widget`** (`TWidget const*`) – The widget for which rendering info is requested.
- **`info`** (`lines_rendering_input_t`) – Input rendering information.

#### get_widget_config

```
get_widget_config(
    widget: 'TWidget const *', cfg: 'jobj_t *'
) -> 'PyObject *'

```

Retrieve the widget configuration.

This configuration will be passed back at `ui_create_desktop_widget` and `ui_set_widget_config` time.

Parameters:

- **`widget`** (`TWidget const *`) – The widget to retrieve configuration for.
- **`cfg`** (`jobj_t *`) – Configuration object.

Returns:

- `'PyObject *'` – PyObject\*: The widget configuration.

#### hook

```
hook() -> None

```

Hook (activate) the event handlers.

#### idcstart

```
idcstart() -> None

```

Start of IDC engine work.

#### idcstop

```
idcstop() -> None

```

Stop of IDC engine work.

#### initing_database

```
initing_database() -> None

```

Called when database initialization has started.

See also: `ui_database_inited`. This event is called for both new and old databases.

#### log

```
log(msg: str = '') -> None

```

Utility method to optionally log called hooks and their parameters.

#### plugin_loaded

```
plugin_loaded(plugin_info: 'plugin_info_t const *') -> None

```

Called when a plugin has been loaded in memory.

Parameters:

- **`plugin_info`** (`plugin_info_t const*`) – Information about the loaded plugin.

#### plugin_unloading

```
plugin_unloading(
    plugin_info: 'plugin_info_t const *',
) -> None

```

Called when a plugin is about to be unloaded.

Parameters:

- **`plugin_info`** (`plugin_info_t const*`) – Information about the plugin being unloaded.

#### populating_widget_popup

```
populating_widget_popup(
    widget: 'TWidget *',
    popup_handle: 'TPopupMenu *',
    ctx: action_ctx_base_t = None,
) -> None

```

Called when IDA is populating the context menu for a widget.

This is your chance to attach_action_to_popup(). See also `ui_finish_populating_widget_popup` if you want to augment the context menu with your own actions after the menu has been properly populated by the owning component or plugin (which typically does it on ui_populating_widget_popup).

Parameters:

- **`widget`** (`TWidget *`) – The widget for which the popup is being populated.
- **`popup_handle`** (`TPopupMenu *`) – The popup menu handle.
- **`ctx`** (`action_activation_ctx_t`, default: `None` ) – The action context.

#### postprocess_action

```
postprocess_action() -> None

```

Called after an IDA UI action has been handled.

#### preprocess_action

```
preprocess_action(name: str) -> int

```

Called when the IDA UI is about to handle a user action.

Parameters:

- **`name`** (`str`) – UI action name. These names can be looked up in ida[tg]ui.cfg.

Returns:

- **`int`** ( `int` ) – 0 if OK, nonzero if a plugin has handled the command.

#### range

```
range() -> None

```

The disassembly range has been changed (idainfo::min_ea ... idainfo::max_ea). UI should redraw the scrollbars. See also: ui_lock_range_refresh.

#### ready_to_run

```
ready_to_run() -> None

```

Called when all UI elements have been initialized.

Automatic plugins may hook to this event to perform their tasks.

#### resume

```
resume() -> None

```

Resume the suspended graphical interface. Only the text version. Interface should respond to it.

#### saved

```
saved(path: str) -> None

```

The kernel has saved the database. This callback just informs the interface. Note that at the time this notification is sent, the internal paths are not updated yet, and calling get_path(PATH_TYPE_IDB) will return the previous path. Args: path (str): The database path.

#### saving

```
saving() -> None

```

The kernel is flushing its buffers to the disk. The user interface should save its state.

#### screen_ea_changed

```
screen_ea_changed(ea: ea_t, prev_ea: ea_t) -> None

```

Called when the "current address" has changed.

Parameters:

- **`ea`** (`ea_t`) – The new address.
- **`prev_ea`** (`ea_t`) – The previous address.

#### set_widget_config

```
set_widget_config(
    widget: 'TWidget const *', cfg: jobj_wrapper_t
) -> None

```

Set the widget configuration.

Parameters:

- **`widget`** (`TWidget const *`) – The widget to configure.
- **`cfg`** (`jobj_t`) – Configuration object.

#### suspend

```
suspend() -> None

```

Suspend graphical interface. Only the text version. Interface should respond to it.

#### unhook

```
unhook() -> None

```

Un-hook (de-activate) the event handlers.

#### updated_actions

```
updated_actions() -> None

```

Called when IDA is done updating actions.

#### updating_actions

```
updating_actions(ctx: action_ctx_base_t) -> None

```

Called when IDA is about to update all actions.

If your plugin needs to perform expensive operations more than once (e.g., once per action it registers), you should do them only once, right away.

Parameters:

- **`ctx`** (`action_update_ctx_t`) – The update context.

#### widget_closing

```
widget_closing(widget: 'TWidget *') -> None

```

Called when a TWidget is about to close. This event precedes ui_widget_invisible. Use this to perform any actions relevant to the lifecycle of this widget. Args: widget (TWidget\*): The widget that is about to close.

#### widget_invisible

```
widget_invisible(widget: 'TWidget *') -> None

```

Called when a TWidget is being closed. Use this event to destroy the window controls. Args: widget (TWidget\*): The widget that became invisible.

#### widget_visible

```
widget_visible(widget: 'TWidget *') -> None

```

Called when a TWidget is displayed on the screen. Use this event to populate the window with controls. Args: widget (TWidget\*): The widget that became visible.

### ViewHooks

```
ViewHooks()

```

Bases: `_BaseHooks`, `View_Hooks`

Convenience class for IDA View events handling.

Methods:

- **`hook`** – Hook (activate) the event handlers.
- **`log`** – Utility method to optionally log called hooks and their parameters.
- **`unhook`** – Un-hook (de-activate) the event handlers.
- **`view_activated`** – Called when a view is activated.
- **`view_click`** – Called when a click event occurs in the view.
- **`view_close`** – Called when a view is closed.
- **`view_created`** – Called when a view is created.
- **`view_curpos`** – Called when the cursor position in a view changes.
- **`view_dblclick`** – Called when a double-click event occurs in the view.
- **`view_deactivated`** – Called when a view is deactivated.
- **`view_keydown`** – Called when a key down event occurs in the view.
- **`view_loc_changed`** – Called when the location for the view has changed.
- **`view_mouse_moved`** – Called when the mouse moved in the view.
- **`view_mouse_over`** – Called when the mouse moves over (or out of) a node or an edge.
- **`view_switched`** – Called when a view's renderer has changed.

Attributes:

- **`database`** (`Database`) – Get the database reference, guaranteed to be non-None when called from
- **`is_hooked`** (`bool`) –
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

#### is_hooked

```
is_hooked: bool

```

#### m_database

```
m_database = database

```

#### hook

```
hook() -> None

```

Hook (activate) the event handlers.

#### log

```
log(msg: str = '') -> None

```

Utility method to optionally log called hooks and their parameters.

#### unhook

```
unhook() -> None

```

Un-hook (de-activate) the event handlers.

#### view_activated

```
view_activated(view: 'TWidget *') -> None

```

Called when a view is activated. Args: view (TWidget \*): The activated view.

#### view_click

```
view_click(
    view: 'TWidget *', event: view_mouse_event_t
) -> None

```

Called when a click event occurs in the view. Args: view (TWidget \*): The view where the click occurred. event (view_mouse_event_t): The mouse event information.

#### view_close

```
view_close(view: 'TWidget *') -> None

```

Called when a view is closed. Args: view (TWidget \*): The closed view.

#### view_created

```
view_created(view: 'TWidget *') -> None

```

Called when a view is created. Args: view (TWidget \*): The created view.

#### view_curpos

```
view_curpos(view: 'TWidget *') -> None

```

Called when the cursor position in a view changes. Args: view (TWidget \*): The view whose cursor position changed.

#### view_dblclick

```
view_dblclick(
    view: 'TWidget *', event: view_mouse_event_t
) -> None

```

Called when a double-click event occurs in the view. Args: view (TWidget \*): The view where the double-click occurred. event (view_mouse_event_t): The mouse event information.

#### view_deactivated

```
view_deactivated(view: 'TWidget *') -> None

```

Called when a view is deactivated. Args: view (TWidget \*): The deactivated view.

#### view_keydown

```
view_keydown(
    view: 'TWidget *', key: int, state: view_event_state_t
) -> None

```

Called when a key down event occurs in the view. Args: view (TWidget \*): The view receiving the key event. key (int): The key code. state (view_event_state_t): The event state.

#### view_loc_changed

```
view_loc_changed(
    view: 'TWidget *',
    now: 'lochist_entry_t const *',
    was: 'lochist_entry_t const *',
) -> None

```

Called when the location for the view has changed. (Can be either the place_t, the renderer_info_t, or both.) Args: view (TWidget *): The view whose location changed. now (lochist_entry_t const* ): The new location. was (lochist_entry_t const \*): The previous location.

#### view_mouse_moved

```
view_mouse_moved(
    view: 'TWidget *', event: view_mouse_event_t
) -> None

```

Called when the mouse moved in the view. Args: view (TWidget \*): The view where the mouse moved. event (view_mouse_event_t): The mouse event information.

#### view_mouse_over

```
view_mouse_over(
    view: 'TWidget *', event: view_mouse_event_t
) -> None

```

Called when the mouse moves over (or out of) a node or an edge. This is only relevant in a graph view. Args: view (TWidget \*): The graph view. event (view_mouse_event_t): The mouse event information.

#### view_switched

```
view_switched(
    view: 'TWidget *', rt: tcc_renderer_type_t
) -> None

```

Called when a view's renderer has changed. Args: view (TWidget \*): The view that was switched. rt (tcc_renderer_type_t): The new renderer type.
