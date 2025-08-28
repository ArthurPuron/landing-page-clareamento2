document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionButton = item.querySelector('.faq-question');

        questionButton.addEventListener('click', () => {
            const answer = item.querySelector('.faq-answer');
            const isOpen = item.classList.contains('active');

            // Fecha todos os itens abertos
            faqItems.forEach(i => {
                i.classList.remove('active');
                i.querySelector('.faq-answer').style.maxHeight = null;
            });

            // Se o item clicado não estava aberto, abre-o
            if (!isOpen) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
});
