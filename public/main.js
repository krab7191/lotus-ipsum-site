
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
}