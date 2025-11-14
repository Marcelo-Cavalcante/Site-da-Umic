const myObserver = new IntersectionObserver((entries) => {
    entries.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const elements= document.querySelectorAll('.hidden')

elements.forEach( (element) => myObserver.observe(element))


// whatsapp

const content = document.querySelector('[data-shrink="yes"]');
const span = document.querySelector('[data-shrink="yes"] span');

span.classList.add('aparecer');

setInterval(() => {
  content.classList.toggle('shrink');
}, 5000);

setTimeout(() => {
  setInterval(() => {
    span.classList.toggle('aparecer');
  }, 5000);
}, 200);
