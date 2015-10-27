(function() {
var res = {};
res['lang-syntax'] = (function() {
var res = {};
res['lang'] = 'Rules for Lang: go';
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
res['syntax-groups']['goDirective'] = SyntaxGroup.FromLink('goDirective', 'Statement');
res['syntax-groups']['goDeclaration'] = SyntaxGroup.FromLink('goDeclaration', 'Keyword');
res['syntax-groups']['goDeclType'] = SyntaxGroup.FromLink('goDeclType', 'Keyword');
res['syntax-groups']['goStatement'] = SyntaxGroup.FromLink('goStatement', 'Statement');
res['syntax-groups']['goConditional'] = SyntaxGroup.FromLink('goConditional', 'Conditional');
res['syntax-groups']['goLabel'] = SyntaxGroup.FromLink('goLabel', 'Label');
res['syntax-groups']['goRepeat'] = SyntaxGroup.FromLink('goRepeat', 'Repeat');
res['syntax-groups']['goType'] = SyntaxGroup.FromLink('goType', 'Type');
res['syntax-groups']['goSignedInts'] = SyntaxGroup.FromLink('goSignedInts', 'Type');
res['syntax-groups']['goUnsignedInts'] = SyntaxGroup.FromLink('goUnsignedInts', 'Type');
res['syntax-groups']['goFloats'] = SyntaxGroup.FromLink('goFloats', 'Type');
res['syntax-groups']['goComplexes'] = SyntaxGroup.FromLink('goComplexes', 'Type');
res['syntax-groups']['goBuiltins'] = SyntaxGroup.FromLink('goBuiltins', 'Keyword');
res['syntax-groups']['goConstants'] = SyntaxGroup.FromLink('goConstants', 'Keyword');
res['syntax-groups']['goTodo'] = SyntaxGroup.FromLink('goTodo', 'Todo');
res['syntax-groups']['goComment'] = SyntaxGroup.FromLink('goComment', 'Comment');
res['syntax-groups']['goEscapeOctal'] = SyntaxGroup.FromLink('goEscapeOctal', 'goSpecialString');
res['syntax-groups']['goEscapeC'] = SyntaxGroup.FromLink('goEscapeC', 'goSpecialString');
res['syntax-groups']['goEscapeX'] = SyntaxGroup.FromLink('goEscapeX', 'goSpecialString');
res['syntax-groups']['goEscapeU'] = SyntaxGroup.FromLink('goEscapeU', 'goSpecialString');
res['syntax-groups']['goEscapeBigU'] = SyntaxGroup.FromLink('goEscapeBigU', 'goSpecialString');
res['syntax-groups']['goEscapeError'] = SyntaxGroup.FromLink('goEscapeError', 'Error');
res['syntax-groups']['goSpecialString'] = SyntaxGroup.FromLink('goSpecialString', 'Special');
res['syntax-groups']['goString'] = SyntaxGroup.FromLink('goString', 'String');
res['syntax-groups']['goRawString'] = SyntaxGroup.FromLink('goRawString', 'String');
res['syntax-groups']['goCharacter'] = SyntaxGroup.FromLink('goCharacter', 'Character');
res['syntax-groups']['goBlock'] = SyntaxGroup.FromColor('goBlock', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['goParen'] = SyntaxGroup.FromColor('goParen', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['goDecimalInt'] = SyntaxGroup.FromLink('goDecimalInt', 'Integer');
res['syntax-groups']['goHexadecimalInt'] = SyntaxGroup.FromLink('goHexadecimalInt', 'Integer');
res['syntax-groups']['goOctalInt'] = SyntaxGroup.FromLink('goOctalInt', 'Integer');
res['syntax-groups']['goOctalError'] = SyntaxGroup.FromColor('goOctalError', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['Integer'] = SyntaxGroup.FromLink('Integer', 'Number');
res['syntax-groups']['goFloat'] = SyntaxGroup.FromLink('goFloat', 'Float');
res['syntax-groups']['goImaginary'] = SyntaxGroup.FromLink('goImaginary', 'Number');
res['syntax-groups']['goSpaceError'] = SyntaxGroup.FromLink('goSpaceError', 'Error');
res['syntax-groups']['goExtraType'] = SyntaxGroup.FromLink('goExtraType', 'Type');
return res;
} ())
;
res['snippets'] = [];
res['snippets'].push({
  'title': 'Find Missing Perm',
  'terminal-contents': '<vgo-directive>package</vgo-directive><v-normal> main                                                                    </v-normal>\n<vgo-space-error> </vgo-space-error><v-normal>                                                                               </v-normal>\n<vgo-directive>import</vgo-directive><v-normal> (                                                                        </v-normal>\n<v-normal>    </v-normal><vgo-string>&quot;fmt&quot;</vgo-string><v-normal>                                                                       </v-normal>\n<v-normal>    </v-normal><vgo-string>&quot;strings&quot;</vgo-string><v-normal>                                                                   </v-normal>\n<v-normal>)                                                                               </v-normal>\n<vgo-space-error> </vgo-space-error><v-normal>                                                                               </v-normal>\n<vgo-declaration>var</vgo-declaration><v-normal> given = strings.Split(</v-normal><vgo-raw-string>`ABCD CABD ACDB DACB BCDA ACBD ADCB CDAB DABC BCAD CAD</vgo-raw-string>\n<vgo-raw-string>B CDBA CBAD ABDC ADBC BDCA DCBA BACD BADC BDAC CBDA DBCA DCAB`</vgo-raw-string><v-normal>, </v-normal><vgo-string>&quot; &quot;</vgo-string><v-normal>)            </v-normal>\n<vgo-space-error> </vgo-space-error><v-normal>                                                                               </v-normal>\n<vgo-declaration>func</vgo-declaration><v-normal> main() {                                                                   </v-normal>\n<v-normal>    b := </v-normal><vgo-builtins>make</vgo-builtins><v-normal>([]</v-normal><vgo-unsigned-ints>byte</vgo-unsigned-ints><v-normal>, </v-normal><vgo-builtins>len</vgo-builtins><v-normal>(given[</v-normal><vgo-decimal-int>0</vgo-decimal-int><v-normal>]))                                            </v-normal>\n<v-normal>    </v-normal><vgo-repeat>for</vgo-repeat><v-normal> i := </v-normal><vgo-repeat>range</vgo-repeat><v-normal> b {                                                          </v-normal>\n<v-normal>        m := </v-normal><vgo-builtins>make</vgo-builtins><v-normal>(</v-normal><vgo-type>map</vgo-type><v-normal>[</v-normal><vgo-unsigned-ints>byte</vgo-unsigned-ints><v-normal>]</v-normal><vgo-signed-ints>int</vgo-signed-ints><v-normal>)                                                 </v-normal>\n<v-normal>        </v-normal><vgo-repeat>for</vgo-repeat><v-normal> _, p := </v-normal><vgo-repeat>range</vgo-repeat><v-normal> given {                                               </v-normal>\n<v-normal>            m[p[i]]++                                                           </v-normal>\n<v-normal>        }                                                                       </v-normal>\n<v-normal>        </v-normal><vgo-repeat>for</vgo-repeat><v-normal> char, count := </v-normal><vgo-repeat>range</vgo-repeat><v-normal> m {                                            </v-normal>\n<v-normal>            </v-normal><vgo-conditional>if</vgo-conditional><v-normal> count&amp;</v-normal><vgo-decimal-int>1</vgo-decimal-int><v-normal> == </v-normal><vgo-decimal-int>1</vgo-decimal-int><v-normal> {                                                   </v-normal>\n<v-normal>                b[i] = char                                                     </v-normal>\n<v-normal>                </v-normal><vgo-statement>break</vgo-statement><v-normal>                                                           </v-normal>\n<v-normal>            }                                                                   </v-normal>\n<v-normal>        }                                                                       </v-normal>\n<v-normal>                                                                                </v-normal>\n'
});
res['snippets'].push({
  'title': 'File Input/Output',
  'terminal-contents': '<vgo-directive>package</vgo-directive><v-normal> main                                                                    </v-normal>\n<v-normal>                                                                                </v-normal>\n<vgo-directive>import</vgo-directive><v-normal> (                                                                        </v-normal>\n<v-normal>    </v-normal><vgo-string>&quot;fmt&quot;</vgo-string><v-normal>                                                                       </v-normal>\n<v-normal>    </v-normal><vgo-string>&quot;io/ioutil&quot;</vgo-string><v-normal>                                                                 </v-normal>\n<v-normal>)                                                                               </v-normal>\n<v-normal>                                                                                </v-normal>\n<vgo-declaration>func</vgo-declaration><v-normal> main() {                                                                   </v-normal>\n<v-normal>    b, err := ioutil.ReadFile(</v-normal><vgo-string>&quot;input.txt&quot;</vgo-string><v-normal>)                                      </v-normal>\n<v-normal>    </v-normal><vgo-conditional>if</vgo-conditional><v-normal> err != </v-normal><vgo-constants>nil</vgo-constants><v-normal> {                                                             </v-normal>\n<v-normal>        fmt.Println(err)                                                        </v-normal>\n<v-normal>        </v-normal><vgo-statement>return</vgo-statement><v-normal>                                                                  </v-normal>\n<v-normal>    }                                                                           </v-normal>\n<v-normal>    </v-normal><vgo-conditional>if</vgo-conditional><v-normal> err = ioutil.WriteFile(</v-normal><vgo-string>&quot;output.txt&quot;</vgo-string><v-normal>, b, </v-normal><vgo-octal-int>0666</vgo-octal-int><v-normal>); err != </v-normal><vgo-constants>nil</vgo-constants><v-normal> {              </v-normal>\n<v-normal>        fmt.Println(err)                                                        </v-normal>\n<v-normal>    }                                                                           </v-normal>\n<v-normal>}                                                                               </v-normal>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-normal>                                                                                </v-normal>\n'
});
return res;
}())