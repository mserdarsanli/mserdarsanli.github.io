(function() {
var res = {};
res['lang-syntax'] = (function() {
var res = {};
res['lang'] = 'Rules for Lang: python';
res['syntax-groups'] = {};
res['syntax-groups']['SpecialKey'] = SyntaxGroup.FromColor('SpecialKey', new TermColor(4), new TermColor(-1));
res['syntax-groups']['NonText'] = SyntaxGroup.FromColor('NonText', new TermColor(12), new TermColor(-1));
res['syntax-groups']['Directory'] = SyntaxGroup.FromColor('Directory', new TermColor(4), new TermColor(-1));
res['syntax-groups']['IncSearch'] = SyntaxGroup.FromColor('IncSearch', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['ModeMsg'] = SyntaxGroup.FromColor('ModeMsg', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['LineNr'] = SyntaxGroup.FromColor('LineNr', new TermColor(130), new TermColor(-1));
res['syntax-groups']['CursorLineNr'] = SyntaxGroup.FromColor('CursorLineNr', new TermColor(130), new TermColor(-1));
res['syntax-groups']['StatusLineNC'] = SyntaxGroup.FromColor('StatusLineNC', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['VertSplit'] = SyntaxGroup.FromColor('VertSplit', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['Title'] = SyntaxGroup.FromColor('Title', new TermColor(5), new TermColor(-1));
res['syntax-groups']['VisualNOS'] = SyntaxGroup.FromColor('VisualNOS', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['WildMenu'] = SyntaxGroup.FromColor('WildMenu', new TermColor(0), new TermColor(11));
res['syntax-groups']['Folded'] = SyntaxGroup.FromColor('Folded', new TermColor(4), new TermColor(248));
res['syntax-groups']['FoldColumn'] = SyntaxGroup.FromColor('FoldColumn', new TermColor(4), new TermColor(248));
res['syntax-groups']['DiffAdd'] = SyntaxGroup.FromColor('DiffAdd', new TermColor(-1), new TermColor(81));
res['syntax-groups']['DiffChange'] = SyntaxGroup.FromColor('DiffChange', new TermColor(-1), new TermColor(225));
res['syntax-groups']['DiffDelete'] = SyntaxGroup.FromColor('DiffDelete', new TermColor(12), new TermColor(159));
res['syntax-groups']['DiffText'] = SyntaxGroup.FromColor('DiffText', new TermColor(-1), new TermColor(9));
res['syntax-groups']['SignColumn'] = SyntaxGroup.FromColor('SignColumn', new TermColor(4), new TermColor(248));
res['syntax-groups']['Conceal'] = SyntaxGroup.FromColor('Conceal', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['SpellBad'] = SyntaxGroup.FromColor('SpellBad', new TermColor(-1), new TermColor(224));
res['syntax-groups']['SpellCap'] = SyntaxGroup.FromColor('SpellCap', new TermColor(-1), new TermColor(81));
res['syntax-groups']['SpellRare'] = SyntaxGroup.FromColor('SpellRare', new TermColor(-1), new TermColor(225));
res['syntax-groups']['SpellLocal'] = SyntaxGroup.FromColor('SpellLocal', new TermColor(-1), new TermColor(14));
res['syntax-groups']['Pmenu'] = SyntaxGroup.FromColor('Pmenu', new TermColor(0), new TermColor(225));
res['syntax-groups']['PmenuSel'] = SyntaxGroup.FromColor('PmenuSel', new TermColor(0), new TermColor(7));
res['syntax-groups']['PmenuSbar'] = SyntaxGroup.FromColor('PmenuSbar', new TermColor(-1), new TermColor(248));
res['syntax-groups']['PmenuThumb'] = SyntaxGroup.FromColor('PmenuThumb', new TermColor(-1), new TermColor(0));
res['syntax-groups']['TabLine'] = SyntaxGroup.FromColor('TabLine', new TermColor(0), new TermColor(7));
res['syntax-groups']['TabLineSel'] = SyntaxGroup.FromColor('TabLineSel', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['TabLineFill'] = SyntaxGroup.FromColor('TabLineFill', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['CursorColumn'] = SyntaxGroup.FromColor('CursorColumn', new TermColor(-1), new TermColor(7));
res['syntax-groups']['CursorLine'] = SyntaxGroup.FromColor('CursorLine', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['ColorColumn'] = SyntaxGroup.FromColor('ColorColumn', new TermColor(-1), new TermColor(224));
res['syntax-groups']['MatchParen'] = SyntaxGroup.FromColor('MatchParen', new TermColor(-1), new TermColor(14));
res['syntax-groups']['Underlined'] = SyntaxGroup.FromColor('Underlined', new TermColor(5), new TermColor(-1));
res['syntax-groups']['Ignore'] = SyntaxGroup.FromColor('Ignore', new TermColor(15), new TermColor(-1));
res['syntax-groups']['pythonStatement'] = SyntaxGroup.FromLink('pythonStatement', 'Statement');
res['syntax-groups']['pythonFunction'] = SyntaxGroup.FromLink('pythonFunction', 'Function');
res['syntax-groups']['pythonConditional'] = SyntaxGroup.FromLink('pythonConditional', 'Conditional');
res['syntax-groups']['pythonRepeat'] = SyntaxGroup.FromLink('pythonRepeat', 'Repeat');
res['syntax-groups']['pythonOperator'] = SyntaxGroup.FromLink('pythonOperator', 'Operator');
res['syntax-groups']['pythonException'] = SyntaxGroup.FromLink('pythonException', 'Exception');
res['syntax-groups']['pythonInclude'] = SyntaxGroup.FromLink('pythonInclude', 'Include');
res['syntax-groups']['pythonAsync'] = SyntaxGroup.FromLink('pythonAsync', 'Statement');
res['syntax-groups']['pythonDecorator'] = SyntaxGroup.FromLink('pythonDecorator', 'Define');
res['syntax-groups']['pythonTodo'] = SyntaxGroup.FromLink('pythonTodo', 'Todo');
res['syntax-groups']['pythonComment'] = SyntaxGroup.FromLink('pythonComment', 'Comment');
res['syntax-groups']['pythonQuotes'] = SyntaxGroup.FromLink('pythonQuotes', 'String');
res['syntax-groups']['pythonEscape'] = SyntaxGroup.FromLink('pythonEscape', 'Special');
res['syntax-groups']['pythonString'] = SyntaxGroup.FromLink('pythonString', 'String');
res['syntax-groups']['pythonTripleQuotes'] = SyntaxGroup.FromLink('pythonTripleQuotes', 'pythonQuotes');
res['syntax-groups']['pythonSpaceError'] = SyntaxGroup.FromColor('pythonSpaceError', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['pythonDoctest'] = SyntaxGroup.FromLink('pythonDoctest', 'Special');
res['syntax-groups']['pythonRawString'] = SyntaxGroup.FromLink('pythonRawString', 'String');
res['syntax-groups']['pythonNumber'] = SyntaxGroup.FromLink('pythonNumber', 'Number');
res['syntax-groups']['pythonBuiltin'] = SyntaxGroup.FromLink('pythonBuiltin', 'Function');
res['syntax-groups']['pythonExceptions'] = SyntaxGroup.FromLink('pythonExceptions', 'Structure');
res['syntax-groups']['pythonDoctestValue'] = SyntaxGroup.FromLink('pythonDoctestValue', 'Define');
res['syntax-groups']['pythonSync'] = SyntaxGroup.FromColor('pythonSync', new TermColor(-1), new TermColor(-1));
return res;
} ())
;
res['snippets'] = [];
res['snippets'].push({
  'title': 'Find Missing Perm',
  'terminal-contents': '<vpython-include>from</vpython-include><v-normal> itertools </v-normal><vpython-include>import</vpython-include><v-normal> permutations                                              </v-normal>\n<v-normal>                                                                                </v-normal>\n<v-normal>given = </v-normal><vpython-triple-quotes>&apos;&apos;&apos;</vpython-triple-quotes><vpython-string>ABCD CABD ACDB DACB BCDA ACBD ADCB CDAB DABC BCAD CADB CDBA</vpython-string><v-normal>          </v-normal>\n<vpython-string>           CBAD ABDC ADBC BDCA DCBA BACD BADC BDAC CBDA DBCA DCAB</vpython-string><vpython-triple-quotes>&apos;&apos;&apos;</vpython-triple-quotes><v-normal>.split()    </v-normal>\n<v-normal>                                                                                </v-normal>\n<v-normal>allPerms = [</v-normal><vpython-quotes>&apos;&apos;</vpython-quotes><v-normal>.join(x) </v-normal><vpython-repeat>for</vpython-repeat><v-normal> x </v-normal><vpython-operator>in</vpython-operator><v-normal> permutations(given[</v-normal><vpython-number>0</vpython-number><v-normal>])]                         </v-normal>\n<v-normal>                                                                                </v-normal>\n<v-normal>missing = </v-normal><vpython-builtin>list</vpython-builtin><v-normal>(</v-normal><vpython-builtin>set</vpython-builtin><v-normal>(allPerms) - </v-normal><vpython-builtin>set</vpython-builtin><v-normal>(given)) </v-normal><vpython-comment># [&apos;DBAC&apos;]</vpython-comment><v-normal>                           </v-normal>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-normal>                                                                                </v-normal>\n'
});
res['snippets'].push({
  'title': 'File Input/Output',
  'terminal-contents': '<vpython-include>import</vpython-include><v-normal> sys                                                                      </v-normal>\n<vpython-exception>try</vpython-exception><v-normal>:                                                                            </v-normal>\n<v-normal>    </v-normal><vpython-statement>with</vpython-statement><v-normal> </v-normal><vpython-builtin>open</vpython-builtin><v-normal>(</v-normal><vpython-quotes>&apos;</vpython-quotes><vpython-string>input.txt</vpython-string><vpython-quotes>&apos;</vpython-quotes><v-normal>) </v-normal><vpython-statement>as</vpython-statement><v-normal> infile:                                           </v-normal>\n<v-normal>        </v-normal><vpython-statement>with</vpython-statement><v-normal> </v-normal><vpython-builtin>open</vpython-builtin><v-normal>(</v-normal><vpython-quotes>&apos;</vpython-quotes><vpython-string>output.txt</vpython-string><vpython-quotes>&apos;</vpython-quotes><v-normal>, </v-normal><vpython-quotes>&apos;</vpython-quotes><vpython-string>w</vpython-string><vpython-quotes>&apos;</vpython-quotes><v-normal>) </v-normal><vpython-statement>as</vpython-statement><v-normal> outfile:                                </v-normal>\n<v-normal>            </v-normal><vpython-repeat>for</vpython-repeat><v-normal> line </v-normal><vpython-operator>in</vpython-operator><v-normal> infile:                                                 </v-normal>\n<v-normal>                outfile.write(line)                                             </v-normal>\n<vpython-exception>except</vpython-exception><v-normal> </v-normal><vpython-exceptions>IOError</vpython-exceptions><v-normal>:                                                                 </v-normal>\n<v-normal>    </v-normal><vpython-builtin>print</vpython-builtin><v-normal> &gt;&gt; sys.stderr, </v-normal><vpython-quotes>&quot;</vpython-quotes><vpython-string>Some I/O Error occurred</vpython-string><vpython-quotes>&quot;</vpython-quotes><v-normal>                              </v-normal>\n<v-normal>    sys.exit(</v-normal><vpython-number>1</vpython-number><v-normal>)                                                                 </v-normal>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-normal>                                                                                </v-normal>\n'
});
return res;
}())