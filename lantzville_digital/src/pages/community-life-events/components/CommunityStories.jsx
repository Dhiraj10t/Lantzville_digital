import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CommunityStories = () => {
  const [selectedStory, setSelectedStory] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const stories = [
    {
      id: 1,
      title: "Local Teacher Wins Provincial Excellence Award",
      category: "Achievement",
      author: "Community Relations",
      publishDate: "2025-08-10",
      readTime: "3 min read",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800",
      excerpt: "Sarah Mitchell from Lantzville Elementary receives recognition for innovative teaching methods.",
      content: `Sarah Mitchell, a Grade 4 teacher at Lantzville Elementary School, has been awarded the Provincial Excellence in Education Award for her innovative approach to environmental education.

Over the past three years, Sarah has transformed her classroom into a living laboratory where students learn about sustainability through hands-on projects. Her "Green Classroom Initiative" has students growing their own vegetables, composting organic waste, and monitoring local water quality. "I believe children learn best when they can see the real-world impact of their studies,"says Sarah. "When my students test the water quality in our local streams and present their findings to the municipal council, they're not just learning science – they're becoming engaged citizens." The award comes with a $5,000 grant that Sarah plans to use to expand the program to other grades."This recognition isn't just mine – it belongs to our entire school community, including the parents and local businesses who have supported our initiatives." Mayor Johnson commented,"Sarah represents the best of our community – someone who goes above and beyond to make a positive impact. Her students are lucky to have such a dedicated educator."`,
      tags: ["Education", "Environment", "Award", "Innovation"],
      featured: true,
      likes: 89,
      comments: 23
    },
    {
      id: 2,
      title: "Community Garden Brings Neighbors Together",
      category: "Community Project",
      author: "Maria Santos",
      publishDate: "2025-08-08",
      readTime: "4 min read",
      image: "https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&w=800",
      excerpt: "The new Kin Hut Community Garden is fostering connections and fresh produce.",
      content: `What started as an idea shared over coffee has blossomed into Lantzville's newest community gathering place. The Kin Hut Community Garden, officially opened last month, is already bringing neighbors together in unexpected ways.The garden features 30 individual plots and several shared spaces, including a children's learning area and a herb spiral that anyone can harvest from. But according to coordinator Janet Williams, the real magic happens in the conversations between the rows. "I've lived in Lantzville for 15 years, and I've met more neighbors in the past month than in all that time combined," says plot holder David Chen. "There's something about working with your hands in the soil that breaks down barriers."

The garden has become a hub for knowledge sharing, with experienced gardeners mentoring newcomers and families teaching children about where food comes from. Weekly "Garden Talks" cover topics from composting to companion planting.

Local businesses have also embraced the project. Lantzville Hardware donated tools and supplies, while Coastal Coffee provides refreshments for volunteer work days.

"This garden represents what community is all about," reflects Williams. "It's not just about growing vegetables – it's about growing connections."

The garden is open to all residents, with plots available for a modest annual fee that covers water and basic maintenance.`,
      tags: ["Community", "Gardening", "Neighbors", "Sustainability"],
      featured: false,
      likes: 67,
      comments: 18
    },
    {
      id: 3,
      title: "Young Entrepreneur Opens Eco-Friendly Cleaning Service",
      category: "Business Spotlight",
      author: "Business Development",
      publishDate: "2025-08-05",
      readTime: "2 min read",
      image: "https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=800",
      excerpt: "16-year-old Emma Rodriguez launches \'Clean & Green Lantzville\' with all-natural products.",
      content: `At just 16 years old, Emma Rodriguez is already making waves in the local business community with her eco-friendly cleaning service, "Clean & Green Lantzville."

What began as a way to earn money for university has evolved into a mission to provide chemical-free cleaning solutions to local families. Emma creates her own cleaning products using ingredients like white vinegar, baking soda, and essential oils.

"I started this business because I saw how many harsh chemicals people were using in their homes," explains Emma. "I wanted to offer an alternative that's safe for families, pets, and the environment."

Emma's business has grown through word-of-mouth recommendations, and she now serves 25 regular clients throughout Lantzville. She's also partnered with several local businesses to provide office cleaning services.

The young entrepreneur credits the municipal business support program for helping her navigate licensing requirements and develop a business plan. "The staff at the municipal office were incredibly helpful in getting me started legally and safely."

Emma plans to use her earnings to study environmental science at university, with the goal of returning to Lantzville to work in municipal sustainability programs.

"Emma is exactly the kind of innovative thinking we want to encourage in our young people," says Economic Development Officer Tom Bradley. "She's identified a need in the community and created a solution that benefits everyone."

Clean & Green Lantzville is currently accepting new clients and can be reached through the municipal business directory.`,
      tags: ["Youth", "Business", "Environment", "Innovation"],
      featured: true,
      likes: 94,
      comments: 31
    },
    {
      id: 4,
      title: "Volunteer Fire Department Celebrates 50 Years",
      category: "Milestone",
      author: "Fire Chief Robert Kim",
      publishDate: "2025-08-03",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/6266304/pexels-photo-6266304.jpeg?auto=compress&cs=tinysrgb&w=800",
      excerpt: "Five decades of dedicated service protecting our community through volunteer commitment.",
      content: `This month marks a significant milestone for Lantzville as our Volunteer Fire Department celebrates 50 years of dedicated service to the community.

Founded in 1975 with just 12 volunteers and a single fire truck, the department has grown to include 28 active volunteers operating from two stations with modern equipment and vehicles.

"The commitment of our volunteers over five decades has been extraordinary," reflects Fire Chief Robert Kim, who has served for 22 years. "These men and women leave their families, jobs, and warm beds to respond to emergencies, often in dangerous conditions."

The department responds to approximately 150 calls per year, ranging from structure fires and vehicle accidents to medical emergencies and rescue operations. Beyond emergency response, volunteers dedicate hundreds of hours annually to training, equipment maintenance, and community education programs.

Founding member Bill Harrison, now 78, recalls the early days: "We had more enthusiasm than equipment, but we made it work. The community supported us from day one, and that support has never wavered."

Today's volunteers come from all walks of life – teachers, mechanics, retirees, and students – united by their commitment to community service. The department maintains mutual aid agreements with neighboring communities and participates in regional training exercises.

The celebration will culminate with a community open house on August 30th, featuring equipment demonstrations, safety education, and recognition of past and present volunteers.

"Our volunteers are the backbone of community safety," says Mayor Johnson. "Their selfless service deserves our deepest gratitude and continued support."

The department is always seeking new volunteers. Training is provided, and the only requirements are a willingness to serve and commitment to the community.`,
      tags: ["Fire Department", "Volunteers", "Anniversary", "Community Service"],
      featured: false,
      likes: 156,
      comments: 42
    },
    {
      id: 5,
      title: "Senior Center Art Program Showcases Local Talent",
      category: "Arts & Culture",
      author: "Arts Coordinator",
      publishDate: "2025-07-30",
      readTime: "3 min read",
      image: "https://images.pexels.com/photos/1572386/pexels-photo-1572386.jpeg?auto=compress&cs=tinysrgb&w=800",
      excerpt: "Monthly art exhibitions highlight the creative talents of Lantzville\'s senior community.",
      content: `The walls of the Lantzville Community Center are alive with color and creativity, thanks to the Senior Center Art Program that has been quietly nurturing artistic talent among our older residents.

Launched two years ago, the program offers weekly art classes in watercolor, acrylic painting, and mixed media. What started with eight participants has grown to over 30 active artists, ranging in age from 62 to 89.

"Art has no expiration date," says program coordinator Helen Chang. "Some of our participants are discovering their artistic abilities for the first time, while others are rekindling passions they set aside decades ago."

The monthly exhibitions have become popular community events, drawing visitors of all ages to view and purchase original artwork. Proceeds from sales go back into the program to purchase supplies and fund special workshops.

Participant Margaret Foster, 74, never picked up a paintbrush until joining the program. "I thought I was too old to learn something new, but this group proved me wrong. Now I paint almost every day, and my grandchildren are amazed by what Grandma can create." The program has also fostered unexpected friendships."We've become like a family," notes participant George Thompson, 81. "We critique each other's work, share techniques, and celebrate each other's progress."

Local businesses have embraced the program, with several displaying rotating exhibitions of senior artwork. The Coastal Coffee Roasters features a different artist each month, while the library hosts quarterly group shows.

The next exhibition, "Seasons of Life," opens September 15th at the Community Center and will run through October. The public is invited to the opening reception on September 15th at 2:00 PM.

Classes are held Wednesdays from 1:00-3:00 PM and are open to all residents 55 and older. No experience necessary – just bring your creativity and enthusiasm.`,
      tags: ["Seniors", "Arts", "Community Center", "Exhibition"],
      featured: false,
      likes: 73,
      comments: 19
    }
  ];

  const categories = ["All", "Achievement", "Community Project", "Business Spotlight", "Milestone", "Arts & Culture"];

  const filteredStories = selectedCategory === "All" 
    ? stories 
    : stories?.filter(story => story?.category === selectedCategory);

  const featuredStories = stories?.filter(story => story?.featured);

  const getCategoryColor = (category) => {
    const colors = {
      "Achievement": "bg-yellow-100 text-yellow-800",
      "Community Project": "bg-green-100 text-green-800",
      "Business Spotlight": "bg-blue-100 text-blue-800",
      "Milestone": "bg-purple-100 text-purple-800",
      "Arts & Culture": "bg-pink-100 text-pink-800"
    };
    return colors?.[category] || "bg-gray-100 text-gray-800";
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-CA', { 
      month: 'long', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return "1 day ago";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 14) return "1 week ago";
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return formatDate(dateString);
  };

  return (
    <div className="bg-white rounded-lg shadow-brand p-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Community Stories</h2>
          <p className="text-muted-foreground">Celebrating our residents and their achievements</p>
        </div>
        <div className="flex items-center space-x-3 mt-4 lg:mt-0">
          <Button variant="outline" iconName="PenTool" iconPosition="left">
            Submit Story
          </Button>
          <Button variant="default" iconName="Bell" iconPosition="left">
            Subscribe
          </Button>
        </div>
      </div>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories?.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              selectedCategory === category
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      {/* Featured Stories */}
      {selectedCategory === "All" && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
            <Icon name="Star" size={20} className="mr-2 text-yellow-500" />
            Featured Stories
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredStories?.slice(0, 2)?.map((story) => (
              <div
                key={story?.id}
                className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20 rounded-lg overflow-hidden cursor-pointer hover:shadow-elevated transition-all duration-300"
                onClick={() => setSelectedStory(story)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={story?.image}
                    alt={story?.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 rounded-md text-xs font-medium ${getCategoryColor(story?.category)}`}>
                      {story?.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-md text-xs font-medium">
                    Featured
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-foreground text-lg mb-2 leading-tight">
                    {story?.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                    {story?.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <span>{getTimeAgo(story?.publishDate)}</span>
                      <span>{story?.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <Icon name="Heart" size={16} className="mr-1" />
                        <span>{story?.likes}</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="MessageCircle" size={16} className="mr-1" />
                        <span>{story?.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Stories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStories?.map((story) => (
          <div
            key={story?.id}
            className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-elevated transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedStory(story)}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={story?.image}
                alt={story?.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className={`px-2 py-1 rounded-md text-xs font-medium ${getCategoryColor(story?.category)}`}>
                  {story?.category}
                </span>
              </div>
              {story?.featured && (
                <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-md text-xs font-medium">
                  Featured
                </div>
              )}
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-foreground text-lg mb-2 leading-tight">
                {story?.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                {story?.excerpt}
              </p>

              <div className="flex items-center text-sm text-muted-foreground mb-3">
                <Icon name="User" size={16} className="mr-1" />
                <span className="mr-3">{story?.author}</span>
                <Icon name="Clock" size={16} className="mr-1" />
                <span>{story?.readTime}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  {getTimeAgo(story?.publishDate)}
                </span>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Icon name="Heart" size={16} className="mr-1" />
                    <span>{story?.likes}</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="MessageCircle" size={16} className="mr-1" />
                    <span>{story?.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {filteredStories?.length === 0 && (
        <div className="text-center py-12">
          <Icon name="FileText" size={48} className="mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">No stories found</h3>
          <p className="text-muted-foreground">Try selecting a different category to see more stories.</p>
        </div>
      )}
      {/* Story Details Modal */}
      {selectedStory && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedStory?.image}
                alt={selectedStory?.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedStory(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
              >
                <Icon name="X" size={20} />
              </button>
              <div className="absolute bottom-4 left-4">
                <span className={`px-3 py-1 rounded-md text-sm font-medium ${getCategoryColor(selectedStory?.category)}`}>
                  {selectedStory?.category}
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-foreground mb-4">
                  {selectedStory?.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Icon name="User" size={16} className="mr-1" />
                    <span>{selectedStory?.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Calendar" size={16} className="mr-1" />
                    <span>{formatDate(selectedStory?.publishDate)}</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Clock" size={16} className="mr-1" />
                    <span>{selectedStory?.readTime}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="outline" iconName="Heart" iconPosition="left">
                      {selectedStory?.likes}
                    </Button>
                    <Button size="sm" variant="outline" iconName="MessageCircle" iconPosition="left">
                      {selectedStory?.comments}
                    </Button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="ghost" iconName="Share" iconPosition="left">
                      Share
                    </Button>
                    <Button size="sm" variant="ghost" iconName="Bookmark" iconPosition="left">
                      Save
                    </Button>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none mb-6">
                <p className="text-lg text-muted-foreground mb-6 font-medium">
                  {selectedStory?.excerpt}
                </p>
                <div className="text-foreground leading-relaxed whitespace-pre-line">
                  {selectedStory?.content}
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="font-semibold text-foreground mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedStory?.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-muted text-muted-foreground rounded-md text-sm hover:bg-muted/80 cursor-pointer transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunityStories;