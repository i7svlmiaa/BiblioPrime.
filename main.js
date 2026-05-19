// ============================================
// LIVRARIA ONLINE — JAVASCRIPT
// ============================================

// Trocar imagem principal na página de detalhes
function changeImage(thumbnail) {
  const mainImage = document.getElementById('mainImage');
  if (mainImage && thumbnail) {
    mainImage.src = thumbnail.src.replace('w=100', 'w=500');
    
    // Atualizar classe ativa
    document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
    thumbnail.classList.add('active');
  }
}

// Sistema de Tabs
function showTab(tabId) {
  // Esconder todos os conteúdos
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.remove('active');
  });
  
  // Remover classe ativa dos botões
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Mostrar conteúdo selecionado
  const selectedContent = document.getElementById(tabId);
  if (selectedContent) {
    selectedContent.classList.add('active');
  }
  
  // Ativar botão clicado
  const clickedBtn = event.target;
  if (clickedBtn) {
    clickedBtn.classList.add('active');
  }
}

// Controle de quantidade
function changeQty(delta) {
  const input = event.target.parentElement.querySelector('input');
  if (input) {
    let newValue = parseInt(input.value) + delta;
    if (newValue < 1) newValue = 1;
    input.value = newValue;
  }
}

// Animação de entrada ao scroll
function animateOnScroll() {
  const elements = document.querySelectorAll('.card, .promo-card, .category-item');
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < window.innerHeight - elementVisible) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
  // Configurar animações iniciais
  const cards = document.querySelectorAll('.card, .promo-card, .category-item');
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });
  
  // Ativar animação no scroll
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Executar uma vez no carregamento
  
  // Efeito hover nos cards
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.zIndex = '10';
    });
    card.addEventListener('mouseleave', function() {
      this.style.zIndex = '1';
    });
  });
  
  // Wishlist toggle
  document.querySelectorAll('.btn-wishlist').forEach(btn => {
    btn.addEventListener('click', function() {
      const icon = this.querySelector('i');
      if (icon.classList.contains('far')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
        this.style.color = '#b12704';
        this.style.borderColor = '#b12704';
      } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
        this.style.color = '';
        this.style.borderColor = '#ddd';
      }
    });
  });
  
  // Busca com Enter
  const searchInput = document.querySelector('.search-input');
  if (searchInput) {
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        window.location.href = 'catalogo.html';
      }
    });
  }
  
  // Smooth scroll para âncoras
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

// Header sticky shadow effect
let lastScroll = 0;
window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  if (header) {
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.4)';
    } else {
      header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
    }
  }
});