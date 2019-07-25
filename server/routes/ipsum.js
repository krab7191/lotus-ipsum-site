'use strict';

const router = require('express').Router();
const generator = require('../generator');

// GET number of paragraphs of placeholder text
router.get('/:paragraphs', function (req, res) {
	let { paragraphs } = req.params;
	paragraphs < 1 && (paragraphs = 1);
	console.log(`GET ${paragraphs} paragraphs`);
	const text = generator.generatePlaceholderText(paragraphs);
	return res.json({ text: text });
});

module.exports = router;
