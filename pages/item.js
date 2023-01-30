const popularCatsBar = document.getElementById('popular-cats-block');
const sliderBar = document.getElementById('promo-slider');
const showMoreBtn = document.getElementById('show-more');
const modulesBar = document.getElementById('modules')
const tablesBar = document.getElementById('tables')
const menuItems = document.querySelectorAll('.menu-list_item')
const blocks = document.querySelectorAll('.block')

const cartModal = document.querySelector('.add-cart_modal');
const loginModal = document.querySelector('.login-modal');
const closeModalBtn = document.querySelector('.close-modal');
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

menuItems.forEach(item => {
	item.addEventListener('click', (e) => {
		e.preventDefault();
		menuItems.forEach(link => {
			link.classList.remove('active-menu')
		})
		blocks.forEach(block => {
			block.classList.remove('block-active')
		})
		blocks[e.target.getAttribute('menuTag')].classList.add('block-active')
		e.target.classList.add('active-menu')
	})
})

const catalogueList = ['Кухни', 'Гостинные', 'Спальни', 'Прихожие', 'Шкаф-купе', 'Детские', 'Диваны', 'Столы и стулья'];
const popularItems = [

	{
		name: 'Мори кровать КРМ 900.1',
		oldPrice: 7159,
		newPrice: 5017,
	},
	{
		name: 'Гостиная модульная Lucido',
		oldPrice: 7159,
		newPrice: 5017,
	},
	{
		name: 'Ронда КРР1600.1',
		oldPrice: 7159,
		newPrice: 5017,
	},
	{
		name: 'Гранд шкаф верхний горизонтальный глубокий стекло 500',
		oldPrice: 7159,
		newPrice: 5017,
	},
	{
		name: 'Кухня Лондон модульная',
		oldPrice: 7159,
		newPrice: 5017,
	},
	{
		name: 'Ронда КРР1600.1',
		oldPrice: 7159,
		newPrice: 5017,
	},
	{
		name: 'Кухня Лондон модульная',
		oldPrice: 7159,
		newPrice: 5017,
	},
	{
		name: 'КМори кровать КРМ 900.1',
		oldPrice: 7159,
		newPrice: 5017,
	}
];

const module = {
	name: 'Ройс шкаф верхний',
	oldPrice: 7159,
	newPrice: 5017,
}

function createPopularItem(name, index, oldPrice, newPrice) {
	const itemElement = document.createElement('div');
	itemElement.className = 'popular-items-block_tab';
	itemElement.innerHTML = `
		<img src="../img/popular-images/${index}.png" alt="">
		<p>${name}</p>
		<div class="prices">
			<span>${oldPrice} руб.</span>
			<p>${newPrice} руб.</p>
		</div>
		<div class="btns">
			<button>Купить</button>
			<a href="#"><img src="../icons/like.svg" alt=""></a>
		</div>
	`

	return itemElement;
}

function fillPopular() {
	for (let i = 0; i < popularItems.length; i++) {
		popularItemsBar.appendChild(createPopularItem(popularItems[i].name,i,popularItems[i].oldPrice,popularItems[i].newPrice))
	}
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

function createModule(name, oldPrice, newPrice,img) {
	const itemElement = document.createElement('div');
	itemElement.className = 'popular-items-block_tab';
	itemElement.innerHTML = `
		<img src="../img/item/${img}.png" alt="">
		<a href="./pages/item.html"><p>${name}</p></a>
		<div class="prices">
			<span>${oldPrice} руб.</span>
			<p>${newPrice} руб.</p>
		</div>
		<div class="btns">
			<button>Добавить</button>
			<a href="#"><img src="../icons/like.svg" alt=""></a>
		</div>
	`

	return itemElement;
}

function fillModules() {
	for (let i = 0; i < 8; i++) {
		modulesBar.appendChild(createModule(module.name,module.oldPrice,module.newPrice,'module-img'))
	}
}
function fillTables() {
	for (let i = 0; i < 8; i++) {
		tablesBar.appendChild(createModule('Столешница ПФ 38 мм 2-ой категории в размер',module.oldPrice,module.newPrice,'table-img'))
	}
}



fillTables()
fillModules()
fillPopCats()
fillSlider()