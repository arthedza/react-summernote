/*!
 * 
 * Super simple WYSIWYG editor v0.8.18
 * https://summernote.org
 *
 *
 * Copyright 2013- Alan Hong and other contributors
 * Summernote may be freely distributed under the MIT license.
 *
 * Date: 2021-04-07T14:23Z
 *
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 933:
/***/ (() => {

(function ($) {
  $.extend($.summernote.lang, {
    'vi-VN': {
      font: {
        bold: 'In Đậm',
        italic: 'In Nghiêng',
        underline: 'Gạch dưới',
        clear: 'Bỏ định dạng',
        height: 'Chiều cao dòng',
        name: 'Phông chữ',
        strikethrough: 'Gạch ngang',
        subscript: 'Subscript',
        superscript: 'Superscript',
        size: 'Cỡ chữ'
      },
      image: {
        image: 'Hình ảnh',
        insert: 'Chèn',
        resizeFull: '100%',
        resizeHalf: '50%',
        resizeQuarter: '25%',
        floatLeft: 'Trôi về trái',
        floatRight: 'Trôi về phải',
        floatNone: 'Không trôi',
        shapeRounded: 'Shape: Rounded',
        shapeCircle: 'Shape: Circle',
        shapeThumbnail: 'Shape: Thumbnail',
        shapeNone: 'Shape: None',
        dragImageHere: 'Thả Ảnh ở vùng này',
        dropImage: 'Drop image or Text',
        selectFromFiles: 'Chọn từ File',
        maximumFileSize: 'Maximum file size',
        maximumFileSizeError: 'Maximum file size exceeded.',
        url: 'URL',
        remove: 'Xóa',
        original: 'Original'
      },
      video: {
        video: 'Video',
        videoLink: 'Link đến Video',
        insert: 'Chèn Video',
        url: 'URL',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion và Youku)'
      },
      link: {
        link: 'Link',
        insert: 'Chèn Link',
        unlink: 'Gỡ Link',
        edit: 'Sửa',
        textToDisplay: 'Văn bản hiển thị',
        url: 'URL',
        openInNewWindow: 'Mở ở Cửa sổ mới'
      },
      table: {
        table: 'Bảng',
        addRowAbove: 'Add row above',
        addRowBelow: 'Add row below',
        addColLeft: 'Add column left',
        addColRight: 'Add column right',
        delRow: 'Delete row',
        delCol: 'Delete column',
        delTable: 'Delete table'
      },
      hr: {
        insert: 'Chèn'
      },
      style: {
        style: 'Kiểu chữ',
        p: 'Chữ thường',
        blockquote: 'Đoạn trích',
        pre: 'Mã Code',
        h1: 'H1',
        h2: 'H2',
        h3: 'H3',
        h4: 'H4',
        h5: 'H5',
        h6: 'H6'
      },
      lists: {
        unordered: 'Liệt kê danh sách',
        ordered: 'Liệt kê theo thứ tự'
      },
      options: {
        help: 'Trợ giúp',
        fullscreen: 'Toàn Màn hình',
        codeview: 'Xem Code'
      },
      paragraph: {
        paragraph: 'Canh lề',
        outdent: 'Dịch sang trái',
        indent: 'Dịch sang phải',
        left: 'Canh trái',
        center: 'Canh giữa',
        right: 'Canh phải',
        justify: 'Canh đều'
      },
      color: {
        recent: 'Màu chữ',
        more: 'Mở rộng',
        background: 'Màu nền',
        foreground: 'Màu chữ',
        transparent: 'trong suốt',
        setTransparent: 'Nền trong suốt',
        reset: 'Thiết lập lại',
        resetToDefault: 'Trở lại ban đầu'
      },
      shortcut: {
        shortcuts: 'Phím tắt',
        close: 'Đóng',
        textFormatting: 'Định dạng Văn bản',
        action: 'Hành động',
        paragraphFormatting: 'Định dạng',
        documentStyle: 'Kiểu văn bản',
        extraKeys: 'Extra keys'
      },
      help: {
        'insertParagraph': 'Insert Paragraph',
        'undo': 'Undoes the last command',
        'redo': 'Redoes the last command',
        'tab': 'Tab',
        'untab': 'Untab',
        'bold': 'Set a bold style',
        'italic': 'Set a italic style',
        'underline': 'Set a underline style',
        'strikethrough': 'Set a strikethrough style',
        'removeFormat': 'Clean a style',
        'justifyLeft': 'Set left align',
        'justifyCenter': 'Set center align',
        'justifyRight': 'Set right align',
        'justifyFull': 'Set full align',
        'insertUnorderedList': 'Toggle unordered list',
        'insertOrderedList': 'Toggle ordered list',
        'outdent': 'Outdent on current paragraph',
        'indent': 'Indent on current paragraph',
        'formatPara': 'Change current block\'s format as a paragraph(P tag)',
        'formatH1': 'Change current block\'s format as H1',
        'formatH2': 'Change current block\'s format as H2',
        'formatH3': 'Change current block\'s format as H3',
        'formatH4': 'Change current block\'s format as H4',
        'formatH5': 'Change current block\'s format as H5',
        'formatH6': 'Change current block\'s format as H6',
        'insertHorizontalRule': 'Insert horizontal rule',
        'linkDialog.show': 'Show Link Dialog'
      },
      history: {
        undo: 'Lùi lại',
        redo: 'Làm lại'
      },
      specialChar: {
        specialChar: 'SPECIAL CHARACTERS',
        select: 'Select Special characters'
      }
    }
  });
})(jQuery);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(933);
/******/ })()
;
});