import { motion } from 'framer-motion';
import { Search, Filter, Bookmark, Download, Lock, Star, TrendingUp, Clock, FolderOpen, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { RESOURCE_CATEGORIES, RESOURCE_DIFFICULTIES, RESOURCE_TYPES } from '@/lib/constants';
import { getResources } from '@/data/resources';
import type { Resource } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';

export function ResourceCenter() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [grade, setGrade] = useState('all');
  const [difficulty, setDifficulty] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [page, setPage] = useState(1);
  const [resources, setResources] = useState<Resource[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const result = await getResources({
        search: search || undefined,
        category: category !== 'all' ? category : undefined,
        grade: grade !== 'all' ? grade : undefined,
        difficulty: difficulty !== 'all' ? difficulty : undefined,
        sortBy,
        page,
        limit: 12,
      });
      setResources(result.resources);
      setTotal(result.total);
    } finally {
      setLoading(false);
    }
  };

  const totalPages = Math.ceil(total / 12);

  return (
    <section id="resources" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Mathematics Resource Center</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Your premium digital library for mathematics education. Search, filter, and download
            resources tailored to your learning needs.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search resources..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              className="pl-10"
            />
          </div>
          <Button onClick={handleSearch} className="gap-2">
            <Search className="h-4 w-4" />
            Search
          </Button>
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          <Select value={category} onValueChange={(v) => { setCategory(v); setPage(1); }}>
            <SelectTrigger className="w-full sm:w-44"><SelectValue placeholder="Category" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {RESOURCE_CATEGORIES.map((cat) => (
                <SelectItem key={cat} value={cat}>{cat}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={grade} onValueChange={(v) => { setGrade(v); setPage(1); }}>
            <SelectTrigger className="w-full sm:w-44"><SelectValue placeholder="Grade Level" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Grades</SelectItem>
              <SelectItem value="Grade 10">Grade 10</SelectItem>
              <SelectItem value="Grade 11">Grade 11</SelectItem>
              <SelectItem value="Grade 12">Grade 12</SelectItem>
              <SelectItem value="Tertiary">Tertiary</SelectItem>
            </SelectContent>
          </Select>

          <Select value={difficulty} onValueChange={(v) => { setDifficulty(v); setPage(1); }}>
            <SelectTrigger className="w-full sm:w-44"><SelectValue placeholder="Difficulty" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              {RESOURCE_DIFFICULTIES.map((d) => (
                <SelectItem key={d} value={d}>{d}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={(v) => { setSortBy(v); setPage(1); }}>
            <SelectTrigger className="w-full sm:w-44"><SelectValue placeholder="Sort by" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="title">Title A-Z</SelectItem>
              <SelectItem value="difficulty">Difficulty</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="rounded-xl border border-gray-800 bg-[#161B22] p-4 space-y-3">
                <Skeleton className="h-40 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {resources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-8">
                <Button variant="outline" size="sm" disabled={page <= 1} onClick={() => setPage(page - 1)}>Previous</Button>
                <span className="text-sm text-gray-400">Page {page} of {totalPages}</span>
                <Button variant="outline" size="sm" disabled={page >= totalPages} onClick={() => setPage(page + 1)}>Next</Button>
              </div>
            )}
          </>
        )}

        {!loading && resources.length === 0 && (
          <div className="text-center py-12">
            <FolderOpen className="h-12 w-12 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400">No resources found. Try adjusting your filters.</p>
          </div>
        )}
      </div>
    </section>
  );
}

function ResourceCard({ resource }: { resource: Resource }) {
  const [bookmarked, setBookmarked] = useState(resource.bookmarked);
  const [favorited, setFavorited] = useState(resource.favorited);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <Card className="flex flex-col h-full hover:shadow-glow transition-shadow duration-300 group">
        <div className="relative h-40 bg-gradient-to-br from-gray-800 to-gray-900 rounded-t-xl overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <BookOpen className="h-12 w-12 text-gray-600 group-hover:text-blue-400 transition-colors" />
          </div>
          {resource.premiumStatus === 'premium' && (
            <div className="absolute top-2 right-2">
              <Badge variant="premium" className="gap-1">
                <Lock className="h-3 w-3" /> Premium
              </Badge>
            </div>
          )}
          <Badge variant={resource.premiumStatus === 'free' ? 'free' : 'default'} className="absolute top-2 left-2">
            {resource.premiumStatus === 'free' ? 'Free' : 'Premium'}
          </Badge>
        </div>

        <CardHeader className="pb-2">
          <CardTitle className="text-base leading-tight">{resource.title}</CardTitle>
          <CardDescription className="line-clamp-2">{resource.description}</CardDescription>
        </CardHeader>

        <CardContent className="flex-1 space-y-2">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Badge variant="secondary">{resource.category}</Badge>
            <Badge variant="outline">{resource.difficulty}</Badge>
          </div>
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {resource.estimatedStudyTime}</span>
            <span className="flex items-center gap-1"><Download className="h-3 w-3" /> {resource.downloads}</span>
          </div>
        </CardContent>

        <CardFooter className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 gap-1"
            onClick={() => setBookmarked(!bookmarked)}
          >
            <Bookmark className={`h-3 w-3 ${bookmarked ? 'fill-blue-500 text-blue-500' : ''}`} />
            {bookmarked ? 'Saved' : 'Save'}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="gap-1"
            onClick={() => setFavorited(!favorited)}
          >
            <Star className={`h-3 w-3 ${favorited ? 'fill-gold text-gold' : ''}`} />
          </Button>
          {resource.premiumStatus === 'premium' ? (
            <Button variant="gradient" size="sm" className="flex-1" asChild>
              <Link href={`/resource/${resource.id}`}>Unlock</Link>
            </Button>
          ) : (
            <Button variant="default" size="sm" className="flex-1 gap-1" asChild>
              <a href={resource.url} download>
                <Download className="h-3 w-3" /> Download
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}