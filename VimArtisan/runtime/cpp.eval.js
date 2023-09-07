(function() {
var res = {};
res['lang-syntax'] = (function() {
var res = {};
res['lang'] = 'Rules for Lang: cpp';
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
res['syntax-groups']['cStatement'] = SyntaxGroup.FromLink('cStatement', 'Statement');
res['syntax-groups']['cLabel'] = SyntaxGroup.FromLink('cLabel', 'Label');
res['syntax-groups']['cConditional'] = SyntaxGroup.FromLink('cConditional', 'Conditional');
res['syntax-groups']['cRepeat'] = SyntaxGroup.FromLink('cRepeat', 'Repeat');
res['syntax-groups']['cTodo'] = SyntaxGroup.FromLink('cTodo', 'Todo');
res['syntax-groups']['cBadContinuation'] = SyntaxGroup.FromLink('cBadContinuation', 'Error');
res['syntax-groups']['cSpecial'] = SyntaxGroup.FromLink('cSpecial', 'SpecialChar');
res['syntax-groups']['cFormat'] = SyntaxGroup.FromLink('cFormat', 'cSpecial');
res['syntax-groups']['cString'] = SyntaxGroup.FromLink('cString', 'String');
res['syntax-groups']['cCppString'] = SyntaxGroup.FromLink('cCppString', 'cString');
res['syntax-groups']['cSpaceError'] = SyntaxGroup.FromLink('cSpaceError', 'cError');
res['syntax-groups']['cCppSkip'] = SyntaxGroup.FromColor('cCppSkip', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['cCharacter'] = SyntaxGroup.FromLink('cCharacter', 'Character');
res['syntax-groups']['cSpecialError'] = SyntaxGroup.FromLink('cSpecialError', 'cError');
res['syntax-groups']['cSpecialCharacter'] = SyntaxGroup.FromLink('cSpecialCharacter', 'cSpecial');
res['syntax-groups']['cBadBlock'] = SyntaxGroup.FromColor('cBadBlock', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['cCurlyError'] = SyntaxGroup.FromLink('cCurlyError', 'cError');
res['syntax-groups']['cErrInParen'] = SyntaxGroup.FromLink('cErrInParen', 'cError');
res['syntax-groups']['cCppParen'] = SyntaxGroup.FromColor('cCppParen', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['cErrInBracket'] = SyntaxGroup.FromLink('cErrInBracket', 'cError');
res['syntax-groups']['cCppBracket'] = SyntaxGroup.FromColor('cCppBracket', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['cBlock'] = SyntaxGroup.FromColor('cBlock', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['cParenError'] = SyntaxGroup.FromLink('cParenError', 'cError');
res['syntax-groups']['cIncluded'] = SyntaxGroup.FromLink('cIncluded', 'cString');
res['syntax-groups']['cCommentSkip'] = SyntaxGroup.FromLink('cCommentSkip', 'cComment');
res['syntax-groups']['cCommentString'] = SyntaxGroup.FromLink('cCommentString', 'cString');
res['syntax-groups']['cComment2String'] = SyntaxGroup.FromLink('cComment2String', 'cString');
res['syntax-groups']['cCommentStartError'] = SyntaxGroup.FromLink('cCommentStartError', 'cError');
res['syntax-groups']['cUserLabel'] = SyntaxGroup.FromLink('cUserLabel', 'Label');
res['syntax-groups']['cBitField'] = SyntaxGroup.FromColor('cBitField', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['cOctalZero'] = SyntaxGroup.FromLink('cOctalZero', 'PreProc');
res['syntax-groups']['cNumber'] = SyntaxGroup.FromLink('cNumber', 'Number');
res['syntax-groups']['cFloat'] = SyntaxGroup.FromLink('cFloat', 'Float');
res['syntax-groups']['cOctal'] = SyntaxGroup.FromLink('cOctal', 'Number');
res['syntax-groups']['cOctalError'] = SyntaxGroup.FromLink('cOctalError', 'cError');
res['syntax-groups']['cNumbersCom'] = SyntaxGroup.FromColor('cNumbersCom', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['cParen'] = SyntaxGroup.FromColor('cParen', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['cBracket'] = SyntaxGroup.FromColor('cBracket', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['cNumbers'] = SyntaxGroup.FromColor('cNumbers', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['cCommentL'] = SyntaxGroup.FromLink('cCommentL', 'cComment');
res['syntax-groups']['cCommentStart'] = SyntaxGroup.FromLink('cCommentStart', 'cComment');
res['syntax-groups']['cComment'] = SyntaxGroup.FromLink('cComment', 'Comment');
res['syntax-groups']['cCommentError'] = SyntaxGroup.FromLink('cCommentError', 'cError');
res['syntax-groups']['cOperator'] = SyntaxGroup.FromLink('cOperator', 'Operator');
res['syntax-groups']['cType'] = SyntaxGroup.FromLink('cType', 'Type');
res['syntax-groups']['cStructure'] = SyntaxGroup.FromLink('cStructure', 'Structure');
res['syntax-groups']['cStorageClass'] = SyntaxGroup.FromLink('cStorageClass', 'StorageClass');
res['syntax-groups']['cConstant'] = SyntaxGroup.FromLink('cConstant', 'Constant');
res['syntax-groups']['cPreCondit'] = SyntaxGroup.FromLink('cPreCondit', 'PreCondit');
res['syntax-groups']['cPreConditMatch'] = SyntaxGroup.FromLink('cPreConditMatch', 'cPreCondit');
res['syntax-groups']['cCppInIf'] = SyntaxGroup.FromColor('cCppInIf', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['cCppInElse'] = SyntaxGroup.FromColor('cCppInElse', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['cCppInElse2'] = SyntaxGroup.FromLink('cCppInElse2', 'cCppOutIf2');
res['syntax-groups']['cCppOutIf'] = SyntaxGroup.FromColor('cCppOutIf', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['cCppOutIf2'] = SyntaxGroup.FromLink('cCppOutIf2', 'cCppOut');
res['syntax-groups']['cCppOutElse'] = SyntaxGroup.FromColor('cCppOutElse', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['cCppInSkip'] = SyntaxGroup.FromColor('cCppInSkip', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['cCppOutSkip'] = SyntaxGroup.FromLink('cCppOutSkip', 'cCppOutIf2');
res['syntax-groups']['cCppOutWrapper'] = SyntaxGroup.FromLink('cCppOutWrapper', 'cPreCondit');
res['syntax-groups']['cCppInWrapper'] = SyntaxGroup.FromLink('cCppInWrapper', 'cCppOutWrapper');
res['syntax-groups']['cPreProc'] = SyntaxGroup.FromLink('cPreProc', 'PreProc');
res['syntax-groups']['cInclude'] = SyntaxGroup.FromLink('cInclude', 'Include');
res['syntax-groups']['cDefine'] = SyntaxGroup.FromLink('cDefine', 'Macro');
res['syntax-groups']['cMulti'] = SyntaxGroup.FromColor('cMulti', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['cUserCont'] = SyntaxGroup.FromColor('cUserCont', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['cError'] = SyntaxGroup.FromLink('cError', 'Error');
res['syntax-groups']['cCppOut'] = SyntaxGroup.FromLink('cCppOut', 'Comment');
res['syntax-groups']['cppStatement'] = SyntaxGroup.FromLink('cppStatement', 'Statement');
res['syntax-groups']['cppAccess'] = SyntaxGroup.FromLink('cppAccess', 'cppStatement');
res['syntax-groups']['cppType'] = SyntaxGroup.FromLink('cppType', 'Type');
res['syntax-groups']['cppExceptions'] = SyntaxGroup.FromLink('cppExceptions', 'Exception');
res['syntax-groups']['cppOperator'] = SyntaxGroup.FromLink('cppOperator', 'Operator');
res['syntax-groups']['cppCast'] = SyntaxGroup.FromLink('cppCast', 'cppStatement');
res['syntax-groups']['cppStorageClass'] = SyntaxGroup.FromLink('cppStorageClass', 'StorageClass');
res['syntax-groups']['cppStructure'] = SyntaxGroup.FromLink('cppStructure', 'Structure');
res['syntax-groups']['cppBoolean'] = SyntaxGroup.FromLink('cppBoolean', 'Boolean');
res['syntax-groups']['cppConstant'] = SyntaxGroup.FromLink('cppConstant', 'Constant');
res['syntax-groups']['cppRawStringDelimiter'] = SyntaxGroup.FromLink('cppRawStringDelimiter', 'Delimiter');
res['syntax-groups']['cppRawString'] = SyntaxGroup.FromLink('cppRawString', 'String');
res['syntax-groups']['cppMinMax'] = SyntaxGroup.FromColor('cppMinMax', new TermColor(-1), new TermColor(-1));
return res;
} ())
;
res['snippets'] = [];
res['snippets'].push({
  'title': 'Hello, World!',
  'terminal-contents': '<vc-include>#include </vc-include><vc-included>&lt;stdio.h&gt;</vc-included><v-normal>                                                              </v-normal>\n<v-normal>                                                                                </v-normal>\n<vc-type>int</vc-type><v-normal> main(</v-normal><vc-type>int</vc-type><v-normal> argc, </v-normal><vc-storage-class>const</vc-storage-class><v-normal> </v-normal><vc-type>char</vc-type><v-normal>* argv[])                                          </v-normal>\n<v-normal>{                                                                               </v-normal>\n<v-normal>  printf(</v-normal><vc-string>&quot;Hello, World!&quot;</vc-string><v-normal>);                                                      </v-normal>\n<v-normal>  </v-normal><vc-statement>return</vc-statement><v-normal> </v-normal><vc-number>0</vc-number><v-normal>;                                                                     </v-normal>\n<v-normal>}                                                                               </v-normal>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-normal>                                                                                </v-normal>\n'
});
res['snippets'].push({
  'title': 'Arguments',
  'terminal-contents': '<vc-include>#include </vc-include><vc-included>&lt;iostream&gt;</vc-included><v-normal>                                                             </v-normal>\n<vc-include>#include </vc-include><vc-included>&lt;vector&gt;</vc-included><v-normal>                                                               </v-normal>\n<vcpp-statement>using</vcpp-statement><v-normal> </v-normal><vcpp-structure>namespace</vcpp-structure><v-normal> std;                                                            </v-normal>\n<v-normal>                                                                                </v-normal>\n<vc-type>int</vc-type><v-normal> main(</v-normal><vc-type>int</vc-type><v-normal> argc, </v-normal><vc-storage-class>const</vc-storage-class><v-normal> </v-normal><vc-type>char</vc-type><v-normal>* argv[])                                          </v-normal>\n<v-normal>{                                                                               </v-normal>\n<v-normal>  std::vector&lt;std::string&gt; args(argv, argv + argc);                             </v-normal>\n<v-normal>                                                                                </v-normal>\n<v-normal>  </v-normal><vc-repeat>for</vc-repeat><v-normal> (</v-normal><vc-storage-class>const</vc-storage-class><v-normal> </v-normal><vc-storage-class>auto</vc-storage-class><v-normal> &amp;arg : args)                                                  </v-normal>\n<v-normal>  {                                                                             </v-normal>\n<v-normal>    std::cout &lt;&lt; arg &lt;&lt; std::endl;                                              </v-normal>\n<v-normal>  }                                                                             </v-normal>\n<v-normal>                                                                                </v-normal>\n<v-normal>  </v-normal><vc-statement>return</vc-statement><v-normal> </v-normal><vc-number>0</vc-number><v-normal>;                                                                     </v-normal>\n<v-normal>}                                                                               </v-normal>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-normal>                                                                                </v-normal>\n'
});
res['snippets'].push({
  'title': 'Find Missing Perm',
  'terminal-contents': '<vc-include>#include </vc-include><vc-included>&lt;algorithm&gt;</vc-included><v-normal>                                                            </v-normal>\n<vc-include>#include </vc-include><vc-included>&lt;vector&gt;</vc-included><v-normal>                                                               </v-normal>\n<vc-include>#include </vc-include><vc-included>&lt;set&gt;</vc-included><v-normal>                                                                  </v-normal>\n<vc-include>#include </vc-include><vc-included>&lt;iterator&gt;</vc-included><v-normal>                                                             </v-normal>\n<vc-include>#include </vc-include><vc-included>&lt;iostream&gt;</vc-included><v-normal>                                                             </v-normal>\n<vc-include>#include </vc-include><vc-included>&lt;string&gt;</vc-included><v-normal>                                                               </v-normal>\n<v-normal>                                                                                </v-normal>\n<vc-storage-class>static</vc-storage-class><v-normal> </v-normal><vc-storage-class>const</vc-storage-class><v-normal> std::string GivenPermutations[] = {                                </v-normal>\n<v-normal>  </v-normal><vc-cpp-string>&quot;ABCD&quot;</vc-cpp-string><v-normal>,</v-normal><vc-cpp-string>&quot;CABD&quot;</vc-cpp-string><v-normal>,</v-normal><vc-cpp-string>&quot;ACDB&quot;</vc-cpp-string><v-normal>,</v-normal><vc-cpp-string>&quot;DACB&quot;</vc-cpp-string><v-normal>,                                                  </v-normal>\n<v-normal>  </v-normal><vc-cpp-string>&quot;BCDA&quot;</vc-cpp-string><v-normal>,</v-normal><vc-cpp-string>&quot;ACBD&quot;</vc-cpp-string><v-normal>,</v-normal><vc-cpp-string>&quot;ADCB&quot;</vc-cpp-string><v-normal>,</v-normal><vc-cpp-string>&quot;CDAB&quot;</vc-cpp-string><v-normal>,                                                  </v-normal>\n<v-normal>  </v-normal><vc-cpp-string>&quot;DABC&quot;</vc-cpp-string><v-normal>,</v-normal><vc-cpp-string>&quot;BCAD&quot;</vc-cpp-string><v-normal>,</v-normal><vc-cpp-string>&quot;CADB&quot;</vc-cpp-string><v-normal>,</v-normal><vc-cpp-string>&quot;CDBA&quot;</vc-cpp-string><v-normal>,                                                  </v-normal>\n<v-normal>  </v-normal><vc-cpp-string>&quot;CBAD&quot;</vc-cpp-string><v-normal>,</v-normal><vc-cpp-string>&quot;ABDC&quot;</vc-cpp-string><v-normal>,</v-normal><vc-cpp-string>&quot;ADBC&quot;</vc-cpp-string><v-normal>,</v-normal><vc-cpp-string>&quot;BDCA&quot;</vc-cpp-string><v-normal>,                                                  </v-normal>\n<v-normal>  </v-normal><vc-cpp-string>&quot;DCBA&quot;</vc-cpp-string><v-normal>,</v-normal><vc-cpp-string>&quot;BACD&quot;</vc-cpp-string><v-normal>,</v-normal><vc-cpp-string>&quot;BADC&quot;</vc-cpp-string><v-normal>,</v-normal><vc-cpp-string>&quot;BDAC&quot;</vc-cpp-string><v-normal>,                                                  </v-normal>\n<v-normal>  </v-normal><vc-cpp-string>&quot;CBDA&quot;</vc-cpp-string><v-normal>,</v-normal><vc-cpp-string>&quot;DBCA&quot;</vc-cpp-string><v-normal>,</v-normal><vc-cpp-string>&quot;DCAB&quot;</vc-cpp-string><v-normal>                                                          </v-normal>\n<v-normal>};                                                                              </v-normal>\n<vc-storage-class>static</vc-storage-class><v-normal> </v-normal><vc-storage-class>const</vc-storage-class><v-normal> </v-normal><vc-type>size_t</vc-type><v-normal> NumGivenPermutations = </v-normal><vc-operator>sizeof</vc-operator><v-normal>(GivenPermutations) / </v-normal><vc-operator>sizeof</vc-operator><v-normal>(*G</v-normal>\n<v-normal>ivenPermutations);                                                              </v-normal>\n<v-normal>                                                                                </v-normal>\n<vc-type>int</vc-type><v-normal> main()                                                                      </v-normal>\n<v-normal>{                                                                               </v-normal>\n<v-normal>    std::vector&lt;std::string&gt; permutations;                                      </v-normal>\n<v-normal>    std::string initial = </v-normal><vc-cpp-string>&quot;ABCD&quot;</vc-cpp-string><v-normal>;                                               </v-normal>\n<v-normal>    permutations.push_back(initial);                                            </v-normal>\n<v-normal>                                                                                </v-normal>\n'
});
res['snippets'].push({
  'title': 'File Input/Output',
  'terminal-contents': '<vc-include># include </vc-include><vc-included>&lt;algorithm&gt;</vc-included><v-normal>                                                           </v-normal>\n<vc-include># include </vc-include><vc-included>&lt;fstream&gt;</vc-included><v-normal>                                                             </v-normal>\n<v-normal>                                                                                </v-normal>\n<vc-type>int</vc-type><v-normal> main() {                                                                    </v-normal>\n<v-normal>  std::ifstream ifile(</v-normal><vc-string>&quot;input.txt&quot;</vc-string><v-normal>);                                             </v-normal>\n<v-normal>  std::ofstream ofile(</v-normal><vc-string>&quot;output.txt&quot;</vc-string><v-normal>);                                            </v-normal>\n<v-normal>  std::copy(std::istreambuf_iterator&lt;</v-normal><vc-type>char</vc-type><v-normal>&gt;(ifile),                              </v-normal>\n<v-normal>            std::istreambuf_iterator&lt;</v-normal><vc-type>char</vc-type><v-normal>&gt;(),                                   </v-normal>\n<v-normal>            std::ostreambuf_iterator&lt;</v-normal><vc-type>char</vc-type><v-normal>&gt;(ofile));                             </v-normal>\n<v-normal>}                                                                               </v-normal>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-normal>                                                                                </v-normal>\n'
});
return res;
}())