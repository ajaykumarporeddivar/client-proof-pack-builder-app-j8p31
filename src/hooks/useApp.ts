'use client';

import { useState, useEffect } from 'react';

interface LocalStorageState<T> {
  value: T | null;
  setValue: (value: T) => void;
}

export function useLocalStorage<T>(key: string, initial: T): LocalStorageState<T> {
  const [value, setValue] = useState<T | null>(null);

  useEffect(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue) {
      setValue(JSON.parse(storedValue) as T);
    } else {
      setValue(initial);
    }
  }, [key, initial]);

  useEffect(() => {
    if (value !== null) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [value, key]);

  return { value, setValue };
}

interface FilterState<T> {
  filtered: T[];
  search: string;
  setSearch: (search: string) => void;
  status: string;
  setStatus: (status: string) => void;
}

export function useFilter<T extends Record<string, unknown>>(
  items: T[],
  fields: (keyof T)[]
): FilterState<T> {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');

  const filtered = items.filter((item) => {
    const searchString = search.toLowerCase();
    const itemString = fields.reduce((acc, field) => {
      return acc + String(item[field]).toLowerCase();
    }, '');
    return itemString.includes(searchString) && (status === '' || item.status === status);
  });

  return {
    filtered,
    search,
    setSearch,
    status,
    setStatus,
  };
}

interface ModalState<T = unknown> {
  isOpen: boolean;
  open: (item?: T) => void;
  close: () => void;
  activeItem: T | null;
}

export function useModal<T = unknown>(): ModalState<T> {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<T | null>(null);

  const open = (item?: T) => {
    setIsOpen(true);
    setActiveItem(item);
  };

  const close = () => {
    setIsOpen(false);
    setActiveItem(null);
  };

  return { isOpen, open, close, activeItem };
}

interface ToastState {
  message: string;
  type: 'success' | 'error' | 'info';
  visible: boolean;
  show: (message: string, type?: 'success' | 'error' | 'info') => void;
}

export function useDemoToast(): ToastState {
  const [message, setMessage] = useState('');
  const [type, setType] = useState<'success' | 'error' | 'info'>('info');
  const [visible, setVisible] = useState(false);

  const show = (message: string, type?: 'success' | 'error' | 'info') => {
    setMessage(message);
    setType(type || 'info');
    setVisible(true);
    setTimeout(() => setVisible(false), 2500);
  };

  return { message, type, visible, show };
}