(function() {
var res = {};
res['lang-syntax'] = (function() {
var res = {};
res['lang'] = 'Rules for Lang: perl';
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
res['syntax-groups']['podCmdText'] = SyntaxGroup.FromLink('podCmdText', 'String');
res['syntax-groups']['podCommand'] = SyntaxGroup.FromLink('podCommand', 'Statement');
res['syntax-groups']['podOverIndent'] = SyntaxGroup.FromLink('podOverIndent', 'Number');
res['syntax-groups']['podForKeywd'] = SyntaxGroup.FromLink('podForKeywd', 'Identifier');
res['syntax-groups']['podFormat'] = SyntaxGroup.FromLink('podFormat', 'Identifier');
res['syntax-groups']['podVerbatimLine'] = SyntaxGroup.FromLink('podVerbatimLine', 'PreProc');
res['syntax-groups']['podSpecial'] = SyntaxGroup.FromLink('podSpecial', 'Identifier');
res['syntax-groups']['podEscape'] = SyntaxGroup.FromLink('podEscape', 'String');
res['syntax-groups']['podEscape2'] = SyntaxGroup.FromLink('podEscape2', 'Number');
res['syntax-groups']['podBoldItalic'] = SyntaxGroup.FromColor('podBoldItalic', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['podBoldOpen'] = SyntaxGroup.FromColor('podBoldOpen', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['podBoldAlternativeDelimOpen'] = SyntaxGroup.FromColor('podBoldAlternativeDelimOpen', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['podItalicBold'] = SyntaxGroup.FromColor('podItalicBold', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['podItalicOpen'] = SyntaxGroup.FromColor('podItalicOpen', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['podItalicAlternativeDelimOpen'] = SyntaxGroup.FromColor('podItalicAlternativeDelimOpen', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['podNoSpaceOpen'] = SyntaxGroup.FromColor('podNoSpaceOpen', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['podNoSpaceAlternativeDelimOpen'] = SyntaxGroup.FromColor('podNoSpaceAlternativeDelimOpen', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['podIndexOpen'] = SyntaxGroup.FromColor('podIndexOpen', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['podIndexAlternativeDelimOpen'] = SyntaxGroup.FromColor('podIndexAlternativeDelimOpen', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['podBold'] = SyntaxGroup.FromColor('podBold', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['podBoldAlternativeDelim'] = SyntaxGroup.FromColor('podBoldAlternativeDelim', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['podItalic'] = SyntaxGroup.FromColor('podItalic', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['podItalicAlternativeDelim'] = SyntaxGroup.FromColor('podItalicAlternativeDelim', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['perlTodo'] = SyntaxGroup.FromLink('perlTodo', 'Todo');
res['syntax-groups']['perlPOD'] = SyntaxGroup.FromLink('perlPOD', 'perlComment');
res['syntax-groups']['perlBraces'] = SyntaxGroup.FromColor('perlBraces', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['perlConditional'] = SyntaxGroup.FromLink('perlConditional', 'Conditional');
res['syntax-groups']['perlElseIfError'] = SyntaxGroup.FromLink('perlElseIfError', 'Error');
res['syntax-groups']['perlRepeat'] = SyntaxGroup.FromLink('perlRepeat', 'Repeat');
res['syntax-groups']['perlOperator'] = SyntaxGroup.FromLink('perlOperator', 'Operator');
res['syntax-groups']['perlFakeGroup'] = SyntaxGroup.FromColor('perlFakeGroup', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['perlControl'] = SyntaxGroup.FromLink('perlControl', 'PreProc');
res['syntax-groups']['perlStatementStorage'] = SyntaxGroup.FromLink('perlStatementStorage', 'perlStatement');
res['syntax-groups']['perlStatementControl'] = SyntaxGroup.FromLink('perlStatementControl', 'perlStatement');
res['syntax-groups']['perlStatementScalar'] = SyntaxGroup.FromLink('perlStatementScalar', 'perlStatement');
res['syntax-groups']['perlStatementRegexp'] = SyntaxGroup.FromLink('perlStatementRegexp', 'perlStatement');
res['syntax-groups']['perlStatementNumeric'] = SyntaxGroup.FromLink('perlStatementNumeric', 'perlStatement');
res['syntax-groups']['perlStatementList'] = SyntaxGroup.FromLink('perlStatementList', 'perlStatement');
res['syntax-groups']['perlStatementHash'] = SyntaxGroup.FromLink('perlStatementHash', 'perlStatement');
res['syntax-groups']['perlStatementIOfunc'] = SyntaxGroup.FromLink('perlStatementIOfunc', 'perlStatement');
res['syntax-groups']['perlFiledescStatementNocomma'] = SyntaxGroup.FromColor('perlFiledescStatementNocomma', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['perlStatementFiledesc'] = SyntaxGroup.FromLink('perlStatementFiledesc', 'perlStatement');
res['syntax-groups']['perlFiledescStatementComma'] = SyntaxGroup.FromColor('perlFiledescStatementComma', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['perlStatementVector'] = SyntaxGroup.FromLink('perlStatementVector', 'perlStatement');
res['syntax-groups']['perlStatementFiles'] = SyntaxGroup.FromLink('perlStatementFiles', 'perlStatement');
res['syntax-groups']['perlStatementFlow'] = SyntaxGroup.FromLink('perlStatementFlow', 'perlStatement');
res['syntax-groups']['perlStatementInclude'] = SyntaxGroup.FromLink('perlStatementInclude', 'perlStatement');
res['syntax-groups']['perlStatementProc'] = SyntaxGroup.FromLink('perlStatementProc', 'perlStatement');
res['syntax-groups']['perlStatementSocket'] = SyntaxGroup.FromLink('perlStatementSocket', 'perlStatement');
res['syntax-groups']['perlStatementIPC'] = SyntaxGroup.FromLink('perlStatementIPC', 'perlStatement');
res['syntax-groups']['perlStatementNetwork'] = SyntaxGroup.FromLink('perlStatementNetwork', 'perlStatement');
res['syntax-groups']['perlStatementPword'] = SyntaxGroup.FromLink('perlStatementPword', 'perlStatement');
res['syntax-groups']['perlStatementTime'] = SyntaxGroup.FromLink('perlStatementTime', 'perlStatement');
res['syntax-groups']['perlStatementMisc'] = SyntaxGroup.FromLink('perlStatementMisc', 'perlStatement');
res['syntax-groups']['perlStatementIndirObj'] = SyntaxGroup.FromLink('perlStatementIndirObj', 'perlStatement');
res['syntax-groups']['perlStatementIndirObjWrap'] = SyntaxGroup.FromColor('perlStatementIndirObjWrap', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['perlLabel'] = SyntaxGroup.FromLink('perlLabel', 'Label');
res['syntax-groups']['perlVarPlain'] = SyntaxGroup.FromLink('perlVarPlain', 'perlIdentifier');
res['syntax-groups']['perlVarNotInMatches'] = SyntaxGroup.FromLink('perlVarNotInMatches', 'perlIdentifier');
res['syntax-groups']['perlVarSlash'] = SyntaxGroup.FromLink('perlVarSlash', 'perlIdentifier');
res['syntax-groups']['perlPackageRef'] = SyntaxGroup.FromLink('perlPackageRef', 'perlType');
res['syntax-groups']['perlVarMember'] = SyntaxGroup.FromColor('perlVarMember', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['perlVarSimpleMember'] = SyntaxGroup.FromLink('perlVarSimpleMember', 'perlIdentifier');
res['syntax-groups']['perlMethod'] = SyntaxGroup.FromLink('perlMethod', 'perlIdentifier');
res['syntax-groups']['perlVarPlain2'] = SyntaxGroup.FromLink('perlVarPlain2', 'perlIdentifier');
res['syntax-groups']['perlFunctionName'] = SyntaxGroup.FromLink('perlFunctionName', 'perlIdentifier');
res['syntax-groups']['perlVarBlock'] = SyntaxGroup.FromColor('perlVarBlock', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['perlVarBlock2'] = SyntaxGroup.FromColor('perlVarBlock2', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['perlShellCommand'] = SyntaxGroup.FromLink('perlShellCommand', 'perlString');
res['syntax-groups']['perlFloat'] = SyntaxGroup.FromLink('perlFloat', 'Float');
res['syntax-groups']['perlNumber'] = SyntaxGroup.FromLink('perlNumber', 'Number');
res['syntax-groups']['perlStringUnexpanded'] = SyntaxGroup.FromLink('perlStringUnexpanded', 'perlString');
res['syntax-groups']['perlString'] = SyntaxGroup.FromLink('perlString', 'String');
res['syntax-groups']['perlQQ'] = SyntaxGroup.FromLink('perlQQ', 'perlString');
res['syntax-groups']['perlArrow'] = SyntaxGroup.FromLink('perlArrow', 'perlIdentifier');
res['syntax-groups']['perlVarSimpleMemberName'] = SyntaxGroup.FromLink('perlVarSimpleMemberName', 'perlString');
res['syntax-groups']['perlPackageConst'] = SyntaxGroup.FromColor('perlPackageConst', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['perlFiledescRead'] = SyntaxGroup.FromLink('perlFiledescRead', 'perlIdentifier');
res['syntax-groups']['perlFiledescStatement'] = SyntaxGroup.FromLink('perlFiledescStatement', 'perlIdentifier');
res['syntax-groups']['perlSpecialString'] = SyntaxGroup.FromLink('perlSpecialString', 'perlSpecial');
res['syntax-groups']['NONE'] = SyntaxGroup.FromColor('NONE', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['perlSpecialStringU2'] = SyntaxGroup.FromLink('perlSpecialStringU2', 'perlString');
res['syntax-groups']['perlSpecialStringU'] = SyntaxGroup.FromLink('perlSpecialStringU', 'perlSpecial');
res['syntax-groups']['perlSpecialMatch'] = SyntaxGroup.FromLink('perlSpecialMatch', 'perlSpecial');
res['syntax-groups']['perlNotEmptyLine'] = SyntaxGroup.FromLink('perlNotEmptyLine', 'Error');
res['syntax-groups']['perlMatchStartEnd'] = SyntaxGroup.FromLink('perlMatchStartEnd', 'perlStatement');
res['syntax-groups']['perlVStringV'] = SyntaxGroup.FromLink('perlVStringV', 'perlStringStartEnd');
res['syntax-groups']['perlParensSQ'] = SyntaxGroup.FromLink('perlParensSQ', 'perlString');
res['syntax-groups']['perlBracketsSQ'] = SyntaxGroup.FromLink('perlBracketsSQ', 'perlString');
res['syntax-groups']['perlBracesSQ'] = SyntaxGroup.FromLink('perlBracesSQ', 'perlString');
res['syntax-groups']['perlAnglesSQ'] = SyntaxGroup.FromLink('perlAnglesSQ', 'perlString');
res['syntax-groups']['perlParensDQ'] = SyntaxGroup.FromLink('perlParensDQ', 'perlString');
res['syntax-groups']['perlBracketsDQ'] = SyntaxGroup.FromLink('perlBracketsDQ', 'perlString');
res['syntax-groups']['perlBracesDQ'] = SyntaxGroup.FromLink('perlBracesDQ', 'perlString');
res['syntax-groups']['perlAnglesDQ'] = SyntaxGroup.FromLink('perlAnglesDQ', 'perlString');
res['syntax-groups']['perlMatch'] = SyntaxGroup.FromLink('perlMatch', 'perlString');
res['syntax-groups']['perlComment'] = SyntaxGroup.FromLink('perlComment', 'Comment');
res['syntax-groups']['perlSubstitutionGQQ'] = SyntaxGroup.FromLink('perlSubstitutionGQQ', 'perlString');
res['syntax-groups']['perlSubstitutionSQ'] = SyntaxGroup.FromLink('perlSubstitutionSQ', 'perlString');
res['syntax-groups']['perlTranslationGQ'] = SyntaxGroup.FromLink('perlTranslationGQ', 'perlString');
res['syntax-groups']['perlStringStartEnd'] = SyntaxGroup.FromLink('perlStringStartEnd', 'perlString');
res['syntax-groups']['perlHereDoc'] = SyntaxGroup.FromLink('perlHereDoc', 'perlString');
res['syntax-groups']['perlAutoload'] = SyntaxGroup.FromColor('perlAutoload', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['perlStatementPackage'] = SyntaxGroup.FromLink('perlStatementPackage', 'perlStatement');
res['syntax-groups']['perlPackageDecl'] = SyntaxGroup.FromLink('perlPackageDecl', 'perlType');
res['syntax-groups']['perlSubError'] = SyntaxGroup.FromLink('perlSubError', 'Error');
res['syntax-groups']['perlSubAttributesCont'] = SyntaxGroup.FromLink('perlSubAttributesCont', 'perlSubAttributes');
res['syntax-groups']['perlSubAttributes'] = SyntaxGroup.FromLink('perlSubAttributes', 'PreProc');
res['syntax-groups']['perlSubPrototypeError'] = SyntaxGroup.FromLink('perlSubPrototypeError', 'Error');
res['syntax-groups']['perlSubPrototype'] = SyntaxGroup.FromLink('perlSubPrototype', 'Type');
res['syntax-groups']['perlSubName'] = SyntaxGroup.FromLink('perlSubName', 'Function');
res['syntax-groups']['perlFunction'] = SyntaxGroup.FromLink('perlFunction', 'Keyword');
res['syntax-groups']['perlFunctionPRef'] = SyntaxGroup.FromLink('perlFunctionPRef', 'perlType');
res['syntax-groups']['perlSharpBang'] = SyntaxGroup.FromLink('perlSharpBang', 'PreProc');
res['syntax-groups']['perlFormatName'] = SyntaxGroup.FromLink('perlFormatName', 'perlIdentifier');
res['syntax-groups']['perlFormatField'] = SyntaxGroup.FromLink('perlFormatField', 'perlString');
res['syntax-groups']['perlFormat'] = SyntaxGroup.FromColor('perlFormat', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['perlDATA'] = SyntaxGroup.FromLink('perlDATA', 'perlComment');
res['syntax-groups']['perlInclude'] = SyntaxGroup.FromLink('perlInclude', 'Include');
res['syntax-groups']['perlSpecial'] = SyntaxGroup.FromLink('perlSpecial', 'Special');
res['syntax-groups']['perlCharacter'] = SyntaxGroup.FromLink('perlCharacter', 'Character');
res['syntax-groups']['perlType'] = SyntaxGroup.FromLink('perlType', 'Type');
res['syntax-groups']['perlIdentifier'] = SyntaxGroup.FromLink('perlIdentifier', 'Identifier');
res['syntax-groups']['perlStatement'] = SyntaxGroup.FromLink('perlStatement', 'Statement');
res['syntax-groups']['perlList'] = SyntaxGroup.FromLink('perlList', 'perlStatement');
res['syntax-groups']['perlMisc'] = SyntaxGroup.FromLink('perlMisc', 'perlStatement');
res['syntax-groups']['perlStorageClass'] = SyntaxGroup.FromLink('perlStorageClass', 'perlType');
res['syntax-groups']['perlSpecialAscii'] = SyntaxGroup.FromLink('perlSpecialAscii', 'perlSpecial');
res['syntax-groups']['perlSpecialDollar'] = SyntaxGroup.FromLink('perlSpecialDollar', 'perlSpecial');
res['syntax-groups']['perlSync'] = SyntaxGroup.FromColor('perlSync', new TermColor(-1), new TermColor(-1));
res['syntax-groups']['perlSyncPOD'] = SyntaxGroup.FromColor('perlSyncPOD', new TermColor(-1), new TermColor(-1));
return res;
} ())
;
res['snippets'] = [];
res['snippets'].push({
  'title': 'Find Missing Perm',
  'terminal-contents': '<vperl-function>sub </vperl-function><vperl-sub-name>check_perm </vperl-sub-name><v-normal>{                                                                </v-normal>\n<v-normal>    </v-normal><vperl-statement-storage>my</vperl-statement-storage><v-normal> </v-normal><vperl-var-plain2>%hash</vperl-var-plain2><v-normal>; </v-normal><vperl-var-plain>@hash{@_}</vperl-var-plain><v-normal> = ();                                                   </v-normal>\n<v-normal>    </v-normal><vperl-repeat>for</vperl-repeat><v-normal> </v-normal><vperl-statement-storage>my</vperl-statement-storage><v-normal> </v-normal><vperl-var-plain>$s</vperl-var-plain><v-normal> (</v-normal><vperl-var-plain>@_</vperl-var-plain><v-normal>) { </v-normal><vperl-statement-hash>exists</vperl-statement-hash><v-normal> </v-normal><vperl-var-plain>$hash{$_}</vperl-var-plain><v-normal> </v-normal><vperl-operator>or</vperl-operator><v-normal> </v-normal><vperl-statement-control>return</vperl-statement-control><v-normal> </v-normal><vperl-var-plain>$_</vperl-var-plain><v-normal>                              </v-normal>\n<v-normal>        </v-normal><vperl-repeat>for</vperl-repeat><v-normal> </v-normal><vperl-statement-list>map</vperl-statement-list><v-normal> </v-normal><vperl-statement-scalar>substr</vperl-statement-scalar><v-normal>(</v-normal><vperl-var-plain>$s</vperl-var-plain><v-normal>,</v-normal><vperl-number>1</vperl-number><v-normal>) . </v-normal><vperl-statement-scalar>substr</vperl-statement-scalar><v-normal>(</v-normal><vperl-var-plain>$s</vperl-var-plain><v-normal>,</v-normal><vperl-number>0</vperl-number><v-normal>,</v-normal><vperl-number>1</vperl-number><v-normal>), (</v-normal><vperl-float>1.</vperl-float><v-normal>.</v-normal><vperl-statement-scalar>length</vperl-statement-scalar><v-normal> </v-normal><vperl-var-plain>$s</vperl-var-plain><v-normal>); }                </v-normal>\n<v-normal>}                                                                               </v-normal>\n<v-normal>                                                                                </v-normal>\n<vperl-comment># Check and display</vperl-comment><v-normal>                                                             </v-normal>\n<vperl-var-plain>@perms</vperl-var-plain><v-normal> = </v-normal><vperl-string-start-end>qw(</vperl-string-start-end><vperl-q-q>ABCD CABD ACDB DACB BCDA ACBD ADCB CDAB DABC BCAD CADB CDBA</vperl-q-q><v-normal>         </v-normal>\n<vperl-q-q>            CBAD ABDC ADBC BDCA DCBA BACD BADC BDAC CBDA DBCA DCAB</vperl-q-q><vperl-string-start-end>)</vperl-string-start-end><v-normal>;            </v-normal>\n<vperl-statement-filedesc>print</vperl-statement-filedesc><v-normal> check_perm(</v-normal><vperl-var-plain>@perms</vperl-var-plain><v-normal>), </v-normal><vperl-string-start-end>&quot;</vperl-string-start-end><vperl-special-string>&#92;n</vperl-special-string><vperl-string-start-end>&quot;</vperl-string-start-end><v-normal>;                                                 </v-normal>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>H~                                                                              </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-normal>                                                                                </v-normal>\n'
});
res['snippets'].push({
  'title': 'File Input/Output',
  'terminal-contents': '<vperl-sharp-bang>#!/usr/bin/perl</vperl-sharp-bang><v-normal>                                                                 </v-normal>\n<v-normal>                                                                                </v-normal>\n<vperl-statement-filedesc>open</vperl-statement-filedesc><v-normal> </v-normal><vperl-statement-storage>my</vperl-statement-storage><v-normal> </v-normal><vperl-var-plain>$fh_in</vperl-var-plain><v-normal>, </v-normal><vperl-string-start-end>&apos;</vperl-string-start-end><vperl-string-unexpanded>&lt;</vperl-string-unexpanded><vperl-string-start-end>&apos;</vperl-string-start-end><v-normal>, </v-normal><vperl-string-start-end>&apos;</vperl-string-start-end><vperl-string-unexpanded>input.txt</vperl-string-unexpanded><vperl-string-start-end>&apos;</vperl-string-start-end><v-normal> </v-normal><vperl-operator>or</vperl-operator><v-normal> </v-normal><vperl-statement-flow>die</vperl-statement-flow><v-normal> </v-normal><vperl-string-start-end>&quot;</vperl-string-start-end><vperl-string>could not open &lt;input.txt&gt; for reading:</vperl-string>\n<vperl-string> </vperl-string><vperl-var-plain>$!</vperl-var-plain><vperl-string-start-end>&quot;</vperl-string-start-end><v-normal>;                                                                           </v-normal>\n<vperl-statement-filedesc>open</vperl-statement-filedesc><v-normal> </v-normal><vperl-statement-storage>my</vperl-statement-storage><v-normal> </v-normal><vperl-var-plain>$fh_out</vperl-var-plain><v-normal>, </v-normal><vperl-string-start-end>&apos;</vperl-string-start-end><vperl-string-unexpanded>&gt;</vperl-string-unexpanded><vperl-string-start-end>&apos;</vperl-string-start-end><v-normal>, </v-normal><vperl-string-start-end>&apos;</vperl-string-start-end><vperl-string-unexpanded>output.txt</vperl-string-unexpanded><vperl-string-start-end>&apos;</vperl-string-start-end><v-normal> </v-normal><vperl-operator>or</vperl-operator><v-normal> </v-normal><vperl-statement-flow>die</vperl-statement-flow><v-normal> </v-normal><vperl-string-start-end>&quot;</vperl-string-start-end><vperl-string>could not open &lt;output.txt&gt; for writi</vperl-string>\n<vperl-string>ng: </vperl-string><vperl-var-plain>$!</vperl-var-plain><vperl-string-start-end>&quot;</vperl-string-start-end><v-normal>;                                                                        </v-normal>\n<vperl-comment># &apos;&gt;&apos; overwrites file, &apos;&gt;&gt;&apos; appends to file, just like in the shell</vperl-comment><v-normal>             </v-normal>\n<v-normal>                                                                                </v-normal>\n<vperl-statement-filedesc>binmode</vperl-statement-filedesc><v-normal> </v-normal><vperl-var-plain>$fh_out</vperl-var-plain><v-normal>; </v-normal><vperl-comment># marks filehandle for binary content on systems where that mat</vperl-comment>\n<vperl-comment>ters</vperl-comment><v-normal>                                                                            </v-normal>\n<v-normal>                                                                                </v-normal>\n<vperl-statement-filedesc>print</vperl-statement-filedesc><v-normal> </v-normal><vperl-var-plain>$fh_out</vperl-var-plain><v-normal> </v-normal><vperl-var-plain>$_</vperl-var-plain><v-normal> </v-normal><vperl-repeat>while</vperl-repeat><v-normal> &lt;</v-normal><vperl-var-plain>$fh_in</vperl-var-plain><v-normal>&gt;;                                                </v-normal>\n<vperl-comment># prints current line to file associated with $fh_out filehandle</vperl-comment><v-normal>                </v-normal>\n<v-normal>                                                                                </v-normal>\n<vperl-comment># the same, less concise</vperl-comment><v-normal>                                                        </v-normal>\n<vperl-comment>#while (&lt;$fh_in&gt;) {</vperl-comment><v-normal>                                                             </v-normal>\n<vperl-comment>#  print $fh_out $_;</vperl-comment><v-normal>                                                            </v-normal>\n<vperl-comment>#};</vperl-comment><v-normal>                                                                             </v-normal>\n<v-normal>                                                                                </v-normal>\n<vperl-statement-filedesc>close</vperl-statement-filedesc><v-normal> </v-normal><vperl-var-plain>$fh_in</vperl-var-plain><v-normal>;                                                                   </v-normal>\n<vperl-statement-filedesc>close</vperl-statement-filedesc><v-normal> </v-normal><vperl-var-plain>$fh_out</vperl-var-plain><v-normal>;                                                                  </v-normal>\n<v-non-text>~                                                                               </v-non-text>\n<v-non-text>~                                                                               </v-non-text>\n<v-normal>                                                                                </v-normal>\n'
});
return res;
}())