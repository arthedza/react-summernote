/*!
 * 
 * Super simple WYSIWYG editor v0.8.18
 * https://summernote.org
 *
 *
 * Copyright 2013- Alan Hong and other contributors
 * Summernote may be freely distributed under the MIT license.
 *
 * Date: 2021-04-09T07:14Z
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

/***/ 242:
/***/ (() => {

(function ($) {
  $.extend($.summernote.lang, {
    'de-DE': {
      font: {
        bold: 'Fett',
        italic: 'Kursiv',
        underline: 'Unterstrichen',
        clear: 'Zurücksetzen',
        height: 'Zeilenhöhe',
        name: 'Schriftart',
        strikethrough: 'Durchgestrichen',
        subscript: 'Tiefgestellt',
        superscript: 'Hochgestellt',
        size: 'Schriftgröße'
      },
      image: {
        image: 'Bild',
        insert: 'Bild einfügen',
        resizeFull: 'Originalgröße',
        resizeHalf: '1/2 Größe',
        resizeQuarter: '1/4 Größe',
        floatLeft: 'Linksbündig',
        floatRight: 'Rechtsbündig',
        floatNone: 'Kein Textfluss',
        shapeRounded: 'Abgerundete Ecken',
        shapeCircle: 'Kreisförmig',
        shapeThumbnail: '"Vorschaubild"',
        shapeNone: 'Kein Rahmen',
        dragImageHere: 'Bild hierher ziehen',
        dropImage: 'Bild oder Text nehmen',
        selectFromFiles: 'Datei auswählen',
        maximumFileSize: 'Maximale Dateigröße',
        maximumFileSizeError: 'Maximale Dateigröße überschritten',
        url: 'Bild URL',
        remove: 'Bild entfernen',
        original: 'Original'
      },
      video: {
        video: 'Video',
        videoLink: 'Videolink',
        insert: 'Video einfügen',
        url: 'Video URL',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion oder Youku)'
      },
      link: {
        link: 'Link',
        insert: 'Link einfügen',
        unlink: 'Link entfernen',
        edit: 'Bearbeiten',
        textToDisplay: 'Anzeigetext',
        url: 'Link URL',
        openInNewWindow: 'In neuem Fenster öffnen',
        useProtocol: 'Standardprotokoll verwenden'
      },
      table: {
        table: 'Tabelle',
        addRowAbove: '+ Zeile oberhalb',
        addRowBelow: '+ Zeile unterhalb',
        addColLeft: '+ Spalte links',
        addColRight: '+ Spalte rechts',
        delRow: 'Zeile löschen',
        delCol: 'Spalte löschen',
        delTable: 'Tabelle löschen'
      },
      hr: {
        insert: 'Horizontale Linie einfügen'
      },
      style: {
        style: 'Stil',
        normal: 'Normal',
        p: 'Normal',
        blockquote: 'Zitat',
        pre: 'Quellcode',
        h1: 'Überschrift 1',
        h2: 'Überschrift 2',
        h3: 'Überschrift 3',
        h4: 'Überschrift 4',
        h5: 'Überschrift 5',
        h6: 'Überschrift 6'
      },
      lists: {
        unordered: 'Aufzählung',
        ordered: 'Nummerierung'
      },
      options: {
        help: 'Hilfe',
        fullscreen: 'Vollbild',
        codeview: 'Quellcode anzeigen'
      },
      paragraph: {
        paragraph: 'Absatz',
        outdent: 'Einzug verkleinern',
        indent: 'Einzug vergrößern',
        left: 'Links ausrichten',
        center: 'Zentriert ausrichten',
        right: 'Rechts ausrichten',
        justify: 'Blocksatz'
      },
      color: {
        recent: 'Letzte Farbe',
        more: 'Weitere Farben',
        background: 'Hintergrundfarbe',
        foreground: 'Schriftfarbe',
        transparent: 'Transparenz',
        setTransparent: 'Transparenz setzen',
        reset: 'Zurücksetzen',
        resetToDefault: 'Auf Standard zurücksetzen'
      },
      shortcut: {
        shortcuts: 'Tastenkürzel',
        close: 'Schließen',
        textFormatting: 'Textformatierung',
        action: 'Aktion',
        paragraphFormatting: 'Absatzformatierung',
        documentStyle: 'Dokumentenstil',
        extraKeys: 'Weitere Tasten'
      },
      help: {
        insertParagraph: 'Absatz einfügen',
        undo: 'Letzte Anweisung rückgängig',
        redo: 'Letzte Anweisung wiederholen',
        tab: 'Einzug hinzufügen',
        untab: 'Einzug entfernen',
        bold: 'Schrift Fett',
        italic: 'Schrift Kursiv',
        underline: 'Unterstreichen',
        strikethrough: 'Durchstreichen',
        removeFormat: 'Entfernt Format',
        justifyLeft: 'Linksbündig',
        justifyCenter: 'Mittig',
        justifyRight: 'Rechtsbündig',
        justifyFull: 'Blocksatz',
        insertUnorderedList: 'Unnummerierte Liste',
        insertOrderedList: 'Nummerierte Liste',
        outdent: 'Aktuellen Absatz ausrücken',
        indent: 'Aktuellen Absatz einrücken',
        formatPara: 'Formatiert aktuellen Block als Absatz (P-Tag)',
        formatH1: 'Formatiert aktuellen Block als H1',
        formatH2: 'Formatiert aktuellen Block als H2',
        formatH3: 'Formatiert aktuellen Block als H3',
        formatH4: 'Formatiert aktuellen Block als H4',
        formatH5: 'Formatiert aktuellen Block als H5',
        formatH6: 'Formatiert aktuellen Block als H6',
        insertHorizontalRule: 'Fügt eine horizontale Linie ein',
        'linkDialog.show': 'Zeigt den Linkdialog'
      },
      history: {
        undo: 'Rückgängig',
        redo: 'Wiederholen'
      },
      specialChar: {
        specialChar: 'Sonderzeichen',
        select: 'Zeichen auswählen'
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
/******/ 	return __webpack_require__(242);
/******/ })()
;
});