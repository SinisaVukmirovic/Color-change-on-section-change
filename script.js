// getting the navbar links and sections
const navbarLinks = document.getElementsByClassName('navbar-link');
const sections = document.getElementsByTagName('section');

// functionality for lonk color change on section change
function linkColorChanger() {
    for (let section of sections) {
        let sectionBoundary = section.getBoundingClientRect();

        for (let link of navbarLinks) {
            let linkBoundary = link.getBoundingClientRect();

            // checking if the link item is still inside the section
            if (linkBoundary.y >= sectionBoundary.y &&
                linkBoundary.y + linkBoundary.height <= sectionBoundary.y + sectionBoundary.height) {
                    let color = section.dataset.color;

                    switch (color) {
                        case "coral":
                            link.classList.add('coral');
                            break;
                        
                        case 'black':
                            link.classList.remove('coral');
                            break;
                    }
                }
        }
    }
}

document.addEventListener('scroll', linkColorChanger);