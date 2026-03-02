'use client';

import { forwardRef, KeyboardEvent } from 'react';
import styles from './TerminalInput.module.css';

interface Props {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
  disabled: boolean;
  isConfirming: boolean;
}

const TerminalInput = forwardRef<HTMLInputElement, Props>(
  ({ value, onChange, onSubmit, disabled, isConfirming }, ref) => {
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        onSubmit(value);
      }
    };

    return (
      <div className={styles.prompt}>
        <span className={styles.glyph}>{isConfirming ? '(y/n) >' : '>'}</span>
        <input
          ref={ref}
          type="text"
          className={styles.input}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          aria-label="Terminal input"
        />
      </div>
    );
  }
);

TerminalInput.displayName = 'TerminalInput';

export default TerminalInput;
