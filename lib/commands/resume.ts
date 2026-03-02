import { Command } from '@/types/terminal';

export const resumeCommand: Command = {
  name: 'resume',
  description: 'Download resume PDF',
  execute: () => ({
    lines: [
      {
        id: crypto.randomUUID(),
        type: 'system',
        content: 'This will download a PDF of my resume to your computer. OK to proceed? (y/n)',
      },
    ],
    confirmation: {
      onConfirm: () => {
        const anchor = document.createElement('a');
        anchor.href = '/resume.pdf';
        anchor.download = 'resume.pdf';
        anchor.click();
      },
      onCancel: () => {},
    },
  }),
};
