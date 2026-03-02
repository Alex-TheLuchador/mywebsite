'use client';

import { useReducer, useCallback, useEffect, useRef } from 'react';
import { terminalReducer, initialState } from '@/lib/terminalReducer';
import { commandRegistry } from '@/lib/commands/index';
import { OutputLine } from '@/types/terminal';
import TerminalOutput from '@/components/TerminalOutput/TerminalOutput';
import TerminalInput from '@/components/TerminalInput/TerminalInput';
import styles from './TerminalShell.module.css';

const BOOT_LINES: { content: string; delay: number }[] = [
  { content: 'RETRO TERMINAL v1.0', delay: 200 },
  { content: 'Initializing...', delay: 600 },
  { content: 'Ready.', delay: 1100 },
  { content: '', delay: 1400 },
  { content: "Type 'help' for available commands.", delay: 1600 },
];

export default function TerminalShell() {
  const [state, dispatch] = useReducer(terminalReducer, initialState);
  const inputRef = useRef<HTMLInputElement>(null);

  // Boot sequence: append lines one at a time, then enable input
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    BOOT_LINES.forEach(({ content, delay }) => {
      timers.push(
        setTimeout(() => {
          dispatch({
            type: 'APPEND_LINES',
            payload: [{ id: crypto.randomUUID(), type: 'system', content }],
          });
        }, delay)
      );
    });

    const finalDelay = BOOT_LINES[BOOT_LINES.length - 1].delay + 200;
    timers.push(
      setTimeout(() => {
        dispatch({ type: 'SET_BOOTING', payload: false });
        inputRef.current?.focus();
      }, finalDelay)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  const handleSubmit = useCallback(
    (rawInput: string) => {
      const trimmed = rawInput.trim();
      if (!trimmed) return;

      // Echo what the user typed
      const echoLine: OutputLine = { id: crypto.randomUUID(), type: 'input', content: `> ${trimmed}` };
      dispatch({ type: 'APPEND_LINES', payload: [echoLine] });
      dispatch({ type: 'CLEAR_INPUT' });

      // Handle y/n confirmation if one is pending
      if (state.pendingConfirmation) {
        const answer = trimmed.toLowerCase();
        if (answer === 'y') {
          state.pendingConfirmation.onConfirm();
          dispatch({ type: 'SET_CONFIRMATION', payload: null });
          dispatch({
            type: 'APPEND_LINES',
            payload: [{ id: crypto.randomUUID(), type: 'system', content: 'Action confirmed.' }],
          });
        } else if (answer === 'n') {
          state.pendingConfirmation.onCancel();
          dispatch({ type: 'SET_CONFIRMATION', payload: null });
          dispatch({
            type: 'APPEND_LINES',
            payload: [{ id: crypto.randomUUID(), type: 'system', content: 'Cancelled.' }],
          });
        } else {
          dispatch({
            type: 'APPEND_LINES',
            payload: [{ id: crypto.randomUUID(), type: 'error', content: 'Please respond with y or n.' }],
          });
        }
        return;
      }

      // Normal command dispatch
      const normalized = trimmed.toLowerCase();
      const [commandName, ...args] = normalized.split(/\s+/);
      const command = commandRegistry[commandName];

      if (!command) {
        dispatch({
          type: 'APPEND_LINES',
          payload: [
            {
              id: crypto.randomUUID(),
              type: 'error',
              content: `Command not found: '${commandName}'. Type 'help' for a list of commands.`,
            },
          ],
        });
        return;
      }

      const result = command.execute(args);
      dispatch({ type: 'APPEND_LINES', payload: result.lines });

      if (result.confirmation) {
        dispatch({
          type: 'SET_CONFIRMATION',
          payload: { commandName, ...result.confirmation },
        });
      }
    },
    [state.pendingConfirmation]
  );

  // Clicking anywhere on the background re-focuses the input
  const handleBackgroundClick = () => inputRef.current?.focus();

  return (
    <div className={styles.background} onClick={handleBackgroundClick}>
      <div className={styles.panel} onClick={(e) => e.stopPropagation()}>
        <div className={styles.titleBar}>
          <span className={styles.titleText}>visitor@portfolio:~$</span>
          <span className={styles.titleMeta}>L{state.history.length + 1}</span>
        </div>
        <TerminalOutput lines={state.history} />
        <TerminalInput
          ref={inputRef}
          value={state.inputValue}
          onChange={(value) => dispatch({ type: 'SET_INPUT', payload: value })}
          onSubmit={handleSubmit}
          disabled={state.isBooting}
          isConfirming={state.pendingConfirmation !== null}
        />
        <div className={styles.statusBar}>
          <div className={styles.statusLeft}>
            <span className={styles.statusChip}>Terminal</span>
            <span className={styles.statusChip}>
              {state.pendingConfirmation ? 'CONFIRM' : state.isBooting ? 'BOOT' : 'INPUT'}
            </span>
          </div>
          <span className={styles.statusRight}>type &apos;help&apos; for commands</span>
        </div>
      </div>
    </div>
  );
}
