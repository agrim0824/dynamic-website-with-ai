# Development Guide

## Local Development Setup

### 1. Clone and Install

\`\`\`bash
git clone <repository-url>
cd bidright-auction
npm install
\`\`\`

### 2. Environment Setup

Create `.env.local`:
\`\`\`
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
\`\`\`

### 3. Run Development Server

\`\`\`bash
npm run dev
\`\`\`

Visit http://localhost:3000

## Development Workflow

### Creating New Pages

1. Create file in `app/` directory
2. Use server components by default
3. Add `"use client"` only when needed
4. Import components from `@/components`

### Adding API Routes

1. Create file in `app/api/`
2. Export async functions: GET, POST, PUT, DELETE
3. Use Supabase client for database operations
4. Handle errors appropriately

### Working with Supabase

\`\`\`typescript
// Server-side
import { createClient } from "@/lib/supabase/server"
const supabase = await createClient()

// Client-side
import { createClient } from "@/lib/supabase/client"
const supabase = createClient()
\`\`\`

### Using AI Features

\`\`\`typescript
import { generateText } from "ai"

const { text } = await generateText({
  model: "openai/gpt-4-mini",
  prompt: "Your prompt here",
  maxOutputTokens: 300,
})
\`\`\`

## Testing

\`\`\`bash
# Run linter
npm run lint

# Build for production
npm run build

# Start production server
npm start
\`\`\`

## Code Style

- Use TypeScript for type safety
- Follow React best practices
- Use Tailwind CSS for styling
- Keep components small and focused
- Add comments for complex logic

## Common Tasks

### Add New Auction Category

1. Update database schema
2. Add to category select in forms
3. Update filter options
4. Add category icon

### Implement New AI Feature

1. Create API route in `app/api/`
2. Use AI SDK with appropriate model
3. Create component to use the API
4. Add error handling

### Add Real-Time Feature

1. Set up Supabase Realtime subscription
2. Create custom hook for subscription
3. Update component state on changes
4. Handle connection errors

## Debugging

### Enable Debug Logging

\`\`\`typescript
console.log("[v0] Debug message:", variable)
\`\`\`

### Check Supabase Logs

1. Go to Supabase dashboard
2. Navigate to Logs section
3. Filter by error level

### Browser DevTools

- Use React DevTools for component inspection
- Check Network tab for API calls
- Monitor Console for errors

## Performance Tips

- Use `next/image` for images
- Implement code splitting
- Lazy load components
- Optimize database queries
- Use caching strategies

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Vercel AI SDK](https://sdk.vercel.ai/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
