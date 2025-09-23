import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { CyberButton } from '@/components/ui/cyber-button';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  readTime: string;
  author: string;
}

interface BlogCarouselProps {
  posts: BlogPost[];
}

export const BlogCarousel = ({ posts }: BlogCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  // Auto-scroll
  useEffect(() => {
    if (!emblaApi) return;
    
    const interval = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="relative">
      {/* Carousel Controls */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-cyber-cyan">
          NEURAL_BLOG_POSTS
        </h2>
        <div className="flex gap-4">
          <button
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
            className={`px-4 py-2 box-3d font-tech text-sm transition-all duration-300 ${
              prevBtnEnabled 
                ? 'text-cyber-cyan hover:border-cyber-cyan/50' 
                : 'text-muted-foreground cursor-not-allowed'
            }`}
          >
            ← PREV
          </button>
          <button
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
            className={`px-4 py-2 box-3d font-tech text-sm transition-all duration-300 ${
              nextBtnEnabled 
                ? 'text-cyber-cyan hover:border-cyber-cyan/50' 
                : 'text-muted-foreground cursor-not-allowed'
            }`}
          >
            NEXT →
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {posts.map((post) => (
            <div 
              key={post.id} 
              className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4"
            >
              <div className="box-3d rounded-lg backdrop-blur-sm hover:border-cyber-cyan/50 transition-all duration-300 group h-full">
                <div className="aspect-video bg-gradient-to-br from-cyber-cyan/20 to-cyber-purple/20 rounded-t-lg mb-6 flex items-center justify-center">
                  <div className="text-cyber-cyan font-tech text-lg">
                    {post.title === 'COMING SOON' ? 'COMING_SOON' : 'AI_VISUAL_DATA'}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-cyber-cyan font-tech text-xs px-3 py-1 border border-cyber-cyan/30 rounded">
                      {post.category}
                    </span>
                    <span className="text-foreground/60 font-tech text-xs">
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-foreground font-tech text-xl font-semibold mb-3 group-hover:text-cyber-cyan transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-foreground/70 font-tech text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-foreground/60 font-tech text-xs">
                      <div>{post.author}</div>
                      <div>{post.date}</div>
                    </div>
                    <CyberButton 
                      variant="ghost" 
                      size="sm" 
                      className="font-tech text-xs"
                      disabled={post.title === 'COMING SOON'}
                    >
                      {post.title === 'COMING SOON' ? 'SOON...' : 'READ_MORE →'}
                    </CyberButton>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};