import fs from "fs"
import path from "path"

const BLOG_DIR = path.join(process.cwd(), "content/blog")

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  tags: string[]
  content: string
}

function parseFrontmatter(content: string): {
  frontmatter: Record<string, unknown>
  content: string
} {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)
  if (!match) {
    return { frontmatter: {}, content }
  }

  const frontmatterStr = match[1]
  const actualContent = match[2]

  const frontmatter: Record<string, unknown> = {}
  frontmatterStr.split("\n").forEach((line) => {
    const colonIndex = line.indexOf(":")
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim()
      const value = line.slice(colonIndex + 1).trim()
      frontmatter[key] = value
    }
  })

  return { frontmatter, content: actualContent }
}

export function getBlogPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return []
  }

  const files = fs.readdirSync(BLOG_DIR)
  const posts: BlogPost[] = []

  files
    .filter((file) => file.endsWith(".mdx"))
    .forEach((file) => {
      const slug = file.replace(/\.mdx$/, "")
      const filePath = path.join(BLOG_DIR, file)
      const source = fs.readFileSync(filePath, "utf8")

      const { frontmatter } = parseFrontmatter(source)

      posts.push({
        slug,
        title: String(frontmatter.title || ""),
        description: String(frontmatter.description || ""),
        date: String(frontmatter.date || ""),
        author: String(frontmatter.author || ""),
        tags: Array.isArray(frontmatter.tags)
          ? (frontmatter.tags as string[])
          : [],
        content: source,
      })
    })

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getBlogPost(slug: string): BlogPost | null {
  const posts = getBlogPosts()
  return posts.find((post) => post.slug === slug) || null
}
