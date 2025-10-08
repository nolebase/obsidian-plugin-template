import { writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { cwd } from 'node:process'

import packageJSON from '../package.json' with { type: 'json' }

interface ObsidianPluginManifest {
  id: string
  name: string
  version: string
  minAppVersion: string
  description: string
  author: string
  authorUrl: string
  isDesktopOnly: boolean
}

export async function generateObsidianPluginManifest() {
  const manifest = {
    id: 'obsidian-plugin-template',
    name: 'Obsidian Template Plugin',
    version: packageJSON.version,
    minAppVersion: '1.4.0',
    description: 'Obsidian Template Plugin',
    author: 'Nolebase',
    authorUrl: 'https://github.com/nolebase',
    isDesktopOnly: false,
  } satisfies ObsidianPluginManifest

  await writeFile(join(cwd(), 'dist', 'manifest.json'), JSON.stringify(manifest, null, 2))
}
