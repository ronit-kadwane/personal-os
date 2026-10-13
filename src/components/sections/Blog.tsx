'use client';

import { motion } from 'framer-motion';
import { Clock, ArrowUpRight, BookOpen } from 'lucide-react';
import { blogPosts, type BlogPost } from '@/data/portfolio';
import { Badge } from '@/components/ui/Badge';
import { formatDate, cn } from '@/lib/utils';

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={cn(
        'group rounded-2xl overflow-hidden border border-zinc-800/60 bg-zinc-900 cursor-pointer',
        'transition-all duration-300 hover:border-zinc-700 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-0.5',
        post.featured ? 'md:col-span-1' : '',
      )}
      role="link"
      tabIndex={0}
      aria-label={`Read article: ${post.title}`}
    >
      {/* Cover */}
      <div className={cn('relative h-32 bg-gradient-to-br', post.coverGradient)} aria-hidden="true">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)',
            backgroundSize: '20px 20px',
          }}
        />
        <div className="absolute top-3 right-3">
          <ArrowUpRight
            size={16}
            className="text-white/60 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
          />
        </div>
        <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white/70 text-xs font-mono">
          <Clock size={10} />
          {post.readingTime}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {post.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} size="sm" variant="indigo">
              {tag}
            </Badge>
          ))}
        </div>

        <h3 className="text-base font-bold text-zinc-100 leading-snug mb-2.5 group-hover:text-white transition-colors">
          {post.title}
        </h3>
        <p className="text-sm text-zinc-400 leading-relaxed line-clamp-2 mb-4">
          {post.excerpt}
        </p>

        <time
          dateTime={post.publishedAt}
          className="text-xs text-zinc-600 font-mono"
        >
          {formatDate(post.publishedAt)}
        </time>
      </div>
    </motion.article>
  );
}

export function Blog() {
  const featured = blogPosts.filter((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

  return (
    <section id="blog" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <Badge variant="indigo" className="mb-4">
            <BookOpen size={10} />
            Writing & Ideas
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-4">
            From the Blog
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Technical deep-dives, engineering lessons, and freelance insights.
          </p>
        </motion.div>

        {/* Featured posts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {featured.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </div>

        {/* Rest */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {rest.map((post, i) => (
            <BlogCard key={post.id} post={post} index={featured.length + i} />
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href={`https://ronitkadwane.substack.com`}
            target="_blank"
            rel="noopener noreferrer"
            id="blog-view-all"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white text-sm font-semibold transition-all duration-200"
          >
            View All Articles on Substack
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
