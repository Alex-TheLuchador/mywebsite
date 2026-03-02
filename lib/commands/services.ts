import { Command } from '@/types/terminal';
import { content } from '@/lib/content';

export const servicesCommand: Command = {
  name: 'services',
  description: 'Overview of AI engineering services',
  execute: () => ({
    lines: [
      { id: crypto.randomUUID(), type: 'output', content: '[ AI Engineering Services ]' },
      { id: crypto.randomUUID(), type: 'output', content: '' },
      { id: crypto.randomUUID(), type: 'output', content: content.services.body },
    ],
  }),
};
