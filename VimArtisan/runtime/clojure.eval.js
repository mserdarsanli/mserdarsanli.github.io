(function() {
var res = {};
res['lang-syntax'] = (function() {
var res = {};
res['lang'] = 'Rules for Lang: clojure';
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
res['syntax-groups']['clojureConstant'] = SyntaxGroup.FromLink('clojureConstant', 'Constant');
res['syntax-groups']['clojureBoolean'] = SyntaxGroup.FromLink('clojureBoolean', 'Boolean');
res['syntax-groups']['clojureSpecial'] = SyntaxGroup.FromLink('clojureSpecial', 'Special');
res['syntax-groups']['clojureException'] = SyntaxGroup.FromLink('clojureException', 'Exception');
res['syntax-groups']['clojureCond'] = SyntaxGroup.FromLink('clojureCond', 'Conditional');
res['syntax-groups']['clojureRepeat'] = SyntaxGroup.FromLink('clojureRepeat', 'Repeat');
res['syntax-groups']['clojureDefine'] = SyntaxGroup.FromLink('clojureDefine', 'Define');
res['syntax-groups']['clojureMacro'] = SyntaxGroup.FromLink('clojureMacro', 'Macro');
res['syntax-groups']['clojureFunc'] = SyntaxGroup.FromLink('clojureFunc', 'Function');
res['syntax-groups']['clojureVariable'] = SyntaxGroup.FromLink('clojureVariable', 'Identifier');
res['syntax-groups']['clojureKeyword'] = SyntaxGroup.FromLink('clojureKeyword', 'Keyword');
res['syntax-groups']['clojureStringEscape'] = SyntaxGroup.FromLink('clojureStringEscape', 'Character');
res['syntax-groups']['clojureString'] = SyntaxGroup.FromLink('clojureString', 'String');
res['syntax-groups']['clojureCharacter'] = SyntaxGroup.FromLink('clojureCharacter', 'Character');
res['syntax-groups']['clojureSymbol'] = SyntaxGroup.FromColor('clojureSymbol', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['clojureNumber'] = SyntaxGroup.FromLink('clojureNumber', 'Number');
res['syntax-groups']['clojureVarArg'] = SyntaxGroup.FromLink('clojureVarArg', 'Special');
res['syntax-groups']['clojureQuote'] = SyntaxGroup.FromLink('clojureQuote', 'SpecialChar');
res['syntax-groups']['clojureUnquote'] = SyntaxGroup.FromLink('clojureUnquote', 'SpecialChar');
res['syntax-groups']['clojureMeta'] = SyntaxGroup.FromLink('clojureMeta', 'SpecialChar');
res['syntax-groups']['clojureDeref'] = SyntaxGroup.FromLink('clojureDeref', 'SpecialChar');
res['syntax-groups']['clojureDispatch'] = SyntaxGroup.FromLink('clojureDispatch', 'SpecialChar');
res['syntax-groups']['clojureAnonArg'] = SyntaxGroup.FromLink('clojureAnonArg', 'SpecialChar');
res['syntax-groups']['clojureRegexpEscape'] = SyntaxGroup.FromLink('clojureRegexpEscape', 'Character');
res['syntax-groups']['clojureRegexpQuoted'] = SyntaxGroup.FromLink('clojureRegexpQuoted', 'clojureString');
res['syntax-groups']['clojureRegexpQuote'] = SyntaxGroup.FromLink('clojureRegexpQuote', 'clojureRegexpBoundary');
res['syntax-groups']['clojureRegexpPosixCharClass'] = SyntaxGroup.FromLink('clojureRegexpPosixCharClass', 'clojureRegexpCharClass');
res['syntax-groups']['clojureRegexpJavaCharClass'] = SyntaxGroup.FromLink('clojureRegexpJavaCharClass', 'clojureRegexpCharClass');
res['syntax-groups']['clojureRegexpUnicodeCharClass'] = SyntaxGroup.FromLink('clojureRegexpUnicodeCharClass', 'clojureRegexpCharClass');
res['syntax-groups']['clojureRegexpPredefinedCharClass'] = SyntaxGroup.FromLink('clojureRegexpPredefinedCharClass', 'clojureRegexpCharClass');
res['syntax-groups']['clojureRegexpCharClass'] = SyntaxGroup.FromLink('clojureRegexpCharClass', 'SpecialChar');
res['syntax-groups']['clojureRegexpBoundary'] = SyntaxGroup.FromLink('clojureRegexpBoundary', 'SpecialChar');
res['syntax-groups']['clojureRegexpQuantifier'] = SyntaxGroup.FromLink('clojureRegexpQuantifier', 'SpecialChar');
res['syntax-groups']['clojureRegexpOr'] = SyntaxGroup.FromLink('clojureRegexpOr', 'SpecialChar');
res['syntax-groups']['clojureRegexpBackRef'] = SyntaxGroup.FromLink('clojureRegexpBackRef', 'SpecialChar');
res['syntax-groups']['clojureRegexpMod'] = SyntaxGroup.FromLink('clojureRegexpMod', 'SpecialChar');
res['syntax-groups']['clojureRegexpGroup'] = SyntaxGroup.FromLink('clojureRegexpGroup', 'clojureRegexp');
res['syntax-groups']['clojureRegexp'] = SyntaxGroup.FromLink('clojureRegexp', 'Constant');
res['syntax-groups']['clojureCommentTodo'] = SyntaxGroup.FromLink('clojureCommentTodo', 'Todo');
res['syntax-groups']['clojureComment'] = SyntaxGroup.FromLink('clojureComment', 'Comment');
res['syntax-groups']['clojureError'] = SyntaxGroup.FromLink('clojureError', 'Error');
res['syntax-groups']['clojureMap'] = SyntaxGroup.FromColor('clojureMap', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['clojureSexp'] = SyntaxGroup.FromColor('clojureSexp', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['clojureVector'] = SyntaxGroup.FromColor('clojureVector', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['clojureParen'] = SyntaxGroup.FromLink('clojureParen', 'Delimiter');
return res;
} ())
;
res['snippets'] = [];
res['snippets'].push({
  'title': 'Find Missing Perm',
  'terminal-contents': '<vclojure-paren>(</vclojure-paren><vclojure-special>def</vclojure-special><vclojure-sexp> </vclojure-sexp><vclojure-symbol>abcds</vclojure-symbol><vclojure-sexp> </vclojure-sexp><vclojure-paren>[</vclojure-paren><vclojure-string>&quot;ABCD&quot;</vclojure-string><vclojure-vector> </vclojure-vector><vclojure-string>&quot;CABD&quot;</vclojure-string><vclojure-vector> </vclojure-vector><vclojure-string>&quot;ACDB&quot;</vclojure-string><vclojure-vector> </vclojure-vector><vclojure-string>&quot;DACB&quot;</vclojure-string><vclojure-vector> </vclojure-vector><vclojure-string>&quot;BCDA&quot;</vclojure-string><vclojure-vector> </vclojure-vector><vclojure-string>&quot;ACBD&quot;</vclojure-string><vclojure-vector> </vclojure-vector><vclojure-string>&quot;ADCB&quot;</vclojure-string><vclojure-vector> </vclojure-vector><vclojure-string>&quot;CDAB&quot;</vclojure-string><vclojure-vector> </vclojure-vector><v-normal>            </v-normal>\n<vclojure-vector>            </vclojure-vector><vclojure-string>&quot;DABC&quot;</vclojure-string><vclojure-vector> </vclojure-vector><vclojure-string>&quot;BCAD&quot;</vclojure-string><vclojure-vector> </vclojure-vector><vclojure-string>&quot;CADB&quot;</vclojure-string><vclojure-vector> </vclojure-vector><vclojure-string>&quot;CDBA&quot;</vclojure-string><vclojure-vector> </vclojure-vector><vclojure-string>&quot;CBAD&quot;</vclojure-string><vclojure-vector> </vclojure-vector><vclojure-string>&quot;ABDC&quot;</vclojure-string><vclojure-vector> </vclojure-vector><vclojure-string>&quot;ADBC&quot;</vclojure-string><vclojure-vector> </vclojure-vector><vclojure-string>&quot;BDCA&quot;</vclojure-string><vclojure-vector> </vclojure-vector><v-normal>            </v-normal>\n<vclojure-vector>            </vclojure-vector><vclojure-string>&quot;DCBA&quot;</vclojure-string><vclojure-vector> </vclojure-vector><vclojure-string>&quot;BACD&quot;</vclojure-string><vclojure-vector> </vclojure-vector><vclojure-string>&quot;BADC&quot;</vclojure-string><vclojure-vector> </vclojure-vector><vclojure-string>&quot;BDAC&quot;</vclojure-string><vclojure-vector> </vclojure-vector><vclojure-string>&quot;CBDA&quot;</vclojure-string><vclojure-vector> </vclojure-vector><vclojure-string>&quot;DBCA&quot;</vclojure-string><vclojure-vector> </vclojure-vector><vclojure-string>&quot;DCAB&quot;</vclojure-string><vclojure-paren>])</vclojure-paren><v-normal>                  </v-normal>\n<v-normal>                                                                                </v-normal>\n<vclojure-paren>(</vclojure-paren><vclojure-special>def</vclojure-special><vclojure-sexp> </vclojure-sexp><vclojure-symbol>freqs</vclojure-symbol><vclojure-sexp> </vclojure-sexp><vclojure-paren>(</vclojure-paren><vclojure-symbol>-&gt;&gt;</vclojure-symbol><vclojure-sexp> </vclojure-sexp><vclojure-symbol>abcds</vclojure-symbol><vclojure-sexp> </vclojure-sexp><vclojure-paren>(</vclojure-paren><vclojure-func>apply</vclojure-func><vclojure-sexp> </vclojure-sexp><vclojure-func>map</vclojure-func><vclojure-sexp> </vclojure-sexp><vclojure-func>vector</vclojure-func><vclojure-paren>)</vclojure-paren><vclojure-sexp> </vclojure-sexp><vclojure-paren>(</vclojure-paren><vclojure-func>map</vclojure-func><vclojure-sexp> </vclojure-sexp><vclojure-func>frequencies</vclojure-func><vclojure-paren>)))</vclojure-paren><v-normal>                    </v-normal>\n<v-normal>                                                                                </v-normal>\n<vclojure-paren>(</vclojure-paren><vclojure-define>defn</vclojure-define><vclojure-sexp> </vclojure-sexp><vclojure-symbol>v-&gt;k</vclojure-symbol><vclojure-sexp> </vclojure-sexp><vclojure-paren>[</vclojure-paren><vclojure-symbol>fqmap</vclojure-symbol><vclojure-vector> </vclojure-vector><vclojure-symbol>v</vclojure-symbol><vclojure-paren>]</vclojure-paren><vclojure-sexp> </vclojure-sexp><vclojure-paren>(</vclojure-paren><vclojure-symbol>-&gt;&gt;</vclojure-symbol><vclojure-sexp> </vclojure-sexp><vclojure-symbol>fqmap</vclojure-symbol><vclojure-sexp> </vclojure-sexp><vclojure-paren>(</vclojure-paren><vclojure-func>filter</vclojure-func><vclojure-sexp> </vclojure-sexp><vclojure-dispatch>#</vclojure-dispatch><vclojure-paren>(</vclojure-paren><vclojure-symbol>-&gt;</vclojure-symbol><vclojure-sexp> </vclojure-sexp><vclojure-anon-arg>%</vclojure-anon-arg><vclojure-sexp> </vclojure-sexp><vclojure-func>second</vclojure-func><vclojure-sexp> </vclojure-sexp><vclojure-paren>(</vclojure-paren><vclojure-symbol>=</vclojure-symbol><vclojure-sexp> </vclojure-sexp><vclojure-symbol>v</vclojure-symbol><vclojure-paren>)))</vclojure-paren><vclojure-sexp> </vclojure-sexp><vclojure-func>ffirst</vclojure-func><vclojure-paren>))</vclojure-paren><v-normal>          </v-normal>\n<v-normal>                                                                                </v-normal>\n<vclojure-paren>(</vclojure-paren><vclojure-symbol>-&gt;&gt;</vclojure-symbol><vclojure-sexp> </vclojure-sexp><vclojure-symbol>freqs</vclojure-symbol><vclojure-sexp> </vclojure-sexp><vclojure-paren>(</vclojure-paren><vclojure-func>map</vclojure-func><vclojure-sexp> </vclojure-sexp><vclojure-dispatch>#</vclojure-dispatch><vclojure-paren>(</vclojure-paren><vclojure-symbol>v-&gt;k</vclojure-symbol><vclojure-sexp> </vclojure-sexp><vclojure-anon-arg>%</vclojure-anon-arg><vclojure-sexp> </vclojure-sexp><vclojure-number>5</vclojure-number><vclojure-paren>))</vclojure-paren><vclojure-sexp> </vclojure-sexp><vclojure-paren>(</vclojure-paren><vclojure-func>apply</vclojure-func><vclojure-sexp> </vclojure-sexp><vclojure-func>str</vclojure-func><vclojure-paren>)</vclojure-paren><vclojure-sexp> </vclojure-sexp><vclojure-func>println</vclojure-func><vclojure-paren>)</vclojure-paren><v-normal>                               </v-normal>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-normal>                                                                                </v-normal>\n'
});
res['snippets'].push({
  'title': 'File Input/Output',
  'terminal-contents': '<vclojure-paren>(</vclojure-paren><vclojure-func>use</vclojure-func><vclojure-sexp> </vclojure-sexp><vclojure-quote>&apos;</vclojure-quote><vclojure-symbol>clojure.java.io</vclojure-symbol><vclojure-paren>)</vclojure-paren><v-normal>                                                          </v-normal>\n<v-normal>                                                                                </v-normal>\n<vclojure-paren>(</vclojure-paren><vclojure-symbol>copy</vclojure-symbol><vclojure-sexp> </vclojure-sexp><vclojure-paren>(</vclojure-paren><vclojure-symbol>file</vclojure-symbol><vclojure-sexp> </vclojure-sexp><vclojure-string>&quot;input.txt&quot;</vclojure-string><vclojure-paren>)</vclojure-paren><vclojure-sexp> </vclojure-sexp><vclojure-paren>(</vclojure-paren><vclojure-symbol>file</vclojure-symbol><vclojure-sexp> </vclojure-sexp><vclojure-string>&quot;output.txt&quot;</vclojure-string><vclojure-paren>))</vclojure-paren><v-normal>                                   </v-normal>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-normal>                                                                                </v-normal>\n'
});
return res;
}())