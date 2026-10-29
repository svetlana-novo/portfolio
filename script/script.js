// 1. Открытие/закрытие списка навыков по клику (работает и на телефоне)
document.querySelector('.list1 .name').addEventListener('click', function() {
	document.querySelector('.list1 .submenu').classList.toggle('open');
});

// 2. Кнопка "Печать" — можно вызвать через консоль или повесить на элемент
function printResume() {
	window.print();
}

// 3. Плавное появление блоков при загрузке
window.addEventListener('load', function() {
	document.querySelectorAll('.main, .maketing, .footer').forEach(function(el) {
		el.style.opacity = '0';
		el.style.transition = 'opacity .6s';
		setTimeout(function() { el.style.opacity = '1'; }, 100);
	});
});

// 4. Проверка, что JS подключён (можно удалить позже)
console.log('JS подключён успешно');
document.getElementById('printBtn').addEventListener('click', function() {
	window.print();
});
// Тёмная тема
const themeBtn = document.getElementById('themeBtn');

// При загрузке — проверить, что было сохранено
if (localStorage.getItem('theme') === 'dark') {
	document.documentElement.classList.add('dark');
	themeBtn.textContent = '☀️ Светлая тема';
}

// Клик по кнопке
themeBtn.addEventListener('click', function() {
	document.documentElement.classList.toggle('dark');

	if (document.documentElement.classList.contains('dark')) {
		themeBtn.textContent = '☀️ Светлая тема';
		localStorage.setItem('theme', 'dark');
	} else {
		themeBtn.textContent = '🌙 Тёмная тема';
		localStorage.setItem('theme', 'light');
	}
});
// === Чтение страницы вслух ===

const readBtn = document.getElementById('readBtn');
const stopBtn = document.getElementById('stopBtn');

if (readBtn && stopBtn) {
    readBtn.addEventListener('click', () => {
        // Берём весь видимый текст со страницы
        const text = document.body.innerText;

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ru-RU';   // русский язык
        utterance.rate = 1;         // скорость (0.1 - 10)
        utterance.pitch = 1;        // тон голоса (0 - 2)

        // Если уже что-то читается — отменяем
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);
    });

    stopBtn.addEventListener('click', () => {
        window.speechSynthesis.cancel();
    });
}