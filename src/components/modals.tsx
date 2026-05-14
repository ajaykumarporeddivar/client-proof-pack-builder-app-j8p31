'use client';

import { useState, useEffect } from 'react';
import { Modal, Badge, Button, Avatar } from '@/components/ui';
import { Client, Proof } from '@/lib/types';
import { clsx } from 'clsx';

interface EntityDetailModalProps {
  item: Client | Proof | null;
  open: boolean;
  onClose: () => void;
  title: string;
}

export function EntityDetailModal({
  item,
  open,
  onClose,
  title,
}: EntityDetailModalProps) {
  if (!item) return null;

  return (
    <Modal open={open} onClose={onClose}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
        <Badge variant="info" className="ml-2">
          {item.status}
        </Badge>
      </Modal.Header>
      <Modal.Body>
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(item).map(([key, value]) => (
            <div key={key} className="flex flex-col">
              <span className="text-sm font-bold">{key}</span>
              <span className="text-sm">{value}</span>
            </div>
          ))}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button type="button" variant="ghost" onClick={onClose}>
          Close
        </Button>
        <Button type="button" variant="primary">
          Approve
        </Button>
        <Button type="button" variant="danger">
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

interface ConfirmModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  message: string;
  onConfirm: () => void;
  confirmLabel?: string;
  variant?: 'danger' | 'info';
}

export function ConfirmModal({
  open,
  onClose,
  title,
  message,
  onConfirm,
  confirmLabel = 'Confirm',
  variant = 'info',
}: ConfirmModalProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="text-sm">{message}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button type="button" variant="ghost" onClick={onClose}>
          Cancel
        </Button>
        <Button
          type="button"
          variant={variant === 'danger' ? 'danger' : 'primary'}
          onClick={onConfirm}
        >
          {confirmLabel}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
  items: {
    label: string;
    href: string;
    icon?: React.ReactNode;
    description?: string;
  }[];
}

export function CommandPalette({ open, onClose, items }: CommandPaletteProps) {
  const [search, setSearch] = useState('');
  const [focusedIndex, setFocusedIndex] = useState(0);

  useEffect(() => {
    if (open) {
      const searchInput = document.querySelector('#search-input');
      if (searchInput) {
        searchInput.focus();
      }
    }
  }, [open]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      setFocusedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    } else if (e.key === 'ArrowDown') {
      setFocusedIndex((prevIndex) =>
        Math.min(prevIndex + 1, items.length - 1)
      );
    } else if (e.key === 'Enter') {
      const selected = items[focusedIndex];
      if (selected) {
        window.location.href = selected.href;
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  const filteredItems = items.filter((item) =>
    item.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Modal open={open} onClose={onClose}>
      <Modal.Header>
        <Modal.Title>Command Palette</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          id="search-input"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          className="block w-full py-2 pl-3 pr-10 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <ul>
          {filteredItems.map((item, index) => (
            <li
              key={item.label}
              className={clsx(
                'py-2 pl-3 pr-10 text-base border-b border-gray-200',
                {
                  'bg-gray-100': focusedIndex === index,
                }
              )}
            >
              <span className="font-bold">{item.label}</span>
              {item.description && (
                <span className="text-sm text-gray-500">{item.description}</span>
              )}
            </li>
          ))}
        </ul>
      </Modal.Body>
    </Modal>
  );
}