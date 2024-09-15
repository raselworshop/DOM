const sections =document.querySelectorAll('section');
// console.log(sections)
for(const section of sections){
    // console.log('section')//if we keep this condition it return number of section
    console.log(section);
    section.style.border = '2px solid red';
    section.style.marginBottom= '6px';
    section.style.borderRadius= '10px';
    section.style.paddingLeft= '10px';
    section.style.backgroundColor= 'lightgray';
    section.style.alignItems= 'center';
}
// const placeContainer = document.getElementById('place-container');
// placeContainer.style.backgroundColor= 'lightyellow'

const placeContainer = document.getElementById('place-container');
// placeContainer.classList.add('yellow-bg')
placeContainer.classList.add('text-center');
placeContainer.classList.remove('large-text');
