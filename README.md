# BidRight - Premium Auction Platform

A modern, full-stack auction platform built with Next.js, Supabase, and AI integration. Features real-time bidding, AI-powered product descriptions, intelligent recommendations, and beautiful media galleries.

## Features

### Core Functionality
- **Real-Time Auctions**: Live bidding with countdown timers and instant bid updates
- **User Authentication**: Secure email/password authentication with Supabase
- **Advanced Search & Filters**: Filter by category, price range, condition, and sort options
- **Watchlist System**: Save favorite items for later bidding
- **Seller Profiles**: View seller ratings, sales history, and contact information

### AI-Powered Features
- **AI Description Generator**: Automatically generate compelling product descriptions
- **Smart Recommendations**: Get personalized auction suggestions based on viewing history
- **AI Title Suggestions**: Generate SEO-friendly auction titles
- **Product Image Generation**: Create professional product images with AI

### Media & Gallery
- **Multi-Image Gallery**: Browse multiple product images with thumbnails
- **Video Support**: Upload and display product videos
- **Fullscreen Mode**: View images in fullscreen with navigation
- **Image Counter**: Track position in image gallery

### Real-Time Features
- **Live Bid Counter**: See bid updates in real-time
- **Auction Countdown**: Live countdown timers for auction endings
- **Secure Bidding**: SSL-encrypted payment information

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS v4, shadcn/ui components
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **AI**: Vercel AI SDK with OpenAI and Google models
- **Real-Time**: Supabase Realtime (WebSocket support)
- **Deployment**: Vercel

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- Supabase account
- Vercel account (for deployment)

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd bidright-auction
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Set up environment variables:
Create a `.env.local` file with:
\`\`\`
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
\`\`\`

4. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

\`\`\`
app/
├── api/                    # API routes
│   ├── bids/              # Bidding endpoints
│   ├── auctions/          # Auction data endpoints
│   ├── watchlist/         # Watchlist management
│   ├── generate-description/  # AI description generation
│   ├── get-recommendations/   # AI recommendations
│   └── generate-product-image/ # AI image generation
├── auth/                  # Authentication pages
│   ├── login/
│   ├── signup/
│   ├── signup-success/
│   └── callback/
├── auctions/              # Auction pages
│   ├── page.tsx          # Auctions listing
│   └── [id]/page.tsx     # Auction details
├── categories/            # Categories page
├── profile/              # User profile
├── sell/                 # Sell item page
└── layout.tsx            # Root layout

components/
├── navbar.tsx            # Navigation bar
├── footer.tsx            # Footer
├── auction-card.tsx      # Auction card component
├── media-gallery.tsx     # Image gallery
├── advanced-bid-panel.tsx # Bidding interface
├── advanced-search.tsx   # Search and filters
├── ai-description-generator.tsx
├── auction-recommendations.tsx
├── real-time-bid-counter.tsx
├── image-generator.tsx
├── video-gallery.tsx
└── performance-optimizer.tsx

lib/
├── supabase/
│   ├── client.ts         # Browser client
│   ├── server.ts         # Server client
│   └── middleware.ts     # Auth middleware
\`\`\`

## Database Schema

### Tables
- **users**: User profiles and authentication
- **auctions**: Auction listings
- **bids**: Bid history
- **auction_images**: Product images
- **categories**: Auction categories
- **watchlist**: User watchlist items

## API Endpoints

### Auctions
- `GET /api/auctions` - Get auctions with filters
- `POST /api/auctions` - Create new auction

### Bids
- `GET /api/bids?auctionId=id` - Get auction bids
- `POST /api/bids` - Place a bid

### Watchlist
- `GET /api/watchlist` - Get user watchlist
- `POST /api/watchlist` - Add to watchlist
- `DELETE /api/watchlist?id=id` - Remove from watchlist

### AI Features
- `POST /api/generate-description` - Generate product description
- `POST /api/get-recommendations` - Get recommendations
- `POST /api/generate-product-image` - Generate product image

## Authentication Flow

1. User signs up with email and password
2. Confirmation email is sent
3. User clicks confirmation link
4. Session is created and user is authenticated
5. Middleware maintains session across requests

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy with one click

\`\`\`bash
vercel deploy
\`\`\`

### Environment Variables Required
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Performance Optimizations

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- CSS minification with Tailwind CSS v4
- SWC minification for faster builds
- Optimized package imports
- Core Web Vitals monitoring

## Security Features

- Row Level Security (RLS) on all database tables
- SSL encryption for payments
- Secure session management
- CSRF protection
- Input validation and sanitization

## Future Enhancements

- Payment processing with Stripe
- Email notifications for bids
- Advanced analytics dashboard
- Mobile app with React Native
- WebSocket real-time updates
- Auction auto-bidding
- Seller verification system

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For support, email support@bidright.com or visit our help center.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Database by [Supabase](https://supabase.com/)
- AI powered by [Vercel AI SDK](https://sdk.vercel.ai/)
