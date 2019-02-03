const addFilter = (domElement) => {
	return domElement.classList.add('is-primary');
}

const removeFilter = (domElement) => {
	return domElement.classList.remove('is-primary');
}


document.addEventListener('DOMContentLoaded', () => {
	const filterDiv = document.getElementById('filterDiv');
	filterDiv.addEventListener('click', (e) => {
		// This says the class is not selected
		if (!e.target.classList.contains('is-primary')) {
			for (let div of filterDiv.children) {
				console.log(div === e.target);
				div === e.target ? addFilter(div) : removeFilter(div);
			}
		}
		
	});
});
