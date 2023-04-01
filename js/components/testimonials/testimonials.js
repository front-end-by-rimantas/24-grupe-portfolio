const testimonials = (data, imgPath) => {
    return `<div class="testimonial">
                <img src="${imgPath + data.img}" alt="Testimonial author image">
                <p class="text">${data.text}</p>
                <p class="name">${data.name}</p>
                <p class="extra">${data.extra}</p>
            </div>`;
}

export { testimonials }