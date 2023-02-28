const mobileNav = document.querySelector('.nav-ul');
const burgerIcon = document.querySelector('.burger');
const homeBtn = document.querySelector('.homeLink');
const artBtn = document.querySelector('.artistsLink');
const homeSection = document.querySelector('.homeSection');
const artSection = document.querySelector('.artists');
const eventsBtn = document.querySelector('.eventsLink');
const eventsSection = document.querySelector('.events');
const sections = document.querySelectorAll('.section');
const allArtists = document.querySelectorAll('.all-artists');
const john = document.querySelector('.john');
const johnDoeBtn = document.querySelector('.john-doe-link');
const marieLeppain = document.querySelector('.marie-leppain');
const marieBtn = document.querySelector('.marie-leppain-link');

// ---------------------------- nav links Spans  ------------------------

const navFirstLetter = document.querySelectorAll('.navLink-span');
const navFrist = document.querySelector('.nav-link-span-one');
const navSecond = document.querySelector('.nav-link-span-two');
const navThird = document.querySelector('.nav-link-span-three');
const navFourth = document.querySelector('.nav-link-span-four');

// ---------------------------- Artists desc  ------------------------

const infoOne = document.querySelectorAll('.info-one');
const infoTwo = document.querySelectorAll('.info-two');
const infoThree = document.querySelectorAll('.info-three');
const infoFour = document.querySelectorAll('.info-four');
const descOne = document.querySelectorAll('.desc-one');
const descTwo = document.querySelectorAll('.desc-two');
const descThree = document.querySelectorAll('.desc-three');
const descFour = document.querySelectorAll('.desc-four');

// ---------------------------- END artists desc ------------------------

// all main sections remove active

const home = () => {
	sections.forEach((section) => section.classList.remove('main-active'));
	navFirstLetter.forEach((letter) =>
		letter.classList.remove('navLink-span-on')
	);
	homeSection.classList.add('main-active');
	navFrist.classList.add('navLink-span-on');
};

const art = () => {
	sections.forEach((section) => section.classList.remove('main-active'));
	navFirstLetter.forEach((letter) =>
		letter.classList.remove('navLink-span-on')
	);
	artSection.classList.add('main-active');
	navSecond.classList.add('navLink-span-on');
};

const events = () => {
	sections.forEach((section) => section.classList.remove('main-active'));
	navFirstLetter.forEach((letter) =>
		letter.classList.remove('navLink-span-on')
	);
	eventsSection.classList.add('main-active');
	navThird.classList.add('navLink-span-on');
};

const johnArt = () => {
	allArtists.forEach((artist) => artist.classList.remove('artists-active'));
	john.classList.add('artists-active');
	if (john.classList.contains('artists-active')) {
		marieBtn.classList.remove('art-back');
	}
	johnDoeBtn.classList.add('art-back');
};

const marieArt = () => {
	allArtists.forEach((artist) => artist.classList.remove('artists-active'));
	marieLeppain.classList.add('artists-active');
	if (marieLeppain.classList.contains('artists-active')) {
		johnDoeBtn.classList.remove('art-back');
	}
	marieBtn.classList.add('art-back');
};

const burgerSwitch = () => {
	mobileNav.classList.toggle('active');
	burgerIcon.classList.toggle('active');
};

// ---------------------------- John Doe paint info ------------------------

const switchOne = () => {
	descOne.forEach((desc) => desc.classList.toggle('onOff'));
};
const switchTwo = () => {
	descTwo.forEach((desc) => desc.classList.toggle('onOff'));
};
const switchThree = () => {
	descThree.forEach((desc) => desc.classList.toggle('onOff'));
};
const switchFour = () => {
	descFour.forEach((desc) => desc.classList.toggle('onOff'));
};

// ---------------------------- END John Doe paint info ------------------------

homeSection.classList.toggle('main-active');
john.classList.toggle('artists-active');
johnDoeBtn.classList.toggle('art-back');
navFrist.classList.toggle('navLink-span-on');

burgerIcon.addEventListener('click', burgerSwitch);
homeBtn.addEventListener('click', home);
artBtn.addEventListener('click', art);
eventsBtn.addEventListener('click', events);
johnDoeBtn.addEventListener('click', johnArt);
marieBtn.addEventListener('click', marieArt);

infoOne.forEach((info) => info.addEventListener('mouseenter', switchOne));
infoOne.forEach((info) => info.addEventListener('mouseleave', switchOne));
infoTwo.forEach((info) => info.addEventListener('mouseenter', switchTwo));
infoTwo.forEach((info) => info.addEventListener('mouseleave', switchTwo));
infoThree.forEach((info) => info.addEventListener('mouseenter', switchThree));
infoThree.forEach((info) => info.addEventListener('mouseleave', switchThree));
infoFour.forEach((info) => info.addEventListener('mouseenter', switchFour));
infoFour.forEach((info) => info.addEventListener('mouseleave', switchFour));
