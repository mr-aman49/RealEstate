export interface DocsSidebarItem {
    title: string
    items?: {
      title: string
      href: string
      disabled?: boolean
    }[]
  }
  
  export interface TableOfContents {
    title: string
    slug: string
    level: 1 | 2
  }
  
  export interface DocsConfig {
    sidebarNav: DocsSidebarItem[]
    tableOfContents: TableOfContents[]
    mainContent: string
  }