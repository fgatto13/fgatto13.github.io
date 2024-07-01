const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
const hiddenRight = document.querySelectorAll('.hiddenRight');
hiddenElements.forEach((el) => observer.observe(el));
hiddenRight.forEach((el)=> observer.observe(el));