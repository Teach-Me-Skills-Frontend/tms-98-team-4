function createPinterestAppCard(form, CardTable) {
	const card = document.createElement("div");
	card.classList.add("card", "rounded-3");

	const cardHeader = document.createElement("div");
	cardHeader.classList.add(
		"container-sm",
		"d-flex",
		"justify-content-between",
		"header_spacing"
	);
	cardHeader.append(form);
}
