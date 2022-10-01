window.addEventListener('scroll', e => {
    images.forEach(image => {
        const imageTop = image.getBoundingClientRect().top;
        if (imageTop < window.innerHeight) {
            const data_src = image.getBoundingClientRect().top;
            image.setAttribute('src', data_src);
        };
    });
    console.log('scroll触发');
})

const images = document.querySelectorAll('img');

const callback = () => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const image = entry.target;
            const data_src = image.getAttribute('data-src');
            image.setAttribute('src', data_src);
            observer.unobserve( image);
            console.log('触发');
        };
    });
};

const observer = new IntersectionObserver(callback);

images.forEach(image => {
    observer.observe(image);
});