(function() {
var res = {};
res['lang-syntax'] = (function() {
var res = {};
res['lang'] = 'Rules for Lang: cs';
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
res['syntax-groups']['csType'] = SyntaxGroup.FromLink('csType', 'Type');
res['syntax-groups']['csStorage'] = SyntaxGroup.FromLink('csStorage', 'StorageClass');
res['syntax-groups']['csRepeat'] = SyntaxGroup.FromLink('csRepeat', 'Repeat');
res['syntax-groups']['csConditional'] = SyntaxGroup.FromLink('csConditional', 'Conditional');
res['syntax-groups']['csLabel'] = SyntaxGroup.FromLink('csLabel', 'Label');
res['syntax-groups']['csOperatorError'] = SyntaxGroup.FromLink('csOperatorError', 'Error');
res['syntax-groups']['csModifier'] = SyntaxGroup.FromLink('csModifier', 'StorageClass');
res['syntax-groups']['csConstant'] = SyntaxGroup.FromLink('csConstant', 'Constant');
res['syntax-groups']['csException'] = SyntaxGroup.FromLink('csException', 'Exception');
res['syntax-groups']['csUnspecifiedStatement'] = SyntaxGroup.FromLink('csUnspecifiedStatement', 'Statement');
res['syntax-groups']['csUnsupportedStatement'] = SyntaxGroup.FromLink('csUnsupportedStatement', 'Statement');
res['syntax-groups']['csUnspecifiedKeyword'] = SyntaxGroup.FromLink('csUnspecifiedKeyword', 'Keyword');
res['syntax-groups']['csContextualStatement'] = SyntaxGroup.FromLink('csContextualStatement', 'Statement');
res['syntax-groups']['csTodo'] = SyntaxGroup.FromLink('csTodo', 'Todo');
res['syntax-groups']['csComment'] = SyntaxGroup.FromLink('csComment', 'Comment');
res['syntax-groups']['csXmlCommentLeader'] = SyntaxGroup.FromLink('csXmlCommentLeader', 'Comment');
res['syntax-groups']['csXmlTag'] = SyntaxGroup.FromLink('csXmlTag', 'Statement');
res['syntax-groups']['csXmlComment'] = SyntaxGroup.FromLink('csXmlComment', 'Comment');
res['syntax-groups']['xmlError'] = SyntaxGroup.FromLink('xmlError', 'Error');
res['syntax-groups']['xmlEntity'] = SyntaxGroup.FromLink('xmlEntity', 'Statement');
res['syntax-groups']['xmlString'] = SyntaxGroup.FromLink('xmlString', 'String');
res['syntax-groups']['xmlAttribPunct'] = SyntaxGroup.FromLink('xmlAttribPunct', 'Comment');
res['syntax-groups']['xmlEqual'] = SyntaxGroup.FromColor('xmlEqual', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['xmlAttrib'] = SyntaxGroup.FromLink('xmlAttrib', 'Type');
res['syntax-groups']['xmlNamespace'] = SyntaxGroup.FromLink('xmlNamespace', 'Tag');
res['syntax-groups']['xmlTagName'] = SyntaxGroup.FromLink('xmlTagName', 'Function');
res['syntax-groups']['xmlTag'] = SyntaxGroup.FromLink('xmlTag', 'Function');
res['syntax-groups']['xmlEndTag'] = SyntaxGroup.FromLink('xmlEndTag', 'Identifier');
res['syntax-groups']['xmlCdata'] = SyntaxGroup.FromLink('xmlCdata', 'String');
res['syntax-groups']['xmlRegion'] = SyntaxGroup.FromLink('xmlRegion', 'Comment');
res['syntax-groups']['xmlComment'] = SyntaxGroup.FromLink('xmlComment', 'Comment');
res['syntax-groups']['xmlProcessing'] = SyntaxGroup.FromLink('xmlProcessing', 'Type');
res['syntax-groups']['xmlEntityPunct'] = SyntaxGroup.FromLink('xmlEntityPunct', 'Type');
res['syntax-groups']['xmlCommentStart'] = SyntaxGroup.FromLink('xmlCommentStart', 'xmlComment');
res['syntax-groups']['xmlCommentError'] = SyntaxGroup.FromLink('xmlCommentError', 'Error');
res['syntax-groups']['xmlCommentPart'] = SyntaxGroup.FromLink('xmlCommentPart', 'Comment');
res['syntax-groups']['xmlTodo'] = SyntaxGroup.FromLink('xmlTodo', 'Todo');
res['syntax-groups']['xmlCdataStart'] = SyntaxGroup.FromLink('xmlCdataStart', 'Type');
res['syntax-groups']['xmlCdataEnd'] = SyntaxGroup.FromLink('xmlCdataEnd', 'Type');
res['syntax-groups']['xmlCdataCdata'] = SyntaxGroup.FromLink('xmlCdataCdata', 'Statement');
res['syntax-groups']['xmlProcessingDelim'] = SyntaxGroup.FromLink('xmlProcessingDelim', 'Comment');
res['syntax-groups']['xmlDocTypeKeyword'] = SyntaxGroup.FromLink('xmlDocTypeKeyword', 'Statement');
res['syntax-groups']['xmlInlineDTD'] = SyntaxGroup.FromLink('xmlInlineDTD', 'Function');
res['syntax-groups']['xmlDocTypeDecl'] = SyntaxGroup.FromLink('xmlDocTypeDecl', 'Function');
res['syntax-groups']['xmlDocType'] = SyntaxGroup.FromColor('xmlDocType', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['dtdFunction'] = SyntaxGroup.FromLink('dtdFunction', 'Function');
res['syntax-groups']['dtdTag'] = SyntaxGroup.FromLink('dtdTag', 'Normal');
res['syntax-groups']['dtdTagName'] = SyntaxGroup.FromLink('dtdTagName', 'Statement');
res['syntax-groups']['dtdError'] = SyntaxGroup.FromLink('dtdError', 'Error');
res['syntax-groups']['dtdComment'] = SyntaxGroup.FromLink('dtdComment', 'Comment');
res['syntax-groups']['dtdString'] = SyntaxGroup.FromLink('dtdString', 'dtdConstant');
res['syntax-groups']['dtdAttrType'] = SyntaxGroup.FromLink('dtdAttrType', 'dtdType');
res['syntax-groups']['dtdAttrDef'] = SyntaxGroup.FromLink('dtdAttrDef', 'dtdType');
res['syntax-groups']['dtdEnum'] = SyntaxGroup.FromLink('dtdEnum', 'dtdConstant');
res['syntax-groups']['dtdParamEntityInst'] = SyntaxGroup.FromLink('dtdParamEntityInst', 'dtdConstant');
res['syntax-groups']['dtdParamEntityDecl'] = SyntaxGroup.FromLink('dtdParamEntityDecl', 'dtdType');
res['syntax-groups']['dtdCard'] = SyntaxGroup.FromLink('dtdCard', 'dtdFunction');
res['syntax-groups']['dtdTodo'] = SyntaxGroup.FromLink('dtdTodo', 'Todo');
res['syntax-groups']['dtdParamEntityPunct'] = SyntaxGroup.FromLink('dtdParamEntityPunct', 'dtdType');
res['syntax-groups']['dtdParamEntityDPunct'] = SyntaxGroup.FromLink('dtdParamEntityDPunct', 'dtdComment');
res['syntax-groups']['dtdEntityPunct'] = SyntaxGroup.FromLink('dtdEntityPunct', 'dtdType');
res['syntax-groups']['dtdEntity'] = SyntaxGroup.FromLink('dtdEntity', 'Statement');
res['syntax-groups']['dtdType'] = SyntaxGroup.FromLink('dtdType', 'Type');
res['syntax-groups']['dtdConstant'] = SyntaxGroup.FromLink('dtdConstant', 'Constant');
res['syntax-groups']['xmlSyncDT'] = SyntaxGroup.FromColor('xmlSyncDT', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['csPreCondit'] = SyntaxGroup.FromLink('csPreCondit', 'PreCondit');
res['syntax-groups']['csRegion'] = SyntaxGroup.FromColor('csRegion', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['csSpecialError'] = SyntaxGroup.FromLink('csSpecialError', 'Error');
res['syntax-groups']['csSpecialCharError'] = SyntaxGroup.FromLink('csSpecialCharError', 'Error');
res['syntax-groups']['csSpecialChar'] = SyntaxGroup.FromLink('csSpecialChar', 'SpecialChar');
res['syntax-groups']['csUnicodeSpecifier'] = SyntaxGroup.FromLink('csUnicodeSpecifier', 'SpecialChar');
res['syntax-groups']['csUnicodeNumber'] = SyntaxGroup.FromLink('csUnicodeNumber', 'SpecialChar');
res['syntax-groups']['csVerbatimSpec'] = SyntaxGroup.FromLink('csVerbatimSpec', 'SpecialChar');
res['syntax-groups']['csVerbatimString'] = SyntaxGroup.FromLink('csVerbatimString', 'String');
res['syntax-groups']['csString'] = SyntaxGroup.FromLink('csString', 'String');
res['syntax-groups']['csCharacter'] = SyntaxGroup.FromLink('csCharacter', 'Character');
res['syntax-groups']['csNumber'] = SyntaxGroup.FromLink('csNumber', 'Number');
return res;
} ())
;
res['snippets'] = [];
res['snippets'].push({
  'title': 'Find Missing Perm',
  'terminal-contents': '<vcs-unspecified-statement>using</vcs-unspecified-statement><v-normal> System;                                                                   </v-normal>\n<vcs-unspecified-statement>using</vcs-unspecified-statement><v-normal> System.Collections.Generic;                                               </v-normal>\n<v-normal>                                                                                </v-normal>\n<vcs-storage>namespace</vcs-storage><v-normal> MissingPermutation                                                    </v-normal>\n<v-normal>{                                                                               </v-normal>\n<v-normal>    </v-normal><vcs-storage>class</vcs-storage><v-normal> Program                                                               </v-normal>\n<v-normal>    {                                                                           </v-normal>\n<v-normal>        </v-normal><vcs-modifier>static</vcs-modifier><v-normal> </v-normal><vcs-type>void</vcs-type><v-normal> Main()                                                      </v-normal>\n<v-normal>        {                                                                       </v-normal>\n<v-normal>            </v-normal><vcs-type>string</vcs-type><v-normal>[] given = </v-normal><vcs-unspecified-statement>new</vcs-unspecified-statement><v-normal> </v-normal><vcs-type>string</vcs-type><v-normal>[] { </v-normal><vcs-string>&quot;ABCD&quot;</vcs-string><v-normal>, </v-normal><vcs-string>&quot;CABD&quot;</vcs-string><v-normal>, </v-normal><vcs-string>&quot;ACDB&quot;</vcs-string><v-normal>, </v-normal><vcs-string>&quot;DACB&quot;</vcs-string><v-normal>,     </v-normal>\n<v-normal>                                            </v-normal><vcs-string>&quot;BCDA&quot;</vcs-string><v-normal>, </v-normal><vcs-string>&quot;ACBD&quot;</vcs-string><v-normal>, </v-normal><vcs-string>&quot;ADCB&quot;</vcs-string><v-normal>, </v-normal><vcs-string>&quot;CDAB&quot;</vcs-string><v-normal>,     </v-normal>\n<v-normal>                                            </v-normal><vcs-string>&quot;DABC&quot;</vcs-string><v-normal>, </v-normal><vcs-string>&quot;BCAD&quot;</vcs-string><v-normal>, </v-normal><vcs-string>&quot;CADB&quot;</vcs-string><v-normal>, </v-normal><vcs-string>&quot;CDBA&quot;</vcs-string><v-normal>,     </v-normal>\n<v-normal>                                            </v-normal><vcs-string>&quot;CBAD&quot;</vcs-string><v-normal>, </v-normal><vcs-string>&quot;ABDC&quot;</vcs-string><v-normal>, </v-normal><vcs-string>&quot;ADBC&quot;</vcs-string><v-normal>, </v-normal><vcs-string>&quot;BDCA&quot;</vcs-string><v-normal>,     </v-normal>\n<v-normal>                                            </v-normal><vcs-string>&quot;DCBA&quot;</vcs-string><v-normal>, </v-normal><vcs-string>&quot;BACD&quot;</vcs-string><v-normal>, </v-normal><vcs-string>&quot;BADC&quot;</vcs-string><v-normal>, </v-normal><vcs-string>&quot;BDAC&quot;</vcs-string><v-normal>,     </v-normal>\n<v-normal>                                            </v-normal><vcs-string>&quot;CBDA&quot;</vcs-string><v-normal>, </v-normal><vcs-string>&quot;DBCA&quot;</vcs-string><v-normal>, </v-normal><vcs-string>&quot;DCAB&quot;</vcs-string><v-normal> };           </v-normal>\n<v-normal>                                                                                </v-normal>\n<v-normal>            List&lt;</v-normal><vcs-type>string</vcs-type><v-normal>&gt; result = </v-normal><vcs-unspecified-statement>new</vcs-unspecified-statement><v-normal> List&lt;</v-normal><vcs-type>string</vcs-type><v-normal>&gt;();                           </v-normal>\n<v-normal>            permuteString(</v-normal><vcs-unspecified-statement>ref</vcs-unspecified-statement><v-normal> result, </v-normal><vcs-string>&quot;&quot;</vcs-string><v-normal>, </v-normal><vcs-string>&quot;ABCD&quot;</vcs-string><v-normal>);                              </v-normal>\n<v-normal>                                                                                </v-normal>\n<v-normal>            </v-normal><vcs-repeat>foreach</vcs-repeat><v-normal> (</v-normal><vcs-type>string</vcs-type><v-normal> a </v-normal><vcs-unspecified-statement>in</vcs-unspecified-statement><v-normal> result)                                        </v-normal>\n<v-normal>                </v-normal><vcs-conditional>if</vcs-conditional><v-normal> (Array.IndexOf(given, a) == -</v-normal><vcs-number>1</vcs-number><v-normal>)                              </v-normal>\n<v-normal>                    Console.WriteLine(a + </v-normal><vcs-string>&quot; is a missing Permutation&quot;</vcs-string><v-normal>);         </v-normal>\n<v-normal>        }                                                                       </v-normal>\n<v-normal>                                                                                </v-normal>\n'
});
res['snippets'].push({
  'title': 'File Input/Output',
  'terminal-contents': '<vcs-unspecified-statement>using</vcs-unspecified-statement><v-normal> System.IO;                                                                </v-normal>\n<v-normal>                                                                                </v-normal>\n<vcs-unspecified-statement>using</vcs-unspecified-statement><v-normal> (var reader = </v-normal><vcs-unspecified-statement>new</vcs-unspecified-statement><v-normal> StreamReader(</v-normal><vcs-string>&quot;input.txt&quot;</vcs-string><v-normal>))                              </v-normal>\n<vcs-unspecified-statement>using</vcs-unspecified-statement><v-normal> (var writer = </v-normal><vcs-unspecified-statement>new</vcs-unspecified-statement><v-normal> StreamWriter(</v-normal><vcs-string>&quot;output.txt&quot;</vcs-string><v-normal>))                             </v-normal>\n<v-normal>{                                                                               </v-normal>\n<v-normal>    var text = reader.ReadToEnd();                                              </v-normal>\n<v-normal>    writer.Write(text);                                                         </v-normal>\n<v-normal>}                                                                               </v-normal>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-normal>                                                                                </v-normal>\n'
});
return res;
}())