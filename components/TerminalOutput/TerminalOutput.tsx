'use client';

import { useEffect, useRef } from 'react';
import { OutputLine } from '@/types/terminal';
import styles from './TerminalOutput.module.css';

interface Props {
  lines: OutputLine[];
}

export default function TerminalOutput({ lines }: Props) {
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom whenever history grows
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'instant' });
  }, [lines]);

  return (
    <div className={styles.container}>
      {lines.map((line) => (
        <div key={line.id} className={`${styles.line} ${styles[line.type]}`}>
          {line.commandRow ? (
            <span className={styles.commandRow}>
              <span className={styles.commandName}>{line.commandRow.name}</span>
              <span className={styles.commandDesc}>{line.commandRow.description}</span>
            </span>
          ) : line.href ? (
            <a href={line.href} target="_blank" rel="noopener noreferrer" className={styles.link}>
              {line.content}
            </a>
          ) : (
            line.content || '\u00A0' // render empty lines as non-breaking space to preserve height
          )}
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  );
}
