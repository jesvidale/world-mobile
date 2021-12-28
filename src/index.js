const menuHandler = () => {
  const menuButton = document.querySelector('#menu_button')
  const navigation = document.querySelector('#navigation')
  menuButton.addEventListener('click', e => {
    toggleMenu(e)
  })
  const toggleMenu = e => {
    e.preventDefault();
    menuButton.classList.toggle('opened')
    menuButton.setAttribute('aria-expanded', menuButton.classList.contains('opened'))
    navigation.classList.toggle('navigation-active')
  }
}

const scrollHandler = () => {
  const content = document.getElementById('header_wrapper');
  document.addEventListener("scroll", () => {
    const scrolled = document.scrollingElement.scrollTop
    const position = content.offsetTop
    if (scrolled > position + 80) {
      content.classList.add('scroll-in')
    } else {
      content.classList.remove('scroll-in')
    }
  });
}

const parallax = () => {
  new Rellax('.parallax-bg-1', {
    breakpoints:[320, 768, 1200]
  });
  new Rellax('.parallax-bg-2', {
    breakpoints:[320, 768, 1200]
  });
  new Rellax('.parallax-bg-3', {
    breakpoints:[320, 768, 1200]
  });
  new Rellax('.parallax-bg-4', {
    breakpoints:[320, 768, 1200]
  });
}

menuHandler();
scrollHandler();
parallax();
