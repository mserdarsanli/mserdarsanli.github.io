(function() {
var res = {};
res['lang-syntax'] = (function() {
var res = {};
res['lang'] = 'Rules for Lang: matlab';
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
res['syntax-groups']['matlabStatement'] = SyntaxGroup.FromLink('matlabStatement', 'Statement');
res['syntax-groups']['matlabLabel'] = SyntaxGroup.FromLink('matlabLabel', 'Label');
res['syntax-groups']['matlabConditional'] = SyntaxGroup.FromLink('matlabConditional', 'Conditional');
res['syntax-groups']['matlabRepeat'] = SyntaxGroup.FromLink('matlabRepeat', 'Repeat');
res['syntax-groups']['matlabExceptions'] = SyntaxGroup.FromLink('matlabExceptions', 'Conditional');
res['syntax-groups']['matlabOO'] = SyntaxGroup.FromLink('matlabOO', 'Statement');
res['syntax-groups']['matlabTodo'] = SyntaxGroup.FromLink('matlabTodo', 'Todo');
res['syntax-groups']['matlabScope'] = SyntaxGroup.FromLink('matlabScope', 'Type');
res['syntax-groups']['matlabArithmeticOperator'] = SyntaxGroup.FromLink('matlabArithmeticOperator', 'matlabOperator');
res['syntax-groups']['matlabRelationalOperator'] = SyntaxGroup.FromLink('matlabRelationalOperator', 'matlabOperator');
res['syntax-groups']['matlabLogicalOperator'] = SyntaxGroup.FromLink('matlabLogicalOperator', 'matlabOperator');
res['syntax-groups']['matlabLineContinuation'] = SyntaxGroup.FromLink('matlabLineContinuation', 'Special');
res['syntax-groups']['matlabString'] = SyntaxGroup.FromLink('matlabString', 'String');
res['syntax-groups']['matlabTab'] = SyntaxGroup.FromColor('matlabTab', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['matlabNumber'] = SyntaxGroup.FromLink('matlabNumber', 'Number');
res['syntax-groups']['matlabFloat'] = SyntaxGroup.FromLink('matlabFloat', 'Float');
res['syntax-groups']['matlabDelimiter'] = SyntaxGroup.FromLink('matlabDelimiter', 'Identifier');
res['syntax-groups']['matlabTransposeOperator'] = SyntaxGroup.FromLink('matlabTransposeOperator', 'matlabOperator');
res['syntax-groups']['matlabSemicolon'] = SyntaxGroup.FromLink('matlabSemicolon', 'SpecialChar');
res['syntax-groups']['matlabComment'] = SyntaxGroup.FromLink('matlabComment', 'Comment');
res['syntax-groups']['matlabMultilineComment'] = SyntaxGroup.FromLink('matlabMultilineComment', 'Comment');
res['syntax-groups']['matlabOperator'] = SyntaxGroup.FromLink('matlabOperator', 'Operator');
res['syntax-groups']['matlabFunction'] = SyntaxGroup.FromLink('matlabFunction', 'Function');
res['syntax-groups']['matlabImplicit'] = SyntaxGroup.FromLink('matlabImplicit', 'matlabStatement');
res['syntax-groups']['matlabError'] = SyntaxGroup.FromLink('matlabError', 'Error');
res['syntax-groups']['matlabTransposeOther'] = SyntaxGroup.FromLink('matlabTransposeOther', 'Identifier');
return res;
} ())
;
res['snippets'] = [];
res['snippets'].push({
  'title': 'Find Missing Perm',
  'terminal-contents': '<vmatlab-function>function</vmatlab-function><v-normal> perm = findMissingPerms(list)                                          </v-normal>\n<v-normal>                                                                                </v-normal>\n<v-normal>    permsList = perms(list(</v-normal><vmatlab-float>1</vmatlab-float><v-normal>,:))</v-normal><vmatlab-semicolon>;</vmatlab-semicolon><v-normal> </v-normal><vmatlab-comment>%Generate all permutations of the 4 letters</vmatlab-comment><v-normal>   </v-normal>\n<v-normal>    perm = </v-normal><vmatlab-delimiter>[]</vmatlab-delimiter><vmatlab-semicolon>;</vmatlab-semicolon><v-normal> </v-normal><vmatlab-comment>%This is the functions return value if the list is not missing a </vmatlab-comment>\n<vmatlab-comment>permutation</vmatlab-comment><v-normal>                                                                     </v-normal>\n<v-normal>                                                                                </v-normal>\n<v-normal>    </v-normal><vmatlab-comment>%Normally the rest of this would be vectorized, but because this is</vmatlab-comment><v-normal>         </v-normal>\n<v-normal>    </v-normal><vmatlab-comment>%done on a vector of strings, the vectorized functions will only access</vmatlab-comment><v-normal>     </v-normal>\n<v-normal>    </v-normal><vmatlab-comment>%one character at a time. So, in order for this to work we have to use</vmatlab-comment><v-normal>      </v-normal>\n<v-normal>    </v-normal><vmatlab-comment>%loops.</vmatlab-comment><v-normal>                                                                     </v-normal>\n<v-normal>    </v-normal><vmatlab-repeat>for</vmatlab-repeat><v-normal> i = (</v-normal><vmatlab-float>1</vmatlab-float><v-normal>:</v-normal><vmatlab-operator>size</vmatlab-operator><v-normal>(permsList,</v-normal><vmatlab-float>1</vmatlab-float><v-normal>))                                               </v-normal>\n<v-normal>                                                                                </v-normal>\n<v-normal>        found = false</v-normal><vmatlab-semicolon>;</vmatlab-semicolon><v-normal>                                                          </v-normal>\n<v-normal>                                                                                </v-normal>\n<v-normal>        </v-normal><vmatlab-repeat>for</vmatlab-repeat><v-normal> j = (</v-normal><vmatlab-float>1</vmatlab-float><v-normal>:</v-normal><vmatlab-operator>size</vmatlab-operator><v-normal>(list,</v-normal><vmatlab-float>1</vmatlab-float><v-normal>))                                                </v-normal>\n<v-normal>            </v-normal><vmatlab-conditional>if</vmatlab-conditional><v-normal> (permsList(i,:) </v-normal><vmatlab-relational-operator>==</vmatlab-relational-operator><v-normal> list(j,:))                                    </v-normal>\n<v-normal>                found = true</v-normal><vmatlab-semicolon>;</vmatlab-semicolon><v-normal>                                                   </v-normal>\n<v-normal>                </v-normal><vmatlab-operator>break</vmatlab-operator><v-normal>                                                           </v-normal>\n<v-normal>            </v-normal><vmatlab-conditional>end</vmatlab-conditional><v-normal>                                                                 </v-normal>\n<v-normal>        </v-normal><vmatlab-conditional>end</vmatlab-conditional><v-normal>                                                                     </v-normal>\n<v-normal>                                                                                </v-normal>\n<v-normal>        </v-normal><vmatlab-conditional>if</vmatlab-conditional><v-normal> not(found)                                                           </v-normal>\n<v-normal>            perm = permsList(i,:)</v-normal><vmatlab-semicolon>;</vmatlab-semicolon><v-normal>                                              </v-normal>\n<v-normal>                                                                                </v-normal>\n'
});
return res;
}())