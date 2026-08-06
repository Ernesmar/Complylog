// ============================================
// COMPLYLOG PRO - CONFIGURACIÓN CENTRAL
// ============================================

const CONFIG = {
    // Supabase
    SUPABASE_URL: 'https://smyuylvztkigxruyywhb.supabase.co',
    SUPABASE_KEY: 'TU_NUEVA_SUPABASE_KEY', // ← REEMPLAZAR
    
    // DeepSeek IA
    DEEPSEEK_KEY: 'TU_NUEVA_DEEPSEEK_KEY', // ← REEMPLAZAR
    
    // NOWPayments
    NOWPAYMENTS_API_KEY: 'TU_NOWPAYMENTS_KEY', // ← REEMPLAZAR
    NOWPAYMENTS_WEBHOOK_SECRET: 'TU_WEBHOOK_SECRET', // ← REEMPLAZAR
    
    // Dominio
    DOMAIN: 'https://declarcloudeployed.top',
    
    // Planes
    PLANS: {
        free: { name: 'Starter', price: 0, maxTasks: 10, maxUsers: 1 },
        pro: { name: 'Professional', price: 29, maxTasks: 100, maxUsers: 5 },
        enterprise: { name: 'Enterprise', price: 79, maxTasks: 999999, maxUsers: 999999 }
    },
    
    // Países
    COUNTRIES: {
        US: { name: 'United States', regulation: 'FDA 21 CFR 117', authority: 'FDA', currency: 'USD' },
        ES: { name: 'España', regulation: 'AESAN CE 852/2004', authority: 'AESAN', currency: 'EUR' }
    },
    
    // Industrias
    INDUSTRIES: {
        food: { name: 'Food & Beverage', icon: '🍽️' },
        cannabis: { name: 'Cannabis', icon: '🌿' }
    },
    
    // Feature flags
    FEATURES: {
        aiSuggestions: true,
        offlineMode: true,
        emailNotifications: true,
        smsNotifications: false, // v1.2
        whatsappNotifications: false, // v1.4
        marketplace: false, // v1.2
        whiteLabel: false, // v1.4
        publicAPI: false // v1.5
    }
};

// No modificar debajo de esta línea
if (typeof module !== 'undefined') module.exports = CONFIG;