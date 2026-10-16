import React, { useState } from 'react';
import { HeaderBanner } from '../components/HeaderBanner';
import { X } from 'lucide-react';
import { BLOG_POSTS, BlogPost, BUSINESS_INFO } from '../data/wellnessData';
import { IMAGES } from '../assets/images';

interface BlogPageProps {
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({
  onNavigate,
  onOpenBooking
}) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Mindfulness & Rest', 'Ayurvedic Insights', 'Therapeutic Bodywork', 'Maternal Wellness', 'Family Health'];

  const filteredPosts = activeCategory === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(p => p.category === activeCategory);

  const getPostImage = (index: number) => {
    const list = [
      IMAGES.heroAyurvedicSpa,
      IMAGES.shirodharaTherapy,
      IMAGES.potliHerbalCompress,
      IMAGES.cardMassageTherapy,
      IMAGES.hotStoneTherapy,
      IMAGES.heroOtiumStyle
    ];
    return list[index % list.length];
  };

  return (
    <div className="w-full">
      <HeaderBanner
        title="Blog"
        currentPage="Blog"
        onNavigate={onNavigate}
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          
          <div className="text-center mb-10">
            <h2
              style={{
                fontFamily: 'London, sans-serif',
                fontSize: '32px',
                fontWeight: 400,
                lineHeight: '32px',
                color: '#333',
              }}
              className="uppercase tracking-normal mb-3"
            >
              WELLNESS &amp; AYURVEDIC INSIGHTS
            </h2>

            <p
              style={{
                fontFamily: '"Open Sans", sans-serif',
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '24px',
                color: '#333',
              }}
              className="max-w-xl mx-auto"
            >
              Explorations of traditional Ayurveda, restorative massage therapy, and self-care practices for ladies and children.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full transition-colors cursor-pointer ${
                  activeCategory === c
                    ? 'bg-[#222f27] text-white'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Blog Cards Grid matching reference screenshot 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article
                key={post.id}
                className="bg-white border border-stone-200/80 rounded-2xl flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="h-56 relative overflow-hidden bg-stone-100">
                    <img
                      src={getPostImage(index)}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#9c6a46] text-white text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-sm shadow-xs">
                      Blog
                    </div>
                  </div>

                  <div className="p-6">
                    <h3
                      style={{
                        fontFamily: 'London, sans-serif',
                        fontSize: '18px',
                        fontWeight: 400,
                        lineHeight: '24px',
                        color: '#333',
                      }}
                      className="uppercase mb-3"
                    >
                      {post.title}
                    </h3>

                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: '14px',
                        fontWeight: 400,
                        lineHeight: '22px',
                        color: '#666',
                      }}
                      className="line-clamp-3"
                    >
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <button
                    onClick={() => setSelectedPost(post)}
                    className="btn-ref-dark px-5 py-2.5 cursor-pointer inline-flex items-center gap-1"
                  >
                    <span>READ MORE</span>
                    <span>→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLE READER MODAL */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-300 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            
            <div className="bg-[#222f27] text-white p-6 flex items-start justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#f0c987] font-bold block mb-1">
                  {selectedPost.category} · {selectedPost.readTime}
                </span>
                <h3
                  style={{
                    fontFamily: 'London, sans-serif',
                    fontSize: '22px',
                    fontWeight: 400,
                    lineHeight: '28px',
                    color: '#fff',
                  }}
                  className="uppercase"
                >
                  {selectedPost.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedPost(null)}
                className="p-1 text-stone-400 hover:text-white transition-colors cursor-pointer shrink-0 ml-4"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div
              style={{
                fontFamily: '"Open Sans", sans-serif',
                fontSize: '15px',
                fontWeight: 400,
                lineHeight: '24px',
                color: '#333',
              }}
              className="p-8 max-h-[60vh] overflow-y-auto space-y-4"
            >
              {selectedPost.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}

              <div className="mt-6 p-4 bg-[#FAF9F6] border border-stone-200 rounded-xl text-xs text-stone-600">
                <strong className="text-stone-900 block mb-1">Experience this care at Rise to Wellness</strong>
                Book a session with Dr. Hargeet Kaur (B.A.M.S. ; R.H. ; R.M.T.) in Cornerstone NE, Calgary. Exclusively for ladies &amp; children.
              </div>
            </div>

            <div className="bg-stone-50 p-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-stone-600">
                Direct phone booking: <strong>(825) 733-6007</strong>
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setSelectedPost(null);
                    onOpenBooking();
                  }}
                  className="btn-ref-brown px-6 py-2.5 cursor-pointer"
                >
                  BOOK APPOINTMENT
                </button>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="btn-ref-outline px-4 py-2.5 cursor-pointer"
                >
                  CLOSE
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
