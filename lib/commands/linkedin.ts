import { Command } from '@/types/terminal';
import { content } from '@/lib/content';

export const linkedinCommand: Command = {
  name: 'linkedin',
  description: 'Open LinkedIn profile in a new tab',
  execute: () => ({
    lines: [
      {
        id: crypto.randomUUID(),
        type: 'system',
        content: 'This will open my LinkedIn in a new tab. OK to proceed? (y/n)',
      },
    ],
    confirmation: {
      onConfirm: () => window.open(content.links.linkedin, '_blank', 'noopener,noreferrer'),
      onCancel: () => {},
    },
  }),
};
