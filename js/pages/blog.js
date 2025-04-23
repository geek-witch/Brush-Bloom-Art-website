document.addEventListener('DOMContentLoaded', function() {
    // Sample data for blog posts
    const allBlogPosts = [
        {
            id: "art-collecting-101",
            title: "Art Collecting 101: How to Start Your Collection",
            excerpt: "A beginner's guide to starting your own art collection, from setting a budget to finding pieces you love.",
            content: `
                <p>Starting an art collection can seem intimidating, but it doesn't have to be. Whether you're looking to invest or simply want to surround yourself with beautiful works that speak to you, this guide will help you begin your journey as an art collector.</p>
                
                <h2>Set Your Budget</h2>
                <p>Before you start browsing galleries or art fairs, determine how much you're willing to spend. Art collecting doesn't require millions—many collectors begin with prints, photographs, or works by emerging artists that can be acquired for a few hundred dollars.</p>
                
                <h2>Discover Your Taste</h2>
                <p>Visit museums, galleries, and art fairs to discover what styles and mediums resonate with you. Take note of what catches your eye and why. Are you drawn to bold abstract paintings, delicate watercolors, or thought-provoking photography? Understanding your preferences will guide your collecting journey.</p>
                
                <h2>Research Artists and Markets</h2>
                <p>Once you've identified artists whose work you admire, research their background, career trajectory, and market value. Look for artists who have exhibited in reputable galleries or have been recognized by critics, but ultimately, buy what you love—not just what might appreciate in value.</p>
                
                <h2>Build Relationships</h2>
                <p>Develop relationships with gallery owners, art advisors, and other collectors. These connections can provide valuable insights, introduce you to new artists, and sometimes offer early access to works before they're publicly available.</p>
                
                <h2>Consider Practical Matters</h2>
                <p>Think about where you'll display the artwork and how you'll care for it. Consider factors like available wall space, lighting conditions, and whether the piece requires special framing or conservation measures.</p>
                
                <h2>Trust Your Instincts</h2>
                <p>While research and advice are important, ultimately, collecting art is a personal journey. Trust your instincts and buy pieces that you connect with emotionally and intellectually—art that you'll be happy to live with for years to come.</p>
                
                <p>Remember, building a collection takes time. Start slowly, learn as you go, and enjoy the process of discovering new artists and works that speak to you.</p>
            `,
            author: "Sarah Johnson",
            authorImage: "../assets/images/author-1.jpg",
            date: "2023-05-15",
            image: "../assets/images/blog-1.jpg",
            category: "collecting",
            tags: ["collecting", "beginners", "investment"],
            featured: true,
            readTime: 8
        },
        {
            id: "interview-emma-chen",
            title: "Artist Spotlight: A Conversation with Emma Chen",
            excerpt: "We sit down with landscape artist Emma Chen to discuss her process, inspiration, and upcoming exhibitions.",
            content: `
                <p>Emma Chen has quickly become one of the most sought-after landscape artists in the contemporary art scene. Her luminous paintings capture the essence of natural environments with a distinctive style that blends traditional techniques with modern sensibilities. We had the opportunity to speak with Emma about her artistic journey, creative process, and what's next for her career.</p>
                
                <h2>On Finding Her Style</h2>
                <p>"I've always been drawn to landscapes, but it took years of experimentation to develop my current approach," Emma explains. "I studied traditional Chinese landscape painting as well as Western techniques, and my work has evolved into a fusion of these influences. I'm particularly interested in how light transforms a scene—how the same location can feel entirely different depending on the time of day or season."</p>
                
                <h2>The Creative Process</h2>
                <p>When asked about her process, Emma describes a combination of plein air studies and studio work. "I spend a lot of time outdoors, observing and making quick sketches or small paintings. These direct observations are crucial, but the larger works happen in the studio, where I can reflect on the experience and distill it into something more personal and evocative."</p>
                
                <p>Emma works primarily in oils, building up multiple translucent layers to achieve the luminous quality that has become her signature. "I'm not interested in photorealistic representation," she notes. "I want to capture the feeling of a place—the emotional response it evokes."</p>
                
                <h2>Sources of Inspiration</h2>
                <p>"Travel has been essential to my development as an artist," Emma says. "I've been fortunate to visit some extraordinary landscapes across Asia, Europe, and North America. Each place has its own light, its own atmosphere. I'm particularly drawn to transitional spaces—shorelines, the edge of forests, the meeting of mountains and sky."</p>
                
                <p>She also cites the influence of other artists, from traditional Chinese landscape masters to J.M.W. Turner and contemporary painters like Peter Doig. "I believe in studying the masters while finding your own voice," she says.</p>
                
                <h2>Upcoming Projects</h2>
                <p>Emma is currently preparing for a solo exhibition titled "Liminal Landscapes," opening next month at the Meridian Gallery. The show will feature a new series of paintings exploring threshold spaces in nature.</p>
                
                <p>"I'm also excited about an upcoming residency in Iceland next year," she adds. "The unique quality of light there, especially during the summer months, has long fascinated me. I'm eager to see how that experience will influence my work."</p>
                
                <p>For aspiring artists, Emma offers this advice: "Develop a regular practice, be patient with yourself, and stay curious. Technical skill is important, but it's your unique perspective that will ultimately define your work."</p>
            `,
            author: "Michael Torres",
            authorImage: "../assets/images/author-2.jpg",
            date: "2023-04-28",
            image: "../assets/images/blog-2.jpg",
            category: "interviews",
            tags: ["interviews", "landscape", "oil painting"],
            featured: false,
            readTime: 12
        },
        {
            id: "digital-art-revolution",
            title: "The Digital Art Revolution: NFTs and Beyond",
            excerpt: "Exploring how digital technology is transforming the art world, from NFTs to immersive installations.",
            content: `
                <p>The art world is experiencing a digital revolution that is fundamentally changing how art is created, bought, sold, and experienced. From the recent explosion of NFTs to immersive digital installations, technology is opening new possibilities for artists and collectors alike.</p>
                
                <h2>The Rise of NFTs</h2>
                <p>Non-fungible tokens (NFTs) burst into the mainstream art market in 2021, with headline-grabbing sales like Beeple's "Everydays: The First 5000 Days," which sold for $69 million at Christie's. NFTs use blockchain technology to create verifiable digital ownership, allowing digital artists to sell original works in a way that wasn't previously possible.</p>
                
                <p>"NFTs have created a new market for digital art by solving the problem of provenance and scarcity," explains digital artist Alex Morgan. "Before NFTs, digital works could be endlessly copied, making it difficult for digital artists to sell 'originals.' Now we can create limited editions or unique pieces with verifiable ownership."</p>
                
                <h2>Beyond the Hype</h2>
                <p>While the initial NFT boom has cooled somewhat, the technology continues to evolve in interesting ways. Artists are exploring more sustainable blockchain options, addressing the environmental concerns associated with early NFTs. Others are experimenting with utility NFTs that offer collectors special access or experiences beyond the artwork itself.</p>
                
                <h2>Immersive Digital Experiences</h2>
                <p>Digital art isn't limited to works that can be displayed on screens. Artists are creating immersive installations that transform physical spaces using projection mapping, interactive elements, and virtual or augmented reality.</p>
                
                <p>Exhibitions like teamLab's permanent museums in Tokyo and installations by artists like Refik Anadol are blurring the boundaries between the digital and physical worlds, creating environments that respond to viewers and evolve over time.</p>
                
                <h2>Democratizing Art</h2>
                <p>Digital technologies are also making art more accessible. Virtual galleries allow people to view exhibitions from anywhere in the world, while social media platforms give artists direct connections to audiences without requiring gallery representation.</p>
                
                <p>"The digital landscape has democratized the art world in many ways," notes curator Elena Rossi. "Artists from regions that have historically been underrepresented in major institutions can now build global followings online. Collectors can discover work from diverse sources rather than relying solely on established galleries."</p>
                
                <h2>The Future of Digital Art</h2>
                <p>As technology continues to advance, we can expect even more innovation in the digital art space. Developments in artificial intelligence, virtual reality, and haptic technology will create new possibilities for artistic expression and audience engagement.</p>
                
                <p>While traditional art forms will certainly endure, digital art has established itself as a significant and evolving part of the contemporary art landscape—one that offers exciting opportunities for creators and collectors willing to explore this new frontier.</p>
            `,
            author: "Jason Wright",
            authorImage: "../assets/images/author-3.jpg",
            date: "2023-04-10",
            image: "../assets/images/blog-3.jpg",
            category: "trends",
            tags: ["digital art", "NFTs", "technology", "trends"],
            featured: false,
            readTime: 10
        },
        {
            id: "color-theory-basics",
            title: "Color Theory Basics Every Artist Should Know",
            excerpt: "Understanding the fundamentals of color theory and how to apply them in your artistic practice.",
            content: `
                <p>Color is one of the most powerful tools in an artist's arsenal. Whether you're a painter, digital artist, or photographer, understanding color theory can dramatically improve your work. This guide covers the essential principles that every artist should know.</p>
                
                <h2>The Color Wheel</h2>
                <p>The color wheel is the foundation of color theory. The traditional color wheel consists of 12 colors:</p>
                <ul>
                    <li><strong>Primary colors:</strong> Red, yellow, and blue. These colors cannot be created by mixing other colors.</li>
                    <li><strong>Secondary colors:</strong> Orange, green, and purple. These are created by mixing two primary colors.</li>
                    <li><strong>Tertiary colors:</strong> These six colors are created by mixing primary and secondary colors (e.g., red-orange, yellow-green).</li>
                </ul>
                
                <h2>Color Harmonies</h2>
                <p>Color harmonies are combinations that are pleasing to the eye. Some basic harmonies include:</p>
                <ul>
                    <li><strong>Complementary:</strong> Colors opposite each other on the color wheel (e.g., blue and orange). These create high contrast and vibrant looks.</li>
                    <li><strong>Analogous:</strong> Colors next to each other on the wheel (e.g., blue, blue-green, green). These create harmonious, less contrasting compositions.</li>
                    <li><strong>Triadic:</strong> Three colors equally spaced around the wheel. These offer contrast while maintaining balance.</li>
                    <li><strong>Monochromatic:</strong> Different tints, tones, and shades of a single color. This creates a cohesive look with subtle variations.</li>
                </ul>
                
                <h2>Color Properties</h2>
                <p>Every color has three main properties:</p>
                <ul>
                    <li><strong>Hue:</strong> The pure color itself (red, blue, etc.).</li>
                    <li><strong>Value:</strong> The lightness or darkness of a color. Adding white creates a tint, while adding black creates a shade.</li>
                    <li><strong>Saturation:</strong> The intensity or purity of a color. Highly saturated colors are vivid, while less saturated colors appear more gray or muted.</li>
                </ul>
                
                <h2>Color Temperature</h2>
                <p>Colors are often described as "warm" or "cool":</p>
                <ul>
                    <li><strong>Warm colors:</strong> Reds, oranges, and yellows evoke feelings of warmth and energy. They tend to advance in space, appearing closer to the viewer.</li>
                    <li><strong>Cool colors:</strong> Blues, greens, and purples evoke calmness and serenity. They tend to recede in space, appearing farther from the viewer.</li>
                </ul>
                
                <h2>Psychological Effects</h2>
                <p>Colors can evoke specific emotions and psychological responses:</p>
                <ul>
                    <li><strong>Red:</strong> Passion, energy, danger</li>
                    <li><strong>Blue:</strong> Calm, trust, stability</li>
                    <li><strong>Yellow:</strong> Happiness, optimism, attention</li>
                    <li><strong>Green:</strong> Nature, growth, harmony</li>
                    <li><strong>Purple:</strong> Luxury, mystery, spirituality</li>
                    <li><strong>Black:</strong> Sophistication, power, elegance</li>
                    <li><strong>White:</strong> Purity, simplicity, cleanliness</li>
                </ul>
                
                <h2>Practical Applications</h2>
                <p>Understanding color theory allows you to:</p>
                <ul>
                    <li>Create depth and dimension in your work</li>
                    <li>Evoke specific moods or emotions</li>
                    <li>Direct the viewer's attention to focal points</li>
                    <li>Ensure your composition is balanced and harmonious</li>
                    <li>Communicate more effectively through your art</li>
                </ul>
                
                <p>Remember that while color theory provides useful guidelines, artistic expression often involves breaking rules. Once you understand the principles, you can choose when to follow them and when to deliberately deviate for creative effect.</p>
            `,
            author: "Lisa Chen",
            authorImage: "../assets/images/author-4.jpg",
            date: "2023-03-22",
            image: "../assets/images/blog-4.jpg",
            category: "tips",
            tags: ["color theory", "techniques", "tips"],
            featured: false,
            readTime: 9
        },
        {
            id: "art-fairs-guide",
            title: "Navigating Art Fairs: A Comprehensive Guide",
            excerpt: "How to make the most of your art fair experience, whether you're an artist, collector, or enthusiast.",
            content: `
                <p>Art fairs have become essential events in the global art calendar, offering opportunities for discovery, networking, and acquisition. Whether you're an artist looking to exhibit, a collector hunting for new works, or simply an art enthusiast, this guide will help you navigate these dynamic events.</p>
                
                <h2>For Visitors</h2>
                
                <h3>Before You Go</h3>
                <ul>
                    <li><strong>Research the fair:</strong> Review the exhibitor list and floor plan in advance. Most fairs have websites or apps with this information.</li>
                    <li><strong>Set a budget:</strong> If you're considering purchases, determine your spending limit beforehand.</li>
                    <li><strong>Wear comfortable shoes:</strong> Art fairs involve a lot of walking on hard surfaces.</li>
                    <li><strong>Plan your visit:</strong> For major fairs, consider attending on a weekday or early in the morning when crowds are smaller.</li>
                </ul>
                
                <h3>During the Fair</h3>
                <ul>
                    <li><strong>Take an initial walk-through:</strong> Get a sense of the layout and note booths you want to revisit.</li>
                    <li><strong>Engage with gallerists:</strong> Don't be intimidated—gallery representatives are there to discuss the work and answer questions.</li>
                    <li><strong>Collect information:</strong> Take gallery cards and exhibition materials for artists whose work interests you.</li>
                    <li><strong>Attend talks and events:</strong> Many fairs offer educational programming that can enhance your understanding of contemporary art.</li>
                    <li><strong>Pace yourself:</strong> Take breaks to avoid visual fatigue, which can diminish your appreciation of the art.</li>
                </ul>
                
                <h2>For Collectors</h2>
                
                <h3>Research and Strategy</h3>
                <ul>
                    <li><strong>VIP access:</strong> Consider VIP or preview passes for first access to works.</li>
                    <li><strong>Develop relationships:</strong> Connect with galleries before the fair and schedule appointments with those representing artists you follow.</li>
                    <li><strong>Ask about artists:</strong> Inquire about an artist's background, exhibition history, and career trajectory.</li>
                    <li><strong>Negotiate thoughtfully:</strong> While some price flexibility may exist, approach negotiations respectfully.</li>
                    <li><strong>Consider logistics:</strong> Factor in shipping, insurance, and installation costs for purchased works.</li>
                </ul>
                
                <h2>For Artists</h2>
                
                <h3>Exhibiting at Fairs</h3>
                <ul>
                    <li><strong>Choose the right fair:</strong> Research which fairs align with your work and career stage.</li>
                    <li><strong>Apply through galleries:</strong> Most artists participate through gallery representation rather than individual applications.</li>
                    <li><strong>Prepare your materials:</strong> Have artist statements, CVs, and documentation of your work ready for interested parties.</li>
                    <li><strong>Network strategically:</strong> Use the opportunity to connect with collectors, curators, and other art professionals.</li>
                    <li><strong>Follow up:</strong> After the fair, maintain contact with people who showed interest in your work.</li>
                </ul>
                
                <h3>Visiting as an Artist</h3>
                <ul>
                    <li><strong>Research galleries:</strong> Identify galleries that might be a good fit for your work.</li>
                    <li><strong>Observe presentation:</strong> Note how work similar to yours is displayed and marketed.</li>
                    <li><strong>Make connections:</strong> Introduce yourself to gallerists, but be mindful of their primary focus on collectors during the fair.</li>
                </ul>
                
                <h2>Notable Art Fairs</h2>
                <p>While there are hundreds of art fairs globally, some of the most influential include:</p>
                <ul>
                    <li><strong>Art Basel:</strong> With editions in Basel, Miami Beach, and Hong Kong</li>
                    <li><strong>Frieze:</strong> London, New York, and Los Angeles</li>
                    <li><strong>TEFAF:</strong> Maastricht and New York</li>
                    <li><strong>Armory Show:</strong> New York</li>
                    <li><strong>FIAC:</strong> Paris</li>
                </ul>
                
                <p>Many cities also host excellent regional fairs that can be less overwhelming and offer opportunities to discover emerging artists.</p>
                
                <p>Art fairs can be exhilarating but exhausting events. With proper preparation and a strategic approach, you can make the most of these important gatherings in the art world calendar.</p>
            `,
            author: "Robert Chang",
            authorImage: "../assets/images/author-5.jpg",
            date: "2023-03-05",
            image: "../assets/images/blog-5.jpg",
            category: "events",
            tags: ["art fairs", "collecting", "events", "networking"],
            featured: false,
            readTime: 11
        },
        {
            id: "sustainable-art-practices",
            title: "Sustainable Art Practices for the Environmentally Conscious Artist",
            excerpt: "Exploring eco-friendly materials, techniques, and approaches for artists concerned about their environmental impact.",
            content: `
                <p>As awareness of environmental issues grows, many artists are reconsidering their materials and practices to reduce their ecological footprint. This article explores sustainable approaches to art-making that don't compromise on quality or creative expression.</p>
                
                <h2>Eco-Friendly Materials</h2>
                
                <h3>Paints and Mediums</h3>
                <ul>
                    <li><strong>Natural pigments:</strong> Made from earth, minerals, and plant materials, these have been used by artists for millennia.</li>
                    <li><strong>Water-based paints:</strong> Acrylics and watercolors generally have lower toxicity and VOC emissions than oil paints.</li>
                    <li><strong>Non-toxic oils:</strong> Some manufacturers now offer oil paints with lower toxicity and sustainable packaging.</li>
                    <li><strong>Milk paint:</strong> A biodegradable option made from milk protein, lime, and earth pigments.</li>
                </ul>
                
                <h3>Surfaces and Supports</h3>
                <ul>
                    <li><strong>Reclaimed wood:</strong> For panels, frames, and sculptures.</li>
                    <li><strong>Sustainable paper:</strong> Look for recycled, tree-free, or FSC-certified papers.</li>
                    <li><strong>Natural fabrics:</strong> Organic cotton, hemp, or linen canvases have less environmental impact than synthetic options.</li>
                    <li><strong>Found objects:</strong> Incorporating discarded materials not only reduces waste but can add conceptual depth to your work.</li>
                </ul>
                
                <h2>Studio Practices</h2>
                
                <h3>Waste Management</h3>
                <ul>
                    <li><strong>Proper disposal:</strong> Never pour paint or solvents down the drain. Research local hazardous waste disposal options.</li>
                    <li><strong>Reuse:</strong> Save scraps of paper, fabric, and other materials for future projects.</li>
                    <li><strong>Composting:</strong> Natural materials like paper, cotton, and plant-based glues can often be composted.</li>
                </ul>
                
                <h3>Energy and Resources</h3>
                <ul>
                    <li><strong>Natural lighting:</strong> Position your workspace to maximize natural light, reducing electricity use.</li>
                    <li><strong>Water conservation:</strong> Use containers for brush washing rather than running water.</li>
                    <li><strong>Energy-efficient equipment:</strong> For digital artists, consider the energy consumption of your devices.</li>
                </ul>
                
                <h2>Sustainable Approaches by Medium</h2>
                
                <h3>Printmaking</h3>
                <ul>
                    <li><strong>Non-toxic printmaking:</strong> Techniques like solar plate etching eliminate the need for harsh chemicals.</li>
                    <li><strong>Water-based inks:</strong> These offer an alternative to traditional petroleum-based options.</li>
                    <li><strong>Reclaimed matrices:</strong> Use recycled materials for plates and blocks.</li>
                </ul>
                
                <h3>Sculpture</h3>
                <ul>
                    <li><strong>Biodegradable materials:</strong> Consider clay, wood, or natural fibers.</li>
                    <li><strong>Reclaimed objects:</strong> Incorporate found materials and objects destined for landfills.</li>
                    <li><strong>Non-toxic adhesives:</strong> Look for natural glues or low-VOC options.</li>
                </ul>
                
                <h3>Digital Art</h3>
                <ul>
                    <li><strong>Energy consumption:</strong> Be mindful of the environmental impact of high-energy processes like rendering and mining cryptocurrency for NFTs.</li>
                    <li><strong>Sustainable printing:</strong> When creating physical outputs, choose eco-friendly papers and inks.</li>
                    <li><strong>Equipment lifecycle:</strong> Maintain and repair devices rather than frequently upgrading.</li>
                </ul>
                
                <h2>The Bigger Picture</h2>
                
                <h3>Conceptual Considerations</h3>
                <ul>
                    <li><strong>Environmental themes:</strong> Use your art to raise awareness about ecological issues.</li>
                    <li><strong>Ephemeral art:</strong> Consider creating work that is intentionally temporary or biodegradable.</li>
                    <li><strong>Quality over quantity:</strong> Focus on creating fewer, more meaningful pieces rather than mass production.</li>
                </ul>
                
                <h3>Community and Education</h3>
                <ul>
                    <li><strong>Skill sharing:</strong> Teach and learn sustainable techniques within your artistic community.</li>
                    <li><strong>Collective resources:</strong> Consider sharing studio space, tools, and materials to reduce individual consumption.</li>
                    <li><strong>Advocacy:</strong> Support initiatives promoting sustainability in the arts.</li>
                </ul>
                
                <p>Transitioning to more sustainable practices doesn't have to happen all at once. Even small changes can collectively make a significant difference. By thoughtfully considering the environmental impact of our artistic choices, we can create work that not only expresses our creative vision but also respects and protects the natural world that inspires us.</p>
            `,
            author: "Maya Patel",
            authorImage: "../assets/images/author-6.jpg",
            date: "2023-02-18",
            image: "../assets/images/blog-6.jpg",
            category: "tips",
            tags: ["sustainability", "eco-friendly", "materials", "tips"],
            featured: false,
            readTime: 13
        },
        {
            id: "art-therapy-benefits",
            title: "The Healing Power of Art: Understanding Art Therapy",
            excerpt: "Exploring how creating art can promote mental and emotional wellbeing, with insights from art therapists.",
            content: `
                <p>Art therapy harnesses the creative process to improve mental, emotional, and physical well-being. This therapeutic approach combines psychological theory with creative expression, offering a unique path to healing and self-discovery that doesn't always rely on verbal communication.</p>
                
                <h2>What Is Art Therapy?</h2>
                <p>Art therapy is a mental health profession that uses the creative process of art-making to improve psychological health and well-being. It's practiced by trained art therapists who hold advanced degrees in both art and therapy.</p>
                
                <p>"Art therapy differs from regular art-making in that the process is guided by a professional who can help clients explore and understand the psychological and emotional undertones in their art," explains Dr. Elena Ramirez, a licensed art therapist. "The focus isn't on creating aesthetically pleasing work but on using creative expression as a tool for insight, healing, and growth."</p>
                
                <h2>The Science Behind Art Therapy</h2>
                <p>Research has shown that creative expression can affect brain function in positive ways. Creating art can:</p>
                <ul>
                    <li>Reduce stress by lowering cortisol levels</li>
                    <li>Activate the reward center in the brain, releasing dopamine</li>
                    <li>Engage multiple brain regions, creating new neural pathways</li>
                    <li>Provide sensory experiences that can help process trauma stored in the body</li>
                </ul>
                
                <p>"When we create art, we're engaging both hemispheres of the brain," says neuropsychologist Dr. James Chen. "This integration can help process experiences that might be difficult to express verbally, especially traumatic memories that are often stored as sensory fragments rather than coherent narratives."</p>
                
                <h2>Who Can Benefit from Art Therapy?</h2>
                <p>Art therapy can be beneficial for people of all ages and backgrounds. It's particularly helpful for:</p>
                <ul>
                    <li>Children who may not have the vocabulary to express complex emotions</li>
                    <li>Individuals with trauma who find verbal processing overwhelming</li>
                    <li>People with certain neurological conditions or learning differences</li>
                    <li>Those experiencing depression, anxiety, or grief</li>
                    <li>Individuals with dementia or Alzheimer's disease</li>
                    <li>People in recovery from substance use disorders</li>
                </ul>
                
                <h2>Common Art Therapy Techniques</h2>
                
                <h3>Mandala Creation</h3>
                <p>Creating circular designs can promote focus and reflection. The repetitive, contained nature of mandalas can be calming for those experiencing anxiety.</p>
                
                <h3>Collage</h3>
                <p>"Collage is accessible even to those who don't consider themselves artistic," notes art therapist Sarah Williams. "The process of selecting and arranging existing images can reveal unconscious thoughts and feelings while reducing the pressure of creating something from scratch."</p>
                
                <h3>Visual Journaling</h3>
                <p>Combining images and words in a journal format can help track emotional patterns and progress over time.</p>
                
                <h3>Mask Making</h3>
                <p>Creating masks can explore concepts of identity, including how we present ourselves to the world versus how we feel internally.</p>
                
                <h2>Art Therapy vs. Therapeutic Art-Making</h2>
                <p>While formal art therapy should be conducted by a licensed professional, many people can benefit from incorporating therapeutic art-making into their self-care routines.</p>
                
                <p>"You don't need to be in formal therapy to experience the benefits of creative expression," says Williams. "Regular art-making can be a valuable complement to other mental health practices like meditation, exercise, and talk therapy."</p>
                
                <h3>Simple Ways to Practice Therapeutic Art at Home</h3>
                <ul>
                    <li>Set aside regular time for creative expression without judgment or expectations</li>
                    <li>Try different materials and techniques to find what feels most engaging</li>
                    <li>Focus on the process rather than the final product</li>
                    <li>Use prompts that explore emotions, such as "create something that represents how you feel today"</li>
                    <li>Consider keeping an art journal to track your emotional journey over time</li>
                </ul>
                
                <p>Whether pursued as formal therapy or personal practice, creative expression offers a powerful way to process emotions, gain insights, and promote healing. As Picasso once said, "Art washes away from the soul the dust of everyday life"—a sentiment that captures the transformative potential of the creative process.</p>
            `,
            author: "Dr. Elena Ramirez",
            authorImage: "../assets/images/author-7.jpg",
            date: "2023-02-03",
            image: "../assets/images/blog-7.jpg",
            category: "trends",
            tags: ["art therapy", "mental health", "wellness"],
            featured: false,
            readTime: 10
        },
        {
            id: "interview-marcus-rivera",
            title: "Breaking Boundaries: Marcus Rivera on Abstract Expression",
            excerpt: "Abstract artist Marcus Rivera discusses his creative process, influences, and the emotional power of non-representational art.",
            content: `
                <p>Marcus Rivera has established himself as one of the most compelling voices in contemporary abstract art. His bold, emotionally charged canvases have been exhibited in galleries across the United States and Europe, earning critical acclaim for their dynamic energy and psychological depth. We spoke with Marcus about his approach to abstraction, his creative journey, and what he hopes viewers take from his work.</p>
                
                <h2>Finding Abstraction</h2>
                <p>"I didn't start as an abstract artist," Marcus reveals. "My early training was quiteFinding Abstraction</h2>
                <p>"I didn't start as an abstract artist," Marcus reveals. "My early training was quite traditional. I studied figurative painting and was obsessed with mastering technique. But I always felt something was missing—there was an emotional dimension I couldn't capture through representation alone."</p>
                
                <p>The turning point came during a residency in Mexico City, where Marcus was deeply influenced by the muralists and the vibrant visual culture. "I began to understand that color and form could communicate directly with the viewer's subconscious in ways that representational art sometimes can't. That's when I started moving toward abstraction."</p>
                
                <h2>The Creative Process</h2>
                <p>When asked about his process, Marcus describes an approach that balances intuition with intention. "I usually begin with a feeling or memory rather than a visual reference. I might have a color relationship in mind, or a certain quality of movement, but I try not to plan too much beyond that."</p>
                
                <p>His canvases often start with bold, gestural marks in acrylic, which he then builds upon with layers of oil paint, sometimes incorporating collage elements or drawing media. "I work on multiple pieces simultaneously, and they inform each other. It's a conversation between the works."</p>
                
                <p>Music plays a crucial role in his studio practice. "I'm deeply influenced by jazz—the improvisation, the rhythm, the way musicians respond to each other. I try to bring that same sense of spontaneity and dialogue to my painting."</p>
                
                <h2>Emotional Resonance</h2>
                <p>Marcus's work is known for its emotional impact, something he considers central to his artistic mission. "Abstract art has this unique ability to bypass the intellect and connect directly with emotions. I'm interested in creating work that resonates on a visceral level—that you feel before you think about it."</p>
                
                <p>He rejects the notion that abstract art is inaccessible or elitist. "Everyone has an emotional response to color, to movement, to texture. These are universal human experiences. You don't need an art history degree to feel something when you stand in front of a painting."</p>
                
                <h2>Cultural Influences</h2>
                <p>As a Mexican-American artist, Marcus draws inspiration from both cultures. "I'm influenced by the bold colors and emotional directness of Mexican art, but also by American abstract expressionists like de Kooning and Joan Mitchell. I see my work as existing in a space between these traditions."</p>
                
                <p>He's particularly interested in exploring themes of identity and belonging. "There's a tension in my work between structure and chaos, between restraint and expression, that reflects my experience of navigating different cultural contexts."</p>
                
                <h2>Future Directions</h2>
                <p>Looking ahead, Marcus is experimenting with larger scales and installation-based work. "I'm interested in creating immersive environments where the viewer is surrounded by color and form. I want to explore how abstract art can transform physical space and alter our perception."</p>
                
                <p>He's also beginning to incorporate digital elements into his practice. "I'm not abandoning painting—it remains my primary medium—but I'm curious about how digital tools can extend the language of abstraction."</p>
                
                <p>For aspiring artists, Marcus offers this advice: "Develop your technical skills, study the masters, but also listen to your own voice. The most compelling art comes from an authentic place. And don't be afraid to change direction—sometimes the most interesting work happens when you step away from what you know."</p>
            `,
            author: "Michael Torres",
            authorImage: "../assets/images/author-2.jpg",
            date: "2023-01-20",
            image: "../assets/images/blog-8.jpg",
            category: "interviews",
            tags: ["interviews", "abstract art", "process"],
            featured: false,
            readTime: 14
        }
    ];

    // Get DOM elements
    const blogArticleSection = document.getElementById('blog-article');
    const allBlogPostsSection = document.getElementById('all-blog-posts');
    const blogContainer = document.getElementById('blog-container');
    const featuredPostContainer = document.getElementById('featured-post');
    const paginationContainer = document.getElementById('pagination');
    const prevPageBtn = document.getElementById('prev-page');
    const nextPageBtn = document.getElementById('next-page');
    const categoryFilter = document.getElementById('category-filter');
    const sortFilter = document.getElementById('sort-filter');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    // Debug: Log elements
    console.log("Elements loaded:", {
        blogArticleSection,
        allBlogPostsSection,
        blogContainer,
        featuredPostContainer
    });

    // Ensure DOM elements exist before proceeding
    if (!blogContainer) {
        console.error("Blog container not found!");
        return; // Exit if critical elements are missing
    }

    // Pagination state
    let currentPage = 1;
    const itemsPerPage = 6;
    let filteredPosts = [...allBlogPosts];

    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    
    // Debug: Log URL params
    console.log("URL params:", { postId });
    
    // Check if we're viewing a specific blog post
    if (postId) {
        // Show blog article, hide all posts
        if (blogArticleSection) blogArticleSection.style.display = 'block';
        if (allBlogPostsSection) allBlogPostsSection.style.display = 'none';
        
        // Find the post
        const post = allBlogPosts.find(p => p.id === postId);
        
        if (post) {
            renderBlogArticle(post);
            console.log("Rendering blog article:", post.title);
        } else {
            // Post not found, redirect to all posts
            console.error("Blog post not found:", postId);
            window.location.href = 'blog.html';
        }
    } else {
        // Show all posts, hide blog article
        if (blogArticleSection) blogArticleSection.style.display = 'none';
        if (allBlogPostsSection) allBlogPostsSection.style.display = 'block';
        
        // Apply filters and render
        console.log("Showing all blog posts");
        applyFilters();
    }

    // Apply filters and update display
    function applyFilters() {
        const category = categoryFilter ? categoryFilter.value : '';
        const sortBy = sortFilter ? sortFilter.value : 'newest';
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
        
        console.log("Applying filters:", { category, sortBy, searchTerm });
        
        // Filter by category
        filteredPosts = allBlogPosts.filter(post => {
            if (category && post.category !== category) return false;
            
            // Filter by search term
            if (searchTerm && 
                !post.title.toLowerCase().includes(searchTerm) && 
                !post.excerpt.toLowerCase().includes(searchTerm) && 
                !post.content.toLowerCase().includes(searchTerm)) {
                return false;
            }
            
            return true;
        });
        
        // Sort results
        try {
            switch(sortBy) {
                case 'newest':
                    filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
                    break;
                case 'oldest':
                    filteredPosts.sort((a, b) => new Date(a.date) - new Date(b.date));
                    break;
                case 'popular':
                    // For demo purposes, we'll just prioritize featured posts
                    filteredPosts.sort((a, b) => (b.featured === a.featured) ? 0 : b.featured ? 1 : -1);
                    break;
            }
        } catch (err) {
            console.error("Error sorting posts:", err);
        }
        
        console.log("Filtered posts:", filteredPosts.length);
        
        // Reset to first page and render
        currentPage = 1;
        renderFeaturedPost();
        renderBlogPosts();
        renderPagination();
    }

    // Render featured post
    function renderFeaturedPost() {
        console.log("Rendering featured post...");
        
        // Ensure container exists
        if (!featuredPostContainer) {
            console.error("Featured post container not found!");
            return;
        }
        
        // Find featured post (first one in filtered list that is marked as featured)
        const featuredPost = filteredPosts.find(post => post.featured);
        
        if (featuredPost) {
            const formattedDate = formatDate(featuredPost.date);
            
            featuredPostContainer.innerHTML = `
                <div class="featured-post-image">
                    <img src="${featuredPost.image}" alt="${featuredPost.title}">
                </div>
                <div class="featured-post-content">
                    <div class="post-meta">
                        <span class="post-category">${capitalizeFirstLetter(featuredPost.category)}</span>
                        <span class="post-date">${formattedDate}</span>
                        <span class="post-read-time">${featuredPost.readTime} min read</span>
                    </div>
                    <h2 class="post-title">${featuredPost.title}</h2>
                    <p class="post-excerpt">${featuredPost.excerpt}</p>
                    <div class="post-author">
                        <img src="${featuredPost.authorImage}" alt="${featuredPost.author}">
                        <span>${featuredPost.author}</span>
                    </div>
                    <a href="blog.html?id=${featuredPost.id}" class="read-more">Read Article</a>
                </div>
            `;
        } else {
            // No featured post
            featuredPostContainer.style.display = 'none';
        }
    }

    // Render blog posts for current page
    function renderBlogPosts() {
        console.log("Rendering blog posts...");
        
        // Ensure container exists
        if (!blogContainer) {
            console.error("Blog container not found!");
            return;
        }
        
        // Clear container
        blogContainer.innerHTML = '';
        
        // Calculate start and end indices
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, filteredPosts.length);
        
        console.log("Pagination:", { currentPage, startIndex, endIndex, total: filteredPosts.length });
        
        // Get current page items (excluding featured post on first page)
        let currentItems = filteredPosts.slice(startIndex, endIndex);
        
        // If we're on the first page and have a featured post, remove it from the grid
        if (currentPage === 1) {
            const featuredPostIndex = currentItems.findIndex(post => post.featured);
            if (featuredPostIndex !== -1) {
                currentItems.splice(featuredPostIndex, 1);
                
                // Add one more item to maintain the grid
                if (endIndex < filteredPosts.length) {
                    currentItems.push(filteredPosts[endIndex]);
                }
            }
        }
        
        // Render items
        if (currentItems.length > 0) {
            currentItems.forEach(post => {
                const formattedDate = formatDate(post.date);
                
                const blogCard = document.createElement('div');
                blogCard.className = 'blog-card';
                blogCard.innerHTML = `
                    <div class="blog-image">
                        <img src="${post.image}" alt="${post.title}">
                        <div class="blog-category">${capitalizeFirstLetter(post.category)}</div>
                    </div>
                    <div class="blog-content">
                        <div class="blog-meta">
                            <span class="blog-date">${formattedDate}</span>
                            <span class="blog-read-time">${post.readTime} min read</span>
                        </div>
                        <h3 class="blog-title">${post.title}</h3>
                        <p class="blog-excerpt">${post.excerpt}</p>
                        <div class="blog-footer">
                            <div class="blog-author">
                                <img src="${post.authorImage}" alt="${post.author}">
                                <span>${post.author}</span>
                            </div>
                            <a href="blog.html?id=${post.id}" class="read-more">Read More</a>
                        </div>
                    </div>
                `;
                blogContainer.appendChild(blogCard);
            });
        } else {
            // No results
            blogContainer.innerHTML = `
                <div class="no-results">
                    <h3>No blog posts found</h3>
                    <p>Try adjusting your filters or search terms</p>
                </div>
            `;
        }
    }

    // Render pagination
    function renderPagination() {
        console.log("Rendering pagination...");
        
        // Ensure container exists
        if (!paginationContainer || !prevPageBtn || !nextPageBtn) {
            console.error("Pagination elements not found!");
            return;
        }
        
        // Calculate total pages
        const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
        
        console.log("Pagination:", { currentPage, totalPages });
        
        // Clear pagination (except prev/next buttons)
        const pageNumbers = paginationContainer.querySelectorAll('.pagination-item');
        pageNumbers.forEach(item => item.remove());
        
        // Add page numbers
        for (let i = 1; i <= totalPages; i++) {
            const pageItem = document.createElement('div');
            pageItem.className = `pagination-item ${i === currentPage ? 'active' : ''}`;
            pageItem.textContent = i;
            pageItem.addEventListener('click', () => {
                currentPage = i;
                renderBlogPosts();
                renderPagination();
                window.scrollTo(0, 0);
            });
            
            // Insert before next button
            paginationContainer.insertBefore(pageItem, nextPageBtn);
        }
        
        // Update prev/next buttons
        prevPageBtn.classList.toggle('disabled', currentPage === 1);
        nextPageBtn.classList.toggle('disabled', currentPage === totalPages || totalPages === 0);
    }

    // Render blog article
    function renderBlogArticle(post) {
        console.log("Rendering blog article:", post.title);
        
        // Ensure container exists
        if (!blogArticleSection) {
            console.error("Blog article section not found!");
            return;
        }
        
        const formattedDate = formatDate(post.date);
        
        // Create article HTML
        const articleHTML = `
            <div class="container">
                <div class="article-header">
                    <div class="article-meta">
                        <span class="article-category">${capitalizeFirstLetter(post.category)}</span>
                        <span class="article-date">${formattedDate}</span>
                        <span class="article-read-time">${post.readTime} min read</span>
                    </div>
                    <h1 class="article-title">${post.title}</h1>
                    <div class="article-author">
                        <img src="${post.authorImage}" alt="${post.author}">
                        <span>${post.author}</span>
                    </div>
                </div>
                
                <div class="article-featured-image">
                    <img src="${post.image}" alt="${post.title}">
                </div>
                
                <div class="article-content">
                    ${post.content}
                </div>
                
                <div class="article-tags">
                    ${post.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
                </div>
                
                <div class="article-share">
                    <h3>Share this article</h3>
                    <div class="share-buttons">
                        <button class="share-button facebook">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Facebook
                        </button>
                        <button class="share-button twitter">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Twitter
                        </button>
                        <button class="share-button pinterest">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 12C8 13.5913 8.63214 15.1174 9.75736 16.2426C10.8826 17.3679 12.4087 18 14 18C15.5913 18 17.1174 17.3679 18.2426 16.2426C19.3679 15.1174 20 13.5913 20 12C20 10.4087 19.3679 8.88258 18.2426 7.75736C17.1174 6.63214 15.5913 6 14 6C12.4087 6 10.8826 6.63214 9.75736 7.75736C8.63214 8.88258 8 10.4087 8 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14 9C14 9 13 9 12 10C11 11 11 12 11 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10 16L9 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Pinterest
                        </button>
                    </div>
                </div>
                
                <div class="related-posts">
                    <h2>You might also like</h2>
                    <div class="related-posts-grid">
                        ${getRelatedPosts(post, 3).map(relatedPost => `
                            <div class="related-post">
                                <div class="related-post-image">
                                    <img src="${relatedPost.image}" alt="${relatedPost.title}">
                                </div>
                                <h3 class="related-post-title">${relatedPost.title}</h3>
                                <a href="blog.html?id=${relatedPost.id}" class="read-more">Read Article</a>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="back-button">
                    <a href="blog.html" class="btn-secondary">Back to All Posts</a>
                </div>
            </div>
        `;
        
        // Set article HTML
        blogArticleSection.innerHTML = articleHTML;
        
        // Add event listeners for share buttons
        const shareButtons = blogArticleSection.querySelectorAll('.share-button');
        shareButtons.forEach(button => {
            button.addEventListener('click', function() {
                const platform = this.classList[1]; // facebook, twitter, etc.
                shareArticle(platform, post);
            });
        });
    }

    // Get related posts based on category and tags
    function getRelatedPosts(currentPost, count) {
        // Filter out the current post
        const otherPosts = allBlogPosts.filter(post => post.id !== currentPost.id);
        
        // Score posts based on matching categories and tags
        const scoredPosts = otherPosts.map(post => {
            let score = 0;
            
            // Same category
            if (post.category === currentPost.category) {
                score += 3;
            }
            
            // Matching tags
            const matchingTags = post.tags.filter(tag => currentPost.tags.includes(tag));
            score += matchingTags.length * 2;
            
            return { post, score };
        });
        
        // Sort by score (highest first)
        scoredPosts.sort((a, b) => b.score - a.score);
        
        // Return top N posts
        return scoredPosts.slice(0, count).map(item => item.post);
    }

    // Share article (mock function)
    function shareArticle(platform, post) {
        const url = window.location.href;
        const title = post.title;
        
        // In a real implementation, you would use the appropriate sharing API
        console.log(`Sharing "${title}" on ${platform}`);
        console.log(`URL: ${url}`);
        
        // For demo purposes, just show an alert
        alert(`Article would be shared on ${platform} (this is a demo)`);
    }

    // Helper function to format date
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }

    // Helper function to capitalize first letter
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // Event listeners
    if (categoryFilter) {
        categoryFilter.addEventListener('change', applyFilters);
    }
    
    if (sortFilter) {
        sortFilter.addEventListener('change', applyFilters);
    }
    
    if (searchButton) {
        searchButton.addEventListener('click', applyFilters);
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                applyFilters();
            }
        });
    }
    
    if (prevPageBtn) {
        prevPageBtn.addEventListener('click', function() {
            if (currentPage > 1) {
                currentPage--;
                renderBlogPosts();
                renderPagination();
                window.scrollTo(0, 0);
            }
        });
    }
    
    if (nextPageBtn) {
        nextPageBtn.addEventListener('click', function() {
            const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
            if (currentPage < totalPages) {
                currentPage++;
                renderBlogPosts();
                renderPagination();
                window.scrollTo(0, 0);
            }
        });
    }
    
    // Initialize cart count (reused from artist.js)
    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const count = cart.reduce((total, item) => total + item.quantity, 0);
        const cartCountElement = document.querySelector('.cart-count');
        
        if (cartCountElement) {
            cartCountElement.textContent = count;
            cartCountElement.style.display = count > 0 ? 'flex' : 'none';
        }
    }
    
    // Initialize cart count
    updateCartCount();
    
    console.log("Blog.js loaded and initialized");
});