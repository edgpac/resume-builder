// Vercel Serverless Function for GROQ AI Content Generation
// Path: /api/enhance-resume.js

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { section, currentContent, context } = req.body;
    
    if (!section || !currentContent) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const GROQ_API_KEY = process.env.GROQ_API_KEY;
    
    if (!GROQ_API_KEY) {
      return res.status(500).json({ 
        error: 'GROQ API key not configured',
        message: 'Please add GROQ_API_KEY to your Vercel environment variables'
      });
    }

    // Create prompt based on section
    let prompt = '';
    
    switch(section) {
      case 'summary':
        prompt = `Enhance this professional summary for a resume. Make it more compelling and professional while keeping it concise (3-4 sentences). Current summary: "${currentContent}"`;
        break;
      case 'experience':
        prompt = `Improve this work experience description for a resume. Make it more impactful with action verbs and quantifiable achievements. Current description: "${currentContent}"`;
        break;
      case 'skills':
        prompt = `Suggest 5-7 relevant professional skills based on this context: "${currentContent}". Return only the skills as a comma-separated list.`;
        break;
      default:
        prompt = `Improve this resume content professionally: "${currentContent}"`;
    }

    // Add context if provided
    if (context) {
      prompt += ` Context: ${context}`;
    }

    // Call GROQ API
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'mixtral-8x7b-32768',
        messages: [
          {
            role: 'system',
            content: 'You are a professional resume writer and career coach. Provide clear, concise, and impactful resume content.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || 'GROQ API error');
    }

    const data = await response.json();
    const enhancedContent = data.choices[0]?.message?.content?.trim();

    if (!enhancedContent) {
      throw new Error('No content generated');
    }

    return res.status(200).json({
      success: true,
      enhanced: enhancedContent,
      original: currentContent
    });

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      error: 'Failed to enhance content',
      message: error.message
    });
  }
}
