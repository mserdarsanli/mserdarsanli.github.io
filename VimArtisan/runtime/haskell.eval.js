(function() {
var res = {};
res['lang-syntax'] = (function() {
var res = {};
res['lang'] = 'Rules for Lang: haskell';
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
res['syntax-groups']['ConId'] = SyntaxGroup.FromColor('ConId', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['VarId'] = SyntaxGroup.FromColor('VarId', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['hsVarSym'] = SyntaxGroup.FromLink('hsVarSym', 'hsOperator');
res['syntax-groups']['hsConSym'] = SyntaxGroup.FromLink('hsConSym', 'hsOperator');
res['syntax-groups']['hsDelimiter'] = SyntaxGroup.FromColor('hsDelimiter', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['hsSpecialChar'] = SyntaxGroup.FromLink('hsSpecialChar', 'SpecialChar');
res['syntax-groups']['hsSpecialCharError'] = SyntaxGroup.FromLink('hsSpecialCharError', 'Error');
res['syntax-groups']['hsString'] = SyntaxGroup.FromLink('hsString', 'String');
res['syntax-groups']['hsCharacter'] = SyntaxGroup.FromLink('hsCharacter', 'Character');
res['syntax-groups']['hsNumber'] = SyntaxGroup.FromLink('hsNumber', 'Number');
res['syntax-groups']['hsFloat'] = SyntaxGroup.FromLink('hsFloat', 'Float');
res['syntax-groups']['hsModule'] = SyntaxGroup.FromLink('hsModule', 'hsStructure');
res['syntax-groups']['hsImportMod'] = SyntaxGroup.FromLink('hsImportMod', 'hsImport');
res['syntax-groups']['hsLineComment'] = SyntaxGroup.FromLink('hsLineComment', 'hsComment');
res['syntax-groups']['hsBlockComment'] = SyntaxGroup.FromLink('hsBlockComment', 'hsComment');
res['syntax-groups']['hsImport'] = SyntaxGroup.FromLink('hsImport', 'Include');
res['syntax-groups']['hsInfix'] = SyntaxGroup.FromLink('hsInfix', 'PreProc');
res['syntax-groups']['hsStructure'] = SyntaxGroup.FromLink('hsStructure', 'Structure');
res['syntax-groups']['hsTypedef'] = SyntaxGroup.FromLink('hsTypedef', 'Typedef');
res['syntax-groups']['hsStatement'] = SyntaxGroup.FromLink('hsStatement', 'Statement');
res['syntax-groups']['hsConditional'] = SyntaxGroup.FromLink('hsConditional', 'Conditional');
res['syntax-groups']['hsPragma'] = SyntaxGroup.FromLink('hsPragma', 'SpecialComment');
res['syntax-groups']['cError'] = SyntaxGroup.FromLink('cError', 'Error');
res['syntax-groups']['cComment'] = SyntaxGroup.FromLink('cComment', 'Comment');
res['syntax-groups']['cCppString'] = SyntaxGroup.FromLink('cCppString', 'hsString');
res['syntax-groups']['cCommentError'] = SyntaxGroup.FromLink('cCommentError', 'hsError');
res['syntax-groups']['cPreCondit'] = SyntaxGroup.FromLink('cPreCondit', 'PreCondit');
res['syntax-groups']['cCppOut2'] = SyntaxGroup.FromLink('cCppOut2', 'cCppOut');
res['syntax-groups']['cCppOut'] = SyntaxGroup.FromLink('cCppOut', 'Comment');
res['syntax-groups']['cCppSkip'] = SyntaxGroup.FromLink('cCppSkip', 'cCppOut');
res['syntax-groups']['cIncluded'] = SyntaxGroup.FromLink('cIncluded', 'hsString');
res['syntax-groups']['cInclude'] = SyntaxGroup.FromLink('cInclude', 'Include');
res['syntax-groups']['cDefine'] = SyntaxGroup.FromLink('cDefine', 'Macro');
res['syntax-groups']['cCommentStartError'] = SyntaxGroup.FromLink('cCommentStartError', 'hsError');
res['syntax-groups']['cPreProc'] = SyntaxGroup.FromLink('cPreProc', 'PreProc');
res['syntax-groups']['cCommentStart'] = SyntaxGroup.FromLink('cCommentStart', 'hsComment');
res['syntax-groups']['cSpaceError'] = SyntaxGroup.FromColor('cSpaceError', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['cSpecial'] = SyntaxGroup.FromColor('cSpecial', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['hsOperator'] = SyntaxGroup.FromLink('hsOperator', 'Operator');
res['syntax-groups']['hsLiterateComment'] = SyntaxGroup.FromLink('hsLiterateComment', 'hsComment');
res['syntax-groups']['hsComment'] = SyntaxGroup.FromLink('hsComment', 'Comment');
res['syntax-groups']['hsBoolean'] = SyntaxGroup.FromLink('hsBoolean', 'Boolean');
res['syntax-groups']['hsType'] = SyntaxGroup.FromLink('hsType', 'Type');
res['syntax-groups']['hsMaybe'] = SyntaxGroup.FromLink('hsMaybe', 'hsEnumConst');
res['syntax-groups']['hsEnumConst'] = SyntaxGroup.FromLink('hsEnumConst', 'Constant');
res['syntax-groups']['hsOrdering'] = SyntaxGroup.FromLink('hsOrdering', 'hsEnumConst');
res['syntax-groups']['hsDebug'] = SyntaxGroup.FromLink('hsDebug', 'Debug');
res['syntax-groups']['hsError'] = SyntaxGroup.FromColor('hsError', new TermColor(-1), new TermColor(-1));
return res;
} ())
;
res['snippets'] = [];
res['snippets'].push({
  'title': 'Find Missing Perm',
  'terminal-contents': '<vhs-import>import</vhs-import><v-normal> Data.List                                                                </v-normal>\n<vhs-import>import</vhs-import><v-normal> Control.Monad                                                            </v-normal>\n<vhs-import>import</vhs-import><v-normal> Control.Arrow                                                            </v-normal>\n<v-normal>                                                                                </v-normal>\n<v-var-id>missingPerm</v-var-id><v-normal> </v-normal><vhs-con-sym>::</vhs-con-sym><v-normal> </v-normal><v-con-id>Eq</v-con-id><v-normal> </v-normal><v-var-id>a</v-var-id><v-normal> </v-normal><vhs-var-sym>=&gt;</vhs-var-sym><v-normal> </v-normal><vhs-delimiter>[[</vhs-delimiter><v-var-id>a</v-var-id><vhs-delimiter>]]</vhs-delimiter><v-normal> </v-normal><vhs-var-sym>-&gt;</vhs-var-sym><v-normal> </v-normal><vhs-delimiter>[[</vhs-delimiter><v-var-id>a</v-var-id><vhs-delimiter>]]</vhs-delimiter><v-normal>                                           </v-normal>\n<v-var-id>missingPerm</v-var-id><v-normal> </v-normal><vhs-var-sym>=</vhs-var-sym><v-normal> </v-normal><vhs-delimiter>(</vhs-delimiter><vhs-var-sym>&#92;&#92;</vhs-var-sym><vhs-delimiter>)</vhs-delimiter><v-normal> </v-normal><vhs-var-sym>=&lt;&lt;</vhs-var-sym><v-normal> </v-normal><v-var-id>permutations</v-var-id><v-normal> </v-normal><vhs-var-sym>.</vhs-var-sym><v-normal> </v-normal><v-var-id>nub</v-var-id><v-normal> </v-normal><vhs-var-sym>.</vhs-var-sym><v-normal> </v-normal><v-var-id>join</v-var-id><v-normal>                                </v-normal>\n<v-normal>                                                                                </v-normal>\n<v-var-id>deficientPermsList</v-var-id><v-normal> </v-normal><vhs-var-sym>=</vhs-var-sym><v-normal> </v-normal><vhs-delimiter>[</vhs-delimiter><vhs-string>&quot;ABCD&quot;</vhs-string><vhs-delimiter>,</vhs-delimiter><vhs-string>&quot;CABD&quot;</vhs-string><vhs-delimiter>,</vhs-delimiter><vhs-string>&quot;ACDB&quot;</vhs-string><vhs-delimiter>,</vhs-delimiter><vhs-string>&quot;DACB&quot;</vhs-string><vhs-delimiter>,</vhs-delimiter><v-normal>                              </v-normal>\n<v-normal>                      </v-normal><vhs-string>&quot;BCDA&quot;</vhs-string><vhs-delimiter>,</vhs-delimiter><vhs-string>&quot;ACBD&quot;</vhs-string><vhs-delimiter>,</vhs-delimiter><vhs-string>&quot;ADCB&quot;</vhs-string><vhs-delimiter>,</vhs-delimiter><vhs-string>&quot;CDAB&quot;</vhs-string><vhs-delimiter>,</vhs-delimiter><v-normal>                              </v-normal>\n<v-normal>                      </v-normal><vhs-string>&quot;DABC&quot;</vhs-string><vhs-delimiter>,</vhs-delimiter><vhs-string>&quot;BCAD&quot;</vhs-string><vhs-delimiter>,</vhs-delimiter><vhs-string>&quot;CADB&quot;</vhs-string><vhs-delimiter>,</vhs-delimiter><vhs-string>&quot;CDBA&quot;</vhs-string><vhs-delimiter>,</vhs-delimiter><v-normal>                              </v-normal>\n<v-normal>                      </v-normal><vhs-string>&quot;CBAD&quot;</vhs-string><vhs-delimiter>,</vhs-delimiter><vhs-string>&quot;ABDC&quot;</vhs-string><vhs-delimiter>,</vhs-delimiter><vhs-string>&quot;ADBC&quot;</vhs-string><vhs-delimiter>,</vhs-delimiter><vhs-string>&quot;BDCA&quot;</vhs-string><vhs-delimiter>,</vhs-delimiter><v-normal>                              </v-normal>\n<v-normal>                      </v-normal><vhs-string>&quot;DCBA&quot;</vhs-string><vhs-delimiter>,</vhs-delimiter><vhs-string>&quot;BACD&quot;</vhs-string><vhs-delimiter>,</vhs-delimiter><vhs-string>&quot;BADC&quot;</vhs-string><vhs-delimiter>,</vhs-delimiter><vhs-string>&quot;BDAC&quot;</vhs-string><vhs-delimiter>,</vhs-delimiter><v-normal>                              </v-normal>\n<v-normal>                      </v-normal><vhs-string>&quot;CBDA&quot;</vhs-string><vhs-delimiter>,</vhs-delimiter><vhs-string>&quot;DBCA&quot;</vhs-string><vhs-delimiter>,</vhs-delimiter><vhs-string>&quot;DCAB&quot;</vhs-string><vhs-delimiter>]</vhs-delimiter><v-normal>                                     </v-normal>\n<v-normal>                                                                                </v-normal>\n<v-var-id>main</v-var-id><v-normal> </v-normal><vhs-var-sym>=</vhs-var-sym><v-normal> </v-normal><vhs-statement>do</vhs-statement><v-normal>                                                                       </v-normal>\n<v-normal>    </v-normal><v-var-id>print</v-var-id><v-normal> </v-normal><vhs-var-sym>$</vhs-var-sym><v-normal> </v-normal><v-var-id>missingPerm</v-var-id><v-normal> </v-normal><v-var-id>deficientPermsList</v-var-id><v-normal>                                      </v-normal>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-normal>                                                                                </v-normal>\n'
});
res['snippets'].push({
  'title': 'File Input/Output',
  'terminal-contents': '<v-var-id>main</v-var-id><v-normal> </v-normal><vhs-var-sym>=</vhs-var-sym><v-normal> </v-normal><v-var-id>readFile</v-var-id><v-normal> </v-normal><vhs-string>&quot;input.txt&quot;</vhs-string><v-normal> </v-normal><vhs-var-sym>&gt;&gt;=</vhs-var-sym><v-normal> </v-normal><v-var-id>writeFile</v-var-id><v-normal> </v-normal><vhs-string>&quot;output.txt&quot;</vhs-string><v-normal>                          </v-normal>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-normal>                                                                                </v-normal>\n'
});
return res;
}())