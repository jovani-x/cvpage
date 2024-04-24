/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_NODE_ENV: string
  readonly VITE_NODE_PERSON_DATA_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
