/**
 * Portal Basquete - Script Principal
 * Funcionalidades:
 * - Toggle de tema (claro/escuro)
 * - Validação de formulário
 * - Persistência em Local Storage
 */

// ============================================================================
// TEMA (Light/Dark Mode)
// ============================================================================

const THEME_KEY = 'portal-basquete-theme';
const LIGHT_THEME = 'light';
const DARK_THEME = 'dark';

/**
 * Inicializa o tema baseado na preferência salva ou na preferência do sistema
 */
function initializeTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    let theme = savedTheme || (prefersDark ? DARK_THEME : LIGHT_THEME);
    
    applyTheme(theme);
    updateThemeButton(theme);
}

/**
 * Aplica o tema ao documento
 */
function applyTheme(theme) {
    const html = document.documentElement;
    
    if (theme === DARK_THEME) {
        html.setAttribute('data-theme', 'dark');
    } else {
        html.removeAttribute('data-theme');
    }
    
    localStorage.setItem(THEME_KEY, theme);
}

/**
 * Atualiza o ícone do botão de tema
 */
function updateThemeButton(theme) {
    const button = document.getElementById('theme-toggle');
    if (button) {
        button.textContent = theme === DARK_THEME ? '☀️' : '🌙';
    }
}

/**
 * Alterna entre temas claro e escuro
 */
function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? LIGHT_THEME : DARK_THEME;
    
    applyTheme(newTheme);
    updateThemeButton(newTheme);
}

// ============================================================================
// VALIDAÇÃO DE FORMULÁRIO
// ============================================================================

const REGISTRATION_DATA_KEY = 'portal-basquete-registrations';

/**
 * Valida um endereço de email
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Valida um número de telefone (básico)
 */
function isValidPhone(phone) {
    const phoneRegex = /^[\d\s\-+()]*\d[\d\s\-+()]*$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 8;
}

/**
 * Valida uma URL (básico)
 */
function isValidUrl(url) {
    if (!url) return true; // Campos de URL são opcionais
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}

/**
 * Valida um campo específico do formulário
 */
function validateField(fieldId, fieldName) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(`${fieldId}-error`);
    
    if (!field || !errorElement) return true;
    
    const value = field.value.trim();
    let error = '';

    // Validação de campos obrigatórios
    if (field.hasAttribute('required') && !value) {
        error = `${fieldName} é obrigatório`;
    }
    
    // Validações específicas por tipo
    else if (fieldId === 'email' && value && !isValidEmail(value)) {
        error = 'Por favor, insira um email válido';
    }
    else if (fieldId === 'phone' && value && !isValidPhone(value)) {
        error = 'Por favor, insira um telefone válido (mínimo 8 dígitos)';
    }
    else if (['instagram', 'facebook', 'tiktok'].includes(fieldId) && value && !isValidUrl(value)) {
        error = 'Por favor, insira uma URL válida';
    }
    
    // Mostrar ou limpar mensagem de erro
    if (error) {
        errorElement.textContent = error;
        field.setAttribute('aria-invalid', 'true');
        return false;
    } else {
        errorElement.textContent = '';
        field.removeAttribute('aria-invalid');
        return true;
    }
}

/**
 * Valida todo o formulário
 */
function validateForm(form) {
    const validations = [
        ['firstName', 'Nome'],
        ['lastName', 'Sobrenome'],
        ['address', 'Endereço'],
        ['phone', 'Telefone'],
        ['email', 'Email'],
        ['instagram', 'Instagram'],
        ['facebook', 'Facebook'],
        ['tiktok', 'TikTok'],
        ['about', 'Sobre você']
    ];

    let isValid = true;
    validations.forEach(([fieldId, fieldName]) => {
        if (!validateField(fieldId, fieldName)) {
            isValid = false;
        }
    });

    return isValid;
}

/**
 * Obtém os dados do formulário como objeto
 */
function getFormData(form) {
    return {
        id: 'reg-' + Date.now(),
        firstName: document.getElementById('firstName').value.trim(),
        lastName: document.getElementById('lastName').value.trim(),
        address: document.getElementById('address').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        email: document.getElementById('email').value.trim(),
        instagram: document.getElementById('instagram').value.trim(),
        facebook: document.getElementById('facebook').value.trim(),
        tiktok: document.getElementById('tiktok').value.trim(),
        about: document.getElementById('about').value.trim(),
        submittedAt: new Date().toISOString()
    };
}

/**
 * Salva os dados da inscrição em Local Storage
 */
function saveRegistration(data) {
    try {
        const registrations = JSON.parse(localStorage.getItem(REGISTRATION_DATA_KEY)) || [];
        registrations.push(data);
        localStorage.setItem(REGISTRATION_DATA_KEY, JSON.stringify(registrations));
        return true;
    } catch (error) {
        console.error('Erro ao salvar inscrição:', error);
        return false;
    }
}

/**
 * Manipula o envio do formulário
 */
function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const successMessage = document.getElementById('form-success');

    // Limpar mensagem anterior
    if (successMessage) {
        successMessage.style.display = 'none';
    }

    // Validar formulário
    if (!validateForm(form)) {
        // Focus no primeiro campo com erro
        const firstError = form.querySelector('[aria-invalid="true"]');
        if (firstError) {
            firstError.focus();
        }
        return;
    }

    // Obter dados
    const data = getFormData(form);

    // Salvar em Local Storage
    if (saveRegistration(data)) {
        // Mostrar mensagem de sucesso
        if (successMessage) {
            successMessage.style.display = 'block';
            successMessage.focus();
        }

        // Limpar formulário
        form.reset();

        // Limpar erros
        form.querySelectorAll('.error-message').forEach(msg => {
            msg.textContent = '';
        });

        // Scroll para a mensagem de sucesso
        successMessage?.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Remover mensagem de sucesso após 5 segundos
        setTimeout(() => {
            if (successMessage) {
                successMessage.style.display = 'none';
            }
        }, 5000);
    } else {
        alert('Ocorreu um erro ao enviar o formulário. Tente novamente.');
    }
}

/**
 * Adiciona listeners de validação em tempo real aos campos do formulário
 */
function setupFormValidation() {
    const form = document.getElementById('registration-form');
    if (!form) return;

    const fields = form.querySelectorAll('input, textarea');
    
    fields.forEach(field => {
        // Validar ao sair do campo
        field.addEventListener('blur', () => {
            validateField(field.id, field.previousElementSibling?.textContent || field.id);
        });

        // Limpar erro ao começar a digitar
        field.addEventListener('input', () => {
            const errorElement = document.getElementById(`${field.id}-error`);
            if (errorElement) {
                errorElement.textContent = '';
                field.removeAttribute('aria-invalid');
            }
        });
    });

    // Validar ao enviar
    form.addEventListener('submit', handleFormSubmit);
}

// ============================================================================
// INICIALIZAÇÃO
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar tema
    initializeTheme();

    // Setup theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Setup form validation
    setupFormValidation();

    // Log de inicialização (pode remover em produção)
    console.log('✓ Portal Basquete inicializado');
});

// ============================================================================
// FUNÇÕES UTILITÁRIAS (Para Debug/Testes)
// ============================================================================

/**
 * Obtém todas as inscrições salvas (útil para testes)
 */
function getAllRegistrations() {
    try {
        return JSON.parse(localStorage.getItem(REGISTRATION_DATA_KEY)) || [];
    } catch (error) {
        console.error('Erro ao recuperar inscrições:', error);
        return [];
    }
}

/**
 * Limpa todas as inscrições (use com cuidado!)
 */
function clearAllRegistrations() {
    if (confirm('Tem certeza que deseja deletar todas as inscrições?')) {
        localStorage.removeItem(REGISTRATION_DATA_KEY);
        console.log('✓ Todas as inscrições foram deletadas');
    }
}

// Disponibilizar funções globalmente para testes no console
window.portalBasquete = {
    getAllRegistrations,
    clearAllRegistrations,
    toggleTheme,
    applyTheme
};
