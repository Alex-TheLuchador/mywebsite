import { Command, OutputLine } from '@/types/terminal';

// Receives the registry at call time to avoid a circular import with index.ts
export const helpCommand: Command = {
  name: 'help',
  description: 'List all available commands',
  execute: () => {
    // Lazily require the registry to break the circular dependency
    const { commandRegistry } = require('./index') as { commandRegistry: Record<string, Command> };

    const lines: OutputLine[] = [
      { id: crypto.randomUUID(), type: 'output', content: '[ Available Commands ]' },
      { id: crypto.randomUUID(), type: 'output', content: '' },
    ];

    for (const command of Object.values(commandRegistry)) {
      lines.push({
        id: crypto.randomUUID(),
        type: 'output',
        content: `  ${command.name.padEnd(16)} ${command.description}`,
      });
    }

    return { lines };
  },
};
