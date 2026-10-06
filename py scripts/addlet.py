# Add "let " in front of each selected line
from Npp import editor

def add_let_prefix():
    # Get selection range
    start = editor.getSelectionStart()
    end = editor.getSelectionEnd()
    
    # Get selected text
    selected_text = editor.getTextRange(start, end)
    
    # Process each line
    modified = "\n".join("let " + line for line in selected_text.splitlines())
    
    # Replace selection with modified text
    editor.replaceSel(modified)

# Run the function
add_let_prefix()
