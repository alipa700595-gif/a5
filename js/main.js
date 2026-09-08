/* Basil Broth Camp - Interactive Culinary Engine */
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const toggleBtn = document.querySelector('.mobile-toggle');
  const mainNav = document.querySelector('.main-nav');
  if (toggleBtn && mainNav) {
    toggleBtn.addEventListener('click', () => {
      mainNav.classList.toggle('active');
    });
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        faqItems.forEach(other => other.classList.remove('open'));
        if (!isOpen) {
          item.classList.add('open');
        }
      });
    }
  });

  // Interactive Broth Lab Infusion Selector
  const labTabs = document.querySelectorAll('.lab-tab');
  const labTitle = document.getElementById('lab-title');
  const labDesc = document.getElementById('lab-desc');
  const labImg = document.getElementById('lab-img');
  const labList = document.getElementById('lab-items');

  const brothData = {
    genovese: {
      title: "Sweet Genovese Basil & Roasted Allium Broth",
      desc: "Slow-simmered for 14 hours with heirloom Italian sweet basil, caramelized shallots, roasted garlic heads, and golden peppercorns.",
      img: "images/hero-steaming-basil-botanical-broth.jpg",
      items: ["Fresh Organic Sweet Genovese Basil", "Slow-Roasted Sweet Vidalia Onions", "Whole Garlic Confit Cloves", "Cold-Pressed Olive Oil Finish"]
    },
    thai: {
      title: "Thai Holy Basil, Galangal & Lemongrass Elixir",
      desc: "An invigorating herbaceous broth featuring spicy holy basil (tulsi), crushed galangal root, bruised kaffir lime leaves, and wild coriander roots.",
      img: "images/healing-herbal-tea-soup-infusion.jpg",
      items: ["Fresh Pungent Thai Holy Basil", "Highland Galangal & Fresh Turmeric", "Crushed Organic Lemongrass Stalks", "Kaffir Lime Leaf Infusion"]
    },
    shiitake: {
      title: "Wild Shiitake, Kombu & Dark Opal Basil Essence",
      desc: "A rich umami-dense mineral reduction prepared from sundried chanterelles, wild forest shiitake mushrooms, and purple opal basil leaves.",
      img: "images/wild-shiitake-mushroom-extraction.jpg",
      items: ["Sundried Chanterelle & Shiitake Caps", "Deep Purple Dark Opal Basil", "Atlantic Wild Kombu Seaweed", "Toasted Sesame & Coriander Seed"]
    },
    campwood: {
      title: "Campfire Hearth: Cedar Smoked Root & Garden Herb Broth",
      desc: "Simmered over hardwood embers in cast iron kettles with charred parsnips, wild leeks, rosemary sprigs, and lemon basil.",
      img: "images/camp-outdoor-cast-iron-simmer.jpg",
      items: ["Woodsmoke Charred Parsnips & Leeks", "Mountain Lemon Basil Sprigs", "Cracked Juniper Berries", "Wild Forest Thyme & Rosemary"]
    }
  };

  labTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      labTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const key = tab.getAttribute('data-blend');
      const data = brothData[key];
      if (data && labTitle && labDesc && labImg && labList) {
        labTitle.textContent = data.title;
        labDesc.textContent = data.desc;
        labImg.src = data.img;
        labList.innerHTML = data.items.map(item => `<li><span>${item}</span> <strong style="color:var(--copper-accent);">Botanical Note</strong></li>`).join('');
      }
    });
  });

  // Smooth anchor scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        const targetElem = document.querySelector(targetId);
        if (targetElem) {
          e.preventDefault();
          targetElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
});
