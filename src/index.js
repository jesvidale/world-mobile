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

class UserAgent {
  constructor() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }
  get device() {
    return this.getDevice();
  }
  getDevice () {
    if ( this.width > 1600 ) { return { type: 'tv', factor: 1.3 }}
    if ( this.width >= 1200 ) { return { type: 'desktop', factor: 1.5 }}
    if ( this.width >= 768 ) { return { type: 'tablet', factor: 2.1 }}
    return { type: 'mobile', factor: 2 }
  }
}

const scrollHandler = () => {
  const content = document.getElementById('header_wrapper');
  const userAgent = new UserAgent()
  const fixHeader = (scrolled, position) => {
    if (scrolled > position + 80) {
      content.classList.add('scroll-in')
    } else {
      content.classList.remove('scroll-in')
    }
  }
  const setVisibleSection = (scrolled) => {
    const getActiveSection = () => {
      console.log(userAgent.device)
      const section = Math.floor(scrolled/userAgent.height * userAgent.device.factor)
      return section < 2 ? section : 1
    }
    const activeSection = getActiveSection();
    console.log('activeSecton', activeSection)
    const sections = document.getElementsByClassName('section');
    const sectionsList = Array.prototype.slice.call(sections, 0)
    sectionsList.filter((section, index) => {
      if (index === activeSection) { section.classList.add('section-active') }
      if (index !== activeSection) { section.classList.remove('section-active') }
    })
  }
  document.addEventListener("scroll", () => {
    const scrolled = document.scrollingElement.scrollTop
    const position = content.offsetTop
    fixHeader(scrolled, position)
    setVisibleSection(scrolled)
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
