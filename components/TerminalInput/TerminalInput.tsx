'use client';

import { forwardRef, KeyboardEvent, useState } from 'react';
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
    const [focused, setFocused] = useState(false);

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        onSubmit(value);
      }
    };

    return (
      <div className={styles.prompt}>
        <span className={styles.glyph}>{isConfirming ? '(y/n) >' : '>'}</span>
        <div className={styles.inputWrapper}>
          <input
            ref={ref}
            type="text"
            className={styles.input}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            disabled={disabled}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
            aria-label="Terminal input"
          />
          <div className={styles.display} aria-hidden="true">
            <span className={styles.displayText}>{value}</span>
            {focused && !disabled && (
              <span className={styles.cursor} />
            )}
          </div>
        </div>
      </div>
    );
  }
);

TerminalInput.displayName = 'TerminalInput';

export default TerminalInput;
