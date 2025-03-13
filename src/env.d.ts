interface ImportMetaEnv {
  readonly EMAIL_SERVICE: string;
  readonly EMAIL_ACCOUNT: string;
  readonly EMAIL_PASSWORD: string;
  readonly EMAIL_RECEPTOR: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
