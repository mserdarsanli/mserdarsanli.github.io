// This file is generated from defined snippets
var LangNames = (function () {
    function LangNames() {
    }
    // List of supported language codes,
    // sorted by language name
    LangNames.GetSnippetLangs = function () {
        return Object.keys(LangNames.Langs).sort(function (a, b) {
            return LangNames.Langs[a].localeCompare(LangNames.Langs[b]);
        });
    };
    LangNames.GetLangName = function (code) {
        return LangNames.Langs[code];
    };
    LangNames.Langs = {
        'ada': 'Ada',
        'awk': 'AWK',
        'c': 'C',
        'clojure': 'Clojure',
        'lisp': 'Lisp',
        'cpp': 'C++',
        'java': 'Java',
        'cs': 'C#',
        'd': 'D',
        'erlang': 'Erlang',
        'go': 'Go',
        'haskell': 'Haskell',
        'javascript': 'JavaScript',
        'lua': 'Lua',
        'matlab': 'MATLAB',
        'ocaml': 'OCaml',
        'perl6': 'Perl 6',
        'perl': 'Perl',
        'php': 'PHP',
        'python': 'Python',
        'ruby': 'Ruby'
    };
    return LangNames;
})();
// Copyright 2015 Mustafa Serdar Sanli
//
// This file is part of VimArtisan.
//
// VimArtisan is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// VimArtisan is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with VimArtisan.  If not, see <http://www.gnu.org/licenses/>.
// Representation of a real color
// Has utilities to print as "rgba(100, 200, 50, 1)" etc.
var Color = (function () {
    function Color() {
    }
    Color.FromRGB = function (red, green, blue) {
        var self = new Color();
        self.r = Math.round(red);
        self.g = Math.round(green);
        self.b = Math.round(blue);
        return self;
    };
    // Creates from a string of form #AAAAAA
    Color.FromHex = function (hex) {
        if (hex.length != 7 || hex[0] != '#') {
            console.error('Unable to parse color: ', hex);
        }
        var self = new Color();
        self.r = parseInt(hex.substr(1, 2), 16);
        self.g = parseInt(hex.substr(3, 2), 16);
        self.b = parseInt(hex.substr(5, 2), 16);
        return self;
    };
    Color.prototype.CssRgba = function () {
        return 'rgba(' + this.r + ', ' + this.g + ', ' + this.b + ', 1)';
    };
    // Returns color in hex form like #rrggbb
    Color.prototype.Hex = function () {
        var res = '#';
        res += (this.r < 16 ? '0' : '') + this.r.toString(16);
        res += (this.g < 16 ? '0' : '') + this.g.toString(16);
        res += (this.b < 16 ? '0' : '') + this.b.toString(16);
        return res;
    };
    return Color;
})();
// Copyright 2015 Mustafa Serdar Sanli
//
// This file is part of VimArtisan.
//
// VimArtisan is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// VimArtisan is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with VimArtisan.  If not, see <http://www.gnu.org/licenses/>.
// A terminal color, can be in range [0-255],
// or -1 (for defaulting to terminal settings)
var TermColor = (function () {
    function TermColor(code) {
        this.colorCode256 = code;
    }
    TermColor.prototype.ColorCode = function () {
        return this.colorCode256;
    };
    // Returns term code for vim, to be used with ctermfg=
    // Return color code, or NONE
    TermColor.prototype.VimTermCode = function () {
        if (this.colorCode256 == -1) {
            return 'NONE';
        }
        else {
            return '' + this.colorCode256;
        }
    };
    // Returns gui code for vim, to be used with guifg=
    // Return color in hex, or NONE
    TermColor.prototype.VimGuiCode = function () {
        if (this.colorCode256 == -1) {
            return 'NONE';
        }
        else {
            var col = UserTerminal.GetColor(this.colorCode256);
            return col.Hex();
        }
    };
    return TermColor;
})();
// Copyright 2015 Mustafa Serdar Sanli
//
// This file is part of VimArtisan.
//
// VimArtisan is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// VimArtisan is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with VimArtisan.  If not, see <http://www.gnu.org/licenses/>.
// Syntax group, used for highlighting a region of source file.
// Has fgcolor bgcolor and various other properties
// Can instead be a link to other group also.
var SyntaxGroup = (function () {
    function SyntaxGroup() {
    }
    SyntaxGroup.FromLink = function (name, linkto) {
        var self = new SyntaxGroup();
        self.isBold = false;
        self.name = name;
        self.isLink = true;
        self.linkto = linkto;
        // Links also have color components
        // Even though they are useless initially, they can be used
        // if user switches group to be a color type
        self.fgColor = new TermColor(-1);
        self.bgColor = new TermColor(-1);
        return self;
    };
    SyntaxGroup.FromColor = function (name, fg, bg) {
        var self = new SyntaxGroup();
        self.isBold = false;
        self.name = name;
        self.fgColor = fg;
        self.bgColor = bg;
        self.isLink = false;
        self.linkto = 'NO_LINK';
        return self;
    };
    SyntaxGroup.Parse = function (line) {
        // Try parsing `hi link`
        if (/hi\s*link/.exec(line)) {
            var res = /hi\s*link\s*(\w*)\s*(\w*)/.exec(line);
            if (!res) {
                return null;
            }
            return SyntaxGroup.FromLink(res[1], res[2]);
        }
        // Parse `hi` line, example:
        // hi SpecialKey	 ctermfg=4 ctermbg=NONE cterm=NONE guifg=#3465a4 guibg=NONE gui=NONE
        var groupName;
        var ctermfg;
        var ctermbg;
        // Extract group name
        {
            var res = /hi\s(\w*)\s/.exec(line);
            if (!res) {
                return null;
            }
            groupName = res[1];
        }
        // Extract ctermfg
        {
            var res = /.*\sctermfg\s*=\s*(\w*)/i.exec(line);
            if (!res) {
                return null;
            }
            ctermfg = VimColor.Parse(res[1]);
        }
        // Extract ctermbg
        {
            var res = /.*\sctermbg\s*=\s*(\w*)/i.exec(line);
            if (!res) {
                return null;
            }
            ctermbg = VimColor.Parse(res[1]);
        }
        return SyntaxGroup.FromColor(groupName, ctermfg, ctermbg);
    };
    SyntaxGroup.prototype.IsLink = function () {
        return this.isLink;
    };
    SyntaxGroup.prototype.SetAsColor = function () {
        this.isLink = false;
        VimStyle.ResetCss();
    };
    SyntaxGroup.prototype.SetAsLink = function () {
        this.isLink = true;
        VimStyle.ResetCss();
    };
    SyntaxGroup.prototype.GetLink = function () {
        return this.linkto;
    };
    SyntaxGroup.prototype.SetLink = function (link) {
        this.linkto = link;
        this.isLink = true;
        VimStyle.ResetCss();
    };
    SyntaxGroup.prototype.IsBold = function () {
        return this.isBold;
    };
    SyntaxGroup.prototype.SetBold = function (bold) {
        this.isBold = bold;
        VimStyle.ResetCss();
    };
    SyntaxGroup.prototype.GetFgColor = function () {
        return this.fgColor;
    };
    SyntaxGroup.prototype.SetFgColor = function (col) {
        this.fgColor = col;
        VimStyle.ResetCss();
    };
    SyntaxGroup.prototype.GetBgColor = function () {
        return this.bgColor;
    };
    SyntaxGroup.prototype.SetBgColor = function (col) {
        this.bgColor = col;
        VimStyle.ResetCss();
    };
    // Helper function to update colorpickers
    // Since not all SetFgColor etc calls are caused by colorpickers
    // This is to keep coorpickers synchronized with the actual colors
    SyntaxGroup.prototype.UpdateAssociatedColorPickers = function () {
        console.log('Updating pickers for', this.GetGroupName());
        this.fgColorPicker.SetColor(this.GetFgColor().ColorCode());
        this.bgColorPicker.SetColor(this.GetBgColor().ColorCode());
    };
    // Traverses linked syntax groups and updates fgColor, bgColor of this group.
    // It does not change whether this is a linked group or not.
    SyntaxGroup.prototype.ResolveSyntax = function () {
        if (this.IsLink()) {
            if (this.GetLink() == 'NO_LINK') {
                return; // Nothing to resolve
            }
            var linkedGroup = Vim.SyntaxGroups[this.GetLink()];
            linkedGroup.ResolveSyntax();
            this.fgColor = linkedGroup.fgColor;
            this.bgColor = linkedGroup.bgColor;
            this.isBold = linkedGroup.isBold;
        }
    };
    // Adds CSS rule for this group with the resolved syntax value
    SyntaxGroup.prototype.AddCssStyleTo = function (styleSheet) {
        this.ResolveSyntax();
        var tagName = this.GetTagName();
        var fgTermColor = Vim.SyntaxGroups['Normal'].GetFgColor();
        var bgTermColor = Vim.SyntaxGroups['Normal'].GetBgColor();
        if (this.GetFgColor().ColorCode() != -1) {
            fgTermColor = this.GetFgColor();
        }
        if (this.GetBgColor().ColorCode() != -1) {
            bgTermColor = this.GetBgColor();
        }
        var fgColorRgba = (fgTermColor.ColorCode() == -1 ? UserTerminal.GetFgColor().CssRgba()
            : UserTerminal.GetColor(fgTermColor.ColorCode()).CssRgba());
        var bgColorRgba = (bgTermColor.ColorCode() == -1 ? UserTerminal.GetBgColor().CssRgba()
            : UserTerminal.GetColor(bgTermColor.ColorCode()).CssRgba());
        var ruleText = tagName + ' {\n' +
            '  color: ' + fgColorRgba + ';\n' +
            '  background-color: ' + bgColorRgba + ';\n' +
            '  font-weight: ' + (this.isBold ? 'bold' : 'normal') + ';\n' +
            '}\n';
        styleSheet.insertRule(ruleText, styleSheet.cssRules.length);
        // TODO FIXME selecting text causes page to stop working properly
        // Inverts fg and bg color when selected
        var invRuleText = tagName + '::selection {\n' +
            '  color: ' + bgColorRgba + ';\n' +
            '  background-color: ' + fgColorRgba + ';\n' +
            '}\n';
        // Firefox does not accept ::selection :(
        var invRuleTextMoz = tagName + '::-moz-selection {\n' +
            '  color: ' + bgColorRgba + ';\n' +
            '  background-color: ' + fgColorRgba + ';\n' +
            '}\n';
        // One of the following blocks should succeed?
        try {
            styleSheet.insertRule(invRuleText, styleSheet.cssRules.length);
        }
        catch (e) {
        }
        try {
            styleSheet.insertRule(invRuleTextMoz, styleSheet.cssRules.length);
        }
        catch (e) {
        }
    };
    // Converts vim syntax grop name to html tag name
    // Ex: 'String' => 'v-string'
    // Ex: 'PreProc' => 'v-pre-proc'
    SyntaxGroup.prototype.GetTagName = function () {
        var groupName = this.name;
        var tagName = 'v';
        for (var i = 0; i < groupName.length; ++i) {
            if (groupName[i] == groupName[i].toUpperCase()) {
                // Prepend '-' if character is upercase
                tagName += '-';
            }
            tagName += groupName[i].toLowerCase();
        }
        return tagName;
    };
    ;
    // TODO: Group name should behave case insensitively.
    // https://github.com/mserdarsanli/VimArtisan/issues/2
    SyntaxGroup.prototype.GetGroupName = function () {
        return this.name;
    };
    ;
    // Converts html tag name to vim syntax grop name
    // Ex: 'v-string' => 'String'
    // Ex: 'v-pre-proc' => 'PreProc'
    SyntaxGroup.ConvertTagNameToGroupName = function (tagName) {
        var groupName = '';
        tagName = tagName.substr(1);
        for (var i = 0; i < tagName.length; ++i) {
            if (tagName[i] == '-') {
                ++i;
                groupName += tagName[i];
                continue;
            }
            groupName += tagName[i].toLowerCase();
        }
        return groupName;
    };
    ;
    return SyntaxGroup;
})();
// Copyright 2016 Mustafa Serdar Sanli
//
// This file is part of VimArtisan.
//
// VimArtisan is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// VimArtisan is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with VimArtisan.  If not, see <http://www.gnu.org/licenses/>.
// Utility class for mapping Vim color names to terminal color codes.
// Only 256-color terminals are supported.
var VimColor = (function () {
    function VimColor() {
    }
    // Parses color name or value
    // Accepted values: 'yellow', 'none', '-1', '13' ...
    VimColor.Parse = function (vimColorName) {
        var numberVal = parseInt(vimColorName);
        if (!isNaN(numberVal) && numberVal >= -1 && numberVal <= 255) {
            return new TermColor(numberVal);
        }
        var name = vimColorName.toLowerCase();
        if (!VimColor.ColorValues.hasOwnProperty(name)) {
            console.log('Unable to parse vim color name: ', vimColorName);
            return new TermColor(-1);
        }
        return new TermColor(VimColor.ColorValues[name]);
    };
    // Following data is extracted from Vim src/syntax.c
    // All made lowercase since Vim handles names case insensitively.
    VimColor.ColorValues = {
        "black": 0,
        "darkblue": 4,
        "darkgreen": 2,
        "darkcyan": 6,
        "darkred": 1,
        "darkmagenta": 5,
        "brown": 130,
        "darkyellow": 130,
        "gray": 248,
        "grey": 248,
        "lightgray": 7,
        "lightgrey": 7,
        "darkgray": 242,
        "darkgrey": 242,
        "blue": 12,
        "lightblue": 81,
        "green": 10,
        "lightgreen": 121,
        "cyan": 14,
        "lightcyan": 159,
        "red": 9,
        "lightred": 224,
        "magenta": 13,
        "lightmagenta": 225,
        "yellow": 11,
        "lightyellow": 229,
        "white": 15,
        "none": -1
    };
    return VimColor;
})();
// Copyright 2015 Mustafa Serdar Sanli
//
// This file is part of VimArtisan.
//
// VimArtisan is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// VimArtisan is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with VimArtisan.  If not, see <http://www.gnu.org/licenses/>.
var VimConfigManager = (function () {
    function VimConfigManager() {
        // Base syntax groups (whan syntax is off)
        this.BaseSyntaxGroups = {};
        this.LanguageSyntax = {
            'NO_LANG_SELECTED': {}
        };
        // Current syntax groups settings
        // TODO make private
        this.SyntaxGroups = {};
        this.SelectedColorscheme = 'default';
        this.SelectedLanguage = 'NO_LANG_SELECTED';
        this.BuiltinColorschemes = {};
        this.SyntaxGroups = {};
    }
    // Should be called when a coloscheme/language is changed
    VimConfigManager.prototype.ReloadSyntaxGroups = function () {
        console.log('Reloading syntax groups:' +
            ' colorscheme is ' + this.SelectedColorscheme +
            ' language is ' + this.SelectedLanguage);
        this.SyntaxGroups = {};
        for (var attr in this.BaseSyntaxGroups) {
            this.SyntaxGroups[attr] = this.BaseSyntaxGroups[attr];
        }
        var langSyntax = this.LanguageSyntax[this.SelectedLanguage]['syntax-groups'];
        for (var attr in langSyntax) {
            this.SyntaxGroups[attr] = langSyntax[attr];
        }
        var csSyntax = this.BuiltinColorschemes[this.SelectedColorscheme]['syntax-groups'];
        for (var attr in csSyntax) {
            this.SyntaxGroups[attr] = csSyntax[attr];
        }
        // TODO Remove unused grups again?
        // Clear up unnecessary ones
        // If a syntax rule has vales ctermfg=NODE ctermbg=NONE
        // then it is most likely to be a rule as aparsing implementation detail
        // Detect all rules as such, along with rules that link to those rules,
        // then remove them from the syntax groups.
        // We can not directly remove them as later we might find another group
        // linking to it, so here a list of syntax groups is collected to be
        // removed later.
    };
    // Returns array of syntax group names
    // Order is pre-order traversal of the inverted linkto trees
    // The order is meant to put together linked groups
    // So when a user clicks on a cString, in order to update main group
    // they need to jump cString --> String --> Constant which are located
    // far from each other on unordered table.
    // With this new order, after jumping to 'cString',
    // 'Constant' should be visible nearly above.
    VimConfigManager.prototype.SyntaxGroupsOrdered = function () {
        var backlinks = {};
        var orderedGroups = [];
        // Initialize backlinks array
        backlinks['ROOT_ELEMENT'] = [];
        for (var groupName in this.SyntaxGroups) {
            backlinks[groupName] = [];
        }
        // Fill backlinks
        for (var groupName in this.SyntaxGroups) {
            var group = this.SyntaxGroups[groupName];
            if (group.IsLink()) {
                backlinks[group.GetLink()].push(groupName);
            }
            else {
                backlinks['ROOT_ELEMENT'].push(groupName);
            }
        }
        var queue = ['ROOT_ELEMENT'];
        while (queue.length > 0) {
            var groupName = queue.shift();
            if (groupName != 'ROOT_ELEMENT') {
                orderedGroups.push(groupName);
            }
            for (var i = backlinks[groupName].length - 1; i >= 0; --i) {
                queue.unshift(backlinks[groupName][i]);
            }
        }
        return orderedGroups;
    };
    VimConfigManager.prototype.SelectColorscheme = function (colorscheme) {
        console.log('Setting colorscheme to ' + colorscheme);
        this.SelectedColorscheme = colorscheme;
        this.ReloadSyntaxGroups();
        VimStyle.ResetCss();
        // Update colorpickers
        // Remove old color table
        var wrapperDiv = document.getElementById('div-syntax-groups');
        while (wrapperDiv.firstChild) {
            wrapperDiv.removeChild(wrapperDiv.firstChild);
        }
        // Replace with new table
        ColorTable.Create().AppendTo(wrapperDiv);
    };
    ;
    VimConfigManager.prototype.SelectLanguage = function (language) {
        console.log('Setting language to ' + language);
        this.SelectedLanguage = language;
        this.ReloadSyntaxGroups();
        VimStyle.ResetCss();
        // Update colorpickers
        // Remove old color table
        var wrapperDiv = document.getElementById('div-syntax-groups');
        while (wrapperDiv.firstChild) {
            wrapperDiv.removeChild(wrapperDiv.firstChild);
        }
        // Replace with new table
        ColorTable.Create().AppendTo(wrapperDiv);
    };
    VimConfigManager.prototype.LoadColorschemeFile = function (fileName, contents) {
        console.log('Loading colorscheme file: ', fileName);
        var colorscheme = {};
        // Since the colorscheme may not have all the required groups,
        // Inherit them from default colorscheme.
        colorscheme = $.extend({}, Vim.BuiltinColorschemes['default']['syntax-groups']);
        var trimFn = function (s) {
            return s.trim();
        };
        var lines = contents.split('\n').map(trimFn);
        for (var _i = 0; _i < lines.length; _i++) {
            var line = lines[_i];
            var sg = SyntaxGroup.Parse(line);
            if (!sg) {
                continue;
            }
            colorscheme[sg.GetGroupName()] = sg;
        }
        this.BuiltinColorschemes[fileName] = { 'syntax-groups': colorscheme };
        Page.ColorschemeLoaded();
        Page.UpdateColorschemesDropdown();
    };
    return VimConfigManager;
})();
var Vim = new VimConfigManager();
// Copyright 2015 Mustafa Serdar Sanli
//
// This file is part of VimArtisan.
//
// VimArtisan is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// VimArtisan is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with VimArtisan.  If not, see <http://www.gnu.org/licenses/>.
// For managing the stylsheet for Vim color groups
var VimStyleSheetManager = (function () {
    function VimStyleSheetManager() {
        var style = document.getElementById('Style-SyntaxGroups');
        this.styleSheet = style.sheet;
    }
    // Recomputes and updates all stylesheet values related to vim groups
    // Although this call is potentially slow, it is most of the times necesary.
    // Since a syntax rule can not easily detect what other rules might be
    // affected by a change.
    VimStyleSheetManager.prototype.ResetCss = function () {
        while (this.styleSheet.cssRules.length) {
            this.styleSheet.deleteRule(0);
        }
        // Generate CSS rules for base groups
        for (var groupName in Vim.SyntaxGroups) {
            var group = Vim.SyntaxGroups[groupName];
            group.AddCssStyleTo(this.styleSheet);
        }
    };
    ;
    VimStyleSheetManager.prototype.GetStyleSheet = function () {
        return this.styleSheet;
    };
    return VimStyleSheetManager;
})();
var VimStyle = new VimStyleSheetManager();
// Copyright 2015 Mustafa Serdar Sanli
//
// This file is part of VimArtisan.
//
// VimArtisan is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// VimArtisan is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with VimArtisan.  If not, see <http://www.gnu.org/licenses/>.
// For 256-color terminal globals
var XTerm = (function () {
    function XTerm() {
    }
    // Table of color codes in the same design as
    // http://upload.wikimedia.org/wikipedia/en/1/15/Xterm_256color_chart.svg
    //
    // Used for presenting color picker
    XTerm.ChartColorCodes = [
        // Colors
        [16, 22, 28, 34, 40, 46, 82, 76, 70, 64, 58, 52],
        [17, 23, 29, 35, 41, 47, 83, 77, 71, 65, 59, 53],
        [18, 24, 30, 36, 42, 48, 84, 78, 72, 66, 60, 54],
        [19, 25, 31, 37, 43, 49, 85, 79, 73, 67, 61, 55],
        [20, 26, 32, 38, 44, 50, 86, 80, 74, 68, 62, 56],
        [21, 27, 33, 39, 45, 51, 87, 81, 75, 69, 63, 57],
        [93, 99, 105, 111, 117, 123, 159, 153, 147, 141, 135, 129],
        [92, 98, 104, 110, 116, 122, 158, 152, 146, 140, 134, 128],
        [91, 97, 103, 109, 115, 121, 157, 151, 145, 139, 133, 127],
        [90, 96, 102, 108, 114, 120, 156, 150, 144, 138, 132, 126],
        [89, 95, 101, 107, 113, 119, 155, 149, 143, 137, 131, 125],
        [88, 94, 100, 106, 112, 118, 154, 148, 142, 136, 130, 124],
        [160, 166, 172, 178, 184, 190, 226, 220, 214, 208, 202, 196],
        [161, 167, 173, 179, 185, 191, 227, 221, 215, 209, 203, 197],
        [162, 168, 174, 180, 186, 192, 228, 222, 216, 210, 204, 198],
        [163, 169, 175, 181, 187, 193, 229, 223, 217, 211, 205, 199],
        [164, 170, 176, 182, 188, 194, 230, 224, 218, 212, 206, 200],
        [165, 171, 177, 183, 189, 195, 231, 225, 219, 213, 207, 201],
        // Greyscale
        [232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243],
        [255, 254, 253, 252, 251, 250, 249, 248, 247, 246, 245, 244],
        // Basic
        [0, 1, 2, 3, 4, 5, 6, 7],
        [8, 9, 10, 11, 12, 13, 14, 15],
        // No-color
        [-1],
    ];
    return XTerm;
})();
// Copyright 2015 Mustafa Serdar Sanli
//
// This file is part of VimArtisan.
//
// VimArtisan is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// VimArtisan is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with VimArtisan.  If not, see <http://www.gnu.org/licenses/>.
// For managing terminal configuration like palettes, fg-bg colors etc.
var TerminalSettingsManager = (function () {
    function TerminalSettingsManager() {
    }
    // Set up initial page elements
    TerminalSettingsManager.prototype.Initialize = function () {
        console.log('Initializing Terminal Settings');
        // Terminal FG Colorpicker
        $("#terminal-text-colorpicker").spectrum({
            color: "#fff",
            change: function (c) {
                UserTerminal.SetFgColor(Color.FromRGB(c._r, c._g, c._b));
                TerminalSettings.UpdateCss();
            }
        });
        // Terminal BG Colorpicker
        $("#terminal-background-colorpicker").spectrum({
            color: "#000",
            change: function (c) {
                UserTerminal.SetBgColor(Color.FromRGB(c._r, c._g, c._b));
                TerminalSettings.UpdateCss();
            }
        });
        // Terminal colorpicker for colors [0..15]
        for (var i = 0; i < 16; ++i) {
            var pickerElement = $('#terminal-palette' + i + '-colorpicker');
            pickerElement.spectrum({
                color: UserTerminal.GetColor(i).CssRgba(),
                change: function (colorCode, c) {
                    UserTerminal.SetColor(colorCode, Color.FromRGB(c._r, c._g, c._b));
                    TerminalSettings.UpdateCss();
                }.bind(null, i)
            });
        }
        // Populate terminal colorschemes selector
        {
            var colorschemes = UserTerminal.GetColorSchemes();
            var csSelector = document.getElementById("terminal-colorscheme-reset-list");
            for (var i_1 = 0; i_1 < colorschemes.length; ++i_1) {
                var a = document.createElement('a');
                a.addEventListener('click', TerminalSettings.ResetTerminalColorscheme.bind(TerminalSettings, colorschemes[i_1]));
                a.href = '#';
                a.appendChild(document.createTextNode(colorschemes[i_1]));
                var li = document.createElement('li');
                li.appendChild(a);
                csSelector.appendChild(li);
            }
        }
        // Populate terminal palette selector
        {
            var palettes = UserTerminal.GetPalettes();
            var pSelector = document.getElementById("terminal-palette-reset-list");
            for (var i_2 = 0; i_2 < palettes.length; ++i_2) {
                var a = document.createElement('a');
                a.addEventListener('click', TerminalSettings.ResetColorPalette.bind(TerminalSettings, palettes[i_2]));
                a.href = '#';
                a.appendChild(document.createTextNode(palettes[i_2]));
                var li = document.createElement('li');
                li.appendChild(a);
                pSelector.appendChild(li);
            }
        }
    };
    TerminalSettingsManager.prototype.ResetColorPalette = function (paletteName) {
        UserTerminal.UsePalette(paletteName);
        for (var i = 0; i < 16; ++i) {
            var picker = $('#terminal-palette' + i + '-colorpicker');
            picker.spectrum('set', UserTerminal.GetColor(i).CssRgba());
        }
        TerminalSettings.UpdateCss();
    };
    TerminalSettingsManager.prototype.ResetTerminalColorscheme = function (colorSchemeName) {
        UserTerminal.UseColorScheme(colorSchemeName);
        $('#terminal-text-colorpicker').spectrum('set', UserTerminal.GetFgColor());
        $('#terminal-background-colorpicker').spectrum('set', UserTerminal.GetBgColor());
        TerminalSettings.UpdateCss();
    };
    /**
     * Recomputes and updates all stylesheet values related to terminal styles
     */
    TerminalSettingsManager.prototype.UpdateCss = function () {
        var SsName = 'Style-TerminalSettings';
        var style = document.getElementById(SsName);
        var ss = style.sheet;
        if (ss == null) {
            console.error('Unable to find stylesheet: ', SsName);
            return;
        }
        // Clear
        while (ss.cssRules.length) {
            ss.deleteRule(0);
        }
        var ruleText = '.terminal {\n' +
            '  color: ' + UserTerminal.GetFgColor().CssRgba() + ';\n' +
            '  background-color: ' + UserTerminal.GetBgColor().CssRgba() + ';\n' +
            '}\n';
        ss.insertRule(ruleText, ss.cssRules.length);
        // Any change in terminal CSS might affect Vim styles too?
        VimStyle.ResetCss();
    };
    ;
    return TerminalSettingsManager;
})();
// Copyright 2015 Mustafa Serdar Sanli
//
// This file is part of VimArtisan.
//
// VimArtisan is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// VimArtisan is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with VimArtisan.  If not, see <http://www.gnu.org/licenses/>.
var GnomeTerminal = (function () {
    function GnomeTerminal() {
        // Terminal foreground and background colors
        // Applies when they are not overridden
        // Vim uses 'Normal' group to override this for all elements
        this.Background = Color.FromRGB(0, 0, 0);
        this.Foreground = Color.FromRGB(255, 255, 255);
        this.Colors = [
            // Basic colors [0..15]
            // These might be overridden by terminal palette settings
            '#2E3436', '#CC0000', '#4E9A06', '#C4A000', '#3465A4', '#75507B', '#06989A', '#D3D7CF',
            '#555753', '#EF2929', '#8AE234', '#FCE94F', '#729FCF', '#AD7FA8', '#34E2E2', '#EEEEEC',
            // Rest of the colors [16..231]
            // Those 216 codes are colored by 6*6*6 RGB combinations,
            '#000000', '#00005F', '#000087', '#0000AF', '#0000D7', '#0000FF',
            '#005F00', '#005F5F', '#005F87', '#005FAF', '#005FD7', '#005FFF',
            '#008700', '#00875F', '#008787', '#0087AF', '#0087D7', '#0087FF',
            '#00AF00', '#00AF5F', '#00AF87', '#00AFAF', '#00AFD7', '#00AFFF',
            '#00D700', '#00D75F', '#00D787', '#00D7AF', '#00D7D7', '#00D7FF',
            '#00FF00', '#00FF5F', '#00FF87', '#00FFAF', '#00FFD7', '#00FFFF',
            '#5F0000', '#5F005F', '#5F0087', '#5F00AF', '#5F00D7', '#5F00FF',
            '#5F5F00', '#5F5F5F', '#5F5F87', '#5F5FAF', '#5F5FD7', '#5F5FFF',
            '#5F8700', '#5F875F', '#5F8787', '#5F87AF', '#5F87D7', '#5F87FF',
            '#5FAF00', '#5FAF5F', '#5FAF87', '#5FAFAF', '#5FAFD7', '#5FAFFF',
            '#5FD700', '#5FD75F', '#5FD787', '#5FD7AF', '#5FD7D7', '#5FD7FF',
            '#5FFF00', '#5FFF5F', '#5FFF87', '#5FFFAF', '#5FFFD7', '#5FFFFF',
            '#870000', '#87005F', '#870087', '#8700AF', '#8700D7', '#8700FF',
            '#875F00', '#875F5F', '#875F87', '#875FAF', '#875FD7', '#875FFF',
            '#878700', '#87875F', '#878787', '#8787AF', '#8787D7', '#8787FF',
            '#87AF00', '#87AF5F', '#87AF87', '#87AFAF', '#87AFD7', '#87AFFF',
            '#87D700', '#87D75F', '#87D787', '#87D7AF', '#87D7D7', '#87D7FF',
            '#87FF00', '#87FF5F', '#87FF87', '#87FFAF', '#87FFD7', '#87FFFF',
            '#AF0000', '#AF005F', '#AF0087', '#AF00AF', '#AF00D7', '#AF00FF',
            '#AF5F00', '#AF5F5F', '#AF5F87', '#AF5FAF', '#AF5FD7', '#AF5FFF',
            '#AF8700', '#AF875F', '#AF8787', '#AF87AF', '#AF87D7', '#AF87FF',
            '#AFAF00', '#AFAF5F', '#AFAF87', '#AFAFAF', '#AFAFD7', '#AFAFFF',
            '#AFD700', '#AFD75F', '#AFD787', '#AFD7AF', '#AFD7D7', '#AFD7FF',
            '#AFFF00', '#AFFF5F', '#AFFF87', '#AFFFAF', '#AFFFD7', '#AFFFFF',
            '#D70000', '#D7005F', '#D70087', '#D700AF', '#D700D7', '#D700FF',
            '#D75F00', '#D75F5F', '#D75F87', '#D75FAF', '#D75FD7', '#D75FFF',
            '#D78700', '#D7875F', '#D78787', '#D787AF', '#D787D7', '#D787FF',
            '#D7AF00', '#D7AF5F', '#D7AF87', '#D7AFAF', '#D7AFD7', '#D7AFFF',
            '#D7D700', '#D7D75F', '#D7D787', '#D7D7AF', '#D7D7D7', '#D7D7FF',
            '#D7FF00', '#D7FF5F', '#D7FF87', '#D7FFAF', '#D7FFD7', '#D7FFFF',
            '#FF0000', '#FF005F', '#FF0087', '#FF00AF', '#FF00D7', '#FF00FF',
            '#FF5F00', '#FF5F5F', '#FF5F87', '#FF5FAF', '#FF5FD7', '#FF5FFF',
            '#FF8700', '#FF875F', '#FF8787', '#FF87AF', '#FF87D7', '#FF87FF',
            '#FFAF00', '#FFAF5F', '#FFAF87', '#FFAFAF', '#FFAFD7', '#FFAFFF',
            '#FFD700', '#FFD75F', '#FFD787', '#FFD7AF', '#FFD7D7', '#FFD7FF',
            '#FFFF00', '#FFFF5F', '#FFFF87', '#FFFFAF', '#FFFFD7', '#FFFFFF',
            // Greyscale colors [232..255]
            '#080808', '#121212', '#1C1C1C', '#262626', '#303030', '#3A3A3A',
            '#444444', '#4E4E4E', '#585858', '#626262', '#6C6C6C', '#767676',
            '#808080', '#8A8A8A', '#949494', '#9E9E9E', '#A8A8A8', '#B2B2B2',
            '#BCBCBC', '#C6C6C6', '#D0D0D0', '#DADADA', '#E4E4E4', '#EEEEEE',
        ].map(Color.FromHex);
    }
    GnomeTerminal.prototype.GetFgColor = function () {
        return this.Foreground;
    };
    GnomeTerminal.prototype.GetBgColor = function () {
        return this.Background;
    };
    GnomeTerminal.prototype.SetFgColor = function (c) {
        this.Foreground = c;
    };
    GnomeTerminal.prototype.SetBgColor = function (c) {
        this.Background = c;
    };
    GnomeTerminal.prototype.GetColor = function (colorCode) {
        if (colorCode == -1) {
            console.error('GetColor called with -1');
        }
        return this.Colors[colorCode];
    };
    GnomeTerminal.prototype.SetColor = function (colorCode, c) {
        this.Colors[colorCode] = c;
    };
    // Returns a list of colorschemes the terminal supports
    // GNOME terminal supports a few colorschemes, which changes
    // foreground and background colors
    GnomeTerminal.prototype.GetColorSchemes = function () {
        return Object.keys(GnomeTerminal.ColorSchemes);
    };
    GnomeTerminal.prototype.UseColorScheme = function (colorScheme) {
        console.log('Using colorscheme ' + colorScheme);
        var fgColor = GnomeTerminal.ColorSchemes[colorScheme][0];
        var bgColor = GnomeTerminal.ColorSchemes[colorScheme][1];
        this.SetFgColor(fgColor);
        this.SetBgColor(bgColor);
    };
    // Returns a list of palettes the terminal supports
    // GNOME terminal supports a few palettes, which allows changes
    // first 16 colors
    GnomeTerminal.prototype.GetPalettes = function () {
        return Object.keys(GnomeTerminal.Palettes);
    };
    GnomeTerminal.prototype.UsePalette = function (paletteName) {
        console.log('Using palette ' + paletteName);
        for (var i = 0; i < 16; ++i) {
            var color = GnomeTerminal.Palettes[paletteName][i];
            this.SetColor(i, color);
        }
    };
    // ColorScheme/Palette values are copied from:
    // https://github.com/GNOME/gnome-terminal/blob/master/src/profile-editor.c
    // Map of colorscheme => [ fgcolor, bgcolor ]
    // Each color is of form: [r, g, b, a] as doubles
    GnomeTerminal.ColorSchemes = {
        'Black on light yellow': [
            Color.FromRGB(0, 0, 0),
            Color.FromRGB(255, 255, 221),
        ],
        'Black on white': [
            Color.FromRGB(0, 0, 0),
            Color.FromRGB(255, 255, 255),
        ],
        'Gray on black': [
            Color.FromRGB(170, 170, 170),
            Color.FromRGB(0, 0, 0),
        ],
        'Green on black': [
            Color.FromRGB(0, 255, 0),
            Color.FromRGB(0, 0, 0),
        ],
        'White on black': [
            Color.FromRGB(255, 255, 255),
            Color.FromRGB(0, 0, 0),
        ],
        'Solarized light': [
            Color.FromRGB(101, 123, 131),
            Color.FromRGB(253, 246, 227),
        ],
        'Solarized dark': [
            Color.FromRGB(131, 148, 150),
            Color.FromRGB(0, 43, 54),
        ]
    };
    // Map of paletteName => [ color0, color255, ..., color3825 ]
    GnomeTerminal.Palettes = {
        'Tango': [
            Color.FromRGB(0, 0, 0),
            Color.FromRGB(204, 0, 0),
            Color.FromRGB(78, 154, 6),
            Color.FromRGB(196, 160, 0),
            Color.FromRGB(52, 101, 164),
            Color.FromRGB(117, 80, 123),
            Color.FromRGB(6, 152, 154),
            Color.FromRGB(211, 215, 207),
            Color.FromRGB(85, 87, 83),
            Color.FromRGB(239, 41, 41),
            Color.FromRGB(138, 226, 52),
            Color.FromRGB(252, 233, 79),
            Color.FromRGB(114, 159, 207),
            Color.FromRGB(173, 127, 168),
            Color.FromRGB(52, 226, 226),
            Color.FromRGB(238, 238, 236),
        ],
        'Linux console': [
            Color.FromRGB(0, 0, 0),
            Color.FromRGB(170, 0, 0),
            Color.FromRGB(0, 170, 0),
            Color.FromRGB(170, 85, 0),
            Color.FromRGB(0, 0, 170),
            Color.FromRGB(170, 0, 170),
            Color.FromRGB(0, 170, 170),
            Color.FromRGB(170, 170, 170),
            Color.FromRGB(85, 85, 85),
            Color.FromRGB(255, 85, 85),
            Color.FromRGB(85, 255, 85),
            Color.FromRGB(255, 255, 85),
            Color.FromRGB(85, 85, 255),
            Color.FromRGB(255, 85, 255),
            Color.FromRGB(85, 255, 255),
            Color.FromRGB(255, 255, 255),
        ],
        'XTerm': [
            Color.FromRGB(0, 0, 0),
            Color.FromRGB(205, 0, 0),
            Color.FromRGB(0, 205, 0),
            Color.FromRGB(205, 205, 0),
            Color.FromRGB(30, 144, 255),
            Color.FromRGB(205, 0, 205),
            Color.FromRGB(0, 205, 205),
            Color.FromRGB(229, 229, 229),
            Color.FromRGB(76, 76, 76),
            Color.FromRGB(255, 0, 0),
            Color.FromRGB(0, 255, 0),
            Color.FromRGB(255, 255, 0),
            Color.FromRGB(70, 130, 180),
            Color.FromRGB(255, 0, 255),
            Color.FromRGB(0, 255, 255),
            Color.FromRGB(255, 255, 255),
        ],
        'Rxvt': [
            Color.FromRGB(0, 0, 0),
            Color.FromRGB(205, 0, 0),
            Color.FromRGB(0, 205, 0),
            Color.FromRGB(205, 205, 0),
            Color.FromRGB(0, 0, 205),
            Color.FromRGB(205, 0, 205),
            Color.FromRGB(0, 205, 205),
            Color.FromRGB(250, 235, 215),
            Color.FromRGB(64, 64, 64),
            Color.FromRGB(255, 0, 0),
            Color.FromRGB(0, 255, 0),
            Color.FromRGB(255, 255, 0),
            Color.FromRGB(0, 0, 255),
            Color.FromRGB(255, 0, 255),
            Color.FromRGB(0, 255, 255),
            Color.FromRGB(255, 255, 255),
        ],
        'Solarized': [
            Color.FromRGB(7, 54, 66),
            Color.FromRGB(220, 50, 47),
            Color.FromRGB(133, 153, 0),
            Color.FromRGB(181, 137, 0),
            Color.FromRGB(38, 139, 210),
            Color.FromRGB(211, 54, 130),
            Color.FromRGB(42, 161, 152),
            Color.FromRGB(238, 232, 213),
            Color.FromRGB(0, 43, 54),
            Color.FromRGB(203, 75, 22),
            Color.FromRGB(88, 110, 117),
            Color.FromRGB(101, 123, 131),
            Color.FromRGB(131, 148, 150),
            Color.FromRGB(108, 113, 196),
            Color.FromRGB(147, 161, 161),
            Color.FromRGB(253, 246, 227),
        ]
    };
    return GnomeTerminal;
})();
// Copyright 2015 Mustafa Serdar Sanli
//
// This file is part of VimArtisan.
//
// VimArtisan is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// VimArtisan is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with VimArtisan.  If not, see <http://www.gnu.org/licenses/>.
// Color table (for showing/modifying vim styles)
// Shown on the right side of the page
'use strict';
var ColorTable = (function () {
    function ColorTable() {
    }
    ColorTable.Create = function () {
        var self = new ColorTable();
        self.Initialize();
        return self;
    };
    ColorTable.prototype.Initialize = function () {
        this.colorTable = document.createElement('table');
        // Append title row
        this.colorTable.innerHTML =
            '<tr>' +
                '<th>\u25b6\u00a0\u00a0</th>' +
                '<th>Rule Name</th>' +
                '<th>FG Color</th>' +
                '<th>BG Color</th>' +
                '<th>Bold</th>' +
                '<th>Toggle</th>' +
                '<th class="color-table-col-preview">Preview</th>' +
                '</tr>';
        var groupNames = Vim.SyntaxGroupsOrdered();
        // Put the row for 'Normal' first, which is special
        groupNames.splice(groupNames.indexOf('Normal'), 1);
        groupNames.unshift('Normal');
        for (var _i = 0; _i < groupNames.length; _i++) {
            var groupName = groupNames[_i];
            var syntaxGroup = Vim.SyntaxGroups[groupName];
            var tagName = syntaxGroup.GetTagName();
            var rowId = 'syngroup-' + groupName;
            var row = document.createElement('tr');
            row.id = rowId;
            // Type of the syntax group, linkto or color
            row.dataset['groupType'] = (syntaxGroup.IsLink() ? 'linkto' : 'color');
            var col;
            col = document.createElement('td');
            var span = document.createElement('span');
            span.id = 'syngroup-' + groupName + '-triangle';
            span.textContent = '\u25b6';
            span.style.visibility = 'hidden';
            col.appendChild(span);
            row.appendChild(col);
            col = document.createElement('td');
            col.textContent = groupName;
            // Add some padding to the special group
            if (groupName == 'Normal') {
                col.style.paddingTop = '15px';
                col.style.paddingBottom = '15px';
            }
            row.appendChild(col);
            var linktoDis = (syntaxGroup.IsLink() ? 'table-cell' : 'none');
            var colorDis = (syntaxGroup.IsLink() ? 'none' : 'table-cell');
            // Linkto info, spans 3 columns
            col = document.createElement('td');
            col.classList.add('linkto-col');
            col.style.display = linktoDis;
            col.colSpan = '3';
            col.appendChild(this.MakeLinktoDiv(groupName, syntaxGroup.GetLink()));
            row.appendChild(col);
            // Foreground color column
            col = document.createElement('td');
            col.classList.add('color-col');
            col.style.display = colorDis;
            syntaxGroup.fgColorPicker = ColorPicker.Create(groupName, 'fg');
            syntaxGroup.fgColorPicker.AppendTo(col);
            row.appendChild(col);
            // Background color column
            col = document.createElement('td');
            col.classList.add('color-col');
            col.style.display = colorDis;
            syntaxGroup.bgColorPicker = ColorPicker.Create(groupName, 'bg');
            syntaxGroup.bgColorPicker.AppendTo(col);
            row.appendChild(col);
            // Bold column
            col = document.createElement('td');
            col.classList.add('color-col');
            col.style.display = colorDis;
            col.appendChild(this.MakeBoldToggleDiv(groupName));
            row.appendChild(col);
            // Toggle column
            col = document.createElement('td');
            col.appendChild(this.MakeColorLinkToggleButton(groupName, syntaxGroup));
            row.appendChild(col);
            // Preview column
            col = document.createElement('td');
            col.classList.add('color-table-col-preview');
            col.appendChild(this.MakeGroupPreview(tagName));
            row.appendChild(col);
            this.colorTable.appendChild(row);
        }
    };
    ColorTable.prototype.AppendTo = function (parent) {
        parent.appendChild(this.colorTable);
    };
    ColorTable.GroupLinkChanged = function (group, linkSelector) {
        Vim.SyntaxGroups[group].SetLink(linkSelector.value);
    };
    ColorTable.ScrollFromGroup = function (groupName) {
        var group = Vim.SyntaxGroups[groupName];
        Page.ScrollToGroup(group.GetLink());
    };
    /**
     * Creates a div for jumping to another syntax group.
     *
     * @param targetGroup  Group to jump to
     * @return             Created div
     */
    ColorTable.prototype.MakeLinktoDiv = function (group, targetGroup) {
        var div = document.createElement('div');
        var jumpBtn = document.createElement('a');
        // \u219f is up pointing arrow with two heads
        jumpBtn.textContent = '\u219f Links to: ';
        jumpBtn.href = '#';
        jumpBtn.addEventListener('click', ColorTable.ScrollFromGroup.bind(this, group));
        div.appendChild(jumpBtn);
        var select = document.createElement('select');
        {
            // Add special case to front
            var option = document.createElement('option');
            option.appendChild(document.createTextNode('NO_LINK'));
            select.appendChild(option);
        }
        var groups = Object.keys(Vim.SyntaxGroups).sort();
        for (var i in groups) {
            var group_1 = groups[i];
            var option = document.createElement('option');
            if (group_1 == targetGroup) {
                option.selected = true;
            }
            option.appendChild(document.createTextNode(group_1));
            select.appendChild(option);
        }
        select.addEventListener('change', ColorTable.GroupLinkChanged.bind(this, group, select));
        div.appendChild(select);
        return div;
    };
    /**
     * Creates div to toggle bold style
     *
     * @param groupName  Vim groupname for which the toggle belongs
     * @return           Created div wrapped in jQuery object
     */
    ColorTable.prototype.MakeBoldToggleDiv = function (groupName) {
        var syntax = Vim.SyntaxGroups[groupName];
        var input = document.createElement('input');
        input.type = 'checkbox';
        input.checked = syntax.IsBold();
        input.setAttribute('data-toggleforgroup', groupName);
        input.addEventListener('click', function (event) {
            Vim.SyntaxGroups[groupName].SetBold(this.checked);
            event.stopPropagation();
        });
        return input;
    };
    /**
     * Makes a button to toggle between color/linkto states for a syntax group.
     *
     * @param syntaxGroup  Syntax for the group.
     * @return           Created button.
     */
    ColorTable.prototype.MakeColorLinkToggleButton = function (groupName, syntaxGroup) {
        var button = document.createElement('button');
        button.type = 'button';
        button.classList.add('btn');
        button.classList.add('btn-default');
        var MakeToggleFn = function (groupName, button) {
            return function () {
                console.log('Toggling ' + groupName);
                var row = document.getElementById('syngroup-' + groupName);
                var colorCols = row.getElementsByClassName('color-col');
                var linktoCols = row.getElementsByClassName('linkto-col');
                var colorColDisplay;
                var linktoColDisplay;
                if (row.dataset['groupType'] == 'color') {
                    // Make it a linkto
                    colorColDisplay = 'none';
                    linktoColDisplay = 'table-cell';
                    button.textContent = 'Set as Color';
                    row.dataset['groupType'] = 'linkto';
                    syntaxGroup.SetAsLink();
                }
                else {
                    // Make it a color
                    colorColDisplay = 'table-cell';
                    linktoColDisplay = 'none';
                    button.textContent = 'Set as Linkto';
                    row.dataset['groupType'] = 'color';
                    // Syntax should be resolved while this group is still a link
                    console.log('Syntax was', Vim.SyntaxGroups[groupName]);
                    syntaxGroup.ResolveSyntax();
                    console.log('Syntax is', Vim.SyntaxGroups[groupName]);
                    syntaxGroup.UpdateAssociatedColorPickers();
                    syntaxGroup.SetAsColor();
                }
                for (var i = 0; i < colorCols.length; ++i) {
                    colorCols[i].style.display = colorColDisplay;
                }
                for (var i = 0; i < linktoCols.length; ++i) {
                    linktoCols[i].style.display = linktoColDisplay;
                }
            };
        };
        button.addEventListener('click', MakeToggleFn(groupName, button));
        if (syntaxGroup.IsLink()) {
            button.textContent = 'Set as Color';
        }
        else {
            button.textContent = 'Set as Linkto';
        }
        return button;
    };
    /**
     * Creates an element for syntax group preview.
     *
     * @param tagName  HTML tag name for the syntax group.
     * @return         Created preview element.
     */
    ColorTable.prototype.MakeGroupPreview = function (tagName) {
        var pre = document.createElement('pre');
        pre.classList.add('terminal');
        var previewContent = document.createElement(tagName);
        previewContent.textContent = '  Preview  ';
        pre.appendChild(previewContent);
        return pre;
    };
    return ColorTable;
})();
// Copyright 2015 Mustafa Serdar Sanli
//
// This file is part of VimArtisan.
//
// VimArtisan is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// VimArtisan is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with VimArtisan.  If not, see <http://www.gnu.org/licenses/>.
'use strict';
// Create event handler responsible for dismissing the popup
var DismissHandler = (function () {
    function DismissHandler() {
        // Use Create.. functions instead
    }
    // Checks if clicked target is hierarchically inside the popur
    DismissHandler.prototype.IsTargetInsidePopup = function (target) {
        while (target != document) {
            if (target == this.popup) {
                return true;
            }
            target = target.parentNode;
        }
        return false;
    };
    DismissHandler.prototype.handleEvent = function (event) {
        if (this.IsTargetInsidePopup(event.target)) {
            return;
        }
        this.popup.parentNode.removeChild(this.popup);
        event.preventDefault();
        event.stopPropagation();
        window.removeEventListener('mouseup', this);
    };
    DismissHandler.CreateFor = function (popup) {
        var self = new DismissHandler();
        self.popup = popup;
        return self;
    };
    return DismissHandler;
})();
/**
 * Wrapper tag for colorpicker box
 *
 * @param group      Vim style group
 * @param colorpart  'fg' or 'bg'
 *
 * private:
 * this.colorCode terminal color code [0-255] or -1 for if undefined
 */
var ColorPicker = (function () {
    function ColorPicker() {
    }
    ColorPicker.Create = function (groupName, colorPart) {
        var self = new ColorPicker();
        self.colorDiv = document.createElement('div');
        self.colorDiv.id = 'colorpicker_' + colorPart + '_' + groupName;
        self.colorDiv.style.display = 'inline-block';
        self.colorDiv.style.width = '20px';
        self.colorDiv.style.height = '20px';
        self.colorDiv.style.cursor = 'pointer';
        self.groupName = groupName;
        self.colorPart = colorPart;
        var syntax = Vim.SyntaxGroups[self.groupName];
        if (self.colorPart == 'fg') {
            self.colorCode = syntax.GetFgColor().ColorCode();
        }
        else {
            self.colorCode = syntax.GetBgColor().ColorCode();
        }
        if (self.colorCode == -1) {
            self.colorDiv.style.backgroundImage = 'url("./transparency.png")';
        }
        else {
            self.colorDiv.style.backgroundColor = UserTerminal.GetColor(self.colorCode).CssRgba();
        }
        self.colorDiv.addEventListener('click', function (event) {
            this.ColorPicker256();
            event.stopPropagation();
        }.bind(self));
        return self;
    };
    ColorPicker.prototype.AppendTo = function (parent) {
        parent.appendChild(this.colorDiv);
    };
    ColorPicker.prototype.SetColor = function (colorCode) {
        this.colorCode = colorCode;
        if (colorCode == -1) {
            this.colorDiv.style.backgroundColor = '';
            this.colorDiv.style.backgroundImage = 'url("./transparency.png")';
        }
        else {
            this.colorDiv.style.backgroundColor = UserTerminal.GetColor(colorCode).CssRgba();
            this.colorDiv.style.backgroundImage = '';
        }
    };
    // Callback that is executed when a color is picked by the colorpicker
    ColorPicker.prototype.OnNewColorPick = function (colorCode) {
        if (colorCode == -1) {
            this.colorDiv.style.backgroundColor = '';
            this.colorDiv.style.backgroundImage = 'url("./transparency.png")';
        }
        else {
            this.colorDiv.style.backgroundColor = UserTerminal.GetColor(colorCode).CssRgba();
            this.colorDiv.style.backgroundImage = '';
        }
        if (this.colorPart == 'fg') {
            Vim.SyntaxGroups[this.groupName].SetFgColor(new TermColor(colorCode));
        }
        else {
            Vim.SyntaxGroups[this.groupName].SetBgColor(new TermColor(colorCode));
        }
    };
    ColorPicker.prototype.ColorPickerOffset = function () {
        var cdOffset = $(this.colorDiv).offset();
        var baseOffset = $('#controls').offset();
        var baseScrollTop = $('#controls').scrollTop();
        return { top: cdOffset.top - baseOffset.top + baseScrollTop,
            left: cdOffset.left - baseOffset.left };
    };
    ColorPicker.prototype.CreateColorPickerDiv = function () {
        var offset = this.ColorPickerOffset();
        var pickerPopup = document.createElement('div');
        pickerPopup.style.position = 'absolute';
        pickerPopup.style.top = (offset.top + 20) + 'px';
        pickerPopup.style.left = (offset.left + 20) + 'px';
        pickerPopup.style.backgroundColor = '#CCCCCC';
        var boxSize = 16;
        var offsetOut = 7;
        var offsetIn = 4;
        var offsetInExtra = 5;
        var offsetTop = offsetOut;
        for (var i = 0; i < XTerm.ChartColorCodes.length; ++i) {
            var row = XTerm.ChartColorCodes[i];
            var offsetLeft = offsetOut;
            if (i == 6 || i == 12 || i == 18 || i == 20) {
                offsetTop += offsetInExtra;
            }
            for (var j = 0, offsetLeft_1 = 5; j < row.length; ++j) {
                var colorCode = row[j];
                var divIn = document.createElement('div');
                divIn.style.position = 'absolute';
                divIn.style.top = offsetTop + 'px';
                divIn.style.left = offsetLeft_1 + 'px';
                divIn.style.width = boxSize + 'px';
                divIn.style.height = boxSize + 'px';
                divIn.classList.add('color-box');
                if (colorCode == this.colorCode) {
                    this.selectedBox = divIn;
                    divIn.classList.add('color-box-selected');
                }
                divIn.addEventListener('click', function (colorCode, event) {
                    this.selectedBox.classList.remove('color-box-selected');
                    this.OnNewColorPick(colorCode);
                    this.selectedBox = event.target;
                    this.selectedBox.classList.add('color-box-selected');
                }.bind(this, colorCode));
                if (colorCode == -1) {
                    divIn.style.backgroundImage = 'url("./transparency.png")';
                }
                else {
                    divIn.style.backgroundColor = UserTerminal.GetColor(colorCode).CssRgba();
                }
                pickerPopup.appendChild(divIn);
                offsetLeft_1 += offsetIn + boxSize;
            }
            offsetTop += offsetIn + boxSize;
        }
        pickerPopup.style.width = (2 * offsetOut + 12 * boxSize + 11 * offsetIn) + 'px';
        pickerPopup.style.height =
            (2 * offsetOut + 23 * boxSize + 22 * offsetIn + 4 * offsetInExtra) + 'px';
        return pickerPopup;
    };
    // Creates and pops up the color picker popup.
    ColorPicker.prototype.ColorPicker256 = function () {
        var pickerPopup = this.CreateColorPickerDiv();
        document.getElementById('controls').appendChild(pickerPopup);
        window.addEventListener('mouseup', DismissHandler.CreateFor(pickerPopup));
    };
    return ColorPicker;
})();
// Copyright 2015 Mustafa Serdar Sanli
//
// This file is part of VimArtisan.
//
// VimArtisan is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// VimArtisan is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with VimArtisan.  If not, see <http://www.gnu.org/licenses/>.
// Define user's terminal
var UserTerminal = new GnomeTerminal();
// Define Terminal Settings handler
var TerminalSettings = new TerminalSettingsManager();
var Page = (function () {
    function Page() {
    }
    Page.Initialize = function () {
        // Update snippets language list
        {
            var langCodes = LangNames.GetSnippetLangs();
            var languagesListElem = document.getElementById("snippet-lang-select-list");
            for (var i = 0; i < langCodes.length; ++i) {
                var langCode = langCodes[i];
                var langName = LangNames.GetLangName(langCode);
                var a = document.createElement('a');
                a.addEventListener('click', Page.PickSnippetLang.bind(Page, langCode));
                a.href = '#';
                a.appendChild(document.createTextNode(langName));
                var li = document.createElement('li');
                li.appendChild(a);
                languagesListElem.appendChild(li);
            }
        }
        var loadColorschemeBtn = document.getElementById("load-colorscheme-button");
        loadColorschemeBtn.addEventListener('click', Page.LoadColorscheme);
        Page.LoadBaseSyntaxGroups();
        Page.LoadBuiltinColorschemes();
        // Load initial terminals for the default language
        Page.PickSnippetLang('cpp');
    };
    // Trigger loading base syntax groups
    Page.LoadBaseSyntaxGroups = function () {
        var req = new XMLHttpRequest();
        req.onreadystatechange = function () {
            if (req.readyState !== 4) {
                return;
            }
            if (req.status !== 200) {
                console.error('Unable to load base syntax groups');
                return;
            }
            Page.BaseSyntaxGroupsLoaded(req.responseText);
        };
        req.open('GET', 'runtime/base.eval.js');
        req.send();
    };
    Page.BaseSyntaxGroupsLoaded = function (res) {
        Vim.BaseSyntaxGroups = eval(res)['syntax-groups'];
        console.log('Base syntax groups loaded');
    };
    /**
     * Function to trigger loading coloschemes data
     */
    Page.LoadBuiltinColorschemes = function () {
        $.get('./runtime/colorschemes.eval.js', Page.BuiltinColorschemesLoaded, 'script')
            .fail(function () {
            console.log('Error loading colorschemes');
        });
    };
    ;
    Page.GroupSelected = function (event) {
        console.log('Event target was', event.target);
        var tagName = $(event.target).prop('tagName');
        var groupName = SyntaxGroup.ConvertTagNameToGroupName(tagName);
        Page.ScrollToGroup(groupName);
    };
    Page.ScrollToGroup = function (groupName) {
        // As static variable
        if (typeof Page.LastScrolledGroupTriangle != 'undefined') {
            Page.LastScrolledGroupTriangle.style.visibility = 'hidden';
        }
        // Make new group have the triangle pointer
        Page.LastScrolledGroupTriangle =
            document.getElementById('syngroup-' + groupName + '-triangle');
        Page.LastScrolledGroupTriangle.style.visibility = 'visible';
        var scrollY = $('#syngroup-' + groupName).offset().top - $('#controls').offset().top + $('#controls').scrollTop();
        $('#controls').animate({
            scrollTop: scrollY
        }, 1000);
    };
    Page.PickSnippetLang = function (langCode) {
        $('#snippet-lang-dropdown-text').text('Snippets in ' + LangNames.GetLangName(langCode));
        Page.LoadSnippetsForLang(langCode);
    };
    Page.LoadSnippetsForLang = function (lang) {
        $.get('./runtime/' + lang + '.eval.js', Page.LangDataLoaded.bind(Page, lang), 'script')
            .fail(function () {
            console.log('Error loading snippet');
        });
    };
    Page.LangDataLoaded = function (language, res) {
        res = eval(res);
        console.log('Loading language data');
        var terminals = $('#terminals').empty();
        for (var i = 0; i < res.snippets.length; ++i) {
            var snippet = res.snippets[i];
            terminals.append($('<div>').append($('<pre>').addClass('terminal').append($('<code>', { id: 'terminal' + i })
                .html(snippet['terminal-contents']))));
        }
        Vim.LanguageSyntax[language] = res['lang-syntax'];
        Vim.SelectLanguage(language);
    };
    Page.GenerateColorschemeFile = function (csName) {
        // Create colorscheme file contents
        var fileContents = '" Created with VimArtisan (Vim Colorscheme Generator)\n' +
            '" http://mserdarsanli.github.io/VimArtisan/index.html\n' +
            '\n' +
            'hi clear\n' +
            '\n' +
            'if exists("syntax_on")\n' +
            '    syntax reset\n' +
            'endif\n' +
            '\n' +
            'let colors_name = "' + csName + '"\n' +
            '\n' +
            'set bg&\n' +
            '\n';
        for (var groupName in Vim.SyntaxGroups) {
            var line = 'hi ' + groupName + '\t';
            var syntax = Vim.SyntaxGroups[groupName];
            // TODO support linkto
            var fgColor = syntax.GetFgColor();
            var bgColor = syntax.GetBgColor();
            line += ' ctermfg=' + fgColor.VimTermCode();
            line += ' ctermbg=' + bgColor.VimTermCode();
            line += ' cterm=NONE';
            line += ' guifg=' + fgColor.VimGuiCode();
            line += ' guibg=' + bgColor.VimGuiCode();
            line += ' gui=NONE';
            fileContents += line + '\n';
        }
        return fileContents;
    };
    Page.SaveCurrentStyle = function () {
        $('#color-scheme-save-modal').modal('show');
    };
    Page.DownloadColorscheme = function () {
        var csName = document.getElementById('colorscheme-name-input').value;
        var a = document.getElementById('colorscheme-download-anchor');
        a.href = 'data:application/octet-stream;base64,'
            + window.btoa(Page.GenerateColorschemeFile(csName));
        a['download'] = csName + '.vim';
        a.click();
    };
    Page.LoadColorschemeModal = function () {
        $('#load-colorscheme-button').show();
        $('#load-colorscheme-button-done').hide();
        $('#color-scheme-load-modal').modal('show');
    };
    Page.LoadColorscheme = function () {
        var filePicker = document.getElementById('load-colorscheme-file');
        if (filePicker.files.length != 1) {
            alert('No file selected');
            return;
        }
        var file = filePicker.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            Vim.LoadColorschemeFile(file.name, reader.result);
        };
        reader.readAsText(file);
    };
    Page.ColorschemeLoaded = function () {
        $('#load-colorscheme-button').hide();
        $('#load-colorscheme-button-done').show();
    };
    Page.ConfigureTerminal = function () {
        $('#configure-terminal-modal').modal('show');
    };
    Page.ShowAboutPopup = function () {
        $('#about-modal').modal('show');
    };
    /**
     * Callback for when colorschemes data is available
     *
     * @param res  loaded colorscheme data object
     */
    Page.BuiltinColorschemesLoaded = function (res) {
        Vim.BuiltinColorschemes = eval(res);
        console.log('BuiltinColorschemes', Vim.BuiltinColorschemes);
        Page.UpdateColorschemesDropdown();
        // Load the default colorscheme
        console.log('Loading default colorscheme');
        Vim.SelectColorscheme('default');
    };
    /**
     * Should be called when new colorschemes are loaded.
     */
    Page.UpdateColorschemesDropdown = function () {
        // Add colorschemes list to the drowdown
        var btn = document.getElementById('vim-builtin-colorscheme-picker-button');
        btn.classList.remove('disabled');
        var ul = document.getElementById('vim-builtin-colorschemes-list');
        // Clean up the list
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
        for (var colorscheme in Vim.BuiltinColorschemes) {
            var li = document.createElement('li');
            var a = document.createElement('a');
            a.href = '#';
            a.textContent = colorscheme;
            a.addEventListener('click', Vim.SelectColorscheme.bind(Vim, colorscheme));
            li.appendChild(a);
            ul.appendChild(li);
        }
    };
    // TODO move to another class
    Page.LastScrolledGroupTriangle = undefined;
    return Page;
})();
