export const languages = {
  'pt-br': 'Português',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'pt-br';

/**
 * Extrai o locale a partir da URL atual.
 * /en/blog → 'en', /blog → 'pt-br'
 */
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

/**
 * Gera a URL alternativa para o idioma alvo.
 * Ex: /blog/slug → /en/blog/slug, /en/blog/slug → /blog/slug
 */
export function getAlternateUrl(pathname: string, targetLang: Lang): string {
  const currentLang = getLangFromPathname(pathname);

  // Remove prefixo atual se existir
  let cleanPath = pathname;
  if (currentLang !== defaultLang) {
    cleanPath = pathname.replace(`/${currentLang}`, '') || '/';
  }

  // Adiciona prefixo do target se não for o idioma padrão
  if (targetLang === defaultLang) {
    return cleanPath;
  }
  return `/${targetLang}${cleanPath}`;
}

function getLangFromPathname(pathname: string): Lang {
  const [, lang] = pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

/**
 * Gera um path com o prefixo do locale correto.
 * localePath('/blog', 'en') → '/en/blog'
 * localePath('/blog', 'pt-br') → '/blog'
 */
export function localePath(path: string, lang: Lang): string {
  if (lang === defaultLang) return path;
  return `/${lang}${path}`;
}

// ─── UI Dictionary ───────────────────────────────────────────────

export const ui = {
  'pt-br': {
    // Navigation
    'nav.blog': 'Blog',
    'nav.contact': 'Contato',

    // Hero
    'hero.greeting': 'Olá, eu sou',
    'hero.description':
      'Desenvolvedor de Software na <strong>Luizalabs</strong>, criando soluções desde 2018. Apaixonado por tecnologia, boas práticas e compartilhar conhecimento.',
    'hero.cta.blog': 'Ler o Blog',
    'hero.cta.contact': 'Contato',
    'hero.stat.years': 'anos de experiência',
    'hero.typing.0': 'Desenvolvedor de Software',
    'hero.typing.1': 'Criando soluções digitais',
    'hero.typing.2': 'Engenheiro de Software',
    'hero.typing.3': 'Compartilhando conhecimento',

    // Contact Modal
    'contact.title': 'Vamos conversar?',
    'contact.subtitle': 'Escolha o melhor canal para entrar em contato',
    'contact.linkedin': 'LinkedIn',
    'contact.linkedin.desc': 'Conecte-se comigo',
    'contact.email': 'Email',
    'contact.close': 'Fechar',

    // Blog
    'blog.title': 'Blog',
    'blog.subtitle': 'Artigos sobre tecnologia, desenvolvimento e carreira',
    'blog.all': 'Todos',
    'blog.empty': 'Em breve teremos conteúdo por aqui! 🚀',
    'blog.readArticle': 'Ler artigo',

    // Blog Post
    'post.breadcrumb.home': 'Home',
    'post.breadcrumb.blog': 'Blog',
    'post.updatedAt': 'Atualizado em',
    'post.share': 'Compartilhar',
    'post.linkCopied': 'Link copiado!',
    'post.copyLink': 'Copiar link',
    'post.author.role': 'Desenvolvedor de Software @ Luizalabs',

    // TOC
    'toc.title': 'Sumário',

    // Footer
    'footer.madeWith': 'Feito com',
    'footer.and': 'e Astro',

    // 404
    '404.code': '404',
    '404.title': 'Página não encontrada',
    '404.description': 'A página que você procura não existe ou foi movida.',
    '404.back': 'Voltar ao início',

    // Meta
    'meta.home.title': 'Home',
    'meta.home.description':
      'Allan Lobo — Desenvolvedor de Software na Luizalabs. Blog sobre tecnologia, carreira e desenvolvimento.',
    'meta.blog.description':
      'Blog do Allan Lobo — Artigos sobre desenvolvimento de software, tecnologia, carreira e boas práticas.',
    'meta.404.title': 'Página não encontrada',
    'meta.404.description': 'A página que você procura não existe.',

    // Reading time
    'reading.time': 'min de leitura',
  },

  en: {
    // Navigation
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',

    // Hero
    'hero.greeting': "Hi, I'm",
    'hero.description':
      'Software Developer at <strong>Luizalabs</strong>, building solutions since 2018. Passionate about technology, best practices, and sharing knowledge.',
    'hero.cta.blog': 'Read the Blog',
    'hero.cta.contact': 'Contact',
    'hero.stat.years': 'years of experience',
    'hero.typing.0': 'Software Developer',
    'hero.typing.1': 'Building digital solutions',
    'hero.typing.2': 'Software Engineer',
    'hero.typing.3': 'Sharing knowledge',

    // Contact Modal
    'contact.title': "Let's talk?",
    'contact.subtitle': 'Choose the best channel to get in touch',
    'contact.linkedin': 'LinkedIn',
    'contact.linkedin.desc': 'Connect with me',
    'contact.email': 'Email',
    'contact.close': 'Close',

    // Blog
    'blog.title': 'Blog',
    'blog.subtitle': 'Articles about technology, development, and career',
    'blog.all': 'All',
    'blog.empty': "Content coming soon! 🚀",
    'blog.readArticle': 'Read article',

    // Blog Post
    'post.breadcrumb.home': 'Home',
    'post.breadcrumb.blog': 'Blog',
    'post.updatedAt': 'Updated on',
    'post.share': 'Share',
    'post.linkCopied': 'Link copied!',
    'post.copyLink': 'Copy link',
    'post.author.role': 'Software Developer @ Luizalabs',

    // TOC
    'toc.title': 'Table of Contents',

    // Footer
    'footer.madeWith': 'Made with',
    'footer.and': 'and Astro',

    // 404
    '404.code': '404',
    '404.title': 'Page not found',
    '404.description':
      "The page you're looking for doesn't exist or has been moved.",
    '404.back': 'Back to home',

    // Meta
    'meta.home.title': 'Home',
    'meta.home.description':
      'Allan Lobo — Software Developer at Luizalabs. Blog about technology, career, and software development.',
    'meta.blog.description':
      "Allan Lobo's Blog — Articles about software development, technology, career, and best practices.",
    'meta.404.title': 'Page not found',
    'meta.404.description': "The page you're looking for doesn't exist.",

    // Reading time
    'reading.time': 'min read',
  },
} as const;

export type UiKey = keyof (typeof ui)[typeof defaultLang];

/**
 * Retorna uma função `t(key)` para traduzir strings de UI.
 */
export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    const safeLang = ui[lang] ? lang : defaultLang;
    return ui[safeLang][key] || ui[defaultLang][key] || key;
  };
}

/**
 * Retorna o locale para formatação de datas.
 */
export function getDateLocale(lang: Lang): string {
  return lang === 'pt-br' ? 'pt-BR' : 'en-US';
}
