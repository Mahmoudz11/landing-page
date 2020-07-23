const sections = document.querySelectorAll('section');

const navUl    = document.getElementById('navbar__list')

//build the ul li
for (let i = 0; i < sections.length; i++) {
    const liList = document.createElement('li');
    const anc    = document.createElement('a');
    const att    = document.createAttribute('class')
    att.value    = 'menu__link'
    const ancHref = document.createAttribute('href')
    ancHref.value = `#${sections[i].id}`
    anc.innerHTML = `Section ${i+1}`
    anc.setAttributeNode(att)   
    anc.setAttributeNode(ancHref)
    liList.appendChild(anc)
    navUl.appendChild(liList)  
}

// get the section dimension 
const offSet = (section) => {
    return Math.floor(section.getBoundingClientRect().top)
}


const removeActive = (section) => {
    section.classList.remove('your-active-class')
}

const addActive = (condition, section) => {
    if (condition) {
        section.classList.add('your-active-class')
    }
}

// i've tried to make the highlight but it didn't work correctly
// const addHighLight = (condition, section) => {
//     const liElement = document.getElementsByTagName('li');
//     for (let i = 0; i < liElement.length; i++) {
//         if (condition && section.id.slice(7) == [i+1]) {
//             liElement[i].classList.add('high-light')}
//     }
// }

// const removeHighLight = (condition) => {
//     const liElement = document.getElementsByTagName('li');
//     for (let i = 0; i < liElement.length; i++) {
//         if (!condition) {
//             liElement[i].classList.remove('high-light')
//         }
//     }
// }

//check if the section on viewport or not
const activeSection = () => {
    sections.forEach(section => {
        const elementOffSet = offSet(section);
        // console.log(elementOffSet)
        inViewPort = () => elementOffSet < 150 && elementOffSet >= -150;
        
        removeActive(section);
        addActive(inViewPort(), section);

    });
}
//when schroll will mention the active section
window.addEventListener('scroll', activeSection);


// schrolling function
const scrolling = () => {
    const links = document.querySelectorAll('.navbar__menu a')
    // console.log(links)
    links.forEach((link) => {
        link.addEventListener('click', ()=> {
            for (let i = 0; i < sections.length; i++) {
                sections[i].addEventListener('click', (link)=>{});
                
            }
        })
        
    })
}

scrolling()