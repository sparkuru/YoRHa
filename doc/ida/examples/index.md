# Examples

This section provides few examples of using the IDA Domain API for common reverse engineering tasks.

## Basic Database Operations

### Opening and Exploring a Database

```
"""
Database exploration example for IDA Domain API.

This example demonstrates how to open an IDA database and explore its basic properties.
"""

import argparse
from dataclasses import asdict

import ida_domain
from ida_domain import Database
from ida_domain.database import IdaCommandOptions


def explore_database(db_path):
    """Explore basic database information."""
    ida_options = IdaCommandOptions(auto_analysis=True, new_database=False)
    with Database.open(db_path, ida_options) as db:
        # Get basic information
        print(f'Address range: {hex(db.minimum_ea)} - {hex(db.maximum_ea)}')

        # Get metadata
        print('Database metadata:')
        metadata_dict = asdict(db.metadata)
        for key, value in metadata_dict.items():
            print(f'  {key}: {value}')

        # Count functions
        function_count = 0
        for _ in db.functions:
            function_count += 1
        print(f'Total functions: {function_count}')


def main():
    """Main entry point with argument parsing."""
    parser = argparse.ArgumentParser(description='Database exploration example')
    parser.add_argument(
        '-f', '--input-file', help='Binary input file to be loaded', type=str, required=True
    )
    args = parser.parse_args()
    explore_database(args.input_file)


if __name__ == '__main__':
    main()

```

### Complete Traversal of a Database

This example demonstrates a complete traversal of a database:

```
#!/usr/bin/env python3
"""
Database Traversal Example for IDA Domain API

This example demonstrates how to systematically traverse an IDA database and
examine available entities. It provides a structured approach to exploring
contents of a binary analysis database.
"""

import argparse
from dataclasses import asdict

import ida_domain
import ida_domain.flowchart
from ida_domain.database import IdaCommandOptions


def print_section_header(title: str, char: str = '=') -> None:
    """Print a formatted section header for better output organization."""
    print(f'\n{char * 60}')
    print(f' {title}')
    print(f'{char * 60}')


def print_subsection_header(title: str) -> None:
    """Print a formatted subsection header."""
    print(f'\n--- {title} ---')


def traverse_metadata(db: ida_domain.Database) -> None:
    """
    Traverse and display database metadata.

    Args:
        db: The IDA database instance
    """
    print_section_header('DATABASE METADATA')

    metadata = asdict(db.metadata)
    if metadata:
        for key, value in metadata.items():
            print(f'  {key:15}: {value}')
    else:
        print('  No metadata available')

    # Additional database properties
    print(f'  {"current_ea":15}: 0x{db.current_ea:x}')
    print(f'  {"minimum_ea":15}: 0x{db.minimum_ea:x}')
    print(f'  {"maximum_ea":15}: 0x{db.maximum_ea:x}')


def traverse_segments(db: ida_domain.Database) -> None:
    """
    Traverse and display memory segments.

    Args:
        db: The IDA database instance
    """
    print_section_header('MEMORY SEGMENTS')

    segments = list(db.segments)
    print(f'Total segments: {len(segments)}')

    for i, segment in enumerate(segments, 1):
        print(
            f'  [{i:2d}] {segment.name:20} | '
            f'Start: 0x{segment.start_ea:08x} | '
            f'End: 0x{segment.end_ea:08x} | '
            f'Size: {segment.size} | '
            f'Type: {segment.type}'
        )


def traverse_functions(db: ida_domain.Database) -> None:
    """
    Traverse and display functions.

    Args:
        db: The IDA database instance
    """
    print_section_header('FUNCTIONS')

    functions = list(db.functions)
    print(f'Total functions: {len(functions)}')

    # Show first 20 functions to avoid overwhelming output
    display_count = min(20, len(functions))
    if display_count < len(functions):
        print(f'Displaying first {display_count} functions:')

    for i, func in enumerate(functions[:display_count], 1):
        print(
            f'  [{i:2d}] {func.name:30} | '
            f'Start: 0x{func.start_ea:08x} | '
            f'End: 0x{func.end_ea:08x} | '
            f'Size: {func.size}'
        )

    if display_count < len(functions):
        print(f'  ... and {len(functions) - display_count} more functions')


def traverse_entries(db: ida_domain.Database) -> None:
    """
    Traverse and display program entries.

    Args:
        db: The IDA database instance
    """
    print_section_header('PROGRAM ENTRIES')

    entries = list(db.entries)
    print(f'Total entries: {len(entries)}')

    for i, entry in enumerate(entries, 1):
        print(
            f'  [{i:2d}] {entry.name:30} | '
            f'Address: 0x{entry.address:08x} | '
            f'Ordinal: {entry.ordinal}'
        )


def traverse_heads(db: ida_domain.Database) -> None:
    """
    Traverse and display heads (data and code locations).

    Args:
        db: The IDA database instance
    """
    print_section_header('HEADS (Data/Code Locations)')

    heads = list(db.heads)
    print(f'Total heads: {len(heads)}')

    # Show first 20 heads to avoid overwhelming output
    display_count = min(20, len(heads))
    if display_count < len(heads):
        print(f'Displaying first {display_count} heads:')

    for i, head in enumerate(heads[:display_count], 1):
        print(f'  [{i:2d}] Address: 0x{head:08x}')

    if display_count < len(heads):
        print(f'  ... and {len(heads) - display_count} more heads')


def traverse_strings(db: ida_domain.Database) -> None:
    """
    Traverse and display identified strings.

    Args:
        db: The IDA database instance
    """
    print_section_header('STRINGS')

    strings = list(db.strings)
    print(f'Total strings: {len(strings)}')

    # Show first 15 strings to avoid overwhelming output
    display_count = min(15, len(strings))
    if display_count < len(strings):
        print(f'Displaying first {display_count} strings:')

    for i, item in enumerate(strings[:display_count], 1):
        # Truncate very long strings for display
        display_str = str(item)[:50] + '...' if len(str(item)) > 50 else str(i)
        print(f'  [{i:2d}] 0x{item.address:08x}: "{display_str}"')

    if display_count < len(strings):
        print(f'  ... and {len(strings) - display_count} more strings')


def traverse_names(db: ida_domain.Database) -> None:
    """
    Traverse and display names (symbols and labels).

    Args:
        db: The IDA database instance
    """
    print_section_header('NAMES (Symbols & Labels)')

    names = list(db.names)
    print(f'Total names: {len(names)}')

    # Show first 20 names to avoid overwhelming output
    display_count = min(20, len(names))
    if display_count < len(names):
        print(f'Displaying first {display_count} names:')

    for i, (ea, name) in enumerate(names[:display_count], 1):
        print(f'  [{i:2d}] 0x{ea:08x}: {name}')

    if display_count < len(names):
        print(f'  ... and {len(names) - display_count} more names')


def traverse_types(db: ida_domain.Database) -> None:
    """
    Traverse and display type definitions.

    Args:
        db: The IDA database instance
    """
    print_section_header('TYPE DEFINITIONS')

    types = list(db.types)
    print(f'Total types: {len(types)}')

    # Show first 15 types to avoid overwhelming output
    display_count = min(15, len(types))
    if display_count < len(types):
        print(f'Displaying first {display_count} types:')

    for i, type_def in enumerate(types[:display_count], 1):
        type_name = (
            type_def.get_type_name()
            if type_def.get_type_name()
            else f'<unnamed_{type_def.get_tid()}>'
        )
        print(f'  [{i:2d}] {type_name:30} | TID: {type_def.get_tid()}')

    if display_count < len(types):
        print(f'  ... and {len(types) - display_count} more types')


def traverse_comments(db: ida_domain.Database) -> None:
    """
    Traverse and display comments.

    Args:
        db: The IDA database instance
    """
    print_section_header('COMMENTS')

    # Get all comments (regular and repeatable)
    comments = list(db.comments)
    print(f'Total comments: {len(comments)}')

    # Show first 10 comments to avoid overwhelming output
    display_count = min(10, len(comments))
    if display_count < len(comments):
        print(f'Displaying first {display_count} comments:')

    for i, info in enumerate(comments[:display_count], 1):
        # Truncate very long comments for display
        text = info.comment[:60] + '...' if len(info.comment) > 60 else info.comment
        type = 'REP' if info.repeatable else 'REG'
        print(f'  [{i:2d}] 0x{info.ea:08x} [{type}]: {text}')

    if display_count < len(comments):
        print(f'  ... and {len(comments) - display_count} more comments')


def traverse_basic_blocks(db: ida_domain.Database) -> None:
    """
    Traverse and display basic blocks.

    Args:
        db: The IDA database instance
    """
    print_section_header('BASIC BLOCKS')

    flowchart = ida_domain.flowchart.FlowChart(db, None, (db.minimum_ea, db.maximum_ea))
    basic_blocks = list(flowchart)
    print(f'Total basic blocks: {len(basic_blocks)}')

    # Show first 15 basic blocks to avoid overwhelming output
    display_count = min(15, len(basic_blocks))
    if display_count < len(basic_blocks):
        print(f'Displaying first {display_count} basic blocks:')

    for i, bb in enumerate(basic_blocks[:display_count], 1):
        print(f'  [{i:2d}] Start: 0x{bb.start_ea:08x} | End: 0x{bb.end_ea:08x}')

    if display_count < len(basic_blocks):
        print(f'  ... and {len(basic_blocks) - display_count} more basic blocks')


def traverse_instructions(db: ida_domain.Database) -> None:
    """
    Traverse and display instructions with disassembly.

    Args:
        db: The IDA database instance
    """
    print_section_header('INSTRUCTIONS')

    instructions = list(db.instructions)
    print(f'Total instructions: {len(instructions)}')

    # Show first 20 instructions to avoid overwhelming output
    display_count = min(20, len(instructions))
    if display_count < len(instructions):
        print(f'Displaying first {display_count} instructions:')

    for i, inst in enumerate(instructions[:display_count], 1):
        disasm = db.instructions.get_disassembly(inst)
        if disasm:
            print(f'  [{i:2d}] 0x{inst.ea:08x}: {disasm}')
        else:
            print(f'  [{i:2d}] 0x{inst.ea:08x}: <no disassembly>')

    if display_count < len(instructions):
        print(f'  ... and {len(instructions) - display_count} more instructions')


def traverse_cross_references(db: ida_domain.Database) -> None:
    """
    Traverse and display cross-references.

    Args:
        db: The IDA database instance
    """
    print_section_header('CROSS-REFERENCES')

    # Get a sample of addresses to check for cross-references
    sample_addresses = []

    # Add function start addresses
    functions = list(db.functions)
    sample_addresses.extend([f.start_ea for f in functions[:5]])

    # Add some heads
    heads = list(db.heads)
    sample_addresses.extend(heads[:5])

    xref_count = 0
    print('Sample cross-references:')

    for addr in sample_addresses[:10]:  # Limit to first 10 addresses
        xrefs_to = list(db.xrefs.to_ea(addr))
        xrefs_from = list(db.xrefs.from_ea(addr))

        if xrefs_to or xrefs_from:
            print(f'  Address 0x{addr:08x}:')

            for xref in xrefs_to[:3]:  # Show max 3 xrefs to
                type_name = xref.type.name
                print(f'    <- FROM 0x{xref.from_ea:08x} (type: {type_name})')
                xref_count += 1

            for xref in xrefs_from[:3]:  # Show max 3 xrefs from
                type_name = xref.type.name
                print(f'    -> TO   0x{xref.to_ea:08x} (type: {type_name})')
                xref_count += 1

    print(f'Total cross-references displayed: {xref_count}')


def traverse_database(db_path: str):
    """
    Main function to traverse the entire IDA database and display all entities.

    Args:
        db_path: Path to the binary file to analyze
    """
    print_section_header('IDA DOMAIN DATABASE TRAVERSAL', '=')
    print(f'Analyzing file: {db_path}')

    # Configure IDA options for analysis
    ida_options = IdaCommandOptions(auto_analysis=True, new_database=False)

    # Open database
    with ida_domain.Database.open(db_path, ida_options, False) as db:
        # Traverse all database entities
        traverse_metadata(db)
        traverse_segments(db)
        traverse_functions(db)
        traverse_entries(db)
        traverse_heads(db)
        traverse_strings(db)
        traverse_names(db)
        traverse_types(db)
        traverse_comments(db)
        traverse_basic_blocks(db)
        traverse_instructions(db)
        traverse_cross_references(db)

        print_section_header('TRAVERSAL COMPLETE', '=')


def main():
    """Main entry point with argument parsing."""
    parser = argparse.ArgumentParser(description='IDA Database Traversal Example')
    parser.add_argument(
        '-f', '--input-file', help='Binary input file to be loaded', type=str, required=True
    )
    args = parser.parse_args()
    traverse_database(args.input_file)


if __name__ == '__main__':
    main()

```

## Function Analysis

### Finding and Analyzing Functions

```
#!/usr/bin/env python3
"""
Function analysis example for IDA Domain API.

This example demonstrates how to find and analyze functions in an IDA database.
"""

import argparse

import ida_domain
from ida_domain import Database
from ida_domain.database import IdaCommandOptions


def analyze_local_variables(db: Database, func: 'func_t') -> None:
    """Analyze local variables in a function."""
    lvars = db.functions.get_local_variables(func)
    if not lvars:
        print('  No local variables found')
        return

    print(f'  Local variables ({len(lvars)} total):')

    for lvar in lvars:
        refs = db.functions.get_local_variable_references(func, lvar)
        ref_count = len(refs)
        var_type = 'arg' if lvar.is_argument else 'ret' if lvar.is_result else 'var'
        type_str = lvar.type_str if lvar.type else 'unknown'

        print(f'    {lvar.name} ({var_type}, {type_str}): {ref_count} refs')

        # Show first reference with line info if available
        if refs and refs[0].line_number is not None:
            first_ref = refs[0]
            print(f'      first ref at line {first_ref.line_number}: {first_ref.code_line}')


def analyze_functions(
    db_path: str, pattern: str = 'main', max_results: int = 10, analyze_lvars: bool = True
) -> None:
    """Find and analyze functions matching a pattern."""
    ida_options = IdaCommandOptions(auto_analysis=True, new_database=False)
    with ida_domain.Database.open(db_path, ida_options, False) as db:
        # Find functions matching a pattern
        matching_functions = []
        for func in db.functions:
            func_name = db.functions.get_name(func)
            if pattern.lower() in func_name.lower():
                matching_functions.append((func, func_name))

        print(f"Found {len(matching_functions)} functions matching '{pattern}':")

        # Limit results if requested
        display_functions = (
            matching_functions[:max_results] if max_results > 0 else matching_functions
        )

        for func, name in display_functions:
            print(f'\nFunction: {name}')
            print(f'\nAddress: {hex(func.start_ea)} - {hex(func.end_ea)}')

            # Get signature
            signature = db.functions.get_signature(func)
            print(f'\nSignature: {signature}')

            # Get basic blocks
            flowchart = db.functions.get_flowchart(func)
            print(f'\nBasic blocks count: {len(flowchart)}')

            # Analyze local variables if requested
            if analyze_lvars:
                print('\nLocal variable analysis:')
                analyze_local_variables(db, func)

            # Show first few lines of disassembly
            disasm = db.functions.get_disassembly(func)
            print('\nDisassembly:')
            for line in disasm:
                print(f'  {line}')

            # Show first few lines of pseudocode
            pseudocode = db.functions.get_pseudocode(func)
            print('\nPseudocode :')
            for line in pseudocode.to_text():
                print(f'  {line}')

        if max_results > 0 and len(matching_functions) > max_results:
            print(f'\n... (showing first {max_results} of {len(matching_functions)} matches)')


def main():
    """Main entry point with argument parsing."""
    parser = argparse.ArgumentParser(description='Function analysis examples')
    parser.add_argument(
        '-f', '--input-file', help='Binary input file to be loaded', type=str, required=True
    )
    parser.add_argument(
        '-p',
        '--pattern',
        default='main',
        help='Pattern to search for in function names (default: main)',
    )
    parser.add_argument(
        '-m',
        '--max-results',
        type=int,
        default=10,
        help='Maximum number of results to display (0 for all, default: 10)',
    )
    parser.add_argument(
        '-l',
        '--analyze-locals',
        action='store_true',
        help='Analyze local variables in functions',
    )
    args = parser.parse_args()
    analyze_functions(args.input_file, args.pattern, args.max_results, args.analyze_locals)


if __name__ == '__main__':
    main()

```

## Signature Files

### Working with FLIRT signature files

```
#!/usr/bin/env python3
"""
Using FLIRT signature files example in IDA Domain API.

This example demonstrates how to work with signature files:
  - how to evaluate the matches on your binary
  - how to actually apply a sig file
  - how to generate .sig/.pat from your loaded binary
  - how to use custom signature directories
"""

import argparse
from pathlib import Path

import ida_domain
from ida_domain import Database
from ida_domain.database import IdaCommandOptions
from ida_domain.signature_files import FileInfo


def probe_signature_files(db: ida_domain.Database, min_matches: int, custom_dir: str = None):
    """Probe signature files and collect the ones over the minimum number of matches."""
    print('Probing signature files...')
    directories = [Path(custom_dir)] if custom_dir else None
    files = db.signature_files.get_files(directories=directories)

    good_matches = []
    for sig_file in files:
        results = db.signature_files.apply(sig_file, probe_only=True)
        for result in results:
            if result.matches >= min_matches:
                good_matches.append(result)
                print(f'{sig_file.name}: {result.matches} matches')

    return good_matches


def apply_signature_files(db: ida_domain.Database, matches: list[FileInfo], min_matches: int):
    """Apply signature files over the minimum number of matches."""
    if not matches:
        return

    print('\nApplying signature files...')
    for result in matches:
        if result.matches >= min_matches:
            sig_path = Path(result.path)
            print(f'Applying {sig_path.name}')
            db.signature_files.apply(sig_path, probe_only=False)


def generate_signatures(db: ida_domain.Database):
    """Generate signature files from current database."""
    print('\nGenerating signatures...')
    produced_files = db.signature_files.create()
    if produced_files:
        for file_path in produced_files:
            print(f'Generated: {Path(file_path).name}')


def main():
    """Main entry point."""
    parser = argparse.ArgumentParser(description='FLIRT signature files example')
    parser.add_argument('-f', '--input-file', required=True, help='Binary file to analyze')
    parser.add_argument('-d', '--sig-dir', help='Directory where to look for signature files')
    parser.add_argument('-p', '--min-probe-matches', default=5, type=int)
    parser.add_argument('-a', '--min-apply-matches', default=10, type=int)
    args = parser.parse_args()

    ida_options = IdaCommandOptions(auto_analysis=True, new_database=False)
    with Database.open(args.input_file, ida_options) as db:
        matches = probe_signature_files(db, args.min_probe_matches, args.sig_dir)
        apply_signature_files(db, matches, args.min_apply_matches)
        generate_signatures(db)


if __name__ == '__main__':
    main()

```

## String Analysis

### Finding and Analyzing Strings

```
#!/usr/bin/env python3
"""
String analysis example for IDA Domain API.

This example demonstrates how to find and analyze strings in an IDA database.
"""

import argparse

import ida_domain
from ida_domain import Database
from ida_domain.database import IdaCommandOptions


def analyze_strings(db_path, min_length=5, max_display=20, show_interesting=True):
    """Find and analyze strings in the database."""
    ida_options = IdaCommandOptions(auto_analysis=True, new_database=False)
    with Database.open(db_path, ida_options) as db:
        print(f'Analyzing strings (minimum length: {min_length}):')

        # Collect all strings
        all_strings = []
        interesting_strings = []

        for item in db.strings:
            if item.length >= min_length:
                all_strings.append((item.address, str(item)))

                # Check for interesting keywords
                if show_interesting:
                    lower_str = str(item).lower()
                    interesting_keywords = [
                        'password',
                        'passwd',
                        'pwd',
                        'key',
                        'secret',
                        'token',
                        'api',
                        'username',
                        'user',
                        'login',
                        'config',
                        'settings',
                        'registry',
                        'file',
                        'path',
                        'directory',
                        'http',
                        'https',
                        'ftp',
                        'url',
                        'sql',
                        'database',
                        'query',
                    ]

                    if any(keyword in lower_str for keyword in interesting_keywords):
                        interesting_strings.append((item.address, str(item)))

        print(f'Total strings: {len(db.strings)}')
        print(f'Strings >= {min_length} chars: {len(all_strings)}')

        # Display regular strings
        print(f'\nFirst {max_display} strings:')
        for i, (addr, string_value) in enumerate(all_strings[:max_display]):
            print(f'{hex(addr)}: {repr(string_value)}')

        if len(all_strings) > max_display:
            print(f'... (showing first {max_display} of {len(all_strings)} strings)')

        # Display interesting strings
        if show_interesting and interesting_strings:
            print(f'\nInteresting strings found ({len(interesting_strings)}):')
            for addr, string_value in interesting_strings[:10]:  # Limit to 10
                print(f'{hex(addr)}: {repr(string_value)}')

            if len(interesting_strings) > 10:
                print(f'... (showing first 10 of {len(interesting_strings)} interesting strings)')


def main():
    """Main entry point with argument parsing."""
    parser = argparse.ArgumentParser(description='Database exploration example')
    parser.add_argument(
        '-f', '--input-file', help='Binary input file to be loaded', type=str, required=True
    )
    parser.add_argument(
        '-l', '--min-length', type=int, default=5, help='Minimum string length(default: 5)'
    )
    parser.add_argument(
        '-m', '--max-display', type=int, default=20, help='Maximum displayed strings (default: 20)'
    )
    parser.add_argument(
        '-s',
        '--show-interesting',
        type=bool,
        default=True,
        help='Highlight interesting strings (default True)',
    )
    args = parser.parse_args()
    analyze_strings(args.input_file, args.min_length, args.max_display, args.show_interesting)


if __name__ == '__main__':
    main()

```

## Bytes Analysis

### Analyzing and Manipulating Bytes

```
#!/usr/bin/env python3
"""
Byte analysis example for IDA Domain API.

This example demonstrates how to analyze, search, and manipulate bytes in an IDA database.
It showcases the comprehensive byte manipulation capabilities including data type operations,
patching, flag checking, and search functionality.
"""

import argparse
from typing import Optional

import ida_domain
from ida_domain import Database
from ida_domain.bytes import ByteFlags, SearchFlags, StringType
from ida_domain.database import IdaCommandOptions


def analyze_bytes(
    db_path: str,
    search_pattern: Optional[str] = None,
    patch_demo: bool = False,
    max_results: int = 20,
) -> None:
    """Analyze and manipulate bytes in the database."""
    ida_options = IdaCommandOptions(auto_analysis=True, new_database=False)
    with Database.open(path=db_path, args=ida_options, save_on_close=False) as db:
        bytes_handler = db.bytes

        print('=== IDA Domain Bytes Analysis ===\n')

        # 1. Basic byte reading operations
        print('1. Basic Byte Reading Operations:')
        print('-' * 40)

        # Read different data types from entry point
        entry_point = db.minimum_ea
        print(f'Entry point: {hex(entry_point)}')

        byte_val = bytes_handler.get_byte_at(entry_point)
        word_val = bytes_handler.get_word_at(entry_point)
        dword_val = bytes_handler.get_dword_at(entry_point)
        qword_val = bytes_handler.get_qword_at(entry_point)

        print(f'  Byte:  0x{byte_val:02x} ({byte_val})')
        print(f'  Word:  0x{word_val:04x} ({word_val})')
        print(f'  DWord: 0x{dword_val:08x} ({dword_val})')
        print(f'  QWord: 0x{qword_val:016x} ({qword_val})')

        # Get disassembly
        disasm = bytes_handler.get_disassembly_at(entry_point)
        print(f'  Disassembly: {disasm}')

        # 2. Data type analysis using flags
        print('\n2. Data Type Analysis:')
        print('-' * 40)

        # Analyze different addresses
        test_addresses = [entry_point, entry_point + 0x10, entry_point + 0x20]
        for addr in test_addresses:
            if not db.is_valid_ea(addr):
                continue

            flags = bytes_handler.get_flags_at(addr)
            data_size = bytes_handler.get_data_size_at(addr)

            # Use new flag checking methods
            is_code = bytes_handler.check_flags_at(addr, ByteFlags.CODE)
            is_data = bytes_handler.check_flags_at(addr, ByteFlags.DATA)
            has_any_data_flags = bytes_handler.has_any_flags_at(
                addr, ByteFlags.BYTE | ByteFlags.WORD | ByteFlags.DWORD
            )

            print(f'  Address {hex(addr)}:')
            print(f'    Flags: 0x{flags:x}')
            print(f'    Is Code: {is_code}, Is Data: {is_data}')
            print(f'    Has Data Flags: {has_any_data_flags}')
            print(f'    DataSize: {data_size}')

        # 3. Search operations
        print('\n3. Search Operations:')
        print('-' * 40)

        # Search for common patterns
        patterns_to_search = [
            (b'\x48\x89\xe5', 'Function prologue (mov rbp, rsp)'),
            (b'\x55', 'Push rbp'),
            (b'\xc3', 'Return instruction'),
        ]

        for pattern, description in patterns_to_search:
            found_addr = bytes_handler.find_bytes_between(pattern)
            if found_addr:
                print(f'  Found {description} at {hex(found_addr)}')
            else:
                print(f'  {description} not found')

        # Text search with flags
        if search_pattern:
            print(f"\n  Searching for text: '{search_pattern}'")
            # Case-sensitive search
            addr_case = bytes_handler.find_text(
                search_pattern, flags=SearchFlags.DOWN | SearchFlags.CASE
            )
            # Case-insensitive search
            addr_nocase = bytes_handler.find_text_between(search_pattern, flags=SearchFlags.DOWN)

            if addr_case:
                print(f'    Case-sensitive found at: {hex(addr_case)}')
            if addr_nocase and addr_nocase != addr_case:
                print(f'    Case-insensitive found at: {hex(addr_nocase)}')
            if not addr_case and not addr_nocase:
                print(f"    Text '{search_pattern}' not found")

        # Search for immediate values
        immediate_addr = bytes_handler.find_immediate_between(1)
        if immediate_addr is not None:
            print(f'  Found immediate value 1 at {hex(immediate_addr)}')

        # 4. String operations
        print('\n4. String Operations:')
        print('-' * 40)

        # Find and analyze strings
        string_count = 0
        for item in db.strings:
            if string_count >= 3:  # Limit output
                break

            print(f'  String at {hex(item.address)}: {str(item)}')

            # Try different string reading methods
            cstring = bytes_handler.get_cstring_at(item.address)
            if cstring:
                print(f'    C-string: {repr(cstring)}')

            string_count += 1

        # 5. Data type creation
        print('\n5. Data Type Creation:')
        print('-' * 40)

        # Find a suitable data address for demonstration
        data_addr = None
        for addr in range(db.minimum_ea, min(db.minimum_ea + 0x100, db.maximum_ea), 4):
            if bytes_handler.is_data_at(addr) or bytes_handler.is_unknown_at(addr):
                data_addr = addr
                break

        if data_addr:
            print(f'  Working with data at {hex(data_addr)}')

            # Create different data types
            original_flags = bytes_handler.get_flags_at(data_addr)
            print(f'    Original flags: {original_flags}')

            # Make it a byte
            if bytes_handler.make_byte_at(data_addr):
                print(f'    Successfully created byte at {hex(data_addr)}')

            # Make it a word
            if bytes_handler.make_word(data_addr):
                print(f'    Successfully created word at {hex(data_addr)}')

            # Create a string with specific type
            string_addr = data_addr + 8
            if bytes_handler.make_string(string_addr, string_type=StringType.C):
                print(f'    Successfully created C-string at {hex(string_addr)}')

        # 6. Patching demonstration (if requested)
        if patch_demo:
            print('\n6. Patching Demonstration:')
            print('-' * 40)

            # Find a safe address to patch (data section)
            patch_addr = None
            for addr in range(db.minimum_ea, min(db.minimum_ea + 0x200, db.maximum_ea)):
                if bytes_handler.is_data(addr):
                    patch_addr = addr
                    break

            if patch_addr:
                print(f'  Demonstrating patching at {hex(patch_addr)}')

                # Get original values
                orig_byte = bytes_handler.get_byte_at(patch_addr)
                orig_word = bytes_handler.get_word_at(patch_addr)

                print(f'    Original byte: 0x{orig_byte:02x}')
                print(f'    Original word: 0x{orig_word:04x}')

                # Patch byte
                if bytes_handler.patch_byte_at(patch_addr, 0xAB):
                    new_byte = bytes_handler.get_byte_at(patch_addr)
                    print(f'    Patched byte: 0x{new_byte:02x}')

                    # Get original value
                    retrieved_orig = bytes_handler.get_original_byte_at(patch_addr)
                    print(f'    Retrieved original: 0x{retrieved_orig:02x}')

                    # Revert patch
                    if bytes_handler.revert_byte_at(patch_addr):
                        reverted_byte = bytes_handler.get_byte_at(patch_addr)
                        print(f'    Reverted byte: 0x{reverted_byte:02x}')

                # Patch multiple bytes
                test_data = b'\x90\x90\x90\x90'  # NOP instructions
                if bytes_handler.patch_bytes(patch_addr, test_data):
                    print(f'    Patched {len(test_data)} bytes with NOPs')

                    # Get original bytes
                    success, orig_bytes = bytes_handler.get_original_bytes_at(
                        patch_addr, len(test_data)
                    )
                    if success:
                        print(f'    Original bytes: {orig_bytes.hex()}')

        # 7. Navigation helpers
        print('\n7. Navigation Helpers:')
        print('-' * 40)

        test_addr = entry_point + 0x10
        if test_addr <= db.maximum_ea:
            next_head = bytes_handler.get_next_head(test_addr)
            prev_head = bytes_handler.get_previous_head(test_addr)
            next_addr = bytes_handler.get_next_address(test_addr)
            prev_addr = bytes_handler.get_previous_address(test_addr)

            print(f'  From address {hex(test_addr)}:')
            print(
                f'    Next head: {hex(next_head) if next_head != 0xFFFFFFFFFFFFFFFF else "None"}'
            )
            print(
                f'    Prev head: {hex(prev_head) if prev_head != 0xFFFFFFFFFFFFFFFF else "None"}'
            )
            print(f'    Next addr: {hex(next_addr)}')
            print(f'    Prev addr: {hex(prev_addr)}')

        # 8. Summary statistics
        print('\n8. Summary Statistics:')
        print('-' * 40)

        code_count = data_count = unknown_count = 0
        sample_size = db.maximum_ea - db.minimum_ea

        for addr in range(db.minimum_ea, db.minimum_ea + sample_size):
            if not db.is_valid_ea(addr):
                continue
            if bytes_handler.is_code_at(addr):
                code_count += 1
            elif bytes_handler.is_data_at(addr):
                data_count += 1
            elif bytes_handler.is_unknown_at(addr):
                unknown_count += 1

        print(f'  Sample size: {sample_size} bytes')
        print(f'  Code bytes: {code_count} ({code_count / sample_size * 100:.1f}%)')
        print(f'  Data bytes: {data_count} ({data_count / sample_size * 100:.1f}%)')
        print(f'  Unknown bytes: {unknown_count} ({unknown_count / sample_size * 100:.1f}%)')

        print('\n=== Analysis Complete ===')


def main():
    """Main entry point with argument parsing."""
    parser = argparse.ArgumentParser(description='Byte analysis example for IDA Domain API')
    parser.add_argument(
        '-f', '--input-file', help='Binary input file to be loaded', type=str, required=True
    )
    parser.add_argument(
        '-s',
        '--search-pattern',
        help='Text pattern to search for in the binary',
        type=str,
        default=None,
    )
    parser.add_argument(
        '-p',
        '--patch-demo',
        action='store_true',
        help='Demonstrate patching operations (modifies database temporarily)',
    )
    parser.add_argument(
        '-m',
        '--max-results',
        type=int,
        default=20,
        help='Maximum number of results to display (default: 20)',
    )

    args = parser.parse_args()
    analyze_bytes(args.input_file, args.search_pattern, args.patch_demo, args.max_results)


if __name__ == '__main__':
    main()

```

## Type Analysis

### Analyzing and Working with Types

```
#!/usr/bin/env python3
"""
Types example for IDA Domain API.

This example demonstrates how to work with IDA's type information libraries.
"""

import argparse
import tempfile
from pathlib import Path

import ida_domain
from ida_domain import Database


def print_section_header(title: str, char: str = '=') -> None:
    """Print a formatted section header for better output organization."""
    print(f'\n{char * 60}')
    print(f' {title}')
    print(f'{char * 60}')


def print_subsection_header(title: str) -> None:
    """Print a formatted subsection header."""
    print(f'\n--- {title} ---')


declarations = """
typedef unsigned char uint8_t;
typedef unsigned int uint32_t;

struct STRUCT_EXAMPLE
{
    char *text;
    unsigned int length;
    uint32_t reserved;
};

"""


def create_types(db: Database, library_path: Path):
    """Create a type library and fill it with types parsed from declaration"""

    til = db.types.create_library(library_path, 'Example type information library')
    db.types.parse_declarations(til, declarations)
    db.types.save_library(til, library_path)
    db.types.unload_library(til)


def import_types(db: Database, library_path: Path):
    """Import all types from external library"""

    til = db.types.load_library(library_path)

    print_subsection_header(f'Type names from external library {library_path}')
    for name in db.types.get_all(library=til):
        print(name)

    print_subsection_header('Type information objects in local library (before import)')
    for item in sorted(list(db.types), key=lambda i: i.get_ordinal()):
        print(f'{item.get_ordinal()}. {item}')

    db.types.import_from_library(til)

    print_subsection_header('Type information objects in local library (after import)')
    for item in sorted(list(db.types), key=lambda i: i.get_ordinal()):
        print(f'{item.get_ordinal()}. {item}')

    db.types.unload_library(til)


def export_types(db: Database, library_path: Path):
    """Export all types from database to external library"""

    til = db.types.create_library(library_path, 'Exported type library')
    db.types.export_to_library(til)
    db.types.save_library(til, library_path)
    db.types.unload_library(til)

    print_subsection_header(f'Types exported to {library_path}')
    til = db.types.load_library(library_path)
    for t in db.types.get_all(library=til):
        print(t)
    db.types.unload_library(til)


def main():
    parser = argparse.ArgumentParser(
        description=f'IDA Domain usage example, version {ida_domain.__version__}'
    )
    parser.add_argument(
        '-f', '--input-file', help='Binary input file to be loaded', type=str, required=True
    )
    args = parser.parse_args()

    library_dir = Path(tempfile.gettempdir()) / 'ida_domain_example'
    library_dir.mkdir(parents=True, exist_ok=True)
    library_create_path = library_dir / 'new.til'
    library_import_path = library_dir / 'new.til'
    library_export_path = library_dir / 'exported.til'

    print_section_header('Working with type information libraries')

    with Database.open(args.input_file) as db:
        create_types(db, library_create_path)
        import_types(db, library_import_path)
        export_types(db, library_export_path)


if __name__ == '__main__':
    main()

```

## Cross-Reference Analysis

### Analyzing Cross-References

```
#!/usr/bin/env python3
"""
Cross-reference analysis example for IDA Domain API.

This example demonstrates how to analyze cross-references in an IDA database.
"""

import argparse

import ida_domain
from ida_domain import Database
from ida_domain.database import IdaCommandOptions


def analyze_xrefs(db_path, target_addr):
    """Analyze cross-references to and from a target address."""
    ida_options = IdaCommandOptions(auto_analysis=True, new_database=False)
    with Database.open(db_path, ida_options) as db:
        print(f'Cross-references to {hex(target_addr)}:')

        # Get references TO the target address
        xref_to_count = 0
        for xref in db.xrefs.to_ea(target_addr):
            xref_type_name = xref.type.name
            print(f'  From {hex(xref.from_ea)} to {hex(xref.to_ea)} (type: {xref_type_name})')
            xref_to_count += 1

        if xref_to_count == 0:
            print('  No cross-references found')
        else:
            print(f'  Total: {xref_to_count} references')

        print(f'\nCross-references from {hex(target_addr)}:')

        # Get references FROM the target address
        xref_from_count = 0
        for xref in db.xrefs.from_ea(target_addr):
            xref_type_name = xref.type.name
            print(f'  From {hex(xref.from_ea)} to {hex(xref.to_ea)} (type: {xref_type_name})')
            xref_from_count += 1

        if xref_from_count == 0:
            print('  No outgoing references found')
        else:
            print(f'  Total: {xref_from_count} outgoing references')

        # Use convenience methods for specific xref types
        call_count = sum(1 for _ in db.xrefs.calls_to_ea(target_addr))
        jump_count = sum(1 for _ in db.xrefs.jumps_to_ea(target_addr))
        read_count = sum(1 for _ in db.xrefs.reads_of_ea(target_addr))
        write_count = sum(1 for _ in db.xrefs.writes_to_ea(target_addr))

        # Summary
        print(f'\nSummary for {hex(target_addr)}:')
        print(f'  Calls to address: {call_count}')
        print(f'  Jumps to address: {jump_count}')
        print(f'  Data reads to address: {read_count}')
        print(f'  Data writes to address: {write_count}')
        print(f'  Incoming references: {xref_to_count}')
        print(f'  Outgoing references: {xref_from_count}')


def parse_address(value):
    """Parse address as either decimal or hexadecimal"""
    try:
        if value.lower().startswith('0x'):
            return int(value, 16)
        else:
            return int(value, 10)
    except ValueError:
        raise argparse.ArgumentTypeError(f'Invalid address format: {value}')


def main():
    """Main entry point with argument parsing."""
    parser = argparse.ArgumentParser(description='Database exploration example')
    parser.add_argument(
        '-f', '--input-file', help='Binary input file to be loaded', type=str, required=True
    )
    parser.add_argument(
        '-a',
        '--address',
        help='Address (decimal or hex with 0x prefix)',
        type=parse_address,
        required=True,
    )
    args = parser.parse_args()
    analyze_xrefs(args.input_file, args.address)


if __name__ == '__main__':
    main()

```

## Event Handling (Hooks)

### Hooking and Logging Events

```
#!/usr/bin/env python3
"""
Event handling / hook usage example for IDA Domain API.

This example demonstrates how to handle IDA events.
"""

import argparse
import logging

from ida_domain import database, hooks  # isort: skip
import ida_idaapi  # isort: skip

logging.basicConfig(level=logging.DEBUG, format='%(asctime)s %(levelname)s %(name)s %(message)s')


# Processor hooks example
class MyProcHooks(hooks.ProcessorHooks):
    def __init__(self):
        super().__init__()

    def ev_creating_segm(self, seg: 'segment_t *') -> int:
        self.log()
        return super().ev_creating_segm(seg)

    def ev_moving_segm(self, seg: 'segment_t *', to: ida_idaapi.ea_t, flags: int) -> int:
        self.log()
        return super().ev_moving_segm(seg, to, flags)


# UI hooks example
class MyUIHooks(hooks.UIHooks):
    def __init__(self):
        super().__init__()

    def widget_visible(self, widget: 'TWidget *') -> None:
        self.log()

    def widget_closing(self, widget: 'TWidget *') -> None:
        self.log()

    def widget_invisible(self, widget: 'TWidget *') -> None:
        self.log()


# View hooks example
class MyViewHooks(hooks.ViewHooks):
    def __init__(self):
        super().__init__()

    def view_activated(self, view: 'TWidget *') -> None:
        self.log()

    def view_deactivated(self, view: 'TWidget *') -> None:
        self.log()


# Decompiler hooks example
class MyDecompilerHooks(hooks.DecompilerHooks):
    def __init__(self):
        super().__init__()

    def open_pseudocode(self, vu: 'vdui_t') -> int:
        self.log()
        return super().open_pseudocode()

    def switch_pseudocode(self, vu: 'vdui_t') -> int:
        self.log()
        return super().switch_pseudocode()

    def refresh_pseudocode(self, vu: 'vdui_t') -> int:
        self.log()
        return super().refresh_pseudocode()

    def close_pseudocode(self, vu: 'vdui_t') -> int:
        self.log()
        return super().close_pseudocode()


# Database hooks example
class MyDatabaseHooks(hooks.DatabaseHooks):
    def __init__(self):
        super().__init__()
        self.count = 0

    def closebase(self) -> None:
        self.log()

    def auto_empty(self):
        self.log()

    def segm_added(self, s) -> None:
        self.log()


proc_hook = MyProcHooks()
ui_hook = MyUIHooks()
view_hook = MyViewHooks()
decomp_hook = MyDecompilerHooks()
db_hook = MyDatabaseHooks()

all_hooks: hooks.HooksList = [
    proc_hook,
    ui_hook,
    view_hook,
    decomp_hook,
    db_hook,
]


def log_events(idb_path):
    with database.Database.open(path=idb_path, hooks=all_hooks) as db:
        pass


def main():
    """Main entry point with argument parsing."""
    parser = argparse.ArgumentParser(description='Database exploration example')
    parser.add_argument(
        '-f', '--input-file', help='Binary input file to be loaded', type=str, required=True
    )
    args = parser.parse_args()
    log_events(args.input_file)


if __name__ == '__main__':
    main()

```

## Running the Examples

To run these examples, save them to Python files and execute them with your IDA database path:

```
python example_script.py

```

Make sure you have:

1. Set the `IDADIR` environment variable
1. Installed the ida-domain package
