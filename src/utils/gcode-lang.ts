// Custom TextMate grammar for G-code syntax highlighting in Shiki.
// Covers the common Fanuc/Haas dialect used throughout the lessons.

export const gcodeLang = {
  name: 'gcode',
  scopeName: 'source.gcode',
  fileTypes: ['gcode', 'nc', 'cnc', 'tap'],
  patterns: [
    // Comments: parenthetical (…) and semicolon ;…
    { name: 'comment.line.parens.gcode', match: '\\([^)]*\\)' },
    { name: 'comment.line.semicolon.gcode', match: ';.*$' },
    // Program numbers: O1234
    { name: 'entity.name.function.program.gcode', match: '(?i)\\bO\\d+' },
    // Line numbers: N10, N100
    { name: 'constant.numeric.line.gcode', match: '(?i)\\bN\\d+' },
    // G-codes: G00, G01, G43.1, etc.
    { name: 'keyword.control.gcode.gcode', match: '(?i)\\bG\\d+(\\.\\d+)?' },
    // M-codes: M03, M30, etc.
    { name: 'support.function.mcode.gcode', match: '(?i)\\bM\\d+' },
    // Feed and spindle speed: F, S
    { name: 'constant.language.feedspeed.gcode', match: '(?i)\\b[FS]-?\\d+(\\.\\d+)?' },
    // Tool / offset words: T, H, D
    { name: 'entity.name.type.tool.gcode', match: '(?i)\\b[THD]\\d+' },
    // Axis and coordinate words: X, Y, Z, A, B, C, I, J, K, R, Q, P
    { name: 'variable.parameter.axis.gcode', match: '(?i)\\b[XYZABCIJKRQP]-?\\d*\\.?\\d+' },
    // Macro variables: #100, #<var>
    { name: 'variable.other.macro.gcode', match: '#\\[?\\w+\\]?' },
    // Standalone numbers
    { name: 'constant.numeric.gcode', match: '-?\\d+\\.?\\d*' },
  ],
};

export default gcodeLang;
