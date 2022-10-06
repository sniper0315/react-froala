import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.css';
import 'file-loader?name=[name].[ext]!./index.html';
import 'froala-editor/js/plugins.pkgd.min.js';

import FroalaEditor from 'react-froala-wysiwyg';
import React from 'react';
import ReactDOM from 'react-dom';
import Froalaeditor from 'froala-editor';
import './style.css';

import versionIcon from './icons/versions.svg';
import undoIcon from './icons/undo.svg';
import redoIcon from './icons/redo.svg';
import crossLineOnTextIcon from './icons/crossLineOnText.svg';
import HorizonteLineOnTextIcon from './icons/HorizonteLineOnText.svg';
import HorijentalLineIcon from './icons/HorijentalLine.svg';
import boldIcon from './icons/bold.svg';
import underlineIcon from './icons/underline.svg';
import crossWordIcon from './icons/crossWord.svg';
import orderListIcon from './icons/orderList.svg';
import unorderListIcon from './icons/unorderList.svg';
import textColorIcon from './icons/textColor.svg';
import colorPickerIcon from './icons/colorPicker.svg';
import leftSideTextIcon from './icons/leftSideText.svg';
import rightSideTextIcon from './icons/rightSideText.svg';
import centerTextIcon from './icons/centerText.svg';
import fixAlignTextIcon from './icons/fixAlignText.svg';
import tebLeftIcon from './icons/tebLeft.svg';
import tebRightIcon from './icons/tebRight.svg';
import eiconIcon from './icons/icon.svg';
import starIcon from './icons/star.svg';
import x2upIcon from './icons/X2up.svg';
import x2DownIcon from './icons/X2Down.svg';
import boxIcon from './icons/box.svg';
import lignSpaceIcon from './icons/lignSpace.svg';
import checkBoxIcon from './icons/checkBox.svg';
import qoutIcon from './icons/qout.svg';
import minuseIcon from './icons/minuse.svg';
import pluseIcon from './icons/pluse.svg';
import insertImageIcon from './icons/insertImage.svg';
import exportPdfIcon from './icons/exportPdf.svg';
import printDocIcon from './icons/printDoc.svg';
import startCallInVideoIcon from './icons/startCallInVideo.svg';
import addCommentIcon from './icons/addComment.svg';
import sendMessageIcon from './icons/sendMessage.svg';
import addVideoIcon from './icons/addVideo.svg';

class EditorComponent extends React.Component {
  constructor() {
    super();
    var colorText = ['#000000', '#555555', '#797979', '#a3a2a2', '#c0c0c0', '#e0e0e0', '#c4a6a6', '#c99292', '#FFFFFF', '#000080', '#008000', '#5ee2a0', '#aaaa31', '#ffab0d', '#ff0000', '#800000', '#ff00ff', '#800080', '#0000ff', '#08f708', '#baffdd', '#c1c16f', '#f7ca75', '#ff8484', '#c33939', '#ff9bff', '#774c77', '#6a6aff', '#9dff9d', '#90d5b2', '#ffff00', '#ffe0a5', '#ffbaba', '#be6f6f', '#ffceff', '#c3a2c3'];
    var colorBackground = ['#000000', '#555555', '#797979', '#a3a2a2', '#c0c0c0', '#e0e0e0', '#c4a6a6', '#c99292', '#FFFFFF', '#000080', '#008000', '#5ee2a0', '#aaaa31', '#ffab0d', '#ff0000', '#800000', '#ff00ff', '#800080', '#0000ff', '#08f708', '#baffdd', '#c1c16f', '#f7ca75', '#ff8484', '#c33939', '#ff9bff', '#774c77', '#6a6aff', '#9dff9d', '#90d5b2', '#ffff00', '#ffe0a5', '#ffbaba', '#be6f6f', '#ffceff', '#c3a2c3'];
    Froalaeditor.ICON_TEMPLATES = {
      font_awesome: '<i class="fa fa-[NAME]" aria-hidden="true"></i>,',
      font_awesome_5: '<i class="fas fa-[FA5NAME]" aria-hidden="true"></i>',
      font_awesome_5s: '<i class="far fa-[FA5NAME]" aria-hidden="true"></i>',
      text: '<span style="">[NAME]</span>',
      image: '<img width="100%" height="100%" src="[PATH]" alt="">',
      svg: '<svg class="fr-svg" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="[PATH]"></path></svg>'
    }

   // Froalaeditor.DefineIconTemplate('image', '<img width="100%" height="100%" src="[PATH]" alt="">');
    Froalaeditor.DefineIcon('versions', {NAME: 'Versions', template: 'image', PATH: versionIcon});
    Froalaeditor.RegisterCommand('versions', {
      title: 'Versions',
      focus: false,
      undo: false,
      refreshAfterCallback: false,
      callback: function () {
      }
    });

    Froalaeditor.DefineIcon('undo', {template: 'image', PATH: undoIcon});
    Froalaeditor.RegisterCommand('undo', {
      title: 'Undo',
    });

    Froalaeditor.DefineIcon('redo', {template: 'image', PATH: redoIcon});
    Froalaeditor.RegisterCommand('redo', {
      title: 'Redo',
    });

    Froalaeditor.DefineIcon('clearFormatting', {template: 'image', PATH: crossLineOnTextIcon});
    Froalaeditor.RegisterCommand('clearFormatting', {
      title: '',
    });

    Froalaeditor.DefineIcon('strikeThrough', {template: 'image', PATH: HorizonteLineOnTextIcon});
    Froalaeditor.RegisterCommand('strikeThrough', {
      title: '',
    });

    Froalaeditor.DefineIcon('insertHR', {template: 'image', PATH: HorijentalLineIcon});
    Froalaeditor.RegisterCommand('insertHR', {
      title: '',
    });

    Froalaeditor.DefineIcon('bold', {template: 'image', PATH: boldIcon});
    Froalaeditor.RegisterCommand('bold', {
      type: 'button',
      toggle: true,
      refresh: function refresh($btn) {
        var format = this.format.is('strong');
        $btn.toggleClass('fr-active', format).attr('aria-pressed', format);
      }
    });

    Froalaeditor.DefineIcon('underline', {template: 'image', PATH: underlineIcon});
    Froalaeditor.RegisterCommand('underline', {
      title: '',
      toggle: true,
      refresh: function refresh($btn) {
        var format = this.format.is('u');
        $btn.toggleClass('fr-active', format).attr('aria-pressed', format);
      }
    });

    Froalaeditor.DefineIcon('italic', {template: 'image', PATH: crossWordIcon});
    Froalaeditor.RegisterCommand('italic', {
      title: '',
      toggle: true,
      refresh: function refresh($btn) {
        var format = this.format.is('em');
        $btn.toggleClass('fr-active', format).attr('aria-pressed', format);
      }
    });

    Froalaeditor.DefineIcon('formatOL', {NAME: 'Ordered List', template: 'image', PATH: orderListIcon});
    Froalaeditor.DefineIcon('formatOLSimple', {NAME: 'Ordered List', template: 'image', PATH: orderListIcon});
    Froalaeditor.RegisterCommand('formatOLSimple', {
      title: '',
      type: 'dropdown',
      html: function html() {
        var c = '<ul class="fr-dropdown-list" role="presentation">';
        var options = {
          'default': 'Default',
          'lower-alpha': 'Lower Alpha',
          'lower-greek': 'Lower Greek',
          'lower-roman': 'Lower Roman',
          'upper-alpha': 'Upper Alpha',
          'upper-roman': 'Upper Roman'
        };

        for (var val in options) {
          c += "<li role=\"presentation\"><a class=\"fr-command\" tabIndex=\"-1\" role=\"option\" data-cmd=\"formatOLSimple\" data-param1=\"".concat(val, "\" \n title=\"").concat(options[val], "\">").concat(options[val], "</a></li>");
        }

        c += '</ul>';
        return c;
      },
      callback: function callback(cmd, param) {
        this.lists.format('OL', param);
      },
      refresh: function refresh($btn) {
        this.lists.refresh($btn, 'OL');
      },
      refreshOnShow: function refreshOnShow($btn, $dropdown) {
        
      },
      plugin: 'lists'
    });

    Froalaeditor.DefineIcon('formatUL', {template: 'image', PATH: unorderListIcon});
    Froalaeditor.RegisterCommand('formatUL', {
      title: '',
      type: 'dropdown',
      html: function html() {
        console.log('html');
        var c = '<ul class="fr-dropdown-list" role="presentation">';
        var options = {
          'default': 'Default',
          circle: 'Circle',
          disc: 'Disc',
          square: 'Square'
        };

        for (var val in options) {
          c += "<li role=\"presentation\"><a class=\"fr-command\" tabIndex=\"-1\" role=\"option\" data-cmd=\"formatUL\" data-param1=\"".concat(val, "\" \n title=\"").concat(options[val], "\">").concat(options[val], "</a></li>");
        }

        c += '</ul>';
        return c;
      },
      refresh: function refresh($btn) {
        this.lists.refresh($btn, 'UL');
      },
      callback: function callback(cmd, param) {
        this.lists.format('UL', param);
      },
      plugin: 'lists'
    });

    Froalaeditor.DefineIcon('textColor', {template: 'image', PATH: textColorIcon});
    Froalaeditor.RegisterCommand('textColor', {
      title: '',
      undo: false,
      focus: true,
      refreshOnCallback: false,
      popup: true,
      callback: function callback() {
        this.opts.colorsText =  colorText;
        this.opts.colorsStep = 9;
        this.opts.colorsButtons = ['Done'];
        if (!this.popups.isVisible('textColor.picker')) {
          this.colors.showColorsPopup('textColor');
        } else {
          if (this.$el.find('.fr-marker').length) {
            this.events.disableBlur();
            this.selection.restore();
          }

          this.popups.hide('textColor.picker');
        }
      }
    });

    Froalaeditor.DefineIcon('backgroundColor', {template: 'image', PATH: colorPickerIcon});
    Froalaeditor.RegisterCommand('backgroundColor', {
      title: '',
      undo: false,
      focus: true,
      refreshOnCallback: false,
      popup: true,
      callback: function callback() {
        this.opts.colorsBackground = colorBackground;
        this.opts.colorsStep = 9;
        if (!this.popups.isVisible('backgroundColor.picker')) {
          this.colors.showColorsPopup('backgroundColor');
        } else {
          if (this.$el.find('.fr-marker').length) {
            this.events.disableBlur();
            this.selection.restore();
          }

          this.popups.hide('backgroundColor.picker');
        }
      }
    });

    Froalaeditor.DefineIcon('fontSize', {NAME: '14', template: 'text'});
    Froalaeditor.RegisterCommand('fontSize', {
      type: 'dropdown',
      template: 'text',
      displaySelection: function displaySelection(editor) {
        editor.opts.fontSizeSelection = '14px';
        return editor.opts.fontSizeSelection;
      },
      displaySelectionWidth: 17,
      defaultSelection: function defaultSelection(editor) {
        return editor.opts.fontSizeDefaultSelection;
      },
      html: function html() {
        var c = '<ul class="fr-dropdown-list" role="presentation">';
        var options = this.opts.fontSize;

        for (var i = 0; i < options.length; i++) {
          var val = options[i];
          c += "<li role=\"presentation\"><a class=\"fr-command\" tabIndex=\"-1\" role=\"option\" data-cmd=\"fontSize\" data-param1=\"".concat(val).concat(this.opts.fontSizeUnit, "\" title=\"").concat(val, "\">").concat(val, "</a></li>");
        }

        c += '</ul>';
        return c;
      },
      callback: function callback(cmd, val) {
        this.opts.fontSizeSelection = val;  
        this.fontSize.apply(val);
      },
      refresh: function refresh($btn) {
        this.fontSize.refresh($btn);
      },
      refreshOnShow: function refreshOnShow($btn, $dropdown) {
        this.fontSize.refreshOnShow($btn, $dropdown);
      },
      plugin: 'fontSize'
    });

    Froalaeditor.DefineIcon('fontMinus', {template: 'image', PATH: minuseIcon});
    Froalaeditor.RegisterCommand('fontMinus', {
      type: 'button',
      title: '',
      callback: function callback() {
        this.opts.fontSizeSelection = (parseInt(this.opts.fontSizeSelection) - 1) + 'px';
        this.fontSize.apply(this.opts.fontSizeSelection);
      }
    });

    Froalaeditor.DefineIcon('fontPlus', {template: 'image', PATH: pluseIcon});
    Froalaeditor.RegisterCommand('fontPlus', {
      type: 'button',
      title: '',
      callback: function callback() {
        this.opts.fontSizeSelection = (parseInt(this.opts.fontSizeSelection) + 1) + 'px';
        this.fontSize.apply(this.opts.fontSizeSelection);
      }
    });

    Froalaeditor.DefineIcon('alignLeft', {template: 'image', PATH: leftSideTextIcon});
    Froalaeditor.RegisterCommand('alignLeft', {
      type: 'button',
      title: '',
      callback: function callback() {
        this.align.apply('left');
      },
      refresh: function refresh($btn) {
        this.align.refreshForToolbar($btn);
      },
      plugin: 'align'
    });

    Froalaeditor.DefineIcon('alignRight', {template: 'image', PATH: rightSideTextIcon});
    Froalaeditor.RegisterCommand('alignRight', {
      type: 'button',
      title: '',
      callback: function callback() {
        this.align.apply('right');
      },
      refresh: function refresh($btn) {
        this.align.refreshForToolbar($btn);
      },
      plugin: 'align'
    });

    Froalaeditor.DefineIcon('alignCenter', {template: 'image', PATH: centerTextIcon});
    Froalaeditor.RegisterCommand('alignCenter', {
      type: 'button',
      title: '',
      callback: function callback() {
        this.align.apply('center');
      },
      refresh: function refresh($btn) {
        this.align.refreshForToolbar($btn);
      },
      plugin: 'align'
    });

    Froalaeditor.DefineIcon('alignJustify', {template: 'image', PATH: fixAlignTextIcon});
    Froalaeditor.RegisterCommand('alignJustify', {
      type: 'button',
      title: '',
      callback: function callback() {
        this.align.apply('justify');
      },
      refresh: function refresh($btn) {
        this.align.refreshForToolbar($btn);
      },
      plugin: 'align'
    });

    Froalaeditor.DefineIcon('fontFamily', {NAME: 'Arial', template: 'text'});
    Froalaeditor.RegisterCommand('fontFamily', {
      type: 'dropdown',
      displaySelection: function displaySelection(editor) {
        return editor.opts.fontFamilySelection;
      },
      defaultSelection: function defaultSelection(editor) {
        return editor.opts.fontFamilyDefaultSelection;
      },
      displaySelectionWidth: 120,
      html: function html() {
        var c = '<ul class="fr-dropdown-list" role="presentation">';
        var options = this.opts.fontFamily;

        for (var val in options) {
          if (options.hasOwnProperty(val)) {
            c += "<li role=\"presentation\"><a class=\"fr-command\" tabIndex=\"-1\" role=\"option\" data-cmd=\"fontFamily\" data-param1=\"".concat(val, "\" \n        style=\"font-family: ").concat(val, "\" title=\"").concat(options[val], "\">").concat(options[val], "</a></li>");
          }
        }

        c += '</ul>';
        return c;
      },
      callback: function callback(cmd, val) {
        this.opts.fontFamilySelection = val;
        this.fontFamily.apply(val);
      },
      refresh: function refresh($btn) {
        this.fontFamily.refresh($btn);
      },
      refreshOnShow: function refreshOnShow($btn, $dropdown) {
        this.fontFamily.refreshOnShow($btn, $dropdown);
      },
      plugin: 'fontFamily'
    });

    Froalaeditor.DefineIcon('paragraphFormat', {NAME: 'Normal', template: 'text'});
    Froalaeditor.RegisterCommand('paragraphFormat', {
      type: 'dropdown',
      displaySelection: function displaySelection(editor) {
        return editor.opts.paragraphFormatSelection;
      },
      defaultSelection: function defaultSelection(editor) {
        return editor.language.translate(editor.opts.paragraphDefaultSelection);
      },
      displaySelectionWidth: 80,
      html: function html() {
        var c = '<ul class="fr-dropdown-list" role="presentation">';
        var options = this.opts.paragraphFormat;

        for (var val in options) {
          if (options.hasOwnProperty(val)) {
            var shortcut = this.shortcuts.get('paragraphFormat.' + val);

            if (shortcut) {
              shortcut = '<span class="fr-shortcut">' + shortcut + '</span>';
            } else {
              shortcut = '';
            }
            c += '<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="paragraphFormat" data-param1="' + val + '" title="' + this.language.translate(options[val]) + '">' + this.language.translate(options[val]) + '</a></li>';
          }
        }

        c += '</ul>';
        return c;
      },
      callback: function callback(cmd, val) {
        this.opts.paragraphFormatSelection = val;
        this.paragraphFormat.apply(val);
      },
      refresh: function refresh($btn) {
        this.paragraphFormat.refresh($btn);
      },
      refreshOnShow: function refreshOnShow($btn, $dropdown) {
        this.paragraphFormat.refreshOnShow($btn, $dropdown);
      },
      plugin: 'paragraphFormat'
    });

    Froalaeditor.DefineIcon('indent', {template: 'image', PATH: tebLeftIcon});
    Froalaeditor.RegisterCommand('indent', {
      title: '',
    });

    Froalaeditor.DefineIcon('outdent', {template: 'image', PATH: tebRightIcon});
    Froalaeditor.RegisterCommand('outdent', {
      title: '',
    });

    Froalaeditor.DefineIcon('emoticons', {template: 'image', PATH: eiconIcon});
    Froalaeditor.RegisterCommand('emoticons', {
      title: '',
      undo: false,
      focus: true,
      refreshAfterCallback: false,
      popup: true,
      callback: function callback() {
        if (this.popups.isVisible('emoticons')) {
          if (this.$el.find('.fr-marker').length) {
            this.events.disableBlur();
            this.selection.restore();
          }

          this.popups.hide('emoticons');
        } else {
          this.emoticons.showEmoticonsPopup();
        }
      },
      plugin: 'emoticons'
    });

    Froalaeditor.DefineIcon('specialCharacters', {template: 'image', PATH: starIcon});
    Froalaeditor.RegisterCommand('specialCharacters', {
      title: '',
      icon: 'specialCharacters',
      undo: false,
      focus: false,
      popup: true,
      refreshAfterCallback: false,
      plugin: 'specialCharacters',
      showOnMobile: true,
      callback: function callback() {
        if (!this.popups.isVisible('specialCharacters')) {
          this.specialCharacters.showSpecialCharsPopup();
        } else {
          if (this.$el.find('.fr-marker')) {
            this.events.disableBlur();
            this.selection.restore();
          }

          this.popups.hide('specialCharacters');
        }
      }
    });

    Froalaeditor.DefineIcon('superscript', {template: 'image', PATH: x2upIcon});
    Froalaeditor.RegisterCommand('superscript', {
      title: '',
    });

    Froalaeditor.DefineIcon('subscript', {template: 'image', PATH: x2DownIcon});
    Froalaeditor.RegisterCommand('subscript', {
      title: '',
    });

    Froalaeditor.DefineIcon('insertTable', {template: 'image', PATH: boxIcon});
    Froalaeditor.RegisterCommand('insertTable', {
      title: '',
      undo: false,
      focus: true,
      refreshOnCallback: false,
      popup: true,
      callback: function callback() {
        if (!this.popups.isVisible('table.insert')) {
          this.table.showInsertPopup();
        } else {
          if (this.$el.find('.fr-marker').length) {
            this.events.disableBlur();
            this.selection.restore();
          }

          this.popups.hide('table.insert');
        }
      },
      plugin: 'table'
    });

    Froalaeditor.DefineIcon('lineSpacing', {template: 'image', PATH: lignSpaceIcon});
    Froalaeditor.RegisterCommand('lineSpacing', {
      type: 'dropdown',
      html: function html() {
        var c = '<ul class="fr-dropdown-list" role="presentation">';
        var options = {
          'default': 'Default',
          'single': 'Single',
          '1-15': '1.15',
          '1-5': '1.5',
          'double': 'Double',
        };

        for (var val in options) {
          c += "<li role=\"presentation\"><a class=\"fr-command\" tabIndex=\"-1\" role=\"option\" data-cmd=\"lineSpacing\" data-param1=\"".concat(val, "\" \n title=\"").concat(options[val], "\">").concat(options[val], "</a></li>");
        }

        c += '</ul>';
        return c;
      },
      callback: function callback(cmd, val) {
      },
      refresh: function refresh($btn) {
      },
      refreshOnShow: function refreshOnShow($btn, $dropdown) {
      }
    });

    Froalaeditor.DefineIcon('addTask', {template: 'image', PATH: checkBoxIcon});
    Froalaeditor.RegisterCommand('addTask', {
      title: '',
    });

    Froalaeditor.DefineIcon('quote', {template: 'image', PATH: qoutIcon});
    Froalaeditor.RegisterCommand('quote', {
      title: '',
      type: 'dropdown',
      html: function html() {
        var c = '<ul class="fr-dropdown-list" role="presentation">';
        var options = {
          increase: 'Increase',
          decrease: 'Decrease'
        };

        for (var val in options) {
          if (options.hasOwnProperty(val)) {
            var shortcut = this.shortcuts.get("quote.".concat(val));
            c += "<li role=\"presentation\"><a class=\"fr-command fr-active ".concat(val, "\" tabIndex=\"-1\" role=\"option\" data-cmd=\"quote\" data-param1=\"").concat(val, "\" title=\"").concat(options[val], "\">").concat(this.language.translate(options[val])).concat(shortcut ? "<span class=\"fr-shortcut\">".concat(shortcut, "</span>") : '', "</a></li>");
          }
        }

        c += '</ul>';
        return c;
      },
      callback: function callback(cmd, val) {
        this.quote.apply(val);
      },
      plugin: 'quote'
    });

    Froalaeditor.DefineIcon('Fork Doc', {NAME: "Fork Doc", template: "text"});
    Froalaeditor.RegisterCommand('Fork Doc', {
      title: '',
    });

    ////////quick insert
    
    Froalaeditor.DefineIcon('insertImage', {NAME: "Insert Image", template: 'image', PATH: insertImageIcon});
    // Froalaeditor.RegisterCommand('insertImage', {
    //   title: '',
    // });
    
    Froalaeditor.DefineIcon('getPDF', {NAME: "Export PDF", template: 'image', PATH: exportPdfIcon});
    // Froalaeditor.RegisterCommand('getPDF', {
    //   title: '',
    // });
    
    Froalaeditor.DefineIcon('print', {NAME: "Print Doc", template: 'image', PATH: printDocIcon});
    // Froalaeditor.RegisterCommand('print', {
    //   title: '',
    // });
    
    // Froalaeditor.DefineIcon('insertImage', {NAME: "Insert Image", PATH: startCallInVideoIcon});
    // Froalaeditor.RegisterCommand('insertImage', {
    //   title: '',
    // });
    
    // Froalaeditor.DefineIcon('insertImage', {NAME: "Insert Image", PATH: addCommentIcon});
    // Froalaeditor.RegisterCommand('insertImage', {
    //   title: '',
    // });
    
    // Froalaeditor.DefineIcon('insertImage', {NAME: "Insert Image", PATH: sendMessageIcon});
    // Froalaeditor.RegisterCommand('insertImage', {
    //   title: '',
    // });
    
    Froalaeditor.DefineIcon('insertVideo', {NAME: "Insert Video", template: 'image', PATH: addVideoIcon});
    // Froalaeditor.RegisterCommand('insertVideo', {
    //   title: '',
    // });

    this.config = {
      pluginsEnabled: null, 
      language: 'en',
      listAdvancedTypes: true, 
      toolbarButtons: [
            ['versions'],
            ['undo', 'redo', 'clearFormatting', 'strikeThrough', 'insertHR'], 
            ['paragraphFormat', 'fontFamily', 'bold', 'underline', 'italic', 'formatOLSimple', 'formatUL', 'textColor', 'backgroundColor'], 
            ['fontSize', 'fontMinus', 'fontPlus', 'alignLeft', 'alignRight', 'alignCenter', 'alignJustify'], 
            ['indent', 'outdent', 'emoticons', 'specialCharacters'], 
            ['superscript', 'subscript', 'insertTable', 'lineSpacing'], 
            ['addTask', 'quote', 'Fork Doc']
        ]
    };

    this.state = {
      content: `<div id='edit' style="margin-top: 30px;">
                  <h1>Full Featured</h1>

                  <p>This is the full featured Froala WYSIWYG HTML editor.</p>

                  <img class="fr-fir fr-dii" src="./image.jpg" alt="Old Clock" width="300" />Lorem <strong>ipsum</strong>
                  dolor sit amet, consectetur <strong>adipiscing <em>elit.</em> Donec</strong> facilisis diam in odio iaculis
                  blandit. Nunc eu mauris sit amet purus <strong>viverra</strong><em> gravida</em> ut a dui.<br />
                  <ul>
                    <li>Vivamus nec rutrum augue, pharetra faucibus purus. Maecenas non orci sagittis, vehicula lorem et, dignissim
                      nunc.</li>
                    <li>Suspendisse suscipit, diam non varius facilisis, enim libero tincidunt magna, sit amet iaculis eros libero
                      sit amet eros. Vestibulum a rhoncus felis.<ol>
                        <li>Nam lacus nulla, consequat ac lacus sit amet, accumsan pellentesque risus. Aenean viverra mi at urna
                          mattis fermentum.</li>
                        <li>Curabitur porta metus in tortor elementum, in semper nulla ullamcorper. Vestibulum mattis tempor tortor
                          quis gravida. In rhoncus risus nibh. Nullam condimentum dapibus massa vel fringilla. Sed hendrerit sed est
                          quis facilisis. Ut sit amet nibh sem. Pellentesque imperdiet mollis libero.</li>
                      </ol>
                    </li>
                  </ul>

                  <table style="width: 100%;">
                    <tr>
                      <td style="width: 25%;"></td>
                      <td style="width: 25%;"></td>
                      <td style="width: 25%;"></td>
                      <td style="width: 25%;"></td>
                    </tr>
                    <tr>
                      <td style="width: 25%;"></td>
                      <td style="width: 25%;"></td>
                      <td style="width: 25%;"></td>
                      <td style="width: 25%;"></td>
                    </tr>
                  </table>

                  <a href="http://google.com" title="Aenean sed hendrerit">Aenean sed hendrerit</a> velit. Nullam eu mi dolor.
                  Maecenas et erat risus. Nulla ac auctor diam, non aliquet ante. Fusce ullamcorper, ipsum id tempor lacinia, sem
                  tellus malesuada libero, quis ornare sem massa in orci. Sed dictum dictum tristique. Proin eros turpis, ultricies
                  eu sapien eget, ornare rutrum ipsum. Pellentesque eros nisl, ornare nec ipsum sed, aliquet sollicitudin erat.
                  Nulla tincidunt porta <strong>vehicula.</strong><br />
                </div>`
    };
    this.handleModelChange = this.handleModelChange.bind(this);
  }

  handleModelChange (model) {
    this.setState({
      content: model
    })
  }

  render () {
    return(
      <FroalaEditor
        tag='textarea'
        model={this.state.content}
        onModelChange={this.handleModelChange}
        config={this.config}
      />
    );
  }
}

ReactDOM.render(<EditorComponent/>, document.getElementById('editor'));
