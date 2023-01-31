const catalogueBar = document.getElementById('catalogue-block');
const popularItemsBar = document.getElementById('popular-items-block');
const popularCatsBar = document.getElementById('popular-cats-block');
const sliderBar = document.getElementById('promo-slider');
const showMoreBtn = document.getElementById('show-more');

const cartModal = document.querySelector('.add-cart_modal');
const loginModal = document.querySelector('.login-modal');
const closeModalBtn = document.querySelector('.close-modal');
const continueBtn = document.querySelector('.close-modal_btn')

const closeLoginBtn = document.querySelector('.login-modal_close');
const openLoginBtn = document.querySelector('.login-user_btn');

const categoriesLinks = document.querySelectorAll('.category-item');

categoriesLinks.forEach(link => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		document.querySelector(`[catDetailedID="${e.target.getAttribute('catid')}"]`).classList.toggle('detailed-show')
	})
})

openLoginBtn.addEventListener('click', (e) => {
	e.preventDefault();
	loginModal.classList.toggle('login-opened');
})

closeLoginBtn.addEventListener('click', (e) => {
	loginModal.classList.remove('login-opened')
})

const catalogueList = ['Кухни', 'Гостинные', 'Спальни', 'Прихожие', 'Шкаф-купе', 'Детские', 'Диваны', 'Столы и стулья'];

function fillCategories() {
	for (let i = 0; i < categoriesList.length; i++) {
		categoriesBar.appendChild(createCategoryLink(categoriesList[i]))
	}
}

function createCatalogueLink(item, index) {
	const itemElement = document.createElement('div');
	itemElement.className = 'catalogue-item';
	itemElement.innerHTML = `
	<img src="./img/cat-images/${index}.png" alt="">
	<p><a href="#">${item}</a></p>
	`;

	return itemElement;
}

function fillCatalogue() {
	for (let i = 0; i < catalogueList.length; i++) {
		catalogueBar.appendChild(createCatalogueLink(catalogueList[i], i))
	}
}

function createPopularItem(name, index, oldPrice, newPrice) {
	const itemElement = document.createElement('div');
	itemElement.className = 'popular-items-block_tab';
	itemElement.innerHTML = `
		<img src="./img/popular-images/${index}.png" alt="">
		<a href="./pages/item.html"><p>${name}</p></a>
		<div class="prices">
			<span>${oldPrice} руб.</span>
			<p>${newPrice} руб.</p>
		</div>
		<div class="btns">
			<button class="addToCart">Купить</button>
			<a href="#"><img src="./icons/like.svg" alt=""></a>
		</div>
	`

	return itemElement;
}

function fillPopular() {
	for (let i = 0; i < popularItems.length; i++) {
		popularItemsBar.appendChild(createPopularItem(popularItems[i].name,i,popularItems[i].oldPrice,popularItems[i].newPrice))
	}
	const elements = document.querySelectorAll('.addToCart');
	elements.forEach(item => {
		item.addEventListener('click', (e) => {
			cartModal.classList.add('modal-opened')
			e.target.innerHTML='Добавлено!'
		})
	})
}

function createPopCategotyLink(item) {
	const itemElement = document.createElement('a');
	itemElement.className = 'popular-cats-block_tab'
	itemElement.innerHTML = `
	<a href="#">${item}</a>
	`

	return itemElement;
}

function fillPopCats() {
	for (let i = 0; i < catalogueList.length; i++) {
		popularCatsBar.appendChild(createPopCategotyLink(catalogueList[i]))
	}
}

function fillSlider() {
	for (let i = 0; i < 4; i++) {
		sliderBar.appendChild(createPopularItem(popularItems[i].name,i,popularItems[i].oldPrice,popularItems[i].newPrice))
	}
}

showMoreBtn.addEventListener('click', () => {
	fillPopular()
})

closeModalBtn.addEventListener('click',() => {
	cartModal.classList.remove('modal-opened')
})

continueBtn.addEventListener('click',() => {
	cartModal.classList.remove('modal-opened')
})

fillCatalogue()
fillPopular()
fillPopCats()
fillSlider()