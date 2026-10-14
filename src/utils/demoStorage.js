import { useState, useEffect } from 'react';

export const DEMO_STORAGE_KEYS = {
  COFFEE_PICKUPS: 'sirkula_demo_coffee_pickups',
  COFFEE_PROFILE: 'sirkula_demo_coffee_profile',
  COFFEE_NOTIFICATIONS: 'sirkula_demo_coffee_notifications',
  COFFEE_TICKETS: 'sirkula_demo_coffee_tickets',

  FARMER_ORDERS: 'sirkula_demo_farmer_orders',
  FARMER_CART: 'sirkula_demo_farmer_cart',
  FARMER_BATCHES: 'sirkula_demo_farmer_batches',
  FARMER_PROFILE: 'sirkula_demo_farmer_profile',
  FARMER_TICKETS: 'sirkula_demo_farmer_tickets',

  ADMIN_PICKUP_ROUTES: 'sirkula_demo_admin_pickup_routes',
  ADMIN_ORDERS: 'sirkula_demo_admin_orders',
  ADMIN_USERS: 'sirkula_demo_admin_users',
  ADMIN_VERIFICATIONS: 'sirkula_demo_admin_verifications',
  ADMIN_BAGLOG_CATALOG: 'sirkula_demo_admin_catalog',
  ADMIN_PRODUCTION_LOGS: 'sirkula_demo_admin_production_logs',
  ADMIN_FARM_MONITORING: 'sirkula_demo_admin_farm_monitoring',
  ADMIN_TRANSACTIONS: 'sirkula_demo_admin_transactions',
  ADMIN_ECO_BADGES: 'sirkula_demo_admin_badges',
  ADMIN_WEBSITE_CONFIG: 'sirkula_demo_admin_website_config',
};

/**
 * Read item from localStorage with fallback
 */
export function getStoredDemoItem(key, defaultValue) {
  try {
    const raw = localStorage.getItem(key);
    if (raw !== null) {
      return JSON.parse(raw);
    }
  } catch (err) {
    console.warn(`[Sirkula Demo Cache] Gagal membaca key "${key}":`, err);
  }
  return defaultValue;
}

/**
 * Write item to localStorage and notify all listeners
 */
export function setStoredDemoItem(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    window.dispatchEvent(
      new CustomEvent('sirkula-demo-storage-changed', { detail: { key } })
    );
  } catch (err) {
    console.warn(`[Sirkula Demo Cache] Gagal menyimpan key "${key}":`, err);
  }
}

/**
 * Reset all Sirkula demo cache keys to initial defaults
 */
export function resetAllDemoData() {
  try {
    const allKeys = Object.values(DEMO_STORAGE_KEYS);
    allKeys.forEach((k) => localStorage.removeItem(k));
    // Also remove any key starting with sirkula_demo_
    for (let i = localStorage.length - 1; i >= 0; i--) {
      const k = localStorage.key(i);
      if (k && k.startsWith('sirkula_demo_')) {
        localStorage.removeItem(k);
      }
    }
    window.dispatchEvent(
      new CustomEvent('sirkula-demo-storage-changed', { detail: { reset: true } })
    );
    return true;
  } catch (err) {
    console.error('[Sirkula Demo Cache] Gagal mereset cache:', err);
    return false;
  }
}

/**
 * Check if demo cache has any active modifications
 */
export function hasDemoDataInCache() {
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith('sirkula_demo_')) {
        return true;
      }
    }
  } catch {
    // ignore
  }
  return false;
}

/**
 * React Hook for persisting state to localStorage during MVP demo videos
 */
export function useDemoStorage(key, defaultValue) {
  const [value, setValue] = useState(() => getStoredDemoItem(key, defaultValue));

  useEffect(() => {
    const handleStorageChange = (e) => {
      // If reset or matching key, reload state
      if (!e.detail || e.detail.reset || e.detail.key === key) {
        setValue(getStoredDemoItem(key, defaultValue));
      }
    };

    const handleNativeStorage = (e) => {
      if (e.key === key || !e.key) {
        setValue(getStoredDemoItem(key, defaultValue));
      }
    };

    window.addEventListener('sirkula-demo-storage-changed', handleStorageChange);
    window.addEventListener('storage', handleNativeStorage);

    return () => {
      window.removeEventListener('sirkula-demo-storage-changed', handleStorageChange);
      window.removeEventListener('storage', handleNativeStorage);
    };
  }, [key, defaultValue]);

  const setAndStoreValue = (newValueOrFn) => {
    setValue((prev) => {
      const next = typeof newValueOrFn === 'function' ? newValueOrFn(prev) : newValueOrFn;
      setStoredDemoItem(key, next);
      return next;
    });
  };

  return [value, setAndStoreValue];
}
