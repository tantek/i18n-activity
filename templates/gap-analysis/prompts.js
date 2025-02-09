// prompts will be inserted into the title attributes of various headers after page upload


contentPrompts = {
'writing_mode':'In what direction does text flow along a line and across a page? (See  the Bidirectional text section if the basic direction is right-to-left.)  If the script uses vertically oriented text, what are the requirements? What about if you mix vertical text with scripts that are normally only horizontal? Do you need a switch to use different characters in vertical vs. horizontal text? Does the browser support short runs of horizontal text in vertical lines (tate-chu-yoko in Japanese) as expected? Is the orientation of characters and the directional ordering of characters supported as needed?',

'bidi_text':'If the general inline direction is right-to-left, are there any issues when handling that? Where the inline direction of text is mixed, is this bidirectional text adequately supported? What about numbers and expressions? Do the Unicode bidi controls and HTML markup provide the support needed? Is isolation of directional runs problematic?',

"encoding":'Are there any character repertoire issues preventing use of this script on the Web? Do variation selectors need attention? Are there any other encoding-related issues?',

"fonts":'Do the standard fallback fonts used in browsers (eg. serif, sans-serif, cursive, etc.) match expectations? Are special font or OpenType features needed for this script that are not available?',

"letterforms":'This covers ways of modifying the glyphs, such as for italicisation, bolding, oblique, etc. Do italic fonts lean in the right direction? Is synthesised italicisation problematic? Are there other problems relating to bolding or italicisation - perhaps relating to generalised assumptions of applicability?',

"glyphs":'Does the script in question require additional user control features to support alterations to the position or shape of glyphs, for example adjusting the distance between the base text and diacritics, or changing the glyphs used in a systematic way? Do you need to be able to compose/decompose conjuncts, or show characters that are otherwise hidden, etc?',

"cursive":'If this script is cursive (eg. Arabic, N’Ko, Syriac, etc), are there problems or needed features related to the handling of cursive text? Do cursive links break if parts of a word are marked up or styled? Do Unicode joiner and non-joiner characters behave as expected?',

"baselines":'Does the browser support  requirements for baseline alignment between mixed scripts and in general?',

"transforms":'Does your script need special text transforms that are not supported? Does your script convert letters to uppercase, capitalised and lowercase alternatives according to your typographic needs? Do you need to to convert between half-width and full-width presentation forms?',

"segmentation":'This is about how text is divided into graphemes, words, sentences, etc., and behaviour associated with that. Do Unicode grapheme clusters appropriately segment character units for your script? When you double- or triple-click on the text, is the expected range of characters highlighted? When you move through the text with the cursor, or backspace, etc. do you see the expected behaviour?  (Some of the answers to these questions may be picker up in other sections, such as line-breaking, or initial-letter styling.)',

"punctuation_etc":'Are there specific problems related to punctuation or the interaction of the text with punctuation (for example separation of punctuation from previous text, but allowing no line break between)? Are there issues related to handling of abbreviation, ellipsis, or iteration? Are there problems related to bracketing information or demarcating things such as proper nouns, etc?',

"text_decoration": 'This is about  ways of marking text (see also specific sections dedicated to quotations and inline notes/annotations). Is it possible to express emphasis or highlight content as expected? Bold, italic and under-/over-lines are not always appropriate, and some scripts have their own unique ways of doing things, that are not in the Western tradition at all. Text delimiters mark certain items or sections off from the main text, such as book names in Chinese, quotations, head markers in Tibetan, etc, and often involve the use of punctuation. Is there any behaviour that isn\'t well supported, such as overlines for numeric digits in Syriac?    Are there issues about the positioning or use of underlines? Some aspects related to the drawing of lines alongside or through text involve local typographic considerations. Do underlines need to be broken in special ways for this script? Do you need support for additional line shapes or widths? Does the distance or position of the lines relative to the text need to vary in ways that are not achievable? Are lines correctly drawn relative to vertical text?  ',

"quotations": 'Are there any issues when dealing with quotations marks, especially when nested? Should block quotes be indented or handled specially?',

"emphasis": 'How are emphasis and highlighting achieved? If lines or marks are drawn alongside, over or through the text, do they need to be a special distance from the text itself? Is it important to skip characters when underlining, etc? How do things change for vertically set text?',

"abbrev": 'What characters or other methods are used to indicate abbreviation, ellipsis & repetition?',

"inline_notes": 'The ruby spec currently specifies an initial subset of requirements for fine-tuning the typography of phonetic and semantic annotations of East Asian text, including furigana, pinyin and zhuyin fuhao systems.  Is is adequate for what it sets out to do?  What other controls will be needed in the future? What about other types of inline annotation, such as warichu? (For referent-type notes such as footnotes, see below.)',

"data_formats": 'If  the script has its own set of number digits, are there any issues in how they are used? Does the script or language use special format patterns that are problematic (eg. 12,34,000 in India)? What about date/time formats and selection - and are non-Gregorian calendars needed?  Do percent signs and other symbols associated with number work correctly, and do numbers need special decorations, (like in Ethiopic or Syriac)? How about the management of personal names, addresses, etc. in web pages: are there issues?',

"line_breaking": 'Does the browser capture the rules about the way text in your script wraps when it hits the end of a line? Does line-breaking wrap whole \'words\' at a time, or characters, or something else (such as syllables in Tibetan and Javanese)?  What characters should not appear at the end or start of a line, and what should be done to prevent that?',

"hyphenation": 'Is hyphenation used for your script, or something else? If hyphenation is used, does it work as expected? (Note, this is about line-end hyphenation when text is wrapped, rather than use of the hyphen and related characters as punctuation marks.)',

"justification": 'When text in a paragraph needs to have flush lines down both sides, does it follow the rules for your script? Does the script need assistance to conform to a grid pattern? Does your script allow punctuation to hang outside the text box at the start or end of a line? Where adjustments are need to make a line flush, how is that done? Do you shrink/stretch space between words and/or letters? Are word baselines stretched, as in Arabic? What about paragraph indents, or the need for logical alignment keywords, such as start/end, rather than left/right?',

"spacing": 'Some scripts create emphasis or other effects by spacing out the words, letters or syllables in a word. Are there requirements for this script/language that are unsupported? (For justification related spacing, see below.)',

"lists": 'The CSS Counter Styles specification describes a limited set of simple and complex styles for counters to be used in list numbering, chapter heading numbering, etc.The rules plus more counter styles (totalling around 120 for over 30 scripts) are listed in the document <a href="https://www.w3.org/TR/predefined-counter-styles/">Ready-made Counter Styles</a>. Do these cover your needs?  Are the details correct? Are there other aspects related to counters and lists that need to be addressed?',

"initials": 'Does the browser or ereader correctly handle special styling of the initial letter of a line or paragraph, such as for drop caps or similar? How about  the size relationship between the large letter and the lines alongide? where does the large letter anchor relative to the lines alongside? is it normal to include initial quote marks in the large letter? is the large letter really a syllable? etc. Are all of these things working as expected?',



"page_layout": 'How are the main text area and ancilliary areas positioned and defined? Are there any special requirements here, such as dimensions in characters for the Japanese kihon hanmen? The book cover for scripts that are read right-to-left scripts is on the right of the spine, rather than the left. Is that provided for? When content can flow vertically and to the left or right, how do you specify the location of objects, text, etc. relative to the flow? For example, keywords \'left\' and \'right\' are likely to need to be reversed for pages written in English and page written in Arabic. Do tables and grid layouts work as expected? How do columns work in vertical text? Can you mix block of vertical and horizontal text correctly? Does text scroll in the expected direction? Other topics that belong here include any local requirements for things such as printer marks, tables of contents and indexes.',

"grids_tables": 'Does the script have special requirements for character grids or tables?',

"footnotes_etc": 'Does your script have special requirements for footnotes, endnotes or other necessary annotations of this kind in the way needed for your culture? (There is a section above for purely inline annotations, such as ruby or warichu. This section is more about annotation systems that separate the reference marks and the content of the notes.)',

"headers_footers": 'Are there special conventions for page numbering, or the way that running headers and the like are handled?',

"interaction": 'Are vertical form controls well supported? In right-to-left scripts, is it possible to set the base direction for a form field? Is the scroll bar on the correct side? etc.',






}


function addPrompts () {
	// adds text for prompts
	
	var nodes = document.querySelectorAll('.promptStub')
	for (let i=0;i<nodes.length;i++) nodes[i].innerHTML = contentPrompts[nodes[i].id.replace(/^prompt-/,'')]
	}





































function setContentPrompts () {
	if (contentPrompts) {
		for (prompt in contentPrompts) {
			 if (document.getElementById(prompt)) document.getElementById(prompt).title = contentPrompts[prompt]
			 }
		}
	}