# Retro Terminal Portfolio

My personal portfolio site with a retro terminal interface. Visitors interact by typing commands into the terminal. Built with Next.js (App Router, TypeScript), statically exported, and deployed on AWS Amplify.

## Commands

All commands are case-insensitive.

| Command           | Behavior                                                           |
|-------------------|--------------------------------------------------------------------|
| `help`            | List all available commands                                        |
| `about`           | Display background info                                            |
| `services`        | Overview of AI engineering services                                |
| `certifications`  | Current certifications with Microsoft verification link            |
| `resume`          | Prompts y/n confirmation, then downloads resume PDF                |
| `github`          | Prompts y/n confirmation, then opens GitHub profile in new tab     |
| `linkedin`        | Prompts y/n confirmation, then opens LinkedIn profile in new tab   |

## Tech Stack

- **Framework**: Next.js 15 (App Router, TypeScript, static export)
- **Styling**: CSS Modules, VT323 font via `next/font/google`
- **Hosting**: AWS Amplify (GitHub-connected, auto-deploy on push to `main`)

## Project Structure

```
app/                        Next.js App Router — layout, page, global styles
components/
  TerminalShell/            Orchestrator: owns all state, boot sequence, submit handler
  TerminalOutput/           Presentational: renders scrollable history lines
  TerminalInput/            Presentational: controlled input with prompt glyph
lib/
  commands/                 One file per command + registry index
  terminalReducer.ts        useReducer logic — all state transitions
types/
  terminal.ts               Shared TypeScript interfaces (Command, OutputLine, etc.)
public/
  resume.pdf                Resume file (add before deploying)
```

## Adding a Command

1. Create `lib/commands/yourcommand.ts` implementing the `Command` interface from `types/terminal.ts`.
2. Add an entry to the registry in `lib/commands/index.ts`.

The `help` command reads the registry automatically — no other changes needed.

## Deployment

AWS Amplify is connected to the `main` branch of this repo. Pushing to `main` triggers an automatic deploy.

- **Build command**: `npm run build`
- **Output directory**: `out`
