
function getParagraphs() {
	let numParas = document.getElementById('num-paras').value;
	numParas.length === 0 && (numParas = 3);
	numParas === '0' && (numParas = 3);
	console.log(`GET ${numParas} paras`);
	axios.get(`/api/ipsum/${numParas}`).then(({ data }) => {
		appendToPage(data.text + "");
	}).catch(err => {
		console.log(err);
	});
}

function appendToPage(text) {
	const cont = document.getElementById('text-container');
	cont.innerText = text.trim();
	cont.style.display = 'block';
	document.getElementById('copy-button').click();
}

function clipboardMsg(success) {
	const cont = document.getElementById('message-container');
	cont.innerText = success ? 'Copied to clipboard!' : 'Error copying!';
	cont.style.color = success ? 'green' : 'red';
	cont.style.visibility = 'visible';
	window.setTimeout(function () {
		cont.innerText = '';
		cont.style.color = 'white';
		cont.style.visibility = 'hidden';
	}, 2000);
}

(function () {
	const clippy = new ClipboardJS('#copy-button');

	clippy.on('success', function (e) {
		e.clearSelection();
		clipboardMsg(true);
	});

	clippy.on('error', function (e) {
		e.clearSelection();
		clipboardMsg(false);
	});
})();