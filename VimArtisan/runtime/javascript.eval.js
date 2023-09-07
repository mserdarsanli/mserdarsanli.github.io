(function() {
var res = {};
res['lang-syntax'] = (function() {
var res = {};
res['lang'] = 'Rules for Lang: javascript';
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
res['syntax-groups']['javaScriptCommentTodo'] = SyntaxGroup.FromLink('javaScriptCommentTodo', 'Todo');
res['syntax-groups']['javaScriptLineComment'] = SyntaxGroup.FromLink('javaScriptLineComment', 'Comment');
res['syntax-groups']['javaScriptCommentSkip'] = SyntaxGroup.FromColor('javaScriptCommentSkip', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['javaScriptComment'] = SyntaxGroup.FromLink('javaScriptComment', 'Comment');
res['syntax-groups']['javaScriptSpecial'] = SyntaxGroup.FromLink('javaScriptSpecial', 'Special');
res['syntax-groups']['javaScriptStringD'] = SyntaxGroup.FromLink('javaScriptStringD', 'String');
res['syntax-groups']['javaScriptStringS'] = SyntaxGroup.FromLink('javaScriptStringS', 'String');
res['syntax-groups']['javaScriptSpecialCharacter'] = SyntaxGroup.FromLink('javaScriptSpecialCharacter', 'javaScriptSpecial');
res['syntax-groups']['javaScriptNumber'] = SyntaxGroup.FromLink('javaScriptNumber', 'javaScriptValue');
res['syntax-groups']['javaScriptRegexpString'] = SyntaxGroup.FromLink('javaScriptRegexpString', 'String');
res['syntax-groups']['javaScriptConditional'] = SyntaxGroup.FromLink('javaScriptConditional', 'Conditional');
res['syntax-groups']['javaScriptRepeat'] = SyntaxGroup.FromLink('javaScriptRepeat', 'Repeat');
res['syntax-groups']['javaScriptBranch'] = SyntaxGroup.FromLink('javaScriptBranch', 'Conditional');
res['syntax-groups']['javaScriptOperator'] = SyntaxGroup.FromLink('javaScriptOperator', 'Operator');
res['syntax-groups']['javaScriptType'] = SyntaxGroup.FromLink('javaScriptType', 'Type');
res['syntax-groups']['javaScriptStatement'] = SyntaxGroup.FromLink('javaScriptStatement', 'Statement');
res['syntax-groups']['javaScriptBoolean'] = SyntaxGroup.FromLink('javaScriptBoolean', 'Boolean');
res['syntax-groups']['javaScriptNull'] = SyntaxGroup.FromLink('javaScriptNull', 'Keyword');
res['syntax-groups']['javaScriptIdentifier'] = SyntaxGroup.FromLink('javaScriptIdentifier', 'Identifier');
res['syntax-groups']['javaScriptLabel'] = SyntaxGroup.FromLink('javaScriptLabel', 'Label');
res['syntax-groups']['javaScriptException'] = SyntaxGroup.FromLink('javaScriptException', 'Exception');
res['syntax-groups']['javaScriptMessage'] = SyntaxGroup.FromLink('javaScriptMessage', 'Keyword');
res['syntax-groups']['javaScriptGlobal'] = SyntaxGroup.FromLink('javaScriptGlobal', 'Keyword');
res['syntax-groups']['javaScriptMember'] = SyntaxGroup.FromLink('javaScriptMember', 'Keyword');
res['syntax-groups']['javaScriptDeprecated'] = SyntaxGroup.FromLink('javaScriptDeprecated', 'Exception');
res['syntax-groups']['javaScriptReserved'] = SyntaxGroup.FromLink('javaScriptReserved', 'Keyword');
res['syntax-groups']['javaScriptFunction'] = SyntaxGroup.FromLink('javaScriptFunction', 'Function');
res['syntax-groups']['javaScriptBraces'] = SyntaxGroup.FromLink('javaScriptBraces', 'Function');
res['syntax-groups']['javaScriptParens'] = SyntaxGroup.FromColor('javaScriptParens', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['javaScriptCharacter'] = SyntaxGroup.FromLink('javaScriptCharacter', 'Character');
res['syntax-groups']['javaScriptValue'] = SyntaxGroup.FromColor('javaScriptValue', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['javaScriptError'] = SyntaxGroup.FromLink('javaScriptError', 'Error');
res['syntax-groups']['javaScrParenError'] = SyntaxGroup.FromLink('javaScrParenError', 'javaScriptError');
res['syntax-groups']['javaScriptDebug'] = SyntaxGroup.FromLink('javaScriptDebug', 'Debug');
res['syntax-groups']['javaScriptConstant'] = SyntaxGroup.FromLink('javaScriptConstant', 'Label');
return res;
} ())
;
res['snippets'] = [];
res['snippets'].push({
  'title': 'Find Missing Perm',
  'terminal-contents': '<v-normal>permute = </v-normal><vjava-script-function>function</vjava-script-function><vjava-script-parens>(</vjava-script-parens><v-normal>v, m</v-normal><vjava-script-parens>)</vjava-script-parens><vjava-script-braces>{</vjava-script-braces><v-normal> </v-normal><vjava-script-line-comment>//v1.0</vjava-script-line-comment><v-normal>                                                </v-normal>\n<v-normal>    </v-normal><vjava-script-repeat>for</vjava-script-repeat><vjava-script-parens>(</vjava-script-parens><vjava-script-identifier>var</vjava-script-identifier><v-normal> p = </v-normal><vjava-script-number>-1</vjava-script-number><v-normal>, j, k, f, r, l = v.length, q = </v-normal><vjava-script-number>1</vjava-script-number><v-normal>, i = l + </v-normal><vjava-script-number>1</vjava-script-number><v-normal>; --i; q *= i</v-normal><vjava-script-parens>)</vjava-script-parens><v-normal>;   </v-normal>\n<v-normal>    </v-normal><vjava-script-repeat>for</vjava-script-repeat><vjava-script-parens>(</vjava-script-parens><v-normal>x = </v-normal><vjava-script-braces>[</vjava-script-braces><vjava-script-operator>new</vjava-script-operator><v-normal> </v-normal><vjava-script-type>Array</vjava-script-type><vjava-script-parens>(</vjava-script-parens><v-normal>l</v-normal><vjava-script-parens>)</vjava-script-parens><v-normal>, </v-normal><vjava-script-operator>new</vjava-script-operator><v-normal> </v-normal><vjava-script-type>Array</vjava-script-type><vjava-script-parens>(</vjava-script-parens><v-normal>l</v-normal><vjava-script-parens>)</vjava-script-parens><v-normal>, </v-normal><vjava-script-operator>new</vjava-script-operator><v-normal> </v-normal><vjava-script-type>Array</vjava-script-type><vjava-script-parens>(</vjava-script-parens><v-normal>l</v-normal><vjava-script-parens>)</vjava-script-parens><v-normal>, </v-normal><vjava-script-operator>new</vjava-script-operator><v-normal> </v-normal><vjava-script-type>Array</vjava-script-type><vjava-script-parens>(</vjava-script-parens><v-normal>l</v-normal><vjava-script-parens>)</vjava-script-parens><vjava-script-braces>]</vjava-script-braces><v-normal>, j = q, k =</v-normal>\n<v-normal> l + </v-normal><vjava-script-number>1</vjava-script-number><v-normal>, i = </v-normal><vjava-script-number>-1</vjava-script-number><v-normal>;                                                                 </v-normal>\n<v-normal>        ++i &lt; l; x</v-normal><vjava-script-braces>[</vjava-script-braces><vjava-script-number>2</vjava-script-number><vjava-script-braces>][</vjava-script-braces><v-normal>i</v-normal><vjava-script-braces>]</vjava-script-braces><v-normal> = i, x</v-normal><vjava-script-braces>[</vjava-script-braces><vjava-script-number>1</vjava-script-number><vjava-script-braces>][</vjava-script-braces><v-normal>i</v-normal><vjava-script-braces>]</vjava-script-braces><v-normal> = x</v-normal><vjava-script-braces>[</vjava-script-braces><vjava-script-number>0</vjava-script-number><vjava-script-braces>][</vjava-script-braces><v-normal>i</v-normal><vjava-script-braces>]</vjava-script-braces><v-normal> = j /= --k</v-normal><vjava-script-parens>)</vjava-script-parens><v-normal>;                    </v-normal>\n<v-normal>    </v-normal><vjava-script-repeat>for</vjava-script-repeat><vjava-script-parens>(</vjava-script-parens><v-normal>r = </v-normal><vjava-script-operator>new</vjava-script-operator><v-normal> </v-normal><vjava-script-type>Array</vjava-script-type><vjava-script-parens>(</vjava-script-parens><v-normal>q</v-normal><vjava-script-parens>)</vjava-script-parens><v-normal>; ++p &lt; q;</v-normal><vjava-script-parens>)</vjava-script-parens><v-normal>                                             </v-normal>\n<v-normal>        </v-normal><vjava-script-repeat>for</vjava-script-repeat><vjava-script-parens>(</vjava-script-parens><v-normal>r</v-normal><vjava-script-braces>[</vjava-script-braces><v-normal>p</v-normal><vjava-script-braces>]</vjava-script-braces><v-normal> = </v-normal><vjava-script-operator>new</vjava-script-operator><v-normal> </v-normal><vjava-script-type>Array</vjava-script-type><vjava-script-parens>(</vjava-script-parens><v-normal>l</v-normal><vjava-script-parens>)</vjava-script-parens><v-normal>, i = </v-normal><vjava-script-number>-1</vjava-script-number><v-normal>; ++i &lt; l; !--x</v-normal><vjava-script-braces>[</vjava-script-braces><vjava-script-number>1</vjava-script-number><vjava-script-braces>][</vjava-script-braces><v-normal>i</v-normal><vjava-script-braces>]</vjava-script-braces><v-normal> &amp;&amp; </v-normal><vjava-script-parens>(</vjava-script-parens><v-normal>x</v-normal><vjava-script-braces>[</vjava-script-braces><vjava-script-number>1</vjava-script-number><vjava-script-braces>][</vjava-script-braces><v-normal>i</v-normal><vjava-script-braces>]</vjava-script-braces><v-normal> = x</v-normal><vjava-script-braces>[</vjava-script-braces><vjava-script-number>0</vjava-script-number><vjava-script-braces>][</vjava-script-braces>\n<v-normal>i</v-normal><vjava-script-braces>]</vjava-script-braces><v-normal>,                                                                             </v-normal>\n<v-normal>            x</v-normal><vjava-script-braces>[</vjava-script-braces><vjava-script-number>2</vjava-script-number><vjava-script-braces>][</vjava-script-braces><v-normal>i</v-normal><vjava-script-braces>]</vjava-script-braces><v-normal> = </v-normal><vjava-script-parens>(</vjava-script-parens><v-normal>x</v-normal><vjava-script-braces>[</vjava-script-braces><vjava-script-number>2</vjava-script-number><vjava-script-braces>][</vjava-script-braces><v-normal>i</v-normal><vjava-script-braces>]</vjava-script-braces><v>]</v><v-normal> +</v-normal><vjava-script-number>1</vjava-script-number><vjava-script-parens>)</vjava-script-parens><v-normal> % l</v-normal><vjava-script-parens>)</vjava-script-parens><v-normal>), </v-normal><vjava-script-braces>[</vjava-script-braces><v-normal>p</v-normal><vjava-script-braces>][</vjava-script-braces><v-normal>i</v-normal><vjava-script-braces>]</vjava-script-braces><v>]</v><v-normal> = m ? </v-normal><vjava-script-braces>[</vjava-script-braces><vjava-script-number>3</vjava-script-number><vjava-script-braces>][</vjava-script-braces><v-normal>i</v-normal><vjava-script-braces>]</vjava-script-braces><v-normal> : v</v-normal><vjava-script-braces>[</vjava-script-braces><v-normal>x</v-normal><vjava-script-braces>[</vjava-script-braces><vjava-script-number>3</vjava-script-number><vjava-script-braces>][</vjava-script-braces><v-normal>i</v-normal><vjava-script-braces>]]</vjava-script-braces><vjava-script-parens>)</vjava-script-parens><v-normal>)  </v-normal>\n<v-normal>            </v-normal><vjava-script-repeat>for</vjava-script-repeat><vjava-script-parens>(</vjava-script-parens><v-normal>x</v-normal><vjava-script-braces>[</vjava-script-braces><vjava-script-number>3</vjava-script-number><vjava-script-braces>][</vjava-script-braces><v-normal>i</v-normal><vjava-script-braces>]</vjava-script-braces><v-normal> = x</v-normal><vjava-script-braces>[</vjava-script-braces><vjava-script-number>2</vjava-script-number><vjava-script-braces>][</vjava-script-braces><v-normal>i</v-normal><vjava-script-braces>]</vjava-script-braces><v-normal>, f = </v-normal><vjava-script-number>0</vjava-script-number><v-normal>; !f; f = !f</v-normal><vjava-script-parens>)</vjava-script-parens><v-normal>                           </v-normal>\n<v-normal>                </v-normal><vjava-script-repeat>for</vjava-script-repeat><vjava-script-parens>(</vjava-script-parens><v-normal>j = i; j; x</v-normal><vjava-script-braces>[</vjava-script-braces><vjava-script-number>3</vjava-script-number><vjava-script-braces>][</vjava-script-braces><v-normal>--j</v-normal><vjava-script-braces>]</vjava-script-braces><v-normal> == x</v-normal><vjava-script-braces>[</vjava-script-braces><vjava-script-number>2</vjava-script-number><vjava-script-braces>][</vjava-script-braces><v-normal>i</v-normal><vjava-script-braces>]</vjava-script-braces><v-normal> &amp;&amp; </v-normal><vjava-script-parens>(</vjava-script-parens><v-normal>x</v-normal><vjava-script-braces>[</vjava-script-braces><vjava-script-number>3</vjava-script-number><vjava-script-braces>][</vjava-script-braces><v-normal>i</v-normal><vjava-script-braces>]</vjava-script-braces><v-normal> = x</v-normal><vjava-script-braces>[</vjava-script-braces><vjava-script-number>2</vjava-script-number><vjava-script-braces>][</vjava-script-braces><v-normal>i</v-normal><vjava-script-braces>]</vjava-script-braces><v-normal> = </v-normal><vjava-script-parens>(</vjava-script-parens><v-normal>x</v-normal><vjava-script-braces>[</vjava-script-braces><vjava-script-number>2</vjava-script-number><vjava-script-braces>]</vjava-script-braces>\n<vjava-script-braces>[</vjava-script-braces><v-normal>i</v-normal><vjava-script-braces>]</vjava-script-braces><v-normal> + </v-normal><vjava-script-number>1</vjava-script-number><vjava-script-parens>)</vjava-script-parens><v-normal> % l, f = </v-normal><vjava-script-number>1</vjava-script-number><vjava-script-parens>))</vjava-script-parens><v-normal>;                                                          </v-normal>\n<v-normal>    </v-normal><vjava-script-statement>return</vjava-script-statement><v-normal> r;                                                                   </v-normal>\n<vjava-script-braces>}</vjava-script-braces><v-normal>;                                                                              </v-normal>\n<v-normal>                                                                                </v-normal>\n<v-normal>list = </v-normal><vjava-script-braces>[</vjava-script-braces><v-normal> </v-normal><vjava-script-string-s>&apos;ABCD&apos;</vjava-script-string-s><v-normal>, </v-normal><vjava-script-string-s>&apos;CABD&apos;</vjava-script-string-s><v-normal>, </v-normal><vjava-script-string-s>&apos;ACDB&apos;</vjava-script-string-s><v-normal>, </v-normal><vjava-script-string-s>&apos;DACB&apos;</vjava-script-string-s><v-normal>, </v-normal><vjava-script-string-s>&apos;BCDA&apos;</vjava-script-string-s><v-normal>, </v-normal><vjava-script-string-s>&apos;ACBD&apos;</vjava-script-string-s><v-normal>, </v-normal><vjava-script-string-s>&apos;ADCB&apos;</vjava-script-string-s><v-normal>, </v-normal><vjava-script-string-s>&apos;CDAB&apos;</vjava-script-string-s><v-normal>,        </v-normal>\n<v-normal>        </v-normal><vjava-script-string-s>&apos;DABC&apos;</vjava-script-string-s><v-normal>, </v-normal><vjava-script-string-s>&apos;BCAD&apos;</vjava-script-string-s><v-normal>, </v-normal><vjava-script-string-s>&apos;CADB&apos;</vjava-script-string-s><v-normal>, </v-normal><vjava-script-string-s>&apos;CDBA&apos;</vjava-script-string-s><v-normal>, </v-normal><vjava-script-string-s>&apos;CBAD&apos;</vjava-script-string-s><v-normal>, </v-normal><vjava-script-string-s>&apos;ABDC&apos;</vjava-script-string-s><v-normal>, </v-normal><vjava-script-string-s>&apos;ADBC&apos;</vjava-script-string-s><v-normal>, </v-normal><vjava-script-string-s>&apos;BDCA&apos;</vjava-script-string-s><v-normal>,         </v-normal>\n<v-normal>        </v-normal><vjava-script-string-s>&apos;DCBA&apos;</vjava-script-string-s><v-normal>, </v-normal><vjava-script-string-s>&apos;BACD&apos;</vjava-script-string-s><v-normal>, </v-normal><vjava-script-string-s>&apos;BADC&apos;</vjava-script-string-s><v-normal>, </v-normal><vjava-script-string-s>&apos;BDAC&apos;</vjava-script-string-s><v-normal>, </v-normal><vjava-script-string-s>&apos;CBDA&apos;</vjava-script-string-s><v-normal>, </v-normal><vjava-script-string-s>&apos;DBCA&apos;</vjava-script-string-s><v-normal>, </v-normal><vjava-script-string-s>&apos;DCAB&apos;</vjava-script-string-s><vjava-script-braces>]</vjava-script-braces><v-normal>;                </v-normal>\n<v-normal>                                                                                </v-normal>\n<v-normal>all = permute</v-normal><vjava-script-parens>(</vjava-script-parens><v-normal>list</v-normal><vjava-script-braces>[</vjava-script-braces><vjava-script-number>0</vjava-script-number><vjava-script-braces>]</vjava-script-braces><v-normal>.split</v-normal><vjava-script-parens>(</vjava-script-parens><vjava-script-string-s>&apos;&apos;</vjava-script-string-s><vjava-script-parens>))</vjava-script-parens><v-normal>.map</v-normal><vjava-script-parens>(</vjava-script-parens><vjava-script-function>function</vjava-script-function><vjava-script-parens>(</vjava-script-parens><v-normal>elem</v-normal><vjava-script-parens>)</vjava-script-parens><v-normal> </v-normal><vjava-script-braces>{</vjava-script-braces><vjava-script-statement>return</vjava-script-statement><v-normal> elem.join</v-normal><vjava-script-parens>(</vjava-script-parens><vjava-script-string-s>&apos;&apos;</vjava-script-string-s><vjava-script-parens>)</vjava-script-parens><vjava-script-braces>}</vjava-script-braces><vjava-script-parens>)</vjava-script-parens><v-normal>;    </v-normal>\n<v-normal>                                                                                </v-normal>\n<v-normal>missing = all.filter</v-normal><vjava-script-parens>(</vjava-script-parens><vjava-script-function>function</vjava-script-function><vjava-script-parens>(</vjava-script-parens><v-normal>elem</v-normal><vjava-script-parens>)</vjava-script-parens><v-normal> </v-normal><vjava-script-braces>{</vjava-script-braces><vjava-script-statement>return</vjava-script-statement><v-normal> list.indexOf</v-normal><vjava-script-parens>(</vjava-script-parens><v-normal>elem</v-normal><vjava-script-parens>)</vjava-script-parens><v-normal> == </v-normal><vjava-script-number>-1</vjava-script-number><vjava-script-braces>}</vjava-script-braces><vjava-script-parens>)</vjava-script-parens><v-normal>;         </v-normal>\n<v-normal>print</v-normal><vjava-script-parens>(</vjava-script-parens><v-normal>missing</v-normal><vjava-script-parens>)</vjava-script-parens><v-normal>;  </v-normal><vjava-script-line-comment>// ==&gt; DBAC</vjava-script-line-comment><v-normal>                                                    </v-normal>\n<v-normal>                                                                                </v-normal>\n'
});
res['snippets'].push({
  'title': 'File Input/Output',
  'terminal-contents': '<vjava-script-identifier>var</vjava-script-identifier><v-normal> fs = require</v-normal><vjava-script-parens>(</vjava-script-parens><vjava-script-string-s>&apos;fs&apos;</vjava-script-string-s><vjava-script-parens>)</vjava-script-parens><v-normal>;                                                         </v-normal>\n<v-normal>require</v-normal><vjava-script-parens>(</vjava-script-parens><vjava-script-string-s>&apos;util&apos;</vjava-script-string-s><vjava-script-parens>)</vjava-script-parens><v-normal>.pump</v-normal><vjava-script-parens>(</vjava-script-parens><v-normal>fs.createReadStream</v-normal><vjava-script-parens>(</vjava-script-parens><vjava-script-string-s>&apos;input.txt&apos;</vjava-script-string-s><v-normal>, </v-normal><vjava-script-braces>{</vjava-script-braces><v-normal>flags:</v-normal><vjava-script-string-s>&apos;r&apos;</vjava-script-string-s><vjava-script-braces>}</vjava-script-braces><vjava-script-parens>)</vjava-script-parens><v-normal>, fs.createWri</v-normal>\n<v-normal>teStream</v-normal><vjava-script-parens>(</vjava-script-parens><vjava-script-string-s>&apos;output.txt&apos;</vjava-script-string-s><v-normal>, </v-normal><vjava-script-braces>{</vjava-script-braces><v-normal>flags:</v-normal><vjava-script-string-s>&apos;w+&apos;</vjava-script-string-s><vjava-script-braces>}</vjava-script-braces><vjava-script-parens>))</vjava-script-parens><v-normal>;                                          </v-normal>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-normal>                                                                                </v-normal>\n'
});
return res;
}())