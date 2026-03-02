import { Command } from '@/types/terminal';
import { content } from '@/lib/content';

export const githubCommand: Command = {
  name: 'github',
  description: 'Open GitHub profile in a new tab',
  execute: () => ({
    lines: [
      {
        id: crypto.randomUUID(),
        type: 'system',
        content: 'This will open my GitHub in a new tab. OK to proceed? (y/n)',
      },
    ],
    confirmation: {
      onConfirm: () => window.open(content.links.github, '_blank', 'noopener,noreferrer'),
      onCancel: () => {},
    },
  }),
};
